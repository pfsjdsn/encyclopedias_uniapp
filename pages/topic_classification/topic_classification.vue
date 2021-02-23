<template>
	<view>
		<swiperTabHead :tabBars="tabBars"
		:tabIndex="tabIndex" @tabtap="tabtap">
		</swiperTabHead>
		
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperHeight + 'px'}"
			 :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items, index) in newsList" :key="index">
					<scroll-view scroll-y class="list" @scrolltolower="loadMore(index)">
						<template v-if="items.list.length">
							<!-- 话题列表 -->
							<view class="topic_view">
								<block v-for="(item, index1) in items.list"
								 :key="index1">
								 <topicList :item="item" :index="index1"></topicList>
								</block>
							</view>
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
	import swiperTabHead from '@/components/index/swiper_tab_header.vue';
	import noThing from '@/components/common/no_thing.vue';
	import loadMore from '@/components/common/load_more.vue';
	import topicList from '@/components/news/topic_list.vue';
	export default {
		components:{ swiperTabHead,noThing,loadMore,topicList},
		data() {
			return {
				tabIndex: 0,
				swiperHeight: 500,
				tabBars: [
					{name: '关注', id: 0},
					{name: '推荐', id: 1},
					{name: '体育', id: 2},
					{name: '热点', id: 3},
					{name: '财经', id: 4},
					{name: '娱乐', id: 5},
				],
				newsList: [
					{	loadText: '上拉加载更多',
						list: [
							{
							titlePic: '../../static/common/nothing.png',
							title: '话题名称',
							desc: '我是话题描述',
							totalNum: 10,
							todayNum: 5,
							},
							{
							titlePic: '../../static/common/nothing.png',
							title: '话题名称',
							desc: '我是话题描述',
							totalNum: 10,
							todayNum: 5,
							},
							{
							titlePic: '../../static/common/nothing.png',
							title: '话题名称',
							desc: '我是话题描述',
							totalNum: 10,
							todayNum: 5,
							},
							{
							titlePic: '../../static/common/nothing.png',
							title: '话题名称',
							desc: '我是话题描述',
							totalNum: 10,
							todayNum: 5,
							},
							{
							titlePic: '../../static/common/nothing.png',
							title: '话题名称',
							desc: '我是话题描述',
							totalNum: 10,
							todayNum: 5,
							},
							{
							titlePic: '../../static/common/nothing.png',
							title: '话题名称',
							desc: '我是话题描述',
							totalNum: 10,
							todayNum: 5,
							},
							{
							titlePic: '../../static/common/nothing.png',
							title: '话题名称',
							desc: '我是话题描述',
							totalNum: 10,
							todayNum: 5,
							},
							{
							titlePic: '../../static/common/nothing.png',
							title: '话题名称',
							desc: '我是话题描述',
							totalNum: 10,
							todayNum: 5,
							},
						]
					},
					{	loadText: '上拉加载更多',
						list: [
							{
							titlePic: '../../static/common/nothing.png',
							title: '话题名称',
							desc: '我是话题描述',
							totalNum: 10,
							todayNum: 5,
							},
							{
							titlePic: '../../static/common/nothing.png',
							title: '话题名称',
							desc: '我是话题描述',
							totalNum: 10,
							todayNum: 5,
							},
						]
					},
					{	loadText: '上拉加载更多',
						list: [
							{
							titlePic: '../../static/common/nothing.png',
							title: '话题名称',
							desc: '我是话题描述',
							totalNum: 10,
							todayNum: 5,
							},
							{
							titlePic: '../../static/common/nothing.png',
							title: '话题名称',
							desc: '我是话题描述',
							totalNum: 10,
							todayNum: 5,
							},
						]
					},
					{	loadText: '上拉加载更多',
						list: [
							{
							titlePic: '../../static/common/nothing.png',
							title: '话题名称',
							desc: '我是话题描述',
							totalNum: 10,
							todayNum: 5,
							},
							{
							titlePic: '../../static/common/nothing.png',
							title: '话题名称',
							desc: '我是话题描述',
							totalNum: 10,
							todayNum: 5,
							},
						]
					},
					{	loadText: '上拉加载更多',
						list: [
							{
							titlePic: '../../static/common/nothing.png',
							title: '话题名称',
							desc: '我是话题描述',
							totalNum: 10,
							todayNum: 5,
							},
							{
							titlePic: '../../static/common/nothing.png',
							title: '话题名称',
							desc: '我是话题描述',
							totalNum: 10,
							todayNum: 5,
							},
						]
					},
					{	loadText: '上拉加载更多',
						list: [
							{
							titlePic: '../../static/common/nothing.png',
							title: '话题名称',
							desc: '我是话题描述',
							totalNum: 10,
							todayNum: 5,
							},
							{
							titlePic: '../../static/common/nothing.png',
							title: '话题名称',
							desc: '我是话题描述',
							totalNum: 10,
							todayNum: 5,
							},
						]
					}
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
		methods: {
			tabtap(index) {
				this.tabIndex = index
			},
			// 滑动事件
			tabChange(e) {
				this.tabIndex = e.detail.current
			},
			loadMore(index) {
				console.log(123)
				if (this.newsList[index].loadText != '上拉加载更多') {
					return;
					console.log(1)
				}
				this.newsList[index].loadText = '加载中...'
				console.log(3)
				setTimeout(() => {
					let obj = {
						titlePic: '../../static/common/nothing.png',
						title: '话题名称',
						desc: '我是话题描述',
						totalNum: 10,
						todayNum: 5,
						};
					this.newsList[index].list.push(obj)
					this.newsList[index].loadText = '上拉加载更多'
				}, 1000)
			},
		}
	}
</script>

<style lang="less" >
	.topic_view {
		padding: 0 20upx;
	}
</style>
