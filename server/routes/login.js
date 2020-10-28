var bodyParser = require('body-parser');                                                                     
const cookieparser = require('cookie-parser');
const { urlencoded } = require("body-parser");
var express = require("express");
var router = express.Router();
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
const dbconnect = require("./dbconnect.json");
var mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(cookieparser());
var connection = mysql.createConnection({
  host: dbconnect.host,
  port: dbconnect.port,
  user: dbconnect.user,
  password: dbconnect.password,
  database: dbconnect.database,
});
connection.connect();

var data = {};
router.post("/", function (req, res) {
  var id = req.body.id;
  var pw = req.body.pw;
  var query = connection.query('select * from USER where id="'+id+'" && pw="'+pw+'";',function (err, rows){
    rows[0] ? ( data.result = 'ok' , data.id = encodeURI(rows[0].ID) ,data.name = encodeURI(rows[0].NAME)) :( data.result = 'no');
 }
  ) 
  res.cookie('result',data.result);
  res.cookie('data',data.name);
  res.writeHead(302,{"Location":"http://localhost:3000/"})
  res.end();
});

module.exports = router;