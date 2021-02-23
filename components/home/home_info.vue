<template>
	<view class="home_info u_f_ac" @tap="toUserSpace">
		<image :src="homeInfo.userPic" 
		mode="widthFix" lazy-load></image>	
		<view class="u_f1">
			<view>{{homeInfo.userName}}</view>
			<view>总访客 {{homeInfo.totalNum}} 今日 {{homeInfo.todayNum}}</view>
		</view>
		<view class="iconfont iconjinru"></view>
	</view>
</template>

<script>
	export default {
		props: {
			homeInfo: Object
		},
		data() {
			return {
				
			};
		},
		methods:{
			toUserSpace(){
				uni.navigateTo({
					url:'../../pages/user_space/user_space?userName=' + this.homeInfo.userName
				})
			},
		}
	}
</script>

<style lang="less"scoped>
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
</style>
