webpackJsonp([11],{"5L8b":function(t,i){},BdqR:function(t,i){},"Rp/m":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=n("//Fk"),e=n.n(a),s=n("8Klu");n("IcnI");var o={data:function(){return{loading:!1,faBiList:[],page:1,pageSize:10,totalCount:0,isRefresh:!1,sendDialog:!1,currencyName:"",faBiShuLiang:""}},filters:{statusFilter:function(t){return"PUTIN"==t?$vm.$t("mySendCoin.yiShenQing"):"INPROGRESS"==t?$vm.$t("mySendCoin.jinXingZhong"):"FINISHED"==t?$vm.$t("mySendCoin.yiWanCheng"):"CANCELLED"==t?$vm.$t("mySendCoin.yiQuXiao"):void 0}},computed:{finished:function(){return console.log(this.faBiList.length+"nnnnnnn"+this.totalCount),this.faBiList.length>=this.totalCount},noData:function(){return!this.loading&&0===this.faBiList.length}},created:function(){this._getCoinList()},methods:{wanFaBi:function(){this.currencyName=this.faBiShuLiang="",this.sendDialog=!0},submit:function(){var t=this;if(this.currencyName.length>=16)this.$toast.fail(this.$t("mySendCoin.faBiNameXiaoYu16"));else if(""!=this.currencyName)if(/^[\u4E00-\u9FA5A-Za-z0-9]+$/.test(this.currencyName))if(""!=this.faBiShuLiang)if(this.faBiShuLiang<=0)this.$toast.fail(this.$t("mySendCoin.shuLiangDaYu0"));else{var i={};i.currency=this.currencyName,i.amount=+this.faBiShuLiang,this.$http.post("/issue_currency/submit",i).then(function(i){0==i.data.code&&(t.$toast.success(t.$t("mySendCoin.faBiSuccess")),t.page=1,t._getCoinList(),t.sendDialog=!1)})}else this.$toast.fail(this.$t("mySendCoin.faBiPlaceholder2"));else this.$toast.fail(this.$t("mySendCoin.faBiPlaceholder3"));else this.$toast.fail(this.$t("mySendCoin.faBiPlaceholder1"))},cancelApplication:function(t){var i=this;this.$dialog.confirm({confirmButtonText:this.$t("common.sure"),cancelButtonText:this.$t("common.cancel"),title:this.$t("mySendCoin.tip4"),message:this.$t("mySendCoin.tip1")}).then(function(){var n={};n.issueId=t.issueId,i.$http.patch("/issue_currency/cancel",n).then(function(t){0==t.data.code&&(i.page=1,i._getCoinList(),i.$toast.success(i.$t("mySendCoin.tip2")))})})},_getCoinList:function(){var t=this;this.isRefresh||(this.loading=!0);var i,n={page:this.page,pageSize:this.pageSize};return(i=n,s.a.get("/issue_currency/list",{params:i}).then(function(t){return e.a.resolve(t.data)})).then(function(i){if(t.loading=!1,console.log(i.data.list),0===i.code)return 1===t.page&&(t.faBiList=i.data.list),t.totalCount=i.data.count,i.data.list}).catch(function(i){t.loading=!1})},loadList:function(){var t=this;this.finished||this.isRefresh||(this.page+=1,this._getCoinList().then(function(i){i&&(t.faBiList=t.faBiList.concat(i))}))}}},c={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"adver-list"},[n("van-button",{staticStyle:{margin:"15px","margin-bottom":"0px"},attrs:{type:"primary",size:"small"},on:{click:function(i){t.wanFaBi()}}},[t._v(t._s(t.$t("mySendCoin.wanToSend")))]),t._v(" "),t.faBiList.length>0?n("van-list",{attrs:{finished:t.finished,offset:10},on:{load:t.loadList},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.faBiList,function(i,a){return n("van-cell",{key:a},[[n("div",{staticClass:"order"},[n("div",{staticClass:"main"},[n("div",{staticClass:"name"},[n("span",{staticClass:"trade"},[t._v("\n               "+t._s(t.$t("mySendCoin.faBiZhongLei"))+"： "+t._s(i.currency)+"\n              ")])]),t._v(" "),n("div",{staticClass:"id"},[t._v("\n               "+t._s(t.$t("mySendCoin.faBiShuLiang"))+"： "+t._s(i.amount)+"\n            ")]),t._v(" "),n("div",{staticClass:"time"},[t._v("\n               "+t._s(t.$t("mySendCoin.faBiShiJian"))+"： "+t._s(i.createTime)+"\n            ")]),t._v(" "),n("div",{staticClass:"price"},[t._v("\n                "+t._s(t.$t("mySendCoin.status"))+"： "+t._s(t._f("statusFilter")(i.status))+"\n                  "),t._v(" "),"PUTIN"==i.status?n("van-button",{staticStyle:{"margin-left":"7px"},attrs:{type:"primary",size:"mini"},on:{click:function(n){t.cancelApplication(i)}}},[t._v(t._s(t.$t("common.cancel")))]):t._e()],1)])])]],2)})):t._e(),t._v(" "),t.noData?n("no-data"):t._e(),t._v(" "),t.loading?n("my-loading"):t._e(),t._v(" "),n("van-popup",{model:{value:t.sendDialog,callback:function(i){t.sendDialog=i},expression:"sendDialog"}},[n("div",{staticClass:"faBi_Row"},[t._v(t._s(t.$t("mySendCoin.wanToSend")))]),t._v(" "),n("van-cell-group",[n("van-field",{attrs:{placeholder:t.$t("mySendCoin.faBiPlaceholder1")},model:{value:t.currencyName,callback:function(i){t.currencyName=i},expression:"currencyName"}})],1),t._v(" "),n("van-cell-group",[n("van-field",{attrs:{type:"number",placeholder:t.$t("mySendCoin.faBiPlaceholder2")},model:{value:t.faBiShuLiang,callback:function(i){t.faBiShuLiang=i},expression:"faBiShuLiang"}})],1),t._v(" "),n("div",{staticClass:"submit"},[n("van-button",{attrs:{type:"default",size:"small"},on:{click:function(i){t.sendDialog=!1}}},[t._v(t._s(t.$t("common.cancel")))]),t._v(" "),n("van-button",{attrs:{type:"primary",size:"small"},on:{click:t.submit}},[t._v(t._s(t.$t("common.sure")))])],1)],1)],1)},staticRenderFns:[]};var l={methods:{onClickLeft:function(){this.$router.push("/account")}},components:{coinList:n("VU/8")(o,c,!1,function(t){n("BdqR"),n("uuEq")},"data-v-3afcc16a",null).exports}},r={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"adver-list"},[i("g-head",[i("van-nav-bar",{attrs:{title:this.$t("mySendCoin.mysendCoin"),"left-arrow":""},on:{"click-left":this.onClickLeft}})],1),this._v(" "),i("div",{staticClass:"list"},[i("coin-list")],1)],1)},staticRenderFns:[]};var u=n("VU/8")(l,r,!1,function(t){n("5L8b")},"data-v-1913d82d",null);i.default=u.exports},uuEq:function(t,i){}});