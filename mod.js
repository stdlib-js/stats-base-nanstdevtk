// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,t=Object.prototype,n=t.toString,a=t.__defineGetter__,o=t.__defineSetter__,u=t.__lookupGetter__,i=t.__lookupSetter__;var l=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,l){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(u.call(r,e)||i.call(r,e)?(c=r.__proto__,r.__proto__=t,delete r[e],r[e]=l.value,r.__proto__=c):r[e]=l.value),_="get"in l,p="set"in l,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,l.get),p&&o&&o.call(r,e,l.set),r};function c(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function f(r,e,t,n){var a,o,u,i,l,c,f;if(r<=0)return NaN;if(1===r||0===n)return(l=t[0])==l&&r-e>0?0:NaN;for(o=n<0?(1-r)*n:0,a=0,i=0,c=0,f=0;f<r;f++)(l=t[o])==l&&(a+=l*l,i+=l,c+=1),o+=n;return(u=c-e)<=0?NaN:(a-i/c*i)/u}c(f,"ndarray",(function(r,e,t,n,a){var o,u,i,l,c,f,_;if(r<=0)return NaN;if(1===r||0===n)return(c=t[a])==c&&r-e>0?0:NaN;for(u=a,o=0,l=0,f=0,_=0;_<r;_++)(c=t[u])==c&&(o+=c*c,l+=c,f+=1),u+=n;return(i=f-e)<=0?NaN:(o-l/f*l)/i}));const{ndarray:_}=f;var p=Math.sqrt;function y(r,e,t,n){return p(f(r,e,t,n))}function b(r,e,t,n,a){return p(_(r,e,t,n,a))}c(y,"ndarray",b);export{y as default,b as ndarray};
//# sourceMappingURL=mod.js.map
