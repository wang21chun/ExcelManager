define(['text!filesHtml'], function(_filesHtml) {
    var Vue = require('vue'),
        files = Vue.extend({
            template: _filesHtml,
            data: function() {
                return {
                    progres:'0%',
                    datas:[]

                };
            },
            methods: {
                'upload': function() {
                    var _this = this;
                    $('#fileupload').fileupload({
                        url: '/upload',
                        type: 'POST',
                        done: function(e, data) {
                            $.each(data.result, function(index, file) {
                                
                            });
                        },
                        progressall: function(e, data) {
                            var progress = parseInt(data.loaded / data.total * 100, 10);
                            _this.$set('progres',progress+"%");
                        },
                        success:function(data){
                            _this.datas = data;
                        }
                    });
                    $('#myModal').modal('show');
                }
            },
            route: {
                data: function(transition) {

                }
            }
        });

    Vue.component('files', files);
    return files;
});
