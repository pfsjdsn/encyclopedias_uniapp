<template>
	<view>
		<!-- 模糊背景 -->
		<view class="topic_bg">
			<image src="../../static/demo/topicpic/13.jpeg" mode="widthFix" lazy-load></image>
		</view>
		<!-- 话题信息 -->
		<view class="topic_info">
			<view class="topic_title">
				<image src="../../static/demo/topicpic/13.jpeg" 
				mode="widthFix" lazy-load></image>
				<view>#忆往事，敬余生#</view>
			</view>
			<view class="topic_describe">
				<view>动态 1000</view>
				<view>今日 1000</view>
			</view>
			<view class="topic_content">
				我是描述内容
			</view>
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

<style lang="less">
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
</style>
