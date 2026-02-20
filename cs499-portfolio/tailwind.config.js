/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      // You can extend the theme with custom colors, fonts, etc., if desired
      colors: {
        teal: {
          50: "#E6FFFA",
          100: "#B2F5EA",
          500: "#38B2AC",
          900: "#234E52"
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}