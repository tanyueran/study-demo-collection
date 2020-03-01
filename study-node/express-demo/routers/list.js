const express = require('express');
const Router = express.Router();

const listController = require('../controller/listController.js');


Router.post('/list', (req, res, next) => {
  listController.listController(req, res, next);
})

module.exports = Router;