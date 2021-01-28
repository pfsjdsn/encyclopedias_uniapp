<template>
	<view>
		<!-- 聊天列表 -->
		<view class="user_chat_list u_f user_chat_me">
			<!-- <image src="../../static/demo/userpic/11.jpg"
			 mode="widthFix" lazy-load></image> -->
			<view class="user_chat_list_body">
				<!--文字 -->
<!-- 				<text>随便随便随便随便随便随便随便随便随便随便随便随便随便随便随便随便随便随便随便随便随便随便随便</text> -->
				<!-- 图片 -->
				<image src="../../static/demo/datapic/11.jpg" 
				mode="widthFix" lazy-load></image>
			</view>
			<image src="../../static/demo/userpic/11.jpg"
			 mode="widthFix" lazy-load class="user_head"></image>
		</view>
		<!-- 输入框 -->
		<userChatBottom @submit="submit"></userChatBottom>
	</view>
</template>

<script>
	import userChatBottom from '@/components/user_chat/user_chat_bottom.vue'; 
	export default {
		components:{
			userChatBottom
		},
		data() {
			return {
				
			}
		},
		methods: {
			submit(data) {
				console.log('当前输入的是：', data)
			}
		}
	}
</script>

<style lang="less">
	.user_chat_list {
		.user_head {
			width: 100upx;
			height: 100upx;
			border-radius: 100%;
			flex-shrink: 0;
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
