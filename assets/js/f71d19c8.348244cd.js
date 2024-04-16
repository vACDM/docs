"use strict";(self.webpackChunkvacdm_docu=self.webpackChunkvacdm_docu||[]).push([[9135],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>k});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var d=n.createContext({}),m=function(t){var e=n.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=m(r),s=a,k=u["".concat(d,".").concat(s)]||u[s]||c[s]||l;return r?n.createElement(k,o(o({ref:e},p),{},{components:r})):n.createElement(k,o({ref:e},p))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[u]="string"==typeof t?t:a,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7021:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:2},o="vACDM Colors",i={unversionedId:"controller/vacdm-colors",id:"controller/vacdm-colors",title:"vACDM Colors",description:"There are several colors for the different items that are important. Colors can be changed within the settings.",source:"@site/docs/controller/vacdm-colors.md",sourceDirName:"controller",slug:"/controller/vacdm-colors",permalink:"/docs/controller/vacdm-colors",draft:!1,editUrl:"https://github.com/vACDM/docs/tree/main/docs/controller/vacdm-colors.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Use vACDM as a controller",permalink:"/docs/controller/use-vacdm"},next:{title:"EuroScope Commands",permalink:"/docs/controller/vacdm-commands"}},d={},m=[{value:"EOBT / TOBT",id:"eobt--tobt",level:2},{value:"TSAT",id:"tsat",level:2},{value:"ASRT / AORT",id:"asrt--aort",level:2},{value:"ASAT",id:"asat",level:2},{value:"TTOT",id:"ttot",level:2}],p={toc:m},u="wrapper";function c(t){let{components:e,...r}=t;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vacdm-colors"},"vACDM Colors"),(0,a.kt)("p",null,"There are several colors for the different items that are important. Colors can be changed within the settings."),(0,a.kt)("p",null,"Below you can find the items with the different colors and it's meaning for the ACDM process."),(0,a.kt)("h2",{id:"eobt--tobt"},"EOBT / TOBT"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Color"),(0,a.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"light green"),(0,a.kt)("td",{parentName:"tr",align:null},"TOBT in the future, not confirmed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"green"),(0,a.kt)("td",{parentName:"tr",align:null},"TOBT confirmed, not expired, within the next hour, difference between TOBT and TSAT less than 5 minutes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"light yellow"),(0,a.kt)("td",{parentName:"tr",align:null},"TOBT not confirmed, difference TOBT and TSAT more than 5 minutes (startup delay)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"yellow"),(0,a.kt)("td",{parentName:"tr",align:null},"TOBT confirmed, difference TOBT and TSAT more than 5 minutes (startup delay)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"orange"),(0,a.kt)("td",{parentName:"tr",align:null},"TOBT confirmed, difference TOBT and TSAT more than 5 minutes (startup delay)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gray"),(0,a.kt)("td",{parentName:"tr",align:null},"Outbound has startup")))),(0,a.kt)("h2",{id:"tsat"},"TSAT"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Color"),(0,a.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"light green"),(0,a.kt)("td",{parentName:"tr",align:null},"NOW < TSAT - 5 minutes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"green"),(0,a.kt)("td",{parentName:"tr",align:null},"NOW = TSAT +/- 5 minutes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"orange"),(0,a.kt)("td",{parentName:"tr",align:null},"TSAT expired (NOW > TSAT + 5 minutes)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gray"),(0,a.kt)("td",{parentName:"tr",align:null},"with ASAT (startup)")))),(0,a.kt)("h2",{id:"asrt--aort"},"ASRT / AORT"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Color"),(0,a.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"green"),(0,a.kt)("td",{parentName:"tr",align:null},"ASRT / AORT older 0 - 5 mintes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"yellow"),(0,a.kt)("td",{parentName:"tr",align:null},"ASRT / AORT older 5 - 10 minutes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"orange"),(0,a.kt)("td",{parentName:"tr",align:null},"ASRT / AORT older 10 - 15 minutes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"red"),(0,a.kt)("td",{parentName:"tr",align:null},"ASRT / AORT older 15 minutes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gray"),(0,a.kt)("td",{parentName:"tr",align:null},"with ASAT / AOBT")))),(0,a.kt)("h2",{id:"asat"},"ASAT"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Color"),(0,a.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"green"),(0,a.kt)("td",{parentName:"tr",align:null},"ASAT + 5 minutes (pushback) or ASAT + 10 minutes (taxi out)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"orange"),(0,a.kt)("td",{parentName:"tr",align:null},"Pushback Window expired")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gray"),(0,a.kt)("td",{parentName:"tr",align:null},"with AOBT")))),(0,a.kt)("h2",{id:"ttot"},"TTOT"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Color"),(0,a.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"green"),(0,a.kt)("td",{parentName:"tr",align:null},"NOW < TTOT or still valid TTOT Block")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"orange"),(0,a.kt)("td",{parentName:"tr",align:null},"TTOT Block expired (e.g. TTOT 1213, orange at 1220)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gray"),(0,a.kt)("td",{parentName:"tr",align:null},"with AOBT")))))}c.isMDXComponent=!0}}]);