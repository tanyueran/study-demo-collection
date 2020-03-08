const express = require('express');
// 解析请求主体的内容
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

// 静态文件处理
app.use(express.static('./public'));

// 接口
app.use('/api', [require('./routers/user.js'), require('./routers/file.js')]);

// 处理错误
app.use((err, req, res, next) => {
  console.log(err);
  res.send({
    code: -1,
    msg: err,
    data: false,
  });
});


app.listen('3000', () => {
  console.log('app running');
});