webpackJsonp([4],{"9DuZ":function(t,e){},CVqC:function(t,e,n){"use strict";var i={props:{speed:{type:Number,default:50}},data:function(){return{}},mounted:function(){var t=this;this.$nextTick().then(function(){var e=document.querySelector("#marquee"),n=document.querySelector("#con1");t.timmer=setInterval(function(){t.scrollUp(e,n)},t.speed)})},destroyed:function(){clearInterval(this.timmer)},methods:{scrollUp:function(t,e){t.scrollLeft>=e.clientWidth?t.scrollTop=0:t.scrollLeft++}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"marquee",attrs:{id:"marquee"}},[e("div",{attrs:{id:"con1"}},[this._t("default")],2)])},staticRenderFns:[]};var r=n("VU/8")(i,a,!1,function(t){n("c686")},"data-v-50e1c97d",null);e.a=r.exports},Tz9A:function(t,e){},XPSl:function(t,e){},c686:function(t,e){},hAHj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),a=n.n(i),r=n("woOf"),s=n.n(r),o=n("NYxO"),c=n("P9l9"),d={props:{currencylist:Array,refresh:{type:Number,default:0},tradeType:{type:String,required:!0}},data:function(){return{configFiatBi:"",totalList:[],loading:!1,currency:"",trade:"",pageSize:10,total:0,page:1,isRefresh:!1,refreshEnd:!0}},computed:a()({adverParams:function(){return{currency:this.currency,tradeType:this.tradeType,sort:"priceAsc",pageSize:this.pageSize}},finished:function(){return this.page*this.pageSize>=this.total},noData:function(){return!this.loading&&0===this.totalList.length},tradeText:function(){return"buy"===this.tradeType?this.$t("common.maiRu"):this.$t("common.maiChu")}},Object(o.b)(["getTradeSearch"])),watch:{adverParams:{handler:function(t){this.page=1,this.totalList=[],this.loading?this.refreshEnd=!1:(window.scrollTo(0,0),this._getAdverList())},deep:!0},refresh:function(t){var e=this;this.isRefresh=!0,this.page=1,this.totalList=[],this._getAdverList(!0).then(function(){e.isRefresh=!1,e.$emit("refreshEnd")})},getTradeSearch:{handler:function(t){this.currency=t.currency||"BTC"},deep:!0,immediate:!0},currencylist:{handler:function(t,e){t.includes(this.currency)||(this.currency="BTC")},deep:!0},loading:function(t){var e=this;this.$emit("loadingChange",t),t||this.refreshEnd||(this.page=1,this.totalList=[],this._getAdverList().then(function(){e.refreshEnd=!0}))}},created:function(){this.configFiatBi=localStorage.getItem("configFiatBi"),this.init()},methods:{init:function(){this.refreshEnd=!0},_getAdverList:function(){var t=this;return this.isRefresh||(this.loading=!0),Object(c.i)(s()({},this.adverParams,{page:this.page},{tradeType:"buy"===this.adverParams.tradeType?"sell":"buy"})).then(function(e){if(t.loading=!1,0===e.code)return 1===t.page&&(t.totalList=e.data.list),t.total=e.data.count,t.$emit("compuHeight",t.totalList.length),e.data.list}).catch(function(e){t.loading=!1})},loadList:function(){var t=this;this.finished||this.isRefresh||(this.page+=1,this._getAdverList().then(function(e){e&&(t.totalList=t.totalList.concat(e),t.$emit("compuHeight",t.totalList.length))}))},gotoOffers:function(t){var e={tradeType:this.tradeText,currency:this.currency,advertiseId:t};this.$emit("trading",!0,e)}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"trade-list"},[i("div",{staticClass:"list"},[t.totalList.length>0?i("van-list",{attrs:{finished:t.finished,offset:10},on:{load:t.loadList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.totalList,function(e,a){return i("van-cell",{key:a,staticClass:"adver-list"},[[i("div",{staticClass:"trade-adver",on:{click:function(n){t.gotoOffers(e._id)}}},[i("div",{staticClass:"avatar"},[e.owner.avatar?i("img",{staticStyle:{"border-radius":"50%"},attrs:{src:e.owner.avatar}}):i("img",{attrs:{src:n("pBnh")}}),t._v(" "),i("div",{staticClass:"button"},[i("van-button",{attrs:{type:"primary",size:"mini"}},[t._v(t._s(t.tradeText))])],1),t._v(" "),i("p")]),t._v(" "),i("div",{staticClass:"main"},[i("div",{staticClass:"name"},[i("span",[t._v(t._s(e.owner.name))])]),t._v(" "),i("div",{staticClass:"price"},[t._v("\n                "+t._s(t.$t("common.price"))+": "+t._s(e.usdt_floatPrice?e.usdt_floatPrice.toFixed(6):"")+" "+t._s(t.configFiatBi)+"\n              ")]),t._v(" "),i("div",{staticClass:"limit"},[t._v("\n                "+t._s(t.$t("common.zuiShao"))+": "+t._s("sell"==e.tradeType?""+(-1!==(e.usdtFloorPrice+"").indexOf(".")?e.usdtFloorPrice.toFixed(2):e.usdtFloorPrice)+t.configFiatBi:(-1!==(e.orderFloorPrice+"").indexOf(".")?e.orderFloorPrice.toFixed(2):e.orderFloorPrice)+" "+e.currency)+"\n              ")]),t._v(" "),i("div",{staticClass:"limit"},[t._v("\n                "+t._s(t.$t("common.zuiDuo"))+": "+t._s("sell"==e.tradeType?(-1!==(e.usdtCeilPrice+"").indexOf(".")?e.usdtCeilPrice.toFixed(2):e.usdtCeilPrice)+" "+t.configFiatBi:(-1!==(e.orderCeilPrice+"").indexOf(".")?e.orderCeilPrice.toFixed(2):e.orderCeilPrice)+" "+e.currency)+"\n              ")])])])]],2)})):t._e()],1),t._v(" "),t.noData?i("no-data",{staticStyle:{height:"100%"}}):t._e()],1)},staticRenderFns:[]};var l=n("VU/8")(d,u,!1,function(t){n("9DuZ"),n("Tz9A")},"data-v-663e57cb",null).exports,h=n("t5DY"),f=n("Izdj"),m=n("pxwZ"),g=n("CVqC"),v={mixins:[f.a],data:function(){return{configFiatBi:"",refresh1:0,refresh2:0,isLoading1:!1,isLoading2:!1,loading:!1,currencyList:[],tradingFlag:!1,currency:"",advertiseId:"",trade:{amount:"",phoneCode:"",googleCode:"",usdt:""},isbuy:!0,authMode:"phone",countDown:"",authlist:{},phone:"",currencyInfo:{},popTitle:"",labelTitle:"",ordersData:[],timmer:null,userInfoOnce:!1,tradeType:""}},computed:a()({activeCurrency:function(){return this.currencyList?this.currencyList.indexOf(this.currency):0},canSend:function(){return this.countDown>0}},Object(o.b)(["getTradeSearch","getCommon"])),watch:{getTradeSearch:{handler:function(t){this.currency=t.currency||"BTC"},deep:!0,immediate:!0},getCommon:{handler:function(t){var e=this;this.timmer&&clearInterval(this.timmer);var n=t?t.lampRefresh:10;this.timmer=setInterval(function(){e._getOrdersInfo()},1e3*n)},deep:!0,immediate:!0}},created:function(){this.configFiatBi=localStorage.getItem("configFiatBi"),this.getCommon&&this.getCommon.enableUSDT||this.$router.push("/trade"),this._getOrdersInfo(!0),this._getCommon(),this.$store.commit("setShowFooter",1)},mounted:function(){this.$store.commit("setFooterActive","fastTrade"),this.$refs.left.$el.style.minHeight=document.body.clientHeight-150+"px"},destroyed:function(){clearInterval(this.timmer)},methods:{trading:function(t,e){this.userInfoOnce?(this.tradingFlag=t,this.popTitle=e.tradeType+e.currency,this.labelTitle=e.currency,"买入"==e.tradeType?(this.tradeType="buy",this.isbuy=!0):(this.tradeType="sell",this.isbuy=!1),this.advertiseId=e.advertiseId,this.clear()):this._getTranInfo(t,e)},clear:function(){this.trade.usdt="",this.trade.amount="",this.trade.phoneCode="",this.trade.googleCode=""},popCancel:function(){this.tradingFlag=!1},handLeftAmount:function(t){var e=this,n=Number(t);isNaN(n)?t=0:0!=n?("buy"===this.tradeType?this.convertType="currency":this.convertType="fiatCurrency",Object(m.c)({id:this.advertiseId,amount:n,convertTo:this.convertType}).then(function(t){0===t.code&&(e.trade.amount=t.data.usdtAmount.toFixed(8))})):this.trade.amount=0},handRightAmount:function(t){var e=this,n=Number(t);isNaN(n)?t=0:0!=n?("buy"===this.tradeType?this.convertType="fiatCurrency":this.convertType="currency",Object(m.c)({id:this.advertiseId,amount:n,convertTo:this.convertType}).then(function(t){0===t.code&&(e.trade.usdt=t.data.usdtAmount.toFixed(8))})):this.trade.usdt=0},handLeftAmount2:function(t){var e=this,n=Number(t);isNaN(n)?t=0:0!=n?("buy"===this.tradeType?this.convertType="currency":this.convertType="fiatCurrency",Object(m.c)({id:this.advertiseId,amount:n,convertTo:this.convertType}).then(function(t){0===t.code&&(e.trade.usdt=t.data.usdtAmount.toFixed(8))})):this.trade.usdt=0},handRightAmount2:function(t){var e=this,n=Number(t);isNaN(n)?t=0:0!=n?("buy"===this.tradeType?this.convertType="fiatCurrency":this.convertType="currency",Object(m.c)({id:this.advertiseId,amount:n,convertTo:this.convertType}).then(function(t){0===t.code&&(e.trade.amount=t.data.usdtAmount.toFixed(8))})):this.trade.amount=0},onRefresh1:function(){this.refresh1+=1},onRefresh2:function(){this.refresh2+=1},refreshEnd1:function(){this.$toast(this.$t("common.shuaXinSuccess")),this.isLoading1=!1},refreshEnd2:function(){this.$toast(this.$t("common.shuaXinSuccess")),this.isLoading2=!1},cutTabs:function(){this.currency=arguments.length<=1?void 0:arguments[1],this.$store.commit("setTradeSearch",{currency:arguments.length<=1?void 0:arguments[1]})},loadingChange:function(t){this.loading=t},_getCommon:function(){var t=this;Object(h.a)("yes").then(function(e){if(0===e.code){var n=[];e.data.currency.forEach(function(e){e!==t.configFiatBi&&n.push(e)}),t.currencyList=n}})},selectAuthMode:function(t){0===t?this.authMode="phone":1===t&&(this.authMode="twophase")},_getTranInfo:function(t,e){var n=this;Object(c.h)().then(function(i){0==i.code?(n.authlist=i.data.authlist||{},n.currencylist=i.data.currencylist||[],n.phone=i.data.phone||"",n.userInfoOnce=!0,n.tradingFlag=t,n.popTitle=e.tradeType+e.currency,n.labelTitle=e.currency,"买入"==e.tradeType?(n.tradeType="buy",n.isbuy=!0):(n.tradeType="sell",n.isbuy=!1),n.advertiseId=e.advertiseId,n.clear()):n.userInfoOnce=!1}).catch(function(t){n.userInfoOnce=!1})},handleRegister:function(){var t=this,e=this.trade.amount.trim();if(this.isNumber(e)&&+e){var n={advertiseId:this.advertiseId,authMode:this.authMode,convertAmount:+e};if("phone"==this.authMode){if(!this.trade.phoneCode.trim())return void this.$toast.fail(this.$t("yanZheng.pleaseHolder1"));n.authCode=this.trade.phoneCode.trim()}if("twophase"==this.authMode){if(!this.trade.googleCode.trim())return void this.$toast.fail(this.$t("yanZheng.pleaseHolder2"));n.authCode=this.trade.googleCode.trim()}this.transferOnce||(this.transferOnce=!0,Object(c.b)(n).then(function(e){t.transferOnce=!1,0==e.code&&(t.$toast.success(t.$t("common.tradeSuccess")),t.tradingFlag=!1)}).catch(function(e){t.transferOnce=!1}))}else this.$toast.fail(this.$t("common.zhuanBiDayu0"))},getCode:function(){var t=this;if(this.phone){var e=this.trade.amount.trim();this.isNumber(e)&&+e?Object(c.e)().then(function(e){0==e.code&&(t.$toast.success(t.$t("yanZheng.yanZhengMaTips")),t._countDown())}):this.$toast.fail(this.$t("common.zhuanBiDayu0"))}else this.$toast.fail(this.$t("yanZheng.shouJIweiKong"))},_countDown:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6e4,n=(new Date).getTime()+e;this.timmer=setInterval(function(){t.countDown=((n-(new Date).getTime())/1e3).toFixed(0),t.countDown<=0&&clearInterval(t.timmer)},1e3)},isNumber:function(t){return/^(-?\d+)(\.\d+)?$/.test(t)},_getOrdersInfo:function(){var t=this;Object(h.b)().then(function(e){e&&(t.ordersData=t.ordersData.concat(e.slice(0,2))),t.ordersData.length>60&&(t.ordersData=[])}).catch(function(t){console.error(t)})}},components:{TradeList:l,MyMarquee:g.a}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"trade"},[n("g-head",[n("van-nav-bar",{attrs:{title:t.$t("fastTrade.fastTradeTit1",{msg:this.configFiatBi})}})],1),t._v(" "),n("div",{staticClass:"currency"},[n("van-tabs",{attrs:{duration:.5,active:t.activeCurrency},on:{click:t.cutTabs}},t._l(t.currencyList,function(t,e){return n("van-tab",{key:e,attrs:{title:t}})}))],1),t._v(" "),n("div",{staticClass:"list-wraper"},[n("van-pull-refresh",{ref:"left",staticClass:"list",attrs:{"loosing-text":t.$t("loading.siFangJikeShuaXin"),"loading-text":t.$t("loading.jiaZaiZhong"),"pulling-text":t.$t("loading.xiaLaJiKeShuaXin")},on:{refresh:t.onRefresh1},model:{value:t.isLoading1,callback:function(e){t.isLoading1=e},expression:"isLoading1"}},[n("trade-list",{attrs:{currencylist:t.currencyList,refresh:t.refresh1,tradeType:"buy"},on:{refreshEnd:t.refreshEnd1,loadingChange:t.loadingChange,trading:t.trading}})],1),t._v(" "),n("van-pull-refresh",{ref:"right",staticClass:"list",attrs:{"loosing-text":t.$t("loading.siFangJikeShuaXin"),"loading-text":t.$t("loading.jiaZaiZhong"),"pulling-text":t.$t("loading.xiaLaJiKeShuaXin")},on:{refresh:t.onRefresh2},model:{value:t.isLoading2,callback:function(e){t.isLoading2=e},expression:"isLoading2"}},[n("trade-list",{attrs:{currencylist:t.currencyList,refresh:t.refresh2,tradeType:"sell"},on:{refreshEnd:t.refreshEnd2,loadingChange:t.loadingChange,trading:t.trading}})],1)],1),t._v(" "),n("van-popup",{staticClass:"offers",attrs:{position:"bottom"},on:{"click-overlay":t.popCancel},model:{value:t.tradingFlag,callback:function(e){t.tradingFlag=e},expression:"tradingFlag"}},[n("div",{staticClass:"trade-input"},[n("div",{staticClass:"title"},[t._v(t._s(t.popTitle))]),t._v(" "),t.isbuy?n("div",{staticClass:"buyAmount"},[n("p",[t._v(t._s(t.$t("fastTrade.buyAsk1"))+" "+t._s(this.configFiatBi)+" ?")]),t._v(" "),n("van-cell-group",[n("van-field",{attrs:{type:"number",placeholder:"0",icon:"clear"},on:{input:t.handLeftAmount,"click-icon":function(e){t.trade.usdt=""}},model:{value:t.trade.usdt,callback:function(e){t.$set(t.trade,"usdt",e)},expression:"trade.usdt"}})],1),t._v(" "),n("p",[t._v(t._s(t.$t("common.huanQu"))+" "+t._s(t.labelTitle))]),t._v(" "),n("van-cell-group",[n("van-field",{attrs:{type:"number",placeholder:"0",icon:"clear"},on:{input:t.handRightAmount,"click-icon":function(e){t.trade.amount=""}},model:{value:t.trade.amount,callback:function(e){t.$set(t.trade,"amount",e)},expression:"trade.amount"}})],1)],1):n("div",{staticClass:"buyAmount"},[n("p",[t._v(t._s(t.$t("fastTrade.buyAsk2"))+" "+t._s(t.labelTitle)+" ?")]),t._v(" "),n("van-cell-group",[n("van-field",{attrs:{type:"number",placeholder:"0",icon:"clear"},on:{input:t.handLeftAmount2,"click-icon":function(e){t.trade.amount=""}},model:{value:t.trade.amount,callback:function(e){t.$set(t.trade,"amount",e)},expression:"trade.amount"}})],1),t._v(" "),n("p",[t._v(t._s(t.$t("common.huanQu"))+" "+t._s(this.configFiatBi))]),t._v(" "),n("van-cell-group",[n("van-field",{attrs:{type:"number",placeholder:"0",icon:"clear"},on:{input:t.handRightAmount2,"click-icon":function(e){t.trade.usdt=""}},model:{value:t.trade.usdt,callback:function(e){t.$set(t.trade,"usdt",e)},expression:"trade.usdt"}})],1)],1),t._v(" "),n("van-tabs",{staticClass:"code-box",on:{click:t.selectAuthMode},model:{value:t.authMode,callback:function(e){t.authMode=e},expression:"authMode"}},[n("van-tab",{staticClass:"tab-list",attrs:{title:t.$t("yanZheng.duanXinYanZheng")}},[t.authlist.phone?n("van-field",{attrs:{center:"",label:t.$t("yanZheng.yanZhengMa"),placeholder:t.$t("yanZheng.pleaseHolder1"),icon:"clear"},on:{"click-icon":function(e){t.trade.phoneCode=""}},model:{value:t.trade.phoneCode,callback:function(e){t.$set(t.trade,"phoneCode",e)},expression:"trade.phoneCode"}},[n("van-button",{attrs:{slot:"button",disabled:t.canSend,size:"small",type:"primary"},on:{click:t.getCode},slot:"button"},[t._v("\n               "+t._s(t.$t("yanZheng.sendCode"))+"\n              "),t.countDown>0?n("span",[t._v(" ("+t._s(t.countDown)+")")]):t._e()])],1):n("van-cell",{staticClass:"cell-tip",attrs:{title:t.$t("yanZheng.goToGuanWang1")+" "+(t.systemConfig.siteDomain?t.systemConfig.siteDomain:"")+t.$t("yanZheng.mobileBngDing")}})],1),t._v(" "),n("van-tab",{staticClass:"tab-list",attrs:{title:t.$t("yanZheng.code_google")}},[t.authlist.twoPhase?n("van-field",{attrs:{center:"",label:t.$t("yanZheng.yanZhengMa"),placeholder:t.$t("yanZheng.pleaseHolder2"),icon:"clear"},on:{"click-icon":function(e){t.trade.googleCode=""}},model:{value:t.trade.googleCode,callback:function(e){t.$set(t.trade,"googleCode",e)},expression:"trade.googleCode"}}):n("van-cell",{staticClass:"cell-tip",attrs:{title:t.$t("yanZheng.goToGuanWang1")+""+(t.systemConfig.siteDomain?t.systemConfig.siteDomain:"")+t.$t("yanZheng.googleErCiYAnZheng")}})],1)],1),t._v(" "),n("div",{staticClass:"submit"},[n("van-button",{attrs:{type:"default",size:"small"},on:{click:t.popCancel}},[t._v(t._s(t.$t("common.cancel")))]),t._v(" "),n("van-button",{attrs:{type:"primary",size:"small"},on:{click:t.handleRegister}},[t._v(t._s(t.$t("common.sure")))])],1)],1)]),t._v(" "),n("my-marquee",{staticClass:"my-marquee"},t._l(t.ordersData,function(e,i){return n("span",{key:i,staticStyle:{"margin-right":"24px","font-size":"12px"}},[t._v("\n      "+t._s("buy"===e.order.type?e.order.customer+" "+t.$t("common.use")+" "+e.order.fiatCurrency+" "+t.$t("common.gouMai")+" "+e.order.amount.toFixed(6)+e.order.currency+" "+t.format(e.time,"hh:mm:ss"):e.order.customer+" "+t.$t("common.maiChu")+" "+e.order.amount.toFixed(6)+e.order.currency+" "+t.$t("common.huanQu")+" "+e.order.fiatCurrency+" "+t.format(e.time,"hh:mm:ss"))+"\n    ")])})),t._v(" "),t.loading?n("my-loading"):t._e()],1)},staticRenderFns:[]};var y=n("VU/8")(v,p,!1,function(t){n("uVII"),n("XPSl")},"data-v-6071db76",null);e.default=y.exports},uVII:function(t,e){}});