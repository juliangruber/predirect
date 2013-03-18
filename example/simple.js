var redirect = require('..');
var http = require('http');

http.createServer(function (req, res) {
  redirect(req, res, 'https://github.com');
}).listen(3333);
