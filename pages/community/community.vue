<template>
	<view class="top">
		<view v-for="(item, index) in navs" 
				  :class="['item', index == current ? 'active' : '']"
					@click="setCurrent(index)">
			{{ item }}
		</view>
	</view>
	
	<view class="cards">
		<view class="card">
			<view class="iconfont icon-qiandao"></view>
			<view class="tt">
				日签墙
			</view>
		</view>
	</view>
	
	<view class="add" @click="createCommit">
		<text class="iconfont icon-jia"></text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				navs: ['精品', '悬赏', '树洞', '生活广场', '头像壁纸', '学习'],
			}
		},
		methods: {
			setCurrent(index) {
				this.current = index;
			},
			createCommit() {
				
			}
		}
	}
</script>

<style>
	.top {
		width: 100vw;
		overflow-x: scroll;
		display: flex;
		justify-content: center;
	}
	
	.top .item {
		height: 100%;
		margin: 10rpx 20rpx 0 20rpx;
		color: #bcbcbc;
	}
	
	.top .item.active {
		border-bottom: 3px solid #25d3de;
		color: black;
	}
	
	.add {
		position: fixed;
		z-index: 1;
		width: 100rpx;
		height: 100rpx;
		background-color: black;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		line-height: 100rpx;
		border-radius: 50%;
		font-weight: 900;
		font-size: 80rpx;
		bottom: 100rpx;
		left: 50%;
		transform: translateX(-50%);
	}
	
	.add text {
		color: white;
	}
	.card {
		width: 22vw;
		height: 15vw;
		margin: 5vw;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		border-radius: 10rpx;
		box-shadow: 0px 8px 15px -3px rgba(0,0,0,0.1);
	}
	
	.tt {
		font-size: 22rpx;
		color: #bcbcbc;
	}
	
	.iconfont {
		color: black;
		font-weight: 900;
		font-size: 40rpx;
	}
</style>
