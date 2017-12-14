webpackJsonp([47],{101:function(t,e){t.exports={"en-US":{overview:{name:"Overview",subList:{introduction:"Introduction","quick-start":"QuickStart","post-compile":"PostCompile",theme:"Theme",singleton:"Singleton"}},components:{name:"Components",subList:{basic:{name:"Basic",subList:{button:"Button",checkbox:"Checkbox","checkbox-group":"CheckboxGroup",loading:"Loading",tip:"Tip"}},popup:{name:"Popup",subList:{popup:"Popup",toast:"Toast",picker:"Picker","time-picker":"TimePicker",dialog:"Dialog","action-sheet":"ActionSheet"}},scroll:{name:"Scroll",subList:{scroll:"Scroll",slide:"Slide","index-list":"IndexList"}}}},modules:{name:"Modules",subList:{style:"style","create-api":"create-api","better-scroll":"better-scroll"}}},"zh-CN":{overview:{name:"概览",subList:{introduction:"介绍","quick-start":"快速上手","post-compile":"后编译",theme:"主题",singleton:"单例模式"}},components:{name:"组件",subList:{basic:{name:"基础",subList:{button:"Button",checkbox:"Checkbox","checkbox-group":"CheckboxGroup",loading:"Loading",tip:"Tip"}},popup:{name:"弹出层",subList:{popup:"Popup",toast:"Toast",picker:"Picker","time-picker":"TimePicker",dialog:"Dialog","action-sheet":"ActionSheet"}},scroll:{name:"滚动",subList:{scroll:"Scroll",slide:"Slide","index-list":"IndexList"}}}},modules:{name:"模块",subList:{style:"style","create-api":"create-api","better-scroll":"better-scroll"}}}}},102:function(t,e,n){function o(t){n(192)}var i=n(11)(n(193),n(194),o,null,null);t.exports=i.exports},103:function(t,e,n){function o(t){n(201)}var i=n(11)(n(202),n(207),o,null,null);t.exports=i.exports},104:function(t,e,n){function o(t){n(213)}var i=n(11)(n(214),n(215),o,null,null);t.exports=i.exports},105:function(t,e,n){var o,i,a;!function(s,u){i=[t,e,n(229),n(230),n(231),n(236),n(232),n(233),n(234),n(235)],o=u,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e,n,o,i,a,s,u,c,r){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var d=l(n),M=l(o),f=l(i),p=l(a),h=l(s),g=l(u),v=l(c),N=l(r);d.default.registerLanguage("css",f.default),d.default.registerLanguage("markdown",p.default),d.default.registerLanguage("javascript",h.default),d.default.registerLanguage("json",g.default),d.default.registerLanguage("shell",M.default),d.default.registerLanguage("stylus",v.default),d.default.registerLanguage("xml",N.default),e.default=d.default,t.exports=e.default})},140:function(t,e,n){function o(t){n(182)}var i=n(11)(n(183),n(195),o,null,null);t.exports=i.exports},141:function(t,e,n){var o,i,a;!function(s,u){i=[n(66),n(145),n(150),n(105),n(237),n(439),n(440),n(441)],o=u,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=i(t),s=i(e),u=i(n);i(o).default.initHighlightingOnLoad(),new a.default({el:"#app",router:u.default,render:function(t){return t(s.default)}})})},145:function(t,e,n){function o(t){n(146)}var i=n(11)(n(148),n(149),o,null,null);t.exports=i.exports},146:function(t,e){},148:function(t,e,n){var o,i,a;!function(n,s){i=[t,e],o=s,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{oldPath:window.location.hash}},mounted:function(){var t=this;document.body.addEventListener("click",function(e){for(var n=e.target;n&&"anchor"!==n.className;)n=n.parentNode;n&&(e.preventDefault(),t.scrollToHash(n.getAttribute("href")))})},watch:{$route:function(t,e){this.oldPath="#"+t.path,this.scrollToHash()}},methods:{scrollToHash:function(t){var e=/#cube-(.*)-anchor/,n="",o=void 0;if(t||(o=window.location.hash.match(e))&&(t=o[0]),t){o=t.match(e),n=this.oldPath+t,window.location.hash=n;var i=o[1],a=document.querySelector("#"+i);a&&a.scrollIntoView()}}}},t.exports=e.default})},149:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},150:function(t,e,n){var o,i,a;!function(s,u){i=[t,e,n(66),n(151),n(51),n(153),n(225),n(198),n(210),n(217),n(221),n(140)],o=u,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e,n,o,i,a,s,u,c,r,l){"use strict";function d(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var M=d(n),f=d(o),p=d(a),h=d(s),g=d(u),v=d(c),N=d(r),m=d(l);M.default.use(f.default);var y=(0,i.getCurrentLang)(),T=[{path:"",component:v.default},{path:"example",component:m.default}].concat(p.default["en-US"]),z=[{path:"",component:N.default},{path:"example",component:m.default}].concat(p.default["zh-CN"]);e.default=new f.default({routes:[{path:"/",redirect:"/"+y},{path:"/en-US",component:h.default,children:T},{path:"/zh-CN",component:g.default,children:z}]}),t.exports=e.default})},153:function(t,e,n){var o,i,a;!function(s,u){i=[t,e,n(154),n(101)],o=u,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e,o,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function s(t){var e=[];return(0,u.default)(t.subList).forEach(function(n){var o=t.subList[n];"string"==typeof o?e.push(n):e=e.concat(s(o))}),e}Object.defineProperty(e,"__esModule",{value:!0});var u=a(o),c=a(i),r={};(0,u.default)(c.default).forEach(function(t){var e=[],o={path:"docs",redirect:"./docs/introduction",component:function(){return n(181)("./"+t+".vue")},children:e};r[t]=[o];var i=c.default[t];(0,u.default)(i).forEach(function(o){s(i[o]).forEach(function(o){e.push({path:o,component:function(){return n(197)("./"+t+"/"+o+".md")}})})})}),e.default=r,t.exports=e.default})},181:function(t,e,n){function o(t){var e=i[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var i={"./en-US.vue":[444,1],"./zh-CN.vue":[445,0]};o.keys=function(){return Object.keys(i)},o.id=181,t.exports=o},182:function(t,e){},183:function(t,e,n){var o,i,a;!function(s,u){i=[t,e,n(184),n(102),n(101)],o=u,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e,n,o,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(n),u=a(o),c=a(i);e.default={props:{lang:{type:String,default:"zh-CN"}},data:function(){return{navList:c.default[this.lang],showCatalog:!1}},watch:{$route:function(){this.showCatalog=!1,window.scrollTo(0,0)}},methods:{toggleCatalog:function(){this.showCatalog=!this.showCatalog}},mounted:function(){var t=document.querySelector(".md-body"),e=/#cube-(.*)-anchor/,n=window.location.hash.match(e);if(n){var o=n[1],i=t.querySelector("#"+o);i&&i.scrollIntoView()}},components:{SideList:s.default,Display:u.default}},t.exports=e.default})},184:function(t,e,n){function o(t){n(185)}var i=n(11)(n(186),n(191),o,null,null);t.exports=i.exports},185:function(t,e){},186:function(t,e,n){var o,i,a;!function(s,u){i=[t,e,n(187)],o=u,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={props:{navList:{type:Object,default:function(){return{}}}},components:{SideNav:o.default}},t.exports=e.default})},187:function(t,e,n){function o(t){n(188)}var i=n(11)(n(189),n(190),o,null,null);t.exports=i.exports},188:function(t,e){},189:function(t,e,n){var o,i,a;!function(n,s){i=[t,e],o=s,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={name:"side-nav",props:{data:{type:Object,default:function(){return{}}}}},t.exports=e.default})},190:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"nav-ul"},t._l(t.data,function(e,o){return n("li",{key:o,staticClass:"nav-li"},[e.name?[n("p",{staticClass:"nav-name"},[t._v(t._s(e.name))]),t._v(" "),n("side-nav",{attrs:{data:e.subList}})]:n("router-link",{attrs:{"active-class":"nav-active",to:{path:o}}},[t._v(t._s(e))])],2)}))},staticRenderFns:[]}},191:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"page-sidelist"},[n("side-nav",{attrs:{data:t.navList}})],1)},staticRenderFns:[]}},192:function(t,e){},193:function(t,e,n){var o,i,a;!function(s,u){i=[t,e,n(51)],o=u,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{hash:"/"}},computed:{ifrSrc:function(){return""+n.baseUrl+this.hash}},watch:{$route:{handler:function(t,e){var n=t.path.indexOf("/docs/");this.hash=t.path.substr(n+6)},immediate:!0}}},t.exports=e.default})},194:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-display"},[n("div",{staticClass:"display-wrapper"},[n("section",{staticClass:"mofang-demo"},[n("iframe",{attrs:{src:t.ifrSrc,frameborder:"0",width:"100%",height:"100%"}})])])])},staticRenderFns:[]}},195:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"docs-view"},[o("img",{staticClass:"toggle-catalog",attrs:{src:n(196)},on:{click:t.toggleCatalog}}),t._v(" "),o("div",{staticClass:"nav-list-wrapper",class:{active:t.showCatalog}},[o("side-list",{attrs:{"nav-list":t.navList}})],1),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showCatalog,expression:"showCatalog"}],staticClass:"mask",class:{active:t.showCatalog},on:{click:t.toggleCatalog}}),t._v(" "),o("router-view",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"page-doc md-body"}),t._v(" "),o("display")],1)},staticRenderFns:[]}},196:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTEwNjQ5MzE2NDgyIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM3NjIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTg4Ny4yMTIxMDIgMjY0LjY0NDM3OSAzMjAuMDgzNTI3IDI2NC42NDQzNzljLTI5LjgyNjMwNiAwLTU0LjAxMjE0OC0yMy44OTYyNDYtNTQuMDEyMTQ4LTUzLjcyMzU3NXMyNC4xODU4NDItNTMuNzIzNTc1IDU0LjAxMjE0OC01My43MjM1NzVsNTY3LjEyNzU1MiAwYzI5LjgyNzMyOSAwIDU0LjAxMjE0OCAyMy44OTYyNDYgNTQuMDEyMTQ4IDUzLjcyMzU3NVM5MTcuMDM5NDMxIDI2NC42NDQzNzkgODg3LjIxMjEwMiAyNjQuNjQ0Mzc5ek04ODcuMjEyMTAyIDU2Mi40MjY0ODMgMzIwLjA4MzUyNyA1NjIuNDI2NDgzYy0yOS44MjYzMDYgMC01NC4wMTIxNDgtMjQuNDA4OTIzLTU0LjAxMjE0OC01NC4yMzUyMjkgMC0yOS44MjgzNTIgMjQuMTg1ODQyLTU0LjIzNTIyOSA1NC4wMTIxNDgtNTQuMjM1MjI5bDU2Ny4xMjc1NTIgMGMyOS44MjczMjkgMCA1NC4wMTIxNDggMjQuNDA2ODc2IDU0LjAxMjE0OCA1NC4yMzUyMjlDOTQxLjIyNDI1IDUzOC4wMTg1ODMgOTE3LjAzOTQzMSA1NjIuNDI2NDgzIDg4Ny4yMTIxMDIgNTYyLjQyNjQ4M3pNODg3LjIxMjEwMiA4NTkuMTg1MjggMzIwLjA4MzUyNyA4NTkuMTg1MjhjLTI5LjgyNjMwNiAwLTU0LjAxMjE0OC0yNC40MDc4OTktNTQuMDEyMTQ4LTU0LjIzNTIyOXMyNC4xODU4NDItNTQuMjM1MjI5IDU0LjAxMjE0OC01NC4yMzUyMjlsNTY3LjEyNzU1MiAwYzI5LjgyNzMyOSAwIDU0LjAxMjE0OCAyNC40MDc4OTkgNTQuMDEyMTQ4IDU0LjIzNTIyOVM5MTcuMDM5NDMxIDg1OS4xODUyOCA4ODcuMjEyMTAyIDg1OS4xODUyOHpNMTUzLjU2NTAwMyAyNTcuOTQzNzdsLTQ3LjI2MTM5NyAwYy0xMy4wNTUzNCAwLTIzLjYzMDE4Ny0xMC42MDE0NTItMjMuNjMwMTg3LTIzLjY1NTc2OWwwLTQ3LjIzNDc5MWMwLTEzLjA4MDkyMyAxMC41NzQ4NDYtMjMuNjMwMTg3IDIzLjYzMDE4Ny0yMy42MzAxODdsNDcuMjYxMzk3IDBjMTMuMDU0MzE3IDAgMjMuNjMwMTg3IDEwLjU0OTI2NCAyMy42MzAxODcgMjMuNjMwMTg3bDAgNDcuMjM0NzkxQzE3Ny4xOTUxOSAyNDcuMzQxMjk1IDE2Ni42MTkzMiAyNTcuOTQzNzcgMTUzLjU2NTAwMyAyNTcuOTQzNzdMMTUzLjU2NTAwMyAyNTcuOTQzNzd6TTE1My41NjUwMDMgODUyLjA3NjM3MmwtNDcuMjYxMzk3IDBjLTEzLjA1NTM0IDAtMjMuNjMwMTg3LTEwLjYwMDQyOS0yMy42MzAxODctMjMuNjU1NzY5bDAtNDcuMjMzNzY4YzAtMTMuMDgwOTIzIDEwLjU3NDg0Ni0yMy42MzEyMSAyMy42MzAxODctMjMuNjMxMjFsNDcuMjYxMzk3IDBjMTMuMDU0MzE3IDAgMjMuNjMwMTg3IDEwLjU1MDI4NyAyMy42MzAxODcgMjMuNjMxMjFsMCA0Ny4yMzM3NjhDMTc3LjE5NTE5IDg0MS40NzU5NDMgMTY2LjYxOTMyIDg1Mi4wNzYzNzIgMTUzLjU2NTAwMyA4NTIuMDc2MzcyTDE1My41NjUwMDMgODUyLjA3NjM3MnpNMTUzLjU2NTAwMyA1NDEuNTA3MDM0bC00Ny4yNjEzOTcgMGMtMTMuMDU1MzQgMC0yMy42MzAxODctMTAuNjAxNDUyLTIzLjYzMDE4Ny0yMy42NTU3NjlsMC00Ny4yMzQ3OTFjMC0xMy4wODA5MjMgMTAuNTc0ODQ2LTIzLjYzMDE4NyAyMy42MzAxODctMjMuNjMwMTg3bDQ3LjI2MTM5NyAwYzEzLjA1NDMxNyAwIDIzLjYzMDE4NyAxMC41NDkyNjQgMjMuNjMwMTg3IDIzLjYzMDE4N2wwIDQ3LjIzNDc5MUMxNzcuMTk1MTkgNTMwLjkwNTU4MiAxNjYuNjE5MzIgNTQxLjUwNzAzNCAxNTMuNTY1MDAzIDU0MS41MDcwMzRMMTUzLjU2NTAwMyA1NDEuNTA3MDM0eiIgcC1pZD0iMzc2MyIgZmlsbD0iIzMzMzMzMyI+PC9wYXRoPjwvc3ZnPg=="},197:function(t,e,n){function o(t){var e=i[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var i={"./en-US/action-sheet.md":[446,45],"./en-US/better-scroll.md":[447,44],"./en-US/button.md":[448,43],"./en-US/checkbox-group.md":[449,42],"./en-US/checkbox.md":[450,41],"./en-US/create-api.md":[451,40],"./en-US/dialog.md":[452,39],"./en-US/index-list.md":[453,38],"./en-US/introduction.md":[454,37],"./en-US/loading.md":[455,36],"./en-US/picker.md":[456,35],"./en-US/popup.md":[457,34],"./en-US/post-compile.md":[458,33],"./en-US/quick-start.md":[459,32],"./en-US/scroll.md":[460,31],"./en-US/singleton.md":[461,30],"./en-US/slide.md":[462,29],"./en-US/style.md":[463,28],"./en-US/theme.md":[464,27],"./en-US/time-picker.md":[465,26],"./en-US/tip.md":[466,25],"./en-US/toast.md":[467,24],"./zh-CN/action-sheet.md":[468,23],"./zh-CN/better-scroll.md":[469,22],"./zh-CN/button.md":[470,21],"./zh-CN/checkbox-group.md":[471,20],"./zh-CN/checkbox.md":[472,19],"./zh-CN/create-api.md":[473,18],"./zh-CN/dialog.md":[474,17],"./zh-CN/index-list.md":[475,16],"./zh-CN/introduction.md":[476,15],"./zh-CN/loading.md":[477,14],"./zh-CN/picker.md":[478,13],"./zh-CN/popup.md":[479,12],"./zh-CN/post-compile.md":[480,11],"./zh-CN/quick-start.md":[481,10],"./zh-CN/scroll.md":[482,9],"./zh-CN/singleton.md":[483,8],"./zh-CN/slide.md":[484,7],"./zh-CN/style.md":[485,6],"./zh-CN/theme.md":[486,5],"./zh-CN/time-picker.md":[487,4],"./zh-CN/tip.md":[488,3],"./zh-CN/toast.md":[489,2]};o.keys=function(){return Object.keys(i)},o.id=197,t.exports=o},198:function(t,e,n){function o(t){n(199)}var i=n(11)(n(200),n(209),o,null,null);t.exports=i.exports},199:function(t,e){},200:function(t,e,n){var o,i,a;!function(s,u){i=[t,e,n(103)],o=u,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={components:{Home:o.default}},t.exports=e.default})},201:function(t,e){},202:function(t,e,n){var o,i,a;!function(s,u){i=[t,e,n(203)],o=u,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={data:function(){return{showTabs:!1,isDocs:this.$route.path.includes("/docs")}},watch:{$route:function(t){this.isDocs=t.path.includes("/docs"),this.showTabs=!1}},components:{SiteLang:o.default},methods:{toggleNav:function(){this.showTabs=!this.showTabs},toggleCatalog:function(){this.showCatalog=!this.showCatalog}}},t.exports=e.default})},203:function(t,e,n){function o(t){n(204)}var i=n(11)(n(205),n(206),o,null,null);t.exports=i.exports},204:function(t,e){},205:function(t,e,n){var o,i,a;!function(s,u){i=[t,e,n(51)],o=u,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={data:function(){return{current:(0,n.getCurrentLang)(),langs:{"zh-CN":"中","en-US":"En"}}},methods:{to:function(t){this.current!==t&&(this.current=t,(0,n.setItem)("CUBE_LANGUAGE",t),this.$router.replace({path:this.$router.currentRoute.path.replace(/\/(zh-CN|en-US)(?=\/?)/,"/"+t)}))}}},t.exports=e.default})},206:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"langs"},t._l(t.langs,function(e,o){return n("a",{class:{active:t.current===o},attrs:{href:"javascript:;"},on:{click:function(e){t.to(o)}}},[t._v(t._s(e))])}))},staticRenderFns:[]}},207:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home-view"},[o("div",{staticClass:"navigator",class:{active:t.showTabs}},[o("h1",{staticClass:"logo"},[o("router-link",{attrs:{to:"/"}},[o("span",[t._v("cube-ui")])])],1),t._v(" "),o("div",{staticClass:"tabs"},[t._t("nav"),t._v(" "),o("site-lang")],2),t._v(" "),o("span",{staticClass:"toggle-nav",on:{click:t.toggleNav}},[o("img",{attrs:{src:n(208)}})])]),t._v(" "),o("div",{staticClass:"router-view"},[o("router-view")],1)])},staticRenderFns:[]}},208:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTEwNjQ5NDAxODMzIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ1OTEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE1MS45OTA4MTMgMTc1Ljk5MDYyNWg3MTkuOTk0Mzc1YTM1Ljk5OTcxOSAzNS45OTk3MTkgMCAwIDEgMzUuOTk5NzE4IDM1Ljk5OTcxOXYyNC43NDM4MDdhMzUuOTk5NzE5IDM1Ljk5OTcxOSAwIDAgMS0zNS45OTk3MTggMzUuOTk5NzE4aC03MTkuOTk0Mzc1YTM1Ljk5OTcxOSAzNS45OTk3MTkgMCAwIDEtMzUuOTk5NzE5LTM1Ljk5OTcxOFYyMTEuOTkwMzQ0YTM1Ljk5OTcxOSAzNS45OTk3MTkgMCAwIDEgMzUuOTk5NzE5LTM1Ljk5OTcxOXogbTAgMjg4Ljc0MTc0NGg3MTkuOTk0Mzc1YTM1Ljk5OTcxOSAzNS45OTk3MTkgMCAwIDEgMzUuOTk5NzE4IDM1Ljk5OTcxOXYyMi41MTE4MjRhMzUuOTk5NzE5IDM1Ljk5OTcxOSAwIDAgMS0zNS45OTk3MTggMzUuOTk5NzE5aC03MTkuOTk0Mzc1YTM1Ljk5OTcxOSAzNS45OTk3MTkgMCAwIDEtMzUuOTk5NzE5LTM1Ljk5OTcxOXYtMjIuNTExODI0YTM1Ljk5OTcxOSAzNS45OTk3MTkgMCAwIDEgMzUuOTk5NzE5LTM1Ljk5OTcxOXogbTAgMjg2LjUwOTc2Mmg3MTkuOTk0Mzc1YTM1Ljk5OTcxOSAzNS45OTk3MTkgMCAwIDEgMzUuOTk5NzE4IDM1Ljk5OTcxOXYyNC43NDM4MDZhMzUuOTk5NzE5IDM1Ljk5OTcxOSAwIDAgMS0zNS45OTk3MTggMzUuOTk5NzE5aC03MTkuOTk0Mzc1YTM1Ljk5OTcxOSAzNS45OTk3MTkgMCAwIDEtMzUuOTk5NzE5LTM1Ljk5OTcxOXYtMjQuNzQzODA2YTM1Ljk5OTcxOSAzNS45OTk3MTkgMCAwIDEgMzUuOTk5NzE5LTM1Ljk5OTcxOXoiIHAtaWQ9IjQ1OTIiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4="},209:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("home",[n("template",{slot:"nav"},[n("router-link",{staticClass:"tab right",attrs:{to:"/zh-CN",exact:""}},[n("span",[t._v("首页")])]),t._v(" "),n("router-link",{staticClass:"tab right",attrs:{to:"/zh-CN/docs"}},[n("span",[t._v("文档")])]),t._v(" "),n("router-link",{staticClass:"tab right",attrs:{to:"/zh-CN/example"}},[n("span",[t._v("示例")])])],1),t._v(" "),n("div",{attrs:{slot:"home"},slot:"home"},[t._v("home")])],2)},staticRenderFns:[]}},210:function(t,e,n){function o(t){n(211)}var i=n(11)(n(212),n(216),o,null,null);t.exports=i.exports},211:function(t,e){},212:function(t,e,n){var o,i,a;!function(s,u){i=[t,e,n(104)],o=u,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={components:{HomeIndex:o.default}},t.exports=e.default})},213:function(t,e){},214:function(t,e,n){var o,i,a;!function(n,s){i=[t,e],o=s,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={},t.exports=e.default})},215:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-index"},[t._m(0),t._v(" "),n("p",[t._t("desc")],2),t._v(" "),t._m(1),t._v(" "),n("section",{staticClass:"features"},[n("ul",[t._t("features")],2)]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[n("img",{attrs:{src:"//static.galileo.xiaojukeji.com/static/tms/shield/z/mofang/mofang/images/mofang_logo.png"}}),t._v(" "),n("p",[t._v("cube-ui")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ghbtns"},[n("a",{attrs:{href:"https://github.com/didi/cube-ui"}},[n("img",{attrs:{src:"https://img.shields.io/github/stars/didi/cube-ui.svg?style=social&label=Star"}})]),t._v(" "),n("a",{attrs:{href:"https://github.com/didi/cube-ui"}},[n("img",{attrs:{src:"https://img.shields.io/github/forks/didi/cube-ui.svg?style=social&label=Fork"}})]),t._v(" "),n("a",{attrs:{href:"https://github.com/didi/cube-ui"}},[n("img",{attrs:{src:"https://img.shields.io/github/watchers/wepyjs/wepy.svg?style=social&label=Watch"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("a",{attrs:{href:"https://github.com/didi"}},[t._v("© DiDi")])])}]}},216:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("home-index",[n("template",{slot:"desc"},[t._v("A fantastic mobile ui lib implement by Vue.js")]),t._v(" "),n("template",{slot:"features"},[n("li",[n("h1",[t._v("Quality")]),t._v("\n      Extracted from DiDi interior component library and has been put to business test for more than one year. Every component has full unit tests to provide assurance for continuous integration.\n    ")]),t._v(" "),n("li",[n("h1",[t._v("Experience")]),t._v("\n      Make quick response, fluent animation and close to native components as the goal, and pursue the perfection of the interactive experience.\n    ")]),t._v(" "),n("li",[n("h1",[t._v("Standard")]),t._v("\n      Follow a uniform design interaction standard and highly restore the design; Standardize the interface and unify the way of use, making development more simple and efficient.\n    ")]),t._v(" "),n("li",[n("h1",[t._v("Scalability")]),t._v("\n      Lightweight and flexible: support "),n("router-link",{attrs:{to:"/en-US/docs/post-compile"}},[t._v("post-compile")]),t._v(" and importing on demand; High scalability: it is easy to implement secondary development based on existing components.\n    ")],1)])],2)},staticRenderFns:[]}},217:function(t,e,n){function o(t){n(218)}var i=n(11)(n(219),n(220),o,null,null);t.exports=i.exports},218:function(t,e){},219:function(t,e,n){var o,i,a;!function(s,u){i=[t,e,n(104)],o=u,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={components:{HomeIndex:o.default}},t.exports=e.default})},220:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("home-index",[n("template",{slot:"desc"},[t._v("基于 Vue.js 实现的精致移动端组件库")]),t._v(" "),n("template",{slot:"features"},[n("li",[n("h1",[t._v("质量可靠")]),t._v("\n      由滴滴内部组件库精简提炼而来，历经考验，并且每个组件都有充分单元测试，为后续集成提供保障。\n    ")]),t._v(" "),n("li",[n("h1",[t._v("体验极致")]),t._v("\n      以迅速响应、动画流畅、接近原生为目标，在交互体验方面追求极致。\n    ")]),t._v(" "),n("li",[n("h1",[t._v("标准规范")]),t._v("\n      遵循统一的设计交互标准，高度还原设计效果；接口标准化，统一规范使用方式，开发更加简单高效。\n    ")]),t._v(" "),n("li",[n("h1",[t._v("扩展性强")]),t._v("\n      支持按需引入和"),n("router-link",{attrs:{to:"/zh-CN/docs/post-compile"}},[t._v("后编译")]),t._v("，轻量灵活；扩展性强，可以方便地基于现有组件实现二次开发。\n    ")],1)])],2)},staticRenderFns:[]}},221:function(t,e,n){function o(t){n(222)}var i=n(11)(n(223),n(224),o,null,null);t.exports=i.exports},222:function(t,e){},223:function(t,e,n){var o,i,a;!function(s,u){i=[t,e,n(51),n(102)],o=u,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e,n,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={data:function(){return{baseUrl:n.baseUrl}},components:{Display:i.default}},t.exports=e.default})},224:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-example"},[n("a",{staticClass:"online-link",attrs:{href:t.baseUrl}},[t._v("Online Example")]),t._v(" "),n("img",{attrs:{src:"https://raw.githubusercontent.com/didichuxing/cube-ui/master/assets/example-qr.png?token=ACBfUmDS85HOeaGQI49yS9qYyJOd0joSks5aCQpvwA%3D%3D"}}),t._v(" "),n("display")],1)},staticRenderFns:[]}},225:function(t,e,n){function o(t){n(226)}var i=n(11)(n(227),n(228),o,null,null);t.exports=i.exports},226:function(t,e){},227:function(t,e,n){var o,i,a;!function(s,u){i=[t,e,n(103)],o=u,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={components:{Home:o.default}},t.exports=e.default})},228:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("home",[n("template",{slot:"nav"},[n("router-link",{staticClass:"tab right",attrs:{to:"/en-US",exact:""}},[n("span",[t._v("Home")])]),t._v(" "),n("router-link",{staticClass:"tab right",attrs:{to:"/en-US/docs"}},[n("span",[t._v("Docs")])]),t._v(" "),n("router-link",{staticClass:"tab right",attrs:{to:"/en-US/example"}},[n("span",[t._v("Example")])])],1),t._v(" "),n("div",{attrs:{slot:"home"},slot:"home"},[t._v("home")])],2)},staticRenderFns:[]}},439:function(t,e){},440:function(t,e){},441:function(t,e,n){var o,i,a;!function(s,u){i=[n(66),n(105)],o=u,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=n(t),i=n(e);o.default.directive("highlight",function(t){t.querySelectorAll("pre code").forEach(function(t){i.default.highlightBlock(t)})})})},51:function(t,e,n){var o,i,a;!function(s,u){i=[e,n(152)],o=u,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e){"use strict";function n(t,e){try{window.localStorage.setItem(t,e)}catch(n){a.default.set(t,e,{expires:365})}}function o(t){var e=window.localStorage.getItem(t);return e||(e=a.default.get(t)),e||""}function i(){var t=window.location.hash,e=t?t.indexOf("/zh-")>=0?"zh-CN":"en-US":"",i=e||o("CUBE_LANGUAGE")||window.navigator.language||"en-US",a="en-US";return i.indexOf("zh-")>=0&&(a="zh-CN"),n("CUBE_LANGUAGE",a),a}Object.defineProperty(t,"__esModule",{value:!0}),t.baseUrl=void 0,t.setItem=n,t.getItem=o,t.getCurrentLang=i;var a=function(t){return t&&t.__esModule?t:{default:t}}(e);t.baseUrl="https://didi.github.io/cube-ui/example/#/"})}},[141]);