const express = require("express");
const app = express();
const port = 3000;

//gunakan ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //res.sendFile("./index.html", { root: __dirname });
  res.render("index", { nama: "John Tri Putra" });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.use("/", (req, res) => {
  res.send("Error 404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
