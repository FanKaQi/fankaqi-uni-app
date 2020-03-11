<template>
	<view>
		<navigator class="menu-item" :url="url">
			<image class="image-icon" :src="iconStart"></image>
			<text class="text">{{text}}</text>
			<image class="image-icon" :src="iconEnd"></image>
		</navigator>
	</view>
</template>

<script>
	export default {
		name: 'listItem',
		props: {
			iconStart: String,
			text: String,
			iconEnd: String,
			url: String
		},
		data() {
			return {

			}
		},

		methods: {

		}
	}
</script>

<style>
	.menu-item {
		padding-left: 40rpx;
		padding-right: 40rpx;
		height: 120rpx;
		display: flex;

	}

	.image-icon {
		width: 48rpx;
		height: 40rpx;
		margin: auto 0;
	}

	.text {
		width: 100%;
		margin: auto 0;
		padding-left: 30rpx;
	}
</style>
