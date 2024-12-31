/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Example primary color
        secondary: '#1E293B', // Example secondary color
        accent: '#F59E0B', // Example accent color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example font family
      },
    },
  },
  plugins: [],
};