(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0de9":function(t,e,s){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function a(){return"string"===typeof __channelId__&&__channelId__}function n(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];var n=e.shift();if(a())return e.push(e.pop().replace("at ","uni-app:///")),console[n]["apply"](console,e);var r=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(a){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var s=i(t).toUpperCase();t="NUMBER"===s||"BOOLEAN"===s?"---BEGIN:"+s+"---"+t+"---END:"+s+"---":String(t)}return t}),o="";if(r.length>1){var c=r.pop();o=r.join("---COMMA---"),0===c.indexOf(" at ")?o+=c:o+="---COMMA---"+c}else o=r[0];console[n](o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},"0e1a":function(t,e,s){"use strict";s.r(e);var i=s("e5ee"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=a.a},"0f78":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(s("dbfd"));function a(t){return t&&t.__esModule?t:{default:t}}var n={name:"home",components:{uniSwiperDot:i.default},data:function(){return{background:["color1","color2","color3"],indicatorDots:!1,circular:!0,autoplay:!0,interval:2e3,duration:500,current:0,mode:"round",swiper:["../../static/img/banner_1.jpg","../../static/img/banner_2.jpg","../../static/img/banner_2.jpg","../../static/img/banner_3.jpg"]}},onLoad:function(){},methods:{change:function(t){this.current=t.detail.current}}};e.default=n},1221:function(t,e,s){"use strict";s.r(e);var i=s("e758"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=a.a},1667:function(t,e,s){"use strict";s("7421"),s("921b");var i=n(s("8bbf")),a=n(s("48e2"));function n(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},i=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),i.forEach(function(e){o(t,e,s[e])})}return t}function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}i.default.config.productionTip=!1,a.default.mpType="app";var c=new i.default(r({},a.default));c.$mount()},"26f9":function(t,e,s){"use strict";var i,a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[s("image",{staticClass:t._$s(1,"sc","image-state"),attrs:{_i:1}}),s("view",{staticClass:t._$s(2,"sc","textBold"),attrs:{_i:2}}),s("view",[s("text",{staticClass:t._$s(4,"sc","label"),attrs:{_i:4}}),s("text",{staticClass:t._$s(5,"sc","type"),attrs:{_i:5}})]),s("view",{staticClass:t._$s(6,"sc","view"),attrs:{_i:6}},[s("view",{staticClass:t._$s(7,"sc","view-item"),attrs:{_i:7}},[s("text",{staticClass:t._$s(8,"sc","text"),attrs:{_i:8}}),s("text",{staticClass:t._$s(9,"sc","textCustom"),attrs:{_i:9}})]),s("view",{staticClass:t._$s(10,"sc","view-item"),attrs:{_i:10}},[s("text",{staticClass:t._$s(11,"sc","text"),attrs:{_i:11}}),s("text",{staticClass:t._$s(12,"sc","textCustom"),attrs:{_i:12}})]),s("view",{staticClass:t._$s(13,"sc","view-item"),attrs:{_i:13}},[s("text",{staticClass:t._$s(14,"sc","text"),attrs:{_i:14}}),s("text",{staticClass:t._$s(15,"sc","textCustom"),attrs:{_i:15}})]),s("view",{staticClass:t._$s(16,"sc","view-item-image"),attrs:{_i:16}},[s("text",{staticClass:t._$s(17,"sc","text"),attrs:{_i:17}}),s("view",{staticClass:t._$s(18,"sc","image-content"),attrs:{_i:18}},t._l(t._$s(19,"f",{forItems:t.picture}),function(e,i,a,n){return s("image",{key:t._$s(19,"f",{forIndex:a,key:e}),staticClass:t._$s("19-"+n,"sc","image-show"),attrs:{mode:t._$s("19-"+n,"a-mode",e.mode),src:t._$s("19-"+n,"a-src",e),_i:"19-"+n}})}),0)]),s("hr",{staticClass:t._$s(20,"sc","line"),attrs:{_i:20}}),s("view",{staticClass:t._$s(21,"sc","title"),attrs:{_i:21}}),s("view",{staticClass:t._$s(22,"sc","view-item"),attrs:{_i:22}},[s("text",{staticClass:t._$s(23,"sc","text"),attrs:{_i:23}}),s("text",{staticClass:t._$s(24,"sc","textCustom"),attrs:{_i:24}})]),s("view",{staticClass:t._$s(25,"sc","view-item"),attrs:{_i:25}},[s("text",{staticClass:t._$s(26,"sc","text"),attrs:{_i:26}}),s("text",{staticClass:t._$s(27,"sc","textCustom"),attrs:{_i:27}})]),s("view",{staticClass:t._$s(28,"sc","view-item-image"),attrs:{_i:28}},[s("text",{staticClass:t._$s(29,"sc","text"),attrs:{_i:29}}),s("view",{staticClass:t._$s(30,"sc","image-content"),attrs:{_i:30}},t._l(t._$s(31,"f",{forItems:t.picture}),function(e,i,a,n){return s("image",{key:t._$s(31,"f",{forIndex:a,key:e}),staticClass:t._$s("31-"+n,"sc","image-show"),attrs:{mode:t._$s("31-"+n,"a-mode",e.mode),src:t._$s("31-"+n,"a-src",e),_i:"31-"+n}})}),0)]),s("hr",{staticClass:t._$s(32,"sc","line"),attrs:{_i:32}}),s("view",{staticClass:t._$s(33,"sc","title"),attrs:{_i:33}}),s("view",{staticClass:t._$s(34,"sc","view-item"),attrs:{_i:34}},[s("text",{staticClass:t._$s(35,"sc","text"),attrs:{_i:35}}),s("text",{staticClass:t._$s(36,"sc","textCustom"),attrs:{_i:36}})]),s("view",{staticClass:t._$s(37,"sc","view-item-image"),attrs:{_i:37}},[s("text",{staticClass:t._$s(38,"sc","text"),attrs:{_i:38}}),s("view",{staticClass:t._$s(39,"sc","image-content"),attrs:{_i:39}},t._l(t._$s(40,"f",{forItems:t.picture1}),function(e,i,a,n){return s("image",{key:t._$s(40,"f",{forIndex:a,key:e}),staticClass:t._$s("40-"+n,"sc","image-show"),attrs:{mode:t._$s("40-"+n,"a-mode",e.mode),src:t._$s("40-"+n,"a-src",e),_i:"40-"+n}})}),0)]),s("hr",{staticClass:t._$s(41,"sc","lineCustom"),attrs:{_i:41}}),s("view",{staticClass:t._$s(42,"sc","title"),attrs:{_i:42}}),s("view",{staticClass:t._$s(43,"sc","view-item"),attrs:{_i:43}},[s("text",{staticClass:t._$s(44,"sc","text"),attrs:{_i:44}}),s("text",{staticClass:t._$s(45,"sc","textCustom"),attrs:{_i:45}})]),s("view",{staticClass:t._$s(46,"sc","view-item"),attrs:{_i:46}},[s("text",{staticClass:t._$s(47,"sc","text"),attrs:{_i:47}}),s("text",{staticClass:t._$s(48,"sc","textCustom"),attrs:{_i:48}})])])])},n=[];s.d(e,"b",function(){return a}),s.d(e,"c",function(){return n}),s.d(e,"a",function(){return i})},2724:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=s}).call(this,s("0de9")["default"])},"2a25":function(t,e,s){"use strict";s.r(e);var i=s("657f"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=a.a},"2a76":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appid:"__UNI__D768C3A"};e.default=i},3701:function(t,e,s){"use strict";s.r(e);var i=s("3c00"),a=s("efb1");for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);var r,o=s("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"0e7385cc",null,!1,i["a"],r);e["default"]=c.exports},"3c00":function(t,e,s){"use strict";var i,a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[s("view",{staticClass:t._$s(1,"sc","title"),attrs:{_i:1}}),s("uni-swiper-dot",{attrs:{info:t.swiper,current:t.current,field:"content",mode:t.mode,_i:2}},[s("swiper",{staticClass:t._$s(3,"sc","swiper"),attrs:{circular:t._$s(3,"a-circular",t.circular),"indicator-dots":t._$s(3,"a-indicator-dots",t.indicatorDots),autoplay:t._$s(3,"a-autoplay",t.autoplay),interval:t._$s(3,"a-interval",t.interval),duration:t._$s(3,"a-duration",t.duration),_i:3},on:{change:t.change}},t._l(t._$s(4,"f",{forItems:t.swiper}),function(e,i,a,n){return s("swiper-item",{key:t._$s(4,"f",{forIndex:a,key:e})},[s("image",{attrs:{src:t._$s("5-"+n,"a-src",e),_i:"5-"+n}})])}),0)]),s("view",{staticClass:t._$s(6,"sc","menu"),attrs:{_i:6}},[s("view",{staticClass:t._$s(7,"sc","menu-row"),attrs:{_i:7}},[s("navigator",{},[s("view",{staticClass:t._$s(9,"sc","menu-item"),attrs:{_i:9}},[s("image",{staticClass:t._$s(10,"sc","image-icon"),attrs:{_i:10}}),s("text",{staticClass:t._$s(11,"sc","text"),attrs:{_i:11}})])]),s("navigator",{},[s("view",{staticClass:t._$s(13,"sc","menu-item"),attrs:{_i:13}},[s("image",{staticClass:t._$s(14,"sc","image-icon"),attrs:{_i:14}}),s("text",{staticClass:t._$s(15,"sc","text"),attrs:{_i:15}})])]),s("view",{staticClass:t._$s(16,"sc","menu-item"),attrs:{_i:16}},[s("image",{staticClass:t._$s(17,"sc","image-icon"),attrs:{_i:17}}),s("text",{staticClass:t._$s(18,"sc","text"),attrs:{_i:18}})])]),s("view",{staticClass:t._$s(19,"sc","menu-row"),attrs:{_i:19}},[s("view",{staticClass:t._$s(20,"sc","menu-item"),attrs:{_i:20}},[s("image",{staticClass:t._$s(21,"sc","image-icon"),attrs:{_i:21}}),s("text",{staticClass:t._$s(22,"sc","text"),attrs:{_i:22}})]),s("view",{staticClass:t._$s(23,"sc","menu-item"),attrs:{_i:23}},[s("image",{staticClass:t._$s(24,"sc","image-icon"),attrs:{_i:24}}),s("text",{staticClass:t._$s(25,"sc","text"),attrs:{_i:25}})]),s("view",{staticClass:t._$s(26,"sc","menu-item"),attrs:{_i:26}},[s("image",{staticClass:t._$s(27,"sc","image-icon"),attrs:{_i:27}}),s("text",{staticClass:t._$s(28,"sc","text"),attrs:{_i:28}})])]),s("view",{staticClass:t._$s(29,"sc","button"),attrs:{_i:29}})])],1)},n=[];s.d(e,"b",function(){return a}),s.d(e,"c",function(){return n}),s.d(e,"a",function(){return i})},"48e2":function(t,e,s){"use strict";s.r(e);var i=s("7fbe");for(var a in i)"default"!==a&&function(t){s.d(e,t,function(){return i[t]})}(a);var n,r,o,c,u=s("f0c5"),l=Object(u["a"])(i["default"],n,r,!1,null,null,null,!1,o,c);e["default"]=l.exports},"4b72":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"home",data:function(){return{background:["color1","color2","color3"],indicatorDots:!0,circular:!0,autoplay:!0,interval:2e3,duration:500,swiper:["../../static/img/banner_1.jpg","../../static/img/banner_2.jpg","../../static/img/banner_3.jpg"]}},onLoad:function(){this.getss()},methods:{getss:function(){uni.getSystemInfoSync().statusBarHeight}}};e.default=i},"56d8":function(t,e,s){"use strict";var i,a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:t._$s(0,"sc","uni-swiper__warp"),attrs:{_i:0}},[t._t("default",null,{_i:1}),t._$s(2,"i","default"===t.mode)?s("view",{key:"default",staticClass:t._$s(2,"sc","uni-swiper__dots-box"),style:t._$s(2,"s",{bottom:t.dots.bottom+"px"}),attrs:{_i:2}},t._l(t._$s(3,"f",{forItems:t.info}),function(e,i,a,n){return s("view",{key:t._$s(3,"f",{forIndex:a,key:i}),staticClass:t._$s("3-"+n,"sc","uni-swiper__dots-item uni-swiper__dots-bar"),style:t._$s("3-"+n,"s",{width:(i===t.current?2*t.dots.width:t.dots.width)+"px",height:t.dots.width/3+"px","background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,"border-radius":"0px"}),attrs:{_i:"3-"+n}})}),0):t._e(),t._$s(4,"i","dot"===t.mode)?s("view",{key:"dot",staticClass:t._$s(4,"sc","uni-swiper__dots-box"),style:t._$s(4,"s",{bottom:t.dots.bottom+"px"}),attrs:{_i:4}},t._l(t._$s(5,"f",{forItems:t.info}),function(e,i,a,n){return s("view",{key:t._$s(5,"f",{forIndex:a,key:i}),staticClass:t._$s("5-"+n,"sc","uni-swiper__dots-item"),style:t._$s("5-"+n,"s",{width:t.dots.width+"px",height:t.dots.height+"px","background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:i!==t.current?t.dots.border:t.dots.selectedBorder}),attrs:{_i:"5-"+n}})}),0):t._e(),t._$s(6,"i","round"===t.mode)?s("view",{key:"round",staticClass:t._$s(6,"sc","uni-swiper__dots-box"),style:t._$s(6,"s",{bottom:t.dots.bottom+"px"}),attrs:{_i:6}},t._l(t._$s(7,"f",{forItems:t.info}),function(e,i,a,n){return s("view",{key:t._$s(7,"f",{forIndex:a,key:i}),staticClass:t._$s("7-"+n,"sc","uni-swiper__dots-item "),class:t._$s("7-"+n,"c",[i===t.current&&"uni-swiper__dots-long"]),style:t._$s("7-"+n,"s",{width:(i===t.current?2*t.dots.width:t.dots.width)+"px",height:t.dots.height+"px","background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:i!==t.current?t.dots.border:t.dots.selectedBorder}),attrs:{_i:"7-"+n}})}),0):t._e(),t._$s(8,"i","nav"===t.mode)?s("view",{key:"nav",staticClass:t._$s(8,"sc","uni-swiper__dots-box uni-swiper__dots-nav"),style:t._$s(8,"s",{"background-color":t.dotsStyles.backgroundColor,bottom:"0"}),attrs:{_i:8}},[s("text",{staticClass:t._$s(9,"sc","uni-swiper__dots-nav-item"),style:t._$s(9,"s",{color:t.dotsStyles.color}),attrs:{_i:9}},[t._v(t._$s(9,"t0",t._s(t.current+1+"/"+t.info.length+" "+t.info[t.current][t.field])))])]):t._e(),t._$s(10,"i","indexes"===t.mode)?s("view",{key:"indexes",staticClass:t._$s(10,"sc","uni-swiper__dots-box"),style:t._$s(10,"s",{bottom:t.dots.bottom+"px"}),attrs:{_i:10}},t._l(t._$s(11,"f",{forItems:t.info}),function(e,i,a,n){return s("view",{key:t._$s(11,"f",{forIndex:a,key:i}),staticClass:t._$s("11-"+n,"sc","uni-swiper__dots-item uni-swiper__dots-indexes"),style:t._$s("11-"+n,"s",{width:t.dots.width+"px",height:t.dots.height+"px",color:i===t.current?t.dots.selectedColor:t.dots.color,"background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:i!==t.current?t.dots.border:t.dots.selectedBorder}),attrs:{_i:"11-"+n}},[s("text",{staticClass:t._$s("12-"+n,"sc","uni-swiper__dots-indexes-text"),attrs:{_i:"12-"+n}},[t._v(t._$s("12-"+n,"t0",t._s(i+1)))])])}),0):t._e()],2)},n=[];s.d(e,"b",function(){return a}),s.d(e,"c",function(){return n}),s.d(e,"a",function(){return i})},5885:function(t,e,s){"use strict";s.r(e);var i=s("6475"),a=s("9a13");for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);var r,o=s("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},6475:function(t,e,s){"use strict";var i,a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[s("view",{staticClass:t._$s(1,"sc","view-head"),attrs:{_i:1}},[s("image",{staticClass:t._$s(2,"sc","head-image"),attrs:{_i:2}}),s("view",{staticClass:t._$s(3,"sc","head-text"),attrs:{_i:3}},[s("view",{staticClass:t._$s(4,"sc","head-text-name"),attrs:{_i:4}}),s("view",{staticClass:t._$s(5,"sc","head-text-role"),attrs:{_i:5}})])]),s("view",{staticClass:t._$s(6,"sc","menu"),attrs:{_i:6}},[s("view",[s("navigator",{staticClass:t._$s(8,"sc","menu-item"),attrs:{_i:8}},[s("image",{staticClass:t._$s(9,"sc","image-icon"),attrs:{_i:9}}),s("text",{staticClass:t._$s(10,"sc","text"),attrs:{_i:10}}),s("image",{staticClass:t._$s(11,"sc","image-icon"),attrs:{_i:11}})])]),s("hr",{staticClass:t._$s(12,"sc","line"),attrs:{_i:12}}),s("view",[s("navigator",{staticClass:t._$s(14,"sc","menu-item"),attrs:{_i:14}},[s("image",{staticClass:t._$s(15,"sc","image-icon"),attrs:{_i:15}}),s("text",{staticClass:t._$s(16,"sc","text"),attrs:{_i:16}}),s("image",{staticClass:t._$s(17,"sc","image-icon"),attrs:{_i:17}})])]),s("hr",{staticClass:t._$s(18,"sc","line"),attrs:{_i:18}}),s("view",[s("navigator",{staticClass:t._$s(20,"sc","menu-item"),attrs:{_i:20}},[s("image",{staticClass:t._$s(21,"sc","image-icon"),attrs:{_i:21}}),s("text",{staticClass:t._$s(22,"sc","text"),attrs:{_i:22}}),s("image",{staticClass:t._$s(23,"sc","image-icon"),attrs:{_i:23}})])]),s("hr",{staticClass:t._$s(24,"sc","line"),attrs:{_i:24}})]),s("view",{staticClass:t._$s(25,"sc","button"),attrs:{_i:25}})])},n=[];s.d(e,"b",function(){return a}),s.d(e,"c",function(){return n}),s.d(e,"a",function(){return i})},"657f":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},methods:{}};e.default=i},7421:function(t,e,s){"use strict";uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/start/start",function(){return Vue.extend(s("b2aa").default)}),__definePage("pages/home/home",function(){return Vue.extend(s("3701").default)}),__definePage("pages/my/my",function(){return Vue.extend(s("5885").default)}),__definePage("pages/person/person",function(){return Vue.extend(s("ed19").default)}),__definePage("pages/inspectDetail/inspectDetail",function(){return Vue.extend(s("7544").default)}),__definePage("pages/test/test",function(){return Vue.extend(s("d987").default)})},7544:function(t,e,s){"use strict";s.r(e);var i=s("26f9"),a=s("1221");for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);var r,o=s("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},7934:function(t,e,s){"use strict";var i,a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[s("view",{staticClass:t._$s(1,"sc","view-head"),attrs:{_i:1}},[s("image",{staticClass:t._$s(2,"sc","image-head"),attrs:{_i:2}}),s("text",{staticClass:t._$s(3,"sc","text-head"),attrs:{_i:3}})]),s("view",{staticClass:t._$s(4,"sc","view-item"),attrs:{_i:4}},[s("text",{staticClass:t._$s(5,"sc","text"),attrs:{_i:5}}),s("text",{staticClass:t._$s(6,"sc","textBold"),attrs:{_i:6}})]),s("hr",{staticClass:t._$s(7,"sc","lineCustom"),attrs:{_i:7}}),s("view",{staticClass:t._$s(8,"sc","view-item"),attrs:{_i:8}},[s("text",{staticClass:t._$s(9,"sc","text"),attrs:{_i:9}}),s("text",{staticClass:t._$s(10,"sc","textBold"),attrs:{_i:10}})]),s("hr",{staticClass:t._$s(11,"sc","lineCustom"),attrs:{_i:11}}),s("view",{staticClass:t._$s(12,"sc","view-item"),attrs:{_i:12}},[s("text",{staticClass:t._$s(13,"sc","text"),attrs:{_i:13}}),s("text",{staticClass:t._$s(14,"sc","textBold"),attrs:{_i:14}})]),s("hr",{staticClass:t._$s(15,"sc","line"),attrs:{_i:15}})])},n=[];s.d(e,"b",function(){return a}),s.d(e,"c",function(){return n}),s.d(e,"a",function(){return i})},"7fbe":function(t,e,s){"use strict";s.r(e);var i=s("2724"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=a.a},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25720200116005",_inBundle:!1,_integrity:"sha512-RZFw3WAaS/CZTzzv9JPaWvmoNitojD/06vPdHSzlqZi8GbuE222lFuyochEjrGkG8rPPrWHAnwfoPBuQVtkfdg==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25720200116005.tgz",_shasum:"08bb17aba91c84a981f33d74153aa3dd07b578ad",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a129bde60de35f7ef497f43d5a45b4556231995c",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25720200116005"}},8999:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"Hello World"}},onLoad:function(){setTimeout(function(){uni.switchTab({url:"/pages/home/home"})},1e3,null)},methods:{}};e.default=i},"8bbf":function(t,e){t.exports=Vue},"921b":function(t,e,s){"use strict";var i=s("8189");function a(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?n(t):e}function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function d(t,e,s){return e&&l(t.prototype,e),s&&l(t,s),t}var _=i.version,f="https://tongji.dcloud.io/uni/stat",p="https://tongji.dcloud.io/uni/stat.gif",h=1800,v=300,g=10,m="__DC_STAT_UUID",y="__DC_UUID_VALUE";function $(){var t="";if("n"===x()){try{t=plus.runtime.getDCloudId()}catch(e){t=""}return t}try{t=uni.getStorageSync(m)}catch(e){t=y}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{uni.setStorageSync(m,t)}catch(e){uni.setStorageSync(m,y)}}return t}var w=function(t){var e=Object.keys(t),s=e.sort(),i={},a="";for(var n in s)i[s[n]]=t[s[n]],a+=s[n]+"="+t[s[n]]+"&";return{sign:"",options:a.substr(0,a.length-1)}},b=function(t){var e="";for(var s in t)e+=s+"="+t[s]+"&";return e.substr(0,e.length-1)},C=function(){return parseInt((new Date).getTime()/1e3)},x=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},S=function(){var t="";return"wx"!==x()&&"qq"!==x()||uni.canIUse("getAccountInfoSync")&&(t=uni.getAccountInfoSync().miniProgram.appId||""),t},k=function(){return"n"===x()?plus.runtime.version:""},D=function(){var t=x(),e="";return"n"===t&&(e=plus.runtime.channel),e},j=function(t){var e=x(),s="";return t||("wx"===e&&(s=uni.getLaunchOptionsSync().scene),s)},O="First__Visit__Time",q="Last__Visit__Time",T=function(){var t=uni.getStorageSync(O),e=0;return t?e=t:(e=C(),uni.setStorageSync(O,e),uni.removeStorageSync(q)),e},I=function(){var t=uni.getStorageSync(q),e=0;return e=t||"",uni.setStorageSync(q,C()),e},P="__page__residence__time",R=0,N=0,E=function(){return R=C(),"n"===x()&&uni.setStorageSync(P,C()),R},A=function(){return N=C(),"n"===x()&&(R=uni.getStorageSync(P)),N-R},B="Total__Visit__Count",M=function(){var t=uni.getStorageSync(B),e=1;return t&&(e=t,e++),uni.setStorageSync(B,e),e},U=function(t){var e={};for(var s in t)e[s]=encodeURIComponent(t[s]);return e},H=0,L=0,V=function(){var t=(new Date).getTime();return H=t,L=0,t},J=function(){var t=(new Date).getTime();return L=t,t},G=function(t){var e=0;if(0!==H&&(e=L-H),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var s=e>v;return{residenceTime:e,overtime:s}}if("page"===t){var i=e>h;return{residenceTime:e,overtime:i}}return{residenceTime:e}},W=function(){var t=getCurrentPages(),e=t[t.length-1],s=e.$vm;return"bd"===x()?s.$mp&&s.$mp.page.is:s.$scope&&s.$scope.route||s.$mp&&s.$mp.page.route},F=function(t){var e=getCurrentPages(),s=e[e.length-1],i=s.$vm,a=t._query,n=a&&"{}"!==JSON.stringify(a)?"?"+JSON.stringify(a):"";return t._query="","bd"===x()?i.$mp&&i.$mp.page.is+n:i.$scope&&i.$scope.route+n||i.$mp&&i.$mp.page.route+n},z=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},Z=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},X=s("ec05").default,K=s("2a76").default||s("2a76"),Q=uni.getSystemInfoSync(),Y=function(){function t(){u(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:$(),ut:x(),mpn:S(),ak:K.appid,usv:_,v:k(),ch:D(),cn:"",pn:"",ct:"",t:C(),tt:"",p:"android"===Q.platform?"a":"i",brand:Q.brand||"",md:Q.model,sv:Q.system.replace(/(Android|iOS)\s/,""),mpsdk:Q.SDKVersion||"",mpv:Q.version||"",lang:Q.language,pr:Q.pixelRatio,ww:Q.windowWidth,wh:Q.windowHeight,sw:Q.screenWidth,sh:Q.screenHeight}}return d(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){J();var t=G("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,J();var s=G();V();var i=F(this);this._sendHideRequest({urlref:i,urlref_ts:s.residenceTime},e)}},{key:"_pageShow",value:function(){var t=F(this),e=W();if(this._navigationBarTitle.config=X&&X.pages[e]&&X.pages[e].titleNView&&X.pages[e].titleNView.titleText||X&&X.pages[e]&&X.pages[e].navigationBarTitleText||"",this.__licationShow)return V(),this.__licationShow=!1,void(this._lastPageRoute=t);J(),this._lastPageRoute=t;var s=G("page");if(s.overtime){var i={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(i)}V()}},{key:"_pageHide",value:function(){if(!this.__licationHide){J();var t=G("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=C(),this.statData.sc=j(t.scene),this.statData.fvts=T(),this.statData.lvts=I(),this.statData.tvc=M(),"n"===x()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,s=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:s,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:C(),p:this.statData.p};this.request(a)}},{key:"_sendHideRequest",value:function(t,e){var s=t.urlref,i=t.urlref_ts,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:s,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:C(),p:this.statData.p};this.request(a,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,s=void 0===e?"":e,i=t.value,a=void 0===i?"":i,n=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:n,ch:this.statData.ch,e_n:s,e_v:"object"===typeof a?JSON.stringify(a):a.toString(),usv:this.statData.usv,t:C(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var t=this;uni.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;K.getLocation?uni.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,e){var s=this,i=C(),a=this._navigationBarTitle;t.ttn=a.page,t.ttpj=a.config,t.ttc=a.report;var n=this._reportingRequestData;if("n"===x()&&(n=uni.getStorageSync("__UNI__STAT__DATA")||{}),n[t.lt]||(n[t.lt]=[]),n[t.lt].push(t),"n"===x()&&uni.setStorageSync("__UNI__STAT__DATA",n),!(A()<g)||e){var r=this._reportingRequestData;"n"===x()&&(r=uni.getStorageSync("__UNI__STAT__DATA")),E();var o=[],c=[],u=[],l=function(t){var e=r[t];e.forEach(function(e){var s=b(e);0===t?o.push(s):3===t?u.push(s):c.push(s)})};for(var d in r)l(d);o.push.apply(o,c.concat(u));var f={usv:_,t:i,requests:JSON.stringify(o)};this._reportingRequestData={},"n"===x()&&uni.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==x()||"a"!==this.statData.p?this._sendRequest(f):setTimeout(function(){s._sendRequest(f)},200):this.imageRequest(f)}}},{key:"_sendRequest",value:function(t){var e=this;uni.request({url:f,method:"POST",data:t,success:function(){},fail:function(s){++e._retry<3&&setTimeout(function(){e._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,s=w(U(t)).options;e.src=p+"?"+s}},{key:"sendEvent",value:function(t,e){Z(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),t}(),tt=function(t){function e(){var t;return u(this,e),t=a(this,r(e).call(this)),t.instance=null,"function"===typeof uni.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return o(e,t),d(e,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),d(e,[{key:"addInterceptorInit",value:function(){var t=this;uni.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;uni.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var e=this;t?uni.addInterceptor("share",{success:function(){e._share()},fail:function(){e._share()}}):e._share()}},{key:"interceptRequestPayment",value:function(){var t=this;uni.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,E(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var s=getCurrentPages();e.$scope=s[s.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,z(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,z(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var s={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:C(),p:this.statData.p};this.request(s)}}]),e}(Y),et=tt.getInstance(),st=!1,it={onLaunch:function(t){et.report(t,this)},onReady:function(){et.ready(this)},onLoad:function(t){if(et.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return et.interceptShare(!1),e.call(this,t)}}},onShow:function(){st=!1,et.show(this)},onHide:function(){st=!0,et.hide(this)},onUnload:function(){st?st=!1:et.hide(this)},onError:function(t){et.error(t)}};function at(){var t=s("8bbf");(t.default||t).mixin(it),uni.report=function(t,e){et.sendEvent(t,e)}}at()},"9a13":function(t,e,s){"use strict";s.r(e);var i=s("4b72"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=a.a},"9cd9":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},methods:{}};e.default=i},ac6a:function(t,e,s){"use strict";s.r(e);var i=s("8999"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=a.a},b2aa:function(t,e,s){"use strict";s.r(e);var i=s("b400"),a=s("ac6a");for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);var r,o=s("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},b400:function(t,e,s){"use strict";var i,a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[s("text",{staticClass:t._$s(1,"sc","title"),attrs:{_i:1}},[t._v(t._$s(1,"t0",t._s(t.title)))])])},n=[];s.d(e,"b",function(){return a}),s.d(e,"c",function(){return n}),s.d(e,"a",function(){return i})},cde5:function(t,e,s){"use strict";var i,a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view")},n=[];s.d(e,"b",function(){return a}),s.d(e,"c",function(){return n}),s.d(e,"a",function(){return i})},d987:function(t,e,s){"use strict";s.r(e);var i=s("cde5"),a=s("e938");for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);var r,o=s("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},dbfd:function(t,e,s){"use strict";s.r(e);var i=s("56d8"),a=s("0e1a");for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);var r,o=s("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"d3bd5a74",null,!1,i["a"],r);e["default"]=c.exports},e5ee:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:6,height:6,bottom:30,color:"#fff",backgroundColor:"#cccccc",border:0,selectedBackgroundColor:"#ffffff",selectedBorder:0}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=Object.assign(this.dots,this.dotsStyles)}};e.default=i},e758:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{picture:["https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg","https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"],picture1:["https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg","https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg","https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg","https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg","https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"]}},methods:{}};e.default=i},e938:function(t,e,s){"use strict";s.r(e);var i=s("9cd9"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=a.a},ec05:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={pages:{},globalStyle:{}};e.default=i},ed19:function(t,e,s){"use strict";s.r(e);var i=s("7934"),a=s("2a25");for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);var r,o=s("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},efb1:function(t,e,s){"use strict";s.r(e);var i=s("0f78"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=a.a},f0c5:function(t,e,s){"use strict";function i(t,e,s,i,a,n,r,o,c,u){var l,d="function"===typeof t?t.options:t;if(c&&(d.components=Object.assign(c,d.components||{})),u&&((u.beforeCreate||(u.beforeCreate=[])).unshift(function(){this[u.__module]=this}),(d.mixins||(d.mixins=[])).push(u)),e&&(d.render=e,d.staticRenderFns=s,d._compiled=!0),i&&(d.functional=!0),n&&(d._scopeId="data-v-"+n),r?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=l):a&&(l=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(d.functional){d._injectStyles=l;var _=d.render;d.render=function(t,e){return l.call(e),_(t,e)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:d}}s.d(e,"a",function(){return i})}},[["1667","app-config"]]]);