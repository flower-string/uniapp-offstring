<template>
	<view class="avatar" :style="{'--size': size}">
		<image class="ava" :src="avatarImage" mode=""></image>
		<image class="avaborder" :src="borderImage" mode=""></image>
	</view>
</template>

<script>
	export default {
		name: "Avatar",
		props: {
			borderImage: String,
			avatarImage: String,
			size: String
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.avatar {
		--size: 0;
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
		position: relative;
	}
	
	.avatar .ava {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	
	.avatar .avaborder { 
		position: absolute;
		width: 120%;
		height: 120%;
		left: -10%;
		top: -10%;
		z-index: 1;
	}
</style>