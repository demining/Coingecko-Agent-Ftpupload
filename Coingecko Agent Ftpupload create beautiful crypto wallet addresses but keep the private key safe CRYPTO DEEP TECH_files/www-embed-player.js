(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=da(this);function n(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||ma});
var oa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},pa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=oa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),qa;
if("function"==typeof Object.setPrototypeOf)qa=Object.setPrototypeOf;else{var ra;a:{var sa={a:!0},ta={};try{ta.__proto__=sa;ra=ta.a;break a}catch(a){}ra=!1}qa=ra?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ua=qa;
function r(a,b){a.prototype=oa(b.prototype);a.prototype.constructor=a;if(ua)ua(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.X=b.prototype}
function va(){this.C=!1;this.m=null;this.j=void 0;this.i=1;this.o=this.s=0;this.v=this.l=null}
function wa(a){if(a.C)throw new TypeError("Generator is already running");a.C=!0}
va.prototype.I=function(a){this.j=a};
function xa(a,b){a.l={Sb:b,Yb:!0};a.i=a.s||a.o}
va.prototype.return=function(a){this.l={return:a};this.i=this.o};
function v(a,b,c){a.i=c;return{value:b}}
va.prototype.u=function(a){this.i=a};
function ya(a,b,c){a.s=b;void 0!=c&&(a.o=c)}
function za(a,b){a.i=b;a.s=0}
function Aa(a){a.s=0;var b=a.l.Sb;a.l=null;return b}
function Ba(a){a.v=[a.l];a.s=0;a.o=0}
function Ca(a){var b=a.v.splice(0)[0];(b=a.l=a.l||b)?b.Yb?a.i=a.s||a.o:void 0!=b.u&&a.o<b.u?(a.i=b.u,a.l=null):a.i=a.o:a.i=0}
function Da(a){this.i=new va;this.j=a}
function Ea(a,b){wa(a.i);var c=a.i.m;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.i.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.C=!1,e;var f=e.value}catch(g){return a.i.m=null,xa(a.i,g),Ga(a)}a.i.m=null;d.call(a.i,f);return Ga(a)}
function Ga(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.C=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,xa(a.i,c)}a.i.C=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.Yb)throw b.Sb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){wa(a.i);a.i.m?b=Fa(a,a.i.m.next,b,a.i.I):(a.i.I(b),b=Ga(a));return b};
this.throw=function(b){wa(a.i);a.i.m?b=Fa(a,a.i.m["throw"],b,a.i.I):(xa(a.i,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ia(new Ha(new Da(a)))}
function Ja(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return pa});
n("Reflect.setPrototypeOf",function(a){return a?a:ua?function(b,c){try{return ua(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.C=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.o()})}this.i.push(g)};
var e=fa.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.o=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.m(m)}}}this.i=null};
c.prototype.m=function(g){this.l(function(){throw g;})};
b.prototype.m=function(){function g(m){return function(q){k||(k=!0,m.call(h,q))}}
var h=this,k=!1;return{resolve:g(this.L),reject:g(this.o)}};
b.prototype.L=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.R(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.K(g):this.s(g)}};
b.prototype.K=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.T(h,g):this.s(g)};
b.prototype.o=function(g){this.I(2,g)};
b.prototype.s=function(g){this.I(1,g)};
b.prototype.I=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.P();this.v()};
b.prototype.P=function(){var g=this;e(function(){if(g.G()){var h=fa.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.G=function(){if(this.C)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.v=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.R=function(g){var h=this.m();g.Sa(h.resolve,h.reject)};
b.prototype.T=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(w,u){return"function"==typeof w?function(A){try{m(w(A))}catch(E){q(E)}}:u}
var m,q,t=new b(function(w,u){m=w;q=u});
this.Sa(k(g,m),k(h,q));return t};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Sa=function(g,h){function k(){switch(m.i){case 1:g(m.l);break;case 2:h(m.l);break;default:throw Error("Unexpected state: "+m.i);}}
var m=this;null==this.j?f.j(k):this.j.push(k);this.C=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=p(g),q=m.next();!q.done;q=m.next())d(q.value).Sa(h,k)})};
b.all=function(g){var h=p(g),k=h.next();return k.done?d([]):new b(function(m,q){function t(A){return function(E){w[A]=E;u--;0==u&&m(w)}}
var w=[],u=0;do w.push(void 0),u++,d(k.value).Sa(t(w.length-1),q),k=h.next();while(!k.done)})};
return b});
n("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=p(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ja(k,g)){var m=new c;ba(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(q){if(q instanceof c)return q;Object.isExtensible(q)&&e(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),q=new a([[k,2],[m,3]]);if(2!=q.get(k)||3!=q.get(m))return!1;q.delete(k);q.set(m,4);return!q.has(k)&&4==q.get(m)}catch(t){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=m;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)?delete k[g][this.i]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.i;return ha(function(){if(m){for(;m.head!=h.i;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var q=h.data_[m];if(q&&ja(h.data_,m))for(h=0;h<q.length;h++){var t=q[h];if(k!==k&&t.key!==t.key||k===t.key)return{id:m,list:q,index:h,entry:t}}return{id:m,list:q,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=p(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(p([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),q=m.next();if(q.done||q.value[0]!=h||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(t){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},m.list.push(m.entry),this.i.previous.next=m.entry,this.i.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),q;!(q=m.next()).done;)q=q.value,h.call(k,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ka(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
n("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
n("Object.setPrototypeOf",function(a){return a||ua});
n("Set",function(a){function b(c){this.i=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
n("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ka(this,b,"includes").indexOf(b,c||0)}});
n("globalThis",function(a){return a||fa});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
var Ma=Ma||{},y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){a.rb=void 0;a.getInstance=function(){return a.rb?a.rb:a.rb=new a}}
function Oa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Xa=Ua:Xa=Va;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.X=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Mq=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Za(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function cb(){}
function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},gb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},hb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ib=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
fb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},jb=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function kb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function lb(a,b){b=eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function mb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function nb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function pb(a){var b=qb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function rb(a){for(var b in a)return!1;return!0}
function sb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function tb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function ub(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function vb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function wb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=wb(a[c]);return b}
var xb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xb.length;f++)c=xb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var zb;function Ab(){if(void 0===zb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(c){y.console&&y.console.error(c.message)}zb=a}else zb=a}return zb}
;function Bb(a,b){this.l=a===Cb&&b||""}
Bb.prototype.j=!0;Bb.prototype.i=function(){return this.l};
function Db(a){return new Bb(Cb,a)}
var Cb={};Db("");var Eb={};function Fb(a){this.l=Eb===Eb?a:"";this.j=!0}
Fb.prototype.toString=function(){return this.l.toString()};
Fb.prototype.i=function(){return this.l.toString()};function Gb(a,b){this.l=b===Hb?a:""}
Gb.prototype.toString=function(){return this.l+""};
Gb.prototype.j=!0;Gb.prototype.i=function(){return this.l.toString()};
function Ib(a){if(a instanceof Gb&&a.constructor===Gb)return a.l;Oa(a);return"type_error:TrustedResourceUrl"}
var Hb={};function Jb(a){var b=Ab();a=b?b.createScriptURL(a):a;return new Gb(a,Hb)}
;var Mb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Nb(a,b){return a<b?-1:a>b?1:0}
;function Ob(a,b){this.l=b===Pb?a:""}
Ob.prototype.toString=function(){return this.l.toString()};
Ob.prototype.j=!0;Ob.prototype.i=function(){return this.l.toString()};
function Qb(a){if(a instanceof Ob&&a.constructor===Ob)return a.l;Oa(a);return"type_error:SafeUrl"}
var Rb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Pb={},Sb=new Ob("about:invalid#zClosurez",Pb);function Tb(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function C(a){return-1!=Tb().indexOf(a)}
;function Ub(){return C("Trident")||C("MSIE")}
function Vb(){return C("Firefox")||C("FxiOS")}
function Wb(){return C("Safari")&&!(Xb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||Vb()||C("Silk")||C("Android"))}
function Xb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")||C("Silk")}
function Yb(){return C("Android")&&!(Xb()||Vb()||C("Opera")||C("Silk"))}
function Zb(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function $b(a){var b=Tb();if("Internet Explorer"===a){if(Ub())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=Zb(c);
switch(a){case "Opera":if(C("Opera"))return b(["Version","Opera"]);if(C("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(C("Edge"))return b(["Edge"]);if(C("Edg/"))return b(["Edg"]);break;case "Chromium":if(Xb())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&Vb()||"Safari"===a&&Wb()||"Android Browser"===a&&Yb()||"Silk"===a&&C("Silk")?(b=c[2])&&b[1]||"":""}
function ac(a){a=$b(a);if(""===a)return NaN;a=a.split(".");return 0===a.length?NaN:Number(a[0])}
;var bc={};function cc(a){this.l=bc===bc?a:"";this.j=!0}
cc.prototype.i=function(){return this.l.toString()};
cc.prototype.toString=function(){return this.l.toString()};function fc(a,b){b instanceof Ob||b instanceof Ob||(b="object"==typeof b&&b.j?b.i():String(b),Rb.test(b)||(b="about:invalid#zClosurez"),b=new Ob(b,Pb));a.href=Qb(b)}
function gc(a,b){a.rel="stylesheet";a.href=Ib(b).toString();(b=hc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function ic(){return hc("script[nonce]")}
var jc=/^[\w+/_-]+[=]{0,2}$/;function hc(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&jc.test(a)?a:"":""}
;function kc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mc(a){return a?decodeURI(a):a}
function nc(a,b){return b.match(lc)[a]||null}
function oc(a){return mc(nc(3,a))}
function pc(a){var b=a.match(lc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function qc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function rc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)rc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function sc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)rc(a[b],a[b+1],c);return c.join("&")}
function tc(a){var b=[],c;for(c in a)rc(c,a[c],b);return b.join("&")}
function uc(a,b){var c=2==arguments.length?sc(arguments[1],0):sc(arguments,1);return qc(a,c)}
function vc(a,b){b=tc(b);return qc(a,b)}
function wc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return qc(a,b+c)}
function xc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var yc=/#|$/,zc=/[?&]($|#)/;function Ac(a,b){for(var c=a.search(yc),d=0,e,f=[];0<=(e=xc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(zc,"$1")}
;function Ec(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function Fc(){var a=Tb();if(C("Windows")){var b=/Windows (?:NT|Phone) ([0-9.]+)/;b.exec(a)}else Ec()||C("iPad")||C("iPod")?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,(a=b.exec(a))&&a[1].replace(/_/g,".")):C("Macintosh")?(b=/Mac OS X ([0-9_.]+)/,(a=b.exec(a))&&a[1].replace(/_/g,".")):-1!=Tb().toLowerCase().indexOf("kaios")?(b=/(?:KaiOS)\/(\S+)/i,b.exec(a)):C("Android")?(b=/Android\s+([^\);]+)(\)|;)/,b.exec(a)):C("CrOS")&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b.exec(a))}
;function Gc(a){Gc[" "](a);return a}
Gc[" "]=function(){};
function Hc(a){var b=Ic;return Object.prototype.hasOwnProperty.call(b,9)?b[9]:b[9]=a(9)}
;var Jc=C("Opera"),Kc=Ub(),Lc=C("Edge"),Mc=C("Gecko")&&!(-1!=Tb().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Nc=-1!=Tb().toLowerCase().indexOf("webkit")&&!C("Edge"),Oc=C("Android");function Pc(){var a=y.document;return a?a.documentMode:void 0}
var Qc;a:{var Rc="",Sc=function(){var a=Tb();if(Mc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Lc)return/Edge\/([\d\.]+)/.exec(a);if(Kc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Nc)return/WebKit\/(\S+)/.exec(a);if(Jc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Sc&&(Rc=Sc?Sc[1]:"");if(Kc){var Tc=Pc();if(null!=Tc&&Tc>parseFloat(Rc)){Qc=String(Tc);break a}}Qc=Rc}var Uc=Qc,Ic={};
function Vc(){return Hc(function(){for(var a=0,b=Mb(String(Uc)).split("."),c=Mb("9").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Nb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Nb(0==f[2].length,0==g[2].length)||Nb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}return 0<=a})}
var Wc;if(y.document&&Kc){var Xc=Pc();Wc=Xc?Xc:parseInt(Uc,10)||void 0}else Wc=void 0;var Yc=Wc;var Zc=Ec()||C("iPod"),$c=C("iPad");Yb();Xb();var ad=Wb()&&!(Ec()||C("iPad")||C("iPod"));var bd={},cd=null;
function dd(a,b){Pa(a);void 0===b&&(b=0);if(!cd){cd={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));bd[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===cd[h]&&(cd[h]=g)}}}b=bd[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var ed="undefined"!==typeof Uint8Array;function fd(a){return ed&&null!=a&&a instanceof Uint8Array}
var gd={};var hd;function id(a,b){if(b!==gd)throw Error("illegal external caller");this.ja=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
function jd(){return hd||(hd=new id(null,gd))}
id.prototype.isEmpty=function(){return null==this.ja};var kd="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function ld(a,b){Object.isFrozen(a)||(kd?a[kd]|=b:void 0!==a.fa?a.fa|=b:Object.defineProperties(a,{fa:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function md(a,b){Object.isExtensible(a)&&(kd?a[kd]&&(a[kd]&=~b):void 0!==a.fa&&(a.fa&=~b))}
function nd(a){var b;kd?b=a[kd]:b=a.fa;return null==b?0:b}
function od(a,b){kd?a[kd]=b:void 0!==a.fa?a.fa=b:Object.defineProperties(a,{fa:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function pd(a){ld(a,1);return a}
function qd(a){return a?!!(nd(a)&2):!1}
function rd(a){ld(a,16);return a}
function sd(a){if(!Array.isArray(a))throw Error("cannot mark non-array as shared mutably");md(a,16)}
function td(a,b){b?ld(a,8):md(a,8)}
function ud(a,b){od(b,(nd(a)|0)&-51)}
;var vd={};function Ad(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Bd,Cd=Object.freeze(pd([]));function Dd(a){if(qd(a.A))throw Error("Cannot mutate an immutable Message");}
var Ed="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Fd(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Gd(a){return a.displayName||a.name||"unknown type name"}
function Hd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Gd(b)+" but got "+(a&&Gd(a.constructor)));return a}
;function Id(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(fd(a))return dd(a);if(a instanceof id){var b=a.ja;return null==b?"":"string"===typeof b?b:a.ja=dd(b)}}}return a}
;function Jd(a,b,c){if(null!=a){if(Array.isArray(a))a=Kd(a,b,c);else if(Ad(a)){var d={},e;for(e in a)d[e]=Jd(a[e],b,c);a=d}else a=b(a);return a}}
function Kd(a,b,c){var d=Array.prototype.slice.call(a);c(a,d);for(a=0;a<d.length;a++)d[a]=Jd(d[a],b,c);return d}
function Ld(a){if(a.ub===vd)return a.toJSON();a=Id(a);return Array.isArray(a)?Kd(a,Ld,Md):a}
function Nd(a){if(!a)return a;if("object"===typeof a){if(fd(a))return new Uint8Array(a);if(a.ub===vd)return a.clone()}return a}
function Md(){}
;function Od(a){return a.i||(a.i=a.A[a.o+a.m]={})}
function Pd(a,b,c){return-1===b?null:b>=a.o?a.i?a.i[b]:void 0:(void 0===c?0:c)&&a.i&&(c=a.i[b],null!=c)?c:a.A[b+a.m]}
function D(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Dd(a);a.I&&(a.I=void 0);if(b>=a.o||d)return Od(a)[b]=c,a;void 0!==a.i&&a.o>=a.A.length?(d=a.A.length-1,e=b+a.m,e>=d?(a.A[d]=void 0,a.A[e]=c,a.A.push(a.i)):a.A[e]=c):a.A[b+a.m]=c;void 0!==a.i&&b in a.i&&delete a.i[b];return a}
function Qd(a,b,c,d){var e=Pd(a,b,d);Array.isArray(e)?e&&nd(e)&1||pd(e):e=Cd;if(qd(a.A))c&1||(ld(e,2),Object.freeze(e));else if(e===Cd||qd(e))e=pd(Array.prototype.slice.call(e)),D(a,b,e,d);return e}
function Rd(a,b,c){a=Pd(a,b);return null==a?c:a}
function Sd(a,b,c){null==c?c=Cd:pd(c);return D(a,b,c)}
function Td(a,b,c,d){Dd(a);(c=Ud(a,c))&&c!==b&&null!=d&&D(a,c,void 0,!1);return D(a,b,d)}
function Ud(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Pd(a,e)&&(0!==c&&D(a,c,void 0,!1,!0),c=e)}return c}
function Vd(a,b,c,d){var e=d=void 0===d?!1:d,f=Pd(a,c,e);var g=!1;var h=null==f||"object"!==typeof f||(g=Array.isArray(f))||f.ub!==vd?g?new b(f):void 0:f;h!==f&&null!=h&&(D(a,c,h,e,!0),ld(h.A,nd(a.A)&-33));b=h;if(null==b)return b;qd(b.A)&&!qd(a.A)&&(b=b.Cb(),D(a,c,b,d));return b}
function Wd(a,b,c,d,e){e=void 0===e?!0:e;a.j||(a.j={});var f=a.j[c];d=Qd(a,c,2,d);var g=!!(nd(a.A)&16),h=qd(d);h=qd(a.A)||h;if(!f){f=[];for(var k=h,m=0;m<d.length;m++){var q=d[m];k=k||qd(q);var t=b,w=g,u=!1;u=void 0===u?!1:u;w=void 0===w?!1:w;q=Array.isArray(q)?new t(w?rd(q):q):u?new t:void 0;void 0!==q&&(f.push(q),h&&ld(q.A,2))}a.j[c]=f;td(d,!k)}b=h||e;e=qd(f);b&&!e&&(Object.isFrozen(f)&&(a.j[c]=f=f.slice()),ld(f,2),Object.freeze(f));!b&&e&&(a.j[c]=f=f.slice());return f}
function Xd(a,b,c,d){d=void 0===d?!1:d;var e=qd(a.A);b=Wd(a,b,c,d,e);a=Qd(a,c,0,void 0===d?!1:d);if(!(c=e)&&(c=a)){if(!a)throw Error("cannot check mutability state of non-array");c=!(nd(a)&8)}if(c){for(c=0;c<b.length;c++)(d=b[c])&&qd(d.A)&&!e&&(b[c]=b[c].Cb(),a[c]=b[c].A);td(a,!0)}return b}
function G(a,b,c,d){Dd(a);null!=d?Hd(d,b):d=void 0;return D(a,c,d)}
function Yd(a,b,c,d,e){Dd(a);null!=e?Hd(e,b):e=void 0;Td(a,c,d,e)}
function Zd(a,b,c,d){Dd(a);if(null!=d){var e=pd([]);for(var f=!1,g=0;g<d.length;g++)e[g]=Hd(d[g],b).A,f=f||qd(e[g]);a.j||(a.j={});a.j[c]=d;td(e,!f)}else a.j&&(a.j[c]=void 0),e=Cd;return D(a,c,e)}
function $d(a,b,c,d){Dd(a);var e=Wd(a,c,b,void 0,!1);c=null!=d?Hd(d,c):new c;a=Qd(a,b,2);e.push(c);a.push(c.A);qd(c.A)&&td(a,!1)}
function ae(a,b){return Pd(a,b)}
;function be(a,b,c){a||(a=ce);ce=null;var d=this.constructor.i||0,e=0<d,f=this.constructor.j;a?nd(a)&16&&ld(a,32):(a=f?[f]:[],ld(a,48));e&&0<a.length&&Ad(a[a.length-1])&&"g"in a[a.length-1]&&(d=0);this.m=(f?0:-1)-d;this.j=void 0;this.A=a;a:{f=this.A.length;d=f-1;if(f&&(f=this.A[d],Ad(f))){this.i=f;b=Object.keys(f);0<b.length&&jb(b,isNaN)?this.o=Number.MAX_VALUE:this.o=d-this.m;break a}void 0!==b&&-1<b?(this.o=Math.max(b,d+1-this.m),this.i=void 0):this.o=Number.MAX_VALUE}if(!e&&this.i&&"g"in this.i)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
if(c)for(e=0;e<c.length;e++)b=c[e],b<this.o?(b+=this.m,(d=this.A[b])?Array.isArray(d)&&pd(d):this.A[b]=Cd):(d=Od(this),(f=d[b])?Array.isArray(f)&&pd(f):d[b]=Cd)}
l=be.prototype;l.toJSON=function(){var a=this.A;return Bd?a:Kd(a,Ld,Md)};
function de(a){Bd=!0;try{return JSON.stringify(a.toJSON(),ee)}finally{Bd=!1}}
l.clone=function(){var a=Kd(this.A,Nd,ud);rd(a);ce=a;a=new this.constructor(a);ce=null;fe(a,this);return a};
l.isMutable=function(){return!qd(this.A)};
l.ub=vd;l.toString=function(){return this.A.toString()};
function ee(a,b){return Id(b)}
function fe(a,b){b.s&&(a.s=b.s.slice());var c=b.j;if(c){b=b.i;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=Xd(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)fe(f[g],e[g])}else throw Error("unexpected object: type: "+Oa(e)+": "+e);}}}}
var ce;function ge(a,b,c,d,e,f){(a=a.j&&a.j[c])?(e=f.ib?pd(a.slice()):a,Zd(b,0<e.length?e[0].constructor:void 0,c,e)):(ed&&d instanceof Uint8Array?e=d.length?new id(new Uint8Array(d),gd):jd():(Array.isArray(d)&&(e?ld(d,2):d&&nd(d)&1&&f.ib?(e=Array.prototype.slice.call(d),od(e,(nd(d)|0)&-51),d=e):sd(d)),e=d),D(b,c,e))}
;function he(){be.apply(this,arguments)}
r(he,be);he.prototype.Cb=function(){return this};
if(Ed){var ie={};Object.defineProperties(he,(ie[Symbol.hasInstance]=Fd(function(){throw Error(void 0);}),ie))};function je(a){var b=this.i,c=this.j;return this.isRepeated?Xd(a,b,c,!0):Vd(a,b,c,!0)}
;function I(){he.apply(this,arguments)}
r(I,he);I.prototype.Cb=function(){if(qd(this.A)){var a={ib:!0};var b=qd(this.A);if(b&&!a.ib)throw Error("copyRepeatedFields must be true for frozen messages");b||sd(this.A);var c=new this.constructor;this.s&&(c.s=this.s.slice());for(var d=this.A,e=0;e<d.length;e++){var f=d[e];if(e===d.length-1&&Ad(f))for(var g in f){var h=+g;Number.isNaN(h)?Od(c)[g]=f[g]:ge(this,c,h,f[g],b,a)}else ge(this,c,e-this.m,f,b,a)}c.I=this;a=c}else a=this;return a};
if(Ed){var ke={};Object.defineProperties(I,(ke[Symbol.hasInstance]=Fd(Object[Symbol.hasInstance]),ke))};function le(a){this.Mb=a}
;function me(a,b,c){this.j=a;this.m=b;this.i=c||[];this.xa=new Map}
l=me.prototype;l.xc=function(a){var b=Ja.apply(1,arguments),c=this.lb(b);c?c.push(new le(a)):this.lc(a,b)};
l.lc=function(a){this.xa.set(this.Tb(Ja.apply(1,arguments)),[new le(a)])};
l.lb=function(){var a=this.Tb(Ja.apply(0,arguments));return this.xa.has(a)?this.xa.get(a):void 0};
l.Kc=function(){var a=this.lb(Ja.apply(0,arguments));return a&&a.length?a[0]:void 0};
l.clear=function(){this.xa.clear()};
l.Tb=function(){var a=Ja.apply(0,arguments);return a?a.join(","):"key"};function ne(a,b){me.call(this,a,3,b)}
r(ne,me);ne.prototype.l=function(a){var b=Ja.apply(1,arguments),c=0,d=this.Kc(b);d&&(c=d.Mb);this.lc(c+a,b)};function oe(a,b){me.call(this,a,2,b)}
r(oe,me);oe.prototype.l=function(a){this.xc(a,Ja.apply(1,arguments))};function pe(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function qe(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?qe.apply(null,d):pe(d)}}
;function J(){this.I=this.I;this.C=this.C}
J.prototype.I=!1;J.prototype.i=function(){return this.I};
J.prototype.dispose=function(){this.I||(this.I=!0,this.D())};
function re(a,b){se(a,Ya(pe,b))}
function se(a,b){a.I?b():(a.C||(a.C=[]),a.C.push(b))}
J.prototype.D=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
te.prototype.stopPropagation=function(){this.l=!0};
te.prototype.preventDefault=function(){this.defaultPrevented=!0};function ue(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ve(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,we[c])c=we[c];else{c=String(c);if(!we[c]){var f=/function\s+([^\(]+)/m.exec(c);we[c]=f?f[1]:"[Anonymous]"}c=we[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ve(a,b){b||(b={});b[xe(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[xe(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ve(a,b));return c}
function xe(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var we={};var ye=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",function(){},b),y.removeEventListener("test",function(){},b)}catch(c){}return a}();function ze(a,b){te.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
Za(ze,te);var Ae={2:"touch",3:"pen",4:"mouse"};
ze.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(Mc){a:{try{Gc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ae[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&ze.X.preventDefault.call(this)};
ze.prototype.stopPropagation=function(){ze.X.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
ze.prototype.preventDefault=function(){ze.X.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ge="closure_listenable_"+(1E6*Math.random()|0);var He=0;function Ie(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Wa=e;this.key=++He;this.Ha=this.Ra=!1}
function Je(a){a.Ha=!0;a.listener=null;a.proxy=null;a.src=null;a.Wa=null}
;function Ke(a){this.src=a;this.listeners={};this.i=0}
Ke.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=Le(a,b,d,e);-1<g?(b=a[g],c||(b.Ra=!1)):(b=new Ie(b,this.src,f,!!d,e),b.Ra=c,a.push(b));return b};
Ke.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Le(e,b,c,d);return-1<b?(Je(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function Me(a,b){var c=b.type;c in a.listeners&&lb(a.listeners[c],b)&&(Je(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function Le(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ha&&f.listener==b&&f.capture==!!c&&f.Wa==d)return e}return-1}
;var Ne="closure_lm_"+(1E6*Math.random()|0),Oe={},Pe=0;function Qe(a,b,c,d,e){if(d&&d.once)Re(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Qe(a,b[f],c,d,e);else c=Se(c),a&&a[Ge]?a.Z(b,c,Qa(d)?!!d.capture:!!d,e):Te(a,b,c,!1,d,e)}
function Te(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Ue(a);h||(a[Ne]=h=new Ke(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ve();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ye||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(We(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Pe++}}
function Ve(){function a(c){return b.call(a.src,a.listener,c)}
var b=Xe;return a}
function Re(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Re(a,b[f],c,d,e);else c=Se(c),a&&a[Ge]?a.m.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Te(a,b,c,!0,d,e)}
function Ye(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ye(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Se(c),a&&a[Ge])?a.m.remove(String(b),c,d,e):a&&(a=Ue(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Le(b,c,d,e)),(c=-1<a?b[a]:null)&&Ze(c))}
function Ze(a){if("number"!==typeof a&&a&&!a.Ha){var b=a.src;if(b&&b[Ge])Me(b.m,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(We(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Pe--;(c=Ue(b))?(Me(c,a),0==c.i&&(c.src=null,b[Ne]=null)):Je(a)}}}
function We(a){return a in Oe?Oe[a]:Oe[a]="on"+a}
function Xe(a,b){if(a.Ha)a=!0;else{b=new ze(b,this);var c=a.listener,d=a.Wa||a.src;a.Ra&&Ze(a);a=c.call(d,b)}return a}
function Ue(a){a=a[Ne];return a instanceof Ke?a:null}
var $e="__closure_events_fn_"+(1E9*Math.random()>>>0);function Se(a){if("function"===typeof a)return a;a[$e]||(a[$e]=function(b){return a.handleEvent(b)});
return a[$e]}
;function af(){J.call(this);this.m=new Ke(this);this.uc=this;this.ka=null}
Za(af,J);af.prototype[Ge]=!0;af.prototype.addEventListener=function(a,b,c,d){Qe(this,a,b,c,d)};
af.prototype.removeEventListener=function(a,b,c,d){Ye(this,a,b,c,d)};
function bf(a,b){var c=a.ka;if(c){var d=[];for(var e=1;c;c=c.ka)d.push(c),++e}a=a.uc;c=b.type||b;"string"===typeof b?b=new te(b,a):b instanceof te?b.target=b.target||a:(e=b,b=new te(c,a),yb(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=cf(g,c,!0,b)&&e}b.l||(g=b.i=a,e=cf(g,c,!0,b)&&e,b.l||(e=cf(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=cf(g,c,!1,b)&&e}
af.prototype.D=function(){af.X.D.call(this);if(this.m){var a=this.m,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Je(d[e]);delete a.listeners[c];a.i--}}this.ka=null};
af.prototype.Z=function(a,b,c,d){return this.m.add(String(a),b,!1,c,d)};
function cf(a,b,c,d){b=a.m.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ha&&g.capture==c){var h=g.listener,k=g.Wa||g.src;g.Ra&&Me(a.m,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function df(a,b){this.l=a;this.m=b;this.j=0;this.i=null}
df.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function ef(a,b){a.m(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;function ff(a,b){return a+Math.random()*(b-a)}
;function gf(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=gf.prototype;l.clone=function(){return new gf(this.x,this.y)};
l.equals=function(a){return a instanceof gf&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function hf(a,b){this.width=a;this.height=b}
l=hf.prototype;l.clone=function(){return new hf(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function jf(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function kf(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function lf(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var mf;function nf(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=kf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Ub()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Lb;c.Lb=null;e()}};
return function(e){d.next={Lb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function of(a){y.setTimeout(function(){throw a;},0)}
;function pf(){this.j=this.i=null}
pf.prototype.add=function(a,b){var c=qf.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
pf.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var qf=new df(function(){return new rf},function(a){return a.reset()});
function rf(){this.next=this.scope=this.i=null}
rf.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
rf.prototype.reset=function(){this.next=this.scope=this.i=null};var sf,tf=!1,uf=new pf;function vf(a,b){sf||wf();tf||(sf(),tf=!0);uf.add(a,b)}
function wf(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);sf=function(){a.then(xf)}}else sf=function(){var b=xf;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!C("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(mf||(mf=nf()),mf(b)):y.setImmediate(b)}}
function xf(){for(var a;a=uf.remove();){try{a.i.call(a.scope)}catch(b){of(b)}ef(qf,a)}tf=!1}
;function yf(a){this.i=0;this.C=void 0;this.m=this.j=this.l=null;this.o=this.s=!1;if(a!=cb)try{var b=this;a.call(void 0,function(c){zf(b,2,c)},function(c){zf(b,3,c)})}catch(c){zf(this,3,c)}}
function Af(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
Af.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var Bf=new df(function(){return new Af},function(a){a.reset()});
function Cf(a,b,c){var d=Bf.get();d.j=a;d.onRejected=b;d.context=c;return d}
function Df(a){return new yf(function(b,c){c(a)})}
yf.prototype.then=function(a,b,c){return Ef(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
yf.prototype.$goog_Thenable=!0;l=yf.prototype;l.eb=function(a,b){return Ef(this,null,a,b)};
l.catch=yf.prototype.eb;l.cancel=function(a){if(0==this.i){var b=new Ff(a);vf(function(){Gf(this,b)},this)}};
function Gf(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?Gf(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):Hf(c),If(c,e,3,b)))}a.l=null}else zf(a,3,b)}
function Jf(a,b){a.j||2!=a.i&&3!=a.i||Kf(a);a.m?a.m.next=b:a.j=b;a.m=b}
function Ef(a,b,c,d){var e=Cf(null,null,null);e.i=new yf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ff?g(h):f(k)}catch(m){g(m)}}:g});
e.i.l=a;Jf(a,e);return e.i}
l.td=function(a){this.i=0;zf(this,2,a)};
l.ud=function(a){this.i=0;zf(this,3,a)};
function zf(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.td,f=a.ud;if(d instanceof yf){Jf(d,Cf(e||cb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if("function"===typeof k){Lf(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.C=c,a.i=b,a.l=null,Kf(a),3!=b||c instanceof Ff||Mf(a,c))}}
function Lf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Kf(a){a.s||(a.s=!0,vf(a.Ic,a))}
function Hf(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.m=null);return b}
l.Ic=function(){for(var a;a=Hf(this);)If(this,a,this.i,this.C);this.s=!1};
function If(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.o;a=a.l)a.o=!1;if(b.i)b.i.l=null,Nf(b,c,d);else try{b.l?b.j.call(b.context):Nf(b,c,d)}catch(e){Of.call(null,e)}ef(Bf,b)}
function Nf(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Mf(a,b){a.o=!0;vf(function(){a.o&&Of.call(null,b)})}
var Of=of;function Ff(a){ab.call(this,a)}
Za(Ff,ab);Ff.prototype.name="cancel";function Pf(a,b){af.call(this);this.l=a||1;this.j=b||y;this.o=Xa(this.rd,this);this.s=Date.now()}
Za(Pf,af);l=Pf.prototype;l.enabled=!1;l.ba=null;function Qf(a,b){a.l=b;a.ba&&a.enabled?(a.stop(),a.start()):a.ba&&a.stop()}
l.rd=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.l?this.ba=this.j.setTimeout(this.o,this.l-a):(this.ba&&(this.j.clearTimeout(this.ba),this.ba=null),bf(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
l.start=function(){this.enabled=!0;this.ba||(this.ba=this.j.setTimeout(this.o,this.l),this.s=Date.now())};
l.stop=function(){this.enabled=!1;this.ba&&(this.j.clearTimeout(this.ba),this.ba=null)};
l.D=function(){Pf.X.D.call(this);this.stop();delete this.j};
function Rf(a,b,c){if("function"===typeof a)c&&(a=Xa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Xa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:y.setTimeout(a,b||0)}
;function Sf(a){this.C=a;this.i=new Map;this.s=new Set;this.l=0;this.m=100;this.flushInterval=3E4;this.j=new Pf(this.flushInterval);this.j.Z("tick",this.gb,!1,this);this.o=!1}
l=Sf.prototype;l.jc=function(a){this.o=a;this.m=1};
function Tf(a){a.j.enabled||a.j.start();a.l++;a.l>=a.m&&a.gb()}
l.gb=function(){var a=this.i.values();a=[].concat(ia(a)).filter(function(b){return b.xa.size});
a.length&&this.C.flush(a,this.o);Uf(a);this.l=0;this.j.enabled&&this.j.stop()};
l.yc=function(a){var b=Ja.apply(1,arguments);this.i.has(a)||this.i.set(a,new ne(a,b))};
l.Jb=function(a){var b=Ja.apply(1,arguments);this.i.has(a)||this.i.set(a,new oe(a,b))};
function Vf(a,b){return a.s.has(b)?void 0:a.i.get(b)}
l.Db=function(a){this.sc.apply(this,[a,1].concat(ia(Ja.apply(1,arguments))))};
l.sc=function(a,b){var c=Ja.apply(2,arguments),d=Vf(this,a);d&&d instanceof ne&&(d.l(b,c),Tf(this))};
l.fb=function(a,b){var c=Ja.apply(2,arguments),d=Vf(this,a);d&&d instanceof oe&&(d.l(b,c),Tf(this))};
function Uf(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Wf(a){this.i=a;this.i.Jb("/client_streamz/bg/fil",{kb:3,jb:"rk"})}
function Xf(a){this.i=a;this.i.yc("/client_streamz/bg/fsc",{kb:3,jb:"rk"})}
function Yf(a){this.i=a;this.i.Jb("/client_streamz/bg/fsl",{kb:3,jb:"rk"})}
;function Zf(a){I.call(this,a,-1,$f)}
r(Zf,I);function ag(a){I.call(this,a,-1,bg)}
r(ag,I);function cg(a){I.call(this,a)}
r(cg,I);function dg(a){I.call(this,a)}
r(dg,I);var $f=[3,6,4],bg=[1],eg=[1,2,3],fg=[1,2,3];function gg(a){I.call(this,a,-1,hg)}
r(gg,I);var hg=[1];function ig(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function jg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(t){for(var w=g,u=0;64>u;u+=4)w[u/4]=t[u]<<24|t[u+1]<<16|t[u+2]<<8|t[u+3];for(u=16;80>u;u++)t=w[u-3]^w[u-8]^w[u-14]^w[u-16],w[u]=(t<<1|t>>>31)&4294967295;t=e[0];var A=e[1],E=e[2],F=e[3],O=e[4];for(u=0;80>u;u++){if(40>u)if(20>u){var N=F^A&(E^F);var R=1518500249}else N=A^E^F,R=1859775393;else 60>u?(N=A&E|F&(A|E),R=2400959708):(N=A^E^F,R=3395469782);N=((t<<5|t>>>27)&4294967295)+N+O+R+w[u]&4294967295;O=F;F=E;E=(A<<30|A>>>2)&4294967295;A=t;t=N}e[0]=e[0]+t&4294967295;e[1]=e[1]+A&4294967295;e[2]=
e[2]+E&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+O&4294967295}
function c(t,w){if("string"===typeof t){t=unescape(encodeURIComponent(t));for(var u=[],A=0,E=t.length;A<E;++A)u.push(t.charCodeAt(A));t=u}w||(w=t.length);u=0;if(0==m)for(;u+64<w;)b(t.slice(u,u+64)),u+=64,q+=64;for(;u<w;)if(f[m++]=t[u++],q++,64==m)for(m=0,b(f);u+64<w;)b(t.slice(u,u+64)),u+=64,q+=64}
function d(){var t=[],w=8*q;56>m?c(h,56-m):c(h,64-(m-56));for(var u=63;56<=u;u--)f[u]=w&255,w>>>=8;b(f);for(u=w=0;5>u;u++)for(var A=24;0<=A;A-=8)t[w++]=e[u]>>A&255;return t}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,q;a();return{reset:a,update:c,digest:d,Ec:function(){for(var t=d(),w="",u=0;u<t.length;u++)w+="0123456789ABCDEF".charAt(Math.floor(t[u]/16))+"0123456789ABCDEF".charAt(t[u]%16);return w}}}
;function kg(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,lg(ig(d),a,c||null)].join(" "):null}
function lg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],fb(d,function(h){e.push(h)}),mg(e.join(" "));
var f=[],g=[];fb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];fb(d,function(h){e.push(h)});
a=mg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function mg(a){var b=jg();b.update(a);return b.Ec().toLowerCase()}
;var ng={};function og(a){this.i=a||{cookie:""}}
l=og.prototype;l.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Ya:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.er;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ya}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Mb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ya:0,path:b,domain:c});return d};
l.ob=function(){return pg(this).keys};
l.isEmpty=function(){return!this.i.cookie};
l.clear=function(){for(var a=pg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function pg(a){a=(a.i.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Mb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var qg=new og("undefined"==typeof document?null:document);function rg(a){return!!ng.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function sg(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;rg(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new og(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");rg(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function tg(a,b,c,d){(a=y[a])||(a=(new og(document)).get(b));return a?kg(a,c,d):null}
function ug(a,b){b=void 0===b?!1:b;var c=ig(String(y.location.href)),d=[];if(sg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new og(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?kg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&rg(b)&&((b=tg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=tg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function vg(a){I.call(this,a,-1,wg)}
r(vg,I);var wg=[2];function xg(a){this.i=this.j=this.l=a}
xg.prototype.reset=function(){this.i=this.j=this.l};
xg.prototype.getValue=function(){return this.j};function yg(a){var b=[];zg(new Ag,a,b);return b.join("")}
function Ag(){}
function zg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),zg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Bg(d,c),c.push(":"),zg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Bg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Cg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Dg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Bg(a,b){b.push('"',a.replace(Dg,function(c){var d=Cg[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Cg[c]=d);return d}),'"')}
;function Eg(){}
Eg.prototype.i=null;Eg.prototype.getOptions=function(){var a;(a=this.i)||(a={},Fg(this)&&(a[0]=!0,a[1]=!0),a=this.i=a);return a};var Gg;function Hg(){}
Za(Hg,Eg);function Ig(a){return(a=Fg(a))?new ActiveXObject(a):new XMLHttpRequest}
function Fg(a){if(!a.j&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.j=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.j}
Gg=new Hg;function Jg(a){af.call(this);this.headers=new Map;this.L=a||null;this.j=!1;this.K=this.B=null;this.o=this.T="";this.l=this.R=this.v=this.P=!1;this.s=0;this.G=null;this.ca="";this.V=this.W=!1}
Za(Jg,af);var Kg=/^https?$/i,Lg=["POST","PUT"],Mg=[];function Ng(a,b,c,d,e,f,g){var h=new Jg;Mg.push(h);b&&h.Z("complete",b);h.m.add("ready",h.Cc,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.W=g);h.send(a,c,d,e)}
l=Jg.prototype;l.Cc=function(){this.dispose();lb(Mg,this)};
l.send=function(a,b,c,d){if(this.B)throw Error("[goog.net.XhrIo] Object is active with another request="+this.T+"; newUri="+a);b=b?b.toUpperCase():"GET";this.T=a;this.o="";this.P=!1;this.j=!0;this.B=this.L?Ig(this.L):Ig(Gg);this.K=this.L?this.L.getOptions():Gg.getOptions();this.B.onreadystatechange=Xa(this.ac,this);try{this.getStatus(),this.R=!0,this.B.open(b,String(a),!0),this.R=!1}catch(g){this.getStatus();Og(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=p(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=y.FormData&&a instanceof y.FormData;!(0<=eb(Lg,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=p(c);for(d=b.next();!d.done;d=b.next())c=p(d.value),d=c.next().value,c=c.next().value,this.B.setRequestHeader(d,c);this.ca&&(this.B.responseType=this.ca);"withCredentials"in this.B&&this.B.withCredentials!==this.W&&(this.B.withCredentials=this.W);try{Pg(this),0<this.s&&(this.V=Qg(this.B),this.getStatus(),this.V?(this.B.timeout=this.s,this.B.ontimeout=Xa(this.nc,this)):
this.G=Rf(this.nc,this.s,this)),this.getStatus(),this.v=!0,this.B.send(a),this.v=!1}catch(g){this.getStatus(),Og(this,g)}};
function Qg(a){return Kc&&Vc()&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
l.nc=function(){"undefined"!=typeof Ma&&this.B&&(this.o="Timed out after "+this.s+"ms, aborting",this.getStatus(),bf(this,"timeout"),this.abort(8))};
function Og(a,b){a.j=!1;a.B&&(a.l=!0,a.B.abort(),a.l=!1);a.o=b;Rg(a);Ug(a)}
function Rg(a){a.P||(a.P=!0,bf(a,"complete"),bf(a,"error"))}
l.abort=function(){this.B&&this.j&&(this.getStatus(),this.j=!1,this.l=!0,this.B.abort(),this.l=!1,bf(this,"complete"),bf(this,"abort"),Ug(this))};
l.D=function(){this.B&&(this.j&&(this.j=!1,this.l=!0,this.B.abort(),this.l=!1),Ug(this,!0));Jg.X.D.call(this)};
l.ac=function(){this.i()||(this.R||this.v||this.l?Vg(this):this.Tc())};
l.Tc=function(){Vg(this)};
function Vg(a){if(a.j&&"undefined"!=typeof Ma)if(a.K[1]&&4==Wg(a)&&2==a.getStatus())a.getStatus();else if(a.v&&4==Wg(a))Rf(a.ac,0,a);else if(bf(a,"readystatechange"),a.isComplete()){a.getStatus();a.j=!1;try{if(Xg(a))bf(a,"complete"),bf(a,"success");else{try{var b=2<Wg(a)?a.B.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Rg(a)}}finally{Ug(a)}}}
function Ug(a,b){if(a.B){Pg(a);var c=a.B,d=a.K[0]?function(){}:null;
a.B=null;a.K=null;b||bf(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Pg(a){a.B&&a.V&&(a.B.ontimeout=null);a.G&&(y.clearTimeout(a.G),a.G=null)}
l.isActive=function(){return!!this.B};
l.isComplete=function(){return 4==Wg(this)};
function Xg(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=nc(1,String(a.T)),!a&&y.self&&y.self.location&&(a=y.self.location.protocol.slice(0,-1)),b=!Kg.test(a?a.toLowerCase():"");c=b}return c}
function Wg(a){return a.B?a.B.readyState:0}
l.getStatus=function(){try{return 2<Wg(this)?this.B.status:-1}catch(a){return-1}};
l.getLastError=function(){return"string"===typeof this.o?this.o:String(this.o)};function Yg(a){I.call(this,a)}
r(Yg,I);function Zg(a){I.call(this,a,-1,$g)}
r(Zg,I);var $g=[1];var ah=["platform","platformVersion","architecture","model","uaFullVersion"];new Zg;function bh(a){I.call(this,a)}
r(bh,I);function ch(a){I.call(this,a,31,dh)}
r(ch,I);var dh=[3,20,27];function eh(a){I.call(this,a,17,fh)}
r(eh,I);var fh=[3,5];function gh(a){I.call(this,a,6,hh)}
r(gh,I);var hh=[5];function ih(a){I.call(this,a)}
r(ih,I);var jh;jh=new function(a,b,c){this.j=a;this.fieldName=b;this.i=c;this.isRepeated=0;this.l=je}(175237375,{Sq:0},ih);function kh(a,b,c,d,e,f,g,h,k,m,q){af.call(this);var t=this;this.P="";this.l=[];this.Hb="";this.Ib=this.qa=-1;this.Oa=!1;this.K=this.o=null;this.G=0;this.vc=1;this.timeoutMillis=0;this.ca=!1;af.call(this);this.Gb=b||function(){};
this.v=new lh(a,f);this.tc=d;this.Na=q;this.wc=Ya(ff,0,1);this.T=e||null;this.L=c||null;this.V=g||!1;this.pageId=k||null;this.logger=null;this.withCredentials=!h;this.Da=f||!1;!this.Da&&(65<=ac("Chromium")||45<=ac("Firefox")||12<=ac("Safari")||(Ec()||C("iPad")||C("iPod"))&&Fc());a=D(new bh,1,1);mh(this.v,a);this.s=new xg(1E4);this.j=new Pf(this.s.getValue());re(this,this.j);m=nh(this,m);Qe(this.j,"tick",m,!1,this);this.R=new Pf(6E5);re(this,this.R);Qe(this.R,"tick",m,!1,this);this.V||this.R.start();
this.Da||(Qe(document,"visibilitychange",function(){"hidden"===document.visibilityState&&t.W()}),Qe(document,"pagehide",this.W,!1,this))}
r(kh,af);function nh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
kh.prototype.D=function(){this.W();af.prototype.D.call(this)};
function oh(a){a.T||(a.T=.01>a.wc()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.T}
function ph(a,b){a.s=new xg(1>b?1:b);Qf(a.j,a.s.getValue())}
kh.prototype.log=function(a){a=a.clone();var b=this.vc++;D(a,21,b);this.P&&D(a,26,this.P);if(!Pd(a,1)){b=a;var c=Date.now().toString();D(b,1,c)}null!=Pd(a,15,!1)||D(a,15,60*(new Date).getTimezoneOffset());this.o&&(b=this.o.clone(),G(a,vg,16,b));for(;1E3<=this.l.length;)this.l.shift(),++this.G;this.l.push(a);bf(this,new qh(a));this.V||this.j.enabled||this.j.start()};
kh.prototype.flush=function(a,b){var c=this;if(0===this.l.length)a&&a();else if(this.ca)rh(this);else{var d=Date.now();if(this.Ib>d&&this.qa<d)b&&b("throttled");else{var e=sh(this.v,this.l,this.G);d={};var f=this.Gb();f&&(d.Authorization=f);var g=oh(this);this.L&&(d["X-Goog-AuthUser"]=this.L,g=wc(g,"authuser",this.L));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=wc(g,"pageId",this.pageId));if(f&&this.Hb===f)b&&b("stale-auth-token");else{this.l=[];this.j.enabled&&this.j.stop();this.G=0;var h=de(e),
k;this.K&&this.K.isSupported(h.length)&&(k=this.K.compress(h));var m={url:g,body:h,Ac:1,yb:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},q=function(u){c.s.reset();Qf(c.j,c.s.getValue());if(u){var A=null;try{var E=JSON.parse(u.replace(")]}'\n",""));A=new gh(E)}catch(F){}A&&(u=Number(Rd(A,1,"-1")),0<u&&(c.qa=Date.now(),c.Ib=c.qa+u),A=jh.l(A))&&(A=Rd(A,1,-1),-1!=A&&(c.Oa||ph(c,A)))}a&&a()},t=function(u,A){var E=Xd(e,ch,3),F=c.s;
F.i=Math.min(3E5,2*F.i);F.j=Math.min(3E5,F.i+Math.round(.2*(Math.random()-.5)*F.i));Qf(c.j,c.s.getValue());401===u&&f&&(c.Hb=f);void 0===A&&(A=500<=u&&600>u||401===u||0===u);A&&(c.l=E.concat(c.l),c.V||c.j.enabled||c.j.start());b&&b("net-send-failed",u)},w=function(){c.Na?c.Na.send(m,q,t):c.tc(m,q,t)};
k?k.then(function(u){m.yb["Content-Encoding"]="gzip";m.yb["Content-Type"]="application/binary";m.body=u;m.Ac=2;w()},function(){w()}):w()}}}};
kh.prototype.W=function(){this.flush()};
function rh(a){th(a,function(b,c){b=wc(b,"format","json");b=window.navigator.sendBeacon(b,de(c));a.ca&&!b&&(a.ca=!1);return b})}
function th(a,b){if(0!==a.l.length){var c=Ac(oh(a),"format");c=uc(c,"auth",a.Gb(),"authuser",a.L||"0");for(var d=0;10>d&&a.l.length;++d){var e=a.l.slice(0,32),f=sh(a.v,e,a.G);if(!b(c,f))break;a.G=0;a.l=a.l.slice(e.length)}a.j.enabled&&a.j.stop()}}
function qh(){te.call(this,"event-logged",void 0)}
r(qh,te);function lh(a,b){this.j=b=void 0===b?!1:b;this.uach=this.locale=null;this.i=new eh;D(this.i,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));mh(this,new bh)}
function mh(a,b){G(a.i,bh,1,b);Pd(b,1)||D(b,1,1);a.j||(b=uh(a),Pd(b,5)||D(b,5,a.locale));a.uach&&(b=uh(a),Vd(b,Zg,9)||G(b,Zg,9,a.uach))}
function vh(a,b){var c=void 0===c?ah:c;b(window,c).then(function(d){a.uach=d;d=uh(a);G(d,Zg,9,a.uach);return!0}).catch(function(){return!1})}
function uh(a){a=Vd(a.i,bh,1);var b=Vd(a,Yg,11);b||(b=new Yg,G(a,Yg,11,b));return b}
function sh(a,b,c){c=void 0===c?0:c;a=a.i.clone();var d=Date.now().toString();a=D(a,4,d);b=Zd(a,ch,3,b);c&&D(b,14,c);return b}
;function wh(a,b,c){Ng(a.url,function(d){d=d.target;if(Xg(d)){try{var e=d.B?d.B.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.yb,a.timeoutMillis,a.withCredentials)}
;function xh(){this.l="https://play.google.com/log?format=json&hasfast=true";this.m=!1;this.s=wh;this.i=""}
;function yh(){var a=void 0===a?"":a;var b=void 0===b?!1:b;var c=void 0===c?"":c;var d=new xh;d.i="";""!=a&&(d.l=a);b&&(d.m=!0);c&&(d.j=c);a=new kh(1828,d.K?d.K:ug,"0",d.s,d.l,d.m,!1,d.R,void 0,void 0,d.C?d.C:void 0);d.v&&mh(a.v,d.v);d.j&&(b=d.j,c=uh(a.v),D(c,7,b));d.o&&(a.K=d.o);d.i&&(a.P=d.i);d.I&&((b=d.I)?(a.o||(a.o=new vg),b=de(b),D(a.o,4,b)):a.o&&D(a.o,4,void 0,!1));d.L&&(b=d.L,a.o||(a.o=new vg),Sd(a.o,2,b));d.G&&(b=d.G,a.Oa=!0,ph(a,b));d.P&&vh(a.v,d.P);this.i=a}
yh.prototype.flush=function(a){var b=a||[];if(b.length){a=new gg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e;var g=new Zf;g=D(g,1,f.j);for(var h=f,k=[],m=0;m<h.i.length;m++)k.push(h.i[m].jb);g=Sd(g,3,k);h=[];k=[];m=p(f.xa.keys());for(var q=m.next();!q.done;q=m.next())k.push(q.value.split(","));for(m=0;m<k.length;m++){q=k[m];var t=f.m;for(var w=f.lb(q)||[],u=[],A=0;A<w.length;A++){var E=w[A];E=E&&E.Mb;var F=new dg;switch(t){case 3:Td(F,1,fg,Number(E));break;case 2:Td(F,2,fg,Number(E))}u.push(F)}t=
u;for(w=0;w<t.length;w++){u=t[w];A=new ag;u=G(A,dg,2,u);A=q;E=[];F=f;for(var O=[],N=0;N<F.i.length;N++)O.push(F.i[N].kb);F=O;for(O=0;O<F.length;O++){N=F[O];var R=A[O],ca=new cg;switch(N){case 3:Td(ca,1,eg,String(R));break;case 2:Td(ca,2,eg,Number(R));break;case 1:Td(ca,3,eg,"true"==R)}E.push(ca)}Zd(u,cg,1,E);h.push(u)}}Zd(g,ag,4,h);c.push(g);e.clear()}Zd(a,Zf,1,c);b=this.i;a instanceof ch?b.log(a):(c=new ch,a=de(a),a=D(c,8,a),b.log(a));this.i.flush()}};function zh(){this.o=Ah();this.s=new yh;this.i=new Sf(this.s);this.m=new Wf(this.i);this.j=new Xf(this.i);this.l=new Yf(this.i);this.Aa=window.document.location.hostname}
function Ah(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Bh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Ch(a){var b=this;this.Ua=!1;if(a.Xc){var c;this.ra=null!=(c=a.ra)?c:new zh}c=a.program;a=a.globalName;var d=new Bh;this.j=d.promise;this.pd=p((0,y[a].a)(c,function(e,f){Promise.resolve().then(function(){var g;if(null!=(g=b.ra)){var h=Ah()-g.o;g.m.i.fb("/client_streamz/bg/fil",h,g.Aa)}d.resolve({zc:e,md:f})})},!0)).next().value;
this.ld=d.promise.then(function(){})}
Ch.prototype.snapshot=function(a){var b=this;if(this.Ua)throw Error("Already disposed");var c=Ah(),d;null!=(d=this.ra)&&d.j.i.Db("/client_streamz/bg/fsc",d.Aa);return this.j.then(function(e){var f=e.zc;return new Promise(function(g){f(function(h){var k;if(null!=(k=b.ra)){var m=Ah()-c;k.l.i.fb("/client_streamz/bg/fsl",m,k.Aa)}g(h)},[a.Ob,
a.nd])})})};
Ch.prototype.dispose=function(){var a;null!=(a=this.ra)&&a.i.gb();this.Ua=!0;this.j.then(function(b){(b=b.md)&&b()})};
Ch.prototype.i=function(){return this.Ua};var Dh=window;Db("csi.gstatic.com");Db("googleads.g.doubleclick.net");Db("partner.googleadservices.com");Db("pubads.g.doubleclick.net");Db("securepubads.g.doubleclick.net");Db("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Eh;try{new URL("s://g"),Eh=!0}catch(a){Eh=!1}var Fh=Eh;function Gh(a,b){a.src=Ib(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Hh(a){var b=Ih;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Jh(){var a=[];Hh(function(b){a.push(b)});
return a}
var Ih={Id:"allow-forms",Jd:"allow-modals",Kd:"allow-orientation-lock",Ld:"allow-pointer-lock",Md:"allow-popups",Nd:"allow-popups-to-escape-sandbox",Od:"allow-presentation",Pd:"allow-same-origin",Qd:"allow-scripts",Rd:"allow-top-navigation",Sd:"allow-top-navigation-by-user-activation"},Kh=db(function(){return Jh()});
function Lh(){var a=Mh(),b={};fb(Kh(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Mh(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Nh(a){this.isValid=a}
function Oh(a){return new Nh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Ph=[Oh("data"),Oh("http"),Oh("https"),Oh("mailto"),Oh("ftp"),new Nh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Qh(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Rh=(new Date).getTime();var Sh="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(Sh);function Th(a){af.call(this);var b=this;this.v=this.l=0;this.Y=null!=a?a:{S:function(e,f){return setTimeout(e,f)},
ea:function(e){clearTimeout(e)}};
var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return x(function(e){return v(e,Uh(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.v||Vh(this)}
r(Th,af);function Wh(){var a=Xh;Th.i||(Th.i=new Th(a));return Th.i}
Th.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Y.ea(this.v);delete Th.i};
Th.prototype.M=function(){return this.j};
function Vh(a){a.v=a.Y.S(function(){var b;return x(function(c){if(1==c.i)return a.j?(null==(b=window.navigator)?0:b.onLine)?c.u(3):v(c,Uh(a),3):v(c,Uh(a),3);Vh(a);c.i=0})},3E4)}
function Uh(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.l=a.Y.S(function(){d.abort()},b||2E4)),v(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ba(h);a.s=void 0;a.l&&(a.Y.ea(a.l),a.l=0);g!==a.j&&(a.j=g,a.j?bf(a,"networkstatus-online"):bf(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Aa(h),g=!1,h.u(3)}})})}
;var Yh={fi:"EMBEDDED_PLAYER_MODE_UNKNOWN",bi:"EMBEDDED_PLAYER_MODE_DEFAULT",di:"EMBEDDED_PLAYER_MODE_PFP",ci:"EMBEDDED_PLAYER_MODE_PFL"},Zh={tq:"WEB_DISPLAY_MODE_UNKNOWN",pq:"WEB_DISPLAY_MODE_BROWSER",rq:"WEB_DISPLAY_MODE_MINIMAL_UI",sq:"WEB_DISPLAY_MODE_STANDALONE",qq:"WEB_DISPLAY_MODE_FULLSCREEN"};function $h(){this.data_=[];this.i=-1}
$h.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
$h.prototype.get=function(a){return!!this.data_[a]};
function ai(a){-1===a.i&&(a.i=ib(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function bi(a,b){this.i=a[y.Symbol.iterator]();this.j=b}
bi.prototype[Symbol.iterator]=function(){return this};
bi.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function ci(a,b){return new bi(a,b)}
;function di(){this.blockSize=-1}
;function ei(){this.blockSize=-1;this.blockSize=64;this.i=[];this.o=[];this.s=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
Za(ei,di);ei.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.m=this.j=0};
function fi(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
ei.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)fi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){fi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){fi(this,e);f=0;break}}this.j=f;this.m+=b}};
ei.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;fi(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function gi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function hi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function ii(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:gi(a).match(/\S+/g)||[],b=0<=eb(a,b));return b}
function ji(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):ii(a,"inverted-hdpi")&&hi(a,Array.prototype.filter.call(a.classList?a.classList:gi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function ki(){}
ki.prototype.next=function(){return li};
var li={done:!0,value:void 0};function mi(a){return{value:a,done:!1}}
ki.prototype.da=function(){return this};function ni(a){if(a instanceof oi||a instanceof pi||a instanceof qi)return a;if("function"==typeof a.next)return new oi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new oi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.da)return new oi(function(){return a.da()});
throw Error("Not an iterator or iterable.");}
function oi(a){this.j=a}
oi.prototype.da=function(){return new pi(this.j())};
oi.prototype[Symbol.iterator]=function(){return new qi(this.j())};
oi.prototype.i=function(){return new qi(this.j())};
function pi(a){this.j=a}
r(pi,ki);pi.prototype.next=function(){return this.j.next()};
pi.prototype[Symbol.iterator]=function(){return new qi(this.j)};
pi.prototype.i=function(){return new qi(this.j)};
function qi(a){oi.call(this,function(){return a});
this.l=a}
r(qi,oi);qi.prototype.next=function(){return this.l.next()};function ri(a,b){this.j={};this.i=[];this.na=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ri)for(c=a.ob(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=ri.prototype;l.ob=function(){si(this);return this.i.concat()};
l.has=function(a){return ti(this.j,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||ui;si(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function ui(a,b){return a===b}
l.isEmpty=function(){return 0==this.size};
l.clear=function(){this.j={};this.na=this.size=this.i.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return ti(this.j,a)?(delete this.j[a],--this.size,this.na++,this.i.length>2*this.size&&si(this),!0):!1};
function si(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];ti(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],ti(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
l.get=function(a,b){return ti(this.j,a)?this.j[a]:b};
l.set=function(a,b){ti(this.j,a)||(this.size+=1,this.i.push(a),this.na++);this.j[a]=b};
l.forEach=function(a,b){for(var c=this.ob(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new ri(this)};
l.keys=function(){return ni(this.da(!0)).i()};
l.values=function(){return ni(this.da(!1)).i()};
l.entries=function(){var a=this;return ci(this.keys(),function(b){return[b,a.get(b)]})};
l.da=function(a){si(this);var b=0,c=this.na,d=this,e=new ki;e.next=function(){if(c!=d.na)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return li;var f=d.i[b++];return mi(a?f:d.j[f])};
return e};
function ti(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function K(a){J.call(this);this.s=1;this.m=[];this.o=0;this.j=[];this.l={};this.v=!!a}
Za(K,J);l=K.prototype;l.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.j[e]=a;this.j[e+1]=b;this.j[e+2]=c;this.s=e+3;d.push(e);return e};
function vi(a,b,c,d){if(b=a.l[b]){var e=a.j;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Ca(b)}}
l.Ca=function(a){var b=this.j[a];if(b){var c=this.l[b];0!=this.o?(this.m.push(a),this.j[a+1]=function(){}):(c&&lb(c,a),delete this.j[a],delete this.j[a+1],delete this.j[a+2])}return!!b};
l.oa=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];wi(this.j[g+1],this.j[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.i();e++)g=c[e],this.j[g+1].apply(this.j[g+2],d)}finally{if(this.o--,0<this.m.length&&0==this.o)for(;c=this.m.pop();)this.Ca(c)}}return 0!=e}return!1};
function wi(a,b,c){vf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.Ca,this),delete this.l[a])}else this.j.length=0,this.l={}};
l.D=function(){K.X.D.call(this);this.clear();this.m.length=0};function xi(a){this.i=a}
xi.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,yg(b))};
xi.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
xi.prototype.remove=function(a){this.i.remove(a)};function yi(a){this.i=a}
Za(yi,xi);function zi(a){this.data=a}
function Ai(a){return void 0===a||a instanceof zi?a:new zi(a)}
yi.prototype.set=function(a,b){yi.X.set.call(this,a,Ai(b))};
yi.prototype.j=function(a){a=yi.X.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
yi.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Bi(a){this.i=a}
Za(Bi,yi);Bi.prototype.set=function(a,b,c){if(b=Ai(b)){if(c){if(c<Date.now()){Bi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Bi.X.set.call(this,a,b)};
Bi.prototype.j=function(a){var b=Bi.X.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Bi.prototype.remove.call(this,a);else return b}};function Ci(){}
;function Di(){}
Za(Di,Ci);Di.prototype[Symbol.iterator]=function(){return ni(this.da(!0)).i()};
Di.prototype.clear=function(){var a=Array.from(this);a=p(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ei(a){this.i=a}
Za(Ei,Di);l=Ei.prototype;l.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeItem(a)};
l.da=function(a){var b=0,c=this.i,d=new ki;d.next=function(){if(b>=c.length)return li;var e=c.key(b++);if(a)return mi(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return mi(e)};
return d};
l.clear=function(){this.i.clear()};
l.key=function(a){return this.i.key(a)};function Fi(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
Za(Fi,Ei);function Gi(a,b){this.j=a;this.i=null;var c;if(c=Kc)c=!(9<=Number(Yc));if(c){Hi||(Hi=new ri);this.i=Hi.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),Hi.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
Za(Gi,Di);var Ii={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Hi=null;function Ji(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ii[b]})}
l=Gi.prototype;l.isAvailable=function(){return!!this.i};
l.set=function(a,b){this.i.setAttribute(Ji(a),b);Ki(this)};
l.get=function(a){a=this.i.getAttribute(Ji(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeAttribute(Ji(a));Ki(this)};
l.da=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new ki;d.next=function(){if(b>=c.length)return li;var e=c[b++];if(a)return mi(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return mi(e)};
return d};
l.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ki(this)};
function Ki(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Li(a,b){this.j=a;this.i=b+"::"}
Za(Li,Di);Li.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Li.prototype.get=function(a){return this.j.get(this.i+a)};
Li.prototype.remove=function(a){this.j.remove(this.i+a)};
Li.prototype.da=function(a){var b=this.j[Symbol.iterator](),c=this,d=new ki;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return mi(a?e.slice(c.i.length):c.j.get(e))};
return d};function Mi(a){I.call(this,a)}
r(Mi,I);function Ni(a){I.call(this,a)}
r(Ni,I);Ni.prototype.getKey=function(){return Pd(this,1)};
Ni.prototype.getValue=function(){return ae(this,2===Ud(this,Oi)?2:-1)};
Ni.prototype.setValue=function(a){return Td(this,2,Oi,a)};
var Oi=[2,3,4,5,6];function Pi(a){I.call(this,a)}
r(Pi,I);function Qi(a){I.call(this,a)}
r(Qi,I);function Ri(a){I.call(this,a,-1,Si)}
r(Ri,I);var Si=[2];function Ti(a){I.call(this,a,-1,Ui)}
r(Ti,I);Ti.prototype.getPlayerType=function(){return Pd(this,36)};
Ti.prototype.setHomeGroupInfo=function(a){return G(this,Ri,81,a)};
Ti.prototype.clearLocationPlayabilityToken=function(){return D(this,89,void 0,!1)};
var Ui=[9,66,24,32,86,100,101];function Vi(a){I.call(this,a,-1,Wi)}
r(Vi,I);var Wi=[15,26,28];function Xi(a){I.call(this,a)}
r(Xi,I);Xi.prototype.setToken=function(a){return D(this,2,a)};function Yi(a){I.call(this,a,-1,Zi)}
r(Yi,I);Yi.prototype.setSafetyMode=function(a){return D(this,5,a)};
var Zi=[12];function $i(a){I.call(this,a,-1,aj)}
r($i,I);$i.prototype.C=function(a){G(this,Ti,1,a)};
var aj=[12];function bj(a){this.name=a}
;var cj=new bj("continuationCommand");var dj=new bj("webCommandMetadata");var ej=new bj("signalServiceEndpoint");var fj=new bj("feedbackEndpoint");function gj(a){I.call(this,a,-1,hj)}
r(gj,I);function ij(a){I.call(this,a)}
r(ij,I);ij.prototype.getKey=function(){return Rd(this,1,"")};
ij.prototype.getValue=function(){return Rd(this,2,"")};
ij.prototype.setValue=function(a){return D(this,2,a)};
var hj=[4,5];function jj(a){I.call(this,a)}
r(jj,I);function kj(a){I.call(this,a)}
r(kj,I);var lj=[2,3,4];function mj(a){I.call(this,a)}
r(mj,I);mj.prototype.getMessage=function(){return Rd(this,1,"")};function nj(a){I.call(this,a)}
r(nj,I);function oj(a){I.call(this,a)}
r(oj,I);function pj(a){I.call(this,a,-1,qj)}
r(pj,I);var qj=[10,17];function rj(a){I.call(this,a)}
r(rj,I);function sj(a){I.call(this,a)}
r(sj,I);function tj(a){I.call(this,a)}
r(tj,I);function uj(a){I.call(this,a)}
r(uj,I);function vj(a){I.call(this,a)}
r(vj,I);function wj(a,b){G(a,tj,1,b)}
vj.prototype.l=function(a){D(this,2,a)};
function xj(a){I.call(this,a)}
r(xj,I);function yj(a,b){G(a,tj,1,b)}
;function zj(a){I.call(this,a,-1,Aj)}
r(zj,I);zj.prototype.l=function(a){D(this,1,a)};
function Bj(a,b){G(a,tj,2,b)}
var Aj=[3];function Cj(a){I.call(this,a)}
r(Cj,I);Cj.prototype.l=function(a){D(this,1,a)};function Dj(a){I.call(this,a)}
r(Dj,I);Dj.prototype.l=function(a){D(this,1,a)};function Ej(a){I.call(this,a)}
r(Ej,I);Ej.prototype.l=function(a){D(this,1,a)};function Fj(a){I.call(this,a)}
r(Fj,I);Fj.prototype.l=function(a){D(this,1,a)};function Gj(a){I.call(this,a)}
r(Gj,I);function Hj(a){I.call(this,a)}
r(Hj,I);function Ij(a){I.call(this,a,-1,Jj)}
r(Ij,I);Ij.prototype.getPlayerType=function(){return Rd(this,7,0)};
Ij.prototype.setVideoId=function(a){return D(this,19,a)};
function Kj(a,b){$d(a,68,Lj,b)}
function Lj(a){I.call(this,a)}
r(Lj,I);Lj.prototype.getId=function(){return Rd(this,2,"")};
var Jj=[83,68];function Mj(a){I.call(this,a)}
r(Mj,I);function Nj(a){I.call(this,a)}
r(Nj,I);function Oj(a){I.call(this,a)}
r(Oj,I);function Pj(a){I.call(this,a,442)}
r(Pj,I);
var Qj=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,351,352,
353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117,439,441];var Rj={gj:0,Ri:1,Xi:2,Yi:4,dj:8,Zi:16,aj:32,fj:64,ej:128,Ti:256,Vi:512,cj:1024,Ui:2048,Wi:4096,Si:8192,bj:16384};function Sj(a){I.call(this,a)}
r(Sj,I);function Tj(a){I.call(this,a)}
r(Tj,I);Tj.prototype.setVideoId=function(a){return Td(this,1,Uj,a)};
Tj.prototype.getPlaylistId=function(){return ae(this,2===Ud(this,Uj)?2:-1)};
var Uj=[1,2];function Vj(a){I.call(this,a,-1,Wj)}
r(Vj,I);var Wj=[3];var Xj=new bj("webPlayerShareEntityServiceEndpoint");var sk=new bj("playlistEditEndpoint");var tk=new bj("modifyChannelNotificationPreferenceEndpoint");var uk=new bj("unsubscribeEndpoint");var vk=new bj("subscribeEndpoint");function wk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var xk=y.window,yk,zk,Ak=(null==xk?void 0:null==(yk=xk.yt)?void 0:yk.config_)||(null==xk?void 0:null==(zk=xk.ytcfg)?void 0:zk.data_)||{};z("yt.config_",Ak);function Bk(){wk(Ak,arguments)}
function L(a,b){return a in Ak?Ak[a]:b}
function Ck(){var a=Ak.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=Dk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Ek(a,b){a=Dk(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Fk(){return L("EXPERIMENTS_TOKEN","")}
function Dk(a){var b=L("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
function Gk(){var a=[],b=L("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=L("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Hk=[];function Ik(a){Hk.forEach(function(b){return b(a)})}
function Jk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Kk(b)}}:a}
function Kk(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=L("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Bk("ERRORS",e));Ik(a)}
function Lk(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=L("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Bk("ERRORS",e))}
;function Mk(){var a=Nk;B("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a)}
function Ok(a){z("yt.ads.biscotti.lastId_",a)}
;var Pk=/^[\w.]*$/,Qk={q:!0,search_query:!0};function Rk(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Sk(f[0]||""),h=Sk(f[1]||"");g in c?Array.isArray(c[g])?mb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(t){var k=t,m=f[0],q=String(Rk);k.args=[{key:m,value:f[1],query:a,method:Tk==q?"unchanged":q}];Qk.hasOwnProperty(m)||Lk(k)}}return c}
var Tk=String(Rk);function Uk(a){var b=[];nb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];fb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Vk(a){"?"==a.charAt(0)&&(a=a.substr(1));return Rk(a,"&")}
function Wk(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Vk(1<a.length?a[1]:a[0])):{}}
function Xk(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Vk(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return vc(a,e)+d}
function Yk(a){if(!b)var b=window.location.href;var c=nc(1,a),d=oc(a);c&&d?(a=a.match(lc),b=b.match(lc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?oc(b)==d&&(Number(nc(4,b))||null)==(Number(nc(4,a))||null):!0;return a}
function Sk(a){return a&&a.match(Pk)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Zk(a){var b=$k;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Rh;e.flash="0";a:{try{var f=b.i.top.location.href}catch(ea){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Dh:g;try{var h=g.history.length}catch(ea){h=0}e.u_his=h;var k;e.u_h=null==(k=Dh.screen)?void 0:k.height;var m;e.u_w=null==(m=Dh.screen)?void 0:m.width;var q;e.u_ah=null==(q=Dh.screen)?void 0:q.availHeight;var t;e.u_aw=
null==(t=Dh.screen)?void 0:t.availWidth;var w;e.u_cd=null==(w=Dh.screen)?void 0:w.colorDepth}catch(ea){}h=b.i;try{var u=h.screenX;var A=h.screenY}catch(ea){}try{var E=h.outerWidth;var F=h.outerHeight}catch(ea){}try{var O=h.innerWidth;var N=h.innerHeight}catch(ea){}try{var R=h.screenLeft;var ca=h.screenTop}catch(ea){}try{O=h.innerWidth,N=h.innerHeight}catch(ea){}try{var W=h.screen.availWidth;var ob=h.screen.availTop}catch(ea){}u=[R,ca,u,A,W,ob,E,F,O,N];try{var Wa=(b.i.top||window).document,la="CSS1Compat"==
Wa.compatMode?Wa.documentElement:Wa.body;var H=(new hf(la.clientWidth,la.clientHeight)).round()}catch(ea){H=new hf(-12245933,-12245933)}Wa=H;H={};var ka=void 0===ka?y:ka;la=new $h;ka.SVGElement&&ka.document.createElementNS&&la.set(0);A=Lh();A["allow-top-navigation-by-user-activation"]&&la.set(1);A["allow-popups-to-escape-sandbox"]&&la.set(2);ka.crypto&&ka.crypto.subtle&&la.set(3);ka.TextDecoder&&ka.TextEncoder&&la.set(4);ka=ai(la);H.bc=ka;H.bih=Wa.height;H.biw=Wa.width;H.brdim=u.join();b=b.j;b=(H.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,H.wgl=!!Dh.WebGLRenderingContext,H);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var $k=new function(){var a=window.document;this.i=window;this.j=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return Uk(Zk(a))});Date.now();var al="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function bl(){if(!al)return null;var a=al();return"open"in a?a:null}
function cl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function dl(a,b){"function"===typeof a&&(a=Jk(a));return window.setTimeout(a,b)}
function el(a){window.clearTimeout(a)}
;var fl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},gl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Sh)),hl=!1;
function il(a,b){b=void 0===b?{}:b;var c=Yk(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in fl){var f=L(fl[e]);"X-Goog-Visitor-Id"!==e||f||(f=L("VISITOR_DATA"));!f||!c&&oc(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!oc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!oc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||
!oc(a))b["X-YouTube-Ad-Signals"]=Uk(Zk());return b}
function jl(a){var b=window.location.search,c=oc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!Yk(a)||(c=document.location.hostname);var d=mc(nc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Vk(b),f={};fb(gl,function(g){e[g]&&(f[g]=e[g])});
return Xk(a,f||{},!1)}
function kl(a,b){var c=b.format||"JSON";a=ll(a,b);var d=ml(a,b),e=!1,f=nl(a,function(k){if(!e){e=!0;h&&el(h);var m=cl(k),q=null,t=400<=k.status&&500>k.status,w=500<=k.status&&600>k.status;if(m||t||w)q=ol(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};t=b.context||y;m?b.onSuccess&&b.onSuccess.call(t,k,q):b.onError&&b.onError.call(t,k,q);b.onFinish&&b.onFinish.call(t,k,q)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=dl(function(){e||(e=!0,f.abort(),el(h),g.call(b.context||y,f))},d)}return f}
function ll(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Xk(a,b||{},!0);return a}
function ml(a,b){var c=L("XSRF_FIELD_NAME"),d=L("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=L("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||oc(a)&&!b.withCredentials&&oc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(M("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Vk(e),yb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):tc(e));f=e||f&&!rb(f);!hl&&f&&"POST"!=b.method&&(hl=!0,Kk(Error("AJAX request with postData should use POST")));return e}
function ol(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Lk(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?pl(a):null)e={},fb(a.getElementsByTagName("*"),function(g){e[g.tagName]=ql(g)})}d&&rl(e);
return e}
function rl(a){if(Qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Db("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=Ab();d=e?e.createHTML(d):d;a[c]=new cc(d)}else rl(a[b])}}
function pl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ql(a){var b="";fb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function nl(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Jk(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=bl();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=jl(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=il(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function sl(a){var b=this;this.j=void 0;this.i=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.j=c});
a.addEventListener("appinstalled",function(){b.i=!0},{once:!0})}
function tl(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function ul(a,b,c,d,e){qg.set(""+a,b,{Ya:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function vl(a,b,c){qg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function wl(){if(!qg.isEnabled())return!1;if(!qg.isEmpty())return!0;qg.set("TESTCOOKIESENABLED","1",{Ya:60});if("1"!==qg.get("TESTCOOKIESENABLED"))return!1;qg.remove("TESTCOOKIESENABLED");return!0}
;var xl=B("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",xl);function yl(){this.i=L("ALT_PREF_COOKIE_NAME","PREF");this.j=L("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=qg.get(""+this.i,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(xl[d]=c.toString())}}}
yl.prototype.get=function(a,b){zl(a);Al(a);a=void 0!==xl[a]?xl[a].toString():null;return null!=a?a:b?b:""};
yl.prototype.set=function(a,b){zl(a);Al(a);if(null==b)throw Error("ExpectedNotNull");xl[a]=b.toString()};
function Bl(a){return!!((Cl("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
yl.prototype.remove=function(a){zl(a);Al(a);delete xl[a]};
yl.prototype.clear=function(){for(var a in xl)delete xl[a]};
function Al(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function zl(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Cl(a){a=void 0!==xl[a]?xl[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Na(yl);var Dl={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},El={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Fl={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Gl={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Hl(){var a=y.navigator;return a?a.connection:void 0}
function Il(){var a=Hl();if(a){var b=Dl[a.type||"unknown"]||"CONN_UNKNOWN";a=Dl[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Jl(){var a=Hl();if(null!=a&&a.effectiveType)return Gl.hasOwnProperty(a.effectiveType)?Gl[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function Kl(){return"INNERTUBE_API_KEY"in Ak&&"INNERTUBE_API_VERSION"in Ak}
function Ll(){return{innertubeApiKey:L("INNERTUBE_API_KEY"),innertubeApiVersion:L("INNERTUBE_API_VERSION"),qb:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Vb:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Mc:L("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION"),Xb:L("INNERTUBE_CONTEXT_HL"),Wb:L("INNERTUBE_CONTEXT_GL"),Nc:L("INNERTUBE_HOST_OVERRIDE")||"",Pc:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Oc:!!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:L("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Ml(a){var b={client:{hl:a.Xb,gl:a.Wb,clientName:a.Vb,clientVersion:a.innertubeContextClientVersion,configInfo:a.qb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Fk();""!==c&&(b.client.experimentsToken=c);c=Gk();0<c.length&&(b.request={internalExperimentFlags:c});Nl(a,void 0,b);Ol(void 0,b);Pl(a,void 0,b);Ql(void 0,b);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});
a=Object;c=a.assign;for(var d=b.client,e={},f=p(Object.entries(Vk(L("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=p(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Rl(a){var b=new $i,c=new Ti;D(c,1,a.Xb);D(c,2,a.Wb);D(c,16,a.Mc);D(c,17,a.innertubeContextClientVersion);if(a.qb){var d=a.qb,e=new Pi;d.coldConfigData&&D(e,1,d.coldConfigData);d.appInstallData&&D(e,6,d.appInstallData);d.coldHashData&&D(e,3,d.coldHashData);d.hotHashData&&D(e,5,d.hotHashData);G(c,Pi,62,e)}(d=y.devicePixelRatio)&&1!=d&&D(c,65,d);d=Fk();""!==d&&D(c,54,d);d=Gk();if(0<d.length){e=new Vi;for(var f=0;f<d.length;f++){var g=new Ni;D(g,1,d[f].key);g.setValue(d[f].value);$d(e,15,Ni,
g)}G(b,Vi,5,e)}Nl(a,c);Ol(c);Pl(a,c);Ql(c);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new Yi,D(a,3,L("DELEGATED_SESSION_ID")));a=p(Object.entries(Vk(L("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=p(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?D(c,12,e):"cmodel"===d?D(c,13,e):"cbr"===d?D(c,87,e):"cbrver"===d?D(c,88,e):"cos"===d?D(c,18,e):"cosver"===d?D(c,19,e):"cplatform"===d&&D(c,42,e);b.C(c);return b}
function Nl(a,b,c){a=a.Vb;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Vd(b,Qi,96)||new Qi;var d=tl();d=Object.keys(Zh).indexOf(d);d=-1===d?null:d;null!==d&&D(c,3,d);G(b,Qi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=tl())}
function Ol(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?D(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Pl(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Vd(b,Pi,62))?d:new Pi;D(c,6,a.appInstallData);G(b,Pi,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Ql(a,b){var c=Il();c&&(a?D(a,61,El[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=Jl())&&(a?D(a,94,Fl[c]):b&&(b.client.effectiveConnectionType=c))}
function Sl(a,b,c){c=void 0===c?{}:c;var d={};L("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":L("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Lq||L("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().Kq:b=ug([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
;function Tl(a){a=Object.assign({},a);delete a.Authorization;var b=ug();if(b){var c=new ei;c.update(L("INNERTUBE_API_KEY"));c.update(b);a.hash=dd(c.digest(),3)}return a}
;function Ul(a){var b=new Fi;(b=b.isAvailable()?a?new Li(b,a):b:null)||(a=new Gi(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new Bi(a):null;this.j=document.domain||window.location.hostname}
Ul.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(yg(b))}catch(f){return}else e=escape(b);ul(a,e,c,this.j)};
Ul.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=qg.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ul.prototype.remove=function(a){this.i&&this.i.remove(a);vl(a,"/",this.j)};var Vl=window,P=Vl.ytcsi&&Vl.ytcsi.now?Vl.ytcsi.now:Vl.performance&&Vl.performance.timing&&Vl.performance.now&&Vl.performance.timing.navigationStart?function(){return Vl.performance.timing.navigationStart+Vl.performance.now()}:function(){return(new Date).getTime()};var Wl;function Xl(){Wl||(Wl=new Ul("yt.innertube"));return Wl}
function Yl(a,b,c,d){if(d)return null;d=Xl().get("nextId",!0)||1;var e=Xl().get("requests",!0)||{};e[d]={method:a,request:b,authState:Tl(c),requestTime:Math.round(P())};Xl().set("nextId",d+1,86400,!0);Xl().set("requests",e,86400,!0);return d}
function Zl(a){var b=Xl().get("requests",!0)||{};delete b[a];Xl().set("requests",b,86400,!0)}
function $l(a){var b=Xl().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Tl(Sl(!1));ub(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),am(a,d.method,e,{}));delete b[c]}}Xl().set("requests",b,86400,!0)}}
;function bm(){}
bm.prototype.S=function(a,b){return cm(a,1,b)};
function dm(a,b){cm(a,2,b)}
function em(a){var b=B("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function fm(){bm.apply(this,arguments)}
r(fm,bm);function gm(){fm.i||(fm.i=new fm);return fm.i}
function cm(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):dl(a,c||0)}
fm.prototype.ea=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):el(a)}};
fm.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
fm.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};var Xh=gm();var hm=Zc||$c;function im(a){var b=Tb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var jm=function(){var a;return function(){a||(a=new Ul("ytidb"));return a}}();
function km(){var a;return null==(a=jm())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var lm=[],mm,nm=!1;function om(){var a={};for(mm=new pm(void 0===a.handleError?qm:a.handleError,void 0===a.logEvent?rm:a.logEvent);0<lm.length;)switch(a=lm.shift(),a.type){case "ERROR":mm.handleError(a.payload);break;case "EVENT":mm.logEvent(a.eventType,a.payload)}}
function sm(a){nm||(mm?mm.handleError(a):(lm.push({type:"ERROR",payload:a}),10<lm.length&&lm.shift()))}
function tm(a,b){nm||(mm?mm.logEvent(a,b):(lm.push({type:"EVENT",eventType:a,payload:b}),10<lm.length&&lm.shift()))}
;function Q(a){var b=Ja.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
r(Q,Error);function um(){try{return vm(),!0}catch(a){return!1}}
function vm(a){if(void 0!==L("DATASYNC_ID"))return L("DATASYNC_ID");throw new Q("Datasync ID not set",void 0===a?"unknown":a);}
;function wm(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function xm(a){return a.substr(0,a.indexOf(":"))||a}
;var ym={},zm=(ym.AUTH_INVALID="No user identifier specified.",ym.EXPLICIT_ABORT="Transaction was explicitly aborted.",ym.IDB_NOT_SUPPORTED="IndexedDB is not supported.",ym.MISSING_INDEX="Index not created.",ym.MISSING_OBJECT_STORES="Object stores not created.",ym.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",ym.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",ym.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
ym.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",ym.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",ym.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",ym.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",ym),Am={},Bm=(Am.AUTH_INVALID="ERROR",Am.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Am.EXPLICIT_ABORT="IGNORED",Am.IDB_NOT_SUPPORTED="ERROR",Am.MISSING_INDEX=
"WARNING",Am.MISSING_OBJECT_STORES="ERROR",Am.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Am.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Am.QUOTA_EXCEEDED="WARNING",Am.QUOTA_MAYBE_EXCEEDED="WARNING",Am.UNKNOWN_ABORT="WARNING",Am.INCOMPATIBLE_DB_VERSION="WARNING",Am),Cm={},Dm=(Cm.AUTH_INVALID=!1,Cm.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Cm.EXPLICIT_ABORT=!1,Cm.IDB_NOT_SUPPORTED=!1,Cm.MISSING_INDEX=!1,Cm.MISSING_OBJECT_STORES=!1,Cm.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Cm.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Cm.QUOTA_EXCEEDED=!1,Cm.QUOTA_MAYBE_EXCEEDED=!0,Cm.UNKNOWN_ABORT=!0,Cm.INCOMPATIBLE_DB_VERSION=!1,Cm);function Em(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?zm[a]:c;d=void 0===d?Bm[a]:d;e=void 0===e?Dm[a]:e;Q.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,Em.prototype)}
r(Em,Q);function Fm(a,b){Em.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},zm.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Fm.prototype)}
r(Fm,Em);function Gm(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Gm.prototype)}
r(Gm,Error);var Hm=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Im(a,b,c,d){b=xm(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Em)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Em("QUOTA_EXCEEDED",a);if(ad&&"UnknownError"===e.name)return new Em("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Gm)return new Em("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Hm.some(function(f){return e.message.includes(f)}))return new Em("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Em("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",cc:e.name})];e.level="WARNING";return e}
function Jm(a,b,c){var d=km();return new Em("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Km(a){if(!a)throw Error();throw a;}
function Lm(a){return a}
function Mm(a){this.i=a}
function Nm(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=p(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=p(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
Nm.all=function(a){return new Nm(new Mm(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={wa:0};f.wa<a.length;f={wa:f.wa},++f.wa)Nm.resolve(a[f.wa]).then(function(g){return function(h){d[g.wa]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Nm.resolve=function(a){return new Nm(new Mm(function(b,c){a instanceof Nm?a.then(b,c):b(a)}))};
Nm.reject=function(a){return new Nm(new Mm(function(b,c){c(a)}))};
Nm.prototype.then=function(a,b){var c=this,d=null!=a?a:Lm,e=null!=b?b:Km;return new Nm(new Mm(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){Om(c,c,d,f,g)}),c.onRejected.push(function(){Pm(c,c,e,f,g)})):"FULFILLED"===c.state.status?Om(c,c,d,f,g):"REJECTED"===c.state.status&&Pm(c,c,e,f,g)}))};
Nm.prototype.catch=function(a){return this.then(void 0,a)};
function Om(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Nm?Qm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Pm(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Nm?Qm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Qm(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Nm?Qm(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Rm(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Sm(a){return new Promise(function(b,c){Rm(a,b,c)})}
function Tm(a){return new Nm(new Mm(function(b,c){Rm(a,b,c)}))}
;function Um(a,b){return new Nm(new Mm(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Vm(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(P());this.j=!1}
l=Vm.prototype;l.add=function(a,b,c){return Wm(this,[a],{mode:"readwrite",U:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Wm(this,[a],{mode:"readwrite",U:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Wm(this,[a],{mode:"readonly",U:!0},function(c){return c.objectStore(a).count(b)})};
function Xm(a,b,c){a=a.i.createObjectStore(b,c);return new Ym(a)}
l.delete=function(a,b){return Wm(this,[a],{mode:"readwrite",U:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Wm(this,[a],{mode:"readonly",U:!0},function(c){return c.objectStore(a).get(b)})};
function Zm(a,b){return Wm(a,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(c){c=c.objectStore("LogsRequestsStore");return Tm(c.i.put(b,void 0))})}
l.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function Wm(a,b,c,d){var e,f,g,h,k,m,q,t,w,u,A,E;return x(function(F){switch(F.i){case 1:var O={mode:"readonly",U:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?O.mode=c:Object.assign(O,c);e=O;a.transactionCount++;f=e.U?3:1;g=0;case 2:if(h){F.u(3);break}g++;k=Math.round(P());ya(F,4);m=a.i.transaction(b,e.mode);O=new $m(m);O=an(O,d);return v(F,O,6);case 6:return q=F.j,t=Math.round(P()),bn(a,k,t,g,void 0,b.join(),e),F.return(q);case 4:w=Aa(F);u=Math.round(P());A=Im(w,a.i.name,b.join(),a.i.version);
if((E=A instanceof Em&&!A.i)||g>=f)bn(a,k,u,g,A,b.join(),e),h=A;F.u(2);break;case 3:return F.return(Promise.reject(h))}})}
function bn(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Em&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&tm("QUOTA_EXCEEDED",{dbName:xm(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Em&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),tm("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),cn(a,!1,d,f,b,g.tag),sm(e)):cn(a,!0,d,f,b,g.tag)}
function cn(a,b,c,d,e,f){tm("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.i.name};
function Ym(a){this.i=a}
l=Ym.prototype;l.add=function(a,b){return Tm(this.i.add(a,b))};
l.autoIncrement=function(){return this.i.autoIncrement};
l.clear=function(){return Tm(this.i.clear()).then(function(){})};
l.count=function(a){return Tm(this.i.count(a))};
function dn(a,b){return en(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?dn(this,a):Tm(this.i.delete(a))};
l.get=function(a){return Tm(this.i.get(a))};
l.index=function(a){try{return new fn(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Gm(a,this.i.name);throw b;}};
l.getName=function(){return this.i.name};
l.keyPath=function(){return this.i.keyPath};
function en(a,b,c){a=a.i.openCursor(b.query,b.direction);return gn(a).then(function(d){return Um(d,c)})}
function $m(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=Em;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function an(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return p(d).next().value})}
$m.prototype.abort=function(){this.i.abort();this.j=!0;throw new Em("EXPLICIT_ABORT");};
$m.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new Ym(a),this.l.set(a,b));return b};
function fn(a){this.i=a}
l=fn.prototype;l.count=function(a){return Tm(this.i.count(a))};
l.delete=function(a){return hn(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return Tm(this.i.get(a))};
l.getKey=function(a){return Tm(this.i.getKey(a))};
l.keyPath=function(){return this.i.keyPath};
l.unique=function(){return this.i.unique};
function hn(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return gn(a).then(function(d){return Um(d,c)})}
function jn(a,b){this.request=a;this.cursor=b}
function gn(a){return Tm(a).then(function(b){return b?new jn(a,b):null})}
l=jn.prototype;l.advance=function(a){this.cursor.advance(a);return gn(this.request)};
l.continue=function(a){this.cursor.continue(a);return gn(this.request)};
l.delete=function(){return Tm(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return Tm(this.cursor.update(a))};function kn(a,b,c){return new Promise(function(d,e){function f(){w||(w=new Vm(g.result,{closed:t}));return w}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,m=c.qd,q=c.upgrade,t=c.closed,w;g.addEventListener("upgradeneeded",function(u){try{if(null===u.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");u.dataLoss&&"none"!==u.dataLoss&&tm("IDB_DATA_CORRUPTED",{reason:u.dataLossMessage||"unknown reason",dbName:xm(a)});var A=f(),E=new $m(g.transaction);
q&&q(A,function(F){return u.oldVersion<F&&u.newVersion>=F},E);
E.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var u=g.result;k&&u.addEventListener("versionchange",function(){k(f())});
u.addEventListener("close",function(){tm("IDB_UNEXPECTEDLY_CLOSED",{dbName:xm(a),dbVersion:u.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function ln(a,b,c){c=void 0===c?{}:c;return kn(a,b,c)}
function mn(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.i)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),v(g,Sm(c),4);
if(2!=g.i)return za(g,0);f=Aa(g);throw Im(f,a,"",-1);})}
;function nn(a){return new Promise(function(b){dm(function(){b()},a)})}
function on(a,b){this.name=a;this.options=b;this.m=!0;this.s=this.o=0;this.j=500}
on.prototype.l=function(a,b,c){c=void 0===c?{}:c;return ln(a,b,c)};
on.prototype.delete=function(a){a=void 0===a?{}:a;return mn(this.name,a)};
function pn(a,b){return new Em("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function qn(a,b){if(!b)throw Jm("openWithToken",xm(a.name));return rn(a)}
function rn(a){function b(){var f,g,h,k,m,q,t,w,u,A;return x(function(E){switch(E.i){case 1:return g=null!=(f=Error().stack)?f:"",ya(E,2),v(E,a.l(a.name,a.options.version,d),4);case 4:h=E.j;for(var F=a.options,O=[],N=p(Object.keys(F.Ga)),R=N.next();!R.done;R=N.next()){R=R.value;var ca=F.Ga[R],W=void 0===ca.Yc?Number.MAX_VALUE:ca.Yc;!(h.i.version>=ca.hb)||h.i.version>=W||h.i.objectStoreNames.contains(R)||O.push(R)}k=O;if(0===k.length){E.u(5);break}m=Object.keys(a.options.Ga);q=h.objectStoreNames();
if(a.s<Ek("ytidb_reopen_db_retries",0))return a.s++,h.close(),sm(new Em("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),E.return(b());if(!(a.o<Ek("ytidb_remake_db_retries",1))){E.u(6);break}a.o++;if(!M("ytidb_remake_db_enable_backoff_delay")){E.u(7);break}return v(E,nn(a.j),8);case 8:a.j*=2;case 7:return v(E,a.delete(),9);case 9:return sm(new Em("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),E.return(b());
case 6:throw new Fm(q,m);case 5:return E.return(h);case 2:t=Aa(E);if(t instanceof DOMException?"VersionError"!==t.name:"DOMError"in self&&t instanceof DOMError?"VersionError"!==t.name:!(t instanceof Object&&"message"in t)||"An attempt was made to open a database using a lower version than the existing version."!==t.message){E.u(10);break}return v(E,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:w=E.j;u=w.i.version;if(void 0!==a.options.version&&u>a.options.version+1)throw w.close(),
a.m=!1,pn(a,u);return E.return(w);case 10:throw c(),t instanceof Error&&!M("ytidb_async_stack_killswitch")&&(t.stack=t.stack+"\n"+g.substring(g.indexOf("\n")+1)),Im(t,a.name,"",null!=(A=a.options.version)?A:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.m)throw pn(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,qd:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var sn=new on("YtIdbMeta",{Ga:{databases:{hb:1}},upgrade:function(a,b){b(1)&&Xm(a,"databases",{keyPath:"actualName"})}});
function tn(a,b){var c;return x(function(d){if(1==d.i)return v(d,qn(sn,b),2);c=d.j;return d.return(Wm(c,["databases"],{U:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Tm(f.i.put(a,void 0)).then(function(){})})}))})}
function un(a,b){var c;return x(function(d){if(1==d.i)return a?v(d,qn(sn,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function vn(a,b){var c,d;return x(function(e){return 1==e.i?(c=[],v(e,qn(sn,b),2)):3!=e.i?(d=e.j,v(e,Wm(d,["databases"],{U:!0,mode:"readonly"},function(f){c.length=0;return en(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function wn(a){return vn(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function xn(a,b,c){return vn(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function yn(a){var b,c;return x(function(d){if(1==d.i)return b=vm("YtIdbMeta hasAnyMeta other"),v(d,vn(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.j;return d.return(0<c.length)})}
;var zn,An=new function(){}(new function(){});
function Bn(){var a,b,c,d;return x(function(e){switch(e.i){case 1:a=km();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=hm)f=/WebKit\/([0-9]+)/.exec(Tb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Tb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Lc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return v(e,tn(d,An),4);case 4:return v(e,un("yt-idb-test-do-not-use",An),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function Cn(){if(void 0!==zn)return zn;nm=!0;return zn=Bn().then(function(a){nm=!1;var b;if(null!=(b=jm())&&b.i){var c;b={hasSucceededOnce:(null==(c=km())?void 0:c.hasSucceededOnce)||a};var d;null==(d=jm())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Dn(){return B("ytglobal.idbToken_")||void 0}
function En(){var a=Dn();return a?Promise.resolve(a):Cn().then(function(b){(b=b?An:void 0)&&z("ytglobal.idbToken_",b);return b})}
;var Fn=0;function Gn(a,b){Fn||(Fn=Xh.S(function(){var c,d,e,f,g;return x(function(h){switch(h.i){case 1:return v(h,En(),2);case 2:c=h.j;if(!c)return h.return();d=!0;ya(h,3);return v(h,xn(a,c,b),5);case 5:e=h.j;if(!e.length){d=!1;h.u(6);break}f=e[0];return v(h,mn(f.actualName),7);case 7:return v(h,un(f.actualName,c),6);case 6:za(h,4);break;case 3:g=Aa(h),sm(g),d=!1;case 4:Xh.ea(Fn),Fn=0,d&&Gn(a,b),h.i=0}})}))}
function Hn(){var a;return x(function(b){return 1==b.i?v(b,En(),2):(a=b.j)?b.return(yn(a)):b.return(!1)})}
new Bh;function In(a){if(!um())throw a=new Em("AUTH_INVALID",{dbName:a}),sm(a),a;var b=vm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Jn(a,b,c,d){var e,f,g,h,k,m;return x(function(q){switch(q.i){case 1:return f=null!=(e=Error().stack)?e:"",v(q,En(),2);case 2:g=q.j;if(!g)throw h=Jm("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),sm(h),h;wm(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:In(a);ya(q,3);return v(q,tn(k,g),5);case 5:return v(q,ln(k.actualName,b,d),6);case 6:return q.return(q.j);case 3:return m=Aa(q),ya(q,7),v(q,un(k.actualName,g),9);case 9:za(q,
8);break;case 7:Aa(q);case 8:throw m;}})}
function Kn(a,b,c){c=void 0===c?{}:c;return Jn(a,b,!1,c)}
function Ln(a,b,c){c=void 0===c?{}:c;return Jn(a,b,!0,c)}
function Mn(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.i)return v(e,En(),2);if(3!=e.i){c=e.j;if(!c)return e.return();wm(a);d=In(a);return v(e,mn(d.actualName,b),3)}return v(e,un(d.actualName,c),0)})}
function Nn(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.i?v(e,mn(d.actualName,b),2):v(e,un(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function On(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.i)return v(d,En(),2);if(3!=d.i){b=d.j;if(!b)return d.return();wm("LogsDatabaseV2");return v(d,wn(b),3)}c=d.j;return v(d,Nn(c,a,b),0)})}
function Pn(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.i)return v(d,En(),2);if(3!=d.i){c=d.j;if(!c)return d.return();wm(a);return v(d,mn(a,b),3)}return v(d,un(a,c),0)})}
;function Qn(a){this.Qa=this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.za=function(){};
this.now=Date.now;this.Fa=!1;var b;this.mc=null!=(b=a.mc)?b:100;var c;this.ic=null!=(c=a.ic)?c:1;var d;this.fc=null!=(d=a.fc)?d:2592E6;var e;this.dc=null!=(e=a.dc)?e:12E4;var f;this.hc=null!=(f=a.hc)?f:5E3;var g;this.H=null!=(g=a.H)?g:void 0;this.Va=!!a.Va;var h;this.Ta=null!=(h=a.Ta)?h:.1;var k;this.ab=null!=(k=a.ab)?k:10;a.handleError&&(this.handleError=a.handleError);a.za&&(this.za=a.za);a.Fa&&(this.Fa=a.Fa);a.Qa&&(this.Qa=a.Qa);this.J=a.J;this.Y=a.Y;this.O=a.O;this.N=a.N;this.ia=a.ia;this.wb=
a.wb;this.vb=a.vb;Rn(this)&&(!this.J||this.J("networkless_logging"))&&Sn(this)}
function Sn(a){Rn(a)&&!a.Fa&&(a.i=!0,a.Va&&Math.random()<=a.Ta&&a.O.Bc(a.H),Tn(a),a.N.M()&&a.Ka(),a.N.Z(a.wb,a.Ka.bind(a)),a.N.Z(a.vb,a.Kb.bind(a)))}
l=Qn.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Rn(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.O.set(d,this.H).then(function(e){d.id=e;c.N.M()&&Un(c,d)}).catch(function(e){Un(c,d);
Vn(c,e)})}else this.ia(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Rn(this)&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J&&this.J("nwl_skip_retry")&&(e.skipRetry=c);if(this.N.M()||this.J&&this.J("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.i)return v(k,d.O.set(e,d.H).catch(function(m){Vn(d,m)}),2);
f(g,h);k.i=0})}}this.ia(a,b,e.skipRetry)}else this.O.set(e,this.H).catch(function(g){d.ia(a,b,e.skipRetry);
Vn(d,g)})}else this.ia(a,b,this.J&&this.J("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Rn(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.O.ya(d.id,c.H):e=!0;c.N.ha&&c.J&&c.J("vss_network_hint")&&c.N.ha(!0);f(g,h)};
this.ia(d.url,d.options);this.O.set(d,this.H).then(function(g){d.id=g;e&&c.O.ya(d.id,c.H)}).catch(function(g){Vn(c,g)})}else this.ia(a,b)};
l.Ka=function(){var a=this;if(!Rn(this))throw Jm("throttleSend");this.j||(this.j=this.Y.S(function(){var b;return x(function(c){if(1==c.i)return v(c,a.O.Ub("NEW",a.H),2);if(3!=c.i)return b=c.j,b?v(c,Un(a,b),3):(a.Kb(),c.return());a.j&&(a.j=0,a.Ka());c.i=0})},this.mc))};
l.Kb=function(){this.Y.ea(this.j);this.j=0};
function Un(a,b){var c,d;return x(function(e){switch(e.i){case 1:if(!Rn(a))throw c=Jm("immediateSend"),c;if(void 0===b.id){e.u(2);break}return v(e,a.O.Rc(b.id,a.H),3);case 3:(d=e.j)?b=d:a.za(Error("The request cannot be found in the database."));case 2:if(Wn(a,b,a.fc)){e.u(4);break}a.za(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.u(5);break}return v(e,a.O.ya(b.id,a.H),5);case 5:return e.return();case 4:b.skipRetry||(b=Xn(a,b));if(!b){e.u(0);break}if(!b.skipRetry||
void 0===b.id){e.u(8);break}return v(e,a.O.ya(b.id,a.H),8);case 8:a.ia(b.url,b.options,!!b.skipRetry),e.i=0}})}
function Xn(a,b){if(!Rn(a))throw Jm("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return x(function(m){switch(m.i){case 1:g=Yn(f);if(!(a.J&&a.J("nwl_consider_error_code")&&g||a.J&&!a.J("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.ab)){m.u(2);break}if(!a.N.Ia){m.u(3);break}return v(m,a.N.Ia(),3);case 3:if(a.N.M()){m.u(2);break}c(e,f);if(!a.J||!a.J("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.u(6);break}return v(m,a.O.zb(b.id,a.H,!1),6);case 6:return m.return();case 2:if(a.J&&a.J("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.ab)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.u(8);break}return b.sendCount<a.ic?v(m,a.O.zb(b.id,a.H),12):v(m,a.O.ya(b.id,a.H),8);case 12:a.Y.S(function(){a.N.M()&&a.Ka()},a.hc);
case 8:c(e,f),m.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.u(2):v(h,a.O.ya(b.id,a.H),2);a.N.ha&&a.J&&a.J("vss_network_hint")&&a.N.ha(!0);d(e,f);h.i=0})};
return b}
function Wn(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Tn(a){if(!Rn(a))throw Jm("retryQueuedRequests");a.O.Ub("QUEUED",a.H).then(function(b){b&&!Wn(a,b,a.dc)?a.Y.S(function(){return x(function(c){if(1==c.i)return void 0===b.id?c.u(2):v(c,a.O.zb(b.id,a.H),2);Tn(a);c.i=0})}):a.N.M()&&a.Ka()})}
function Vn(a,b){a.qc&&!a.N.M()?a.qc(b):a.handleError(b)}
function Rn(a){return!!a.H||a.Qa}
function Yn(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function Zn(a,b){this.version=a;this.args=b}
;function $n(a,b){this.topic=a;this.i=b}
$n.prototype.toString=function(){return this.topic};var ao=B("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Ca;K.prototype.publish=K.prototype.oa;K.prototype.clear=K.prototype.clear;z("ytPubsub2Pubsub2Instance",ao);var bo=B("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",bo);var co=B("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",co);var eo=B("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",eo);
z("ytPubsub2Pubsub2SkipSubKey",null);function fo(a,b){var c=go();c&&c.publish.call(c,a.toString(),a,b)}
function ho(a){var b=io,c=go();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(bo[d])try{if(f&&b instanceof $n&&b!=e)try{var h=b.i,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.na){var m=new h;h.na=m.version}var q=h.na}catch(F){}if(!q||k.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{q=Reflect;var t=q.construct;
var w=k.args,u=w.length;if(0<u){var A=Array(u);for(k=0;k<u;k++)A[k]=w[k];var E=A}else E=[];f=t.call(q,h,E)}catch(F){throw F.message="yt.pubsub2.Data.deserialize(): "+F.message,F;}}catch(F){throw F.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+F.message,F;}a.call(window,f)}catch(F){Kk(F)}},eo[b.toString()]?B("yt.scheduler.instance")?Xh.S(g):dl(g,0):g())});
bo[d]=!0;co[b.toString()]||(co[b.toString()]=[]);co[b.toString()].push(d);return d}
function jo(){var a=ko,b=ho(function(c){a.apply(void 0,arguments);lo(b)});
return b}
function lo(a){var b=go();b&&("number"===typeof a&&(a=[a]),fb(a,function(c){b.unsubscribeByKey(c);delete bo[c]}))}
function go(){return B("ytPubsub2Pubsub2Instance")}
;function mo(a,b){on.call(this,a,b);this.options=b;wm(a)}
r(mo,on);function no(a,b){var c;return function(){c||(c=new mo(a,b));return c}}
mo.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.Bb?Ln:Kn)(a,b,Object.assign({},c))};
mo.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Bb?Pn:Mn)(this.name,a)};
function oo(a,b){return no(a,b)}
;var po;
function qo(){if(po)return po();var a={};po=oo("LogsDatabaseV2",{Ga:(a.LogsRequestsStore={hb:2},a),Bb:!1,upgrade:function(b,c,d){c(2)&&Xm(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return po()}
;function ro(a){return qn(qo(),a)}
function so(a,b){var c,d,e,f;return x(function(g){if(1==g.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},v(g,ro(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:L("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),v(g,Zm(d,e),3);f=g.j;c.sd=P();to(c);return g.return(f)})}
function uo(a,b){var c,d,e,f,g,h,k;return x(function(m){if(1==m.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},v(m,ro(b),2);if(3!=m.i)return d=m.j,e=L("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,P()],h=IDBKeyRange.bound(f,g),k=void 0,v(m,Wm(d,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(q){return hn(q.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(t){t.getValue()&&(k=t.getValue(),"NEW"===a&&(k.status="QUEUED",
t.update(k)))})}),3);
c.sd=P();to(c);return m.return(k)})}
function vo(a,b){var c;return x(function(d){if(1==d.i)return v(d,ro(b),2);c=d.j;return d.return(Wm(c,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Tm(f.i.put(g,void 0)).then(function(){return g})})}))})}
function wo(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.i)return v(e,ro(b),2);d=e.j;return e.return(Wm(d,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Tm(g.i.put(h,void 0)).then(function(){return h})):Nm.resolve(void 0)})}))})}
function xo(a,b){var c;return x(function(d){if(1==d.i)return v(d,ro(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function yo(a){var b,c;return x(function(d){if(1==d.i)return v(d,ro(a),2);b=d.j;c=P()-2592E6;return v(d,Wm(b,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(e){return en(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function zo(){return x(function(a){return v(a,On(),0)})}
function to(a){M("nwl_csi_killswitch")||.01>=Math.random()&&fo("nwl_transaction_latency_payload",a)}
;var Ao={},Bo=oo("ServiceWorkerLogsDatabase",{Ga:(Ao.SWHealthLog={hb:1},Ao),Bb:!0,upgrade:function(a,b){b(1)&&Xm(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Co(a){return qn(Bo(),a)}
function Do(a){var b,c;return x(function(d){if(1==d.i)return v(d,Co(a),2);b=d.j;c=P()-2592E6;return v(d,Wm(b,["SWHealthLog"],{mode:"readwrite",U:!0},function(e){return en(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Eo(a){var b;return x(function(c){if(1==c.i)return v(c,Co(a),2);b=c.j;return v(c,b.clear("SWHealthLog"),0)})}
;var Fo={},Go=0;
function Ho(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)nl(a,void 0,"POST",b);else if(L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))nl(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new bb({url:a});if(d.l&&d.j||d.m){var e=mc(nc(5,a)),f;if(!(f=!e||!e.endsWith("/aclk"))){var g=a.search(yc),h=xc(a,0,"ri",g);if(0>h)var k=null;else{var m=a.indexOf("&",h);if(0>m||m>g)m=g;k=decodeURIComponent(a.slice(h+3,-1!==m?m:0).replace(/\+/g," "))}f="1"!==k}var q=!f;break b}}catch(w){}q=!1}if(q){b:{try{if(window.navigator&&
window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var t=!0;break b}}catch(w){}t=!1}b=t?!0:!1}else b=!1;b||Io(a)}}
function Io(a){var b=new Image,c=""+Go++;Fo[c]=b;b.onload=b.onerror=function(){delete Fo[c]};
b.src=a}
;function Jo(){this.i=new Map;this.j=!1}
function Ko(){if(!Jo.i){var a=B("yt.networkRequestMonitor.instance")||new Jo;z("yt.networkRequestMonitor.instance",a);Jo.i=a}return Jo.i}
Jo.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
Jo.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
Jo.prototype.removeParams=function(a){return a.split("?")[0]};
Jo.prototype.removeParams=Jo.prototype.removeParams;Jo.prototype.isEndpointCFR=Jo.prototype.isEndpointCFR;Jo.prototype.requestComplete=Jo.prototype.requestComplete;Jo.getInstance=Ko;var Lo;function Mo(){Lo||(Lo=new Ul("yt.offline"));return Lo}
function No(a){if(M("offline_error_handling")){var b=Mo().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Mo().set("errors",b,2592E3,!0)}}
;function Oo(){af.call(this);var a=this;this.l=!1;this.j=Wh();this.j.Z("networkstatus-online",function(){if(a.l&&M("offline_error_handling")){var b=Mo().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Q(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Kk(d)}Mo().set("errors",{},2592E3,!0)}}})}
r(Oo,af);function Po(){if(!Oo.i){var a=B("yt.networkStatusManager.instance")||new Oo;z("yt.networkStatusManager.instance",a);Oo.i=a}return Oo.i}
l=Oo.prototype;l.M=function(){return this.j.M()};
l.ha=function(a){this.j.j=a};
l.Lc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Fc=function(){this.l=!0};
l.Z=function(a,b){return this.j.Z(a,b)};
l.Ia=function(a){a=Uh(this.j,a);a.then(function(b){M("use_cfr_monitor")&&Ko().requestComplete("generate_204",b)});
return a};
Oo.prototype.sendNetworkCheckRequest=Oo.prototype.Ia;Oo.prototype.listen=Oo.prototype.Z;Oo.prototype.enableErrorFlushing=Oo.prototype.Fc;Oo.prototype.getWindowStatus=Oo.prototype.Lc;Oo.prototype.networkStatusHint=Oo.prototype.ha;Oo.prototype.isNetworkAvailable=Oo.prototype.M;Oo.getInstance=Po;function Qo(a){a=void 0===a?{}:a;af.call(this);var b=this;this.j=this.s=0;this.l=Po();var c=B("yt.networkStatusManager.instance.listen").bind(this.l);c&&(a.cb?(this.cb=a.cb,c("networkstatus-online",function(){Ro(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ro(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){bf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){bf(b,"publicytnetworkstatus-offline")})))}
r(Qo,af);Qo.prototype.M=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.l)():!0};
Qo.prototype.ha=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.l);b&&b(a)};
Qo.prototype.Ia=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.l);return M("skip_network_check_if_cfr")&&Ko().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ha((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.M())})):c?d.return(c(a)):d.return(!0)})};
function Ro(a,b){a.cb?a.j?(Xh.ea(a.s),a.s=Xh.S(function(){a.o!==b&&(bf(a,b),a.o=b,a.j=P())},a.cb-(P()-a.j))):(bf(a,b),a.o=b,a.j=P()):bf(a,b)}
;var So;function To(){Qn.call(this,{O:{Bc:yo,ya:xo,Ub:uo,Rc:vo,zb:wo,set:so},N:Uo(),handleError:Kk,za:Lk,ia:Vo,now:P,qc:No,Y:gm(),wb:"publicytnetworkstatus-online",vb:"publicytnetworkstatus-offline",Va:!0,Ta:.1,ab:Ek("potential_esf_error_limit",10),J:M,Fa:!(um()&&Wo())});this.l=new Bh;M("networkless_immediately_drop_all_requests")&&zo();Pn("LogsDatabaseV2")}
r(To,Qn);function Xo(){var a=B("yt.networklessRequestController.instance");a||(a=new To,z("yt.networklessRequestController.instance",a),M("networkless_logging")&&En().then(function(b){a.H=b;Sn(a);a.l.resolve();a.Va&&Math.random()<=a.Ta&&a.H&&Do(a.H);M("networkless_immediately_drop_sw_health_store")&&Yo(a)}));
return a}
To.prototype.writeThenSend=function(a,b){b||(b={});um()||(this.i=!1);Qn.prototype.writeThenSend.call(this,a,b)};
To.prototype.sendThenWrite=function(a,b,c){b||(b={});um()||(this.i=!1);Qn.prototype.sendThenWrite.call(this,a,b,c)};
To.prototype.sendAndWrite=function(a,b){b||(b={});um()||(this.i=!1);Qn.prototype.sendAndWrite.call(this,a,b)};
To.prototype.awaitInitialization=function(){return this.l.promise};
function Yo(a){var b;x(function(c){if(!a.H)throw b=Jm("clearSWHealthLogsDb"),b;return c.return(Eo(a.H).catch(function(d){a.handleError(d)}))})}
function Vo(a,b,c){M("use_cfr_monitor")&&Zo(a,b);if(M("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(P())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(P())}c&&0===Object.keys(b).length?Ho(a):kl(a,b)}
function Uo(){So||(So=new Qo({Qc:!0,Gc:!0}));return So}
function Zo(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Ko().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Ko().requestComplete(a,!0);d(e,f)}}
function Wo(){return"www.youtube-nocookie.com"!==oc(document.location.toString())}
;var $o=!1,ap=0,bp=0,cp,dp=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:$o,potentialEsfErrorCounter:bp};z("ytNetworklessLoggingInitializationOptions",dp);
function ep(){var a;x(function(b){switch(b.i){case 1:return v(b,En(),2);case 2:a=b.j;if(!a||!um()&&!M("nwl_init_require_datasync_id_killswitch")||!Wo()){b.u(0);break}$o=!0;dp.isNwlInitialized=$o;if(!M("use_new_nwl_initialization")){b.u(4);break}return v(b,Xo().awaitInitialization(),5);case 5:return b.return();case 4:return v(b,Pn("LogsDatabaseV2"),6);case 6:if(!(.1>=Math.random())){b.u(7);break}return v(b,yo(a),8);case 8:return v(b,Do(a),7);case 7:fp();gp().M()&&hp();gp().Z("publicytnetworkstatus-online",
hp);gp().Z("publicytnetworkstatus-offline",ip);if(!M("networkless_immediately_drop_sw_health_store")){b.u(10);break}return v(b,jp(),10);case 10:if(M("networkless_immediately_drop_all_requests"))return v(b,zo(),0);b.u(0)}})}
function kp(a,b){function c(d){var e=gp().M();if(!lp()||!d||e&&M("vss_networkless_bypass_write"))mp(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};so(f,d).then(function(g){f.id=g;gp().M()&&np(f)}).catch(function(g){np(f);
gp().M()?Kk(g):No(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?En().then(function(d){c(d)}):c(Dn())}
function op(a,b){function c(d){if(lp()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,m){M("use_cfr_monitor")&&Ko().requestComplete(e.url,!0);void 0!==e.id?xo(e.id,d):f=!0;M("vss_network_hint")&&gp().ha(!0);g(k,m)};
if(M("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,m){Ko().requestComplete(e.url,!1);h(k,m)}}mp(e.url,e.options);
so(e,d).then(function(k){e.id=k;f&&xo(e.id,d)}).catch(function(k){gp().M()?Kk(k):No(k)})}else mp(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?En().then(function(d){c(d)}):c(Dn())}
function hp(){var a=Dn();if(!a)throw Jm("throttleSend");ap||(ap=Xh.S(function(){var b;return x(function(c){if(1==c.i)return v(c,uo("NEW",a),2);if(3!=c.i)return b=c.j,b?v(c,np(b),3):(ip(),c.return());ap&&(ap=0,hp());c.i=0})},100))}
function ip(){Xh.ea(ap);ap=0}
function np(a){var b,c,d;return x(function(e){switch(e.i){case 1:b=Dn();if(!b)throw c=Jm("immediateSend"),c;if(void 0===a.id){e.u(2);break}return v(e,vo(a.id,b),3);case 3:(d=e.j)?a=d:Lk(Error("The request cannot be found in the database."));case 2:if(pp(a,2592E6)){e.u(4);break}Lk(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.u(5);break}return v(e,xo(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=qp(a));var f=a;if(M("use_request_time_ms_header")){var g;
if(null==f?0:null==(g=f.options)?0:g.headers)f.options.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(P()))}else{var h,k;if(null==f?0:null==(h=f.options)?0:null==(k=h.postParams)?0:k.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P())}a=f;if(!a){e.u(0);break}if(!a.skipRetry||void 0===a.id){e.u(8);break}return v(e,xo(a.id,b),8);case 8:mp(a.url,a.options,!!a.skipRetry),e.i=0}})}
function qp(a){var b=Dn();if(!b)throw Jm("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return x(function(m){switch(m.i){case 1:M("use_cfr_monitor")&&Ko().requestComplete(a.url,!1);g=Yn(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&rp()<=Ek("potential_esf_error_limit",10))){m.u(2);break}if(M("skip_checking_network_on_cfr_failure")&&(!M("skip_checking_network_on_cfr_failure")||Ko().isEndpointCFR(a.url))){m.u(3);break}return v(m,gp().Ia(),3);case 3:if(gp().M()){m.u(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){m.u(6);break}return v(m,wo(a.id,b,!1),6);case 6:return m.return();case 2:if(M("nwl_consider_error_code")&&!g&&rp()>Ek("potential_esf_error_limit",10))return m.return();B("ytNetworklessLoggingInitializationOptions")&&dp.potentialEsfErrorCounter++;bp++;if(void 0===(null==(k=a)?void 0:k.id)){m.u(8);break}return 1>a.sendCount?v(m,wo(a.id,b),12):v(m,xo(a.id,b),8);case 12:Xh.S(function(){gp().M()&&hp()},5E3);
case 8:c(e,f),m.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return M("use_cfr_monitor")&&Ko().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.u(2):v(h,xo(a.id,b),2);M("vss_network_hint")&&gp().ha(!0);d(e,f);h.i=0})};
return a}
function pp(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function fp(){var a=Dn();if(!a)throw Jm("retryQueuedRequests");uo("QUEUED",a).then(function(b){b&&!pp(b,12E4)?Xh.S(function(){return x(function(c){if(1==c.i)return void 0===b.id?c.u(2):v(c,wo(b.id,a),2);fp();c.i=0})}):gp().M()&&hp()})}
function jp(){var a,b;return x(function(c){a=Dn();if(!a)throw b=Jm("clearSWHealthLogsDb"),b;return c.return(Eo(a).catch(function(d){Kk(d)}))})}
function gp(){if(M("use_new_nwl"))return Uo();cp||(cp=new Qo({Qc:!0,Gc:!0}));return cp}
function mp(a,b,c){c&&0===Object.keys(b).length?Ho(a):kl(a,b)}
function lp(){return B("ytNetworklessLoggingInitializationOptions")?dp.isNwlInitialized:$o}
function rp(){return B("ytNetworklessLoggingInitializationOptions")?dp.potentialEsfErrorCounter:bp}
;function sp(a){var b=this;this.config_=null;a?this.config_=a:Kl()&&(this.config_=Ll());cm(function(){$l(b)},0,5E3)}
sp.prototype.isReady=function(){!this.config_&&Kl()&&(this.config_=Ll());return!!this.config_};
function am(a,b,c,d){function e(A){A=void 0===A?!1:A;var E;if(d.retry&&"www.youtube-nocookie.com"!=h&&(A||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(E=Yl(b,c,m,k)),E)){var F=g.onSuccess,O=g.onFetchSuccess;g.onSuccess=function(N,R){Zl(E);F(N,R)};
c.onFetchSuccess=function(N,R){Zl(E);O(N,R)}}try{A&&d.retry&&!d.Zb.bypassNetworkless?(g.method="POST",d.Zb.writeThenSend?M("use_new_nwl_wts")?Xo().writeThenSend(u,g):kp(u,g):M("use_new_nwl_saw")?Xo().sendAndWrite(u,g):op(u,g)):M("web_all_payloads_via_jspb")?kl(u,g):(g.method="POST",g.postParams||(g.postParams={}),kl(u,g))}catch(N){if("InvalidAccessError"==N.name)E&&(Zl(E),E=0),Lk(Error("An extension is blocking network request."));
else throw N;}E&&cm(function(){$l(a)},0,5E3)}
!L("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Lk(new Q("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Q("innertube xhrclient not ready",b,c,d);Kk(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(A,E){if(d.onSuccess)d.onSuccess(E)},
onFetchSuccess:function(A){if(d.onSuccess)d.onSuccess(A)},
onError:function(A,E){if(d.onError)d.onError(E)},
onFetchError:function(A){if(d.onError)d.onError(A)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Nc)&&(h=f);var k=a.config_.Pc||!1,m=Sl(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var q="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,t={alt:"json"},w=a.config_.Oc&&f;w=w&&f.startsWith("Bearer");w||(t.key=a.config_.innertubeApiKey);var u=Xk(""+h+q,t||{},!0);M("use_new_nwl")&&Xo().i||!M("use_new_nwl")&&
lp()?Cn().then(function(A){e(A)}):e(!1)}
;var tp=0,up=Nc?"webkit":Mc?"moz":Kc?"ms":Jc?"o":"";z("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++tp});var vp={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function wp(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in vp||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.i=a.pageX;this.j=a.pageY}}catch(e){}}
function Kp(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.i=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.j=a.clientY+b}}
wp.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
wp.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
wp.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var qb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",qb);var iq=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",iq);
function jq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return pb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&ub(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var kq=db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function lq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=jq(a,b,c,d);if(e)return e;e=++iq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new wp(h);if(!lf(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new wp(h);
h.currentTarget=a;return c.call(a,h)};
g=Jk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),kq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);qb[e]=[a,b,c,g,d];return e}
function mq(a){a&&("string"==typeof a&&(a=[a]),fb(a,function(b){if(b in qb){var c=qb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?kq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete qb[b]}}))}
;var nq=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function oq(a){this.G=a;this.j=null;this.o=0;this.v=null;this.s=0;this.l=[];for(a=0;4>a;a++)this.l.push(0);this.m=0;this.L=lq(window,"mousemove",Xa(this.P,this));a=Xa(this.K,this);"function"===typeof a&&(a=Jk(a));this.R=window.setInterval(a,25)}
Za(oq,J);oq.prototype.P=function(a){void 0===a.i&&Kp(a);var b=a.i;void 0===a.j&&Kp(a);this.j=new gf(b,a.j)};
oq.prototype.K=function(){if(this.j){var a=nq();if(0!=this.o){var b=this.v,c=this.j,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.l[this.m]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.l[c]||0;3<=b&&this.G();this.s=d}this.o=a;this.v=this.j;this.m=(this.m+1)%4}};
oq.prototype.D=function(){window.clearInterval(this.R);mq(this.L)};var pq={};
function qq(a){var b=void 0===a?{}:a;a=void 0===b.Vc?!1:b.Vc;b=void 0===b.Hc?!0:b.Hc;if(null==B("_lact",window)){var c=parseInt(L("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&rq();lq(document,"keydown",rq);lq(document,"keyup",rq);lq(document,"mousedown",rq);lq(document,"mouseup",rq);a?lq(window,"touchmove",function(){sq("touchmove",200)},{passive:!0}):(lq(window,"resize",function(){sq("resize",200)}),b&&lq(window,"scroll",function(){sq("scroll",200)}));
new oq(function(){sq("mouse",100)});
lq(document,"touchstart",rq,{passive:!0});lq(document,"touchend",rq,{passive:!0})}}
function sq(a,b){pq[a]||(pq[a]=!0,Xh.S(function(){rq();pq[a]=!1},b))}
function rq(){null==B("_lact",window)&&qq();var a=Date.now();z("_lact",a,window);-1==B("_fact",window)&&z("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function tq(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var uq=y.ytPubsubPubsubInstance||new K,vq=y.ytPubsubPubsubSubscribedKeys||{},wq=y.ytPubsubPubsubTopicToKeys||{},xq=y.ytPubsubPubsubIsSynchronous||{};function yq(a,b){var c=zq();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){vq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{xq[a]?f():dl(f,0)}catch(g){Kk(g)}},void 0);
vq[d]=!0;wq[a]||(wq[a]=[]);wq[a].push(d);return d}return 0}
function Aq(a){var b=zq();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),fb(a,function(c){b.unsubscribeByKey(c);delete vq[c]}))}
function Bq(a,b){var c=zq();c&&c.publish.apply(c,arguments)}
function Cq(a){var b=zq();if(b)if(b.clear(a),a)Dq(a);else for(var c in wq)Dq(c)}
function zq(){return y.ytPubsubPubsubInstance}
function Dq(a){wq[a]&&(a=wq[a],fb(a,function(b){vq[b]&&delete vq[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Ca;K.prototype.publish=K.prototype.oa;K.prototype.clear=K.prototype.clear;z("ytPubsubPubsubInstance",uq);z("ytPubsubPubsubTopicToKeys",wq);z("ytPubsubPubsubIsSynchronous",xq);z("ytPubsubPubsubSubscribedKeys",vq);function Eq(){this.store=[];this.i={}}
Eq.prototype.storePayload=function(a,b){this.store.push({payload:b,keys:a});a=Fq(a);this.i[a]?this.i[a]++:this.i[a]=1;return a};
Eq.prototype.extractMatchingEntries=function(a){for(var b=[],c=[],d=p(this.store),e=d.next();!e.done;e=d.next()){e=e.value;a:{var f=a;var g=Object.keys(f);g=p(g);for(var h=g.next();!h.done;h=g.next())if(h=h.value,e.keys[h]!==f[h]){f=!1;break a}f=!0}f?(b.push(e.payload),this.i[Fq(e.keys)]--):c.push(e)}this.store=c;a=Gq(this,a);a=p(a);for(c=a.next();!c.done;c=a.next())c=c.value,0<this.i[c]&&Lk(new Q("Transport IMS did not fully extract entries for key:",{sequence:c,Xq:b.length,Wq:this.i[c]}));return b};
Eq.prototype.getSequenceCount=function(a){var b=Gq(this,a);a=0;b=p(b);for(var c=b.next();!c.done;c=b.next())a+=this.i[c.value];return a};
function Gq(a,b){var c=Object.keys(b),d="THIS_KEY_FIELD_NOT_FILLED",e="THIS_KEY_FIELD_NOT_FILLED",f="THIS_KEY_FIELD_NOT_FILLED";c=p(c);for(var g=c.next();!g.done;g=c.next())g=g.value,"auth"===g?d=Hq(b.auth):"isJspb"===g?e=JSON.stringify(b.isJspb):"cttAuthInfo"===g&&(f=Hq(b.cttAuthInfo));b=[];d=[d,e,f];a=p(Object.keys(a.i));for(e=a.next();!e.done;e=a.next()){e=e.value;f=e.split("/");c=!0;for(g=0;g<d.length;g++)if("THIS_KEY_FIELD_NOT_FILLED"!==d[g]&&d[g]!==f[g]){c=!1;break}c&&b.push(e)}return b}
Eq.prototype.getSequenceCount=Eq.prototype.getSequenceCount;Eq.prototype.extractMatchingEntries=Eq.prototype.extractMatchingEntries;Eq.prototype.storePayload=Eq.prototype.storePayload;function Fq(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
function Hq(a){return void 0===a?"undefined":a}
;var Iq=Ek("initial_gel_batch_timeout",2E3),Jq=Math.pow(2,16)-1,Kq=void 0;function Lq(){this.l=this.i=this.j=0}
var Mq=new Lq,Nq=new Lq,Oq,Pq=!0,Qq=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",Qq);var Rq=y.ytLoggingTransportGELProtoQueue_||new Map;z("ytLoggingTransportGELProtoQueue_",Rq);var Sq=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",Sq);var Tq=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};z("ytLoggingTransportTokensToJspbCttTargetIds_",Tq);var Uq={};function Vq(){var a=B("yt.logging.ims");a||(a=new Eq,z("yt.logging.ims",a));return a}
function Wq(a,b){M("web_all_payloads_via_jspb")&&Lk(new Q("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){Xq(a);var c=Yq(a);if(M("use_new_in_memory_storage")){Uq[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Vq().storePayload(d,a.payload);Zq(b,[],c,!1,d)}else d=Qq.get(c)||[],Qq.set(c,d),d.push(a.payload),Zq(b,d,c)}}
function $q(a,b){if("log_event"===a.endpoint){Xq(void 0,a);var c=Yq(a,!0);if(M("use_new_in_memory_storage")){Uq[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Vq().storePayload(d,a.payload.toJSON());Zq(b,[],c,!0,d)}else d=Rq.get(c)||[],Rq.set(c,d),a=a.payload.toJSON(),d.push(a),Zq(b,d,c,!0)}}
function Zq(a,b,c,d,e){d=void 0===d?!1:d;a&&(Kq=new a);a=Ek("tvhtml5_logging_max_batch")||Ek("web_logging_max_batch")||100;var f=P(),g=d?Nq.l:Mq.l;b=b.length;e&&(b=Vq().getSequenceCount(e));b>=a?M("background_thread_flush_logs_due_to_batch_limit")?Oq||(Oq=dl(function(){ar({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d);Oq=void 0},0)):ar({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d):10<=f-g&&(br(d),d?Nq.l=f:Mq.l=f)}
function cr(a,b){M("web_all_payloads_via_jspb")&&Lk(new Q("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){Xq(a);var c=Yq(a),d=new Map;d.set(c,[a.payload]);b&&(Kq=new b);return new yf(function(e,f){Kq&&Kq.isReady()?dr(d,Kq,e,f,{bypassNetworkless:!0},!0):e()})}}
function er(a,b){if("log_event"===a.endpoint){Xq(void 0,a);var c=Yq(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Kq=new b);return new yf(function(e){Kq&&Kq.isReady()?fr(d,Kq,e,{bypassNetworkless:!0},!0):e()})}}
function Yq(a,b){var c="";if(a.Ea)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Tj;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Td(d,2,Uj,c.playlistId);Tq[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Sq[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function ar(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&M("web_all_payloads_via_jspb")&&Lk(new Q("transport.flushLogs called for JSON in JSPB only experiment"));new yf(function(d,e){c?(el(Nq.j),el(Nq.i),Nq.i=0):(el(Mq.j),el(Mq.i),Mq.i=0);if(Kq&&Kq.isReady())if(M("use_new_in_memory_storage")){var f=a,g=c,h=Kq;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,m=new Map;if(void 0!==b)g?(e=Vq().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),fr(k,h,d,f)):(k=Vq().extractMatchingEntries({isJspb:g,
cttAuthInfo:b}),m.set(b,k),dr(m,h,d,e,f));else if(g){e=p(Object.keys(Uq));for(g=e.next();!g.done;g=e.next())m=g.value,g=Vq().extractMatchingEntries({isJspb:!0,cttAuthInfo:m}),0<g.length&&k.set(m,g),delete Uq[m];fr(k,h,d,f)}else{k=p(Object.keys(Uq));for(g=k.next();!g.done;g=k.next()){g=g.value;var q=Vq().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<q.length&&m.set(g,q);delete Uq[g]}dr(m,h,d,e,f)}}else f=a,k=c,h=Kq,f=void 0===f?{}:f,k=void 0===k?!1:k,void 0!==b?k?(e=new Map,k=Rq.get(b)||[],e.set(b,
k),fr(e,h,d,f),Rq.delete(b)):(k=new Map,m=Qq.get(b)||[],k.set(b,m),dr(k,h,d,e,f),Qq.delete(b)):k?(fr(Rq,h,d,f),Rq.clear()):(dr(Qq,h,d,e,f),Qq.clear());else br(c),d()})}
function br(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!Mq.i||a&&!Nq.i)){var b=dl(function(){ar({writeThenSend:!0},void 0,a)},6E4);
a?Nq.i=b:Mq.i=b}el(a?Nq.j:Mq.j);b=L("LOGGING_BATCH_TIMEOUT",Ek("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&Pq&&(b=Iq);b=dl(function(){ar({writeThenSend:!0},void 0,a)},b);
a?Nq.j=b:Mq.j=b}
function dr(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(P()),h=a.size;a=p(a);for(var k=a.next();!k.done;k=a.next()){var m=p(k.value);k=m.next().value;var q=m.next().value;m=k;k=wb({context:Ml(b.config_||Ll())});if(!Pa(q)&&!M("throw_err_when_logevent_malformed_killswitch")){d();break}k.events=q;(q=Sq[m])&&gr(k,m,q);delete Sq[m];m="visitorOnlyApprovedKey"===m;hr(k,g,m);ir(e);q=function(){h--;h||c()};
var t=function(){h--;h||c()};
try{am(b,"log_event",k,jr(e,m,q,t,f)),Pq=!1}catch(w){Kk(w),d()}}}
function fr(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(P()),g=a.size,h=new Map([].concat(ia(a)));h=p(h);for(var k=h.next();!k.done;k=h.next()){var m=p(k.value).next().value,q=a.get(m);k=new Vj;var t=Rl(b.config_||Ll());G(k,$i,1,t);q=q?kr(q):[];q=p(q);for(t=q.next();!t.done;t=q.next())$d(k,3,Pj,t.value);(q=Tq[m])&&lr(k,m,q);delete Tq[m];m="visitorOnlyApprovedKey"===m;mr(k,f,m);ir(d);k=de(k);m=jr(d,m,function(){g--;g||c()},function(){g--;
g||c()},e);
m.headers["Content-Type"]="application/json+protobuf";m.postBodyFormat="JSPB";m.postBody=k;am(b,"log_event","",m);Pq=!1}}
function ir(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function jr(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,Zb:a,Ea:b,Nq:!!e,headers:{},postBodyFormat:"",postBody:""};nr()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(P())));return a}
function hr(a,b,c){nr()||(a.requestTimeMs=String(b));M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=L("EVENT_ID"))&&(c=or(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function mr(a,b,c){nr()||D(a,2,b);if(!c&&(b=L("EVENT_ID"))){c=or();var d=new Sj;D(d,1,b);D(d,2,c);G(a,Sj,5,d)}}
function or(){var a=L("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Jq/2));a++;a>Jq&&(a=1);Bk("BATCH_CLIENT_COUNTER",a);return a}
function gr(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function lr(a,b,c){if(ae(c,1===Ud(c,Uj)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;G(a,Tj,4,c);a=Vd(a,$i,1)||new $i;c=Vd(a,Yi,3)||new Yi;var e=new Xi;e.setToken(b);D(e,1,d);$d(c,12,Xi,e);G(a,Yi,3,c)}
function kr(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Pj(a[c]))}catch(d){Kk(new Q("Transport failed to deserialize "+String(a[c])))}return b}
function Xq(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape","");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);z("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function nr(){return M("use_request_time_ms_header")||M("lr_use_request_time_ms_header")}
;var pr=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",pr);
function qr(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;M("enable_unknown_lact_fix_on_html5")&&qq();a=tq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.aa&&(a=e.context,b=d.aa,b={index:rr(b),groupKey:b},a.sequence=b,d.Rb&&delete pr[d.aa]);(d.jc?cr:Wq)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,Ea:d.Ea},c)}
function sr(a){ar(void 0,void 0,void 0===a?!1:a)}
function rr(a){pr[a]=a in pr?pr[a]+1:0;return pr[a]}
;var tr=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",tr);function ur(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||P());D(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=tq();d=new Oj;D(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.aa){e=c.aa;var f=rr(e),g=new Nj;D(g,2,f);D(g,1,e);G(d,Nj,3,g);c.Rb&&delete tr[c.aa]}G(a,Oj,33,d);(c.jc?er:$q)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,Ea:c.Ea},b)}
;function vr(a,b){b=void 0===b?{}:b;var c=!1;L("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);ur(a,c?null:sp,b)}
;function wr(a,b){var c=new Pj;Yd(c,Ej,72,Qj,a);vr(c,b)}
function xr(a,b,c){var d=new Pj;Yd(d,Dj,73,Qj,a);c?ur(d,c,b):vr(d,b)}
function yr(a,b,c){var d=new Pj;Yd(d,Cj,78,Qj,a);c?ur(d,c,b):vr(d,b)}
function zr(a,b,c){var d=new Pj;Yd(d,Fj,208,Qj,a);c?ur(d,c,b):vr(d,b)}
function Ar(a,b,c){var d=new Pj;Yd(d,vj,156,Qj,a);c?ur(d,c,b):vr(d,b)}
function Br(a,b,c){var d=new Pj;Yd(d,zj,215,Qj,a);c?ur(d,c,b):vr(d,b)}
function Cr(a,b,c){var d=new Pj;Yd(d,uj,111,Qj,a);c?ur(d,c,b):vr(d,b)}
;function rm(a,b,c){c=void 0===c?{}:c;if(M("migrate_events_to_ts")){c=void 0===c?{}:c;var d=sp;L("ytLoggingEventsDefaultDisabled",!1)&&sp===sp&&(d=null);M("web_all_payloads_via_jspb")&&Lk(new Q("Logs should be translated to JSPB but are sent as JSON instead",a));qr(a,b,d,c)}else d=sp,L("ytLoggingEventsDefaultDisabled",!1)&&sp==sp&&(d=null),qr(a,b,d,c)}
;var Dr=[{tb:function(a){return"Cannot read property '"+a.key+"'"},
Za:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{tb:function(a){return"Cannot call '"+a.key+"'"},
Za:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{tb:function(a){return a.key+" is not defined"},
Za:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Fr={ma:[],la:[{callback:Er,weight:500}]};function Er(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Gr(){this.la=[];this.ma=[]}
var Hr;function Ir(){if(!Hr){var a=Hr=new Gr;a.ma.length=0;a.la.length=0;Fr.ma&&a.ma.push.apply(a.ma,Fr.ma);Fr.la&&a.la.push.apply(a.la,Fr.la)}return Hr}
;var Jr=new K;function Kr(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Lr(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Lr(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Lr(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Lr(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Mr(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Nr(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Kr(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Nr(e+".ve",f,g,h):0;d+=g;d+=Nr(e,a[e],b,c);if(500<d)break}}else c[b]=Or(a),d+=c[b].length;else c[b]=Or(a),d+=c[b].length;return d}
function Nr(a,b,c,d){c+="."+a;a=Or(b);d[c]=a;return c.length+a.length}
function Or(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Pr=new Set,Qr=0,Rr=0,Sr=0,Tr=[],Ur=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function qm(a){Vr(a)}
function Wr(a){Vr(a,"WARNING")}
function Vr(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||L("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||L("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=Qr)){var m=Tr,q=ue(a),t=q.message||"Unknown Error",w=q.name||"UnknownError",u=q.stack||a.j||"Not available";if(u.startsWith(w+": "+t)){var A=u.split("\n");A.shift();u=A.join("\n")}var E=q.lineNumber||"Not available",F=q.fileName||"Not available",O=u,N=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var R=0;R<a.args.length&&!(N=Mr(a.args[R],"params."+R,g,N),500<=N);R++);else if(a.hasOwnProperty("params")&&
a.params){var ca=a.params;if("object"===typeof a.params)for(var W in ca){if(ca[W]){var ob="params."+W,Wa=Or(ca[W]);g[ob]=Wa;N+=ob.length+Wa.length;if(500<N)break}}else g.params=Or(ca)}if(m.length)for(var la=0;la<m.length&&!(N=Mr(m[la],"params.context."+la,g,N),500<=N);la++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var H={message:t,name:w,lineNumber:E,fileName:F,stack:O,params:g,sampleWeight:1},ka=Number(a.columnNumber);isNaN(ka)||(H.lineNumber=H.lineNumber+
":"+ka);if("IGNORED"===a.level)var ea=0;else a:{for(var Be=Ir(),Ce=p(Be.ma),wd=Ce.next();!wd.done;wd=Ce.next()){var na=wd.value;if(H.message&&H.message.match(na.Vq)){ea=na.weight;break a}}for(var xp=p(Be.la),Yj=xp.next();!Yj.done;Yj=xp.next()){var yp=Yj.value;if(yp.callback(H)){ea=yp.weight;break a}}ea=1}H.sampleWeight=ea;for(var zp=p(Dr),Zj=zp.next();!Zj.done;Zj=zp.next()){var ak=Zj.value;if(ak.Za[H.name])for(var Ap=p(ak.Za[H.name]),bk=Ap.next();!bk.done;bk=Ap.next()){var Bp=bk.value,Sg=H.message.match(Bp.regexp);
if(Sg){H.params["params.error.original"]=Sg[0];for(var ck=Bp.groups,Cp={},xd=0;xd<ck.length;xd++)Cp[ck[xd]]=Sg[xd+1],H.params["params.error."+ck[xd]]=Sg[xd+1];H.message=ak.tb(Cp);break}}}H.params||(H.params={});var Dp=Ir();H.params["params.errorServiceSignature"]="msg="+Dp.ma.length+"&cb="+Dp.la.length;H.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(H.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Db("sample").constructor!==
Bb&&(H.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(H);if(0!==H.sampleWeight&&!Pr.has(H.message)){if("ERROR"===h){Jr.oa("handleError",H);if(M("record_app_crashed_web")&&0===Sr&&1===H.sampleWeight)if(Sr++,M("errors_via_jspb")){var dk=new rj;D(dk,1,1);if(!M("report_client_error_with_app_crash_ks")){var Ep=new mj;D(Ep,1,H.message);var Fp=new nj;G(Fp,mj,3,Ep);var Gp=new oj;G(Gp,nj,5,Fp);var Hp=new pj;G(Hp,oj,9,Gp);G(dk,pj,4,Hp)}var Ip=new Pj;Yd(Ip,rj,20,
Qj,dk);vr(Ip)}else{var Jp={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(Jp.systemHealth={crashData:{clientError:{logMessage:{message:H.message}}}});rm("appCrashed",Jp)}Rr++}else"WARNING"===h&&Jr.oa("handleWarning",H);if(M("kevlar_gel_error_routing"))a:{var De=h;if(M("errors_via_jspb")){if(Xr())var Lp=void 0;else{var yd=new jj;D(yd,1,H.stack);H.fileName&&D(yd,4,H.fileName);var Kb=H.lineNumber&&H.lineNumber.split?H.lineNumber.split(":"):[];0!==Kb.length&&(1!==
Kb.length||isNaN(Number(Kb[0]))?2!==Kb.length||isNaN(Number(Kb[0]))||isNaN(Number(Kb[1]))||(D(yd,2,Number(Kb[0])),D(yd,3,Number(Kb[1]))):D(yd,2,Number(Kb[0])));var Bc=new mj;D(Bc,1,H.message);D(Bc,3,H.name);D(Bc,6,H.sampleWeight);"ERROR"===De?D(Bc,2,2):"WARNING"===De?D(Bc,2,1):D(Bc,2,0);var ek=new kj;D(ek,1,!0);Yd(ek,jj,3,lj,yd);var dc=new gj;D(dc,3,window.location.href);for(var Mp=L("FEXP_EXPERIMENTS",[]),fk=0;fk<Mp.length;fk++){var Qv=Mp[fk];Dd(dc);Qd(dc,5,2,!1).push(Qv)}var gk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
if(!Ck()&&gk)for(var Np=p(Object.keys(gk)),Cc=Np.next();!Cc.done;Cc=Np.next()){var Op=Cc.value,hk=new ij;D(hk,1,Op);hk.setValue(String(gk[Op]));$d(dc,4,ij,hk)}var ik=H.params;if(ik){var Pp=p(Object.keys(ik));for(Cc=Pp.next();!Cc.done;Cc=Pp.next()){var Qp=Cc.value,jk=new ij;D(jk,1,"client."+Qp);jk.setValue(String(ik[Qp]));$d(dc,4,ij,jk)}}var Rp=L("SERVER_NAME"),Sp=L("SERVER_VERSION");if(Rp&&Sp){var kk=new ij;D(kk,1,"server.name");kk.setValue(Rp);$d(dc,4,ij,kk);var lk=new ij;D(lk,1,"server.version");
lk.setValue(Sp);$d(dc,4,ij,lk)}var Tg=new nj;G(Tg,gj,1,dc);G(Tg,kj,2,ek);G(Tg,mj,3,Bc);Lp=Tg}var Tp=Lp;if(!Tp)break a;var Up=new Pj;Yd(Up,nj,163,Qj,Tp);vr(Up)}else{if(Xr())var Vp=void 0;else{var Ee={stackTrace:H.stack};H.fileName&&(Ee.filename=H.fileName);var Lb=H.lineNumber&&H.lineNumber.split?H.lineNumber.split(":"):[];0!==Lb.length&&(1!==Lb.length||isNaN(Number(Lb[0]))?2!==Lb.length||isNaN(Number(Lb[0]))||isNaN(Number(Lb[1]))||(Ee.lineNumber=Number(Lb[0]),Ee.columnNumber=Number(Lb[1])):Ee.lineNumber=
Number(Lb[0]));var mk={level:"ERROR_LEVEL_UNKNOWN",message:H.message,errorClassName:H.name,sampleWeight:H.sampleWeight};"ERROR"===De?mk.level="ERROR_LEVEL_ERROR":"WARNING"===De&&(mk.level="ERROR_LEVEL_WARNNING");var Rv={isObfuscated:!0,browserStackInfo:Ee},zd={pageUrl:window.location.href,kvPairs:[]};L("FEXP_EXPERIMENTS")&&(zd.experimentIds=L("FEXP_EXPERIMENTS"));var nk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Ck()&&nk)for(var Wp=p(Object.keys(nk)),Dc=Wp.next();!Dc.done;Dc=Wp.next()){var Xp=
Dc.value;zd.kvPairs.push({key:Xp,value:String(nk[Xp])})}var ok=H.params;if(ok){var Yp=p(Object.keys(ok));for(Dc=Yp.next();!Dc.done;Dc=Yp.next()){var Zp=Dc.value;zd.kvPairs.push({key:"client."+Zp,value:String(ok[Zp])})}}var $p=L("SERVER_NAME"),aq=L("SERVER_VERSION");$p&&aq&&(zd.kvPairs.push({key:"server.name",value:$p}),zd.kvPairs.push({key:"server.version",value:aq}));Vp={errorMetadata:zd,stackTrace:Rv,logMessage:mk}}var bq=Vp;if(!bq)break a;rm("clientError",bq)}if("ERROR"===De||M("errors_flush_gel_always_killswitch"))b:if(M("migrate_events_to_ts"))c:{if(M("web_fp_via_jspb")&&
(sr(!0),!M("web_fp_via_jspb_and_json")))break c;sr()}else{if(M("web_fp_via_jspb")&&(sr(!0),!M("web_fp_via_jspb_and_json")))break b;sr()}}if(!M("suppress_error_204_logging")){var Fe=H.params||{},ec={urlParams:{a:"logerror",t:"jserror",type:H.name,msg:H.message.substr(0,250),line:H.lineNumber,level:h,"client.name":Fe.name},postParams:{url:L("PAGE_NAME",window.location.href),file:H.fileName},method:"POST"};Fe.version&&(ec["client.version"]=Fe.version);if(ec.postParams){H.stack&&(ec.postParams.stack=
H.stack);for(var cq=p(Object.keys(Fe)),pk=cq.next();!pk.done;pk=cq.next()){var dq=pk.value;ec.postParams["client."+dq]=Fe[dq]}var qk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(qk)for(var eq=p(Object.keys(qk)),rk=eq.next();!rk.done;rk=eq.next()){var fq=rk.value;ec.postParams[fq]=qk[fq]}var gq=L("SERVER_NAME"),hq=L("SERVER_VERSION");gq&&hq&&(ec.postParams["server.name"]=gq,ec.postParams["server.version"]=hq)}kl(L("ECATCHER_REPORT_HOST","")+"/error_204",ec)}try{Pr.add(H.message)}catch(ux){}Qr++}}}}
function Xr(){for(var a=p(Ur),b=a.next();!b.done;b=a.next())if(im(b.value.toLowerCase()))return!0;return!1}
function Yr(a){var b=Ja.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ia(b))}
;function Zr(){this.register=new Map}
function $r(a){a=p(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.br("ABORTED")}
Zr.prototype.clear=function(){$r(this);this.register.clear()};
var as=new Zr;var bs=Date.now().toString();
function cs(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(bs)for(a=1,b=0;b<bs.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^bs.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ds=y.ytLoggingDocDocumentNonce_;ds||(ds=cs(),z("ytLoggingDocDocumentNonce_",ds));var es=ds;var fs={Qh:0,me:1,xe:2,Ll:3,Sh:4,gq:5,Bm:6,oo:7,Hn:8,Zn:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function gs(a){this.i=a}
function hs(a){return new gs({trackingParams:a})}
gs.prototype.getAsJson=function(){var a={};void 0!==this.i.trackingParams?a.trackingParams=this.i.trackingParams:(a.veType=this.i.veType,void 0!==this.i.veCounter&&(a.veCounter=this.i.veCounter),void 0!==this.i.elementIndex&&(a.elementIndex=this.i.elementIndex));void 0!==this.i.dataElement&&(a.dataElement=this.i.dataElement.getAsJson());void 0!==this.i.youtubeData&&(a.youtubeData=this.i.youtubeData);return a};
gs.prototype.getAsJspb=function(){var a=new tj;if(void 0!==this.i.trackingParams){var b=this.i.trackingParams;if(null!=b)if("string"===typeof b)b=b?new id(b,gd):jd();else if(b.constructor!==id)if(fd(b))b=b.length?new id(new Uint8Array(b),gd):jd();else throw Error();D(a,1,b)}else void 0!==this.i.veType&&D(a,2,this.i.veType),void 0!==this.i.veCounter&&D(a,6,this.i.veCounter),void 0!==this.i.elementIndex&&D(a,3,this.i.elementIndex);void 0!==this.i.dataElement&&(b=this.i.dataElement.getAsJspb(),G(a,tj,
7,b));void 0!==this.i.youtubeData&&G(a,Mi,8,this.i.jspbYoutubeData);return a};
gs.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
gs.prototype.isClientVe=function(){return!this.i.trackingParams&&!!this.i.veType};function is(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function js(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ks(a){return L(js(void 0===a?0:a))}
z("yt_logging_screen.getRootVeType",ks);function ls(a){return(a=ks(void 0===a?0:a))?new gs({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function ms(){var a=L("csn-to-ctt-auth-info");a||(a={},Bk("csn-to-ctt-auth-info",a));return a}
function ns(a){a=L(is(void 0===a?0:a));if(!a&&!L("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
z("yt_logging_screen.getCurrentCsn",ns);function os(a,b,c){var d=ms();(c=ns(c))&&delete d[c];b&&(d[a]=b)}
function ps(a){return ms()[a]}
z("yt_logging_screen.getCttAuthInfo",ps);
function qs(a,b,c,d){c=void 0===c?0:c;if(a!==L(is(c))||b!==L(js(c)))if(os(a,d,c),Bk(is(c),a),Bk(js(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new uj;D(e,1,es);D(e,2,a);M("use_default_heartbeat_client")?Cr(e):Cr(e,void 0,sp)}else e={clientDocumentNonce:es,clientScreenNonce:a},M("use_default_heartbeat_client")?rm("foregroundHeartbeatScreenAssociated",e):qr("foregroundHeartbeatScreenAssociated",e,sp)},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
z("yt_logging_screen.setCurrentScreen",qs);var rs=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",rs);function ss(a){wk(rs,arguments)}
;var ts={le:3611,wd:27686,xd:85013,yd:23462,Ad:157557,Bd:42016,Cd:62407,Dd:26926,zd:43781,Ed:51236,Fd:79148,Gd:50160,Hd:77504,Td:153587,Ud:87907,Vd:18630,Wd:54445,Xd:80935,Yd:152172,Zd:105675,ae:150723,be:37521,ce:147285,de:47786,ee:98349,ge:123695,he:6827,ie:29434,je:7282,ke:124448,oe:32276,ne:76278,pe:147868,qe:147869,re:93911,se:106531,te:27259,ue:27262,we:27263,ye:21759,ze:27107,Ae:62936,Be:160866,Ce:49568,De:160789,Ee:38408,Fe:80637,Ge:68727,He:68728,Ie:80353,Je:80356,Ke:74610,Le:45707,Me:83962,
Ne:83970,Oe:46713,Pe:89711,Qe:74612,Re:155792,Se:93265,Te:74611,Ue:131380,We:128979,Xe:139311,Ye:128978,Ve:131391,Ze:105350,bf:139312,cf:134800,af:131392,ef:113533,ff:93252,gf:99357,jf:94521,kf:114252,lf:113532,mf:94522,hf:94583,nf:88E3,pf:139580,qf:93253,rf:93254,sf:94387,tf:94388,uf:93255,vf:97424,df:72502,wf:110111,xf:76019,zf:117092,Af:117093,yf:89431,Bf:110466,Cf:77240,Df:60508,Ef:148123,Ff:148124,Gf:137401,Hf:137402,If:137046,Jf:73393,Kf:113534,Lf:92098,Mf:131381,Nf:84517,Of:83759,Pf:80357,
Qf:86113,Rf:72598,Sf:72733,Tf:107349,Uf:124275,Vf:118203,Wf:133275,Xf:160157,Yf:152569,Zf:156651,ag:133274,cg:160159,dg:160158,eg:133272,fg:133273,gg:133276,hg:144507,ig:143247,jg:156652,kg:143248,lg:143249,mg:143250,ng:143251,og:156653,pg:144401,rg:117431,qg:133797,sg:153964,tg:128572,ug:133405,vg:117429,wg:117430,xg:117432,yg:120080,zg:117259,Ag:156655,Bg:156654,Cg:121692,Dg:145656,Eg:156656,Fg:145655,Gg:145653,Hg:145654,Ig:145657,Jg:132972,Kg:133051,Lg:133658,Mg:132971,Ng:97615,Pg:143359,Og:143356,
Rg:143361,Qg:143358,Tg:143360,Sg:143357,Ug:142303,Vg:143353,Wg:143354,Xg:144479,Yg:143355,Zg:31402,bh:133624,dh:146477,eh:133623,fh:133622,ah:133621,gh:84774,ih:160801,hh:95117,jh:150497,kh:98930,lh:98931,mh:98932,nh:153320,oh:153321,ph:43347,qh:129889,rh:149123,sh:45474,th:100352,uh:84758,vh:98443,wh:117985,xh:74613,yh:155911,zh:74614,Ah:64502,Bh:136032,Ch:74615,Dh:74616,Eh:122224,Fh:74617,Gh:77820,Hh:74618,Ih:93278,Jh:93274,Kh:93275,Lh:93276,Mh:22110,Nh:29433,Oh:133798,Ph:132295,Rh:120541,Th:82047,
Uh:113550,Vh:75836,Wh:75837,Xh:42352,Yh:84512,Zh:76065,ai:75989,gi:16623,hi:32594,ii:27240,ji:32633,ki:74858,li:156999,ni:3945,mi:16989,oi:45520,ri:25488,si:25492,ti:25494,vi:55760,wi:14057,xi:18451,yi:57204,zi:57203,Ai:17897,Bi:57205,Ci:18198,Di:17898,Ei:17909,Fi:43980,Gi:46220,Hi:11721,Ii:147994,Ji:49954,Ki:96369,Li:3854,Mi:151633,Ni:56251,Oi:159108,Pi:25624,Qi:152036,hj:16906,ij:99999,jj:68172,kj:27068,lj:47973,mj:72773,nj:26970,oj:26971,pj:96805,qj:17752,rj:73233,sj:109512,tj:22256,uj:14115,vj:22696,
wj:89278,xj:89277,yj:109513,zj:43278,Aj:43459,Bj:43464,Cj:89279,Dj:43717,Ej:55764,Fj:22255,Gj:147912,Hj:89281,Ij:40963,Jj:43277,Kj:43442,Lj:91824,Mj:120137,Nj:96367,Oj:36850,Pj:72694,Qj:37414,Rj:36851,Tj:124863,Sj:121343,Uj:73491,Vj:54473,Wj:43375,Xj:46674,Yj:143815,Zj:139095,ak:144402,bk:149968,ck:149969,dk:32473,ek:72901,fk:72906,gk:50947,hk:50612,ik:50613,jk:50942,kk:84938,lk:84943,mk:84939,nk:84941,pk:84944,qk:84940,rk:84942,sk:35585,tk:51926,uk:79983,vk:63238,wk:18921,xk:63241,yk:57893,zk:41182,
Ak:135732,Bk:33424,Ck:22207,Dk:42993,Ek:36229,Fk:22206,Gk:22205,Hk:18993,Ik:19001,Jk:18990,Kk:18991,Lk:18997,Mk:18725,Nk:19003,Ok:36874,Pk:44763,Qk:33427,Rk:67793,Sk:22182,Tk:37091,Uk:34650,Vk:50617,Wk:47261,Xk:22287,Yk:25144,Zk:97917,al:62397,bl:150871,dl:150874,fl:125598,il:137935,jl:36961,kl:108035,ll:27426,ml:27857,nl:27846,ol:27854,pl:69692,ql:61411,rl:39299,sl:38696,ul:62520,vl:36382,wl:108701,xl:50663,yl:36387,zl:14908,Al:37533,Bl:105443,Cl:61635,Dl:62274,El:133818,Fl:65702,Gl:65703,Hl:65701,
Il:76256,Jl:37671,Kl:49953,Ml:36216,Nl:28237,Ol:39553,Pl:29222,Ql:26107,Rl:38050,Sl:26108,Ul:120745,Tl:26109,Vl:26110,Wl:66881,Xl:28236,Yl:14586,Zl:160598,am:57929,bm:74723,cm:44098,dm:44099,gm:23528,hm:61699,em:134104,fm:134103,im:59149,jm:101951,km:97346,lm:118051,mm:95102,nm:64882,om:119505,pm:63595,qm:63349,rm:95101,sm:75240,tm:27039,um:68823,vm:21537,wm:83464,xm:75707,ym:83113,zm:101952,Am:101953,Cm:79610,Dm:125755,Em:24402,Fm:24400,Gm:32925,Im:57173,Hm:156421,Jm:122502,Km:145268,Lm:138480,Mm:64423,
Nm:64424,Om:33986,Pm:100828,Qm:129089,Rm:21409,Vm:135155,Wm:135156,Xm:135157,Ym:135158,Zm:158225,an:135159,bn:135160,cn:135161,en:135162,fn:135163,dn:158226,gn:158227,hn:135164,jn:135165,kn:135166,Sm:11070,Tm:11074,Um:17880,ln:14001,nn:30709,pn:30707,qn:30711,rn:30710,sn:30708,mn:26984,tn:146143,un:63648,vn:63649,wn:51879,xn:111059,yn:5754,zn:20445,An:151308,Bn:151152,Dn:130975,Cn:130976,En:110386,Fn:113746,Gn:66557,In:17310,Jn:28631,Kn:21589,Ln:154946,Mn:68012,Nn:60480,On:138664,Pn:141121,Qn:31571,
Rn:141978,Sn:150105,Tn:150106,Un:150107,Vn:150108,Wn:76980,Xn:41577,Yn:45469,ao:38669,bo:13768,co:13777,eo:141842,fo:62985,ho:4724,jo:59369,ko:43927,lo:43928,mo:12924,no:100355,qo:56219,ro:27669,so:10337,po:47896,to:122629,vo:139723,uo:139722,wo:121258,xo:107598,yo:127991,zo:96639,Ao:107536,Bo:130169,Co:96661,Do:145188,Eo:96658,Fo:116646,Go:159428,Ho:121122,Io:96660,Jo:127738,Ko:127083,Lo:155281,Mo:147842,No:104443,Oo:96659,Po:147595,Qo:106442,Ro:134840,So:63667,To:63668,Uo:63669,Vo:130686,Wo:147036,
Xo:78314,Yo:147799,Zo:148649,ap:55761,bp:127098,cp:134841,ep:96368,fp:67374,gp:48992,hp:146176,ip:49956,jp:31961,kp:26388,lp:23811,mp:5E4,np:126250,qp:96370,rp:47355,sp:47356,tp:37935,up:45521,vp:21760,wp:83769,xp:49977,yp:49974,zp:93497,Ap:93498,Bp:34325,Cp:140759,Dp:115803,Ep:123707,Fp:100081,Gp:35309,Hp:68314,Ip:25602,Jp:100339,Kp:143516,Lp:59018,Mp:18248,Np:50625,Op:9729,Pp:37168,Qp:37169,Rp:21667,Sp:16749,Tp:18635,Up:39305,Vp:18046,Wp:53969,Xp:8213,Yp:93926,Zp:102852,aq:110099,bq:22678,cq:69076,
fq:137575,hq:139224,iq:100856,jq:154430,kq:17736,lq:3832,mq:147111,nq:55759,oq:64031,uq:93044,wq:93045,xq:34388,yq:17657,zq:17655,Aq:39579,Bq:39578,Cq:77448,Dq:8196,Eq:11357,Fq:69877,Gq:8197,Hq:156512,Iq:156509,Jq:82039};function us(){var a=vb(vs),b;return(new yf(function(c,d){a.onSuccess=function(e){cl(e)?c(new ws(e)):d(new xs("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new xs("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new xs("Request timed out","net.timeout",e))};
b=kl("//googleads.g.doubleclick.net/pagead/id",a)})).eb(function(c){c instanceof Ff&&b.abort();
return Df(c)})}
function xs(a,b,c){ab.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
r(xs,ab);function ws(a){this.xhr=a}
;function ys(){this.i=0;this.ja=null}
ys.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.ja))&&"function"===typeof a.then?a:zs(a):2===this.i&&b?(a=b.call(c,this.ja))&&"function"===typeof a.then?a:As(a):this};
ys.prototype.getValue=function(){return this.ja};
ys.prototype.$goog_Thenable=!0;function As(a){var b=new ys;a=void 0===a?null:a;b.i=2;b.ja=void 0===a?null:a;return b}
function zs(a){var b=new ys;a=void 0===a?null:a;b.i=1;b.ja=void 0===a?null:a;return b}
;function Bs(a,b){if(a)return a[b.name]}
;function Cs(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:Yk(a)?"same-origin":"cors",credentials:Yk(a)?"same-origin":"include"};b={};for(var d=p(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Ds(){return sg()||hm&&im("applewebkit")&&!im("version")&&(!im("safari")||im("gsa/"))||Oc&&im("version/")?!0:L("EOM_VISITOR_DATA")?!1:!0}
;function Es(a){a:{var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){b="EMBEDDED_PLAYER_MODE_UNKNOWN";break a}if(b)b:{for(var c in Yh)if(Yh[c]==b.embeddedPlayerMode){b=Yh[c];break b}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN"}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Fs(a){ab.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Gs;this.isTimeout=a instanceof xs&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Ff}
r(Fs,ab);Fs.prototype.name="BiscottiError";function Gs(){ab.call(this,"Biscotti ID is missing from server")}
r(Gs,ab);Gs.prototype.name="BiscottiMissingError";var vs={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Hs=null;function Is(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Ds())return Error("User has not consented - not fetching biscotti id.");var a=L("PLAYER_VARS",{});if("1"==tb(a))return Error("Biscotti ID is not available in private embed mode");if(Es(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Nk(){var a=Is();if(void 0!==a)return Df(a);Hs||(Hs=us().then(Js).eb(function(b){return Ks(2,b)}));
return Hs}
function Js(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Gs;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Gs;a=a.id;Ok(a);Hs=zs(a);Ls(18E5,2);return a}
function Ks(a,b){b=new Fs(b);Ok("");Hs=As(b);0<a&&Ls(12E4,a-1);throw b;}
function Ls(a,b){dl(function(){us().then(Js,function(c){return Ks(b,c)}).eb(cb)},a)}
function Ms(){try{var a=B("yt.ads.biscotti.getId_");return a?a():Nk()}catch(b){return Df(b)}}
;function Ns(a){if("1"!=tb(L("PLAYER_VARS",{}))){a&&Mk();try{Ms().then(function(){},function(){}),dl(Ns,18E5)}catch(b){Kk(b)}}}
;function Os(){this.od=!0}
function Ps(a){var b={},c=ug([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(L("SESSION_INDEX",0)),c=isNaN(c)?0:c),M("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c),"INNERTUBE_HOST_OVERRIDE"in Ak||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in Ak&&(b["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return b}
;var Qs={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var Rs=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Ss(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;mc(nc(5,a));try{var b=Wk(a).theme;return Rs.get(b)||null}catch(c){}return null}
;function Ts(){this.i={};if(this.j=wl()){var a=qg.get("CONSISTENCY",void 0);a&&Us(this,{encryptedTokenJarContents:a})}}
Ts.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.ga.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=p(b);for(c=e.next();!c.done;c=e.next())delete this.i[c.value.encryptedTokenJarContents];Us(this,a)}};
function Us(a,b){if(b.encryptedTokenJarContents&&(a.i[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.i[b.encryptedTokenJarContents]},1E3*c);
a.j&&ul("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Vs=window.location.hostname.split(".").slice(-2).join(".");function Ws(){var a=L("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===L("INNERTUBE_CLIENT_NAME")&&(this.i=Xs(this))&&(a=this.i.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.j=void 0)}
var Ys;Ws.getInstance=function(){Ys=B("yt.clientLocationService.instance");Ys||(Ys=new Ws,z("yt.clientLocationService.instance",Ys));return Ys};
l=Ws.prototype;l.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.j?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.j.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.j.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.j.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
l.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.j=void 0,"TVHTML5"===L("INNERTUBE_CLIENT_NAME")?(this.i=Xs(this))&&this.i.set("yt-location-playability-token",a,15552E3):ul("YT_CL",JSON.stringify({loctok:a}),15552E3,Vs,!0))};
function Xs(a){return void 0===a.i?new Ul("yt-client-location"):a.i}
l.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.i=Xs(this))&&this.i.remove("yt-location-playability-token"):vl("YT_CL")};
l.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===L("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.j=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
l.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Zs(a,b){var c,d=null==(c=Bs(a,ej))?void 0:c.signal;if(d&&b.Ja&&(c=b.Ja[d]))return c();var e;if((c=null==(e=Bs(a,cj))?void 0:e.request)&&b.Dc&&(e=b.Dc[c]))return e();for(var f in a)if(b.Nb[f]&&(a=b.Nb[f]))return a()}
;var $s=Symbol("injectionDeps");function at(a){this.name=a}
at.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function bt(){this.key=ct}
function dt(){this.providers=new Map;this.i=new Map}
dt.prototype.resolve=function(a){return a instanceof bt?et(this,a.key,[],!0):et(this,a,[])};
function et(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.providers.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.providers.get(b);c.push(b);if(d.pc)var e=d.pc;else if(d.vd)e=d[$s]?ft(a,d[$s],c):[],e=d.vd.apply(d,ia(e));else if(d.oc){e=d.oc;var f=e[$s]?ft(a,e[$s],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ia(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.hr||a.i.set(b,e);
return e}
function ft(a,b,c){return b?b.map(function(d){return d instanceof bt?et(a,d.key,c,!0):et(a,d,c)}):[]}
;var gt;function ht(){gt||(gt=new dt);return gt}
;function jt(a){return function(){return new a}}
;var kt={},lt=(kt.WEB_UNPLUGGED="^unplugged/",kt.WEB_UNPLUGGED_ONBOARDING="^unplugged/",kt.WEB_UNPLUGGED_OPS="^unplugged/",kt.WEB_UNPLUGGED_PUBLIC="^unplugged/",kt.WEB_CREATOR="^creator/",kt.WEB_KIDS="^kids/",kt.WEB_EXPERIMENTS="^experiments/",kt.WEB_MUSIC="^music/",kt.WEB_REMIX="^music/",kt.WEB_MUSIC_EMBEDDED_PLAYER="^music/",kt.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",kt);
function mt(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=lt[b];if(c){var d=new RegExp(c),e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(lt).forEach(function(g){var h=p(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function nt(){}
nt.prototype.o=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Qs:c;var d=a.clickTrackingParams,e=this.m,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=L("INNERTUBE_CONTEXT");if(g){g=wb(g);M("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=L("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;yl.getInstance();var m="USER_INTERFACE_THEME_LIGHT";Bl(165)?m="USER_INTERFACE_THEME_DARK":Bl(174)?m="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:Ss()||m;h.userInterfaceTheme=k;if(!f){if(k=
Il())h.connectionType=k;M("web_log_effective_connection_type")&&(k=Jl())&&(g.client.effectiveConnectionType=k)}var q;if(M("web_log_memory_total_kbytes")&&(null==(q=y.navigator)?0:q.deviceMemory)){var t;q=null==(t=y.navigator)?void 0:t.deviceMemory;g.client.memoryTotalKbytes=""+1E6*q}t=Wk(y.location.href);!M("web_populate_internal_geo_killswitch")&&t.internalcountrycode&&(h.internalGeo=t.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:y.location.href},M("kevlar_woffle")&&
sl.i&&(t=sl.i,h.mainAppWebInfo.pwaInstallabilityStatus=!t.i&&t.j?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=tl(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!M("web_lr_app_quality_killswitch")&&(t=L("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:t})),t=L("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||
{},{certificationScope:t}));if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var w=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(ob){}w=void 0}w&&(h.timeZone=w)}(w=Fk())?h.experimentsToken=w:delete h.experimentsToken;w=Gk();Ts.i||(Ts.i=new Ts);h=Ts.i.i;t=[];q=0;for(var u in h)t[q++]=h[u];g.request=Object.assign({},g.request,{internalExperimentFlags:w,consistencyTokenJars:t});!M("web_prequest_context_killswitch")&&(u=L("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&
(g.request.externalPrequestContext=u);w=yl.getInstance();u=Bl(58);w=w.get("gsml","");g.user=Object.assign({},g.user);u&&(g.user.enableSafetyMode=u);w&&(g.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?e&&(f=ns())&&(g.clientScreenNonce=f):!f&&(f=ns())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=B("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Ws.getInstance().setLocationOnInnerTubeContext(g);try{var A=Zk(),E=A.bid;delete A.bid;g.adSignalsInfo={params:[],bid:E};var F=
p(Object.entries(A));for(var O=F.next();!O.done;O=F.next()){var N=p(O.value),R=N.next().value,ca=N.next().value;A=R;E=ca;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:A,value:""+E})}}catch(ob){Vr(ob)}F=g}else Vr(Error("Error: No InnerTubeContext shell provided in ytconfig.")),F={};F={context:F};if(O=this.i(a)){this.j(F,O,b);var W;b="/youtubei/v1/"+mt(this.l());(O=null==(W=Bs(a.commandMetadata,dj))?void 0:W.apiUrl)&&(b=O);W=b;(b=L("INNERTUBE_HOST_OVERRIDE"))&&(W=String(b)+String(pc(W)));b=
{};b.key=L("INNERTUBE_API_KEY");M("json_condensed_response")&&(b.prettyPrint="false");W=Xk(W,b||{},!1);a=M("kevlar_response_command_processor_page")?Object.assign({},{command:a},void 0):Object.assign({},void 0);a={input:W,ta:Cs(W),ga:F,config:a};a.config.Pa?a.config.Pa.identity=c:a.config.Pa={identity:c};return a}Vr(new Q("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(nt.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!1}}});function ot(){}
r(ot,nt);ot.prototype.o=function(){return{input:"/getDatasyncIdsEndpoint",ta:Cs("/getDatasyncIdsEndpoint","GET"),ga:{}}};
ot.prototype.l=function(){return[]};
ot.prototype.i=function(){};
ot.prototype.j=function(){};var pt={},qt=(pt.GET_DATASYNC_IDS=jt(ot),pt);function rt(a){var b=Ja.apply(1,arguments);if(!st(a)||b.some(function(d){return!st(d)}))throw Error("Only objects may be merged.");
b=p(b);for(var c=b.next();!c.done;c=b.next())tt(a,c.value);return a}
function tt(a,b){for(var c in b)if(st(b[c])){if(c in a&&!st(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});tt(a[c],b[c])}else if(ut(b[c])){if(c in a&&!ut(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);vt(a[c],b[c])}else a[c]=b[c];return a}
function vt(a,b){b=p(b);for(var c=b.next();!c.done;c=b.next())c=c.value,st(c)?a.push(tt({},c)):ut(c)?a.push(vt([],c)):a.push(c);return a}
function st(a){return"object"===typeof a&&!Array.isArray(a)}
function ut(a){return"object"===typeof a&&Array.isArray(a)}
;function wt(a,b){Zn.call(this,1,arguments);this.timer=b}
r(wt,Zn);var xt=new $n("aft-recorded",wt);var zt=window;function At(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var S=zt.performance||zt.mozPerformance||zt.msPerformance||zt.webkitPerformance||new At;var Bt=!1,Ct={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Xa(S.clearResourceTimings||S.webkitClearResourceTimings||S.mozClearResourceTimings||S.msClearResourceTimings||S.oClearResourceTimings||cb,S);function Dt(a){var b=Et(a);if(b.aft)return b.aft;a=L((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Ft(){var a;if(M("csi_use_performance_navigation_timing")||M("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==S?void 0:null==(a=S.getEntriesByType)?void 0:null==(b=a.call(S,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Gt(e.requestStart),e.responseEnd=Gt(e.responseEnd),e.redirectStart=Gt(e.redirectStart),e.redirectEnd=Gt(e.redirectEnd),e.domainLookupEnd=Gt(e.domainLookupEnd),e.connectStart=Gt(e.connectStart),e.connectEnd=
Gt(e.connectEnd),e.responseStart=Gt(e.responseStart),e.secureConnectionStart=Gt(e.secureConnectionStart),e.domainLookupStart=Gt(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=S.timing}else a=S.timing;return a}
function Ht(){return(M("csi_use_time_origin")||M("csi_use_time_origin_tvhtml5"))&&S.timeOrigin?Math.floor(S.timeOrigin):S.timing.navigationStart}
function Gt(a){return Math.round(Ht()+a)}
function It(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},z("ytcsi."+(a||"")+"data_",b));return b}
function Jt(a){a=It(a);a.info||(a.info={});return a.info}
function Kt(a){a=It(a);a.metadata||(a.metadata={});return a.metadata}
function Et(a){a=It(a);a.tick||(a.tick={});return a.tick}
function Lt(a){a=It(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Mt(a){a=Lt(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Nt(a){a=Lt(a);a.jspbInfos||(a.jspbInfos=[]);return a.jspbInfos}
function Ot(a){var b=It(a).nonce;b||(b=cs(),It(a).nonce=b);return b}
function Pt(a){var b=Et(a||""),c=Dt(a);c&&!Bt&&(fo(xt,new wt(Math.round(c-b._start),a)),Bt=!0)}
function Qt(a,b){for(var c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Qt(a[d],b[d]))return!1;return!0}
;function Rt(){if(S.getEntriesByType){var a=S.getEntriesByType("paint");if(a=kb(a,function(b){return"first-paint"===b.name}))return Gt(a.startTime)}a=S.timing;
return a.Sc?Math.max(0,a.Sc):0}
;function St(){var a=B("ytcsi.debug");a||(a=[],z("ytcsi.debug",a),z("ytcsi.reference",{}));return a}
function Tt(a){a=a||"";var b=B("ytcsi.reference");b||(St(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=St(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var T={},Ut=(T.auto_search="LATENCY_ACTION_AUTO_SEARCH",T.ad_to_ad="LATENCY_ACTION_AD_TO_AD",T.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",T["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",T.app_startup="LATENCY_ACTION_APP_STARTUP",T["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",T["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",T["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",T["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",T.browse="LATENCY_ACTION_BROWSE",
T.cast_splash="LATENCY_ACTION_CAST_SPLASH",T.channels="LATENCY_ACTION_CHANNELS",T.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",T["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",T["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",T["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",T["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",T["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",T["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",
T["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",T["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",T["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",T["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",T["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",T["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",T["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",T.chips="LATENCY_ACTION_CHIPS",
T["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",T["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",T["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",T.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",T.embed="LATENCY_ACTION_EMBED",T.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",T.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",T.explore="LATENCY_ACTION_EXPLORE",T.home=
"LATENCY_ACTION_HOME",T.library="LATENCY_ACTION_LIBRARY",T.live="LATENCY_ACTION_LIVE",T.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",T.onboarding="LATENCY_ACTION_ONBOARDING",T.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",T.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",T.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",T.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",T["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",T["post.edit"]=
"LATENCY_ACTION_CREATOR_POST_EDIT",T.prebuffer="LATENCY_ACTION_PREBUFFER",T.prefetch="LATENCY_ACTION_PREFETCH",T.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",T.profile_switcher="LATENCY_ACTION_LOGIN",T.reel_watch="LATENCY_ACTION_REEL_WATCH",T.results="LATENCY_ACTION_RESULTS",T["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",T.search_ui="LATENCY_ACTION_SEARCH_UI",T.search_suggest="LATENCY_ACTION_SUGGEST",T.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",T.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",
T.seek="LATENCY_ACTION_PLAYER_SEEK",T.settings="LATENCY_ACTION_SETTINGS",T.store="LATENCY_ACTION_STORE",T.tenx="LATENCY_ACTION_TENX",T.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",T.watch="LATENCY_ACTION_WATCH",T.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",T["watch,watch7"]="LATENCY_ACTION_WATCH",T["watch,watch7_html5"]="LATENCY_ACTION_WATCH",T["watch,watch7ad"]="LATENCY_ACTION_WATCH",T["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",T.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",T.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",
T["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",T["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",T["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",T["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",T["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",T["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",T["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",T["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",
T["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",T.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",T.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",T.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",T),U={},Vt=(U.ad_allowed="adTypesAllowed",U.yt_abt="adBreakType",U.ad_cpn="adClientPlaybackNonce",U.ad_docid="adVideoId",U.yt_ad_an="adNetworks",U.ad_at="adType",U.aida="appInstallDataAgeMs",U.browse_id="browseId",U.p="httpProtocol",U.t="transportProtocol",
U.cs="commandSource",U.cpn="clientPlaybackNonce",U.ccs="creatorInfo.creatorCanaryState",U.ctop="creatorInfo.topEntityType",U.csn="clientScreenNonce",U.docid="videoId",U.GetHome_rid="requestIds",U.GetSearch_rid="requestIds",U.GetPlayer_rid="requestIds",U.GetWatchNext_rid="requestIds",U.GetBrowse_rid="requestIds",U.GetLibrary_rid="requestIds",U.is_continuation="isContinuation",U.is_nav="isNavigation",U.b_p="kabukiInfo.browseParams",U.is_prefetch="kabukiInfo.isPrefetch",U.is_secondary_nav="kabukiInfo.isSecondaryNav",
U.nav_type="kabukiInfo.navigationType",U.prev_browse_id="kabukiInfo.prevBrowseId",U.query_source="kabukiInfo.querySource",U.voz_type="kabukiInfo.vozType",U.yt_lt="loadType",U.mver="creatorInfo.measurementVersion",U.yt_ad="isMonetized",U.nr="webInfo.navigationReason",U.nrsu="navigationRequestedSameUrl",U.pnt="performanceNavigationTiming",U.prt="playbackRequiresTap",U.plt="playerInfo.playbackType",U.pis="playerInfo.playerInitializedState",U.paused="playerInfo.isPausedOnLoad",U.yt_pt="playerType",U.fmt=
"playerInfo.itag",U.yt_pl="watchInfo.isPlaylist",U.yt_pre="playerInfo.preloadType",U.yt_ad_pr="prerollAllowed",U.pa="previousAction",U.yt_red="isRedSubscriber",U.rce="mwebInfo.responseContentEncoding",U.rc="resourceInfo.resourceCache",U.scrh="screenHeight",U.scrw="screenWidth",U.st="serverTimeMs",U.ssdm="shellStartupDurationMs",U.br_trs="tvInfo.bedrockTriggerState",U.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",U.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",U.label="tvInfo.label",
U.is_mdx="tvInfo.isMdx",U.preloaded="tvInfo.isPreloaded",U.aac_type="tvInfo.authAccessCredentialType",U.upg_player_vis="playerInfo.visibilityState",U.query="unpluggedInfo.query",U.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",U.yt_vst="videoStreamType",U.vph="viewportHeight",U.vpw="viewportWidth",U.yt_vis="isVisible",U.rcl="mwebInfo.responseContentLength",U.GetSettings_rid="requestIds",U.GetTrending_rid="requestIds",U.GetMusicSearchSuggestions_rid="requestIds",U.REQUEST_ID="requestIds",U),
Wt="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Xt={},Yt=(Xt.ccs="CANARY_STATE_",Xt.mver="MEASUREMENT_VERSION_",Xt.pis="PLAYER_INITIALIZED_STATE_",Xt.yt_pt="LATENCY_PLAYER_",Xt.pa="LATENCY_ACTION_",Xt.ctop="TOP_ENTITY_TYPE_",
Xt.yt_vst="VIDEO_STREAM_TYPE_",Xt),Zt="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");function $t(a){return Ut[a]||"LATENCY_ACTION_UNKNOWN"}
function au(a,b,c){c=Lt(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Vt){c=Vt[a];0<=eb(Wt,c)&&(b=!!b);a in Yt&&"string"===typeof b&&(b=Yt[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return rt({},d)}0<=eb(Zt,a)||Wr(new Q("Unknown label logged with GEL CSI",a))}
;var V={LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_COMMERCE_TRANSACTION:184,LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,
LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,
LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_GENERIC_WEB_VIEW:183,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_DOWNLOADS_DATA_ACCESS:180,
LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,
LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,
LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_STREAM_TRANSFER:178,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,
LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_EDIT_AUDIO_GEN:182,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,
LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,
LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_PROMOTION_LIST:186,LATENCY_ACTION_CREATOR_PROMOTION_EDIT:185,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,
LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,
LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,
LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_EXPERIMENTAL_WATCH_UI:181,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,
LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,
LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_HOME:1,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_UNKNOWN:0};V[V.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";V[V.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";V[V.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";
V[V.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";V[V.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";V[V.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";V[V.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";V[V.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";V[V.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";V[V.LATENCY_ACTION_COMMERCE_TRANSACTION]="LATENCY_ACTION_COMMERCE_TRANSACTION";
V[V.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";V[V.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";V[V.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";V[V.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";V[V.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";
V[V.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";V[V.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";V[V.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";V[V.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";V[V.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";V[V.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";
V[V.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";V[V.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";V[V.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";V[V.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";V[V.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";V[V.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";
V[V.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";V[V.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";V[V.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";V[V.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";V[V.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";V[V.LATENCY_ACTION_GENERIC_WEB_VIEW]="LATENCY_ACTION_GENERIC_WEB_VIEW";V[V.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";
V[V.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";V[V.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";V[V.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";V[V.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS]="LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";V[V.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";V[V.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";V[V.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";
V[V.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";V[V.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";V[V.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";V[V.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";V[V.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";
V[V.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";V[V.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";V[V.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";V[V.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";V[V.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";V[V.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";V[V.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";
V[V.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";V[V.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";V[V.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";V[V.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";V[V.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";V[V.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";
V[V.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";V[V.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";V[V.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";V[V.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";V[V.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";V[V.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";V[V.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";
V[V.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";V[V.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";V[V.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";V[V.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";V[V.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";V[V.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";V[V.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";
V[V.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";V[V.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";V[V.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";V[V.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";V[V.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";V[V.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";V[V.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";V[V.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";
V[V.LATENCY_ACTION_EDIT_AUDIO_GEN]="LATENCY_ACTION_EDIT_AUDIO_GEN";V[V.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";V[V.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";V[V.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";V[V.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";V[V.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";
V[V.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";V[V.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";V[V.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";V[V.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";V[V.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";V[V.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";V[V.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
V[V.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";V[V.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";V[V.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";V[V.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";V[V.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";V[V.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";V[V.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";
V[V.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";V[V.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";V[V.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";V[V.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";V[V.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";V[V.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";V[V.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";V[V.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
V[V.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";V[V.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";V[V.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";V[V.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";V[V.LATENCY_ACTION_CREATOR_PROMOTION_LIST]="LATENCY_ACTION_CREATOR_PROMOTION_LIST";V[V.LATENCY_ACTION_CREATOR_PROMOTION_EDIT]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT";
V[V.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";V[V.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";V[V.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";V[V.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";V[V.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";
V[V.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";V[V.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";V[V.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";V[V.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";
V[V.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";V[V.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";V[V.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";V[V.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";V[V.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";V[V.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";
V[V.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
V[V.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";V[V.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";V[V.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";V[V.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
V[V.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";V[V.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";V[V.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI]="LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";V[V.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";V[V.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";
V[V.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";V[V.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";V[V.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";V[V.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";V[V.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";V[V.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";V[V.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";V[V.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";
V[V.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";V[V.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";V[V.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";V[V.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";V[V.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";V[V.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";V[V.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";
V[V.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";V[V.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";V[V.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";V[V.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";V[V.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";V[V.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";V[V.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";V[V.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";
V[V.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";V[V.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";V[V.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";V[V.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";V[V.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";V[V.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";V[V.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";V[V.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";V[V.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";
V[V.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";V[V.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";V[V.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var bu={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};bu[bu.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";bu[bu.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";bu[bu.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";
X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var cu={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};cu[cu.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
cu[cu.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";cu[cu.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";cu[cu.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";cu[cu.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";cu[cu.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";cu[cu.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";cu[cu.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var du={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};du[du.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";du[du.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";du[du.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";du[du.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var eu={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
eu[eu.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";eu[eu.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var fu={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};fu[fu.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";fu[fu.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";fu[fu.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
fu[fu.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";fu[fu.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";fu[fu.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var gu={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};gu[gu.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";gu[gu.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";gu[gu.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";gu[gu.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var hu={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};hu[hu.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";hu[hu.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";hu[hu.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var iu={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};iu[iu.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
iu[iu.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";iu[iu.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var ju="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var ku=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",ku);function lu(){this.i=0}
function mu(){lu.i||(lu.i=new lu);return lu.i}
lu.prototype.tick=function(a,b,c,d){nu(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new Mj,D(d,1,a),D(d,2,b),a=new Pj,Yd(a,Mj,5,Qj,d),vr(a,c)):rm("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
lu.prototype.info=function(a,b,c){var d=Object.keys(a).join("");nu(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,rm("latencyActionInfo",a,{cttAuthInfo:c}))};
lu.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));nu(this,"info_"+d+"_"+b)||(D(a,2,b),b={cttAuthInfo:c},c=new Pj,Yd(c,Ij,7,Qj,a),vr(c,b))};
lu.prototype.span=function(a,b,c){var d=Object.keys(a).join("");nu(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,rm("latencyActionSpan",a,{cttAuthInfo:c}))};
function nu(a,b){ku[b]=ku[b]||{count:0};var c=ku[b];c.count++;c.time=P();a.i||(a.i=cm(function(){var d=P(),e;for(e in ku)ku[e]&&6E4<d-ku[e].time&&delete ku[e];a&&(a.i=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Q("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Wr(c)),!0):!1}
;function ou(){var a=["ol"];Tt("").info.actionType="embed";a&&Bk("TIMING_AFT_KEYS",a);Bk("TIMING_ACTION","embed");if(M("web_csi_via_jspb")){a=L("TIMING_INFO",{});var b=new Ij;a=p(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=p(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new Lj;D(e,1,c);D(e,2,String(d));Kj(b,e);break;case "GetGuide_rid":e=new Lj;D(e,1,c);D(e,2,String(d));Kj(b,e);break;case "GetHome_rid":e=new Lj;D(e,1,c);D(e,2,String(d));Kj(b,e);
break;case "GetPlayer_rid":e=new Lj;D(e,1,c);D(e,2,String(d));Kj(b,e);break;case "GetSearch_rid":e=new Lj;D(e,1,c);D(e,2,String(d));Kj(b,e);break;case "GetSettings_rid":e=new Lj;D(e,1,c);D(e,2,String(d));Kj(b,e);break;case "GetTrending_rid":e=new Lj;D(e,1,c);D(e,2,String(d));Kj(b,e);break;case "GetWatchNext_rid":e=new Lj;D(e,1,c);D(e,2,String(d));Kj(b,e);break;case "yt_red":D(b,14,!!d);break;case "yt_ad":D(b,9,!!d)}}pu(b);b=new Ij;b=D(b,25,!0);b=D(b,1,V[$t(L("TIMING_ACTION"))]);(a=L("PREVIOUS_ACTION"))&&
D(b,13,V[$t(a)]);(a=L("CLIENT_PROTOCOL"))&&D(b,33,a);(a=L("CLIENT_TRANSPORT"))&&D(b,34,a);(a=ns())&&"UNDEFINED_CSN"!==a&&D(b,4,a);a=qu();1!==a&&-1!==a||D(b,6,!0);a=Jt();if(M("skip_setting_info_in_csi_data_object"))Kt();else{d=Nt();c=[];for(e=0;e<d.length;e++){var f=c,g=f.push;var h=d[e];var k=Ij;if(null==h||""==h)k=new k;else{h=JSON.parse(h);if(!Array.isArray(h))throw Error(void 0);ce=h=rd(h);k=new k(h);ce=null}g.call(f,k)}for(d=0;d<c.length&&"cold"!==Rd(c[d],3,"");d++);}D(b,3,"cold");ru(a);a=su();
if(0<a.length)for(a=p(a),c=a.next();!c.done;c=a.next())c=c.value,d=new Hj,D(d,1,c),$d(b,83,Hj,d);pu(b)}else{a=L("TIMING_INFO",{});for(b in a)a.hasOwnProperty(b)&&tu(b,a[b]);b={isNavigation:!0,actionType:$t(L("TIMING_ACTION"))};if(a=L("PREVIOUS_ACTION"))b.previousAction=$t(a);if(a=L("CLIENT_PROTOCOL"))b.httpProtocol=a;if(a=L("CLIENT_TRANSPORT"))b.transportProtocol=a;(a=ns())&&"UNDEFINED_CSN"!==a&&(b.clientScreenNonce=a);a=qu();if(1===a||-1===a)b.isVisible=!0;M("skip_setting_info_in_csi_data_object")?
Kt():Jt();b.loadType="cold";ru(Jt());a=su();if(0<a.length)for(b.resourceInfo=[],a=p(a),c=a.next();!c.done;c=a.next())b.resourceInfo.push({resourceCache:c.value});uu(b)}b=Jt();a=Mt();if(!(M("skip_setting_info_in_csi_data_object")&&"cold"!==Kt().loadType||"cold"!==b.yt_lt&&"cold"!==a.loadType)){c=Et();d=Lt();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var m in c)m in d||M("skip_invalid_ytcsi_ticks")&&"number"!==typeof c[m]||Z(m,c[m]);m={};c=!1;d=p(Object.keys(b));for(e=d.next();!e.done;e=d.next())e=e.value,
(e=au(e,b[e]))&&!Qt(Mt(),e)&&(rt(a,e),rt(m,e),c=!0);c&&uu(m)}z("ytglobal.timingready_",!0);m=L("TIMING_ACTION");B("ytglobal.timingready_")&&m&&"_start"in Et()&&Dt()&&Pt()}
function tu(a,b,c,d){null!==b&&(Jt(c)[a]=b,(a=au(a,b,c))&&uu(a,c,d))}
function uu(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=Tt(b||""),rt(c.info,a),M("skip_setting_info_in_csi_data_object")&&a.loadType&&(c=a.loadType,Kt(b).loadType=c),rt(Mt(b),a),c=Ot(b),b=It(b).cttAuthInfo,mu().info(a,c,b);else{c=new Ij;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":D(c,1,V[a[e]]);break;case "clientActionNonce":D(c,2,a[e]);break;case "clientScreenNonce":D(c,4,a[e]);break;case "loadType":D(c,3,a[e]);break;case "isPrewarmedLaunch":D(c,
92,a[e]);break;case "isFirstInstall":D(c,55,a[e]);break;case "networkType":D(c,5,bu[a[e]]);break;case "connectionType":D(c,26,X[a[e]]);break;case "detailedConnectionType":D(c,27,Y[a[e]]);break;case "isVisible":D(c,6,a[e]);break;case "playerType":D(c,7,cu[a[e]]);break;case "clientPlaybackNonce":D(c,8,a[e]);break;case "adClientPlaybackNonce":D(c,28,a[e]);break;case "previousCpn":D(c,77,a[e]);break;case "targetCpn":D(c,76,a[e]);break;case "isMonetized":D(c,9,a[e]);break;case "isPrerollAllowed":D(c,16,
a[e]);break;case "isPrerollShown":D(c,17,a[e]);break;case "adType":D(c,12,a[e]);break;case "adTypesAllowed":D(c,36,a[e]);break;case "adNetworks":D(c,37,a[e]);break;case "previousAction":D(c,13,V[a[e]]);break;case "isRedSubscriber":D(c,14,a[e]);break;case "serverTimeMs":D(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":D(c,20,a[e]);break;case "targetVideoId":D(c,78,a[e]);break;case "adBreakType":D(c,21,du[a[e]]);break;case "isNavigation":D(c,25,a[e]);break;case "viewportHeight":D(c,
29,a[e]);break;case "viewportWidth":D(c,30,a[e]);break;case "screenHeight":D(c,84,a[e]);break;case "screenWidth":D(c,85,a[e]);break;case "browseId":D(c,31,a[e]);break;case "isCacheHit":D(c,32,a[e]);break;case "httpProtocol":D(c,33,a[e]);break;case "transportProtocol":D(c,34,a[e]);break;case "searchQuery":D(c,41,a[e]);break;case "isContinuation":D(c,42,a[e]);break;case "availableProcessors":D(c,43,a[e]);break;case "sdk":D(c,44,a[e]);break;case "isLocalStream":D(c,45,a[e]);break;case "navigationRequestedSameUrl":D(c,
64,a[e]);break;case "shellStartupDurationMs":D(c,70,a[e]);break;case "appInstallDataAgeMs":D(c,73,a[e]);break;case "latencyActionError":D(c,71,eu[a[e]]);break;case "actionStep":D(c,79,a[e]);break;case "jsHeapSizeLimit":D(c,80,a[e]);break;case "totalJsHeapSize":D(c,81,a[e]);break;case "usedJsHeapSize":D(c,82,a[e]);break;case "sourceVideoDurationMs":D(c,90,a[e]);break;case "videoOutputFrames":D(c,93,a[e]);break;case "isResume":D(c,104,a[e]);break;case "adPrebufferedTimeSecs":D(c,39,a[e]);break;case "isLivestream":D(c,
47,a[e]);break;case "liveStreamMode":D(c,91,fu[a[e]]);break;case "adCpn2":D(c,48,a[e]);break;case "adDaiDriftMillis":D(c,49,a[e]);break;case "videoStreamType":D(c,53,gu[a[e]]);break;case "playbackRequiresTap":D(c,56,a[e]);break;case "performanceNavigationTiming":D(c,67,a[e]);break;case "transactionType":D(c,74,hu[a[e]]);break;case "playerRotationType":D(c,101,iu[a[e]]);break;case "allowedPreroll":D(c,10,a[e]);break;case "shownPreroll":D(c,11,a[e]);break;case "getHomeRequestId":D(c,57,a[e]);break;
case "getSearchRequestId":D(c,60,a[e]);break;case "getPlayerRequestId":D(c,61,a[e]);break;case "getWatchNextRequestId":D(c,62,a[e]);break;case "getBrowseRequestId":D(c,63,a[e]);break;case "getLibraryRequestId":D(c,66,a[e]);break;default:ju.includes(f)&&Kk(new Q("Codegen laipb translator asked to translate message field",""+f))}}catch(g){Kk(Error("Codegen laipb translator failed to set "+f))}}pu(c,b)}}
function pu(a,b){if(M("skip_setting_info_in_csi_data_object")){var c=Rd(a,3,"");c&&(Kt(b).loadType=c)}else Nt(b).push(de(a));Tt(b||"").jspbInfo.push(a);c=Ot(b);b=It(b).cttAuthInfo;mu().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;S.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),S.mark(d))}d=Tt(c||"");d.tick[a]=b||P();if(d.callback&&d.callback[a]){d=p(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=Lt(c);d.gelTicks&&(d.gelTicks[a]=!0);d=Et(c);e=b||P();d[a]=e;e=Ot(c);var f=It(c).cttAuthInfo;if("_start"===a){var g=mu();nu(g,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(f=new Gj,D(f,1,e),e=new Pj,Yd(e,Gj,6,Qj,f),vr(e,
b)):rm("latencyActionBaselined",{clientActionNonce:e},b))}else mu().tick(a,e,b,f);Pt(c);return d[a]}
function vu(){var a=Ot();requestAnimationFrame(function(){setTimeout(function(){a===Ot()&&Z("ol",void 0,void 0)},0)})}
function qu(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=up+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function ru(a){var b=Ft(),c=Ht(),d=L("CSI_START_TIMESTAMP_MILLIS",0);0<d&&!M("embeds_web_enable_csi_start_override_killswitch")&&(c=d);c&&(Z("srt",b.responseStart),1!==a.prerender&&Z("_start",c,void 0));a=Rt();0<a&&Z("fpt",a);a=Ft();a.isPerformanceNavigationTiming&&uu({performanceNavigationTiming:!0});Z("nreqs",a.requestStart,void 0);Z("nress",a.responseStart,void 0);Z("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(Z("nrs",a.redirectStart,void 0),Z("nre",a.redirectEnd,void 0));0<
a.domainLookupEnd-a.domainLookupStart&&(Z("ndnss",a.domainLookupStart,void 0),Z("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(Z("ntcps",a.connectStart,void 0),Z("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=Ht()&&0<a.connectEnd-a.secureConnectionStart&&(Z("nstcps",a.secureConnectionStart,void 0),Z("ntcpe",a.connectEnd,void 0));S&&"getEntriesByType"in S&&wu()}
function xu(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);ic()&&a.setAttribute("nonce",ic());return c?(a=S.getEntriesByName(c))&&a[0]&&(a=a[0],c=Ht(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function su(){var a=[];if(document.querySelector&&S&&S.getEntriesByName)for(var b in Ct)if(Ct.hasOwnProperty(b)){var c=Ct[b];xu(b,c)&&a.push(c)}return a}
function wu(){var a=window.location.protocol,b=S.getEntriesByType("resource");b=gb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=ib(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",Gt(b.startTime)),Z("wffe",Gt(b.responseEnd)))}
var yu=window;yu.ytcsi&&(yu.ytcsi.info=tu,yu.ytcsi.tick=Z);var zu="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" "),Au=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Bu(a,b,c,d){this.o=a;this.N=b;this.m=c;this.l=d;this.j=void 0;this.i=new Map;a.Ja||(a.Ja={});a.Ja=Object.assign({},qt,a.Ja)}
function Cu(a,b,c,d){if(void 0!==Bu.i){if(d=Bu.i,a=[a!==d.o,b!==d.N,c!==d.m,!1,!1,void 0!==d.j],a.some(function(e){return e}))throw new Q("InnerTubeTransportService is already initialized",a);
}else Bu.i=new Bu(a,b,c,d)}
function Du(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Qs:c;var d=Zs(b,a.o);if(!d)return Df(new Q("Error: No request builder found for command.",b));var e=d.o(b,void 0,c);return e?new yf(function(f){var g,h,k;return x(function(m){if(1==m.i){h="cors"===(null==(g=e.ta)?void 0:g.mode)?"cors":void 0;if(a.m.od){var q=e.config,t;q=null==q?void 0:null==(t=q.Pa)?void 0:t.sessionIndex;t=Ps({sessionIndex:q});k=Object.assign({},Eu(h),t);return m.u(2)}return v(m,Fu(e.config,
h),3)}2!=m.i&&(k=m.j);f(Gu(a,e,k));m.i=0})}):Df(new Q("Error: Failed to build request for command.",b))}
function Hu(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.fr)?0:d.ir)&&a.l){d=p(zu);for(var e=d.next();!e.done;e=d.next())e=e.value,a.l[e]&&a.l[e].handleResponse(b,c)}}
function Gu(a,b,c){var d,e,f,g,h,k,m,q,t,w,u,A,E,F,O,N,R,ca,W,ob,Wa,la,H,ka,ea,Be,Ce,wd;return x(function(na){switch(na.i){case 1:na.u(2);break;case 3:if((d=na.j)&&!d.isExpired())return na.return(Promise.resolve(d.i()));case 2:if(null==(e=b)?0:null==(f=e.ga)?0:f.context)for(g=p([]),h=g.next();!h.done;h=g.next())k=h.value,k.Zq(b.ga.context);if(null==(m=a.j)||!m.gr(b.input,b.ga)){na.u(4);break}return v(na,a.j.Uq(b.input,b.ga),5);case 5:return q=na.j,M("kevlar_process_local_innertube_responses_killswitch")||
Hu(a,q,b),na.return(q);case 4:return(u=null==(w=b.config)?void 0:w.Aa)&&a.i.has(u)&&M("web_memoize_inflight_requests")?t=a.i.get(u):(A=JSON.stringify(b.ga),O=null!=(F=null==(E=b.ta)?void 0:E.headers)?F:{},b.ta=Object.assign({},b.ta,{headers:Object.assign({},O,c)}),N=Object.assign({},b.ta),"POST"===b.ta.method&&(N=Object.assign({},N,{body:A})),(null==(R=b.config)?0:R.Zc)&&Z(b.config.Zc),ca=function(){return a.N.fetch(b.input,N,b.config)},t=ca(),u&&a.i.set(u,t)),v(na,t,6);
case 6:W=na.j;if(M("web_one_platform_error_handling")&&(null==(ob=W)?0:null==(Wa=ob.error)?0:Wa.details))for(la=W.error.details,H=p(la),ka=H.next();!ka.done;ka=H.next())ea=ka.value,(Be=ea["@type"])&&-1<Au.indexOf(Be)&&(delete ea["@type"],W=ea);u&&a.i.has(u)&&a.i.delete(u);(null==(Ce=b.config)?0:Ce.bd)&&Z(b.config.bd);if(W||null==(wd=a.j)||!wd.Oq(b.input,b.ga)){na.u(7);break}return v(na,a.j.Tq(b.input,b.ga),8);case 8:W=na.j;case 7:return Hu(a,W,b),na.return(W)}})}
function Fu(a,b){var c,d,e,f;return x(function(g){if(1==g.i){e=null==(c=a)?void 0:null==(d=c.Pa)?void 0:d.sessionIndex;var h=Ps({sessionIndex:e});if(!(h instanceof yf)){var k=new yf(cb);zf(k,2,h);h=k}return v(g,h,2)}f=g.j;return g.return(Promise.resolve(Object.assign({},Eu(b),f)))})}
function Eu(a){var b={"Content-Type":"application/json"};L("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=L("EOM_VISITOR_DATA"):L("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=L("VISITOR_DATA"));M("track_webfe_innertube_auth_mismatch")&&(b["X-Youtube-Bootstrap-Logged-In"]=L("LOGGED_IN",!1));"cors"!==a&&((a=L("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=L("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=L("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=
a),(a=L("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Iu=new at("INNERTUBE_TRANSPORT_TOKEN");var Ju=["share/get_web_player_share_panel"],Ku=["feedback"],Lu=["notification/modify_channel_preference"],Mu=["browse/edit_playlist"],Nu=["subscription/subscribe"],Ou=["subscription/unsubscribe"];function Pu(){}
r(Pu,nt);Pu.prototype.l=function(){return Nu};
Pu.prototype.i=function(a){return Bs(a,vk)||void 0};
Pu.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(Pu.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Qu(){}
r(Qu,nt);Qu.prototype.l=function(){return Ou};
Qu.prototype.i=function(a){return Bs(a,uk)||void 0};
Qu.prototype.j=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(Qu.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Ru(){}
r(Ru,nt);Ru.prototype.l=function(){return Ku};
Ru.prototype.i=function(a){return Bs(a,fj)||void 0};
Ru.prototype.j=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(Ru.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Su(){}
r(Su,nt);Su.prototype.l=function(){return Lu};
Su.prototype.i=function(a){return Bs(a,tk)||void 0};
Su.prototype.j=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Tu(){}
r(Tu,nt);Tu.prototype.l=function(){return Mu};
Tu.prototype.i=function(a){return Bs(a,sk)||void 0};
Tu.prototype.j=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Uu(){}
r(Uu,nt);Uu.prototype.l=function(){return Ju};
Uu.prototype.i=function(a){return Bs(a,Xj)};
Uu.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var ct=new at("NETWORK_SLI_TOKEN");function Vu(a){this.i=a}
Vu.prototype.fetch=function(a,b){var c=this,d,e;return x(function(f){c.i&&(d=mc(nc(5,Ac(a,"key")))||"/UNKNOWN_PATH",c.i.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Wr(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Wr(g)}))})};
Vu.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.i&&this.i.success():(this.i&&this.i.failure(),b=b.then(function(c){Wr(new Q("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
Vu[$s]=[new bt];var Wu=new at("NETWORK_MANAGER_TOKEN");var Xu;function Yu(a){Zn.call(this,1,arguments);this.csn=a}
r(Yu,Zn);var io=new $n("screen-created",Yu),Zu=[],av=$u,bv=0;function cv(a,b,c,d,e,f,g){function h(){Wr(new Q("newScreen() parent element does not have a VE - rootVe",b))}
var k=av(),m=new gs({veType:b,youtubeData:f,jspbYoutubeData:void 0});f={aa:k};e&&(f.cttAuthInfo=e);M("il_via_jspb")?(e=new vj,e.l(k),wj(e,m.getAsJspb()),c&&c.visualElement?(m=new xj,c.clientScreenNonce&&D(m,2,c.clientScreenNonce),yj(m,c.visualElement.getAsJspb()),g&&D(m,4,Rj[g]),G(e,xj,5,m)):c&&h(),d&&D(e,3,d),Ar(e,f,a)):(e={csn:k,pageVe:m.getAsJson()},c&&c.visualElement?(e.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(e.implicitGesture.gestureType=g)):
c&&h(),d&&(e.cloneCsn=d),a?qr("screenCreated",e,a,f):rm("screenCreated",e,f));fo(io,new Yu(k));return k}
function dv(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:ps(b)||void 0,
aa:b};d=p(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(rb(g)||!g.trackingParams&&!g.veType)&&Wr(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=new zj;h.l(b);Bj(h,c.getAsJspb());hb(e,function(k){k=k.getAsJspb();$d(h,3,tj,k)});
"UNDEFINED_CSN"===b?ev("visualElementAttached",f,void 0,h):Br(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:hb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"===b?ev("visualElementAttached",f,c):a?qr("visualElementAttached",c,a,f):rm("visualElementAttached",c,f)}
function $u(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return dd(b,3)}
function ev(a,b,c,d){Zu.push({payloadName:a,payload:c,sa:d,options:b});bv||(bv=jo())}
function ko(a){if(Zu){for(var b=p(Zu),c=b.next();!c.done;c=b.next())if(c=c.value,c.payload)if(M("il_via_jspb"))switch(c.sa.l(a.csn),c.payloadName){case "screenCreated":Ar(c.sa,c.options);break;case "visualElementAttached":Br(c.sa,c.options);break;case "visualElementShown":wr(c.sa,c.options);break;case "visualElementHidden":xr(c.sa,c.options);break;case "visualElementGestured":yr(c.sa,c.options);break;case "visualElementStateChanged":zr(c.sa,c.options);break;default:Wr(new Q("flushQueue unable to map payloadName to JSPB setter"))}else c.payload.csn=
a.csn,qr(c.payloadName,c.payload,null,c.options);Zu.length=0}bv=0}
;function fv(){this.j=new Set;this.i=new Set;this.l=new Map}
fv.prototype.C=function(){};
fv.prototype.clear=function(){this.j.clear();this.i.clear();this.l.clear()};
Na(fv);function gv(){this.o=[];this.I=[];this.i=[];this.m=[];this.s=[];this.j=new Set;this.v=new Map}
gv.prototype.C=function(a){this.client=a};
function hv(a,b,c){c=void 0===c?0:c;b.then(function(d){a.j.has(c)&&a.l&&a.l();var e=ns(c),f=ls(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&dv(a.client,e,f,[hs(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&dv(a.client,e,f,[hs(d.playerResponse.trackingParams)])}})}
function iv(a,b,c,d){d=void 0===d?0:d;if(a.j.has(d))a.o.push([b,c]);else{var e=ns(d);c=c||ls(d);e&&c&&dv(a.client,e,c,[b])}}
gv.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=ns(void 0===c?0:c)){a=this.client;var e=hs(d);d={cttAuthInfo:ps(c)||void 0,aa:c};M("il_via_jspb")?(b=new Cj,b.l(c),e=e.getAsJspb(),G(b,tj,2,e),D(b,4,Rj.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK),"UNDEFINED_CSN"===c?ev("visualElementGestured",d,void 0,b):yr(b,d,a)):(e={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},b&&(e.clientData=b),"UNDEFINED_CSN"===c?ev("visualElementGestured",
d,e):a?qr("visualElementGestured",e,a,d):rm("visualElementGestured",e,d));b=!0}else b=!1;else b=!1;return b};
function jv(a,b,c){c=void 0===c?{}:c;a.j.add(c.layer||0);a.l=function(){kv(a,b,c);var f=ls(c.layer);if(f){for(var g=p(a.o),h=g.next();!h.done;h=g.next())h=h.value,iv(a,h[0],h[1]||f,c.layer);f=p(a.I);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=ns(g);var m=k[0]||ls(g);if(h&&m){g=a.client;var q=k[1];k={cttAuthInfo:ps(h)||void 0,aa:h};M("il_via_jspb")?(q=new Fj,q.l(h),m=m.getAsJspb(),G(q,tj,2,m),"UNDEFINED_CSN"===h?ev("visualElementStateChanged",k,void 0,q):zr(q,k,g)):
(m={csn:h,ve:m.getAsJson(),clientData:q},"UNDEFINED_CSN"===h?ev("visualElementStateChanged",k,m):g?qr("visualElementStateChanged",m,g,k):rm("visualElementStateChanged",m,k))}}}};
ns(c.layer)||a.l();if(c.Qb)for(var d=p(c.Qb),e=d.next();!e.done;e=d.next())hv(a,e.value,c.layer);else Vr(Error("Delayed screen needs a data promise."))}
function kv(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.Uc?c.Uc:c.layer;var e=ns(d);d=ls(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=L("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=cv(a.client,b,f,c.Pb,c.cttAuthInfo,g,c.Rq)}catch(m){Yr(m,{dr:b,rootVe:d,parentVisualElement:void 0,Pq:e,Yq:f,Pb:c.Pb});Vr(m);return}qs(k,b,
c.layer,c.cttAuthInfo);if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=p(Object.values(fs));for(f=b.next();!f.done;f=b.next())if(ns(f.value)===e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:ps(e)||void 0,aa:e,Rb:g},M("il_via_jspb")?(h=new Dj,h.l(e),d=d.getAsJspb(),G(h,tj,2,d),D(h,4,g?16:8),"UNDEFINED_CSN"===e?ev("visualElementHidden",f,void 0,h):xr(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"===e?ev("visualElementHidden",f,d):b?qr("visualElementHidden",
d,b,f):rm("visualElementHidden",d,f)));a.i[a.i.length-1]&&!a.i[a.i.length-1].csn&&(a.i[a.i.length-1].csn=k||"");uu({clientScreenNonce:k});fv.getInstance().clear();d=ls(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e=k,k={cttAuthInfo:ps(e)||void 0,aa:e},M("il_via_jspb")?(b=new Ej,b.l(e),f=d.getAsJspb(),G(b,tj,2,f),D(b,4,1),"UNDEFINED_CSN"===e?ev("visualElementShown",k,void 0,b):wr(b,k)):(b={csn:e,ve:d.getAsJson(),eventType:1},"UNDEFINED_CSN"===
e?ev("visualElementShown",k,b):rm("visualElementShown",b,k)));a.j.delete(c.layer||0);a.l=void 0;e=p(a.v);for(k=e.next();!k.done;k=e.next())b=p(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&iv(a,k,d,c.layer);for(c=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){Vr(m)}}for(c=a.m.length=0;c<a.s.length;c++){e=a.s[c];try{e()}catch(m){Vr(m)}}}
;function lv(){var a,b;return x(function(c){if(1==c.i)return a=ht().resolve(Iu),a?v(c,Du(a),2):(Wr(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),c.return(void 0));if(b=c.j)return b.errorMetadata?(Wr(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),c.return(void 0)):c.return(b.Qq);Wr(Error("Network request to get Datasync IDs failed."));return c.return(void 0)})}
;var mv=y.caches,nv;function ov(a){var b=a.indexOf(":");return-1===b?{cc:a}:{cc:a.substring(0,b),datasyncId:a.substring(b+1)}}
function pv(){return x(function(a){if(void 0!==nv)return a.return(nv);nv=new Promise(function(b){var c;return x(function(d){switch(d.i){case 1:return ya(d,2),v(d,mv.open("test-only"),4);case 4:return v(d,mv.delete("test-only"),5);case 5:za(d,3);break;case 2:if(c=Aa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.i=0}})});
return a.return(nv)})}
function qv(a){var b,c,d,e,f,g,h;x(function(k){if(1==k.i)return v(k,pv(),2);if(3!=k.i){if(!k.j)return k.return(!1);b=[];return v(k,mv.keys(),3)}c=k.j;d=p(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=ov(f),h=g.datasyncId,!h||a.includes(h)||b.push(mv.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(q){return q})}))})}
function rv(){var a,b,c,d,e,f,g;return x(function(h){if(1==h.i)return v(h,pv(),2);if(3!=h.i){if(!h.j)return h.return(!1);a=vm("cache contains other");return v(h,mv.keys(),3)}b=h.j;c=p(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=ov(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function sv(){try{return!!self.localStorage}catch(a){return!1}}
;function tv(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function uv(a){if(sv()){var b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=tv(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function vv(){if(!sv())return!1;var a=vm(),b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next())if(c=tv(c.value),void 0!==c&&c!==a)return!0;return!1}
;function wv(){lv().then(function(a){a&&(Gn(a),qv(a),uv(a))})}
function xv(){var a=new Qo;Xh.S(function(){var b,c,d,e;return x(function(f){switch(f.i){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.u(2);break}b=vm("clear");if(b.startsWith("V")){var g=[b];Gn(g);qv(g);uv(g);return f.return()}c=vv();return v(f,rv(),3);case 3:return d=f.j,v(f,Hn(),4);case 4:if(e=f.j,!c&&!d&&!e)return f.return();case 2:a.M()?wv():a.m.add("publicytnetworkstatus-online",wv,!0,void 0,void 0),f.i=0}})})}
;function yv(a){a&&(a.dataset?a.dataset[zv("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Av(a,b){return a?a.dataset?a.dataset[zv(b)]:a.getAttribute("data-"+b):null}
var Bv={};function zv(a){return Bv[a]||(Bv[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Cv=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Dv=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Ev(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Cv,""),c=c.replace(Dv,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Fv(a,b,c)}
function Fv(a,b,c){c=void 0===c?null:c;var d=Gv(a),e=document.getElementById(d),f=e&&Av(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=yq(d,b),b=""+Ra(b),Hv[b]=f),g||(e=Iv(a,d,function(){Av(e,"loaded")||(yv(e),Bq(d),dl(Ya(Cq,d),0))},c)))}
function Iv(a,b,c,d){d=void 0===d?null:d;var e=kf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Gh(e,Jb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Jv(a){a=Gv(a);var b=document.getElementById(a);b&&(Cq(a),b.parentNode.removeChild(b))}
function Kv(a,b){a&&b&&(a=""+Ra(b),(a=Hv[a])&&Aq(a))}
function Gv(a){var b=document.createElement("a");fc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+kc(a)}
var Hv={};var Lv=[],Mv=!1;function Nv(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&Ds()){var a=L("PLAYER_VARS",{});if("1"!=tb(a)&&!Es(a)){var b=function(){Mv=!0;"google_ad_status"in window?Bk("DCLKSTAT",1):Bk("DCLKSTAT",2)};
try{Ev("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Lv.push(Xh.S(function(){if(!(Mv||"google_ad_status"in window)){try{Kv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Mv=!0;Bk("DCLKSTAT",3)}},5E3))}}}
function Ov(){var a=Number(L("DCLKSTAT",0));return isNaN(a)?0:a}
;function Pv(){this.state=1;this.i=null}
l=Pv.prototype;
l.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterScript)?d:null,f;d=null!=(f=a.interpreterUrl)?f:null;a.interpreterSafeScript&&(e=a.interpreterSafeScript,Db("From proto message. b/166824318"),e=e.privateDoNotAccessOrElseSafeScriptWrappedValue||"",e=(f=Ab())?f.createScript(e):e,e=(new Fb(e)).toString());a.interpreterSafeUrl&&(d=a.interpreterSafeUrl,Db("From proto message. b/166824318"),d=Jb(d.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());Sv(this,e,
d,a.program,b,c)}else Wr(Error("Cannot initialize botguard without program"))};
function Sv(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Ev(c,function(){window[g]?Tv(a,d,g,e):(a.state=3,Jv(c),Wr(new Q("Unable to load Botguard","from "+c)))},f)):b?(f=kf("SCRIPT"),f.textContent=b,f.nonce=ic(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Tv(a,d,g,e):(a.state=4,Wr(new Q("Unable to load Botguard from JS")))):Wr(new Q("Unable to load VM; no url or JS provided"))}
l.isInitialized=function(){return!!this.pb()};
function Tv(a,b,c,d){a.state=5;try{var e=new Ch({program:b,globalName:c,Xc:M("att_web_record_metrics")});e.ld.then(function(){a.state=6;d&&d(b)});
a.Ab(e)}catch(f){a.state=7,f instanceof Error&&Wr(f)}}
l.invoke=function(a){a=void 0===a?{}:a;var b=this.pb();if(b){var c={Ob:a};if(b.Ua)throw Error("Already disposed");a=Ah();var d;null!=(d=b.ra)&&d.j.i.Db("/client_streamz/bg/fsc",d.Aa);d=b.pd([c.Ob,c.nd]);null!=(b=b.ra)&&(a=Ah()-a,b.l.i.fb("/client_streamz/bg/fsl",a,b.Aa));b=d}else b=null;return b};
l.dispose=function(){this.Eb()};
l.Eb=function(){this.Ab(null);this.state=8};
l.pb=function(){return this.i};
l.Ab=function(a){pe(this.i);this.i=a};function Uv(){Pv.apply(this,arguments)}
r(Uv,Pv);Uv.prototype.Eb=function(){this.state=8};
Uv.prototype.pb=function(){return B("yt.abuse.playerAttLoader")};
Uv.prototype.Ab=function(a){pe(B("yt.abuse.playerAttLoader"));z("yt.abuse.playerAttLoader",a);a&&z("yt.abuse.playerAttLoaderRun",function(b){return a.snapshot(b)})};var Vv=new Uv;var Wv=new Pv;function Xv(){return M("use_player_abuse_bg_library")?Vv.isInitialized():Wv.isInitialized()}
function Yv(a){a=void 0===a?{}:a;M("use_player_abuse_bg_library")?(a=void 0===a?{}:a,a=Vv.invoke(a)):a=Wv.invoke(a);return a}
;function Zv(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?gm():d;this.m=c;this.l=d;this.j=new Bh;this.i=a;a={};c=p(this.i.entries());for(d=c.next();!d.done;a={Ba:a.Ba,La:a.La},d=c.next()){var e=p(d.value);d=e.next().value;e=e.next().value;a.La=d;a.Ba=e;d=function(f){return function(){f.Ba.sb();b.i[f.La].bb=!0;b.i.every(function(g){return!0===g.bb})&&b.j.resolve()}}(a);
e=cm(d,$v(this,a.Ba));this.i[a.La]=Object.assign({},a.Ba,{sb:d,Xa:e})}}
function aw(a){var b=Array.from(a.i.keys()).sort(function(d,e){return $v(a,a.i[e])-$v(a,a.i[d])});
b=p(b);for(var c=b.next();!c.done;c=b.next())c=a.i[c.value],void 0===c.Xa||c.bb||(a.l.ea(c.Xa),cm(c.sb,10))}
Zv.prototype.cancel=function(){for(var a=p(this.i),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.Xa||b.bb||this.l.ea(b.Xa),b.bb=!0;this.j.resolve()};
function $v(a,b){var c;return null!=(c=b.priority)?c:a.m}
;function bw(a){this.state=a;this.plugins=[];this.s=void 0}
bw.prototype.install=function(){this.plugins.push.apply(this.plugins,ia(Ja.apply(0,arguments)))};
bw.prototype.transition=function(a,b){var c=this,d=this.C.find(function(f){return f.from===c.state&&f.F===a});
if(d){this.l&&(aw(this.l),this.l=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(cw(this,e,this.s),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function cw(a,b,c){return function(){var d=Ja.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!=(m=null!=c?c:k.priority)?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!=(m=null!=c?c:k.priority)?m:0)});
gm();var g={};e=p(e);for(var h=e.next();!h.done;g={Ma:g.Ma},h=e.next())g.Ma=h.value,em(function(k){return function(){k.Ma.callback.apply(k.Ma,ia(d))}}(g));
f=f.map(function(k){var m;return{sb:function(){k.callback.apply(k,ia(d))},
priority:null!=(m=null!=c?c:k.priority)?m:0}});
f.length&&(a.l=new Zv(f))}}
fa.Object.defineProperties(bw.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function dw(a){bw.call(this,void 0===a?"document_active":a);var b=this;this.s=10;this.i=new Map;this.C=[{from:"document_active",F:"document_disposed_preventable",action:this.I},{from:"document_active",F:"document_disposed",action:this.m},{from:"document_disposed_preventable",F:"document_disposed",action:this.m},{from:"document_disposed_preventable",F:"flush_logs",action:this.o},{from:"document_disposed_preventable",F:"document_active",action:this.j},{from:"document_disposed",F:"flush_logs",action:this.o},
{from:"document_disposed",F:"document_active",action:this.j},{from:"document_disposed",F:"document_disposed",action:function(){}},
{from:"flush_logs",F:"document_active",action:this.j}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
r(dw,bw);dw.prototype.I=function(a,b){if(!this.i.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.i=new Map;this.transition("document_active");return}}this.i.set("document_disposed_preventable",!0);this.i.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
dw.prototype.m=function(a,b){this.i.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.i.set("document_disposed",!0),this.transition("flush_logs"))};
dw.prototype.o=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
dw.prototype.j=function(){this.i=new Map};function ew(a){bw.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.C=[{from:"document_visibility_unknown",F:"document_visible",action:this.j},{from:"document_visibility_unknown",F:"document_hidden",action:this.i},{from:"document_visibility_unknown",F:"document_foregrounded",action:this.o},{from:"document_visibility_unknown",F:"document_backgrounded",action:this.m},{from:"document_visible",F:"document_hidden",action:this.i},{from:"document_visible",F:"document_foregrounded",action:this.o},
{from:"document_visible",F:"document_visible",action:this.j},{from:"document_foregrounded",F:"document_visible",action:this.j},{from:"document_foregrounded",F:"document_hidden",action:this.i},{from:"document_foregrounded",F:"document_foregrounded",action:this.o},{from:"document_hidden",F:"document_visible",action:this.j},{from:"document_hidden",F:"document_backgrounded",action:this.m},{from:"document_hidden",F:"document_hidden",action:this.i},{from:"document_backgrounded",F:"document_hidden",action:this.i},
{from:"document_backgrounded",F:"document_backgrounded",action:this.m},{from:"document_backgrounded",F:"document_visible",action:this.j}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
r(ew,bw);ew.prototype.j=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
ew.prototype.i=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
ew.prototype.m=function(a,b){a(null==b?void 0:b.event)};
ew.prototype.o=function(a,b){a(null==b?void 0:b.event)};function fw(){this.i=new dw;this.j=new ew}
fw.prototype.install=function(){var a=Ja.apply(0,arguments);this.i.install.apply(this.i,ia(a));this.j.install.apply(this.j,ia(a))};function gw(){fw.call(this);var a={};this.install((a.document_disposed={callback:this.l},a));a={};this.install((a.flush_logs={callback:this.m},a))}
var hw;r(gw,fw);gw.prototype.m=function(){if(M("web_fp_via_jspb")){var a=new sj,b=ns();b&&D(a,1,b);b=new Pj;Yd(b,sj,380,Qj,a);vr(b);M("web_fp_via_jspb_and_json")&&rm("finalPayload",{csn:ns()})}else rm("finalPayload",{csn:ns()})};
gw.prototype.l=function(){$r(as)};function iw(){}
iw.getInstance=function(){var a=B("ytglobal.storage_");a||(a=new iw,z("ytglobal.storage_",a));return a};
iw.prototype.estimate=function(){var a,b,c;return x(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(jw()):d.return()})};
function jw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
z("ytglobal.storageClass_",iw);function pm(a,b){var c=this;this.handleError=a;this.i=b;this.j=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.j=!0});
this.l=Math.random()<=Ek("ytidb_transaction_ended_event_rate_limit",.02)}
pm.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.i("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.i("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.i("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":kw(this,b);break;case "TRANSACTION_ENDED":this.l&&this.i("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,
{hasWindowUnloaded:this.j}),this.i("idbTransactionAborted",a)}};
function kw(a,b){iw.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:lw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:lw(null==c?void 0:c.quota)});a.i("idbQuotaExceeded",c)})}
function lw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function mw(a,b,c){J.call(this);var d=this;c=c||L("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.targetOrigin="*";this.m=c;this.sessionId=null;this.channel="widget";this.G=!!a;this.v=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.G&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.targetOrigin=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.o&&(!d.s||0<=eb(d.s,f.func))&&d.o(f.func,f.args,e.origin)}}};
this.s=this.j=this.o=null;window.addEventListener("message",this.v)}
r(mw,J);mw.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Lk(d)}}};
mw.prototype.D=function(){window.removeEventListener("message",this.v);J.prototype.D.call(this)};function nw(){this.j=[];this.isReady=!1;this.l={};var a=this.i=new mw(!!L("WIDGET_ID_ENFORCE")),b=this.Wc.bind(this);a.o=b;a.s=null;this.i.channel="widget";if(a=L("WIDGET_ID"))this.i.sessionId=a}
l=nw.prototype;l.Wc=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.l[a]||"onReady"===a||(this.addEventListener(a,ow(this,a)),this.l[a]=!0)):this.Fb(a,b,c)};
l.Fb=function(){};
function ow(a,b){return function(c){return a.sendMessage(b,c)}}
l.addEventListener=function(){};
l.Jc=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.nb());this.sendMessage("onReady");fb(this.j,this.kc,this);this.j=[]};
l.nb=function(){return null};
function pw(a,b){a.sendMessage("infoDelivery",b)}
l.kc=function(a){this.isReady?this.i.sendMessage(a):this.j.push(a)};
l.sendMessage=function(a,b){this.kc({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.i=null};var qw={},rw=(qw["api.invalidparam"]=2,qw.auth=150,qw["drm.auth"]=150,qw["heartbeat.net"]=150,qw["heartbeat.servererror"]=150,qw["heartbeat.stop"]=150,qw["html5.unsupportedads"]=5,qw["fmt.noneavailable"]=5,qw["fmt.decode"]=5,qw["fmt.unplayable"]=5,qw["html5.missingapi"]=5,qw["html5.unsupportedlive"]=5,qw["drm.unavailable"]=5,qw["mrm.blocked"]=151,qw);var sw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function tw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function uw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=p(sw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function vw(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function ww(a){nw.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.hd.bind(this));this.addEventListener("onVolumeChange",this.jd.bind(this));this.addEventListener("onApiChange",this.cd.bind(this));this.addEventListener("onPlaybackQualityChange",this.ed.bind(this));this.addEventListener("onPlaybackRateChange",this.fd.bind(this));this.addEventListener("onStateChange",this.gd.bind(this));this.addEventListener("onWebglSettingsChanged",
this.kd.bind(this))}
r(ww,nw);l=ww.prototype;
l.Fb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&tw(a)){var d=b;if(Qa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=uw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=uw(e);break;case "loadPlaylist":case "cuePlaylist":e=vw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);tw(a)&&pw(this,this.nb())}};
l.onReady=function(){var a=this.Jc.bind(this);this.i.j=a;a=this.api.getVideoData();if(!a.isPlayable){a=a.errorCode;var b=void 0===b?5:b;this.sendMessage("onError",(a?rw[a]||b:b).toString())}};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.nb=function(){if(!this.api)return null;var a=this.api.getApiInterface();lb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.gd=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());pw(this,a)};
l.ed=function(a){pw(this,{playbackQuality:a})};
l.fd=function(a){pw(this,{playbackRate:a})};
l.cd=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.jd=function(){pw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.hd=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());pw(this,a)};
l.kd=function(){var a={sphericalProperties:this.api.getSphericalProperties()};pw(this,a)};
l.dispose=function(){nw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function xw(a){J.call(this);this.j={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.ec,this)}
r(xw,J);l=xw.prototype;l.start=function(){this.started||this.i()||(this.started=!0,this.connection.va("RECEIVING"))};
l.va=function(a,b){this.started&&!this.i()&&this.connection.va(a,b)};
l.ec=function(a,b,c){if(this.started&&!this.i()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=yw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=zw(a,c))&&this.va(a,c))}}};
l.addListener=function(a){if(!(a in this.j)){var b=this.dd.bind(this,a);this.j[a]=b;this.addEventListener(a,b)}};
l.dd=function(a,b){this.started&&!this.i()&&this.connection.va(a,this.mb(a,b))};
l.mb=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.j&&(this.removeEventListener(a,this.j[a]),delete this.j[a])};
l.D=function(){var a=this.connection;a.i()||vi(a.j,"command",this.ec,this);this.connection=null;for(var b in this.j)this.j.hasOwnProperty(b)&&this.removeListener(b);J.prototype.D.call(this)};function Aw(a,b){xw.call(this,b);this.api=a;this.start()}
r(Aw,xw);Aw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Aw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function yw(a,b){switch(a){case "loadVideoById":return a=uw(b),[a];case "cueVideoById":return a=uw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=vw(b),[a];case "cuePlaylist":return a=vw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function zw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Aw.prototype.mb=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return xw.prototype.mb.call(this,a,b)};
Aw.prototype.D=function(){xw.prototype.D.call(this);delete this.api};function Bw(a){a=void 0===a?!1:a;J.call(this);this.j=new K(a);re(this,this.j)}
Za(Bw,J);Bw.prototype.subscribe=function(a,b,c){return this.i()?0:this.j.subscribe(a,b,c)};
Bw.prototype.m=function(a,b){this.i()||this.j.oa.apply(this.j,arguments)};function Cw(a,b,c){Bw.call(this);this.l=a;this.destination=b;this.id=c}
r(Cw,Bw);Cw.prototype.va=function(a,b){this.i()||this.l.va(this.destination,this.id,a,b)};
Cw.prototype.D=function(){this.destination=this.l=null;Bw.prototype.D.call(this)};function Dw(a,b,c){J.call(this);this.destination=a;this.origin=c;this.j=lq(window,"message",this.l.bind(this));this.connection=new Cw(this,a,b);re(this,this.connection)}
r(Dw,J);Dw.prototype.va=function(a,b,c,d){this.i()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(JSON.stringify(a),this.origin))};
Dw.prototype.l=function(a){if(!this.i()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.i()||c.m("command",b.command,b.data,a.origin)}}}};
Dw.prototype.D=function(){mq(this.j);this.destination=null;J.prototype.D.call(this)};function Ew(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||vb(b);this.assets=a.assets||{};this.attrs=a.attrs||vb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Ew.prototype.clone=function(){var a=new Ew,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Oa(c)?a[b]=vb(c):a[b]=c}return a};var Fw=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Gw(a){a=a||"";if(window.spf){var b=a.match(Fw);spf.style.load(a,b?b[1]:"",void 0)}else Hw(a)}
function Hw(a){var b=Iw(a),c=document.getElementById(b),d=c&&Av(c,"loaded");d||c&&!d||(c=Jw(a,b,function(){Av(c,"loaded")||(yv(c),Bq(b),dl(Ya(Cq,b),0))}))}
function Jw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Jb(a);gc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Iw(a){var b=kf("A");Db("This URL is never added to the DOM");fc(b,new Ob(a,Pb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+kc(a)}
;function Kw(){J.call(this);this.j=[]}
r(Kw,J);Kw.prototype.D=function(){for(;this.j.length;){var a=this.j.pop();a.target.removeEventListener(a.name,a.callback,void 0)}J.prototype.D.call(this)};function Lw(){Kw.apply(this,arguments)}
r(Lw,Kw);function Mw(a,b,c,d){J.call(this);var e=this;this.v=b;this.webPlayerContextConfig=d;this.ca=!1;this.api={};this.V=this.s=null;this.L=new K;this.j={};this.R=this.W=this.elementId=this.qa=this.config=null;this.P=!1;this.m=this.G=null;this.ka={};this.Na=["onReady"];this.lastError=null;this.Da=NaN;this.K={};this.Oa=new Lw(this);this.T=0;this.l=this.o=a;re(this,this.L);Nw(this);Ow(this);re(this,this.Oa);c?this.T=dl(function(){e.loadNewVideoConfig(c)},0):d&&(Pw(this),Qw(this))}
r(Mw,J);l=Mw.prototype;l.getId=function(){return this.v};
l.loadNewVideoConfig=function(a){if(!this.i()){this.T&&(el(this.T),this.T=0);var b=a||{};b instanceof Ew||(b=new Ew(b));this.config=b;this.setConfig(a);Qw(this);this.isReady()&&Rw(this)}};
function Pw(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.v,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.v:a.config.attrs.id=a.v);var c;(null==(c=a.l)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.qa=a;this.config=Sw(a);Pw(this);if(!this.W){var b;this.W=Tw(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.l&&(this.l.style.width=Qh(Number(b)||b)),(a=a.height)&&this.l&&(this.l.style.height=Qh(Number(a)||a))};
function Rw(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Uw(a){var b=!0,c=Vw(a);c&&a.config&&(a=Ww(a),b=Av(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function Qw(a){if(!a.i()&&!a.P){var b=Uw(a);if(b&&"html5"===(Vw(a)?"html5":null))a.R="html5",a.isReady()||Xw(a);else if(Yw(a),a.R="html5",b&&a.m&&a.o)a.o.appendChild(a.m),Xw(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=Zw(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?Sw(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig);Xw(a)};
a.P=!0;b?a.G():(Ev(Ww(a),a.G),(b=$w(a))&&Gw(b),ax(a)&&!c&&z("yt.player.Application.create",null))}}}
function Vw(a){var b=jf(a.elementId);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.elementId));return b}
function Xw(a){if(!a.i()){var b=Vw(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.P=!1;if(!Zw(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}bx(a)}else a.Da=dl(function(){Xw(a)},50)}}
function bx(a){Nw(a);a.ca=!0;var b=Vw(a);if(b){a.s=cx(a,b,"addEventListener");a.V=cx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=cx(a,b,f))}}for(var g in a.j)a.j.hasOwnProperty(g)&&a.s&&a.s(g,a.j[g]);Rw(a);a.W&&a.W(a.api);a.L.oa("onReady",a.api)}
function cx(a,b,c){var d=b[c];return function(){var e=Ja.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Wr(f))}}}
function Nw(a){a.ca=!1;if(a.V)for(var b in a.j)a.j.hasOwnProperty(b)&&a.V(b,a.j[b]);for(var c in a.K)a.K.hasOwnProperty(c)&&el(Number(c));a.K={};a.s=null;a.V=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.qa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.ca};
function Ow(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Bq("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Bq("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=Tw(this,b);d&&(0<=eb(this.Na,a)||this.j[a]||(b=dx(this,a),this.s&&this.s(a,b)),this.L.subscribe(a,d),"onReady"===a&&this.isReady()&&dl(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.i()||(b=Tw(this,b))&&vi(this.L,a,b)};
function Tw(a,b){var c=b;if("string"===typeof b){if(a.ka[b])return a.ka[b];c=function(){var d=Ja.apply(0,arguments),e=B(b);if(e)try{e.apply(y,d)}catch(f){Vr(f)}};
a.ka[b]=c}return c?c:null}
function dx(a,b){var c="ytPlayer"+b+a.v;a.j[b]=c;y[c]=function(d){var e=dl(function(){if(!a.i()){try{a.L.oa(b,null!=d?d:void 0)}catch(h){Wr(new Q("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.v,data:d}))}var f=a.K,g=String(e);g in f&&delete f[g]}},0);
sb(a.K,String(e))};
return c}
l.getPlayerType=function(){return this.R||(Vw(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function Yw(a){a.cancel();Nw(a);a.R=null;a.config&&(a.config.loaded=!1);var b=Vw(a);b&&(Uw(a)||!ax(a)?a.m=b:(b&&b.destroy&&b.destroy(),a.m=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.G&&Kv(Ww(this),this.G);el(this.Da);this.P=!1};
l.D=function(){Yw(this);if(this.m&&this.config&&this.m.destroy)try{this.m.destroy()}catch(b){Vr(b)}this.ka=null;for(var a in this.j)this.j.hasOwnProperty(a)&&(y[this.j[a]]=null);this.qa=this.config=this.api=null;delete this.o;delete this.l;J.prototype.D.call(this)};
function ax(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Ww(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function $w(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Zw(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Rk(c||"","&")[b]}
function Sw(a){for(var b={},c=p(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?vb(e):e}return b}
;var ex={},fx="player_uid_"+(1E9*Math.random()>>>0);function gx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?jf(c):c;var e=fx+"_"+Ra(c),f=ex[e];if(f&&d)return hx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Mw(c,e,a,b);ex[e]=f;Bq("player-added",f.api);se(f,function(){delete ex[f.getId()]});
return f.api}
function hx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var ix=null,jx=null,kx=null;function lx(){mx()}
function nx(){mx()}
function mx(){var a=ix.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function ox(){ix&&ix.sendAbandonmentPing&&ix.sendAbandonmentPing();L("PL_ATT")&&(M("use_player_abuse_bg_library")?Vv.dispose():Wv.dispose());for(var a=Xh,b=0,c=Lv.length;b<c;b++)a.ea(Lv[b]);Lv.length=0;Jv("//static.doubleclick.net/instream/ad_status.js");Mv=!1;Bk("DCLKSTAT",0);qe(kx,jx);ix&&(ix.removeEventListener("onVideoDataChange",lx),ix.destroy())}
;function px(a,b,c){a="ST-"+kc(a).toString(36);b=b?tc(b):"";c=c||5;Ds()&&ul(a,b,c)}
;function qx(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=L("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=L("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=oc(window.location.href);g&&f.push(g);g=oc(d);if(0<=eb(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),fc(f,d),d=f.href),d&&(d=pc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:ns()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
px(d,b,h)}else px(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=vc(a,k)+m;var t=void 0===t?Ph:t;a:{t=void 0===t?Ph:t;for(k=0;k<t.length;++k)if(m=t[k],m instanceof Nh&&m.isValid(a)){t=new Ob(a,Pb);break a}t=void 0}t=t||Sb;if(t instanceof Ob)var w=Qb(t);else{b:if(Fh){try{w=new URL(t)}catch(u){w="https:";break b}w=w.protocol}else c:{w=document.createElement("a");try{w.href=t}catch(u){w=void 0;
break c}w=w.protocol;w=":"===w||""===w?"https:":w}w="javascript:"!==w?t:void 0}void 0!==w&&(c.href=w)}return!0}
;z("yt.setConfig",Bk);z("yt.config.set",Bk);z("yt.setMsg",ss);z("yt.msgs.set",ss);z("yt.logging.errors.log",Vr);
z("writeEmbed",function(){var a=L("PLAYER_CONFIG");if(!a){var b=L("PLAYER_VARS");b&&(a={args:b})}Ns(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=L("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=Wk(window.location.href),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));ou();c=L("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;
if(!c.serializedForcedExperimentIds){var d=Wk(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}ix=gx(a,c);ix.addEventListener("onVideoDataChange",lx);ix.addEventListener("onReady",nx);a=L("POST_MESSAGE_ID","player");L("ENABLE_JS_API")?kx=new ww(ix):L("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(jx=new Dw(window.parent,a,b),kx=new Aw(ix,jx.connection));Nv();M("ytidb_create_logger_embed_killswitch")||om();a={};hw||(hw=new gw);hw.install((a.flush_logs=
{callback:function(){ar()}},a));
M("embeds_web_enable_new_nwl")?Xo():ep();M("ytidb_clear_embedded_player")&&Xh.S(function(){var e;if(!Xu){var f=ht(),g={xb:Wu,oc:Vu};f.providers.set(g.xb,g);g={Nb:{feedbackEndpoint:jt(Ru),modifyChannelNotificationPreferenceEndpoint:jt(Su),playlistEditEndpoint:jt(Tu),subscribeEndpoint:jt(Pu),unsubscribeEndpoint:jt(Qu),webPlayerShareEntityServiceEndpoint:jt(Uu)}};var h=Ws.getInstance(),k={};h&&(k.client_location=h);if(void 0===m){Os.i||(Os.i=new Os);var m=Os.i}void 0===e&&(e=f.resolve(Wu));Cu(g,e,m,
k);m={xb:Iu,pc:Bu.i};f.providers.set(m.xb,m);Xu=f.resolve(Iu)}xv()})});
var rx=Jk(function(){vu();var a=yl.getInstance(),b=Bl(119),c=1<window.devicePixelRatio;if(document.body&&ii(document.body,"exp-invert-logo"))if(c&&!ii(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!ii(d,"inverted-hdpi")){var e=gi(d);hi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&ii(document.body,"inverted-hdpi")&&ji();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Cl(b)||0;d=c?d|67108864:d&-67108865;0==d?delete xl[b]:(c=d.toString(16),
xl[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.i;d=[];for(var f in xl)d.push(f+"="+encodeURIComponent(String(xl[f])));ul(b,d.join("&"),63072E3,a.j,c)}gv.i||(gv.i=new gv);a=gv.i;f=16623;var g=void 0===g?{}:g;Object.values(ts).includes(f)||(Wr(new Q("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.i.push({rootVe:f,key:g.key||""});a.o=[];a.I=[];g.Qb?jv(a,f,g):kv(a,f,g)}),sx=Jk(function(a){M("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?
ox():a.persisted||ox()}),tx=Jk(ox);
window.addEventListener?(window.addEventListener("load",rx),window.addEventListener("pagehide",sx)):window.attachEvent&&(window.attachEvent("onload",rx),window.attachEvent("onunload",tx));z("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Xv);z("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Yv);z("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||Ov);z("yt.player.exports.navigate",B("yt.player.exports.navigate")||qx);
z("yt.util.activity.init",B("yt.util.activity.init")||qq);z("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||tq);z("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||rq);}).call(this);
