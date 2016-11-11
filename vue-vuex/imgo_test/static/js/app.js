
import Vue from "vue";
import App from "../components/App.vue"
import store from "../vuex/store.js"

let vm = new Vue({
	el: '#app',
	store,
	render : h=>h(App),
})

