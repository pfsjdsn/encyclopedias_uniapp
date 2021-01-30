<template>
	<view class="body">
		<block v-for="(item, index) in list" :key="index">
			<homeListItem :item="item" :index="index"></homeListItem>
		</block>
		<button class="user_set_btn" type="primary">退出登录</button>
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
						{icon: '', name: '账号与安全'},
						{icon: '', name: '绑定邮箱'},
						{icon: '', name: '资料编辑'},
						{icon: '', name: '小纸条'},
						{icon: '', name: '清除缓存'},
						{icon: '', name: '意见反馈'},
						{icon: '', name: '关于糗百'},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	.body{
		padding: 0 20upx;
		.user_set_btn {
			width: 100%;
			margin: 20upx 0;
			background: #ffe933!important;
			border: 0!important;
			color: #333!important;
		}
	}
	
</style>
