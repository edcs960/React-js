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

  render() {
    return (
      <div>
          <form action="http://172.22.200.47:3002/signup" method="post" name="form">
            id  <input type="text" name="id" id="id"/> <br/>
            pw  <input type="password" name="pw" id="pw"/><br/>
            ck_pw  <input type="password" name="ck_pw" id="ck_pw"/><br/>
            name  <input type="text" name="name" id="name"/><br/>
            DIV  <select onChange={this.handleChange} name="DIV" id="DIV">
                    <option value="1">1학년</option>
                    <option value="2">2학년</option>
                    <option value="3">3힉년</option>
                    <option value="4">4힉년</option>
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



