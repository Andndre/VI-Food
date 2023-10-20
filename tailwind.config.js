/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./**/*.{html,js,php}"],
  theme: {
    extend: {
      colors: {
        primary: '#FFB649'
      }
    },
  },
  plugins: [],
}
