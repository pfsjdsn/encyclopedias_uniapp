(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/user_space/user_space_head"],{"0686":function(n,t,e){"use strict";var o;e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return o}));var u=function(){var n=this,t=n.$createElement;n._self._c},r=[]},"096a":function(n,t,e){"use strict";e.r(t);var o=e("7d35"),u=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,(function(){return o[n]}))}(r);t["default"]=u.a},"145d":function(n,t,e){},"49ea":function(n,t,e){"use strict";e.r(t);var o=e("0686"),u=e("096a");for(var r in u)"default"!==r&&function(n){e.d(t,n,(function(){return u[n]}))}(r);e("e2ff");var s,c=e("f0c5"),i=Object(c["a"])(u["default"],o["b"],o["c"],!1,null,"bc6f7c86",null,!1,o["a"],s);t["default"]=i.exports},"7d35":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){e.e("components/common/tag_sex_age").then(function(){return resolve(e("4fb8"))}.bind(null,e)).catch(e.oe)},u={components:{tagSexAge:o},props:{userInfo:Object},data:function(){return{isFollow:this.userInfo.isFollow,newBgImg:this.userInfo.newBgImg}},computed:{getBgImg:function(){return"../../static/bgimg/"+this.userInfo.bgImg+".jpg"}},methods:{changeBgImg:function(){console.log("切换背景");var n=parseInt(this.userInfo.bgImg);this.userInfo.bgImg=n<4?++n:1,this.newBgImg="../../static/bgimg/"+this.userInfo.bgImg+".jpg"},doFollow:function(){this.isFollow=!this.isFollow}}};t.default=u},e2ff:function(n,t,e){"use strict";var o=e("145d"),u=e.n(o);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/user_space/user_space_head-create-component',
    {
        'components/user_space/user_space_head-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("49ea"))
        })
    },
    [['components/user_space/user_space_head-create-component']]
]);
