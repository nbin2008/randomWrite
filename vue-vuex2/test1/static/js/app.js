
import 'babel-polyfill';
import Vue from "Vue";
//import Vuex from "Vuex";
import store from "../vuex/store.js";
import App from "../components/App.vue";

//Vue.use(Vuex);

let app = new Vue({
	el: '#app',
	store,
	render: h => h(App),
})

