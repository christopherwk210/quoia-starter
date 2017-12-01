// Import Quoia
const { Component } = require('quoia');

// Import global values
const globalValues = require('../../config/global-values');

let HomePage = new Component({
  template: './home.html',
  name: 'home',
  globalStyles: [
    '../../css/global.scss'
  ],
  globalScripts: [
    '../../../node_modules/jquery/dist/jquery.min.js',
    '../../../node_modules/popper.js/dist/umd/popper.min.js',
    '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
  ],
  externalStyles: [
    './home.scss'
  ],
  externalScripts: [
    './home.js'
  ],
  imports: [
    {
      component: require('../../components/head-tag/head-tag.quoia'),
      values: {
        title: `${globalValues.title} - Home`,
        root: './'
      }
    }
  ]
});

module.exports = HomePage;
