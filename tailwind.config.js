/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Blue': 'hsl(246, 80%, 60%)',
        'Light-red-work': 'hsl(15, 100%, 70%)',
        'Soft-blue-play': 'hsl(195, 74%, 62%)',
        'Light-red-study': 'hsl(348, 100%, 68%)',
        'Lime-green-exercise': 'hsl(145, 58%, 55%)',
        'Violet-social': 'hsl(264, 64%, 52%)',
        'Soft-orange-selfcare': 'hsl(43, 84%, 65%)',
        /* Neutral */
        'Verydark-blue': 'hsl(226, 43%, 10%)',
        'Darkblue': 'hsl(235, 46%, 20%)',
        'Desaturatedblue': 'hsl(235, 45%, 61%)',
        'PaleBlue': 'hsl(236, 100%, 87%)'
      }
    },
  },
  plugins: [],
}