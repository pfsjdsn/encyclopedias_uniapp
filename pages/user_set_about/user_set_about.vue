<template>
	<view style="padding: 20upx;">
		<view class="user_set_about_t u_f_ajc u_f_dc">
			<image src="../../static/common/logo.png" 
			mode="widthFix" lazy-load></image>
			<view>version 1.0.0</view>
		</view>
		<block v-for="(item, index) in list" :key="index">
			<homeListItem :item="item" :index="index"></homeListItem>
		</block>
	</view>
</template>

<script>
	import homeListItem from '@/components/home/home_list_item.vue';
	export default {
		components: {
			homeListItem,
		},	
		data() {
			return {
				list: [
						{icon: '', name: '新版本检测', clickType: '', url: ''},
						{icon: '', name: '仿糗事百科用户协议', clickType: '', url: ''},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	.user_set_about_t {
		padding: 40upx 0;
		image {
			margin: 50upx 0 30upx 0;
			word-spacing: 65%;
		}
		>view {
			color: #ccc;
		}
	}
</style>
