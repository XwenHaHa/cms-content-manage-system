const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  outputDir: './build',
  publicPath: './',
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '^api': {
        target: 'http://123.207.32.32:5000',
        pathRewrite: {
          '^api': ''
        },
        chainOrigin: true
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  }
})
