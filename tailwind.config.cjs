/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        coal:       '#111827',   // noir profond — corps de l'abeille
        bee:        '#F59E0B',   // jaune vif — rayure abeille, fonds accent
        'bee-dark': '#B45309',   // ambre foncé — textes liens, icônes sur fond clair
        honey:      '#FEF3C7',   // miel clair — sections alternées
        wax:        '#FFFBEB',   // cire — fond ticker et chips
        'off-white':'#FAFAFA',   // fond principal
        slate:      '#374151',   // texte courant
        fog:        '#6B7280',   // texte secondaire / muted
      },
    },
  },
  plugins: [],
};
