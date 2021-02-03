<template>
	<view>
		<!-- 话题介绍 -->
		<topicInfo :item="topicInfo"></topicInfo>
		<!-- tabbar切换 -->
		<swiperTabHead 
		:tabBars="tabBars"
		:tabIndex="tabIndex"
		 @tabtap="tabtap"
		 scrollStyle="border-bottom: 0;" scrollItemStyle="width: 50%">
		</swiperTabHead>
		<!-- 列表 -->
		<view class="topic_detail_list">
			<block v-for="(item, index) in tabList" :key="index">
				<template v-if="tabIndex == index">
					<!-- 列表 -->
					<block v-for="(list, listIndex) in item.list" :key="listIndex">
						<commonList :item="list" :index="listIndex"></commonList>
					</block>
					<!-- 上拉加载 -->
					<loadMore :loadText="item.loadText"></loadMore>
				</template>
			</block>
		</view>
	</view>
</template>

<script>
	import commonList from '@/components/common/common_list.vue';
	import topicInfo from '@/components/topic/topic_info.vue';
	import swiperTabHead from '@/components/index/swiper_tab_header.vue';
	import loadMore from '@/components/common/load_more.vue';
	export default {
		components: {
			topicInfo,
			swiperTabHead,
			commonList,
			loadMore
		},
		data() {
			return {
				topicInfo: {
					titlePic: "../../static/demo/topicpic/13.jpeg",
					title: "忆往事，敬余生",
					desc: "我是描述内容",
					totalNum: 1000,
					todayNum: 1000,
				},
				tabIndex: 0,
				tabBars: [
					{name: '默认', id: 0},
					{name: '最新', id: 1}
				],
				tabList: [
					{loadText: '上拉加载更多',list: [], firstLoad: false, page: 1},
					{loadText: '上拉加载更多',list: [], firstLoad: false, page: 1}
				]
				
			}
		},
		// 触底事件
		onReachBottom() {
			// 上拉加载
			this.loadMore()
		},
		// 下拉刷新 
		onPullDownRefresh() {
			this.getData()
		},
		onLoad(e){
			this.__init(JSON.parse(e.detail))
		},
		methods: {
			// 初始化数据
			__init(obj) {
				this.topicInfo = obj
				// 修改标题
				uni.setNavigationBarTitle({title: obj.title})
				// 获取列表数据
				this.getList()
			},
			// 下拉刷新 
			async getList() {
				// {
				// 	userPic: '../../static/demo/userpic/12.jpg',
				// 	userName: '哈哈',
				// 	sex: 0, //0 男 1女
				// 	age: 25,
				// 	isFollow: false,
				// 	title: '标题',
				// 	titlePic: '',
				// 	video: false,
				// 	share: false,
				// 	path: '深圳 龙岗',
				// 	shareNum: 20,
				// 	commentNum: 30,
				// 	goodNum: 20
				// },
			},
			tabtap(index) {
				this.tabIndex = index
			},
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
			}
		}
	}
</script>

<style lang="less">
</style>
