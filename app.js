const express = require("express");
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
const read = require("./readData");
// const DB = process.env.DATABASE;
mongoose.connect('mongodb://localhost:27017/Payment', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log("connection successful");
}).catch((err) => console.log(err));



app.use(bodyParser.urlencoded({
    extended: true
  }));
  
  app.use(bodyParser.json());

  app.get("/", (req, res)=>{
    res.write("<h1>Yoyo</h1>");
  })
  app.get("/readdata", (req, res) => {
    console.log("Reading data");
    read();
    res.write("<h1>Reading Data...");
  })
  app.listen(process.env.PORT||5000, function() {
    console.log("Server started on port 5000");
  });