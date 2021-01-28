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
	 @import '@/common/list.less';
</style>
