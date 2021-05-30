//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

const app = express();

app.set('views', path.join(__dirname, 'views'));  
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/snhwebapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() =>{
  console.log('Connection OPEN!')
})
.catch(err =>{
  console.log('Connection FAILED!')
  console.log(err)
})


const clubsSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  county: {
    type: String,
    required: true
  },
  parentSubject: {
    type: String,
    required: true
  }
});

const Club = mongoose.model("Club", clubsSchema);

app.get("/", function (req, res) {
  res.sendFile("index.html");
})

app.get("/overview-teams", function (req, res) {
  Club.find({}, function (err, clubs) {

    res.render("overview/", {
      clubs: clubs

    });
  });
})

let port = process.env.PORT;
if (port === null || port === "") {
  port = 8080;
};

app.listen(8080, function () {
  console.log("Server started on port 8080");
});