const express = require('express');
const Router = express.Router();

const userController = require('../controller/userController.js');

// 查询所有用户
Router.all('/list', (req, res, next) => {
  userController.listController(req, res, next);
});


// 用户注册
Router.post('/register', (req, res, next) => {
  userController.registerController(req, res, next);
});

module.exports = Router;