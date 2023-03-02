/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#000000",
          2: "#333333",
          3: "#666666",
          4: "#999999",
          5: "#CCCCCC",
          6: "#FEFFFF",
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
