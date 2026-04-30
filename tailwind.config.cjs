/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        maple:      '#B8232A',
        parchment:  '#EDE4C4',
        'off-white': '#F6F2EB',
        bark:       '#1A1612',
        earth:      '#5C3D22',
        moss:       '#4A5E35',
        stone:      '#9E9188',
      },
    },
  },
  plugins: [],
};
