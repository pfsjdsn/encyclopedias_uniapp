<template>
	<view class="other_login u_f_ac">
		<block v-for="(item, index) in providerList" :key="index">
			<view class="u_f_ajc u_f1" @tap="toLogin(item)">
				<view class="iconfont u_f_ajc" :class="item.icon"></view>
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
			this.getLoginAuth()
		},
		methods:{
			// 获取当前登录渠道
			getLoginAuth() {
				uni.getProvider({
					service: 'oauth',
					success: (result) => {
						this.providerList = result.provider.map((value) => {
							let providerName = '';
							let icon = '';
							switch (value) {
								case 'weixin':
									providerName = '微信登录';
									icon = 'iconweixin';
									break;
								case 'qq':
									providerName = 'QQ登录';
									icon = 'iconxinlangweibo';
									break;
								case 'sinaweibo':
									providerName = '新浪微博登录';
									icon = 'iconfenxiangqqhaoyou';
									break;
								case 'alipay':
									providerName = '支付宝登录';
									icon = '';
									break;
							}
							return {
								name: providerName,
								icon:icon,
								id: value
							}
						});
						
					},
					fail: (error) => {
						console.log('获取登录通道失败', error);
					}
				});
						
				if (this.hasLogin && this.isUniverifyLogin) {
					this.getPhoneNumber(uni.getStorageSync(univerifyInfoKey)).then((phoneNumber) => {
						this.phoneNumber = phoneNumber
					})
				}
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
			}
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
