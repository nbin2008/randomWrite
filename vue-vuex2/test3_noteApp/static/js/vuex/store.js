import Vue from "Vue";
import Vuex from "Vuex";

Vue.use(Vuex);

const addNote = "addNote";
const editNote = "editNote";
const deleteNote = "deleteNote";
const toggleFavorite = "toggleFavorite";
const setActiveNote = "setActiveNote";

const state = {
	notes: [],
	activeNote: {},
}

const mutations = {
	[addNote](state) {
		const newNote = {
	    	text: 'New note',
	      	favorite: false
	    }
	    state.notes.push(newNote);
	    state.activeNote = newNote;
	},
	[editNote](state, text) {
		state.activeNote.text = text;
	},
}

const actions = {
	[addNote]({commit}) {
		commit('addNote');
	},
	[editNote]({commit},{text}){
		commit('editNote',text);
	}
}

const getters = {
	
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
})


