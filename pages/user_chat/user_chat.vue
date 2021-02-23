<template>
	<view>
		<!-- 聊天列表 -->
		<scroll-view id="scrollView" scroll-y :scroll-top="scrollTop" 
		scroll-with-animation="true" :style="{height: style.contentH + 'px'}">
			<block v-for="(item, index) in list" :key="index">
				<userChatList :item="item" :index="index" class="user_chat_item"></userChatList>
			</block>
		</scroll-view>
		<!-- 输入框 -->
		<userChatBottom @submit="submit"></userChatBottom>
	</view>
</template>

<script>
	import userChatBottom from '@/components/user_chat/user_chat_bottom.vue'; 
	import userChatList from '@/components/user_chat/user_chat_list.vue'; 
	import time from '@/common/time.js'
	export default {
		components:{
			userChatBottom,
			userChatList
		},
		data() {
			return {
				scrollTop: 0,
				style: {
					contentH: 0,
					itemH: 0
				},
				list: []
			}
		}, 
		onLoad(){
			this.getData()
			this.initData()
		},
		mounted() {
			this.pageToBottom()
		},
		methods: {
			// 初始化参数
			initData() {
				try {
				    const res = uni.getSystemInfoSync();
					this.style.contentH = res.windowHeight - uni.upx2px(120)
				} catch (e) {
				    // error
				}
			},
			pageToBottom() {
				let q = uni.createSelectorQuery()
				q.select('#scrollView').boundingClientRect()
				q.selectAll('.user_chat_item').boundingClientRect()
				q.exec((res) => {
					res[1].forEach( (ret) => {
						this.style.itemH += ret.height
					})
					if(this.style.itemH > this.style.contentH) {
						this.scrollTop = this.style.itemH
					}
				})
			},
			getData() {
				let arr = [
					{
						isMe: false,
						userPic: '../../static/common/nothing.png',
						type: 'text',
						data: '哈哈',
						time: '1554970012'
					},
					{
						isMe: true,
						userPic: '../../static/common/nothing.png',
						type: 'img',
						data: '../../static/common/nothing.png',
						time: '1554970814'
					}
				]
				for (let i = 0; i<arr.length; i++) {
					arr[i].gstime = time.gettime.getChatTime(arr[i].time, i> 0 ? arr[i-1].time : 0)
				}
				this.list = arr
			},
			submit(data) {
				// 构建数据
				let now = new Date().getTime()
				let obj = {
						isMe: true,
						userPic: '../../static/common/nothing.png',
						type: 'text',
						data: data,
						time: now,
						gstime: time.gettime.getChatTime(now, this.list[this.list.length - 1].time)
					};
					this.list.push(obj)
					this.pageToBottom()
					console.log('当前输入的是：', data)
			}
		}
	}
</script>

<style lang="less">
	
</style>
