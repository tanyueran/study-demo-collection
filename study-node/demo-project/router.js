const path = require('path');
const fs = require('fs');

const mime = require('./mime.json');

module.exports = function (req, res) {
  console.log(req.url);

  // 静态文件
  if (req.url.startsWith('/public')) {
    fs.readFile(path.join(__dirname, req.url), (err, data) => {
      if (err) {
        throw err;
      }
      res.setHeader('content-type', mime[req.url.slice(req.url.lastIndexOf('.'))] + ";charset=utf-8");
      res.end(data);

    });
    // 查询数据
  } else if (req.url.startsWith('/query')) {
    fs.readFile(path.join(__dirname, './data.json'), (err, data) => {
      if (err) {
        throw err;
      }
      res.setHeader('content-type', 'application/json;charset=utf-8');
      res.end(data);
    });
    // 添加数据
  } else if (req.url.startsWith('/add') && (req.method.toUpperCase() === 'POST')) {
    let list = [];
    req.on('data', (data) => {
      list.push(data);
    });
    req.on('end', (data) => {
      console.log(Buffer.concat(list).toString('utf-8'));
      list = Buffer.concat(list).toString('utf-8');
      list = JSON.parse(list);
      fs.readFile(path.join(__dirname, './data.json'), 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
        let _list = JSON.parse(data.toString('utf-8'));
        console.log(_list);
        _list.push(list);
        fs.writeFile(path.join(__dirname, './data.json'), JSON.stringify(_list), (err) => {
          if (err) {
            throw err;
          }
          res.end('ok');
        });
      });
    });

  } else {
    res.statusCode = 404;
    res.statusMessage = 'Not found';
    res.end('404');
  }
};