const path = require('path');
const fs = require('fs');

module.exports = {
  listController: (req, res, next) => {
    fs.readFile(path.join(__dirname, '../data.json'), (err, data) => {
      if (err) next(err);
      res.send(data.toString('utf8'));
    });
  }
}