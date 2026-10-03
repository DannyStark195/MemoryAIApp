/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        Background: "#FCFAF7",
        Surface: "#F5F3EF",
        Surface2: "#F0EEE9",
        Border: "#DDD9D1",

        "Primary-text": "#1C1A18",
        "Secondary-text": "#6B6862",
        "Tertiary-text": "#99958D",

        Accent: "#6A1B9A",
        "Accent-hover": "#F3EAF7",

        "dark-Background": "#0B0D0E",
        "dark-Surface": "#151718",
        "dark-Surface2": "#1C1F20",
        "dark-Border": "#303335",

        "dark-Primary-text": "#F5F5F3",
        "dark-Secondary-text": "#A1A3A3",
        "dark-Tertiary-text": "#707374",

        "dark-Accent-hover": "#25132D",
      },
    },
  },
  plugins: [],
};