const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./models/employee.js");
const app = express();
const port = 3000;
mongoose.connect("mongodb://127.0.1:27017/company");

app.set("view engine", "ejs");
const getRandom = (arr) => {
  let rno = Math.floor(Math.random() * (arr.length - 1));
  return arr[rno];
};
app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});
app.get("/generate", async (req, res) => {
  //clear the collection before generating data
  await Employee.deleteMany({})
  //Generate random data
  let randomNames = ["mohan", "sachin", "dhawal", "sohan"];
  let randomCities = ["Raipur", "Chennai", "Kolkata", "Mumbai"];
  let randomLanguages = ["python", "java", "javascript", "c++"];
  for (let index = 0; index < 10; index++) {
    let e = await Employee.create({
      name: getRandom(randomNames),
      salary: Math.floor(Math.random() * 2000000),
      language: getRandom(randomLanguages),
      city: getRandom(randomCities),
      isManager: Math.random() > 0.5 ? true : false,
    });
    console.log(e);
  }
  res.render("index", { foo: "FOO" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
