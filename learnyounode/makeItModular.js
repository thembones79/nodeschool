var showFilteredFilenames = require("./myModule");

showFilteredFilenames(process.argv[2], process.argv[3], function doneReading(
  err,
  fileNameArr
) {
  if (!err && fileNameArr) {
    var list = fileNameArr.join("\n");
    console.log(list);
  } else {
    console.log(err);
  }
});


