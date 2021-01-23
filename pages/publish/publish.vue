<template>
	<view>
		<uni-nav-bar :statusBar="false" rightText="发布" @clickLeft="back" @clickRight="submit">
			<view class="u_f_ajc" @tap="changeLook">
				{{privacyTpye}}
				<view class="iconfont iconxiangxia"></view>
			</view>
		</uni-nav-bar>
		<!-- 多行文本 -->
		<view class="uni-textarea">
			<textarea v-model="text" placeholder="说一句话吧~" />
			</view>
		<!-- 上传多图 -->
		<uploadImg @upLoad="upLoad"></uploadImg>
		<!-- 弹出公告 -->
		<uniPopup :show="shopPopup" position="middle" mode="fixed" @hidePopup="hidePopup">
			<view class="notice">
				<view class="u_f_ajc">
					<image src="../../static/common/addinput.png" mode="widthFix"></image>
				</view>
				<view>1.涉及黄色，政治，广告及骚扰信息</view>
				<view>2.涉及人身攻击</view>
				<view>3.留联系方式，透露他人隐私</view>
				<view>一经核实将被封禁，情节严重者永久封禁</view>
				<button type="default" @tap="hidePopup">朕知道了</button>
			</view>
		</uniPopup>
	</view>	
</template>

<script>
	import uniNavbar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import uploadImg from '@/components/common/upload-img.vue';
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	let changeLook = ['所有人可见', '仅自己可见']
	export default {
		components: {
			uniNavbar,
			uploadImg,
			uniPopup
		},
		data() {
			return {
				showDraftTips: false, //草稿提示弹出框
				shopPopup: true,
				privacyTpye: '所有人可见',
				text: '',
				imageList: [],
			}
		},
		// 监听页面返回
		onBackPress() {
			// 如果有值
			if (!this.text && this.imageList.length < 1) {return;}
			if (!this.showDraftTips) {
				this.doSaveDraft()
			}
			return true //不会返回到上一个页面
		},
		methods: {
			// 保存为草稿
			doSaveDraft() {
				uni.showModal({
				    content: '是否要保存为草稿？',
					cancelText: '不保存',
					confirmText: '保存',
				    success:  (res) =>  {
				        if (res.confirm) {
				            console.log('保存');
				        } else {
							console.log('不保存');
						}
						this.showDraftTips = true
						uni.navigateBack({
							delta: 1
						})
				    }
				});
			},
			// 返回
			back() {
				uni.navigateBack({
					delta:1
				})
			},
			// 发布
			submit() {
				console.log('发布')
			},
			// 隐私
			changeLook() {
				uni.showActionSheet({
				    itemList: changeLook,
				    success:  (res) => {
						this.privacyTpye = changeLook[res.tapIndex]
				    },
				});
			},
			upLoad(arr) {
				this.imageList = arr
			},
			hidePopup() {
				this.shopPopup = false
			}
			
		}
	}
</script>

<style lang="less">
	.uni-textarea {
		border: 1upx solid #eee;
	}
	.cell-pd {
		padding: 22rpx 30rpx;
	}
	.uni-uploader__file {
		position: relative;
	}
	.list-pd {
		margin-top: 50rpx;
	}
	.iconshanchu1 {
		position: absolute;
		top: 0;
		right: 0;
		background-color: #333;
		color: #fff;
		padding: 2upx 10upx;
		border-radius: 10upx;
	}
	.notice {
		width: 520upx;
		image {
			width: 85%;
			margin: 0 0 20upx 0;
		}
		button {
			margin: 20upx 0 0  0;
			background-color: #ffe934;
			color: #171606;
		}
	}
</style>
