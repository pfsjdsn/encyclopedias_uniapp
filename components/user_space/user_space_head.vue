<template>
	<view class="user_space_head u_f_ajc">
		<image :src="newBgImg  ? newBgImg :  getBgImg"
		mode="widthFix" lazy-load @tap.stop="changeBgImg"></image>
		<view class="user_space_head_info u_f_ajc u_f_dc">
			<image :src="userInfo.userPic"
			mode="widthFix" lazy-load></image>
			<view class="user_space_margin u_f_ac">
				{{userInfo.userName}}
				<tagSexAge :age="userInfo.age" :sex="userInfo.sex"></tagSexAge>
			</view>
			<view class="iconfont user_space_head_btn user_space_margin " :class="[isFollow ? 'active' : 'iconjia']" @tap.stop="doFollow">{{isFollow ? '已关注' : '关注'}}</view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from '../common/tag_sex_age.vue';
	export default {
		components:{
			tagSexAge
		},
		props: {
			userInfo: Object,
			
		},
		data() {
			return {
				isFollow: this.userInfo.isFollow,
				newBgImg:this.userInfo.newBgImg,
				
			};
		},
		computed: {
			getBgImg(){
				return "../../static/bgimg/" + this.userInfo.bgImg + ".jpg"
			},
		},
		methods:{
			// 切换背景
			changeBgImg(){
				console.log('切换背景')
				let no = parseInt(this.userInfo.bgImg)
				// if( no < 4 ) {
				// 	no++
				// } else {
				// 	no = 1
				// this.userInfo.bgImg = 1
				// }
				this.userInfo.bgImg = no < 4 ? ++no : 1,
				this.newBgImg = "../../static/bgimg/" + this.userInfo.bgImg + ".jpg"
			},
			doFollow() {
				this.isFollow = !this.isFollow
			},
		},
	}
</script>

<style lang="less" scoped>
	.user_space_head {
		position: relative;
		height: 500upx;
		overflow: hidden;
		>image {
			width: 100%;
		}
		.user_space_head_info {
			position: absolute;
			top: 150upx;
			>image {
				width: 150upx;
				height: 150upx!important;
				border-radius: 100%;
			}
			>view:first-of-type {
				color: #fff;
				font-size: 35upx;
				font-weight: bold;
				text-shadow: 2upx 2upx 10upx #333;
			}
			.user_space_head_btn {
				background: #ffe933;
				color: #333;
				border: 1upx solid #ffe933;
				padding: 5upx 15upx;
				border-radius: 10upx;
				font-size: 28upx;
			}
			.active {
				background: none;
				color: #fff;
				border: 1upx solid #fff;
			}
		}
	}
</style>
