<template>
	<view class="user_space_user_Info">
		<view class="user_space_user_Info_item">
			<view>账号信息</view>
			<view>糗龄：{{getRegAge}}</view>
			<view>糗百ID：{{userInfo.id}}</view>
		</view>
		<view class="user_space_user_Info_item">
			<view>个人信息</view>
			<view>星座：{{getStarSign}}</view>
			<view>职业：{{userInfo.job}}</view>
			<view>故乡：{{userInfo.path}}</view>
			<view>情感：{{userInfo.emotion}}</view>
		</view>
	</view>
</template>

<script>
	import t from '@/common/time.js';
	export default {
		props:{
			userInfo: Object
		},
		computed:{
			getRegAge() {
				return t.gettime.sumAge(this.userInfo.regtime)
			},
			getStarSign() {
				return t.gettime.getHoroscope(this.userInfo.birthday)
			},
		},
	}
</script>

<style lang="less" scoped>
	.user_space_user_Info {
		padding: 0 30ux;
		.user_space_user_Info_item {
			padding: 10upx 20upx;
			border-bottom: 1upx solid #eee;
			>view {
				color: #aaa;
			}
			>view:first-child{
				color: #333;
				font-size: 35upx;
				padding: 15upx 0;
			}
		}
	}
</style>
