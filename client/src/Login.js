import React from "react";
import "./App.css";
import "./Signup.js";

function Login({history}){
  const goSignup = () => {
    history.push('/Signup');
  }

  var state = {
    id: "1580",
    pw: "test",
    divcode: "0000",
    islogin: false,
  };

  function handleid(e){
    this.setState({ id: e.target.value });
  };

  function handlepw(e){
    this.setState({ pw: e.target.value });
  };

  function handlesubmit(e){
    e.preventDefault();
  }

  function handlelogin(e){
    e.preventDefault();
    const login_info = {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: { "Content-Type": "application/json" },
    };
    window.localStorage.clear();
    fetch("http://localhost:3002/login", login_info)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.islogin) {
          //로그인 성공시
          window.localStorage.setItem("userinfo", JSON.stringify(json));
          const {
            username,
            usergrade,
            userdivcode,
            userphone,
            useraddress,
            userjoin_co,
            userprofilesrc,
          } = json;
          this.setState({
            username,
            usergrade,
            userdivcode,
            userphone,
            useraddress,
            userjoin_co,
            userprofilesrc,
            id: "",
            pw: "",
          });
          const { history } = this.props;
          history.push("/home");
        } else {
          alert("please check id or pw");
        }
      });
  };


  return (
    <div>
          <form onSubmit={handlesubmit}>
            <div>
              <input
                placeholder="아이디입력"
                value={state.id}
                onChange={handleid}
              />
            </div>
            <div>
              <input
                placeholder="패스워드입력"
                value={state.pw}
                onChange={handlepw}
              />
            </div>
            <div>
              <button onClick={handlelogin}>로그인</button>
              <button onClick={goSignup}>회원가입</button>
            </div>
          </form>
        </div>
  );
};

export default Login;