<template>
	<view class="other_login u_f_ac">
		<block v-for="(item, sort) in providerList" :key="sort">
			<view>{{item.name}}</view>
			<view class="u_f_ajc u_f1" @tap="toLogin(item)" style="z-index: 100;">
				<view class="iconfont u_f_ajc" :class="item.zIcon"></view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			
		},
		data() {
			return {
				providerList: [],
				
			};
		},
		onReady() {
			uni.getProvider({
				service: 'share',
				success: (e) => {
					let data = []
					for (let i = 0; i < e.provider.length; i++) {
						console.log(e.provider[i], '-------------')
						switch (e.provider[i]) {
							case 'weixin':
								data.push({
									name: '微信好友',
									id: 'weixin',
									zIcon: 'iconweixin',
									zClass:'wx',
									sort:0
								})
								data.push({
									name: '微信朋友圈',
									id: 'weixin',
									zIcon: 'iconpengyouquan',
									zClass:'pyq',
									type:'WXSenceTimeline',
									sort:1
								})
								break;
							case 'sinaweibo':
								data.push({
									name: '新浪微博',
									id: 'sinaweibo',
									zIcon: 'iconxinlangweibo',
									zClass:'wb',
									sort:2
								})
								break;
							case 'qq':
								data.push({
									name: 'QQ好友',
									id: 'qq',
									zIcon: 'iconfenxiangqqhaoyou',
									zClass:'qq',
									sort:3
								})
								break;
							default:
								break;
						}
					}
					this.providerList = data.sort((x,y) => {
						return x.sort - y.sort
					});
					console.log(this.providerList, 11111111111)
				},
				fail: (e) => {
					console.log('获取分享通道失败', e);
					uni.showModal({
						content:'获取分享通道失败',
						showCancel:false
					})
				}
			});
			this.getLoginAuth()
		// 	uni.getProvider({
		// 			service: 'oauth',
		// 			// service: 'share',
		// 			success: (result) => {
		// 				this.providerList = result.provider.map((value) => {
		// 					let providerName = '';
		// 					let icon = '';
		// 					switch (value) {
		// 						case 'weixin':
		// 							providerName = '微信登录';
		// 							icon = 'iconweixin';
		// 							break;
		// 						case 'qq':
		// 							providerName = 'QQ登录';
		// 							icon = 'iconxinlangweibo';
		// 							break;
		// 						case 'sinaweibo':
		// 							providerName = '新浪微博登录';
		// 							icon = 'iconfenxiangqqhaoyou';
		// 							break;
		// 						case 'alipay':
		// 							providerName = '支付宝登录';
		// 							icon = '';
		// 							break;
		// 					}
		// 					return {
		// 						name: providerName,
		// 						icon:icon,
		// 						id: value
		// 					}
		// 				});
						
		// 			},
		// 			fail: (error) => {
		// 				console.log('获取登录通道失败', error);
		// 			}
		// 		});
		},
		methods:{
			// 获取当前登录渠道
			getLoginAuth(){
				
				// uni.getProvider({
				// 	service: 'oauth',
				// 	success: (result) => {
				// 		this.providerList = result.provider.map((value) => {
				// 			let providerName = '';
				// 			let icon='';
				// 			switch (value) {
				// 				case 'weixin':
				// 					providerName = '微信登录';
				// 					icon='weixin';
				// 					break;
				// 				case 'qq':
				// 					providerName = 'QQ登录';
				// 					icon='fenxiangqqhaoyou';
				// 					break;
				// 				case 'sinaweibo':
				// 					providerName = '新浪微博登录';
				// 					icon='xinlangweibo';
				// 					break;
				// 				case 'alipay':
				// 					providerName = '支付宝登录';
				// 					icon='';
				// 					break;
				// 			}
				// 			return {
				// 				name: providerName,
				// 				icon:icon,
				// 				id: value
				// 			}
				// 		});
						
				// 	},
				// 	fail: (error) => {
				// 		console.log('获取登录通道失败', error);
				// 	}
				// });
			},
			//  登录
			toLogin(provider) {
				console.log(provider.id)
				uni.login({
					provider: provider.id,
					success: (res) => {
						console.log('login success:', res);
						uni.getUserInfo({
						  provider:provider.id,
						  success: (infoRes)=> {
							console.log(JSON.stringify(infoRes.userInfo))
						  }
						});
						
						// 更新保存在 store 中的登录状态
						console.log('登录成功，保存到本地存储，修改当前用户登录状态')
					},
					fail: (err) => {
						console.log('login fail:', err);
					}
				});
		},
	},
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
