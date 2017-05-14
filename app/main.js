requirejs.config({
    paths:{
        lib: '../lib',
        text: '../lib/text.2.0.15',
        vue: '../lib/vue.2.3.3',
        vueRouter: '../lib/vue-route',
        vuex: '../lib/vuex',
        jquery: '../lib/jquery-3.2.1',
        css: '../lib/css',
        iview: '../lib/iview',
        app: './app'
    },
    map: {
        '*':{
            css: '../lib/css'
        }
    },
    shim:{
        bootstrap:{
            deps:[
                'jquery'
            ]
        },
        vue: {
            deps:[
                'css!../skin/main.css'
            ]
        },
        iview: {
            deps: [
                'css!../skin/iview.css'
            ]
        }
    }
})


require(['./app'],function(app){
    debugger
    var _app = app.createApp();
    _app.registerGlobalComponents(['title', 'route', 'layout/default']).done(function(){
        var vue = _app.createVue();
        vue.$mount('#app');
    });
});
