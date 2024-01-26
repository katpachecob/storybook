/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      colors:{
        neutral:'#344054',
        primary:'#1967FF',
        neutral_gray: '#1D2939',
        neutral_blue: '#101828',
        white:'#FFFFFF',
        gray:"#667085"
      }
    },
  },
  plugins: [],
}

