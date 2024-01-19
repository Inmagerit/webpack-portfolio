const path = require('path');
const webpack = rquire ('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // injects styles into the DOM
          'css-loader',   // interprets @import and url() like import/require() and will resolve them
          'sass-loader'   // compiles Sass to CSS
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your HTML template
      filename: 'index.html',       // Output HTML file name
    }),
    new webpack.ProvidePlugin({
      $ : 'jquery',
      jQuery : 'jquery'
    })
    
  ],
  
};

