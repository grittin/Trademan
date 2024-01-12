module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      colors: {
        primary: '#01c233' ,
        secondary: '#24303e',
        success: '#01c233',
        error: '#FA6B82',
        warning: '#FFC64B',
        bluegray: '#1e293b',
        ceiling: '#558BED',
        floor: '#D964D7'
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }