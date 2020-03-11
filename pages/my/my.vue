<template>
	<view class="content">

		<view class="view-head">
			<image class="head-image" src="../../static/img/noavatar_small.gif"></image>
			<view class="head-text">
				<view class="head-text-name"> 九尾狐 </view>
				<view class="head-text-role">九尾狐</view>
			</view>
		</view>

		<view class="menu">

			<view>
				<navigator class="menu-item" url="../person/person">
					<image class="image-icon" src="../../static/img/ic_person_transfer.png"></image>
					<text class="text">我的信息</text>
					<image class="image-icon" src="../../static/img/profile-icon-profile@3x.png"></image>
				</navigator>
			</view>
			<hr class = "line">
			<view>
				<navigator class="menu-item" url="../person/person">
					<image class="image-icon" src="../../static/img/ic_phone.png"></image>
					<text class="text">我的信息</text>
					<image class="image-icon" src="../../static/img/profile-icon-profile@3x.png"></image>
				</navigator>
			</view>
			<hr class = "line">
			<view>
				<navigator class="menu-item" url="../person/person">
					<image class="image-icon" src="../../static/img/ic_police_network.png"></image>
					<text class="text">我的信息</text>
					<image class="image-icon" src="../../static/img/profile-icon-profile@3x.png"></image>
				</navigator>
			</view>
			<hr class = "line">
		</view>

		<view class="button">去检查</view>
	</view>
	</view>
</template>

<script>
	export default {
		name: "home",
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				circular: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				swiper: [
					'../../static/img/banner_1.jpg',
					'../../static/img/banner_2.jpg',
					'../../static/img/banner_3.jpg'
				]
			}
		},
		onLoad() {
			this.getss();
		},
		methods: {
			getss() {
				const height = uni.getSystemInfoSync().statusBarHeight;

			}
		}
	}
</script>

<style lang="less">
	@import "~@/common/theme.less";
	
	.content {
		height: auto;
		width: 100%;
	}

	.view-head {
		height: 500rpx;
		background-color: #00DCDC;
		display: flex;
		padding-left: 60rpx;
	}

	.head-image {
		border-radius: 50%;
		width: 120rpx;
		height: 120rpx;
		margin: auto 0;
	}

	.head-text {
		padding-left: 20rpx;
		margin: auto 0;
		font-size: 24rpx;
	}

	.head-text-name {
		font-weight: bold;
		font-size: 48rpx;
		height: 60rpx;
		height: 60rpx;
		color: #FFFFFF;
		line-height: 60rpx;
	}

	.head-text-role {
		font-size: 30rpx;
		color: #FFFFFF;
		line-height: 60rpx;
	}

	.menu {
		border-radius: 40rpx 40rpx 0rpx 0rpx;
		background-color: #ffffff;
		margin-top: -40rpx;
		position: fixed;
		padding-top: 100rpx;
		width: 100%;
	}

	.menu-item {
		padding-left: 40rpx;
		padding-right: 40rpx;
		height: 140rpx;
		display: flex;

	}

	.image-icon {
		width: 48rpx;
		height: 40rpx;
		margin: auto 0;
	}

	.text{
		width: 100%;
		margin: auto 0;
		padding-left: 30rpx;
	}

</style>
