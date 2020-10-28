import React from "react";
import "./App.css";
import Axios from "axios";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
    };
  }

  componentDidMount() {
    this.init();
  }

  init = () => {
    setInterval(async () => {
      try {
        const board = await Axios.post("http://localhost:3002/board");
        this.setState({ board: board.data });
      } catch (error) {
        console.error(error);
        this.setState({ board: [] });
      }
    }, 4000);
  };

  render() {
    const { board } = this.state;
    return (
      <>
        <div className="Board">
          {board &&
            board.map((board, pri) => {
              return (
                <div>
                  <div key={pri}>
                    <a href={`http://naver.com`} target={`_blank`}>
                      <div>
                        {`  ${board.idx}`}
                        {`${decodeURI(board.title)}`}{" "}
                        {`WRITER:     ${decodeURI(board.writer)}`}{" "}
                      </div>
                    </a>
                    <hr />
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}
export default Board;
