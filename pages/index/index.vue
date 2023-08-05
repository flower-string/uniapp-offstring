<template>
	<view class="content">
		<view class="ul">
			<view class="li"
						v-for='(item, index) in list'
						:style="{'--x': index * 80 + 15 + 'vw'}"
						@click="toDetail(item)"
						>
				<view class="cover">
					<image :src="item.cover" mode=""></image>
				</view>
				<view class="name">
					{{ item.name }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{ name: '宿命', cover: '/static/tmp/宿命.jpg', author: '有机'},
					{ name: '星河万里', cover: '/static/tmp/星河万里.jpg', author: '君瑞'},
					{ name: '吹灭小山河', cover: '/static/tmp/吹灭小山河.jpg', author: '君'},
					{ name: '给你呀', cover: '/static/tmp/给你.jpg', author: 'in'},
					{ name: '大喜', cover: '/static/tmp/大喜.jpg', author: '鸢尾'}
				]
			}
		},
		onLoad() {

		},
		methods: {
			toDetail(data) {
				uni.navigateTo({
					url: '/pages/trackDetail/trackDetail?item=' + encodeURIComponent(JSON.stringify(data)),
				})
			}
		}
	}
</script>

<style>
	.content {
		width: 100vw;
		overflow: hidden;
		background-color: #f8f8f8;
	}

	.ul {
		width: 100vw;
		height: 100vh;
		position: relative;
		scroll-snap-type: x mandatory;
		overflow-x: scroll;
	}

	.li {
		--x: 0;
		border-radius: 30px;
		scroll-snap-align: center;
		position: absolute;
		left: var(--x);
		top: 20vh;
		width: 70vw;
		height: 60vh;
		background-color: white;
		list-style: none;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		margin-right: 15vw;
		box-shadow: 0px 22px 26px 4px rgba(0,0,0,0.1);
	}
	
	.cover {
		width: 80%;
		border-radius: 50%;
		overflow: hidden;
		aspect-ratio: 1;
		box-shadow: 0px 14px 26px 0px rgba(0,0,0,0.1);
	}
	
	image {
		object-fit: fill;
		width: 100%;
		height: 100%;
	}
	
	.name {
		color:  #a6a6a6;
	}
</style>