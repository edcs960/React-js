import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import "./App.css";
import Axios from "axios";
//import Addcal from "./addcal";
//import Fullcalendar from "@fullcalendar/react";
//import dayGridPlugin from "@fullcalendar/daygrid";
import Login from "./Login";
//import style from "./App.css";
import Signup from "./Signup";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caldata: [],
    };
  }

  componentDidMount() {
    this.init();
  }

  init = () => {
    setInterval(async () => {
      try {
        const calData = await Axios.post("http://localhost:3002/cal");

        this.setState({ caldata: calData.data });
      } catch (error) {
        console.error(error);
        this.setState({ caldata: [] });
      }
    }, 3000);
  };

  render() {
    const { caldata } = this.state;
    const filteredData = caldata.map(({ title, color, date, end }) => ({
      title,
      color,
      date,
      end,
    }));
    console.log(filteredData);
    return (
      <BrowserRouter>
        <>
          <Switch>
            <Route exact path={"/"} component={Login}/>
            <Route exact path={"/signup"} component={Signup}/>
          </Switch>
        </>
      </BrowserRouter>
    )
  }
}
export default App;
