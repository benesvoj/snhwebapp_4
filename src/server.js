
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

// mongoose.connect("mongodb://localhost:27017/blog", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// app.get("/", function (req, res) {

//     Post.find({}, function (err, posts) {

//         res.render("home", {

//             startingContent: homeStartingContent,

//             posts: posts

//         });

//     });
// });

app.get("/teamslist", function(req, res) {
    res.render("teamslist");
  });

  let port = process.env.PORT;
  if (port === null || port === "") {
    port = 8080;
  }

app.listen(8080, function () {
    console.log("Server started on port 8080");
});