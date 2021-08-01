(this.webpackJsonpfootball_statistics_test=this.webpackJsonpfootball_statistics_test||[]).push([[0],{103:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){},127:function(e,t,c){},128:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(13),s=c.n(n),r=c(20),i=c(14),o=c(31),l=c(10),j="https://api.football-data.org/v2/competitions/",d="https://api.football-data.org/v2/teams/",b=c(42),u=c(2),h=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi biArrowUpSquare",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"})})},m=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi biArrowDownSquare",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"})})},O=(c(53),function(e){var t=e.leaguesInfo,c=e.getLeaguesInfo,n=Object(a.useState)(!0),s=Object(l.a)(n,2),o=s[0],j=s[1],d=Object(i.g)(),O=(d.path,d.url,function(){return o?Object(u.jsx)(m,{}):Object(u.jsx)(h,{})}),x=function(e,a){console.log(e);var n,s=t.concat();console.log(s),n=a?o?s.sort((function(t,c){return t[e]||(t[e]=Object(b.a)({},a,""),console.log(t[e]),console.log(t)),c[e]||(c[e]=Object(b.a)({},a,"")),t[e][a]>c[e][a]?1:-1})):s.sort((function(t,c){return t[e][a]>c[e][a]?-1:1})):o?s.sort((function(t,c){return t[e]>c[e]?1:-1})):s.sort((function(t,c){return t[e]>c[e]?-1:1})),c(n),j(!o)};return Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col"}),Object(u.jsxs)("th",{scope:"col",onClick:function(){return x("name")},children:["Competition ","name"===x?Object(u.jsx)(O,{}):null]}),Object(u.jsxs)("th",{scope:"col",onClick:function(){return x("area","name")},children:["Area ","name"===x?Object(u.jsx)(O,{}):null]}),Object(u.jsx)("th",{scope:"col",children:"Plan"}),Object(u.jsxs)("th",{scope:"col",onClick:function(){return x("currentSeason","startDate")},children:["Start ","startDate"===x?Object(u.jsx)(O,{}):null]}),Object(u.jsxs)("th",{scope:"col",onClick:function(){return x("currentSeason","endDate")},children:["End ","endDate"===x?Object(u.jsx)(O,{}):null]})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){var t,c;return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{style:{height:25,width:"auto"},src:null==e.emblemUrl?"./img/logo_liga.png":e.emblemUrl,alt:"emblem"})}),Object(u.jsxs)("td",{children:[" ",Object(u.jsx)(r.b,{to:"/Leagues/".concat(e.id),children:e.name})]}),Object(u.jsx)("td",{children:e.area.name}),Object(u.jsx)("td",{children:e.plan&&e.plan.toLowerCase()}),Object(u.jsx)("td",{children:(null===(t=e.currentSeason)||void 0===t?void 0:t.startDate)&&new Date(e.currentSeason.startDate).toLocaleDateString()}),Object(u.jsx)("td",{children:(null===(c=e.currentSeason)||void 0===c?void 0:c.endDate)&&new Date(e.currentSeason.endDate).toLocaleDateString()})]},e.id)}))})]})}),x=(c(103),function(){return Object(u.jsx)("div",{className:"wrap",children:Object(u.jsxs)("div",{className:"lds-spinner",children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})})}),v={method:"GET",headers:{"X-Auth-Token":"09c745fb9573438daaba0e0d971e0a04"}},f=function(e){var t=Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&");return""!==t?"?".concat(t):""},p=c(70),g=c.n(p),w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=Object(a.useState)(null),n=Object(l.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)(!0),o=Object(l.a)(i,2),j=o[0],d=o[1],b=Object(a.useState)(!1),u=Object(l.a)(b,2),h=u[0],m=u[1],O=f(t);return Object(a.useEffect)((function(){setTimeout((function(){g.a.get("".concat(e).concat(O),v).then((function(e){var t=e.data;r(t),d(!1)})).catch((function(e){m(!0),d(!1)}))}),2e3)}),[e]),[{data:s,setData:r,isLoading:j,setIsLoading:d,isError:h,setIsError:m}]},S=c(154),N=c(157),L=c(159),D=c(17),C=c(160),y=c(75),T=Object(S.a)((function(e){return{datePickerConatiner:{display:"flex",alignItems:"flex-end",flexdirection:"row",justifyContent:"center","& > *":{margin:e.spacing(.5)}},datePickers:{display:"flex",justifyContent:"space-evenly",maxWidth:"600px"},dateBtn:{fontWeight:"bold",color:"#024820",backgroundColor:" #9ad3b4",border:"2px solid #9ad3b4",borderRadius:"8px"}}})),_=function(e){var t=e.onFilterSubmit,c=e.dateFrom,n=e.dateTo,s=T(),r=Object(a.useState)({dateFrom:c||new Date("2007-01-01T00:00:00Z"),dateTo:n||new Date("2022-01-01T00:00:00Z")}),i=Object(l.a)(r,2),j=i[0],d=i[1];return Object(u.jsx)(D.a,{utils:y.a,children:Object(u.jsxs)(N.a,{container:!0,spacing:1,className:s.datePickerConatiner,children:[Object(u.jsxs)(N.a,{container:!0,className:s.datePickers,children:[Object(u.jsx)(C.a,{disableToolbar:!0,variant:"inline",format:"dd.MM.yyyy",label:"from",margin:"normal",value:j.dateFrom,onChange:function(e){d(Object(o.a)(Object(o.a)({},j),{},{dateFrom:e}))}}),Object(u.jsx)(C.a,{disableToolbar:!0,variant:"inline",label:"to",margin:"normal",format:"dd.MM.yyyy",value:j.dateTo,onChange:function(e){d(Object(o.a)(Object(o.a)({},j),{},{dateTo:e}))}})]}),Object(u.jsx)(N.a,{children:Object(u.jsx)(L.a,{className:s.dateBtn,variant:"contained",margin:"normal",disableElevation:!0,onClick:function(){t(function(e){var t={};for(var c in e)t[c]=e[c].toISOString().substr(0,10);return t}(j))},children:"apply"})})]})})},k=c(162),z=Object(S.a)({container:{position:"fixed",right:"50px",top:"5px",zIndex:1,display:"flex",justifyContent:"center",alignItems:"center"},searchbar:{width:"100%",backgroundColor:" #fff",margin:"3px 0",padding:"2px 8px",border:"1px solid #fff",borderRadius:"8px 0 0 8px"},searchButton:{display:"flex",margin:"3px 0",fontWeight:"bold",color:"#024820",backgroundColor:" #9ad3b4",border:"1px solid #9ad3b4",borderRadius:"0 8px 8px 0"}}),E=function(e){var t=e.onFilterSubmit,c=z(),n=Object(a.useState)(""),s=Object(l.a)(n,2),r=s[0],i=s[1];return Object(u.jsxs)(N.a,{className:c.container,children:[Object(u.jsx)(N.a,{item:!0,xs:12,md:9,lg:10,children:Object(u.jsx)(k.a,{className:c.searchbar,placeholder:"Search\u2026",value:r,onChange:function(e){return i(e.target.value)}})}),Object(u.jsx)(N.a,{item:!0,xs:3,md:3,lg:2,children:Object(u.jsx)(L.a,{className:c.searchButton,onClick:function(){return t({search:r})},variant:"contained",children:"Search"})})]})},M=c(50),I=function(){var e=Object(i.f)(),t=w(j),c=Object(l.a)(t,1)[0],n=c.data,s=c.isLoading,r=c.isError,d=Object(a.useState)([]),b=Object(l.a)(d,2),h=b[0],m=b[1];Object(a.useEffect)((function(){n&&(m(n.competitions),v())}),[n]),console.log(h);var v=function(){var t=M.parse(e.location.search.substr(1)),c=n.competitions;if(void 0!==t.search){var a=String(t.search).toLowerCase();c=c.filter((function(e){var t,c;return e.name.toLowerCase().includes(a)||e.area.name.toLowerCase().includes(a)||e.plan&&e.plan.toLowerCase().includes(a)||(null===(t=e.currentSeason)||void 0===t?void 0:t.startDate)&&e.currentSeason.startDate.toLowerCase().includes(a)||(null===(c=e.currentSeason)||void 0===c?void 0:c.endDate)&&e.currentSeason.endDate.toLowerCase().includes(a)}))}void 0!==t.dateFrom&&void 0!==t.dateTo&&(c=c.filter((function(e){var c,a;return new Date(null===(c=e.currentSeason)||void 0===c?void 0:c.startDate).getTime()>=new Date(t.dateFrom).getTime()&&new Date(null===(a=e.currentSeason)||void 0===a?void 0:a.endDate).getTime()<=new Date(t.dateTo).getTime()}))),m(c)},p=function(t){var c=Object(o.a)(Object(o.a)({},M.parse(e.location.search.substr(1))),t);e.push({search:f(c)}),v()};return Object(u.jsxs)("div",{className:"contentBox",children:[Object(u.jsx)(_,{onFilterSubmit:p}),Object(u.jsx)(E,{onFilterSubmit:p}),s?Object(u.jsx)(x,{}):r?Object(u.jsx)("span",{children:"\u041e\u0448\u0438\u0431\u043a\u0430"}):Object(u.jsx)(O,{leaguesInfo:h,getLeaguesInfo:m}),";"]})},A=(c(69),function(e){var t=e.teamsInfo;return Object(u.jsx)("div",{className:"contentCard",children:t.map((function(e){return Object(u.jsx)("div",{children:Object(u.jsx)(r.b,{to:"/Teams/".concat(e.id),children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{className:"card_img",src:e.crestUrl,alt:e.name}),Object(u.jsxs)("div",{className:"card_content",children:[Object(u.jsx)("div",{className:"name",children:e.name}),Object(u.jsx)("div",{className:"name_small",children:e.venue})]})]})})},e.id)}))})}),B=function(){Object(i.f)();var e=w(d),t=Object(l.a)(e,1)[0],c=t.data,n=t.isLoading,s=t.isError,r=Object(a.useState)([]),o=Object(l.a)(r,2),j=o[0],b=o[1];return Object(a.useEffect)((function(){c&&b(c.teams)}),[c]),Object(u.jsx)("div",{className:"contentBox",children:n?Object(u.jsx)(x,{}):s?Object(u.jsx)("span",{children:"\u041e\u0448\u0438\u0431\u043a\u0430"}):Object(u.jsx)(A,{teamsInfo:j})})},F=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-people",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"})})},P=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"20",fill:"currentColor",className:"bi bi-trophy",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"})})},H=(c(124),function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0];t[1];return Object(u.jsx)("nav",{className:"nav",children:Object(u.jsx)("nav",{className:"menu",children:Object(u.jsxs)("ul",{className:c?"nav_menu_active":"nav_menu",children:[Object(u.jsx)("li",{className:"nav_link",children:Object(u.jsxs)(r.b,{to:"/",className:"link",children:[Object(u.jsx)(P,{}),Object(u.jsx)("span",{className:"nav_text",children:"Leagues"})]})}),Object(u.jsx)("li",{className:"nav_link",children:Object(u.jsxs)(r.b,{to:"/Teams",className:"link",children:[Object(u.jsx)(F,{}),Object(u.jsx)("span",{className:"nav_text",children:"Teams"})]})})]})})})}),V=(c(125),function(e){return Object(u.jsx)("h1",{className:"title",children:e.children})}),R=function(e){Object(i.f)();var t,c=e.match.params.id,n=w("https://api.football-data.org/v2/competitions/".concat(c,"/matches")),s=Object(l.a)(n,1)[0],r=s.data,o=s.isLoading,j=s.isError,d=Object(a.useState)([]),b=Object(l.a)(d,2),h=b[0],m=b[1],O=(null===(t=h.competition)||void 0===t?void 0:t.name)&&h.competition.name,v=(null===h||void 0===h?void 0:h.matches)&&h.matches;return Object(a.useEffect)((function(){r&&m(r)}),[r]),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsxs)(V,{children:["Leagues: ",O]}),o?Object(u.jsx)(x,{}):j?Object(u.jsx)("div",{children:'Sorry, but in the free API currently has no data for this competition. Check: "Serie A", "Premier League", "La Liga", "Bundesliga", "Ligue 1", "Eredivisie"...You can use the search...'}):Object(u.jsx)(a.Fragment,{children:Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Data"}),Object(u.jsx)("th",{scope:"col",children:"Status"}),Object(u.jsx)("th",{scope:"col",children:"Team"}),Object(u.jsx)("th",{scope:"col",children:"md"}),Object(u.jsx)("th",{scope:"col",children:"Score"})]})}),Object(u.jsx)("tbody",{children:v.map((function(e){var t,c,a;return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.utcDate&&new Date(e.utcDate).toLocaleString()}),Object(u.jsx)("td",{children:e.status}),Object(u.jsxs)("td",{children:[Object(u.jsx)("div",{children:(null===(t=e.homeTeam)||void 0===t?void 0:t.name)&&e.homeTeam.name}),Object(u.jsx)("p",{children:" vs "}),Object(u.jsx)("div",{children:(null===(c=e.awayTeam)||void 0===c?void 0:c.name)&&e.awayTeam.name})]}),Object(u.jsx)("td",{children:e.matchday}),Object(u.jsx)("td",{children:(null===(a=e.score)||void 0===a?void 0:a.winner)&&e.score.winner})]},e.id)}))})]})})]})},U=function(e){var t=e.setScheduleParams,c=e.scheduleParams,n=e.id,s=w("https://api.football-data.org/v2/teams/".concat(n,"/matches")),r=Object(l.a)(s,1)[0],o=r.data,j=r.isLoading,d=r.isError;Object(i.f)();return Object(a.useEffect)((function(){o&&t(o.matches)}),[o]),Object(u.jsx)("div",{children:j?Object(u.jsx)(x,{}):d?Object(u.jsx)("span",{children:"\u041e\u0448\u0438\u0431\u043a\u0430"}):Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Data"}),Object(u.jsx)("th",{scope:"col",children:"Status"}),Object(u.jsx)("th",{scope:"col",children:"Team"}),Object(u.jsx)("th",{scope:"col",children:"md"}),Object(u.jsx)("th",{scope:"col",children:"Score"})]})}),Object(u.jsx)("tbody",{children:c.map((function(e){var t,c,a;return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.utcDate&&new Date(e.utcDate).toLocaleString()}),Object(u.jsx)("td",{className:"name_small",children:e.status}),Object(u.jsx)("td",{children:Object(u.jsxs)("h4",{children:[(null===(t=e.homeTeam)||void 0===t?void 0:t.name)&&e.homeTeam.name,Object(u.jsx)("span",{className:"name_small",children:" vs "}),(null===(c=e.awayTeam)||void 0===c?void 0:c.name)&&e.awayTeam.name]})}),Object(u.jsx)("td",{children:e.matchday}),Object(u.jsx)("td",{children:(null===(a=e.score)||void 0===a?void 0:a.winner)&&e.score.winner})]},e.id)}))})]})})},W=function(e){var t=e.match.params.id,c=w("https://api.football-data.org/v2/teams/".concat(t)),n=Object(l.a)(c,1)[0],s=n.data,r=n.isLoading,i=n.isError,o=Object(a.useState)([]),j=Object(l.a)(o,2),d=j[0],b=j[1];return Object(a.useEffect)((function(){s&&b(s)}),[s]),Object(u.jsx)("div",{className:"content",children:r?Object(u.jsx)(x,{}):i?Object(u.jsx)("span",{children:"\u041e\u0448\u0438\u0431\u043a\u0430"}):Object(u.jsxs)(a.Fragment,{children:[Object(u.jsxs)("div",{className:"team_card",children:[Object(u.jsx)("img",{className:"card_img",src:null===s||void 0===s?void 0:s.crestUrl,alt:null===s||void 0===s?void 0:s.name}),Object(u.jsxs)("div",{className:"team_card_content",children:[Object(u.jsx)("h3",{children:null===s||void 0===s?void 0:s.name}),Object(u.jsx)("div",{className:"team_name_small",children:null===s||void 0===s?void 0:s.venue}),Object(u.jsx)("a",{className:"team_name_small",href:null===s||void 0===s?void 0:s.website,target:"blank",children:null===s||void 0===s?void 0:s.website})]})]}),Object(u.jsx)(U,{id:t,scheduleParams:d,setScheduleParams:b})]})})},q=(c(126),function(){return Object(u.jsx)("div",{className:"wrap",children:Object(u.jsxs)(r.a,{children:[Object(u.jsx)("div",{className:"header",children:Object(u.jsx)(H,{})}),Object(u.jsx)("div",{className:"content",children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"/",exact:!0,component:I}),Object(u.jsx)(i.a,{path:"/Leagues/:id",component:R}),Object(u.jsx)(i.a,{path:"/Teams",exact:!0,component:B}),Object(u.jsx)(i.a,{path:"/Teams/:id",component:W})]})})]})})});c(127);s.a.render(Object(u.jsx)(q,{}),document.getElementById("root"))},53:function(e,t,c){},69:function(e,t,c){}},[[128,1,2]]]);
//# sourceMappingURL=main.cd97e398.chunk.js.map