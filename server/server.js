const express = require("express");
const connection = require('./connection.js');
const cors = require('cors');
const tasksRoute=require("./Routers/tasks.js")
const app = express();
app.use(express.json());
const port = 8000;
app.use(cors());
app.use("/task",tasksRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })