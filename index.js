var format = require('util').format;

module.exports = predirect;

function predirect (req, res, location, text) {
  if (req.req && req.res && (typeof res == 'string' || !res)) {
    text = location;
    location = res;
    res = req.res;
    req = req.req;
  }

  if (!location) {
    return function (location, text) {
      return predirect(req, res, location, text);
    };
  }

  text = text || '-> %s';

  res.statusCode = 302;
  res.setHeader('location', location);

  req.method == 'HEAD'
    ? res.end('')
    : res.end(format(text, location));
};
