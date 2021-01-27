<template>
	<view class="hot_categories">
		<view class="u_f_ac u_f_jsb hot_title">
			<view class="title_tag">热门分类</view>
			<view class="u_f_ac more" @tap="openTopicNav">
				更多<view class="iconfont iconxiangyou"></view>
			</view>
		</view>
		<view class="u_f_ac hot_tag">
			<block v-for="(item, index) in nav" 
			:key="index">
				<view class="u_f_ajc">{{item.name}}</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			nav: Array
		},
		data() {
			return {
				
			};
		},
		methods:{
			openTopicNav() {
				uni.navigateTo({
					url: '../../pages/topic_classification/topic_classification'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.hot_categories {
		border-top: 1upx solid #eee;
		border-bottom: 1upx solid #eee;
		padding: 20upx;
		.hot_title {
			margin: 0 0 10upx 0;
			.title_tag {
				color: #333;
				font-size: 32upx;
			}
			.more {
				color: #9e9e9e;
			}
		}
		.hot_tag {
			>view {
				flex: 1;
				background: #ddd;
				color: #9e9e9e;
				border-radius: 10upx;
				margin: 0 10upx;
			}
		}
	}
</style>
