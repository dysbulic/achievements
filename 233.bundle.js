"use strict";(self.webpackChunk_chievemints_ui=self.webpackChunk_chievemints_ui||[]).push([[233],{87233:(e,t,n)=>{n.r(t),n.d(t,{New:()=>k,default:()=>v});var r=n(64033),a=n(33541),l=n(54805),c=n(69204),i=n(80038),o=n(86915),m=n(70691),s=n(79338),u=n(14738),E=n(2784),d=n(18813),h=n(63955),w=n(23244),f=n(60146),p=n(18671),b=n(62833);const k=()=>E.createElement(r.W2,{maxW:"full"},E.createElement(p.q,null,E.createElement("title",null,"’𝖈𝖍𝖎𝖊𝖛𝖊: Ⲛⲉⲱ Ⲧⲟⲕⲉⲛ")),E.createElement(a.m$.header,null,E.createElement(r.kC,{justify:"center"},E.createElement(d.h4,{my:"7vh",maxW:"xl"}))),E.createElement(a.m$.main,null,E.createElement(y,null))),y=()=>{const{ensProvider:e,roContract:t,rwContract:n,connecting:p,connect:k,chain:y,address:v}=(0,u.$6)(),[g,C]=(0,b.lr)({tokenId:""}),x=g.get("tokenId"),[T,I]=(0,E.useState)(Array.isArray(x)?x[0]:x),[$,A]=(0,E.useState)([]),[N,S]=(0,E.useState)(!1),{register:_,handleSubmit:j}=(0,h.cI)(),P=(0,l.pm)();(0,E.useEffect)((()=>{"string"==typeof x&&I(x)}),[x]),(0,E.useEffect)((()=>{(async()=>{if(t){const e=await t.roleIndexForName("ReservedLast")-1,n=await Promise.all(Array.from({length:e}).map((async(e,n)=>await t.roleNameByIndex(n+1))));A(n)}})()}),[t]);const R=(0,E.useCallback)((async r=>{S(!0);try{if(!n)throw new Error("Connect your wallet to reserve an id.");if(!t)throw new Error("Library not loaded.");const a=[],l=[];await Promise.all(Object.entries(r).map((async([e,t])=>{if("boolean"==typeof t&&t){const[,t,r]=e.match(/^(grant|disable)\((.+)\)$/)??[],c=await n.roleIndexForName(r);switch(t){case"grant":a.push(c);break;case"disable":l.push(c);break;default:throw new Error(`Unknown operation: ${t}`)}}})));let{maintainer:c}=r;if(""===c&&(c=v),null==c)throw new Error("`maintainer` is not set.");if(c.includes(".")){if(!e)throw new Error("ENS provider not defined.");c=await e.resolveName(c)??void 0}const i=await n["create(address,uint8[],uint8[])"](c,a,l),o=(await i.wait()).events.find((e=>"Created"===e.event));if(!o)throw new Error("Couldn’t find a creation event.");const[m]=o.args;I(m.toHexString())}catch(e){P({title:"Creation Error",description:(0,f.B9)(e),status:"error",isClosable:!0,duration:1e4}),console.error(e.stack)}finally{S(!1)}}),[v,e,t,n,P]);return n&&T&&!N?E.createElement(d.g_,{tokenId:T}):E.createElement(r.M5,null,E.createElement(r.Kq,null,E.createElement(r.X6,{textAlign:"center"},"Create a New Token Type"),p?E.createElement(r.kC,{justify:"center"},E.createElement(c.$,{thickness:"4px"}),E.createElement(r.xv,{ml:2},"Connecting…")):N?E.createElement(r.kC,{justify:"center",mt:7},E.createElement(c.$,null),E.createElement(r.xv,{ml:2},"Reserving your token…")):T?E.createElement(r.xv,null,"¿How’d we get here?"):E.createElement(r.Kq,{as:"form",onSubmit:j(R)},E.createElement(r.kC,{align:"center"},E.createElement(a.m$.label,{mr:3},"Admin:"),E.createElement(i.II,{..._("maintainer"),placeholder:"Maintainer Address (default Creator)"})),E.createElement(o.iA,{mb:5},E.createElement(o.hr,null,E.createElement(o.Tr,null,E.createElement(o.Th,null,"Role"),E.createElement(o.Th,null,E.createElement(m.u,{label:"Give the admin these roles:"},"Grant")),E.createElement(o.Th,null,E.createElement(m.u,{label:"Prevent these permissions from being checked:"},"Disable")),E.createElement(o.Th,null,"Description"))),E.createElement(o.p3,null,$.map(((e,t)=>E.createElement(o.Tr,{key:t},E.createElement(o.Td,null,e),E.createElement(o.Td,{textAlign:"center"},E.createElement(s.XZ,{..._(`grant(${e})`)})),E.createElement(o.Td,{textAlign:"center"},E.createElement(s.XZ,{..._(`disable(${e})`)})),E.createElement(o.Td,null,w.mI[e])))))),E.createElement(d.Mm,{purpose:"create",label:"Reserve an ID"}))))},v=k}}]);