var fs = require("fs");
var path = require("path");

function showFiles() {
  fs.readdir(process.argv[2], function doneReading(err, fileNames) {
    if (!err && fileNames) {
      var filteredFileList = filterByExtension(fileNames, process.argv[3]);
      var list = filteredFileList.join("\n");
      console.log(list);
    } else {
      console.log(err);
    }
  });
}

function filterByExtension(arr, ext) {
  var filteredArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (path.extname(arr[i]) === "." + ext) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

showFiles();
