var http = require("http");
var url = require("url");
var server = http.createServer(function(req, res) {
  // request handling logic...
  if (req.method !== "GET") {
    return res.end("GET please \n");
  }

  var parsedUrl = url.parse(req.url, true);
  var time = new Date(parsedUrl.query.iso);
  var result = null;

  function parseTime(time) {
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    };
  }

  function unixTime(time) {
    return { unixtime: time.getTime() };
  }

  if (parsedUrl.pathname === "/api/parsetime") {
    result = parseTime(time);
  } else if (parsedUrl.pathname === "/api/unixtime") {
    result = unixTime(time);
  }
  if (result) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(process.argv[2]);
