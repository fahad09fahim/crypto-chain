/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "colorOne":"#741FF5",
        "colorTwo":"#E348FF",
        "banner-text":"#333",
      }
    },
  },
  plugins: [require("daisyui")],
}