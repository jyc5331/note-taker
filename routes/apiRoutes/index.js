const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const { accessNotes, addNote } = require("../../lib/notes");
const { v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => {
  const notesArray = accessNotes();
  console.log(notesArray);
  res.json(notesArray);
});

router.post("/notes", (req, res) => {
  if (!req.body.title) {
    return;
  }
  console.log(req.body);
  const newNote = req.body;
  newNote.id = uuidv4();
  const saveResult = addNote(newNote);
  if (saveResult === true) {
    res.json(newNote);
  } else {
    res.json([]);
  }
});

module.exports = router;
