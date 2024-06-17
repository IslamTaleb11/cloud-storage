/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik'],
        'teko' : ['Teko'],
        'oswald' : ['Oswald'],
        'bebasNeue' : ['BebasNeue'],
        'yanoneKaffeesatz' : ['YanoneKaffeesatz'],
        'titilliumWeb' : ['TitilliumWeb'],
      },
      colors: {
        primarycolor: '#180D5B',
        secondarycolor: '#2D72FC',
        bgcolor: '#F4F7FC',
        darkmodebg: '#101826'
      }
    },
  },
  plugins: [require("daisyui")],
}

