
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
	href: ""
}

const mutations = {
	UPDATE_HREF(state, text){
		state.href = text;
	}
}

export default new Vuex.Store({
	state,
	mutations
})

