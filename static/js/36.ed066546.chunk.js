"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[36],{4672:function(n,t,e){e.d(t,{O:function(){return d}});var r,a,c,o=e(168),i=e(6444),u=i.ZP.div(r||(r=(0,o.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n"]))),s=i.ZP.div(a||(a=(0,o.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),p=i.ZP.h3(c||(c=(0,o.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),f=e(1087),l=e(184),d=function(n){var t=n.movies,e=n.location;return(0,l.jsx)("main",{children:(0,l.jsx)(u,{children:t.map((function(n){return(0,l.jsx)(s,{children:(0,l.jsxs)(f.rU,{to:"movies/".concat(n.id),state:{from:e},children:[(0,l.jsx)("img",{src:n.poster_path?"https://image.tmdb.org/t/p/w300"+n.poster_path:"https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg",alt:n.title,loading:"lazy"}),(0,l.jsx)(p,{children:n.title})]})},n.id)}))})})}},8910:function(n,t,e){e.d(t,{NV:function(){return x},XT:function(){return p},fh:function(){return f},q5:function(){return d},yo:function(){return l}});var r=e(5861),a=e(7757),c=e.n(a),o=e(3263),i="https://api.themoviedb.org/3",u="9305dc9ad534282c491ff880c3535cd7",s="movie",p=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(i,"/trending/").concat(s,"/").concat("day","?api_key=").concat(u),n.next=3,o.Z.get(t);case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"/").concat(s,"/").concat(t,"?api_key=").concat(u,"&language=en-US"),n.next=3,o.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"/").concat(s,"/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"),n.next=3,o.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"/").concat(s,"/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"),n.next=3,o.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"/search/").concat(s,"?api_key=").concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"),n.next=3,o.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4036:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});var r,a,c,o,i=e(5861),u=e(9439),s=e(7757),p=e.n(s),f=e(8910),l=e(9014),d=e(168),x=e(6444),h=e(9128),m=x.ZP.form(r||(r=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  /* position: relative; */\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),v=x.ZP.input(a||(a=(0,d.Z)(["\n  width: 350px;\n  margin-right: 10px;\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),g=(0,x.ZP)(h.G4C)(c||(c=(0,d.Z)(["\n  width: 30px;\n  height: 30px;\n  /* position: absolute; */\n"]))),Z=x.ZP.button(o||(o=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),w=e(184),b=function(n){var t=n.onSubmit,e=n.moviesName;return(0,w.jsxs)(m,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget.moviesName.value.toLowerCase().trim();console.log(e),""!==e?(t(e),n.currentTarget.reset()):l.ZP.error("Enter text in the search box! \ud83d\udc40")},children:[(0,w.jsx)(v,{type:"text",name:"moviesName",defaultValue:e,placeholder:"Search movies"}),(0,w.jsx)(Z,{type:"submit",children:(0,w.jsx)(g,{})}),(0,w.jsx)(l.x7,{})]})},y=e(2791),k=e(1087),j=e(7689),_=e(3521),S=e(4672),P=function(){var n,t=(0,y.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1],c=(0,y.useState)(!1),o=(0,u.Z)(c,2),s=o[0],d=o[1],x=(0,j.TH)(),h=(0,k.lr)(),m=(0,u.Z)(h,2),v=m[0],g=m[1],Z=null!==(n=v.get("query"))&&void 0!==n?n:"";(0,y.useEffect)((function(){function n(){return(n=(0,i.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.prev=1,n.next=4,(0,f.NV)(Z);case 4:t=n.sent,a(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),l.ZP.error("Something went wrong, please try again! \ud83e\udd37\u200d\u2642\ufe0f\ud83e\udd37\u200d\u2640\ufe0f\ud83e\udd37\u200d\u2642\ufe0f");case 11:return n.prev=11,d(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})))).apply(this,arguments)}""!==Z&&function(){n.apply(this,arguments)}()}),[Z]);return(0,w.jsxs)("main",{children:[(0,w.jsx)(b,{onSubmit:function(n){g(""!==n?{query:n}:{})},moviesName:Z}),s&&(0,w.jsx)(_.a,{}),(0,w.jsx)(S.O,{movies:r,location:x}),(0,w.jsx)(l.x7,{})]})}}}]);
//# sourceMappingURL=36.ed066546.chunk.js.map