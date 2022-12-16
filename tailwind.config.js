/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        brightRed: "hsl(12,80%,59%)",
        darkGrayishBlue: "hsl(227,12%,61%)",
        veryPaleRed: "hsl(13,100%,96%)",
      }
    },
  },
  plugins: [],
}
