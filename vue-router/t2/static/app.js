
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

Vue.use(VueRouter)

const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}

const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

const router = new VueRouter({
	routes: [
		{
			path: '/user/:id',
			component: User,
			children: [
				{
					path: '',
					component: UserHome,
				},
				{
					path: 'profile',
					component: UserProfile,
				},
				{
					path: 'posts',
					component: UserPosts,
				}
			]
		}
	]
})

let vm = new Vue({
	el: '#app',
	router,
	render: h => h(App),
})
