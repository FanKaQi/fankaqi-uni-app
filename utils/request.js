/**
 *
 * Author : Administrator
 * Date   : 2019-5-31 11:54
 * Last Modified : Administrator
 *
 */
import {config, MESSAGE} from "../config/config";
import store from '@/store/index'
import {getNetState, getStorage, isFn, reLaunch, showToast, validateMe, validCharacter} from "./utils";
/**
 * POST请求
 * @param url {string}
 * @param data {object|string|array}
 * @param success {function}
 * @param loading {boolean} 是否开启loading
 * @param faill {function}
 */

//'application/x-www-form-urlencoded'
// 请求报错统一处理
export async function post(url,data,success,loading,faill) {
  const net = await getNetState();
  // console.log(net);
  if (net.networkType === 'none') {
    typeof faill === 'function' && faill({msg:MESSAGE.REQUEST_FAIL,data:null});
    showToast('当前无网络，请先连接网络');
    return ;
  }
  if (validCharacter(data)){
    // typeof success === 'function' && success({status:'error',msg:MESSAGE.REQUEST_FAIL,data:null});
    typeof faill === 'function' && faill({status:'error',msg:MESSAGE.REQUEST_FAIL,data:null});
    return;
  }

  if (loading) {
    uni.showLoading({
      title: typeof loading ==='string'?loading:'处理中...'
    });
  }
  let auth = getToken(url);
  uni.request({
    url: `${config.baseUrl}${url}`,
    header: {
      'content-type': 'application/json',
      Authorization:auth
    },
    data:data,
    method: 'POST',
    success(res) {
      uni.hideLoading();
      if (res.statusCode === 200 && res.data.status==='ok') {
        let data =  res.data.data;
        if(data && data.token){
          store.commit('setToken', data.token);
        }
        typeof success ==="function"&& success(res.data);
      } else {
        onError(res.data);
        typeof faill === 'function' &&faill(res.data);
      }
    },
    fail(err) {
      uni.hideLoading();
      onError({msg:MESSAGE.REQUEST_FAIL});
      typeof faill === 'function' && faill({msg:MESSAGE.REQUEST_FAIL,data:null});
      // console.log(err.errMsg);
    }
  })
}

/**
 * GET请求
 * @param url {string}
 * @param params {object}
 * @param success {function}
 *
 */
export function get(url, params, success) {
  let auth = getToken(url);
  uni.request({
    url: `${config.baseUrl}${url}`,
    data: params,
    header: {
      Authorization:auth
    },
    method: 'GET',
    success(res) {
      if (res.statusCode === 200 && res.data.status==='ok') {
        isFn(success) && success(res.data);
      } else {
        onError(res.data)
      }
    },
    fail(err) {
      onError({msg:MESSAGE.REQUEST_FAIL})
    }
  })
}

export function uploadImage(data,callback) {
  uni.showLoading({title:MESSAGE.UPLOADING});
  let auth = getToken('/userController/updateUserImage');
  uni.uploadFile({
    url:`${config.baseUrl}/userController/updateUserImage`,
    filePath:data.path,
    name:'file',
    header:{
      'content-type': 'application/json',
      Authorization:auth
    },
    formData:{
      userId:data.userId,
      fileSuffix:'image/png'
    },
    success(res){
      console.log(res);
      console.log('上传成功');
      if (res.statusCode === 200 && JSON.parse(res.data).status==='ok') {
        // success(res.data)
        isFn(callback) && callback(nullToString(res.data));
      } else {
        onError(res.data)
      }
      uni.hideLoading()
    },
    fail(err) {
      // isFn(callback) && callback(err);
      uni.hideLoading();
      showToast('上传失败，请稍后重试');
      onError({message:'请求失败，稍后再试'});
    }
  })
}

/**
 * 返回null值全部转为空字符串，防止页面页面显示null
 * @param data {object}
 * @returns {*}
 */
function nullToString(data) {
  for (let key in data){
    if (data.hasOwnProperty(key)){
      if (data[key] instanceof Array){
        data[key].forEach(item=>{
          nullToString(item);
        })
      }else if (data[key] instanceof Object){
        nullToString(data[key] );
      }else if (data[key] === null || data[key] === 'null'){
        data[key] = '';
      }
    }
  }
  // console.log(data);
  return data
}

/**
 * 删除所有空值
 * @param data
 * @returns {*}
 */
function delEmptyKey(data) {
  if (data instanceof Object){
    for (let key in data){
      if (data[key] === ''){
        delete data[key]
      }

    }
  }

  return data
}

/**
 * 出参空字符串转null
 * @param data
 * @returns {*}
 */
function emptyValueToNull(data) {

    for (let key in data){
      if (data.hasOwnProperty(key)){
        if (data[key] instanceof Array){
          data[key].forEach(item=>{
            emptyValueToNull(item);
          })
        }else if (data[key] instanceof Object){
          emptyValueToNull(data[key] );
        }else if (data[key] === ''){
          data[key] = null;
        }
      }
    }



  return data
}

