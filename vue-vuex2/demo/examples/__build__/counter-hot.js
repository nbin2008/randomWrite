webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(301);
	module.exports = __webpack_require__(334);


/***/ },

/***/ 308:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var increment = exports.increment = function increment(_ref) {
	  var commit = _ref.commit;
	  return commit('increment');
	};
	var decrement = exports.decrement = function decrement(_ref2) {
	  var commit = _ref2.commit;
	  return commit('decrement');
	};
	
	var incrementIfOdd = exports.incrementIfOdd = function incrementIfOdd(_ref3) {
	  var commit = _ref3.commit,
	      state = _ref3.state;
	
	  if ((state.count + 1) % 2 === 0) {
	    commit('increment');
	  }
	};
	
	var incrementAsync = exports.incrementAsync = function incrementAsync(_ref4) {
	  var commit = _ref4.commit;
	
	  setTimeout(function () {
	    commit('decrement');
	  }, 1000);
	};

/***/ },

/***/ 309:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var count = exports.count = function count(state) {
	  return state.count;
	};
	
	var limit = 5;
	
	var recentHistory = exports.recentHistory = function recentHistory(state) {
	  var end = state.history.length;
	  var begin = end - limit < 0 ? 0 : end - limit;
	  return state.history.slice(begin, end).toString().replace(/,/g, ', ');
	};

/***/ },

