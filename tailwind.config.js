/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Add this line to enable class-based dark mode
  theme: {
    extend: {
      colors: {
        emerald: {
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        teal: {
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
      }
    },
  },
  plugins: [],
}