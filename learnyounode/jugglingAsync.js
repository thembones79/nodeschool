var http = require("http");

function streamRoller(url, next) {
  http.get(url, function callback(res) {
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
      if (next) {
        next();
      }
    });
  });
}

streamRoller(
  process.argv[2],
  streamRoller(
      process.argv[3],
      streamRoller(
          process.argv[4],
          null))
);
