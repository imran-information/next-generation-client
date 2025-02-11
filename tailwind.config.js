/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "serif"],

    },
    extend: {
      colors: {
        primary: '#8053f6',
        secondary: '#00e29a',
        'primary-light': '#55595c',
        'text-color': '#333',
        bg: '#f5f6ff',
      }
      // backgroundImage: {
      //   'recent-blogs': "url('/src/assets/home/Simple Shiny (2).svg')",

      // }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

