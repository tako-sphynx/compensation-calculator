const webpack = require("webpack");

module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      scss: {
        implementation: require("node-sass"),
        prependData: `
        @import "~@/assets/styles/_variables.scss";
        @import "~@/assets/styles/_mixins.scss";
        `,
      },
    },
  },
};
