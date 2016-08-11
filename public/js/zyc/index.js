define(['text!zycHtml'], function(_zycHtml) {
    var Vue = require('vue'),
        zycList = Vue.extend({
            template: _zycHtml,
            data: function() {
                return {
                    datas: [],
                    dataHead: {

                        'mac': 'ＭＡＣ地址',
                        'type': '类型',
                        'shop': 'shop ID',
                        'token': '探针秘钥',
                        'time': '时间',

                        'rris': 'rris',
                        'channel': '信道',
                        'ssid': 'ssid',
                        'sta': '探针MAC地址',
                    },
                    dataHeadShow: {
                        'mac': true,
                        'type': true,
                        'shop': true,
                        'token': true,
                        'time': true,
                        'rris': true,
                        'channel': true,
                        'ssid': true,
                        'sta': true,
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
