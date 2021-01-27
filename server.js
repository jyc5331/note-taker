const express = require("express");
const app = express();
const port = 8000;
const htmlRoutes = require("./routes/htmlRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", htmlRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
