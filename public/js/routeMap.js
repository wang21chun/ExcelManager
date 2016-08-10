define([], function() {
    return function(router) {
        router.map({
            '/': {
                component: function(resolve) {
                    require(['index'], resolve);
                },
                subRoutes: {
                    '/files': {
                        component: function(resolve) {
                            require(['files'], resolve);
                        }
                    },
                     '/zyc': {
                        component: function(resolve) {
                            require(['zyc'], resolve);
                        }
                    }
                }
            }
        });
    };
});
