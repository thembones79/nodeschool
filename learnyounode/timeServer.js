var net = require("net");
var server = net.createServer(function listener(socket) {
  // socket handling logic
  var date = new Date();
  var year = date.getFullYear();
  var month =
    date.getMonth() + 1 < 10
      ? 0 + (date.getMonth() + 1).toString()
      : date.getMonth() + 1; // starts at 0
  var day =
    date.getDate() < 10 ? 0 + date.getDate().toString() : date.getDate(); // returns the day of month
  var hour = date.getHours();
  var minute = date.getMinutes();
  var formattedTime =
    year + "-" + month + "-" + day + " " + hour + ":" + minute + "\n";
  socket.end(formattedTime);
});
server.listen(process.argv[2]);
