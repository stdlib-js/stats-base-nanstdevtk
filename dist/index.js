"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=n(function(g,s){
var k=require('@stdlib/stats-base-nanvariancetk/dist'),p=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,t,a){return p(k(e,r,t,a))}s.exports=x
});var v=n(function(h,u){
var y=require('@stdlib/stats-base-nanvariancetk/dist').ndarray,f=require('@stdlib/math-base-special-sqrt/dist');function l(e,r,t,a,o){return f(y(e,r,t,a,o))}u.exports=l
});var d=n(function(j,c){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=i(),O=v();m(q,"ndarray",O);c.exports=q
});var R=d();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
