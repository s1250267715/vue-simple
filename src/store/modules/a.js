/*
 * 处理一些公共的操作
 */

import ft from "@/api"

//const defaultToastOption = {
//	shown: false,
//	time: 2000,
//	type: 'text',
//	width: 'auto',
//	position: 'top',
//	isShowMask: false,
//	text: '提示信息'
//}
export default {
	namespaced: true,
	state: {
//		toast: {
//			...defaultToastOption
//		},
//		loading: {
//			show: false,
//			test: '加载中...'
//		},
		mockDate:[],
	},
	mutations: {//同步
		showToast(state, payload) {
			state.toast = Object.assign({}, defaultToastOption, {
				shown: true,
				...payload
			})
		}
	},
	actions: {//异步
		test({state},payload){
			console.log(payload,"payload")
			ft('/test',{id:1,name:'shl'},{needCode:true}).then(res=>{
				console.log(res,"res")
				state.mockDate = res || []
			})
		}
	}
}