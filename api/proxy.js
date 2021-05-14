/* eslint-disable @typescript-eslint/no-var-requires */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''
  // 处理代理目标地址
  // if (req.url.includes('/api/front')) {
  //   target = 'http://edufront.lagou.com/'
  // } else if (req.url.startsWith('/api/boss')) {
  //   target = 'http://eduboss.lagou.com/'
  // }
  if (req.url.startsWith('/backend')) {
    target = 'http://1.116.145.169:1337'
  }
  
  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // 通过路径重写，去除请求路径中的 `/backend`
      // 例如 /backend/user/login 将被转发到 http://backend-api.com/user/login
      '^/backend/': '/'
    }
  })(req, res)
}