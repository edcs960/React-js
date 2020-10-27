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
    var pwd = req.body.pw;
    var ck_pwd = req.body.ck_pw;
    var name = req.body.name;
    var DivCode = req.body.DIV.value;
    var Grade = req.body.Grade.value;
    var phone = req.body.phone;
    var adress = req.body.adress;
    var join_time = date.getFullYear() + '-' + (date.getMonth()+1) + '-' +date.getDate()
    
    function ck_data(value, dataName){ // 비어있는거 체크
        if(value == ""){
            alert(dataName + "입력해주세요!");
            return false;
        }
        return true;
    }
    
    function ck_UserID(ID) { // 아이디 확인(비었는지?, 정규식에 맞게 적었는지?)
        if(ck_data(id,"아이디를")){
            return false;
        }
        
        var regul_ID = /^[a-zA-z0-9]{4,12}$/;
        if(!regul_ID.test(ID)){
            alert("아이디는 영문 대소문자와 숫자 4~12자리로 입력해야합니다!")
            req.body.id.value = "";
            req.body.id,focus();
            return false
        }
        return true;
    }

    function ck_passwd(ID, password, ck_password){ // 비밀번호 확인(비었는지?, 정규식에 맞게 적었는지?, 비밀번호와 비밀번호확인에 적은것이 같은지?, id와 비밀번호가 같은지?)
        if(!ck_data(password,"비밀번호를")){
            return false;
        }

        if(!ck_data(ck_password,"비밀번호 확인을")){
            return false
        }

        var regul_pwd = /^[a-zA-z0-9]{4,12}$/
        if(!regul_pwd.test(password)){
            alert("비밀번호는 영문 대소문자와 숫자 4~12자리로 입력해야합니다!");
            req.body.pw.value = "";
            req.body.pw.focus();
            return false;
        }

        if(password != ck_password){
            alert("두 비밀번호가 맞지 않습니다.");
            req.body.pw.value = "";
            req.body.ck_pw.value = "";
            req.body.ck_pw.focus();
            return false;
        }

        if (ID == password){
            alert("아이디와 비밀번호는 같을 수 없습니다!");
            req.body.pw.value = "";
            req.body.ck_pw.value = "";
            req.body.ck_pw.focus();
            return false;
        }
    }

    function ck_name(name){ // 이름 확인(비었는지?, 정규식에 맞게 적었는지?)
        if(!ck_data(name, "이름을"))
            return false;
        var regul_name = /^[가-핳]$/
        if(!regul_name.test(name)){
            alert("이름이 올바르지 않습니다.");
            return false;
        }
        return true;
    }

    function ck_DIV(dc){ //부서 확인(0이면 선택안된 상태)
        var divcode = req.body.DIV.value;
        if(divcode == "0"){
            alert("부서를 선택해주세요");
            return false;
        }
        return true;
    }

    function ck_grade(G){ // 직급 확인(0이면 선택안된 상태)
        var gd = req.body.Grade.value;
        if(gd == "0"){
            alert("직급을 선택해주세요");
            return false;
        }
        return true;
    }

    function ck_phone(ph) { //전화번호 확인(비었는지?, 정규식에 맞게 적었는지?)
        if(!ck_data(ph,"전화번호를")){
            return false;
        }
        var regul_ph = /^\d{3}-\d{3,4}\d{4}$/;
        if(!regul_ph.test(ph)){
            alert("잘못된 휴대폰 전호입니다. 숫자, - 를 포함한 숫자만 입력하세요.")
            return false;
        }
        return true;
    }

    function ck_email(em){ // 이메일 확인(비었는지?, 정규식에 맞게 적었는지?)
        if(!ck_data(em, "이메일을")){
            return false;
        }

        var regul_em =/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if(!regul_em.test(em)){
            return false;
        }
        return true;
    }

    console.log('-----유저 정보-----');
    User = {
        id : id,
        pw : pwd,
        ck_pw : ck_pwd,
        name : name,
        DIV : DivCode,
        Grade : Grade,
        phone : phone,
        adress : adress,
        join_time : join_time
    };
    console.log(User);
    console.log('------------------');
    
    function ck_All(){
        if(!ck_UserID(id)){
            return false;
        }
        if(!ck_password(id,pwd,ck_pwd)){
            return false;
        }
        if(!ck_name(name)){
            return false;
        }
        if(!ck_DIV(DivCode)){
            return false;
        }
        if(!ck_grade(Grade)){
            return false;
        }
        if(!ck_phone(phone)){
            return false;
        }
        if(!ck_email(adress)){
            return false;
        }
        return true;
    }

    if(ck_All()){
        var sql = 'INSERT INTO USER(ID,PW,NAME,DIVCODE,GRADE,PHONE,ADRESS,JOIN_CO) VALUES (?,?,?,?,?,?,?,?);'
        var params = [id, pw, name, DIV, Grade, phone, adress, join_time] 
    
        var query = connection.query(sql,params,(err,rows)=>{
            console.log('회원가입 성공');
        });
    }
    else{
        console.log('회원가입 실패');
    }
});

module.exports = router;
