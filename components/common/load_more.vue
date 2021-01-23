<template>
	<view class="load_more">{{loadText}}</view>
</template>

<script>
	export default {
		props:{
			loadText: String
		}
	}
</script>

<style lang="less">
	.load_more {
		text-align: center;
		color: #aaa;
		padding: 10upx;
	}
</style>
