<template>
	<view class="index_list animate__animated animate__fadeInLeft animate__fast">
		<view class="header_container u_f_ac u_f_jsb">
			<view class="u_f_ac header_user_info">
				<image :src="item.userPic" mode="widthFix" lazy-load></image>
				{{item.userName}}
			</view>
			<view class="u_f_ac iconfont iconjia header_user_follow" v-show="item.isFollow">关注</view>
		</view>
		<view class="title_container">
			{{item.title}}
		</view>
		<view class="image_container u_f_ajc">
			<!-- 图片 -->
			<image :src="item.title_pic" mode="widthFix" lazy-load></image>
			<!-- 视频 -->
			<block v-if="item.type == 'video'">
				<view class="iconfont iconbofang"></view>
				<view class="play_count">{{item.playNum}} 次播放 {{item.long}}</view>
			</block>
		</view>
		<view class="info_container u_f_ac u_f_jsb">
			<view class="u_f_ac info_left">
				<view class="iconfont iconxiaolian1" :class="{'active' : (item.infoNum.index == 1)}">{{item.infoNum.dingNum}}</view>
				<view class="iconfont icon_kulian" :class="{'active' : (item.infoNum.index == 2)}">{{item.infoNum.caiNum}}</view>
			</view>
			<view class="u_f_ac info_right">
				<view class="iconfont iconpinglun">{{item.commentNum}}</view>
				<view class="iconfont iconzhuanfa">{{item.shareNum}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		}
	}
</script>

<style lang="less" scoped>
	.index_list {
		padding: 20upx;
		border-bottom: 1upx solid #eee;
	}
	.header_container {
		.header_user_info {
			color: #999;
			image {
				width: 85upx;
				height: 85upx;
				border-radius: 100%;
				margin: 0 10upx 0 0;
			}
		}
		.header_user_follow{
			background-color: #f5f2f5;
			border-radius: 5upx;
			padding: 0 10upx;
		}
	}
	.title_container {
		padding: 15upx;
		font-size: 32upx;
	}
	.image_container {
		position: relative;
		padding: 15upx;
		color: #fff;
		image {
			width: 100%;
			border-radius: 20upx;
		}
		.iconbofang {
			position: absolute;
			font-size: 140upx;
		}
		.play_count {
			position: absolute;
			background: rgba(51, 51, 51, 0.72);
			bottom: 20upx;
			right: 20upx;
			border-radius: 40upx;
			font-size: 25upx;
			padding: 0 10upx;
		}
	}
	.info_container {
		padding: 15upx 0;
		color: #999;
		.info_left, .info_right {
			view {
				margin: 0 10upx;
			}
		}
		.info_left {
			.active {
				color: orange;
			}
		}
	}
</style>

