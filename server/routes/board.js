const { urlencoded } = require("body-parser");
var express = require("express");
var router = express.Router();
var app = express();
const dbconnect = require("./dbconnect.json");
var mysql = require("mysql");
const cors = require("cors");
app.use(cors());
var connection = mysql.createConnection({
  host: dbconnect.host,
  port: dbconnect.port,
  user: dbconnect.user,
  password: dbconnect.password,
  database: dbconnect.database,
});
connection.connect();

var outdata = [];

router.post("/", function (req, res) {
  connection.query("SELECT * FROM BOARD limit 10;", function (err, rows) {
    try {
      if (err) throw err;
      var i;
      outdata = [];
      for (i = 0; i < rows.length; i++) {
        var boarddata = {};
        boarddata.idx = encodeURI(rows[i].IDX);
        boarddata.title = encodeURI(rows[i].TITLE);
        boarddata.writer = encodeURI(rows[i].WRITER);
        outdata.push(boarddata);
      }
    } catch (error) {
      console.error(error);
    }
  });

  res.send(outdata);
});

module.exports = router;
