webpackJsonp([21],{"+Plf":function(t,e){},VldK:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("BO1k"),o=n.n(i),s=(n("nv77"),n("P9l9")),a=n("Q1XB"),c=n.n(a),r={data:function(){return{active:0,email:"",password:"",password2:"",code:"",inviteCode:"",countDown:0,registering:!1,phone:"",registerType:!0,selectPhoneCode:!1,countryArr:[],callingCode:"86",selectPhoneText:"CN +86"}},computed:{disabled:function(){return!((this.email||this.phone)&&this.password&&this.password2&&this.code&&!this.registering)},canSend:function(){return this.countDown>0}},created:function(){this.getCountryArr()},destroyed:function(){clearInterval(this.timmer)},methods:{selectRegisterWays:function(t){this.phone="",this.email="",this.password="",this.password2="",this.code="",this.registerType=!t},onClickLeft:function(){this.$router.push("/user/login")},onChangeCountry:function(t){var e=!0,n=!1,i=void 0;try{for(var s,a=o()(c.a);!(e=(s=a.next()).done);e=!0){var r=s.value;if(r.name===t){this.callingCode=r.callingCode,this.selectPhoneText=r.code+" +"+r.callingCode;break}}}catch(t){n=!0,i=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw i}}this.selectPhoneCode=!1},getCountryArr:function(){this.countryArr=c.a.map(function(t){return t.name})},toggleWay:function(){this.code="",this.password="",this.password2=""},handleRegister:function(){var t=this;if(this.verify())if(this.callingCode){this.registering=!0;var e={uniquekey:this.registerType?this.callingCode+""+this.phone:this.email,code:this.code,password:this.sha1(this.password)};Object(s.c)(e).then(function(e){0==e.code&&(t.$toast.success(t.$t("account.findPwdSuccess")),t.$router.push({path:"/user/login"})),t.registering=!1}).catch(function(e){t.registering=!1})}else this.$toast.fail(this.$t("account.selectRegion"))},getCode:function(){if(this.registerType){if(!/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.phone.trim()))return void this.$toast.fail(this.$t("account.phoneFormatError"));this.findPwByPhone()}else{
//!/^.+@\w+\..+$/.test(this.email)
if(!/^.+@\w+\..+$/.test(this.email.trim()))return void this.$toast.fail(this.$t("account.emailFormatError"));this.findPwByEmail()}},findPwByEmail:function(){var t=this,e={way:this.registerType?"phone":"email",uniquekey:this.email.trim()};Object(s.d)(e).then(function(e){0==e.code&&(t.$toast.success(t.$t("yanZheng.yanZhengMaTips")),t._countDown())})},findPwByPhone:function(){var t=this,e={way:this.registerType?"phone":"email",uniquekey:this.callingCode+""+this.phone.trim()};Object(s.d)(e).then(function(e){0==e.code&&(t.$toast.success(t.$t("yanZheng.yanZhengMaTips")),t._countDown())})},_countDown:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6e4,n=(new Date).getTime()+e;this.timmer=setInterval(function(){t.countDown=((n-(new Date).getTime())/1e3).toFixed(0),t.countDown<=0&&clearInterval(t.timmer)},1e3)},verify:function(){return/^\w+@\w+\.\w+$/.test(this.email)||this.registerType?!/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.phone)&&this.registerType?(this.$toast.fail(this.$t("account.phoneFormatError")),!1):/^\w{6,18}$/.test(this.password)?this.password===this.password2||(this.$toast.fail(this.$t("account.passwordNotSame")),!1):(this.$toast.fail(this.$t("account.passwordToast")),!1):(this.$toast.fail(this.$t("account.emailFormatError")),!1)}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"register"},[n("g-head",[n("van-nav-bar",{attrs:{title:t.$t("account.findPwd"),"left-arrow":""},on:{"click-left":t.onClickLeft}})],1),t._v(" "),n("van-tabs",{staticClass:"ways",on:{click:t.selectRegisterWays},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tab",{attrs:{title:t.$t("account.phoneRetrieve")}}),t._v(" "),n("van-tab",{attrs:{title:t.$t("account.emailRetrieve")}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.registerType,expression:"registerType"}],staticClass:"box"},[n("van-popup",{attrs:{position:"bottom",overlay:!1},model:{value:t.selectPhoneCode,callback:function(e){t.selectPhoneCode=e},expression:"selectPhoneCode"}},[n("van-picker",{attrs:{columns:t.countryArr,"show-toolbar":""},on:{confirm:t.onChangeCountry,cancel:function(e){t.selectPhoneCode=!1}}})],1),t._v(" "),n("van-cell",{attrs:{title:t.$t("account.selectRegion"),"is-link":"",value:t.selectPhoneText},on:{click:function(e){t.selectPhoneCode=!0}}}),t._v(" "),n("van-cell-group",[n("van-field",{attrs:{label:t.$t("account.phoneNumber"),icon:"clear",placeholder:t.$t("account.inputPhoneNumber")},on:{"click-icon":function(e){t.phone=""}},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)],1),t._v(" "),n("van-cell-group",[n("van-field",{directives:[{name:"show",rawName:"v-show",value:!t.registerType,expression:"!registerType"}],attrs:{label:t.$t("account.email"),icon:"clear",placeholder:t.$t("account.inputEmail")},on:{"click-icon":function(e){t.email=""}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("van-field",{attrs:{type:"password",label:t.$t("account.password"),placeholder:t.$t("account.inputPwd"),icon:"clear"},on:{"click-icon":function(e){t.password=""}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("van-field",{attrs:{type:"password",label:t.$t("account.surePwd"),placeholder:t.$t("account.inputPwdAgain"),icon:"clear"},on:{"click-icon":function(e){t.password2=""}},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}}),t._v(" "),n("van-field",{attrs:{center:"",label:t.$t("account.verify"),placeholder:t.$t("account.inputVerify"),icon:"clear"},on:{"click-icon":function(e){t.code=""}},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}},[n("van-button",{attrs:{slot:"button",disabled:t.canSend,size:"small",type:"primary"},on:{click:t.getCode},slot:"button"},[t._v("\n                "+t._s(t.$t("account.sendVerify"))+"\n                "),t.countDown>0?n("span",[t._v(" ("+t._s(t.countDown)+")")]):t._e()])],1)],1),t._v(" "),n("div",{staticClass:"submit"},[n("van-button",{attrs:{type:"primary",disabled:t.disabled},on:{click:t.handleRegister}},[t._v(t._s(t.$t("account.sureSubmit")))])],1)],1)},staticRenderFns:[]};var u=n("VU/8")(r,l,!1,function(t){n("+Plf")},"data-v-abe8be94",null);e.default=u.exports}});