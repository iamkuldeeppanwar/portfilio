/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#111827", // Replace with your desired color
      },
      colors: {
        secondary: "#8B8A91",
      },
      fontWeight: {
        bold: "600",
        medium: "500",
        light: "400",
      },
      fontSize: {
        high: "1.2rem",
        normal: ".8rem",
        light: ".5rem",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
