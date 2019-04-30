


var fs = require('fs');
var count = 0;

function countLines(callback) {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    var str = fileContents.toString();
    var arr = str.split('\n');
    count = arr.length - 1;
    callback();
  })
}

function logMyNumber() {
  console.log(count);
}

countLines(logMyNumber);