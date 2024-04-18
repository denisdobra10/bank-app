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
      }
    },
  },
  plugins: [],
}