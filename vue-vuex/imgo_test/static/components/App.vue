<template>
	<div id="app">
		<div class="header">
			<header>{{ headText }}</header>
		</div>
		<div class="body">
			<sidebar></sidebar>
			<cc></cc>
		</div>
		<div class="footer">
			<footer>{{ footText }}</footer>
		</div>
	</div>
</template>

<script>
	import Sidebar from "./Sidebar.vue"
	import Cc from "./Cc.vue"

	export default {
		name: 'app',
		data(){
			return {
				headText: 'this is head',
				footText: 'this is foot',
			}
		},
		components: {
			Sidebar,
			Cc,
		}
	}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
#app{
	width: 100%;
	height: 800px;
	border: 1px solid #ccc;
}
.header{
	width: 100%;
	height: 15%;
	border: 1px solid #ccc;
}
.body{
	width: 100%;
	height: 70%;
	border: 1px solid #ccc;
}
.footer{
	width: 100%;
	height: 15%;
	border: 1px solid #ccc;
}
</style>