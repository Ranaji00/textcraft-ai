/** @type {import('tailwindcss').Config} */




export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js", // Correct inclusion of Flowbite content
  ],
  theme: {
    extend: {
      screens: {
        'min-411': '414px', // Custom breakpoint
      },
      colors: {
        cgray: '#131718', // Custom color
        lgray: '#222627', // Custom color
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
