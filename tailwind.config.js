// const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1080px'
    },
    extend: {
      colors: {
        blue: '#004bb3',
        red: '#e60000',
        yellow: '#ffcc00'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['odd', 'even']
    }
  }
}
