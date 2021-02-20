module.exports = {
  devServer: {
    host: 'localhost',
    port: '9530',
    open: true,
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        pathRewrite: {
         '/api': ''
        }
      }
    }
  }
}