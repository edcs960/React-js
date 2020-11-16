// 아직 미완성
var express = require("express");
var router = express.Router();
var app = express();
const cors = require("cors");
require('dotenv').config();
app.use(cors());

var BusID;

async function BusXml(BusLine) {
  var xhr = new XMLHttpRequest();
  var url = 'http://61.43.246.153/openapi-data/service/busanBIMS2/busInfoRoute'; /*URL*/
  var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+ process.env.BUS_API; /*Service Key*/
  queryParams += '&' + encodeURIComponent('lineid') + '=' + encodeURIComponent(BusLine); /**/
  xhr.open('GET', url + queryParams);
  xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
          alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
      }
  };

  xhr.send('');
}

router.post("/", function (req, res) {
  // 부산 버스 정보 시스템 api
  var WhatButton;
  var BusRefresh = req.body.Refresh;
  var GeumjeongButton = req.body.Geumjeong;
  var Bus301Button = req.body.Bus301;

  console.log(BusRefresh);
  res.end();
});

module.exports = router;

