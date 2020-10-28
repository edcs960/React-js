
import React, { Component }  from "react";
import "./App.css";

class Profile extends Component {

  
    

  render() {
    var getCookie = function(name) {
        var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return value? value[2] : null;
        };
        
        
    var data = getCookie("data");
    return (
    <div>
        {data} 님 반갑습니다.
    </div>

     
    );
  
}
}
export default Profile;


