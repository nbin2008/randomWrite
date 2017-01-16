<template>
	<div>
		<h2>这是组件a</h2>
		<input type="text" placeholder="在此输入组件a的数据" v-model="inputStr">
		<p>
			<span>组件a数据：</span>
			<span>{{ $store.state.str }}</span>
		</p>
		<p>
			<span>组件a数据*2：</span>
			<span>{{ $store.getters.str }}</span>
		</p>
	</div>
</template>

<script>
	export default {
		data: function(){
			return {
				inputStr: '',
			}
		},
		methods: {
			inputChange: function(){
				this.$store.dispatch('update',{s: this.inputStr});
			}
		},
		watch: {
			inputStr: function(){
				console.log( this.$store );
				this.inputChange();
			}
		}
	}
</script>