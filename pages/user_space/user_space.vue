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
		<block v-for="(item, index) in tabList" :key="index">
			<template v-if="tabIndex == 0 && index == 0">
				<!-- 主页 -->
				<userSpaceUserInfo :userInfo="userInfo"></userSpaceUserInfo>
			</template>
			<template v-if="tabIndex == index">
				<!-- 列表 -->
				<block v-for="(list, listIndex) in item.list" :key="listIndex">
					<commonList :item="list" :index="listIndex"></commonList>
				</block>
				<!-- 上拉加载 -->
				<loadMore :loadText="item.loadText"></loadMore>
			</template>
		</block>
		<!-- 操作菜单 -->
		<userSpacePopup :show="show" @hidePopup="togleShow" @block="block" @remarks="remarks"></userSpacePopup>
	</view>
</template>
<script>
	import loadMore from '@/components/common/load_more.vue';
	import commonList from '@/components/common/common_list.vue';
	import swiperTabHead from '@/components/index/swiper_tab_header.vue';
	import homeData from '@/components/home/home_data.vue';
	import userSpaceHead from '@/components/user_space/user_space_head.vue';
	import userSpaceUserInfo from '@/components/user_space/user_space_user_info.vue';
	import userSpacePopup from '@/components/user_space/user_space_popup.vue';
	export default {
		components: {
			userSpacePopup,
			userSpaceHead,
			homeData,
			swiperTabHead,
			userSpaceUserInfo,
			commonList,
			loadMore
		},
		data() {
			return {
				show: false,
				tabList: [{},
					{
						loadText: '上拉加载更多',
						list: [
							{
								userPic: '../../static/demo/userpic/12.jpg',
								userName: '哈哈',
								sex: 0, //0 男 1女
								age: 25,
								isFollow: false,
								title: '标题',
								titlePic: '',
								video: false,
								share: false,
								path: '深圳 龙岗',
								shareNum: 20,
								commentNum: 30,
								goodNum: 20
							},
							{
								userPic: '../../static/demo/userpic/12.jpg',
								userName: '哈哈',
								sex: 0, //0 男 1女
								age: 25,
								isFollow: false,
								title: '标题',
								titlePic: '',
								video: false,
								share: false,
								path: '深圳 龙岗',
								shareNum: 20,
								commentNum: 30,
								goodNum: 20
							},
							{
								userPic: '../../static/demo/userpic/12.jpg',
								userName: '哈哈',
								sex: 0, //0 男 1女
								age: 25,
								isFollow: false,
								title: '标题',
								titlePic: '',
								video: false,
								share: false,
								path: '深圳 龙岗',
								shareNum: 20,
								commentNum: 30,
								goodNum: 20
							},
							{
								userPic: '../../static/demo/userpic/12.jpg',
								userName: '哈哈',
								sex: 0, //0 男 1女
								age: 25,
								isFollow: false,
								title: '标题',
								titlePic: '',
								video: false,
								share: false,
								path: '深圳 龙岗',
								shareNum: 20,
								commentNum: 30,
								goodNum: 20
							},
						]
					},
					{
						loadText: '上拉加载更多',
						list: [
							{
								userPic: '../../static/demo/userpic/12.jpg',
								userName: '哈哈',
								sex: 0, //0 男 1女
								age: 25,
								isFollow: false,
								title: '标题',
								titlePic: '',
								video: false,
								share: false,
								path: '深圳 龙岗',
								shareNum: 20,
								commentNum: 30,
								goodNum: 20
							},
							{
								userPic: '../../static/demo/userpic/12.jpg',
								userName: '哈哈',
								sex: 0, //0 男 1女
								age: 25,
								isFollow: false,
								title: '标题',
								titlePic: '',
								video: false,
								share: false,
								path: '深圳 龙岗',
								shareNum: 20,
								commentNum: 30,
								goodNum: 20
							},
							{
								userPic: '../../static/demo/userpic/12.jpg',
								userName: '哈哈',
								sex: 0, //0 男 1女
								age: 25,
								isFollow: false,
								title: '标题',
								titlePic: '',
								video: false,
								share: false,
								path: '深圳 龙岗',
								shareNum: 20,
								commentNum: 30,
								goodNum: 20
							},
							{
								userPic: '../../static/demo/userpic/12.jpg',
								userName: '哈哈',
								sex: 0, //0 男 1女
								age: 25,
								isFollow: false,
								title: '标题',
								titlePic: '',
								video: false,
								share: false,
								path: '深圳 龙岗',
								shareNum: 20,
								commentNum: 30,
								goodNum: 20
							},
						]
					}
				],
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
					isFollow: false,
					regtime: '2020-1-1',
					id: 12345,
					birthday: '1980-1-1',
					job: 'IT',
					path: '广东广州',
					emotion: '已婚',
				}
			}
		},
		// 触底事件
		onReachBottom() {
			// 上拉加载
			this.loadMore()
		},
		onNavigationBarButtonTap(e){
			if(e.index == 0) {this.togleShow()}
		},
		methods: {
			// 操作菜单显示隐藏
			togleShow() {
				this.show = !this.show
			},
			//拉黑
			block() {
				console.log('拉黑')
				this.togleShow()
			},
			//备注
			remarks() {
				console.log('备注')
				this.togleShow()
			},
			// 上拉加载更多
			loadMore(index) {
				if (this.tabList[this.tabIndex].loadText != '上拉加载更多') {
					return;
				}
				this.tabList[this.tabIndex].loadText = '加载中...'
				setTimeout(() => {
					let obj = {
						userPic: '../../static/demo/userpic/12.jpg',
						userName: '哈哈',
						sex: 0, //0 男 1女
						age: 25,
						isFollow: false,
						title: '标题',
						titlePic: '../../static/demo/datapic/13.jpg',
						video: false,
						share: false,
						path: '深圳 龙岗',
						shareNum: 20,
						commentNum: 30,
						goodNum: 20
			
					};
					this.tabList[this.tabIndex].list.push(obj)
					this.tabList[this.tabIndex].loadText = '上拉加载更多'
				}, 1000)
			},
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
