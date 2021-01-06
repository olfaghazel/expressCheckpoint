const express = require("express");
const app = express();
var router = express.Router();
const port = 4000;
app.set("view engine", "pug");
app.set("views", "./views");
const moment = require("moment");

/* Time Condition */
const verif = (req, res, next) => {
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day.some(
    (el) =>
      el === moment().format("dddd") &&
      Number(moment().format("HH")) >= 9 &&
      Number(moment().format("HH")) <= 16
  )
    ? next()
    : res.render("error");
};
/* GET home page. */
app.get("/", verif, (req, res) => {
  res.render("home");
});
/* GET sercices page. */
app.get("/services", verif, (req, res) => {
  res.render("services");
});

/* GET contact page. */
app.get("/contact", verif, (req, res) => {
  res.render("contact");
});

app.listen(port, function () {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",
    port
  );
});

module.exports = router;
