<template>
	<div>
		<h2>这是组件a</h2>
		<input type="text" placeholder="在此输入组件a的数据" v-model="inputStr">
		<p>
			<span>组件a数据：</span>
			<span>{{ str }}</span>
		</p>
		<p>
			<span>组件a数据*2：</span>
			<span>{{ "$store.getters.str" }}</span>
		</p>
	</div>
</template>

<script>
	import {mapState,} from "Vuex";

	let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
	console.log(z);

	export default {
		data: function(){
			return {
				inputStr: '',
			}
		},
		/*computed: mapState({
			str: state => state.str
		})*/
		/*computed: {
			localComputed () {},
			...mapState({
				str: state => state.str
			})
		}*/
	}
</script>