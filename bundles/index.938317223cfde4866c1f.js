/*! For license information please see index.938317223cfde4866c1f.js.LICENSE.txt */
(()=>{"use strict";var e,t={228:(e,t,n)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,a(r.key),r)}}function i(e,t,n){return(t=a(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(t)?t:t+""}function u(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=l(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function c(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{RX:()=>m,_w:()=>d,kg:()=>g,qC:()=>b});function s(e){return Array.isArray(e)}var h=function(e){return e instanceof DocumentFragment};function p(e){return function(e){return e instanceof Promise}(e)?e:Promise.resolve(e)}function d(e,t){if(void 0===e)throw new Error("Unexpected ".concat(e).concat(t?" for ".concat(t):"",")}"));return e}var y=function e(t){if(t instanceof HTMLElement)return t;if(t instanceof Text)return t;if(h(t))return t;if(s(t))return function(e){var t,n=document.createDocumentFragment(),r=u(function(e){return s(e)?e:h(e)?c(e.childNodes):e?[e]:[]}(e));try{for(r.s();!(t=r.n()).done;){var o=t.value;n.append(o)}}catch(e){r.e(e)}finally{r.f()}return n}(t.map(e));if(t instanceof Promise){var n=v("");return t.then((function(e){var t=v(e);n.replaceWith(t),n.replaceWith=function(e){return t.replaceWith(e)}})),n}if(t&&"function"==typeof t.subscribe){var r=v("");return t.subscribe((function(e){var t=v(e);r.replaceWith(t),r.replaceWith=function(e){return t.replaceWith(e)}})),r}var o;return o=t||0===t?"number"==typeof t||"string"==typeof t||"boolean"==typeof t||t instanceof String?t.toString():JSON.stringify(t):"",document.createTextNode(o)},v=function(e){var t=y(e);if(!(h(t)||t instanceof Text))return t;var n=document.createElement("span");return n.appendChild(t),n},m=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),i(this,"value",void 0),i(this,"actions",void 0),i(this,"_textNode",null),this.actions=[],this.value=t}return t=e,r=[{key:"or",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var o=new e(n.map((function(e){return e.value}))),i=function(e){n[e].silentSubscribe((function(t){return o.set((o.value[e]=t,c(o.value)))}))};for(var a in n)i(a);return o}},{key:"asRX",value:function(t){return t instanceof e?t:new e(t)}}],(n=[{key:"silentSubscribe",value:function(e){this.actions.push(e)}},{key:"subscribe",value:function(e){this.silentSubscribe(e),e(this.value)}},{key:"set",value:function(e){this._set(e)}},{key:"_set",value:function(e){if(e!==this.value){this.value=e;var t,n=u(this.actions);try{for(n.s();!(t=n.n()).done;)(0,t.value)(e)}catch(e){n.e(e)}finally{n.f()}}return e}},{key:"map",value:function(t){var n=new e(t(this.value));return this.silentSubscribe((function(e){return n._set(t(e))})),n}},{key:"textNode",value:function(){var e=this;return this._textNode||(this._textNode=document.createTextNode(this.value.toString())),this.silentSubscribe((function(t){return e._textNode.textContent=t.toString()})),this._textNode}},{key:"nodeRX",value:function(e){var t=v(e(this.value));return this.silentSubscribe((function(n){var r=v(e(n));t.replaceWith(r),t=r})),t}},{key:"ls",value:function(e){var t=localStorage.getItem(e);return t&&this.set(JSON.parse(t)),this.subscribe((function(t){return localStorage.setItem(e,JSON.stringify(t))})),this}}])&&o(t.prototype,n),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n,r}();function b(e){var t=document.createElement("script");t.src=e;var n=new Promise((function(e){t.addEventListener("load",(function(){return e()}))}));return document.head.append(t),n}var g=function e(t,n){return"function"==typeof t?e(t(),n):(t=p(t),n=v(n),t.then((function(e){var t=v(e);n.replaceWith(t),n.replaceWith=function(e){return t.replaceWith(e)}})),n)}},349:(e,t,n)=>{n.d(t,{FK:()=>w,I4:()=>N,Y:()=>x});const r=Object.keys;function o(e){return"string"==typeof e}function i(e){return"number"==typeof e}function a(e){return"object"==typeof e?null!==e:u(e)}function u(e){return"function"==typeof e}function c(e,t){if(e)for(const n of r(e))t(e[n],n)}const l={animationIterationCount:0,borderImageOutset:0,borderImageSlice:0,borderImageWidth:0,boxFlex:0,boxFlexGroup:0,boxOrdinalGroup:0,columnCount:0,columns:0,flex:0,flexGrow:0,flexPositive:0,flexShrink:0,flexNegative:0,flexOrder:0,gridArea:0,gridRow:0,gridRowEnd:0,gridRowSpan:0,gridRowStart:0,gridColumn:0,gridColumnEnd:0,gridColumnSpan:0,gridColumnStart:0,fontWeight:0,lineClamp:0,lineHeight:0,opacity:0,order:0,orphans:0,tabSize:0,widows:0,zIndex:0,zoom:0,fillOpacity:0,floodOpacity:0,stopOpacity:0,strokeDasharray:0,strokeDashoffset:0,strokeMiterlimit:0,strokeOpacity:0,strokeWidth:0},f=["Webkit","ms","Moz","O"];r(l).forEach((e=>{f.forEach((t=>{l[function(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}(t,e)]=0}))}));const s=Symbol.for("jsx-dom:type");var h=function(e){return e.ShadowRoot="ShadowRoot",e}(h||{});const p="http://www.w3.org/2000/svg",d="http://www.w3.org/1999/xlink",y="http://www.w3.org/XML/1998/namespace";function v(e){return!("boolean"==typeof e||null==e)}function m(e){return Array.isArray(e)?e.map(m).filter(Boolean).join(" "):a(e)?Symbol.iterator in e?m(Array.from(e)):r(e).filter((t=>e[t])).join(" "):v(e)?""+e:""}const b={animate:0,circle:0,clipPath:0,defs:0,desc:0,ellipse:0,feBlend:0,feColorMatrix:0,feComponentTransfer:0,feComposite:0,feConvolveMatrix:0,feDiffuseLighting:0,feDisplacementMap:0,feDistantLight:0,feFlood:0,feFuncA:0,feFuncB:0,feFuncG:0,feFuncR:0,feGaussianBlur:0,feImage:0,feMerge:0,feMergeNode:0,feMorphology:0,feOffset:0,fePointLight:0,feSpecularLighting:0,feSpotLight:0,feTile:0,feTurbulence:0,filter:0,foreignObject:0,g:0,image:0,line:0,linearGradient:0,marker:0,mask:0,metadata:0,path:0,pattern:0,polygon:0,polyline:0,radialGradient:0,rect:0,stop:0,svg:0,switch:0,symbol:0,text:0,textPath:0,tspan:0,use:0,view:0},g=/^(a(ll|t|u)|base[FP]|c(al|lipPathU|on)|di|ed|ex|filter[RU]|g(lyphR|r)|ke|l(en|im)|ma(rker[HUW]|s)|n|pat|pr|point[^e]|re[^n]|s[puy]|st[^or]|ta|textL|vi|xC|y|z)/;function w(e){const t=document.createDocumentFragment();return k(e.children,t),t}function x(e,t){let n,{children:i,...c}=t;if(c.namespaceURI||0!==b[e]||(c={...c,namespaceURI:p}),o(e)){if(n=c.namespaceURI?document.createElementNS(c.namespaceURI,e):document.createElement(e),function(e,t){for(const n of r(e))O(n,e[n],t)}(c,n),k(i,n),n instanceof window.HTMLSelectElement&&null!=c.value)if(!0===c.multiple&&Array.isArray(c.value)){const e=c.value.map((e=>String(e)));n.querySelectorAll("option").forEach((t=>t.selected=e.includes(t.value)))}else n.value=c.value;S(c.ref,n)}else{if(!u(e))throw new TypeError(`Invalid JSX element type: ${e}`);a(e.defaultProps)&&(c={...e.defaultProps,...c}),n=function(e){const{prototype:t}=e;return!(!t||!t.isReactComponent)}(e)?function(e,t,n){const r=new e(t={...t,children:n}),o=r.render();return"ref"in t&&S(t.ref,r),o}(e,c,i):e({...c,children:i})}return n}function S(e,t){var n;a(n=e)&&"current"in n?e.current=t:u(e)&&e(t)}function k(e,t){if(a(u=e)&&"number"==typeof u.length&&"number"!=typeof u.nodeType)!function(e,t){for(const n of[...e])k(n,t)}(e,t);else if(o(e)||i(e))E(document.createTextNode(e),t);else if(null===e)E(document.createComment(""),t);else if((r=e)&&"number"==typeof r.nodeType)E(e,t);else if(null!=(n=e)&&n[s]===h.ShadowRoot){const n=t.attachShadow(e.attr);k(e.children,n),S(e.ref,n)}var n,r,u}function E(e,t){t instanceof window.HTMLTemplateElement?t.content.appendChild(e):t.appendChild(e)}function L(e,t){return e.replace(/[A-Z]/g,(e=>t+e.toLowerCase()))}function T(e,t){null==t||!1===t||(Array.isArray(t)?t.forEach((t=>T(e,t))):o(t)?e.setAttribute("style",t):a(t)&&c(t,((t,n)=>{0===n.indexOf("-")?e.style.setProperty(n,t):i(t)&&0!==l[n]?e.style[n]=t+"px":e.style[n]=t})))}function O(e,t,n){switch(e){case"xlinkActuate":case"xlinkArcrole":case"xlinkHref":case"xlinkRole":case"xlinkShow":case"xlinkTitle":case"xlinkType":return void j(n,d,L(e,":"),t);case"xmlnsXlink":return void A(n,L(e,":"),t);case"xmlBase":case"xmlLang":case"xmlSpace":return void j(n,y,L(e,":"),t)}switch(e){case"htmlFor":return void A(n,"for",t);case"dataset":return void c(t,((e,t)=>{null!=e&&(n.dataset[t]=e)}));case"innerHTML":case"innerText":case"textContent":return void(v(t)&&(n[e]=t));case"dangerouslySetInnerHTML":return void(a(t)&&(n.innerHTML=t.__html));case"value":if(null==t||n instanceof window.HTMLSelectElement)return;if(n instanceof window.HTMLTextAreaElement)return void(n.value=t);break;case"spellCheck":return void(n.spellcheck=t);case"class":case"className":return void(u(t)?t(n):A(n,"class",m(t)));case"ref":case"namespaceURI":return;case"style":return void T(n,t);case"on":case"onCapture":return void c(t,((t,r)=>{n.addEventListener(r,t,"onCapture"===e)}))}if(u(t)){if("o"===e[0]&&"n"===e[1]){let r=e.toLowerCase();const o=r.endsWith("capture");if("ondoubleclick"===r?r="ondblclick":o&&"ondoubleclickcapture"===r&&(r="ondblclickcapture"),o||null!==n[r])if(o)n.addEventListener(r.substring(2,r.length-7),t,!0);else{let o;o=r in window?r.substring(2):r[2]+e.slice(3),n.addEventListener(o,t)}else n[r]=t}}else a(t)?n[e]=t:!0===t?A(n,e,""):!1!==t&&null!=t&&(n instanceof SVGElement&&!g.test(e)?A(n,L(e,"-"),t):A(n,e,t))}function A(e,t,n){e.setAttribute(t,n)}function j(e,t,n,r){e.setAttributeNS(t,n,r)}const C=new Map,P=e=>function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return n=>{let{style:i,...a}=n;const u=t.length-1,c=t.slice(0,u).reduce(((e,t,n)=>{const o=r[n];return e+t+("function"==typeof o?o(a):o)}),"")+t[u];return function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(o(t)||Array.isArray(t))&&(r.unshift(t),t={}),null==(t=t||{}).children||r.length||({children:r,...t}=t),x(e,{...t,children:r},t.key)}(e,{style:[c,i],...a})}},N=new Proxy((e=>P(e)),{get:(e,t)=>function(e,n,r){if(e.has(n))return e.get(n);{const r=P(t);return e.set(n,r),r}}(C,t)})},633:(e,t,n)=>{n.d(t,{FD:()=>r.Y,FK:()=>r.FK,Y:()=>r.Y});var r=n(349)}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>"bundles/"+e+"."+{46:"52190b623ac7f025e0d0",79:"92ef7b20a6ce3d79ab83",169:"92fc843c05b2f0e07d68",363:"41d79d38c34f93755fe5",920:"407410aaa368a5eb35b8"}[e]+".js",r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},r.l=(t,n,o,i)=>{if(e[t])e[t].push(n);else{var a,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==t){a=f;break}}a||(u=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=t),e[t]=[n];var s=(n,r)=>{a.onerror=a.onload=null,clearTimeout(h);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(r))),n)return n(r)},h=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),u&&document.head.appendChild(a)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="",(()=>{var e={57:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise(((n,r)=>o=e[t]=[n,r]));n.push(o[2]=i);var a=r.p+r.u(t),u=new Error;r.l(a,(n=>{if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}}),"chunk-"+t,t)}};var t=(t,n)=>{var o,i,[a,u,c]=n,l=0;if(a.some((t=>0!==e[t]))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);c&&c(r)}for(t&&t(n);l<a.length;l++)i=a[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{var e=r(228),t=r(633);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(){o=function(){return t};var e,t={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function h(e,t,n,r){var o=t&&t.prototype instanceof g?t:g,i=Object.create(o.prototype),u=new N(r||[]);return a(i,"_invoke",{value:A(e,n,u)}),i}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=h;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",b={};function g(){}function w(){}function x(){}var S={};s(S,c,(function(){return this}));var k=Object.getPrototypeOf,E=k&&k(k(_([])));E&&E!==r&&i.call(E,c)&&(S=E);var L=x.prototype=g.prototype=Object.create(S);function T(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(o,a,u,c){var l=p(e[o],e,a);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==n(s)&&i.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,u,c)}),(function(e){r("throw",e,u,c)})):t.resolve(s).then((function(e){f.value=e,u(f)}),(function(e){return r("throw",e,u,c)}))}c(l.arg)}var o;a(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}})}function A(t,n,r){var o=d;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var c=j(u,r);if(c){if(c===b)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var l=p(t,n,r);if("normal"===l.type){if(o=r.done?m:y,l.arg===b)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=m,r.method="throw",r.arg=l.arg)}}}function j(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var i=p(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,b;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,b):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function _(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(i.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}throw new TypeError(n(t)+" is not iterable")}return w.prototype=x,a(L,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:w,configurable:!0}),w.displayName=s(x,f,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,s(e,f,"GeneratorFunction")),e.prototype=Object.create(L),e},t.awrap=function(e){return{__await:e}},T(O.prototype),s(O.prototype,l,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new O(h(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},T(L),s(L,f,"Generator"),s(L,c,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=_,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:_(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),b}},t}function i(e){if(null==e)throw new TypeError("Cannot destructure "+e)}function a(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){a(i,r,o,u,c,"next",e)}function c(e){a(i,r,o,u,c,"throw",e)}u(void 0)}))}}u(o().mark((function n(){var a,c,l;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.e(46).then(r.bind(r,46));case 2:a=n.sent,c=a.default,$("head").append((0,t.Y)(c,{})),$("<style>").html("\n  .floating-buttons {\n    position: absolute;\n    top: 2vh;\n    right: 2vw;\n    z-index: 1000;\n  }\n  .floating-buttons button {\n    border: none;\n    border-radius: 5%;\n    opacity: 0.01;\n    background-color: var(--marp-background-weak);\n  }\n  .floating-buttons button:hover {\n    opacity: 1.0;\n  }\n  ").appendTo("head"),l=function(n){return i(n),(0,t.Y)(t.FK,{children:(0,e.kg)(u(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(169).then(r.bind(r,169));case 2:return t=e.sent,n=t.default,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)}))),(0,t.Y)(t.FK,{children:"Loading..."}))})},$("body").append((0,t.Y)(l,{}));case 8:case"end":return n.stop()}}),n)})))()})()})();