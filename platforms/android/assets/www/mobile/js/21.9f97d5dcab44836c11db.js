webpackJsonp([21],{"/+Gt":function(t,e){},"2GJy":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("Dd8w"),i=o.n(n),c=o("nv77"),a=o("NYxO"),s={data:function(){return{code:""}},computed:i()({},Object(a.b)(["getTwoStep"])),created:function(){this.init()},methods:{init:function(){this.getTwoStep||this.onClickLeft()},onClickLeft:function(){this.$router.push("/user/login")},_twoVerify:function(){var t=this;if(6===this.code.length){var e={code:this.code};"email"===this.getTwoStep.authMode&&(e.email=this.getTwoStep.email,e.authMode="email"),"phone"===this.getTwoStep.authMode&&(e.phone=this.getTwoStep.phone,e.authMode="phone"),Object(c.f)(e).then(function(e){if(0===e.code){t.$toast(t.$t("account.verificationSuccess")),t.$store.commit("setToken",e.data.token),t.$store.commit("setUserInfo",null);var o=$vm.routeState;o?location.href=o:t.$router.push("/trade")}else t.code=""})}}}},r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"two-step"},[o("g-head",[o("van-nav-bar",{attrs:{title:t.$t("account.twoVerification"),"left-arrow":""},on:{"click-left":t.onClickLeft}})],1),t._v(" "),o("van-cell-group",[o("van-field",{attrs:{autofocus:"autofocus",placeholder:t.$t("account.googleTwoVerification")},on:{input:t._twoVerify},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),t._v(" "),t.getTwoStep?o("div",{staticClass:"hint"},[t._v(t._s(t.$t("account.pleace"))+" "+t._s(t.$timeFormat(t.getTwoStep.expire))+" "+t._s(t.$t("account.complete")))]):t._e()],1)},staticRenderFns:[]};var u=o("VU/8")(s,r,!1,function(t){o("/+Gt")},"data-v-b6462402",null);e.default=u.exports}});