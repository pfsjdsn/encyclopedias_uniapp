<template>
	<view class="container">
		<!-- tabbar切换 -->
		<swiperTabHead
		:tabBars="tabBars"
		:tabIndex="tabIndex"
		 @tabtap="tabtap"
		 scrollStyle="border-bottom: 0;" scrollItemStyle="width: 33%">
		</swiperTabHead>
		<!-- 好友列表 -->
<!-- 		<block v-for="(item, index) in list" :key="index">
			<userList :item="item" :index="index"></userList>
		</block> -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperHeight + 'px'}"
			 :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items, index) in newsList" :key="index">
					<scroll-view scroll-y class="list" @scrolltolower="loadMore(index)">
						<template v-if="items.list.length">
							<!-- 图文列表 -->
							<block v-for="(item, index1) in items.list" :key="index1">
								<userList :item="item" :index="index1"></userList>
							</block>
							<!-- 上拉加载 -->
							<loadMore :loadText="items.loadText"></loadMore>
						</template>
						<template v-else>
							<noThing></noThing>
						</template>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	import loadMore from '@/components/common/load_more.vue';
	import swiperTabHead from '@/components/index/swiper_tab_header.vue'; 
	import userList from '@/components/user_list/user_list.vue'; 
	import noThing from '@/components/common/no_thing.vue';
	export default {
		components: {
			swiperTabHead,
			userList,
			loadMore,
			noThing,
		},
		data() {
			return {
				swiperHeight: 500,
				tabIndex: 0,
				tabBars: [
					{name: '互关', id: 0, num: 10},
					{name: '关注', id: 1, num: 20},
					{name: '粉丝', id: 2, num: 30}
				],
				newsList: [
					{
						loadText: '上拉加载更多',
						list: [
							{
								userPic: '../../static/common/nothing.png',
								userName: '昵称',
								age: 20,
								sex: 0,
								isFollow: true
							},
							{
								userPic: '../../static/common/nothing.png',
								userName: '昵称',
								age: 20,
								sex: 1,
								isFollow: false
							},
							{
								userPic: '../../static/common/nothing.png',
								userName: '昵称',
								age: 20,
								sex: 0,
								isFollow: true
							},
							{
								userPic: '../../static/common/nothing.png',
								userName: '昵称',
								age: 20,
								sex: 1,
								isFollow: false
							},
							{
								userPic: '../../static/common/nothing.png',
								userName: '昵称',
								age: 20,
								sex: 0,
								isFollow: true
							},
							{
								userPic: '../../static/common/nothing.png',
								userName: '昵称',
								age: 20,
								sex: 1,
								isFollow: false
							},
							{
								userPic: '../../static/common/nothing.png',
								userName: '昵称',
								age: 20,
								sex: 0,
								isFollow: true
							},
							{
								userPic: '../../static/common/nothing.png',
								userName: '昵称',
								age: 20,
								sex: 1,
								isFollow: false
							}
						]
					},
					{
						loadText: '上拉加载更多',
						list: [
							{
								userPic: '../../static/common/nothing.png',
								userName: '昵称',
								age: 20,
								sex: 0,
								isFollow: true
							},
							{
								userPic: '../../static/common/nothing.png',
								userName: '昵称',
								age: 20,
								sex: 1,
								isFollow: false
							}
						]
					},
					{
						loadText: '上拉加载更多',
						list: [
							{
								userPic: '../../static/common/nothing.png',
								userName: '昵称',
								age: 20,
								sex: 0,
								isFollow: true
							},
							{
								userPic: '../../static/common/nothing.png',
								userName: '昵称',
								age: 20,
								sex: 1,
								isFollow: false
							}
						]
					}
				]
				
			}
		},
		// 监听导航按钮点击事件
		onNavigationBarButtonTap(e) {
			if(e.index == 0) {
				uni.navigateBack({
					delta:1
				})
			}
		},
		onLoad() {
			uni.getSystemInfo({
			    success:(res) => {
					let height = res.windowHeight - uni.upx2px(100) // 视口高度-顶部导航高度
					this.swiperHeight = height
			    }
			});
		},
		methods: {
			loadMore(index) {
				if(this.newsList[index].loadText != '上拉加载更多') {
					return;
				}
				this.newsList[index].loadText = '加载中...'
				setTimeout(() => {
					let obj = {
						userPic: '../../static/common/nothing.png',
						userName: 'aaaaaaaaaaa',
						age: 20,
						sex: 0,
						isFollow: true
					};
					this.newsList[index].list.push(obj)
					this.newsList[index].loadText = '上拉加载更多'
				}, 1000)
			},
			tabtap(index) {
				this.tabIndex = index
			},
			tabChange(e) {
				this.tabIndex = e.detail.current
			}
		}
	}
</script>

<style lang="less">
</style>
