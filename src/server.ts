import express from 'express';
import path from 'path';

const app = express();
app.use(express.static(path.join(__dirname, "../static")));
// set the view engine to ejs
app.set("views", path.join(__dirname, "../view"));
app.set("view engine", "ejs");

const port = 3000;

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
