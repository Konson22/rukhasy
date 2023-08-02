/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mydark1:'rgb(20, 20, 20)',
        mydark2:'rgb(35, 35, 35)',
        mydark3:'rgb(50, 50, 50)',
      }
    },
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ["./src/**/*.{html, jsx, tsx, js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

