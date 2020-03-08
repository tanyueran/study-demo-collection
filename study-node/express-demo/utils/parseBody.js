const formidable = require('formidable');
const path = require('path');

const form = formidable({
  multiples: true,
  uploadDir: path.join(__dirname, '../file'),
  keepExtensions: true,
});

module.exports = form;