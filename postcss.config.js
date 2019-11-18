module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-mixins"),
    require("postcss-nested"),
    require("autoprefixer"),
    require("precss"),
    require("postcss-assets")({
      loadPaths: ["**"],
      basePath: "/wp-content/thenes/tufts-farm-field/assets/"
    })
    // require("cssnano")
  ]
};
