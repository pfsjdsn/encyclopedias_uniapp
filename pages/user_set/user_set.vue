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
						{icon: '', name: '账号与安全', clickType: 'navigateTo', url: '../../pages/user_set_repassword/user_set_repassword'},
						{icon: '', name: '绑定邮箱', clickType: 'navigateTo', url: '../../pages/user_set_email/user_set_email'},
						{icon: '', name: '资料编辑', clickType: 'navigateTo', url: '../../pages/user_set_user_info/user_set_user_info'},
						{icon: '', name: '小纸条', clickType: '', url: ''},
						{icon: '', name: '清除缓存', clickType: '', url: ''},
						{icon: '', name: '意见反馈', clickType: 'navigateTo', url: '../../pages/user_set_help/user_set_help'},
						{icon: '', name: '关于仿糗百', clickType: 'navigateTo', url: '../../pages/user_set_about/user_set_about'},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	@import '@/common/form.css';	
</style>
