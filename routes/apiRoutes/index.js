const path = require("path");
const router = require("express").Router();
const { getNotes } = require("../../lib/notes");

router.get("/notes", (req, res) => {
  console.log(getNotes());
  res.json({ title: "Test Title", text: "Test text" });
});

router.post("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

module.exports = router;
