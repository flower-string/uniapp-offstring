<template>
	<view class="">
		<view class="top">
			<view class="cover">
				<img :src="info.cover" alt="">
			</view>
			<view class="box">
				<view class="name">
					{{ info.name }}
				</view>
				<view class="author">
					{{ info.author }}
				</view>
			</view>
		
			<view class="play">
				播放
			</view>
		</view>
		<view class="content">
		
		</view>
		
		<view class="">
			<view class="love" @click="setLove">
				<i :class="['iconfont', loved ? 'icon-xiai' : 'icon-aixin']"></i>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				info: '',
				loved: true
			}
		},
		methods: {
			upLoadMusic() {
				//选择音频文件
				uni.chooseFile({
					count: 1, //选取的文件个数限制
					extension: [".mp3", ".ogg"], //可定义允许哪些后缀的文件可被选择
					success: function(res) {
						let tempFilePaths = res.tempFilePaths;
						uni.showLoading({
							title: "上传中...",
						});
						uni.uploadFile({
							name: "files[]", //文件上传的name值
							url: 'http://api.xxxx.com/upload', //接口地址
							header: {}, //头信息
							formData: {}, //上传额外携带的参数
							filePath: tempFilePaths[0], //临时路径
							fileType: "audio", //文件类型
							success: (uploadFileRes) => {
								uni.hideLoading();
								const ret = JSON.parse(uploadFileRes.data);
								console.log(ret);
							},
						});
					},
				});
			},
			setLove() {
				this.loved = !this.loved;
			}
		},
		onLoad(option) {
			const data = JSON.parse(decodeURIComponent(option.item));
			this.info = data;
		}
	}
</script>

<style>
	.top {
		padding: 20rpx;
		height: 10vh;
		display: flex;
		align-items: center;
		background-color: white;
		margin: 30rpx;
		border-radius: 20rpx;
	}

	.cover {
		aspect-ratio: 1;
		height: 100%;
		overflow: hidden;
		border-radius: 50%;
	}

	image {
		width: 100%;
		height: 100%;
	}

	.box {
		margin-left: 40rpx;
		flex: 1;
	}

	.name {
		font-size: 40rpx;
	}

	.author {
		font-size: 30rpx;
		color: #a6a6a6;
	}

	.play {
		margin-right: 30rpx;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		border: 1px solid #25d3de;
		color: #25d3de;
		text-align: center;
		line-height: 100rpx;
	}

	.content {
		margin: 30rpx;
		height: 80vh;
		overflow-y: scroll;
		border: 1px solid white;
	}

	.love {
		position: fixed;
		width: 100rpx;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		right: 50rpx;
		bottom: 50rpx;
		border-radius: 50%;
		background-color: white;
		color: #25d3de;
	}
</style>