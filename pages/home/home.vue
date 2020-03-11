<template>
	<view class="content">
		<view class="title">社区消防管理</view>
		<uni-swiper-dot :info="swiper" :current="current" field="content" :mode="mode">
			<swiper class="swiper" @change="change" :circular="circular" :indicator-dots="indicatorDots" :autoplay="autoplay"
			 :interval="interval" :duration="duration">
				<swiper-item v-for="item of swiper" :key='item'>
					<image :src="item"></image>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<view class="menu">
			<view class="menu-row">
				<navigator url="../inspectDetail/inspectDetail">
					<view class="menu-item">
						<image class="image-icon" src="../../static/img/ic_iptv.png"></image>
						<text class="text">单位检查</text>
					</view>
				</navigator>
				<navigator url="../test/test">
					<view class="menu-item">
						<image class="image-icon" src="../../static/img/ic_email.png"></image>
						<text class="text">常用应用</text>
					</view>
				</navigator>
				<view class="menu-item">
					<image class="image-icon" src="../../static/img/ic_box.png"></image>
					<text class="text">常用应用</text>
				</view>
			</view>
			<view class="menu-row">
				<view class="menu-item">
					<image class="image-icon" src="../../static/img/ic_meeting.png"></image>
					<text class="text">常用应用</text>
				</view>
				<view class="menu-item">
					<image class="image-icon" src="../../static/img/ic_message.png"></image>
					<text class="text">常用应用</text>
				</view>
				<view class="menu-item">
					<image class="image-icon" src="../../static/img/ic_network.png"></image>
					<text class="text">常用应用</text>
				</view>
			</view>

			<view class="button">去检查</view>
		</view>
	</view>
</template>

<script>
	import uniSwiperDot from "../../components/dots.vue"

	export default {
		name: "home",
		components: {
			uniSwiperDot
		},
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: false,
				circular: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				current: 0,
				mode: 'round',
				swiper: [
					'../../static/img/banner_1.jpg',
					'../../static/img/banner_2.jpg',
					'../../static/img/banner_2.jpg',
					'../../static/img/banner_3.jpg'
				],
			}
		},
		onLoad() {

		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../../common/theme.less";

	.title {
		position: absolute;
		z-index: 1;
		margin-top: 100rpx;
		font-size: 50rpx;
		margin-left: 40rpx;
		color: #FFFFFF;
		font-weight: bold;
	}

	.swiper {
		height: 500rpx;

	}

	swiper-item image {
		width: 100%;
		height: 500rpx;
	}

	.menu {
		border-radius: 40rpx 40rpx 0rpx 0rpx;
		background-color: #ffffff;
		margin-top: -40rpx;
		position: fixed;
		padding-top: 40rpx;
		width: 100%;
	}

	.menu-row {
		display: flex;
		justify-content: space-between;
		margin: 60rpx 40rpx;
	}

	.menu-item {
		width: 160rpx;
		text-align: center;
	}

	.image-icon {
		display: flex;
		margin: 0 auto;
		width: 100rpx;
		height: 100rpx;
		margin-bottom: 10rpx;
	}

	.text {
		font-size: 30rpx;
	}

	.button {
		background-color: #00DCDC;
		height: 100rpx;
		border-radius: 50rpx;
		margin: 0 auto;
		margin-top: 100rpx;
		text-align: center;
		width: 400rpx;
		font-size: 34rpx;
		line-height: 100rpx;
		color: #FFFFFF;
	}
</style>
