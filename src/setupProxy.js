const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://3.85.3.86:9001",
      changeOrigin: true,
      secure: false,
    })
  );
};
