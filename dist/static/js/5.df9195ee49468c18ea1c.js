webpackJsonp([5],{"6DU0":function(t,s){},AQf5:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Xxa5"),r=e.n(a),i=e("gRE1"),n=e.n(i),o=e("exGp"),c=e.n(o),_=e("Dd8w"),d=e.n(_),u=e("NYxO"),l=e("hxP8"),h=e("Uoa1"),v=e("44dg"),p=e("i84Q"),f=e("uaSg"),m={data:function(){return{geohash:"",shopId:null,showLoading:!0,checkoutData:null,shopCart:null,showPayWay:!1,payWayId:1,showAlert:!1,alertText:"",imageBaseUrl:f.b}},components:{headTop:l.a,alertTip:h.a,loading:v.a},methods:d()({},Object(u.c)(["INIT_BUYCART","CHANGE_ORDER_PARAM","CHOOSE_ADDRESS","SAVE_GEOHASH","NEED_VALIDATION","SAVE_CART_ID_SIG","SAVE_ORDER_PARAM","ORDER_SUCCESS","SAVE_SHOPID"]),{initData:function(){var t=this;return c()(r.a.mark(function s(){var e;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return e=new Array,n()(t.shopCart).forEach(function(t){n()(t).forEach(function(t){n()(t).forEach(function(t){e.push({attrs:[],extra:[],id:t.id,name:t.name,packing_fee:t.packing_fee,price:t.price,quantity:t.num,sku_id:t.sku_id,specs:[t.specs],stock:t.stock})})})}),s.next=4,Object(p.c)(t.geohash,[e],t.shopId);case 4:t.checkoutData=s.sent,t.SAVE_CART_ID_SIG({cart_id:t.checkoutData.cart.id,sig:t.checkoutData.sig}),t.initAddress(),t.showLoading=!1;case 8:case"end":return s.stop()}},s,t)}))()},iconColor:function(t){switch(t){case"公司":return"#4cd964";case"学校":return"#3190e8"}},initAddress:function(){var t=this;return c()(r.a.mark(function s(){var e;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!t.userInfo||!t.userInfo.user_id){s.next=5;break}return s.next=3,Object(p.l)(t.userInfo.user_id);case 3:(e=s.sent)instanceof Array&&e.length&&t.CHOOSE_ADDRESS({addres:e[0],index:0});case 5:case"end":return s.stop()}},s,t)}))()},showPayWayFun:function(){this.showPayWay=!this.showPayWay},choosePayWay:function(t,s){t&&(this.payWayId=s,this.showPayWay=!this.showPayWay)},confrimOrder:function(){var t=this;return c()(r.a.mark(function s(){var e;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(t.userInfo&&t.userInfo.user_id){s.next=6;break}return t.alertText="用户未登陆",t.showAlert=!0,s.abrupt("return");case 6:if(t.choosedAddress){s.next=10;break}return t.showAlert=!0,t.alertText="请添加一个收货地址",s.abrupt("return");case 10:return t.SAVE_ORDER_PARAM({user_id:t.userInfo.user_id,cart_id:t.checkoutData.cart.id,address_id:t.choosedAddress.id,description:t.remarklist,entities:t.checkoutData.cart.groups,geohash:t.geohash,sig:t.checkoutData.sig}),s.next=13,Object(p.A)(t.userInfo.user_id,t.checkoutData.cart.id,t.choosedAddress.id,t.remarklist,t.checkoutData.cart.groups,t.checkoutData.sig);case 13:(e=s.sent).need_validation?(t.ORDER_SUCCESS(e),t.$router.push("/confirmOrder/userValidation")):(t.ORDER_SUCCESS(e),t.$router.push("/confirmOrder/payment"));case 15:case"end":return s.stop()}},s,t)}))()}}),computed:d()({},Object(u.d)(["cartList","remarkText","inputText","invoice","choosedAddress","userInfo"]),{remarklist:function(){console.log("备注");var t=new String;return this.remarkText&&n()(this.remarkText).forEach(function(s){t+=s[1]+","}),this.inputText?t+this.inputText:t.substr(0,t.lastIndexOf(","))}}),created:function(){this.geohash=this.$route.query.geohash,this.shopId=this.$route.query.shopId,this.SAVE_SHOPID(this.shopId),this.INIT_BUYCART(),this.shopCart=this.cartList[this.shopId]},mounted:function(){this.geohash&&this.initData()},watch:{userInfo:function(t){function s(s){return t.apply(this,arguments)}return s.toString=function(){return t.toString()},s}(function(t){t&&userInfo.user_id&&this.initAddress()})}},k={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"confirmOrder_container"},[t.showLoading?t._e():e("section",[e("head-top",{attrs:{"head-title":"确认订单",goBack:"true","signin-up":"confirmOrder"}}),t._v(" "),e("router-link",{staticClass:"address_container",attrs:{to:{path:"/confirmOrder/chooseAddress",query:{id:t.checkoutData.cart.id,sig:t.checkoutData.sig}}}},[e("div",{staticClass:"address_empty_left"},[e("svg",{staticClass:"location_icon"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#location"}})]),t._v(" "),t.choosedAddress?e("div",{staticClass:"address_detail_container"},[e("header",[e("span",[t._v(t._s(t.choosedAddress.name))]),t._v(" "),e("span",[t._v(t._s("1"==t.choosedAddress.sex?"先生":"女士"))]),t._v(" "),e("span",[t._v(t._s(t.choosedAddress.phone))])]),t._v(" "),e("div",{staticClass:"address-detail"},[t.choosedAddress.tag?e("span",{style:{bakcgroundColor:t.iconColor(t.choosedAddress.tag)}},[t._v(t._s(t.choosedAddress.tag))]):t._e(),t._v(" "),e("p",[t._v(t._s(t.choosedAddress.address_detail))])])]):e("div",{staticClass:"add_address"},[t._v("请添加收货地址"+t._s(t.choosedAddress))])]),t._v(" "),e("svg",{staticClass:"address_empty_right"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"}})])]),t._v(" "),e("section",{staticClass:"confirmOrder_songda"},[e("p",{staticClass:"configOrder_txt"},[t._v("送达时间")]),t._v(" "),e("section",{staticClass:"configOrder_txs"},[e("p",[t._v("预计送达 | 时间 "+t._s(t.checkoutData.delivery_reach_time))]),t._v(" "),t.checkoutData.cart.is_deliver_by_fengniao?e("p",[t._v("蜂鸟专送")]):t._e()])]),t._v(" "),e("section",{staticClass:"configOrder_zifu"},[e("header",{staticClass:"header_style"},[e("span",[t._v("支付方式")]),t._v(" "),e("div",{staticClass:"more_type",on:{click:t.showPayWayFun}},[e("span",[t._v("在线支付")]),t._v(" "),e("svg",{staticClass:"address_empty_right"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"}})])])]),t._v(" "),t._m(0)]),t._v(" "),e("section",{staticClass:"configOrder_xiang"},[t.checkoutData.cart.restaurant_info?e("header",[e("img",{attrs:{src:t.imageBaseUrl+t.checkoutData.cart.restaurant_info.image_path,alt:""}}),t._v(" "),e("span",[t._v(t._s(t.checkoutData.cart.restaurant_info.name))])]):t._e(),t._v(" "),t.checkoutData.cart.groups?e("ul",{staticClass:"food_list_ul"},t._l(t.checkoutData.cart.groups[0],function(s,a){return e("li",{key:a,staticClass:"food_item_style"},[e("p",{staticClass:"ellipsis food_name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"num_price"},[e("span",[t._v("x"+t._s(s.quantity))]),t._v(" "),e("span",[t._v("￥"+t._s(s.price))])])])})):t._e(),t._v(" "),e("div",{staticClass:"food_item_style"},[e("p",{staticClass:"food_name ellipsis"},[t._v(t._s(t.checkoutData.cart.extra[0].name))]),t._v(" "),e("div",{staticClass:"num_price"},[e("span"),t._v(" "),e("span",[t._v("¥ "+t._s(t.checkoutData.cart.extra[0].price))])])]),t._v(" "),e("div",{staticClass:"food_item_style"},[e("p",{staticClass:"food_name ellipsis"},[t._v("配送费")]),t._v(" "),e("div",{staticClass:"num_price"},[e("span"),t._v(" "),e("span",[t._v("¥ "+t._s(t.checkoutData.cart.deliver_amount||0))])])]),t._v(" "),e("div",{staticClass:"food_item_style total_price"},[e("p",[t._v("订单￥"+t._s(t.checkoutData.cart.total))]),t._v(" "),e("div",{staticClass:"num_price"},[e("span",{staticClass:"ellipsis",staticStyle:{color:"red"}},[t._v("待支付")]),t._v(" "),e("span",{staticStyle:{color:"#f60"}},[t._v("￥"+t._s(t.checkoutData.cart.total))])])])]),t._v(" "),e("section",{staticClass:"confirmOrder_xuqiou"},[e("router-link",{staticClass:"header_style",attrs:{to:{path:"/confirmOrder/remark",query:{id:t.checkoutData.cart.id,sig:t.checkoutData.sig}}}},[e("span",[t._v("订单备注")]),t._v(" "),e("div",{staticClass:"rem_type"},[e("span",{staticClass:"ellipsis"},[t._v(t._s(t.remarkText||t.inputText?t.remarklist:"口味,偏好等"))]),t._v(" "),e("svg",{staticClass:"address_empty_right"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"}})])])]),t._v(" "),e("router-link",{staticClass:"header_style",attrs:{to:t.checkoutData.invoice.is_available?"/confirmOrder/invoice":""}},[e("span",[t._v("发票")]),t._v(" "),e("div",{staticClass:"rem_type"},[e("span",{staticClass:"ellipsis"},[t._v(t._s(t.checkoutData.invoice.status_text))]),t._v(" "),e("svg",{staticClass:"address_empty_right"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"}})])])])],1),t._v(" "),e("section",{staticClass:"confirm_orde"},[e("p",[t._v("待支付￥"+t._s(t.checkoutData.cart.total))]),t._v(" "),e("p",{on:{click:t.confrimOrder}},[t._v("确定下单")])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.showPayWay?e("div",{staticClass:"cover",on:{click:t.showPayWayFun}}):t._e()]),t._v(" "),t.showPayWay?e("transition",{attrs:{name:"tanchu"}},[e("div",{staticClass:"zhifu_tanchu"},[e("header",[t._v("支付方式")]),t._v(" "),e("ul",t._l(t.checkoutData.payments,function(s,a){return e("li",{key:a,class:{choose:t.payWayId==s.id}},[e("span",[t._v(t._s(s.name)),s.is_online_payment?t._e():e("span",[t._v(t._s(s.description))])]),t._v(" "),e("svg",{staticClass:"address_empty_right",on:{click:function(e){t.choosePayWay(s.is_online_payment,s.id)}}},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#select"}})])])}))])]):t._e()],1),t._v(" "),e("loading",{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}]}),t._v(" "),e("transition",{attrs:{name:"router-slid",mode:"out-in"}},[e("router-view")],1),t._v(" "),e("alert-tip",{directives:[{name:"show",rawName:"v-show",value:t.showAlert,expression:"showAlert"}],attrs:{alertText:t.alertText},on:{closeTip:function(s){t.showAlert=!1}}})],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"hongbo"},[s("span",[this._v("红包")]),this._v(" "),s("span",[this._v("暂时只在饿了么 APP 中支持")])])}]};var g=e("VU/8")(m,k,!1,function(t){e("6DU0")},"data-v-82cb4140",null);s.default=g.exports},TmV0:function(t,s,e){e("fZOM"),t.exports=e("FeBl").Object.values},fZOM:function(t,s,e){var a=e("kM2E"),r=e("mbce")(!1);a(a.S,"Object",{values:function(t){return r(t)}})},gRE1:function(t,s,e){t.exports={default:e("TmV0"),__esModule:!0}},mbce:function(t,s,e){var a=e("lktj"),r=e("TcQ7"),i=e("NpIQ").f;t.exports=function(t){return function(s){for(var e,n=r(s),o=a(n),c=o.length,_=0,d=[];c>_;)i.call(n,e=o[_++])&&d.push(t?[e,n[e]]:n[e]);return d}}}});
//# sourceMappingURL=5.df9195ee49468c18ea1c.js.map