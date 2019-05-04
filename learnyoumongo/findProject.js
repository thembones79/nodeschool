var mongo = require("mongodb").MongoClient;
var age = process.argv[2];
var url = "mongodb://localhost:27017";

mongo.connect(url, { useNewUrlParser: true }, function(err, client) {
  var db = client.db("learnyoumongo");
  if (err) throw err;
  var parrots = db.collection("parrots");
  parrots
    .find(
      {
        age: {
          $gt: +age
        }
      },
      {projection: { _id: 0, name: 1 , age: 1}}
    )

    .toArray(function(err, docs) {
      if (err) throw err;
      console.log(docs);
      client.close();
    });
});
