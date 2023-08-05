<template>
	<view class="container">
		<view class="image">
			<image src="../../static/tmp/星河万里.jpg" mode=""></image>
		</view>
		
		<view class="ping">
			<view class="info">
				<view class="avatar">
					<image src="../../static/logo.png" mode=""></image>
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
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
		margin-top: 100rpx;
		padding: 50rpx;
	}
	
	.avatar {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		overflow: hidden;
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
		margin: 50rpx 10rpx;
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
</style>
