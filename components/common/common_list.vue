<template>
	<view class="common_list u_f animate__animated animate__fadeInLeft animate__fast">
		<view class="common_list_l">
			<image :src="item.userPic" mode="widthFix" lazy-load></image>
		</view>
		<view class="common_list_r">
			<view class="u_f_ac u_f_jsb">
				<view class="u_f_ac nick_name?">
				{{item.userName}} 
				<tagSexAge :sex="item.sex" :age="item.sex"></tagSexAge>
				</view>
				<view v-show="!isFollow" @tap="doFollow" class="iconfont iconjia follow">关注</view>
			</view>
			<view class="title">{{item.title}}</view>
			<view class="content_img u_f_ajc" :class="[item.share ? '.content_img_share' : '.content_img_noshare']"> 
				<!-- 图片 -->
				<image v-if="item.titlePic" :src="item.titlePic" 
				mode="widthFix" lazy-load></image>
				<!-- 视频 -->
				<template v-if="item.video">
					<view class="iconfont iconbofang"></view>
					<view class="common_list_play_info">{{item.video.lookNum}} 次播放 {{item.video.long}}</view>
				</template>
				<!-- 分享 -->
				<view class="common_list_share u_f_ac" v-if="item.share">
					<image :src="item.share.titlePic" mode="widthFix" lazy-load></image> 
					<view>{{item.share.title}}</view>
				</view>
			</view>
			<view class="u_f_ac u_f_jsb">
				<view>{{item.path}}</view>
				<view class="u_f_ac">
					<view class="iconfont iconzhuanfa">{{item.shareNum}}</view>
					<view class="iconfont iconpinglun">{{item.commentNum}}</view>
					<view class="iconfont icondianzan">{{item.goodNum}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from './tag_sex_age.vue';
	export default {
		components: {
			tagSexAge
		},
		props: {
			item: Object,
			index: Number
		},
		data() {
			return {
				isFollow: this.item.isFollow
			};
		},
		methods: {
			doFollow() {
				this.isFollow = true
				uni.showToast({
					title: '关注成功'
				})
			}
		}
	}
</script>

<style lang="less">
	.common_list {
		// border: 1upx solid red;
		padding: 5upx;
		.common_list_l {
			flex-shrink: 0; //收缩比率 0为不压缩
			image {
				width: 90upx;
				height: 90upx;
				border-radius: 100%;
			}
		}
		.common_list_r {
			border-bottom: 1upx solid #eee;
			padding: 0 0 10upx 0;
			flex: 1;
			margin: 0 0 0 5upx;
			.content_img_share {
				margin: 0 0 90upx 0;
			}
			.content_img_noshare {
				margin: 0 0 10upx 0;
			}
			.content_img {		
				.common_list_share {
					color: #000;
					background-color: #eee;
					width: 100%;
					padding: 10upx;
					margin: 10upx 0 20upx 0;
					border-radius: 10upx;
					image {
						width: 200upx;
						height: 150upx;
						margin: 0 10upx 0 0;
					}
				}
				position: relative;
				image {
					width: 100%;
					border-radius: 2%;
				}
				>view {
					position: absolute;
					color: #fff;
				}
				.iconbofang {
					font-size: 130upx;
				}
				.common_list_play_info {
					right: 10upx;
					bottom: 10upx;
					background-color: rgba(51, 51, 51, 0.73);
					border-radius: 20upx;
					padding: 0 20upx;
					font-size: 26upx;
				}
			}
			.nick_name {
				color: #999;
				font-size: 30upx;
			}
			
			.follow {
				background-color: #eee;
				padding: 0 10upx;
				font-size: 26upx;
			}
			.title {
				font-size: 32upx; 
				padding: 6upx 0;
			}
			>view:nth-child(4) {
				color: #aaa;
				.iconfont {
					margin: 0 0 0 10upx;
					padding: 0 0 0 5upx;
				}
			}
		}
		
	}
</style>
