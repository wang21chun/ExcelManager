var _ = require('lodash');

function probeab(data) {
    var datas = data.split('\u0001');
    return _.filter(datas, function(v) {
        return '' != v && v.length > 0;
    })
}

function ap(data) {
    var datas = data.split('\u0001');
    return _.filter(datas, function(v) {
        return '' != v && v.length > 0;
    })
}

function register(data) {
    var datas = data.split('\u0001');
    var user = _.filter(datas, function(v) {
        return '' != v && v.length > 0;
    });
    var attrs = user.split('&');
    var userAttrs = {};
    _(attrs).forEach(function(v) {
        var kv = v.split('=');
        userAttrs[kv[0]] = kv[1];
    });

    return userAttrs;
}


function tag(data){
 var datas = data.split('\u0001');
    return _.filter(datas, function(v) {
        return '' != v && v.length > 0;
    });


}
module.exports = {
    probeab: probeab,
    ap: ap,
    register:register,
    tag:tag
}
