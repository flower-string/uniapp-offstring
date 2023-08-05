<template>
	<view class="nav">
		<view v-for="(item, index) in navs" 
				  :class="['item', index == current ? 'active' : '']" 
					@click="setCurrent(index)">
			{{ item }}
		</view>
	</view>
</template>

<script>
	export default {
		name: "MooNav",
		props: {
			navs: {
				type: Array,
				default: [],
			},
			color: {
				type: String,
				default: ''
			},
			current: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			setCurrent(index) {
				this.$emit('change', index);
			}
		}
	}
</script>

<style scoped>
	.nav {
		width: 100vw;
		overflow-x: scroll;
		white-space: nowrap;
	}

	.nav .item {
		height: 100%;
		margin: 10rpx 20rpx 0 20rpx;
		color: #bcbcbc;
		display: inline-block;
		word-wrap: none;
	}

	.nav .item.active {
		border-bottom: 3px solid #25d3de;
		color: black;
	}
</style>