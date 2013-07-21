var webtap = require('webtap');
var predirect = require('..');

var test = webtap(function (req, res) {
  var redirect = predirect(req, res);
  if (req.url == '/') redirect('https://github.com');
  else redirect('https://github.com', 'GO! %s');
});

test('GET', '/', function (t, res) {
  t.equal(res.statusCode, 302, 'status code 302');
  t.body('-> https://github.com', 'redirect message');
});

test('GET', '/custom', function (t, res) {
  t.equal(res.statusCode, 302, 'status code 302');
  t.body('GO! https://github.com', 'redirect message');
});
