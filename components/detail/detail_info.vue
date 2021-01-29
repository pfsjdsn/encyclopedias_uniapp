<template>
	<view class="common_list u_f animate__animated animate__fadeInLeft animate__fast">
		<view class="common_list_l">
			<image :src="item.userPic" mode="widthFix" lazy-load></image>
		</view>
		<view class="common_list_r">
			<view>
				<view class="u_f_ac u_f_jsb">
					<view class="u_f_ac nick_name?">
					{{item.userName}} 
					<tagSexAge :sex="item.sex" :age="item.age"></tagSexAge>
					</view>
					<view v-show="!isFollow" @tap="doFollow" class="iconfont iconjia follow">关注</view>
				</view>
				<view class="common_list_r_time">26天前</view>
			</view>
			<view class="title">{{item.title}}</view>
			<view class="content_img u_f_ajc u_f_dc" :class="[item.share ? '.content_img_share' : '.content_img_noshare']"> 
				<!-- 图片 -->
				<block v-for="(pic, index) in item.morePic" :key="index">
					<image :src="pic"
					mode="widthFix" 
					style="margin: 0 0 15upx 0;"
					lazy-load @tap="imgDetail(index)"></image>
				</block>
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
	import tagSexAge from '../common/tag_sex_age.vue';
	export default {
		components: {
			tagSexAge
		},
		props: {
			item: Object,
		},
		data() {
			return {
				isFollow: this.item.isFollow
			};
		},
		methods: {
			// 图片预览
			imgDetail(index) {
				uni.previewImage({
					current: index,
					urls: this.item.morePic
				})
			},
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
	 @import '@/common/list.less';
	 .common_list {
		 border-bottom: 1upx solid #eee;
		 .common_list_r {
		 	 border-bottom: 0;
		 }
		 .common_list_r_time {
			 padding: 15upx 0;
			 color: #ccc;
			 font-size: 25upx;
		 }
			 
	 }
</style>
