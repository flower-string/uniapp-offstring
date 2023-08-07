import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
		nickName: '定风波',
		desc: '',
		birthday: '2022-1-1',
		sex: 'boy',
		avatar: '/static/logo.png',
		tags: ['稀里糊兔', '00后', '天平座', '300天'],
		avatarFarme: '/static/avatar/purple.png',
		homeBg: '/static/bg.jpg',
		ip: '未知'
	}),
  actions: {
    
  },
})