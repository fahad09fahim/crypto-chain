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
        "custom-black":"#333",
      }
    },
  },
  plugins: [require("daisyui")],
}