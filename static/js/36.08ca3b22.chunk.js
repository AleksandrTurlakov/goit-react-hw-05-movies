"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[36],{4672:function(n,t,e){e.d(t,{O:function(){return x}});var r,a,c,o=e(168),i=e(6444),u=i.ZP.div(r||(r=(0,o.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n  justify-content: space-evenly;\n"]))),s=i.ZP.div(a||(a=(0,o.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),p=i.ZP.h3(c||(c=(0,o.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),f=e(1087),d=e(7689),l=e(8910),h=e(184),x=function(n){var t=n.movies,e=(0,d.TH)();return(0,h.jsx)("main",{children:(0,h.jsx)(u,{children:t.map((function(n){return(0,h.jsx)(s,{children:(0,h.jsxs)(f.rU,{to:"/movies/".concat(n.id),state:{from:e},children:[(0,h.jsx)("img",{src:n.poster_path?l.Kv+n.poster_path:l.Q2,alt:n.title,loading:"lazy"}),(0,h.jsx)(p,{children:n.title})]})},n.id)}))})})}},8910:function(n,t,e){e.d(t,{Fd:function(){return u},Kv:function(){return i},NV:function(){return v},Q2:function(){return s},XT:function(){return l},fh:function(){return h},q5:function(){return m},yo:function(){return x}});var r=e(5861),a=e(7757),c=e.n(a),o=e(3263),i="https://image.tmdb.org/t/p/w300",u="https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png",s="https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg",p="https://api.themoviedb.org/3",f="9305dc9ad534282c491ff880c3535cd7",d="movie",l=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(p,"/trending/").concat(d,"/").concat("day","?api_key=").concat(f),n.next=3,o.Z.get(t);case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(p,"/").concat(d,"/").concat(t,"?api_key=").concat(f,"&language=en-US"),n.next=3,o.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(p,"/").concat(d,"/").concat(t,"/credits?api_key=").concat(f,"&language=en-US"),n.next=3,o.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(p,"/").concat(d,"/").concat(t,"/reviews?api_key=").concat(f,"&language=en-US&page=1"),n.next=3,o.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(p,"/search/").concat(d,"?api_key=").concat(f,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"),n.next=3,o.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4036:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r,a,c,o,i=e(5861),u=e(9439),s=e(7757),p=e.n(s),f=e(8910),d=e(9014),l=e(2791),h=e(168),x=e(6444),m=e(9128),v=x.ZP.form(r||(r=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  /* position: relative; */\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),g=x.ZP.input(a||(a=(0,h.Z)(["\n  width: 350px;\n  margin-right: 10px;\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),Z=(0,x.ZP)(m.G4C)(c||(c=(0,h.Z)(["\n  width: 30px;\n  height: 30px;\n  /* position: absolute; */\n"]))),w=x.ZP.button(o||(o=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),y=e(184),b=function(n){var t=n.onSubmit,e=(0,l.useState)(""),r=(0,u.Z)(e,2),a=r[0],c=r[1];return(0,y.jsxs)(v,{onSubmit:function(n){n.preventDefault(),""!==a.trim()?(t(a),c("")):d.ZP.error("Enter text in the search box! \ud83d\udc40")},children:[(0,y.jsx)(g,{type:"text",name:"moviesName",value:a,onChange:function(n){c(n.currentTarget.value.toLowerCase())},placeholder:"Search movies"}),(0,y.jsx)(w,{type:"submit",children:(0,y.jsx)(Z,{})}),(0,y.jsx)(d.x7,{})]})},k=e(1087),j=e(3521),S=e(4672),_=function(){var n,t=(0,l.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1],c=(0,l.useState)(!1),o=(0,u.Z)(c,2),s=o[0],h=o[1],x=(0,k.lr)(),m=(0,u.Z)(x,2),v=m[0],g=m[1],Z=null!==(n=v.get("query"))&&void 0!==n?n:"";(0,l.useEffect)((function(){function n(){return(n=(0,i.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return h(!0),n.prev=1,n.next=4,(0,f.NV)(Z);case 4:t=n.sent,a(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),d.ZP.error("Something went wrong, please try again! \ud83e\udd37\u200d\u2642\ufe0f\ud83e\udd37\u200d\u2640\ufe0f\ud83e\udd37\u200d\u2642\ufe0f");case 11:return n.prev=11,h(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})))).apply(this,arguments)}""!==Z&&function(){n.apply(this,arguments)}()}),[Z]);return(0,y.jsxs)("main",{children:[(0,y.jsx)(b,{onSubmit:function(n){g(""!==n?{query:n}:{})},moviesName:Z}),s&&(0,y.jsx)(j.a,{}),(0,y.jsx)(S.O,{movies:r})]})}}}]);
//# sourceMappingURL=36.08ca3b22.chunk.js.map