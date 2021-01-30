<template>
	<view>
		<template v-if="isLogin">
			<!-- 未登录  -->
			<view class="u_f_ajc">登录仿糗百，体验更多功能</view>
			<!-- 第三方登录 -->
			<view class="other_login u_f_ac">
				<view class="u_f_ajc u_f1">
					<view class="iconfont iconweixin u_f_ajc"></view>
				</view>
				<view class="u_f_ajc u_f1">
					<view class="iconfont iconxinlangweibo u_f_ajc"></view>
				</view>
				<view class="u_f_ajc u_f1">
					<view class="iconfont iconfenxiangqqhaoyou u_f_ajc"></view>
				</view>
			</view>
			<!-- 账号密码登录 -->
			<view class="u_f_ajc">
				账号密码登录
				<view class="iconfont iconjinru"></view>
			</view>
		</template>
		<!-- 登录 -->
		<view class="home_info u_f_ac">
			<image src="../../static/demo/userpic/11.jpg" 
			mode="widthFix" lazy-load></image>	
			<view class="u_f1">
				<view>昵称</view>
				<view>总访客 0 今日 0</view>
			</view>
			<view class="iconfont iconjinru"></view>
		</view>
		<!-- 数据 -->
		<view class="home_data u_f_ac">
			<view class="u_f1 u_f_ajc u_f_dc"><view>0</view>糗事</view>
			<view class="u_f1 u_f_ajc u_f_dc"><view>0</view>动态</view>
			<view class="u_f1 u_f_ajc u_f_dc"><view>0</view>评论</view>
			<view class="u_f1 u_f_ajc u_f_dc"><view>0</view>收藏</view>
		</view>
		<!-- 广告位 -->
		<view class="home_adv u_f_ajc">
			<image  src="../../static/demo/demo20.jpg" 
			mode="widthFix" lazy-load></image>
		</view>
		<!-- 功能列表 -->
		<view class="home_list">
			<view class="home_list_item u_f_ac u_f_jsb" hover-class="home_list_hover">
				<view class="u_f_ac">
					<view class="iconfont iconliulan"></view>浏览历史
				</view>
				<view class="iconfont iconjinru"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: false
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				console.log('跳转设置页')
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	.home_info {
		padding: 20upx;
		image {
			flex-shrink: 0;
			width: 100upx;
			width: 100upx;
			border-radius: 100upx;
			margin: 0 15upx 0 0;
		}
		>view:first-of-type {
			height: 100%;
		}
		>view:first-of-type>view:first-child{
			font-size: 32upx;
		}
		>view:first-of-type>view:last-child {
			color: #bbb;
		}
	}	
	.home_list_hover {
		background: #f4f4f4;
	}
	.home_list {
		padding: 20upx;
		.home_list_item {
			padding: 20upx;
			border-top: 1upx solid #eee;
			border-bottom: 1upx solid #eee;
			>view>view {
				margin: 0 10upx 0 0;
			}
			>view:first-child{
				color: #333;
			}
			>view:last-child{
				color: #ccc;
				font-size: 40upx;
			}
		}
	}
	.other_login {
		padding: 20upx 80upx;
		>view>view {
			width: 100upx;
			height: 100upx;
			border-radius: 100%;
			font-size: 55upx;
			color: #fff;
		}
		.iconweixin {
			background: #2db19b;
		}
		.iconxinlangweibo {
			background: #2caefc;
		}
		.iconfenxiangqqhaoyou {
			background: #fc7729;
		}
	}
	.home_data {
		padding: 20upx 40upx;
		>view {
			color: #989898;
			>view {
				font-size: 35upx;
				color: #333;
			}
		}
	}
	.home_adv {
		padding: 20upx;
		image {
			border-radius: 20upx;
			height: 150upx;
		}
	}
</style>
