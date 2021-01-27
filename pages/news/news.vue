<template>
	<view>
		<!-- 自定义导航栏 -->
		<newsNavBar :tabBars="tabBars" :tabIndex="tabIndex" @changeTab="changeTab"></newsNavBar>

		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperHeight + 'px'}" :current="tabIndex" @change="tabChange">
				<!-- 关注 -->
				<swiper-item>
					<scroll-view scroll-y class="list" @scrolltolower="loadMore()">
						<block v-for="(item, index) in follow.list" :key="index">
							<commonList :item="item" :index="index"></commonList>
						</block>
						<!-- 上拉加载 -->
						<loadMore :loadText="follow.loadText"></loadMore>
					</scroll-view>
				</swiper-item>
				<!-- 话题 -->
				<swiper-item>
					<scroll-view scroll-y class="list">
						<!-- 搜索 -->
						<view class="search_input">
							<input class="uni-input" placeholder-class="iconfont iconsousuo placeholder_search" placeholder="搜索内容" />
						</view>
						<!-- 轮播图 -->
						<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
							<swiper-item v-for="(item, index) in topic.swiper" :key="index">
								<image :src="item.src" mode="widthFix" lazy-load></image>
							</swiper-item>
						</swiper>
						<!-- 热门分类-->
						<hotCategories :nav="topic.nav"></hotCategories>
						<!-- 最近更新 -->
						<view class="recent_updates">
							<view class="recent_updates_title">最近更新</view>
							<block v-for="(item,index) in 
							topic.recent_updates_list" :key="index">
								<topicList :item="item" :index="index"></topicList>
							</block>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import commonList from '@/components/common/common_list.vue';
	import newsNavBar from '@/components/news/news_nav_bar.vue';
	import hotCategories from '@/components/news/hot_categories.vue';
	import topicList from '@/components/news/topic_list.vue';
	import loadMore from '@/components/common/load_more.vue';
	export default {
		components: {
			commonList,
			newsNavBar,
			hotCategories,
			topicList,
			loadMore
		},
		data() {
			return {
				swiperHeight: 500,
				tabIndex: 0,
				topic: {
					swiper: [
						{src: '../../static/demo/banner1.jpg'},
						{src: '../../static/demo/banner1.jpg'},
						{src: '../../static/demo/banner1.jpg'}
					],
					nav: [
						{name: '最新'},
						{name: '游戏'},
						{name: '打卡'},
						{name: '情感'},
						{name: '故事'},
						{name: '喜爱'},
					],
					recent_updates_list: 
					[
						{
						titlePic: '../../static/demo/topicpic/13.jpeg',
						title: '话题名称',
						desc: '我是话题描述',
						totalNum: 10,
						todayNum: 5,
						},
						{
						titlePic: '../../static/demo/topicpic/13.jpeg',
						title: '话题名称',
						desc: '我是话题描述',
						totalNum: 10,
						todayNum: 5,
						},
						{
						titlePic: '../../static/demo/topicpic/13.jpeg',
						title: '话题名称',
						desc: '我是话题描述',
						totalNum: 10,
						todayNum: 5,
						}
					]
				},
				tabBars: [{
						name: '关注',
						id: 1
					},
					{
						name: '话题',
						id: 2
					}
				],
				follow: {
					loadText: '上拉加载更多',
					list: [
						// 文字
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
						// 图文
						{
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

						},
						// 视频
						{
							userPic: '../../static/demo/userpic/12.jpg',
							userName: '哈哈',
							sex: 1, //0 男 1女
							age: 25,
							isFollow: false,
							title: '标题',
							titlePic: '../../static/demo/datapic/13.jpg',
							video: {
								lookNum: '20w',
								long: '2: 47'
							},
							share: false,
							path: '深圳 龙岗',
							shareNum: 20,
							commentNum: 30,
							goodNum: 20

						},
						// 分享
						{
							userPic: '../../static/demo/userpic/12.jpg',
							userName: '哈哈',
							sex: 0, //0 男 1女
							age: 25,
							isFollow: false,
							title: '标题',
							titlePic: '',
							video: false,
							share: {
								title: '分享标题',
								titlePic: '../../static/demo/datapic/14.jpg'
							},
							path: '深圳 龙岗',
							shareNum: 20,
							commentNum: 30,
							goodNum: 20

						}
					]
				}

			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(100) // 视口高度-顶部导航高度
					this.swiperHeight = height
				}
			});
		},
		methods: {
			// 点击切换
			changeTab(index) {
				this.tabIndex = index
			},
			// 滑动事件
			tabChange(e) {
				this.tabIndex = e.detail.current
			},
			// 上拉加载
			loadMore(index) {
				console.log(1111111111)
				if (this.follow.loadText != '上拉加载更多') {
					return;
				}
				this.follow.loadText = '加载中...'
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
					this.follow.list.push(obj)
					this.follow.loadText = '上拉加载更多'
				}, 1000)
			},
		}
	}
</script>

<style lang="less">
	.recent_updates {
		padding: 20upx;
		.recent_updates_title {
			padding: 0 0 5upx 0;
		}		
	}
	.swiper {
		padding: 0 20upx 20upx 20upx;
		image {
			width: 100%;
			border-radius: 10upx;
		} 
	}
	.search_input {
		padding: 20upx;

		input {
			border: 1upx solid;
			background: #f4f4f4;
			border-radius: 10upx;
		}

		.placeholder_search {
			display: flex;
			justify-content: center;
			font-size: 27upx;
		}
	}
</style>
