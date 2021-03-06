var crypto = require('crypto');
var fs = require('fs');
module.exports = {
    signMD5: function(data) {
        'use strict';
        var buf;
        if (Buffer.isBuffer(data)) {
            var size = data.length;
            buf = new Buffer(size);
            data.copy(buf, 0, 0, size);
        }
        return crypto.createHash('md5').update(buf.toString()).digest("hex");
    }
};
