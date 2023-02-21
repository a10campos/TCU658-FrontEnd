/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ligthBlue:'#41ADE7',
        gray: '#999999',
        blue:'#005da4',
        green:'#008000'
      }
    },
  },
  plugins: [],
}
