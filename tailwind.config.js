/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e0eafc',
          200: '#c7d6f7',
          300: '#a4baef',
          400: '#7c97e6',
          500: '#5f76db',
          600: '#4858cc',
          700: '#3a45b0',
          800: '#333c8c',
          900: '#2d3470',
          950: '#1e2148',
        },
        secondary: {
          50: '#fff1f0',
          100: '#ffe0de',
          200: '#ffc6c2',
          300: '#ff9f98',
          400: '#ff6c62',
          500: '#ff3d30',
          600: '#ed1c10',
          700: '#c81209',
          800: '#a3140c',
          900: '#861610',
          950: '#490705',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde58a',
          300: '#fbd24e',
          400: '#f9bc24',
          500: '#f59e0b',
          600: '#d87607',
          700: '#b45309',
          800: '#92420e',
          900: '#78350f',
          950: '#451a03',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};