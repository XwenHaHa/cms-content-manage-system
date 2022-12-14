const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = defineConfig({
  outputDir: './build',
  publicPath: './',
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '^api': {
        target: 'http://152.136.185.210:5000',
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
  },
  configureWebpack: (config) => {
    const plugins = []
    // 配置BundleAnalyzerPlugin
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: '127.0.0.1',
        analyzerPort: 8888, // 运行后的端口号
        reportFilename: 'report.html',
        defaultSizes: 'parsed',
        openAnalyzer: true,
        generateStatsFile: false,
        statsFilename: 'stats.json',
        statsOptions: null,
        logLevel: 'info'
      })
    )
    return { plugins }
  }
})