export function multiImageUpload(data,callback) {
  return new Promise(resolve => {
    console.log(data);
    let auth = getToken(data.url);
    uni.showLoading({title:MESSAGE.UPLOADING})
    uni.uploadFile({
      url: `${config.baseUrl}${data.url}/${data.id}`,
      files: data.fileList,
      fileType: 'image',
      header: {"Content-Type": "multipart/form-data",Authorization:auth},
      success: (res) => {
        // console.log(uploadFileRes);
        if (res.statusCode === 200 && JSON.parse(res.data).status==='ok') {
          // success(res.data)
          isFn(callback) && callback(JSON.parse(res.data));
        } else {
          onError(res.data)
        }
        resolve(res);
        uni.hideLoading();

      },
      fail(res) {
        resolve(res);
        // isFn(callback) && callback(res);
        // console.log(res);
        uni.hideLoading();
        showToast('图片上传失败');
      }
    });
  })
}

export function uploadFile(data, success, fail) {
  let auth = getToken(data.url);
  uni.showLoading({title:'上传图片中...'});
    uni.uploadFile({
        url: `${config.baseUrl}${data.url}`,
        filePath: data.filePath,
        name: 'file',
        header: { Authorization: auth},
        formData: {fileAppertaining:data.fileAppertaining,fileType:data.fileType},
        success(res){
            uni.hideLoading();
            let data = JSON.parse(res.data);
            if (data.data){
              typeof success === "function" && success(data);
            }else if (data.msg.includes('token')){
              reLaunch('../login/login')
            }else {
              showToast('上传失败')
            }

        },
        fail(){
          uni.hideLoading();
          typeof fail === "function" && fail({msg:'图片上传失败'});
        }
    })
}


/*function uploadFile(data,callback) {
  return new Promise(resolve => {
    console.log(data);
    let auth = getToken(url);
    uni.showLoading({title:MESSAGE.UPLOADING})
    uni.uploadFile({
      url: `${config.baseUrl}${data.url}/${data.id}`,
      files: data.fileList,
      fileType: 'image',
      header: {"Content-Type": "multipart/form-data",Authorization:auth},
      success: (uploadFileRes) => {
        // console.log(uploadFileRes);
        isFn(callback) && callback(JSON.parse(uploadFileRes.data));
        resolve(uploadFileRes);
        uni.hideLoading();
        /!*uni.navigateTo({
          url:"../resultPage/resultPage?toUrl=../safetyTrainingDetail/safetyTrainingDetail&params="+JSON.stringify(this.safety)
        })*!/
      },
      fail(res) {
        resolve(res);
        isFn(callback) && callback(res);
        // console.log(res);
        uni.hideLoading();
        showToast('上传失败');
      }
    });
  })
}*/

/**
 * POST请求 Promise版
 * @param url {string}
 * @param data {object|string|array}
 *
 */
export function postAsync(url,data) {
  return uni.request({
    url:`${config.baseUrl}${url}`,
    data,
    method:'POST'
  })
}
/**
 * GET请求Promise版
 * @param url {string}
 * @param data {object|string|array}

 */
export function getAsync(url,data) {
  uni.request({
    url:`${config.baseUrl}${url}`,
    data,
    method:'GET',
  })

}

/**
 * 响应数据封装构造器
 * @param data
 * @param state
 * @param errMsg
 * @constructor
 */
function Response(data, state, errMsg) {
  this.data = data;
  this.state = state;
  this.msg = errMsg;
}

function onError(err) {
  console.log(err);
  if (!err.msg) {
    uni.showToast({
      duration:2500,
      icon: 'none',
      title: err.message?err.message:'服务出错，请稍后再试'
    });
    return
  }
  if (err.msg.includes('token')){
    uni.showToast({
      duration:2500,
      icon: 'none',
      title: '登录已过期，请重新登录'
    });
    setTimeout(()=>{
      uni.reLaunch({
        url:'../login/login'
      },2500)
    })

  } else {
    uni.showToast({
      duration:2500,
      icon: 'none',
      title: err.msg
    });
  }


}
function setToken(token) {
  store.commit('setToken',token)
}

function getToken(url) {
  let exp = /login|register|checkRepeat/ig;
  // console.log('replace began',url);
  if (url.includes('/'))
  var str = url.toString().replace(/\//ig, '');
  // console.log(str);
  // console.log(exp.test(str),store.state.hasToken);
  let t = getStorage('userInfo').token;
  if (!exp.test(str)&& t) {
    // return store.state.token
    return t
  } else {
    // logout();
    return null
  }
}

export function initPosition() {
  /**
   * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
   * 反向使用 top 进行定位，可以避免此问题。
   */
  return  uni.getSystemInfoSync().windowHeight - 100;
}

function logout() {
  store.commit('logout');
  uni.reLaunch({
    url: '../login/login',
  });
}

export const request = {
    post,
    get,
  postAsync,
  getAsync
}
export function debounce(fun, delay) {
  return function (args) {
    let that = this
    let _args = args
    clearTimeout(fun.id)
    fun.id = setTimeout(function () {
      fun.call(that, _args)
    }, delay)
  }
}
