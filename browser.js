// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).reduceAsync=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var l,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(t,e)||f.call(t,e)?(l=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=l):t[e]=r.value),s="get"in r,p="set"in r,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t};var l=e;function a(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var s=/./;function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function g(t,e){return null!=t&&v.call(t,e)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(t){var e,r,n;if(null==t)return d.call(t);r=t[m],e=g(t,m);try{t[m]=void 0}catch(e){return d.call(t)}return n=d.call(t),e?t[m]=r:delete t[m],n}:function(t){return d.call(t)},j=Boolean.prototype.toString;var _=b();function w(t){return"object"==typeof t&&(t instanceof Boolean||(_?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function O(t){return p(t)||w(t)}function E(){return new Function("return this;")()}a(O,"isPrimitive",p),a(O,"isObject",w);var P="object"==typeof self?self:null,A="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},S="object"==typeof T?T:null;var N=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(P)return P;if(A)return A;if(S)return S;throw new Error("unexpected error. Unable to resolve global object.")}(),I=N.document&&N.document.childNodes,B=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;a(F,"REGEXP",C);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};function x(t){return null!==t&&"object"==typeof t}function k(t){var e,r,n,o;if(("Object"===(r=h(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=C.exec(n.toString()))return e[1]}return x(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(x,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!V(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(x));var G="function"==typeof s||"object"==typeof B||"function"==typeof I?function(t){return k(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?k(t).toLowerCase():e};function M(t){return"function"===G(t)}var L=Math.floor;function J(t){return L(t)===t}function R(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&J(t.length)&&t.length>=0&&t.length<=9007199254740991}function U(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}var Y=Number.POSITIVE_INFINITY;var z,D=Object.getPrototypeOf;z=M(Object.getPrototypeOf)?D:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var X=z;var q=Object.prototype;function H(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),X(t))}(t),!e||!g(t,"constructor")&&g(e,"constructor")&&M(e.constructor)&&"[object Function]"===h(e.constructor)&&g(e,"isPrototypeOf")&&M(e.isPrototypeOf)&&(e===q||function(t){var e;for(e in t)if(!g(t,e))return!1;return!0}(t)))}function K(t){return"number"==typeof t}var Q=Number,W=Q.prototype.toString;var Z=b();function $(t){return"object"==typeof t&&(t instanceof Q||(Z?function(t){try{return W.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function tt(t){return K(t)||$(t)}a(tt,"isPrimitive",K),a(tt,"isObject",$);var et=Q.NEGATIVE_INFINITY;function rt(t){return t<Y&&t>et&&J(t)}function nt(t){return K(t)&&rt(t)}function ot(t){return $(t)&&rt(t.valueOf())}function it(t){return nt(t)||ot(t)}function ut(t){return nt(t)&&t>0}function ct(t){return ot(t)&&t.valueOf()>0}function ft(t){return ut(t)||ct(t)}function lt(t,e){return H(e)?(g(e,"thisArg")&&(t.thisArg=e.thisArg),g(e,"series")&&(t.series=e.series,!p(t.series))?new TypeError(U("0ie30","series",t.series)):g(e,"limit")&&(t.limit=e.limit,!ut(t.limit))?new TypeError(U("0ie3b","limit",t.limit)):null):new TypeError(U("0ie2h",e))}function at(t){var e=t.default;if("function"==typeof e){var r=function(){return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}a(it,"isPrimitive",nt),a(it,"isObject",ot),a(ft,"isPrimitive",ut),a(ft,"isObject",ct);var st=at(Object.freeze({__proto__:null,default:()=>()=>{}}))("reduce-async:limit");function pt(t,e,r,n,o){var i,u,c,f,l,a,s;if(l=t.length,st("Collection length: %d",l),0===l)return st("Finished processing a collection."),o(null,e);for(f=l<r.limit?l:r.limit,st("Concurrency limit: %d",f),st("Number of arguments: %d",n.length),i=l-1,u=0,a=-1,s=0;s<f;s++)a<i&&p();function p(){function o(t,r){if(!c){if(t)return c=!0,y(t);st("Accumulator: %s",JSON.stringify(r)),e=r,y()}}st("Collection element %d: %s.",a+=1,JSON.stringify(t[a])),3===n.length?n.call(r.thisArg,e,t[a],o):4===n.length?n.call(r.thisArg,e,t[a],a,o):n.call(r.thisArg,e,t[a],a,t,o)}function y(t){return t?(st("Encountered an error: %s",t.message),o(t)):(st("Processed %d of %d collection elements.",u+=1,l),a<i?p():u===l?(st("Finished processing a collection."),o(null,e)):void 0)}}function yt(t,e){var r,n,o;if(r={},arguments.length>1){if(n=lt(r,t))throw n;o=e}else o=t;if(!M(o))throw new TypeError(U("0ie43",o));return void 0===r.series&&void 0===r.limit&&(r.series=!0),r.series?r.limit=1:r.limit||(r.limit=Y),i;function i(t,e,n){if(!R(t))throw new TypeError(U("0ieBO",t));if(!M(n))throw new TypeError(U("0ie43",n));return pt(t,e,r,o,(function(t,e){if(t)return n(t);n(null,e)}))}}function bt(t,e,r,n,o){if(arguments.length<5)return yt(r)(t,e,n);yt(r,n)(t,e,o)}return a(bt,"factory",yt),bt}));
//# sourceMappingURL=browser.js.map
