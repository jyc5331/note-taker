const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const { accessNotes } = require("../../lib/notes");
const { v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => {
  accessNotes();
  const notesArray = JSON.parse(data);
  console.log(notesArray);
  res.json(notesArray);
});

router.post("/notes", (req, res) => {
  console.log(req.body);
  fs.readFile("../../public/notes.html", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    const notesArray = JSON.parse(data);
    const newNote = req.body;
    newNote.id = uuidv4();
    notesArray.push(req.body);
    fs.writeFile(dbPath, JSON.stringify(notesArray), (err) => {
      if (err) throw err;
      console.log("DB Updated");
      res.send("File updated");
    });
  });
});

module.exports = router;
