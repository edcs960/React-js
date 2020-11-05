
var express = require("express");
var router = express.Router();
var app = express();
const cors = require("cors");
var dotenv = require('dotenv');
app.use(cors());
dotenv.config();




router.post("/", function (req, res) {
  var bus301 = req.body.Bus301;
  var Geumjeong = req.body.Geumjeong;
  console.log(bus301);
  console.log(Geumjeong);
  res.end();
});

module.exports = router;
