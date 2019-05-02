var fs = require("fs");
var path = require("path");

function showFilteredFilenames(dirPath,ext,callback) {
  fs.readdir(dirPath, function doneReading(err, fileNames) {
    if (!err && fileNames) {
      var filteredFileList = filterByExtension(fileNames, ext);
      callback(null, filteredFileList);
    } else {
      callback(err);
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

module.exports=showFilteredFilenames;
