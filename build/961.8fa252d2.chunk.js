(self.webpackChunkmedusa_starter_default=self.webpackChunkmedusa_starter_default||[]).push([[961],{77447:(e,t,r)=>{"use strict";var o=r(12817),a={"text/plain":"Text","text/html":"Url",default:"Text"},n="Copy to clipboard: #{key}, Enter";function l(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function c(e,t){var r,c,i,d,s,p,u=!1;t||(t={}),r=t.debug||!1;try{if(i=o(),d=document.createRange(),s=document.getSelection(),(p=document.createElement("span")).textContent=e,p.ariaHidden="true",p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",function(o){if(o.stopPropagation(),t.format){if(o.preventDefault(),void 0===o.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var n=a[t.format]||a.default;window.clipboardData.setData(n,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e)}t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))}),document.body.appendChild(p),d.selectNodeContents(p),s.addRange(d),!document.execCommand("copy"))throw Error("copy command was unsuccessful");u=!0}catch(o){r&&console.error("unable to copy using execCommand: ",o),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(o){r&&console.error("unable to copy using clipboardData: ",o),r&&console.error("falling back to prompt"),c=l("message"in t?t.message:n),window.prompt(c,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(d):s.removeAllRanges()),p&&document.body.removeChild(p),i()}return u}e.exports=c},12817:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],o=0;o<e.rangeCount;o++)r.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},80350:(e,t,r)=>{"use strict";r.d(t,{VY:()=>B,ck:()=>K,fC:()=>N,h4:()=>W,xz:()=>Y});var o=r(17692),a=r(89526),n=r(50318),l=r(44805),c=r(73531),i=r(93485),d=r(10355),s=r(63079),p=r(31983),u=r(57592),f=r(45060);let m="Accordion",g=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[y,b,v]=(0,l.B)(m),[w,E]=(0,n.b)(m,[v,p.p_]),A=(0,p.p_)(),h=a.forwardRef((e,t)=>{let{type:r,...n}=e;return a.createElement(y.Provider,{scope:e.__scopeAccordion},"multiple"===r?a.createElement(k,(0,o.Z)({},n,{ref:t})):a.createElement(R,(0,o.Z)({},n,{ref:t})))});h.propTypes={type(e){let t=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):"multiple"===e.type&&"string"==typeof t?Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):"single"===e.type&&Array.isArray(t)?Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};let[C,x]=w(m),[_,D]=w(m,{collapsible:!1}),R=a.forwardRef((e,t)=>{let{value:r,defaultValue:n,onValueChange:l=()=>{},collapsible:c=!1,...i}=e,[s,p]=(0,d.T)({prop:r,defaultProp:n,onChange:l});return a.createElement(C,{scope:e.__scopeAccordion,value:s?[s]:[],onItemOpen:p,onItemClose:a.useCallback(()=>c&&p(""),[c,p])},a.createElement(_,{scope:e.__scopeAccordion,collapsible:c},a.createElement(S,(0,o.Z)({},i,{ref:t}))))}),k=a.forwardRef((e,t)=>{let{value:r,defaultValue:n,onValueChange:l=()=>{},...c}=e,[i=[],s]=(0,d.T)({prop:r,defaultProp:n,onChange:l}),p=a.useCallback(e=>s((t=[])=>[...t,e]),[s]),u=a.useCallback(e=>s((t=[])=>t.filter(t=>t!==e)),[s]);return a.createElement(C,{scope:e.__scopeAccordion,value:i,onItemOpen:p,onItemClose:u},a.createElement(_,{scope:e.__scopeAccordion,collapsible:!0},a.createElement(S,(0,o.Z)({},c,{ref:t}))))}),[I,V]=w(m),S=a.forwardRef((e,t)=>{let{__scopeAccordion:r,disabled:n,dir:l,orientation:d="vertical",...p}=e,u=a.useRef(null),m=(0,c.e)(u,t),v=b(r),w=(0,f.gm)(l),E="ltr"===w,A=(0,i.M)(e.onKeyDown,e=>{var t;if(!g.includes(e.key))return;let r=e.target,o=v().filter(e=>{var t;return!(null!==(t=e.ref.current)&&void 0!==t&&t.disabled)}),a=o.findIndex(e=>e.ref.current===r),n=o.length;if(-1===a)return;e.preventDefault();let l=a,c=n-1,i=()=>{(l=a+1)>c&&(l=0)},s=()=>{(l=a-1)<0&&(l=c)};switch(e.key){case"Home":l=0;break;case"End":l=c;break;case"ArrowRight":"horizontal"===d&&(E?i():s());break;case"ArrowDown":"vertical"===d&&i();break;case"ArrowLeft":"horizontal"===d&&(E?s():i());break;case"ArrowUp":"vertical"===d&&s()}let p=l%n;null===(t=o[p].ref.current)||void 0===t||t.focus()});return a.createElement(I,{scope:r,disabled:n,direction:l,orientation:d},a.createElement(y.Slot,{scope:r},a.createElement(s.WV.div,(0,o.Z)({},p,{"data-orientation":d,ref:m,onKeyDown:n?void 0:A}))))}),T="AccordionItem",[Z,U]=w(T),z=a.forwardRef((e,t)=>{let{__scopeAccordion:r,value:n,...l}=e,c=V(T,r),i=x(T,r),d=A(r),s=(0,u.M)(),f=n&&i.value.includes(n)||!1,m=c.disabled||e.disabled;return a.createElement(Z,{scope:r,open:f,disabled:m,triggerId:s},a.createElement(p.fC,(0,o.Z)({"data-orientation":c.orientation,"data-state":M(f)},d,l,{ref:t,disabled:m,open:f,onOpenChange:e=>{e?i.onItemOpen(n):i.onItemClose(n)}})))}),P=a.forwardRef((e,t)=>{let{__scopeAccordion:r,...n}=e,l=V(m,r),c=U("AccordionHeader",r);return a.createElement(s.WV.h3,(0,o.Z)({"data-orientation":l.orientation,"data-state":M(c.open),"data-disabled":c.disabled?"":void 0},n,{ref:t}))}),H="AccordionTrigger",O=a.forwardRef((e,t)=>{let{__scopeAccordion:r,...n}=e,l=V(m,r),c=U(H,r),i=D(H,r),d=A(r);return a.createElement(y.ItemSlot,{scope:r},a.createElement(p.xz,(0,o.Z)({"aria-disabled":c.open&&!i.collapsible||void 0,"data-orientation":l.orientation,id:c.triggerId},d,n,{ref:t})))}),L=a.forwardRef((e,t)=>{let{__scopeAccordion:r,...n}=e,l=V(m,r),c=U("AccordionContent",r),i=A(r);return a.createElement(p.VY,(0,o.Z)({role:"region","aria-labelledby":c.triggerId,"data-orientation":l.orientation},i,n,{ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});function M(e){return e?"open":"closed"}let N=h,K=z,W=P,Y=O,B=L}}]);