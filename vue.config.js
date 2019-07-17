module.exports = {
  devServer: {
    port: 3000
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/static/brand.scss";
        `
      }
    }
  }
}
