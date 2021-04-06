//import express from "express";

const express = require("express");
const db = require("./db/models");
const cors = require("cors");
const bodyParser = require("body-parser");
const USRroute = require("./routes/USRroute");
const MSGroute = require("./routes/MSGroute");
const Roomroute = require("./routes/Roomroute");








const app = express();

app.use(bodyParser.json());


app.use("/USR", USRroute);
app.use("/MSG", MSGroute);
app.use("/Room", Roomroute);



app.use(cors());
app.use(express.json());   

//App function
const run = async () => {
  try {
    await db.sequelize.sync();

    console.log("Connection to the database successful!");
    await app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};


run();
