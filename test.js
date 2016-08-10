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

var aps = ['940c6dd89e8cO3TP-LINK_D89E8C',
    '50bd5f07f550;3sb250',
    'd8150d8b15b4<3Lewis',
    'e4d332be2836D3TPLINK-307',
    'd8150d737cbcK3lianbushang',
    'cc34293a2060U3nunenglian',
    '44975a93813aU3FAST_813A',
    '8cf228368c1a[3MERCURY_8C1A',
    '6ce8739a3728X3xiaomi',
    'fcd7339c33d0[3TP-LINK_33D0',
    'c83a355e7e78-4Tenda_5E7E78',
    'a8154deced10Y4FAST_ECED10',
    'f0b42914f534Y4马上的小米',
    '5c63bf912c2a78ysy',
    'ec26cacc8ec6]8TP-LINK_8EC6',
    '081076277117U8Netcore',
    'd8150d9ceedeU8gaoxiaomei',
    '0c722c712e5cW8TP-LINK_712E5C',
    'ec172f1c5bfaX8TP-LINK_1C5BFA',
    '1cfa6844a1b2Y8Samuel',
    '04021f5ac700[8HUAWEI-9QAPTB',
    'c83a351f6be879梦在深巷',
    'c83a353590a8@9ajie',
    'c83a352f6b70M:Tenda_2F6B70',
    'c83a354ecf90Z:Tenda_4ECF90',
    'a4560221aca3!=xingfuzhijia',
    'bc46999039c21=caonimadeSB',
    '282cb233a14a;=zhaozhijiang',
    'a8574ee8641cQ=TP-LINK_E8641C',
    'a8574e11fdc8[=3qysoft',
    'd0aeec959708?=360wifi-ZFHJDX-2.4G',
    '8ca6df7eda39[=lza'
];

for (var i = 0; i < aps.length; i++) {
    var buf = new Buffer(aps[i]);
    var newField = {};
   // console.log(buf[12] - buf[13])
    console.log(buf.toString('utf8',14, buf.length))
    /*newField['rris'] = rrsi[0];
    newField['channel'] = rrsi[1] - 50;
    newField['ssid'] = rrsi.toString('utf8', 2, rrsi.length);
    newField['mac'] = buf.toString('utf8', 0, 12);*/
    //console.log(newField);
}
