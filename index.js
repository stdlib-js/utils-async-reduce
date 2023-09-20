// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).reduceAsync=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var f,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(t,e)||l.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),s="get"in r,p="set"in r,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t};var f=e;function a(t,e,r){f(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var s=/./;function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function g(t,e){return null!=t&&d.call(t,e)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(t){var e,r,n;if(null==t)return v.call(t);r=t[m],e=g(t,m);try{t[m]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[m]=r:delete t[m],n}:function(t){return v.call(t)},j=Boolean.prototype.toString;var _=b();function O(t){return"object"==typeof t&&(t instanceof Boolean||(_?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function w(t){return p(t)||O(t)}function E(){return new Function("return this;")()}a(w,"isPrimitive",p),a(w,"isObject",O);var P="object"==typeof self?self:null,A="object"==typeof window?window:null,T="object"==typeof global?global:null;var S=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(P)return P;if(A)return A;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),N=S.document&&S.document.childNodes,F=Int8Array;function I(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;a(I,"REGEXP",V);var R=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};function B(t){return null!==t&&"object"==typeof t}function C(t){var e,r,n,o;if(("Object"===(r=h(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=V.exec(n.toString()))return e[1]}return B(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(B,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!R(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(B));var x="function"==typeof s||"object"==typeof F||"function"==typeof N?function(t){return C(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?C(t).toLowerCase():e};function G(t){return"function"===x(t)}var M=Math.floor;function k(t){return M(t)===t}function J(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&k(t.length)&&t.length>=0&&t.length<=9007199254740991}function L(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}var q=Number.POSITIVE_INFINITY;var D,U=Object.getPrototypeOf;D=G(Object.getPrototypeOf)?U:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Y=D;var z=Object.prototype;function X(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!R(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),Y(t))}(t),!e||!g(t,"constructor")&&g(e,"constructor")&&G(e.constructor)&&"[object Function]"===h(e.constructor)&&g(e,"isPrototypeOf")&&G(e.isPrototypeOf)&&(e===z||function(t){var e;for(e in t)if(!g(t,e))return!1;return!0}(t)))}function H(t){return"number"==typeof t}var K=Number,Q=K.prototype.toString;var W=b();function Z(t){return"object"==typeof t&&(t instanceof K||(W?function(t){try{return Q.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function $(t){return H(t)||Z(t)}a($,"isPrimitive",H),a($,"isObject",Z);var tt=K.NEGATIVE_INFINITY;function et(t){return t<q&&t>tt&&k(t)}function rt(t){return H(t)&&et(t)}function nt(t){return Z(t)&&et(t.valueOf())}function ot(t){return rt(t)||nt(t)}function it(t){return rt(t)&&t>0}function ut(t){return nt(t)&&t.valueOf()>0}function ct(t){return it(t)||ut(t)}function lt(t,e){return X(e)?(g(e,"thisArg")&&(t.thisArg=e.thisArg),g(e,"series")&&(t.series=e.series,!p(t.series))?new TypeError(L("1Rb2o,GE","series",t.series)):g(e,"limit")&&(t.limit=e.limit,!it(t.limit))?new TypeError(L("1Rb3P,Fv","limit",t.limit)):null):new TypeError(L("1Rb2V,FD",e))}function ft(t){if(t.__esModule)return t;var e=t.default;if("function"==typeof e){var r=function t(){if(this instanceof t){var r=[null];r.push.apply(r,arguments);var n=Function.bind.apply(e,r);return new n}return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}a(ot,"isPrimitive",rt),a(ot,"isObject",nt),a(ct,"isPrimitive",it),a(ct,"isObject",ut);var at=ft(Object.freeze({__proto__:null,default:()=>()=>{}}))("reduce-async:limit");function st(t,e,r,n,o){var i,u,c,l,f,a,s;if(f=t.length,at("Collection length: %d",f),0===f)return at("Finished processing a collection."),o(null,e);for(l=f<r.limit?f:r.limit,at("Concurrency limit: %d",l),at("Number of arguments: %d",n.length),i=f-1,u=0,a=-1,s=0;s<l;s++)a<i&&p();function p(){function o(t,r){if(!c){if(t)return c=!0,y(t);at("Accumulator: %s",JSON.stringify(r)),e=r,y()}}at("Collection element %d: %s.",a+=1,JSON.stringify(t[a])),3===n.length?n.call(r.thisArg,e,t[a],o):4===n.length?n.call(r.thisArg,e,t[a],a,o):n.call(r.thisArg,e,t[a],a,t,o)}function y(t){return t?(at("Encountered an error: %s",t.message),o(t)):(at("Processed %d of %d collection elements.",u+=1,f),a<i?p():u===f?(at("Finished processing a collection."),o(null,e)):void 0)}}function pt(t,e){var r,n,o;if(r={},arguments.length>1){if(n=lt(r,t))throw n;o=e}else o=t;if(!G(o))throw new TypeError(L("1Rb3q,JV",o));return void 0===r.series&&void 0===r.limit&&(r.series=!0),r.series?r.limit=1:r.limit||(r.limit=q),i;function i(t,e,n){if(!J(t))throw new TypeError(L("1RbAh,O3",t));if(!G(n))throw new TypeError(L("1Rb3q,JV",n));return st(t,e,r,o,(function(t,e){if(t)return n(t);n(null,e)}))}}function yt(t,e,r,n,o){if(arguments.length<5)return pt(r)(t,e,n);pt(r,n)(t,e,o)}return a(yt,"factory",pt),yt}));
//# sourceMappingURL=index.js.map
