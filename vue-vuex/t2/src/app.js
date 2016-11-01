//import Vue from 'Vue';
//import Vuex from 'Vuex';
//Vue.use(Vuex);

import store from './store';
import {increment, decrement} from './actions';

const app = new Vue({
	el: '#app',
	store,
	vuex: {
		getters: {
			count: state => state.count
		},
		actions: {
			increment,
			decrement
		}
	},
})