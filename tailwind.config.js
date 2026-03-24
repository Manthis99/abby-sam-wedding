/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#E6E2DA', // Cream
        darkBg: '#2D1F18',     // Deep earthy brown
        tanBg: '#BCA893',      // Muted kraft/tan
        textDark: '#1A1513',   // Near black
        textLight: '#F5F5F0'   // Off white
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
