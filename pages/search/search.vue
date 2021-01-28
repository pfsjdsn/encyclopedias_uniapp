<template>
	<view>
		<template v-if="list.length > 0">
			<block v-for="(item, index) in list" :key="index">
				<indexList :item="item" :index="index"></indexList>
			</block>
			<!-- 上拉加载 -->
			<loadMore :loadText="loadText"></loadMore>
		</template>
		<template  v-else-if="isSearch && list.length < 1">
			<noThing></noThing>
		</template>
	</view>
</template>

<script>
	import loadMore from '@/components/common/load_more.vue';
	import noThing from '@/components/common/no_thing.vue';
	import indexList from '@/components/index/index_list.vue';
	export default {
		components: {
			indexList,
			noThing,
			loadMore
		},
		data() {
			return {
				searchText: '',
				isSearch: false,
				loadText: '上拉加载更多',
				list: []
			}
		},
		// 监听原生标题栏按钮点击事件
		// 点击取消，返回上一个页面
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				uni.navigateBack({
					delta: 1
				})
			} 
		},
		// 监听文本框发生变化
		onNavigationBarSearchInputChanged() {
			this.searchText = e.text
		},
		// 用户点击软键盘上的“搜索”按钮时触发。
		onNavigationBarSearchInputConfirmed	(e) {
			console.log(e.text)
			if (e.text) { this.getData() }
		},
		// 下拉刷新 
		onPullDownRefresh() {
			this.getData()
			uni.stopPullDownRefresh()
		},
		// 触底事件
		onReachBottom() {
			this.loadMore()
		},
		methods: {
			// 搜索事件
			getData() {
				uni.showLoading()
				setTimeout(() => {
					let arr = [
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
					this.list = arr
					uni.hideLoading()
					this.isSearch = true
				}, 1000)
			},
			// 上拉加载
			loadMore(index) {
				if(this.loadText != '上拉加载更多') {
					return;
				}
				this.loadText = '加载中...'
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
					this.list.push(obj)
					this.loadText = '上拉加载更多'
				}, 1000)
			},
		}
	}
</script>

<style>

</style>
