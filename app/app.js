const express = require("express");
var fs = require("fs");

const app = express();
const port = process.env.PORT || 80;
const zeroPad = (num, places) => String(num).padStart(places, "0");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("/Volumes/iben/"));

// Home
app.get("/", (req, res) => {
  var files = fs.readdirSync("/Volumes/iben/movies/");
  var detail = { files: files };
  res.render("home", detail);
});

// movie_list
app.get("/:title", (req, res) => {
  var files = fs.readdirSync("/Volumes/iben/movies/" + req.params.title);
  var detail = {
    files: files,
    title: req.params.title,
  };
  res.render("movie_list", detail);
});

// movie_detail
app.get("/:title/:eps", (req, res) => {
  var detail = {
    eps: req.params.eps,
    epsPrev: zeroPad(parseInt(req.params.eps) - 1, 2),
    epsNext: zeroPad(parseInt(req.params.eps) + 1, 2),
    title: req.params.title,
  };
  res.render("movie_detail", detail);
});

// Open port.
app.listen(port, function () {
  console.log("listening to port " + port);
});
