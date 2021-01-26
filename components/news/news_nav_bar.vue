<template>
	<uniNavbar :statusBar="false" :fixed="true" :border="false">
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
</template>

<script>
	import uniNavbar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	export default {
		components: {
			uniNavbar,
		},
		props: {
			tabBars: Array,
			tabIndex: Number
		},
		data() {
			return {
				
			};
		},
		methods: {
			openPublish() {
				// 打开发布页面
				uni.navigateTo({
					url: '../publish/publish'
				})
			},
			changeTab(index)  {
				this.$emit('changeTab', index)
			},	
		}
	}
</script>

<style lang="less" scoped>
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
