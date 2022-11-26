/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend:{
      screens: {
        'xss': '374px',
        'xs': '420px',
      },
    },
  },
  plugins: [],
}
