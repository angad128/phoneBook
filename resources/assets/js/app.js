require('./bootstrap');

window.Vue = require('vue');

let Myhead = require('./components/MyHeader.vue');
let Myfooter = require('./components/Myfooter.vue');

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app',
    components: {Myhead,Myfooter}
    
});
