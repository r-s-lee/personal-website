import React, { useCallback, useEffect, useRef, useState } from "react";

const BOARD_SIZE = 15; // cells per side
const DEFAULT_WIDTH = 360; // board footprint in px
const TICK_MS = 140; // movement speed
const INITIAL_SNAKE = [{ x: 7, y: 7 }];
const INITIAL_DIR = { x: 0, y: -1 }; // moving up

function randomFood(snake) {
  while (true) {
    const food = {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE),
    };
    if (!snake.some((s) => s.x === food.x && s.y === food.y)) return food;
  }
}

function SnakeGame({ width = DEFAULT_WIDTH }) {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(() => randomFood(INITIAL_SNAKE));
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Direction lives in a ref so the interval always reads the latest value,
  // and so a keypress can't reverse the snake within a single tick.
  const dirRef = useRef(INITIAL_DIR);
  const nextDirRef = useRef(INITIAL_DIR);

  const score = snake.length - INITIAL_SNAKE.length;

  const changeDirection = useCallback((dir) => {
    const current = dirRef.current;
    // Ignore reversals onto the snake's own neck.
    if (dir.x === -current.x && dir.y === -current.y) return;
    nextDirRef.current = dir;
  }, []);

  const resetGame = useCallback(() => {
    setSnake(INITIAL_SNAKE);
    setFood(randomFood(INITIAL_SNAKE));
    dirRef.current = INITIAL_DIR;
    nextDirRef.current = INITIAL_DIR;
    setGameOver(false);
    setRunning(true);
  }, []);

  // Keyboard controls.
  useEffect(() => {
    const onKeyDown = (e) => {
      const map = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
      };
      const dir = map[e.key];
      if (!dir) return;
      e.preventDefault();
      if (!running && !gameOver) setRunning(true);
      changeDirection(dir);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [running, gameOver, changeDirection]);

  // Game loop.
  useEffect(() => {
    if (!running) return undefined;
    const id = setInterval(() => {
      dirRef.current = nextDirRef.current;
      setSnake((prev) => {
        const dir = dirRef.current;
        const head = { x: prev[0].x + dir.x, y: prev[0].y + dir.y };

        // Wall or self collision ends the game.
        const hitWall =
          head.x < 0 ||
          head.x >= BOARD_SIZE ||
          head.y < 0 ||
          head.y >= BOARD_SIZE;
        const hitSelf = prev.some((s) => s.x === head.x && s.y === head.y);
        if (hitWall || hitSelf) {
          setGameOver(true);
          setRunning(false);
          return prev;
        }

        const ate = head.x === food.x && head.y === food.y;
        const newSnake = ate ? [head, ...prev] : [head, ...prev.slice(0, -1)];
        if (ate) setFood(randomFood(newSnake));
        return newSnake;
      });
    }, TICK_MS);
    return () => clearInterval(id);
  }, [running, food]);

  const isSnake = (x, y) => snake.some((s) => s.x === x && s.y === y);
  const isHead = (x, y) => snake[0].x === x && snake[0].y === y;
  const isFood = (x, y) => food.x === x && food.y === y;

  return (
    <div className="mx-auto mt-4 w-fit">
      <div className="mb-3 flex items-center justify-center gap-4">
        <span className="text-md">
          Score: <b>{score}</b>
        </span>
        <button
          type="button"
          onClick={resetGame}
          className="text-blue-600 underline"
        >
          {gameOver || !running ? "New game" : "Restart"}
        </button>
      </div>

      <div
        className="grid border border-slate-950 bg-slate-50"
        style={{
          gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
          width: `min(90vw, ${width}px)`,
          aspectRatio: "1 / 1",
        }}
      >
        {Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map((_, i) => {
          const x = i % BOARD_SIZE;
          const y = Math.floor(i / BOARD_SIZE);
          let cls = "";
          if (isHead(x, y)) cls = "bg-slate-950";
          else if (isSnake(x, y)) cls = "bg-slate-600";
          else if (isFood(x, y)) cls = "bg-blue-600 rounded-full";
          return <div key={i} className={cls} />;
        })}
      </div>

      {!running && !gameOver && (
        <p className="mt-3 text-center text-sm text-slate-600">
          Press an arrow key to start.
        </p>
      )}
      {gameOver && (
        <p className="mt-3 text-center text-md text-blue-600">
          Game over! Score: {score}
        </p>
      )}
    </div>
  );
}

export default SnakeGame;
