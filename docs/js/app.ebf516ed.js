(function(t){function e(e){for(var c,n,r=e[0],o=e[1],s=e[2],d=0,u=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(t[c]=o[c]);b&&b(e);while(u.length)u.shift()();return l.push.apply(l,s||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],c=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(c=!1)}c&&(l.splice(e--,1),t=n(n.s=a[0]))}return t}var c={},i={app:0},l=[];function n(e){if(c[e])return c[e].exports;var a=c[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=c,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(a,c,function(e){return t[e]}.bind(null,c));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var s=0;s<r.length;s++)e(r[s]);var b=o;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"42fe":function(t,e,a){"use strict";a("90e0")},"56d7":function(t,e,a){"use strict";a.r(e);a("a79d");var c=a("7a23");const i={class:"navbar bg-primary p-fixed",style:{"z-index":"1000",width:"100%",top:"0"}},l={class:"navbar-section p-2 container grid-sm"},n=Object(c["i"])("span",{class:"navbar-brand text-bold mr-2",style:{color:"#fff!important"}},"知乎日报",-1),r=Object(c["h"])("Home"),o=Object(c["h"])("About"),s=Object(c["i"])("span",{style:{"flex-grow":"1"}},null,-1),b=Object(c["i"])("div",{id:"navbar-item",class:"d-flex"},null,-1),d={class:"container grid-sm px-0"};function u(t,e,a,u,O,j){const m=Object(c["y"])("router-link"),g=Object(c["y"])("router-view");return Object(c["t"])(),Object(c["f"])(c["a"],null,[Object(c["i"])("div",i,[Object(c["i"])("div",l,[n,Object(c["i"])(m,{to:"/",class:"btn btn-link",style:{color:"#fff!important"}},{default:Object(c["G"])(()=>[r]),_:1}),Object(c["i"])(m,{to:"/about",class:"btn btn-link",style:{color:"#fff!important"}},{default:Object(c["G"])(()=>[o]),_:1}),s,b])]),Object(c["i"])("div",d,[Object(c["i"])(g,null,{default:Object(c["G"])(({Component:e})=>[(Object(c["t"])(),Object(c["f"])(c["b"],null,[t.$route.meta.keepAlive?(Object(c["t"])(),Object(c["f"])(Object(c["z"])(e),{key:t.$route.path})):Object(c["g"])("",!0)],1024)),t.$route.meta.keepAlive?Object(c["g"])("",!0):(Object(c["t"])(),Object(c["f"])(Object(c["z"])(e),{key:0}))]),_:1})])],64)}a("42fe");const O={};O.render=u;var j=O,m=a("954b");a("ddb0");const g={key:1,style:{padding:"16px 16px"}},v={class:"text-bold h3 mb-2",style:{"margin-top":"24px"}},p=Object(c["i"])("div",{class:"modal-overlay"},null,-1),y={class:"modal-container"},h={class:"modal-header"},f=Object(c["i"])("div",{class:"modal-title h5"},"查看历史日报",-1),k={class:"modal-body"},x={class:"modal-footer"};function w(t,e,a,i,l,n){const r=Object(c["y"])("loading-circle"),o=Object(c["y"])("story-card"),s=Object(c["y"])("router-link"),b=Object(c["y"])("calendar");return i.loading&&0===i.daily.length?(Object(c["t"])(),Object(c["f"])(r,{key:0})):(Object(c["t"])(),Object(c["f"])("div",g,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(i.daily,t=>(Object(c["t"])(),Object(c["f"])(c["a"],{key:t.date},[Object(c["i"])("div",v,Object(c["B"])(t.date),1),(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(t.stories,t=>(Object(c["t"])(),Object(c["f"])(s,{key:t.id,to:"/story/"+t.id,custom:""},{default:Object(c["G"])(({navigate:e})=>[Object(c["i"])(o,{id:t.id,title:t.title,url:t.url,hint:t.hint,image:t.images[0],hue:t.hue,onClick:e},null,8,["id","title","url","hint","image","hue","onClick"])]),_:2},1032,["to"]))),128))],64))),128)),Object(c["H"])(Object(c["i"])("button",{ref:"loadMoreBtn",class:["btn btn-lg btn-primary d-block my-2",{loading:i.loading}],style:{width:"100%"},disabled:i.loading,onClick:e[1]||(e[1]=(...t)=>i.loadStories(...t))},"加载更多",10,["disabled"]),[[c["D"],i.daily.length]]),Object(c["i"])("div",{class:["modal modal-sm",{active:i.calendarDialogVisible}]},[p,Object(c["i"])("div",y,[Object(c["i"])("div",h,[Object(c["i"])("button",{class:"btn btn-clear float-right",onClick:e[2]||(e[2]=t=>i.calendarDialogVisible=!1)}),f]),Object(c["i"])("div",k,[Object(c["i"])(b,{onClickDate:i.calendarClick},null,8,["onClickDate"])]),Object(c["i"])("div",x,[Object(c["i"])("button",{class:"btn btn-primary",onClick:e[3]||(e[3]=t=>i.calendarDialogVisible=!1)},"关闭")])])],2),(Object(c["t"])(),Object(c["f"])(c["c"],{to:"#navbar-item"},["/"===t.$route.path?(Object(c["t"])(),Object(c["f"])("button",{key:0,class:"btn btn-link",style:{color:"#fff!important"},onClick:e[4]||(e[4]=t=>i.calendarDialogVisible=!0)},"查看历史日报")):Object(c["g"])("",!0)]))]))}var D=a("bc3a"),S=a.n(D);const C={class:"card mb-2 c-hand"},A={class:"card-body"},L={class:"card-subtitle text-gray pr-1"};function B(t,e,a,i,l,n){return Object(c["t"])(),Object(c["f"])("div",C,[Object(c["i"])("div",A,[Object(c["i"])("div",{class:"float-right s-rounded",style:{"background-image":`url(${a.image})`,width:"54px",height:"54px"}},null,4),Object(c["i"])("div",null,[Object(c["i"])("div",{class:"card-title h5 text-ellipsis pr-1",title:a.title},Object(c["B"])(a.title),9,["title"]),Object(c["i"])("div",L,Object(c["B"])(a.hint),1)])])])}var M={props:{id:Number,title:String,url:String,hint:String,image:String,hue:String}};M.render=B;var H=M;const V={style:{margin:"32px 0"}},_=Object(c["i"])("div",{class:"loading loading-lg my-2"},null,-1),$=Object(c["i"])("div",{class:"text-center text-primary"},[Object(c["i"])("small",null,"Loading")],-1);function q(t,e,a,i,l,n){return Object(c["t"])(),Object(c["f"])("div",V,[_,$])}const T={};T.render=q;var P=T;const F={class:"calendar"},N={class:"calendar-nav navbar"},E=Object(c["i"])("svg",{fill:"#3b4351",width:"24",height:"24",viewBox:"0 0 24 24"},[Object(c["i"])("path",{d:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"})],-1),z={class:"navbar-primary"},I=Object(c["i"])("svg",{fill:"#3b4351",width:"24",height:"24",viewBox:"0 0 24 24"},[Object(c["i"])("path",{d:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"})],-1),Y={class:"calendar-container"},G={class:"calendar-header"},W={class:"calendar-body"},Z=Object(c["i"])("button",{class:"date-item disabled"},null,-1),Q=Object(c["i"])("button",{class:"date-item disabled"},null,-1);function R(t,e,a,i,l,n){return Object(c["t"])(),Object(c["f"])("div",F,[Object(c["i"])("div",N,[Object(c["i"])("button",{class:"btn btn-action btn-link btn-lg",onClick:e[1]||(e[1]=(...t)=>i.prevMonth(...t))},[E]),Object(c["i"])("div",z,Object(c["B"])(i.header),1),Object(c["i"])("button",{class:"btn btn-action btn-link btn-lg",onClick:e[2]||(e[2]=(...t)=>i.nextMonth(...t))},[I])]),Object(c["i"])("div",Y,[Object(c["i"])("div",G,[(Object(c["t"])(),Object(c["f"])(c["a"],null,Object(c["x"])(["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],(t,e)=>Object(c["i"])("div",{key:e,class:"calendar-date"},Object(c["B"])(t),1)),64))]),Object(c["i"])("div",W,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(i.firstWeekly,t=>(Object(c["t"])(),Object(c["f"])("div",{key:t,class:"calendar-date prev-month"},[Z]))),128)),(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(i.lastDay,t=>(Object(c["t"])(),Object(c["f"])("div",{key:t,class:"calendar-date"},[Object(c["i"])("button",{class:"date-item",onClick:e=>i.clickDate(t)},Object(c["B"])(t),9,["onClick"])]))),128)),(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(6-i.lastWeekly,t=>(Object(c["t"])(),Object(c["f"])("div",{key:t,class:"calendar-date next-month"},[Q]))),128))])])])}var U={props:{year:{type:Number,default:()=>(new Date).getFullYear()},month:{type:Number,default:()=>(new Date).getMonth()},day:{type:Number,default:()=>(new Date).getDate()}},setup(t,e){const a=Object(c["w"])(t.year),i=Object(c["w"])(t.month),l=Object(c["w"])(t.day),n=new Date(a.value,i.value,l.value),r=()=>{a.value=n.getFullYear(),i.value=n.getMonth(),l.value=n.getDate()},o=Object(c["d"])(()=>`${a.value} 年 ${i.value+1} 月`),s=Object(c["d"])(()=>new Date(a.value,i.value+1,0).getDate()),b=Object(c["d"])(()=>new Date(a.value,i.value,1).getDay()),d=Object(c["d"])(()=>new Date(a.value,i.value+1,0).getDay());Object(c["F"])(a,t=>{e.emit("update:year",t),n.setFullYear(t),r()}),Object(c["F"])(i,t=>{e.emit("update:month",t),n.setMonth(t),r()}),Object(c["F"])(l,t=>{e.emit("update:day",t),n.setDate(t),r()});const u=()=>i.value--,O=()=>i.value++,j=t=>e.emit("clickDate",new Date(a.value,i.value,t));return{date:n,prevMonth:u,nextMonth:O,header:o,lastDay:s,firstWeekly:b,lastWeekly:d,clickDate:j}}};U.render=R;var J=U,K={components:{storyCard:H,LoadingCircle:P,Calendar:J},setup(){const t=Object(c["v"])([]),e=Object(c["w"])(!1),a=Object(c["w"])(new Date),i=Object(c["w"])(null),l=Object(c["w"])(!1),n=async()=>{e.value=!0;const c=new Date(a.value.getTime()+864e5),i=t=>t.toString().padStart(2,0),l=await S.a.get("./news/before/"+(c.getFullYear()+i(c.getMonth()+1)+i(c.getDate())));t.push({date:`${a.value.getFullYear()} 年 ${a.value.getMonth()+1} 月 ${a.value.getDate()} 日`,stories:l.data.stories}),a.value.setDate(a.value.getDate()-1),e.value=!1},r=e=>{e.getTime()>Date.now()||(a.value=e,l.value=!1,t.length=0,n())};return Object(c["r"])(()=>{n()}),{loading:e,daily:t,nextLoadDate:a,loadStories:n,loadMoreBtn:i,calendarDialogVisible:l,calendarClick:r}}};K.render=w;var X=K;const tt={style:{padding:"16px 16px"}},et=Object(c["i"])("h4",null,"关于",-1),at=Object(c["i"])("p",null,"Vue 3 试水项目，知乎日报网页版。",-1),ct=Object(c["i"])("p",null,[Object(c["h"])("API 文档来自"),Object(c["i"])("a",{href:"https://www.jianshu.com/p/ee556871da51",target:"_blank"},"知乎日报 API 分析"),Object(c["h"])("，本项目与知乎无关。")],-1),it=Object(c["i"])("p",null,[Object(c["i"])("a",{href:"https://github.com/TransparentLC/vue3-zhihu-daily",target:"_blank"},"GitHub 仓库")],-1);function lt(t,e,a,i,l,n){return Object(c["t"])(),Object(c["f"])("div",tt,[et,at,ct,it])}const nt={};nt.render=lt;var rt=nt;const ot={class:"text-bold h4 text-light"},st={class:"text-tiny text-light text-right",style:{opacity:".7"}},bt={style:{padding:"0 16px"}},dt=Object(c["i"])("div",{class:"modal-overlay"},null,-1),ut={class:"modal-container"},Ot={class:"modal-header"},jt=Object(c["i"])("div",{class:"modal-title h5"},"评论",-1),mt={class:"modal-body"},gt={class:"text-bold text-large my-2"},vt={class:"text-bold text-large my-2"},pt={class:"modal-footer"},yt={class:"btn btn-sm bg-primary d-flex ml-1",style:{"align-items":"center"}},ht=Object(c["i"])("svg",{fill:"#fff",width:"24",height:"24",viewBox:"0 0 24 24"},[Object(c["i"])("path",{d:"M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"})],-1),ft={class:"ml-1"},kt=Object(c["i"])("svg",{fill:"#fff",width:"24",height:"24",viewBox:"0 0 24 24"},[Object(c["i"])("path",{d:"M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M5,5V7H19V5H5M5,9V11H13V9H5M5,13V15H15V13H5Z"})],-1),xt={class:"ml-1"};function wt(t,e,a,i,l,n){const r=Object(c["y"])("loading-circle"),o=Object(c["y"])("question"),s=Object(c["y"])("comment");return i.loading?(Object(c["t"])(),Object(c["f"])(r,{key:0})):(Object(c["t"])(),Object(c["f"])(c["a"],{key:1},[Object(c["i"])("div",{style:{height:"320px","background-image":`url(${i.image})`,"background-position":"center","background-size":"cover"},class:"p-relative"},[Object(c["i"])("div",{style:{bottom:0,padding:"1em","padding-top":"3em",background:"linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.5),rgba(0,0,0,.7))",width:"100%"},class:"p-absolute"},[Object(c["i"])("div",ot,Object(c["B"])(i.title),1),Object(c["i"])("div",st,Object(c["B"])(i.credit),1)],4)],4),Object(c["i"])("div",bt,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(i.questions,(t,e)=>(Object(c["t"])(),Object(c["f"])(o,{key:e,title:t.title,author:t.author,bio:t.bio,avatar:t.avatar,origin:t.origin,discuss:t.discuss,content:t.content},null,8,["title","author","bio","avatar","origin","discuss","content"]))),128))]),Object(c["i"])("div",{class:["modal",{active:i.commentDialog.visible}]},[dt,Object(c["i"])("div",ut,[Object(c["i"])("div",Ot,[Object(c["i"])("button",{class:"btn btn-clear float-right",onClick:e[1]||(e[1]=t=>i.commentDialog.visible=!1)}),jt]),Object(c["i"])("div",mt,[i.commentDialog.loading?(Object(c["t"])(),Object(c["f"])(r,{key:0})):(Object(c["t"])(),Object(c["f"])(c["a"],{key:1},[Object(c["i"])("div",gt,Object(c["B"])(i.commentDialog.long.length)+" 条长评",1),(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(i.commentDialog.long,t=>(Object(c["t"])(),Object(c["f"])(s,{key:t.id,id:t.id,author:t.author,content:t.content,avatar:t.avatar,time:t.time,likes:t.likes,reply:t.reply},null,8,["id","author","content","avatar","time","likes","reply"]))),128)),Object(c["i"])("div",vt,Object(c["B"])(i.commentDialog.short.length)+" 条短评",1),(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(i.commentDialog.short,t=>(Object(c["t"])(),Object(c["f"])(s,{key:t.id,id:t.id,author:t.author,content:t.content,avatar:t.avatar,time:t.time,likes:t.likes,reply:t.reply},null,8,["id","author","content","avatar","time","likes","reply"]))),128))],64))]),Object(c["i"])("div",pt,[Object(c["i"])("button",{class:"btn btn-primary",onClick:e[2]||(e[2]=t=>i.commentDialog.visible=!1)},"关闭")])])],2),(Object(c["t"])(),Object(c["f"])(c["c"],{to:"#navbar-item"},[Object(c["i"])("button",yt,[ht,Object(c["i"])("span",ft,Object(c["B"])(i.extra.popularity),1)]),Object(c["i"])("button",{class:"btn btn-sm bg-primary d-flex ml-1",style:{"align-items":"center"},onClick:e[3]||(e[3]=t=>{i.commentDialog.visible=!0,i.loadComment()})},[kt,Object(c["i"])("span",xt,Object(c["B"])(i.extra.comments),1)])]))],64))}a("5319"),a("498a"),a("2b3d");const Dt={class:"text-bold h5",style:{margin:"16px 0"}},St={key:0,class:"my-2"},Ct={key:0,class:"avatar avatar-lg mr-2 bg-gray float-left"},At={key:1},Lt={class:"text-bold"},Bt={class:"text-gray text-ellipsis"};function Mt(t,e,a,i,l,n){return Object(c["t"])(),Object(c["f"])(c["a"],null,[Object(c["i"])("div",Dt,Object(c["B"])(a.title),1),a.avatar||a.author||a.bio?(Object(c["t"])(),Object(c["f"])("div",St,[a.avatar?(Object(c["t"])(),Object(c["f"])("div",Ct,[Object(c["i"])("img",{src:a.avatar},null,8,["src"])])):Object(c["g"])("",!0),a.author||a.bio?(Object(c["t"])(),Object(c["f"])("div",At,[Object(c["i"])("div",Lt,Object(c["B"])(a.author),1),Object(c["i"])("div",Bt,Object(c["B"])(a.bio||" "),1)])):Object(c["g"])("",!0)])):Object(c["g"])("",!0),Object(c["i"])("div",{ref:"container",innerHTML:a.content},null,8,["innerHTML"]),a.discuss?(Object(c["t"])(),Object(c["f"])("a",{key:1,href:a.discuss,class:"btn d-block mt-2",style:{"margin-bottom":"24px"},target:"_blank"},"查看知乎讨论",8,["href"])):Object(c["g"])("",!0)],64)}const Ht=new IntersectionObserver(t=>t.reduce((t,e)=>(e.isIntersecting&&t.push(e.target),t),[]).forEach(t=>{const e=new Image,a=t.getAttribute("data-src");e.onload=e.onerror=()=>{t.src=a,t.removeAttribute("data-src"),t.style.cssText="",t.classList.remove("s-rounded")},e.src=a,Ht.unobserve(t)}));var Vt={props:{title:String,author:String,bio:String,avatar:String,origin:String,discuss:String,content:String},setup(t){const e=Object(c["w"])(null);let a;return Object(c["r"])(()=>{a=Array.from(e.value.querySelectorAll("img[data-src]")),Object(c["n"])(()=>a.forEach(t=>Ht.observe(t)))}),Object(c["p"])(()=>a.forEach(t=>Ht.unobserve(t))),{container:e}}};Vt.render=Mt;var _t=Vt;const $t={class:"tile my-2"},qt={class:"tile-icon"},Tt={class:"avatar bg-gray"},Pt={class:"tile-content"},Ft={class:"tile-title d-flex"},Nt={class:"text-bold"},Et=Object(c["i"])("div",{style:{"flex-grow":"1"}},null,-1),zt={class:"text-gray d-flex",style:{"align-items":"center"}},It=Object(c["i"])("svg",{fill:"#bcc3ce",width:"18",height:"18",viewBox:"0 0 24 24"},[Object(c["i"])("path",{d:"M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"})],-1),Yt={class:"ml-1"},Gt={class:"tile-subtitle"},Wt={style:{"white-space":"pre-wrap"}},Zt={key:0,class:"p-2 s-rounded",style:{"background-color":"#f7f7f7"}},Qt={class:"text-bold"},Rt={style:{"white-space":"pre-wrap"}},Ut={class:"text-gray"};function Jt(t,e,a,i,l,n){return Object(c["t"])(),Object(c["f"])("div",$t,[Object(c["i"])("div",qt,[Object(c["i"])("div",Tt,[Object(c["i"])("img",{src:a.avatar},null,8,["src"])])]),Object(c["i"])("div",Pt,[Object(c["i"])("div",Ft,[Object(c["i"])("div",Nt,Object(c["B"])(a.author),1),Et,Object(c["i"])("div",zt,[It,Object(c["i"])("span",Yt,Object(c["B"])(a.likes),1)])]),Object(c["i"])("div",Gt,[Object(c["i"])("div",Wt,Object(c["B"])(a.content),1),a.reply.content?(Object(c["t"])(),Object(c["f"])("div",Zt,[Object(c["i"])("span",Qt,Object(c["B"])(a.reply.author)+"：",1),Object(c["i"])("span",Rt,Object(c["B"])(a.reply.content),1)])):Object(c["g"])("",!0)]),Object(c["i"])("small",Ut,Object(c["B"])(`${a.time.getFullYear()}-${(a.time.getMonth()+1).toString().padStart(2,0)}-${a.time.getDate().toString().padStart(2,0)}`)+" "+Object(c["B"])(`${a.time.getHours().toString().padStart(2,0)}:${a.time.getMinutes().toString().padStart(2,0)}:${a.time.getSeconds().toString().padStart(2,0)}`),1)])])}var Kt={props:{id:Number,author:String,content:String,avatar:String,time:Date,likes:Number,reply:Object}};Kt.render=Jt;var Xt=Kt,te={components:{LoadingCircle:P,Question:_t,Comment:Xt},setup(){const t=Object(c["w"])(!1),e=Object(c["v"])([]),a=Object(c["w"])(""),i=Object(c["w"])(""),l=Object(c["w"])(""),n=Object(c["v"])({longComments:0,shortComments:0,popularity:0,comments:0}),r=Object(c["v"])({visible:!1,loading:!0,loaded:!1,long:[],short:[]}),o=Object(m["c"])().params.id,s=async()=>{t.value=!0;const[c,r]=await Promise.all([S.a.get("./news/"+o),S.a.get("./story-extra/"+o)]);a.value=c.data.title,i.value=c.data.image,l.value=c.data.image_source,n.longComments=r.data.long_comments,n.shortComments=r.data.short_comments,n.popularity=r.data.popularity,n.comments=r.data.comments;const s=(new DOMParser).parseFromString(c.data.body,"text/html");Array.from(s.querySelectorAll(".question")).forEach(t=>{var a,c,i,l,n;const r=null==(a=t.querySelector(".question-title"))?void 0:a.innerText,o=null==(c=t.querySelector(".meta .author"))?void 0:c.innerText.replace(/，$/,""),s=null==(i=t.querySelector(".meta .bio"))?void 0:i.innerText,b=null==(l=t.querySelector(".meta img.avatar"))?void 0:l.src,d=null==(n=t.querySelector(".meta .originUrl"))?void 0:n.href,u=t.querySelector(".view-more");let O;var j;u&&(O=null==(j=u.querySelector("a"))?void 0:j.href,u.parentNode.removeChild(u));const m=t.querySelector(".content");Array.from(m.querySelectorAll("p")).forEach(t=>{t.innerHTML.replace(/&nbsp;/," ").trim()||t.parentNode.removeChild(t)}),Array.from(m.querySelectorAll("img.content-image")).forEach(t=>{const e=t.parentNode,a=e.parentNode;if(t.setAttribute("data-src",t.src),t.src="data:image/gif;base64,R0lGODdhAQABAIAAAPf39wAAACwAAAAAAQABAAACAkQBADs=",t.style.cssText="width:100%;height:240px",t.classList.add("s-rounded","img-responsive"),"p"!==e.tagName){const c=document.createElement("p");c.appendChild(t),a.insertBefore(c,e),a.removeChild(e)}}),Array.from(m.querySelectorAll("a")).forEach(t=>{t.href.match(/^https?:\/\/link\.zhihu\.com\/\?target=/)&&(t.href=decodeURIComponent(new URL(t.href).searchParams.get("target")))}),Array.from(m.querySelectorAll("pre")).forEach(t=>{t.style.overflowY="auto"});const g=m.innerHTML;e.push({title:r,author:o,bio:s,avatar:b,origin:d,discuss:O,content:g})}),t.value=!1},b=async()=>{if(r.loaded)return;r.loading=!0;const[t,e]=await Promise.all([S.a.get(`./story/${o}/long-comments`),S.a.get(`./story/${o}/short-comments`)]);r.long=t.data.comments.map(t=>(t.time=new Date(1e3*t.time),t.reply_to?(t.reply=t.reply_to,delete t.reply_to):t.reply={},t)),r.short=e.data.comments.map(t=>(t.time=new Date(1e3*t.time),t.reply_to?(t.reply=t.reply_to,delete t.reply_to):t.reply={},t)),r.loading=!1,r.loaded=!0};return Object(c["r"])(s),{loading:t,questions:e,title:a,image:i,credit:l,extra:n,commentDialog:r,loadComment:b}}};te.render=wt;var ee=te;const ae=[{path:"/",component:X,meta:{keepAlive:!0}},{path:"/about",component:rt,meta:{keepAlive:!0}},{path:"/story/:id(\\d+)",component:ee}],ce=Object(m["a"])({history:Object(m["b"])(),routes:ae});var ie=ce;S.a.defaults.baseURL="https://zhihu-daily.transparentlc.workers.dev/api/4/",Object(c["e"])(j).use(ie).mount("#app")},"90e0":function(t,e,a){}});