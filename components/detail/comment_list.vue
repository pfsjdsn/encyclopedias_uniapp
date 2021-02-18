<template>
	<view class="uni-comment-list" :class="[item.fatherId > 0 ? 'u-comment_list_child' : '']">
		<view class="uni-comment-face"><image :src="item.userPic" mode="widthFix" ></image></view>
		<view class="uni-comment-body">
			<view class="uni-comment-top"><text>{{item.userName}}</text>
			</view>
			<view class="uni-comwwment-content">{{item.data}}</view>
			<view class="uni-comment-date">
				<view>{{item.time}}</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			item: Object,
			index:Number,
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
	.u-comment_list_child {
		padding: 20upx;
		background: #f4f4f4;
		border-bottom: 1upx solid #eee;
		box-sizing: border-box;
		margin: 0 0 0 70upx; // 防止向外扩张
		width: auto;
	}
	.uni-comment-face {
		image {
			height: 100%!important;
		}
	}
	
</style>
