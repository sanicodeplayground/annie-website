/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-light": "#DDEFF0",
        "custom-primary": "#5C656F",
        "custom-hover": "#363d45",
      },
    },
    fontFamily: {
      sans: ["DM Serif Display", "serif"],
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "18px" },
      });
    }),
  ],
};
