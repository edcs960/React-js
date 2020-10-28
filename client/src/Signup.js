import React, { Component }  from "react";
import "./App.css";

class Signup extends Component {
  state = {
    DivValue: "",
    GradeValue: ""
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChange1 = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
          <form action="http://localhost:3002/signup" method="post" name="form">
            id  <input type="text" name="id" id="id"/> <br/>
            pw  <input type="password" name="pw" id="pw"/><br/>
            ck_pw  <input type="password" name="ck_pw" id="ck_pw"/><br/>
            name  <input type="text" name="name" id="name"/><br/>
            DIV  <select onChange={this.handleChange} name="DIV" id="DIV">
                    <option value="1001">부서1</option>
                    <option value="1002">부서2</option>
                    <option value="1003">부서3</option>
                    <option value="1004">부서4</option>
                 </select><br/> 
            Grade  <select onChange={this.handleChange1} name="Grade" id="Grade">
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



