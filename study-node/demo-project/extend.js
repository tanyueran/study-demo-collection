module.exports = function (req, res) {
  req.url = req.url.toLowerCase();
  req.method = req.method.toLowerCase();
};