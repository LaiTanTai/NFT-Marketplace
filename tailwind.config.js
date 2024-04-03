/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        white: "0 0 14px #FFF",
      },
      backgroundColor: ["active"],
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
      backgroundClip: ["hover", "focus"],
    },
  },
  plugins: [],
};
