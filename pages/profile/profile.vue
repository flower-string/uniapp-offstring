<template>
	<view>
		<view class="top">
			<view class="choose">
				<uni-file-picker limit="1" :del-icon="false" :imageStyles="info.avatar"
												 file-mediatype="image">选择</uni-file-picker>
			</view>
			<view class="">
				点击更换头像
			</view>
		</view>

		<view class="infos">
			<view class="list-item" @click="openNickName">
				<view class="">
					昵称
				</view>
				<view class="right">
					<view class="content">
						{{ info.nickName }}
					</view>
					<view class="iconfont">
						1
					</view>
				</view>

			</view>

			<view class="line"></view>

			<view class="list-item" @click="openDesc">
				<view class="iconfont">
					简介
				</view>

				<view class="right">
					<view class="content">
						{{ info.desc }}
					</view>

					<view class="iconfont">
						1
					</view>
				</view>

			</view>

			<view class="line"></view>

			<view class="list-item" @click="openSex()">
				<view class="">
					性别
				</view>

				<view class="right">
					<view class="content">
						{{ info.sex }}
					</view>

					<view class="iconfont">
						1
					</view>
				</view>

			</view>

			<view class="line"></view>

			<uni-datetime-picker v-model="info.birthday" type="date">
				<view class="list-item">
					<view class="">
						生日
					</view>

					<view class="right">
						<view class="content">
							{{ info.birthday }}
						</view>

						<view class="">
							1
						</view>
					</view>
				</view>
			</uni-datetime-picker>
		</view>

		<view class="pop">
			<!-- 普通弹窗 -->
			<uni-popup ref="sexpopup" background-color="#fff" type="bottom">
				<view class="popup-content">
					<button @click="setSex('boy')">男</button>
					<button @click="setSex('girl')">女</button>
				</view>
			</uni-popup>
		</view>

		<view>
			<!-- 输入框示例 -->
			<uni-popup ref="descInputDialog" type="dialog">
				<uni-popup-dialog ref="inputClose" 
													mode="input" 
													title="编辑你的个人简介" 
													value="" 
													placeholder="请输入个人简介"
					@confirm="setDesc"></uni-popup-dialog>
			</uni-popup>
		</view>

		<view>
			<!-- 输入框示例 -->
			<uni-popup ref="nickNameInputDialog" type="dialog">
				<uni-popup-dialog ref="inputClose" 
													mode="input" 
													title="修改昵称,每月只能修改一次" 
													value="" 
													placeholder="请输入昵称"
					@confirm="setNickName"></uni-popup-dialog>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: {
					nickName: '定风波',
					desc: '',
					sex: 'girl',
					birthday: '2022-1-1',
					avatar: '/static/logo.png'
				}
			}
		},
		methods: {
			// 获取上传状态
			select(e) {
				console.log('选择文件：', e)
			},
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},

			// 上传成功
			success(e) {
				console.log('上传成功')
			},

			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			},

			openSex() {
				this.$refs.sexpopup.open();
			},

			setSex(str) {
				this.info.sex = str;
				this.$refs.sexpopup.close();
			},

			openNickName() {
				this.$refs.nickNameInputDialog.open();
			},

			setNickName(value) {
				this.info.nickName = value;
			},

			openDesc() {
				this.$refs.descInputDialog.open();
			},

			setDesc(value) {
				this.info.desc = value;
			}
		}
	}
</script>

<style scoped>
	.top {
		width: 100%;
		height: 20vh;
		margin-bottom: 1vh;
		background-color: white;
		display: flex;
		justify-content: space-evenly;
		flex-direction: column;
		align-items: center;
		color: #25d3de;
	}

	.infos {
		width: 100%;
		background-color: white;
		display: inline-block;
		text-align: center;
	}

	.list-item {
		width: auto;
		margin: 50rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.right {
		display: flex;
		justify-content: center;
		color: #a6a6a6;
	}

	.content {
		margin-right: 1em;
	}

	.line {
		width: 85%;
		height: 1px;
		background-color: #a6a6a6;
		margin: auto;
	}
	
	.choose {
		background-color: #f8f8f8;
		border-radius: 50%;
		width: 100rpx;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
	}
</style>