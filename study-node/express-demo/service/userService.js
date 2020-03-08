const UserModel = require('../dao/userDao.js');

module.exports = {
  // 注册
  register(data, res, next) {
    let user = new UserModel(data);
    user.save((err, result) => {
      if (err) return next(err);
      res.redirect('/list.html');
    });
  },
  // 列表
  list(res, next) {
    UserModel.find({}, (err, result) => {
      if (err) return next(err);
      res.send(result);
    });
  }
};