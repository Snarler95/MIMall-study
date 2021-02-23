module.exports = {
  devServer: {
    host: 'localhost',
    port: '9530',
    open: true,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
         '/api': ''
        }
      }
    }
  }
}