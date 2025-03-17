// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.2-esm/index.mjs";import{isPrimitive as c}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";function m(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var i=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};i.prototype=t.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),i}var d=m(Object.freeze({__proto__:null,default:()=>()=>{}}))("reduce-async:limit");function f(e,m){var f,u,p;if(f={},arguments.length>1){if(u=function(e,t){return n(t)?(o(t,"thisArg")&&(e.thisArg=t.thisArg),o(t,"series")&&(e.series=t.series,!l(e.series))?new TypeError(r("1Rb2o","series",e.series)):o(t,"limit")&&(e.limit=t.limit,!c(e.limit))?new TypeError(r("1Rb3P","limit",e.limit)):null):new TypeError(r("1Rb2V",t))}(f,e),u)throw u;p=m}else p=e;if(!t(p))throw new TypeError(r("1Rb3q",p));return void 0===f.series&&void 0===f.limit&&(f.series=!0),f.series?f.limit=1:f.limit||(f.limit=s),function(e,s,n){if(!i(e))throw new TypeError(r("1RbAh",e));if(!t(n))throw new TypeError(r("1Rb3q",n));return function(e,t,i,r,s){var n,o,l,c,m,f,u;if(m=e.length,d("Collection length: %d",m),0===m)return d("Finished processing a collection."),s(null,t);for(c=m<i.limit?m:i.limit,d("Concurrency limit: %d",c),d("Number of arguments: %d",r.length),n=m-1,o=0,f=-1,u=0;u<c;u++)f<n&&p();function p(){function s(e,i){if(!l){if(e)return l=!0,h(e);d("Accumulator: %s",JSON.stringify(i)),t=i,h()}}d("Collection element %d: %s.",f+=1,JSON.stringify(e[f])),3===r.length?r.call(i.thisArg,t,e[f],s):4===r.length?r.call(i.thisArg,t,e[f],f,s):r.call(i.thisArg,t,e[f],f,e,s)}function h(e){return e?(d("Encountered an error: %s",e.message),s(e)):(d("Processed %d of %d collection elements.",o+=1,m),f<n?p():o===m?(d("Finished processing a collection."),s(null,t)):void 0)}}(e,s,f,p,(function(e,t){if(e)return n(e);n(null,t)}))}}function u(e,t,i,r,s){if(arguments.length<5)return f(i)(e,t,r);f(i,r)(e,t,s)}e(u,"factory",f);export{u as default,f as factory};
//# sourceMappingURL=index.mjs.map
