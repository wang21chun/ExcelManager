var zycs = require('../core/zyc');
var connect = require('../db/index');
var _ = require('lodash');
var extend = require('extend');
module.exports = function(body) {

    var datas = typeCheck(body);
    
    if (datas.length > 0) {
        connect(function(err, db) {
            if (err) throw Error('zyc db ' + JSON.stringify(err));
            var collection = db.collection("zyc");
            collection.insertMany(datas, function(err, r) {
                if (err) console.log(err);
                //  console.log(r);
            });
        });
    }
}


function typeCheck(body) {
    var baseField = {};
    for (key in body) {
        if ('data' !== key) {
            baseField[key] = body[key];
        }
    }
    var datas;
    switch (body.type) {
        case 'probea':
        case 'probeb':
            datas = probeab(baseField, body.data);
            break;
        case 'ap':
            datas = ap(baseField, body.data);
            break;
        case 'tag':
            datas = tag(baseField, body.data);
            break;
        case 'register':
            datas = register(baseField, body.data);
            break;
        default:
            console.log(body.type);
            break;
    }

    return datas || [];
}


function probeab(baseField, data) {
    var datas = [];
    var macs = zycs.probeab(data);
    var length = macs.length;
    for (var i = 0; i < length; i++) {
        var buf = new Buffer(macs[i]);
        var rris = new Buffer(buf.length - 12);
        buf.copy(rris, 13, 0);
        var rriss = [];
        for (var j = 0; j < rris.length; j++) {
            rriss.push(rris[j])
        }
        var mac = buf.toString('utf8', 0, 12);
        var _temp = {rris:rriss,mac:mac};
        extend(_temp, baseField);
        datas.push(_temp);
    }
    return datas;
}

function ap(baseField, data) {
    var datas = [];
    var aps = zycs.ap(data);
    for (var i = 0; i < aps.length; i++) {
        var newField = _.clone(baseField);
        var buf = new Buffer(aps[i]);
        var _temp = {rris:buf[12],channel:buf[13] - 50, ssid:buf.toString('utf8', 14, buf.length),mac:buf.toString('utf8', 0, 12)};
        extend(_temp, baseField);
        datas.push(_temp);
    }
    return datas;
}

function tag(baseField, data) {
    var tags = zycs.tag(data);
    console.log(tags);
}

function register(baseField, data) {
    var registres = zycs.register(data);
    console.log(registers);
}
