const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const precss = require('precss')


const buffer = `body {
  user-select: none;
}`



postcss([precss, autoprefixer])
  .process(postcss.parse(buffer), { from: './src/app.css', to: './dist/index.css' })
  .then(res => {
    console.log(res.css);
  })