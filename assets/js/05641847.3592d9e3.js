"use strict";(self.webpackChunkvacdm_docu=self.webpackChunkvacdm_docu||[]).push([[280],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>k});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),p=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=p(r),c=n,k=u["".concat(d,".").concat(c)]||u[c]||s[c]||l;return r?a.createElement(k,o(o({ref:e},m),{},{components:r})):a.createElement(k,o({ref:e},m))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[u]="string"==typeof t?t:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1862:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:2},o="vACDM Colors",i={unversionedId:"controller-guide/vacdmColors",id:"controller-guide/vacdmColors",title:"vACDM Colors",description:"There are several colors for the different items that are important. Colors can be changed within the settings.",source:"@site/docs/controller-guide/vacdmColors.md",sourceDirName:"controller-guide",slug:"/controller-guide/vacdmColors",permalink:"/docs/docs/controller-guide/vacdmColors",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/controller-guide/vacdmColors.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Use vACDM as a controller",permalink:"/docs/docs/controller-guide/usevacdm"},next:{title:"Pilots - Basics",permalink:"/docs/docs/category/pilots---basics"}},d={},p=[{value:"EOBT / TOBT",id:"eobt--tobt",level:2},{value:"TSAT",id:"tsat",level:2},{value:"ASRT / AORT",id:"asrt--aort",level:2},{value:"ASAT",id:"asat",level:2},{value:"TTOT",id:"ttot",level:2}],m={toc:p},u="wrapper";function s(t){let{components:e,...r}=t;return(0,n.kt)(u,(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vacdm-colors"},"vACDM Colors"),(0,n.kt)("p",null,"There are several colors for the different items that are important. Colors can be changed within the settings."),(0,n.kt)("p",null,"Below you can find the items with the different colors and it's meaning for the ACDM process."),(0,n.kt)("h2",{id:"eobt--tobt"},"EOBT / TOBT"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Color"),(0,n.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"light green"),(0,n.kt)("td",{parentName:"tr",align:null},"TOBT in the future, not confirmed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"green"),(0,n.kt)("td",{parentName:"tr",align:null},"TOBT confirmed, not expired, within the next hour, difference between TOBT and TSAT less than 5 minutes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"light yellow"),(0,n.kt)("td",{parentName:"tr",align:null},"TOBT not confirmed, difference TOBT and TSAT more than 5 minutes (startup delay)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"yellow"),(0,n.kt)("td",{parentName:"tr",align:null},"TOBT confirmed, difference TOBT and TSAT more than 5 minutes (startup delay)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"orange"),(0,n.kt)("td",{parentName:"tr",align:null},"TOBT confirmed, difference TOBT and TSAT more than 5 minutes (startup delay)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gray"),(0,n.kt)("td",{parentName:"tr",align:null},"Outbound has startup")))),(0,n.kt)("h2",{id:"tsat"},"TSAT"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Color"),(0,n.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"light green"),(0,n.kt)("td",{parentName:"tr",align:null},"NOW < TSAT - 5 minutes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"green"),(0,n.kt)("td",{parentName:"tr",align:null},"NOW = TSAT +/- 5 minutes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"orange"),(0,n.kt)("td",{parentName:"tr",align:null},"TSAT expired (NOW > TSAT + 5 minutes)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gray"),(0,n.kt)("td",{parentName:"tr",align:null},"with ASAT (startup)")))),(0,n.kt)("h2",{id:"asrt--aort"},"ASRT / AORT"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Color"),(0,n.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"green"),(0,n.kt)("td",{parentName:"tr",align:null},"ASRT / AORT older 0 - 5 mintes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"yellow"),(0,n.kt)("td",{parentName:"tr",align:null},"ASRT / AORT older 5 - 10 minutes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"orange"),(0,n.kt)("td",{parentName:"tr",align:null},"ASRT / AORT older 10 - 15 minutes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"red"),(0,n.kt)("td",{parentName:"tr",align:null},"ASRT / AORT older 15 minutes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gray"),(0,n.kt)("td",{parentName:"tr",align:null},"with ASAT / AOBT")))),(0,n.kt)("h2",{id:"asat"},"ASAT"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Color"),(0,n.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"green"),(0,n.kt)("td",{parentName:"tr",align:null},"ASAT + 5 minutes (pushback) or ASAT + 10 minutes (taxi out)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"orange"),(0,n.kt)("td",{parentName:"tr",align:null},"Pushback Window expired")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gray"),(0,n.kt)("td",{parentName:"tr",align:null},"with AOBT")))),(0,n.kt)("h2",{id:"ttot"},"TTOT"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Color"),(0,n.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"green"),(0,n.kt)("td",{parentName:"tr",align:null},"NOW < TTOT or still valid TTOT Block")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"orange"),(0,n.kt)("td",{parentName:"tr",align:null},"TTOT Block expired (e.g. TTOT 1213, orange at 1220)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gray"),(0,n.kt)("td",{parentName:"tr",align:null},"with AOBT")))))}s.isMDXComponent=!0}}]);