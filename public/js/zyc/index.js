define(['text!zycHtml'], function(_zycHtml) {
    var Vue = require('vue'),
        zycList = Vue.extend({
            template: _zycHtml,
            data: function() {
                return {
                    datas: [],
                    dataHead: {
                     
                        'sta': '探针MAC地址',
                        'shop': 'shop ID',
                        'token': '探针秘钥',
                        'time': '时间',
                        'type': '类型',
                        'mac': 'ＭＡＣ地址',
                        'rris':'rris',
                        'channel':'信道',
                        'ssid':'ssid'
                    },
                    dataHeadShow: {
                        'sta': true,
                        'shop': true,
                        'token': true,
                        'time': true,
                        'type': true,
                        'mac': true,
                        'rris':true,
                        'channel':true,
                        'ssid':true
                    }

                };
            },
            methods: {
                'list': function() {
                    this.$http.get('/zyc/list').then(function(data) {
                        this.datas = data.data;
                    });
                }
            },
            route: {
                data: function(transition) {
                    this.list();
                }
            }
        });

    Vue.component('zycList', zycList);
    return zycList;
});
