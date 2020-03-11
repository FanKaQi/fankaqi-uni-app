<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
	/*每个页面公共css */
	@import "./common/theme.less";
	body,
	page {
		min-height: 100%;
		display: flex;
	}

	page {
		width: 100%;
		height: 100%;
		display: block;
	}

	.content {
		// display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #efeff4;
		overflow :hidden;
	}
	
</style>
