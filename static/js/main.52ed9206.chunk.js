(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return o}));var r,c=n(12),a={data:null};!function(e){e.SET_PERSON="PERSON-CONTAINER/SET-PERSON",e.REQUEST_PERSON="/CHARACTER-CONTAINER/REQUEST_PERSON"}(r||(r={}));var s=function(e){return{type:r.SET_PERSON,payload:e}},o=function(e){return{type:r.REQUEST_PERSON,payload:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SET_PERSON:return Object(c.a)(Object(c.a)({},e),{},{data:t.payload})}return e}},18:function(e,t,n){e.exports={body:"charListsStyle_body__1bRyu",wrapperItem:"charListsStyle_wrapperItem__2iWfQ",items:"charListsStyle_items__3CUUn",imagesBlock:"charListsStyle_imagesBlock__2_XOs",headlineCard:"charListsStyle_headlineCard__1-7h2",alive:"charListsStyle_alive__2sJLn",dead:"charListsStyle_dead__3JpAc"}},28:function(e,t,n){e.exports={body:"appStyles_body__k8keh",root:"appStyles_root__3YxLz"}},36:function(e,t,n){"use strict";var r=n(3),c=n(38),a=n.n(c);t.a=function(e){var t=e.title;return Object(r.jsx)("div",{className:a.a.body,children:Object(r.jsx)("h1",{children:t})})}},38:function(e,t,n){e.exports={body:"haderStyle_body__1CCKz"}},53:function(e,t,n){"use strict";n.r(t);var r,c=n(3),a=n(22),s=n.n(a),o=n(1),i=n.n(o),u=n(40),b=n(23),j=n(16),d=n(34),l=n(12),p={data:[],isFetching:!1};!function(e){e.SET_CHARS="CHARACTER-COMPONENT/SET-CHARS",e.IS_FETCHING="IN_GLOBAL",e.NEXT_PAGE="CHARACTER-COMPONENT/NEXT_PAGE",e.REQUEST_CHARS="/CHARACTER-CONTAINER/REQUEST_CHARS",e.REQUEST_CHARS_NEXT_PAGE="CHARACTER_CONTAINER/REQUEST_CHARS_NEXT_PAGE"}(r||(r={}));var O,h=function(e){return{type:r.IS_FETCHING,payload:e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SET_CHARS:return Object(l.a)(Object(l.a)({},e),{},{data:t.payload});case r.REQUEST_CHARS_NEXT_PAGE:return Object(l.a)(Object(l.a)({},e),{},{data:[].concat(Object(d.a)(e.data),Object(d.a)(t.payload))});case r.IS_FETCHING:return Object(l.a)(Object(l.a)({},e),{},{isFetching:t.payload})}return e},x=n(19),f=n(15),_=n(18),v=n.n(_),S=function(e){var t=e.chars,n=Object(j.b)();return Object(c.jsx)("div",{className:v.a.items,children:Object(c.jsxs)("div",{className:v.a.wrapperItem,children:[Object(c.jsx)("img",{src:t.image,alt:"there was images ".concat(t.name)}),Object(c.jsx)(x.b,{to:"/person/".concat(t.id),children:Object(c.jsx)("h1",{onClick:function(){n(Object(f.d)(t.id))},children:t.name})}),Object(c.jsxs)("h2",{children:[t.status," - ",t.species," "]}),Object(c.jsx)("h2",{className:v.a.headlineCard,children:" Last known location: "}),Object(c.jsx)("h2",{children:t.location.name})]})})},y=n(36),m=Object(o.memo)((function(e){Object(b.a)(e);var t=Object(j.b)(),n=Object(j.c)((function(e){return e.charList.data})),a=Object(j.c)((function(e){return e.charList.isFetching})),s=Object(o.useState)(2),i=Object(u.a)(s,2),d=i[0],l=i[1];Object(o.useEffect)((function(){var e;t((e=1,{type:r.REQUEST_CHARS,payload:e}))}),[]);var p=function(e){var n;e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<100&&(!a&&t((n=d,{type:r.NEXT_PAGE,payload:n})),l((function(e){return e+1})))};return Object(o.useEffect)((function(){return document.addEventListener("scroll",p),function(){document.removeEventListener("scroll",p)}}),[p]),Object(c.jsxs)("div",{className:v.a.body,children:[Object(c.jsx)("div",{children:Object(c.jsx)(y.a,{title:"Rick and Morty Chars"})}),n.map((function(e,t){return Object(c.jsx)(S,{chars:e},t)}))]})})),R=n(6),T=n.p+"static/media/Ellipsis-4.2s-197px.ce28a318.svg",N=function(e){return Object(b.a)(e),Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:T,alt:""})})};!function(e){e.person="/person",e.personId="/person/:id",e.error="/404"}(O||(O={}));var C=n(28),A=n.n(C),w=Object(o.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,98))})),g=function(){return Object(c.jsxs)("div",{className:A.a.body,children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{className:A.a.root,children:Object(c.jsxs)(R.d,{children:[Object(c.jsx)(R.b,{className:A.a.body,exact:!0,path:O.person,render:function(){return Object(c.jsx)(m,{})}}),Object(c.jsx)(R.b,{exact:!0,path:O.personId,render:(e=w,function(t){return Object(c.jsx)(o.Suspense,{fallback:Object(c.jsx)("div",{children:Object(c.jsx)(N,{})}),children:Object(c.jsx)(e,Object(l.a)({},t))})})}),Object(c.jsx)(R.b,{path:"/",exact:!0,render:function(){return Object(c.jsx)(R.a,{to:O.person})}}),Object(c.jsx)(R.b,{path:O.error,render:function(){return Object(c.jsx)("h1",{children:"404: PAGE NOT FOUND"})}}),Object(c.jsx)(R.a,{from:"*",to:O.error})]})})]});var e},H=n(14),k=n(39),P=n(41),I=n(9),L=n.n(I),U=n(8),G=n(27),Q=L.a.mark(B),X=L.a.mark(J);function F(e){return M.apply(this,arguments)}function M(){return(M=Object(G.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rickandmortyapi.com/api/character?page=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){var t;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(U.b)(h(!0));case 3:return n.next=5,Object(U.a)(F,e.payload);case 5:return t=n.sent,n.next=8,Object(U.b)((c=t.results,{type:r.SET_CHARS,payload:c}));case 8:return n.next=10,Object(U.b)(h(!1));case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}var c}),Q,null,[[0,12]])}function J(e){var t;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(U.b)(h(!0));case 3:return n.next=5,Object(U.a)(F,e.payload);case 5:return t=n.sent,n.next=8,Object(U.b)((c=t.results,{type:r.REQUEST_CHARS_NEXT_PAGE,payload:c}));case 8:return n.next=10,Object(U.b)(h(!1));case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}var c}),X,null,[[0,12]])}var z=L.a.mark(K);function D(e){return W.apply(this,arguments)}function W(){return(W=Object(G.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rickandmortyapi.com/api/character/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e){var t;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(U.a)(D,e.payload);case 3:return t=n.sent,n.next=6,Object(U.b)(Object(f.c)(t));case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),z,null,[[0,8]])}var Y=L.a.mark(q);function q(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.c)(r.REQUEST_CHARS,B);case 2:return e.next=4,Object(U.c)(r.NEXT_PAGE,J);case 4:return e.next=6,Object(U.c)(f.a.REQUEST_PERSON,K);case 6:case"end":return e.stop()}}),Y)}var V=Object(H.combineReducers)({charList:E,person:f.b}),Z=Object(P.a)(),$=Object(H.createStore)(V,Object(k.composeWithDevTools)(Object(H.applyMiddleware)(Z)));Z.run(q),window.store=$,s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x.a,{basename:O.person,children:Object(c.jsx)(j.a,{store:$,children:Object(c.jsx)(g,{})})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.52ed9206.chunk.js.map