<template>
	<view>
		<!-- 自定义导航栏 -->
		<uniNavbar :statusBar="false">
			<!-- 左 -->
			<block solt="left">
				<view class="nav-left">
					<view  class="iconfont iconqiandaoicon" style="color: #ff9616;font-size: 55upx;position: fixed;left: 20upx; top: 50upx;"></view>
				</view>
			</block>
			<!-- 中 -->
			<view class="nav_tab_bar u_f_ajc">
				<block v-for="(tab,index) in tabBars" :key="tab.id">
					<view class="u_f_ajc" :class="{'active':tabIndex == index}" 
					@tap="changeTab(index)">
						{{tab.name}}
						<view class="nav_tab_bar_line" v-if="tabIndex == index"></view>
					</view>
				</block>
			</view>
			<!-- 右 -->
			<block solt="right" >
				<view class="nav-right u_f_ajc" @tap="openPublish">
					<view  class="iconfont iconziyuan" style="font-size: 45upx;position: fixed;right: 20upx; top: 50upx;"></view>
				</view>
			</block>
		</uniNavbar>
		<!--  -->
		<!-- 列表 -->
		<view class="common_list u_f">
			<view class="common_list_l">
				<image src="../../static/demo/userpic/12.jpg" mode="widthFix" lazy-load></image>
			</view>
			<view class="common_list_r">
				<view class="u_f_ac u_f_jsb">
					<view class="u_f_ac">昵称 <view class="iconfont iconnan">25</view></view>
					<view class="iconfont iconjia">关注</view>
				</view>
				<view>标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</view>
				<view class="content_img">
					<image src="../../static/demo/datapic/13.jpg" mode="widthFix" lazy-load></image>
				</view>
				<view class="u_f_ac u_f_jsb">
					<view>深圳 龙岗</view>
					<view class="u_f_ac">
						<view class="iconfont iconzhuanfa">12</view>
						<view class="iconfont iconpinglun">22</view>
						<view class="iconfont icondianzan">32</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavbar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	export default {
		components: {
			uniNavbar
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [
					{name: '关注', id: 1},
					{name: '话题', id: 2}
				],
			}
		},
		methods: {
			changeTab(index)  {
				this.tabIndex = index
			},
			openPublish() {
				console.log(1111111111111)
				// 打开发布页面
				uni.navigateTo({
					url: '../publish/publish'
				})
			},
			
		}
	}
</script>

<style lang="less">
	.common_list {
		border: 1upx solid red;
		padding: 20upx;
		.common_list_l {
			flex-shrink: 0; //收缩比率 0为不压缩
			image {
				width: 90upx;
				height: 90upx;
				border-radius: 100%;
			}
		}
		.common_list_r {
			flex: 1;
			.content_img {
				width: 80%;
				border-radius: 20upx;
			}
		}
		
	}

	.nav_left, .nav_right {
		>view {
			font-size: 40upx;
		}
		.iconqiandaoicon {
			font-size: 20upx;
			color: red;
		}
	}
	.nav_left {
		margin: 0 0 0 16upx;
		float: left;
		border: 1upx solid red;
	}
	.nav_right {
		width: 100%;	
	}
	.nav_tab_bar {
		width: 100%;
		margin: 0 0 0 -20upx;
		>view {
			font-size: 32upx;
			padding: 0 15upx;
			font-weight: bold;
			color: #969696;
		}
		.active {
			color: #333;
		}
		.nav_tab_bar_line {
			border-bottom: 5upx solid #fede33;
			border-top: 5upx solid #fede33;
			width: 70upx;
			border-radius: 20upx;
			position: absolute;
			bottom: 12upx;
		}
	}
</style>
