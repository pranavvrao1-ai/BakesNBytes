/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6EE',
          200: '#F5EEDB',
          300: '#EFE3C6',
        },
        chocolate: {
          900: '#231713',
          800: '#2E1E19',
          700: '#3D2821',
          600: '#52382F',
          500: '#6C4C3E',
          400: '#8A6756',
        },
        terracotta: {
          50: '#FDF6F3',
          100: '#FAECE6',
          500: '#C85A32',
          600: '#B04B25',
          700: '#943D1C',
        },
        caramel: {
          100: '#FBF0E4',
          500: '#D97724',
          600: '#BA6015',
        },
        sage: {
          500: '#4A7C59',
          600: '#3A6346',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(46, 30, 25, 0.06)',
        'elevated': '0 18px 45px rgba(46, 30, 25, 0.1)',
        'card': '0 4px 20px rgba(46, 30, 25, 0.05)',
      }
    },
  },
  plugins: [],
}
