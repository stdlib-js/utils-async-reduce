// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).reduceAsync=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(e){return"string"==typeof e}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):s.call(n)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var E=String.fromCharCode,O=isNaN,S=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,o,a,l,s,f,p;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,f=0;f<e.length;f++)if(u(n=e[f]))l+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,O(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function k(e){var r,t,n,i;for(t=[],i=0,n=x.exec(e);n;)(r=e.slice(i,x.lastIndex-n[0].length)).length&&t.push(r),t.push(P(n)),i=x.lastIndex,n=x.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function F(e){return"string"==typeof e}function I(e){var r,t,n;if(!F(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=k(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var V,N=Object.prototype,R=N.toString,C=N.__defineGetter__,$=N.__defineSetter__,B=N.__lookupGetter__,G=N.__lookupSetter__;V=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(B.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(e,r,t.get),a&&$&&$.call(e,r,t.set),e};var L=V;function M(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z=/./;function J(e){return"boolean"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return U&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;function z(e,r){return null!=e&&q.call(e,r)}var D="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof D?D.toStringTag:"";var H=W()?function(e){var r,t,n;if(null==e)return X.call(e);t=e[Y],r=z(e,Y);try{e[Y]=void 0}catch(r){return X.call(e)}return n=X.call(e),r?e[Y]=t:delete e[Y],n}:function(e){return X.call(e)},K=Boolean,Q=Boolean.prototype.toString;var ee=W();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function te(e){return J(e)||re(e)}function ne(){return new Function("return this;")()}M(te,"isPrimitive",J),M(te,"isObject",re);var ie="object"==typeof self?self:null,oe="object"==typeof window?window:null,ae="object"==typeof global?global:null,ce="object"==typeof globalThis?globalThis:null;var ue=function(e){if(arguments.length){if(!J(e))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(ce)return ce;if(ie)return ie;if(oe)return oe;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),le=ue.document&&ue.document.childNodes,se=Int8Array;function fe(){return/^\s*function\s*([^(]*)/i}var pe=/^\s*function\s*([^(]*)/i;M(fe,"REGEXP",pe);var ge=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function de(e){return null!==e&&"object"==typeof e}function ye(e){var r,t,n,i;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=pe.exec(n.toString()))return r[1]}return de(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(de,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ge(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(de));var be="function"==typeof Z||"object"==typeof se||"function"==typeof le?function(e){return ye(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ye(e).toLowerCase():r};function he(e){return"function"===be(e)}var ve=Math.floor;function me(e){return ve(e)===e}function we(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&me(e.length)&&e.length>=0&&e.length<=9007199254740991}function je(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}var _e=Number.POSITIVE_INFINITY;var Ee,Oe=Object,Se=Object.getPrototypeOf;Ee=he(Object.getPrototypeOf)?Se:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===H(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Te=Ee;var Ae=Object.prototype;function xe(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!ge(e)}(e)&&(r=function(e){return null==e?null:(e=Oe(e),Te(e))}(e),!r||!z(e,"constructor")&&z(r,"constructor")&&he(r.constructor)&&"[object Function]"===H(r.constructor)&&z(r,"isPrototypeOf")&&he(r.isPrototypeOf)&&(r===Ae||function(e){var r;for(r in e)if(!z(e,r))return!1;return!0}(e)))}function Pe(e){return"number"==typeof e}var ke=Number,Fe=ke.prototype.toString;var Ie=W();function Ve(e){return"object"==typeof e&&(e instanceof ke||(Ie?function(e){try{return Fe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function Ne(e){return Pe(e)||Ve(e)}M(Ne,"isPrimitive",Pe),M(Ne,"isObject",Ve);var Re=ke.NEGATIVE_INFINITY;function Ce(e){return e<_e&&e>Re&&me(e)}function $e(e){return Pe(e)&&Ce(e)}function Be(e){return Ve(e)&&Ce(e.valueOf())}function Ge(e){return $e(e)||Be(e)}function Le(e){return $e(e)&&e>0}function Me(e){return Be(e)&&e.valueOf()>0}function Ze(e){return Le(e)||Me(e)}function Je(e,r){return xe(r)?(z(r,"thisArg")&&(e.thisArg=r.thisArg),z(r,"series")&&(e.series=r.series,!J(e.series))?new TypeError(je("1Rb2o,GE","series",e.series)):z(r,"limit")&&(e.limit=r.limit,!Le(e.limit))?new TypeError(je("1Rb3P,Fv","limit",e.limit)):null):new TypeError(je("1Rb2V,FD",r))}function Ue(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}M(Ge,"isPrimitive",$e),M(Ge,"isObject",Be),M(Ze,"isPrimitive",Le),M(Ze,"isObject",Me);var We=Ue(Object.freeze({__proto__:null,default:()=>()=>{}}))("reduce-async:limit");function Xe(e,r,t,n,i){var o,a,c,u,l,s,f;if(l=e.length,We("Collection length: %d",l),0===l)return We("Finished processing a collection."),i(null,r);for(u=l<t.limit?l:t.limit,We("Concurrency limit: %d",u),We("Number of arguments: %d",n.length),o=l-1,a=0,s=-1,f=0;f<u;f++)s<o&&p();function p(){function i(e,t){if(!c){if(e)return c=!0,g(e);We("Accumulator: %s",JSON.stringify(t)),r=t,g()}}We("Collection element %d: %s.",s+=1,JSON.stringify(e[s])),3===n.length?n.call(t.thisArg,r,e[s],i):4===n.length?n.call(t.thisArg,r,e[s],s,i):n.call(t.thisArg,r,e[s],s,e,i)}function g(e){return e?(We("Encountered an error: %s",e.message),i(e)):(We("Processed %d of %d collection elements.",a+=1,l),s<o?p():a===l?(We("Finished processing a collection."),i(null,r)):void 0)}}function qe(e,r){var t,n,i;if(t={},arguments.length>1){if(n=Je(t,e))throw n;i=r}else i=e;if(!he(i))throw new TypeError(je("1Rb3q,JV",i));return void 0===t.series&&void 0===t.limit&&(t.series=!0),t.series?t.limit=1:t.limit||(t.limit=_e),o;function o(e,r,n){if(!we(e))throw new TypeError(je("1RbAh,O3",e));if(!he(n))throw new TypeError(je("1Rb3q,JV",n));return Xe(e,r,t,i,(function(e,r){if(e)return n(e);n(null,r)}))}}function ze(e,r,t,n,i){if(arguments.length<5)return qe(t)(e,r,n);qe(t,n)(e,r,i)}return M(ze,"factory",qe),ze}));
//# sourceMappingURL=index.js.map
