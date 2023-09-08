"use strict";(self.webpackChunkmedusa_starter_default=self.webpackChunkmedusa_starter_default||[]).push([[623],{50937:(e,t,n)=>{function r(e){return e.split("-")[1]}function o(e){return"y"===e?"height":"width"}function i(e){return e.split("-")[0]}function l(e){return["top","bottom"].includes(i(e))?"x":"y"}function a(e,t,n){let a,{reference:s,floating:c}=e,f=s.x+s.width/2-c.width/2,u=s.y+s.height/2-c.height/2,d=l(t),p=o(d),h=s[p]/2-c[p]/2,m="x"===d;switch(i(t)){case"top":a={x:f,y:s.y-c.height};break;case"bottom":a={x:f,y:s.y+s.height};break;case"right":a={x:s.x+s.width,y:u};break;case"left":a={x:s.x-c.width,y:u};break;default:a={x:s.x,y:s.y}}switch(r(t)){case"start":a[d]-=h*(n&&m?-1:1);break;case"end":a[d]+=h*(n&&m?-1:1)}return a}n.d(t,{Cp:()=>L,JB:()=>u,Qo:()=>D,RR:()=>T,US:()=>d,X5:()=>C,cv:()=>O,dp:()=>H,dr:()=>_,oo:()=>s,uY:()=>M,x7:()=>g});let s=async(e,t,n)=>{let{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:l}=n,s=i.filter(Boolean),c=await (null==l.isRTL?void 0:l.isRTL(t)),f=await l.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=a(f,r,c),p=r,h={},m=0;for(let n=0;n<s.length;n++){let{name:i,fn:g}=s[n],{x:y,y:w,data:x,reset:v}=await g({x:u,y:d,initialPlacement:r,placement:p,strategy:o,middlewareData:h,rects:f,platform:l,elements:{reference:e,floating:t}});u=null!=y?y:u,d=null!=w?w:d,h={...h,[i]:{...h[i],...x}},v&&m<=50&&(m++,"object"==typeof v&&(v.placement&&(p=v.placement),v.rects&&(f=!0===v.rects?await l.getElementRects({reference:e,floating:t,strategy:o}):v.rects),{x:u,y:d}=a(f,p,c)),n=-1)}return{x:u,y:d,placement:p,strategy:o,middlewareData:h}};function c(e,t){return"function"==typeof e?e(t):e}function f(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function u(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function d(e,t){var n;void 0===t&&(t={});let{x:r,y:o,platform:i,rects:l,elements:a,strategy:s}=e,{boundary:d="clippingAncestors",rootBoundary:p="viewport",elementContext:h="floating",altBoundary:m=!1,padding:g=0}=c(t,e),y=f(g),w=a[m?"floating"===h?"reference":"floating":h],x=u(await i.getClippingRect({element:null==(n=await (null==i.isElement?void 0:i.isElement(w)))||n?w:w.contextElement||await (null==i.getDocumentElement?void 0:i.getDocumentElement(a.floating)),boundary:d,rootBoundary:p,strategy:s})),v="floating"===h?{...l.floating,x:r,y:o}:l.reference,b=await (null==i.getOffsetParent?void 0:i.getOffsetParent(a.floating)),E=await (null==i.isElement?void 0:i.isElement(b))&&await (null==i.getScale?void 0:i.getScale(b))||{x:1,y:1},R=u(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:b,strategy:s}):v);return{top:(x.top-R.top+y.top)/E.y,bottom:(R.bottom-x.bottom+y.bottom)/E.y,left:(x.left-R.left+y.left)/E.x,right:(R.right-x.right+y.right)/E.x}}let p=Math.min,h=Math.max;function m(e,t,n){return h(e,p(t,n))}let g=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:i,placement:a,rects:s,platform:u,elements:d}=t,{element:h,padding:g=0}=c(e,t)||{};if(null==h)return{};let y=f(g),w={x:n,y:i},x=l(a),v=o(x),b=await u.getDimensions(h),E="y"===x,R=E?"clientHeight":"clientWidth",C=s.reference[v]+s.reference[x]-w[x]-s.floating[v],T=w[x]-s.reference[x],A=await (null==u.getOffsetParent?void 0:u.getOffsetParent(h)),P=A?A[R]:0;P&&await (null==u.isElement?void 0:u.isElement(A))||(P=d.floating[R]||s.floating[v]);let L=P/2-b[v]/2-1,S=p(y[E?"top":"left"],L),D=p(y[E?"bottom":"right"],L),O=P-b[v]-D,k=P/2-b[v]/2+(C/2-T/2),M=m(S,k,O),_=null!=r(a)&&k!=M&&s.reference[v]/2-(k<S?S:D)-b[v]/2<0?k<S?S-k:O-k:0;return{[x]:w[x]-_,data:{[x]:M,centerOffset:k-M+_}}}}),y=["top","right","bottom","left"],w=y.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]),x={left:"right",right:"left",bottom:"top",top:"bottom"};function v(e){return e.replace(/left|right|bottom|top/g,e=>x[e])}function b(e,t,n){void 0===n&&(n=!1);let i=r(e),a=l(e),s=o(a),c="x"===a?i===(n?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[s]>t.floating[s]&&(c=v(c)),{main:c,cross:v(c)}}let E={start:"end",end:"start"};function R(e){return e.replace(/start|end/g,e=>E[e])}let C=function(e){return void 0===e&&(e={}),{name:"autoPlacement",options:e,async fn(t){var n,o,l,a;let{rects:s,middlewareData:f,placement:u,platform:p,elements:h}=t,{crossAxis:m=!1,alignment:g,allowedPlacements:y=w,autoAlignment:x=!0,...v}=c(e,t),E=void 0!==g||y===w?((a=g||null)?[...y.filter(e=>r(e)===a),...y.filter(e=>r(e)!==a)]:y.filter(e=>i(e)===e)).filter(e=>!a||r(e)===a||!!x&&R(e)!==e):y,C=await d(t,v),T=(null==(n=f.autoPlacement)?void 0:n.index)||0,A=E[T];if(null==A)return{};let{main:P,cross:L}=b(A,s,await (null==p.isRTL?void 0:p.isRTL(h.floating)));if(u!==A)return{reset:{placement:E[0]}};let S=[C[i(A)],C[P],C[L]],D=[...(null==(o=f.autoPlacement)?void 0:o.overflows)||[],{placement:A,overflows:S}],O=E[T+1];if(O)return{data:{index:T+1,overflows:D},reset:{placement:O}};let k=D.map(e=>{let t=r(e.placement);return[e.placement,t&&m?e.overflows.slice(0,2).reduce((e,t)=>e+t,0):e.overflows[0],e.overflows]}).sort((e,t)=>e[1]-t[1]),M=(null==(l=k.filter(e=>e[2].slice(0,r(e[0])?2:3).every(e=>e<=0))[0])?void 0:l[0])||k[0][0];return M!==u?{data:{index:T+1,overflows:D},reset:{placement:M}}:{}}}},T=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,o,l,a;let{placement:s,middlewareData:f,rects:u,initialPlacement:p,platform:h,elements:m}=t,{mainAxis:g=!0,crossAxis:y=!0,fallbackPlacements:w,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:C=!0,...T}=c(e,t),A=i(s),P=i(p)===p,L=await (null==h.isRTL?void 0:h.isRTL(m.floating)),S=w||(P||!C?[v(p)]:function(e){let t=v(e);return[R(e),t,R(t)]}(p));w||"none"===E||S.push(...function(e,t,n,o){let l=r(e),a=function(e,t,n){let r=["left","right"],o=["right","left"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(i(e),"start"===n,o);return l&&(a=a.map(e=>e+"-"+l),t&&(a=a.concat(a.map(R)))),a}(p,C,E,L));let D=[p,...S],O=await d(t,T),k=[],M=(null==(n=f.flip)?void 0:n.overflows)||[];if(g&&k.push(O[A]),y){let{main:e,cross:t}=b(s,u,L);k.push(O[e],O[t])}if(M=[...M,{placement:s,overflows:k}],!k.every(e=>e<=0)){let e=((null==(o=f.flip)?void 0:o.index)||0)+1,t=D[e];if(t)return{data:{index:e,overflows:M},reset:{placement:t}};let n=null==(l=M.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:l.placement;if(!n)switch(x){case"bestFit":{let e=null==(a=M.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:a[0];e&&(n=e);break}case"initialPlacement":n=p}if(s!==n)return{reset:{placement:n}}}return{}}}};function A(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function P(e){return y.some(t=>e[t]>=0)}let L=function(e){return void 0===e&&(e={}),{name:"hide",options:e,async fn(t){let{rects:n}=t,{strategy:r="referenceHidden",...o}=c(e,t);switch(r){case"referenceHidden":{let e=A(await d(t,{...o,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:P(e)}}}case"escaped":{let e=A(await d(t,{...o,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:P(e)}}}default:return{}}}}};function S(e){let t=p(...e.map(e=>e.left)),n=p(...e.map(e=>e.top));return{x:t,y:n,width:h(...e.map(e=>e.right))-t,height:h(...e.map(e=>e.bottom))-n}}let D=function(e){return void 0===e&&(e={}),{name:"inline",options:e,async fn(t){let{placement:n,elements:r,rects:o,platform:a,strategy:s}=t,{padding:d=2,x:m,y:g}=c(e,t),y=Array.from(await (null==a.getClientRects?void 0:a.getClientRects(r.reference))||[]),w=function(e){let t=e.slice().sort((e,t)=>e.y-t.y),n=[],r=null;for(let e=0;e<t.length;e++){let o=t[e];!r||o.y-r.y>r.height/2?n.push([o]):n[n.length-1].push(o),r=o}return n.map(e=>u(S(e)))}(y),x=u(S(y)),v=f(d),b=await a.getElementRects({reference:{getBoundingClientRect:function(){if(2===w.length&&w[0].left>w[1].right&&null!=m&&null!=g)return w.find(e=>m>e.left-v.left&&m<e.right+v.right&&g>e.top-v.top&&g<e.bottom+v.bottom)||x;if(w.length>=2){if("x"===l(n)){let e=w[0],t=w[w.length-1],r="top"===i(n),o=e.top,l=t.bottom,a=r?e.left:t.left,s=r?e.right:t.right;return{top:o,bottom:l,left:a,right:s,width:s-a,height:l-o,x:a,y:o}}let e="left"===i(n),t=h(...w.map(e=>e.right)),r=p(...w.map(e=>e.left)),o=w.filter(n=>e?n.left===r:n.right===t),a=o[0].top,s=o[o.length-1].bottom;return{top:a,bottom:s,left:r,right:t,width:t-r,height:s-a,x:r,y:a}}return x}},floating:r.floating,strategy:s});return o.reference.x!==b.reference.x||o.reference.y!==b.reference.y||o.reference.width!==b.reference.width||o.reference.height!==b.reference.height?{reset:{rects:b}}:{}}}},O=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){let{x:n,y:o}=t,a=await async function(e,t){let{placement:n,platform:o,elements:a}=e,s=await (null==o.isRTL?void 0:o.isRTL(a.floating)),f=i(n),u=r(n),d="x"===l(n),p=["left","top"].includes(f)?-1:1,h=s&&d?-1:1,m=c(t,e),{mainAxis:g,crossAxis:y,alignmentAxis:w}="number"==typeof m?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m};return u&&"number"==typeof w&&(y="end"===u?-1*w:w),d?{x:y*h,y:g*p}:{x:g*p,y:y*h}}(t,e);return{x:n+a.x,y:o+a.y,data:a}}}};function k(e){return"x"===e?"y":"x"}let M=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){let{x:n,y:r,placement:o}=t,{mainAxis:a=!0,crossAxis:s=!1,limiter:f={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...u}=c(e,t),p={x:n,y:r},h=await d(t,u),g=l(i(o)),y=k(g),w=p[g],x=p[y];if(a){let e="y"===g?"bottom":"right";w=m(w+h["y"===g?"top":"left"],w,w-h[e])}s&&(x=m(x+h["y"===y?"top":"left"],x,x-h["y"===y?"bottom":"right"]));let v=f.fn({...t,[g]:w,[y]:x});return{...v,data:{x:v.x-n,y:v.y-r}}}}},_=function(e){return void 0===e&&(e={}),{options:e,fn(t){let{x:n,y:r,placement:o,rects:a,middlewareData:s}=t,{offset:f=0,mainAxis:u=!0,crossAxis:d=!0}=c(e,t),p={x:n,y:r},h=l(o),m=k(h),g=p[h],y=p[m],w=c(f,t),x="number"==typeof w?{mainAxis:w,crossAxis:0}:{mainAxis:0,crossAxis:0,...w};if(u){let e="y"===h?"height":"width",t=a.reference[h]-a.floating[e]+x.mainAxis,n=a.reference[h]+a.reference[e]-x.mainAxis;g<t?g=t:g>n&&(g=n)}if(d){var v,b;let e="y"===h?"width":"height",t=["top","left"].includes(i(o)),n=a.reference[m]-a.floating[e]+(t&&(null==(v=s.offset)?void 0:v[m])||0)+(t?0:x.crossAxis),r=a.reference[m]+a.reference[e]+(t?0:(null==(b=s.offset)?void 0:b[m])||0)-(t?x.crossAxis:0);y<n?y=n:y>r&&(y=r)}return{[h]:g,[m]:y}}}},H=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){let n,o;let{placement:a,rects:s,platform:f,elements:u}=t,{apply:m=()=>{},...g}=c(e,t),y=await d(t,g),w=i(a),x=r(a),v="x"===l(a),{width:b,height:E}=s.floating;"top"===w||"bottom"===w?(n=w,o=x===(await (null==f.isRTL?void 0:f.isRTL(u.floating))?"start":"end")?"left":"right"):(o=w,n="end"===x?"top":"bottom");let R=E-y[n],C=b-y[o],T=!t.middlewareData.shift,A=R,P=C;if(v){let e=b-y.left-y.right;P=x||T?p(C,e):e}else{let e=E-y.top-y.bottom;A=x||T?p(R,e):e}if(T&&!x){let e=h(y.left,0),t=h(y.right,0),n=h(y.top,0),r=h(y.bottom,0);v?P=b-2*(0!==e||0!==t?e+t:h(y.left,y.right)):A=E-2*(0!==n||0!==r?n+r:h(y.top,y.bottom))}await m({...t,availableWidth:P,availableHeight:A});let L=await f.getDimensions(u.floating);return b!==L.width||E!==L.height?{reset:{rects:!0}}:{}}}}},50123:(e,t,n)=>{n.d(t,{Me:()=>z,oo:()=>V});var r=n(50937);function o(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function i(e){return o(e).getComputedStyle(e)}function l(e){return e instanceof o(e).Node}function a(e){return l(e)?(e.nodeName||"").toLowerCase():"#document"}function s(e){return e instanceof HTMLElement||e instanceof o(e).HTMLElement}function c(e){return"undefined"!=typeof ShadowRoot&&(e instanceof o(e).ShadowRoot||e instanceof ShadowRoot)}function f(e){let{overflow:t,overflowX:n,overflowY:r,display:o}=i(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function u(e){return["table","td","th"].includes(a(e))}function d(e){let t=p(),n=i(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function p(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function h(e){return["html","body","#document"].includes(a(e))}let m=Math.min,g=Math.max,y=Math.round,w=Math.floor,x=e=>({x:e,y:e});function v(e){let t=i(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,o=s(e),l=o?e.offsetWidth:n,a=o?e.offsetHeight:r,c=y(n)!==l||y(r)!==a;return c&&(n=l,r=a),{width:n,height:r,$:c}}function b(e){return e instanceof Element||e instanceof o(e).Element}function E(e){return b(e)?e:e.contextElement}function R(e){let t=E(e);if(!s(t))return x(1);let n=t.getBoundingClientRect(),{width:r,height:o,$:i}=v(t),l=(i?y(n.width):n.width)/r,a=(i?y(n.height):n.height)/o;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}let C=x(0);function T(e){let t=o(e);return p()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:C}function A(e,t,n,i){var l;void 0===t&&(t=!1),void 0===n&&(n=!1);let a=e.getBoundingClientRect(),s=E(e),c=x(1);t&&(i?b(i)&&(c=R(i)):c=R(e));let f=(void 0===(l=n)&&(l=!1),!(!i||l&&i!==o(s))&&l)?T(s):x(0),u=(a.left+f.x)/c.x,d=(a.top+f.y)/c.y,p=a.width/c.x,h=a.height/c.y;if(s){let e=o(s),t=i&&b(i)?o(i):i,n=e.frameElement;for(;n&&i&&t!==e;){let e=R(n),t=n.getBoundingClientRect(),r=getComputedStyle(n),i=t.left+(n.clientLeft+parseFloat(r.paddingLeft))*e.x,l=t.top+(n.clientTop+parseFloat(r.paddingTop))*e.y;u*=e.x,d*=e.y,p*=e.x,h*=e.y,u+=i,d+=l,n=o(n).frameElement}}return(0,r.JB)({width:p,height:h,x:u,y:d})}function P(e){return b(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function L(e){var t;return null==(t=(l(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function S(e){return A(L(e)).left+P(e).scrollLeft}function D(e){if("html"===a(e))return e;let t=e.assignedSlot||e.parentNode||c(e)&&e.host||L(e);return c(t)?t.host:t}function O(e){let t=D(e);return h(t)?e.ownerDocument?e.ownerDocument.body:e.body:s(t)&&f(t)?t:O(t)}function k(e,t){var n;void 0===t&&(t=[]);let r=O(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),l=o(r);return i?t.concat(l,l.visualViewport||[],f(r)?r:[]):t.concat(r,k(r))}function M(e,t,n){let l;if("viewport"===t)l=function(e,t){let n=o(e),r=L(e),i=n.visualViewport,l=r.clientWidth,a=r.clientHeight,s=0,c=0;if(i){l=i.width,a=i.height;let e=p();(!e||e&&"fixed"===t)&&(s=i.offsetLeft,c=i.offsetTop)}return{width:l,height:a,x:s,y:c}}(e,n);else if("document"===t)l=function(e){let t=L(e),n=P(e),r=e.ownerDocument.body,o=g(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),l=g(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),a=-n.scrollLeft+S(e),s=-n.scrollTop;return"rtl"===i(r).direction&&(a+=g(t.clientWidth,r.clientWidth)-o),{width:o,height:l,x:a,y:s}}(L(e));else if(b(t))l=function(e,t){let n=A(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=s(e)?R(e):x(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{let n=T(e);l={...t,x:t.x-n.x,y:t.y-n.y}}return(0,r.JB)(l)}function _(e,t){let n=D(e);return!(n===t||!b(n)||h(n))&&("fixed"===i(n).position||_(n,t))}function H(e,t,n){let r=s(t),o=L(t),i="fixed"===n,l=A(e,!0,i,t),c={scrollLeft:0,scrollTop:0},u=x(0);if(r||!r&&!i){if(("body"!==a(t)||f(o))&&(c=P(t)),s(t)){let e=A(t,!0,i,t);u.x=e.x+t.clientLeft,u.y=e.y+t.clientTop}else o&&(u.x=S(o))}return{x:l.left+c.scrollLeft-u.x,y:l.top+c.scrollTop-u.y,width:l.width,height:l.height}}function W(e,t){return s(e)&&"fixed"!==i(e).position?t?t(e):e.offsetParent:null}function B(e,t){let n=o(e);if(!s(e))return n;let r=W(e,t);for(;r&&u(r)&&"static"===i(r).position;)r=W(r,t);return r&&("html"===a(r)||"body"===a(r)&&"static"===i(r).position&&!d(r))?n:r||function(e){let t=D(e);for(;s(t)&&!h(t);){if(d(t))return t;t=D(t)}return null}(e)||n}let F={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e,o=s(n),i=L(n);if(n===i)return t;let l={scrollLeft:0,scrollTop:0},c=x(1),u=x(0);if((o||!o&&"fixed"!==r)&&(("body"!==a(n)||f(i))&&(l=P(n)),s(n))){let e=A(n);c=R(n),u.x=e.x+n.clientLeft,u.y=e.y+n.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-l.scrollLeft*c.x+u.x,y:t.y*c.y-l.scrollTop*c.y+u.y}},getDocumentElement:L,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e,l=[..."clippingAncestors"===n?function(e,t){let n=t.get(e);if(n)return n;let r=k(e).filter(e=>b(e)&&"body"!==a(e)),o=null,l="fixed"===i(e).position,s=l?D(e):e;for(;b(s)&&!h(s);){let t=i(s),n=d(s);n||"fixed"!==t.position||(o=null),(l?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||f(s)&&!n&&_(e,s))?r=r.filter(e=>e!==s):o=t,s=D(s)}return t.set(e,r),r}(t,this._c):[].concat(n),r],s=l[0],c=l.reduce((e,n)=>{let r=M(t,n,o);return e.top=g(r.top,e.top),e.right=m(r.right,e.right),e.bottom=m(r.bottom,e.bottom),e.left=g(r.left,e.left),e},M(t,s,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:B,getElementRects:async function(e){let{reference:t,floating:n,strategy:r}=e,o=this.getOffsetParent||B,i=this.getDimensions;return{reference:H(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return v(e)},getScale:R,isElement:b,isRTL:function(e){return"rtl"===getComputedStyle(e).direction}};function z(e,t,n,r){void 0===r&&(r={});let{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:a="function"==typeof IntersectionObserver,animationFrame:s=!1}=r,c=E(e),f=o||i?[...c?k(c):[],...k(t)]:[];f.forEach(e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)});let u=c&&a?function(e,t){let n,r=null,o=L(e);function i(){clearTimeout(n),r&&r.disconnect(),r=null}return function l(a,s){void 0===a&&(a=!1),void 0===s&&(s=1),i();let{left:c,top:f,width:u,height:d}=e.getBoundingClientRect();if(a||t(),!u||!d)return;let p={rootMargin:-w(f)+"px "+-w(o.clientWidth-(c+u))+"px "+-w(o.clientHeight-(f+d))+"px "+-w(c)+"px",threshold:g(0,m(1,s))||1},h=!0;function y(e){let t=e[0].intersectionRatio;if(t!==s){if(!h)return l();t?l(!1,t):n=setTimeout(()=>{l(!1,1e-7)},100)}h=!1}try{r=new IntersectionObserver(y,{...p,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(y,p)}r.observe(e)}(!0),i}(c,n):null,d,p=-1,h=null;l&&(h=new ResizeObserver(e=>{let[r]=e;r&&r.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{h&&h.observe(t)})),n()}),c&&!s&&h.observe(c),h.observe(t));let y=s?A(e):null;return s&&function t(){let r=A(e);y&&(r.x!==y.x||r.y!==y.y||r.width!==y.width||r.height!==y.height)&&n(),y=r,d=requestAnimationFrame(t)}(),n(),()=>{f.forEach(e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)}),u&&u(),h&&h.disconnect(),h=null,s&&cancelAnimationFrame(d)}}let V=(e,t,n)=>{let o=new Map,i={platform:F,...n},l={...i.platform,_c:o};return(0,r.oo)(e,t,{...i,platform:l})}},71282:(e,t,n)=>{n.d(t,{ee:()=>z,Eh:()=>$,VY:()=>V,fC:()=>F,D7:()=>C});var r=n(17692),o=n(89526),i=n(50937),l=n(50123),a=n(73961);let s=e=>{function t(e){return({}).hasOwnProperty.call(e,"current")}return{name:"arrow",options:e,fn(n){let{element:r,padding:o}="function"==typeof e?e(n):e;if(r&&t(r)){if(null!=r.current)return(0,i.x7)({element:r.current,padding:o}).fn(n)}else if(r)return(0,i.x7)({element:r,padding:o}).fn(n);return{}}}};var c="undefined"!=typeof document?o.useLayoutEffect:o.useEffect;function f(e,t){let n,r,o;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(!f(e[r],t[r]))return!1;return!0}if((n=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){let n=o[r];if(("_owner"!==n||!e.$$typeof)&&!f(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function u(e){if("undefined"==typeof window)return 1;let t=e.ownerDocument.defaultView||window;return t.devicePixelRatio||1}function d(e,t){let n=u(e);return Math.round(t*n)/n}function p(e){let t=o.useRef(e);return c(()=>{t.current=e}),t}function h(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:s,floating:h}={},transform:m=!0,whileElementsMounted:g,open:y}=e,[w,x]=o.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[v,b]=o.useState(r);f(v,r)||b(r);let[E,R]=o.useState(null),[C,T]=o.useState(null),A=o.useCallback(e=>{e!=D.current&&(D.current=e,R(e))},[R]),P=o.useCallback(e=>{e!==O.current&&(O.current=e,T(e))},[T]),L=s||E,S=h||C,D=o.useRef(null),O=o.useRef(null),k=o.useRef(w),M=p(g),_=p(i),H=o.useCallback(()=>{if(!D.current||!O.current)return;let e={placement:t,strategy:n,middleware:v};_.current&&(e.platform=_.current),(0,l.oo)(D.current,O.current,e).then(e=>{let t={...e,isPositioned:!0};W.current&&!f(k.current,t)&&(k.current=t,a.flushSync(()=>{x(t)}))})},[v,t,n,_]);c(()=>{!1===y&&k.current.isPositioned&&(k.current.isPositioned=!1,x(e=>({...e,isPositioned:!1})))},[y]);let W=o.useRef(!1);c(()=>(W.current=!0,()=>{W.current=!1}),[]),c(()=>{if(L&&(D.current=L),S&&(O.current=S),L&&S){if(M.current)return M.current(L,S,H);H()}},[L,S,H,M]);let B=o.useMemo(()=>({reference:D,floating:O,setReference:A,setFloating:P}),[A,P]),F=o.useMemo(()=>({reference:L,floating:S}),[L,S]),z=o.useMemo(()=>{let e={position:n,left:0,top:0};if(!F.floating)return e;let t=d(F.floating,w.x),r=d(F.floating,w.y);return m?{...e,transform:"translate("+t+"px, "+r+"px)",...u(F.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}},[n,m,F.floating,w.x,w.y]);return o.useMemo(()=>({...w,update:H,refs:B,elements:F,floatingStyles:z}),[w,H,B,F,z])}var m=n(63079);let g=(0,o.forwardRef)((e,t)=>{let{children:n,width:i=10,height:l=5,...a}=e;return(0,o.createElement)(m.WV.svg,(0,r.Z)({},a,{ref:t,width:i,height:l,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:(0,o.createElement)("polygon",{points:"0,0 30,0 15,10"}))});var y=n(73531),w=n(50318),x=n(31619),v=n(39461),b=n(70474);let E="Popper",[R,C]=(0,w.b)(E),[T,A]=R(E),P=e=>{let{__scopePopper:t,children:n}=e,[r,i]=(0,o.useState)(null);return(0,o.createElement)(T,{scope:t,anchor:r,onAnchorChange:i},n)},L=(0,o.forwardRef)((e,t)=>{let{__scopePopper:n,virtualRef:i,...l}=e,a=A("PopperAnchor",n),s=(0,o.useRef)(null),c=(0,y.e)(t,s);return(0,o.useEffect)(()=>{a.onAnchorChange((null==i?void 0:i.current)||s.current)}),i?null:(0,o.createElement)(m.WV.div,(0,r.Z)({},l,{ref:c}))}),S="PopperContent",[D,O]=R(S),k=(0,o.forwardRef)((e,t)=>{var n,a,c,f,u,d,p,g;let{__scopePopper:w,side:E="bottom",sideOffset:R=0,align:C="center",alignOffset:T=0,arrowPadding:P=0,collisionBoundary:L=[],collisionPadding:O=0,sticky:k="partial",hideWhenDetached:M=!1,avoidCollisions:_=!0,onPlaced:F,...z}=e,V=A(S,w),[$,I]=(0,o.useState)(null),Y=(0,y.e)(t,e=>I(e)),[Z,X]=(0,o.useState)(null),j=(0,b.t)(Z),N=null!==(n=null==j?void 0:j.width)&&void 0!==n?n:0,J=null!==(a=null==j?void 0:j.height)&&void 0!==a?a:0,q=E+("center"!==C?"-"+C:""),K="number"==typeof O?O:{top:0,right:0,bottom:0,left:0,...O},Q=Array.isArray(L)?L:[L],U=Q.length>0,G={padding:K,boundary:Q.filter(H),altBoundary:U},{refs:ee,floatingStyles:et,placement:en,isPositioned:er,middlewareData:eo}=h({strategy:"fixed",placement:q,whileElementsMounted:l.Me,elements:{reference:V.anchor},middleware:[(0,i.cv)({mainAxis:R+J,alignmentAxis:T}),_&&(0,i.uY)({mainAxis:!0,crossAxis:!1,limiter:"partial"===k?(0,i.dr)():void 0,...G}),_&&(0,i.RR)({...G}),(0,i.dp)({...G,apply:({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{let{width:o,height:i}=t.reference,l=e.floating.style;l.setProperty("--radix-popper-available-width",`${n}px`),l.setProperty("--radix-popper-available-height",`${r}px`),l.setProperty("--radix-popper-anchor-width",`${o}px`),l.setProperty("--radix-popper-anchor-height",`${i}px`)}}),Z&&s({element:Z,padding:P}),W({arrowWidth:N,arrowHeight:J}),M&&(0,i.Cp)({strategy:"referenceHidden"})]}),[ei,el]=B(en),ea=(0,x.W)(F);(0,v.b)(()=>{er&&(null==ea||ea())},[er,ea]);let es=null===(c=eo.arrow)||void 0===c?void 0:c.x,ec=null===(f=eo.arrow)||void 0===f?void 0:f.y,ef=(null===(u=eo.arrow)||void 0===u?void 0:u.centerOffset)!==0,[eu,ed]=(0,o.useState)();return(0,v.b)(()=>{$&&ed(window.getComputedStyle($).zIndex)},[$]),(0,o.createElement)("div",{ref:ee.setFloating,"data-radix-popper-content-wrapper":"",style:{...et,transform:er?et.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:eu,"--radix-popper-transform-origin":[null===(d=eo.transformOrigin)||void 0===d?void 0:d.x,null===(p=eo.transformOrigin)||void 0===p?void 0:p.y].join(" ")},dir:e.dir},(0,o.createElement)(D,{scope:w,placedSide:ei,onArrowChange:X,arrowX:es,arrowY:ec,shouldHideArrow:ef},(0,o.createElement)(m.WV.div,(0,r.Z)({"data-side":ei,"data-align":el},z,{ref:Y,style:{...z.style,animation:er?void 0:"none",opacity:null!==(g=eo.hide)&&void 0!==g&&g.referenceHidden?0:void 0}}))))}),M={top:"bottom",right:"left",bottom:"top",left:"right"},_=(0,o.forwardRef)(function(e,t){let{__scopePopper:n,...i}=e,l=O("PopperArrow",n),a=M[l.placedSide];return(0,o.createElement)("span",{ref:l.onArrowChange,style:{position:"absolute",left:l.arrowX,top:l.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[l.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[l.placedSide],visibility:l.shouldHideArrow?"hidden":void 0}},(0,o.createElement)(g,(0,r.Z)({},i,{ref:t,style:{...i.style,display:"block"}})))});function H(e){return null!==e}let W=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,i,l;let{placement:a,rects:s,middlewareData:c}=t,f=(null===(n=c.arrow)||void 0===n?void 0:n.centerOffset)!==0,u=f?0:e.arrowWidth,d=f?0:e.arrowHeight,[p,h]=B(a),m={start:"0%",center:"50%",end:"100%"}[h],g=(null!==(r=null===(o=c.arrow)||void 0===o?void 0:o.x)&&void 0!==r?r:0)+u/2,y=(null!==(i=null===(l=c.arrow)||void 0===l?void 0:l.y)&&void 0!==i?i:0)+d/2,w="",x="";return"bottom"===p?(w=f?m:`${g}px`,x=`${-d}px`):"top"===p?(w=f?m:`${g}px`,x=`${s.floating.height+d}px`):"right"===p?(w=`${-d}px`,x=f?m:`${y}px`):"left"===p&&(w=`${s.floating.width+d}px`,x=f?m:`${y}px`),{data:{x:w,y:x}}}});function B(e){let[t,n="center"]=e.split("-");return[t,n]}let F=P,z=L,V=k,$=_},45623:(e,t,n)=>{n.d(t,{VY:()=>K,fC:()=>N,h_:()=>q,xz:()=>J,zt:()=>j});var r=n(17692),o=n(89526),i=n(93485),l=n(73531),a=n(50318),s=n(94484),c=n(57592),f=n(71282),u=n(70381),d=n(63044),p=n(63079),h=n(8839),m=n(10355),g=n(66585);let[y,w]=(0,a.b)("Tooltip",[f.D7]),x=(0,f.D7)(),v="tooltip.open",[b,E]=y("TooltipProvider"),R=e=>{let{__scopeTooltip:t,delayDuration:n=700,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:l}=e,[a,s]=(0,o.useState)(!0),c=(0,o.useRef)(!1),f=(0,o.useRef)(0);return(0,o.useEffect)(()=>{let e=f.current;return()=>window.clearTimeout(e)},[]),(0,o.createElement)(b,{scope:t,isOpenDelayed:a,delayDuration:n,onOpen:(0,o.useCallback)(()=>{window.clearTimeout(f.current),s(!1)},[]),onClose:(0,o.useCallback)(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>s(!0),r)},[r]),isPointerInTransitRef:c,onPointerInTransitChange:(0,o.useCallback)(e=>{c.current=e},[]),disableHoverableContent:i},l)},C="Tooltip",[T,A]=y(C),P=e=>{let{__scopeTooltip:t,children:n,open:r,defaultOpen:i=!1,onOpenChange:l,disableHoverableContent:a,delayDuration:s}=e,u=E(C,e.__scopeTooltip),d=x(t),[p,h]=(0,o.useState)(null),g=(0,c.M)(),y=(0,o.useRef)(0),w=null!=a?a:u.disableHoverableContent,b=null!=s?s:u.delayDuration,R=(0,o.useRef)(!1),[A=!1,P]=(0,m.T)({prop:r,defaultProp:i,onChange:e=>{e?(u.onOpen(),document.dispatchEvent(new CustomEvent(v))):u.onClose(),null==l||l(e)}}),L=(0,o.useMemo)(()=>A?R.current?"delayed-open":"instant-open":"closed",[A]),S=(0,o.useCallback)(()=>{window.clearTimeout(y.current),R.current=!1,P(!0)},[P]),D=(0,o.useCallback)(()=>{window.clearTimeout(y.current),P(!1)},[P]),O=(0,o.useCallback)(()=>{window.clearTimeout(y.current),y.current=window.setTimeout(()=>{R.current=!0,P(!0)},b)},[b,P]);return(0,o.useEffect)(()=>()=>window.clearTimeout(y.current),[]),(0,o.createElement)(f.fC,d,(0,o.createElement)(T,{scope:t,contentId:g,open:A,stateAttribute:L,trigger:p,onTriggerChange:h,onTriggerEnter:(0,o.useCallback)(()=>{u.isOpenDelayed?O():S()},[u.isOpenDelayed,O,S]),onTriggerLeave:(0,o.useCallback)(()=>{w?D():window.clearTimeout(y.current)},[D,w]),onOpen:S,onClose:D,disableHoverableContent:w},n))},L="TooltipTrigger",S=(0,o.forwardRef)((e,t)=>{let{__scopeTooltip:n,...a}=e,s=A(L,n),c=E(L,n),u=x(n),d=(0,o.useRef)(null),h=(0,l.e)(t,d,s.onTriggerChange),m=(0,o.useRef)(!1),g=(0,o.useRef)(!1),y=(0,o.useCallback)(()=>m.current=!1,[]);return(0,o.useEffect)(()=>()=>document.removeEventListener("pointerup",y),[y]),(0,o.createElement)(f.ee,(0,r.Z)({asChild:!0},u),(0,o.createElement)(p.WV.button,(0,r.Z)({"aria-describedby":s.open?s.contentId:void 0,"data-state":s.stateAttribute},a,{ref:h,onPointerMove:(0,i.M)(e.onPointerMove,e=>{"touch"===e.pointerType||g.current||c.isPointerInTransitRef.current||(s.onTriggerEnter(),g.current=!0)}),onPointerLeave:(0,i.M)(e.onPointerLeave,()=>{s.onTriggerLeave(),g.current=!1}),onPointerDown:(0,i.M)(e.onPointerDown,()=>{m.current=!0,document.addEventListener("pointerup",y,{once:!0})}),onFocus:(0,i.M)(e.onFocus,()=>{m.current||s.onOpen()}),onBlur:(0,i.M)(e.onBlur,s.onClose),onClick:(0,i.M)(e.onClick,s.onClose)})))}),D="TooltipPortal",[O,k]=y(D,{forceMount:void 0}),M=e=>{let{__scopeTooltip:t,forceMount:n,children:r,container:i}=e,l=A(D,t);return(0,o.createElement)(O,{scope:t,forceMount:n},(0,o.createElement)(d.z,{present:n||l.open},(0,o.createElement)(u.h,{asChild:!0,container:i},r)))},_="TooltipContent",H=(0,o.forwardRef)((e,t)=>{let n=k(_,e.__scopeTooltip),{forceMount:i=n.forceMount,side:l="top",...a}=e,s=A(_,e.__scopeTooltip);return(0,o.createElement)(d.z,{present:i||s.open},s.disableHoverableContent?(0,o.createElement)(z,(0,r.Z)({side:l},a,{ref:t})):(0,o.createElement)(W,(0,r.Z)({side:l},a,{ref:t})))}),W=(0,o.forwardRef)((e,t)=>{let n=A(_,e.__scopeTooltip),i=E(_,e.__scopeTooltip),a=(0,o.useRef)(null),s=(0,l.e)(t,a),[c,f]=(0,o.useState)(null),{trigger:u,onClose:d}=n,p=a.current,{onPointerInTransitChange:h}=i,m=(0,o.useCallback)(()=>{f(null),h(!1)},[h]),g=(0,o.useCallback)((e,t)=>{let n=e.currentTarget,r={x:e.clientX,y:e.clientY},o=V(r,n.getBoundingClientRect()),i=$(r,o),l=I(t.getBoundingClientRect()),a=Z([...i,...l]);f(a),h(!0)},[h]);return(0,o.useEffect)(()=>()=>m(),[m]),(0,o.useEffect)(()=>{if(u&&p){let e=e=>g(e,p),t=e=>g(e,u);return u.addEventListener("pointerleave",e),p.addEventListener("pointerleave",t),()=>{u.removeEventListener("pointerleave",e),p.removeEventListener("pointerleave",t)}}},[u,p,g,m]),(0,o.useEffect)(()=>{if(c){let e=e=>{let t=e.target,n={x:e.clientX,y:e.clientY},r=(null==u?void 0:u.contains(t))||(null==p?void 0:p.contains(t)),o=!Y(n,c);r?m():o&&(m(),d())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[u,p,c,d,m]),(0,o.createElement)(z,(0,r.Z)({},e,{ref:s}))}),[B,F]=y(C,{isInside:!1}),z=(0,o.forwardRef)((e,t)=>{let{__scopeTooltip:n,children:i,"aria-label":l,onEscapeKeyDown:a,onPointerDownOutside:c,...u}=e,d=A(_,n),p=x(n),{onClose:m}=d;return(0,o.useEffect)(()=>(document.addEventListener(v,m),()=>document.removeEventListener(v,m)),[m]),(0,o.useEffect)(()=>{if(d.trigger){let e=e=>{let t=e.target;null!=t&&t.contains(d.trigger)&&m()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[d.trigger,m]),(0,o.createElement)(s.XB,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:c,onFocusOutside:e=>e.preventDefault(),onDismiss:m},(0,o.createElement)(f.VY,(0,r.Z)({"data-state":d.stateAttribute},p,u,{ref:t,style:{...u.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),(0,o.createElement)(h.A4,null,i),(0,o.createElement)(B,{scope:n,isInside:!0},(0,o.createElement)(g.f,{id:d.contentId,role:"tooltip"},l||i))))});function V(e,t){let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,r,o,i)){case i:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw Error("unreachable")}}function $(e,t,n=5){let r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}function I(e){let{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}function Y(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,i=t.length-1;e<t.length;i=e++){let l=t[e].x,a=t[e].y,s=t[i].x,c=t[i].y,f=a>r!=c>r&&n<(s-l)*(r-a)/(c-a)+l;f&&(o=!o)}return o}function Z(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),X(t)}function X(e){if(e.length<=1)return e.slice();let t=[];for(let n=0;n<e.length;n++){let r=e[n];for(;t.length>=2;){let e=t[t.length-1],n=t[t.length-2];if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();else break}t.push(r)}t.pop();let n=[];for(let t=e.length-1;t>=0;t--){let r=e[t];for(;n.length>=2;){let e=n[n.length-1],t=n[n.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();else break}n.push(r)}return(n.pop(),1===t.length&&1===n.length&&t[0].x===n[0].x&&t[0].y===n[0].y)?t:t.concat(n)}let j=R,N=P,J=S,q=M,K=H},70474:(e,t,n)=>{n.d(t,{t:()=>i});var r=n(89526),o=n(39461);function i(e){let[t,n]=(0,r.useState)(void 0);return(0,o.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,o;if(!Array.isArray(t)||!t.length)return;let i=t[0];if("borderBoxSize"in i){let e=i.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,o=t.blockSize}else r=e.offsetWidth,o=e.offsetHeight;n({width:r,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}},66585:(e,t,n)=>{n.d(t,{T:()=>l,f:()=>a});var r=n(17692),o=n(89526),i=n(63079);let l=(0,o.forwardRef)((e,t)=>(0,o.createElement)(i.WV.span,(0,r.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),a=l}}]);