/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
        cursive: ['Great Vibes'],
        niconne: ['Niconne'],
        body: ['Merienda']
      }
    },
  },
  plugins: [require("daisyui")],

}

