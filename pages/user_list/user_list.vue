<template>
	<view>
		<!-- tabbar切换 -->
		<swiperTabHead
		:tabBars="tabBars"
		:tabIndex="tabIndex"
		 @tabtap="tabtap"
		 scrollStyle="border-bottom: 0;" scrollItemStyle="width: 33%">
		</swiperTabHead>
	</view>
</template>

<script>
	import swiperTabHead from '@/components/index/swiper_tab_header.vue';
	export default {
		components: {
			swiperTabHead
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [
					{name: '互关', id: 0, num: 10},
					{name: '关注', id: 1, num: 20},
					{name: '粉丝', id: 2, num: 30}
				],
			}
		},
		// 监听导航按钮点击事件
		onNavigationBarButtonTap(e) {
			if(e.index == 0) {
				uni.navigateBack({
					delta:1
				})
			}
		},
		methods: {
			tabtap(index) {
				this.tabIndex = index
			}
		}
	}
</script>

<style>

</style>
