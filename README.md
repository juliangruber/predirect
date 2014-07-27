
# predirect

Simple http redirect method

[![Build Status](https://travis-ci.org/juliangruber/predirect.svg)](https://travis-ci.org/juliangruber/predirect)
[![downloads](https://img.shields.io/npm/dm/predirect.svg)](https://www.npmjs.org/package/predirect)


## Usage

```js
var redirect = require('predirect');
var http = require('http');

http.createServer(function (req, res) {

  redirect(req, res, 'https://github.com');

}).listen(3333);
```

or with currying:

```js
var predirect = require('predirect');
var http = require('http');

http.createServer(function (req, res) {

  var redirect = predirect(req, res);

  // ...

  redirect('https://github.com');

}).listen(3333);
```

## API

### redirect(req, res, url[, text])

Redirect to `url` and respond with `text` if the request method isn't `HEAD`.

`text` gets parsed by `util.format` and defaults to `-> %s`.

If you only pass `req` and `res`, this will return a function you can then
pass `url` and `text` to.

## Installation

With [npm](http://npmjs.org) do:

```bash
$ npm install predirect
```

## License

(MIT)
