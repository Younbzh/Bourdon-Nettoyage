/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Lato', 'system-ui', 'sans-serif'],
      },
      colors: {
        burgundy: '#7D1818',
        cream: '#F2E4C8',
        'warm-white': '#FAF6EF',
        'warm-dark': '#2C1810',
        'warm-mid': '#5C3828',
      },
    },
  },
  plugins: [],
};
