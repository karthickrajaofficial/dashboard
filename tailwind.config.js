/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '22xl': '3rem', // Adjust the rem size to whatever you need
        '24xl': '4rem',
      },
    },
  },
  plugins: [],
}
