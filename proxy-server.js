// proxy-server.js
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(
  "/api/currency",
  createProxyMiddleware({
    target: "https://www.cbr-xml-daily.ru",
    changeOrigin: true,
    pathRewrite: {
      "^/api/currency": "",
    },
    onProxyRes: (proxyRes) => {
      proxyRes.headers["Access-Control-Allow-Origin"] = "*";
      proxyRes.headers["Access-Control-Allow-Methods"] = "GET,OPTIONS";
    },
  })
);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
