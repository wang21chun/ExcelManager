require.config({
    baseUrl: '/',
    paths: {
    	vue:'lib/vue/vue',
    	'vue-router':'lib/vue/vue-router',
    	'vue-resource':'lib/vue/vue-resource',
    	'bootstrap':'lib/bootstrap/js/bootstrap',
    	jquery:'lib/jquery/jquery',
    	'routeMap':'js/routeMap',
    	'app':'js/app',
    	'indexHtml':'html/index.html',
    	'index':'js/index',
    	'filesHtml':'html/files/files.html',
    	'files':'js/files/files',
    	'jquery.form':'lib/jquery/jquery.form',
    	'jquery.fileupload':'lib/jquery/jquery.fileupload',
    	'jquery.ui.widget':'lib/jquery/jquery.ui.widget',
        'date-format':'js/filter/date',
        'zycHtml':'html/zyc/index.html',
        'zyc':'js/zyc/index'
    },
    map: {
        '*': {
            'css': 'lib/requirejs/css',
            'text': 'lib/requirejs/text'
        }
    },
    // enforceDefine: true,
    urlArgs: 'v=' + new Date().getTime()
});
