(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6390:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(7111)}])},7111:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return N}});var n=s(1527),l=s(959),i=s(7368),r=s(9928),c=s(5260),a=s(9002),d=s(2445),h=s(5490),x=s(2698),o=s(8616),j=s(4917),u=s(544);let f=(0,u.io)("http://localhost:6969");var m=s(8082),b=s(1634),p=s(2662),w=s(1796);function v(e){let{height:t,header:s,divider:l,px:i,children:r}=e;return(0,n.jsxs)(m.X,{withBorder:!0,shadow:"xs",radius:"sm",h:t||500,children:[s&&(0,n.jsx)(b.M,{py:5,children:s}),l&&(0,n.jsx)(p.i,{}),(0,n.jsx)(w.x,{px:i,children:r})]})}var _=s(738),y=s(7376),Z=s(5720),g=s(7453);function S(){let{colorScheme:e,toggleColorScheme:t}=(0,_.X)(),s="dark"===e;return(0,n.jsx)(y.A,{maw:20,variant:"outline",color:s?"yellow":"blue",onClick:()=>t(),title:"Změnit motiv",children:s?(0,n.jsx)(Z.Z,{size:"1.1rem"}):(0,n.jsx)(g.Z,{size:"1.1rem"})})}function k(e){let{children:t}=e;return(0,n.jsxs)(a.K,{h:"100%",children:[(0,n.jsx)(m.X,{shadow:"xs",p:"sm",withBorder:!0,radius:0,children:(0,n.jsxs)(d.Z,{justify:"space-between",children:[(0,n.jsx)(c.x,{children:"Header"}),(0,n.jsx)(S,{})]})}),(0,n.jsx)(w.x,{h:"100%",px:"sm",children:t})]})}var E=s(5241),P=s.n(E),B=s(8891),C=s.n(B);function N(){let[e,t]=(0,l.useState)(f.connected),[s,u]=(0,l.useState)(new Date),[m,b]=(0,l.useState)(null),p={width:(0,i.h)(12),height:(0,i.h)(12)};return(0,l.useEffect)(()=>{function e(){t(!0)}function s(){t(!1)}function n(e){b(e)}return f.on("connect",e),f.on("disconnect",s),f.on("data",n),()=>{f.off("connect",e),f.off("disconnect",s),f.off("data",n)}},[]),(0,l.useEffect)(()=>{let e=setInterval(()=>u(new Date),1e3);return function(){clearInterval(e)}},[]),(0,n.jsx)(k,{children:(0,n.jsxs)(r.r,{h:"100%",children:[(0,n.jsx)(r.r.Col,{span:2,children:(0,n.jsx)(v,{divider:!0,px:"xs",height:"88vh",header:(0,n.jsx)(c.x,{fw:"bold",children:"Info"}),children:m&&(0,n.jsxs)(a.K,{gap:0,pt:"xs",children:[(0,n.jsxs)(d.Z,{justify:"space-between",children:[(0,n.jsx)(c.x,{children:"Stav Baterie"}),(0,n.jsxs)(c.x,{children:[m.battery," %"]})]}),(0,n.jsxs)(d.Z,{justify:"space-between",children:[(0,n.jsx)(c.x,{children:"Doba j\xedzdy"}),(0,n.jsx)(c.x,{children:C()(C()(s).diff(C()(1e3*m.start_time))).format("mm:ss")})]}),(0,n.jsxs)(d.Z,{justify:"space-between",children:[(0,n.jsx)(c.x,{children:"Počet Red Bullů"}),(0,n.jsx)(c.x,{children:m.n_objects})]}),(0,n.jsxs)(d.Z,{justify:"space-between",children:[(0,n.jsx)(c.x,{children:"Počet Ztracen\xfdch Red Bullů"}),(0,n.jsx)(c.x,{children:m.start_objects-m.n_objects})]})]})})}),(0,n.jsx)(r.r.Col,{span:8,children:(0,n.jsx)(v,{height:"88vh",children:(0,n.jsxs)(h.m,{defaultValue:"camera",classNames:P(),children:[(0,n.jsxs)(h.m.List,{children:[(0,n.jsx)(h.m.Tab,{value:"camera",styles:{tabLabel:{fontWeight:"bold"}},leftSection:(0,n.jsx)(x.Z,{style:p}),children:"Kamera"}),(0,n.jsx)(h.m.Tab,{value:"map",styles:{tabLabel:{fontWeight:"bold"}},leftSection:(0,n.jsx)(o.Z,{style:p}),children:"Mapa"}),(0,n.jsx)(h.m.Tab,{value:"charts",styles:{tabLabel:{fontWeight:"bold"}},leftSection:(0,n.jsx)(j.Z,{style:p}),children:"Grafy"})]}),(0,n.jsx)(h.m.Panel,{value:"camera",children:(0,n.jsx)("img",{src:"http://localhost:6969/video",alt:"camera feed",width:"100%"})}),(0,n.jsx)(h.m.Panel,{value:"map",children:(0,n.jsx)("img",{src:"http://localhost:6969/map",alt:"camera feed",width:"100%"})}),(0,n.jsx)(h.m.Panel,{value:"charts",children:"Settings tab content"})]})})}),(0,n.jsx)(r.r.Col,{span:2,children:(0,n.jsx)(v,{divider:!0,px:"xs",height:"88vh",header:(0,n.jsx)(c.x,{fw:"bold",children:"Feed"}),children:"3"})})]})})}},5241:function(e){e.exports={list:"Tabs_list__BpUkH"}}},function(e){e.O(0,[821,774,888,179],function(){return e(e.s=6390)}),_N_E=e.O()}]);