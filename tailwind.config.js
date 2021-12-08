const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    // screen: {
    //   tablet: '640px',
    //   laptop: '1024px',
    //   desktop: '1280px',
    // },
    textColor: {
      white: '#fff',
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
