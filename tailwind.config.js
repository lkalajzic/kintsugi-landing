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
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 1.5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 20px 5px rgba(212, 175, 55, 0.4)',
          },
          '50%': {
            transform: 'scale(1.03)',
            boxShadow: '0 0 35px 10px rgba(212, 175, 55, 0.6)',
          },
        },
      },
    },
  },
  plugins: [],
}
