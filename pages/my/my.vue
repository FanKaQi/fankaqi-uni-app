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

			<view class="menu-item">
				<image class="image-icon" src="../../static/img/ic_person_transfer.png"></image>
				<text class="text-item">我的信息</text>
				<image class="image-icon" src="../../static/img/profile-icon-profile@3x.png"></image>
			</view>
			<hr />
			<view class="menu-item">
				<image class="image-icon" src="../../static/img/ic_phone.png"></image>
				<text class="text-item">我的信息</text>
				<image class="image-icon" src="../../static/img/profile-icon-profile@3x.png"></image>
			</view>
			<hr />
			<view class="menu-item">
				<image class="image-icon" src="../../static/img/ic_police_network.png"></image>
				<text class="text-item">我的信息</text>
				<image class="image-icon" src="../../static/img/profile-icon-profile@3x.png"></image>
			</view>
			<hr>
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

<style>
	.content {
		height: auto;
		width: 100%;
	}

	.view-head {
		height: 240px;
		background-color: #00DCDC;
		display: flex;
		padding-left: 30px;
	}

	.head-image {
		border-radius: 50%;
		width: 60px;
		height: 60px;
		margin: auto 0;
	}

	.head-text {
		padding-left: 10px;
		border-radius: 50%;
		margin: auto 0;
	}

	.head-text-name {
		font-weight: bold;
		font-size: 20px;
		height: 30px;
		height: 30px;
		color: #FFFFFF;
		line-height: 30px;
	}

	.head-text-role {
		font-size: 12px;
		height: 30px;
		color: #FFFFFF;
		line-height: 30px;
	}

	.menu {
		border-radius: 20px 20px 0px 0px;
		background-color: #ffffff;
		margin-top: -20px;
		position: fixed;
		padding-top: 50px;
		width: 100%;
	}

	.menu-item {
		padding-left: 20px;
		padding-right: 20px;
		height: 60px;
		display: flex;

	}

	.image-icon {
		width: 24px;
		height: 20px;
		margin: auto 0;
	}

	.text-item {
		font-size: 16px;
		width: 100%;
		color: #00083D;
		margin: auto 0;
		padding-left: 10px;
	}


	hr {
		background-color: #e8e8e8;
		margin-left: 20px;
		margin-right: 20px;
		height: 1px;
		border: 0px;
	}
</style>
