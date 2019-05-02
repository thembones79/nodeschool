var http = require("http");

http.get(process.argv[2], function callback(res) {
  var stream = "";
  res.setEncoding("utf8");
  res.on("data", function(chunk) {
    stream = stream + chunk;
  });
  res.on("error", function(e) {
    console.log("Got error: " + e.message);
  });
  res.on("end", function() {
    console.log(stream);
  });
});
