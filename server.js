var express = require("express");
var app = express();
app.get("/", (req, res) => {
  res.send("Hello wolf");
});
app.listen(3000);
