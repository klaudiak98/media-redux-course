/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)'}
        }
      },
      animations: {
        shimmer: 'shimmer 1.5s infinity'
      }
    },
  },
  plugins: [],
}

