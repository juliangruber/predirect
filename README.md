
# predirect

Simple http redirect method

[![Build Status](https://travis-ci.org/juliangruber/predirect.png)](https://travis-ci.org/juliangruber/predirect)

## Usage

```js
var redirect = require('predirect');
var http = require('http');

http.createServer(function (req, res) {
  redirect(req, res, 'https://github.com');
}).listen(3333);
```

## API

### redirect(req, res, url[, text])

Redirect to `url` and respond with `text` if the request method isn't `HEAD`.

`text` gets parsed by `util.format` and defaults to `-> %s`.

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install predirect
```

## License

(MIT)
