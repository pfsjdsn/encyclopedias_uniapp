<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			console.log(this.config.webUrl, 'app.vue')
			this.lib.demo()
			
			// 网路监听（用户目前断网，切换wifi）
			this.lib.NetWork.On()
			// 更新检测
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* 引入官方css库 */
	 @import './common/uni.css';
	 /* 引入阿里字体图标库 */
	 @import './common/icon.css';
	 /* 引入animate动画库 */
	 @import './common/animate.css';
	 /* 引入公共样式 */
	 @import './common/common.css';
	 
	 
	 
	 
</style>                 
