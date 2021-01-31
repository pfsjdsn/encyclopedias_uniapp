<template>
	<view class="body">
		<input type="text" v-model="oldPwd"
		class="uni-input common_input"  password
		placeholder="输入旧密码"/>
		<input type="text"  v-model="newPwd"
		class="uni-input common_input"  password
		placeholder="输入新密码"/>
		<input type="text" v-model="reNewPwd"
		class="uni-input common_input"  password
		placeholder="输入确认密码"/>
		<button class="user_set_btn" :class="{'user_set_btn_disable': disabled}" 
		type="primary" @tap="submit" :disabled="disabled" :loading="loading">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldPwd: '',
				newPwd: '',
				reNewPwd: '',
				loading: false,
				disabled: true,
			}
		},
		watch: {
			oldPwd(val) {
				this.change()
			},
			newPwd(val) {
				this.change()
			},	
			reNewPwd(val) {
				this.change()
			},
		},
		methods: {
			// 监听输入框
			change() {
				if(this.oldPwd && this.newPwd && this.reNewPwd) {
					this.disabled = false
					return
				}
				this.disabled = true
			},
			// 验证
			check() {
				if(!this.oldPwd) {
					uni.showToast({
						title: '旧密码不能为空',
						icon:'none'
					})
					return false;
				}
				if(!this.newPwd) {
					uni.showToast({
						title: '新密码不能为空',
						icon:'none'
					})
					return false;
				}
				if(!this.reNewPwd) {
					uni.showToast({
						title: '确认密码不能为空',
						icon:'none'
					})
					return false;
				}
				if(this.newPwd !== this.reNewPwd) {
					uni.showToast({
						title: '确认密码和新密码不一致',
						icon:'none'
					})
					return false;
				}
				return true;
			},
			// 提交
			submit() {
				this.loading = true
				this.disabled = true
				if(!this.check()) {
					this.loading = false
					this.disabled = false
					return;
				}
				uni.showToast({
					title: '验证通过',
					mask:false
				})
				this.loading = false
				this.disabled = false
			}
		}
	}
</script>

<style lang="less">
	@import '@/common/form.css';

</style>
