const express = require("express");
const app = express();
app.get("/search", function(req, res) {
    const json = req.query;
  res.send(json);
});
app.listen(process.argv[2]);
