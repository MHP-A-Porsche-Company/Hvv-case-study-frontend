const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...fontFamily.sans],
        heading: ['Orbitron', ...fontFamily.sans],
        mono: ['Space Mono', ...fontFamily.mono],
      },
      colors: {},
    },
  },
  plugins: [],
}