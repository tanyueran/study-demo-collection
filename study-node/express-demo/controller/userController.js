const fs = require('fs');
const path = require('path');
const DATA = [];

const registerController = (data, req, res, next) => {
  DATA.push(data);
  // 保存数据
  fs.writeFile(path.join(__dirname, '../data.json'), JSON.stringifyDATA, (err) => {
    if (err) {
      next(err);
    }
    res.send('<div>上传成功!!!<a href="/list.html">to list</a></div>');
  });
}


module.exports = {
  registerController
}