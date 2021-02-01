<template>
	<view class="user_chat_bottom u_f_ac animate__animated animate__fadeInDown animate__fast">
		<input type="text" placeholder="文明发言" v-model="text"/>
		<view class="iconfont iconfabu u_f_ajc" @tap="submit"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:''
			};
		},
		methods:{
			submit() {
				this.$emit('submit', this.text)
				this.text = ''
			}	
		}
	}
</script>

<style lang="less" scoped>
	.user_chat_bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 120upx;
		padding:  0 20upx;
		background-color: #fff;
		border-top: 1upx solid #eee;
		padding: 0 10upx;
		input {
			flex: 1;
			margin: 0 20upx 0 0;
			padding: 10upx 20upx;
			border-radius: 10upx;
		}
		>view {
			width: 80upx;
			
		}
		.iconfabu {
			font-size: 45upx!important;
		}
	}
</style>
