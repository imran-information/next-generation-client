/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Roboto': [
        '"Roboto", serif',
      ],


    },
    extend: {
      // backgroundImage: {
      //   'recent-blogs': "url('/src/assets/home/Simple Shiny (2).svg')",

      // }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

