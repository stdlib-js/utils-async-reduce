// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.0-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";function a(e,t){return s(t)?(o(t,"thisArg")&&(e.thisArg=t.thisArg),o(t,"series")&&(e.series=t.series,!l(e.series))?new TypeError(n("invalid option. `%s` option must be a boolean. Option: `%s`.","series",e.series)):o(t,"limit")&&(e.limit=t.limit,!m(e.limit))?new TypeError(n("invalid option. `%s` option must be a positive integer. Option: `%s`.","limit",e.limit)):null):new TypeError(n("invalid argument. Options argument must be an object. Value: `%s`.",t))}function u(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var i=function e(){if(this instanceof e){var i=[null];i.push.apply(i,arguments);var n=Function.bind.apply(t,i);return new n}return t.apply(this,arguments)};i.prototype=t.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),i}var d=u(Object.freeze({__proto__:null,default:()=>()=>{}}))("reduce-async:limit");function c(e,t,i,n,r){var s,o,l,m,a,u,c;if(a=e.length,d("Collection length: %d",a),0===a)return d("Finished processing a collection."),r(null,t);for(m=a<i.limit?a:i.limit,d("Concurrency limit: %d",m),d("Number of arguments: %d",n.length),s=a-1,o=0,u=-1,c=0;c<m;c++)u<s&&p();function p(){function r(e,i){if(!l){if(e)return l=!0,f(e);d("Accumulator: %s",JSON.stringify(i)),t=i,f()}}d("Collection element %d: %s.",u+=1,JSON.stringify(e[u])),3===n.length?n.call(i.thisArg,t,e[u],r):4===n.length?n.call(i.thisArg,t,e[u],u,r):n.call(i.thisArg,t,e[u],u,e,r)}function f(e){return e?(d("Encountered an error: %s",e.message),r(e)):(d("Processed %d of %d collection elements.",o+=1,a),u<s?p():o===a?(d("Finished processing a collection."),r(null,t)):void 0)}}function p(e,s){var o,l,m;if(o={},arguments.length>1){if(l=a(o,e))throw l;m=s}else m=e;if(!t(m))throw new TypeError(n("invalid argument. Last argument must be a function. Value: `%s`.",m));return void 0===o.series&&void 0===o.limit&&(o.series=!0),o.series?o.limit=1:o.limit||(o.limit=r),u;function u(e,r,s){if(!i(e))throw new TypeError(n("invalid argument. First argument must be a collection. Value: `%s`.",e));if(!t(s))throw new TypeError(n("invalid argument. Last argument must be a function. Value: `%s`.",s));return c(e,r,o,m,(function(e,t){if(e)return s(e);s(null,t)}))}}function f(e,t,i,n,r){if(arguments.length<5)return p(i)(e,t,n);p(i,n)(e,t,r)}e(f,"factory",p);export{f as default,p as factory};
//# sourceMappingURL=index.mjs.map
