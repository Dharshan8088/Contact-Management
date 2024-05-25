/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xxs': '375px',
        'xs': '425px',
        ...defaultTheme.screens,
      },
      colors: {
        signin:'#503EAC',
        taken:'#FF5753',
        inputbg:'#EFEFEE',
        wronginputbg:'#F9E1E8',
        createaccbtn:'#EA4B8B',
      },
    },
  },
  plugins: [],
}

