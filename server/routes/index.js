var express = require("express");
var router = express.Router();
var app = express();

router.get('/',(req,res)=>{
    res.render('index',{title:'express'});
});

module.exports = router;
