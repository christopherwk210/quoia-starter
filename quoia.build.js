// Imports
const { build } = require('quoia');
const path = require('path');

// Quoia config
const config = {
  outDir: './dist',
  rootPage: require('./src/pages/home/home.quoia'),
  templatingEngine: 'handlebars',
  rootCopy: [
    './src/assets',
    './src/root/'
  ],
  cssPreprocessor: 'sass',
  cssIncludePaths: [
    path.join(__dirname, './node_modules'),
    path.join(__dirname, './src'),
    path.join(__dirname, './src/css')
  ]
};

// Execute Quoia build
build(config);