/***/ 310:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var increment = exports.increment = function increment(state) {
	  state.count++;
	  state.history.push('increment');
	};
	
	var decrement = exports.decrement = function decrement(state) {
	  state.count--;
	  state.history.push('decrement');
	};

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(47);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _store = __webpack_require__(335);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _Counter = __webpack_require__(369);
	
	var _Counter2 = _interopRequireDefault(_Counter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	new _vue2.default({
	  el: '#app',
	  store: _store2.default,
	  render: function render(h) {
	    return h(_Counter2.default);
	  }
	});

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vue = __webpack_require__(47);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vuex = __webpack_require__(88);
	
	var _vuex2 = _interopRequireDefault(_vuex);
	
	var _getters = __webpack_require__(309);
	
	var getters = _interopRequireWildcard(_getters);
	
	var _actions = __webpack_require__(308);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _mutations = __webpack_require__(310);
	
	var mutations = _interopRequireWildcard(_mutations);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vuex2.default);
	
	var state = {
	  count: 0,
	  history: []
	};
	
	var store = new _vuex2.default.Store({
	  state: state,
	  getters: getters,
	  actions: actions,
	  mutations: mutations
	});
	
	if (true) {
	  module.hot.accept([309, 308, 310], function () {
	    store.hotUpdate({
	      getters: __webpack_require__(309),
	      actions: __webpack_require__(308),
	      mutations: __webpack_require__(310)
	    });
	  });
	}
	
	exports.default = store;

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vuex = __webpack_require__(88);
	
	exports.default = {
	  computed: (0, _vuex.mapGetters)(['count', 'recentHistory']),
	  methods: (0, _vuex.mapActions)(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(353)
	
	/* template */
	var __vue_template__ = __webpack_require__(382)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\randomWrite\\vue-vuex2\\examples\\counter-hot\\Counter.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(46)
	  hotAPI.install(__webpack_require__(47), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4b9ed0b6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4b9ed0b6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Counter.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', ["\n  Value: " + _vm._s(_vm.count) + "\n  ", _vm._h('button', {
	    on: {
	      "click": _vm.increment
	    }
	  }, ["+"]), " ", _vm._h('button', {
	    on: {
	      "click": _vm.decrement
	    }
	  }, ["-"]), " ", _vm._h('button', {
	    on: {
	      "click": _vm.incrementIfOdd
	    }
	  }, ["Increment if odd"]), " ", _vm._h('button', {
	    on: {
	      "click": _vm.incrementAsync
	    }
	  }, ["Increment async"]), " ", _vm._h('div', [_vm._h('div', ["Recent History (last 5 entries): " + _vm._s(_vm.recentHistory)])])])
	},staticRenderFns: []}
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(46).rerender("data-v-4b9ed0b6", module.exports)
	  }
	}

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3VudGVyLWhvdC9zdG9yZS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvdW50ZXItaG90L3N0b3JlL2dldHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY291bnRlci1ob3Qvc3RvcmUvbXV0YXRpb25zLmpzIiwid2VicGFjazovLy8uL2NvdW50ZXItaG90L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb3VudGVyLWhvdC9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vQ291bnRlci52dWU/MzQ1NSIsIndlYnBhY2s6Ly8vLi9jb3VudGVyLWhvdC9Db3VudGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb3VudGVyLWhvdC9Db3VudGVyLnZ1ZT84NWIxIl0sIm5hbWVzIjpbImluY3JlbWVudCIsImNvbW1pdCIsImRlY3JlbWVudCIsImluY3JlbWVudElmT2RkIiwic3RhdGUiLCJjb3VudCIsImluY3JlbWVudEFzeW5jIiwic2V0VGltZW91dCIsImxpbWl0IiwicmVjZW50SGlzdG9yeSIsImVuZCIsImhpc3RvcnkiLCJsZW5ndGgiLCJiZWdpbiIsInNsaWNlIiwidG9TdHJpbmciLCJyZXBsYWNlIiwicHVzaCIsImVsIiwic3RvcmUiLCJyZW5kZXIiLCJoIiwiZ2V0dGVycyIsImFjdGlvbnMiLCJtdXRhdGlvbnMiLCJ1c2UiLCJTdG9yZSIsIm1vZHVsZSIsImhvdCIsImFjY2VwdCIsImhvdFVwZGF0ZSIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxLQUFNQSxnQ0FBWSxTQUFaQSxTQUFZO0FBQUEsT0FBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsVUFBZ0JBLE9BQU8sV0FBUCxDQUFoQjtBQUFBLEVBQWxCO0FBQ0EsS0FBTUMsZ0NBQVksU0FBWkEsU0FBWTtBQUFBLE9BQUdELE1BQUgsU0FBR0EsTUFBSDtBQUFBLFVBQWdCQSxPQUFPLFdBQVAsQ0FBaEI7QUFBQSxFQUFsQjs7QUFFQSxLQUFNRSwwQ0FB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QUFDO0FBQ0Qsa0NBQWlDOztBQUVqQzs7Ozs7Ozs7QUNyQ0EsaUJBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoiY291bnRlci1ob3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5jcmVtZW50ID0gKHsgY29tbWl0IH0pID0+IGNvbW1pdCgnaW5jcmVtZW50JylcbmV4cG9ydCBjb25zdCBkZWNyZW1lbnQgPSAoeyBjb21taXQgfSkgPT4gY29tbWl0KCdkZWNyZW1lbnQnKVxuXG5leHBvcnQgY29uc3QgaW5jcmVtZW50SWZPZGQgPSAoeyBjb21taXQsIHN0YXRlIH0pID0+IHtcbiAgaWYgKChzdGF0ZS5jb3VudCArIDEpICUgMiA9PT0gMCkge1xuICAgIGNvbW1pdCgnaW5jcmVtZW50JylcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaW5jcmVtZW50QXN5bmMgPSAoeyBjb21taXQgfSkgPT4ge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb21taXQoJ2RlY3JlbWVudCcpXG4gIH0sIDEwMDApXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvdW50ZXItaG90L3N0b3JlL2FjdGlvbnMuanNcbiAqKi8iLCJleHBvcnQgY29uc3QgY291bnQgPSBzdGF0ZSA9PiBzdGF0ZS5jb3VudFxuXG5jb25zdCBsaW1pdCA9IDVcblxuZXhwb3J0IGNvbnN0IHJlY2VudEhpc3RvcnkgPSBzdGF0ZSA9PiB7XG4gIGNvbnN0IGVuZCA9IHN0YXRlLmhpc3RvcnkubGVuZ3RoXG4gIGNvbnN0IGJlZ2luID0gZW5kIC0gbGltaXQgPCAwID8gMCA6IGVuZCAtIGxpbWl0XG4gIHJldHVybiBzdGF0ZS5oaXN0b3J5XG4gICAgLnNsaWNlKGJlZ2luLCBlbmQpXG4gICAgLnRvU3RyaW5nKClcbiAgICAucmVwbGFjZSgvLC9nLCAnLCAnKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb3VudGVyLWhvdC9zdG9yZS9nZXR0ZXJzLmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IGluY3JlbWVudCA9IHN0YXRlID0+IHtcbiAgc3RhdGUuY291bnQrK1xuICBzdGF0ZS5oaXN0b3J5LnB1c2goJ2luY3JlbWVudCcpXG59XG5cbmV4cG9ydCBjb25zdCBkZWNyZW1lbnQgPSBzdGF0ZSA9PiB7XG4gIHN0YXRlLmNvdW50LS1cbiAgc3RhdGUuaGlzdG9yeS5wdXNoKCdkZWNyZW1lbnQnKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb3VudGVyLWhvdC9zdG9yZS9tdXRhdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi9Db3VudGVyLnZ1ZSdcblxubmV3IFZ1ZSh7XG4gIGVsOiAnI2FwcCcsXG4gIHN0b3JlLFxuICByZW5kZXI6IGggPT4gaChDb3VudGVyKVxufSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY291bnRlci1ob3QvYXBwLmpzXG4gKiovIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4J1xuaW1wb3J0ICogYXMgZ2V0dGVycyBmcm9tICcuL2dldHRlcnMnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCAqIGFzIG11dGF0aW9ucyBmcm9tICcuL211dGF0aW9ucydcblxuVnVlLnVzZShWdWV4KVxuXG5jb25zdCBzdGF0ZSA9IHtcbiAgY291bnQ6IDAsXG4gIGhpc3Rvcnk6IFtdXG59XG5cbmNvbnN0IHN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoe1xuICBzdGF0ZSxcbiAgZ2V0dGVycyxcbiAgYWN0aW9ucyxcbiAgbXV0YXRpb25zXG59KVxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdChbXG4gICAgJy4vZ2V0dGVycycsXG4gICAgJy4vYWN0aW9ucycsXG4gICAgJy4vbXV0YXRpb25zJ1xuICBdLCAoKSA9PiB7XG4gICAgc3RvcmUuaG90VXBkYXRlKHtcbiAgICAgIGdldHRlcnM6IHJlcXVpcmUoJy4vZ2V0dGVycycpLFxuICAgICAgYWN0aW9uczogcmVxdWlyZSgnLi9hY3Rpb25zJyksXG4gICAgICBtdXRhdGlvbnM6IHJlcXVpcmUoJy4vbXV0YXRpb25zJylcbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb3VudGVyLWhvdC9zdG9yZS9pbmRleC5qc1xuICoqLyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICBWYWx1ZToge3sgY291bnQgfX1cbiAgICA8YnV0dG9uIEBjbGljaz1cImluY3JlbWVudFwiPis8L2J1dHRvbj5cbiAgICA8YnV0dG9uIEBjbGljaz1cImRlY3JlbWVudFwiPi08L2J1dHRvbj5cbiAgICA8YnV0dG9uIEBjbGljaz1cImluY3JlbWVudElmT2RkXCI+SW5jcmVtZW50IGlmIG9kZDwvYnV0dG9uPlxuICAgIDxidXR0b24gQGNsaWNrPVwiaW5jcmVtZW50QXN5bmNcIj5JbmNyZW1lbnQgYXN5bmM8L2J1dHRvbj5cbiAgICA8ZGl2PlxuICAgICAgPGRpdj5SZWNlbnQgSGlzdG9yeSAobGFzdCA1IGVudHJpZXMpOiB7eyByZWNlbnRIaXN0b3J5IH19PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKFtcbiAgICAnY291bnQnLFxuICAgICdyZWNlbnRIaXN0b3J5J1xuICBdKSxcbiAgbWV0aG9kczogbWFwQWN0aW9ucyhbXG4gICAgJ2luY3JlbWVudCcsXG4gICAgJ2RlY3JlbWVudCcsXG4gICAgJ2luY3JlbWVudElmT2RkJyxcbiAgICAnaW5jcmVtZW50QXN5bmMnXG4gIF0pXG59XG48L3NjcmlwdD5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIENvdW50ZXIudnVlPzU0MzM0YmM4XG4gKiovIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ291bnRlci52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTRiOWVkMGI2IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NvdW50ZXIudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkY6XFxcXHJhbmRvbVdyaXRlXFxcXHZ1ZS12dWV4MlxcXFxleGFtcGxlc1xcXFxjb3VudGVyLWhvdFxcXFxDb3VudGVyLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNGI5ZWQwYjZcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNGI5ZWQwYjZcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBDb3VudGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9jb3VudGVyLWhvdC9Db3VudGVyLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDM2OVxuICoqIG1vZHVsZSBjaHVua3MgPSA1XG4gKiovIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7XG4gIHJldHVybiBfdm0uX2goJ2RpdicsIFtcIlxcbiAgVmFsdWU6IFwiICsgX3ZtLl9zKF92bS5jb3VudCkgKyBcIlxcbiAgXCIsIF92bS5faCgnYnV0dG9uJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5pbmNyZW1lbnRcbiAgICB9XG4gIH0sIFtcIitcIl0pLCBcIiBcIiwgX3ZtLl9oKCdidXR0b24nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmRlY3JlbWVudFxuICAgIH1cbiAgfSwgW1wiLVwiXSksIFwiIFwiLCBfdm0uX2goJ2J1dHRvbicsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uaW5jcmVtZW50SWZPZGRcbiAgICB9XG4gIH0sIFtcIkluY3JlbWVudCBpZiBvZGRcIl0pLCBcIiBcIiwgX3ZtLl9oKCdidXR0b24nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmluY3JlbWVudEFzeW5jXG4gICAgfVxuICB9LCBbXCJJbmNyZW1lbnQgYXN5bmNcIl0pLCBcIiBcIiwgX3ZtLl9oKCdkaXYnLCBbX3ZtLl9oKCdkaXYnLCBbXCJSZWNlbnQgSGlzdG9yeSAobGFzdCA1IGVudHJpZXMpOiBcIiArIF92bS5fcyhfdm0ucmVjZW50SGlzdG9yeSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTRiOWVkMGI2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+Ly45LjkuMEB2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNGI5ZWQwYjYhLi4vfi8uOS45LjBAdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY291bnRlci1ob3QvQ291bnRlci52dWVcbiAqKiBtb2R1bGUgaWQgPSAzODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gNVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=