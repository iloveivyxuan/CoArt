!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("blockly/core"));else if("function"==typeof define&&define.amd)define(["blockly/core"],t);else{var o="object"==typeof exports?t(require("blockly/core")):t(e.Blockly);for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}(this,(function(e){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=1)}([function(t,o){t.exports=e},function(e,t,o){"use strict";o.r(t),o.d(t,"registerTooltipExtension",(function(){return l}));var n,r,i=o(0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */n=function(e,t){for(var o=r.getTooltipOfObject(e),n=(o=i.utils.string.wrap(o,r.LIMIT)).split("\n"),l=0;l<n.length;l++){var u=document.createElement("div");u.appendChild(document.createTextNode(n[l])),t.appendChild(u)}},(r=i.Tooltip).show_=function(){if(!r.blocked_){r.poisonedElement_=r.element_;var e=r.DIV;if(e){e.textContent="",function(e,t){var o=e.customTooltip;if(o){var r=o();r?t.appendChild(r):n(e,t)}else n(e,t)}(r.element_,e);var t=r.element_.RTL,o=document.documentElement.clientWidth,i=document.documentElement.clientHeight;e.style.direction=t?"rtl":"ltr",e.style.display="block",r.visible=!0;var l=r.lastX_;t?l-=r.OFFSET_X+e.offsetWidth:l+=r.OFFSET_X;var u=r.lastY_+r.OFFSET_Y;u+e.offsetHeight>i+window.scrollY&&(u-=e.offsetHeight+2*r.OFFSET_Y),t?l=Math.max(r.MARGINS-window.scrollX,l):l+e.offsetWidth>o+window.scrollX-2*r.MARGINS&&(l=o-e.offsetWidth-2*r.MARGINS),e.style.top=u+"px",e.style.left=l+"px"}}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"custom-tooltip-extension";return i.Extensions.register(t,(function(){var t=this;t.customTooltip=function(){return e(t)}})),t}}])}));
//# sourceMappingURL=index.js.map