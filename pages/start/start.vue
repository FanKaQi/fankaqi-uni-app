<template>
	<view class="content">
		<text class="title" >{{title}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello World'
			}
		},
		onLoad() {
			setTimeout(function() {
				uni.switchTab({
					url: '/pages/home/home'
				});

			}, 1000, null)
		},
		methods: {

		}
	}
</script>

<style>
	page {
		background-color: #00dcdc;
	}

	.content {
		width: 100%;
		margin-top: 100px;
		text-align: center;
	}

	.title {
		font-size: 36rpx;
		color: #fff;
	}
</style>
