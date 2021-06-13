const fs = require("fs");
const path = require("path");

module.exports = (directory, ext, callback) => {
  var ext = `.${ext}`;

  fs.readdir(directory, (err, files) => {
    if (err) {
      return callback(err);
    }

    var filteredList = [];
    files.forEach((file) => {
      if (path.extname(file) === ext) {
        filteredList.push(file);
      }
    });

    return callback(null, filteredList);
  });
};
