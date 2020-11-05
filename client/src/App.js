import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import Board from "./Boardall";
import KakaoMap from "./mapKakao";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Switch>
            <Route exact path={"/"} component={Login}/>
            <Route exact path={"/signup"} component={Signup}/>
            <Route exact path={"/board"} component={Board}/>
            <Route exact path={"/map"} component={KakaoMap}/>
          </Switch>
        </>
      </BrowserRouter>
    )
  }
}
export default App;
