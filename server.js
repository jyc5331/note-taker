const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

//urlencoded passes data into an object that the database can interact with, without this, returned data from user input would be undefined
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
