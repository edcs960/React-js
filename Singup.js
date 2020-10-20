
import React, { Component }  from "react";
import "./App.css";

class Signup extends Component {
  render() {
    return (
      <div>
          <form action="http://localhost:3002/signup" method="post">
            id  <input type="text" name="id" id="id"/> <br/>
            pw  <input type="password" name="pw" id="pw"/><br/>
            name  <input type="text" name="name" id="name"/><br/>
            DIV  <input type="text" name="DIV" id="DIV"/><br/>
            Grade  <input type="text" name="Grade" id="Grade"/><br/>
            phone  <input type="text" name="phone" id="phone"/><br/>
            adress  <input type="text" name="adress" id="adress"/><br/>
            <input type="submit"/>
          </form>
      </div> 
    );
  }
}
export default Signup;



