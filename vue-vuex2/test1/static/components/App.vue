<template>
	<div id="app">
		<div class="color1">
			<part-a></part-a>
		</div>
		<div class="color2">
			<!-- <part-b></part-b> -->
		</div>
		<button @click="reset">重置</button>	
	</div>
</template>

<script>
	import PartA from "./PartA.vue";
	import PartB from "./partB.vue";

	export default {
		method: {
			reset: function(){
				alert('reset');
			}
		},
		components: {
			PartA,
			//PartB,
		},
		methods: {
			reset: function(){

			}
		}
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