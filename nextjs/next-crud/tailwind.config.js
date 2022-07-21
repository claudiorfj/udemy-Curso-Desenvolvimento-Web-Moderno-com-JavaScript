/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/componentes/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false,
  content: [],
  variants:{
    extend:{},
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
