/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'tes.html'],
  theme: {
    container: {
      center: true,
      padding: 16,
    },

    extend: {
      colors:{
        primary: '#2563eb',
        secondary: '#60a5fa',
        dark: '#0f172a',
        med_dark: '#64748b',
        low_dark: '#94a3b8',
      },
      screens: {
        '2xl': '1320'
      }
    },
  },
  plugins: [],
}

