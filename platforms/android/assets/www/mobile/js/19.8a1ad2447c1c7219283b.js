webpackJsonp([19],{FSlv:function(t,e){},nH0l:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=n("Dd8w"),o=n.n(c),i=n("P9l9"),s=n("NYxO"),a={data:function(){return{code:"",countDown:0,registerType:!1}},computed:{disabled:function(){return!this.code},canSend:function(){return this.countDown>0},registerText:function(){return this.registerType?this.$t("account.usePhoneUnbind"):this.$t("account.useEmailUnbind")}},created:function(){},destroyed:function(){clearInterval(this.timmer)},methods:o()({onClickLeft:function(){this.$router.push("/account")},handleRegister:function(){var t=this,e={authMode:this.registerType?"phone":"email",authCode:this.code.trim()};Object(i.n)(e).then(function(e){0==e.code&&(t.$toast.success(e.msg[0]||t.$t("account.unbindSuccess")),t.setTwoStep(""),t.$router.push("/account"))})},getCode:function(){var t=this,e={authMode:this.registerType?"phone":"email"};Object(i.m)(e).then(function(e){0==e.code?(t.$toast(t.$t("account.verifyIsSend")),t._countDown()):e.code})},_countDown:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6e4,n=(new Date).getTime()+e;this.timmer=setInterval(function(){t.countDown=((n-(new Date).getTime())/1e3).toFixed(0),t.countDown<=0&&clearInterval(t.timmer)},1e3)}},Object(s.c)({setTwoStep:"setTwoStep"}))},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"register"},[n("g-head",[n("van-nav-bar",{attrs:{title:t.$t("account.unbindTwoVerification"),"left-arrow":""},on:{"click-left":t.onClickLeft}})],1),t._v(" "),n("div",{staticClass:"hide-wallet"},[n("span",[t._v(t._s(t.registerText))]),t._v(" "),n("van-switch",{model:{value:t.registerType,callback:function(e){t.registerType=e},expression:"registerType"}})],1),t._v(" "),n("van-cell-group",[n("van-field",{attrs:{center:"",label:t.$t("account.verify"),placeholder:t.$t("account.inputVerify"),icon:"clear"},on:{"click-icon":function(e){t.code=""}},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}},[n("van-button",{attrs:{slot:"button",disabled:t.canSend,size:"small",type:"primary"},on:{click:t.getCode},slot:"button"},[t._v("\n        "+t._s(t.$t("account.sendVerify"))+"\n        "),t.countDown>0?n("span",[t._v(" ("+t._s(t.countDown)+")")]):t._e()])],1)],1),t._v(" "),n("div",{staticClass:"submit"},[n("van-button",{attrs:{type:"primary",disabled:t.disabled},on:{click:t.handleRegister}},[t._v(t._s(t.$t("account.unbind")))])],1)],1)},staticRenderFns:[]};var u=n("VU/8")(a,r,!1,function(t){n("FSlv")},"data-v-f1e69ec0",null);e.default=u.exports}});