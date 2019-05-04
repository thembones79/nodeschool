var mongo = require("mongodb").MongoClient;
var age = process.argv[2];
var url = "mongodb://localhost:27017";

mongo.connect(url, function(err, client) {
  var db = client.db("learnyoumongo");
  if (err) throw err;
  var parrots = db.collection("parrots");
  parrots
    .find({
      age: {
        $gt: +age
      }
    })
    .toArray(function(err, docs) {
      if (err) throw err;
      console.log(docs);
      client.close();
    });
});
