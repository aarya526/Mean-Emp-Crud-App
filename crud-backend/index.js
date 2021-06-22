const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const cors = require("cors");
const { mongoose } = require("./db.js");
var empController = require("./controller/employeeController.js");
var app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Server Started at Port : " + port));
app.use("/employee", empController);

//For Heroku Deployment
app.use(express.static(path.join(__dirname, "public")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
