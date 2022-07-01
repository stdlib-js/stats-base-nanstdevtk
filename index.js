// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__,f=t,c=function(e,r,t){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||l.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&i&&i.call(e,r,t.set),e},_=r()?f:c,p=function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=function(e,r,t,n){var o,a,i,u,l,f,c;if(e<=0)return NaN;if(1===e||0===n)return(l=t[0])==l&&e-r>0?0:NaN;for(a=n<0?(1-e)*n:0,o=0,u=0,f=0,c=0;c<e;c++)(l=t[a])==l&&(o+=l*l,u+=l,f+=1),a+=n;return(i=f-r)<=0?NaN:(o-u/f*u)/i};p(d,"ndarray",(function(e,r,t,n,o){var a,i,u,l,f,c,_;if(e<=0)return NaN;if(1===e||0===n)return(f=t[o])==f&&e-r>0?0:NaN;for(i=o,a=0,l=0,c=0,_=0;_<e;_++)(f=t[i])==f&&(a+=f*f,l+=f,c+=1),i+=n;return(u=c-r)<=0?NaN:(a-l/c*l)/u}));var y=d,s=Math.sqrt;function b(e,r,t,n){return s(y(e,r,t,n))}return p(b,"ndarray",(function(e,r,t,n,o){return s(y.ndarray(e,r,t,n,o))})),b},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).nanstdevtk=r();
//# sourceMappingURL=index.js.map
