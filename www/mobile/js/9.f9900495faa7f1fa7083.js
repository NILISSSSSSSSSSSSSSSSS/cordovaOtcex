webpackJsonp([9],{B64m:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=n("Dd8w"),e=n.n(s),i=n("NYxO"),o=n("nv77"),c={data:function(){return{userInfo:{},loading:!1}},computed:e()({},Object(i.b)(["getToken"])),watch:{getToken:{handler:function(t){t&&this._getUserDetail()},immediate:!0}},methods:{_getUserDetail:function(){var t=this;this.loading=!0,Object(o.a)().then(function(a){if(0===a.code){if(t.userInfo=a.data,a.data.avatar)(new Image).src=a.data.avatar;a.data.inviteCode&&t.$store.commit("setInviteCode",a.data.inviteCode),t.$store.commit("set_Id",a.data._id)}else 30003===a.code&&t.$router.push("/user/login");t.loading=!1}).catch(function(a){t.loading=!1})}}},r={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"account-info"},[t.getToken?s("div",{staticClass:"info"},[t.userInfo.name?s("div",{staticClass:"avatar"},[t.userInfo.avatar?s("img",{attrs:{src:t.userInfo.avatar}}):s("img",{attrs:{src:n("XOEb")}})]):t._e(),t._v(" "),s("div",{staticClass:"information"},[s("div",{staticClass:"top"},[t._v(t._s(t.userInfo.name))]),t._v(" "),s("div",{staticClass:"buttom"},[t._v("\n        "+t._s(t.$t("account.trade"))+" "+t._s(t.userInfo.tradeCount)+" |\n        "+t._s(t.$t("account.praise"))+"  "+t._s((100*t.userInfo.positiveRate).toFixed(2)+"%")+"\n      ")])])]):s("router-link",{staticClass:"on-login info",attrs:{tag:"div",to:"/user/login"}},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:n("XOEb"),alt:""}})]),t._v(" "),s("div",{staticClass:"information"},[s("div",{staticClass:"top"},[t._v(t._s(t.$t("account.logAndReg"))+" ")]),t._v(" "),s("div",{staticClass:"buttom"},[t._v(t._s(t.$t("account.readMore"))+" ")])])]),t._v(" "),t.loading?s("my-loading"):t._e()],1)},staticRenderFns:[]};var l=n("VU/8")(c,r,!1,function(t){n("IB9T")},"data-v-225d98a6",null).exports,u={data:function(){return{columns:[],langShow:!1,langList:[]}},computed:e()({},Object(i.b)(["getToken","getTwoStep","getInviteCode","getFuturesUrl","getUnread","getCommon"]),{isTwoStep:function(){return!!this.getTwoStep},isinvite:function(){return!!this.getInviteCode}}),created:function(){return!window.location.href.includes("bibiex.io/")&&!window.location.href.includes("bibiex.io/")},methods:e()({senCoinIsShow:function(){var t=null;return!(t=""==this.serverIP?window.location.href:this.serverIP).includes("otcah.com")&&!t.includes("aaaex.vip")},gotoAdver:function(){this.$store.commit("setSendCoinFlag",!1),this.$router.push("/account/mysendcoin")},handleLogOut:function(){var t=this;this.$dialog.confirm({title:this.$t("account.signOut"),message:this.$t("account.sureSignOut"),confirmButtonText:this.$t("common.sure"),cancelButtonText:this.$t("common.cancel")}).then(function(){t.setTwoStep(""),t.setInviteCode(""),t.$store.commit("setToken",""),localStorage.setItem("loginTime",""),t.getFuturesUrl?t.$router.push("/futures?logout=true"):t.$router.push("/user/login")}).catch(function(){})}},Object(i.c)({setTwoStep:"setTwoStep",setToken:"setToken",setInviteCode:"setInviteCode"}))},v={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"funtion-list"},[n("van-list",[n("van-cell",[n("router-link",{staticClass:"item",attrs:{tag:"div",to:"/hc"}},[n("van-icon",{staticClass:"question",attrs:{name:"question"}}),t._v(" "),n("span",[t._v(t._s(t.$t("account.helpCenter")))]),t._v(" "),n("van-icon",{staticClass:"arrow",attrs:{name:"arrow"}})],1)],1),t._v(" "),n("van-cell",[n("router-link",{staticClass:"item",attrs:{tag:"div",to:"/account/lang"}},[n("em",{staticClass:"question iconfont icon-duoyuyan"}),t._v(" "),n("span",[t._v(t._s(t.$t("account.lang")))]),t._v(" "),n("van-icon",{staticClass:"arrow",attrs:{name:"arrow"}})],1)],1),t._v(" "),n("van-cell",[n("router-link",{staticClass:"item",attrs:{tag:"div",to:"/advertisement/adver-list"}},[n("em",{staticClass:"question iconfont icon-guanggao2"}),t._v(" "),n("span",[t._v(t._s(t.$t("account.myAdvertise")))]),t._v(" "),n("van-icon",{staticClass:"arrow",attrs:{name:"arrow"}})],1)],1),t._v(" "),n("van-cell",[n("router-link",{staticClass:"item",attrs:{tag:"div",to:"/orders"}},[n("em",{staticClass:"question iconfont icon-guanggao"}),t._v(" "),n("span",[t._v(t._s(t.$t("account.overTheCounterOrders")))]),t._v(" "),n("em",{directives:[{name:"show",rawName:"v-show",value:t.getUnread,expression:"getUnread"}],staticClass:"msg",attrs:{type:"danger"}},[t._v(t._s(t.getUnread?t.getUnread:""))]),t._v(" "),n("van-icon",{staticClass:"arrow",attrs:{name:"arrow"}})],1)],1),t._v(" "),n("van-cell",[n("router-link",{staticClass:"item",attrs:{tag:"div",to:"/account/transactions"}},[n("em",{staticClass:"icon-zijinliushuimingxi iconfont question"}),t._v(" "),n("span",[t._v(t._s(t.$t("account.capitalFlow")))]),t._v(" "),n("van-icon",{staticClass:"arrow",attrs:{name:"arrow"}})],1)],1),t._v(" "),t.isTwoStep?n("van-cell",[n("router-link",{staticClass:"item",attrs:{tag:"div",to:"/account/unbinding"}},[n("em",{staticClass:"iconfont question icon-jiebang"}),t._v(" "),n("span",[t._v(t._s(t.$t("account.unbindTwoVerification")))]),t._v(" "),n("van-icon",{staticClass:"arrow",attrs:{name:"arrow"}})],1)],1):t._e(),t._v(" "),t.senCoinIsShow()?n("van-cell",[n("div",{staticClass:"item",on:{click:t.gotoAdver}},[n("em",{staticClass:"icon-zijinliushuimingxi iconfont question"}),t._v(" "),n("span",[t._v(t._s(t.$t("mySendCoin.mysendCoin")))]),t._v(" "),n("van-icon",{staticClass:"arrow",attrs:{name:"arrow"}})],1)]):t._e(),t._v(" "),t.isinvite?n("van-cell",[n("router-link",{staticClass:"item",attrs:{tag:"div",to:"/account/invitation"}},[n("em",{staticClass:"question iconfont icon-yaoqingma"}),t._v(" "),n("span",[t._v(t._s(t.$t("account.invitation")))]),t._v(" "),n("van-icon",{staticClass:"arrow",attrs:{name:"arrow"}})],1)],1):t._e(),t._v(" "),n("van-cell",[n("router-link",{staticClass:"item",attrs:{tag:"div",to:"/account/tradeConfig"}},[n("em",{staticClass:"question iconfont icon-jiaoyi"}),t._v(" "),n("span",[t._v(t._s(t.$t("account.tradeSetting")))]),t._v(" "),n("van-icon",{staticClass:"arrow",attrs:{name:"arrow"}})],1)],1),t._v(" "),t.getToken?n("van-cell",[n("div",{staticClass:"item",on:{click:t.handleLogOut}},[n("em",{staticClass:"question iconfont icon-dengchu"}),t._v(" "),n("span",[t._v(t._s(t.$t("account.signOut")))]),t._v(" "),n("van-icon",{staticClass:"arrow",attrs:{name:"arrow"}})],1)]):t._e()],1)],1)},staticRenderFns:[]};var d={components:{AccountInfo:l,FunctionList:n("VU/8")(u,v,!1,function(t){n("eMys")},"data-v-3eec2d9a",null).exports},created:function(){this.$store.commit("setShowFooter",1)},mounted:function(){this.$store.commit("setFooterActive","mine")}},m={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"account"},[a("g-head",{staticClass:"head"},[this._v(this._s(this.$t("common.woDe")))]),this._v(" "),a("account-info"),this._v(" "),a("function-list",{staticClass:"function-list"})],1)},staticRenderFns:[]};var g=n("VU/8")(d,m,!1,function(t){n("VBMn")},"data-v-01cfcdac",null);a.default=g.exports},IB9T:function(t,a){},VBMn:function(t,a){},XOEb:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEBklEQVRoQ+2Zj20VMQzG7QmACaATABNAJwAmgE5AmQCYgHYC2glaJqDdgE5AO0HpBEa/p+Qp9y652HdHpUpYOlXVyyX+7M9/4lN54KIPXH/5D6D0oJm9EJHnIvKseFjyS0T+iMi1iFypKv+vIos9YGZvRORteh47tQLMuYgcLwUzG4CZvReRL8nSTr2ryy5E5ERVT+dsEgZgZq9F5JuIQJc1BSAHqgrN3BICYGafk9XdBwQXQq1Pqnrifc8FwMzgNlb/4N144ToodeDZowsgKf8zSJmblHGgA0/OStDukUexFBddEB4AZynDeM69gmKqSoapipmRsQh+0m1Pup6YBGBmHATvPXKqqi6KJa/Cc1JwTwjsZkw0AaRsA3U8QnEKZaUEgoL2tHMAgf2ylZ2mAPwO5Ph3U7SZoNNhSg49I12o6n5tURVAkDp3quqtwAMdkhdue9qn3/dVlVoxkBaAiPUvVZXiNkvMjCzVoxF7V70wAmBmBOL3gDbu4K3taWZY9ZXzPGJh0AjWAJACPdkhn/lVVclWsyQIgOaPuNlKDYAFNblPANequtcEkIoMhSsiI6tEXg56gK33ypQ68EAw+2Q9lwZxJGFw5iBl7wKg4tHnR+WJqlJwQmJm9EgAiMiAsrsAIhmhPHSy3Le0m+nxfwJgFFw9k6YihvWjRXAQc2t5AH25iBz1FM+/mxlrP3rXF+sGdWdNAMQA5b47cZiZ7TKGSQrNDeK8OW0BWaIJIo1e6HKj1HEBiPT/Le/jicPalMHMoIybZo0DJtMot6VoIWsBwRu0JQAiXdLw8XepTBYy3Optb7Mid8mq0A/qeO68x4lC0Zpzo6oDI9R6IW8tyIof5SJWyet5WFUquq3cqZBBWy+QUec7p50eKV6kRjyYr4nbw8ysTA6ji0kAiKudRgn4W6PCJbOhqelZcZ/YcrW4eU32TekeTpDXJhbVdyNXSvfFJd2yuEFtphQ1UFORvOOxvLTarrQAlFRgg1HwdBRAcWJjk+tTy0y74Rq7pHfKi1XTc1NTiTKlhps1M6MWbHJ+8sB5pGPd6VRH3M8G7A22cr8yq11ekvCLik3r0Cx+ntEiWeW2NZdZouREmw31aDcYmE3SzgOAzagNFDjKePjiEgFZDJO7yrNvF0DicAbBhZ946HacEaWLOsJ4Esv/6FneFQO7SqQefvNpSVVpB1aRZHUaPapy6F7h8kCpZSo2VFa8AZBZ37YKq+dvbVR4imTIu2EABaUYMBFgACFnU+hch5sZkzjSNO+jOIZwf1YqDToLwI5HUAJlmOYR4IDI34XLpcQRHKetRmlAUxuaH0M8/FwMoEIvFMzKlj8Dih6LFsPlqXsH4Dlw7TWremBt5Tz7PXgAfwFE+M9Aq81uQwAAAABJRU5ErkJggg=="},eMys:function(t,a){}});