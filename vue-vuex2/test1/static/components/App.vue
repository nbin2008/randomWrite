<template>
	<div id="app">
		<div class="color1">
			<part-a></part-a>
		</div>
		<button @click="reset">重置</button>	
	</div>
</template>

<script>
	import PartA from "./PartA.vue";

	export default {
		methods: {
			reset: function(){

			}
		},
		components: {
			PartA,
		},
	}
</script>

<style>
.color1{
	border: 1px solid red;
}
.color2{
	border: 1px solid blue;
}
</style>