(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-orderInfo"],{"47d8":function(t,a,e){"use strict";e.r(a);var i=e("b768"),n=e("7a75");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("f895");var r=e("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"aa79c086",null,!1,i["a"],void 0);a["default"]=c.exports},"54e5":function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e("f6bd"),n={data:function(){return{pro:[{name:"蒙老师",address:"北京路",mobile:"13458762154",r:"朱",clamp:"视频学习",price:"1788.00",number:"1",num:"DC10167350424174",discount:"0",freight:"免运费",mode:"送货上门",remarks:"",state:"退款成功"}],numList:[{name:"待付款"},{name:"待发货"},{name:"已发货"},{name:"已完成"},{name:"已关闭"}],orderInfoList:{},id:null}},filters:{formatType:function(t){switch(t){case 0:return"未支付";case 1:return"支付宝支付";case 2:return"微信支付";case 3:return"余额支付"}}},onLoad:function(t){this.loadData(t.id),this.id=t.id},methods:{loadData:function(t){var a=this;(0,i.detail)(t).then((function(t){console.log(t),a.orderInfoList=t.data}))},buy:function(){uni.redirectTo({url:"/pages/money/pay?id="+this.id})},navTo:function(t){var a=uni.getStorageSync("loginToken");""==a&&(t="/pages/public/login"),uni.navigateTo({url:t})}}};a.default=n},"7a75":function(t,a,e){"use strict";e.r(a);var i=e("54e5"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"7fe9":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-aa79c086]{background:#f8f8f8;padding-bottom:%?100?%}body.?%PAGE?%[data-v-aa79c086]{background:#f8f8f8}.tuanzhang[data-v-aa79c086]{background:#fff;margin-top:10px;padding:10px;display:flex;font-size:12px}.tuanzhang .tz-l[data-v-aa79c086]{width:30px}.tuanzhang .tz-l uni-input[data-v-aa79c086]{border:1px solid #000}.tuanzhang .tz-m[data-v-aa79c086]{flex-grow:1;color:#ff8d42;padding-top:2px}.tuanzhang .tz-r[data-v-aa79c086]{padding-top:3px}.ptcg[data-v-aa79c086]{display:flex;padding:10px 10px;color:#909399;font-size:12px;line-height:30px}.ptcg .ptcg_l[data-v-aa79c086]{font-size:14px}.ptcg .ptcg_r[data-v-aa79c086]{display:flex;line-height:30px;position:relative;flex-grow:1;text-align:right}.ptcg .ptcg_r .ptcg_img[data-v-aa79c086]{z-index:99;position:absolute;top:0}.ptcg .ptcg_r .ptcg_img .img[data-v-aa79c086]{width:30px;height:30px;border-radius:50%}.action-box[data-v-aa79c086]{display:flex;justify-content:flex-end;align-items:center;height:%?100?%;position:relative;padding-right:%?30?%}.action-btn[data-v-aa79c086]{width:%?160?%;height:%?60?%;margin:0;margin-left:%?24?%;padding:0;text-align:center;line-height:%?60?%;font-size:%?26?%;color:#303133;background:#fff;border-radius:100px}.action-btn[data-v-aa79c086]:after{border-radius:100px}.action-btn.recom[data-v-aa79c086]{background:#fff9f9;color:#fa436a}.action-btn.recom[data-v-aa79c086]:after{border-color:#f7bcc8}.btn[data-v-aa79c086]{display:flex;justify-content:flex-end;margin-top:10px;font-size:%?30?%;text-align:center}.btn .btn_1[data-v-aa79c086]{border:1px solid #3ab54a;margin:10px;width:20%;height:30px;line-height:25px;border-radius:5px;background-color:#3ab54a;color:#f3f3f3}.btn .btn_2[data-v-aa79c086]{margin:10px;width:15%;height:30px;line-height:25px;border-radius:5px;background-color:#999;color:#f3f3f3}.address-section[data-v-aa79c086]{padding:%?30?% 0;background:#fff;position:relative}.address-section .order-content[data-v-aa79c086]{display:flex;align-items:center}.address-section .icon-shouhuodizhi[data-v-aa79c086]{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:%?90?%;color:#888;font-size:%?44?%}.address-section .cen[data-v-aa79c086]{display:flex;flex-direction:column;flex:1;font-size:%?28?%;color:#303133}.address-section .name[data-v-aa79c086]{font-size:%?34?%;margin-right:%?24?%}.address-section .address[data-v-aa79c086]{margin-top:%?16?%;margin-right:%?20?%;color:#909399}.address-section .icon-you[data-v-aa79c086]{font-size:%?32?%;color:#909399;margin-right:%?30?%}.address-section .a-bg[data-v-aa79c086]{position:absolute;left:0;bottom:0;display:block;width:100%;height:%?5?%}.goods-section[data-v-aa79c086]{margin-top:%?16?%;background:#fff;padding-bottom:1px}.goods-section .g-header[data-v-aa79c086]{display:flex;align-items:center;height:%?84?%;padding:0 %?30?%;position:relative}.goods-section .logo[data-v-aa79c086]{display:block;width:%?50?%;height:%?50?%;border-radius:100px}.goods-section .name[data-v-aa79c086]{font-size:%?30?%;color:#606266;margin-left:%?24?%}.goods-section .g-item[data-v-aa79c086]{display:flex;margin:%?20?% %?30?%}.goods-section .g-item uni-image[data-v-aa79c086]{flex-shrink:0;display:block;width:%?140?%;height:%?140?%;border-radius:%?4?%}.goods-section .g-item .right[data-v-aa79c086]{flex:1;padding-left:%?24?%;overflow:hidden}.goods-section .g-item .title[data-v-aa79c086]{font-size:%?30?%;color:#303133}.goods-section .g-item .spec[data-v-aa79c086]{font-size:%?26?%;color:#909399}.goods-section .g-item .price-box[data-v-aa79c086]{display:flex;align-items:center;font-size:%?32?%;color:#303133;padding-top:%?10?%}.goods-section .g-item .price-box .price[data-v-aa79c086]{margin-bottom:%?4?%}.goods-section .g-item .price-box .number[data-v-aa79c086]{font-size:%?26?%;color:#606266;margin-left:%?20?%}.goods-section .g-item .step-box[data-v-aa79c086]{position:relative}.yt-list[data-v-aa79c086]{margin-top:%?16?%;background:#fff}.yt-list-cell[data-v-aa79c086]{display:flex;align-items:center;padding:%?10?% %?30?% %?10?% %?40?%;line-height:%?70?%;position:relative}.yt-list-cell.cell-hover[data-v-aa79c086]{background:#fafafa}.yt-list-cell.b-b[data-v-aa79c086]:after{left:%?30?%}.yt-list-cell .cell-icon[data-v-aa79c086]{height:%?32?%;width:%?32?%;font-size:%?22?%;color:#fff;text-align:center;line-height:%?32?%;background:#f85e52;border-radius:%?4?%;margin-right:%?12?%}.yt-list-cell .cell-icon.hb[data-v-aa79c086]{background:#ffaa0e}.yt-list-cell .cell-icon.lpk[data-v-aa79c086]{background:#3ab54a}.yt-list-cell .cell-more[data-v-aa79c086]{align-self:center;font-size:%?24?%;color:#909399;margin-left:%?8?%;margin-right:%?-10?%}.yt-list-cell .cell-tit[data-v-aa79c086]{flex:1;font-size:%?26?%;color:#909399;margin-right:%?10?%}.yt-list-cell .cell-tip[data-v-aa79c086]{font-size:%?26?%;color:#303133}.yt-list-cell .cell-tip.disabled[data-v-aa79c086]{color:#909399}.yt-list-cell .cell-tip.active[data-v-aa79c086]{color:#fa436a}.yt-list-cell .cell-tip.red[data-v-aa79c086]{color:#fa436a}.yt-list-cell.desc-cell .cell-tit[data-v-aa79c086]{max-width:%?90?%}.yt-list-cell .desc[data-v-aa79c086]{flex:1;font-size:%?28?%;color:#303133}\n/* 支付列表 */.pay-list[data-v-aa79c086]{padding-left:%?40?%;margin-top:%?16?%;background:#fff}.pay-list .pay-item[data-v-aa79c086]{display:flex;align-items:center;padding-right:%?20?%;line-height:1;height:%?110?%;position:relative}.pay-list .icon-weixinzhifu[data-v-aa79c086]{width:%?80?%;font-size:%?40?%;color:#6bcc03}.pay-list .icon-alipay[data-v-aa79c086]{width:%?80?%;font-size:%?40?%;color:#06b4fd}.pay-list .icon-xuanzhong2[data-v-aa79c086]{display:flex;align-items:center;justify-content:center;width:%?60?%;height:%?60?%;font-size:%?40?%;color:#fa436a}.pay-list .tit[data-v-aa79c086]{font-size:%?32?%;color:#303133;flex:1}.footer[data-v-aa79c086]{position:fixed;left:0;bottom:0;z-index:995;display:flex;align-items:center;width:100%;height:%?90?%;justify-content:space-between;font-size:%?30?%;background-color:#fff;z-index:998;color:#606266;box-shadow:0 -1px 5px rgba(0,0,0,.1)}.footer .price-content[data-v-aa79c086]{padding-left:%?30?%}.footer .price-tip[data-v-aa79c086]{color:#fa436a;margin-left:%?8?%}.footer .price[data-v-aa79c086]{font-size:%?36?%;color:#fa436a}.footer .submit[data-v-aa79c086]{display:flex;align-items:center;justify-content:center;width:%?280?%;height:100%;color:#fff;font-size:%?32?%;background-color:#fa436a}\n/* 优惠券面板 */.mask[data-v-aa79c086]{display:flex;align-items:flex-end;position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:transparent;z-index:9995;transition:.3s}.mask .mask-content[data-v-aa79c086]{width:100%;min-height:30vh;max-height:70vh;background:#f3f3f3;-webkit-transform:translateY(100%);transform:translateY(100%);transition:.3s;overflow-y:scroll}.mask.none[data-v-aa79c086]{display:none}.mask.show[data-v-aa79c086]{background:rgba(0,0,0,.4)}.mask.show .mask-content[data-v-aa79c086]{-webkit-transform:translateY(0);transform:translateY(0)}\n/* 优惠券列表 */.coupon-item[data-v-aa79c086]{display:flex;flex-direction:column;margin:%?20?% %?24?%;background:#fff}.coupon-item .con[data-v-aa79c086]{display:flex;align-items:center;position:relative;height:%?120?%;padding:0 %?30?%}.coupon-item .con[data-v-aa79c086]:after{position:absolute;left:0;bottom:0;content:"";width:100%;height:0;border-bottom:1px dashed #f3f3f3;-webkit-transform:scaleY(50%);transform:scaleY(50%)}.coupon-item .left[data-v-aa79c086]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden;height:%?100?%}.coupon-item .title[data-v-aa79c086]{font-size:%?32?%;color:#303133;margin-bottom:%?10?%}.coupon-item .time[data-v-aa79c086]{font-size:%?24?%;color:#909399}.coupon-item .right[data-v-aa79c086]{display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:%?26?%;color:#606266;height:%?100?%}.coupon-item .price[data-v-aa79c086]{font-size:%?44?%;color:#fa436a}.coupon-item .price[data-v-aa79c086]:before{content:"￥";font-size:%?34?%}.coupon-item .tips[data-v-aa79c086]{font-size:%?24?%;color:#909399;line-height:%?60?%;padding-left:%?30?%}.coupon-item .circle[data-v-aa79c086]{position:absolute;left:%?-6?%;bottom:%?-10?%;z-index:10;width:%?20?%;height:%?20?%;background:#f3f3f3;border-radius:100px}.coupon-item .circle.r[data-v-aa79c086]{left:auto;right:%?-6?%}',""]),t.exports=a},b768:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var i={uEmpty:e("a08b").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[null==t.id?e("v-uni-view",[e("u-empty",{staticStyle:{"margin-top":"200px"},attrs:{mode:"order",text:"订单不存在"}})],1):e("v-uni-view",{},[e("v-uni-view",{staticClass:"bg-white padding"},[e("v-uni-view",{staticClass:"cu-steps"},t._l(t.numList,(function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-item",class:i>t.orderInfoList.status?"":"text-blue"},[e("v-uni-text",{staticClass:"num"}),t._v(t._s(a.name))],1)})),1)],1),e("v-uni-view",{staticClass:"cu-list menu-avatar comment solids-top "},t._l(t.orderInfoList.orderItemList,(function(a,i){return e("v-uni-view",{staticClass:"cu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/product/product?id="+a.productId)}}},[e("v-uni-view",{},[e("v-uni-image",{staticStyle:{height:"50px",width:"50px","margin-right":"10px"},attrs:{src:a.productPic,mode:""}})],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(a.productName))]),e("v-uni-view",{staticClass:"text-gray text-content text-df"},[t._v("数量："+t._s(a.productQuantity))]),e("v-uni-view",{staticClass:"text-gray text-content text-df"},[t._v("￥"+t._s(a.productPrice))])],1)],1)})),1),e("v-uni-view",{staticClass:"yt-list"}),e("v-uni-view",{staticClass:"yt-list"},[e("v-uni-view",{staticClass:"yt-list-cell b-b"},[e("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("订单编号")]),e("v-uni-text",{staticClass:"cell-tip"},[t._v(t._s(t.orderInfoList.orderSn))])],1),e("v-uni-view",{staticClass:"yt-list-cell b-b"},[e("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("订单金额")]),e("v-uni-text",{staticClass:"cell-tip"},[t._v("￥"+t._s(t.orderInfoList.totalAmount))])],1),e("v-uni-view",{staticClass:"yt-list-cell b-b"},[e("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("优惠金额")]),e("v-uni-text",{staticClass:"cell-tip red"},[t._v("-￥0")])],1),e("v-uni-view",{staticClass:"yt-list-cell b-b"},[e("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("支付方式")]),e("v-uni-text",{staticClass:"cell-tip"},[t._v(t._s(t._f("formatType")(t.orderInfoList.payType)))])],1)],1),e("v-uni-view",{staticClass:"btn"},[3==t.orderInfoList.status?e("v-uni-view",{staticClass:"btn_2",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.jump_torefund(t.my_order.order_id)}}},[t._v("售后")]):t._e(),0==t.orderInfoList.status?e("v-uni-view",{},[e("v-uni-button",{staticClass:"action-btn recom",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.buy.apply(void 0,arguments)}}},[t._v("立即支付")])],1):t._e()],1)],1)],1)},o=[]},c569:function(t,a,e){var i=e("7fe9");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("e749f452",i,!0,{sourceMap:!1,shadowMode:!1})},f6bd:function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.cancelUserOrder=function(t){return(0,i.request_post)("/order/cancelUserOrder?orderId="+t)},a.detail=function(t){return(0,i.request_Get)("/order/detail/"+t)},a.generateConfirmOrder=function(t){return(0,i.request_post)("/order/generateConfirmOrder",t)},a.generateConfirmOrderById=function(t){return(0,i.request_post)("/order/generateConfirmOrderById",t)},a.generateGoodOrder=function(t){return(0,i.request_post)("/order/generateGoodOrder",t)},a.generateOrder=function(t){return(0,i.request_post)("/order/generateOrder",t)},a.generateviporder=function(t,a){return(0,i.request_post)("/order/generateviporder?type="+t+"&vipType="+a)},a.getOrderInfo=function(t){return(0,i.request_post)("/order/detail/"+t)},a.getOrderList=function(t,a,e){return(0,i.request_Get)("/order/list?pageNum="+t+"&pageSize="+a+"&status="+e)},a.paySuccess=function(t,a,e,n,o){return(0,i.request_Get)("/order/paySuccess?payId="+t+"&param=&type="+o+"&price="+a+"&reallyPrice="+e+"&sign="+n)},a.submitOrder=function(t){return(0,i.request_post)("/order/submitOrder",t)};var i=e("aba4")},f895:function(t,a,e){"use strict";var i=e("c569"),n=e.n(i);n.a}}]);