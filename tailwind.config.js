import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('tailwindcss').Config} */
export default {
  eslintPluginPrettierRecommended,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#12203E",
        "light-dark": "#1E3465",
        light: "#98ABBE",
      },
    },
  },
  plugins: [],
};
