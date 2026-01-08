/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        warmGray: '#E8E3DB',
        charcoal: '#2B2B2B',
        gold: '#D4AF37',
        darkGold: '#B8941F',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { boxShadow: '0 10px 15px -3px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 10px 25px -3px rgba(212, 175, 55, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}
