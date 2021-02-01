<template>
	<view class="home_list_item u_f_ac u_f_jsb"
	hover-class="home_list_hover" @tap="clickEvent">
		<view class="u_f_ac">
			<view class="iconfont" :class="item.icon"  v-if="item.icon"></view>{{item.name}}
		</view>
		<view class="iconfont iconjinru"></view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		data() {
			return {
				
			};
		},
		methods: {
			clickEvent() {
				switch (this.item.clickType){
					case 'navigateTo':
					if(this.item.url) {uni.navigateTo({url: this.item.url})}
						break;
					case 'clear':
					uni.showModal({
						title: '提示',
						content: '是否要清除缓存',
						confirmText:'立刻清除',
						success:res => {
							if(res.confirm) {
								uni.clearStorage();
								uni.showToast({
									title: '清除缓存成功！'
								});
							}
						}
					})
						break;
				}
			},
		}
	}
</script>

<style lang="less" scoped>
	.home_list_hover {
		background: #f4f4f4;
	}
	.home_list_item {
		padding: 20upx;
		border-top: 1upx solid #f4f4f4;
		border-bottom: 1upx solid #f4f4f4;
		>view>view {
			margin: 0 10upx 0 0;
		}
		>view:first-child{
			color: #333;
		}
		>view:last-child{
			color: #ccc;
			font-size: 40upx;
		}
	}
</style>
