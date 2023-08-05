<template>
	<view>
		谱面预览和编辑功能正在全力开发中，请先使用sky studio进行过度，我们会尽快完成研发并上线使用
	</view>
	<button @click="copy">点击复制sky studio下载地址</button>
</template>

<script>
	export default {
		data() {
			return {
				skystudio: 'https://www.jianguoyun.com/p/DS8LIOcQl5iTCxiqrpMFIAA'
			}
		},
		methods: {
			copy() {
				uni.setClipboardData({
					data: this.skystudio,
					showToast: true
				})
			}
		}
	}
</script>

<style>

</style>
