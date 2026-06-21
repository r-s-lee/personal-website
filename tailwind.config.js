/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      serif: ["CMU Serif", "Times New Roman"],
      sans: ["CMU Sans Serif", "Arial"],
    },
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        marquee: "marquee 4s linear infinite",
      },
    },
  },
  plugins: [],
};
