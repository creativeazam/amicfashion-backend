"use strict";(self.webpackChunkmedusa_starter_default=self.webpackChunkmedusa_starter_default||[]).push([[807],{51534:(e,r,t)=>{t.d(r,{Z:()=>j});var n=t(67557),o=t(23060),a=t(89526),s=t(2072),i=t(67950),l=t(42207);function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function u(e){if(Array.isArray(e))return e}function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r){var t,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],s=!0,i=!1;try{for(o=o.call(e);!(s=(t=o.next()).done)&&(a.push(t.value),!r||a.length!==r);s=!0);}catch(e){i=!0,n=e}finally{try{s||null==o.return||o.return()}finally{if(i)throw n}}return a}}function m(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){f(e,r,t[r])})}return e}function y(e,r){if(null==e)return{};var t,n,o=b(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function b(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}function g(e,r){return u(e)||d(e,r)||x(e,r)||m()}function x(e,r){if(e){if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}}var h=a.forwardRef(function(e,r){var t=e.placeholder,c=e.name,u=e.key,f=e.onChange,d=e.onFocus,m=e.className,b=e.type,x=y(e,["placeholder","name","key","onChange","onFocus","className","type"]),h=(0,a.useRef)(null),j=g((0,a.useState)(!1),2),v=j[0],w=j[1],O=g((0,a.useState)(b),2),S=O[0],Z=O[1];return(0,a.useEffect)(function(){"password"===b&&v&&Z("text"),"password"!==b||v||Z("password")},[b,v]),(0,a.useImperativeHandle)(r,function(){return h.current}),(0,n.jsxs)("div",{className:(0,o.Z)("rounded-rounded h-[40px] w-[300px] overflow-hidden border","bg-grey-5 inter-base-regular placeholder:text-grey-40","focus-within:shadow-input focus-within:border-violet-60","flex items-center",{"text-grey-40 pl-xsmall pointer-events-none focus-within:border-none focus-within:shadow-none":x.readOnly},m),children:[(0,n.jsx)("input",p({className:(0,o.Z)("remove-number-spinner leading-base w-full bg-transparent py-3 px-4 outline-none outline-0",{"pl-xsmall":x.readOnly}),ref:h,name:c,placeholder:t||"Placeholder",onChange:f,onFocus:d,type:S},x),u||c),"password"===b&&(0,n.jsx)("button",{type:"button",onClick:function(){return w(!v)},className:"text-grey-40 focus:text-violet-60 px-4 focus:outline-none",tabIndex:-1,children:v?(0,n.jsx)(s.Z,{size:16}):(0,n.jsx)(i.Z,{size:16})}),x.readOnly&&(0,n.jsx)(l.Z,{size:16,className:"text-grey-40 mr-base"})]})});h.displayName="SigninInput";let j=h},37682:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(67557),o=t(51992),a=function(e){var r=e.children;return(0,n.jsxs)("div",{className:"flex min-h-screen flex-col items-center justify-center",children:[(0,n.jsx)(o.x7,{containerStyle:{top:24,left:24,bottom:24,right:24},position:"bottom-right"}),(0,n.jsx)("div",{className:"mb-large",children:(0,n.jsx)(s,{})}),r]})},s=function(){return(0,n.jsx)("div",{className:"w-5xlarge h-5xlarge flex items-center justify-center rounded-full bg-gradient-to-t from-[#26292B] via-[#151718] to-[#151718]",children:(0,n.jsx)(i,{})})},i=function(){return(0,n.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M32.4895 7.84367L24.3377 3.15373C21.6705 1.61542 18.4022 1.61542 15.7351 3.15373L7.5457 7.84367C4.91608 9.38197 3.26318 12.2335 3.26318 15.2725V24.6899C3.26318 27.7665 4.91608 30.5805 7.5457 32.1188L15.6975 36.8463C18.3647 38.3846 21.6329 38.3846 24.3001 36.8463L32.4519 32.1188C35.1191 30.5805 36.7344 27.7665 36.7344 24.6899V15.2725C36.8095 12.2335 35.1566 9.38197 32.4895 7.84367ZM20.0176 28.3669C15.397 28.3669 11.6404 24.6149 11.6404 20C11.6404 15.3851 15.397 11.6331 20.0176 11.6331C24.6382 11.6331 28.4323 15.3851 28.4323 20C28.4323 24.6149 24.6758 28.3669 20.0176 28.3669Z",fill:"url(#paint0_linear_7693_9181)"}),(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"paint0_linear_7693_9181",x1:"20",y1:"2",x2:"20",y2:"38",gradientUnits:"userSpaceOnUse",children:[(0,n.jsx)("stop",{stopColor:"white"}),(0,n.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0.8"})]})})]})};let l=a},23807:(e,r,t)=>{t.r(r),t.d(r,{default:()=>U});var n=t(67557),o=t(41577),a=t(89526),s=t(70317),i=t(18198),l=t(46118),c=t(16390),u=t(77573),f=t(78343),d=t(51534);function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){m(e,r,t[r])})}return e}function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function b(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}),e}var g=function(e){var r=e.toResetPassword,t=(0,i.cI)(),a=t.register,m=t.handleSubmit,y=t.setError,g=t.formState.errors,x=(0,s.useNavigate)(),h=(0,o.useAdminLogin)(),j=h.mutate,v=h.isLoading,w=(0,l.e)().getWidgets;return(0,n.jsxs)("div",{className:"gap-y-large flex flex-col",children:[w("login.before").map(function(e,r){return(0,n.jsx)(u.Z,{widget:e,injectionZone:"login.before",entity:void 0},r)}),(0,n.jsx)("form",{onSubmit:m(function(e){j(e,{onSuccess:function(){x("/a/orders")},onError:function(){y("password",{type:"manual",message:"These credentials do not match our records."},{shouldFocus:!0})}})}),children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("h1",{className:"inter-xlarge-semibold text-grey-90 mb-large text-[20px]",children:"Log in to Medusa"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(d.Z,b(p({placeholder:"Email"},a("email",{required:!0})),{autoComplete:"email",className:"mb-small"})),(0,n.jsx)(d.Z,b(p({placeholder:"Password",type:"password"},a("password",{required:!0})),{autoComplete:"current-password",className:"mb-xsmall"})),(0,n.jsx)(c.Z,{errors:g,name:"password"})]}),(0,n.jsx)(f.Z,{className:"rounded-rounded inter-base-regular mt-4 w-[280px]",variant:"secondary",size:"medium",type:"submit",loading:v,children:"Continue"}),(0,n.jsx)("span",{className:"inter-small-regular text-grey-50 mt-8 cursor-pointer",onClick:r,children:"Forgot your password?"})]})}),w("login.after").map(function(e,r){return(0,n.jsx)(u.Z,{widget:e,injectionZone:"login.after",entity:void 0},r)})]})},x=t(95261),h=t(29495),j=t(79867),v=t(76826);function w(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function O(e){if(Array.isArray(e))return e}function S(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Z(e,r){var t,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],s=!0,i=!1;try{for(o=o.call(e);!(s=(t=o.next()).done)&&(a.push(t.value),!r||a.length!==r);s=!0);}catch(e){i=!0,n=e}finally{try{s||null==o.return||o.return()}finally{if(i)throw n}}return a}}function N(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function A(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){S(e,r,t[r])})}return e}function P(e,r){return O(e)||Z(e,r)||C(e,r)||N()}function C(e,r){if(e){if("string"==typeof e)return w(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(e,r)}}var E=RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"),k=function(e){var r=e.goBack,t=P((0,a.useState)(!1),2),s=t[0],l=t[1],u=(0,i.cI)(),m=u.register,p=u.handleSubmit,y=u.formState.errors,b=(0,o.useAdminSendResetPasswordToken)(),g=b.mutate,w=b.isLoading,O=(0,x.Z)(),S=p(function(e){g({email:e.email},{onSuccess:function(){l(!0)},onError:function(e){O("Error",(0,h.e)(e),"error")}})});return(0,n.jsx)("form",{onSubmit:S,children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("h1",{className:"inter-xlarge-semibold text-grey-90 mb-xsmall text-[20px]",children:"Reset your password"}),(0,n.jsxs)("span",{className:"inter-base-regular text-grey-50 mb-large text-center",children:["Enter your email address below, and we'll",(0,n.jsx)("br",{}),"send you instructions on how to reset",(0,n.jsx)("br",{}),"your password."]}),s?(0,n.jsxs)("div",{className:"text-grey-60 rounded-rounded bg-grey-5 border-grey-20 p-base gap-x-small flex w-[280px] items-center border",children:[(0,n.jsx)("div",{children:(0,n.jsx)(v.Z,{className:"text-blue-50",size:20})}),(0,n.jsx)("div",{className:"gap-y-2xsmall flex flex-col",children:(0,n.jsx)("span",{className:"inter-base-regular",children:"Succesfully sent you an email"})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"w-[280px]",children:[(0,n.jsx)(d.Z,A({placeholder:"Email"},m("email",{required:j.Z.required("Email"),pattern:{value:E,message:"This is not a valid email"}}))),(0,n.jsx)(c.Z,{errors:y,name:"email"})]}),(0,n.jsx)(f.Z,{variant:"secondary",size:"medium",className:"mt-large w-[280px]",type:"submit",loading:w,children:"Send reset instructions"})]}),(0,n.jsx)("span",{className:"inter-small-regular text-grey-50 mt-8 cursor-pointer",onClick:r,children:"Go back to sign in"})]})})},I=t(65716),z=t(37682);function _(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function L(e){if(Array.isArray(e))return e}function D(e,r){var t,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],s=!0,i=!1;try{for(o=o.call(e);!(s=(t=o.next()).done)&&(a.push(t.value),!r||a.length!==r);s=!0);}catch(e){i=!0,n=e}finally{try{s||null==o.return||o.return()}finally{if(i)throw n}}return a}}function R(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function F(e,r){return L(e)||D(e,r)||M(e,r)||R()}function M(e,r){if(e){if("string"==typeof e)return _(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(e,r)}}var T=function(){var e=F((0,a.useState)(!1),2),r=e[0],t=e[1],i=(0,o.useAdminGetSession)().user,l=(0,s.useNavigate)();return(0,a.useEffect)(function(){i&&l("/")},[i,l]),(0,a.useEffect)(function(){window.location.search.includes("reset-password")&&t(!0)},[]),(0,n.jsxs)(z.Z,{children:[(0,n.jsx)(I.Z,{title:"Login"}),r?(0,n.jsx)(k,{goBack:function(){t(!1),l("/login",{replace:!0})}}):(0,n.jsx)(g,{toResetPassword:function(){t(!0)}})]})};let U=T}}]);