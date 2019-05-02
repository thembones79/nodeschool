var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req, res) {
  // request handling logic...
  var stream = fs.createReadStream(process.argv[3]);
  stream.pipe(res);
});
server.listen(process.argv[2]);
