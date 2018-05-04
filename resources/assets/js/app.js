import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

require('./bootstrap');
window.Vue = require('vue');

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
let Myhead = require('./components/MyHeader.vue');
let Myfooter = require('./components/Myfooter.vue');
let Home = require('./components/Home.vue');
let About = require('./components/About.vue');

const routes = [
 	{path: '/home', component: Home},
 	{path: '/about', component: About}
]
const router = new VueRouter({
	mode: 'history',
  	routes // short for `routes: routes`
})

const app = new Vue({
    el: '#app',
    router,
    components: {Myhead,Myfooter}
    
});


