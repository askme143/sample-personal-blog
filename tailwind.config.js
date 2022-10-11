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
      animation: {
        slideDown: "slideDown 300ms ease-in-out forwards",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
