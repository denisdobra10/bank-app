/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        'primary': '#2F6EC0',
        'primaryHover': '#0090DA',
        'secondary': '#ED1C24',
        'background': '#FFFFFF',
        'button': '#0090FF',
        'paragraph': '#444444',
        'paragraphLighter': '#666666',
        'appbg': '#F3F4F3',
        'lightGreen': '#96DF60',
        'darkGreen': '#4CBA7F',
        'lightRed': '#FE575F',
        'darkRed': '#E62D5B',
        'lightYellow': '#FFCA03',
        'darkYellow': '#FFB102',
        'vanishedBlack': '#333333'
      }
    },
  },
  plugins: [],
}