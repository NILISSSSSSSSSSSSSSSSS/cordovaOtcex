webpackJsonp([19],{rEZr:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("NYxO"),a("t5DY");var e={data:function(){return{langList:[],radio:"cn"}},created:function(){this.radio=localStorage.getItem("language")||"cn"},methods:{onClickLeft:function(){this.$router.push("/account")},langChange:function(n){console.log(n),localStorage.setItem("language",n),location.reload()}}},o={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",[a("g-head",[a("van-nav-bar",{attrs:{title:n.$t("account.lang"),"left-arrow":""},on:{"click-left":n.onClickLeft}})],1),n._v(" "),a("van-radio-group",{on:{change:n.langChange},model:{value:n.radio,callback:function(t){n.radio=t},expression:"radio"}},[a("van-cell-group",[a("van-cell",{attrs:{title:"中文",clickable:""},on:{click:function(t){n.radio="cn"}}},[a("van-radio",{attrs:{name:"cn"}})],1)],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(e,o,!1,function(n){a("tyME")},null,null);t.default=c.exports},tyME:function(n,t){}});