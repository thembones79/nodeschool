var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var arr = str.split('\n');
var count = arr.length;
console.log(count-1);