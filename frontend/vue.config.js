const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:8090',
        changeOrigin: true
      }
    }
  },

  outputDir: 'target/dist'
}
