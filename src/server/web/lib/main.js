"use strict";

var _express = _interopRequireDefault(require("express"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = 80;
var app = (0, _express["default"])();
app.get("/", function (req, res) {
  res.sendFile('./index.html', {
    root: '/web/public'
  });
});
app.use('/presentation', _express["default"]["static"]('/web/public/presentation'));
app.use('/img', _express["default"]["static"]('/web/public/img'));
app.use('/src', _express["default"]["static"]('/web/public/src'));
app.use('/styles', _express["default"]["static"]('/web/public/styles'));
app.listen(port);