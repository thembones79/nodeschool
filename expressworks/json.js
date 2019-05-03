const express = require("express");
const app = express();
const fs = require("fs");

app.get("/books", function(req, res) {
  fs.readFile(process.argv[3], function doneReading(err, fileContents) {
    let str = fileContents.toString();
    const object = JSON.parse(str);
    res.send(object);
  });
});

app.listen(process.argv[2]);
