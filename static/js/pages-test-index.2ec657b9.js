(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-test-index"],{"0d62":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uSticky:i("9bbd").default,uTabs:i("0d0d").default,uniCard:i("f52d").default,uRow:i("e966").default,uCol:i("c68c").default,uText:i("883b").default,uButton:i("73fa").default,uEmpty:i("a08b").default},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("u-sticky",{attrs:{bgColor:"#fff"}},[i("u-tabs",{attrs:{list:t.tabs,lineWidth:"30",lineColor:"#55aaff",activeStyle:{color:"#303133",fontWeight:"bold",transform:"scale(1.05)"},inactiveStyle:{color:"#606266",transform:"scale(1)"},itemStyle:"padding-left: 15px; padding-right: 15px; height: 34px;"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick.apply(void 0,arguments)}}})],1),i("uni-card",{staticStyle:{background:"-webkit-gradient(linear,0 0,100% 100%,from(#55aaff),to(#5555ff))"},attrs:{title:"",thumbnail:"/static/temp/class.png"}},[i("u-row",[i("u-col",{attrs:{span:"7"}},[i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticStyle:{width:"150px"}},[i("u-text",{attrs:{color:"#fff",lines:1,text:t.classList[t.currentIndex].course.name}})],1)],1)],1),i("u-col",{attrs:{span:"5"}},[i("v-uni-view",{staticClass:"classNum"},[t._v("班课号："+t._s(t.classList[t.currentIndex].invitationCode))])],1)],1),i("v-uni-view",{staticClass:"resource margin-top-sm"},[i("u-row",[i("u-col",{attrs:{span:"7"}},[i("v-uni-view",{staticClass:"resourceTitle"},[t._v("资源总数 ："),i("v-uni-view",{staticClass:"resourceNum"},[t._v(t._s(t.testList.length))])],1)],1),i("u-col",{attrs:{span:"5"}},[i("v-uni-view",{staticClass:"resourceTitle"},[t._v("已结束 ："),i("v-uni-view",{staticClass:"resourceNum"},[t._v(t._s(t.finishNum()))])],1)],1)],1),i("v-uni-view",{staticClass:"btn-accomplish margin-top"},[t.testList.length!=t.finishNum()?i("u-button",{attrs:{type:"success",icon:"checkmark",text:"一键完成"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/test/answer?userName="+t.user+"&passWord="+t.passWord+"&id="+t.item.id)}}}):i("u-button",{attrs:{color:"rgba(0,0,0,0.1)",disabled:!0,icon:"checkmark",text:"一键完成"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/test/answer?userName="+t.user+"&passWord="+t.passWord+"&id="+t.item.id)}}})],1)],1)],1),t.testList.length>0?i("v-uni-view",t._l(t.testList,(function(e,n){return i("v-uni-view",{key:n},[i("uni-card",{class:{"bg-error":"END"==e.status},attrs:{title:e.title,"sub-title":e.operater.fullName,extra:"题目总数："+e.topicCount,thumbnail:"https://static-cdn-oss.mosoteach.cn/mssvc/icons/icon_cc_cover1_4@2x.png"}},[i("u-row",[i("u-col",{attrs:{span:"6"}},[i("u-button",{attrs:{type:"primary",icon:"search",text:"查看答案"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/test/answer?userName="+t.user+"&passWord="+t.passWord+"&id="+e.id)}}})],1),i("u-col",{attrs:{span:"4",offset:"1"}},[i("u-button",{attrs:{type:"success",icon:"checkmark",text:"一键完成"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/test/answer?userName="+t.user+"&passWord="+t.passWord+"&id="+e.id)}}})],1)],1)],1)],1)})),1):i("v-uni-view",[i("u-empty",{attrs:{text:"空空如也",mode:"data",icon:"http://cdn.uviewui.com/uview/empty/data.png"}})],1)],1)},a=[]},1055:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"u-sticky",style:[this.style],attrs:{id:this.elId}},[e("v-uni-view",{staticClass:"u-sticky__content",style:[this.stickyContent]},[this._t("default")],2)],1)},s=[]},1564:function(t,e,i){"use strict";i.r(e);var n=i("5339"),s=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a},"1b87":function(t,e,i){"use strict";i.r(e);var n=i("4b42"),s=i("1564");for(var a in s)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(a);i("2c9c");var o=i("f0c5"),r=Object(o["a"])(s["default"],n["b"],n["c"],!1,null,"4b4de156",null,!1,n["a"],void 0);e["default"]=r.exports},"1de5":function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"23d0":function(t,e,i){var n=i("6313");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("f566a5ae",n,!0,{sourceMap:!1,shadowMode:!1})},"292e":function(t,e,i){"use strict";i.r(e);var n=i("7dd9"),s=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a},"2c9c":function(t,e,i){"use strict";var n=i("23d0"),s=i.n(n);s.a},"4b42":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"_tab-box",style:{fontSize:t.defaultConfig.fontSize+"rpx",color:t.defaultConfig.color}},[i("v-uni-scroll-view",{staticClass:"scroll-view-h",attrs:{id:"_scroll","scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.slider.scrollLeft}},[i("v-uni-view",{staticClass:"_scroll-content"},[i("v-uni-view",{staticClass:"_tab-item-box",class:[t.defaultConfig.itemWidth?"_clamp":"_flex"]},[t._l(t.tabList,(function(e,n){return[i("v-uni-view",{key:n+"_0",staticClass:"_item",class:{_active:t.tagIndex===n},style:{color:t.tagIndex==n?t.defaultConfig.activeColor:t.defaultConfig.color,width:t.defaultConfig.itemWidth?t.defaultConfig.itemWidth+"rpx":""},attrs:{id:"_tab_"+n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(n)}}},[t._v(t._s(e[t.defaultConfig.key]||e))])]}))],2),i("v-uni-view",{staticClass:"_underline",style:{transform:"translateX("+t.slider.left+"px)",width:t.slider.width+"px",height:t.defaultConfig.underLineHeight+"rpx",backgroundColor:t.defaultConfig.underLineColor}})],1)],1)],1)},s=[]},5339:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("d3b7"),i("159b"),i("14d9"),i("e9c4"),i("ac1f");var n={name:"liuyuno-tabs",props:{tabData:{type:Array,default:function(){return[]}},activeIndex:{type:Number,default:0},config:{type:Object,default:function(){return{}}}},data:function(){return{tabList:[],tagIndex:0,slider:{left:0,width:0,scrollLeft:0},scorll:{},defaultConfig:{key:"name",fontSize:26,color:"#313131",activeColor:"#e54d42",itemWidth:0,underLinePadding:10,underLineWidth:0,underLineHeight:4,underLineColor:"#e54d42"}}},watch:{tabData:function(t){var e=this;this.updateData(),setTimeout((function(){e.updateTabWidth()}),0)},config:function(t){this.updateConfig()}},mounted:function(){var t=this;this.updateConfig(),this.updateData(),this.tagIndex=this.activeIndex,this.$nextTick((function(){t.calcScrollPosition()}))},methods:{updateData:function(){var t=[];"string"==typeof this.tabData[0]?(this.tabData.forEach((function(e,i){t.push({name:e})})),this.defaultConfig.key="name"):t=JSON.parse(JSON.stringify(this.tabData)),this.tabList=t},updateConfig:function(){this.defaultConfig=Object.assign(this.defaultConfig,this.config)},calcScrollPosition:function(){var t=this,e=uni.createSelectorQuery().in(this);e.select("#_scroll").boundingClientRect((function(e){t.scorll=e,t.updateTabWidth()})).exec()},updateTabWidth:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=this.tabList;if(0==i.length)return!1;var n=uni.createSelectorQuery().in(this);n.select("#_tab_"+e).boundingClientRect((function(n){i[e]._slider={width:n.width,left:n.left,scrollLeft:n.left-(i[e-1]?i[e-1]._slider.width:0)},t.tagIndex==e&&t.tabToIndex(t.tagIndex),e++,i.length>e&&t.updateTabWidth(e)})).exec()},tabToIndex:function(t){var e=this.tabList[t]._slider,i=uni.upx2px(this.defaultConfig.underLineWidth);i||(i=this.defaultConfig.itemWidth?uni.upx2px(this.defaultConfig.itemWidth):this.tabList[t][this.defaultConfig.key].length*uni.upx2px(this.defaultConfig.fontSize),i+=2*uni.upx2px(this.defaultConfig.underLinePadding));var n=this.scorll.left||0;this.slider={left:e.left-n+(e.width-i)/2,width:i,scrollLeft:e.scrollLeft-n}},tabClick:function(t){this.tagIndex=t,this.tabToIndex(t),this.$emit("tabClick",t)}}};e.default=n},5958:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.getTest=function(t,e,i){return(0,n.request_post)("/test/gettest?Password="+e+"&id="+i+"&userName="+t)},e.getTestByName=function(t){return(0,n.request_post)("/test/getanswerbyname?title="+t)},e.getactivitiesbyid=function(t,e,i){return(0,n.request_post)("/test/getactivitiesbyid?Password="+e+"&id="+i+"&userName="+t)},e.getanswer=function(t,e,i){return(0,n.request_post)("/test/getanswer?Password="+e+"&id="+i+"&userName="+t)},e.getclass=function(t,e){return(0,n.request_post)("/test/getclass?Password="+e+"&userName="+t)};var n=i("aba4")},"5b4c":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(i("c7eb")),a=n(i("1da1"));i("2c3e"),i("ac1f"),i("00b4"),i("e25e"),i("a9e3");var o=n(i("bb0e")),r={name:"u-sticky",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{cssSticky:!1,stickyTop:0,elId:uni.$u.guid(),left:0,width:"auto",height:"auto",fixed:!1}},computed:{style:function(){var t={};return this.disabled?t.position="static":this.cssSticky?(t.position="sticky",t.zIndex=this.uZindex,t.top=uni.$u.addUnit(this.stickyTop)):t.height=this.fixed?this.height+"px":"auto",t.backgroundColor=this.bgColor,uni.$u.deepMerge(uni.$u.addStyle(this.customStyle),t)},stickyContent:function(){var t={};return this.cssSticky||(t.position=this.fixed?"fixed":"static",t.top=this.stickyTop+"px",t.left=this.left+"px",t.width="auto"==this.width?"auto":this.width+"px",t.zIndex=this.uZindex),t},uZindex:function(){return this.zIndex?this.zIndex:uni.$u.zIndex.sticky}},mounted:function(){this.init()},methods:{init:function(){this.getStickyTop(),this.checkSupportCssSticky(),this.cssSticky||!this.disabled&&this.initObserveContent()},initObserveContent:function(){var t=this;this.$uGetRect("#"+this.elId).then((function(e){t.height=e.height,t.left=e.left,t.width=e.width,t.$nextTick((function(){t.observeContent()}))}))},observeContent:function(){var t=this;this.disconnectObserver("contentObserver");var e=uni.createIntersectionObserver({thresholds:[.95,.98,1]});e.relativeToViewport({top:-this.stickyTop}),e.observe("#".concat(this.elId),(function(e){t.setFixed(e.boundingClientRect.top)})),this.contentObserver=e},setFixed:function(t){var e=t<=this.stickyTop;this.fixed=e},disconnectObserver:function(t){var e=this[t];e&&e.disconnect()},getStickyTop:function(){/rpx$/.test(this.customNavHeight)?this.stickyTop=parseInt(this.offsetTop)+parseInt(uni.rpx2px(this.customNavHeight)):this.stickyTop=parseInt(this.offsetTop)+parseInt(this.customNavHeight)},checkSupportCssSticky:function(){var t=this;return(0,a.default)((0,s.default)().mark((function e(){return(0,s.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.checkCssStickyForH5()&&(t.cssSticky=!0),"android"===uni.$u.os()&&Number(uni.$u.sys().system)>8&&(t.cssSticky=!0),"ios"===uni.$u.os()&&(t.cssSticky=!0);case 3:case"end":return e.stop()}}),e)})))()},checkComputedStyle:function(){},checkCssStickyForH5:function(){for(var t=["","-webkit-","-ms-","-moz-","-o-"],e=t.length,i=document.createElement("div"),n=0;n<e;n++)if(i.style.position=t[n]+"sticky",""!==i.style.position)return!0;return!1}},beforeDestroy:function(){this.disconnectObserver("contentObserver")}};e.default=r},"5b77":function(t,e,i){var n=i("7dee");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("43cf628c",n,!0,{sourceMap:!1,shadowMode:!1})},6313:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */._tab-box[data-v-4b4de156]{width:100%;display:flex;font-size:%?26?%;position:relative;height:%?90?%;line-height:%?90?%;z-index:10}._tab-box .scroll-view-h[data-v-4b4de156]{white-space:nowrap;width:100%;height:100%;box-sizing:border-box}._tab-box .scroll-view-h ._scroll-content[data-v-4b4de156]{width:100%;height:100%;position:relative}._tab-box .scroll-view-h ._scroll-content ._tab-item-box[data-v-4b4de156]{height:100%}._tab-box .scroll-view-h ._scroll-content ._tab-item-box._flex[data-v-4b4de156]{display:flex}._tab-box .scroll-view-h ._scroll-content ._tab-item-box._flex ._item[data-v-4b4de156]{flex:1}._tab-box .scroll-view-h ._scroll-content ._tab-item-box._clamp ._item[data-v-4b4de156]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._tab-box .scroll-view-h ._scroll-content ._tab-item-box ._item[data-v-4b4de156]{height:100%;display:inline-block;text-align:center;padding:0 %?30?%;position:relative;text-align:center;color:#333}._tab-box .scroll-view-h ._scroll-content ._tab-item-box ._item._active[data-v-4b4de156]{color:#e54d42}._tab-box .scroll-view-h ._scroll-content ._underline[data-v-4b4de156]{height:%?4?%;background-color:#e54d42;border-radius:%?6?%;transition:.5s;position:absolute;bottom:0}',""]),t.exports=e},6762:function(t,e,i){t.exports=i.p+"static/img/bg-error.65f3d023.png"},"6c2e":function(t,e,i){"use strict";i.r(e);var n=i("0d62"),s=i("292e");for(var a in s)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(a);i("9dfb");var o=i("f0c5"),r=Object(o["a"])(s["default"],n["b"],n["c"],!1,null,"40bf2b3c",null,!1,n["a"],void 0);e["default"]=r.exports},"7dd9":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d3b7"),i("159b"),i("14d9");var s=n(i("1b87")),a=i("5958"),o={components:{liuyunoTabs:s.default},data:function(){return{list4:[{name:"毛泽东思想"},{name:"应用文写作"},{name:"大学体育"},{name:"职业生涯规划"}],theHeightAfterComputed:4e3,currentIndex:0,user:"",passWord:"",classList:[],testList:[],defaultConfig:{key:"name",fontSize:26,color:"#313131",activeColor:"#e54d42",itemWidth:0,underLinePadding:10,underLineWidth:0,underLineHeight:4,underLineColor:"#e54d42"},tabs:[]}},onLoad:function(t){uni.showLoading({title:"加载中"}),this.user=t.userName,this.passWord=t.passWord,void 0!=this.user&&void 0!=this.passWord||uni.switchTab({url:"/pages/index/index"}),this.loadData()},methods:{currentChange:function(t){var e=this;this.currentIndex=t.detail.current;var i=this.classList[this.currentIndex].id;console.log(i),(0,a.getactivitiesbyid)(this.user,this.passWord,i).then((function(t){e.testList=JSON.parse(t.data).data,console.log(e.testList)}))},tabClick:function(t){var e=this;uni.showLoading({title:"加载中"}),this.currentIndex=t.index;var i=this.classList[this.currentIndex].id;console.log(i),console.log(this.classList),(0,a.getactivitiesbyid)(this.user,this.passWord,i).then((function(t){e.testList=JSON.parse(t.data).data,console.log(e.testList),uni.hideLoading()})),console.log(t)},loadData:function(){var t=this;(0,a.getclass)(this.user,this.passWord).then((function(e){if("会员已到期"==e.message&&uni.navigateTo({url:"/pages/vip/vip"}),200==e.code){t.classList=JSON.parse(e.data).data,console.log(t.classList),console.log(t.classList[0]),t.classList.forEach((function(e){t.tabs.push({id:e.id,name:e.course.name})}));var i=t.tabs[0].id;(0,a.getactivitiesbyid)(t.user,t.passWord,i).then((function(e){console.log(JSON.parse(e.data).data),t.testList=JSON.parse(e.data).data,console.log(t.testList)}))}uni.hideLoading()}))},navTo:function(t){var e=uni.getStorageSync("loginToken");""==e&&(t="/pages/public/login"),uni.navigateTo({url:t})},finishNum:function(){var t=this.testList,e=0;return t.forEach((function(t){"END"==t.status&&(e+=1)})),e}}};e.default=o},"7dee":function(t,e,i){var n=i("24fb"),s=i("1de5"),a=i("6762");e=n(!1);var o=s(a);e.push([t.i,".title[data-v-40bf2b3c]{color:#fff;font-weight:20;font-size:18px}.classNum[data-v-40bf2b3c]{color:#fff}.resourceNum[data-v-40bf2b3c]{color:#af0}.resourceTitle[data-v-40bf2b3c]{color:#fff;display:flex}.bg-error[data-v-40bf2b3c]{background-image:url("+o+");background-size:100% 100%;height:160px}",""]),t.exports=e},"9bbd":function(t,e,i){"use strict";i.r(e);var n=i("1055"),s=i("a6a2");for(var a in s)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(a);i("ca4a");var o=i("f0c5"),r=Object(o["a"])(s["default"],n["b"],n["c"],!1,null,"194f7158",null,!1,n["a"],void 0);e["default"]=r.exports},"9dfb":function(t,e,i){"use strict";var n=i("5b77"),s=i.n(n);s.a},a6a2:function(t,e,i){"use strict";i.r(e);var n=i("5b4c"),s=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a},aaca:function(t,e,i){var n=i("ea0b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("52e72bfa",n,!0,{sourceMap:!1,shadowMode:!1})},bb0e:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("2c3e");var n={props:{offsetTop:{type:[String,Number],default:uni.$u.props.sticky.offsetTop},customNavHeight:{type:[String,Number],default:44},disabled:{type:Boolean,default:uni.$u.props.sticky.disabled},bgColor:{type:String,default:uni.$u.props.sticky.bgColor},zIndex:{type:[String,Number],default:uni.$u.props.sticky.zIndex},index:{type:[String,Number],default:uni.$u.props.sticky.index}}};e.default=n},ca4a:function(t,e,i){"use strict";var n=i("aaca"),s=i.n(n);s.a},ea0b:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */',""]),t.exports=e}}]);