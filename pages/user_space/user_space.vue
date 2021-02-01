<template>
	<view>
		<!-- 背景图+用户基本信息 -->
		<userSpaceHead :userInfo="userInfo"></userSpaceHead>
		<!-- 统计 -->
		<view class="user_space_data">
			<homeData :homeData="homeData"></homeData>
		</view>
		<view style="height: 20upx; background: #f4f4f4;"></view>
		<!-- tab导航 -->
		<swiperTabHead
		:tabBars="tabBars"
		:tabIndex="tabIndex"
		 @tabtap="tabtap"
		 scrollStyle="border-bottom: 0;" scrollItemStyle="width: 33.33%">
		</swiperTabHead>
		<!-- 主页 -->
		<view class="user_space_user_Info">
			<view class="user_space_user_Info_item">
				
			</view>
		</view>
	</view>
</template>

<script>
	import swiperTabHead from '@/components/index/swiper_tab_header.vue';
	import homeData from '@/components/home/home_data.vue';
	import userSpaceHead from '@/components/user_space/user_space_head.vue';
	export default {
		components: {
			userSpaceHead,
			homeData,
			swiperTabHead
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [
					{name: '主页', id: 0},
					{name: '糗事', id: 1},
					{name: '动态', id: 2},
				],
				homeData: [
					{name: '获赞', num: '10k'},
					{name: '关注', num: 12},
					{name: '粉丝', num: 11},
				],
				userInfo: {
					newBgImg: '',
					bgImg: 1,
					userPic: '../../static/demo/userpic/11.jpg',
					userName: '昵称',
					sex: 0,
					age: 20,
					isFollow: false
				}
			}
		},
		
		methods: {
			tabtap(index) {
				this.tabIndex = index
			},
		}
	}
</script>

<style lang="less">
	.user_space_margin {
		margin: 15upx 0;
	}
	.user_space_data{
		background: #fff;
		position: relative;
		z-index: 10;
		border-radius: 20upx 20upx 0 0;
		margin: -15upx 0 0 0;
	}
</style>
