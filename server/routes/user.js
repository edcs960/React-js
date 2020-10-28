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
  query = connection.query("SELECT * FROM USER;", function (err, rows) {
    try {
      if (err) throw err;
      var i;
      outdata = [];
      for (i = 0; i < rows.length; i++) {
        var spdata = {};
        spdata.id = decodeURI(rows[i].ID);
        spdata.pw = decodeURI(rows[i].PW);
        spdata.nick = decodeURI(rows[i].NAME);
        outdata.push(spdata);
      }
    } catch (error) {
      console.error(error);
    }
  });
  res.send(outdata);
});

module.exports = router;
