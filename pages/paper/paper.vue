<template>
	<view class="container">
		<!-- 操作菜单 -->
		<paperRightPopup 
		:show="show" 
		@hidePopup="hidePopup" 
		@addFriends="addFriends"
		@clear="clear">
		</paperRightPopup>
		<!-- 小纸条列表 -->
		<block v-for="(item, index) in list" :key="index">
			<paperList :item="item" :index="index"></paperList>
		</block>
		<!-- 上拉加载 -->
		<loadMore :loadText="loadText"></loadMore>
	</view>
</template>

<script>
	import paperList from '@/components/paper/paper_list.vue';
	import paperRightPopup from '@/components/paper/paper_right_popup.vue';
	import loadMore from '@/components/common/load_more.vue';
	export default {
		components: {
			paperList,
			paperRightPopup,
			loadMore
		},
		data() { 
			return {
				show: false,
				loadText: '上拉加载更多',
				list: 
				[
					{
						userPic: '../../static/demo/topicpic/12.jpeg',
						userName: '昵称',
						time: '10:21',
						data: '我是信息',
						noReadNum: 123,
					},
					{
						userPic: '../../static/demo/topicpic/12.jpeg',
						userName: '昵称',
						time: '10:21',
						data: '我是信息',
						noReadNum: 0,
					},{
						userPic: '../../static/demo/topicpic/12.jpeg',
						userName: '昵称',
						time: '10:21',
						data: '我是信息',
						noReadNum: 0,
					},{
						userPic: '../../static/demo/topicpic/12.jpeg',
						userName: '昵称',
						time: '10:21',
						data: '我是信息',
						noReadNum: 123,
					},
					{
						userPic: '../../static/demo/topicpic/12.jpeg',
						userName: '昵称',
						time: '10:21',
						data: '我是信息',
						noReadNum: 123,
					},
					{
						userPic: '../../static/demo/topicpic/12.jpeg',
						userName: '昵称',
						time: '10:21',
						data: '我是信息',
						noReadNum: 0,
					},{
						userPic: '../../static/demo/topicpic/12.jpeg',
						userName: '昵称',
						time: '10:21',
						data: '我是信息',
						noReadNum: 0,
					},{
						userPic: '../../static/demo/topicpic/12.jpeg',
						userName: '昵称',
						time: '10:21',
						data: '我是信息',
						noReadNum: 123,
					}
				]
			}
		},
		// 下拉刷新 
		onPullDownRefresh() {
			this.getData()
		},
		// 上拉加载
		onReachBottom() {
			this.loadMore()
		},
		// 监听导航按钮点击事件
		onNavigationBarButtonTap(e) {
			console.log(123, e)
			switch (e.index){
				case 0:
				this.User.naviGate({
					url:"../user_list/user_list"
				})
				this.hidePopup()
					break;
				case 1:
				this.showPopup()
				
					break;
			}
		},
		methods: {
			addFriends() {
				console.log('加好友')
				this.hidePopup()
			},
			clear() {
				console.log('清除')
				this.hidePopup()
			},
			hidePopup() {
				this.show = false
			},
			showPopup() {
				this.show = true
			},
			loadMore(index) {
				if (this.loadText != '上拉加载更多') {
					return;
				}
				this.loadText = '加载中...'
				setTimeout(() => {
					let obj = {
						userPic: '../../static/demo/topicpic/12.jpeg',
						userName: '基石无人机吉大南人人众人人校压顶fdsfsfdf',
						time: '10:21',
						data: '我是信息',
						noReadNum: 123,
					}
					this.list.push(obj)
					this.loadText = '上拉加载更多'
				}, 1000)
				// this.loadText = '没有更多数据了'
			},
			// 获取数据
			getData() {
				setTimeout(() => {
					// 服务器获取数据
					let arr = [
						{
							userPic: '../../static/demo/topicpic/12.jpeg',
							userName: '124',
							time: '10:21',
							data: '111111',
							noReadNum: 123,
						},
						{
							userPic: '../../static/demo/topicpic/12.jpeg',
							userName: 'ff',
							time: '10:21',
							data: '我是信息',
							noReadNum: 0,
						}
					]
					// 赋值
					this.list = arr
					// 关闭下拉刷新 
					uni.stopPullDownRefresh();
				}, 2000)
			}
				
		}
	}
</script>

<style lang="less">
	.container {
		padding: 0 20upx;
	}
	
	
</style>
