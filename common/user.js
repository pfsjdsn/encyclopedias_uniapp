export default {
	// 用户token
	token: false,
	// 用户信息
	userInfo: false,
	// 权限验证跳转
	naviGate(options, type='navigateTo') {
		// 权限验证
		if(!this.token) {
			console.log('!token...')
			return uni.navigateTo({url: '/pages/login/login'})
		}
		// 跳转
		switch (type){
			case 'navigateTo':
				uni.navigateTo(options)
				break;
			case 'redirectTo':
				uni.redirectTo(options)
				break;
			case 'reLaunch':
				uni.reLaunch(options)
				break;
			case 'switchTab':
				uni.switchTab(options)
				break;			
		}
	}
}