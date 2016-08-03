define(['vue', 'vue-router', 'vue-resource', 'routeMap', 'date-format', 'jquery', 'bootstrap', 'jquery.form', 'jquery.ui.widget', 'jquery.fileupload'], function(Vue, VueRouter, VueResource, routeMap, dateFormat, jquery, bootstrap, jf, jui, jfu) {

    Vue.use(VueRouter);
    Vue.use(VueResource);
    var App = Vue.extend({});

    Vue.http.options.emulateHTTP = true;
    var router = new VueRouter({
        hashbang: false,
    });
    routeMap(router);
    router.start(App, '#App');
});
