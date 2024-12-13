/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a202c", // Dark gray for modern look
        secondary: "#edf2f7", // Light gray for contrast
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
      },  
    },
  },
  plugins: [],
}

