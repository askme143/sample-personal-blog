const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
    },
    extend: {
      fontFamily: { sans: ["Inter", ...defaultTheme.fontFamily.sans] },
      colors: {
        body: "#70747d",
        headings: "#110e27",
        stroke: "dadada",
      },
    },
  },
  plugins: [],
};
