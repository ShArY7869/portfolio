/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonBlue: "#00f6ff",
        neonPurple: "#7c3aed"
      },
      boxShadow: {
        neon: "0 8px 30px rgba(6,182,212,0.12)"
      }
    },
  },
  plugins: [],
};
