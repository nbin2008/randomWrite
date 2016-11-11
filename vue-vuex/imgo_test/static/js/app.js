
import Vue from "vue";
import App from "../components/App.vue"
//import Vuex from "vuex";
//import babel_polyfill from "babel-polyfill";

//Vue.use(Vuex);

let vm = new Vue({
	el: '#app',
	render : h=>h(App),
})

