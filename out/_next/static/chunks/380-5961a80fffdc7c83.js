"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[380],{6267:function(e){e.exports=function(e){var t=e.src;return"".concat(t)}},7050:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(4051),a=n.n(r),s=n(5893),i=n(7294),c=n(7333);function o(e,t,n,r,a,s,i){try{var c=e[s](i),o=c.value}catch(l){return void n(l)}c.done?t(o):Promise.resolve(o).then(r,a)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function i(e){o(s,r,a,i,c,"next",e)}function c(e){o(s,r,a,i,c,"throw",e)}i(void 0)}))}}function u(e){var t=(0,i.useState)(!1),n=t[0],r=t[1],c=""!==e.value,o=function(){var e=l(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(!0);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var t=l(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:""==e.value&&r(!1);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=l(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=n.target.value,e.setter(r);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,s.jsxs)("div",{className:"relative flex w-full pt-6",children:[(0,s.jsx)("label",{htmlFor:e.id,className:"".concat(n|c&&"translate-y-[-16px] scale-75"," absolute py-3 text-black/75 dark:text-white/90 transition origin-top-left cursor-text"),children:e.label}),(0,s.jsx)(d,{id:e.id,type:e.type,placeholder:e.placeholder,value:e.value,onFocus:o,onBlur:u,onChange:f})]})}function d(e){var t;return t="cardnumber"==e.type?"#### #### #### ####":"cardexpiry"==e.type?"##/####":"####","text"!=e.type&&"password"!=e.type?(0,s.jsx)(c.Z,{className:"".concat(!e.isFocused&&"placeholder:text-black/0"," w-full py-3 bg-transparent border-b border-gray-200 dark:border-white/25 focus:border-gray-700 dark:focus:border-white/75 dark:text-white rounded-none outline-none transition"),format:t,id:e.id,value:e.value,placeholder:e.placeholder,onChange:e.onChange,onFocus:e.onFocus,onBlur:e.onBlur}):(0,s.jsx)("input",{className:"".concat(!e.isFocused&&"placeholder:text-black/0"," w-full py-3 bg-transparent border-b border-gray-200 dark:border-white/25 focus:border-gray-700 dark:focus:border-white/75 dark:text-white rounded-none outline-none transition"),id:e.id,type:e.type,value:e.value,placeholder:e.placeholder,onChange:e.onChange,onFocus:e.onFocus,onBlur:e.onBlur})}},1394:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(5893),a=n(1664),s=n(5675),i=n(6267),c=n.n(i),o=n(4051),l=n.n(o),u=n(7294),d=n(425),f=n(6573),h=n(9455),x=n(6661),p=n(4520),m=n(216),g=n(4231);function v(e,t,n,r,a,s,i){try{var c=e[s](i),o=c.value}catch(l){return void n(l)}c.done?t(o):Promise.resolve(o).then(r,a)}function b(){var e=(0,d.F)(),t=e.theme,n=e.setTheme,a=(0,u.useState)(!1),i=a[0],o=a[1],g=(0,u.useState)(!1),b=g[0],j=g[1],k=(0,f.vs)(),y=(k.autoModeActive,k.autoModeSupported,k.darkModeActive);k.switchToAutoMode,k.switchToDarkMode,k.switchToLightMode;(0,u.useEffect)((function(){"autoDark"!=t&&"autoLight"!=t||n(y?"autoDark":"autoLight")}));var N=function(){var e,t=(e=l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(!1);case 1:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function i(e){v(s,r,a,i,c,"next",e)}function c(e){v(s,r,a,i,c,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,u.useEffect)((function(){return o(!0)}),[]),i?(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsxs)("button",{className:"flex items-center justify-between text-sm opacity-75 hover:opacity-100 border border-gray-300 dark:border-gray-200/25 rounded-lg px-2 py-1.5 w-40 transition duration-500 ease-in-out",onClick:function(){j(!b)},children:[(0,r.jsx)("span",{className:"flex items-center flex-shrink-0 dark:invert",children:(0,r.jsx)(s.default,{src:"light"==t||"autoLight"==t?x.Z:"dark"==t||"autoDark"==t?p.Z:h.Z,loader:c()})}),(0,r.jsxs)("span",{className:"text-black/75 dark:text-white/75",children:["light"==t&&(0,r.jsx)("span",{children:"Light theme"}),("autoLight"==t||"autoDark"==t||"system"==t)&&(0,r.jsx)("span",{children:"System theme"}),"dark"==t&&(0,r.jsx)("span",{children:"Dark theme"})]}),(0,r.jsx)("span",{className:"flex items-center flex-shrink-0 opacity-75 dark:invert",children:(0,r.jsx)(s.default,{src:m.Z,loader:c()})})]}),(0,r.jsx)("div",{className:"".concat(b?"opacity-100":"opacity-0 pointer-events-none"," fixed inset-0 z-40"),onClick:N}),(0,r.jsx)("div",{className:"".concat(b?"opacity-100 bg-white dark:bg-neutral-900 translate-y-0":"opacity-0 translate-y-[4px] pointer-events-none"," absolute bottom-10 left-0 right-0 overflow-hidden flex flex-col rounded-lg dark:text-white/90 shadow-high dark:shadow-highlight transition duration-300 ease-in-out z-50"),children:(0,r.jsxs)("ul",{className:"flex flex-col py-1",children:[(0,r.jsx)("li",{className:"flex text-black/50 dark:text-white/50 text-sm py-1 px-3",children:"Choose theme"}),(0,r.jsx)("li",{className:"flex flex-col px-1",onClick:function(){return j(!1),void n(y?"autoDark":"autoLight")},children:(0,r.jsx)(w,{theme:t,label:"System",icon:h.Z})}),(0,r.jsx)("li",{className:"flex flex-col px-1",onClick:function(){return j(!1),void n("light")},children:(0,r.jsx)(w,{theme:t,label:"Light",icon:x.Z})}),(0,r.jsx)("li",{className:"flex flex-col px-1",onClick:function(){return j(!1),void n("dark")},children:(0,r.jsx)(w,{theme:t,label:"Dark",icon:p.Z})})]})})]}):null}function w(e){var t;return t="System"==e.label?"system"==e.theme||"autoDark"==e.theme||"autoLight"==e.theme:"Light"==e.label?"light"==e.theme:"dark"==e.theme,(0,r.jsxs)("button",{className:"flex items-center space-x-2 py-1 px-3 text-black/75 dark:text-white/75 bg-gray-100/0 hover:bg-gray-100 dark:bg-white/0 dark:hover:bg-white/5 transition duration-300 ease-in-out rounded",children:[(0,r.jsx)("span",{className:"flex items-center flex-shrink-0 dark:invert opacity-75",children:(0,r.jsx)(s.default,{src:e.icon,loader:c()})}),(0,r.jsx)("span",{className:"flex-1 text-left text-sm",children:e.label}),(0,r.jsx)("span",{className:"flex items-center flex-shrink-0 w-4 h-4 opacity-75 scale-90 translate-x-[4px] dark:invert",children:t&&(0,r.jsx)(s.default,{src:g.Z,loader:c()})})]})}n(8720);var j=n(9195),k=n(893),y=n(6178),N=n(5784);function S(){return(0,r.jsxs)("footer",{className:"flex flex-col items-center justify-center w-full px-8 bg-white/50 dark:bg-black/50 shadow-mid dark:shadow-highlight",children:[(0,r.jsxs)("aside",{className:"grid xl:grid-cols-2 gap-8 xl:gap-12 max-w-[1080px] w-full py-12",children:[(0,r.jsxs)("div",{className:"flex flex-col justify-center px-8 py-6 bg-white dark:bg-white/5 dark:text-white/90 rounded-xl shadow-high dark:shadow-highlight space-y-2",children:[(0,r.jsx)("h4",{className:"flex items-center space-x-2 font-medium text-lg",children:(0,r.jsx)("span",{children:"What is HashiCups?"})}),(0,r.jsx)("p",{className:"text-sm",children:"HashiCups is a demo app for the HashiCorp stack. If you're seeing this page, your demo is up and running!"})]}),(0,r.jsx)("div",{className:"rounded-xl shadow-high dark:shadow-highlight space-y-2 overflow-hidden",children:(0,r.jsxs)("ul",{className:"flex flex-col md:flex-row xl:grid gap-px grid-cols-2 grid-rows-2 text-sm bg-gray-100 dark:bg-white/10",children:[(0,r.jsx)(I,{label:"Visit HashiCorp on Learn",icon:k.Z,url:"http://learn.hashicorp.com"}),(0,r.jsx)(I,{label:"Visit HashiCorp Docs",icon:j.Z,url:"#"}),(0,r.jsx)(I,{label:"Visit HashiCorp.com",icon:N.Z,url:"https://hashicorp.com"}),(0,r.jsx)(I,{label:"Browse on GitHub",icon:y.Z,url:"https://github.com/hashicorp-demoapp"})]})})]}),(0,r.jsx)("div",{className:"flex justify-center w-screen bg-gray-100/50 dark:bg-black/50 py-8 shadow-mid dark:shadow-highlight",children:(0,r.jsxs)("div",{className:"flex flex-col space-y-4 xs:space-y-0 xs:flex-row items-center justify-between max-w-[1080px] px-8 w-full",children:[(0,r.jsxs)("p",{className:"text-sm text-black/75 dark:text-white/75",children:[C(),". ",(0,r.jsx)("span",{className:"opacity-50",children:"All rights reserved."})]}),(0,r.jsx)(b,{})]})})]})}function I(e){return(0,r.jsx)("li",{className:"flex flex-auto",children:(0,r.jsx)(a.default,{href:e.url,children:(0,r.jsxs)("a",{className:"flex items-center space-x-2 flex-1 px-8 py-6 bg-white dark:bg-black/30 hover:bg-gray-50 dark:hover:bg-black/20 dark:text-white/90 transition ease-in-out",children:[(0,r.jsx)("span",{className:"flex items-center opacity-75 flex-shrink-0 dark:invert",children:(0,r.jsx)(s.default,{src:e.icon,loader:c()})}),(0,r.jsx)("span",{children:e.label})]})})})}function C(){var e=(new Date).getFullYear();return"\xa9 ".concat(e," HashiCorp")}},7521:function(e,t,n){n.d(t,{Z:function(){return O}});var r=n(4051),a=n.n(r),s=n(5893),i=n(9008),c=n(5675),o=n(1664),l=n(6267),u=n.n(l),d=n(9669),f=n.n(d),h=n(8100),x=n(7294),p=n(1163),m=n(7333),g=n(7050),v=(n(5078),n(3747),n(9991)),b=n(1321);function w(e,t,n,r,a,s,i){try{var c=e[s](i),o=c.value}catch(l){return void n(l)}c.done?t(o):Promise.resolve(o).then(r,a)}function j(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function i(e){w(s,r,a,i,c,"next",e)}function c(e){w(s,r,a,i,c,"throw",e)}i(void 0)}))}}function k(e){!function(){var e=j(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().get(t).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))}();var t,n=(0,h.ZP)(b._5,v.$$),r=n.data;n.error;return r&&(t=r.data.orders),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{className:"font-semibold text-2xl sm:text-3xl leading-none sm:leading-tight sm:truncate",children:"Order history"}),(0,s.jsx)("div",{className:"flex flex-col",children:t?(0,s.jsx)("ul",{className:"flex flex-col w-full divide-y dark:divide-white/10",children:t.map((function(t){return(0,s.jsx)(y,{id:t.id,items:t.items,setAccountVisible:e.setAccountVisible},t.id)}))}):(0,s.jsx)("p",{className:"py-8",children:"No orders"})})]})}function y(e){var t=function(){var t=j(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setAccountVisible(!1);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n=e.items.reduce((function(e,t){return e+t.coffee.price*t.quantity}),0);return(0,s.jsxs)("li",{className:"flex flex-col xs:flex-row flex-1 xs:space-x-6 pt-6 pb-8",children:[(0,s.jsx)(o.default,{href:"/order/".concat(e.id),children:(0,s.jsx)("a",{onClick:t,children:(0,s.jsx)("div",{className:"flex items-center justify-center shadow-high dark:shadow-highlight bg-gray-100/25 dark:bg-black/10 rounded-lg w-[90px] h-[90px] mb-3 overflow-hidden",children:(0,s.jsx)("div",{className:"flex items-center justify-center -space-x-16",children:e.items.map((function(e){return(0,s.jsx)("img",{className:"relative flex-shrink-0",src:"/images/thumbnails".concat(e.coffee.image),width:80,height:80,loader:u()},e.coffee.id)}))})})})}),(0,s.jsxs)("div",{className:"flex flex-1 flex-col pt-1",children:[(0,s.jsxs)("div",{className:"flex flex-1 items-center justify-between pb-2",children:[(0,s.jsx)(o.default,{href:"/order/".concat(e.id),children:(0,s.jsxs)("a",{onClick:t,className:"font-medium text-lg text-blue-500 dark:text-blue-400 underline hover:bg-blue-50 dark:hover:bg-blue-500/25 py-0.5 px-1 -mx-1 -my-0.5 rounded-lg transition",children:["Order #",e.id]})}),(0,s.jsx)(m.Z,{displayType:"text",prefix:"$",value:(n/100).toFixed(2),className:"text-lg"})]}),(0,s.jsx)("ul",{className:"pb-4",children:e.items.map((function(e){return(0,s.jsxs)("li",{className:"flex items-center justify-between text-sm",children:[(0,s.jsxs)("span",{children:[e.quantity," x ",e.coffee.name]}),(0,s.jsx)(m.Z,{displayType:"text",prefix:"$",value:(e.coffee.price/100).toFixed(2),className:"opacity-75"})]},e.id)}))})]})]})}var N=n(376),S=n(5969),I=n(475),C=n(9831);function P(e,t,n,r,a,s,i){try{var c=e[s](i),o=c.value}catch(l){return void n(l)}c.done?t(o):Promise.resolve(o).then(r,a)}function Z(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function i(e){P(s,r,a,i,c,"next",e)}function c(e){P(s,r,a,i,c,"throw",e)}i(void 0)}))}}function A(e){var t=(0,p.useRouter)(),n=(0,x.useRef)(null),r=(0,x.useState)(!1),i=r[0],o=r[1],l=(0,x.useState)(!1),d=l[0],f=l[1],h=(0,x.useState)([""]),m=h[0],b=h[1],w=(0,x.useState)(""),j=w[0],y=w[1],N=(0,x.useState)(""),P=N[0],A=N[1],D=(0,x.useState)(""),O=D[0],F=D[1],V=function(){var t=Z(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:f(!1),b([""]),e.setAccountVisible(!1);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),q=function(){var e=Z(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(!1),b([""]),o(!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Z(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(!1),b([""]),o(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();localStorage.getItem("token")&&localStorage.getItem("username")&&("/checkout"==t.pathname?(e.setAccountVisible(!1),n.current=setTimeout((function(){e.setIsAuthed(!0)}),500)):e.setIsAuthed(!0));var _=function(){var e=Z(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),i?(f(!1),(0,v.B5)({mutation:C.Rw,variables:{username:j,password:P}}).then((function(e){localStorage.setItem("token",e.data.signUp.token),localStorage.setItem("username",e.data.signUp.username),y(e.data.signUp.username),z()})).catch((function(e){f(!0),b([e])}))):(f(!1),(0,v.B5)({mutation:C.O2,variables:{username:j,password:P}}).then((function(e){localStorage.setItem("token",e.data.login.token),localStorage.setItem("username",e.data.login.username),y(e.data.login.username),z()})).catch((function(e){f(!0),b([e])})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){f(!1),b([""]),"/checkout"==t.pathname?(e.setAccountVisible(!1),n.current=setTimeout((function(){e.setIsAuthed(!0)}),500)):e.setIsAuthed(!0)},T=function(){var t=Z(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),(0,v.B5)({mutation:C.wK}).then((function(t){localStorage.removeItem("token"),localStorage.removeItem("username"),e.setIsAuthed(!1)})).catch((function(e){f(!0),b([e])}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),B=""!=j&&""!=P,U=""!=j&&""!=P&&""!=O;return(0,x.useEffect)((function(){return function(){return clearTimeout(n.current)}}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"".concat(e.accountVisible?"opacity-100":"opacity-0 pointer-events-none"," fixed inset-0 bg-gray-600/10 dark:bg-black/25 z-50 transition duration-500 ease-in-out"),onClick:V}),(0,s.jsxs)("div",{className:"".concat(e.accountVisible?"opacity-100 bg-white dark:bg-neutral-900 translate-x-0":"opacity-0 translate-x-[120px] pointer-events-none"," fixed top-0 right-0 bottom-0 w-[90%] max-w-[480px] pt-12 dark:text-white/90 shadow-high dark:shadow-highlight overflow-scroll transition duration-500 ease-in-out z-50"),children:[(0,s.jsx)("div",{className:"flex flex-col p-8 space-y-2 border-b border-gray-200 dark:border-white/10",children:e.isAuthed?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"font-semibold text-4xl sm:text-5xl leading-none sm:leading-tight sm:truncate",children:"Your account"}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("p",{className:"flex items-center text-black/75 dark:text-white/75 text-sm sm:text-base",children:["Signed in as ",(0,s.jsx)("span",{className:"flex items-center ml-2 mr-1 opacity-75",children:(0,s.jsx)(c.default,{src:S.Z,className:"dark:invert",loader:u()})})," ",(0,s.jsx)("b",{children:j})]}),(0,s.jsx)("button",{onClick:T,className:"relative whitespace-nowrap text-black/50 dark:text-white/50 hover:text-red-600 dark:hover:text-red-500 hover:bg-red-600/10 rounded-md px-2 py-1 -mx-2 -mx-1 uppercase text-[11px] tracking-widest text-center transition",children:"Sign out"})]})]}):(0,s.jsx)(s.Fragment,{children:i?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"font-semibold text-4xl sm:text-5xl leading-none sm:leading-tight sm:truncate",children:"Create account"}),(0,s.jsxs)("p",{className:"text-black/75 dark:text-white/75 text-sm sm:text-base",children:["Already have an account? ",(0,s.jsx)("button",{className:"text-blue-500 dark:text-blue-400 underline hover:bg-blue-50 dark:hover:bg-blue-500/25 pt-0.5 pb-1 px-1 -mx-1 -my-1 rounded-lg transition",onClick:L,children:"Sign in"})]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"font-semibold text-4xl sm:text-5xl leading-none sm:leading-tight sm:truncate",children:"Sign in"}),(0,s.jsxs)("p",{className:"text-black/75 dark:text-white/75 text-sm sm:text-base",children:["Or create a ",(0,s.jsx)("button",{className:"text-blue-500 dark:text-blue-400 underline hover:bg-blue-50 dark:hover:bg-blue-500/25 pt-0.5 pb-1 px-1 -mx-1 -my-1 rounded-lg transition",onClick:q,children:"new account"})]})]})})}),(0,s.jsx)("div",{className:"flex flex-col px-8 pt-6",children:e.isAuthed?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(k,{setAccountVisible:e.setAccountVisible})}):(0,s.jsxs)("form",{onSubmit:_,children:[d&&m.map((function(e){return(0,s.jsxs)("div",{className:"flex items-center bg-red-600/90 border border-red-600 rounded-lg px-3 py-2 space-x-2",children:[(0,s.jsx)("span",{className:"flex items-center invert opacity-75",children:(0,s.jsx)(c.default,{src:I.Z,loader:u()})}),(0,s.jsx)("p",{className:"text-sm text-white/90",children:e.message})]})})),i?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("fieldset",{className:"flex",children:(0,s.jsx)(g.Z,{value:j,setter:y,id:"username",type:"text",label:"Username",placeholder:"Enter username"})}),(0,s.jsx)("fieldset",{className:"flex",children:(0,s.jsx)(g.Z,{value:P,setter:A,id:"password",type:"password",label:"Password",placeholder:"Enter password"})}),(0,s.jsx)("fieldset",{className:"flex",children:(0,s.jsx)(g.Z,{value:O,setter:F,id:"confirmPassword",type:"password",label:"Confirm password",placeholder:"Confirm password"})}),(0,s.jsx)($,{disabled:!U,signUp:!0})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("fieldset",{className:"flex",children:(0,s.jsx)(g.Z,{value:j,setter:y,id:"username",type:"text",label:"Username",placeholder:"Enter username"})}),(0,s.jsx)("fieldset",{className:"flex",children:(0,s.jsx)(g.Z,{value:P,setter:A,id:"password",type:"password",label:"Password",placeholder:"Enter password"})}),(0,s.jsx)($,{disabled:!B})]})]})}),(0,s.jsx)("button",{className:"absolute top-6 right-6 flex items-center justify-center px-4 h-10 border border-gray-500/25 dark:border-white/20 rounded-lg uppercase tracking-widest text-sm text-black/75 dark:text-white/75 hover:text-black/100 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition",onClick:V,children:"Close"})]})]})}function $(e){return(0,s.jsxs)("button",{className:"".concat(e.disabled?"bg-gray-200 dark:bg-white/5 text-black/25 dark:text-white/25":"bg-black/90 dark:bg-white/90 hover:bg-black dark:hover:bg-white text-white dark:text-black/75 shadow-subtle"," relative flex items-center justify-between w-full h-[72px] px-8 mt-12 text-left text-white rounded-lg  group transition duration-500 ease-in-out overflow-hidden translate-x-0"),disabled:e.disabled,children:[(0,s.jsx)("span",{className:"".concat(e.disabled?"opacity-0":"opacity-100"," absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-white/0 via-white/20 dark:via-white/75 to-white/0 shimmer transition ease-in-out")}),(0,s.jsx)("span",{className:"uppercase tracking-widest text-lg",children:1==e.signUp?"Create account":"Sign In"}),(0,s.jsx)("span",{className:"".concat(e.disabled?"opacity-0":"opacity-75 group-hover:opacity-100"," flex items-center invert dark:invert-0 group-hover:translate-x-[8px] transition duration-500 ease-in-out"),children:(0,s.jsx)(c.default,{src:N.Z,loader:u()})})]})}function D(e,t,n,r,a,s,i){try{var c=e[s](i),o=c.value}catch(l){return void n(l)}c.done?t(o):Promise.resolve(o).then(r,a)}function O(e){var t=function(){var t,n=(t=a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setAccountVisible(!0);case 1:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var s=t.apply(e,n);function i(e){D(s,r,a,i,c,"next",e)}function c(e){D(s,r,a,i,c,"throw",e)}i(void 0)}))});return function(e){return n.apply(this,arguments)}}(),n=!1;return n=localStorage.getItem("token")&&localStorage.getItem("username"),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.default,{children:[(0,s.jsx)("title",{children:"HashiCups - Demo App"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,s.jsx)("link",{href:"/favicon-120.png",rel:"apple-touch-icon-precomposed",sizes:"120x120"}),(0,s.jsx)("link",{href:"/favicon-152.png",rel:"apple-touch-icon-precomposed",sizes:"152x152"}),(0,s.jsx)("link",{href:"/favicon-167.png",rel:"apple-touch-icon-precomposed",sizes:"167x167"}),(0,s.jsx)("link",{href:"/favicon-180.png",rel:"apple-touch-icon-precomposed",sizes:"180x180"})]}),(0,s.jsxs)("header",{className:"relative z-20 xs:z-50 flex flex-col items-center justify-center bg-white dark:bg-black/50 shadow-mid dark:shadow-highlight h-[120px] xs:h-[164px]",children:[(0,s.jsxs)("div",{className:"relative flex items-center justify-between max-w-[1080px] w-full",children:[(0,s.jsx)("div",{className:"flex-1 px-8"}),(0,s.jsx)(o.default,{href:"/",children:(0,s.jsx)("a",{className:"flex cursor-pointer",children:(0,s.jsx)(c.default,{src:"/images/logo.svg",height:88,width:88,className:"scale-[0.85] xs:scale-100",loader:u()})})}),(0,s.jsx)("div",{className:"flex items-center justify-end flex-1 px-8 text-black/75",children:(0,s.jsxs)("button",{onClick:t,className:"flex items-center space-x-2 opacity-75 hover:opacity-100 transition duration-500 ease-in-out dark:invert",children:[(0,s.jsx)("span",{className:"hidden xs:block text-sm tracking-widest uppercase pt-px",children:n?"Account":"Sign in"}),(0,s.jsx)("span",{className:"flex flex-shrink-0",children:(0,s.jsx)(c.default,{src:"/images/user.svg",height:24,width:40,loader:u()})})]})})]}),(0,s.jsx)("div",{className:"absolute left-0 top-0",children:(0,s.jsx)(c.default,{src:"/images/demo.svg",height:88,width:88,loader:u()})})]}),(0,s.jsx)(A,{accountVisible:e.accountVisible,setAccountVisible:e.setAccountVisible,isAuthed:e.isAuthed,setIsAuthed:e.setIsAuthed})]})}},9991:function(e,t,n){n.d(t,{$$:function(){return v},T0:function(){return b},B5:function(){return w}});var r=n(4051),a=n.n(r),s=n(8380),i=n(280),c=n(8067),o=n(7865),l=n(3454);function u(e,t,n,r,a,s,i){try{var c=e[s](i),o=c.value}catch(l){return void n(l)}c.done?t(o):Promise.resolve(o).then(r,a)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function i(e){u(s,r,a,i,c,"next",e)}function c(e){u(s,r,a,i,c,"throw",e)}i(void 0)}))}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}var x="http://localhost:8080";l.env.REACT_APP_PUBLIC_API_URL&&(x=l.env.REACT_APP_PUBLIC_API_URL);var p=(0,s.L)({uri:"".concat(x,"/api")}),m=(0,o.v)((function(e,t){var n=t.headers,r=localStorage.getItem("token");return{headers:h({},n,{authorization:r?"Bearer ".concat(r):""})}})),g=new i.f({link:m.concat(p),cache:new c.h}),v=function(){var e=d(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.query({query:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=d(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.query({query:t.query,variables:t.variables});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=d(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.mutate({mutation:t.mutation,variables:t.variables});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},9831:function(e,t,n){n.d(t,{Rw:function(){return u},O2:function(){return d},wK:function(){return f},Qp:function(){return h},gI:function(){return x}});var r=n(7283);function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(){var e=a(["\n  mutation SignUp($username: String!, $password: String!) {\n    signUp(auth:{\n      username: $username\n      password: $password\n    }) {\n      userId\n      username\n      token\n    }\n  }\n"]);return s=function(){return e},e}function i(){var e=a(["\n  mutation LogIn($username: String!, $password: String!) {\n    login(auth:{\n      username: $username\n      password: $password\n    }) {\n      userId\n      username\n      token\n    }\n  }\n"]);return i=function(){return e},e}function c(){var e=a(["\n  mutation SignOut {\n    signOut\n  }\n"]);return c=function(){return e},e}function o(){var e=a(["\n  mutation SubmitPayment($name: String!, $cardType: String!, $cardNumber: String!, $expiryDate: String!, $cvc: Int!, $amount: Float!) {\n    pay(details: {\n      name: $name,\n      type: $cardType,\n      number: $cardNumber,\n      expiry: $expiryDate,\n      cv2: $cvc,\n      amount: $amount,\n    }) {\n      id,\n      card_plaintext,\n      card_ciphertext,\n      message\n    } \n  }\n"]);return o=function(){return e},e}function l(){var e=a(["\n  mutation CreateOrder($orderItems: [OrderItemInput!]){\n    order(items: $orderItems) {\n      id,\n      items {\n        coffee { id, name, price }\n        quantity\n      }\n    } \n  }\n"]);return l=function(){return e},e}var u=(0,r.ZP)(s()),d=(0,r.ZP)(i()),f=(0,r.ZP)(c()),h=(0,r.ZP)(o()),x=(0,r.ZP)(l())},1321:function(e,t,n){n.d(t,{_P:function(){return d},k5:function(){return f},d8:function(){return h},F7:function(){return x},_5:function(){return p},wc:function(){return m}});var r=n(7283);function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(){var e=a(["\n  query GetCoffees {\n\n    coffees {\n      id\n      name\n      image\n    }\n  }\n"]);return s=function(){return e},e}function i(){var e=a(["\n  query GetCoffee($coffeeID: String!) {\n    coffee(id: $coffeeID) {\n      id\n      name\n      image\n      teaser\n      collection\n      origin\n      color\n      price\n    }\n  }\n"]);return i=function(){return e},e}function c(){var e=a(["\n  query GetCoffee($coffeeID: String!) {\n    coffee(id: $coffeeID) {\n      image\n    }\n  }\n"]);return c=function(){return e},e}function o(){var e=a(["\n  query GetCoffeeIngredients($coffeeID: String!) {\n    coffeeIngredients(coffeeID: $coffeeID) {\n      unit\n      quantity\n      name\n    }\n  }\n"]);return o=function(){return e},e}function l(){var e=a(["\n  query GetAllOrders {\n    orders {\n      id\n      items {\n        coffee { name, price, image }\n        quantity\n      }\n    }\n  }\n"]);return l=function(){return e},e}function u(){var e=a(["\n  query GetOrder($orderID: String!) {\n    order(id: $orderID) {\n      id\n      items {\n        coffee { name, price, image }\n        quantity\n      }\n    }\n  }\n"]);return u=function(){return e},e}var d=(0,r.ZP)(s()),f=(0,r.ZP)(i()),h=(0,r.ZP)(c()),x=(0,r.ZP)(o()),p=(0,r.ZP)(l()),m=(0,r.ZP)(u())}}]);