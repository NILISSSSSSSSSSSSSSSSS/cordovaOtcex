webpackJsonp([3],{GhrP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("u/ZP"),n={props:{hide:{type:Boolean,default:!1},hideAll:Boolean},data:function(){return{totalList:[],showList:[],loading:!1}},watch:{hide:function(t){this.hideAll||(this.showList=t?this.totalList.filter(function(t){return t.totalAmount>0}):this.totalList)},hideAll:{handler:function(t){t?this.showList=[]:this.hide?this.showList=this.totalList.filter(function(t){return t.totalAmount>0}):this.showList=this.totalList},immediate:!0}},created:function(){this._getWalletsList()},methods:{_getWalletsList:function(){var t=this;this.loading=!0,Object(s.b)().then(function(e){if(t.loading=!1,0===e.code){if(t.totalList=e.data.currencyList,!t.hideAll&&t.hide)return void(t.showList=t.totalList.filter(function(t){return t.totalAmount>0}));if(!t.hideAll&&!t.hide)return void(t.showList=t.totalList)}}).catch(function(e){t.loading=!1})},_applyaddress:function(t){var e=this;this.loading=!0,Object(s.a)(t).then(function(t){e.loading=!1,0===t.code&&(e.$toast(e.$t("wallets.senQingChengGong")),e._getWalletsList())}).catch(function(t){e.loading=!1})},onCopy:function(){this.$toast(this.$t("wallets.copySuccess"))},onError:function(){}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wallet-list"},[t.showList.length>0?a("van-list",{attrs:{finished:!0},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.showList,function(e,s){return a("van-cell",{key:s,staticClass:"van-cell-border"},[[a("div",{staticClass:"item"},[a("div",{staticClass:"currency"},[t._v("\n            "+t._s(e.currency)+"\n          ")]),t._v(" "),a("span",{staticClass:"divide"},[t._v("|")]),t._v(" "),a("div",{staticClass:"amount"},[a("div",{staticClass:"t"},[t._v("\n            "+t._s(t.$t("wallets.zangHuYuE"))+"："+t._s(e.totalAmount.toFixed(6))+"\n            ")]),t._v(" "),a("div",{staticClass:"b"},[a("div",[t._v(t._s(t.$t("wallets.xiaDanDongJie"))+"："+t._s(e.orderFreeze.toFixed(6)))]),t._v(" "),a("div",[t._v(t._s(t.$t("wallets.suoCang"))+"："+t._s(e.lockAmount.toFixed(6)))])])])]),t._v(" "),t._l(e.address,function(e,s){return a("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.address,expression:"subItem.address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],key:s,staticClass:"van-item-address"},[e.address?a("span",{staticClass:"addressRow"},[a("span",{staticClass:"address_name"}),t._v(t._s(e.address)+" "),a("span",{staticClass:"clickCopy_span"},[t._v(t._s(t.$t("wallets.clickCopyAddress",{msg:e.baseChain})))])]):t._e()])}),t._v(" "),0==e.address.length?a("van-button",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{type:"primary",size:"small"},on:{click:function(a){t._applyaddress(e.currency)}}},[t._v(t._s(t.$t("wallets.senQingDiZhi")))]):t._e()]],2)})):t._e(),t._v(" "),t.loading?a("my-loading"):t._e()],1)},staticRenderFns:[]};var o=a("VU/8")(n,i,!1,function(t){a("eFKy")},"data-v-1c336908",null).exports,l=a("ZhPz"),r={data:function(){return{amount:0,currency:"",qhAddress:"",isCreateQh:!1,usdtYeE:0,base:"",transType:!0}},created:function(){this._getBase()},computed:{transNumber:function(){return 0===this.amount?0:this.transType?(this.amount*this.base.rate).toFixed(6):(this.amount/this.base.rate).toFixed(6)}},methods:{_getBase:function(){var t=this;Object(l.a)().then(function(e){0===e.code&&(t.base=e.data,t.currency=e.data.currency,t.qhAddress=e.data.qhAddress,t.isCreateQh=e.data.isCreateQh,t.usdtYeE=e.data.fromAmount.toFixed(6))})},_transfer:function(){var t=this;this.amount<=0?this.$toast.fail(this.$t("wallets.zhuanRuDayu0")):this.amount>this.usdtYeE?this.$toast.fail(this.$t("wallets.zhuanRuDayuE")):Object(l.c)({amount:+this.amount}).then(function(e){0===e.code&&(t.$toast.fail(t.$t("wallets.zhuanChangNeiSuccess")),t.amount=0,t._getBase())})},onChangeTransfer:function(){var t=this,e=this.amount.split(".")[1];(e?e.length:0)>2&&setTimeout(function(){t.amount=Number(t.amount).toFixed(2)},20)}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wallet-futures"},[a("div",{staticClass:"box"},[a("span",{staticClass:"text-pay"},[t._v("\n      "+t._s(t.base.fromCurrency)+" "+t._s(t.$t("wallets.yuE"))+": "+t._s(t.usdtYeE)+"\n    ")]),t._v(" "),a("van-cell-group",{staticClass:"over-percent"},[a("van-field",{attrs:{label:t.$t("wallets.importAmount"),type:"number",placeholder:t.$t("wallets.importAmount")},on:{input:t.onChangeTransfer},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}),t._v(" "),a("van-field",{staticStyle:{"background-color":"#eee"},attrs:{label:t.$t("wallets.innerAmount"),disabled:""},model:{value:t.transNumber,callback:function(e){t.transNumber=e},expression:"transNumber"}})],1),t._v(" "),a("div",{staticClass:"submit"},[a("van-button",{attrs:{type:"primary",disabled:!t.isCreateQh},on:{click:t._transfer}},[t._v(" "+t._s(t.$t("wallets.zhuanRuChangNei")))])],1)],1)])},staticRenderFns:[]};var u={data:function(){return{hide:!0,hideAll:!1,isCreateQh:!1}},mounted:function(){this.$store.commit("setFooterActive","wallet"),this._getBase()},created:function(){this.$store.commit("setShowFooter",1)},methods:{onClickLeft:function(){this.$store.commit("setSendCoinFlag",!0),this.$router.push("/account/mysendcoin")},onClickRight:function(){this.$router.push("/wallets/payment")},_getBase:function(){var t=this;Object(l.a)().then(function(e){0===e.code&&(t.isCreateQh=e.data.isCreateQh,console.log(t.isCreateQh))})}},components:{WalletList:o,WalletFutures:a("VU/8")(r,c,!1,function(t){a("Mxwo"),a("njCW")},"data-v-4cf2f20c",null).exports}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wallets"},[a("g-head",[a("van-nav-bar",{attrs:{"left-text":t.$t("wallets.yiJianFaBi"),title:t.$t("wallets.ziChan"),"right-text":t.$t("wallets.fuKuan")},on:{"click-right":t.onClickRight,"click-left":t.onClickLeft}})],1),t._v(" "),a("div",{staticClass:"hide-wallet zanNeiZhuanZhang"},[a("router-link",{staticClass:"item",attrs:{tag:"div",to:"/wallets/transfer"}},[a("span",[t._v(" "+t._s(t.$t("wallets.zanNeiZhuanZhang")))]),t._v(" "),a("van-icon",{staticClass:"arrow",attrs:{name:"arrow"}})],1)],1),t._v(" "),a("div",{staticClass:"hideAll-wallet"},[a("span",[t._v(t._s(t.$t("wallets.hideMoney")))]),t._v(" "),a("van-switch",{model:{value:t.hideAll,callback:function(e){t.hideAll=e},expression:"hideAll"}})],1),t._v(" "),a("div",{staticClass:"hide-wallet pos-top"},[a("span",[t._v(t._s(t.$t("wallets.hide0Money")))]),t._v(" "),a("van-switch",{model:{value:t.hide,callback:function(e){t.hide=e},expression:"hide"}})],1),t._v(" "),a("div",{staticClass:"list"},[a("wallet-list",{attrs:{hide:t.hide,hideAll:t.hideAll}})],1),t._v(" "),a("wallet-futures")],1)},staticRenderFns:[]};var h=a("VU/8")(u,d,!1,function(t){a("rQi9"),a("hRx+")},"data-v-f29bc3f8",null);e.default=h.exports},Mxwo:function(t,e){},ZhPz:function(t,e,a){"use strict";e.b=function(){return i.a.get("/qh/enter").then(function(t){return n.a.resolve(t.data)})},e.a=function(){return i.a.post("/qh/base").then(function(t){return n.a.resolve(t.data)})},e.c=function(t){var e=t.amount,a=t.remark,s=void 0===a?"":a;return i.a.post("/qh/rj",{amount:e,remark:s}).then(function(t){return n.a.resolve(t.data)})};var s=a("//Fk"),n=a.n(s),i=a("8Klu")},eFKy:function(t,e){},"hRx+":function(t,e){},njCW:function(t,e){},rQi9:function(t,e){},"u/ZP":function(t,e,a){"use strict";e.b=function(){return i.a.get("/account/wallets").then(function(t){return n.a.resolve(t.data)})},e.a=function(t){return i.a.post("/account/applyaddress",{currency:t}).then(function(t){return n.a.resolve(t.data)})};var s=a("//Fk"),n=a.n(s),i=a("8Klu")}});