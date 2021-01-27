<template>
	<view class="paper_list u_f_ac animate__animated animate__fadeInLeft animate__fast">
		<image :src="item.userPic" 
		mode="widthFix" lazy-load></image>
		<view>
			<view class="u_f_ac u_f_jsb user_name">{{item.userName}}<view class="time">{{item.time}}</view></view>
			<view class="info_content u_f_ac u_f_jsb">{{item.data}}
			<template v-if="item.noReadNum>0">
				<uniBadge class="uni-badge-left-margin"
				:text="item.noReadNum" type="error" />
			</template>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from '@/components/uni-badge/uni-badge.vue';
	export default {
		components: {
			uniBadge
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
	.paper_list {
		padding: 20upx 0;
		image {
			width: 100upx;
			height: 100upx;
			border-radius: 100%;
			margin: 0 20upx 0 0;
			flex-shrink: 0;
		}
		>view {
			flex: 1;
		}
		.time {
			color: #cbcbcb;
		}
		.user_name {
			font-size: 35upx;
		}
		.info_content {
			color: #999;
		}
	}
</style>
