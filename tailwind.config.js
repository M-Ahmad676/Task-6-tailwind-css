/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {

    screens: {
      sm:'450px',
      md:'750px',
      lg:'900px',
      xlg:'1440px',
    },

    colors: {
      
      white:'rgb(255 255 255 / 100%)',
      brightRed:'hsl(12, 88%, 54%)',
      brightRedLight:'hsl(12, 88%, 69%)',
      brightRedSupLight:'hsl(12 ,88%, 87%)',
      darkBlue:'hsl(228, 39%, 23%)',
      darkGrayishBlue:'hsl(227, 12%, 33%)',
      veryDarkBlue:'hsl(223, 12%, 13%)',
      veryPaleRed:'hsl(13, 100%, 96%)',
      veryLightGray:'hsl(0, 0%, 89%)',
      lightBlack:'rgb(64 59 59)'
    
    },

    extend: {},
  },
  plugins: [],
}

