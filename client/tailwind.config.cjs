/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-orange": "#D87D4A",
        "main-black": "#0E0E0E",
        "light-grey": "#F1F1F1",
        "light-cream": "#FAFAFA",
        "light-orange": "#FBAF85",
        "black": "#000000",
        "white": "#FFFFFF"
      },
    },

    
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
}
