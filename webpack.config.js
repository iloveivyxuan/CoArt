const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  target: 'web',
  mode: 'development',
  entry: {
    home_page: './src/home_page.js',
    tutorial: './src/tutorial.js',
    index: './src/index.js',
    blob_tutorial: './src/blob_tutorial.js',
    rectangle_tutorial: './src/rectangle_tutorial.js',
    main: './src/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'tutorial.html',
      template: './src/assets/tutorial.html',
      chunks: ['tutorial'],
      favicon: './src/images/favicon.png'
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // Copy over media resources from the Blockly package
    new CopyPlugin([
      {
        from: path.resolve(__dirname, './node_modules/blockly/media'),
        to: path.resolve(__dirname, 'build/media')
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    port: 3000
  }
};
