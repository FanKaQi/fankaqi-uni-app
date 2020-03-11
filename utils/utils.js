import store from "../store/index";

/**
 *
 * Author : Administrator
 * Date   : 2019-5-31 16:50
 * Last Modified : Administrator
 *
 */
(function () {
  String.prototype.toNumber = function () {
    return Number(this)
  }
})();


export const TIP_MESSAGE = {
  noServer: '无服务',
  '4GNetwork': '当前网络为4G',
  'WIFINetwork': '当前网络为WIFI'
};

export function isArray(array) {
  return array instanceof Array
}

export function isObject(object) {
  return object instanceof Object
}

export function isFn(fun) {
  return typeof fun === 'function'
}

export function isString(string) {
  return typeof string === 'string'
}

export function isNumber(num) {
  return typeof num === 'number'
}

export function isLength(array) {
  if (typeof array === 'string' || array instanceof Array) {
    return array.length > 0;
  } else {
    warn('function isLength():请输入字符串或数组类型')
  }

}

export function isEmptyObject(param) {
  try {
    console.log(param);
    if (!(param instanceof Object)){
      new Error('参数类型不是Object')
    }else {
      return !(Object.keys(param).length > 0);
    }

  }catch (e) {
    throw new Error(e)
  }
}
export function isNotEmpty(param) {
  try {

      if (!param){
        return false
      }
    if (param instanceof Object){
      return Object.keys(param).length > 0;
    }else if (param instanceof Array){
      return param.length > 0;
    }else if (param instanceof String){
      return !!param;
    }else if (param instanceof Number){
      return true;
    }else {
      return false;
    }

  }catch (e) {
    throw new Error(e)
  }
}

/**
 *
 * @param dateStr yyyy-MM-dd HH:mm:ss
 * @returns {string}
 */
export function toDateFriendly(dateStr) {
  //af-测试可用
  let dateTimeStamp = Date.parse(dateStr.replace(/-/gi, "/"));
  let minute = 1000 * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let halfamonth = day * 15;
  let month = day * 30;
  let year = month * 12;
  let now = new Date().getTime();
  let diffValue = now - dateTimeStamp;
  if (diffValue < 0) {
    return dateStr;
  }
  let yearC = diffValue / year;
  let monthC = diffValue / month;
  let weekC = diffValue / (7 * day);
  let dayC = diffValue / day;
  let hourC = diffValue / hour;
  let minC = diffValue / minute;
  let result = '';
 /* if (monthC >= 1) {
    result = "" + parseInt(monthC) + "月前";
  } else*/
  if (weekC > 1) {
    result = dateStr;
  } else if (weekC === 1) {
    result = "" + parseInt(weekC) + "周前";
  } else if (dayC >= 1 && dayC <7) {
    result = "" + parseInt(dayC) + "天前";
  } else if (hourC >= 1 && hourC<24) {
    result = "" + parseInt(hourC) + "小时前";
  } else if (minC >= 1 && minC<60) {
    result = "" + parseInt(minC) + "分钟前";
  } else
    result = "刚刚";
  return result;
}

export function showToast(msg, ico, duration,callback) {
  let d = duration && typeof duration === 'number' ? duration : 2500
  uni.showToast({
    icon: ico && typeof ico === 'string' ? ico : 'none',
    title: msg,
    duration: d
  });
  setTimeout(()=>{typeof callback === 'function' && callback()},d)

}

export function showAlert(title,content,showCancel) {
  uni.showModal({
    title,
    content,
    showCancel
  });
}

export function showLoading(title) {
  uni.showLoading({
    title
  });
}

export function hideLoading() {
  uni.hideLoading();
}

export function objectToUrlKeyValue(object, isEncode) {
  if (isObject(object)) {
    let temp = '';
    let keys = Object.keys(object);
    if (!isEncode) {
      keys.forEach((key, index) => {
        temp += `${key}=${encodeURIComponent(JSON.stringify(object[key]))}${index === keys.length - 1 ? '' : '&'}`
      })
    } else {
      keys.forEach((key, index) => {
        temp += `${key}=${object[key]}${index === keys.length - 1 ? '' : '&'}`
      })
    }

    return temp
  } else {
    warn('参数类型错误')
  }
}

export function jsonParse(object) {
  if (!isObject(object)) {
    warn('参数类型错误');
  }
  Object.keys(object).map(key => {
    object[key] = JSON.parse(object[key])
  })

}

export function uuid() {
  let s = [];
  let hexDigits = "0123456789abcdef";
  for (let i = 0; i < 32; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23];

  let uuid = s.join('');
  return uuid;
}

export function warn(msg) {
  throw new Error(msg)
}

