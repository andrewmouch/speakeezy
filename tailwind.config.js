module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-pink": '#FF847B',
        'secondary-pink': '#FECEA8',
        "primary-black": "#2A363B",
        "secondary-black": '#1E2A2F',
        "footer-grey": '#c7c7c7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
