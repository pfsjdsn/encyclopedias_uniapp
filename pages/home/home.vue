<template>
	<view>
		<template v-if="!isLogin">
			<!-- 未登录  -->
			<view class="u_f_ajc">登录仿糗百，体验更多功能</view>
			<!-- 第三方登录 -->
			<otherLogin></otherLogin>
			<!-- 账号密码登录 -->
			<view class="u_f_ajc" @tap="openLogin">
				账号密码登录
				<view class="iconfont iconjinru"></view>
			</view>
		</template>
		<template v-else>
			<!-- 登录 -->
			<homeInfo :homeInfo="homeInfo"></homeInfo>
		</template>
		<!-- 数据 -->
		<homeData :homeData="homeData"></homeData>
		<!-- 广告位 -->
		<view class="home_adv u_f_ajc">
			<image  src="../../static/demo/demo20.jpg" 
			mode="widthFix" lazy-load></image>
		</view>
		<!-- 功能列表 -->
		<view class="home_list">
			<block v-for="(item, index) in list" :key="index">
				<homeListItem :item="item" :index="index"></homeListItem>
			</block>
		</view>
	</view>
</template>

<script>
	import homeListItem from '@/components/home/home_list_item.vue';
	import homeInfo from '@/components/home/home_info.vue';
	import otherLogin from '@/components/home/other_login.vue';
	import homeData from '@/components/home/home_data.vue';
	export default {
		components: {
			homeListItem,
			homeInfo,
			otherLogin,
			homeData
		},
		data() {
			return {
				isLogin: true,
				homeData: [
					{name: '糗事', num: 0},
					{name: '动态', num: 0},
					{name: '评论', num: 0},
					{name: '收藏', num: 0},
				],
				homeInfo: {
					userPic: '../../static/demo/userpic/11.jpg',
					userName: '哈哈',
					totalNum: 0,
					todayNum: 0,
				},
				list: [
					{icon: 'iconliulan', name: '浏览历史', clickType: '', url: ''},
					{icon: 'iconvip', name: '糗百认证', clickType: '', url: ''},
					{icon: 'iconjianpan', name: '审核糗事', clickType: '', url: ''},
				]
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				uni.navigateTo({
					url:"../user_set/user_set"
				})
			}
		},
		methods: {
			openLogin() {
				uni.navigateTo({
					url: '../login/login'
				})
			},
		}
	}
</script>

<style lang="less">	
	.home_list {
		padding: 20upx;
		
	}
	
	
	.home_adv {
		padding: 20upx;
		image {
			border-radius: 20upx;
			height: 150upx;
		}
	}
</style>
