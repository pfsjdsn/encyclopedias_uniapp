<template>
	<view>
		<!-- 状态栏 -->
		<uniStatusBar bgColor="#ffe933"></uniStatusBar>
		<!-- 关闭按钮 -->
		<view class="iconfont iconguanbi" @tap="back"></view>
		<!-- 引入背景图 -->
		<image class="login_head" src="../../static/common/loginhead.png" mode="widthFix" lazy-load></image>
		<!-- 输入框+按钮 -->
		<view class="body">
			<!-- 账号密码登录  -->
			<template v-if="!status">
				<input type="text" v-model="userName" class="uni-input common_input" placeholder="昵称/手机号/邮箱" />
				<view class="login_input_box">
					<input type="text" v-model="password" class="uni-input common_input forget_input" placeholder="请输入密码" />
					<view class="forget u_f_ajc">忘记密码</view>
				</view>
			</template>
			<!-- 手机验证码登录 -->
			<template v-else>
				<view class="login_input_box">
					<view class="phone u_f_ajc">+86</view>
					<input type="text" v-model="phone" class="uni-input common_input phone_input" placeholder="手机号" maxlength="11"/>
				</view>
				<view class="login_input_box">
					<input type="text" v-model="checkNum" class="uni-input common_input forget_input" placeholder="请输入验证码" />
					<view class="forget u_f_ajc login_font_color code" @tap="getCheckNum">
						<view class="u_f_ajc">{{!codeTime ? '获取验证码' : codeTime + 's'}}</view>
					</view>
				</view>
			</template>

			<button class="user_set_btn" :class="{'user_set_btn_disable': disabled}" type="primary" @tap="submit" :disabled="disabled"
			 :loading="loading">登录 </button>
		</view>
		<!-- 登录状态切换 -->
		<view class="login_status u_f_ajc login_padding login_font_color" @tap="changeStatus">
			{{status? '账号密码登录' : '验证码登录'}}
			<view class="iconfont iconjinru login_font_color"></view>
		</view>
		<!-- 第三方登录  -->
		<view class="other_login_title u_f_ajc login_padding login_font_color">第三方登录</view>
		<otherLogin></otherLogin>
		<!-- 协议 -->
		<view class="login_rule u_f_ajc login_padding login_font_color">
			注册即代表你同意<view>《XXX协议》</view>
		</view>
	</view>
</template>

<script>
	import uniStatusBar from '@/components/uni-status-bar/uni-status-bar.vue';
	import otherLogin from '@/components/home/other_login.vue';
	export default {
		components: {
			uniStatusBar,
			otherLogin
		},
		data() {
			return {
				status: false, //false账号密码登录 ，true手机验证码登录
				loading: false,
				disabled: true,
				userName: '',
				password: '',
				phone: '',
				checkNum: '',
				codeTime: 0
			}
		},
		watch:{
			userName(val) {
				this.onBtnChange()
			},
			password(val) {
				this.onBtnChange()
			},
			phone(val) {
				this.onBtnChange()
			},
			checkNum(val) {
				this.onBtnChange()
			},
		},
		methods: {
			// 验证手机号
			isPhone() {
				let mPattern = /^1[34578]\d{9}$/;
				return mPattern.test(this.phone)
			},
			// 获取验证码
			getCheckNum() {
				if(this.codeTime > 0) {
					uni.showToast({
						title: '不能重复获取',
						icon: 'none'
					})
					return;
				}
				// 检验手机号合法性
				if(!this.isPhone()) {
					uni.showToast({
						title: '请输入正确的手机号码',
						icon: 'none'
					})
					return;
				}
				// 请求服务器， 发送验证码
				// 发送成功， 开启倒计时
				this.codeTime = 60 // 倒计时60s
				let timer = setInterval(() => {
					this.codeTime--
					if(this.codeTime < 1) {
						clearInterval(timer)
						this.codeTime = 0
					}
				},1000)
			},
			// 改变按钮状态
			onBtnChange() {
				if ((this.userName && this.password) || (this.phone && this.checkNum)) {
					this.disabled = false;
					return;
				}
				this.disabled = true
			},
			// 切换登录状态
			changeStatus() {
				this.initInput()
				this.status = !this.status
			},
			// 初始化表单
			initInput() {
				this.userName = ''
				this.password = ''
				this.phone = ''
				this.checkNum = ''
			},
			// 提交登录 
			submit() {
				// 账号密码登录
				if(!this.status) {
					return;
				}
				// 验证码登录 
				// 检验手机号合法性
				if(!this.isPhone()) {
					uni.showToast({
						title: '请输入正确的手机号码',
						icon: 'none'
					})
					return;
				}
				console.log('提交登录')
			},
			// 返回上一步
			back() {
				console.log('返回上一步	')
				uni.navigateBack({
					delta:1
				})
			},
		}
	}
</script>

<style lang="less">
	@import '@/common/form.css';

	.login_font_color {
		color: #bbb;
	}

	.login_padding {
		padding: 20upx 0;
	}

	.other_login_title {
		position: relative;
	}

	.other_login_title::before,
	.other_login_title::after {
		content: '';
		position: absolute;
		background: #bbb;
		height: 1upx;
		width: 100upx;
		top: 50%;
	}

	.other_login_title::before {
		left: 25%;
	}

	.other_login_title::after {
		right: 25%;
	}

	.login_input_box {
		position: relative;

		.forget_input {
			padding: 20upx 150upx 0 20upx;
		}

		.phone_input {
			padding-left: 93upx;
		}

		.forget {
			position: absolute;
			right: 0;
			top: 0;
			height: 100%;
			width: 150upx;
			z-index: 100;
		}

		.phone {
			position: absolute;
			left: 0;
			top: 0;
			height: 100%;
			width: 100upx;
			z-index: 100;
			font-weight: bold;
		}

		.code {
			background: #eee;
			border-radius: 10upx;
			font-size: 25upx;
			width: 150upx;
			padding: 0 10upx;
		}
	}

	.login_head {
		width: 100%;
	}

	.iconguanbi {
		position: fixed;
		top: 60upx;
		left: 30upx;
		font-size: 40upx;
		font-weight: bold;
		color: #332f0a;
		z-index: 100;
	}
</style>
