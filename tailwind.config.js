/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff1f5',
          100: '#ffe4ec',
          200: '#fecddc',
          300: '#fda4bd',
          400: '#fb6f98',
          500: '#f43f7f',
          600: '#e11d69',
          700: '#be185d',
          800: '#9f174f',
          900: '#831843'
        }
      },
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.08)'
      }
    },
  },
  plugins: [],
};