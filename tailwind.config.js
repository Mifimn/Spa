
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sage-primary': '#7A9B76',
        'sage-light': '#A8C5A4',
        'sage-dark': '#5A7B56',
        'cream-primary': '#E8E4D9',
        'cream-light': '#F5F3ED',
        'cream-dark': '#D4CFC0',
        'primary': '#7A9B76',
        'accent': '#D4A574',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #7A9B76 0%, #D4A574 100%)',
        'sage-gradient': 'linear-gradient(135deg, #7A9B76 0%, #A8C5A4 100%)',
        'cream-gradient': 'linear-gradient(135deg, #E8E4D9 0%, #F5F3ED 100%)',
      },
    },
  },
  plugins: [],
}
