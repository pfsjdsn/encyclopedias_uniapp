<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
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
			console.log(e.text)
		},
		// 用户点击软键盘上的“搜索”按钮时触发。
		onNavigationBarSearchInputConfirmed	(e) {
			console.log(e.text)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
