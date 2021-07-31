const express = require("express");
const mongoose = require("mongoose");
const indexRouter = require("./router/index.routes");
const studentRouter = require("./router/student.routes");
const app = express();
const methodOverride = require("method-override");
require("dotenv").config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.CONNECT);
    console.log("successful connection !");
  } catch (e) {
    console.log(e);
    console.log("Connection Failed !");
  }
};
connect();

app.set("view engine", "ejs");
app.use(methodOverride("_method")); //! ghi đè phương thức dùng method
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);
app.use("/student", studentRouter);

app.listen(process.env.PORT || 3000);
