var http = require("http");

http.get(process.argv[2], function callback(res) {
    res.setEncoding('utf8');
  res.on("data", function(chunk) {
    console.log(chunk);
  });
  res.on("error", function(e) {
    console.log("Got error: " + e.message);
  });
});
