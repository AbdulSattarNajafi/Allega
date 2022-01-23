const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPageNames = [
  'product',
  'fassaden',
  'referenzen',
  'career',
  'careerDetail',
  'download',
];
const multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/pages/${name}.html`, // relative path to the HTML files
    filename: `./pages/${name}.html`, // output HTML files
    chunks: ['app', `${name}`], // respective JS files
  });
});

module.exports = {
  entry: {
    main: './src/js/index.js',
    app: './src/js/vendor.js',
    product: './src/js/product.js',
    fassaden: './src/js/fassaden.js',
    referenzen: './src/js/referenzen.js',
    career: './src/js/career.js',
    careerDetail: './src/js/careerDetail.js',
    download: './src/js/download.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['app', 'main'],
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ].concat(multipleHtmlPlugins),
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
