import React, { useState } from "react";
import GameBoy from "../assets/gameboy.png";

// Wraps content that should always reserve the same footprint, whether it's
// revealed or not. The children are always rendered (so they define the box
// size); when closed, an opaque cover with the toggle button sits on top.
function Collapsible({ label = "Show", children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="relative w-fit">
      {children}

      {!open && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-50">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative overflow-hidden text-blue-600"
          >
            {/* Animated text scrolling across the gameboy icon. */}
            <span className="pointer-events-none inset-x-0 top-1/3 flex justify-center">
              <span className="animate-marquee whitespace-nowrap text-xs font-semibold">
                to pass the time...
              </span>
            </span>
            <img src={GameBoy} className="w-24" alt={label} />
          </button>
        </div>
      )}

      {open && (
        // Close control is absolutely positioned so it doesn't add height.
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-1 top-1 z-20 flex h-6 w-6 items-center justify-center rounded-full text-lg leading-none text-slate-600 hover:bg-slate-100"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default Collapsible;
