var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var firstName = process.argv[2];
var lastName = process.argv[3];
var doc = {
  firstName: firstName,
  lastName: lastName
};

mongo.connect(url, { useNewUrlParser: true }, function(err, client) {
  var db = client.db("learnyoumongo");
  if (err) throw err;
  var collection = db.collection("docs");
  collection.insert(doc, function(err, data) {
      if (err) throw err;
      console.log(JSON.stringify(doc));
      client.close();
    }
  );
});
