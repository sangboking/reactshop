(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{113:function(e,t,c){"use strict";c.r(t);var n=c(14),i=c(0),s=c.n(i),a=c(18),r=c.n(a),j=(c(84),c(70)),o=function(e){e&&e instanceof Function&&c.e(5).then(c.bind(null,134)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))},d=c(32),l=c(39),b=c(58),h=c(1);var O=[{id:0,name:"\uc544\ub514\ub2e4\uc2a4\uc2e0\ubc1c",quan:0},{id:1,name:"\ub098\uc774\ud0a4\uc2e0\ubc1c",quan:0},{id:2,name:"\ub274\ubc1c\uc2e0\ubc1c",quan:0}];var u=Object(b.b)(Object(b.a)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;if("\ud56d\ubaa9\ucd94\uac00"===t.type){var c=e.findIndex((function(e){return e.id===t.payload.id}));if(c>=0){var i=Object(n.a)(e);return i[c].quan++,i}var s=Object(n.a)(e);return s.push(t.payload),s}if("\uc218\ub7c9\uc99d\uac00"===t.type){var a=Object(n.a)(e);return a[t.\ub370\uc774\ud130].quan++,a}if("\uc218\ub7c9\uac10\uc18c"===t.type){var r=Object(n.a)(e);return r[t.\ub370\uc774\ud130].quan--,r}return e},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"\uc54c\ub78c\ub2eb\uae30"===t.type?e=!1:e}}));r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(d.a,{children:Object(h.jsx)(l.a,{store:u,children:Object(h.jsx)(j.a,{})})})}),document.getElementById("root")),o()},70:function(e,t,c){"use strict";c.d(t,"b",(function(){return N}));var n=c(14),i=c(5),s=c(0),a=c.n(s),r=c(122),j=c(120),o=c(123),d=c(121),l=(c(76),[{id:0,title:"\uc544\ub514\ub2e4\uc2a4\uc2e0\ubc1c",content:"Made in France",price:"12,000\uc6d0"},{id:1,title:"\ub098\uc774\ud0a4\uc2e0\ubc1c",content:"Made in Seoul",price:"11,000\uc6d0"},{id:2,title:"\ub274\ubc1c\uc2e0\ubc1c",content:"Made in the States",price:"13,000\uc6d0"}]),b=c(32),h=c(8),O=c(59),u=c.n(O),x=c(119),p=c(39),f=(c(78),c(1));function m(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{"\uc774\ub984":e.\uc774\ub984}),Object(f.jsx)(g,{"\ub098\uc774":e.\ub098\uc774})]})}function v(){return Object(s.useEffect)((function(){console.log("\ub80c\ub354\ub9c1\ub4281")})),Object(f.jsx)("div",{children:"1111"})}var g=Object(s.memo)((function(){return Object(s.useEffect)((function(){console.log("\ub80c\ub354\ub9c1\ub4282")})),Object(f.jsx)("div",{children:"2222"})})),y=function(e){var t=Object(p.d)((function(e){return e})),c=Object(p.c)();return Object(f.jsxs)("div",{children:[Object(f.jsxs)(x.a,{responsive:"sm",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"#"}),Object(f.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(f.jsx)("th",{children:"\uc218\ub7c9"}),Object(f.jsx)("th",{children:"\ubcc0\uacbd"})]})}),Object(f.jsx)("tbody",{children:t.reducer.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.id}),Object(f.jsx)("td",{children:e.name}),Object(f.jsx)("td",{children:e.quan}),Object(f.jsxs)("td",{children:[Object(f.jsx)("button",{onClick:function(){c({type:"\uc218\ub7c9\uc99d\uac00","\ub370\uc774\ud130":e.id})},children:"+"}),Object(f.jsx)("button",{onClick:function(){c({type:"\uc218\ub7c9\uac10\uc18c","\ub370\uc774\ud130":e.id})},children:"-"})]})]},t)}))})]}),!0===t.reducer2?Object(f.jsx)("div",{className:"my-alert2",children:Object(f.jsxs)("p",{children:["\uc9c0\uae08 \uad6c\ub9e4\ud558\uc2dc\uba74 \uc2e0\uaddc\ud560\uc778 20%",Object(f.jsx)("button",{onClick:function(){c({type:"\uc54c\ub78c\ub2eb\uae30"})},children:"x"})]})}):null,Object(f.jsx)(m,{"\uc774\ub984":"\ubc15\uc0c1\ud6c8","\ub098\uc774":"25"})]})},S=Object(s.lazy)((function(){return Promise.all([c.e(3),c.e(4)]).then(c.bind(null,132))})),N=a.a.createContext();function C(e){Object(s.useContext)(N);var t=Object(h.f)();return Object(f.jsxs)("div",{className:"col-md-4",onClick:function(){t.push("/detail/"+e.shoes.id)},children:[Object(f.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(f.jsx)("h4",{children:e.shoes.title}),Object(f.jsxs)("p",{children:[e.shoes.content," & ",e.shoes.price]}),Object(f.jsx)(k,{})]})}function k(e){var t=Object(s.useContext)(N);return Object(f.jsxs)("p",{children:["\uc7ac\uace0 : ",t[0]]})}t.a=function(){var e=Object(s.useState)(l),t=Object(i.a)(e,2),c=t[0],a=t[1],O=Object(s.useState)(!0),x=Object(i.a)(O,2),p=(x[0],x[1],Object(s.useState)([10,11,12])),m=Object(i.a)(p,2),v=m[0],g=m[1],k=Object(s.useState)(0),I=Object(i.a)(k,2),q=I[0],w=(I[1],Object(s.useState)(20)),D=Object(i.a)(w,2),F=D[0],L=D[1];return Object(s.useEffect)((function(){0!=q&&q<3&&L(F+1)}),[q]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(r.a,{bg:"light",expand:"lg",children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(r.a.Brand,{children:Object(f.jsx)(b.b,{to:"/",children:"\uc0c1\ud6c8'S:hop"})}),Object(f.jsx)(r.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsx)(r.a.Collapse,{id:"basic-navbar-nav",children:Object(f.jsxs)(o.a,{className:"me-auto",children:[Object(f.jsx)(o.a.Link,{as:b.b,to:"/",children:"Home"}),Object(f.jsx)(o.a.Link,{as:b.b,to:"/Detail",children:"Detail"}),Object(f.jsxs)(d.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(f.jsx)(d.a.Item,{href:"#action/3.1",children:"Action"}),Object(f.jsx)(d.a.Item,{href:"#action/3.2",children:"Another action"}),Object(f.jsx)(d.a.Item,{href:"#action/3.3",children:"Something"}),Object(f.jsx)(d.a.Divider,{}),Object(f.jsx)(d.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(f.jsxs)(h.c,{children:[Object(f.jsxs)(h.a,{exact:!0,path:"/",children:[Object(f.jsxs)("div",{className:"jumbotron",children:[Object(f.jsx)("h1",{className:"display-4",children:"20% Season Off"}),Object(f.jsx)("p",{className:"lead",children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(f.jsx)("p",{children:"It uses utility classNamees for typography and spacing to space content out within the larger container."}),Object(f.jsx)("p",{className:"lead",children:Object(f.jsx)("a",{className:"btn btn-primary btn-lg",href:"#",role:"button",children:"Learn more"})})]}),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(N.Provider,{value:v,children:Object(f.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(f.jsx)(C,{shoes:c[t],i:t},t)}))})}),Object(f.jsx)("button",{className:"btn btn-primary",onClick:function(){u.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){a([].concat(Object(n.a)(c),Object(n.a)(e.data)))})).catch((function(){console.log("\uc2e4\ud328")}))},children:"\ub354\ubcf4\uae30"})]})]}),Object(f.jsx)(h.a,{exact:!0,path:"/detail/:id",children:Object(f.jsx)(N.Provider,{value:v,children:Object(f.jsx)(s.Suspense,{fallback:Object(f.jsx)("div",{children:"\ub85c\ub529\uc911\uc785\ub2c8\ub2e4."}),children:Object(f.jsx)(S,{shoes:c,"\uc7ac\uace0":v,"\uc7ac\uace0\ubcc0\uacbd":g})})})}),Object(f.jsx)(h.a,{path:"/cart",children:Object(f.jsx)(y,{})}),Object(f.jsx)(h.a,{path:"/:id",children:Object(f.jsx)("div",{children:"\uc544\ubb34\uac70\ub098 \uc801\uc5c7\uc744\ub584 \uc774\uac70 \ubcf4\uc5ec\uc92d"})})]})]})}},76:function(e,t,c){},78:function(e,t,c){},84:function(e,t,c){}},[[113,1,2]]]);
//# sourceMappingURL=main.d28736ef.chunk.js.map