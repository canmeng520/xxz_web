(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-list"],{"227f":function(t,a,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("4de4"),e("d3b7"),e("159b");var n=i(e("c7eb")),o=i(e("1da1")),r=e("cdd2"),s=i(e("52d2")),c={components:{uniLoadMore:s.default},data:function(){return{productCategoryId:0,cateMaskState:0,headerPosition:"fixed",headerTop:"0px",loadingType:"more",filterIndex:0,cateId:0,priceOrder:0,cateList:[],goodsList:[],pageSize:5}},onLoad:function(t){var a=t.productCategoryId;this.productCategoryId=a,this.cateId=t.tid,this.loadCateList(t.fid,t.sid),this.loadData()},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.loadData("refresh",1,5)},onReachBottom:function(){console.log("加载更多"),this.pageSize+=5,console.log(this.pageSize),this.loadData("more",1,this.pageSize)},methods:{loadCateList:function(t,a){var e=this;return(0,o.default)((0,n.default)().mark((function a(){var i,o;return(0,n.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$api.json("cateList");case 2:i=a.sent,o=i.filter((function(a){return a.pid==t})),o.forEach((function(t){var a=i.filter((function(a){return a.pid==t.id}));t.child=a})),e.cateList=o;case 6:case"end":return a.stop()}}),a)})))()},loadData:function(){var t=arguments,a=this;return(0,o.default)((0,n.default)().mark((function e(){var i,o,s,c;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=t.length>0&&void 0!==t[0]?t[0]:"add",o=t.length>1?t[1]:void 0,s=t.length>2?t[2]:void 0,uni.showLoading({title:"正在加载"}),c=a.productCategoryId,console.log(c),"add"!==i){e.next=13;break}if("nomore"!==a.loadingType){e.next=10;break}return uni.hideLoading(),e.abrupt("return");case 10:a.loadingType="loading",e.next=14;break;case 13:a.loadingType="more";case 14:1,0!=s&&void 0!=s||(s=5),1,"refresh"===i&&(a.goodsList=[]),(0,r.classiFicationSearch)(1,s,a.filterIndex,c).then((function(t){console.log(t.data);var e=t.data.list;a.goodsList=e,a.loadingType=t.data.total>5?"more":"nomore",console.log(a.loadingType),console.log(a.goodsList.length),"refresh"===i&&(1==o?(uni.hideLoading(),console.log("隐藏"),uni.hideLoading()):uni.stopPullDownRefresh()),s>=t.data.total&&(a.loadingType="nomore")})),uni.hideLoading();case 20:case"end":return e.stop()}}),e)})))()},tabClick:function(t){this.filterIndex===t&&2!==t||(this.filterIndex=t,this.priceOrder=2===t?1===this.priceOrder?2:1:0,uni.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),uni.showLoading({title:"正在加载"}))},toggleCateMask:function(t){var a=this,e="show"===t?10:300,i="show"===t?1:0;this.cateMaskState=2,setTimeout((function(){a.cateMaskState=i}),e)},changeCate:function(t){this.cateId=t.id,this.toggleCateMask(),uni.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),uni.showLoading({title:"正在加载"})},navToDetailPage:function(t){var a=t.id;uni.navigateTo({url:"/pages/product/product?id=".concat(a)})},stopPrevent:function(){}}};a.default=c},"35b4":function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"uni-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};a.default=i},3828:function(t,a,e){var i=e("6479");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("5bf10faa",i,!0,{sourceMap:!1,shadowMode:!1})},"3f17":function(t,a,e){"use strict";var i=e("d577"),n=e.n(i);n.a},"52d2":function(t,a,e){"use strict";e.r(a);var i=e("c51d"),n=e("ba27");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("3f17");var r=e("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"76b7c960",null,!1,i["a"],void 0);a["default"]=s.exports},"5b42":function(t,a,e){"use strict";var i=e("3828"),n=e.n(i);n.a},6479:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-24bc5454], .content[data-v-24bc5454]{background:#f8f8f8}body.?%PAGE?%[data-v-24bc5454]{background:#f8f8f8}.content[data-v-24bc5454]{padding-top:%?96?%}.navbar[data-v-24bc5454]{position:fixed;left:0;top:var(--window-top);display:flex;width:100%;height:%?80?%;background:#fff;box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06);z-index:10}.navbar .nav-item[data-v-24bc5454]{flex:1;display:flex;justify-content:center;align-items:center;height:100%;font-size:%?30?%;color:#303133;position:relative}.navbar .nav-item.current[data-v-24bc5454]{color:#1e5dcf}.navbar .nav-item.current[data-v-24bc5454]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?120?%;height:0;border-bottom:%?4?% solid #1e5dcf}.navbar .p-box[data-v-24bc5454]{display:flex;flex-direction:column}.navbar .p-box .yticon[data-v-24bc5454]{display:flex;align-items:center;justify-content:center;width:%?30?%;height:%?14?%;line-height:1;margin-left:%?4?%;font-size:%?26?%;color:#888}.navbar .p-box .yticon.active[data-v-24bc5454]{color:#fa436a}.navbar .p-box .xia[data-v-24bc5454]{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.navbar .cate-item[data-v-24bc5454]{display:flex;justify-content:center;align-items:center;height:100%;width:%?80?%;position:relative;font-size:%?44?%}.navbar .cate-item[data-v-24bc5454]:after{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);border-left:1px solid #ddd;width:0;height:%?36?%}\n/* 分类 */.cate-mask[data-v-24bc5454]{position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:transparent;z-index:95;transition:.3s}.cate-mask .cate-content[data-v-24bc5454]{width:%?630?%;height:100%;background:#fff;float:right;-webkit-transform:translateX(100%);transform:translateX(100%);transition:.3s}.cate-mask.none[data-v-24bc5454]{display:none}.cate-mask.show[data-v-24bc5454]{background:rgba(0,0,0,.4)}.cate-mask.show .cate-content[data-v-24bc5454]{-webkit-transform:translateX(0);transform:translateX(0)}.cate-list[data-v-24bc5454]{display:flex;flex-direction:column;height:100%}.cate-list .cate-item[data-v-24bc5454]{display:flex;align-items:center;height:%?90?%;padding-left:%?30?%;font-size:%?28?%;color:#555;position:relative}.cate-list .two[data-v-24bc5454]{height:%?64?%;color:#303133;font-size:%?30?%;background:#f8f8f8}.cate-list .active[data-v-24bc5454]{color:#fa436a}\n/* 商品列表 */.goods-list[data-v-24bc5454]{display:flex;flex-wrap:wrap;padding:0 %?30?%}.goods-list .goods-item[data-v-24bc5454]{display:flex;flex-direction:column;width:48%;padding-bottom:%?40?%}.goods-list .goods-item[data-v-24bc5454]:nth-child(2n+1){margin-right:4%}.goods-list .image-wrapper[data-v-24bc5454]{width:100%;height:%?330?%;border-radius:3px;overflow:hidden}.goods-list .image-wrapper uni-image[data-v-24bc5454]{width:100%;height:100%;opacity:1}.goods-list .title[data-v-24bc5454]{font-size:%?32?%;color:#303133;line-height:%?80?%}.goods-list .price-box[data-v-24bc5454]{display:flex;align-items:center;justify-content:space-between;padding-right:%?10?%;font-size:%?24?%;color:#909399}.goods-list .price[data-v-24bc5454]{font-size:%?32?%;color:#fa436a;line-height:1}.goods-list .price[data-v-24bc5454]:before{content:"￥";font-size:%?26?%}',""]),t.exports=a},"7cc0":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var i={uniLoadMore:e("52d2").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"navbar",style:{position:t.headerPosition,top:t.headerTop}},[e("v-uni-view",{staticClass:"nav-item",class:{current:0===t.filterIndex},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabClick(0)}}},[t._v("综合排序")]),e("v-uni-view",{staticClass:"nav-item",class:{current:2===t.filterIndex},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabClick(2)}}},[t._v("销量优先")]),e("v-uni-view",{staticClass:"nav-item",class:{current:3===t.filterIndex},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabClick(3)}}},[e("v-uni-text",[t._v("价格")]),e("v-uni-view",{staticClass:"p-box"},[e("v-uni-text",{staticClass:"yticon icon-shang",class:{active:1===t.priceOrder&&3===t.filterIndex}}),e("v-uni-text",{staticClass:"yticon icon-shang xia",class:{active:2===t.priceOrder&&3===t.filterIndex}})],1)],1)],1),e("v-uni-view",{staticClass:"goods-list"},t._l(t.goodsList,(function(a,i){return e("v-uni-view",{key:i,staticClass:"goods-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage(a)}}},[e("v-uni-view",{staticClass:"image-wrapper"},[e("v-uni-image",{attrs:{src:a.pic,mode:"aspectFill"}})],1),e("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(a.name))]),e("v-uni-view",{staticClass:"price-box"},[e("v-uni-text",{staticClass:"price"},[t._v(t._s(a.price))])],1)],1)})),1),e("uni-load-more",{attrs:{status:t.loadingType}}),e("v-uni-view",{staticClass:"cate-mask",class:0===t.cateMaskState?"none":1===t.cateMaskState?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toggleCateMask.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cate-content",on:{click:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),t.stopPrevent.apply(void 0,arguments)},touchmove:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),t.stopPrevent.apply(void 0,arguments)}}},[e("v-uni-scroll-view",{staticClass:"cate-list",attrs:{"scroll-y":!0}},t._l(t.cateList,(function(a){return e("v-uni-view",{key:a.id},[e("v-uni-view",{staticClass:"cate-item b-b two"},[t._v(t._s(a.name))]),t._l(a.child,(function(a){return e("v-uni-view",{key:a.id,staticClass:"cate-item b-b",class:{active:a.id==t.cateId},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeCate(a)}}},[t._v(t._s(a.name))])}))],2)})),1)],1)],1)],1)},o=[]},"889b":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".uni-load-more[data-v-76b7c960]{display:flex;flex-direction:row;height:%?80?%;align-items:center;justify-content:center}.uni-load-more__text[data-v-76b7c960]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-76b7c960]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>uni-view[data-v-76b7c960]{position:absolute}.uni-load-more__img>uni-view uni-view[data-v-76b7c960]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-76b7c960 1.56s ease infinite;animation:load-data-v-76b7c960 1.56s ease infinite}.uni-load-more__img>uni-view uni-view[data-v-76b7c960]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-76b7c960]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>uni-view uni-view[data-v-76b7c960]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-76b7c960]:nth-child(4){top:11px;left:0}.load1[data-v-76b7c960],\n.load2[data-v-76b7c960],\n.load3[data-v-76b7c960]{height:24px;width:24px}.load2[data-v-76b7c960]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-76b7c960]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-76b7c960]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-76b7c960]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-76b7c960]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-76b7c960]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-76b7c960]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-76b7c960]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-76b7c960]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-76b7c960]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-76b7c960]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-76b7c960]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-76b7c960]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-76b7c960]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-76b7c960{0%{opacity:1}100%{opacity:.2}}",""]),t.exports=a},"9b56":function(t,a,e){"use strict";e.r(a);var i=e("7cc0"),n=e("aba0");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("5b42");var r=e("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"24bc5454",null,!1,i["a"],void 0);a["default"]=s.exports},aba0:function(t,a,e){"use strict";e.r(a);var i=e("227f"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},ba27:function(t,a,e){"use strict";e.r(a);var i=e("35b4"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},c51d:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-load-more"},[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[e("v-uni-view",{staticClass:"load1"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load2"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load3"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1)],1),e("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},n=[]},cdd2:function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.Search=function(t,a,e,n){return(0,i.request_Get)("/product/search?keyword="+e+"&pageNum="+t+"&pageSize="+a+"&sort="+n)},a.classiFicationSearch=function(t,a,e,n){return(0,i.request_Get)("/product/search?pageNum="+t+"&pageSize="+a+"&sort="+e+"&productCategoryId="+n)},a.getGoodClassify=function(){return(0,i.request_Get)("/product/categoryTreeList")},a.getGoodInfo=function(t){return(0,i.request_Get)("/product/detail/"+t)};var i=e("aba4")},d577:function(t,a,e){var i=e("889b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("7f5143cb",i,!0,{sourceMap:!1,shadowMode:!1})}}]);