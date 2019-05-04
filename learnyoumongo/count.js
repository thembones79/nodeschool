var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

mongo.connect(url, { useNewUrlParser: true }, function(err, client) {
  var db = client.db("learnyoumongo");
  var age = process.argv[2];
  if (err) throw err;
  var collection = db.collection("parrots");

  collection.count(
    {
      age: {
        $gt: +age
      }
    },
    function(err, count) {
      if (err) throw err;
      console.log(count);
      client.close();
    }
  );
});
