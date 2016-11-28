
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

Vue.use(VueRouter);

const Foo = {template: '<div>foo</div>'};
const Bar = {template: '<div>bar</div>'};

const routes = [
	{ path: '/foo', component: Foo },
	{ path: '/bar', component: Bar },
]

const router = new VueRouter({
	routes,
})

/*router.beforeEach((to, from, next) => {
	console.log(to);
	console.log(from);
	console.log(next);
})*/

let vm = new Vue({
	el: '#app',
	router,
	render: h => h(App),
})

