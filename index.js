// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,i=t.__lookupGetter__,u=t.__lookupSetter__,l=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,l){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((c="value"in l)&&(i.call(e,r)||u.call(e,r)?(f=e.__proto__,e.__proto__=t,delete e[r],e[r]=l.value,e.__proto__=f):e[r]=l.value),_="get"in l,p="set"in l,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(e,r,l.get),p&&a&&a.call(e,r,l.set),e};function f(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function c(e,r,t,n){var o,a,i,u,l,f,c;if(e<=0)return NaN;if(1===e||0===n)return(l=t[0])==l&&e-r>0?0:NaN;for(a=n<0?(1-e)*n:0,o=0,u=0,f=0,c=0;c<e;c++)(l=t[a])==l&&(o+=l*l,u+=l,f+=1),a+=n;return(i=f-r)<=0?NaN:(o-u/f*u)/i}f(c,"ndarray",(function(e,r,t,n,o){var a,i,u,l,f,c,_;if(e<=0)return NaN;if(1===e||0===n)return(f=t[o])==f&&e-r>0?0:NaN;for(i=o,a=0,l=0,c=0,_=0;_<e;_++)(f=t[i])==f&&(a+=f*f,l+=f,c+=1),i+=n;return(u=c-r)<=0?NaN:(a-l/c*l)/u}));const{ndarray:_}=c;var p=Math.sqrt;function d(e,r,t,n){return p(c(e,r,t,n))}return f(d,"ndarray",(function(e,r,t,n,o){return p(_(e,r,t,n,o))})),d},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).nanstdevtk=r();
//# sourceMappingURL=index.js.map