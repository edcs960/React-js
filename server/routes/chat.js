const app = require('express');
const express = require('express');
const dbconnect = require("./dbconnect.json");
var router = express.Router();
var app = express();
var mysql = require("mysql");
const cors = require("cors");
const { query } = require('express');
const crypto = require('crypto');
const { count } = require('console');

var connection = mysql.createConnection({
    host: dbconnect.host,
    port: dbconnect.port,
    user: dbconnect.user,
    password: dbconnect.password,
    database: dbconnect.database,
  });
connection.connect();

app.use(cors());
app.use(express.json());

router.post("/",(req,res)=>{
    
});

module.exports = router;