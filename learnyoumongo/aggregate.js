var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var size = process.argv[2];

mongo.connect(url, { useNewUrlParser: true }, function(err, client) {
  var db = client.db("learnyoumongo");
  if (err) throw err;
  var collection = db.collection("prices");
  collection
    .aggregate([
      { $match: { size: size } },
      {
        $group: {
          _id: "total", // This can be an arbitrary string in this case
          total: {
            // $sum is the operator used here
            $avg: "$price"
          }
        }
      }
    ])
    .toArray(function(err, results) {
      if (err) throw err;
      console.log(results[0].total.toFixed(2));
      client.close();
    });
});
