
<template>
	<div id="sidebar">
		<ul>
			<li v-for="(v,k) in list">
				<a :href="v.href" @click="update_href(v.text)">{{ v.text }}</a>
			</li>
		</ul>
	</div>
</template>

<script>
	import {update_href} from  "../vuex/actions.js";

	export default {
		name: 'sidebar',
		data(){
			return {
				list: [
					{
						href: `javascript:alert("跳转链接1")`,
						text: `跳转链接1`,
					},
					{
						href: `javascript:alert("跳转链接2")`,
						text: `跳转链接2`,
					}
				]
			}
		},
		vuex: {
			actions: {
				update_href,
			}
		}
	}
</script>

<style>
#sidebar{
	width: 20%;
	height: 100%;
	border: 1px solid #ccc;
}
</style>