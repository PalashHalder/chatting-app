/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      }
    },
    colors: {
      heading: '#11175D',
      secondary: '#888BAE',
      background: '#FFFFFF',
    },
  },
  plugins: [],
}
