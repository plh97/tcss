// rollup.config.js
import json from 'rollup-plugin-json';
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [ 
    json(),
    postcss({
      extract: true,
      plugins: []
    })
  ]
};