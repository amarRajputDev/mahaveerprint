/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '4xl': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      
      },
      screens: {
        'mob': '320px',
      },
    },
  },
  plugins: [],
}

