(function(e){function t(t){for(var r,o,l=t[0],i=t[1],s=t[2],u=0,b=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==c[i]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},c={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"11d3":function(e,t,n){"use strict";n("551b")},"551b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("8bbf"),c=n("cebe"),a=n.n(c),o={class:"navbar bg-primary p-fixed",style:{"z-index":"1000",width:"100%",top:"0"}},l={class:"navbar-section p-2 container grid-sm"},i=Object(r["createElementVNode"])("span",{class:"navbar-brand text-bold mr-2",style:{color:"#fff!important"}},"知乎日报",-1),s=Object(r["createTextVNode"])("Home"),d=Object(r["createTextVNode"])("About"),u=Object(r["createElementVNode"])("span",{style:{"flex-grow":"1"}},null,-1),b=Object(r["createElementVNode"])("div",{id:"navbar-item",class:"d-flex"},null,-1),m={class:"container grid-sm px-0"};function p(e,t){var n=Object(r["resolveComponent"])("router-link"),c=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createElementVNode"])("div",o,[Object(r["createElementVNode"])("div",l,[i,Object(r["createVNode"])(n,{to:"/",class:"btn btn-link",style:{color:"#fff!important"}},{default:Object(r["withCtx"])((function(){return[s]})),_:1}),Object(r["createVNode"])(n,{to:"/about",class:"btn btn-link",style:{color:"#fff!important"}},{default:Object(r["withCtx"])((function(){return[d]})),_:1}),u,b])]),Object(r["createElementVNode"])("div",m,[Object(r["createVNode"])(c,null,{default:Object(r["withCtx"])((function(t){var n=t.Component;return[(Object(r["openBlock"])(),Object(r["createBlock"])(r["KeepAlive"],null,[e.$route.meta.keepAlive?(Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(n),{key:e.$route.path})):Object(r["createCommentVNode"])("",!0)],1024)),e.$route.meta.keepAlive?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(n),{key:0}))]})),_:1})])],64)}n("11d3");const O={};O.render=p;var j=O,g=n("6389"),v={key:1,style:{padding:"16px 16px"}},f={class:"text-bold h3 mb-2",style:{"margin-top":"24px"}},y=["disabled"],h=Object(r["createElementVNode"])("div",{class:"modal-overlay"},null,-1),k={class:"modal-container"},V={class:"modal-header"},E=Object(r["createElementVNode"])("div",{class:"modal-title h5"},"查看历史日报",-1),N={class:"modal-body"},B={class:"modal-footer"};function x(e,t,n,c,a,o){var l=Object(r["resolveComponent"])("loading-circle"),i=Object(r["resolveComponent"])("story-card"),s=Object(r["resolveComponent"])("router-link"),d=Object(r["resolveComponent"])("calendar");return c.loading&&0===c.daily.length?(Object(r["openBlock"])(),Object(r["createBlock"])(l,{key:0})):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",v,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.daily,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:e.date},[Object(r["createElementVNode"])("div",f,Object(r["toDisplayString"])(e.date),1),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.stories,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(s,{key:e.id,to:"/story/"+e.id,custom:""},{default:Object(r["withCtx"])((function(t){var n=t.navigate;return[Object(r["createVNode"])(i,{id:e.id,title:e.title,url:e.url,hint:e.hint,image:e.images[0],hue:e.hue,onClick:n},null,8,["id","title","url","hint","image","hue","onClick"])]})),_:2},1032,["to"])})),128))],64)})),128)),Object(r["withDirectives"])(Object(r["createElementVNode"])("button",{ref:"loadMoreBtn",class:Object(r["normalizeClass"])(["btn btn-lg btn-primary d-block my-2",{loading:c.loading}]),style:{width:"100%"},disabled:c.loading,onClick:t[0]||(t[0]=function(){return c.loadStories&&c.loadStories.apply(c,arguments)})},"加载更多",10,y),[[r["vShow"],c.daily.length]]),Object(r["createElementVNode"])("div",{class:Object(r["normalizeClass"])(["modal modal-sm",{active:c.calendarDialogVisible}])},[h,Object(r["createElementVNode"])("div",k,[Object(r["createElementVNode"])("div",V,[Object(r["createElementVNode"])("button",{class:"btn btn-clear float-right",onClick:t[1]||(t[1]=function(e){return c.calendarDialogVisible=!1})}),E]),Object(r["createElementVNode"])("div",N,[Object(r["createVNode"])(d,{onClickDate:c.calendarClick},null,8,["onClickDate"])]),Object(r["createElementVNode"])("div",B,[Object(r["createElementVNode"])("button",{class:"btn btn-primary",onClick:t[2]||(t[2]=function(e){return c.calendarDialogVisible=!1})},"关闭")])])],2),(Object(r["openBlock"])(),Object(r["createBlock"])(r["Teleport"],{to:"#navbar-item"},["/"===e.$route.path?(Object(r["openBlock"])(),Object(r["createElementBlock"])("button",{key:0,class:"btn btn-link",style:{color:"#fff!important"},onClick:t[3]||(t[3]=function(e){return c.calendarDialogVisible=!0})},"查看历史日报")):Object(r["createCommentVNode"])("",!0)]))]))}var S=n("1da1"),C=(n("96cf"),n("4d90"),n("d3b7"),n("25f0"),{class:"card mb-2 c-hand"}),D={class:"card-body"},w=["title"],A={class:"card-subtitle text-gray pr-1"};function L(e,t,n,c,a,o){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",C,[Object(r["createElementVNode"])("div",D,[Object(r["createElementVNode"])("div",{class:"float-right s-rounded",style:Object(r["normalizeStyle"])({"background-image":"url("+n.image+")",width:"54px",height:"54px"})},null,4),Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("div",{class:"card-title h5 text-ellipsis pr-1",title:n.title},Object(r["toDisplayString"])(n.title),9,w),Object(r["createElementVNode"])("div",A,Object(r["toDisplayString"])(n.hint),1)])])])}n("a9e3");var M={props:{id:Number,title:String,url:String,hint:String,image:String,hue:String}};M.render=L;var H=M,T={style:{margin:"32px 0"}},F=Object(r["createElementVNode"])("div",{class:"loading loading-lg my-2"},null,-1),_=Object(r["createElementVNode"])("div",{class:"text-center text-primary"},[Object(r["createElementVNode"])("small",null,"Loading")],-1),q=[F,_];function P(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",T,q)}const z={};z.render=P;var R=z,$={class:"calendar"},I={class:"calendar-nav navbar"},Y={class:"navbar-primary"},W={class:"calendar-container"},U={class:"calendar-header"},Z={class:"calendar-body"},Q=Object(r["createElementVNode"])("button",{class:"date-item disabled"},null,-1),G=[Q],J=["onClick"],K=Object(r["createElementVNode"])("button",{class:"date-item disabled"},null,-1),X=[K];function ee(e,t,n,c,a,o){var l=Object(r["resolveComponent"])("mdi");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",$,[Object(r["createElementVNode"])("div",I,[Object(r["createElementVNode"])("button",{class:"btn btn-action btn-link btn-lg",onClick:t[0]||(t[0]=function(){return c.prevMonth&&c.prevMonth.apply(c,arguments)})},[Object(r["createVNode"])(l,{color:"#3b4351",icon:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"},null,8,["icon"])]),Object(r["createElementVNode"])("div",Y,Object(r["toDisplayString"])(c.header),1),Object(r["createElementVNode"])("button",{class:"btn btn-action btn-link btn-lg",onClick:t[1]||(t[1]=function(){return c.nextMonth&&c.nextMonth.apply(c,arguments)})},[Object(r["createVNode"])(l,{color:"#3b4351",icon:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"},null,8,["icon"])])]),Object(r["createElementVNode"])("div",W,[Object(r["createElementVNode"])("div",U,[(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],(function(e,t){return Object(r["createElementVNode"])("div",{key:t,class:"calendar-date"},Object(r["toDisplayString"])(e),1)})),64))]),Object(r["createElementVNode"])("div",Z,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.firstWeekly,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:e,class:"calendar-date prev-month"},G)})),128)),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.lastDay,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:e,class:"calendar-date"},[Object(r["createElementVNode"])("button",{class:"date-item",onClick:function(t){return c.clickDate(e)}},Object(r["toDisplayString"])(e),9,J)])})),128)),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(6-c.lastWeekly,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:e,class:"calendar-date next-month"},X)})),128))])])])}var te=["fill","width","height"],ne=["d"];function re(e,t,n,c,a,o){return Object(r["openBlock"])(),Object(r["createElementBlock"])("svg",{fill:n.color,width:c.size,height:c.size,viewBox:"0 0 24 24"},[Object(r["createElementVNode"])("path",{d:n.icon},null,8,ne)],8,te)}n("d81d");var ce={props:{color:String,icon:String,xSmall:{type:Boolean,default:!1},small:{type:Boolean,default:!1},medium:{type:Boolean,default:!1},large:{type:Boolean,default:!1},xLarge:{type:Boolean,default:!1}},setup:function(e){return{size:Object(r["computed"])((function(){return[24,12,16,28,36,40][["xSmall","small","medium","large","xLarge"].map((function(t){return e[t]})).indexOf(!0)+1]}))}}};ce.render=re;var ae=ce,oe={components:{Mdi:ae},props:{year:{type:Number,default:function(){return(new Date).getFullYear()}},month:{type:Number,default:function(){return(new Date).getMonth()}},day:{type:Number,default:function(){return(new Date).getDate()}}},setup:function(e,t){var n=Object(r["ref"])(e.year),c=Object(r["ref"])(e.month),a=Object(r["ref"])(e.day),o=new Date(n.value,c.value,a.value),l=function(){n.value=o.getFullYear(),c.value=o.getMonth(),a.value=o.getDate()},i=Object(r["computed"])((function(){return n.value+" 年 "+(c.value+1)+" 月"})),s=Object(r["computed"])((function(){return new Date(n.value,c.value+1,0).getDate()})),d=Object(r["computed"])((function(){return new Date(n.value,c.value,1).getDay()})),u=Object(r["computed"])((function(){return new Date(n.value,c.value+1,0).getDay()}));Object(r["watch"])(n,(function(e){t.emit("update:year",e),o.setFullYear(e),l()})),Object(r["watch"])(c,(function(e){t.emit("update:month",e),o.setMonth(e),l()})),Object(r["watch"])(a,(function(e){t.emit("update:day",e),o.setDate(e),l()}));var b=function(){return c.value--},m=function(){return c.value++},p=function(e){return t.emit("clickDate",new Date(n.value,c.value,e))};return{date:o,prevMonth:b,nextMonth:m,header:i,lastDay:s,firstWeekly:d,lastWeekly:u,clickDate:p}}};oe.render=ee;var le=oe,ie={components:{StoryCard:H,LoadingCircle:R,Calendar:le},setup:function(){var e=Object(r["getCurrentInstance"])(),t=e.proxy,n=Object(r["reactive"])([]),c=Object(r["ref"])(!1),a=Object(r["ref"])(new Date),o=Object(r["ref"])(null),l=Object(r["ref"])(!1),i=function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(){var r,o,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c.value=!0,r=new Date(a.value.getTime()+864e5),o=function(e){return e.toString().padStart(2,0)},e.next=5,t.$http.get("news/before/"+(r.getFullYear()+o(r.getMonth()+1)+o(r.getDate())));case 5:l=e.sent,n.push({date:a.value.getFullYear()+" 年 "+(a.value.getMonth()+1)+" 月 "+a.value.getDate()+" 日",stories:l.data.stories}),a.value.setDate(a.value.getDate()-1),c.value=!1;case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(e){e.getTime()>Date.now()||(a.value=e,l.value=!1,n.length=0,i())};return Object(r["onMounted"])((function(){i()})),{loading:c,daily:n,nextLoadDate:a,loadStories:i,loadMoreBtn:o,calendarDialogVisible:l,calendarClick:s}}};ie.render=x;var se=ie,de={style:{padding:"16px 16px"}},ue=Object(r["createElementVNode"])("h4",null,"关于",-1),be=Object(r["createElementVNode"])("p",null,"Vue 3 试水项目，知乎日报网页版。",-1),me=Object(r["createElementVNode"])("p",null,[Object(r["createTextVNode"])("API 文档来自"),Object(r["createElementVNode"])("a",{href:"https://www.jianshu.com/p/ee556871da51",target:"_blank"},"知乎日报 API 分析"),Object(r["createTextVNode"])("，本项目与知乎无关。")],-1),pe=Object(r["createElementVNode"])("p",null,[Object(r["createElementVNode"])("a",{href:"https://github.com/TransparentLC/vue3-zhihu-daily",target:"_blank"},"GitHub 仓库")],-1),Oe=[ue,be,me,pe];function je(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",de,Oe)}const ge={};ge.render=je;var ve=ge,fe={class:"text-bold h4 text-light"},ye={class:"text-tiny text-light text-right",style:{opacity:".7"}},he={style:{padding:"0 16px"}},ke=Object(r["createElementVNode"])("div",{class:"modal-overlay"},null,-1),Ve={class:"modal-container"},Ee={class:"modal-header"},Ne=Object(r["createElementVNode"])("div",{class:"modal-title h5"},"评论",-1),Be={class:"modal-body"},xe={class:"text-bold text-large my-2"},Se={class:"text-bold text-large my-2"},Ce={class:"modal-footer"},De={class:"btn btn-sm bg-primary d-flex ml-1",style:{"align-items":"center"}},we={class:"ml-1"},Ae={class:"ml-1"};function Le(e,t,n,c,a,o){var l=Object(r["resolveComponent"])("loading-circle"),i=Object(r["resolveComponent"])("question"),s=Object(r["resolveComponent"])("comment"),d=Object(r["resolveComponent"])("mdi");return c.loading?(Object(r["openBlock"])(),Object(r["createBlock"])(l,{key:0})):(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:1},[Object(r["createElementVNode"])("div",{style:Object(r["normalizeStyle"])({height:"320px","background-image":"url("+c.image+")","background-position":"center","background-size":"cover"}),class:"p-relative"},[Object(r["createElementVNode"])("div",{style:Object(r["normalizeStyle"])({bottom:0,padding:"1em","padding-top":"3em",background:"linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.5),rgba(0,0,0,.7))",width:"100%"}),class:"p-absolute"},[Object(r["createElementVNode"])("div",fe,Object(r["toDisplayString"])(c.title),1),Object(r["createElementVNode"])("div",ye,Object(r["toDisplayString"])(c.credit),1)],4)],4),Object(r["createElementVNode"])("div",he,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.questions,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])(i,{key:t,title:e.title,author:e.author,bio:e.bio,avatar:e.avatar,origin:e.origin,discuss:e.discuss,content:e.content},null,8,["title","author","bio","avatar","origin","discuss","content"])})),128))]),Object(r["createElementVNode"])("div",{class:Object(r["normalizeClass"])(["modal",{active:c.commentDialog.visible}])},[ke,Object(r["createElementVNode"])("div",Ve,[Object(r["createElementVNode"])("div",Ee,[Object(r["createElementVNode"])("button",{class:"btn btn-clear float-right",onClick:t[0]||(t[0]=function(e){return c.commentDialog.visible=!1})}),Ne]),Object(r["createElementVNode"])("div",Be,[c.commentDialog.loading?(Object(r["openBlock"])(),Object(r["createBlock"])(l,{key:0})):(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:1},[Object(r["createElementVNode"])("div",xe,Object(r["toDisplayString"])(c.commentDialog.long.length)+" 条长评",1),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.commentDialog.long,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(s,{key:e.id,id:e.id,author:e.author,content:e.content,avatar:e.avatar,time:e.time,likes:e.likes,reply:e.reply},null,8,["id","author","content","avatar","time","likes","reply"])})),128)),Object(r["createElementVNode"])("div",Se,Object(r["toDisplayString"])(c.commentDialog.short.length)+" 条短评",1),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.commentDialog.short,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(s,{key:e.id,id:e.id,author:e.author,content:e.content,avatar:e.avatar,time:e.time,likes:e.likes,reply:e.reply},null,8,["id","author","content","avatar","time","likes","reply"])})),128))],64))]),Object(r["createElementVNode"])("div",Ce,[Object(r["createElementVNode"])("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=function(e){return c.commentDialog.visible=!1})},"关闭")])])],2),(Object(r["openBlock"])(),Object(r["createBlock"])(r["Teleport"],{to:"#navbar-item"},[Object(r["createElementVNode"])("button",De,[Object(r["createVNode"])(d,{color:"#fff",icon:"M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"},null,8,["icon"]),Object(r["createElementVNode"])("span",we,Object(r["toDisplayString"])(c.extra.popularity),1)]),Object(r["createElementVNode"])("button",{class:"btn btn-sm bg-primary d-flex ml-1",style:{"align-items":"center"},onClick:t[2]||(t[2]=function(e){c.commentDialog.visible=!0,c.loadComment()})},[Object(r["createVNode"])(d,{color:"#fff",icon:"M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M5,5V7H19V5H5M5,9V11H13V9H5M5,13V15H15V13H5Z"},null,8,["icon"]),Object(r["createElementVNode"])("span",Ae,Object(r["toDisplayString"])(c.extra.comments),1)])]))],64))}n("3ca3"),n("ddb0"),n("159b"),n("a630"),n("ac1f"),n("5319"),n("498a"),n("466d"),n("2b3d");var Me={class:"text-bold h5",style:{margin:"16px 0"}},He={key:0,class:"my-2"},Te={key:0,class:"avatar avatar-lg mr-2 bg-gray float-left"},Fe=["src"],_e={key:1},qe={class:"text-bold"},Pe={class:"text-gray text-ellipsis"},ze=["innerHTML"],Re=["href"];function $e(e,t,n,c,a,o){return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createElementVNode"])("div",Me,Object(r["toDisplayString"])(n.title),1),n.avatar||n.author||n.bio?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",He,[n.avatar?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",Te,[Object(r["createElementVNode"])("img",{src:n.avatar},null,8,Fe)])):Object(r["createCommentVNode"])("",!0),n.author||n.bio?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",_e,[Object(r["createElementVNode"])("div",qe,Object(r["toDisplayString"])(n.author),1),Object(r["createElementVNode"])("div",Pe,Object(r["toDisplayString"])(n.bio||" "),1)])):Object(r["createCommentVNode"])("",!0)])):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("div",{ref:"container",innerHTML:n.content},null,8,ze),n.discuss?(Object(r["openBlock"])(),Object(r["createElementBlock"])("a",{key:1,href:n.discuss,class:"btn d-block mt-2",style:{"margin-bottom":"24px"},target:"_blank"},"查看知乎讨论",8,Re)):Object(r["createCommentVNode"])("",!0)],64)}var Ie=new IntersectionObserver((function(e){return e.reduce((function(e,t){return t.isIntersecting&&e.push(t.target),e}),[]).forEach((function(e){var t=new Image,n=e.getAttribute("data-src");t.onload=t.onerror=function(){e.src=n,e.removeAttribute("data-src"),e.style.cssText="",e.classList.remove("s-rounded")},t.src=n,Ie.unobserve(e)}))})),Ye={props:{title:String,author:String,bio:String,avatar:String,origin:String,discuss:String,content:String},setup:function(){var e,t=Object(r["ref"])(null);return Object(r["onMounted"])((function(){e=Array.from(t.value.querySelectorAll("img[data-src]")),Object(r["nextTick"])((function(){return e.forEach((function(e){return Ie.observe(e)}))}))})),Object(r["onBeforeUnmount"])((function(){return e.forEach((function(e){return Ie.unobserve(e)}))})),{container:t}}};Ye.render=$e;var We=Ye,Ue={class:"tile my-2"},Ze={class:"tile-icon"},Qe={class:"avatar bg-gray"},Ge=["src"],Je={class:"tile-content"},Ke={class:"tile-title d-flex"},Xe={class:"text-bold"},et=Object(r["createElementVNode"])("div",{style:{"flex-grow":"1"}},null,-1),tt={class:"text-gray d-flex",style:{"align-items":"center"}},nt={class:"ml-1"},rt={class:"tile-subtitle"},ct={style:{"white-space":"pre-wrap"}},at={key:0,class:"p-2 s-rounded",style:{"background-color":"#f7f7f7"}},ot={class:"text-bold"},lt={style:{"white-space":"pre-wrap"}},it={class:"text-gray"};function st(e,t,n,c,a,o){var l=Object(r["resolveComponent"])("mdi");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",Ue,[Object(r["createElementVNode"])("div",Ze,[Object(r["createElementVNode"])("div",Qe,[Object(r["createElementVNode"])("img",{src:n.avatar},null,8,Ge)])]),Object(r["createElementVNode"])("div",Je,[Object(r["createElementVNode"])("div",Ke,[Object(r["createElementVNode"])("div",Xe,Object(r["toDisplayString"])(n.author),1),et,Object(r["createElementVNode"])("div",tt,[Object(r["createVNode"])(l,{small:"",color:"#bcc3ce",icon:"M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"},null,8,["icon"]),Object(r["createElementVNode"])("span",nt,Object(r["toDisplayString"])(n.likes),1)])]),Object(r["createElementVNode"])("div",rt,[Object(r["createElementVNode"])("div",ct,Object(r["toDisplayString"])(n.content),1),n.reply.content?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",at,[Object(r["createElementVNode"])("span",ot,Object(r["toDisplayString"])(n.reply.author)+"：",1),Object(r["createElementVNode"])("span",lt,Object(r["toDisplayString"])(n.reply.content),1)])):Object(r["createCommentVNode"])("",!0)]),Object(r["createElementVNode"])("small",it,Object(r["toDisplayString"])(n.time.getFullYear()+"-"+(n.time.getMonth()+1).toString().padStart(2,0)+"-"+n.time.getDate().toString().padStart(2,0))+" "+Object(r["toDisplayString"])(n.time.getHours().toString().padStart(2,0)+":"+n.time.getMinutes().toString().padStart(2,0)+":"+n.time.getSeconds().toString().padStart(2,0)),1)])])}var dt={components:{Mdi:ae},props:{id:Number,author:String,content:String,avatar:String,time:Date,likes:Number,reply:Object}};dt.render=st;var ut=dt,bt={components:{LoadingCircle:R,Question:We,Comment:ut,Mdi:ae},setup:function(){var e=Object(r["getCurrentInstance"])(),t=e.proxy,n=Object(r["ref"])(!1),c=Object(r["reactive"])([]),a=Object(r["ref"])(""),o=Object(r["ref"])(""),l=Object(r["ref"])(""),i=Object(r["reactive"])({longComments:0,shortComments:0,popularity:0,comments:0}),s=Object(r["reactive"])({visible:!1,loading:!0,loaded:!1,long:[],short:[]}),d=Object(g["useRoute"])().params.id,u=function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(){var r,s,u,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.value=!0,e.next=3,Promise.all([t.$http.get("news/"+d),t.$http.get("story-extra/"+d)]);case 3:r=e.sent,s=r[0],u=r[1],a.value=s.data.title,o.value=s.data.image,l.value=s.data.image_source,i.longComments=u.data.long_comments,i.shortComments=u.data.short_comments,i.popularity=u.data.popularity,i.comments=u.data.comments,b=(new DOMParser).parseFromString(s.data.body,"text/html"),Array.from(b.querySelectorAll(".question")).forEach((function(e){var t,n,r,a,o,l,i,s=null==(t=e.querySelector(".question-title"))?void 0:t.innerText,d=null==(n=e.querySelector(".meta .author"))?void 0:n.innerText.replace(/，$/,""),u=null==(r=e.querySelector(".meta .bio"))?void 0:r.innerText,b=null==(a=e.querySelector(".meta img.avatar"))?void 0:a.src,m=null==(o=e.querySelector(".meta .originUrl"))?void 0:o.href,p=e.querySelector(".view-more");p&&(l=null==(i=p.querySelector("a"))?void 0:i.href,p.parentNode.removeChild(p));var O=e.querySelector(".content");Array.from(O.querySelectorAll("p")).forEach((function(e){e.innerHTML.replace(/&nbsp;/," ").trim()||e.parentNode.removeChild(e)})),Array.from(O.querySelectorAll("img.content-image")).forEach((function(e){var t=e.parentNode,n=t.parentNode;if(e.setAttribute("data-src",e.src),e.src="data:image/gif;base64,R0lGODdhAQABAIAAAPf39wAAACwAAAAAAQABAAACAkQBADs=",e.style.cssText="width:100%;height:240px",e.classList.add("s-rounded","img-responsive"),"p"!==t.tagName){var r=document.createElement("p");r.appendChild(e),n.insertBefore(r,t),n.removeChild(t)}})),Array.from(O.querySelectorAll("a")).forEach((function(e){e.href.match(/^https?:\/\/link\.zhihu\.com\/\?target=/)&&(e.href=decodeURIComponent(new URL(e.href).searchParams.get("target")))})),Array.from(O.querySelectorAll("pre")).forEach((function(e){e.style.overflowY="auto"}));var j=O.innerHTML;c.push({title:s,author:d,bio:u,avatar:b,origin:m,discuss:l,content:j})})),n.value=!1;case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!s.loaded){e.next=2;break}return e.abrupt("return");case 2:return s.loading=!0,e.next=5,Promise.all([t.$http.get("./story/"+d+"/long-comments"),t.$http.get("./story/"+d+"/short-comments")]);case 5:n=e.sent,r=n[0],c=n[1],s.long=r.data.comments.map((function(e){return e.time=new Date(1e3*e.time),e.reply_to?(e.reply=e.reply_to,delete e.reply_to):e.reply={},e})),s.short=c.data.comments.map((function(e){return e.time=new Date(1e3*e.time),e.reply_to?(e.reply=e.reply_to,delete e.reply_to):e.reply={},e})),s.loading=!1,s.loaded=!0;case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r["onMounted"])(u),{loading:n,questions:c,title:a,image:o,credit:l,extra:i,commentDialog:s,loadComment:b}}};bt.render=Le;var mt=bt,pt=[{path:"/",component:se,meta:{keepAlive:!0}},{path:"/about",component:ve,meta:{keepAlive:!0}},{path:"/story/:id(\\d+)",component:mt}],Ot=Object(g["createRouter"])({history:Object(g["createWebHashHistory"])(),routes:pt}),jt=Ot,gt=Object(r["createApp"])(j);gt.config.globalProperties.$http=a.a.create({baseURL:"https://zhihu-daily.transparentlc.workers.dev/api/4/"}),gt.use(jt).mount("#app")},6389:function(e,t){e.exports=VueRouter},"8bbf":function(e,t){e.exports=Vue},cebe:function(e,t){e.exports=axios}});