/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:{
          bgpry: "#F2F6FC",
          bgsecon:"#303034",
          bgWhite:"#FFFFFF",
          bgYellow:"#FFE946",
          text: "#E2E8F0",
          text_primary:"#0033A0",
          primary: "#0057C2",
         
          secondary: "#718096",
          accent: "#4C51BF",
          success: "#38A169",
          danger: "#E53E3E",
          warning: "#ED8936",
          info: "#007FFF",
          
        }
      }
    },
  },
  plugins: [],
}