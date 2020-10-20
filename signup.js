const express = require('express');
const dbconnect = require("./dbconnect.json");
var router = express.Router();
var app = express();
var mysql = require("mysql");
const cors = require("cors");

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
    var date = new Date();

    var id = req.body.id;
    var pw = req.body.pw;
    var name = req.body.name;
    var DIV = req.body.DIV;
    var Grade = req.body.Grade;
    var phone = req.body.phone;
    var adress = req.body.adress;
    var join_time = date.getFullYear() + '-' + (date.getMonth()+1) + '-' +date.getDate()
    

    console.log('-----유저 정보-----');
    User = {
        id : id,
        pw : pw,
        name : name,
        DIV : DIV,
        Grade : Grade,
        phone : phone,
        adress : adress,
        join_time : join_time
    };
    console.log(User);
    console.log('------------------');
    
    var ck_sql = 'select ID from USER where ID=?;'
    var ck_params = [id];
    var ck_query = connection.query(ck_sql,ck_params,(err,rows)=>{
        try {
            var ck;
            if(rows.length == 0){
                console.log('ck_id true로 설정');
                ck = 1;
                console.log(ck);
            }
            else{
                ck = 0;
            }
        } catch {
            console.log(err);
        }
    })

    
    // 아직 
    /*
    var sql = 'INSERT INTO USER(ID,PW,NAME,DIVCODE,GRADE,PHONE,ADRESS,JOIN_CO) VALUES (?,?,?,?,?,?,?,?);'
    var params = [id, pw, name, DIV, Grade, phone, adress, join_time] 

    var query = connection.query(signup_sql,params,(err,rows)=>{
        try {
            console.log('회원가입 성공')
        } catch{
            console.log('회원가입 실패')
            console.log(err)
        }
    });
    */
});

module.exports = router;
