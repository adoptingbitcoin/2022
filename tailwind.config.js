// const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1080px'
    },
    extend: {
      colors: {
        blue: '#4accf2',
        darkblue: '#8295eb',
        pink: '#ed67af',
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
