<template>
	<view>
		<MooNav :navs="list"
						@change='setCurrent'
						:current="current"></MooNav>
	</view>
	
	<view class="lbody">
		<view v-show="current == 0" class="container1">
			<view class="box" v-for="item in 16">
				<view class="card">
					<Avatar size='100rpx'
					        avatarImage="/static/logo.png"
					        borderImage="/static/avatar/purple.png"></Avatar>
				</view>
				<view class="name">
					姓名
				</view>
				<view class="price">
					价格
				</view>
			</view>
		</view>
	
		<view v-show="current == 1" class="container2">
			<view class="box" v-for="item in 16">
				<view class="card">
					<image src="/static/bg.jpg" mode=""></image>
				</view>
				<view class="name">
					姓名
				</view>
				<view class="price">
					价格
				</view>
			</view>
		</view>
		
		<view v-show="current == 2" class="container3">
			<view class="box" v-for="item in 16">
				<view class="card">
					<image src="/static/bg.jpg" mode=""></image>
				</view>
				<view class="name">
					姓名
				</view>
				<view class="price">
					价格
				</view>
			</view>
			
		</view>
		
		<view v-show="current == 3" class="container4">
			<view class="box" v-for="item in 16">
				<view class="card">
					<image src="/static/bg.jpg" mode=""></image>
				</view>
				<view class="name">
					姓名
				</view>
				<view class="price">
					价格
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import MooNav from '/components/MooNav.vue';
	import Avatar from '/components/Avatar.vue';
	
	export default {
		data() {
			return {
				list: ['头像框', '卡片背景', '字体', '空间背景'],
				current: 0,
			}
		},
		components: {
			MooNav,
			Avatar
		},
		methods: {
			setCurrent(index) {
				this.current = index;
			}
		}
	}
</script>

<style scoped>
	.lbody {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		margin: auto;
	}
	
	.container1,
	.container2,
	.container3,
	.container4{
		width: 98vw;
		margin: auto;
		padding: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
	}
	
	.container1 .box {
		display: block;
		width: 28vw;
		height: 40vw;
		margin: 2vw;
	}
	
	.container1 .card {
		background-color: white;
		display: flex;
		width: 28vw;
		height: 28vw;
		justify-content: center;
		align-items: center;
		border-radius: 30rpx;
		box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
	}
	
	.price, 
	.name {
		text-indent: 10rpx;
	}
	
	.price {
		color: #25d3de;
		font-size: 20rpx;
	}
	
/* 	.container2 .box {
		width: 28vw;
		height: 30vh;
		margin: 2vw;
		border-radius: 25rpx;
	}
	
	.container2 .card {
		width: 100%;
		height: 25vh;
	}
	 */
	.container3 .box,
	.container4 .box,
	.container2 .box{
		width: 45vw;
		margin: 2vw;
		border-radius: 25rpx;
	}
	
	.card {
		width: 100%;
		height: 15vh;
		border-radius: 40rpx;
		overflow: hidden;
	}
	
	image {
		width: 100%;
		height: 100%;
	}
</style>
