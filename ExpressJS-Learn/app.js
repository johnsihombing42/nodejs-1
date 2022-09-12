const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Ini halaman about");
});

app.get("/contacts", (req, res) => {
  res.send("Hello World!");
});

app.use("/", (req, res) => {
  res.send("Error 404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
