<template>
	<view class="">
		<view class="box">
			<view class="bg">
				<image src="../../static/bg.jpg" mode="aspectFill"></image>
			</view>
			<view class="user">
				<Avatar size="100rpx" 
								:avatarImage="info.avatar"
								borderImage="/static/avatar/purple.png"
								class="avatarbox">
				</Avatar>
				<view class="nickname">
					{{ info.nickName }}
				</view>
				<view class="ip">
					ip属地：{{ info.ip }}
				</view>
				<view class="tags">
					<view class="tag" v-for="item in info.tags">
						{{ item }}
					</view>
				</view>
				<view class="desc">
					{{ info.desc ? info.desc : '你还没有编写过个人简介' }}
				</view>
			</view>
		</view>
		
		<view class="topa">
			<view class="dress pa" @click="toPage('dress')">
				<i class="iconfont icon-qunzi"></i>
				装扮空间
			</view>
			<view class="setting pa" @click="toPage('profile')">
				<i class="iconfont icon-bianji"></i>
				编辑资料
			</view>
		</view>
		
		<view class="tongji">
			<view class="tongji-item">
				<view class="title">
					收到比心
				</view>
				<view class="num">
					{{ info.biixn }}
				</view>
			</view>
			
			<view class="tongji-item">
				<view class="title">
					社区发言
				</view>
				<view class="num">
					{{ info.tiezi }}
				</view>
			</view>
			
			<view class="tongji-item">
				<view class="title">
					乐谱创作
				</view>
				<view class="num">
					{{ info.yuepu }}
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	import Avatar from '/components/Avatar.vue'
	
	import { useUserStore } from '@/store/user.js';
	import { storeToRefs } from 'pinia';
	
	const userStore = useUserStore();
	const { avatar, nickName, ip, tags, desc, avatarFarme } = storeToRefs(userStore);
	export default {
		data() {
			return {
				info: {
					avatar,
					avatarFarme,
					nickName,
					ip,
					desc,
					tags,
					biixn: 0,
					tiezi: 0,
					yuepu: 0,
				}
			}
		},
		components: {
			Avatar,
		},
		methods: {
			wxLogin() {
				let that = this;
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						// 获取用户信息
						uni.getUserProfile({
							desc: '用于显示用户头像和姓名',
							success: function(infoRes) {
								console.log('用户昵称为：' + infoRes);
								that.info.nickName = infoRes.userInfo.nickName;
								that.info.avatarUrl = infoRes.userInfo.avatarUrl;
							}, 
							fail() {
								console.log("失败");
							}
						});
					},
				});

			},
			toPage(url) {
				console.log(url);
				uni.navigateTo({
					url: `/pages/${url}/${url}`
				})
			}
		},

		onLoad() {
			this.wxLogin();
		}
	}
</script>

<style scoped>
	.user {
		width: 90%;
		height: 300rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		z-index: 1;
	}
	
	.box {
		position: relative;
		width: 100vw;
		margin-top: 0;
		display: inline-block;
	}
	
	.avatarbox {
		margin-top: -50rpx;
	}
	
	.bg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100vw;
		height: 400rpx;
		overflow: hidden;
	}
	
	.bg image {
		width: 100%;
	}
	
	.nickname {
		color: #000000;
		font-size: 24rpx;
		margin-top: 10rpx;
	}
	
	.ip {
		color: #818181;
		font-size: 24rpx;
		margin-top: 10rpx;
	}
	
	.desc {
		color: #7e7e7e;
		font-size: 24rpx;
		margin-top: 20rpx;
	}
	
	.tags {
		display: flex;
	}
	
	.tag {
		padding: 5rpx;
		border: 1px solid #34cbd6;
		margin: 10rpx;
		width: 100rpx;
		font-size: 24rpx;
		color: #34cbd6;
		text-align: center;
		border-radius: 10rpx;
	}
	
	.topa {
		display: flex;
		margin: 40rpx;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}
	
	.pa {
		flex: 1;
		/* margin: 30rpx; */
		background-color: #fff;
		padding: 30rpx;
		border-radius: 10rpx;
		color: #838383;
		text-align: center;
		-webkit-box-shadow: 1px 6px 21px 0px rgba(241,241,241,1);
		-moz-box-shadow: 1px 6px 21px 0px rgba(241,241,241,1);
		box-shadow: 1px 6px 21px 0px rgba(241,241,241,1);
	}
	
	.pa:nth-child(1) {
		margin-right: 30rpx;
	}
	
	.tongji {
		display: flex;
		justify-content: space-between;
		margin: 1.25em;
		margin-top: 10rpx;
	}
	.tongji-item {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 20rpx;
		background-color: white;
		height: 10vh;
		justify-content: space-evenly;
		align-items: flex-start;
		margin: 10rpx;
		border-radius: 10rpx;
	}
	
	.title {
		color: #acacac;
		font-size: 20rpx;
	}
	
	.num {
		font-size: 40rpx;
	}
</style>