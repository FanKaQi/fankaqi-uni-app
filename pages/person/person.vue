<template>
	<view>
		<view class="view-head">
			<image class="image-head" src="../../static/img/index-icon-regulation@3x.png"></image>
			<text class="text-head">点击更换头像</text>
		</view>
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

<style>
	.view-head {
		border-radius: 20px;
		background-color: #00083D;
		margin: 15px;
		height: 150px;
		display:-webkit-box; 
		-webkit-box-align:center; 		
		-webkit-box-pack:center; 
	}

	.image-head {
		width: 50px;
		height: 50px;
		display: block;
	}

	.text-head {
		font-size: 14px;
		color: #FFFFFF;
	}
</style>
