webpackJsonp([15],{QrVH:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("Xxa5"),s=a.n(o),n=a("exGp"),r=a.n(n),i=a("Dd8w"),c=a.n(i),u=a("hxP8"),l=a("i84Q"),p=a("Uoa1"),d=a("NYxO"),m={data:function(){return{loginWay:!1,showPassword:!1,phoneNumber:null,mobileCode:null,validate_token:null,computedTime:null,userInfo:null,userAccount:null,passWord:null,captchaCodeImg:null,CodeNumber:null,showAlert:null,alertText:null}},components:{headeTop:u.a,alertTip:p.a},computed:c()({},Object(d.d)([])),created:function(){this.getCaptchaCode()},methods:c()({},Object(d.c)(["RECORD_USERINFO"]),{getCaptchaCode:function(){var e=this;return r()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.u)();case 2:a=t.sent,e.captchaCodeImg=a.code;case 4:case"end":return t.stop()}},t,e)}))()},changePassWordType:function(){this.showPassword=!this.showPassword},mobileLogin:function(){var e=this;return r()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.userAccount){t.next=6;break}return e.alertText="请输入账号",e.showAlert=!0,t.abrupt("return");case 6:if(e.passWord){t.next=12;break}return e.alertText="请输入密码",e.showAlert=!0,t.abrupt("return");case 12:if(e.CodeNumber){t.next=16;break}return e.alertText="请输入验证码",e.showAlert=!0,t.abrupt("return");case 16:return alert(e.CodeNumber),t.next=19,Object(l.a)(e.userAccount,e.passWord,e.CodeNumber);case 19:e.userInfo=t.sent,e.userInfo.user_id?(e.RECORD_USERINFO(e.userInfo),e.$router.go(-1)):(e.alertText=e.userInfo.message,e.showAlert=!0,e.loginWay||e.changePassWordType());case 21:case"end":return t.stop()}},t,e)}))()},closeTip:function(){this.showAlert=!this.showAlert}})},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"loginContainer"},[a("heade-top",{attrs:{"head-title":e.loginWay?"登陆":"密码登陆",goBack:"true"}}),e._v(" "),e.loginWay?a("form",{staticClass:"loginForm"},[a("section",{staticClass:"input_container phone_number"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNumber,expression:"phoneNumber"}],attrs:{type:"text",placeholder:"账号密码随便输",name:"phone",maxlength:"11"},domProps:{value:e.phoneNumber},on:{input:function(t){t.target.composing||(e.phoneNumber=t.target.value)}}}),e._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:!e.computedTime,expression:"!computedTime"}],class:{right_phone_number:e.rightPhoneNumber},on:{click:function(t){t.preventDefault(),e.getVerifyCode(t)}}},[e._v("获取验证码")]),e._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:e.computedTime,expression:"computedTime"}],on:{click:function(e){e.preventDefault()}}},[e._v("已发送("+e._s(e.computedTime)+")")])])]):a("form",{staticClass:"loginForm"},[a("section",{staticClass:"input_container"},[a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.userAccount,expression:"userAccount",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"请输入账号"},domProps:{value:e.userAccount},on:{change:function(t){e.userAccount=t.target.value}}})]),e._v(" "),a("section",{staticClass:"input_container"},[e.showPassword?a("input",{directives:[{name:"model",rawName:"v-model",value:e.passWord,expression:"passWord"}],attrs:{type:"text",placeholder:"请输入密码"},domProps:{value:e.passWord},on:{input:function(t){t.target.composing||(e.passWord=t.target.value)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.passWord,expression:"passWord"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.passWord},on:{input:function(t){t.target.composing||(e.passWord=t.target.value)}}}),e._v(" "),a("div",{staticClass:"button_switch",class:{change_to_text:e.showPassword}},[a("div",{staticClass:"circle_button",class:{trans_to_right:e.showPassword},on:{click:e.changePassWordType}}),e._v(" "),a("span",[e._v("abc")]),e._v(" "),a("span",[e._v("...")])])]),e._v(" "),a("section",{staticClass:"input_container captcha_code_container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.CodeNumber,expression:"CodeNumber"}],attrs:{type:"text",placeholder:"验证码",maxlength:"4"},domProps:{value:e.CodeNumber},on:{input:function(t){t.target.composing||(e.CodeNumber=t.target.value)}}}),e._v(" "),a("div",{staticClass:"img_change_img"},[a("img",{directives:[{name:"show",rawName:"v-show",value:e.captchaCodeImg,expression:"captchaCodeImg"}],attrs:{src:e.captchaCodeImg}}),e._v(" "),a("div",{staticClass:"change_img",on:{click:e.getCaptchaCode}},[a("p",[e._v("看不清")]),e._v(" "),a("p",[e._v("换一张")])])])])]),e._v(" "),a("p",{staticClass:"login_tips"},[e._v("\n       温馨提示未注册的号码登陆时自动注册\n   ")]),e._v(" "),a("p",{staticClass:"login_tips"},[e._v("\n      注册过的用户可凭账号密码登陆\n  ")]),e._v(" "),a("div",{staticClass:"login_container",on:{click:e.mobileLogin}},[e._v("登陆")]),e._v(" "),e.loginWay?a("router-link",{staticClass:"to_forget",attrs:{to:"/forget"}},[e._v("重置密码?")]):e._e(),e._v(" "),e.showAlert?a("alert-tip",{attrs:{showHide:e.showAlert,alertText:e.alertText},on:{closeTip:e.closeTip}}):e._e()],1)},staticRenderFns:[]};var h=a("VU/8")(m,v,!1,function(e){a("a4W3")},"data-v-f9026c48",null);t.default=h.exports},a4W3:function(e,t){}});
//# sourceMappingURL=15.9d770c4e9518386ba335.js.map