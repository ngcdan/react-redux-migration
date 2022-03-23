import webpack from "webpack";
import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";

process.env.NODE_ENV = "development";

const config: webpack.Configuration = {
  mode: 'development',
  target: "web",
  entry: "./src/index.tsx",
  devtool: "cheap-module-source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },

  //@ts-ignore
  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify("http://localhost:3001")
    }),
    new HtmlWebpackPlugin(
      {
        template: "src/index.html",
        favicon: "src/favicon.ico"
      }
    )
  ],

  module: {
    rules: [
      { test: /\.(t|j)sx?$/, use: { loader: 'ts-loader' }, exclude: /node_modules/ },
      // addition - add source-map support
      { enforce: "pre", test: /\.js$/, exclude: /node_modules/, loader: "source-map-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // style-loader comes first and followed by css-loader
          'style-loader', 'css-loader',
          // compiles Sass to CSS, using Node Sass by default
          "sass-loader"
        ],
      },
    ],
  },
}

export default config;