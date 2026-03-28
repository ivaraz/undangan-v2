/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#D4AF37',
          600: '#C5A028',
          700: '#A0831F',
          800: '#7A6218',
          900: '#5A4710',
        },
        dark: {
          900: '#0A0A0A',
          800: '#111111',
          700: '#1A1A1A',
          600: '#222222',
          500: '#2A2A2A',
        },
        cream: '#F5F0E8',
      },
      fontFamily: {
        serif:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Great Vibes"', 'cursive'],
        sans:   ['"Lato"', 'sans-serif'],
      },
      animation: {
        'fade-in':     'fadeIn 1.2s ease-in-out forwards',
        'fade-up':     'fadeUp 1s ease-out forwards',
        'shimmer':     'shimmer 2.5s linear infinite',
        'float':       'float 3s ease-in-out infinite',
        'pulse-gold':  'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 12px 2px rgba(212,175,55,0.3)' },
          '50%':      { boxShadow: '0 0 24px 6px rgba(212,175,55,0.6)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F5E070 50%, #D4AF37 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)',
      },
    },
  },
  plugins: [],
}
