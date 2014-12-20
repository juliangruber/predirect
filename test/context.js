var webtap = require('webtap');
var redirect = require('..');

var test = webtap(function (req, res) {
  var ctx = { req: req, res: res };
  if (req.url == '/') redirect(ctx, 'https://github.com');
  else if (req.url == '/custom') redirect(ctx, 'https://github.com', 'GO! %s');
  else redirect(ctx)('http://juliangruber.com');
});

test('GET', '/', function (t, res) {
  t.equal(res.statusCode, 302, 'status code 302');
  t.body('-> https://github.com', 'redirect message');
});

test('GET', '/custom', function (t, res) {
  t.equal(res.statusCode, 302, 'status code 302');
  t.body('GO! https://github.com', 'redirect message');
});

test('GET', '/curry', function (t, res) {
  t.equal(res.statusCode, 302, 'status code 302');
  t.body('-> http://juliangruber.com', 'redirect message');
});

