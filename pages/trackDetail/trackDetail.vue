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
			<view class="note" v-for="item in songNotes">
				{{ item.key }}
			</view>
		</view>
		
		<view class="">
			<view class="love" @click="setLove">
				<i :class="['iconfont', loved ? 'icon-xiai' : 'icon-aixin']"></i>
			</view>
		</view>
	</view>
	
</template>

<script setup>
	import { track } from '/static/tmp/old_memory.js'
	import { ref } from 'vue';
	import { onLoad } from '@dcloudio/uni-app'
	
	const songNotes = ref(track.songNotes);
	const info = ref({cover: '', name: '', author: ''});
	
	const loved = ref(false);
	const setLove = () => {
	  loved.value = !loved.value;
	}
	
	onLoad((option) => {
	  const data = JSON.parse(decodeURIComponent(option.item));
	  info.value = data;
	  
	  songNotes.value.map(item => {
	    item.time;
	    item.key = item.key.match(/\d{1,2}$/) ? parseInt(item.key.match(/\d{1,2}$/)[0]) + 1 : '';
	  });
	})
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
		display: flex;
		flex-wrap: wrap;
	}
	
	.note {
		--left: 20rpx;
		margin: var(--left);
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