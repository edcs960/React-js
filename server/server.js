// server.js

const express = require("express");
const bodyParser = require('body-parser');       
const app = express();
const api = require("./routes/index.js");
const user = require("./routes/user.js");
const board = require("./routes/board.js");
const calendar = require("./routes/caldata.js");
const addcalendar = require("./routes/addcalendar.js");
const login = require('./routes/login.js');
const signup = require('./routes/signup.js');
const map = require('./routes/map');

const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use("/api", api);
app.use("/user", user);
app.use("/board", board);
app.use("/cal", calendar);
app.use("/addcalendar", addcalendar);
app.use("/login",login);
app.use("/signup",signup);
app.use("/map",map);

const port = 3002;
app.listen(port, () => console.log(`Listen ${port}`));


