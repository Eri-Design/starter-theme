// webpack v4
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = "production" === process.env.NODE_ENV;

const configureEntries = input => {
  const entries = {};

  for (const [key, value] of Object.entries(input)) {
    entries[key] = path.resolve(process.cwd(), value);
  }

  return entries;
};

const entries = {
  admin: "./assets/js/admin/admin.js",
  blocks: "./assets/js/blocks/blocks.js",
  frontend: "./assets/js/frontend/frontend.js",
  shared: "./assets/js/shared/shared.js",
  styleguide: "./assets/js/styleguide/styleguide.js",
  "blocks-editor": "./includes/blocks/blocks-editor.js",

  // CSS files.
  "admin-style": "./assets/css/admin/admin-style.css",
  "editor-style": "./assets/css/frontend/editor-style.css",
  "shared-style": "./assets/css/shared/shared-style.css",
  style: "./assets/css/frontend/style.css",
  "styleguide-style": "./assets/css/styleguide/styleguide.css"
};

module.exports = {
  entry: configureEntries(entries),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  performance: {
    maxAssetSize: 100000
  },
  externals: {
    jquery: "jQuery"
  },
  stats: {
    // Copied from `'minimal'`.
    all: false,
    errors: true,
    maxModules: 0,
    modules: true,
    warnings: true,
    // Our additional options.
    assets: true,
    errorDetails: true,
    excludeAssets: /\.(jpe?g|png|gif|svg|woff|woff2)$/i,
    moduleTrace: true,
    performance: true
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
};
