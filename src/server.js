//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

const app = express();

var cors = require('cors');

app.use(cors());

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
  .then(() => {
    console.log('Connection OPEN!')
  })
  .catch(err => {
    console.log('Connection FAILED!')
    console.log(err)
  })


const clubSchema = new mongoose.Schema({
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
    required: false
  },
  parentSubject: {
    type: String,
    required: false
  }
});

const Club = mongoose.model("Club", clubSchema);

// const club1 = new Club({
//   code: "123", name: "TJ Sokol Svinov", county: "Severomoravsky", parentSubject: "COS"
// });

// const club2 = new Club({
//   code: "456", name: "SK Studenka", county: "Severomoravsky", parentSubject: "CUS"
// });

// const defaultClubs = [club1, club2];

// Club.insertMany(defaultClubs, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Succesfully saved default to database.");
//   }
// });

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

app.get("/clubs", function (req, res) {

  Club.find({}, function (err, foundClubs) {
    if (!err) {
      console.log(foundClubs);
      res.send(foundClubs);
    } else {
      console.log(err);
    }
  });
})

app.post("/clubs", function (req, res) {
  console.log(req.body.club.clubId);
  console.log(req.body.club.clubName);

  const newClub = new Club({
    code: req.body.club.clubId,
    name: req.body.club.clubName
  });

  newClub.save(function (err) {
    if (!err) {
      res.send("Success");
    } else {
      res.send(err);
    }
  });

})


let port = process.env.PORT;
if (port === null || port === "") {
  port = 8080;
};

app.listen(8080, function () {
  console.log("Server started on port 8080");
});