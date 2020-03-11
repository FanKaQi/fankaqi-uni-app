<template>
	<view>
		<image class="image-state" src="../../static/img/mission-state-stamp-2@3x.png"></image>
		<view class="textBold">深圳市海邻科信息技术有限公司</view>
		<view>
			<text class="label">非重点</text>
			<text class="type">高新企业</text>
		</view>
		<view class="view">
			<view class="view-item">
				<text class="text">检查情况</text>
				<text class="textCustom">遮挡、堵塞消防疏散通道</text>
			</view>
			<view class="view-item">
				<text class="text">检查描述</text>
				<text class="textCustom">一楼消防疏散通道有堆积物</text>
			</view>
			<view class="view-item">
				<text class="text">检查时间</text>
				<text class="textCustom">2019年6月19日 14:25</text>
			</view>
			<view class="view-item-image">
				<text class="text">检查照片</text>
				<view class="image-content">
					<image class="image-show" v-for="item of picture" :key="item" :mode="item.mode" :src="item"></image>
				</view>
			</view>
			<hr class="line" />

			<view class="title">单位处置情况</view>
			<view class="view-item">
				<text class="text">单位处理人</text>
				<text class="textCustom">消防安全责任人</text>
			</view>
			<view class="view-item">
				<text class="text">处置情况</text>
				<text class="textCustom">本单位已在两天内吧所有的遮挡、堵塞消防通道的物品清理掉</text>
			</view>
			<view class="view-item-image">
				<text class="text">检查照片</text>
				<view class="image-content">
					<image class="image-show" v-for="item of picture" :key="item" :mode="item.mode" :src="item"></image>
				</view>
			</view>
			<hr class="line" />

			<view class="title">网格员处理情况</view>
			<view class="view-item">
				<text class="text">检查情况</text>
				<text class="textCustom">遮挡、堵塞消防通道</text>
			</view>
			<view class="view-item-image">
				<text class="text">检查照片</text>
				<view class="image-content">
					<image class="image-show" v-for="item of picture1" :key="item" :mode="item.mode" :src="item"></image>
				</view>
			</view>
			<hr class="lineCustom" />
			<view class="title">历史隐患</view>
			<view class="view-item">
				<text class="text">检查情况</text>
				<text class="textCustom">遮挡、堵塞消防通道</text>
			</view>
			<view class="view-item">
				<text class="text">检查情况</text>
				<text class="textCustom">遮挡、堵塞消防通道</text>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				"picture": [
					'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
					'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg'
				],
				"picture1": [
					'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
					'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
					'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
					'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
					'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg'
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="less">
	@import "~@/common/theme.less";

	.image-state {
		position: absolute;
		width: 150rpx;
		height: 150rpx;
		margin-right: 80rpx;
		margin: 150rpx 100rpx 0 550rpx;
	}

	.textBold {
		padding: 30rpx 0rpx 10rpx 30rpx;
		font-size: 40rpx;
	}

	.label {
		font-size: 24rpx;
		border-radius: 30rpx;
		background-color: #F0AD4E;
		margin-left: 30rpx;
		color: white;
		padding: 8rpx 20rpx;
	}

	.type {
		font-size: 30rpx;
		margin-left: 30rpx;
		color: gray;
	}

	.view-item {
		margin: 30rpx;
		display: flex;

	}

	.view-item-image {
		padding: 30rpx;
		display: flex;
	}

	.text {
		font-weight: bold;
		width: 200rpx;
		position: absolute;
	}

	.title {
		font-weight: bold;
		font-size: 33rpx;
		color: @textColor;
		margin: 50rpx 0 50rpx 30rpx;
	}

	.textCustom {
		margin-left: 200rpx;
	}

	.view {
		margin: 100rpx 0;
	}

	.image-content {
		margin-left: 200rpx;
		display: block;
	}

	.image-show {
		width: 120rpx;
		height: 120rpx;
		border-radius: 15rpx;
		margin-right: 15rpx;
	}

	.line {
		margin: 30rpx 30rpx;
	}

	.lineCustom {
		margin: 30rpx 0rpx;
		height: 20rpx;
	}
</style>
