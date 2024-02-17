/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/**/*.{md,html}",
    "./layouts/**/*.{md,html}",
    "./static/**/*.{js,css,html}",
    "./assets/**/*.{js,css,html}",
  ],
  theme: {
    extend: {
      colors: {
        "brand": {
          "primary": "#C7C4BF",
          "secondary": "#C1B28F",
          "accent": "#AAA0C1",
          "error": "#895F5F",
          "success": "#CABCA2",
          "link": "#7A9EB2",
          "base-100": "#1C1917",
          "base-200": "#111010",
        },
      },
      animation: {
        "pulse-fast-short": "pulse 0.3s ease-in-out 5"
      }
    },
  },
  plugins: [],
}
