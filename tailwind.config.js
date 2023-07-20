/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        50: "#f2fcff",
        100: "#e6f8ff",
        200: "#bfebff",
        300: "#99daff",
        400: "#4db2ff",
        500: "#007bff",
        600: "#006be6",
        700: "#0050bf",
        800: "#003b99",
        900: "#002873",
        950: "#00174a",
      },
      secondary: {
        50: "#f0fcfb",
        100: "#e1faf7",
        200: "#b4f0e8",
        300: "#8be8da",
        400: "#40d6bb",
        500: "#00c49a",
        600: "#00b084",
        700: "#009465",
        800: "#00754a",
        900: "#005933",
        950: "#00381c",
      },
      accent: {
        50: "#fffaf5",
        100: "#fcf2e8",
        200: "#faddca",
        300: "#f5c1a9",
        400: "#ed826d",
        500: "#e53935",
        600: "#cf2e2b",
        700: "#ab1f1d",
        800: "#8a1513",
        900: "#660c0a",
        950: "#420605",
      },
      dark: {
        50: "#f2f4f5",
        100: "#e8eced",
        200: "#c4cbcf",
        300: "#a4aeb3",
        400: "#6a747a",
        500: "#343a40",
        600: "#2b323b",
        700: "#1e2630",
        800: "#131b26",
        900: "#0a111c",
        950: "#040812",
      },
      white: "#fff",
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
        
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
