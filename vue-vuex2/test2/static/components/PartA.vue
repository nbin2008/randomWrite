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
			<span>{{ str2 }}</span>
		</p>
	</div>
</template>

<script>
	import {mapState, mapGetters, mapActions} from "Vuex";

	export default {
		data: function(){
			return {
				inputStr: '',
			}
		},
		computed: {
			...mapState({
				str: state => state.str
			}),
			...mapGetters({
				str2: 'str2'
			}),
		},
		methods: {
			...mapActions({
				update: 'update'
			})
		},
		watch: {
			inputStr: function(){
				this.update({s: this.inputStr});
			}
		}
	}
</script>