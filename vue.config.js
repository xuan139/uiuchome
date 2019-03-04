const webpack = require('webpack');

module.exports = {
  productionSourceMap: false, // 生产环境的 source map
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      })
    ],
  },
  devServer: {
    port: 8099,
    // proxy: {
      // '/api': {
      //   target: 'http://api.fengjiahao.top',
      //   ws: true,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': '/'
      //   },
      // },
      // '/api': {
      //   target: 'http://localhost:3000',
      //   ws: true,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': '/'
      //   },
      // },
    // }
  }
}