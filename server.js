import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("table.ejs");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});