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

router.post("/", function (req, res) {

  var title = req.body.title;
  var writer = req.body.write;
  var content = req.body.contents;

  var sql = 'INSERT INTO BOARD (TITLE,CONTENTS,WRITER,public) VALUES (?,?,?,?);'
  var para = [title, content, writer, 1]

  var query = connection.query(sql, para, function (err, rows) {
    try {
      console.log("작성");
      console.log(query.sql);
      
    } catch (error) {
      console.error(err);
    }
  });
  return 0;
});

module.exports = router;
