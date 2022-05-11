const hljs = require("highlight.js"); // https://highlightjs.org/

const md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }

    return ""; // use external default escaping
  },
})
  .use(require("markdown-it-footnote"))
  .use(require("markdown-it-anchor"));

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const result = md.render('# markdown-it rulezz!');

module.exports = {
  cache: false,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        __DATA__: (() => {
          const data = fs.readFileSync(path.resolve("src/", "tsguide.md"));
          const result = md.render(data.toString());
          return result;
        })(),
      },
    }),
  ],
};
console.log("END");
