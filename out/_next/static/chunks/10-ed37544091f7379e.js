"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10],{3259:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(5893),s=(a(9669),a(8100),a(5675)),i=a(7294),c=a(7333),n=a(4051),l=a.n(n),o=a(1163),d=a(6267),x=a.n(d),h=a(376);function f(e,t,a,r,s,i,c){try{var n=e[i](c),l=n.value}catch(o){return void a(o)}n.done?t(l):Promise.resolve(l).then(r,s)}function m(e){var t=(0,o.useRouter)(),a=function(){var e,a=(e=l().mark((function e(a){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.push("/checkout");case 1:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(r,s){var i=e.apply(t,a);function c(e){f(i,r,s,c,n,"next",e)}function n(e){f(i,r,s,c,n,"throw",e)}c(void 0)}))});return function(e){return a.apply(this,arguments)}}();return(0,r.jsxs)("button",{className:"".concat(e.disabled?"bg-gray-200 dark:bg-white/5 text-black/25 dark:text-white/25":"bg-black/90 dark:bg-white/90 hover:bg-black dark:hover:bg-white text-white dark:text-black/75 shadow-subtle"," relative flex items-center justify-between h-[72px] px-8 text-left text-white rounded-lg group transition duration-500 ease-in-out overflow-hidden translate-x-0 flex-shrink-0 mx-8 xs:mx-0 mb-8 xs:mb-0"),disabled:e.disabled,onClick:a,children:[(0,r.jsx)("span",{className:"".concat(e.disabled?"opacity-0":"opacity-100"," absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-white/0 via-white/20 dark:via-white/75 to-white/0 shimmer transition ease-in-out")}),(0,r.jsx)("span",{className:"uppercase tracking-widest text-lg pr-4 block xs:hidden sm:block",children:"Checkout"}),(0,r.jsx)("span",{className:"".concat(e.disabled?"opacity-0":"opacity-75 group-hover:opacity-100"," flex items-center invert dark:invert-0 group-hover:translate-x-[8px] transition duration-500 ease-in-out"),children:(0,r.jsx)(s.default,{src:h.Z,loader:x()})})]})}a(5078),a(3747);function u(e){var t=(0,i.useState)(""),a=(t[0],t[1]),s={};localStorage.getItem("cart")&&(s=JSON.parse(localStorage.getItem("cart")));var c=function(t){delete s[t],localStorage.setItem("cart",JSON.stringify(s)),void 0!=e.onRemoveItem&&(console.log("hello"),e.onRemoveItem()),a(s)};return(0,r.jsx)(r.Fragment,{children:e.isSticky?(0,r.jsx)("div",{className:"".concat(e.cartVisible?"sticky h-[240px] xs:h-[150px]":"relative h-[0px]"," flex items-end w-screen bottom-0 z-40"),children:(0,r.jsx)("div",{className:"".concat(e.cartVisible?"opacity-100 translate-y-[0]":"opacity-0 translate-y-[240px] xs:translate-y-[150px]"," fixed bottom-0 w-screen h-[240px] xs:h-[150px] flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-lg bottom-0 shadow-cart dark:shadow-darkCart transition ease-in-out duration-500"),children:(0,r.jsxs)("div",{className:"flex flex-col xs:flex-row xs:items-center xs:space-x-8 xs:pr-8",children:[s?(0,r.jsx)("div",{className:"flex xs:border-r border-gray-200 dark:border-white/20 h-[150px]",children:(0,r.jsx)(p,{data:s,removeItemFromCart:c})}):(0,r.jsx)("p",{className:"py-8",children:"No items"}),(0,r.jsx)(m,{color:"#000",setCartVisible:e.setCartVisible})]})})}):(0,r.jsx)("div",{className:"flex",children:s?(0,r.jsx)(p,{data:s,allowOverflow:!0,removeItemFromCart:c}):(0,r.jsx)("p",{className:"py-8",children:"No items"})})})}function p(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("ul",{className:"".concat(e.allowOverflow?"flex-wrap":"overflow-x-auto overflow-y-hidden scroll-style"," flex items-center "),children:Object.values(e.data).map((function(t){return(0,r.jsx)(v,{coffee:t.coffee,count:t.quantity,price:t.coffee.price,removeItemFromCart:e.removeItemFromCart},t.coffee.id)}))})})}function v(e){return(0,r.jsxs)("li",{className:"relative flex items-center group flex-shrink-0 last:pr-8",children:[(0,r.jsxs)("div",{className:"relative flex flex-col items-center overflow-hidden",children:[(0,r.jsxs)("div",{className:"flex",children:[e.count>2&&(0,r.jsx)("img",{className:"relative mr-[-85px] scale-90 z-0 flex-shrink-0 opacity-80",src:"/images/thumbnails".concat(e.coffee.image),width:100,height:100,loader:x()}),e.count>1&&(0,r.jsx)("img",{className:"relative mr-[-85px] scale-95 z-0 flex-shrink-0 opacity-90",src:"/images/thumbnails".concat(e.coffee.image),width:100,height:100,loader:x()}),(0,r.jsx)("img",{className:"relative flex-shrink-0",src:"/images/thumbnails".concat(e.coffee.image),width:100,height:100,loader:x()})]}),(0,r.jsx)("span",{className:"absolute right-5 top-3 text-sm text-white dark:text-black px-2 bg-black/75 dark:bg-white/90 backdrop-blur-md rounded-full",children:e.count})]}),(0,r.jsxs)("div",{className:"relative flex flex-col items-start -ml-2",children:[(0,r.jsx)("span",{className:"whitespace-nowrap text-black/75 dark:text-white/75 uppercase text-[10px] tracking-widest text-center",children:e.coffee.name}),(0,r.jsx)("span",{className:"whitespace-nowrap text-black/75 dark:text-white/75 uppercase text-[10px] tracking-widest text-center",children:(0,r.jsx)(c.Z,{displayType:"text",prefix:"$",value:(e.price/100).toFixed(2)})}),(0,r.jsx)("button",{className:"whitespace-nowrap text-black/50 dark:text-white/50 hover:text-red-600 dark:hover:text-red-500 hover:bg-red-600/10 rounded-md px-2 py-1 -mx-2 uppercase text-[10px] tracking-widest text-center mt-1 transition",onClick:function(t){e.removeItemFromCart(e.coffee.id)},children:"Remove"})]})]})}},4005:function(e,t,a){a.d(t,{Z:function(){return b}});var r=a(4051),s=a.n(r),i=a(5893),c=a(7294),n=a(6261),l=a(9991),o=a(1321),d=a(8100),x=a(1664),h=a(5675),f=a(6267),m=a.n(f),u=a(7112);function p(e,t,a,r,s,i,c){try{var n=e[i](c),l=n.value}catch(o){return void a(o)}n.done?t(l):Promise.resolve(l).then(r,s)}var v=n.ZP.Element,g=n.ZP.scroller;function b(e){!function(){var e,t=(e=s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get(t).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(r,s){var i=e.apply(t,a);function c(e){p(i,r,s,c,n,"next",e)}function n(e){p(i,r,s,c,n,"throw",e)}c(void 0)}))})}();var t,a=(0,d.ZP)(o._P,l.$$),r=a.data,n=a.error;r&&(t=r.data.coffees);var x="coffee-"+e.isActive;return(0,c.useEffect)((function(){t&&g.scrollTo(x,{duration:500,delay:50,offset:-120,smooth:!0,horizontal:!0,containerId:"containerElement"})})),(0,i.jsx)(i.Fragment,{children:1==e.isHero?(0,i.jsx)(i.Fragment,{children:t?(0,i.jsx)("ul",{className:"grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-0 xs:gap-8 pt-8 pb-16 items-center justify-center",children:t.map((function(t){return(0,i.jsx)(w,{isInHero:e.isHero,coffee:t},t.id)}))}):(0,i.jsx)("div",{className:"flex items-center justify-center py-12",children:n?(0,i.jsxs)("div",{className:"flex flex-col items-center text-black/75 dark:text-white/75",children:[(0,i.jsx)(h.default,{src:u.Z,className:"opacity-50 dark:invert",loader:m()}),(0,i.jsx)("h4",{className:"mt-4",children:"Unable to query all coffees."}),(0,i.jsx)("p",{className:"text-sm opacity-75",children:"Check the console for error messages."})]}):(0,i.jsx)("li",{className:"flex justify-center items-center w-full",children:(0,i.jsx)("span",{className:"animate-ping w-3 h-3 rounded-full bg-gray-200 dark:bg-white/25"})})})}):(0,i.jsx)("nav",{className:"relative z-10 flex items-center justify-center px-0 bg-white/50 dark:bg-black/25 shadow-low dark:shadow-highlight",children:t?(0,i.jsx)(v,{id:"containerElement",className:"flex items-center h-[180px] overflow-x-auto scroll-style",children:t.map((function(t){return(0,i.jsx)(v,{name:"coffee-".concat(t.id),className:"flex-shrink-0",children:(0,i.jsx)(w,{coffee:t,isActive:e.isActive})},t.id)}))}):(0,i.jsx)("div",{className:"flex items-center h-[180px]",children:n?(0,i.jsxs)("div",{className:"flex flex-col items-center text-black/75 dark:text-white/75",children:[(0,i.jsx)(h.default,{src:u.Z,className:"opacity-50 dark:invert",loader:m()}),(0,i.jsx)("h4",{className:"mt-4",children:"Unable to query all coffees."}),(0,i.jsx)("p",{className:"text-sm opacity-75",children:"Check the console for error messages."})]}):(0,i.jsx)("li",{className:"flex justify-center items-center w-full",children:(0,i.jsx)("span",{className:"animate-ping w-3 h-3 rounded-full bg-gray-200 dark:bg-white/25"})})})})})}function w(e){var t=e.coffee.id==e.isActive;return(0,i.jsx)(i.Fragment,{children:1==e.isInHero?(0,i.jsx)("li",{className:"flex",children:(0,i.jsx)(x.default,{href:"/coffee/".concat(e.coffee.id),children:(0,i.jsxs)("a",{className:"relative flex flex-col items-center group bg-white/0 hover:bg-white/100 dark:hover:bg-white/5 hover:shadow-high dark:hover:shadow-highlight rounded-xl pb-4 transition ease-in-out duration-500",children:[(0,i.jsx)("img",{className:"flex-shrink-0 group-hover:scale-125 transition ease-in-out duration-500",src:"/images/thumbnails".concat(e.coffee.image," "),width:200,height:200,loader:m()}),(0,i.jsx)("span",{className:"font-medium text-black/75 dark:text-white/90 text-center",children:"".concat(e.coffee.name," ")})]})})}):(0,i.jsx)("li",{className:"flex flex-shrink-0 overflow-visible",children:(0,i.jsx)(x.default,{href:"/coffee/".concat(e.coffee.id),scroll:!1,children:(0,i.jsxs)("a",{className:"relative flex flex-col items-center group",children:[(0,i.jsx)("div",{className:"flex flex-col items-center w-full h-full overflow-hidden",children:(0,i.jsx)("img",{className:"".concat(t?"scale-125":"scale-100"," flex - shrink - 0 group - hover: scale - 125 transition ease -in -out duration - 500"),src:"/images/thumbnails".concat(e.coffee.image),width:120,height:120,loader:m()})}),(0,i.jsx)("span",{className:"absolute left-1/2 bottom-2 translate-x-[-50%] translate-y-[4px] group-hover:translate-y-0 whitespace-nowrap text-black/75 uppercase text-[10px] tracking-widest text-center bg-gray-50 backdrop-blur-md py-0.5 px-2 shadow-mid rounded-full opacity-0 group-hover:opacity-100 transition ease-in-out duration-500 hover:delay-500",children:"".concat(e.coffee.name," ")}),(0,i.jsx)("span",{className:"".concat(t?"opacity-100 group-hover:translate-y-[8px]":"opacity-0"," flex bg - black / 75 dark: bg - white / 75 w - 1.5 h - 1.5 rounded - full transition duration - 300")})]})})})})}}}]);