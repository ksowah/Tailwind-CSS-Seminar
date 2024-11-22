/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '768px', 
        'desktop': '1024px', 
        'ultrawide': '1920px', 
      },
      fontSize: {
        'fluid-lg': 'clamp(1.5rem, 2vw, 3rem)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scroll-shadow': {
          'box-shadow': 'inset 0 8px 8px -8px rgba(0, 0, 0, 0.1)',
        },
      });
    }),
  ],
}

