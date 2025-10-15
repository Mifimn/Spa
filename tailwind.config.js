
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold-primary': '#D4AF37',
        'gold-light': '#F4E4C1',
        'gold-dark': '#B8941E',
        'purple-primary': '#6B2C91',
        'purple-dark': '#4A1E6B',
        'purple-light': '#9B59B6',
        'primary': '#D4AF37',
        'accent': '#6B2C91',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #6B2C91 100%)',
        'gold-gradient-dark': 'linear-gradient(135deg, #B8941E 0%, #4A1E6B 100%)',
        'purple-gradient': 'linear-gradient(135deg, #6B2C91 0%, #9B59B6 100%)',
      },
    },
  },
  plugins: [],
}
