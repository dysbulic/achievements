(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[669],{41135:function(e,n,t){"use strict";t.d(n,{bZ:function(){return v},X:function(){return x},zM:function(){return _},Cd:function(){return p}});var r=t(41215),a=t(71425),c=t(72034),i=t(2784),o=t(62381);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}var u=function(e){return i.createElement(o.JO,s({viewBox:"0 0 24 24"},e),i.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))},l=["status"],f={info:{icon:function(e){return i.createElement(o.JO,s({viewBox:"0 0 24 24"},e),i.createElement("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"}))},colorScheme:"blue"},warning:{icon:u,colorScheme:"orange"},success:{icon:function(e){return i.createElement(o.JO,s({viewBox:"0 0 24 24"},e),i.createElement("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"}))},colorScheme:"green"},error:{icon:u,colorScheme:"red"}},d=(0,c.kr)({name:"AlertContext",errorMessage:"useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`"}),m=d[0],h=d[1],v=(0,r.Gp)((function(e,n){var t,c=(0,r.Lr)(e),o=c.status,u=void 0===o?"info":o,d=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(c,l),h=null!=(t=e.colorScheme)?t:f[u].colorScheme,v=(0,r.jC)("Alert",s({},e,{colorScheme:h})),p=s({width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden"},v.container);return i.createElement(m,{value:{status:u}},i.createElement(r.Fo,{value:v},i.createElement(r.m$.div,s({role:"alert",ref:n},d,{className:(0,a.cx)("chakra-alert",e.className),__css:p}))))})),p=(0,r.Gp)((function(e,n){var t=(0,r.yK)();return i.createElement(r.m$.div,s({ref:n},e,{className:(0,a.cx)("chakra-alert__title",e.className),__css:t.title}))})),x=(0,r.Gp)((function(e,n){var t=s({display:"inline"},(0,r.yK)().description);return i.createElement(r.m$.div,s({ref:n},e,{className:(0,a.cx)("chakra-alert__desc",e.className),__css:t}))})),_=function(e){var n=h().status,t=f[n].icon,c=(0,r.yK)();return i.createElement(r.m$.span,s({display:"inherit"},e,{className:(0,a.cx)("chakra-alert__icon",e.className),__css:c.icon}),i.createElement(t,{w:"100%",h:"100%"}))}},38566:function(e,n,t){"use strict";t.d(n,{F:function(){return r},U:function(){return a}});var r=t(34406).env.IPFS_LINK_PATTERN||"https://ipfs.infura.io/ipfs/{cid}/{path}",a="https://metafam.github.io/chievemints/view"},10508:function(e,n,t){"use strict";t.d(n,{_m:function(){return i},kC:function(){return o},xb:function(){return s}});var r=t(8529),a=t(75361),c=t(38566),i=function(e){var n,t=null!==(n=null===e||void 0===e?void 0:e.match(/^(?:ipfs|dweb):(?:\/\/)?([^/]+)(?:\/(.*))?$/))&&void 0!==n?n:[],i=(0,r.Z)(t,3),o=i[1],s=i[2];if(o){var u=a.CID.parse(o),l=u.toV0().toString(),f=u.toV1().toString(),d=c.F;return encodeURI(d.replace(/{cid}/g,o).replace(/{v0cid}/g,l).replace(/{v1cid}/g,f).replace(/{path}/g,null!==s&&void 0!==s?s:"")).replace(/#/g,"%23")}if(!e)throw new Error("URI undefined for ".concat(e));return e},o=function(e){return null!==e&&void 0!==e&&e.split?e.trim().split(/\s+/g).map((function(e){var n,t,r,a;return"".concat(null!==(n=null===(t=e[0])||void 0===t?void 0:t.toUpperCase())&&void 0!==n?n:"").concat(null!==(r=null===(a=e.substring(1))||void 0===a?void 0:a.toLowerCase())&&void 0!==r?r:"")})).join(" "):e},s=function(e){return Array.isArray(e)?0===e.length:e instanceof Object?0===Object.keys(e).length:""===e}},47635:function(e,n,t){"use strict";t.r(n);var r=t(20406),a=t(28526),c=t.n(a),i=t(2784),o=t(41215),s=t(41135),u=t(64033),l=t(69204),f=t(91506),d=t(20488),m=t(14634),h=t(54997),v=t(97729),p=t(5632),x=t(75248),_=t(10508),g=t(25918),w=t(42360),j=t(52322),E=(0,o.m$)(x.D);n.default=function(){var e=(0,p.useRouter)().query.nft_id,n=(0,i.useState)(),t=n[0],a=n[1],x=(0,i.useState)(),k=x[0],y=x[1],N=(0,i.useMemo)((function(){return new d.r("https://polygon-rpc.com")}),[]),b=(0,i.useMemo)((function(){return N?new m.CH(g.Z,w.Z,N):null}),[N]);if((0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var t,r,i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!b||!e){n.next=21;break}return n.prev=1,n.next=4,b.uri(h.O$.from(Number(e)));case 4:if(t=n.sent,r=(0,_._m)(t)){n.next=8;break}throw new Error("Couldn't find metadata for token #".concat(e,"."));case 8:return n.next=10,fetch(r);case 10:return i=n.sent,n.t0=a,n.next=14,i.json();case 14:n.t1=n.sent,(0,n.t0)(n.t1),n.next=21;break;case 18:n.prev=18,n.t2=n.catch(1),y(n.t2.message);case 21:case"end":return n.stop()}}),n,null,[[1,18]])})));return function(){return n.apply(this,arguments)}}();n()}),[b,e]),k)return(0,j.jsxs)(s.bZ,{status:"error",children:[(0,j.jsx)(s.zM,{}),(0,j.jsx)(s.Cd,{mr:2,children:"Error: Loading NFT"}),(0,j.jsx)(s.X,{children:k})]});if(!t)return(0,j.jsxs)(u.kC,{align:"center",justify:"center",h:"100vh",children:[(0,j.jsx)(l.$,{thickness:"4px",speed:"1s",mr:2}),(0,j.jsxs)(u.xv,{children:["Loading Metadata For Token #",e]})]});var C=t.name,A=t.image,Z=t.animation_url,M=t.description;return(0,j.jsxs)(u.Kq,{align:"center",children:[(0,j.jsxs)(v.default,{children:[(0,j.jsxs)("title",{children:["View NFT #",e]}),(0,j.jsx)("meta",{name:"description",content:"MetaGame\u2019s \u2019Chievemint NFTs"})]}),C&&(0,j.jsx)(u.X6,{children:C}),A&&(0,j.jsx)(f.Ee,{src:(0,_._m)(A),alt:C,maxW:72,maxH:72}),M&&(0,j.jsx)(E,{sx:{a:{textDecoration:"underline"}},children:M}),Z&&(0,j.jsx)(o.m$.video,{maxW:96,maxH:96,controls:!0,autoPlay:!0,loop:!0,muted:!0,children:(0,j.jsx)(o.m$.source,{src:(0,_._m)(Z)})})]})}},83026:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/view/[nft_id]",function(){return t(47635)}])},5632:function(e,n,t){e.exports=t(25564)}},function(e){e.O(0,[801,724,774,888,179],(function(){return n=83026,e(e.s=n);var n}));var n=e.O();_N_E=n}]);