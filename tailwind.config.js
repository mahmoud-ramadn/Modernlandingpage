/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors:{
       primary:'#04071D',
       sceondry:'#CBACF9',
        third:'#C1C2D3',
      },
      container:{
        center:true
      }
    },
  },
  plugins: [],
}