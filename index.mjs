// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.7-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";function d(i,e){return n(e)?(o(e,"thisArg")&&(i.thisArg=e.thisArg),o(e,"series")&&(i.series=e.series,!l(i.series))?new TypeError(s("0ie30","series",i.series)):o(e,"limit")&&(i.limit=e.limit,!m(i.limit))?new TypeError(s("0ie3b","limit",i.limit)):null):new TypeError(s("0ie2h",e))}var f=()=>{};function h(i,e,t,s,r){var n,o,l,m,d,h,p;if(0===(d=i.length))return r(null,e);for(m=d<t.limit?d:t.limit,f("Number of arguments: %d",s.length),n=d-1,o=0,h=-1,p=0;p<m;p++)h<n&&c();function c(){function r(i,t){if(!l){if(i)return l=!0,u(i);f("Accumulator: %s",JSON.stringify(t)),e=t,u()}}f("Collection element %d: %s.",h+=1,JSON.stringify(i[h])),3===s.length?s.call(t.thisArg,e,i[h],r):4===s.length?s.call(t.thisArg,e,i[h],h,r):s.call(t.thisArg,e,i[h],h,i,r)}function u(i){return i?(f("Encountered an error: %s",i.message),r(i)):(o+=1,h<n?c():o===d?r(null,e):void 0)}}function p(i,n){var o,l,m;if(o={},arguments.length>1){if(l=d(o,i))throw l;m=n}else m=i;if(!e(m))throw new TypeError(s("0ie43",m));return void 0===o.series&&void 0===o.limit&&(o.series=!0),o.series?o.limit=1:o.limit||(o.limit=r),f;function f(i,r,n){if(!t(i))throw new TypeError(s("0ieBO",i));if(!e(n))throw new TypeError(s("0ie43",n));return h(i,r,o,m,(function(i,e){if(i)return n(i);n(null,e)}))}}function c(i,e,t,s,r){if(arguments.length<5)return p(t)(i,e,s);p(t,s)(i,e,r)}i(c,"factory",p);export{c as default,p as factory};
//# sourceMappingURL=index.mjs.map
