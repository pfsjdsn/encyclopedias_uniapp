<template>
	<view class="recent_updates_list u_f animate__animated animate__fadeInLeft animate__fast" @tap="openDetail">
		<image :src="item.titlePic" mode="widthFix" lazy-load></image>
		<view>
			<view class="topic_name">#{{item.title}}#</view>
			<view>{{item.desc}}</view>
			<view>动态{{item.totalNum}}  今日 {{item.todayNum}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number 	
		},
		data() {
			return {
				
			};
		},
		methods: {
			openDetail() {
				uni.navigateTo({
					url: '../../pages/topic_detail/topic_detail'
				})
			}
		},
	}
</script>

<style lang="less" scoped>
	.recent_updates_list {
		padding: 20upx 0;
		font-size: 32upx;
		border: 1upx solid #eee;
		image {
			width: 150upx;
			height: 150upx;
			border-radius: 10upx;
			margin: 0 20upx 0 0;
		}
		.topic_name {
			color: #333;
			font-size: 32upx;
		}
		>view>view {
			color: #a4a4a4;
		}
	}
</style>
