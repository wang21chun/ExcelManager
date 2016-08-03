define(['vue'], function(Vue) {
    var date = new Date();
    Vue.filter('format', function(value) {
        date.setTime(value)
        return date.toLocaleString();
    })
});
