const { CallTracker } = require("assert");
var express = require("express");
var router = express.Router();
var app = express();
const cors = require("cors");
app.use(cors());
const dbconnect = require("./dbconnect.json");
var mysql = require("mysql");
var connnection = mysql.createConnection({
  host: dbconnect.host,
  port: dbconnect.port,
  user: dbconnect.user,
  password: dbconnect.password,
  database: dbconnect.database,
});
connnection.connect();

var outdata = [];
router.post("/", function (req, res) {
  connnection.query("select * from todo", function (err, rows) {
    try {
      if (err) throw err;
      var i;
      outdata = [];
      for (i = 0; i < rows.length; i++) {
        var caldata = {};
        caldata.id = encodeURI(rows[i].idx);
        caldata.title = decodeURI(rows[i].title);
        //  caldata.description = encodeURI(rows[i].description);
        //  caldata.start = encodeURI(rows[i].start);
        //  caldata.end = encodeURI(rows[i].end);
        //   caldata.type = encodeURI(rows[i].type);
        //  caldata.username = encodeURI(rows[i].username);
        //  caldata.backgroundcolor = encodeURI(rows[i].backgroundcolor);
        //  caldata.textcolor = encodeURI(rows[i].textcolor);

        //임시
        caldata.date = decodeURI(rows[i].start);
        caldata.end = decodeURI(rows[i].end);
        caldata.color = decodeURI(rows[i].backgroundcolor);
        // console.log(encodeURI(caldata.allday));
        outdata.push(caldata);
      }
    } catch {
      console.log("err caldata");
    }
  });
  res.send(outdata);
});
module.exports = router;
