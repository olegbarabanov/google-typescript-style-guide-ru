const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const path = require("path");
const hljs = require("highlight.js");
const anchor = require("markdown-it-anchor");
const footnote = require("markdown-it-footnote");
const markdownIt = require("markdown-it")({
  highlight: (str, lang) => hljs.highlight(str, { language: lang }).value,
});
markdownIt.use(footnote);
markdownIt.use(anchor, {
  permalink: anchor.permalink.headerLink({ safariReaderFix: true }),
});

const srcDirPath = path.resolve(__dirname, "src");
const srcMarkdownFilePath = path.join(
  srcDirPath,
  "google-typescript-style-guide-ru.md"
);
const title = `Руководство Google по стилю написания кода
на языке TypeScript (перевод)`;
const menuTitle = "Содержание";

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
      favicon: path.join(srcDirPath, "favicon.ico"),
      template: path.join(srcDirPath, "template.html"),
    }),
    new webpack.DefinePlugin({
      title: JSON.stringify(title),
      menuTitle: JSON.stringify(menuTitle),
      content: webpack.DefinePlugin.runtimeValue(
        () => {
          const markdown = fs.readFileSync(srcMarkdownFilePath);
          const html = markdownIt.render(markdown.toString());
          return JSON.stringify(html);
        },
        {
          fileDependencies: [srcMarkdownFilePath],
        }
      ),
    }),
  ],
  resolve: {
    // FIXME: see Primer.css bug https://github.com/primer/css/issues/442
    alias: {
      "/images/spinners": false,
      "/images/modules": false,
    },
  },
};
