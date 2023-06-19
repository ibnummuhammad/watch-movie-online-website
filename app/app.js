const express = require("express");
var fs = require("fs");

const app = express();
const port = process.env.PORT || 8080;
const zeroPad = (num, places) => String(num).padStart(places, "0");

app.set("view engine", "ejs");

app.use(express.static("public"));

// Home
app.get("/", (req, res) => {
  var files = fs.readdirSync("./public/movies/");
  var detail = { files: files };

  res.render("home", detail);
});

var moviesMp4 = "(spongebob_squarepants_season_1|yu_yu_hakusho)";

// movie_list
app.get("/:title" + moviesMp4, (req, res) => {
  var video_type = "mp4";
  var files = fs.readdirSync("./public/movies/" + req.params.title);
  var detail = {
    files: files,
    title: req.params.title,
    video_type: video_type,
  };

  res.render("movie_list", detail);
});
app.get("/:title", (req, res) => {
  var video_type = "mkv";
  var files = fs.readdirSync("./public/movies/" + req.params.title);
  var detail = {
    files: files,
    title: req.params.title,
    video_type: video_type,
  };

  res.render("movie_list", detail);
});

// movie_detail
app.get("/:title" + moviesMp4 + "/:eps", (req, res) => {
  var video_type = "mp4";

  var detail = {
    eps: req.params.eps,
    epsPrev: zeroPad(parseInt(req.params.eps) - 1, 2),
    epsNext: zeroPad(parseInt(req.params.eps) + 1, 2),
    title: req.params.title,
    video_type: video_type,
  };

  res.render("movie_detail", detail);
});
app.get("/:title/:eps", (req, res) => {
  var video_type = "mkv";

  var detail = {
    eps: req.params.eps,
    epsPrev: zeroPad(parseInt(req.params.eps) - 1, 2),
    epsNext: zeroPad(parseInt(req.params.eps) + 1, 2),
    title: req.params.title,
    video_type: video_type,
  };

  res.render("movie_detail", detail);
});

// Open port.
app.listen(port, function () {
  console.log("listening to port " + port);
});
