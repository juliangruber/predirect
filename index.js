var format = require('util').format;

module.exports = predirect;

function predirect (req, res, location, text) {
  if (!location) {
    return function (location, text) {
      return predirect(req, res, location, text);
    };
  }

  text = text || '-> %s'

  res.statusCode = 302;
  res.setHeader('location', location);

  req.method == 'HEAD'
    ? res.end('')
    : res.end(format(text, location));
};
