const http = require('http');

const extend = require('./extend.js');
const router = require('./router.js');


const server = http.createServer();

server.on('request', (req, res) => {
  extend(req, res);
  router(req, res);

}).listen('3001', () => {
  console.log('http://localhost:3001');
});