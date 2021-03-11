const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  target: 'web',
  mode: 'development',
  entry: {
    tutorial: './src/tutorial.js',
    tutorial_1: './src/tutorial_1.js',
    sandbox: './src/sandbox.js',
    browse: './src/browse.js',
    artwork: './src/artwork.js',
    block: './src/block.js',
    home_page: './src/home_page.js',
    index: './src/index.js',
    blob_tutorial: './src/blob_tutorial.js',
    rectangle_tutorial: './src/rectangle_tutorial.js',
    main: './src/main.js',
    canvas: './src/js/canvas.js'
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
    new HtmlWebpackPlugin({
      filename: 'tutorial_1.html',
      template: './src/assets/tutorial.html',
      chunks: ['tutorial_1'],
      favicon: './src/images/favicon.png'
    }),
    new HtmlWebpackPlugin({
      filename: 'sandbox.html',
      template: './src/assets/sandbox.html',
      chunks: ['sandbox'],
      favicon: './src/images/favicon.png'
    }),
    new HtmlWebpackPlugin({
      filename: 'browse.html',
      template: './src/assets/browse.html',
      chunks: ['browse'],
      favicon: './src/images/favicon.png'
    }),
    new HtmlWebpackPlugin({
      filename: 'artwork.html',
      template: './src/assets/sandbox.html',
      chunksSortMode: 'manual',
      chunks: ['artwork'],
      favicon: './src/images/favicon.png'
    }),
    new HtmlWebpackPlugin({
      filename: 'block.html',
      template: './src/assets/block.html',
      chunks: ['block'],
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
