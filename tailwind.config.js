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
        brightRed: "#F4976C",
        brightRedbg: "rgba(244,151,108, 0.9)",
        darkGrayishBlue: "#303C6C",
        paleYellow: "#fff6ba",
        paleYellowbg: "rgba(251,	232,	166, 0.9)",
        paleGray: "hsl(249,28%,90%)",
        paleBlue: "#B4DFE5",
        paleBluebg: "rgba(180,	223,	229, 0.5)",
        lightBlue: "#D2FDFF",
      },
      width: {
        '160': '10rem,',
        '640': '45rem',

      },
      height: {
        '480': '30rem',
        '640': '40rem',
      }
    },
  },
  plugins: [],
}
