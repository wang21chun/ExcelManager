/*var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
  var collection = db.collection("test");
  // Insert a single document
  collection.insertOne({hello:'world_no_safe'});
 collection.find().toArray(function(err, item) {
    console.log(item);
      db.close();
    })
});*/


var connect = require('./src/db/index');
connect(function(err, db) {
    var collection = db.collection("test");
    collection.find().toArray(function(err, item) {
        console.log(item);
    })
})
