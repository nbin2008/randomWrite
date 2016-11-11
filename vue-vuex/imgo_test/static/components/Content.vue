
<template>
	<div id="content">
		{{ nowHref }}
	</div>
</template>

<script>
	export default {
		name: 'content',
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