const express = require('express');
const formidable = require('formidable');
const Router = express.Router();
const path = require('path');

const register = require('../controller/userController.js');

const form = formidable({
  multiples: true,
  uploadDir: path.join(__dirname, '../public/file'),
  keepExtensions: true,
});

// 用户注册
Router.post('/register', (req, res, next) => {
  form.parse(req, (err, fields, files) => {
    if (err) next(err);
    let data = {
      ...fields,
    }
    register.registerController(data, req, res, next);
  });
});

module.exports = Router;