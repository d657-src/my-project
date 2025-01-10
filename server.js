import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/table", (req, res) => {
  res.render("table.ejs");
});

app.get("/questionair", (req, res) => {
  res.render("questionair.ejs");
});

app.get("/page", (req, res) => {
  res.render("page.ejs");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});