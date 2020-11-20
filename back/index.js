const express = require("express");
const app = express();
const New_Admin_Controller = require("./database/controller/New_Admin_Controller");
const auth = require("./database/Auth.js");
const isPasswordAndUserMatch = require("./database/login_admin");
let bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
const port = process.env.PORT || 3001;

app.post("/NewAdmin", [auth, New_Admin_Controller.New_Admin_Controller]);
app.post("/login", [isPasswordAndUserMatch.isPasswordAndUserMatch]);

//app.get("/NewAdmin", New_Admin_Controller.New_Admin_Controller);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
