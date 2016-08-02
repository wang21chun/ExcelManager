define(['vue', 'vue-router', 'vue-resource', 'routeMap', 'jquery', 'bootstrap', 'jquery.form','jquery.ui.widget', 'jquery.fileupload'], function(Vue, VueRouter, VueResource, routeMap, jquery, bootstrap, jf, jui,jfu) {

    Vue.use(VueRouter);
    var App = Vue.extend({});

    var router = new VueRouter({
        hashbang: false,
    });
    routeMap(router);
    router.start(App, '#App');
});
