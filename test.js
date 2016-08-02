var csv = require('csv');
var fs = require('fs');
var read = fs.createReadStream('test_records.csv');

read.pipe(csv.parse({
    columns: ['id', 'mac', 'Mode', 'RSSI', 'Channel', 'PktType', 'FMgt', 'Fctl', 'Fdata', 'FMagic', 'stime', 'etime', 'slocal', 'elocal', 'dmac'],
    auto_parse: true
},function(err, data) {
    console.log(data);
}));
