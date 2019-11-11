"use strict";

var _express = _interopRequireDefault(require("express"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = 80;
app.get("/", function (req, res) {
  res.send("Hello world React");
});
app.listen(port);