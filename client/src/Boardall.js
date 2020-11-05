import React from "react";
import "./App.css";

class Board extends React.Component {
  render() {
    return (
      <div>
        <form action="http://172.22.200.47:3002/board" method="post">
          제목   : <input type="text" name="title" />
          작성자 : <input type="text"  name="write"/>
          내용   : <input type="text" name="contents"/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default Board;
