webpackJsonp([29],{HEoI:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("hxP8"),i=a("we8T"),n=(a("NYxO"),a("vuW6")),o=a("uaSg"),r={components:{headeTop:e.a,satingStar:n.a},mixins:[i.a],data:function(){return{imageBaseUrl:o.b,image_path:null,description:null,month_sales:null,name:null,rating:null,rating_count:null,satisfy_rate:null,foods:null,shopId:null}},created:function(){this.image_path=this.$route.query.image_path,this.description=this.$route.query.description,this.month_sales=this.$route.query.month_sales,this.name=this.$route.query.name,this.rating=this.$route.query.rating,this.rating_count=this.$route.query.rating_count,this.satisfy_rate=this.$route.query.satisfy_rate,this.foods=this.$route.query.foods,this.shopId=this.$route.query.shopId}},_={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"foodDetail_container"},[a("heade-top",{attrs:{"head-title":t.description,"go-back":"true"}}),t._v(" "),a("section",{staticClass:"foodDetail_img"},[a("img",{attrs:{src:t.imageBaseUrl+t.image_path,alt:""}})]),t._v(" "),a("p",{staticClass:"foodDetail_tx"},[t._v(t._s(t.description))]),t._v(" "),a("section",{staticClass:"fooodDetail_container_title"},[a("p",[t._v(t._s(t.name))]),t._v(" "),a("div",{staticClass:"pinfen"},[a("span",[t._v("评分")]),t._v(" "),a("sating-star",{staticClass:"pinfen_img",attrs:{rating:t.rating}}),t._v(" "),a("span",[t._v(t._s(t.rating.toFixed(1)))])],1),t._v(" "),a("p",{staticClass:"xiaoshou"},[a("span",[t._v(t._s(t.rating_count)+"月售")]),t._v(" "),a("span",[t._v("售价 ¥"+t._s(t.foods.specfoods[0].price))]),t._v(" "),t.foods.specfoods.length?a("span",[t._v("起")]):t._e()]),t._v(" "),a("p",{staticClass:"pinglun"},[a("span",[t._v("评论数"+t._s(t.rating_count))]),t._v(" "),a("span",[t._v("好评率"+t._s(t.satisfy_rate)+"%")])])])],1)},staticRenderFns:[]};var u=a("VU/8")(r,_,!1,function(t){a("VY0x")},"data-v-3f0c5d6c",null);s.default=u.exports},VY0x:function(t,s){}});
//# sourceMappingURL=29.8a72ec3b44a5b22197ef.js.map