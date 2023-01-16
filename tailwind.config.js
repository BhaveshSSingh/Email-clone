/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "white",
      black: "black",
      accentClr: "#E54065",
      backGroundClr: "#f4f5f9",
      borderClr: "#cfd2dc",
      textClr: "#636363",
      filterButton: "#e1e4ea",
      readBackgound: "#F2F2F2",
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
