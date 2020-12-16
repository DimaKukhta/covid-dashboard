(()=>{"use strict";var n,r,e,t={627:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(476),o=e.n(t)()((function(n){return n[1]}));o.push([n.id,':root {\r\n  --color-bg-main: #000000;\r\n  --color-bg-block: #222222;\r\n  --color-text-white: #d6d6d6;\r\n  --color-text-red: #e60000;\r\n  --color-text-green: #70a800;\r\n  --color-text-blue: #2493f2;\r\n  --color-text-lila: #886e9b;\r\n  --color-diagram: #ffaa00;\r\n  --color-highlight-blue: #1061a6;\r\n  --color-highlight-white: #ffffff;\r\n  height: 100%;\r\n  color: var(--color-text-white);\r\n  user-select: none;\r\n  font-family: "Montserrat", Verdana, Geneva, Tahoma, sans-serif;\r\n  font-weight: 400;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  background: var(--color-bg-main);\r\n}\r\n\r\n.block {\r\n  margin: 0.3rem;\r\n  border: solid 1px var(--color-text-white);\r\n  background: var(--color-bg-block);\r\n}\r\n\r\n/* HEADER */\r\nheader {\r\n  flex: 0 0 auto;\r\n}\r\n\r\nh1 {\r\n  font-size: 1.6rem;\r\n  text-align: center;\r\n  line-height: 1.5;\r\n  font-weight: 400;\r\n}\r\n\r\n/* MAIN */\r\nmain {\r\n  background: var(--color-bg-main);\r\n  flex: 1 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.list {\r\n  flex-grow: 2;\r\n}\r\n\r\n.map {\r\n  flex-grow: 6;\r\n}\r\n\r\n.container {\r\n  flex-grow: 3;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.table {\r\n  flex-grow: 3;\r\n}\r\n\r\n.chart {\r\n  flex-grow: 2;\r\n}\r\n\r\n/* FOOTER */\r\nfooter {\r\n  background: var(--color-bg-block);\r\n  display: flex;\r\n  align-items: center;\r\n  flex: 0 0 auto;\r\n  height: 50px;\r\n  justify-content: center;\r\n}\r\n\r\n.footer {\r\n  min-width: 44vw;\r\n}\r\n\r\n.footer-text {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.footer-link {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-decoration: none;\r\n  color: var(--color-text-white);\r\n}\r\n\r\n.footer-link:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.footer-image {\r\n  height: 15px;\r\n  margin: 4px;\r\n}\r\n',""]);const i=o},476:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);t&&o[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),r.push(l))}},r}},892:(n,r,e)=>{var t,o=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),i=[];function a(n){for(var r=-1,e=0;e<i.length;e++)if(i[e].identifier===n){r=e;break}return r}function c(n,r){for(var e={},t=[],o=0;o<n.length;o++){var c=n[o],l=r.base?c[0]+r.base:c[0],s=e[l]||0,f="".concat(l," ").concat(s);e[l]=s+1;var u=a(f),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(d)):i.push({identifier:f,updater:g(d,r),references:1}),t.push(f)}return t}function l(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var s,f=(s=[],function(n,r){return s[n]=r,s.filter(Boolean).join("\n")});function u(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=f(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function d(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var h=null,p=0;function g(n,r){var e,t,o;if(r.singleton){var i=p++;e=h||(h=l(r)),t=u.bind(null,e,i,!1),o=u.bind(null,e,i,!0)}else e=l(r),t=d.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=c(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=a(e[t]);i[o].references--}for(var l=c(n,r),s=0;s<e.length;s++){var f=a(e[s]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}e=l}}}}},o={};function i(n){if(o[n])return o[n].exports;var r=o[n]={id:n,exports:{}};return t[n](r,r.exports,i),r.exports}i.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return i.d(r,{a:r}),r},i.d=(n,r)=>{for(var e in r)i.o(r,e)&&!i.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},i.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),n=i(892),r=i.n(n),e=i(627),r()(e.Z,{insert:"head",singleton:!1}),e.Z.locals})();