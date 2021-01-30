<template>
	<view class="other_login u_f_ac">
		<view class="u_f_ajc u_f1">
			<view class="iconfont iconweixin u_f_ajc"></view>
		</view>
		<view class="u_f_ajc u_f1">
			<view class="iconfont iconxinlangweibo u_f_ajc"></view>
		</view>
		<view class="u_f_ajc u_f1">
			<view class="iconfont iconfenxiangqqhaoyou u_f_ajc"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
	.other_login {
		padding: 20upx 80upx;
		>view>view {
			width: 100upx;
			height: 100upx;
			border-radius: 100%;
			font-size: 55upx;
			color: #fff;
		}
		.iconweixin {
			background: #2db19b;
		}
		.iconxinlangweibo {
			background: #2caefc;
		}
		.iconfenxiangqqhaoyou {
			background: #fc7729;
		}
	}
</style>
