<template>
	<view>
		<view class="view-head">
			<image class="image-head" src="../../static/img/noavatar_small.gif"></image>
			<text class="text-head">点击更换头像</text>
		</view>
		<view class="view-item">
			<text class="text">姓名</text>
			<text class="textBold">钟国帆</text>
		</view>
		<hr class="lineCustom" />
		<view class="view-item">
			<text class="text">性别</text>
			<text class="textBold">男</text>
		</view>
		<hr class="lineCustom" />
		<view class="view-item">
			<text class="text">所在地</text>
			<text class="textBold">武汉</text>
		</view>
		<hr class="line" />
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="less">
	@import "~@/common/theme.less";

	.view-head {
		border-radius: 20rpx;
		background-color: #00083D;
		margin: 30rpx;
		height: 300rpx;
		display: -webkit-box;
		flex-direction: column;
		-webkit-box-align: center;
		-webkit-box-pack: center;
	}

	.image-head {
		width: 150rpx;
		display: flex;
		height: 150rpx;
		border-radius: 50%;
	}

	.text-head {
		font-size: 30rpx;
		color: #FFFFFF;
		padding-top: 10rpx;
	}

	.view-item {
		padding: 50rpx 40rpx 30rpx 40rpx;
		display: flex;
	}

	.text {
		width: 150rpx;
	}

	.lineCustom {
		margin-left: 180rpx;
		margin-right: 30rpx;
	}
</style>
