webpackJsonp([19],{"3vUD":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Dd8w"),c=r.n(n),a=r("u/ZP"),u=r("NYxO"),s={data:function(){return{selectCurrency:!1,currencyArr:[],currency:""}},computed:c()({qrVal:function(){return this.currency?this.get_Id+"_"+this.currency:""},balance:function(){var t=this;if(this.currency){var e=this.currencyArr.findIndex(function(e){return e.currency===t.currency});return e>-1?this.currency+this.$t("wallets.yuE")+":"+this.currencyArr[e].availableAmount:""}}},Object(u.b)(["get_Id","getToken"])),created:function(){this.getToken||this.$router.push("/account"),this._getWalletsList()},methods:{onClickLeft:function(){this.$router.push("/wallets")},onChangeCurrency:function(t,e){this.currency=e.currency,this.get_Id||this.$router.push("/account"),this.selectCurrency=!1},_getWalletsList:function(){var t=this;Object(a.b)().then(function(e){if(0==e.code){var r=e.data;r.currencyList.length>0&&(r.currencyList.forEach(function(e){e.totalAmount>0&&t.currencyArr.push(e)}),t.currencyArr.length>0&&(t.currency=t.currencyArr[0].currency))}})}}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"payment"},[r("g-head",[r("van-nav-bar",{attrs:{title:t.$t("wallets.fuKuan"),"left-arrow":""},on:{"click-left":t.onClickLeft}})],1),t._v(" "),t.currencyArr.length?r("div",{staticClass:"select"},[r("van-cell-group",[r("van-cell",{attrs:{title:t.$t("wallets.supportCurrencySort"),"is-link":"",value:t.balance},on:{click:function(e){t.selectCurrency=!0}}})],1),t._v(" "),t.qrVal?r("div",{staticClass:"qrcode"},[r("qrcode",{staticClass:"qr",attrs:{value:t.qrVal,size:"300"}})],1):t._e()],1):r("div",[r("van-cell-group",[r("van-cell",{attrs:{title:t.$t("wallets.avaiBalance")}})],1)],1),t._v(" "),r("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:t.selectCurrency,callback:function(e){t.selectCurrency=e},expression:"selectCurrency"}},[r("van-picker",{attrs:{columns:t.currencyArr,"value-key":"currency"},on:{change:t.onChangeCurrency}})],1)],1)},staticRenderFns:[]};var i=r("VU/8")(s,l,!1,function(t){r("dMOP")},"data-v-74a1d233",null);e.default=i.exports},dMOP:function(t,e){},"u/ZP":function(t,e,r){"use strict";e.b=function(){return a.a.get("/account/wallets").then(function(t){return c.a.resolve(t.data)})},e.a=function(t){return a.a.post("/account/applyaddress",{currency:t}).then(function(t){return c.a.resolve(t.data)})};var n=r("//Fk"),c=r.n(n),a=r("8Klu")}});