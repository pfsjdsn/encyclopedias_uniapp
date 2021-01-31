<template>
	<view class="body">
		<view class="user_set_user_info_list u_f_ac u_f_jsb">
			<view>头像</view>
			<view class="u_f_ac" @tap="changeImg">
				<image :src="userPic" 
				mode="aspectFill" lazy-load></image>
				<view class="iconfont iconziyuan"></view>
			</view>
		</view>
		<view class="user_set_user_info_list u_f_ac u_f_jsb">
			<view>昵称</view>
			<view class="u_f_ac">
				<input type="text" v-model="userName" />
				<view class="iconfont iconziyuan"></view>
			</view>
		</view>
		<view class="user_set_user_info_list u_f_ac u_f_jsb">
			<view>性别</view>
			<view class="u_f_ac" @tap="changeOne('sex')">
				<view>{{sex}}</view>
				<view class="iconfont iconziyuan"></view>
			</view>
		</view>
		<view class="user_set_user_info_list u_f_ac u_f_jsb">
			<view>生日</view>
			   <picker mode="date" :value="birthday" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="u_f_ac">
					<view>{{birthday}}</view>
					<view class="iconfont iconziyuan"></view>
				</view>
			</picker>
		</view>
		<view class="user_set_user_info_list u_f_ac u_f_jsb"  >
			<view>情感</view>
			<view class="u_f_ac" @tap="changeOne('emotion')">
				<view>{{emotion}}</view>
				<view class="iconfont iconziyuan"></view>
			</view>
		</view>
		<view class="user_set_user_info_list u_f_ac u_f_jsb">
			<view>职业</view>
			<view class="u_f_ac" @tap="changeOne('job')">
				<view>{{job}}</view>
				<view class="iconfont iconziyuan"></view>
			</view>
		</view>
		<view class="user_set_user_info_list u_f_ac u_f_jsb">
			<view>家乡</view>
			<view class="u_f_ac" @tap="showMulLinkageThreePicker">
				<view>{{pickerText}}</view>
				<view class="iconfont iconziyuan"></view>
			</view>
		</view>
		<button class="user_set_btn" 
		type="primary" @tap="submit" >完成</button>
		
		<mpvueCityPicker themeColor="#007aff" ref="mpvueCityPicker" 
		:pickerValueDefault="pickerValueDefault" 
		@onConfirm="onConfirm" ></mpvueCityPicker>
	</view>
</template>

<script>
	import mpvueCityPicker from "../../components/mpvue-citypicker/mpvueCityPicker.vue";
	let sex = ['不限', '男', '女'];
	let emotion = ['秘密', '未婚', '已婚'];
	let job = ['秘密', 'IT', '老师'];
	export default {
		components:{
			mpvueCityPicker 
		},
		data() {
			return {
				userName: '1111',
				sex:'不限',
				emotion: '未婚',
				job: 'IT',
				birthday: '1987-02-07',
				userPic: '../../static/demo/userpic/11.jpg',
				pickerValueDefault: [0, 0 ,1],
				pickerText: '广东省-深圳市-南山区',
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		onBackPress() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel();
				return true
			}
		},
		onUnload() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel();
			}
		},
		methods: {
			// 三级联动
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
				this.pickerText = e.label
			},
			// 修改生日
			bindDateChange(e) {
				this.birthday = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			changeOne(val) {
				let arr = []
				switch (val){
					case 'sex':
					arr = sex
						break;
					case 'emotion':
					arr = emotion
						break;
					case 'job':
					arr = job
						break;
				}
				uni.showActionSheet({
				    itemList: arr,
				    success:(res) => {
						switch (val){
							case 'sex':
							this.sex = arr[res.tapIndex]
								break;
							case 'emotion':
							this.emotion = arr[res.tapIndex]
								break;
							case 'job':
							this.job = arr[res.tapIndex]
								break;
						}
				    },
				});
			},
			changeImg() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					success:(res) => {
						this.userPic = res.tempFilePaths
					}
				})
			},
			submit() {
				
			},
		}
	}
</script>

<style lang="less">
	@import '@/common/form.css';	
	.user_set_user_info_list {
		padding: 20upx;
		border-bottom: 1upx solid #f4f4f4;
		>view:fisrt-child{
			font-size: 32upx;
			font-weight: bold;
			color: #9b9b9b;
		}
		>view:last-child{
			image {
				width: 80upx;
				height: 80upx;
				border-radius: 100%;
			}
			>input {
				text-align: right;
			}
			>view:last-of-type{
				margin: 0 0 0 20upx;
				color: #9b9b9b;
			}
		}
	}
</style>
