var webtap = require('webtap');
var redirect = require('..');

var test = webtap(function (req, res) {
  if (req.url == '/') redirect(req, res, 'https://github.com');
  else redirect(req, res, 'https://github.com', 'GO! %s');
});

test('GET', '/', function (t, res) {
  t.equal(res.statusCode, 302, 'status code 302');
  t.body('-> https://github.com', 'redirect message');
});

test('GET', '/custom', function (t, res) {
  t.equal(res.statusCode, 302, 'status code 302');
  t.body('GO! https://github.com', 'redirect message');
});
