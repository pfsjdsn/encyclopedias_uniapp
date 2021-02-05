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
				let url = `topic/${this.topicInfo.id}/post/${this.tabList[this.tabIndex].page}`
				let [err, res] = await this.$http.get(url, {}, {token});
				// 错误处理
				if(!this.$http.errorCheck(err, res)) {
					return this.tabList[this.tabIndex].loadText = '上拉加载更多';
				}
				let arr = []
				let list = res.data.data.list
				for(let i = 0; i < list.length; i++) {
					arr.push(this.__format(list[i]))
				}
				this.tabList[this.tabIndex].list = this.tabList[this.tabIndex].page > 1 ? this.tabList[this.tabIndex].list.concat(arr) : arr
				this.tabList[this.tabIndex].firstLoad = true;
				return this.tabList[this.tabIndex].loadText = (list.length < 10) ? '没有更多数据了'	: '上拉加载更多';
				
			},
			// 转化格式
			__format(item) {
				return {
					userId: item.user.id,
					userPic: item.user.userpic,
					userName: item.user.username,
					isFollow: !!item.user.fens.length,
					id: item.id,
					title: item.title,
					type: 'img', // img:图文， video视频
					titlePic: item.titlepic,
					video: false,
					path: item.path,
					share: !!item.share,
					infonum: {
						index:(item.support.length>0) ? (item.support[0].type+1) : 0, // 0：没有操作， 1顶， 2踩
						dingNum: item.ding_count,
						caiNum: item.cai_count,
					},
					goodNum: item.ding_count,
					commentNum: item.comment_count,
					shareNum: item.shareNum,
				}
			},
			tabtap(index) {
				this.tabIndex = index
			},
			loadMore(index) {
				if (this.tabList[this.tabIndex].loadText != '上拉加载更多')return;
				this.tabList[this.tabIndex].loadText = '加载中...'
				// 页数+1
				this.tabList[this.tabIndex].page++;
				// 获取数据
				this.getList();
				
				
			}
		}
	}
</script>

<style lang="less">
</style>
