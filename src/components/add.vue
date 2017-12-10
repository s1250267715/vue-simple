<template>
	<div>
		dshhhdssdsds {{name}}
		<ul>
			<li v-for="(v,i) in mockDate.list">下标{{i}}:{{v.name}}</li>
		</ul>
	</div>

</template>
<script>
	import {
		mapActions,
		mapState
	} from "vuex"

	export default {
		data() {
				return {
					name: "小明"
				}
			},
			mounted() {
				console.log(this)
				this.test({
					id: "10"
				})
			},
			computed: {
				...mapState("a", ["mockDate"])
			},
			methods: {
				...mapActions("a", ["test"])
			}

	}
</script>
<style>

</style>