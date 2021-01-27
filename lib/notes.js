const fs = require("fs");

function getNotes() {
  return fs.readFile("../db/db.json", "utf8", function (err, data) {
    if (err) throw err;
    return JSON.parse(data);
  });
}

module.exports = {
  getNotes,
};
