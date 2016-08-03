var csv = require('csv');
var fs = require('fs');
module.exports = function() {
    var callback, path;
    if (arguments.length === 2) {
        path = arguments[0];
        callback = arguments[1];
    }
    if (typeof callback !== 'function') {
        throw Error("Invalid callback argument: " + (JSON.stringify(callback)));
    }
    console.log(path);
    var readStream = fs.createReadStream(path);
    readStream.pipe(csv.parse({
        columns: ['id', 'mac', 'Mode', 'RSSI', 'Channel', 'PktType', 'FMgt', 'Fctl', 'Fdata', 'FMagic', 'stime', 'etime', 'slocal', 'elocal', 'dmac'],
        auto_parse: true
    }, function(err, data) {
        if (err) throw Error("csv parse" + (JSON.stringify(err)));
        callback(null, data);
    }));

}
