const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("express is here");
});

app.listen(3001, () => {
  console.log("server is running ");
});
