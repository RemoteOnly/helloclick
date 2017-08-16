/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('waterfall', require('./components/Waterfall.vue'));

const app = new Vue({
    el: '#page',
    data: {
        items: []
    },
    mounted: function () {
        this.loadImages(0, 20);
    },
    methods: {
        loadImages: function (offset, limit) {
            let _this = this;
            let url = 'http://helloclick.app/load_images?offset=' + offset + '&limit=' + limit;
            console.log(url);
            axios.get(url).then(function (response) {
                _this.items = response.data;
            }).catch(function (err) {
                console.log(err);
            });
        }
    }
});
