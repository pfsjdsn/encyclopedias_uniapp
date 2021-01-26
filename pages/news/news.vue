<template>
	<view>
		<!-- 自定义导航栏 -->
		<newsNavBar :tabBars="tabBars" :tabIndex="tabIndex" 
		@changeTab="changeTab"></newsNavBar>
			
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperHeight + 'px'}"
			 :current="tabIndex" @change="tabChange">
			 <!-- 关注 -->
				<swiper-item>
					<scroll-view scroll-y class="list" @scrolltolower="loadMore()">
						<block v-for="(item, index) in follow.list" :key="index">
							<commonList :item="item" :index="index"></commonList>
						</block>
						<!-- 上拉加载 -->
						<loadMore  :loadText="follow.loadText"></loadMore>
					</scroll-view>
				</swiper-item>
			<!-- 话题 -->
				<swiper-item>
					<scroll-view scroll-y class="list">
						话题 
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import commonList from '@/components/common/common_list.vue';
	import newsNavBar from '@/components/news/news_nav_bar.vue';
	import loadMore from '@/components/common/load_more.vue';
	export default {
		components: {
			commonList,
			newsNavBar,
			loadMore
		},
		data() {
			return {
				swiperHeight: 500,
				tabIndex: 0,
				tabBars: [
					{name: '关注', id: 1},
					{name: '话题', id: 2}
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
			    success:(res) => {
					let height = res.windowHeight - uni.upx2px(100) // 视口高度-顶部导航高度
					this.swiperHeight = height
			    }
			});
		},
		methods: {
			// 点击切换
			changeTab(index)  {
				this.tabIndex = index
			},		
			// 滑动事件
			tabChange(e) {
				this.tabIndex = e.detail.current
			},
			// 上拉加载
			loadMore(index) {
				if(this.follow.loadText != '上拉加载更多') {
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
	
</style>
