<template>
	<view class="container">
		<view class="image">
			<image src="../../static/tmp/星河万里.jpg" mode=""></image>
		</view>
		
		<view :class="['btn', visad ? 'visad' : '']" @click="setVisad">
			{{ visad ? '今日已签到' : '立即签到' }}
		</view>
		
		<view class="ping">
			<view class="info">
				<view class="avatar">
					<Avatar size="80rpx"
					        avatar-image="/static/logo.png"
									border-image="/static/avatar/lightgirl.png"></Avatar>
				</view>
				
				<view class="zi">
					<view class="name">
						姓名
					</view>
					
					<view class="riqi">
						2023-8-5
					</view>
				</view>
			</view>
			
			<view class="content">
				<view class="left">
					“
				</view>
				<view class="article">
					你任岁月更替,拥抱星河万里
				</view>
				<view class="right">
					”
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Avatar from '../../components/Avatar.vue'
	
	export default {
		data() {
			return {
				visad: false
			}
		},
		components: {
			Avatar
		},
		methods: {
			setVisad() {
				if(this.visad) {
					return;
				}
				this.visad = true;
				console.log("签到成功");
			}
		}
	}
</script>

<style>
	.image {
		width: 90vw;
		overflow: hidden;
		border-radius: 20rpx;
		aspect-ratio: 4/3;
		margin: auto;
		margin-top: 100rpx;
	}
	
	image {
		width: 100%;
		height: 100%;
	}
	
	.ping {
		width: 90vw;
		margin: auto;
		margin-top: 50rpx;
		padding: 50rpx;
	}
	
	.info {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	
	.info view {
		margin: 10rpx;
	}
	
	.name {
		color: black;
	}
	
	.riqi {
		color: #a6a6a6;
	}
	
	.content {
		margin: 30rpx 10rpx;
	}
	
	.left, .right {
		font-size: 60rpx;
		color: #25d3de;
	}
	
	.right {
		text-align: right;
	}
	
	.article {
		text-indent: 2em;
		color: #4b4b4b;
	}
	
	.btn {
		width: 50vw;
		height: 5vh;
		text-align: center;
		margin: auto;
		line-height: 5vh;
		font-size: 2vh;
		margin-top: 3vh;
		background-color: white;
		border: 1px solid #25d3de;
		color: #25d3de;
		border-radius: 2.5vh;
	}
	
	.btn.visad {
		background-color: #a6a6a6;
		color: #4b4b4b;
		border: #4b4b4b;
	}
</style>
