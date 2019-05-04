var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

mongo.connect(url, { useNewUrlParser: true }, function(err, client) {
  var db = client.db(process.argv[2]);
  if (err) throw err;
  var collection = db.collection(process.argv[3]);

  collection.remove(
    {
      _id: process.argv[4]
    },
    function(err, data) {
      if (err) throw err;
      client.close();
    }
  );
});
