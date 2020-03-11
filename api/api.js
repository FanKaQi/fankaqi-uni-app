export const api = {
	//注册
	registry(data callback){
		post('/user/registry',data,callback)
	},
	//登录
	login(){
		post('/user/login', userInfo, callback, MESSAGE.LOGIN)
	}
}