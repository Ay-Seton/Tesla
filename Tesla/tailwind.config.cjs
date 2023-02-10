/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        modely: "url('@/assets/Model-Y.jpg')",
        models: "url('@/assets/Model-s.jpg')",
        modelx: "url('@/assets/Model-x.jpg')",
        solarPanel: "url('@/assets/solar-panel.jpg')",
      },
      colors: {
        "primary-100": "#3E4045",
        "primary-500": "#171a20",
        "gray-100": "#e9e8e8",
        "gray-200": "#f4f4f4",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        semimedium: 590,
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
