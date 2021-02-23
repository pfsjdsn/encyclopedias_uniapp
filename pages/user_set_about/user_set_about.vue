<template>
	<view style="padding: 20upx;">
		<view class="user_set_about_t u_f_ajc u_f_dc">
			<image src="../../static/common/logo.png" 
			mode="widthFix" lazy-load></image>
			 <!-- #ifdef APP-PLUS -->
			<view>version {{version}}</view>
			<!--  #endif-->
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
				version: '',
				list: [
  						{icon: '', name: '新版本检测', clickType: '', url: ''},
						{icon: '', name: '仿糗事百科用户协议', clickType: '', url: ''},
				]
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			plus.runtime.getProperty(plus.runtime.appid,(widgetInfo) => {
				this.version = widgetInfo.version
			})
			//  #endif
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