export function getDate(type) {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (type === 'start') {
    year = year - 60;
  } else if (type === 'end') {
    year = year + 2;
  }
  month = month > 9 ? month : '0' + month;
  day = day > 9 ? day : '0' + day;
  if (type === 'month'){
    return `${year}-${month}`;
  }
  return `${year}-${month}-${day}`;
}

export function getTime(option) {
  let defaultOption = {
    fullTime: false,
    milliseconds: false,
  };

  if (isNotEmpty(option)) {
    Object.assign(defaultOption, option)
  }
  const date = new Date();
  let hh = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
  let mm = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
  let ss = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
  let ms = date.getMilliseconds() > 10 ? date.getMilliseconds() : '0' + date.getMilliseconds();

  if (defaultOption.fullTime && defaultOption.milliseconds) {
    return `${hh}:${mm}:${ss}.${ms}`
  }
  if (defaultOption.fullTime) {
    return `${hh}:${mm}:${ss}`
  }
  return `${hh}:${mm}`;
}

export function getDateTime(o) {
  return getDate() + ' ' + getTime(o)
}

export function deepCopy(object) {
  return JSON.parse(JSON.stringify(object));

}


// 延时跳转页面
export function delayNavigateTo(url, delay) {
  setTimeout(() => {
    uni.navigateTo({
      url
    })
  }, delay ? delay : 2000)
}

// 校验工具
export const validateMe = {
  //是否电话格式(手机和座机)
  phone(val) {
    return /^((0\d{2,3}\d{7,8})|(0\d{2,3}-\d{7,8})|(\d{7,8})|(1[3456789]\d{9}))$/.test(val)
  },
  // 帐号是否合法(字母开头，允许4-16字节，允许字母数字下划线组合
  account(val) {
    // return /^[a-zA-Z][a-zA-Z0-9_]{4,16}$/.test(val)
    return /^[0-9a-zA-Z_]{4,16}$/.test(val)
  },
  // 数字 字母 下划线
  easyPassword(val) {
    return /^[0-9a-zA-Z]{6,18}$/.test(val)
  },
  //最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
  strongPassword(val) {
    return /^.*(?=.{6,18})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(val)
  },
  password(val) {
    return /^.*(?=.{6,18})(?=.*\d)(?=.*[a-zA-Z_]).*$/.test(val)
  },
  //用户名正则，4到16位（字母，数字，下划线，减号）
  userName(val) {
    return /^[a-zA-Z0-9_-]{4,16}$/.test(val)
  },
  email(val) {
    return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val)
  },
  // 身份证号(15位、18位数字)，最后一位是校验位，可能为数字或字符X
  idNum(val) {
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(val)
  },
  //qq号格式
  qq(val) {
    return /^[1-9]*[1-9][0-9]*$/.test(val)
  },
  //微信号，6至20位，以字母开头，字母，数字，减号，下划线
  weChat(val) {
    return /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(val)
  },
  // 统一信用代码
  uniformSocialCreditCode(val) {
    return /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g.test(val)
  },
  // 企业注册号
  companyRegNum(val) {
    return /^[A-Za-z0-9]\w{14}$/g.test(val)
  },
  // 验证是否为非法字符
  character(val) {
    return /^[\u4e00-\u9fa5_a-zA-Z0-9\s\·\~\！\@\#\￥\%\……\&\*\（\）\——\-\+\=\【\】\{\}\、\|\；\‘\’\：\“\”\《\》\？\，\。\、\`\~\!\#\$\%\^\&\*\(\)\_\[\]{\}\\\|\;\'\'\:\"\"\""\,\.\/\<\>\?]+$/g.test(val)
  }
};

/**
 * 校验是否包含非法字符
 * @param data {object|array}
 * @returns {boolean} true 包含非法字符 false 不包含
 */
export function validCharacter(data) {
  let res = [];
  for (let key in data) {
    if (!data[key]) {
      continue;
    }
    if (typeof data[key] === "string") {
      if (!validateMe.character(data[key])) {
        console.log(key,data[key]);
        showToast('不能包含非法字符');
        res.push(false);
        break;
      }
    }
    if (data[key] instanceof Array) {
      for (let item of data[key]) {
        validCharacter(data[key][item])
      }
    }
    if (data[key] instanceof Object) {
      validCharacter(data[key])
    }

  }

  return res.includes(false)
}

// 同步获取网络状态
export function getNetState() {
  return new Promise(resolve => {
    uni.getNetworkType({
      success: function (res) {
        resolve(res)
      },
      fail(res) {
        resolve({networkType:'none'})
      }
    });
  })

}

/**
 *字符串转json
 *
 */
export  function  stringToJson(data){
  return JSON.parse(data);
}
/**
 *json转字符串
 */
