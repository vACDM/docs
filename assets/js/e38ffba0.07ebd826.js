"use strict";(self.webpackChunkvacdm_docu=self.webpackChunkvacdm_docu||[]).push([[575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):A(A({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,m=d["".concat(i,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(m,A(A({ref:t},p),{},{components:n})):a.createElement(m,A({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,A=new Array(l);A[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:r,A[1]=o;for(var s=2;s<l;s++)A[s]=n[s];return a.createElement.apply(null,A)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>A,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1},A="Installation",o={unversionedId:"developer/installation",id:"developer/installation",title:"Installation",description:"Structure of vACDM",source:"@site/docs/developer/installation.md",sourceDirName:"developer",slug:"/developer/installation",permalink:"/docs/developer/installation",draft:!1,editUrl:"https://github.com/vACDM/docs/tree/main/docs/developer/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Developer & Admin",permalink:"/docs/developer"}},i={},s=[{value:"Structure of vACDM",id:"structure-of-vacdm",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Sample ENV",id:"sample-env",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Use vACDM Frontend",id:"use-vacdm-frontend",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h2",{id:"structure-of-vacdm"},"Structure of vACDM"),(0,r.kt)("p",null,"vACDM is designed, that every vACC is simply able to run their own instance in a docker container, in order to have full control over the system."),(0,r.kt)("p",null,"The vACDM Core System consists of two sub systems:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"vACDM-API: for communication between ES-Plugin and the backend"),(0,r.kt)("li",{parentName:"ul"},"vACDM-worker: for constant time calculations and optimizations")),(0,r.kt)("p",null,"Here you can see an example docker-compose:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.7'\n\nservices:\n  api:\n    image: ghcr.io/vacdm/vacdm:latest\n    container_name: vacdm_api\n    environment:\n      - SERVER_NAME\n      - PORT\n      - ALLOW_OBS_MASTER\n      - ALLOW_SIM\n      - MONGO_URI\n      - ROLE=API\n      - CLIENT_ID\n      - CLIENT_SECRET\n      - PUBLIC_URL\n      - VATSIM_AUTH_URL\n      - JWT_SECRET\n      - EVENT_URL\n      - EVENT_PRIO\n    restart: unless-stopped\n    ports:\n      - 3000:3000\n  worker:\n    image: ghcr.io/vacdm/vacdm:latest\n    container_name: vacdm_worker\n    environment:\n      - MONGO_URI\n      - ROLE\n      - TIME_LAST_SEEN\n      - TIME_INACTIVE\n      - EVENT_URL\n      - EVENT_PRIO\n\n    restart: unless-stopped\n")),(0,r.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SERVER_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the vACDM instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"Port of the API. Default Port is 3000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ALLOW_OBS_MASTER ",(0,r.kt)("br",null),"(true/false. Default: false)"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines if the backend allows Observers to set ",(0,r.kt)("inlineCode",{parentName:"td"},".vacdm master"),".",(0,r.kt)("br",null)," Not recommended for productive use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ALLOW_SIM ",(0,r.kt)("br",null),"(true/false. Default: false)"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines if the backend allows Controllers to set ",(0,r.kt)("inlineCode",{parentName:"td"},".vacdm master")," in sim sessions (i.e. sweatbox). ",(0,r.kt)("br",null)," Not recommended for productive use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MONGO_URI"),(0,r.kt)("td",{parentName:"tr",align:null},"URI of the Database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ROLE (API/WORKER)"),(0,r.kt)("td",{parentName:"tr",align:null},"Both roles need to be defined. Each for every sub system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CLIENT_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"VATSIM AUTH Client ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CLIENT_SECRET"),(0,r.kt)("td",{parentName:"tr",align:null},"VATSIM AUTH Client Secret")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC_URL"),(0,r.kt)("td",{parentName:"tr",align:null},"Base URL of the vACDM Frontend (i.e.: ",(0,r.kt)("a",{parentName:"td",href:"https://vacdm.vatsim-germany.org"},"https://vacdm.vatsim-germany.org"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VATSIM_AUTH_URL"),(0,r.kt)("td",{parentName:"tr",align:null},"VATSIM AUTH URL. Either auth.vatsim.net or auth-dev.vatsim.net")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JWT_SECRET"),(0,r.kt)("td",{parentName:"tr",align:null},"Any JWT token secret of your choice")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EVENT_URL"),(0,r.kt)("td",{parentName:"tr",align:null},"API URL of the booking system (i.e.: ",(0,r.kt)("a",{parentName:"td",href:"http://slots.vatsim-germany.org/api/events/"},"http://slots.vatsim-germany.org/api/events/"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EVENT_PRIO"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial priority of event flights. The higher priority, the less delay of flights")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIME_LAST_SEEN (default 5)"),(0,r.kt)("td",{parentName:"tr",align:null},"Time in minutes until the flight gets marked as inactive in the database when no further update of the flight is received")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIME_INACTIVE (default 5)"),(0,r.kt)("td",{parentName:"tr",align:null},"Time in minutes until inactive flights get deleted from the database")))),(0,r.kt)("h2",{id:"sample-env"},"Sample ENV"),(0,r.kt)("p",null,"With the following env you will be able to start the vACDM instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"MONGO_URI=mongodb+srv://<user>:<password>@<url>/vacdm-dev?retryWrites=true&w=majority\n\nALLOW_SIM=false\nALLOW_OBS_MASTER=false\nSERVER_NAME=vACDM Dev Server\n\nCLIENT_ID=\nCLIENT_SECRET=secret\nPUBLIC_URL=\nVATSIM_AUTH_URL=https://auth-dev.vatsim.net\nJWT_SECRET=secret\n\nBOOKING_URL=http://slots.vatsim-germany.org/api/events/\nBOOKING_PRIO=5\n")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"vACDM needs to connect to a mongoDb instance. We recommend to either set up a docker instance via the docker-compose or - even faster - create a mongoDb via Mongo Atlas."),(0,r.kt)("p",null,"vACDM needs a configuration for every airport where it's used."),(0,r.kt)("p",null,"Until we developed a proper administration UI, you have to send the configuration as the body via a PATCH/POST request to the API (/api/v1/airports)"),(0,r.kt)("p",null,"A configuration looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "icao": "XXXX",\n    "standard_taxitime": 15,\n    "taxizones": [\n        {\n            "polygon": [\n                "N047.27.17.801:E008.33.17.541",\n                "N047.27.14.826:E008.33.20.075",\n                "N047.27.13.203:E008.33.41.744",\n                "N047.27.16.494:E008.33.42.145"\n                //...\n\n            ],\n            "taxitimes": [\n                {\n                    "rwy_designator": "28",\n                    "minutes": 10\n                },\n                //...\n                //Every polygon needs taxitimes to every possible departure runway\n\n            ],\n            "label": "A Gates",\n            "taxiout": false //Is this polygon a taxi out position or not\n        },\n       //...\n\n    ],\n    "capacities": [\n        {\n            "rwy_designator": "28",\n            "capacity": 8,              //number of departures every 10 minutes\n\n            "alias": ""\n            //if you have dependend departure runways, you can add an alias for them that vACDM counts both runways as one\n\n        },\n        //...\n\n    ]\n}\n')),(0,r.kt)("h2",{id:"use-vacdm-frontend"},"Use vACDM Frontend"),(0,r.kt)("p",null,"After the creation of the docker instance and mongo database, you should be able to access the frontend via the PUBLIC_URL"),(0,r.kt)("p",null,"You should see the login page"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"login",src:n(7709).Z,width:"413",height:"158"})),(0,r.kt)("p",null,"After successful login via VATSIM auth or auth-dev the user is updated in the users collection of the database."),(0,r.kt)("p",null,'Until we developed a proper administration UI, you have to set users as "atc" or "admin" manually. This ensures you to get full access on the fontend.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"userscollection",src:n(4544).Z,width:"682",height:"252"})))}u.isMDXComponent=!0},7709:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},4544:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/users_collection-300d403e3ab6976e2b964a5bf377f3de.png"}}]);