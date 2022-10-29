/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'player-signup': "url('../public/images/background/player_signup.jpg')",
        'hero-bottom': "url('../public/images/background/hero_bottom.jpg')",
        'fixtures-bg': "url('../public/images/Banner/bg-Latest-hp2.jpg')",
      },

      fontFamily: {
        jost:["Jost","sans-serif"]
      }
    },
  },
  plugins: [],
}