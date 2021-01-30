<template>
	<view class="home_data u_f_ac">
		<block v-for="(item, index) in homeData" :key="index">
			<view class="u_f1 u_f_ajc u_f_dc"><view>{{item.num}}
			</view>{{item.name}}</view>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			homeData: Array
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
	.home_data {
		padding: 20upx 40upx;
		>view {
			color: #989898;
			>view {
				font-size: 35upx;
				color: #333;
			}
		}
	}
</style>
