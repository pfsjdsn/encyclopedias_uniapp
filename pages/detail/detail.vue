<template>
	<view>
		<detailInfo :item="detail"></detailInfo>
	</view>
</template>

<script>
	import detailInfo from '@/components/detail/detail_info.vue';
	export default {
		components: {
			detailInfo
		},
		data() {
			return {
				detail: {
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
			}
		},
		// 监听导航右边按钮
		onNavigationBarButtonTap(e) {
			if(e.index == 0) {
				console.log('分享')
			}
		},
		onLoad(e) {
			this.initData(JSON.parse(e.detailData))
		},
		methods: {
			initData(obj) {
				uni.setNavigationBarTitle({
					title: obj.title
				})
			},
		}
	}
</script>

<style>

</style>
