/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',],
  theme: {
    extend: {
      colors: {
        primary: '#E3EAE1', // Your primary color
        secondary: '#F05353', // Your secondary color
        tertiary: '#CCA895'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font family
      },
    },
  },
  plugins: [],
}

