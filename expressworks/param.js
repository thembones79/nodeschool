const express = require("express");
const app = express();

app.put("/message/:id", function(req, res, next) {
  const hash = require("crypto")
    .createHash("sha1")
    .update(new Date().toDateString() + req.params.id)
    .digest("hex");
  res.end(hash);
  next();
});

console.log("App is listen on port: " + process.argv[2]);
app.listen(process.argv[2]);
