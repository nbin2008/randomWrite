
<template>
	<div id="cc">
		{{ nowHref }}
	</div>
</template>

<script>
	
	export default {
		name: 'cc',
		data(){
			return {}
		},
		vuex: {
			getters: {
				nowHref: state => state.href,
			}
		},
	}
</script>

<style>
	
</style>