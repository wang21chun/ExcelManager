var connect = require('../db/index');

module.exports = function(callback) {
    connect(function(err, db) {
        if (err) callback(err, []);
        var collection = db.collection("test");
        collection.find().toArray(function(err, datas) {
            callback(err, datas);
        });
    });
}
