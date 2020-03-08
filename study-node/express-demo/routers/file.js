const express = require('express');
const Router = express.Router();

Router.get('/file', (req, res, next) => {
  // 直接返回
  res.sendFile(req.query.url);
});
module.exports = Router;