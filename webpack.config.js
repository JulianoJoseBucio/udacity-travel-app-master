const path = require("path") 
const webpack = require('webpack')



module.exports = {
    entry: './src/client/index.js',
module: {
    rules: [
      {
        test: "/.js$/",
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
      },
    ]
}
}