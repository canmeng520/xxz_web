(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-set"],{"1f5c":function(t,e,a){"use strict";var n=a("22dd"),i=a.n(n);i.a},"22dd":function(t,e,a){var n=a("d354");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("17288a44",n,!0,{sourceMap:!1,shadowMode:!1})},4573:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){console.log("测试2")},a("caad"),a("2532");n(a("5829"))},5829:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return new Promise((function(t,e){e({message:"请在App中使用"})}))},a("d3b7")},"5f45":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/address/address")}}},[a("v-uni-text",{staticClass:"cell-tit"},[t._v("学习账号")]),a("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),a("v-uni-view",{staticClass:"list-cell",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.examine()}}},[a("v-uni-text",{staticClass:"cell-tit"},[t._v("检查更新")]),a("v-uni-text",{staticClass:"cell-tip"},[t._v("当前版本 1.1")]),a("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),a("v-uni-view",{staticClass:"list-cell log-out-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLogout.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cell-tit"},[t._v("退出登录")])],1)],1)},i=[]},"6e24":function(t,e,a){"use strict";a.r(e);var n=a("9f6f"),i=a.n(n);for(var l in n)["default"].indexOf(l)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(l);e["default"]=i.a},"7fc6":function(t,e,a){"use strict";a.r(e);var n=a("5f45"),i=a("6e24");for(var l in i)["default"].indexOf(l)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(l);a("1f5c");var c=a("f0c5"),o=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"8e9271aa",null,!1,n["a"],void 0);e["default"]=o.exports},"9f6f":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),l=n(a("4573")),c=a("26cb"),o={data:function(){return{}},methods:(0,i.default)((0,i.default)({},(0,c.mapMutations)(["logout"])),{},{navTo:function(t){uni.navigateTo({url:t}),this.$api.msg("跳转到".concat(t))},examine:function(){(0,l.default)()},toLogout:function(){var t=this;uni.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&(t.logout(),setTimeout((function(){uni.navigateBack()}),200))}})},switchChange:function(t){var e=t.detail.value?"打开":"关闭";this.$api.msg("".concat(e,"消息推送"))}})};e.default=o},d354:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-8e9271aa]{background:#f8f8f8}body.?%PAGE?%[data-v-8e9271aa]{background:#f8f8f8}.list-cell[data-v-8e9271aa]{display:flex;align-items:baseline;padding:%?20?% %?30?%;line-height:%?60?%;position:relative;background:#fff;justify-content:center}.list-cell.log-out-btn[data-v-8e9271aa]{margin-top:%?40?%}.list-cell.log-out-btn .cell-tit[data-v-8e9271aa]{color:#0af;text-align:center;margin-right:0}.list-cell.cell-hover[data-v-8e9271aa]{background:#fafafa}.list-cell.b-b[data-v-8e9271aa]:after{left:%?30?%}.list-cell.m-t[data-v-8e9271aa]{margin-top:%?16?%}.list-cell .cell-more[data-v-8e9271aa]{align-self:baseline;font-size:%?32?%;color:#909399;margin-left:%?10?%}.list-cell .cell-tit[data-v-8e9271aa]{flex:1;font-size:%?30?%;color:#303133;margin-right:%?10?%}.list-cell .cell-tip[data-v-8e9271aa]{font-size:%?28?%;color:#909399}.list-cell uni-switch[data-v-8e9271aa]{-webkit-transform:translateX(%?16?%) scale(.84);transform:translateX(%?16?%) scale(.84)}',""]),t.exports=e}}]);