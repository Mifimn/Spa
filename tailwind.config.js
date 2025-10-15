
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
        'primary': '#D4AF37',
        'accent': '#D4AF37',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F4E4C1 50%, #B8941E 100%)',
        'gold-gradient-dark': 'linear-gradient(135deg, #B8941E 0%, #D4AF37 100%)',
      },
    },
  },
  plugins: [],
}
