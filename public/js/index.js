define(['text!indexHtml'], function(_indexHtml) {
    var Vue = require('vue'),
    index = Vue.extend({
        template: _indexHtml,
        data: function() {
            return {
            }
        },
        methods: {
            
        },
        route: {
            data: function(transition) {
                
            }
        }
    });

    Vue.component('index', index);
    return index;
});