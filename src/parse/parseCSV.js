var parseCSV = require('../core/csv');
var connect = require('../db/index');

module.exports = function(filePath) {
    parseCSV(filePath, function(err, data) {
        connect(function(err, db) {
            var collection = db.collection("test");
            collection.insertMany(data, function(err, r) {
                console.log(r);
            });
        });

    });
}
