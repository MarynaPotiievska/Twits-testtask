"use strict";(self.webpackChunktwits_testtask=self.webpackChunktwits_testtask||[]).push([[204],{630:function(n,e,t){t.d(e,{Z:function(){return l}});var r,o=t(168),a=t(686),i=t(87),s=(0,a.Z)(i.rU)(r||(r=(0,o.Z)(["\n  display: block;\n  width: 196px;\n  padding: 14px 0;\n  text-align: center;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: calc(22 / 18);\n  color: #ebd8ff;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  cursor: pointer;\n\n  &:hover {\n    background: #ebd8ff;\n    color: #471ca9;\n  }\n"]))),c=t(184),l=function(n){var e=n.text,t=n.path;return(0,c.jsx)(s,{to:t,children:e})}},324:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r=t(165),o=t(433),a=t(861),i=t(439),s=t(791),c=t(924),l=t(596),p=t(243);p.Z.defaults.baseURL="https://6402478f302b5d671c37899f.mockapi.io/api/v1";var d,g,u,x,f,A,w,b,h,m,v=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.Z.get("/users");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Z=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.Z.put("/users/".concat(e),{followers:t});case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),k=t.p+"static/media/tweetImg@1x.d31e40bfacdeed2039b8.png",E=t.p+"static/media/tweetImg@2x.32d4985ebe7c6e341cc2.png",S=t(168),B=t(686),j=B.Z.div(d||(d=(0,S.Z)(["\n  position: relative;\n  width: 308px;\n  height: 388px;\n  padding: 36px;\n  text-align: center;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n"]))),J=B.Z.img(g||(g=(0,S.Z)(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n"]))),C=B.Z.img(u||(u=(0,S.Z)(["\n  margin-bottom: 88px;\n"]))),y=B.Z.span(x||(x=(0,S.Z)(["\n  position: absolute;\n  top: 222px;\n  left: 0;\n  width: 100%;\n  height: 8px;\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),X=B.Z.div(f||(f=(0,S.Z)(["\n  position: absolute;\n  top: 188px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ebd8ff;\n  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n    inset 0px -2.19582px 4.39163px #ae7be3,\n    inset 0px 4.39163px 3.29372px #fbf8ff;\n  border-radius: 50%;\n"]))),R=B.Z.img(A||(A=(0,S.Z)(["\n  border-radius: 50%;\n  background: #5736a3;\n"]))),U=B.Z.p(w||(w=(0,S.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  line-height: calc(24 / 20);\n  text-transform: uppercase;\n  color: #ebd8ff;\n\n  &:first-of-type {\n    margin-bottom: 16px;\n  }\n\n  &:last-of-type {\n    margin-bottom: 26px;\n  }\n"]))),H=B.Z.button(b||(b=(0,S.Z)(["\n  width: 196px;\n  padding: 14px 0;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: calc(22 / 18);\n  text-transform: uppercase;\n  color: #373737;\n  background-color: ",";\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n"])),(function(n){return n.following?"#5CD3A8":"#EBD8FF"})),Y=t(184),K=function(n){var e,t=n.tweet,o=n.setError,c=(null!==(e=JSON.parse(localStorage.getItem("followedId")))&&void 0!==e?e:[]).includes(t.id),l=(0,s.useState)(c),p=(0,i.Z)(l,2),d=p[0],g=p[1],u=function(n){return n.toLocaleString("en",{useGrouping:!0})},x=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z(t.id,t.followers);case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),o("Sorry, something went wrong. Please, try again.");case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}();return(0,Y.jsxs)(j,{children:[(0,Y.jsx)(J,{srcSet:"".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsSAAALEgHS3X78AAACf0lEQVRYhe2YsWsbMRTGf6/EhfPgQh1ohhraDB68xEOXLB0y928ONIuXDl7SwUMz5CDp4II72FAbvg7SBflyd5Jb6ruhPzgszk+6pw/pe0Im6RPtswE+m9muLkDSFHh7vJSqedF2Ap4MmLadRApdEQzgTNK47SRidEkwgLGkN20n0UTXBAOYSuq3nUQdXRSsB1xKOmk7kSpSk9oCd8ASV9Ey/4yAYUX8CsiBH75vhqtwo8TvFUXgS2J8mUfgq2+/A859e4bLv+m7l00Dpwi2BmZmtim9A8i9UYdmvTCzRcUYS0kLn1DKljuTNK4YK4Wdma0BJIVHlU3xvgpJ0YFjW3JPLEk9SYOSx7wK2vfhBH38U6wfZwbUnrdKjCWlrsoUBpKG/nlaLMU74HVsgNgKWwZi9YGPRR9Jd7jtFla1UKxzYOLbG5zwazPbSPrG/qpsYiJpmRgb40PQvgZ2fl6N2zAktsLyoH2BE2sBzHE+tfbtHbAqiTsJ+ma+f8EhAvRwE+pEEYglEfpW5n+XZrY3Ye9ju4pYat41GW8VwgnXOrEVVjXJTFJfUnkCg6D9k+c+VSV+Clvi1e1oxAQLjwxz3BacAlc8N8ieN07MbAvcBv8VW7fgECO/LVXoVoltyfeS8sKsgWvvT79qbhbGuNWAmd1LegBehqXc9z9LzG9hZnk87HjEVlhx6g6PButQLO9fxf9DSRdFyTazXYVYqQb++IdnsH9KSuIZcCUpBx5w3nQCnOK2VnmMEXDqjx2r4Dt18VWUt/ChDP39Gex7a8jEH2oPKibWkQvEkC1wU/at/xeI9cy7ZPJluibYwsy+t51EE10SrJMmX6Yrgv2tyR+N37K0DT2PXdG3AAAAAElFTkSuQmCC"," 1x, ").concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAsCAYAAACZmXFCAAAACXBIWXMAABYlAAAWJQFJUiTwAAAElklEQVR4nO2csW/bRhTGv1dEAWQgEhAFqAd5UAdl0BABSYZOBdq1f3OXDl6yeFAGDvJgDergAApQGagMvA73CNPi3fHIuwsj5f0AwTJNPj+Jn95993gUMfOfUEpWRHQbE4CZpwCWifI5eX7qO4HvjAUzj/pO4pxQgdX5yMwXfSdxLqjA6gwBvO87iXNBBWZnzMyLvpM4B1RgbmbMPOs7iVNHBeZnwcyTvpM4ZVRgzSzV9HdHBdbMEMB7Zn7RdyKniAosjDGAt30ncYqowMJR098BFVg71PS3JJevOAC4A/Agzx9gvMwAwAjABEBX43wA8BXAVp4/yvYhgDcAXkXEDmHJzNdEtM/4P1ysYF57lQGAD4H7tmUEIKofmFpg9wAKIrpv2lEqwRxGbCEcANwCWBPRo2OfW4k9ldg5hFaa/mtPHrn4evzeema4tX3bwswxhwNIK7BWKxHkxV+Lr3nbkMudxA86oUS0AbBh5jmM0FJTmv5VhthnRSoPdtN1mYsc5ztRBRHddKkWRFQAKLrkFYCa/gBSCKwgoruuB0uJd1WZrYikM5lFpqa/gdghcucTgKytGgF4CeBfAF+I6FD5+wDArzC+5pg9PJVNjh3BvIZHn98gokKEkEMMfZp+H1OH+GseVt5LWzWO9rCxAvts2ygJLwH8bPlbURHlEnZxAcCGiB4c8S/l2BeVbQ8A7jyCL2DEnJo+Tb+PK8f2DZ5m3iUD5PGqUUPk3lM1rOIS5sz8hyyHce0DGGNfQ8T1AfUPx1BiW6fVkmuuKqOdfgcxFWxr28jMV3gunD1MH+yYEUxbo2RcyefeVb3Q3JeZMfPWIf5/YB8KUjBj5j1MO0URYgTmEsDl0e+FtA28MPMSwNQXW6qXa0itcoXn4i3ZBRwbwwJmCFKEqCHSsT1EAF1jh96Q8dqx/Vt4JK1gFb7XJSiuvEIF4jrJuU9+gXw+7ySJqWADx/bY61+Ae3ocOsS5hu8U1dXFOrZnd47ECMw1XB3P/i6YeVJ5hAxz1n5Vi5mgdQICM5HIwZ6IrC2bH50YgVn7LCKC6mWjOUz/qXyEXJ0feDrkNw3Hrj2TiuMJSAr2AK4zxD0LooZIlwiIaAW7HznAXV2O8Qn4b0fswlVJpH2SY4j85Gmp/PDEmvw5HJ/e8hpgRYSPRNSmTTBl5jUR1TydxPlLYg9gxLVr6KTn6FQXtvyUJ2Ivdk9kSYwTIrqXR5ce1DvfzRYSdys/neKSHFNXLzX1AaRYTTFvElkT0kC1+aMxzHdFdK60mdaEqakPJNV6sDkzL9oKgZkHcu3Qdm2xZALgt7b3JlZiJxcX1NQHk7LROgNwycwFzLVEZztBvNMljJEPyWEI4Hdm3sD4Hl/scunJL4Gx29KnqR9aPmhth/6hZSl0tv4gZfwCuh1Mw7M0wRcwJ/wNEqxDA/BF4v8Hs95siKcbSnJRNPku/QK65+S8VDSWR47eUxn7W6KmvgN6X2QYauo7ogJrRk19BCqwZrRTH4EKzM9KO/VxqMDcrGO/0lxRgbnYqalPgwqszh7Ap76TOBdUYHXU1CdEBfYcNfWJ+R8cJrXGOYuS/wAAAABJRU5ErkJggg=="," 2x"),alt:"Logo"}),(0,Y.jsx)(C,{srcSet:"".concat(k," 1x, ").concat(E," 2x"),alt:"Tweet"}),(0,Y.jsx)(y,{}),(0,Y.jsx)(X,{children:(0,Y.jsx)(R,{src:t.avatar,alt:t.user})}),(0,Y.jsxs)(U,{children:[(0,Y.jsx)("span",{children:u(t.tweets)})," tweets"]}),(0,Y.jsxs)(U,{children:[(0,Y.jsx)("span",{children:u(t.followers)})," Followers"]}),(0,Y.jsx)(H,{type:"button",following:d,onClick:function(){var n,e=null!==(n=JSON.parse(localStorage.getItem("followedId")))&&void 0!==n?n:[];if(g((function(n){return!n})),d){t.followers-=1;var r=e.findIndex((function(n){return n===t.id}));console.log("index",r),console.log("id",t.id,"followers",t.followers),e.splice(r,1)}else t.followers+=1,e.push(t.id),console.log("id",t.id,"followers",t.followers);localStorage.setItem("followedId",JSON.stringify(e)),x()},children:d?"Following":"Follow"})]})},F=B.Z.ul(h||(h=(0,S.Z)(["\n  width: 80%;\n  margin: 0 auto;\n  margin-bottom: 48px;\n  padding-top: 60px;\n  display: flex;\n  justify-content: center;\n  gap: 48px;\n  flex-wrap: wrap;\n"]))),M=function(n){var e=n.tweets,t=n.setError;return(0,Y.jsx)(F,{children:e.length>0&&e.map((function(n){return(0,Y.jsx)("li",{children:(0,Y.jsx)(K,{tweet:n,setError:t})},n.id)}))})},O=B.Z.button(m||(m=(0,S.Z)(["\n  display: block;\n  width: 196px;\n  margin: 0 auto;\n  padding: 14px 0;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: calc(22 / 18);\n  text-transform: uppercase;\n  color: #ebd8ff;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n\n  &:hover {\n    background: #ebd8ff;\n    color: #471ca9;\n  }\n\n  &:disabled {\n    background: rgb(55, 55, 55, 0.8);\n    color: #ebd8ff;\n    cursor: not-allowed;\n  }\n"]))),V=function(n){var e=n.onClick,t=n.disable;return(0,Y.jsx)(O,{type:"button",disabled:t,onClick:e,children:"LoadMore"})},z=t(630),P=function(){var n=(0,s.useState)([]),e=(0,i.Z)(n,2),t=e[0],p=e[1],d=(0,s.useState)(null),g=(0,i.Z)(d,2),u=g[0],x=g[1],f=(0,s.useState)(!1),A=(0,i.Z)(f,2),w=A[0],b=A[1],h=12===t.length,m=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,b(!0),n.next=4,v();case 4:e=n.sent,p((function(n){return[].concat((0,o.Z)(n),[e[n.length],e[n.length+1],e[n.length+2]])})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),x("Sorry, something went wrong. Please, try again.");case 11:return n.prev=11,b(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();return(0,c.Z)((function(){m()})),(0,Y.jsxs)("main",{children:[w&&(0,Y.jsx)("p",{children:"Loading..."}),u&&(0,Y.jsx)(l.Ix,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light",children:u}),(0,Y.jsx)(z.Z,{path:"/",text:"Back"}),(0,Y.jsx)(M,{tweets:t,setError:x}),!w&&(0,Y.jsx)(V,{onClick:function(){m()},disable:h})]})}}}]);
//# sourceMappingURL=204.91779f36.chunk.js.map