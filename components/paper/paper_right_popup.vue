<template>
	<view>
		<view class="paper_right_popup_mask" v-show="show" @tap="hidePopup"></view>
		<view class="paper_right_popup" v-show="show">
			<view class="u_f_ac" hover-class="paper_right_popup_h" @tap="addFriends">
				<view class="iconfont iconsousuo" style="font-size: 30upx;">
				</view>
				加糗友
			</view>
			<view class="u_f_ac" hover-class="paper_right_popup_h" @tap="clear">
				<view class="iconfont iconqingchu" style="font-size: 40upx;">
				</view>
				清除缓存
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			show: Boolean
		},
		data() {
			return {
				
			};
		},
		methods:{
			hidePopup() {
				this.$emit('hidePopup')
			},
			addFriends() {
				this.$emit('addFriends')
			},
			clear() {
				this.$emit('clear')
			},
		}
	}
</script>

<style lang="less" scoped>
	.paper_right_popup_mask {
		position: fixed;
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;
		// background-color: #333;
		z-index: 1999;
	}
	.paper_right_popup {
		position: fixed;
		right: 0;
		top: 10upx;
		background-color: #fff;
		z-index: 200;
		width: 55%;
		box-shadow: 1upx 1upx 20upx 2upx #ccc;
		>view {
			padding: 20upx;
			font-size: 35upx;
			>view {
				margin: 0 10upx 0 0;
				font-weight: bold;
			}
		}
		.paper_right_popup_h {
			background-color: #eee;
		}
	}
</style>
