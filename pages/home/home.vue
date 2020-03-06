<template>
	<view class="content">
		<view class="title">社区消防管理</view>
		<swiper class="swiper" :circular="circular" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
		 :duration="duration">
			<swiper-item v-for="item of swiper" :key='item'>
				<image :src="item"></image>
			</swiper-item>
		</swiper>
		<view class="menu">
			<view class="menu-row">
				<view class="menu-item">
					<image class="image-icon" src="../../static/img/ic_iptv.png"></image>
					<text class="text-item">常用应用</text>
				</view>
				<view class="menu-item">
					<image class="image-icon" src="../../static/img/ic_email.png"></image>
					<text class="text-item">常用应用</text>
				</view>
				<view class="menu-item">
					<image class="image-icon" src="../../static/img/ic_box.png"></image>
					<text class="text-item">常用应用</text>
				</view>
			</view>
			<view class="menu-row">
				<view class="menu-item">
					<image class="image-icon" src="../../static/img/ic_meeting.png"></image>
					<text class="text-item">常用应用</text>
				</view>
				<view class="menu-item">
					<image class="image-icon" src="../../static/img/ic_message.png"></image>
					<text class="text-item">常用应用</text>
				</view>
				<view class="menu-item">
					<image class="image-icon" src="../../static/img/ic_network.png"></image>
					<text class="text-item">常用应用</text>
				</view>
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

		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	@import "../../common/theme.less";

	.content {
		height: auto;
		width: 100%;
		position: relative;
	}

	.title {
		position: absolute;
		z-index: 1;
		margin-top: 50px;
		font-size: 24px;
		margin-left: 20px;
		color: #FFFFFF;
		font-weight: bold;
	}

	.swiper {
		height: 200px;

	}

	swiper-item image {
		width: 100%;
		height: 200px;
	}

	.menu {
		border-radius: 20px 20px 0px 0px;
		background-color: #ffffff;
		margin-top: -20px;
		position: fixed;
		padding-top: 20px;
		width: 100%;
	}

	.menu-row {
		display: flex;
		justify-content: space-between;
		margin: 30px 20px;
	}

	.menu-item {
		width: 80px;

		text-align: center;
	}

	.image-icon {
		display: flex;
		margin: 0 auto;
		width: 50px;
		height: 50px;
		margin-bottom: 5px;
	}

	.text-item {
		font-size: 14px;
		color: #00083D;
		text-align: center;
		width: 50px;
	}

	.button {
		background-color: #00DCDC;
		height: 45px;
		border-radius: 25px;
		margin: 0 auto;
		margin-top: 50px;
		text-align: center;
		width: 200px;
		font-size: 15px;
		line-height: 45px;
		color: #FFFFFF;
	}
</style>
