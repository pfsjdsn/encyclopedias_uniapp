<template>
	<view>
		<swiperTabHead :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiperTabHead>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperHeight + 'px'}"
			 :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items, index) in newsList" :key="index">
					<scroll-view scroll-y class="list" @scrolltolower="loadMore(index)">
						<template v-if="items.list.length">
							<!-- 图文列表 -->
							<block v-for="(item, index1) in items.list" :key="index1">
								<indexList :item="item" :index="index1"></indexList>
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
	import indexList from '@/components/index/index_list.vue';
	import swiperTabHead from '@/components/index/swiper_tab_header.vue';
	import loadMore from '@/components/common/load_more.vue';
	import noThing from '@/components/common/no_thing.vue';
	export default {
		components:{indexList, swiperTabHead, loadMore, noThing},
		data() {
			return {
				swiperHeight: 0,
				tabIndex: 0,
				newsList: [
					{	loadText: '上拉加载更多',
						list: [
							{
								userPic: '../../static/demo/userpic/12.jpg',
								userName: '昵称',
								isFollow: true,
								title: '我是标题',
								type: 'img', // img： 图文， video: 视频 
								title_pic: '../../static/demo/datapic/11.jpg',
								infoNum: {
									index: 1, // 0: 无操作， 1：顶， ２： 踩
									dingNum: 10,
									caiNum: 10,
								},
								commentNum: 10,
								shareNum: 10,
							},
							{
								userPic: '../../static/demo/userpic/12.jpg',
								userName: '昵称',
								isFollow: false,
								title: '我是标题',
								type: 'video', // img： 图文， video: 视频 
								playNum: '20w',
								long: '2:47',
								title_pic: '../../static/demo/datapic/11.jpg',
								infoNum: {
									index: 1, // 0: 无操作， 1：顶， ２： 踩
									dingNum: 10,
									caiNum: 10,
								},
								commentNum: 10,
								shareNum: 10,
							}
						]
					},
					{	loadText: '上拉加载更多',
						list: [
							{
								userPic: '../../static/demo/userpic/12.jpg',
								userName: '昵称',
								isFollow: true,
								title: '我是标题',
								type: 'img', // img： 图文， video: 视频 
								title_pic: '../../static/demo/datapic/11.jpg',
								infoNum: {
									index: 1, // 0: 无操作， 1：顶， ２： 踩
									dingNum: 10,
									caiNum: 10,
								},
								commentNum: 10,
								shareNum: 10,
							}
						]
					},
					{	loadText: '上拉加载更多',
						list: [
							{
								userPic: '../../static/demo/userpic/12.jpg',
								userName: '昵称',
								isFollow: true,
								title: '我是标题',
								type: 'img', // img： 图文， video: 视频 
								title_pic: '../../static/demo/datapic/11.jpg',
								infoNum: {
									index: 0, // 0: 无操作， 1：顶， ２： 踩
									dingNum: 10,
									caiNum: 10,
								},
								commentNum: 10,
								shareNum: 10,
							}
						]
					},
					{	loadText: '上拉加载更多',
						list: [
							{
								userPic: '../../static/demo/userpic/12.jpg',
								userName: '昵称',
								isFollow: true,
								title: '我是标题',
								type: 'img', // img： 图文， video: 视频 
								title_pic: '../../static/demo/datapic/11.jpg',
								infoNum: {
									index: 0, // 0: 无操作， 1：顶， ２： 踩
									dingNum: 10,
									caiNum: 10,
								},
								commentNum: 10,
								shareNum: 10,
							}
						]
					},
					{	loadText: '上拉加载更多',
						list: [
							{
								userPic: '../../static/demo/userpic/12.jpg',
								userName: '昵称',
								isFollow: true,
								title: '我是标题',
								type: 'img', // img： 图文， video: 视频 
								title_pic: '../../static/demo/datapic/11.jpg',
								infoNum: {
									index: 0, // 0: 无操作， 1：顶， ２： 踩
									dingNum: 10,
									caiNum: 10,
								},
								commentNum: 10,
								shareNum: 10,
							}
						]
					},
					{	loadText: '上拉加载更多',
						list: []
					}
				],
				tabBars: [
					{name: '关注', id: 0},
					{name: '推荐', id: 1},
					{name: '体育', id: 2},
					{name: '热点', id: 3},
					{name: '财经', id: 4},
					{name: '娱乐', id: 5},
				],
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
		// 监听原生标题栏按钮点击事件
		onNavigationBarButtonTap() {
			switch (e.index){
				case 1:
				// 打开发布页面
				uni.navigateTo({
					url: '../publish/publish'
				})
					break;
			}
		},
		// 监听搜索框点击事件
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url:'../search/search'
			})
		},
		methods: {
			loadMore(index) {
				if(this.newsList[index].loadText != '上拉加载更多') {
					return;
				}
				this.newsList[index].loadText = '加载中...'
				setTimeout(() => {
					let obj = {
						userPic: '../../static/demo/userpic/12.jpg',
						userName: '昵称',
						isFollow: true,
						title: '我是标题',
						type: 'img', // img： 图文， video: 视频 
						title_pic: '../../static/demo/datapic/11.jpg',
						infoNum: {
							index: 0, // 0: 无操作， 1：顶， ２： 踩
							dingNum: 10,
							caiNum: 10,
						},
						commentNum: 10,
						shareNum: 10,
					}
					this.newsList[index].list.push(obj)
					this.newsList[index].loadText = '上拉加载更多'
				}, 1000)
			},
			tabtap(index) {
				this.tabIndex = index
			},
			// 滑动事件
			tabChange(e) {
				this.tabIndex = e.detail.current
			}
		}
	}
</script>


<style lang="less">

</style>
