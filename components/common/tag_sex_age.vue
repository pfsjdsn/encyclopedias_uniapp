<template>
	<view class="iconfont age" :class="[sex == 0 ? 'iconnan' : 'iconnv2']">{{age}}</view>
</template>

<script>
	export default {
		props: {
			sex: Number,
			age: Number,
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
	.age {
		background: #007aff;
		color: #fff;
		font-size: 24upx;
		padding: 5upx 10upx;
		margin: 0 0 0 10upx;
		border-radius: 20upx;
		line-height: 26upx;
	}
	.iconnv2 {
		background: #ff698d!important;
	}
</style>
