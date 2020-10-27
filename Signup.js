

import React, { Component }  from "react";
import "./App.css";

class Signup extends Component {
  constructor(props){
    super(props);
    this.stateDIV = {value: "0",};
    this.stateGrade = {value: "0",};
    this.DIV_hendlechange = this.DIV_hendlechange.bind(this);
    this.Grade_hendlechange = this.Grade_hendlechange.bind(this);
  };
  

  DIV_handelchange(event){
    this.setState({value: event.target.value});
  }

  Grade_handelchange(event){
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
          <form action="http://localhost:3002/signup" method="post" name="form">
            id  <input type="text" name="id" id="id"/> <br/>
            pw  <input type="password" name="pw" id="pw"/><br/>
            ck_pw  <input type="password" name="ck_pw" id="ck_pw"/><br/>
            name  <input type="text" name="name" id="name"/><br/>
            DIV  <select value={this.stateDIV.value} name="DIV">
                    <option value="1001">부서1</option>
                    <option value="1002">부서2</option>
                    <option value="1003">부서3</option>
                    <option value="1004">부서4</option>
                 </select><br/> 
            Grade  <select value={this.stateGrade.value} name="Grade">
                    <option value="01">직급1</option>
                    <option value="02">직급2</option>
                    <option value="03">직급3</option>
                    <option value="04">직급4</option>
                 </select><br/>
            phone  <input type="text" name="phone" id="phone"/><br/>
            adress  <input type="text" name="adress" id="adress"/><br/>
            <input type="submit"/>
          </form>
      </div> 
    );
  }
}
export default Signup;



