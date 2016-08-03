define(['text!filesHtml'], function(_filesHtml) {
    var Vue = require('vue'),
        files = Vue.extend({
            template: _filesHtml,
            data: function() {
                return {
                    progres: '0%',
                    datas: [],
                    number: 0,
                    dataHead: {
                        'id': '编号',
                        'mac': '被探测设备的MAC地址',
                        'Mode': '被探测设备的类型',
                        'RSSI': '信号强度',
                        'Channel': '信道',
                        'PktType': '报文类型',
                        'FMgt': '报文计数',
                        'Fctl': '报文计数',
                        'Fdata': '报文计数',
                        'FMagic': '报文计数',
                        'stime': '开始时间',
                        'etime': '结束时间',
                        'slocal': '记录开始',
                        'elocal': '记录结束',
                        'dmac': '设备的ＭＡＣ地址'
                    },
                    dataHeadShow: {
                        'id': true,
                        'mac': true,
                        'Mode': true,
                        'RSSI': true,
                        'Channel': true,
                        'PktType': true,
                        'FMgt': true,
                        'Fctl': true,
                        'Fdata': true,
                        'FMagic': true,
                        'stime': true,
                        'etime': true,
                        'slocal': true,
                        'elocal': true,
                        'dmac': true
                    }

                };
            },
            methods: {
                'upload': function() {
                    var _this = this;
                    $('#fileupload').fileupload({
                        url: '/upload',
                        type: 'POST',
                        start: function(e) {
                            console.log(++_this.number);
                        },
                        done: function(e, data) {
                            $.each(data.result, function(index, file) {});
                        },
                        progressall: function(e, data) {
                            var progress = parseInt(data.loaded / data.total * 100, 10);
                            console.log(progress);
                            _this.$set('progres', progress + "%");
                        },
                        success: function(data) {
                            _this.list();
                        }
                    });
                    $('#myModal').modal('show');
                },
                'list': function() {
                    this.$http.get('/list').then(function(data) {
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

    Vue.component('files', files);
    return files;
});
