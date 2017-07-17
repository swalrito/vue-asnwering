// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import container from './components/container'
import routes from './router/index'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
	router
}).$mount('#app')