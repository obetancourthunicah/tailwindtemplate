// module.exports = {
//   plugins: {
//     tailwindcss:{},
//     autoprefixer:{},
//   }
// }

module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
  ],
}
