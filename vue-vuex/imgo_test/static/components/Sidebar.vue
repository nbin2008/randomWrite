
<template>
	<div id="sidebar">
		<ul>
			<li v-for="(v,k) in list">
				<a :href="v.href">{{ v.text }}</a>
			</li>
		</ul>
	</div>
</template>

<script>
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