export  function  jsonToString(data){
  return JSON.stringify(data);
}
/**
 *map转换为json
 */
export  function  mapToJson(map) {
  return JSON.stringify(strMapToObj(map));
}
/**
 *json转换为map
 */
export  function  jsonToMap(jsonStr){
  return  objToStrMap(JSON.parse(jsonStr));
}


/**
 *map转化为对象（map所有键都是字符串，可以将其转换为对象）
 */
export  function  strMapToObj(strMap){
  let obj= Object.create(null);
  for (let[k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

/**
 *对象转换为Map
 */
export  function  objToStrMap(obj){
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k,obj[k]);
  }
  return strMap;
}

//object简化
/*
export function objToEasyObj(param) {
  if (isObject(param)){
    for (let key in param){

    }
  }else if (isArray(param)){
    param.forEach(item=>{
      if (isObject(item)){
        objToEasyObj(item)
      }
    })
  }else {
    throw new Error('参数类型错误')
  }
  let temp = [];

  for (let item of obj){
    let obj = {};
    obj[item.patrolItem.toString()] = item.patrolSituation;
    temp.push(obj)
  }


}*/

/**
 * @param data array
 * return array
 */
export function fireInspectionParamToMap(data) {
  let temp = [];
  for (let item of data){
    let obj = {};
    obj[item.patrolItem.toString()] = item.patrolSituation;
    temp.push(obj)
  }
  return temp
}

/**
 *
 * @param data array
 * return array
 */
export function fireInspectionParamToObj(data) {
  let temp = [];
  if (isNotEmpty(data))
    for (let item of data){
      for (let key in item){
        let obj = {};
        obj.patrolItem = key;
        obj.patrolSituation = item[key];
        temp.push(obj);
      }
    }
  return temp;
}

// 升级
export function downloadUpgrade(url, forceClose) {
  //调用Downloader模块管理网络文件下载任务
  var dtask = plus.downloader.createDownload(url, {}, function(d, status) {
    if (status == 200) { // 下载成功
      //文件地址
      var path = d.filename;

      //下载成功安装
      //plus.runtime.install(path);
      plus.runtime.install(path, null, function() {
        //关闭所有窗口
        //plus.nativeUI.closeWaiting();
        //重新启动APP
        //plus.runtime.restart();
        //退出程序
        plus.runtime.quit();
      }, function(e) {
        //plus.nativeUI.closeWaiting();
        plus.nativeUI.alert("安装更新文件失败[" + e.code + "]：" + e.message);
      });
    } else { //下载失败

      let optionParams = {
        content: "Download failed: " + status,
        showCancel: false,
        success: (res) => {
          if (res.confirm && forceClose) {
            //下载失败强制关闭
            plus.runtime.quit();
          }
        }
      }
      uni.showModal(optionParams);
    }
  });
  dtask.start();
}

/***
 * uni-app api系列封装
 * 本地存储、删除
 * @param key {string}
 * @param value {number|string|array|object|boolean}
 */
export function setStorage(key,value){
  uni.setStorageSync(key,value)
}

export function getStorage(key){
  return uni.getStorageSync(key)
}

export function removeStorage(key) {
   uni.removeStorageSync(key)
}

/**
 * 路由导航
 * @param url
 */
export function navigateTo(url) {
  uni.navigateTo({url})
}
export function reLaunch(url) {
  uni.reLaunch({url})
}
export function redirectTo(url) {
  uni.redirectTo({url})
}
export function switchTab(url) {
  uni.switchTab({url})
}
export function navigateBack(delta) {
  uni.navigateBack({delta})
}
/**
 * 像素转换
 * @param upx {number}
 * @returns {number}
 */
export function upx2px(upx) {
  return uni.upx2px(upx)
}
// 设计图像素转换
export function designPx2px(px) {

  return uni.upx2px(((px*100)/144).toFixed(2)) + 'px'
}
/**
 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
 * 反向使用 top 进行定位，可以避免此问题。
 */
export function initPosition() {
  return uni.getSystemInfoSync().windowHeight - 100;
}

export function getUserInfo(){
  return store.getters.userInfo
}
export function setUserInfo(userInfo) {
  store.setUserInfo(userInfo)
}

/**
 * 计算某个时间点timeScamp,是否超过时长deadTime （小时）
 * @param timeScamp {number}
 * @param deadTime {number}
 * @returns {boolean}
 */
export function isDeadLine(timeScamp, deadTime) {
  return Date.now()-new Date(timeScamp)>deadTime*60*60*1000
}
export function isNotDeadLine(timeScamp, deadTime) {
  console.log(Number(timeScamp), deadTime);
  return Date.now()-new Date(Number(timeScamp))<deadTime*60*60*1000
}

