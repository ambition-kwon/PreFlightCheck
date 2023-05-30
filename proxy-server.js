const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://openapi.airport.co.kr/',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  }),
);

app.listen(3000, () => {
  console.log('프록시 서버가 실행되었습니다.');
});
