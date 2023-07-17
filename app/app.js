const express = require("express");
var fs = require("fs");

const app = express();
const port = process.env.PORT || 80;
const zeroPad = (num, places) => String(num).padStart(places, "0");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("/Volumes/iben/"));

function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
}

// Home
app.get("/", (req, res) => {
  var files = fs.readdirSync("/Volumes/iben/movies/");
  files.reverse();
  var detail = { files: files };
  res.render("home", detail);
});

// movie_detail
app.get("/:title", (req, res) => {
  var detail = {
    title: req.params.title,
    titleCap: titleCase(req.params.title.replaceAll("_", " ").replaceAll(".mp4", "")),
  };
  res.render("movie_detail", detail);
});

app.get("/:title/:eps", (req, res) => {
  var detail = {
    eps: req.params.eps,
    epsPrev: zeroPad(parseInt(req.params.eps) - 1, 2),
    epsNext: zeroPad(parseInt(req.params.eps) + 1, 2),
    title: req.params.title,
    titleCap: titleCase(req.params.title.replaceAll("_", " ")),
  };
  res.render("movie_detail", detail);
});

// Open port.
app.listen(port, function () {
  console.log("listening to port " + port);
});
