const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/image", // Proxy all requests starting with /image
    createProxyMiddleware({
      target: "http://localhost:5000", // Replace with your backend URL
      changeOrigin: true,
    })
  );
};
