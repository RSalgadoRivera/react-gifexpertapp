(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),u=(a(11),a(1)),l=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],l=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>0&&(t([i]),l(""))}},r.a.createElement("input",{placeholder:"Gif",autoFocus:!0,type:"text",value:i,onChange:function(e){l(e.target.value)}})))},o=a(2),m=a.n(o),s=a(5),f=function(){var e=Object(s.a)(m.a.mark((function e(t){var a,n,r,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=V7rUO1ibEfJrLl8Rovizoe2CJU7aZTVs"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__fadeInUpBig"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null,t))},d=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){f(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t),i&&r.a.createElement("p",{className:"card animate__animated animate__flash"},"Loading"),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(p,Object.assign({key:e.id},e))}))))},g=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Busca un Gif"),r.a.createElement("hr",null),r.a.createElement(l,{setCategories:c}),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(d,{key:e,category:e})}))))};i.a.render(r.a.createElement(g,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.3e821502.chunk.js.map