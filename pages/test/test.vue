<template>
	<view>
		<list-item url='../person/person' iconStart="../../static/img/ic_person_transfer.png" :text="title" iconEnd="../../static/img/profile-icon-profile@3x.png">
		</list-item>
		<list-item url='../person/person' iconStart="../../static/img/ic_person_transfer.png" :text="title" iconEnd="../../static/img/profile-icon-profile@3x.png">
		</list-item>
	</view>

</template>

<script>
	import listItem from '../../components/list-item.vue'

	export default {
		components: {
			listItem
		},

		data() {
			return {
				title: "我的信息"
			}
		},

		methods: {

		}
	}
</script>

<style>

</style>
