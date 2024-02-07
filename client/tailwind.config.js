/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'darkbg':'#26335D',
        'primary':'#8D5CF6',
        'light-text':'',
        'head-text':'#252B42',
        'danger':'#E74040',
        'gray-text':'#ECECEC',
        'muted':'#BDBDBD',
        'iconbg':'#474950'
      }
    },
  },
  plugins: [],
}

