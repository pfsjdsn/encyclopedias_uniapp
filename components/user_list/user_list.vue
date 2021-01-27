<template>
	<view class="user_list u_f_ac animate__animated animate__fadeInLeft animate__fast">
		<image :src="item.userPic"
		mode="widthFix" lazy-load></image>
		<view>
			<view class="user_name">{{item.userName}}</view>
			<view style="display: inline-block;" class="u_f_ajc">
				<tagSexAge :age="item.age" :sex="item.sex"></tagSexAge>
			</view>
		</view>
		<view class="iconfont iconziyuan1 u_f_ajc"
		style="font-size: 35upx;"
		:class="[item.isFollow ? 'icongou1' : 'iconziyuan1']"></view>
	</view>
</template>

<script>
	import tagSexAge from '@/components/common/tag_sex_age.vue';
	export default {
		components: {
			tagSexAge
		},
		props: {
			item: Object,
			index: Number
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
	.user_list {
		padding: 20upx 0;
		border-bottom: 1upx solid #eee;
		image {
			width: 100upx;
			height: 100upx;
			border-radius: 100%;
			margin: 0 20upx 0 0;
			flex-shrink: 0;
		}
		.user_name {
			font-size: 35upx;
		}
		>view:first-of-type{
			flex: 1;
		}
		>view:last-of-type{
			width: 120upx;
			color: #ccc;
		}
		.iconziyuan1 {
			color: #f8791b!important;
		}
		.icongou1 {
			color: #ccc!important;
		}
		
	}
</style>
