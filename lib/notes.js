const fs = require("fs");

function getNotes() {
  const data = [];
  fs.readFileSync("./db/db.json", "utf8");
  return JSON.parse(data);
}

module.exports = {
  getNotes,
};
