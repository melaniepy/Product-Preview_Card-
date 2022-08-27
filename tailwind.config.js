/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      },
    extend: {
      fontFamily: {
        "mont": 'Montserrat, sans-serif',
        "fraun": 'Fraunces, sans-serif'
      },
      colors: {
        darkCyan: "hsl(158, 36%, 37%)",
        darkCyan2: "#295746",
        cream: "hsl(30, 38%, 92%)",
        veryDarkBlue: "hsl(212, 21%, 14%)",
        darkGrayishBlue: "hsl(228, 12%, 48%)",
        White: "hsl(0, 0%, 100%)",
      }
    },
  },
  plugins: [],
}
