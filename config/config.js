/**
 *
 * Author : Administrator
 * Date   : 2019-5-31 14:37
 * Last Modified : Administrator
 *
 */

const config={};
if(process.env.NODE_ENV === 'development'){
  // console.log('开发环境')
  // config.baseUrl='http://192.168.0.28:8763/social-unit-fire-management';
  // config.WS_SERVICE='ws://192.168.0.28:8764/message-service/register/';
  // config.baseUrl='http://192.168.0.21:18763/social-unit-fire-management';
  // config.WS_SERVICE='ws://192.168.0.21:18764/message-service/register/';
  config.baseUrl='http://hylink.imwork.net:20194/social-unit-fire-management';
  config.WS_SERVICE='ws://hylink.imwork.net:20191/message-service/register/';
}else{
  // 正式生产
  config.baseUrl='http://hylink.imwork.net:20194/social-unit-fire-management';
  config.WS_SERVICE='ws://hylink.imwork.net:20191/message-service/register/';
}
config.env = process.env;
config.amapKey = '991bd5990d6ee94ae720d4d512bade9a';
export {config};

export const MESSAGE = {
  UPLOADING:'上传数据中...',
  SAVE:'保存中...',
  LOGIN:'登录中...',
  LOGOUT:'正在退出...',
  LOADING:'加载数据中...',
  NET_ERROR:'网络出错...',
  SUBMITTING:'提交中...',
  UNKNOWN:'未知错误...',
  REQUEST_FAIL:'请求失败',
};
