const fs = require("fs");

function accessNotes() {
  const data = fs.readFileSync("./db/db.json", "utf8");
  let notesArray = [];
  if (data != "") {
    notesArray = JSON.parse(data);
  }
  return notesArray;
}

function addNote(note) {
  const data = fs.readFileSync("./db/db.json", "utf8");
  let notesArray = [];
  if (data != "") {
    notesArray = JSON.parse(data);
  }
  notesArray.push(note);

  fs.writeFileSync("./db/db.json", JSON.stringify(notesArray));
  return true;
}

module.exports = {
  accessNotes,
  addNote,
};
