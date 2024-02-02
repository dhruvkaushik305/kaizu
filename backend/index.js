const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const apiRouter = require("./routes/index");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

//this is has two routes user; todos
app.use("/api/v1", apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`System's up and running @${process.env.PORT}`);
});
