import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("/home/ddd/coding/my-project/questionair/questionair.ejs");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});