module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 10px rgba(0, 200, 255, 0.7), 0 0 20px rgba(0, 100, 255, 0.5)"
      },
      colors: {
        neonBlue: "#00f6ff",
        neonPurple: "#bf00ff"
      }
    },
  },
  plugins: [],
};
