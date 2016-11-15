<template>
	<div>
		<h2>这是组件b</h2>
		<p>
			<span>组件a数据：</span>
			<span>{{ $store.state.b.str }}</span>
		</p>
		<p>
			<span>组件a数据*2：</span>
			<span>{{ $store.state.b.getters.str }}</span>
		</p>
	</div>
</template>

<script>
	
	export default {

	}
</script>