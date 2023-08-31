const express = require('express')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()
app.use(cors())
app.use(createProxyMiddleware({
  router: (req) => new URL(req.path.substring(1)),
  pathRewrite: (path, req) => (new URL(req.path.substring(1))).pathname,
  changeOrigin: true,
  logger: console
}))

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`listening on ${PORT}`));