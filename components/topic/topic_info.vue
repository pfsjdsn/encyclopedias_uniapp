<template>
	<view>
		<!-- 模糊背景 -->
		<view class="topic_bg">
			<image :src="item.titlePic" 
			mode="widthFix" lazy-load></image>
		</view>
		<!-- 话题信息 -->
		<view class="topic_info">
			<view class="topic_title u_f_ac">
				<image :src="item.titlePic" 
				mode="widthFix" lazy-load></image>
				<view>#{{item.title}}#</view>
			</view>
			<view class="topic_describe u_f">
				<view>动态 {{item.totalNum}}</view>
				<view>今日 {{item.todayNum}}</view>
			</view>
			<view class="topic_content">
				{{item.desc}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object 
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
	.topic_bg {
		width: 100%;
		height: 300upx;
		position: relative;
		overflow: hidden;
		image {
			width: 100%;
			position: absolute;
			filter: blur(10upx);
		}
	}
	.topic_info {
		padding: 0 25upx;
		.topic_title {
			position: relative;
			>view {
				font-size: 35upx;
				margin: 0 0 0 170upx;
				flex: 1;
			}
			image {
				position: absolute;
				top: -75upx;
				border-radius: 20upx;
				width: 150upx;
				height: 150upx;
			}
		}
		.topic_describe {
			padding: 35upx 0 15upx 0;
			>view {
				color: #cdcdcd;
				
			}
		}
		.topic_content {
			color: #a3a3a3;
			font-size: 32upx;
			padding: 0 0 10upx 0;
		}
	}
</style>
