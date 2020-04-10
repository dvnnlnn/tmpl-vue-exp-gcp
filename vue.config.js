module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/',
  devServer: {
    port: 3000,
    proxy: 'http://localhost:8888',
  },
};
