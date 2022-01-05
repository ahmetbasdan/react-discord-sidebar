const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#5865f2",
        sidebar: "#202225",
        surface: "#36393f",
        gray: colors.gray,
      },
    },
  },
  plugins: [],
};
