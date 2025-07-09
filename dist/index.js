"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=n(function(g,i){
var y=require('@stdlib/stats-base-nanvariancetk/dist').ndarray,f=require('@stdlib/math-base-special-sqrt/dist');function k(e,r,a,t,o){return f(y(e,r,a,t,o))}i.exports=k
});var v=n(function(h,u){
var p=require('@stdlib/strided-base-stride2offset/dist'),x=s();function l(e,r,a,t){return x(e,r,a,t,p(e,t))}u.exports=l
});var c=n(function(j,d){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),O=s();m(q,"ndarray",O);d.exports=q
});var R=c();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
