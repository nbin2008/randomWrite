import Vue from "Vue";
import Vuex from "Vuex";

Vue.use(Vuex);


const state = {
	str: ''
}

const mutations = {
	updateA: function(state,s){
		state.str = s;
	}
}

const actions = {
	updateA: function({commit},{s}){
		commit('updateA',s);
	}
}

const getters = {
	strDoubleA: state => {
		return state.str + state.str
	}
}

export const store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
})


