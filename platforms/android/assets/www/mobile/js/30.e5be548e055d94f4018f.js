webpackJsonp([30],{"36+0":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("BO1k"),a=e.n(n),l=e("GI/c"),r={data:function(){return{article:{},loading:!1,lang:localStorage.language||"cn"}},watch:{article:{handler:function(t){var i=this;t.context&&this.$nextTick().then(function(){var t=i.$refs.html.querySelectorAll("img"),e=!0,n=!1,l=void 0;try{for(var r,c=a()(t);!(e=(r=c.next()).done);e=!0){r.value.style.maxWidth="90%"}}catch(t){n=!0,l=t}finally{try{!e&&c.return&&c.return()}finally{if(n)throw l}}})},deep:!0}},created:function(){this.init(),this._getArticleDetail(this.lang)},methods:{init:function(){this.id=this.$route.params.id,this.id||this.onClickLeft()},onClickLeft:function(){this.$router.push("/hc")},_getArticleDetail:function(t){var i=this;this.loading=!0,Object(l.a)({lang:t,id:this.id}).then(function(t){i.loading=!1,0===t.code&&(i.article=t.data)}).catch(function(t){i.loading=!1})}}},c={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"article"},[e("g-head",[e("van-nav-bar",{attrs:{title:t.$t("hc.articleDetail"),"left-arrow":""},on:{"click-left":t.onClickLeft}})],1),t._v(" "),e("div",{staticClass:"main"},[e("h1",[t._v(t._s(t.article.title))]),t._v(" "),e("div",{ref:"html",domProps:{innerHTML:t._s(t.article.context)}})]),t._v(" "),t.loading?e("my-loading"):t._e()],1)},staticRenderFns:[]};var o=e("VU/8")(r,c,!1,function(t){e("QAQj")},"data-v-3de4ba8e",null);i.default=o.exports},QAQj:function(t,i){}});