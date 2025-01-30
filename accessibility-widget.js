!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define(["React","ReactDOM"],t):"object"==typeof exports?exports.AccessibilityWidget=t(require("React"),require("ReactDOM")):e.AccessibilityWidget=t(e.React,e.ReactDOM)}(this,((e,t)=>(()=>{"use strict";var n={986:(e,t,n)=>{n.d(t,{A:()=>h});var r=n(601),o=n.n(r),a=n(314),i=n.n(a),c=n(417),l=n.n(c),s=new URL(n(839),n.b),u=new URL(n(199),n.b),d=new URL(n(288),n.b),p=i()(o()),f=l()(s),g=l()(u),m=l()(d);p.push([e.id,`.accessibility-widget {\n  position: fixed;\n  bottom: 10px;\n  right: 20px;\n  z-index: 1000;\n}\n\n.high-contrast {\n  filter: contrast(150%);\n  background-color: rgb(255, 255, 255) !important;\n  color: white !important;\n}\n\n.widget-toggle {\n  background-color: white;\n  color: black;\n  border: none;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.3s ease;\n}\n\n.widget-toggle:hover {\n  transform: scale(1.1);\n}\n\n.widget-menu {\n  background: rgb(255, 255, 255);\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n  padding: 1rem;\n  width: 250px;\n  position: absolute;\n  bottom: 10px;\n  right: 0;\n}\n\n.menu-section h3 {\n  margin-top: 0;\n  color: #2c3e50;\n}\n\n.tool-group {\n  margin: 1rem 0;\n}\n\n.tool-group button {\n  background: none;\n  border: 1px solid #ddd;\n  padding: 0.5rem;\n  margin: 0.25rem 0;\n  width: 100%;\n  text-align: left;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  border-radius: 4px;\n}\n\n.tool-group button:hover {\n  background-color: #f0f0f0;\n}\n\n.tool-group button[aria-pressed="true"] {\n  background-color: #2c3e50;\n  color: white;\n}\n\n.reset-button {\n  background: #e74c3c;\n  color: white;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 4px;\n  cursor: pointer;\n  width: 100%;\n}\n\n.dyslexia-friendly {\n  font-family: 'OpenDyslexic', sans-serif;\n  letter-spacing: 1px;\n  line-height: 1.6;\n}\n\n.reduce-motion * {\n  animation: none !important;\n  transition: none !important;\n}\n\n.keyboard-navigation :focus {\n  outline: 3px solid #2c3e50 !important;\n  outline-offset: 2px;\n}\n\n.widget-toggle {\n  transition: transform 0.3s ease;\n}\n\n.reduce-motion .widget-toggle {\n  transition: none;\n}\n\nbutton:focus {\n  outline: 2px solid #2c3e50;\n  outline-offset: 2px;\n}\n\n.widget-menu {\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n\n.reduce-motion .widget-menu {\n  transition: none;\n}\n\n.navigation-focus {\n  outline: 3px solid #2563eb !important;\n  outline-offset: 2px;\n  background-color: rgba(37, 99, 235, 0.1);\n  transition: outline 0.2s ease;\n}\n\n.speech-rate-control {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 1rem 0;\n}\n\n.speech-rate-control input[type="range"] {\n  flex-grow: 1;\n}\n\n:root {\n  --line-height: 1.5;\n  --letter-spacing: 0px;\n  --word-spacing: 0px;\n}\n\nbody {\n  line-height: var(--line-height);\n  letter-spacing: var(--letter-spacing);\n  word-spacing: var(--word-spacing);\n}\n\n.cursor-default {\n  cursor: auto;\n}\n\n.cursor-large {\n  cursor: url(${f}) 16 16, auto;\n}\n\n.cursor-high-contrast {\n  cursor: url(${g}) 16 16, auto;\n}\n\n.cursor-reading {\n  cursor: url(${m}) 16 16, auto;\n}\n\n.spacing-control {\n  margin: 0.5rem 0;\n}\n\n.spacing-control label {\n  display: block;\n  font-size: 0.9rem;\n  margin-bottom: 0.25rem;\n}\n\n.spacing-control input[type="range"] {\n  width: 70%;\n  vertical-align: middle;\n}\n\n.spacing-control span {\n  display: inline-block;\n  width: 25%;\n  text-align: right;\n  margin-left: 5%;\n}\n\n.cursor-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.5rem;\n}\n\n.cursor-grid button {\n  padding: 0.5rem;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  background: white;\n}\n\n.cursor-grid button.active {\n  background: #2c3e50;\n  color: white;\n  border-color: #2c3e50;\n}\n\n.widget-menu {\n  width: 320px;\n  max-height: 90vh;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: #cbd5e0 #f7fafc;\n}\n\n.widget-menu::-webkit-scrollbar {\n  width: 8px;\n}\n\n.widget-menu::-webkit-scrollbar-track {\n  background: #f7fafc;\n  border-radius: 4px;\n}\n\n.widget-menu::-webkit-scrollbar-thumb {\n  background-color: #cbd5e0;\n  border-radius: 4px;\n  border: 2px solid #f7fafc;\n}`,""]);const h=p},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],u=a[s]||0,d="".concat(s," ").concat(u);a[s]=u+1;var p=n(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var g=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:g,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var l=r(e,o),s=0;s<a.length;s++){var u=n(a[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=l}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},199:e=>{e.exports='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="%23fff" stroke="%23000" stroke-width="2"/></svg>'},839:e=>{e.exports='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="none" stroke="%23000" stroke-width="2"/></svg>'},288:e=>{e.exports='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect y="14" width="32" height="4" fill="%23000"/></svg>'},883:t=>{t.exports=e},845:e=>{e.exports=t}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={id:e,exports:{}};return n[e](a,a.exports,o),a.exports}o.m=n,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.b=document.baseURI||self.location.href,o.nc=void 0;var a={};o.r(a),o.d(a,{default:()=>Y});var i=o(883),c=o.n(i),l=o(845),s=o.n(l),u={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},d=i.createContext&&i.createContext(u),p=["attr","size","title"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){var r,o,a,i;r=e,o=t,a=n[t],(o="symbol"==typeof(i=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o))?i:i+"")in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){return e&&e.map(((e,t)=>i.createElement(e.tag,m({key:t},e.attr),h(e.child))))}function v(e){return t=>i.createElement(b,f({attr:m({},e.attr)},t),h(e.child))}function b(e){var t=t=>{var n,{attr:r,size:o,title:a}=e,c=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,p),l=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.createElement("svg",f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,c,{className:n,style:m(m({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&i.createElement("title",null,a),e.children)};return void 0!==d?i.createElement(d.Consumer,null,(e=>t(e))):t(u)}function y(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"},child:[]}]})(e)}function w(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M9 11.24V7.5a2.5 2.5 0 0 1 5 0v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74c-3.6-.76-3.54-.75-3.67-.75-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"},child:[]}]})(e)}function x(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"},child:[]},{tag:"path",attr:{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"},child:[]}]})(e)}function E(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"},child:[]}]})(e)}function S(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z"},child:[]}]})(e)}function z(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"},child:[]}]})(e)}function O(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"},child:[]}]})(e)}function k(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m6 14 3 3v5h6v-5l3-3V9H6v5zm5-12h2v3h-2V2zM3.5 5.88l1.41-1.41 2.12 2.12L5.62 8 3.5 5.88zm13.46.71 2.12-2.12 1.41 1.41L18.38 8l-1.42-1.41z"},child:[]}]})(e)}function M(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"},child:[]},{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0zm0 0h24v24H0z"},child:[]}]})(e)}function j(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z"},child:[]}]})(e)}function C(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20.84 20.84 3.16 3.16 1.89 4.43l1.89 1.89A9.92 9.92 0 0 0 2 12c0 5.52 4.48 10 10 10 2.11 0 4.07-.66 5.68-1.77l1.89 1.89 1.27-1.28zM12 20c-4.41 0-8-3.59-8-8 0-1.55.45-3 1.22-4.23l1.46 1.46C6.25 10.06 6 11 6 12c0 3.31 2.69 6 6 6 1 0 1.94-.25 2.77-.68l1.46 1.46A7.951 7.951 0 0 1 12 20zM6.32 3.77A9.986 9.986 0 0 1 12 2c5.52 0 10 4.48 10 10 0 2.11-.66 4.07-1.77 5.68l-1.45-1.45A7.951 7.951 0 0 0 20 12c0-4.41-3.59-8-8-8-1.55 0-3 .45-4.23 1.22L6.32 3.77zM18 12c0 1-.25 1.94-.68 2.77L9.23 6.68C10.06 6.25 11 6 12 6c3.31 0 6 2.69 6 6z"},child:[]}]})(e)}var H=o(72),A=o.n(H),N=o(825),P=o.n(N),L=o(659),R=o.n(L),V=o(56),D=o.n(V),T=o(540),I=o.n(T),B=o(113),F=o.n(B),U=o(986),q={};function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){J(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function J(e,t,n){return(t=function(e){var t=function(e){if("object"!=_(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==_(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,c=[],l=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}q.styleTagTransform=F(),q.setAttributes=D(),q.insert=R().bind(null,"head"),q.domAPI=P(),q.insertStyleElement=I(),A()(U.A,q),U.A&&U.A.locals&&U.A.locals;const G=function(){var e=K((0,i.useState)(16),2),t=e[0],n=e[1],r=K((0,i.useState)(!1),2),o=r[0],a=r[1],l=K((0,i.useState)(!1),2),s=l[0],u=l[1],d=K((0,i.useState)(!1),2),p=d[0],f=d[1],g=K((0,i.useState)(!1),2),m=g[0],h=g[1],v=K((0,i.useState)(!1),2),b=v[0],H=v[1],A=K((0,i.useState)(-1),2),N=A[0],P=A[1],L=K((0,i.useState)([]),2),R=L[0],V=L[1],D=K((0,i.useState)(!1),2),T=D[0],I=D[1],B=K((0,i.useState)(1),2),F=B[0],U=B[1],q=(0,i.useRef)(null),_=(0,i.useRef)(null),W=K((0,i.useState)({lineHeight:1.5,letterSpacing:0,wordSpacing:0}),2),J=W[0],Q=W[1],G=K((0,i.useState)("default"),2),X=G[0],Y=G[1];(0,i.useEffect)((function(){var e=localStorage.getItem("accessibilitySettings");if(e){var t=JSON.parse(e);n(t.fontSize||16),a(t.highContrast||!1),u(t.dyslexiaFriendly||!1),f(t.motionReduction||!1),h(t.keyboardNavActive||!1),U(t.speechRate||1)}}),[]),(0,i.useEffect)((function(){document.documentElement.style.setProperty("--line-height",J.lineHeight.toString()),document.documentElement.style.setProperty("--letter-spacing","".concat(J.letterSpacing,"px")),document.documentElement.style.setProperty("--word-spacing","".concat(J.wordSpacing,"px")),document.body.className=document.body.className.replace(/\bcursor-\S+/g,""),document.body.classList.add("cursor-".concat(X))}),[J,X]),(0,i.useEffect)((function(){var e=document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, button, input[type="text"], textarea');V(Array.from(e))}),[]),(0,i.useEffect)((function(){document.documentElement.style.fontSize="".concat(t,"px"),document.body.classList.toggle("high-contrast",o),document.body.classList.toggle("dyslexia-friendly",s),document.body.classList.toggle("reduce-motion",p),localStorage.setItem("accessibilitySettings",JSON.stringify({fontSize:t,highContrast:o,dyslexiaFriendly:s,motionReduction:p,keyboardNavActive:m,speechRate:F,textSpacing:J,cursorStyle:X}))}),[t,o,s,p,m,F,J,X]),(0,i.useEffect)((function(){var e=function(e){if(m)switch(e.key){case"ArrowDown":case"ArrowRight":e.preventDefault(),P((function(e){return Math.min(e+1,R.length-1)}));break;case"ArrowUp":case"ArrowLeft":e.preventDefault(),P((function(e){return Math.max(e-1,0)}));break;case"Enter":case" ":e.preventDefault(),N>=0&&Z(R[N]);break;case"Escape":ee(),h(!1)}};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[m,N,R]),(0,i.useEffect)((function(){if(N>=0&&R[N]){var e=R[N];e.scrollIntoView({behavior:p?"auto":"smooth",block:"center"}),e.classList.add("navigation-focus")}return function(){R.forEach((function(e){return e.classList.remove("navigation-focus")}))}}),[N,p,R]);var Z=function(e){ee();var t=e.textContent||"";(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(t=e.placeholder||e.value||""),_.current=new SpeechSynthesisUtterance(t),_.current.rate=F,_.current.onend=function(){return H(!1)},_.current.onerror=function(){return H(!1)},window.speechSynthesis.speak(_.current),H(!0)},ee=function(){window.speechSynthesis.cancel(),H(!1)};return c().createElement("div",{className:"accessibility-widget fixed bottom-20 z-1000 right-20 text-black"},c().createElement("button",{className:"widget-toggle fixed right-4 bottom-4",onClick:function(){return I(!T)},"aria-label":"Accessibility settings","aria-expanded":T},c().createElement(y,{size:24})),T&&c().createElement("div",{className:"widget-menu fixed right-4 top-16 bg-white rounded-lg shadow-lg p-4 border border-gray-200 max-h-[90vh] overflow-y-auto w-80",ref:q,role:"dialog","aria-modal":"true"},c().createElement("div",{className:"menu-section space-y-4"},c().createElement("h3",{className:"text-lg font-semibold mb-4"},"Accessibility Tools"),c().createElement("div",{className:"tool-group text-black"},c().createElement("button",{onClick:function(){return n((function(e){return Math.min(24,e+2)}))}},c().createElement(x,{className:"text-black"})," Increase Text"),c().createElement("button",{onClick:function(){return n((function(e){return Math.max(12,e-2)}))}},c().createElement(E,null)," Decrease Text")),c().createElement("div",{className:"tool-group"},c().createElement("button",{onClick:function(){return a(!o)},"aria-pressed":o},c().createElement(k,null)," High Contrast")),c().createElement("div",{className:"tool-group"},c().createElement("button",{onClick:function(){return u(!s)},"aria-pressed":s},c().createElement(M,null)," Dyslexia Friendly")),c().createElement("div",{className:"tool-group"},c().createElement("button",{onClick:function(){return f(!p)},"aria-pressed":p},c().createElement(C,null)," Reduce Motion")),c().createElement("div",{className:"tool-group"},c().createElement("button",{onClick:function(){return h(!m)},"aria-pressed":m},c().createElement(w,null)," Keyboard Nav")),c().createElement("div",{className:"tool-group"},c().createElement("button",{onClick:b?ee:function(){return R[N]&&Z(R[N])},"aria-pressed":b},b?c().createElement(S,null):c().createElement(z,null),b?"Stop Reading":"Start Reading")),c().createElement("div",{className:"speech-rate-control"},c().createElement("label",null,"Speech Rate:"),c().createElement("input",{type:"range",min:"0.5",max:"2",step:"0.1",value:F,onChange:function(e){return U(parseFloat(e.target.value))}}),c().createElement("span",null,F.toFixed(1),"x"))," ",c().createElement("div",{className:"tool-group"},c().createElement("h4",null,c().createElement(O,null)," Text Spacing"),c().createElement("div",{className:"spacing-control"},c().createElement("label",null,"Line Height"),c().createElement("input",{type:"range",min:"1",max:"3",step:"0.1",value:J.lineHeight,onChange:function(e){return Q((function(t){return $($({},t),{},{lineHeight:parseFloat(e.target.value)})}))}}),c().createElement("span",null,J.lineHeight,"x")),c().createElement("div",{className:"spacing-control"},c().createElement("label",null,"Letter Spacing"),c().createElement("input",{type:"range",min:"0",max:"10",step:"0.5",value:J.letterSpacing,onChange:function(e){return Q((function(t){return $($({},t),{},{letterSpacing:parseFloat(e.target.value)})}))}}),c().createElement("span",null,J.letterSpacing,"px")),c().createElement("div",{className:"spacing-control"},c().createElement("label",null,"Word Spacing"),c().createElement("input",{type:"range",min:"0",max:"20",step:"1",value:J.wordSpacing,onChange:function(e){return Q((function(t){return $($({},t),{},{wordSpacing:parseFloat(e.target.value)})}))}}),c().createElement("span",null,J.wordSpacing,"px"))),c().createElement("div",{className:"tool-group"},c().createElement("h4",null,c().createElement(j,null)," Cursor Style"),c().createElement("div",{className:"cursor-grid"},c().createElement("button",{onClick:function(){return Y("default")},className:"default"===X?"active":"","aria-pressed":"default"===X},"Default"),c().createElement("button",{onClick:function(){return Y("large")},className:"large"===X?"active":"","aria-pressed":"large"===X},"Large"),c().createElement("button",{onClick:function(){return Y("high-contrast")},className:"high-contrast"===X?"active":"","aria-pressed":"high-contrast"===X},"High Contrast"),c().createElement("button",{onClick:function(){return Y("reading")},className:"reading"===X?"active":"","aria-pressed":"reading"===X},"Reading"))),c().createElement("button",{className:"reset-button",onClick:function(){n(16),a(!1),u(!1),f(!1),h(!1),U(1),ee(),document.body.classList.remove("high-contrast","dyslexia-friendly","reduce-motion"),Q({lineHeight:1.5,letterSpacing:0,wordSpacing:0}),Y("default")}},"Reset All Settings"))))};function X(){var e=document.getElementById("accessibility-widget-container");e||((e=document.createElement("div")).id="accessibility-widget-container",document.body.appendChild(e)),s().render(c().createElement(G,null),e)}document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("script[data-accessibility-widget]");e&&"false"!==e.getAttribute("data-auto-init")&&X(e.getAttribute("data-auto-init"))})),window.AccessibilityWidget={initialize:X};const Y=X;return a})()));