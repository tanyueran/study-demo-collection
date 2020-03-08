const parseBody = require('../utils/parseBody.js');
const userService = require('../service/userService.js');

// 用户注册
const registerController = (req, res, next) => {
  // 解析body
  parseBody.parse(req, (err, fields, files) => {
    if (err) return next(err);
    userService.register({
      username: fields.username,
      password: fields.password,
      file: {
        name: files.file.name,
        url: files.file.path,
      }
    }, res, next);
  });
}

// 列表
const listController = (req, res, next) => {
  userService.list(res, next);
}


module.exports = {
  registerController,
  listController,
}