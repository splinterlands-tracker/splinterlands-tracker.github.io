(this.webpackJsonpsplinterlands=this.webpackJsonpsplinterlands||[]).push([[0],{42:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},51:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},79:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(15),a=c.n(s),i=(c(42),c(4)),o=(c(46),c(47),c(14)),l=Object(o.b)({name:"ui",initialState:{isLoading:!1,darkTheme:!0,currency:"PHP",isShowSettings:!1},reducers:{isLoading:function(e,t){e.isLoading=t.payload},setTheme:function(e,t){e.darkTheme=t.payload},setCurrency:function(e,t){e.currency=t.payload},isShowSettings:function(e,t){e.isShowSettings=t.payload}}}),d=c(3),u=c(0),j=function(){var e=Object(i.b)();Object(d.g)();return Object(u.jsxs)("nav",{class:"navbar navbar-expand-md bg-dark navbar-dark",children:[Object(u.jsx)("a",{class:"navbar-brand",href:"#",children:"Splinterlands Tracker"}),Object(u.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",children:Object(u.jsx)("span",{class:"navbar-toggler-icon"})}),Object(u.jsx)("div",{class:"collapse navbar-collapse",id:"collapsibleNavbar",children:Object(u.jsxs)("ul",{class:"navbar-nav",children:[Object(u.jsx)("li",{class:"nav-item",children:Object(u.jsx)("a",{class:"nav-link",href:"/#/dashboard",children:"DASHBOARD"})}),Object(u.jsx)("li",{class:"nav-item",children:Object(u.jsx)("a",{class:"nav-link",href:"/#/cards",children:"CARDS"})}),Object(u.jsx)("li",{class:"nav-item",children:Object(u.jsx)("a",{class:"nav-link",href:"#/rented-cards",children:"RENTED CARDS"})}),Object(u.jsx)("li",{class:"nav-item",children:Object(u.jsx)("div",{class:"nav-link",onClick:function(){e(l.actions.isShowSettings(!0))},children:"RENTED CARDS"})})]})})]})},b=(c(51),function(){return Object(n.useEffect)((function(){return document.body.classList.add("modal-open"),function(){document.body.classList.remove("modal-open")}})),Object(u.jsx)("div",{id:"loading",children:Object(u.jsx)("div",{id:"loading-container",children:Object(u.jsx)("img",{src:"/img/loading.svg",height:"100"})})})}),h=c(5),m=c.n(h),p=c(13),x=c(11),O=c(27),f=["BRL","PHP","AED","ARS","AUD","CNY","EUR","GBP","HKD","IDR","INR","JPY","MYR","SGD","THB","TWD","USD","VES","VND"],g=c(17),v=c.n(g),S=function(e){return e?e.data:null},y=function(e){return v.a.get(e).then(S)},N={Price:{getDECPrice:function(e){return y("https://api.coingecko.com/api/v3/simple/price?ids=dark-energy-crystals&vs_currencies="+e)},getSPSPrice:function(e){return y("https://api.coingecko.com/api/v3/simple/price?ids=splinterlands&vs_currencies="+e)}},Splinterlands:{getPlayerBalance:function(e){return y("https://api.splinterlands.io/players/balances?username=".concat(e))},getPlayerSettings:function(e){return y("https://api.splinterlands.io/players/details?name=".concat(e))}}},k=c(12),C=function(){var e=Object(x.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=0,e.next=3,N.Price.getDECPrice(t).then((function(e){c=e["dark-energy-crystals"]["".concat(t.toLowerCase())]})).catch((function(e){return console.error(e),k.b.error("Unable to get DEC price.",{toastId:"DEC"}),null}));case 3:return e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(x.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=0,e.next=3,N.Price.getSPSPrice(t).then((function(e){c=e.splinterlands["".concat(t.toLowerCase())]})).catch((function(e){return console.error(e),k.b.error("Unable to get SPS Price.",{toastId:"SPS"}),null}));case 3:return e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=(c(72),Object(o.b)({name:"summary",initialState:{form:{username:"",show:!1},total:{accounts:0,dec:0,sps:0,s_sps:0,dec_price:0,sps_price:0,con_dec_price:0,con_sps_price:0}},reducers:{setForm:function(e,t){e.form.username=t.payload},showForm:function(e,t){e.form.show=t.payload},setTotal:function(e,t){e.total=t.payload}}})),D=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})),c=Object(i.c)((function(e){return e.summary})),r=Object(n.useState)(t.currency),s=Object(O.a)(r,2),a=s[0],o=s[1],d=Object(n.useState)(t.darkTheme),j=Object(O.a)(d,2),b=j[0],h=j[1],g=function(){var t=Object(x.a)(m.a.mark((function t(){var n,r,s,i,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(l.actions.setCurrency(a)),e(l.actions.setTheme(b)),e(l.actions.isShowSettings(!1)),n={currency:a,darkTheme:b},localStorage.setItem("settings",JSON.stringify(n)),t.next=7,C("USD");case 7:return r=t.sent,t.next=10,w("USD");case 10:return s=t.sent,t.next=13,C(n.currency);case 13:return i=t.sent,t.next=16,w(n.currency);case 16:o=t.sent,e(I.actions.setTotal(Object(p.a)(Object(p.a)({},c.total),{},{dec_price:r,sps_price:s,con_dec_price:i,con_sps_price:o})));case 18:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){return document.body.classList.add("modal-open"),function(){document.body.classList.remove("modal-open")}})),Object(u.jsxs)("div",{id:"settings",children:[Object(u.jsx)("div",{id:"overlay"}),Object(u.jsx)("div",{id:"main",children:Object(u.jsxs)("div",{id:"form",children:[Object(u.jsx)("div",{className:"p-2",children:Object(u.jsx)("h5",{children:"Settings"})}),Object(u.jsxs)("div",{className:"p-2 form-group",children:[Object(u.jsx)("label",{htmlFor:"currency",children:"Currency"}),Object(u.jsx)("select",{className:"form-control",id:"currency",name:"currency",value:a,onChange:function(e){o(e.target.value)},children:f.map((function(e,t){return Object(u.jsx)("option",{value:e,children:e},t)}))})]}),Object(u.jsx)("div",{className:"p-2",children:Object(u.jsxs)("div",{className:"form-check form-switch",children:[Object(u.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",checked:b,onChange:function(e){return h(e.target.checked)}}),Object(u.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})}),Object(u.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(u.jsx)("button",{className:"btn btn-danger btn-sm m-1",onClick:function(){e(l.actions.isShowSettings(!1))},children:"Cancel"}),Object(u.jsx)("button",{className:"btn btn-success btn-sm m-1",onClick:g,children:"Submit"})]})]})})]})},E=c(37),_=(c(73),function(e){return Object(u.jsxs)("div",Object(p.a)(Object(p.a)({className:"card ".concat(e.className)},e),{},{children:[Object(u.jsx)("div",{className:"card-header ".concat(e.headerclass),children:e.header}),Object(u.jsx)("div",{className:"card-body",style:{minHeight:"75px"},children:e.children})]}))}),L=Object(o.b)({name:"accounts",initialState:[],reducers:{addAccount:function(e,t){e.push(t.payload)},deleteAccount:function(e,t){return e.filter((function(e){return e.username!==t.payload}))},setAccounts:function(e,t){return t.payload}}}),A=(c(74),function(e){var t=Object(i.b)();Object(i.c)((function(e){return e.summary}));return Object(u.jsxs)("div",{id:"account-list",className:"w-100",style:{backgroundColor:"#444"},children:[Object(u.jsxs)("div",{id:"account-list-header",className:"p-2",style:{borderBottom:"1px solid #333"},children:[Object(u.jsx)("h5",{className:"text-white",children:"Account List"}),Object(u.jsxs)("div",{class:"d-flex justify-content-end",children:[Object(u.jsx)("button",{className:"btn-sm btn-success m-1",onClick:function(){t(I.actions.showForm(!0))},children:"ADD"}),Object(u.jsx)("button",{className:"btn-sm btn-info m-1",onClick:e.fnRefresh,children:"REFRESH"})]})]}),Object(u.jsx)("div",{className:"p-1 w-100",style:{overflow:"auto"},children:Object(u.jsxs)("table",{className:"table table-dark table-striped table-sm",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"Username"}),Object(u.jsx)("th",{children:"ECR"}),Object(u.jsx)("th",{children:"Rank"}),Object(u.jsx)("th",{children:"Rating"}),Object(u.jsx)("th",{children:"Power"}),Object(u.jsx)("th",{children:"In-game DEC"}),Object(u.jsx)("th",{children:"SPS"}),Object(u.jsx)("th",{children:"Staked SPS"}),Object(u.jsx)("th",{children:"Credits"}),Object(u.jsx)("th",{children:"Untamed Packs"}),Object(u.jsx)("th",{children:"Quest Potion"}),Object(u.jsx)("th",{children:"Gold Potion"}),Object(u.jsx)("th",{children:"Legendary Potion"}),Object(u.jsx)("th",{children:"Action"})]})}),Object(u.jsx)("tbody",{children:e.accounts.map((function(e,c){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:c+1}),Object(u.jsx)("td",{children:e.username}),Object(u.jsx)("td",{children:"".concat(e.ecr,"%")}),Object(u.jsx)("td",{children:e.rank}),Object(u.jsx)("td",{children:e.rating.toLocaleString()}),Object(u.jsx)("td",{children:e.power.toLocaleString()}),Object(u.jsx)("td",{children:e.dec.toLocaleString()}),Object(u.jsx)("td",{children:e.sps.toLocaleString()}),Object(u.jsx)("td",{children:e.s_sps.toLocaleString()}),Object(u.jsx)("td",{children:e.credits.toLocaleString()}),Object(u.jsx)("td",{children:e.untamed}),Object(u.jsx)("td",{children:e.quest_potion.toLocaleString()}),Object(u.jsx)("td",{children:e.gold_potion.toLocaleString()}),Object(u.jsx)("td",{children:e.legend_potion.toLocaleString()}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"btn-sm btn-danger",onClick:function(){t(L.actions.deleteAccount(e.username));var c=JSON.parse(localStorage.getItem("accounts")).filter((function(t){return t!==e.username}));localStorage.setItem("accounts",JSON.stringify(c))},children:"DELETE"})})]},c)}))})]})})]})}),P=(c(75),function(e){var t=Object(i.b)(),c=Object(i.c)((function(e){return e.summary})),r=Object(n.useRef)();return Object(n.useEffect)((function(){return document.body.classList.add("modal-open"),r.current&&r.current.focus(),function(){document.body.classList.remove("modal-open")}})),Object(u.jsxs)("div",{id:"add-account-modal",children:[Object(u.jsx)("div",{id:"overlay"}),Object(u.jsx)("div",{id:"main",children:Object(u.jsxs)("div",{id:"form",children:[Object(u.jsx)("div",{className:"p-2",children:Object(u.jsx)("h5",{className:"text-white",children:"Add Account"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{name:"username",ref:r,value:c.form.username,onChange:function(e){t(I.actions.setForm(e.target.value.toLowerCase()))},placeholder:"ENTER HIVE USERNAME",autoComplete:"off",onKeyUp:function(n){13===n.keyCode&&(t(I.actions.setForm("")),t(I.actions.showForm(!1)),e.fnAddAccount(c.form.username))}}),Object(u.jsxs)("div",{className:"d-flex justify-content-end p-2",children:[Object(u.jsx)("button",{className:"btn-sm btn-danger m-1",onClick:function(){t(I.actions.showForm(!1))},children:"Cancel"}),Object(u.jsx)("button",{className:"btn-sm btn-success m-1",onClick:function(){t(I.actions.setForm("")),t(I.actions.showForm(!1)),e.fnAddAccount(c.form.username)},children:"Submit"})]})]})]})})]})}),T=c(26),R=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.accounts})),c=Object(i.c)((function(e){return e.ui})),r=Object(i.c)((function(e){return e.summary})),s=function(){var t=Object(x.a)(m.a.mark((function t(c){var n,r,s,a,i,o,d,u,j,b,h,p;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=0,r=0,s=0,a=0,i=0,o=0,d=0,u=0,j=0,b=0,h=0,p="",!1,t.next=15,N.Splinterlands.getPlayerBalance(c).then((function(e){e.length>0?(!0,e.forEach((function(e){"DEC"===e.token?n=e.balance:"SPS"===e.token?r=e.balance:"SPSP"===e.token?s=e.balance:"ECR"===e.token?d=e.balance:"QUEST"===e.token?a=e.balance:"GOLD"===e.token?i=e.balance:"LEGENDARY"===e.token?o=e.balance:"UNTAMED"===e.token?u=e.balance:"CREDITS"===e.token&&(j=e.balance)}))):k.b.error("User does not exist.")})).catch((function(t){return console.error(t),k.b.error("Unable to get player balance.",{toastId:"BALANCE"}),e(l.actions.isLoading(!1)),null}));case 15:return t.next=17,N.Splinterlands.getPlayerSettings(c).then((function(e){h=e.collection_power,b=e.rating;var t=[{id:0,name:"Novice"},{id:1,name:"Bronze III"},{id:2,name:"Bronze II"},{id:3,name:"Bronze I"},{id:4,name:"Silver III"},{id:5,name:"Silver II"},{id:6,name:"Silver I"},{id:7,name:"Gold III"},{id:8,name:"Gold II"},{id:9,name:"Gold I"},{id:10,name:"Diamond III"},{id:11,name:"Diamond II"},{id:12,name:"Diamond I"},{id:13,name:"Champion III"},{id:14,name:"Champion II"},{id:15,name:"Champion I"}].filter((function(t){return t.id===e.league}));p=t[0].name})).catch((function(t){console.error(t),k.b.error("Unable to get player details.",{toastId:"DETAILS"}),e(l.actions.isLoading(!1))}));case 17:return t.abrupt("return",{username:c,credits:j,dec:n,sps:r,s_sps:s,untamed:u,ecr:d/100,quest_potion:a,gold_potion:i,legend_potion:o,power:h,rating:b,rank:p});case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a=function(){var t=Object(x.a)(m.a.mark((function t(c){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(l.actions.isLoading(!0)),t.next=3,s(c);case 3:return(n=t.sent)&&(e(L.actions.addAccount(n)),(r=JSON.parse(localStorage.getItem("accounts"))).push(n.username),localStorage.setItem("accounts",JSON.stringify(r))),e(l.actions.isLoading(!1)),t.abrupt("return");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var e=Object(x.a)(m.a.mark((function e(t){var c,n,r,a,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=[],n=Object(E.a)(t),e.prev=2,n.s();case 4:if((r=n.n()).done){e.next=12;break}return a=r.value,e.next=8,s(a);case 8:i=e.sent,c.push(i);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:return e.abrupt("return",c);case 21:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var t=Object(x.a)(m.a.mark((function t(){var c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=JSON.parse(localStorage.getItem("accounts")),e(l.actions.isLoading(!0)),t.next=4,o(c).then((function(t){e(L.actions.setAccounts(t))}));case 4:e(l.actions.isLoading(!1));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){(function(){var t=Object(x.a)(m.a.mark((function t(){var n,s,a,i,d,u;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=JSON.parse(localStorage.getItem("settings")))?(e(l.actions.setCurrency(n.currency)),e(l.actions.setTheme(n.darkTheme))):(n={currency:c.currency,darkTheme:c.darkTheme},localStorage.setItem("settings",JSON.stringify(n))),t.next=4,C("USD");case 4:return s=t.sent,t.next=7,w("USD");case 7:return a=t.sent,t.next=10,C(n.currency);case 10:return i=t.sent,t.next=13,w(n.currency);case 13:if(d=t.sent,e(I.actions.setTotal(Object(p.a)(Object(p.a)({},r.total),{},{dec_price:s,sps_price:a,con_dec_price:i,con_sps_price:d}))),!(u=JSON.parse(localStorage.getItem("accounts")))){t.next=23;break}return e(l.actions.isLoading(!0)),t.next=20,o(u).then((function(t){e(L.actions.setAccounts(t))}));case 20:e(l.actions.isLoading(!1)),t.next=24;break;case 23:localStorage.setItem("accounts","[]");case 24:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()(),setInterval(Object(x.a)(m.a.mark((function t(){var c,n,s,a,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=JSON.parse(localStorage.getItem("settings")),t.next=3,C("USD");case 3:return n=t.sent,t.next=6,w("USD");case 6:return s=t.sent,t.next=9,C(c.currency);case 9:return a=t.sent,t.next=12,w(c.currency);case 12:i=t.sent,e(I.actions.setTotal(Object(p.a)(Object(p.a)({},r.total),{},{dec_price:n,sps_price:s,con_dec_price:a,con_sps_price:i})));case 14:case"end":return t.stop()}}),t)}))),2e4)}),[]);var j=0,b=0,h=0,O=0,f=0,g=0,v=0;return t.forEach((function(e){j++,b+=e.dec,h+=e.sps,O+=e.s_sps})),f=b*r.total.con_dec_price,g=h*r.total.con_sps_price,v=O*r.total.con_sps_price,Object(u.jsxs)("div",{id:"summary",className:"p-3 container container-lg",children:[r.form.show?Object(u.jsx)(P,{fnAddAccount:a}):"",Object(u.jsxs)("div",{class:"alert alert-success",role:"alert",children:[Object(u.jsx)("h4",{class:"alert-heading",children:"Support us"}),Object(u.jsx)("p",{class:"mb-0",style:{fontSize:"1.2rem"},children:"If you find this tool useful, We are accepting donations to further enhance this project. Any amount will do :)"}),Object(u.jsxs)("div",{class:"row",style:{fontSize:"1rem"},children:[Object(u.jsx)("label",{class:"col-md-3",children:"METAMASK ADDRESS :"}),Object(u.jsx)("div",{class:"col-md-9",children:Object(u.jsxs)("p",{style:{color:"#fff",marginRight:"2px",fontWeight:"bolder",overflowWrap:"break-word"},children:["0xEe3e386D43d0D44a7466da5aD7C8e713069ADa1C ",Object(u.jsx)(T.a,{class:"icon",size:18,onClick:function(e){k.b.success("Copied to Clipboard!"),navigator.clipboard.writeText("0xEe3e386D43d0D44a7466da5aD7C8e713069ADa1C")}})]})})]}),Object(u.jsxs)("div",{class:"row",style:{fontSize:"1rem"},children:[Object(u.jsx)("label",{class:"col-md-3",children:"SPLINTERLANDS USERNAME :"}),Object(u.jsxs)("div",{class:"col-md-9",children:[Object(u.jsx)("label",{style:{color:"#fff",marginRight:"2px",fontWeight:"bolder"},children:"toshihikosong"}),Object(u.jsx)(T.a,{class:"icon",size:18,onClick:function(e){k.b.success("Copied to Clipboard!"),navigator.clipboard.writeText("toshihikosong")}})]})]})]}),Object(u.jsxs)("div",{id:"tiles-container",className:"row",children:[Object(u.jsx)("div",{className:"tile col-md-4 p-2",children:Object(u.jsx)(_,{className:"text-white",header:"TOTAL ACCOUNT",headerclass:"text-center",style:{backgroundColor:"#444"},children:Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)("span",{className:"total_account",children:j})})})}),Object(u.jsx)("div",{className:"tile col-md-4 p-2",children:Object(u.jsx)(_,{className:"text-white",header:"TOTAL IN-GAME DEC",headerclass:"text-center",style:{backgroundColor:"#444"},children:Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("span",{children:b.toLocaleString()}),Object(u.jsx)("div",{className:"price_conv",children:Object(u.jsx)("span",{children:"(".concat(c.currency," ").concat(f.toLocaleString(),")")})})]})})}),Object(u.jsx)("div",{className:"tile col-md-4 p-2",children:Object(u.jsx)(_,{className:"text-white",header:"TOTAL SPS",headerclass:"text-center",style:{backgroundColor:"#444"},children:Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("span",{children:h.toLocaleString()}),Object(u.jsx)("div",{className:"price_conv",children:Object(u.jsx)("span",{children:"(".concat(c.currency," ").concat(g.toLocaleString(),")")})})]})})}),Object(u.jsx)("div",{className:"tile col-md-4 p-2",children:Object(u.jsx)(_,{className:"text-white",header:"TOTAL STAKED SPS",headerclass:"text-center",style:{backgroundColor:"#444"},children:Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("span",{children:O.toLocaleString()}),Object(u.jsx)("div",{className:"price_conv",children:Object(u.jsx)("span",{children:"(".concat(c.currency," ").concat(v.toLocaleString(),")")})})]})})}),Object(u.jsx)("div",{className:"tile col-md-4 p-2",children:Object(u.jsx)(_,{className:"text-white",header:"CURRENT DEC PRICE",headerclass:"text-center",style:{backgroundColor:"#444"},children:Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("span",{children:"$".concat(r.total.dec_price)}),Object(u.jsx)("div",{className:"price_conv",children:Object(u.jsx)("span",{children:"(".concat(c.currency," ").concat(r.total.con_dec_price,")")})})]})})}),Object(u.jsx)("div",{className:"tile col-md-4 p-2",children:Object(u.jsx)(_,{className:"text-white",header:"CURRENT SPS PRICE",headerclass:"text-center",style:{backgroundColor:"#444"},children:Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("span",{children:"$".concat(r.total.sps_price)}),Object(u.jsx)("div",{className:"price_conv",children:Object(u.jsx)("span",{children:"(".concat(c.currency," ").concat(r.total.con_sps_price,")")})})]})})})]}),Object(u.jsx)("div",{className:"row p-2",children:Object(u.jsx)(A,{accounts:t,fnRefresh:d})})]})},U=(c(76),function(){return Object(u.jsx)("div",{className:"d-flex justify-content-center align-items-center w-100 h-100",id:"card-list",children:Object(u.jsx)("div",{id:"main",children:Object(u.jsx)("h5",{children:"Page is still under development..."})})})}),F=(c(77),function(){return Object(u.jsx)("div",{className:"d-flex justify-content-center align-items-center w-100 h-100",id:"rented-cards",children:Object(u.jsx)("div",{id:"main",children:Object(u.jsx)("h5",{children:"Page is still under development..."})})})});c(78);var B=function(){var e=Object(i.c)((function(e){return e.ui}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(k.a,{autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}),e.isLoading&&Object(u.jsx)(b,{}),e.isShowSettings&&Object(u.jsx)(D,{}),Object(u.jsx)(j,{}),Object(u.jsxs)(d.d,{children:[Object(u.jsx)(d.b,{exact:!0,path:"/dashboard",children:Object(u.jsx)(R,{})}),Object(u.jsx)(d.b,{exact:!0,path:"/cards",children:Object(u.jsx)(U,{})}),Object(u.jsx)(d.b,{exact:!0,path:"/rented-cards",children:Object(u.jsx)(F,{})}),Object(u.jsx)(d.b,{exact:!0,path:"/pagenotfound",children:"Page not found."}),Object(u.jsx)(d.b,{exact:!0,path:"/",children:Object(u.jsx)(d.a,{to:"/dashboard"})}),Object(u.jsx)(d.b,{path:"",children:Object(u.jsx)(d.a,{to:"/pagenotfound"})})]})]})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,80)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))},G=Object(o.a)({reducer:{accounts:L.reducer,ui:l.reducer,summary:I.reducer}}),H=c(20);a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(i.a,{store:G,children:Object(u.jsx)(H.a,{children:Object(u.jsx)(B,{})})})}),document.getElementById("root")),J()}},[[79,1,2]]]);
//# sourceMappingURL=main.4c357f13.chunk.js.map