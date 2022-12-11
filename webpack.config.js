const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

module.exports = {
  entry: './src/main.js', 
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: 'assets/[contenthash][ext][query]',
    clean: true
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:7777'
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      hash: true
    }),
    new WebpackManifestPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "autoprefixer"
                ]
              }
            } 
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(html)$/i,
        use: 'html-loader'
      }
    ]
  },
  optimization: {
    realContentHash: false
  }
}