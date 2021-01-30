<template>
	<view>
		<detailInfo :item="detail"></detailInfo>
		<view class="u_comment_title">最新评论 {{comment.count}}</view>
		<view class="uni-comment u_comment">
			<block v-for="(item, index) in comment.list" :key="index">
				<commentList :item="item" :index="index"></commentList>
			</block>
		</view>
		<view style="height: 120upx;"></view>
		<!-- 输入框 -->
		<userChatBottom @submit="submit"></userChatBottom>
		<!-- 分享 -->
		<moreShare :show="shareShow" @toggle="toggle"></moreShare>
		
	</view>
</template>

<script>
	import userChatBottom from '@/components/user_chat/user_chat_bottom.vue'; 
	import detailInfo from '@/components/detail/detail_info.vue';
	import commentList from '@/components/detail/comment_list.vue';
	import moreShare from '@/components/common/more_share.vue';
	import time from '@/common/time.js'
	export default {
		components: {
			detailInfo,
			commentList,
			userChatBottom,
			moreShare
		},
		data() {
			return {
				shareShow: false,
				comment: {
					count: 20,
					list: [],
				},
				detail: {
					userPic: '../../static/demo/userpic/12.jpg',
					userName: '哈哈',
					sex: 0, //0 男 1女
					age: 25,
					isFollow: false,
					title: '标题',
					titlePic: '../../static/demo/datapic/13.jpg',
					morePic: ['../../static/demo/datapic/13.jpg', '../../static/demo/datapic/13.jpg','../../static/demo/datapic/13.jpg','../../static/demo/datapic/13.jpg'],
					video: false,
					share: false,
					path: '深圳 龙岗',
					shareNum: 20,
					commentNum: 30,
					goodNum: 20

				},
			}
		},
		// 监听导航右边按钮
		onNavigationBarButtonTap(e) {
			if(e.index == 0) {
				console.log('分享')
				this.toggle()
			}
		},
		onLoad(e) {
			// this.initData(JSON.parse(e.detailData))
			this.getComment()
		},
		methods: {
			toggle() {
				this.shareShow=!this.shareShow
 			},
			submit(data) {
				console.log(data)
				let obj = {	id:1,
						fatherId: 0,
						userPic: '../../static/common/addinput.png',
						userName: '12',
						time: time.gettime.gettime(new Date().getTime()),
						data: data
					}
				this.comment.list.push(obj)	
			},
			getComment() {
				let arr = [
					// 父级评论
					{	id:1,
						fatherId: 0,
						userPic: '../../static/common/addinput.png',
						userName: '12',
						time: '1555400035',
						data: '人人人'
					},
					// 子级评论
					{	id:2,
						fatherId: 1,
						userPic: '../../static/common/addinput.png',
						userName: '12',
						time: '1555400035',
						data: '人人人'
					},
					{	id:3,
						fatherId: 1,
						userPic: '../../static/common/addinput.png',
						userName: '12',
						time: '1555400035',
						data: '人人人'
					},
					// 父级评论
					{	id:4,
						fatherId: 0,
						userPic: '../../static/common/addinput.png',
						userName: '12',
						time: '1555400035',
						data: '金鑫'
					}	
				]
				
				for (let i = 0; i < arr.length; i++) {
					arr[i].time = time.gettime.gettime(arr[i].time)
					this.comment.list = arr
				}
			},
			initData(obj) {
				uni.setNavigationBarTitle({
					title: obj.title
				})
			},
		}
	}
</script>

<style lang="less">
	.u_comment_title {
		padding: 20upx;
		font-size: 30upx;
		font-weight: bold;
	}
	.u_comment {
		padding: 0 20upx; 
		
	}
</style>
