(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6390:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7111)}])},7111:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var s=n(1527),l=n(959),a=n(7368),c=n(9928),i=n(5260),r=n(9002),o=n(2445),d=n(5607),h=n(8082),x=n(9920),j=n(7659),u=n(2698),f=n(8616),m=n(4917),p=n(544);let b=(0,p.io)("http://localhost:6969");var w=n(1634),y=n(2662),v=n(6595);function _(e){let{height:t,header:n,divider:l,px:a,children:c}=e;return(0,s.jsxs)(h.X,{withBorder:!0,shadow:"xs",radius:"sm",h:t||500,children:[n&&(0,s.jsx)(w.M,{py:5,children:n}),l&&(0,s.jsx)(y.i,{}),(0,s.jsx)(v.x,{px:a,h:"100%",children:c})]})}var g=n(738),Z=n(1546),k=n(5720),S=n(7453);function B(){let{colorScheme:e,toggleColorScheme:t}=(0,g.X)(),n="dark"===e;return(0,s.jsx)(Z.A,{maw:20,variant:"outline",color:n?"yellow":"blue",onClick:()=>t(),title:"Změnit motiv",children:n?(0,s.jsx)(k.Z,{size:"1.1rem"}):(0,s.jsx)(S.Z,{size:"1.1rem"})})}function z(e){let{children:t}=e;return(0,s.jsxs)(r.K,{h:"100%",children:[(0,s.jsx)(h.X,{shadow:"xs",p:"sm",withBorder:!0,radius:0,children:(0,s.jsxs)(o.Z,{justify:"space-between",children:[(0,s.jsx)(i.x,{children:"Header"}),(0,s.jsx)(B,{})]})}),(0,s.jsx)(v.x,{h:"100%",px:"sm",children:t})]})}var C=n(5241),L=n.n(C),P=n(8891),E=n.n(P);function N(){let[e,t]=(0,l.useState)(b.connected),[n,p]=(0,l.useState)(new Date),[w,y]=(0,l.useState)(1),[v,g]=(0,l.useState)(null),[Z,k]=(0,l.useState)([{content:"Ztratil jsem Red Bull. Lokace byla označena na mapě."},{content:"Ztratil jsem Red Bull. Lokace byla označena na mapě."},{content:"Ztratil jsem Red Bull. Lokace byla označena na mapě."},{content:"Ztratil jsem Red Bull. Lokace byla označena na mapě."}]),S={width:(0,a.h)(12),height:(0,a.h)(12)};async function B(e){let t=await fetch("http://localhost:6969/command",{method:"POST",body:JSON.stringify({command:e,dest:w})});console.log(t.status)}return(0,l.useEffect)(()=>{function e(){t(!0)}function n(){t(!1)}function s(e){g(e)}return b.on("connect",e),b.on("disconnect",n),b.on("data",s),()=>{b.off("connect",e),b.off("disconnect",n),b.off("data",s)}},[]),(0,l.useEffect)(()=>{let e=setInterval(()=>p(new Date),1e3);return function(){clearInterval(e)}},[]),(0,s.jsx)(z,{children:(0,s.jsxs)(c.r,{h:"100%",children:[(0,s.jsx)(c.r.Col,{span:2,children:(0,s.jsx)(_,{divider:!0,px:"xs",height:980,header:(0,s.jsx)(i.x,{fw:"bold",children:"Info"}),children:v&&(0,s.jsxs)(r.K,{gap:0,pt:"xs",children:[(0,s.jsxs)(o.Z,{justify:"space-between",children:[(0,s.jsx)(i.x,{children:"Stav Baterie"}),(0,s.jsxs)(i.x,{children:[v.battery," %"]})]}),(0,s.jsxs)(o.Z,{justify:"space-between",children:[(0,s.jsx)(i.x,{children:"Doba j\xedzdy"}),(0,s.jsx)(i.x,{children:E()(E()(n).diff(E()(1e3*v.start_time))).format("mm:ss")})]}),(0,s.jsxs)(o.Z,{justify:"space-between",children:[(0,s.jsx)(i.x,{children:"Počet Red Bullů"}),(0,s.jsx)(i.x,{children:v.n_objects})]}),(0,s.jsxs)(o.Z,{justify:"space-between",children:[(0,s.jsx)(i.x,{children:"Počet Ztracen\xfdch Red Bullů"}),(0,s.jsx)(i.x,{children:v.start_objects-v.n_objects})]})]})})}),(0,s.jsx)(c.r.Col,{span:8,children:(0,s.jsx)(_,{height:980,children:(0,s.jsxs)(d.m,{defaultValue:"camera",classNames:L(),children:[(0,s.jsxs)(d.m.List,{children:[(0,s.jsx)(d.m.Tab,{value:"camera",styles:{tabLabel:{fontWeight:"bold"}},leftSection:(0,s.jsx)(u.Z,{style:S}),children:"Kamera"}),(0,s.jsx)(d.m.Tab,{value:"map",styles:{tabLabel:{fontWeight:"bold"}},leftSection:(0,s.jsx)(f.Z,{style:S}),children:"Mapa"}),(0,s.jsx)(d.m.Tab,{value:"charts",styles:{tabLabel:{fontWeight:"bold"}},leftSection:(0,s.jsx)(m.Z,{style:S}),children:"Grafy"})]}),(0,s.jsx)(d.m.Panel,{value:"camera",children:(0,s.jsx)("img",{src:"http://localhost:6969/video",alt:"camera feed",width:"100%"})}),(0,s.jsx)(d.m.Panel,{value:"map",children:(0,s.jsx)("img",{src:"http://localhost:6969/map",alt:"camera feed",width:"100%"})}),(0,s.jsx)(d.m.Panel,{value:"charts",children:"Settings tab content"})]})})}),(0,s.jsx)(c.r.Col,{span:2,children:(0,s.jsx)(_,{divider:!0,px:"xs",height:980,header:(0,s.jsx)(i.x,{fw:"bold",children:"Feed"}),children:(0,s.jsxs)(r.K,{h:920,justify:"space-between",mt:"xs",children:[(0,s.jsx)(r.K,{children:Z.map(e=>(0,s.jsx)(h.X,{p:"sm",radius:"md",style:e=>({background:e.colors.blue[7],color:"white"}),children:e.content}))}),(0,s.jsxs)(o.Z,{grow:!0,gap:5,children:[(0,s.jsx)(x.z,{variant:"filled",color:"green.8",onClick:()=>B("start"),children:"Start"}),(0,s.jsx)(x.z,{variant:"filled",color:"red.8",onClick:()=>B("stop"),children:"Stop"}),(0,s.jsx)(j.Y,{value:w,onChange:e=>y(+e)})]})]})})})]})})}},5241:function(e){e.exports={list:"Tabs_list__BpUkH"}}},function(e){e.O(0,[964,774,888,179],function(){return e(e.s=6390)}),_N_E=e.O()}]);