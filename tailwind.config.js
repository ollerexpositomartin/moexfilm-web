/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        bebasNeu: ["Bebas Neue","sans-serif"],
        Roboto: ["Roboto","sans-serif"]
      },
      backgroundImage: {
        'img-login': "url('/src/assets/images/xino.jpg')",
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require("daisyui")
  ],
}
