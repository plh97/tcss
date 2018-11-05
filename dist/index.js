'use strict';

const posthtml = require('posthtml');
const postcss = require('posthtml-postcss');

console.log(undefined);


const postcssPlugins = [
  require('autoprefixer')({ browsers: ['last 2 versions'] })
];
const postcssOptions = {};
const filterType = /^text\/css$/;

const html = `
  <style>div { display: flex; }</style>
  <div style="display: flex;">Text</div>
`;

posthtml([ postcss(postcssPlugins, postcssOptions, filterType) ])
    .process(html)
    .then((result) => console.log(result.html));
