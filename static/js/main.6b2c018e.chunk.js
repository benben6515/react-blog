(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{43:function(e,n,t){"use strict";t.r(n);var r,o,a,c,i,s,l,u,d,b,h,p,j,f,x,m,g,O,v,w,y,k,C=t(2),S=t(1),_=t.n(S),E=t(30),P=t.n(E),N=t(11),z=t(3),T=Object(N.b)(r||(r=Object(C.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    font-family: '\u5fae\u8edf\u6b63\u9ed1\u9ad4','Roboto';\n    transition: color 2s;\n    transition: background-color .8s;\n  }\n\n  html, body, #root {\n    width: 100%;\n  }\n"]))),A=z.a.button(o||(o=Object(C.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: .2rem;\n  padding: 0 .5rem;\n  height: 2rem;\n  line-height: 2rem;\n  text-align: center;\n  cursor: pointer;\n  &:hover{\n    filter: brightness(",")\n  }\n"])),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.textColor}),(function(e){return e.theme.hoverFilter})),I=z.a.div(a||(a=Object(C.a)(["\n  width: clamp(35ch, 60%, 75ch);\n  margin: 3rem auto 0rem;\n  * {\n    color: ","\n  }\n  p {\n    line-height: 1.5;\n  }\n"])),(function(e){return e.theme.textColor})),R=z.a.div(c||(c=Object(C.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),L=z.a.h3(i||(i=Object(C.a)(['\n  font-size: 1.4rem;\n  display: inline-block;\n  margin-top: 5rem;\n  position: relative;\n  &:after {\n    content: "";\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    background: ',";\n    width: 0;\n    height: 1px;\n    transition: .4s;\n  }\n  &:hover:after {\n    width: 100%;\n  }\n"])),(function(e){return e.theme.infoColor})),M=T,B=t(4),F=t.n(B),D=t(8),W=t(7),H=t(14),U=t(6),X=t(9),J=Object(S.createContext)(null),K=Object(S.createContext)(null),G=z.a.div(s||(s=Object(C.a)(["\n  width: 100%;\n  margin-bottom: 1.5rem;\n  padding: .5rem;\n  background: ",";\n  border-right: 1px solid ",";\n  border-bottom: 1px solid ",";\n  box-shadow: ",';\n  border-radius: 0 0 .4rem 0;\n  display: grid;\n  grid-template-rows: 3rem 1rem auto;\n  position: relative;\n  &:before {\n    content: "";\n    display: block;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    border-bottom: .6rem solid transparent;\n    border-left: 1.6rem solid ',";\n    transition: .4s;\n  }\n  &:hover:before{\n    width: 1.6rem;\n    height: .6rem;\n    border-top: 2px solid ",";\n    border-left: 2px solid ",";\n  }\n\n  .title {\n    max-width: 100%;\n    display: block;\n    text-decoration: none;\n    letter-spacing: 1px;\n    font-weight: 500;\n    cursor: pointer;\n    font-size: 1.3rem;\n    color: ",";\n    position: relative;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    white-space: wrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    align-self: center;\n    justify-self: start;\n  }\n  .info {\n    font-size: .8rem;\n    color: ",';\n    grid-row-start: 2;\n    grid-row-end: 3;\n    align-self: center;\n    justify-self: flex-end;\n  }\n  .content {\n    grid-row-start: 3;\n    grid-row-end: 4;\n    overflow: hidden;\n    text-overflow: hidden;\n    letter-spacing: 2px;\n    line-height: 1.5;\n    margin: 0 1rem;\n  }\n  .title:after {\n    content: "";\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    background: ',";\n    width: 0;\n    height: 1px;\n    transition: .4s;\n  }\n  .title:hover:after {\n    width: 100%;\n  }\n  @media screen and (max-width: 840px) {\n    width: 100%;\n    box-sizing: border-box;\n    justify-content: flex-start;\n    grid-template-columns: 100%;\n    grid-template-rows: auto 1rem auto;\n    .title {\n      grid-row-start: 1;\n      grid-row-end: 2;\n    }\n    .info {\n      grid-row-start: 2;\n      grid-row-end: 3;\n      justify-self: flex-end;\n    }\n    .content {\n      grid-row-start: 3;\n      grid-row-end: 4;\n    }\n  }\n"])),(function(e){return e.theme.foregroundColor}),(function(e){return e.theme.infoColor}),(function(e){return e.theme.infoColor}),(function(e){return e.theme.boxShadow}),(function(e){return e.theme.bodyColor}),(function(e){return e.theme.infoColor}),(function(e){return e.theme.infoColor}),(function(e){return e.theme.titleColor}),(function(e){return e.theme.infoColor}),(function(e){return e.theme.infoColor})),V="https://student-json-api.lidemy.me",q=function(){var e=Object(D.a)(F.a.mark((function e(n,t){var r,o,a,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(V,"/posts?_sort=createdAt&_order=desc&_page=").concat(n,"&_limit=").concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return o=e.sent,e.next=9,r.headers.get("link");case 9:return a=e.sent,c=a.slice(a.lastIndexOf("page=")+5,a.lastIndexOf("&")),e.abrupt("return",{data:o,lastPage:c});case 14:throw e.prev=14,e.t0=e.catch(0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n,t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(D.a)(F.a.mark((function e(n){var t,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(V,"/posts/").concat(n));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(D.a)(F.a.mark((function e(n,t,r){var o,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(V,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:n,username:t,password:r})});case 3:return o=e.sent,e.next=6,o.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t,r){return e.apply(this,arguments)}}(),Z=function(){var e=Object(D.a)(F.a.mark((function e(n,t){var r,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(V,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,password:t})});case 3:return r=e.sent,e.next=6,r.json();case 6:return o=e.sent,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t){return e.apply(this,arguments)}}(),$=function(){var e=Object(D.a)(F.a.mark((function e(n){var t,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(V,"/me"),{headers:{authorization:"Bearer ".concat(n)}});case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),ee=function(){var e=Object(D.a)(F.a.mark((function e(n,t,r){var o,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(V,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(n)},body:JSON.stringify({title:t,body:r})});case 3:return o=e.sent,e.next=6,o.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t,r){return e.apply(this,arguments)}}(),ne=t(0),te=Object(z.a)(I)(l||(l=Object(C.a)(["\n  width: 100%;\n  padding: 2rem 0;\n"]))),re=Object(z.a)(G)(u||(u=Object(C.a)(["\n  width: 100%;\n  display: grid;\n  grid-template-rows: auto 1rem auto;\n  .title {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .content:first-letter {\n    font-size: 1.2rem;\n    font-weight: 600;\n    margin-right: .5rem;\n    float: left;\n  }\n"]))),oe=Object(z.a)(A)(d||(d=Object(C.a)(["\n  margin: .5rem;\n"]))),ae=function(e){var n=e.post,t=n.id,r=n.title,o=n.createdAt,a=n.body;return Object(ne.jsxs)(re,{children:[Object(ne.jsx)(H.b,{className:"title",to:"/post/".concat(t),children:r}),Object(ne.jsxs)("p",{className:"info",children:[" - ",new Date(o).toLocaleString().replace(",","")]}),Object(ne.jsx)("p",{className:"content",children:a.length>60?"".concat(a.slice(0,60),"..."):a})]})},ce=function(e){var n=e.page,t=e.setPage,r=e.lastPageNumber,o=1!==n,a=n!==r;return Object(ne.jsxs)("div",{children:[Object(ne.jsxs)(R,{children:[o&&Object(ne.jsx)(oe,{onClick:function(){return t(1)},children:"\u9996\u9801"}),a&&Object(ne.jsx)(oe,{onClick:function(){n>=r||t((function(){return n+1}))},children:"\u4e0b\u4e00\u9801"}),o&&Object(ne.jsx)(oe,{onClick:function(){n<=1||t((function(){return n-1}))},children:"\u4e0a\u4e00\u9801"}),a&&Object(ne.jsx)(oe,{onClick:function(){return t(r)},children:"\u6700\u5f8c\u4e00\u9801"})]}),Object(ne.jsx)(R,{children:Object(ne.jsxs)("div",{children:["\u9801\u6578\uff1a",n," / ",r]})})]})},ie=function(){var e=Object(S.useState)(1),n=Object(W.a)(e,2),t=n[0],r=n[1],o=Object(S.useState)(1),a=Object(W.a)(o,2),c=a[0],i=a[1],s=Object(S.useState)([]),l=Object(W.a)(s,2),u=l[0],d=l[1],b=Object(S.useContext)(K).setIsLoading;return Object(S.useEffect)((function(){Object(D.a)(F.a.mark((function e(){var n,r,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(!0);case 2:return e.next=4,q(t,"5");case 4:return n=e.sent,r=n.data,o=n.lastPage,e.next=9,d(r);case 9:return e.next=11,i(o);case 11:return e.next=13,b(!1);case 13:case"end":return e.stop()}}),e)})))()}),[b,t,"5"]),Object(ne.jsx)(ne.Fragment,{children:Object(ne.jsx)(I,{children:Object(ne.jsxs)(te,{children:[u.map((function(e){return Object(ne.jsx)(ae,{post:e},e.id)})),Object(ne.jsx)(ce,{page:t,setPage:r,lastPageNumber:c})]})})})},se=Object(z.a)(I)(b||(b=Object(C.a)(["\n  width: 100%;\n  padding: 2rem 0;\n"]))),le=z.a.div(h||(h=Object(C.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: flex-end;\n"]))),ue=function(){return Object(ne.jsx)(I,{children:Object(ne.jsxs)(se,{children:[Object(ne.jsx)(L,{children:"\u95dc\u65bc\u6211\uff1a"}),Object(ne.jsx)("p",{children:"\u55e8\u55e8\uff01\u6211\u662f Benben \ud83d\udc4b "}),Object(ne.jsx)("p",{children:"\u9019\u662f\u4e00\u500b\u9ed1\u767d\u70ba\u4e3b\u8272\u7684\u90e8\u843d\u683c\uff0c\u4e26\u53ef\u4ee5\u5207\u63db\u9ed1\u767d\u4e3b\u984c\u3002"}),Object(ne.jsx)("p",{children:"\u6211\u5728\u9019\u88e1\u9304\u8a18\u4eba\u751f\u9ed1\u767d\u7121\u5e38\u7684\u90a3\u4e9b\u6642\u523b..."}),Object(ne.jsxs)(le,{children:[Object(ne.jsx)(L,{children:"\u4f60\u77e5\u9053\u55ce"}),Object(ne.jsx)("p",{children:"RGB\u4e00\u822c\u7a31\u70ba\u3010\u8272\u5149\u4e09\u539f\u8272\u3011"}),Object(ne.jsx)("p",{children:"R\uff08red\uff09\u7d05\u3001G\uff08green\uff09\u7da0\u3001B\uff08blue\uff09\u85cd\uff0c\u984f\u8272\u968e\u8abf\u70ba 0-255"}),Object(ne.jsx)("p",{children:"\u5982\u679c\u628a\u4e09\u500b\u8272\u968e\u52a0\u4f86\u9664\u4ee5 3 \u4e26\u628a RGB \u6307\u5b9a\u6210\u540c\u6a23\u7684\u6578\u5b57\u5c31\u53ef\u4ee5\u628a\u984f\u8272\u8b8a\u9ed1\u767d"})]})]})})},de=Object({NODE_ENV:"production",PUBLIC_URL:"/react-blog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASE_URL:"https://student-json-api.lidemy.me",REACT_APP_PER_PAGE_ITEM:"5",REACT_APP_THEME_NAME:"theme",REACT_APP_TOKEN_NAME:"token"}),be=de.REACT_APP_TOKEN_NAME,he=de.REACT_APP_THEME_NAME,pe=function(e){localStorage.setItem(be,e)},je=function(){return localStorage.getItem(be)||""},fe=function(e){localStorage.setItem(he,e)},xe=Object(z.a)(I)(p||(p=Object(C.a)(["\n  width: 100%;\n  padding: 2rem 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),me=z.a.form(j||(j=Object(C.a)(["\n  width: clamp(25ch, 40%, 35ch);\n  padding: 1rem;\n  box-shadow: ",";\n  border: 1px solid ",";\n  border-radius: .4rem;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  .button {\n    align-self: center;\n    justify-content: center;\n    margin: 2rem 0 1rem;\n    width: clamp(3rem, 30%, 6rem);\n  }\n  .title {\n    align-self: flex-start;\n    margin: 1rem 0;\n    font-size: 1.2rem;\n  }\n  input[type=text], input[type=password] {\n    width: 100%;\n    background: ",";\n    border: none;\n    border-bottom: 1px solid ",";\n    border-radius: .3rem;\n    padding-left: .5rem;\n    height: 1.5rem;\n    line-height: 1.2;\n    &:focus {\n      outline: none;\n    }\n  }\n"])),(function(e){return e.theme.navBoxShadow}),(function(e){return e.theme.infoColor}),(function(e){return e.theme.foregroundColor}),(function(e){return e.theme.titleColor})),ge=function(e){var n=e.userMethod,t=Object(S.useContext)(J).setUser,r=Object(S.useContext)(K).setIsLoading,o=Object(S.useState)(""),a=Object(W.a)(o,2),c=a[0],i=a[1],s=Object(S.useState)(""),l=Object(W.a)(s,2),u=l[0],d=l[1],b=Object(S.useState)(""),h=Object(W.a)(b,2),p=h[0],j=h[1],f=Object(S.useState)(""),x=Object(W.a)(f,2),m=x[0],g=x[1],O=Object(S.useState)(""),v=Object(W.a)(O,2),w=v[0],y=v[1],k=Object(U.f)(),C=function(){var e=Object(D.a)(F.a.mark((function e(n){var o,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),y(""),c&&u){e.next=4;break}return e.abrupt("return",y("\u8acb\u8f38\u5165\u5e33\u865f\u6216\u5bc6\u78bc"));case 4:if(c.trim().length&&u.trim().length){e.next=6;break}return e.abrupt("return",y("\u5e33\u865f\u6216\u5bc6\u78bc\u4e0d\u5f97\u70ba\u7a7a\u767d"));case 6:return r(!0),e.next=9,Z(c,u);case 9:if((o=e.sent).ok){e.next=12;break}return e.abrupt("return",y("\u5e33\u865f\u6216\u5bc6\u78bc\u932f\u8aa4"));case 12:return pe(o.token),e.next=15,$(je());case 15:if((a=e.sent).ok){e.next=20;break}return pe(null),r(!1),e.abrupt("return",y("\u5e33\u865f\u6216\u5bc6\u78bc\u932f\u8aa4"));case 20:t(a.data),r(!1),k.push("/");case 23:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),_=function(){var e=Object(D.a)(F.a.mark((function e(n){var o,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),y(""),p&&c&&u&&m){e.next=4;break}return e.abrupt("return",y("\u8acb\u8f38\u5165\u66b1\u5e33\u865f\u3001\u5bc6\u78bc\u6216\u518d\u6b21\u78ba\u8a8d\u5bc6\u78bc"));case 4:if(p.trim().length&&c.trim().length&&u.trim().length&&m.trim().length){e.next=6;break}return e.abrupt("return",y("\u66b1\u5e33\u865f\u3001\u5bc6\u78bc\u6216\u518d\u6b21\u78ba\u8a8d\u5bc6\u78bc \u4e0d\u5f97\u70ba\u7a7a\u767d"));case 6:return r(!0),e.next=9,Y(p,c,u);case 9:if((o=e.sent).ok){e.next=12;break}return e.abrupt("return",y("\u8a3b\u518a\u5931\u6557"));case 12:return pe(o.token),e.next=15,$();case 15:if((a=e.sent).ok){e.next=20;break}return pe(null),r(!1),e.abrupt("return",y("\u5e33\u865f\u6216\u5bc6\u78bc\u932f\u8aa4"));case 20:t(a.data),r(!1),k.push("/");case 23:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(ne.jsxs)(me,{onSubmit:"\u767b\u5165"===n?C:_,children:[Object(ne.jsx)("h1",{children:n}),w&&Object(ne.jsxs)("div",{children:[w,"\uff01"]}),"\u8a3b\u518a"===n&&Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)("div",{className:"title",children:"\u66b1\u7a31\uff1a"}),Object(ne.jsx)("input",{type:"text",value:p,onChange:function(e){return j(e.target.value)}})]}),Object(ne.jsx)("div",{className:"title",children:"\u5e33\u865f\uff1a"}),Object(ne.jsx)("input",{type:"text",value:c,onChange:function(e){return i(e.target.value)}}),Object(ne.jsx)("div",{className:"title",children:"\u5bc6\u78bc\uff1a"}),Object(ne.jsx)("input",{type:"password",value:u,onChange:function(e){return d(e.target.value)}}),"\u8a3b\u518a"===n&&Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)("div",{className:"title",children:"\u518d\u6b21\u78ba\u8a8d\u5bc6\u78bc\uff1a"}),Object(ne.jsx)("input",{type:"password",value:m,onChange:function(e){return g(e.target.value)}})]}),Object(ne.jsx)(A,{className:"button",children:n})]})},Oe=function(e){var n=e.userMethod;return Object(ne.jsx)(I,{children:Object(ne.jsx)(R,{children:Object(ne.jsx)(xe,{children:Object(ne.jsx)(ge,{userMethod:n})})})})},ve=Object(z.a)(I)(f||(f=Object(C.a)(["\n  width: 100%;\n  padding: 2rem 0;\n"]))),we=function(e){var n=e.post,t=n.id,r=n.title,o=n.createdAt,a=n.body;return Object(ne.jsxs)(G,{children:[Object(ne.jsx)(H.b,{className:"title",to:"/post/".concat(t),children:r}),Object(ne.jsx)("p",{className:"info",children:new Date(o).toLocaleString().replace(",","")}),Object(ne.jsx)("p",{className:"content",style:{marginTop:"2rem",lineHeight:2,letterSpacing:"3px",whiteSpace:"pre-wrap"},children:a})]})},ye=function(){var e=Object(S.useContext)(K).setIsLoading,n=Object(U.h)().slug,t=Object(S.useState)([]),r=Object(W.a)(t,2),o=r[0],a=r[1];return Object(S.useEffect)((function(){Object(D.a)(F.a.mark((function t(){var r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(!0),t.next=3,Q(n);case 3:r=t.sent,a(r),e(!1);case 6:case"end":return t.stop()}}),t)})))()}),[e,n]),Object(ne.jsx)(ne.Fragment,{children:Object(ne.jsx)(I,{children:Object(ne.jsx)(ve,{children:Object(ne.jsx)(we,{post:o})})})})},ke=Object(N.c)(x||(x=Object(C.a)(["\n  0% {\n    opacity: 0;\n    transform: translateX(-100px);\n  }\n  10% {\n    opacity: 1;\n    transform: translateX(-80px);\n  }\n  90% {\n    opacity: 1;\n    transform: translateX(80px);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(100px);\n  }\n"]))),Ce=Object(N.c)(m||(m=Object(C.a)(["\n  from { opacity: 1}\n  to { opacity: 0}\n"]))),Se=Object(z.a)(I)(g||(g=Object(C.a)(["\n  width: 100%;\n  padding: 2rem 0;\n"]))),_e=Object(z.a)(L)(O||(O=Object(C.a)(["\n  font-size: 2rem;\n  animation: "," 1.2s ease-in alternate infinite;\n"])),Ce),Ee=function(e){var n=e.title;return Object(ne.jsx)(I,{children:Object(ne.jsxs)(Se,{children:[Object(ne.jsx)("h1",{children:"Oops!"}),Object(ne.jsx)(_e,{children:n})]})})},Pe=Object(z.a)(I)(v||(v=Object(C.a)(["\n  width: 100%;\n  padding: 2rem 0;\n"]))),Ne=z.a.form(w||(w=Object(C.a)(["\n  width: clamp(25ch, 70%, 70ch);\n  padding: 1rem;\n  margin-top: 3rem;\n  box-shadow: ",";\n  border: 1px solid ",";\n  border-radius: .4rem;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  .button {\n    align-self: center;\n    justify-content: center;\n    margin: 2rem 0 1rem;\n    width: clamp(3rem, 30%, 6rem);\n  }\n  .title {\n    align-self: flex-start;\n    margin: 1rem 0;\n    font-size: 1.2rem;\n  }\n  input[type=text], textarea {\n    width: 100%;\n    font-size: 1.2rem;\n    background: ",";\n    border: none;\n    border-bottom: 1px solid ",";\n    border-radius: .3rem;\n    padding-left: .5rem;\n    height: 1.8rem;\n    line-height: 1.2;\n    &:focus {\n      outline: none;\n    }\n  }\n  textarea {\n    padding-top: .5rem;\n    height: auto;\n    resize: vertical;\n  }\n  span {\n    max-width: 100%;\n    align-self: flex-end;\n    white-space: wrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"])),(function(e){return e.theme.navBoxShadow}),(function(e){return e.theme.infoColor}),(function(e){return e.theme.foregroundColor}),(function(e){return e.theme.titleColor})),ze=function(e){var n=e.user,t=Object(S.useState)(""),r=Object(W.a)(t,2),o=r[0],a=r[1],c=Object(S.useState)(""),i=Object(W.a)(c,2),s=i[0],l=i[1],u=Object(S.useState)(""),d=Object(W.a)(u,2),b=d[0],h=d[1],p=Object(S.useContext)(K).setIsLoading,j=Object(U.f)(),f=function(){var e=Object(D.a)(F.a.mark((function e(n){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),h(""),o&&s){e.next=4;break}return e.abrupt("return",h("\u8acb\u8f38\u5165\u6a19\u984c\u6216\u5167\u5bb9"));case 4:if(o.trim().length&&s.trim().length){e.next=6;break}return e.abrupt("return",h("\u6a19\u984c\u6216\u5167\u5bb9\u4e0d\u5f97\u70ba\u7a7a\u767d"));case 6:return p(!0),e.next=9,ee(je(),o,s);case 9:if(e.sent){e.next=13;break}return p(!1),e.abrupt("return",h("\u65b0\u589e\u5931\u6557"));case 13:p(!1),j.push("/");case 15:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(ne.jsxs)(Ne,{onSubmit:f,children:[Object(ne.jsx)("h1",{children:"\u767c\u5e03\u6587\u7ae0"}),Object(ne.jsxs)("span",{children:[" - ",n.nickname]}),b&&Object(ne.jsxs)("div",{children:[b,"\uff01"]}),Object(ne.jsx)("div",{className:"title",children:"\u6a19\u984c\uff1a"}),Object(ne.jsx)("input",{type:"text",value:o,onChange:function(e){return a(e.target.value)},placeholder:"\u8acb\u8f38\u5165\u6a19\u984c..."}),Object(ne.jsx)("div",{className:"title",children:"\u5167\u5bb9\uff1a"}),Object(ne.jsx)("textarea",{onChange:function(e){return l(e.target.value)},rows:"6",placeholder:"\u8acb\u8f38\u5165\u5167\u5bb9...",children:s}),Object(ne.jsx)(A,{className:"button",children:"\u9001\u51fa"})]})},Te=function(){var e=Object(S.useContext)(J).user;return Object(ne.jsx)(ne.Fragment,{children:Object(ne.jsx)(I,{children:Object(ne.jsx)(Pe,{children:e?Object(ne.jsx)(ze,{user:e}):Object(ne.jsx)(Ee,{title:"Login first..."})})})})},Ae=Object(N.c)(y||(y=Object(C.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),Ie=z.a.div(k||(k=Object(C.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  font-size: 2rem;\n  z-index: 5;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  color: ",";\n  background: ",';\n  backdrop-filter: blur(2px);\n  &:before {\n    content: "";\n    display: block;\n    position: absolute;\n    top: 60%;\n    transform: translate(-50%, -50%);\n    background: transparent;\n    width: 27px;\n    height: 27px;\n    border-radius: 50%;\n    border: 5px dashed ',";\n    animation: "," 2s linear infinite;\n  }\n"])),(function(e){return e.theme.bodyColor}),(function(e){return e.theme.loadingColor}),(function(e){return e.theme.bodyColor}),Ae),Re=function(){return Object(ne.jsx)(Ie,{children:"Loading..."})};function Le(){return(Le=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Me(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var Be=S.createElement("g",null,S.createElement("path",{d:"M8.2,9.6c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.5,6.1c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L8.2,9.6   z"}),S.createElement("path",{d:"M7,16c0-0.6-0.4-1-1-1H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h3C6.6,17,7,16.6,7,16z"}),S.createElement("path",{d:"M8.2,22.4l-2.1,2.1c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2.1-2.1c0.4-0.4,0.4-1,0-1.4   S8.6,22,8.2,22.4z"})),Fe=S.createElement("path",{d:"M29.4,16.2c-0.4-0.2-0.9-0.1-1.2,0.3c-0.8,1-2,1.5-3.2,1.5c-2.3,0-4.3-1.9-4.3-4.3c0-1.6,0.9-3,2.3-3.8  c0.4-0.2,0.6-0.7,0.5-1.1C23.4,8.4,23,8,22.5,8c-0.1,0-0.3,0-0.4,0c-1.9,0-3.7,0.7-5.1,1.8V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v5.1  c-3.9,0.5-7,3.9-7,7.9s3.1,7.4,7,7.9V29c0,0.6,0.4,1,1,1s1-0.4,1-1v-6.8c1.4,1.2,3.2,1.8,5.1,1.8c4,0,7.3-2.9,7.9-6.8  C30.1,16.8,29.8,16.3,29.4,16.2z M17,20c0,0.6-0.4,1-1,1s-1-0.4-1-1v-8c0-0.6,0.4-1,1-1s1,0.4,1,1V20z"});function De(e,n){var t=e.title,r=e.titleId,o=Me(e,["title","titleId"]);return S.createElement("svg",Le({id:"Icons",style:{enableBackground:"new 0 0 32 32"},viewBox:"0 0 32 32",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:n,"aria-labelledby":r},o),t?S.createElement("title",{id:r},t):null,Be,Fe)}var We,He,Ue,Xe,Je,Ke,Ge,Ve,qe,Qe=S.forwardRef(De),Ye=(t.p,z.a.div(We||(We=Object(C.a)(["\n  width: 1.5rem;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  > svg {\n    width: 1.5rem;\n    height: 1.5rem;\n    path {\n      fill: ",";\n    }\n  }\n"])),(function(e){return e.theme.titleColor}))),Ze=z.a.div(He||(He=Object(C.a)(["\n  width: 100%;\n  height: 3rem;\n  box-shadow: ",";\n  background-color: ",";\n  color: ",";\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  box-sizing: border-box;\n  z-index: 3;\n\n  #menu__btn, #menu__control {\n    display: none;\n  }\n  #menu__btn > span {\n    display: none;\n  }\n  @media screen and (max-width: 840px) {\n    #menu__btn {\n      display: inline-block;\n      width: 1.5rem;\n      height: 1.5rem;\n      border: 1px solid ",";\n      border-radius: .3rem;\n      position: relative;\n      cursor: pointer;\n      margin-right: 1rem;\n    }\n    #menu__btn::before {\n      content: '';\n      position: absolute;\n      top: 51%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      height: .1rem;\n      width: .9rem;\n      background-color: ",";\n      border-radius: .1rem;\n      box-shadow: 0 .3rem 0px ",", 0 -.3rem 0px ",";\n    }\n    #menu__btn:hover {\n      filter: brightness(0.6);\n    }\n    #menu__control:checked+div {\n      height: auto;\n      max-height: 100vh;\n    }\n  }\n\n"])),(function(e){return e.theme.navBoxShadow}),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.titleColor}),(function(e){return e.theme.titleColor}),(function(e){return e.theme.textColor}),(function(e){return e.theme.textColor}),(function(e){return e.theme.textColor})),$e=Object(z.a)(H.b)(Ue||(Ue=Object(C.a)(["\n  text-decoration: none;\n  color: ",";\n  font-size: 1.4rem;\n  position: relative;\n  cursor: pointer;\n  overflow: hidden;\n  &:hover {\n    animation: "," 1s ease-in alternate infinite;\n  }\n  span {\n    width: 3rem;\n    height: 1px;\n    position: absolute;\n    background: linear-gradient( 90deg, transparent, \n      ",");\n    transform: translateX(-50%);\n    animation: "," 2s linear infinite;\n    z-index: 1;\n  }\n  &:hover span {\n    width: 5rem;\n    animation: "," 1s linear infinite;\n  }\n  span:nth-of-type(1) {\n    top: 45%;\n    left: 50%;\n  }\n  span:nth-of-type(2) {\n    top: 55%;\n    left: 50%;\n    animation-delay: .25s;\n  }\n  span:nth-of-type(3) {\n    top: 65%;\n    left: 50%;\n    animation-delay: .5s;\n  }\n  span:nth-of-type(4) {\n    top: 75%;\n    left: 50%;\n    animation-delay: .75s;\n  }\n"])),(function(e){return e.theme.titleColor}),Ce,(function(e){return e.theme.titleColor}),ke,ke),en=z.a.div(Xe||(Xe=Object(C.a)(["\n  display: flex;\n  input[name=nav] {\n    display: none;\n    z-index: -1;\n  }\n  input[name=nav]:checked + label > a {\n    background: ",";\n    color: ",";\n  }\n  @media screen and (max-width: 840px) {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 0;\n    max-height: 0;\n    overflow:hidden;\n    position: absolute;\n    top: 3rem;\n    transition: max-height .8s ease;\n    margin: 0;\n    padding: 0;\n    z-index: -1;\n  }\n"])),(function(e){return e.theme.navCheckColor}),(function(e){return e.theme.bodyColor})),nn=Object(z.a)(H.b)(Je||(Je=Object(C.a)(["\n  display: block;\n  border: none;\n  border-radius: 0;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  line-height: 3rem;\n  padding: 0 1rem;\n  margin: 0;\n  overflow: hidden;\n  color: ",";\n  background-color: ",";\n  &:hover {\n    filter:brightness(",");\n  }\n  @media screen and (max-width: 840px) {\n    backdrop-filter: blur(2px);\n    width: 100vw;\n    padding: 0;\n  }\n"])),(function(e){return e.theme.titleColor}),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.hoverFilter})),tn=z.a.div(Ke||(Ke=Object(C.a)(["\n  display: block;\n  border: none;\n  border-radius: 0;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  line-height: 3rem;\n  padding: 0 1rem;\n  margin: 0;\n  overflow: hidden;\n  color: ",";\n  background-color: ",";\n  &:hover {\n    filter:brightness(",");\n  }\n  @media screen and (max-width: 840px) {\n    backdrop-filter: blur(2px);\n    width: 100vw;\n    padding: 0;\n  }\n"])),(function(e){return e.theme.titleColor}),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.hoverFilter})),rn=z.a.div(Ge||(Ge=Object(C.a)(["\n  display: block;\n  border: none;\n  border-radius: 0;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  line-height: 3rem;\n  padding-right: 1rem;\n  margin: 0;\n  color: ",";\n  background-color: ",";\n  z-index: 3;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translate(-50%, -50%);\n  @media screen and (max-width: 840px) {\n    padding-right: .5rem;\n  }\n\n"])),(function(e){return e.theme.titleColor}),(function(e){return e.theme.backgroundColor})),on=function(e){var n=e.title,t=e.to,r=e.activeOnlyWhenExact,o=Object(U.i)({path:t,exact:r});return Object(ne.jsxs)("div",{children:[o?Object(ne.jsx)("input",{type:"radio",name:"nav",checked:!0,readOnly:!0}):Object(ne.jsx)("input",{type:"radio",name:"nav"}),Object(ne.jsx)("label",{children:Object(ne.jsx)(nn,{to:t,children:n})})]})},an=function(e){var n=e.currentTheme,t=e.setCurrentTheme,r=Object(S.useContext)(J),o=r.user,a=r.setUser,c=Object(U.g)(),i=Object(U.f)(),s=Object(S.useRef)(null);Object(S.useEffect)((function(){s.current.checked=!1}),[c]);return Object(ne.jsxs)(Ze,{children:[Object(ne.jsxs)($e,{to:"/",children:["benben's blog",Object(ne.jsx)("span",{}),Object(ne.jsx)("span",{}),Object(ne.jsx)("span",{}),Object(ne.jsx)("span",{})]}),Object(ne.jsx)("label",{htmlFor:"menu__control",id:"menu__btn",children:Object(ne.jsx)("span",{children:"menu"})}),Object(ne.jsx)("input",{id:"menu__control",type:"checkbox",ref:s}),Object(ne.jsxs)(en,{children:[Object(ne.jsx)(on,{to:"/about",title:"About",activeOnlyWhenExact:!0}),o?Object(ne.jsx)(on,{to:"/new-post",title:"New Post",activeOnlyWhenExact:!0}):Object(ne.jsx)(on,{to:"/login",title:"Login",activeOnlyWhenExact:!0}),o?Object(ne.jsx)(tn,{onClick:function(){pe(""),a(null),"/"!==c.pathname&&i.push("/")},children:"logout"}):Object(ne.jsx)(on,{to:"/register",title:"Register",activeOnlyWhenExact:!0})]}),Object(ne.jsx)(rn,{onClick:function(){"light"===n?(t("dark"),fe("dark")):(t("light"),fe("light"))},children:Object(ne.jsx)(Ye,{children:Object(ne.jsx)(Qe,{})})})]})},cn=z.a.div(Ve||(Ve=Object(C.a)(["\n  width: 100%;\n  position: relative;\n  text-align: center;\n  height: 1.6rem;\n  line-height: 1.6rem;\n  padding: auto;\n  bottom: 0;\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.textColor})),sn=function(){return Object(ne.jsx)(cn,{children:"Copyright \xa9 2021 Benben All rights reserved."})},ln={light:{bodyColor:"#fff",backgroundColor:"#eee",foregroundColor:"#f3f3f3",boxShadow:"1px 1px 0px 1px #999",navCheckColor:"#555",navBoxShadow:"0px 1px 3px 1px rgba(0, 0, 0, 0.2), 0px 1px 5px 1px rgba(0, 0, 0, 0.1)",titleColor:"#222",infoColor:"#777",textColor:"#555",loadingColor:"rgba(0,0,0,0.3)",hoverFilter:.9},dark:{bodyColor:"#222",backgroundColor:"#333",foregroundColor:"#2f2f2f",boxShadow:"1px 1px 0px 1px rgba(255, 255, 255, 0.2)",navBoxShadow:"0px 1px 3px 1px rgba(255, 255, 255, 0.2), 0px 1px 5px 1px rgba(255, 255, 255, 0.1)",navCheckColor:"#aaa",titleColor:"#eee",infoColor:"#ccc",textColor:"#ccc",loadingColor:"rgba(255,255,255,0.3)",hoverFilter:1.2}},un=z.a.div(qe||(qe=Object(C.a)(["\n  background-color: ",";\n  width: 100%;\n  height: 100%;\n  min-height: calc(100vh - 4.6rem);\n"])),(function(e){return e.theme.bodyColor}));var dn,bn=function(){var e=Object(S.useState)(localStorage.getItem(he)||"light"),n=Object(W.a)(e,2),t=n[0],r=n[1],o=Object(S.useState)(!1),a=Object(W.a)(o,2),c=a[0],i=a[1],s=Object(S.useState)(""),l=Object(W.a)(s,2),u=l[0],d=l[1];return Object(S.useEffect)((function(){Object(D.a)(F.a.mark((function e(){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(je()){e.next=2;break}return e.abrupt("return");case 2:return i(!0),e.next=5,$(je());case 5:if(!(n=e.sent).ok){e.next=9;break}return e.next=9,d(n.data);case 9:i(!1);case 10:case"end":return e.stop()}}),e)})))()}),[]),Object(ne.jsx)(J.Provider,{value:{user:u,setUser:d},children:Object(ne.jsx)(K.Provider,{value:{isLoading:c,setIsLoading:i},children:Object(ne.jsx)(X.c,{theme:ln[t],children:Object(ne.jsxs)(H.a,{basename:"/blog",children:[Object(ne.jsx)(an,{currentTheme:t,setCurrentTheme:r}),Object(ne.jsxs)(un,{children:[c&&Object(ne.jsx)(Re,{}),Object(ne.jsxs)(U.c,{children:[Object(ne.jsx)(U.a,{exact:!0,path:"/",children:Object(ne.jsx)(ie,{})}),Object(ne.jsx)(U.a,{exact:!0,path:"/about",children:Object(ne.jsx)(ue,{})}),Object(ne.jsx)(U.a,{exact:!0,path:"/login",children:Object(ne.jsx)(Oe,{userMethod:"\u767b\u5165"})}),Object(ne.jsx)(U.a,{exact:!0,path:"/register",children:Object(ne.jsx)(Oe,{userMethod:"\u8a3b\u518a"})}),Object(ne.jsx)(U.a,{exact:!0,path:"/new-post",children:Object(ne.jsx)(Te,{})}),Object(ne.jsx)(U.a,{exact:!0,path:"/post/:slug",children:Object(ne.jsx)(ye,{isLoading:c,setIsLoading:i})}),Object(ne.jsx)(U.a,{exact:!0,path:"*",children:Object(ne.jsx)(Ee,{title:"404 not found..."})})]})]}),Object(ne.jsx)(sn,{})]})})})})};P.a.render(Object(ne.jsxs)(_.a.StrictMode,{children:[Object(ne.jsx)(N.a,{styles:Object(N.b)(dn||(dn=Object(C.a)(["",""])),M)}),Object(ne.jsx)(bn,{})]}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.6b2c018e.chunk.js.map