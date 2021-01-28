<template>
	<view>
		<view v-if="item.gstime" class="user_chat_time u_f_ajc">{{item.gstime}}</view>
		<view class="user_chat_list u_f" :class="[item.isMe ? 'user_chat_me' : '']">
					<image v-if="!item.isMe" 
					:src="item.userPic" mode="widthFix" 
					lazy-load></image>
					<view class="user_chat_list_body">
						<!--文字 -->
						<text v-if="item.type == 'text'">{{item.data}}</text>
						<!-- 图片 -->
						<image v-if="item.type == 'img'" 
						:src="item.data" mode="widthFix" 
						lazy-load></image>
					</view>
					<image v-if="item.isMe" :src="item.userPic"
					 mode="widthFix" lazy-load class="user_head"></image>
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
		}
	}
</script>

<style lang="less" scoped>
	.user_chat_time {
		padding: 50upx 0;
		color: #a2a2a2;
		font-size: 24upx;
	}
	.user_chat_list {
		padding: 20upx 0;
		>image {
			width: 100upx;
			height: 100upx;
			border-radius: 100%;
			flex-shrink: 0;
		}
	}
	.user_chat_list_body {
		position: relative;
		background: #f4f4f4;
		padding: 25upx;
		margin: 0 100upx 0 20upx;
		border-radius: 20upx;
		image {
			max-width: 150upx;
			max-height: 200upx;
		}
	}
	.user_chat_list_body:after {
		position: absolute;
		left: -30upx;
		right: 0;
		top: 30upx;
		content: '';
		width: 0;
		height: 0;
		border: 16upx solid #f4f4f4;
		border-color: transparent #f4f4f4 transparent transparent;
	}
	.user_chat_me {
		justify-content: flex-end;
		.user_chat_list_body {
			margin: 0 20upx 0 100upx;
		}
		.user_chat_list_body:after {
			left: auto;
			right: -30upx;
			border-color: transparent transparent transparent #f4f4f4;
		}
	}
	
</style>
