(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-reg"],{"01f7":function(t,e,n){"use strict";var i=n("58c9"),a=n.n(i);a.a},"257a":function(t,e,n){"use strict";n.r(e);var i=n("f4d3"),a=n("b537");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("01f7");var o=n("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"135fab44",null,!1,i["a"],void 0);e["default"]=r.exports},"342a":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.AddcardPassWord=function(t){return(0,i.request_post)("/sso/AddcardPassWord?card="+t)},e.GetUserInfo=function(){return(0,i.request_Get)("/sso/info?name=1")},e.getAuthCode=function(t){return(0,i.request_Get)("/sso/getAuthCode?telephone="+t)},e.getBrowseList=function(){return(0,i.request_Get)("/member/readHistory/list?pageNum=1&pageSize=5")},e.getChannel=function(){return(0,i.request_Get)("/sso/getchannel")},e.getDealList=function(t,e){return(0,i.request_Get)("/sso/getDealList?pageNum="+t+"&pageSize="+e)},e.getInvitationInfo=function(){return(0,i.request_Get)("/sso/getinvitationinfo")},e.getMemberSonList=function(t,e){return(0,i.request_Get)("/sso/getmembersonlist?pageNum="+t+"&pageSize="+e)},e.invitebinding=function(t){return(0,i.request_post)("/sso/invitebinding?inviteCode="+t)},e.login=function(t,e){return(0,i.request_post)("/sso/login?password="+e+"&username="+t)},e.loginByCode=function(t,e){return(0,i.request_post)("/sso/loginByCode?code="+e+"&phoneNumber="+t)},e.loginbymobile=function(t){return(0,i.request_post)("/sso/loginbymobile?phoneNumber="+t.phoneNumber)},e.register=function(t,e,n,a){return(0,i.request_post)("/sso/register?authCode="+t+"&password="+e+"&telephone="+n+"&username="+a)},e.withdraw=function(t){return(0,i.request_post)("/sso/withdraw",t)};var i=n("aba4")},"3e38":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".content[data-v-135fab44]{display:flex;flex-direction:column;justify-content:center}.header[data-v-135fab44]{width:%?161?%;height:%?161?%;background:#3fcdeb;box-shadow:%?0?% %?12?% %?13?% %?0?% rgba(63,205,235,.47);border-radius:50%;margin-top:%?30?%;margin-left:auto;margin-right:auto}.header uni-image[data-v-135fab44]{width:%?161?%;height:%?161?%;border-radius:50%}.list[data-v-135fab44]{display:flex;flex-direction:column;padding-top:%?50?%;padding-left:%?70?%;padding-right:%?70?%}.list-call[data-v-135fab44]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;height:%?100?%;color:#333;border-bottom:.5px solid #e2e2e2}.list-call .img[data-v-135fab44]{width:%?40?%;height:%?40?%}.list-call .sl-input[data-v-135fab44]{flex:1;text-align:left;font-size:%?32?%;margin-left:%?16?%}.yzm[data-v-135fab44]{color:#ff7d13;font-size:%?24?%;line-height:%?64?%;padding-left:%?10?%;padding-right:%?10?%;width:auto;height:%?64?%;border:%?1?% solid #ffa800;border-radius:%?50?%}.yzms[data-v-135fab44]{color:#999!important;border:%?1?% solid #999}.button-login[data-v-135fab44]{color:#fff;font-size:%?34?%;width:%?470?%;height:%?100?%;line-height:%?100?%;background:linear-gradient(-90deg,#3fcdeb,#bce29e);box-shadow:%?0?% %?0?% %?13?% %?0?% rgba(164,217,228,.2);border-radius:%?50?%;text-align:center;margin-left:auto;margin-right:auto;margin-top:%?100?%}.button-hover[data-v-135fab44]{background:linear-gradient(-90deg,rgba(63,205,235,.8),rgba(188,226,158,.8))}.agreement[data-v-135fab44]{display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:%?30?%;margin-top:%?80?%;color:#ffa800;text-align:center;height:%?40?%;line-height:%?40?%}.agreement uni-image[data-v-135fab44]{width:%?40?%;height:%?40?%}",""]),t.exports=e},"58c9":function(t,e,n){var i=n("3e38");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7cc76413",i,!0,{sourceMap:!1,shadowMode:!1})},"81cc":function(t,e,n){t.exports=n.p+"static/img/logo.256d7ad8.png"},b537:function(t,e,n){"use strict";n.r(e);var i=n("d464"),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},d464:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,s,o,r=i(n("ade3")),l=n("342a"),c=(a={onLoad:function(){s=this},onUnload:function(){clearInterval(o),this.second=0},data:function(){return{phone:"",password:"",code:"",invitation:"",agreement:!0,showPassword:!1,second:0}},computed:{yanzhengma:function(){return 0==this.second?"获取验证码":this.second<10?"重新获取0"+this.second:"重新获取"+this.second}}},(0,r.default)(a,"onUnload",(function(){this.clear()})),(0,r.default)(a,"methods",{clear:function(){clearInterval(o),o=null,this.second=0},display:function(){this.showPassword=!this.showPassword},agreementSuccess:function(){this.agreement=!this.agreement},getcode:function(){11==this.phone.length?this.second>0||(this.second=60,o=setInterval((function(){s.second--,0==s.second&&s.clear()}),1e3)):uni.showToast({icon:"none",title:"手机号不正确"})},bindLogin:function(){0!=this.agreement?11==this.phone.length?this.password.length<6?uni.showToast({icon:"none",title:"密码不正确"}):4==this.code.length?(0,l.register)(this.code,this.password,this.phone,this.phone).then((function(t){console.log(t)})):uni.showToast({icon:"none",title:"验证码不正确"}):uni.showToast({icon:"none",title:"手机号不正确"}):uni.showToast({icon:"none",title:"请先阅读《软件用户协议》"})}}),a);e.default=c},f4d3:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-image",{attrs:{src:n("81cc")}})],1),i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"list-call"},[i("v-uni-image",{staticClass:"img",attrs:{src:"/static/shilu-login/1.png"}}),i("v-uni-input",{staticClass:"sl-input",attrs:{type:"number",maxlength:"11",placeholder:"手机号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),i("v-uni-view",{staticClass:"list-call"},[i("v-uni-image",{staticClass:"img",attrs:{src:"/static/shilu-login/2.png"}}),i("v-uni-input",{staticClass:"sl-input",attrs:{type:"text",maxlength:"32",placeholder:"登录密码",password:!t.showPassword},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),i("v-uni-image",{staticClass:"img",attrs:{src:t.showPassword?"/static/shilu-login/op.png":"/static/shilu-login/cl.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.display.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"list-call"},[i("v-uni-image",{staticClass:"img",attrs:{src:"/static/shilu-login/3.png"}}),i("v-uni-input",{staticClass:"sl-input",attrs:{type:"number",maxlength:"4",placeholder:"验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),i("v-uni-view",{staticClass:"yzm",class:{yzms:t.second>0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getcode.apply(void 0,arguments)}}},[t._v(t._s(t.yanzhengma))])],1),i("v-uni-view",{staticClass:"list-call"},[i("v-uni-image",{staticClass:"img",attrs:{src:"/static/shilu-login/4.png"}}),i("v-uni-input",{staticClass:"sl-input",attrs:{type:"text",maxlength:"12",placeholder:"邀请码"},model:{value:t.invitation,callback:function(e){t.invitation=e},expression:"invitation"}})],1)],1),i("v-uni-view",{staticClass:"button-login",attrs:{"hover-class":"button-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindLogin.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("注册")])],1),i("v-uni-view",{staticClass:"agreement"},[i("v-uni-image",{attrs:{src:1==t.agreement?"/static/shilu-login/ty1.png":"/static/shilu-login/ty0.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.agreementSuccess.apply(void 0,arguments)}}}),i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.agreementSuccess.apply(void 0,arguments)}}},[t._v("同意")]),i("v-uni-navigator",{attrs:{url:"agreement?id=1","open-type":"navigate"}},[t._v("《软件用户协议》")])],1)],1)},a=[]}}]);