/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'display': ['Montserrat', 'sans-serif'],
      'body': ['Montserrat', 'sans-serif' ],
    }
  },
  plugins: [],
  
}
