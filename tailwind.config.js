const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xl: '1188px'
      },
      colors: {
        primary: '#f57224'
      }
    }
  },
  plugins: []
};
