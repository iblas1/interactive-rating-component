/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0e0e0e",
        brightDark: "#141519",
        gray: "#1f2630",
        darkGray: "#171e28",
        ballGray: "#262f38",
        letterWhite: "#707781",
        headerWhite: "#e9ecee",
        orange: "#fc7613",
        brightOrange: "#fc761387",
        submitWhite: "#fbe3be",
        submitOrange: "#f3b582",
        lightgray: "#7c8898",
      },
    },
  },
  plugins: [],
};
