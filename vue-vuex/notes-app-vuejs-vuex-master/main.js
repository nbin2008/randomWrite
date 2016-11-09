import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'

console.log( JSON.parse(JSON.stringify(App)) );
console.log( [1,2].includes(1) );

new Vue({
  store, // inject store to all children
  el: 'body',
  components: { App }
})
