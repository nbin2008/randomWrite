import Vue from "Vue";
import Vuex from "Vuex";

Vue.use(Vuex);


const state = {
	str: '...'
}

const mutations = {
	update: function(state,s){
		state.str = s;
	}
}

const actions = {
	update: function({commit},{s}){
		commit('update',s);
	}
}

const getters = {
	str: state => {
		return state.str + state.str
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
})


