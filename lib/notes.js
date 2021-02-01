const fs = require("fs");

function accessNotes() {
  const data = fs.readFileSync("./db/db.json", "utf8");
  return JSON.parse(data);
}

module.exports = {
  accessNotes,
};
