<template>
	<view class="other_login u_f_ac">
			<block v-for="(item, sort) in providerList" :key="sort">
				<view>{{item.name}}</view>
				<view class="u_f_ajc u_f1" @tap="toLogin(item)" style="z-index: 100;">
					<view class="iconfont u_f_ajc" :class="item.zIcon"></view>
				</view>
			</block>
		<button type="primary" open-type="getUserInfo" @getUserInfo="mpGetUserInfo">微信登录</button>
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
			mpGetUserInfo(result) {
				console.log(11111111111111111113)
				uni.showLoading({ title: '登录中...', mask: true });
				// 获取失败
				if (result.detail.errMsg !== 'getUserInfo:ok') {
					uni.hideLoading();
					uni.showModal({
						title: '获取用户信息失败',
						content: '错误原因' + result.detail.errMsg,
						showCancel: false
					});
					return;
				}
				let userinfo = result.detail.userInfo;
				uni.login({
					provider:"weixin",
					success: (res) => {
						this.MpLogin({
							url:"/wxlogin",
							code:res.code,
							nickName:userinfo.nickName,
							avatarUrl:userinfo.avatarUrl
						})
					},
					complete: () => {
						uni.hideLoading();
					}
				})
			},
			getLoginAuth(){
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
