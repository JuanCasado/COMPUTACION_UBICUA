const express = require("express");

const port = 8080
const app = express()

app.get("/", (req, res) => {res.sendFile('./index.html', { root: '../web/public'});})
app.use('/presentation', express.static('../web/public/presentation'));
app.use('/img', express.static('../web/public/img'));
app.use('/src', express.static('../web/public/src'));
app.use('/styles', express.static('../web/public/styles'));

app.listen(port, () => {
  console.log("web => Ready");
});