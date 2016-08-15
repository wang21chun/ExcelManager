var connect = require('../db/index');

module.exports = function(callback) {
	callback(null, []);
   /* connect(function(err, db) {
        if (err) callback(err, []);
        var collection = db.collection("zyc");
        collection.find().sort({'_id':-1}).limit(100).toArray(function(err, datas) {
            callback(err, datas);
        });
    });*/
}
