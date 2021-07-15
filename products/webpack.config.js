const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      // contains list of files from this micro frontend
      // and directions how to load them
      filename: "remoteEntry.js",
      // Expose src/index
      // Other app can use this module like => import "products/ProductsIndex";
      exposes: {
        "./ProductsIndex": "./src/index",
      },
      shared: ["faker"],
    }),
    // Will inject bundled file from dist to the following location
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
