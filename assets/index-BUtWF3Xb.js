(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function wl(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Kd={exports:{}},fl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv;function NS(){if(Qv)return fl;Qv=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return fl.Fragment=t,fl.jsx=n,fl.jsxs=n,fl}var $v;function LS(){return $v||($v=1,Kd.exports=NS()),Kd.exports}var Z=LS(),Qd={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv;function OS(){if(Jv)return de;Jv=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function y(O,tt,vt){this.props=O,this.context=tt,this.refs=T,this.updater=vt||b}y.prototype.isReactComponent={},y.prototype.setState=function(O,tt){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,tt,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=y.prototype;function F(O,tt,vt){this.props=O,this.context=tt,this.refs=T,this.updater=vt||b}var N=F.prototype=new x;N.constructor=F,M(N,y.prototype),N.isPureReactComponent=!0;var U=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function D(O,tt,vt,pt,Y,dt){return vt=dt.ref,{$$typeof:a,type:O,key:tt,ref:vt!==void 0?vt:null,props:dt}}function z(O,tt){return D(O.type,tt,void 0,void 0,void 0,O.props)}function w(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function E(O){var tt={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(vt){return tt[vt]})}var L=/\/+/g;function k(O,tt){return typeof O=="object"&&O!==null&&O.key!=null?E(""+O.key):tt.toString(36)}function W(){}function et(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(W,W):(O.status="pending",O.then(function(tt){O.status==="pending"&&(O.status="fulfilled",O.value=tt)},function(tt){O.status==="pending"&&(O.status="rejected",O.reason=tt)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function ut(O,tt,vt,pt,Y){var dt=typeof O;(dt==="undefined"||dt==="boolean")&&(O=null);var _t=!1;if(O===null)_t=!0;else switch(dt){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(O.$$typeof){case a:case t:_t=!0;break;case g:return _t=O._init,ut(_t(O._payload),tt,vt,pt,Y)}}if(_t)return Y=Y(O),_t=pt===""?"."+k(O,0):pt,U(Y)?(vt="",_t!=null&&(vt=_t.replace(L,"$&/")+"/"),ut(Y,tt,vt,"",function(jt){return jt})):Y!=null&&(w(Y)&&(Y=z(Y,vt+(Y.key==null||O&&O.key===Y.key?"":(""+Y.key).replace(L,"$&/")+"/")+_t)),tt.push(Y)),1;_t=0;var Et=pt===""?".":pt+":";if(U(O))for(var At=0;At<O.length;At++)pt=O[At],dt=Et+k(pt,At),_t+=ut(pt,tt,vt,dt,Y);else if(At=_(O),typeof At=="function")for(O=At.call(O),At=0;!(pt=O.next()).done;)pt=pt.value,dt=Et+k(pt,At++),_t+=ut(pt,tt,vt,dt,Y);else if(dt==="object"){if(typeof O.then=="function")return ut(et(O),tt,vt,pt,Y);throw tt=String(O),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return _t}function I(O,tt,vt){if(O==null)return O;var pt=[],Y=0;return ut(O,pt,"","",function(dt){return tt.call(vt,dt,Y++)}),pt}function q(O){if(O._status===-1){var tt=O._result;tt=tt(),tt.then(function(vt){(O._status===0||O._status===-1)&&(O._status=1,O._result=vt)},function(vt){(O._status===0||O._status===-1)&&(O._status=2,O._result=vt)}),O._status===-1&&(O._status=0,O._result=tt)}if(O._status===1)return O._result.default;throw O._result}var X=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function yt(){}return de.Children={map:I,forEach:function(O,tt,vt){I(O,function(){tt.apply(this,arguments)},vt)},count:function(O){var tt=0;return I(O,function(){tt++}),tt},toArray:function(O){return I(O,function(tt){return tt})||[]},only:function(O){if(!w(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},de.Component=y,de.Fragment=n,de.Profiler=o,de.PureComponent=F,de.StrictMode=r,de.Suspense=h,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,de.__COMPILER_RUNTIME={__proto__:null,c:function(O){return G.H.useMemoCache(O)}},de.cache=function(O){return function(){return O.apply(null,arguments)}},de.cloneElement=function(O,tt,vt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var pt=M({},O.props),Y=O.key,dt=void 0;if(tt!=null)for(_t in tt.ref!==void 0&&(dt=void 0),tt.key!==void 0&&(Y=""+tt.key),tt)!P.call(tt,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&tt.ref===void 0||(pt[_t]=tt[_t]);var _t=arguments.length-2;if(_t===1)pt.children=vt;else if(1<_t){for(var Et=Array(_t),At=0;At<_t;At++)Et[At]=arguments[At+2];pt.children=Et}return D(O.type,Y,void 0,void 0,dt,pt)},de.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},de.createElement=function(O,tt,vt){var pt,Y={},dt=null;if(tt!=null)for(pt in tt.key!==void 0&&(dt=""+tt.key),tt)P.call(tt,pt)&&pt!=="key"&&pt!=="__self"&&pt!=="__source"&&(Y[pt]=tt[pt]);var _t=arguments.length-2;if(_t===1)Y.children=vt;else if(1<_t){for(var Et=Array(_t),At=0;At<_t;At++)Et[At]=arguments[At+2];Y.children=Et}if(O&&O.defaultProps)for(pt in _t=O.defaultProps,_t)Y[pt]===void 0&&(Y[pt]=_t[pt]);return D(O,dt,void 0,void 0,null,Y)},de.createRef=function(){return{current:null}},de.forwardRef=function(O){return{$$typeof:d,render:O}},de.isValidElement=w,de.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:q}},de.memo=function(O,tt){return{$$typeof:p,type:O,compare:tt===void 0?null:tt}},de.startTransition=function(O){var tt=G.T,vt={};G.T=vt;try{var pt=O(),Y=G.S;Y!==null&&Y(vt,pt),typeof pt=="object"&&pt!==null&&typeof pt.then=="function"&&pt.then(yt,X)}catch(dt){X(dt)}finally{G.T=tt}},de.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},de.use=function(O){return G.H.use(O)},de.useActionState=function(O,tt,vt){return G.H.useActionState(O,tt,vt)},de.useCallback=function(O,tt){return G.H.useCallback(O,tt)},de.useContext=function(O){return G.H.useContext(O)},de.useDebugValue=function(){},de.useDeferredValue=function(O,tt){return G.H.useDeferredValue(O,tt)},de.useEffect=function(O,tt,vt){var pt=G.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return pt.useEffect(O,tt)},de.useId=function(){return G.H.useId()},de.useImperativeHandle=function(O,tt,vt){return G.H.useImperativeHandle(O,tt,vt)},de.useInsertionEffect=function(O,tt){return G.H.useInsertionEffect(O,tt)},de.useLayoutEffect=function(O,tt){return G.H.useLayoutEffect(O,tt)},de.useMemo=function(O,tt){return G.H.useMemo(O,tt)},de.useOptimistic=function(O,tt){return G.H.useOptimistic(O,tt)},de.useReducer=function(O,tt,vt){return G.H.useReducer(O,tt,vt)},de.useRef=function(O){return G.H.useRef(O)},de.useState=function(O){return G.H.useState(O)},de.useSyncExternalStore=function(O,tt,vt){return G.H.useSyncExternalStore(O,tt,vt)},de.useTransition=function(){return G.H.useTransition()},de.version="19.1.0",de}var t_;function qp(){return t_||(t_=1,Qd.exports=OS()),Qd.exports}var st=qp();const Hn=wl(st);var $d={exports:{}},dl={},Jd={exports:{}},th={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function PS(){return e_||(e_=1,function(a){function t(I,q){var X=I.length;I.push(q);t:for(;0<X;){var yt=X-1>>>1,O=I[yt];if(0<o(O,q))I[yt]=q,I[X]=O,X=yt;else break t}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var q=I[0],X=I.pop();if(X!==q){I[0]=X;t:for(var yt=0,O=I.length,tt=O>>>1;yt<tt;){var vt=2*(yt+1)-1,pt=I[vt],Y=vt+1,dt=I[Y];if(0>o(pt,X))Y<O&&0>o(dt,pt)?(I[yt]=dt,I[Y]=X,yt=Y):(I[yt]=pt,I[vt]=X,yt=vt);else if(Y<O&&0>o(dt,X))I[yt]=dt,I[Y]=X,yt=Y;else break t}}return q}function o(I,q){var X=I.sortIndex-q.sortIndex;return X!==0?X:I.id-q.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();a.unstable_now=function(){return u.now()-d}}var h=[],p=[],g=1,v=null,_=3,b=!1,M=!1,T=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var q=n(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=I)r(p),q.sortIndex=q.expirationTime,t(h,q);else break;q=n(p)}}function G(I){if(T=!1,U(I),!M)if(n(h)!==null)M=!0,P||(P=!0,k());else{var q=n(p);q!==null&&ut(G,q.startTime-I)}}var P=!1,D=-1,z=5,w=-1;function E(){return y?!0:!(a.unstable_now()-w<z)}function L(){if(y=!1,P){var I=a.unstable_now();w=I;var q=!0;try{t:{M=!1,T&&(T=!1,F(D),D=-1),b=!0;var X=_;try{e:{for(U(I),v=n(h);v!==null&&!(v.expirationTime>I&&E());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,_=v.priorityLevel;var O=yt(v.expirationTime<=I);if(I=a.unstable_now(),typeof O=="function"){v.callback=O,U(I),q=!0;break e}v===n(h)&&r(h),U(I)}else r(h);v=n(h)}if(v!==null)q=!0;else{var tt=n(p);tt!==null&&ut(G,tt.startTime-I),q=!1}}break t}finally{v=null,_=X,b=!1}q=void 0}}finally{q?k():P=!1}}}var k;if(typeof N=="function")k=function(){N(L)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,et=W.port2;W.port1.onmessage=L,k=function(){et.postMessage(null)}}else k=function(){x(L,0)};function ut(I,q){D=x(function(){I(a.unstable_now())},q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(I){I.callback=null},a.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<I?Math.floor(1e3/I):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(I){switch(_){case 1:case 2:case 3:var q=3;break;default:q=_}var X=_;_=q;try{return I()}finally{_=X}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(I,q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var X=_;_=I;try{return q()}finally{_=X}},a.unstable_scheduleCallback=function(I,q,X){var yt=a.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?yt+X:yt):X=yt,I){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=X+O,I={id:g++,callback:q,priorityLevel:I,startTime:X,expirationTime:O,sortIndex:-1},X>yt?(I.sortIndex=X,t(p,I),n(h)===null&&I===n(p)&&(T?(F(D),D=-1):T=!0,ut(G,X-yt))):(I.sortIndex=O,t(h,I),M||b||(M=!0,P||(P=!0,k()))),I},a.unstable_shouldYield=E,a.unstable_wrapCallback=function(I){var q=_;return function(){var X=_;_=q;try{return I.apply(this,arguments)}finally{_=X}}}}(th)),th}var n_;function BS(){return n_||(n_=1,Jd.exports=PS()),Jd.exports}var eh={exports:{}},Bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function zS(){if(i_)return Bn;i_=1;var a=qp();function t(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(h,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:h,containerInfo:p,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Bn.createPortal=function(h,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(h,p,null,g)},Bn.flushSync=function(h){var p=u.T,g=r.p;try{if(u.T=null,r.p=2,h)return h()}finally{u.T=p,r.p=g,r.d.f()}},Bn.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(h,p))},Bn.prefetchDNS=function(h){typeof h=="string"&&r.d.D(h)},Bn.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:b}):g==="script"&&r.d.X(h,{crossOrigin:v,integrity:_,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Bn.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(h,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(h)},Bn.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(h,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Bn.preloadModule=function(h,p){if(typeof h=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(h)},Bn.requestFormReset=function(h){r.d.r(h)},Bn.unstable_batchedUpdates=function(h,p){return h(p)},Bn.useFormState=function(h,p,g){return u.H.useFormState(h,p,g)},Bn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Bn.version="19.1.0",Bn}var a_;function P1(){if(a_)return eh.exports;a_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),eh.exports=zS(),eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function IS(){if(r_)return dl;r_=1;var a=BS(),t=qp(),n=P1();function r(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(r(188))}function h(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(r(188));return i!==e?null:e}for(var s=e,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return d(f),e;if(m===l)return d(f),i;m=m.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=m;else{for(var S=!1,A=f.child;A;){if(A===s){S=!0,s=f,l=m;break}if(A===l){S=!0,l=f,s=m;break}A=A.sibling}if(!S){for(A=m.child;A;){if(A===s){S=!0,s=m,l=f;break}if(A===l){S=!0,l=m,s=f;break}A=A.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),F=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),E=Symbol.for("react.memo_cache_sentinel"),L=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=L&&e[L]||e["@@iterator"],typeof e=="function"?e:null)}var W=Symbol.for("react.client.reference");function et(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===W?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case y:return"Profiler";case T:return"StrictMode";case G:return"Suspense";case P:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case N:return(e.displayName||"Context")+".Provider";case F:return(e._context.displayName||"Context")+".Consumer";case U:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D:return i=e.displayName||null,i!==null?i:et(e.type)||"Memo";case z:i=e._payload,e=e._init;try{return et(e(i))}catch{}}return null}var ut=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},yt=[],O=-1;function tt(e){return{current:e}}function vt(e){0>O||(e.current=yt[O],yt[O]=null,O--)}function pt(e,i){O++,yt[O]=e.current,e.current=i}var Y=tt(null),dt=tt(null),_t=tt(null),Et=tt(null);function At(e,i){switch(pt(_t,i),pt(dt,e),pt(Y,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Tv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Tv(i),e=Av(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(Y),pt(Y,e)}function jt(){vt(Y),vt(dt),vt(_t)}function kt(e){e.memoizedState!==null&&pt(Et,e);var i=Y.current,s=Av(i,e.type);i!==s&&(pt(dt,e),pt(Y,s))}function ye(e){dt.current===e&&(vt(Y),vt(dt)),Et.current===e&&(vt(Et),sl._currentValue=X)}var pe=Object.prototype.hasOwnProperty,Ht=a.unstable_scheduleCallback,H=a.unstable_cancelCallback,te=a.unstable_shouldYield,oe=a.unstable_requestPaint,$t=a.unstable_now,Zt=a.unstable_getCurrentPriorityLevel,Fe=a.unstable_ImmediatePriority,Wt=a.unstable_UserBlockingPriority,B=a.unstable_NormalPriority,R=a.unstable_LowPriority,at=a.unstable_IdlePriority,bt=a.log,Tt=a.unstable_setDisableYieldValue,gt=null,Bt=null;function Dt(e){if(typeof bt=="function"&&Tt(e),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(gt,e)}catch{}}var Xt=Math.clz32?Math.clz32:Gt,ae=Math.log,Ct=Math.LN2;function Gt(e){return e>>>=0,e===0?32:31-(ae(e)/Ct|0)|0}var Jt=256,ne=4194304;function zt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ge(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var f=0,m=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~m,l!==0?f=zt(l):(S&=A,S!==0?f=zt(S):s||(s=A&~e,s!==0&&(f=zt(s))))):(A=l&~m,A!==0?f=zt(A):S!==0?f=zt(S):s||(s=l&~e,s!==0&&(f=zt(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function le(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function He(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function K(){var e=Jt;return Jt<<=1,(Jt&4194048)===0&&(Jt=256),e}function Ot(){var e=ne;return ne<<=1,(ne&62914560)===0&&(ne=4194304),e}function ht(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function St(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function It(e,i,s,l,f,m){var S=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,V=e.expirationTimes,it=e.hiddenUpdates;for(s=S&~s;0<s;){var mt=31-Xt(s),Mt=1<<mt;A[mt]=0,V[mt]=-1;var rt=it[mt];if(rt!==null)for(it[mt]=null,mt=0;mt<rt.length;mt++){var ot=rt[mt];ot!==null&&(ot.lane&=-536870913)}s&=~Mt}l!==0&&Pt(e,l,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(S&~i))}function Pt(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Xt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function ce(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-Xt(s),f=1<<l;f&i|e[l]&i&&(e[l]|=i),s&=~f}}function Ze(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ln(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function De(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:jv(e.type))}function Jn(e,i){var s=q.p;try{return q.p=e,i()}finally{q.p=s}}var Sn=Math.random().toString(36).slice(2),gn="__reactFiber$"+Sn,wn="__reactProps$"+Sn,jn="__reactContainer$"+Sn,xr="__reactEvents$"+Sn,Ol="__reactListeners$"+Sn,Pl="__reactHandles$"+Sn,yr="__reactResources$"+Sn,La="__reactMarker$"+Sn;function Oa(e){delete e[gn],delete e[wn],delete e[xr],delete e[Ol],delete e[Pl]}function qi(e){var i=e[gn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[jn]||s[gn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=Dv(e);e!==null;){if(s=e[gn])return s;e=Dv(e)}return i}e=s,s=e.parentNode}return null}function Yi(e){if(e=e[gn]||e[jn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function br(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(r(33))}function Pa(e){var i=e[yr];return i||(i=e[yr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function cn(e){e[La]=!0}var Bl=new Set,zl={};function Zi(e,i){C(e,i),C(e+"Capture",i)}function C(e,i){for(zl[e]=i,e=0;e<i.length;e++)Bl.add(i[e])}var $=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},ft={};function J(e){return pe.call(ft,e)?!0:pe.call(lt,e)?!1:$.test(e)?ft[e]=!0:(lt[e]=!0,!1)}function Rt(e,i,s){if(J(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Ut(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Nt(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}var Ft,re;function Kt(e){if(Ft===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ft=i&&i[1]||"",re=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ft+e+re}var Yt=!1;function be(e,i){if(!e||Yt)return"";Yt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(ot){var rt=ot}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(ot){rt=ot}e.call(Mt.prototype)}}else{try{throw Error()}catch(ot){rt=ot}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(ot){if(ot&&rt&&typeof ot.stack=="string")return[ot.stack,rt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),S=m[0],A=m[1];if(S&&A){var V=S.split(`
`),it=A.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<it.length&&!it[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===it.length)for(l=V.length-1,f=it.length-1;1<=l&&0<=f&&V[l]!==it[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==it[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==it[f]){var mt=`
`+V[l].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=l&&0<=f);break}}}finally{Yt=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Kt(s):""}function Ue(e){switch(e.tag){case 26:case 27:case 5:return Kt(e.type);case 16:return Kt("Lazy");case 13:return Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 15:return be(e.type,!1);case 11:return be(e.type.render,!1);case 1:return be(e.type,!0);case 31:return Kt("Activity");default:return""}}function Je(e){try{var i="";do i+=Ue(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Te(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ae(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qt(e){var i=Ae(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){l=""+S,m.call(this,S)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(S){l=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function en(e){e._valueTracker||(e._valueTracker=Qt(e))}function Ce(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=Ae(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function Ln(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ba=/[\n"\\]/g;function Ke(e){return e.replace(Ba,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ki(e,i,s,l,f,m,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Te(i)):e.value!==""+Te(i)&&(e.value=""+Te(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?On(e,S,Te(i)):s!=null?On(e,S,Te(s)):l!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Te(A):e.removeAttribute("name")}function je(e,i,s,l,f,m,S,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+Te(s):"",i=i!=null?""+Te(i):s,A||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function On(e,i,s){i==="number"&&Ln(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function vn(e,i,s,l){if(e=e.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=i.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&l&&(e[s].defaultSelected=!0)}else{for(s=""+Te(s),i=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function Mn(e,i,s){if(i!=null&&(i=""+Te(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+Te(s):""}function Cn(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(ut(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Te(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function Bi(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Qi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tm(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||Qi.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Am(e,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Tm(e,f,l)}else for(var m in i)i.hasOwnProperty(m)&&Tm(e,m,i[m])}function Yu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Il(e){return Uy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Zu=null;function Ku(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ns=null,is=null;function Rm(e){var i=Yi(e);if(i&&(e=i.stateNode)){var s=e[wn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ki(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ke(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var f=l[wn]||null;if(!f)throw Error(r(90));Ki(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&Ce(l)}break t;case"textarea":Mn(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&vn(e,!!s.multiple,i,!1)}}}var Qu=!1;function wm(e,i,s){if(Qu)return e(i,s);Qu=!0;try{var l=e(i);return l}finally{if(Qu=!1,(ns!==null||is!==null)&&(Mc(),ns&&(i=ns,e=is,is=ns=null,Rm(i),e)))for(i=0;i<e.length;i++)Rm(e[i])}}function xo(e,i){var s=e.stateNode;if(s===null)return null;var l=s[wn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$u=!1;if($i)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){$u=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{$u=!1}var za=null,Ju=null,Fl=null;function Cm(){if(Fl)return Fl;var e,i=Ju,s=i.length,l,f="value"in za?za.value:za.textContent,m=f.length;for(e=0;e<s&&i[e]===f[e];e++);var S=s-e;for(l=1;l<=S&&i[s-l]===f[m-l];l++);return Fl=f.slice(e,1<l?1-l:void 0)}function Hl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Gl(){return!0}function Dm(){return!1}function Wn(e){function i(s,l,f,m,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Gl:Dm,this.isPropagationStopped=Dm,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),i}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=Wn(Sr),bo=g({},Sr,{view:0,detail:0}),Ny=Wn(bo),tf,ef,So,kl=g({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==So&&(So&&e.type==="mousemove"?(tf=e.screenX-So.screenX,ef=e.screenY-So.screenY):ef=tf=0,So=e),tf)},movementY:function(e){return"movementY"in e?e.movementY:ef}}),Um=Wn(kl),Ly=g({},kl,{dataTransfer:0}),Oy=Wn(Ly),Py=g({},bo,{relatedTarget:0}),nf=Wn(Py),By=g({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),zy=Wn(By),Iy=g({},Sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fy=Wn(Iy),Hy=g({},Sr,{data:0}),Nm=Wn(Hy),Gy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ky={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xy(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=ky[e])?!!i[e]:!1}function af(){return Xy}var jy=g({},bo,{key:function(e){if(e.key){var i=Gy[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(e){return e.type==="keypress"?Hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wy=Wn(jy),qy=g({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lm=Wn(qy),Yy=g({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),Zy=Wn(Yy),Ky=g({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qy=Wn(Ky),$y=g({},kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jy=Wn($y),tb=g({},Sr,{newState:0,oldState:0}),eb=Wn(tb),nb=[9,13,27,32],rf=$i&&"CompositionEvent"in window,Mo=null;$i&&"documentMode"in document&&(Mo=document.documentMode);var ib=$i&&"TextEvent"in window&&!Mo,Om=$i&&(!rf||Mo&&8<Mo&&11>=Mo),Pm=" ",Bm=!1;function zm(e,i){switch(e){case"keyup":return nb.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Im(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var as=!1;function ab(e,i){switch(e){case"compositionend":return Im(i);case"keypress":return i.which!==32?null:(Bm=!0,Pm);case"textInput":return e=i.data,e===Pm&&Bm?null:e;default:return null}}function rb(e,i){if(as)return e==="compositionend"||!rf&&zm(e,i)?(e=Cm(),Fl=Ju=za=null,as=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Om&&i.locale!=="ko"?null:i.data;default:return null}}var sb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fm(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!sb[e.type]:i==="textarea"}function Hm(e,i,s,l){ns?is?is.push(l):is=[l]:ns=l,i=Cc(i,"onChange"),0<i.length&&(s=new Vl("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var Eo=null,To=null;function ob(e){yv(e,0)}function Xl(e){var i=br(e);if(Ce(i))return e}function Gm(e,i){if(e==="change")return i}var Vm=!1;if($i){var sf;if($i){var of="oninput"in document;if(!of){var km=document.createElement("div");km.setAttribute("oninput","return;"),of=typeof km.oninput=="function"}sf=of}else sf=!1;Vm=sf&&(!document.documentMode||9<document.documentMode)}function Xm(){Eo&&(Eo.detachEvent("onpropertychange",jm),To=Eo=null)}function jm(e){if(e.propertyName==="value"&&Xl(To)){var i=[];Hm(i,To,e,Ku(e)),wm(ob,i)}}function lb(e,i,s){e==="focusin"?(Xm(),Eo=i,To=s,Eo.attachEvent("onpropertychange",jm)):e==="focusout"&&Xm()}function cb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xl(To)}function ub(e,i){if(e==="click")return Xl(i)}function fb(e,i){if(e==="input"||e==="change")return Xl(i)}function db(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ti=typeof Object.is=="function"?Object.is:db;function Ao(e,i){if(ti(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!pe.call(i,f)||!ti(e[f],i[f]))return!1}return!0}function Wm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qm(e,i){var s=Wm(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Wm(s)}}function Ym(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Ym(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Zm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Ln(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Ln(e.document)}return i}function lf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var hb=$i&&"documentMode"in document&&11>=document.documentMode,rs=null,cf=null,Ro=null,uf=!1;function Km(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;uf||rs==null||rs!==Ln(l)||(l=rs,"selectionStart"in l&&lf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ro&&Ao(Ro,l)||(Ro=l,l=Cc(cf,"onSelect"),0<l.length&&(i=new Vl("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=rs)))}function Mr(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var ss={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionrun:Mr("Transition","TransitionRun"),transitionstart:Mr("Transition","TransitionStart"),transitioncancel:Mr("Transition","TransitionCancel"),transitionend:Mr("Transition","TransitionEnd")},ff={},Qm={};$i&&(Qm=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function Er(e){if(ff[e])return ff[e];if(!ss[e])return e;var i=ss[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Qm)return ff[e]=i[s];return e}var $m=Er("animationend"),Jm=Er("animationiteration"),t0=Er("animationstart"),pb=Er("transitionrun"),mb=Er("transitionstart"),gb=Er("transitioncancel"),e0=Er("transitionend"),n0=new Map,df="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");df.push("scrollEnd");function Ei(e,i){n0.set(e,i),Zi(i,[e])}var i0=new WeakMap;function fi(e,i){if(typeof e=="object"&&e!==null){var s=i0.get(e);return s!==void 0?s:(i={value:e,source:i,stack:Je(i)},i0.set(e,i),i)}return{value:e,source:i,stack:Je(i)}}var di=[],os=0,hf=0;function jl(){for(var e=os,i=hf=os=0;i<e;){var s=di[i];di[i++]=null;var l=di[i];di[i++]=null;var f=di[i];di[i++]=null;var m=di[i];if(di[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}m!==0&&a0(s,f,m)}}function Wl(e,i,s,l){di[os++]=e,di[os++]=i,di[os++]=s,di[os++]=l,hf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function pf(e,i,s,l){return Wl(e,i,s,l),ql(e)}function ls(e,i){return Wl(e,null,null,i),ql(e)}function a0(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=e.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&i!==null&&(f=31-Xt(s),e=m.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function ql(e){if(50<$o)throw $o=0,yd=null,Error(r(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var cs={};function vb(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,i,s,l){return new vb(e,i,s,l)}function mf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ji(e,i){var s=e.alternate;return s===null?(s=ei(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function r0(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Yl(e,i,s,l,f,m){var S=0;if(l=e,typeof e=="function")mf(e)&&(S=1);else if(typeof e=="string")S=xS(e,s,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=ei(31,s,i,f),e.elementType=w,e.lanes=m,e;case M:return Tr(s.children,f,m,i);case T:S=8,f|=24;break;case y:return e=ei(12,s,i,f|2),e.elementType=y,e.lanes=m,e;case G:return e=ei(13,s,i,f),e.elementType=G,e.lanes=m,e;case P:return e=ei(19,s,i,f),e.elementType=P,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case N:S=10;break t;case F:S=9;break t;case U:S=11;break t;case D:S=14;break t;case z:S=16,l=null;break t}S=29,s=Error(r(130,e===null?"null":typeof e,"")),l=null}return i=ei(S,s,i,f),i.elementType=e,i.type=l,i.lanes=m,i}function Tr(e,i,s,l){return e=ei(7,e,l,i),e.lanes=s,e}function gf(e,i,s){return e=ei(6,e,null,i),e.lanes=s,e}function vf(e,i,s){return i=ei(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var us=[],fs=0,Zl=null,Kl=0,hi=[],pi=0,Ar=null,ta=1,ea="";function Rr(e,i){us[fs++]=Kl,us[fs++]=Zl,Zl=e,Kl=i}function s0(e,i,s){hi[pi++]=ta,hi[pi++]=ea,hi[pi++]=Ar,Ar=e;var l=ta;e=ea;var f=32-Xt(l)-1;l&=~(1<<f),s+=1;var m=32-Xt(i)+f;if(30<m){var S=f-f%5;m=(l&(1<<S)-1).toString(32),l>>=S,f-=S,ta=1<<32-Xt(i)+f|s<<f|l,ea=m+e}else ta=1<<m|s<<f|l,ea=e}function _f(e){e.return!==null&&(Rr(e,1),s0(e,1,0))}function xf(e){for(;e===Zl;)Zl=us[--fs],us[fs]=null,Kl=us[--fs],us[fs]=null;for(;e===Ar;)Ar=hi[--pi],hi[pi]=null,ea=hi[--pi],hi[pi]=null,ta=hi[--pi],hi[pi]=null}var Vn=null,nn=null,Pe=!1,wr=null,zi=!1,yf=Error(r(519));function Cr(e){var i=Error(r(418,""));throw Do(fi(i,e)),yf}function o0(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[gn]=e,i[wn]=l,s){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(s=0;s<tl.length;s++)Me(tl[s],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Me("invalid",i),je(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),en(i);break;case"select":Me("invalid",i);break;case"textarea":Me("invalid",i),Cn(i,l.value,l.defaultValue,l.children),en(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Ev(i.textContent,s)?(l.popover!=null&&(Me("beforetoggle",i),Me("toggle",i)),l.onScroll!=null&&Me("scroll",i),l.onScrollEnd!=null&&Me("scrollend",i),l.onClick!=null&&(i.onclick=Dc),i=!0):i=!1,i||Cr(e)}function l0(e){for(Vn=e.return;Vn;)switch(Vn.tag){case 5:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Vn=Vn.return}}function wo(e){if(e!==Vn)return!1;if(!Pe)return l0(e),Pe=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Bd(e.type,e.memoizedProps)),s=!s),s&&nn&&Cr(e),l0(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){nn=Ai(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}nn=null}}else i===27?(i=nn,Ja(e.type)?(e=Hd,Hd=null,nn=e):nn=i):nn=Vn?Ai(e.stateNode.nextSibling):null;return!0}function Co(){nn=Vn=null,Pe=!1}function c0(){var e=wr;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),wr=null),e}function Do(e){wr===null?wr=[e]:wr.push(e)}var bf=tt(null),Dr=null,na=null;function Ia(e,i,s){pt(bf,i._currentValue),i._currentValue=s}function ia(e){e._currentValue=bf.current,vt(bf)}function Sf(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function Mf(e,i,s,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var S=f.child;m=m.firstContext;t:for(;m!==null;){var A=m;m=f;for(var V=0;V<i.length;V++)if(A.context===i[V]){m.lanes|=s,A=m.alternate,A!==null&&(A.lanes|=s),Sf(m.return,s,e),l||(S=null);break t}m=A.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(r(341));S.lanes|=s,m=S.alternate,m!==null&&(m.lanes|=s),Sf(S,s,e),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===e){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function Uo(e,i,s,l){e=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var A=f.type;ti(f.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(f===Et.current){if(S=f.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(sl):e=[sl])}f=f.return}e!==null&&Mf(i,e,s,l),i.flags|=262144}function Ql(e){for(e=e.firstContext;e!==null;){if(!ti(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ur(e){Dr=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Pn(e){return u0(Dr,e)}function $l(e,i){return Dr===null&&Ur(e),u0(e,i)}function u0(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},na===null){if(e===null)throw Error(r(308));na=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else na=na.next=i;return s}var _b=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},xb=a.unstable_scheduleCallback,yb=a.unstable_NormalPriority,_n={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ef(){return{controller:new _b,data:new Map,refCount:0}}function No(e){e.refCount--,e.refCount===0&&xb(yb,function(){e.controller.abort()})}var Lo=null,Tf=0,ds=0,hs=null;function bb(e,i){if(Lo===null){var s=Lo=[];Tf=0,ds=Rd(),hs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Tf++,i.then(f0,f0),i}function f0(){if(--Tf===0&&Lo!==null){hs!==null&&(hs.status="fulfilled");var e=Lo;Lo=null,ds=0,hs=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Sb(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var d0=I.S;I.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&bb(e,i),d0!==null&&d0(e,i)};var Nr=tt(null);function Af(){var e=Nr.current;return e!==null?e:Qe.pooledCache}function Jl(e,i){i===null?pt(Nr,Nr.current):pt(Nr,i.pool)}function h0(){var e=Af();return e===null?null:{parent:_n._currentValue,pool:e}}var Oo=Error(r(460)),p0=Error(r(474)),tc=Error(r(542)),Rf={then:function(){}};function m0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ec(){}function g0(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(ec,ec),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,_0(e),e;default:if(typeof i.status=="string")i.then(ec,ec);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,_0(e),e}throw Po=i,Oo}}var Po=null;function v0(){if(Po===null)throw Error(r(459));var e=Po;return Po=null,e}function _0(e){if(e===Oo||e===tc)throw Error(r(483))}var Fa=!1;function wf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ze&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=ql(e),a0(e,null,s),i}return Wl(e,l,i,s),ql(e)}function Bo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,ce(e,s)}}function Df(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=S:m=m.next=S,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Uf=!1;function zo(){if(Uf){var e=hs;if(e!==null)throw e}}function Io(e,i,s,l){Uf=!1;var f=e.updateQueue;Fa=!1;var m=f.firstBaseUpdate,S=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var V=A,it=V.next;V.next=null,S===null?m=it:S.next=it,S=V;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,A=mt.lastBaseUpdate,A!==S&&(A===null?mt.firstBaseUpdate=it:A.next=it,mt.lastBaseUpdate=V))}if(m!==null){var Mt=f.baseState;S=0,mt=it=V=null,A=m;do{var rt=A.lane&-536870913,ot=rt!==A.lane;if(ot?(we&rt)===rt:(l&rt)===rt){rt!==0&&rt===ds&&(Uf=!0),mt!==null&&(mt=mt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var se=e,ee=A;rt=i;var ke=s;switch(ee.tag){case 1:if(se=ee.payload,typeof se=="function"){Mt=se.call(ke,Mt,rt);break t}Mt=se;break t;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ee.payload,rt=typeof se=="function"?se.call(ke,Mt,rt):se,rt==null)break t;Mt=g({},Mt,rt);break t;case 2:Fa=!0}}rt=A.callback,rt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=f.callbacks,ot===null?f.callbacks=[rt]:ot.push(rt))}else ot={lane:rt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},mt===null?(it=mt=ot,V=Mt):mt=mt.next=ot,S|=rt;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;ot=A,A=ot.next,ot.next=null,f.lastBaseUpdate=ot,f.shared.pending=null}}while(!0);mt===null&&(V=Mt),f.baseState=V,f.firstBaseUpdate=it,f.lastBaseUpdate=mt,m===null&&(f.shared.lanes=0),Za|=S,e.lanes=S,e.memoizedState=Mt}}function x0(e,i){if(typeof e!="function")throw Error(r(191,e));e.call(i)}function y0(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)x0(s[e],i)}var ps=tt(null),nc=tt(0);function b0(e,i){e=ua,pt(nc,e),pt(ps,i),ua=e|i.baseLanes}function Nf(){pt(nc,ua),pt(ps,ps.current)}function Lf(){ua=nc.current,vt(ps),vt(nc)}var Va=0,ve=null,Ge=null,un=null,ic=!1,ms=!1,Lr=!1,ac=0,Fo=0,gs=null,Mb=0;function rn(){throw Error(r(321))}function Of(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!ti(e[s],i[s]))return!1;return!0}function Pf(e,i,s,l,f,m){return Va=m,ve=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=e===null||e.memoizedState===null?ag:rg,Lr=!1,m=s(l,f),Lr=!1,ms&&(m=M0(i,s,l,f)),S0(e),m}function S0(e){I.H=uc;var i=Ge!==null&&Ge.next!==null;if(Va=0,un=Ge=ve=null,ic=!1,Fo=0,gs=null,i)throw Error(r(300));e===null||En||(e=e.dependencies,e!==null&&Ql(e)&&(En=!0))}function M0(e,i,s,l){ve=e;var f=0;do{if(ms&&(gs=null),Fo=0,ms=!1,25<=f)throw Error(r(301));if(f+=1,un=Ge=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=Db,m=i(s,l)}while(ms);return m}function Eb(){var e=I.H,i=e.useState()[0];return i=typeof i.then=="function"?Ho(i):i,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ve.flags|=1024),i}function Bf(){var e=ac!==0;return ac=0,e}function zf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function If(e){if(ic){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}ic=!1}Va=0,un=Ge=ve=null,ms=!1,Fo=ac=0,gs=null}function qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ve.memoizedState=un=e:un=un.next=e,un}function fn(){if(Ge===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var i=un===null?ve.memoizedState:un.next;if(i!==null)un=i,Ge=e;else{if(e===null)throw ve.alternate===null?Error(r(467)):Error(r(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},un===null?ve.memoizedState=un=e:un=un.next=e}return un}function Ff(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ho(e){var i=Fo;return Fo+=1,gs===null&&(gs=[]),e=g0(gs,e,i),i=ve,(un===null?i.memoizedState:un.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?ag:rg),e}function rc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ho(e);if(e.$$typeof===N)return Pn(e)}throw Error(r(438,String(e)))}function Hf(e){var i=null,s=ve.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ve.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Ff(),ve.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=E;return i.index++,s}function aa(e,i){return typeof i=="function"?i(e):i}function sc(e){var i=fn();return Gf(i,Ge,e)}function Gf(e,i,s){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=e.baseQueue,m=l.pending;if(m!==null){if(f!==null){var S=f.next;f.next=m.next,m.next=S}i.baseQueue=f=m,l.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{i=f.next;var A=S=null,V=null,it=i,mt=!1;do{var Mt=it.lane&-536870913;if(Mt!==it.lane?(we&Mt)===Mt:(Va&Mt)===Mt){var rt=it.revertLane;if(rt===0)V!==null&&(V=V.next={lane:0,revertLane:0,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),Mt===ds&&(mt=!0);else if((Va&rt)===rt){it=it.next,rt===ds&&(mt=!0);continue}else Mt={lane:0,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},V===null?(A=V=Mt,S=m):V=V.next=Mt,ve.lanes|=rt,Za|=rt;Mt=it.action,Lr&&s(m,Mt),m=it.hasEagerState?it.eagerState:s(m,Mt)}else rt={lane:Mt,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},V===null?(A=V=rt,S=m):V=V.next=rt,ve.lanes|=Mt,Za|=Mt;it=it.next}while(it!==null&&it!==i);if(V===null?S=m:V.next=A,!ti(m,e.memoizedState)&&(En=!0,mt&&(s=hs,s!==null)))throw s;e.memoizedState=m,e.baseState=S,e.baseQueue=V,l.lastRenderedState=m}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Vf(e){var i=fn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=e;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do m=e(m,S.action),S=S.next;while(S!==f);ti(m,i.memoizedState)||(En=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function E0(e,i,s){var l=ve,f=fn(),m=Pe;if(m){if(s===void 0)throw Error(r(407));s=s()}else s=i();var S=!ti((Ge||f).memoizedState,s);S&&(f.memoizedState=s,En=!0),f=f.queue;var A=R0.bind(null,l,f,e);if(Go(2048,8,A,[e]),f.getSnapshot!==i||S||un!==null&&un.memoizedState.tag&1){if(l.flags|=2048,vs(9,oc(),A0.bind(null,l,f,s,i),null),Qe===null)throw Error(r(349));m||(Va&124)!==0||T0(l,i,s)}return s}function T0(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=ve.updateQueue,i===null?(i=Ff(),ve.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function A0(e,i,s,l){i.value=s,i.getSnapshot=l,w0(i)&&C0(e)}function R0(e,i,s){return s(function(){w0(i)&&C0(e)})}function w0(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!ti(e,s)}catch{return!0}}function C0(e){var i=ls(e,2);i!==null&&si(i,e,2)}function kf(e){var i=qn();if(typeof e=="function"){var s=e;if(e=s(),Lr){Dt(!0);try{s()}finally{Dt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},i}function D0(e,i,s,l){return e.baseState=s,Gf(e,Ge,typeof l=="function"?l:aa)}function Tb(e,i,s,l,f){if(cc(e))throw Error(r(485));if(e=i.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};I.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,U0(i,m)):(m.next=s.next,i.pending=s.next=m)}}function U0(e,i){var s=i.action,l=i.payload,f=e.state;if(i.isTransition){var m=I.T,S={};I.T=S;try{var A=s(f,l),V=I.S;V!==null&&V(S,A),N0(e,i,A)}catch(it){Xf(e,i,it)}finally{I.T=m}}else try{m=s(f,l),N0(e,i,m)}catch(it){Xf(e,i,it)}}function N0(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){L0(e,i,l)},function(l){return Xf(e,i,l)}):L0(e,i,s)}function L0(e,i,s){i.status="fulfilled",i.value=s,O0(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,U0(e,s)))}function Xf(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,O0(i),i=i.next;while(i!==l)}e.action=null}function O0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function P0(e,i){return i}function B0(e,i){if(Pe){var s=Qe.formState;if(s!==null){t:{var l=ve;if(Pe){if(nn){e:{for(var f=nn,m=zi;f.nodeType!==8;){if(!m){f=null;break e}if(f=Ai(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){nn=Ai(f.nextSibling),l=f.data==="F!";break t}}Cr(l)}l=!1}l&&(i=s[0])}}return s=qn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:P0,lastRenderedState:i},s.queue=l,s=eg.bind(null,ve,l),l.dispatch=s,l=kf(!1),m=Zf.bind(null,ve,!1,l.queue),l=qn(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,s=Tb.bind(null,ve,f,m,s),f.dispatch=s,l.memoizedState=e,[i,s,!1]}function z0(e){var i=fn();return I0(i,Ge,e)}function I0(e,i,s){if(i=Gf(e,i,P0)[0],e=sc(aa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Ho(i)}catch(S){throw S===Oo?tc:S}else l=i;i=fn();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(ve.flags|=2048,vs(9,oc(),Ab.bind(null,f,s),null)),[l,m,e]}function Ab(e,i){e.action=i}function F0(e){var i=fn(),s=Ge;if(s!==null)return I0(i,s,e);fn(),i=i.memoizedState,s=fn();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function vs(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=ve.updateQueue,i===null&&(i=Ff(),ve.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function oc(){return{destroy:void 0,resource:void 0}}function H0(){return fn().memoizedState}function lc(e,i,s,l){var f=qn();l=l===void 0?null:l,ve.flags|=e,f.memoizedState=vs(1|i,oc(),s,l)}function Go(e,i,s,l){var f=fn();l=l===void 0?null:l;var m=f.memoizedState.inst;Ge!==null&&l!==null&&Of(l,Ge.memoizedState.deps)?f.memoizedState=vs(i,m,s,l):(ve.flags|=e,f.memoizedState=vs(1|i,m,s,l))}function G0(e,i){lc(8390656,8,e,i)}function V0(e,i){Go(2048,8,e,i)}function k0(e,i){return Go(4,2,e,i)}function X0(e,i){return Go(4,4,e,i)}function j0(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function W0(e,i,s){s=s!=null?s.concat([e]):null,Go(4,4,j0.bind(null,i,e),s)}function jf(){}function q0(e,i){var s=fn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Of(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function Y0(e,i){var s=fn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Of(i,l[1]))return l[0];if(l=e(),Lr){Dt(!0);try{e()}finally{Dt(!1)}}return s.memoizedState=[l,i],l}function Wf(e,i,s){return s===void 0||(Va&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=Qg(),ve.lanes|=e,Za|=e,s)}function Z0(e,i,s,l){return ti(s,i)?s:ps.current!==null?(e=Wf(e,s,l),ti(e,i)||(En=!0),e):(Va&42)===0?(En=!0,e.memoizedState=s):(e=Qg(),ve.lanes|=e,Za|=e,i)}function K0(e,i,s,l,f){var m=q.p;q.p=m!==0&&8>m?m:8;var S=I.T,A={};I.T=A,Zf(e,!1,i,s);try{var V=f(),it=I.S;if(it!==null&&it(A,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var mt=Sb(V,l);Vo(e,i,mt,ri(e))}else Vo(e,i,l,ri(e))}catch(Mt){Vo(e,i,{then:function(){},status:"rejected",reason:Mt},ri())}finally{q.p=m,I.T=S}}function Rb(){}function qf(e,i,s,l){if(e.tag!==5)throw Error(r(476));var f=Q0(e).queue;K0(e,f,i,X,s===null?Rb:function(){return $0(e),s(l)})}function Q0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:X},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function $0(e){var i=Q0(e).next.queue;Vo(e,i,{},ri())}function Yf(){return Pn(sl)}function J0(){return fn().memoizedState}function tg(){return fn().memoizedState}function wb(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=ri();e=Ha(s);var l=Ga(i,e,s);l!==null&&(si(l,i,s),Bo(l,i,s)),i={cache:Ef()},e.payload=i;return}i=i.return}}function Cb(e,i,s){var l=ri();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},cc(e)?ng(i,s):(s=pf(e,i,s,l),s!==null&&(si(s,e,l),ig(s,i,l)))}function eg(e,i,s){var l=ri();Vo(e,i,s,l)}function Vo(e,i,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(cc(e))ng(i,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var S=i.lastRenderedState,A=m(S,s);if(f.hasEagerState=!0,f.eagerState=A,ti(A,S))return Wl(e,i,f,0),Qe===null&&jl(),!1}catch{}finally{}if(s=pf(e,i,f,l),s!==null)return si(s,e,l),ig(s,i,l),!0}return!1}function Zf(e,i,s,l){if(l={lane:2,revertLane:Rd(),action:l,hasEagerState:!1,eagerState:null,next:null},cc(e)){if(i)throw Error(r(479))}else i=pf(e,s,l,2),i!==null&&si(i,e,2)}function cc(e){var i=e.alternate;return e===ve||i!==null&&i===ve}function ng(e,i){ms=ic=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function ig(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,ce(e,s)}}var uc={readContext:Pn,use:rc,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn},ag={readContext:Pn,use:rc,useCallback:function(e,i){return qn().memoizedState=[e,i===void 0?null:i],e},useContext:Pn,useEffect:G0,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,lc(4194308,4,j0.bind(null,i,e),s)},useLayoutEffect:function(e,i){return lc(4194308,4,e,i)},useInsertionEffect:function(e,i){lc(4,2,e,i)},useMemo:function(e,i){var s=qn();i=i===void 0?null:i;var l=e();if(Lr){Dt(!0);try{e()}finally{Dt(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=qn();if(s!==void 0){var f=s(i);if(Lr){Dt(!0);try{s(i)}finally{Dt(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=Cb.bind(null,ve,e),[l.memoizedState,e]},useRef:function(e){var i=qn();return e={current:e},i.memoizedState=e},useState:function(e){e=kf(e);var i=e.queue,s=eg.bind(null,ve,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:jf,useDeferredValue:function(e,i){var s=qn();return Wf(s,e,i)},useTransition:function(){var e=kf(!1);return e=K0.bind(null,ve,e.queue,!0,!1),qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=ve,f=qn();if(Pe){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Qe===null)throw Error(r(349));(we&124)!==0||T0(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,G0(R0.bind(null,l,m,e),[e]),l.flags|=2048,vs(9,oc(),A0.bind(null,l,m,s,i),null),s},useId:function(){var e=qn(),i=Qe.identifierPrefix;if(Pe){var s=ea,l=ta;s=(l&~(1<<32-Xt(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=ac++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=Mb++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Yf,useFormState:B0,useActionState:B0,useOptimistic:function(e){var i=qn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Zf.bind(null,ve,!0,s),s.dispatch=i,[e,i]},useMemoCache:Hf,useCacheRefresh:function(){return qn().memoizedState=wb.bind(null,ve)}},rg={readContext:Pn,use:rc,useCallback:q0,useContext:Pn,useEffect:V0,useImperativeHandle:W0,useInsertionEffect:k0,useLayoutEffect:X0,useMemo:Y0,useReducer:sc,useRef:H0,useState:function(){return sc(aa)},useDebugValue:jf,useDeferredValue:function(e,i){var s=fn();return Z0(s,Ge.memoizedState,e,i)},useTransition:function(){var e=sc(aa)[0],i=fn().memoizedState;return[typeof e=="boolean"?e:Ho(e),i]},useSyncExternalStore:E0,useId:J0,useHostTransitionStatus:Yf,useFormState:z0,useActionState:z0,useOptimistic:function(e,i){var s=fn();return D0(s,Ge,e,i)},useMemoCache:Hf,useCacheRefresh:tg},Db={readContext:Pn,use:rc,useCallback:q0,useContext:Pn,useEffect:V0,useImperativeHandle:W0,useInsertionEffect:k0,useLayoutEffect:X0,useMemo:Y0,useReducer:Vf,useRef:H0,useState:function(){return Vf(aa)},useDebugValue:jf,useDeferredValue:function(e,i){var s=fn();return Ge===null?Wf(s,e,i):Z0(s,Ge.memoizedState,e,i)},useTransition:function(){var e=Vf(aa)[0],i=fn().memoizedState;return[typeof e=="boolean"?e:Ho(e),i]},useSyncExternalStore:E0,useId:J0,useHostTransitionStatus:Yf,useFormState:F0,useActionState:F0,useOptimistic:function(e,i){var s=fn();return Ge!==null?D0(s,Ge,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Hf,useCacheRefresh:tg},_s=null,ko=0;function fc(e){var i=ko;return ko+=1,_s===null&&(_s=[]),g0(_s,e,i)}function Xo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function dc(e,i){throw i.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(i),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function sg(e){var i=e._init;return i(e._payload)}function og(e){function i(Q,j){if(e){var nt=Q.deletions;nt===null?(Q.deletions=[j],Q.flags|=16):nt.push(j)}}function s(Q,j){if(!e)return null;for(;j!==null;)i(Q,j),j=j.sibling;return null}function l(Q){for(var j=new Map;Q!==null;)Q.key!==null?j.set(Q.key,Q):j.set(Q.index,Q),Q=Q.sibling;return j}function f(Q,j){return Q=Ji(Q,j),Q.index=0,Q.sibling=null,Q}function m(Q,j,nt){return Q.index=nt,e?(nt=Q.alternate,nt!==null?(nt=nt.index,nt<j?(Q.flags|=67108866,j):nt):(Q.flags|=67108866,j)):(Q.flags|=1048576,j)}function S(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function A(Q,j,nt,xt){return j===null||j.tag!==6?(j=gf(nt,Q.mode,xt),j.return=Q,j):(j=f(j,nt),j.return=Q,j)}function V(Q,j,nt,xt){var Vt=nt.type;return Vt===M?mt(Q,j,nt.props.children,xt,nt.key):j!==null&&(j.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===z&&sg(Vt)===j.type)?(j=f(j,nt.props),Xo(j,nt),j.return=Q,j):(j=Yl(nt.type,nt.key,nt.props,null,Q.mode,xt),Xo(j,nt),j.return=Q,j)}function it(Q,j,nt,xt){return j===null||j.tag!==4||j.stateNode.containerInfo!==nt.containerInfo||j.stateNode.implementation!==nt.implementation?(j=vf(nt,Q.mode,xt),j.return=Q,j):(j=f(j,nt.children||[]),j.return=Q,j)}function mt(Q,j,nt,xt,Vt){return j===null||j.tag!==7?(j=Tr(nt,Q.mode,xt,Vt),j.return=Q,j):(j=f(j,nt),j.return=Q,j)}function Mt(Q,j,nt){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=gf(""+j,Q.mode,nt),j.return=Q,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case _:return nt=Yl(j.type,j.key,j.props,null,Q.mode,nt),Xo(nt,j),nt.return=Q,nt;case b:return j=vf(j,Q.mode,nt),j.return=Q,j;case z:var xt=j._init;return j=xt(j._payload),Mt(Q,j,nt)}if(ut(j)||k(j))return j=Tr(j,Q.mode,nt,null),j.return=Q,j;if(typeof j.then=="function")return Mt(Q,fc(j),nt);if(j.$$typeof===N)return Mt(Q,$l(Q,j),nt);dc(Q,j)}return null}function rt(Q,j,nt,xt){var Vt=j!==null?j.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return Vt!==null?null:A(Q,j,""+nt,xt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case _:return nt.key===Vt?V(Q,j,nt,xt):null;case b:return nt.key===Vt?it(Q,j,nt,xt):null;case z:return Vt=nt._init,nt=Vt(nt._payload),rt(Q,j,nt,xt)}if(ut(nt)||k(nt))return Vt!==null?null:mt(Q,j,nt,xt,null);if(typeof nt.then=="function")return rt(Q,j,fc(nt),xt);if(nt.$$typeof===N)return rt(Q,j,$l(Q,nt),xt);dc(Q,nt)}return null}function ot(Q,j,nt,xt,Vt){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return Q=Q.get(nt)||null,A(j,Q,""+xt,Vt);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case _:return Q=Q.get(xt.key===null?nt:xt.key)||null,V(j,Q,xt,Vt);case b:return Q=Q.get(xt.key===null?nt:xt.key)||null,it(j,Q,xt,Vt);case z:var _e=xt._init;return xt=_e(xt._payload),ot(Q,j,nt,xt,Vt)}if(ut(xt)||k(xt))return Q=Q.get(nt)||null,mt(j,Q,xt,Vt,null);if(typeof xt.then=="function")return ot(Q,j,nt,fc(xt),Vt);if(xt.$$typeof===N)return ot(Q,j,nt,$l(j,xt),Vt);dc(j,xt)}return null}function se(Q,j,nt,xt){for(var Vt=null,_e=null,qt=j,ie=j=0,An=null;qt!==null&&ie<nt.length;ie++){qt.index>ie?(An=qt,qt=null):An=qt.sibling;var Ne=rt(Q,qt,nt[ie],xt);if(Ne===null){qt===null&&(qt=An);break}e&&qt&&Ne.alternate===null&&i(Q,qt),j=m(Ne,j,ie),_e===null?Vt=Ne:_e.sibling=Ne,_e=Ne,qt=An}if(ie===nt.length)return s(Q,qt),Pe&&Rr(Q,ie),Vt;if(qt===null){for(;ie<nt.length;ie++)qt=Mt(Q,nt[ie],xt),qt!==null&&(j=m(qt,j,ie),_e===null?Vt=qt:_e.sibling=qt,_e=qt);return Pe&&Rr(Q,ie),Vt}for(qt=l(qt);ie<nt.length;ie++)An=ot(qt,Q,ie,nt[ie],xt),An!==null&&(e&&An.alternate!==null&&qt.delete(An.key===null?ie:An.key),j=m(An,j,ie),_e===null?Vt=An:_e.sibling=An,_e=An);return e&&qt.forEach(function(ar){return i(Q,ar)}),Pe&&Rr(Q,ie),Vt}function ee(Q,j,nt,xt){if(nt==null)throw Error(r(151));for(var Vt=null,_e=null,qt=j,ie=j=0,An=null,Ne=nt.next();qt!==null&&!Ne.done;ie++,Ne=nt.next()){qt.index>ie?(An=qt,qt=null):An=qt.sibling;var ar=rt(Q,qt,Ne.value,xt);if(ar===null){qt===null&&(qt=An);break}e&&qt&&ar.alternate===null&&i(Q,qt),j=m(ar,j,ie),_e===null?Vt=ar:_e.sibling=ar,_e=ar,qt=An}if(Ne.done)return s(Q,qt),Pe&&Rr(Q,ie),Vt;if(qt===null){for(;!Ne.done;ie++,Ne=nt.next())Ne=Mt(Q,Ne.value,xt),Ne!==null&&(j=m(Ne,j,ie),_e===null?Vt=Ne:_e.sibling=Ne,_e=Ne);return Pe&&Rr(Q,ie),Vt}for(qt=l(qt);!Ne.done;ie++,Ne=nt.next())Ne=ot(qt,Q,ie,Ne.value,xt),Ne!==null&&(e&&Ne.alternate!==null&&qt.delete(Ne.key===null?ie:Ne.key),j=m(Ne,j,ie),_e===null?Vt=Ne:_e.sibling=Ne,_e=Ne);return e&&qt.forEach(function(US){return i(Q,US)}),Pe&&Rr(Q,ie),Vt}function ke(Q,j,nt,xt){if(typeof nt=="object"&&nt!==null&&nt.type===M&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case _:t:{for(var Vt=nt.key;j!==null;){if(j.key===Vt){if(Vt=nt.type,Vt===M){if(j.tag===7){s(Q,j.sibling),xt=f(j,nt.props.children),xt.return=Q,Q=xt;break t}}else if(j.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===z&&sg(Vt)===j.type){s(Q,j.sibling),xt=f(j,nt.props),Xo(xt,nt),xt.return=Q,Q=xt;break t}s(Q,j);break}else i(Q,j);j=j.sibling}nt.type===M?(xt=Tr(nt.props.children,Q.mode,xt,nt.key),xt.return=Q,Q=xt):(xt=Yl(nt.type,nt.key,nt.props,null,Q.mode,xt),Xo(xt,nt),xt.return=Q,Q=xt)}return S(Q);case b:t:{for(Vt=nt.key;j!==null;){if(j.key===Vt)if(j.tag===4&&j.stateNode.containerInfo===nt.containerInfo&&j.stateNode.implementation===nt.implementation){s(Q,j.sibling),xt=f(j,nt.children||[]),xt.return=Q,Q=xt;break t}else{s(Q,j);break}else i(Q,j);j=j.sibling}xt=vf(nt,Q.mode,xt),xt.return=Q,Q=xt}return S(Q);case z:return Vt=nt._init,nt=Vt(nt._payload),ke(Q,j,nt,xt)}if(ut(nt))return se(Q,j,nt,xt);if(k(nt)){if(Vt=k(nt),typeof Vt!="function")throw Error(r(150));return nt=Vt.call(nt),ee(Q,j,nt,xt)}if(typeof nt.then=="function")return ke(Q,j,fc(nt),xt);if(nt.$$typeof===N)return ke(Q,j,$l(Q,nt),xt);dc(Q,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,j!==null&&j.tag===6?(s(Q,j.sibling),xt=f(j,nt),xt.return=Q,Q=xt):(s(Q,j),xt=gf(nt,Q.mode,xt),xt.return=Q,Q=xt),S(Q)):s(Q,j)}return function(Q,j,nt,xt){try{ko=0;var Vt=ke(Q,j,nt,xt);return _s=null,Vt}catch(qt){if(qt===Oo||qt===tc)throw qt;var _e=ei(29,qt,null,Q.mode);return _e.lanes=xt,_e.return=Q,_e}finally{}}}var xs=og(!0),lg=og(!1),mi=tt(null),Ii=null;function ka(e){var i=e.alternate;pt(xn,xn.current&1),pt(mi,e),Ii===null&&(i===null||ps.current!==null||i.memoizedState!==null)&&(Ii=e)}function cg(e){if(e.tag===22){if(pt(xn,xn.current),pt(mi,e),Ii===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Ii=e)}}else Xa()}function Xa(){pt(xn,xn.current),pt(mi,mi.current)}function ra(e){vt(mi),Ii===e&&(Ii=null),vt(xn)}var xn=tt(0);function hc(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Fd(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Kf(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Qf={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=ri(),f=Ha(l);f.payload=i,s!=null&&(f.callback=s),i=Ga(e,f,l),i!==null&&(si(i,e,l),Bo(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=ri(),f=Ha(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Ga(e,f,l),i!==null&&(si(i,e,l),Bo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=ri(),l=Ha(s);l.tag=2,i!=null&&(l.callback=i),i=Ga(e,l,s),i!==null&&(si(i,e,s),Bo(i,e,s))}};function ug(e,i,s,l,f,m,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,S):i.prototype&&i.prototype.isPureReactComponent?!Ao(s,l)||!Ao(f,m):!0}function fg(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&Qf.enqueueReplaceState(i,i.state,null)}function Or(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}var pc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function dg(e){pc(e)}function hg(e){console.error(e)}function pg(e){pc(e)}function mc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function mg(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function $f(e,i,s){return s=Ha(s),s.tag=3,s.payload={element:null},s.callback=function(){mc(e,i)},s}function gg(e){return e=Ha(e),e.tag=3,e}function vg(e,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;e.payload=function(){return f(m)},e.callback=function(){mg(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){mg(i,s,l),typeof f!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function Ub(e,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Uo(i,s,f,!0),s=mi.current,s!==null){switch(s.tag){case 13:return Ii===null?Sd():s.alternate===null&&an===0&&(an=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Rf?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Ed(e,l,f)),!1;case 22:return s.flags|=65536,l===Rf?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Ed(e,l,f)),!1}throw Error(r(435,s.tag))}return Ed(e,l,f),Sd(),!1}if(Pe)return i=mi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==yf&&(e=Error(r(422),{cause:l}),Do(fi(e,s)))):(l!==yf&&(i=Error(r(423),{cause:l}),Do(fi(i,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=fi(l,s),f=$f(e.stateNode,l,f),Df(e,f),an!==4&&(an=2)),!1;var m=Error(r(520),{cause:l});if(m=fi(m,s),Qo===null?Qo=[m]:Qo.push(m),an!==4&&(an=2),i===null)return!0;l=fi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=$f(s.stateNode,l,e),Df(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ka===null||!Ka.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=gg(f),vg(f,e,s,l),Df(s,f),!1}s=s.return}while(s!==null);return!1}var _g=Error(r(461)),En=!1;function Dn(e,i,s,l){i.child=e===null?lg(i,null,s,l):xs(i,e.child,s,l)}function xg(e,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var S={};for(var A in l)A!=="ref"&&(S[A]=l[A])}else S=l;return Ur(i),l=Pf(e,i,s,S,m,f),A=Bf(),e!==null&&!En?(zf(e,i,f),sa(e,i,f)):(Pe&&A&&_f(i),i.flags|=1,Dn(e,i,l,f),i.child)}function yg(e,i,s,l,f){if(e===null){var m=s.type;return typeof m=="function"&&!mf(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,bg(e,i,m,l,f)):(e=Yl(s.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!sd(e,f)){var S=m.memoizedProps;if(s=s.compare,s=s!==null?s:Ao,s(S,l)&&e.ref===i.ref)return sa(e,i,f)}return i.flags|=1,e=Ji(m,l),e.ref=i.ref,e.return=i,i.child=e}function bg(e,i,s,l,f){if(e!==null){var m=e.memoizedProps;if(Ao(m,l)&&e.ref===i.ref)if(En=!1,i.pendingProps=l=m,sd(e,f))(e.flags&131072)!==0&&(En=!0);else return i.lanes=e.lanes,sa(e,i,f)}return Jf(e,i,s,l,f)}function Sg(e,i,s){var l=i.pendingProps,f=l.children,m=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,e!==null){for(f=i.child=e.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return Mg(e,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Jl(i,m!==null?m.cachePool:null),m!==null?b0(i,m):Nf(),cg(i);else return i.lanes=i.childLanes=536870912,Mg(e,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(Jl(i,m.cachePool),b0(i,m),Xa(),i.memoizedState=null):(e!==null&&Jl(i,null),Nf(),Xa());return Dn(e,i,f,s),i.child}function Mg(e,i,s,l){var f=Af();return f=f===null?null:{parent:_n._currentValue,pool:f},i.memoizedState={baseLanes:s,cachePool:f},e!==null&&Jl(i,null),Nf(),cg(i),e!==null&&Uo(e,i,l,!0),null}function gc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Jf(e,i,s,l,f){return Ur(i),s=Pf(e,i,s,l,void 0,f),l=Bf(),e!==null&&!En?(zf(e,i,f),sa(e,i,f)):(Pe&&l&&_f(i),i.flags|=1,Dn(e,i,s,f),i.child)}function Eg(e,i,s,l,f,m){return Ur(i),i.updateQueue=null,s=M0(i,l,s,f),S0(e),l=Bf(),e!==null&&!En?(zf(e,i,m),sa(e,i,m)):(Pe&&l&&_f(i),i.flags|=1,Dn(e,i,s,m),i.child)}function Tg(e,i,s,l,f){if(Ur(i),i.stateNode===null){var m=cs,S=s.contextType;typeof S=="object"&&S!==null&&(m=Pn(S)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Qf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},wf(i),S=s.contextType,m.context=typeof S=="object"&&S!==null?Pn(S):cs,m.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Kf(i,s,S,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&Qf.enqueueReplaceState(m,m.state,null),Io(i,l,m,f),zo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var A=i.memoizedProps,V=Or(s,A);m.props=V;var it=m.context,mt=s.contextType;S=cs,typeof mt=="object"&&mt!==null&&(S=Pn(mt));var Mt=s.getDerivedStateFromProps;mt=typeof Mt=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,mt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||it!==S)&&fg(i,m,l,S),Fa=!1;var rt=i.memoizedState;m.state=rt,Io(i,l,m,f),zo(),it=i.memoizedState,A||rt!==it||Fa?(typeof Mt=="function"&&(Kf(i,s,Mt,l),it=i.memoizedState),(V=Fa||ug(i,s,V,l,rt,it,S))?(mt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=it),m.props=l,m.state=it,m.context=S,l=V):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Cf(e,i),S=i.memoizedProps,mt=Or(s,S),m.props=mt,Mt=i.pendingProps,rt=m.context,it=s.contextType,V=cs,typeof it=="object"&&it!==null&&(V=Pn(it)),A=s.getDerivedStateFromProps,(it=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==Mt||rt!==V)&&fg(i,m,l,V),Fa=!1,rt=i.memoizedState,m.state=rt,Io(i,l,m,f),zo();var ot=i.memoizedState;S!==Mt||rt!==ot||Fa||e!==null&&e.dependencies!==null&&Ql(e.dependencies)?(typeof A=="function"&&(Kf(i,s,A,l),ot=i.memoizedState),(mt=Fa||ug(i,s,mt,l,rt,ot,V)||e!==null&&e.dependencies!==null&&Ql(e.dependencies))?(it||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ot,V),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ot,V)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ot),m.props=l,m.state=ot,m.context=V,l=mt):(typeof m.componentDidUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,gc(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=xs(i,e.child,null,f),i.child=xs(i,null,s,f)):Dn(e,i,s,f),i.memoizedState=m.state,e=i.child):e=sa(e,i,f),e}function Ag(e,i,s,l){return Co(),i.flags|=256,Dn(e,i,s,l),i.child}var td={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ed(e){return{baseLanes:e,cachePool:h0()}}function nd(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=gi),e}function Rg(e,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,S;if((S=m)||(S=e!==null&&e.memoizedState===null?!1:(xn.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(Pe){if(f?ka(i):Xa(),Pe){var A=nn,V;if(V=A){t:{for(V=A,A=zi;V.nodeType!==8;){if(!A){A=null;break t}if(V=Ai(V.nextSibling),V===null){A=null;break t}}A=V}A!==null?(i.memoizedState={dehydrated:A,treeContext:Ar!==null?{id:ta,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},V=ei(18,null,null,0),V.stateNode=A,V.return=i,i.child=V,Vn=i,nn=null,V=!0):V=!1}V||Cr(i)}if(A=i.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Fd(A)?i.lanes=32:i.lanes=536870912,null;ra(i)}return A=l.children,l=l.fallback,f?(Xa(),f=i.mode,A=vc({mode:"hidden",children:A},f),l=Tr(l,f,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,f=i.child,f.memoizedState=ed(s),f.childLanes=nd(e,S,s),i.memoizedState=td,l):(ka(i),id(i,A))}if(V=e.memoizedState,V!==null&&(A=V.dehydrated,A!==null)){if(m)i.flags&256?(ka(i),i.flags&=-257,i=ad(e,i,s)):i.memoizedState!==null?(Xa(),i.child=e.child,i.flags|=128,i=null):(Xa(),f=l.fallback,A=i.mode,l=vc({mode:"visible",children:l.children},A),f=Tr(f,A,s,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,xs(i,e.child,null,s),l=i.child,l.memoizedState=ed(s),l.childLanes=nd(e,S,s),i.memoizedState=td,i=f);else if(ka(i),Fd(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var it=S.dgst;S=it,l=Error(r(419)),l.stack="",l.digest=S,Do({value:l,source:null,stack:null}),i=ad(e,i,s)}else if(En||Uo(e,i,s,!1),S=(s&e.childLanes)!==0,En||S){if(S=Qe,S!==null&&(l=s&-s,l=(l&42)!==0?1:Ze(l),l=(l&(S.suspendedLanes|s))!==0?0:l,l!==0&&l!==V.retryLane))throw V.retryLane=l,ls(e,l),si(S,e,l),_g;A.data==="$?"||Sd(),i=ad(e,i,s)}else A.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=V.treeContext,nn=Ai(A.nextSibling),Vn=i,Pe=!0,wr=null,zi=!1,e!==null&&(hi[pi++]=ta,hi[pi++]=ea,hi[pi++]=Ar,ta=e.id,ea=e.overflow,Ar=i),i=id(i,l.children),i.flags|=4096);return i}return f?(Xa(),f=l.fallback,A=i.mode,V=e.child,it=V.sibling,l=Ji(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,it!==null?f=Ji(it,f):(f=Tr(f,A,s,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,A=e.child.memoizedState,A===null?A=ed(s):(V=A.cachePool,V!==null?(it=_n._currentValue,V=V.parent!==it?{parent:it,pool:it}:V):V=h0(),A={baseLanes:A.baseLanes|s,cachePool:V}),f.memoizedState=A,f.childLanes=nd(e,S,s),i.memoizedState=td,l):(ka(i),s=e.child,e=s.sibling,s=Ji(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=s,i.memoizedState=null,s)}function id(e,i){return i=vc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function vc(e,i){return e=ei(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ad(e,i,s){return xs(i,e.child,null,s),e=id(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function wg(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Sf(e.return,i,s)}function rd(e,i,s,l,f){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=f)}function Cg(e,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(Dn(e,i,l.children,s),l=xn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wg(e,s,i);else if(e.tag===19)wg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(pt(xn,l),f){case"forwards":for(s=i.child,f=null;s!==null;)e=s.alternate,e!==null&&hc(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),rd(i,!1,f,s,m);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&hc(e)===null){i.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}rd(i,!0,s,null,m);break;case"together":rd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function sa(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Za|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(Uo(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(r(153));if(i.child!==null){for(e=i.child,s=Ji(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Ji(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function sd(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Ql(e)))}function Nb(e,i,s){switch(i.tag){case 3:At(i,i.stateNode.containerInfo),Ia(i,_n,e.memoizedState.cache),Co();break;case 27:case 5:kt(i);break;case 4:At(i,i.stateNode.containerInfo);break;case 10:Ia(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ka(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Rg(e,i,s):(ka(i),e=sa(e,i,s),e!==null?e.sibling:null);ka(i);break;case 19:var f=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Uo(e,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Cg(e,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),pt(xn,xn.current),l)break;return null;case 22:case 23:return i.lanes=0,Sg(e,i,s);case 24:Ia(i,_n,e.memoizedState.cache)}return sa(e,i,s)}function Dg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)En=!0;else{if(!sd(e,s)&&(i.flags&128)===0)return En=!1,Nb(e,i,s);En=(e.flags&131072)!==0}else En=!1,Pe&&(i.flags&1048576)!==0&&s0(i,Kl,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")mf(l)?(e=Or(l,e),i.tag=1,i=Tg(null,i,l,e,s)):(i.tag=0,i=Jf(null,i,l,e,s));else{if(l!=null){if(f=l.$$typeof,f===U){i.tag=11,i=xg(null,i,l,e,s);break t}else if(f===D){i.tag=14,i=yg(null,i,l,e,s);break t}}throw i=et(l)||l,Error(r(306,i,""))}}return i;case 0:return Jf(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Or(l,i.pendingProps),Tg(e,i,l,f,s);case 3:t:{if(At(i,i.stateNode.containerInfo),e===null)throw Error(r(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,Cf(e,i),Io(i,l,null,s);var S=i.memoizedState;if(l=S.cache,Ia(i,_n,l),l!==m.cache&&Mf(i,[_n],s,!0),zo(),l=S.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Ag(e,i,l,s);break t}else if(l!==f){f=fi(Error(r(424)),i),Do(f),i=Ag(e,i,l,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nn=Ai(e.firstChild),Vn=i,Pe=!0,wr=null,zi=!0,s=lg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Co(),l===f){i=sa(e,i,s);break t}Dn(e,i,l,s)}i=i.child}return i;case 26:return gc(e,i),e===null?(s=Ov(i.type,null,i.pendingProps,null))?i.memoizedState=s:Pe||(s=i.type,e=i.pendingProps,l=Uc(_t.current).createElement(s),l[gn]=i,l[wn]=e,Nn(l,s,e),cn(l),i.stateNode=l):i.memoizedState=Ov(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return kt(i),e===null&&Pe&&(l=i.stateNode=Uv(i.type,i.pendingProps,_t.current),Vn=i,zi=!0,f=nn,Ja(i.type)?(Hd=f,nn=Ai(l.firstChild)):nn=f),Dn(e,i,i.pendingProps.children,s),gc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Pe&&((f=l=nn)&&(l=sS(l,i.type,i.pendingProps,zi),l!==null?(i.stateNode=l,Vn=i,nn=Ai(l.firstChild),zi=!1,f=!0):f=!1),f||Cr(i)),kt(i),f=i.type,m=i.pendingProps,S=e!==null?e.memoizedProps:null,l=m.children,Bd(f,m)?l=null:S!==null&&Bd(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=Pf(e,i,Eb,null,null,s),sl._currentValue=f),gc(e,i),Dn(e,i,l,s),i.child;case 6:return e===null&&Pe&&((e=s=nn)&&(s=oS(s,i.pendingProps,zi),s!==null?(i.stateNode=s,Vn=i,nn=null,e=!0):e=!1),e||Cr(i)),null;case 13:return Rg(e,i,s);case 4:return At(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=xs(i,null,l,s):Dn(e,i,l,s),i.child;case 11:return xg(e,i,i.type,i.pendingProps,s);case 7:return Dn(e,i,i.pendingProps,s),i.child;case 8:return Dn(e,i,i.pendingProps.children,s),i.child;case 12:return Dn(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ia(i,i.type,l.value),Dn(e,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Ur(i),f=Pn(f),l=l(f),i.flags|=1,Dn(e,i,l,s),i.child;case 14:return yg(e,i,i.type,i.pendingProps,s);case 15:return bg(e,i,i.type,i.pendingProps,s);case 19:return Cg(e,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},e===null?(s=vc(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Ji(e.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Sg(e,i,s);case 24:return Ur(i),l=Pn(_n),e===null?(f=Af(),f===null&&(f=Qe,m=Ef(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},wf(i),Ia(i,_n,f)):((e.lanes&s)!==0&&(Cf(e,i),Io(i,null,null,s),zo()),f=e.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ia(i,_n,l)):(l=m.cache,Ia(i,_n,l),l!==f.cache&&Mf(i,[_n],s,!0))),Dn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function oa(e){e.flags|=4}function Ug(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Fv(i)){if(i=mi.current,i!==null&&((we&4194048)===we?Ii!==null:(we&62914560)!==we&&(we&536870912)===0||i!==Ii))throw Po=Rf,p0;e.flags|=8192}}function _c(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ot():536870912,e.lanes|=i,Ms|=i)}function jo(e,i){if(!Pe)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function tn(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function Lb(e,i,s){var l=i.pendingProps;switch(xf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(i),null;case 1:return tn(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ia(_n),jt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(wo(i)?oa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,c0())),tn(i),null;case 26:return s=i.memoizedState,e===null?(oa(i),s!==null?(tn(i),Ug(i,s)):(tn(i),i.flags&=-16777217)):s?s!==e.memoizedState?(oa(i),tn(i),Ug(i,s)):(tn(i),i.flags&=-16777217):(e.memoizedProps!==l&&oa(i),tn(i),i.flags&=-16777217),null;case 27:ye(i),s=_t.current;var f=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&oa(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return tn(i),null}e=Y.current,wo(i)?o0(i):(e=Uv(f,l,s),i.stateNode=e,oa(i))}return tn(i),null;case 5:if(ye(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&oa(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return tn(i),null}if(e=Y.current,wo(i))o0(i);else{switch(f=Uc(_t.current),e){case 1:e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}e[gn]=i,e[wn]=l;t:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)e.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break t;for(;f.sibling===null;){if(f.return===null||f.return===i)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=e;t:switch(Nn(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&oa(i)}}return tn(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&oa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(e=_t.current,wo(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,f=Vn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[gn]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Ev(e.nodeValue,s)),e||Cr(i)}else e=Uc(e).createTextNode(l),e[gn]=i,i.stateNode=e}return tn(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=wo(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[gn]=i}else Co(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;tn(i),f=!1}else f=c0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ra(i),i):(ra(i),null)}if(ra(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),_c(i,i.updateQueue),tn(i),null;case 4:return jt(),e===null&&Ud(i.stateNode.containerInfo),tn(i),null;case 10:return ia(i.type),tn(i),null;case 19:if(vt(xn),f=i.memoizedState,f===null)return tn(i),null;if(l=(i.flags&128)!==0,m=f.rendering,m===null)if(l)jo(f,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=hc(e),m!==null){for(i.flags|=128,jo(f,!1),e=m.updateQueue,i.updateQueue=e,_c(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)r0(s,e),s=s.sibling;return pt(xn,xn.current&1|2),i.child}e=e.sibling}f.tail!==null&&$t()>bc&&(i.flags|=128,l=!0,jo(f,!1),i.lanes=4194304)}else{if(!l)if(e=hc(m),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,_c(i,e),jo(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Pe)return tn(i),null}else 2*$t()-f.renderingStartTime>bc&&s!==536870912&&(i.flags|=128,l=!0,jo(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(e=f.last,e!==null?e.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=$t(),i.sibling=null,e=xn.current,pt(xn,l?e&1|2:e&1),i):(tn(i),null);case 22:case 23:return ra(i),Lf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(tn(i),i.subtreeFlags&6&&(i.flags|=8192)):tn(i),s=i.updateQueue,s!==null&&_c(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&vt(Nr),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ia(_n),tn(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function Ob(e,i){switch(xf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ia(_n),jt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ye(i),null;case 13:if(ra(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Co()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return vt(xn),null;case 4:return jt(),null;case 10:return ia(i.type),null;case 22:case 23:return ra(i),Lf(),e!==null&&vt(Nr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ia(_n),null;case 25:return null;default:return null}}function Ng(e,i){switch(xf(i),i.tag){case 3:ia(_n),jt();break;case 26:case 27:case 5:ye(i);break;case 4:jt();break;case 13:ra(i);break;case 19:vt(xn);break;case 10:ia(i.type);break;case 22:case 23:ra(i),Lf(),e!==null&&vt(Nr);break;case 24:ia(_n)}}function Wo(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&e)===e){l=void 0;var m=s.create,S=s.inst;l=m(),S.destroy=l}s=s.next}while(s!==f)}}catch(A){We(i,i.return,A)}}function ja(e,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&e)===e){var S=l.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,f=i;var V=s,it=A;try{it()}catch(mt){We(f,V,mt)}}}l=l.next}while(l!==m)}}catch(mt){We(i,i.return,mt)}}function Lg(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{y0(i,s)}catch(l){We(e,e.return,l)}}}function Og(e,i,s){s.props=Or(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){We(e,i,l)}}function qo(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(f){We(e,i,f)}}function Fi(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){We(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){We(e,i,f)}else s.current=null}function Pg(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){We(e,e.return,f)}}function od(e,i,s){try{var l=e.stateNode;eS(l,e.type,s,i),l[wn]=i}catch(f){We(e,e.return,f)}}function Bg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ja(e.type)||e.tag===4}function ld(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Bg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cd(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Dc));else if(l!==4&&(l===27&&Ja(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(cd(e,i,s),e=e.sibling;e!==null;)cd(e,i,s),e=e.sibling}function xc(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&Ja(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(xc(e,i,s),e=e.sibling;e!==null;)xc(e,i,s),e=e.sibling}function zg(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Nn(i,l,s),i[gn]=e,i[wn]=s}catch(m){We(e,e.return,m)}}var la=!1,sn=!1,ud=!1,Ig=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function Pb(e,i){if(e=e.containerInfo,Od=zc,e=Zm(e),lf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var S=0,A=-1,V=-1,it=0,mt=0,Mt=e,rt=null;e:for(;;){for(var ot;Mt!==s||f!==0&&Mt.nodeType!==3||(A=S+f),Mt!==m||l!==0&&Mt.nodeType!==3||(V=S+l),Mt.nodeType===3&&(S+=Mt.nodeValue.length),(ot=Mt.firstChild)!==null;)rt=Mt,Mt=ot;for(;;){if(Mt===e)break e;if(rt===s&&++it===f&&(A=S),rt===m&&++mt===l&&(V=S),(ot=Mt.nextSibling)!==null)break;Mt=rt,rt=Mt.parentNode}Mt=ot}s=A===-1||V===-1?null:{start:A,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(Pd={focusedElem:e,selectionRange:s},zc=!1,Tn=i;Tn!==null;)if(i=Tn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Tn=e;else for(;Tn!==null;){switch(i=Tn,m=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var se=Or(s.type,f,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(se,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(ee){We(s,s.return,ee)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Id(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Id(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=i.sibling,e!==null){e.return=i.return,Tn=e;break}Tn=i.return}}function Fg(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Wa(e,s),l&4&&Wo(5,s);break;case 1:if(Wa(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(S){We(s,s.return,S)}else{var f=Or(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){We(s,s.return,S)}}l&64&&Lg(s),l&512&&qo(s,s.return);break;case 3:if(Wa(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{y0(e,i)}catch(S){We(s,s.return,S)}}break;case 27:i===null&&l&4&&zg(s);case 26:case 5:Wa(e,s),i===null&&l&4&&Pg(s),l&512&&qo(s,s.return);break;case 12:Wa(e,s);break;case 13:Wa(e,s),l&4&&Vg(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Xb.bind(null,s),lS(e,s))));break;case 22:if(l=s.memoizedState!==null||la,!l){i=i!==null&&i.memoizedState!==null||sn,f=la;var m=sn;la=l,(sn=i)&&!m?qa(e,s,(s.subtreeFlags&8772)!==0):Wa(e,s),la=f,sn=m}break;case 30:break;default:Wa(e,s)}}function Hg(e){var i=e.alternate;i!==null&&(e.alternate=null,Hg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Oa(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Yn=!1;function ca(e,i,s){for(s=s.child;s!==null;)Gg(e,i,s),s=s.sibling}function Gg(e,i,s){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(gt,s)}catch{}switch(s.tag){case 26:sn||Fi(s,i),ca(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:sn||Fi(s,i);var l=$e,f=Yn;Ja(s.type)&&($e=s.stateNode,Yn=!1),ca(e,i,s),nl(s.stateNode),$e=l,Yn=f;break;case 5:sn||Fi(s,i);case 6:if(l=$e,f=Yn,$e=null,ca(e,i,s),$e=l,Yn=f,$e!==null)if(Yn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(s.stateNode)}catch(m){We(s,i,m)}else try{$e.removeChild(s.stateNode)}catch(m){We(s,i,m)}break;case 18:$e!==null&&(Yn?(e=$e,Cv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),ul(e)):Cv($e,s.stateNode));break;case 4:l=$e,f=Yn,$e=s.stateNode.containerInfo,Yn=!0,ca(e,i,s),$e=l,Yn=f;break;case 0:case 11:case 14:case 15:sn||ja(2,s,i),sn||ja(4,s,i),ca(e,i,s);break;case 1:sn||(Fi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Og(s,i,l)),ca(e,i,s);break;case 21:ca(e,i,s);break;case 22:sn=(l=sn)||s.memoizedState!==null,ca(e,i,s),sn=l;break;default:ca(e,i,s)}}function Vg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ul(e)}catch(s){We(i,i.return,s)}}function Bb(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Ig),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Ig),i;default:throw Error(r(435,e.tag))}}function fd(e,i){var s=Bb(e);i.forEach(function(l){var f=jb.bind(null,e,l);s.has(l)||(s.add(l),l.then(f,f))})}function ni(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=e,S=i,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(Ja(A.type)){$e=A.stateNode,Yn=!1;break t}break;case 5:$e=A.stateNode,Yn=!1;break t;case 3:case 4:$e=A.stateNode.containerInfo,Yn=!0;break t}A=A.return}if($e===null)throw Error(r(160));Gg(m,S,f),$e=null,Yn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)kg(i,e),i=i.sibling}var Ti=null;function kg(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ni(i,e),ii(e),l&4&&(ja(3,e,e.return),Wo(3,e),ja(5,e,e.return));break;case 1:ni(i,e),ii(e),l&512&&(sn||s===null||Fi(s,s.return)),l&64&&la&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ti;if(ni(i,e),ii(e),l&512&&(sn||s===null||Fi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[La]||m[gn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Nn(m,l,s),m[gn]=e,cn(m),l=m;break t;case"link":var S=zv("link","href",f).get(l+(s.href||""));if(S){for(var A=0;A<S.length;A++)if(m=S[A],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(A,1);break e}}m=f.createElement(l),Nn(m,l,s),f.head.appendChild(m);break;case"meta":if(S=zv("meta","content",f).get(l+(s.content||""))){for(A=0;A<S.length;A++)if(m=S[A],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(A,1);break e}}m=f.createElement(l),Nn(m,l,s),f.head.appendChild(m);break;default:throw Error(r(468,l))}m[gn]=e,cn(m),l=m}e.stateNode=l}else Iv(f,e.type,e.stateNode);else e.stateNode=Bv(f,l,e.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?Iv(f,e.type,e.stateNode):Bv(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&od(e,e.memoizedProps,s.memoizedProps)}break;case 27:ni(i,e),ii(e),l&512&&(sn||s===null||Fi(s,s.return)),s!==null&&l&4&&od(e,e.memoizedProps,s.memoizedProps);break;case 5:if(ni(i,e),ii(e),l&512&&(sn||s===null||Fi(s,s.return)),e.flags&32){f=e.stateNode;try{Bi(f,"")}catch(ot){We(e,e.return,ot)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,od(e,f,s!==null?s.memoizedProps:f)),l&1024&&(ud=!0);break;case 6:if(ni(i,e),ii(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(ot){We(e,e.return,ot)}}break;case 3:if(Oc=null,f=Ti,Ti=Nc(i.containerInfo),ni(i,e),Ti=f,ii(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{ul(i.containerInfo)}catch(ot){We(e,e.return,ot)}ud&&(ud=!1,Xg(e));break;case 4:l=Ti,Ti=Nc(e.stateNode.containerInfo),ni(i,e),ii(e),Ti=l;break;case 12:ni(i,e),ii(e);break;case 13:ni(i,e),ii(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(vd=$t()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fd(e,l)));break;case 22:f=e.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,it=la,mt=sn;if(la=it||f,sn=mt||V,ni(i,e),sn=mt,la=it,ii(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||V||la||sn||Pr(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){V=s=i;try{if(m=V.stateNode,f)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=V.stateNode;var Mt=V.memoizedProps.style,rt=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;A.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(ot){We(V,V.return,ot)}}}else if(i.tag===6){if(s===null){V=i;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(ot){We(V,V.return,ot)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,fd(e,s))));break;case 19:ni(i,e),ii(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fd(e,l)));break;case 30:break;case 21:break;default:ni(i,e),ii(e)}}function ii(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(Bg(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,m=ld(e);xc(e,m,f);break;case 5:var S=s.stateNode;s.flags&32&&(Bi(S,""),s.flags&=-33);var A=ld(e);xc(e,A,S);break;case 3:case 4:var V=s.stateNode.containerInfo,it=ld(e);cd(e,it,V);break;default:throw Error(r(161))}}catch(mt){We(e,e.return,mt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Xg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Xg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Wa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Fg(e,i.alternate,i),i=i.sibling}function Pr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:ja(4,i,i.return),Pr(i);break;case 1:Fi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Og(i,i.return,s),Pr(i);break;case 27:nl(i.stateNode);case 26:case 5:Fi(i,i.return),Pr(i);break;case 22:i.memoizedState===null&&Pr(i);break;case 30:Pr(i);break;default:Pr(i)}e=e.sibling}}function qa(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,m=i,S=m.flags;switch(m.tag){case 0:case 11:case 15:qa(f,m,s),Wo(4,m);break;case 1:if(qa(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(it){We(l,l.return,it)}if(l=m,f=l.updateQueue,f!==null){var A=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)x0(V[f],A)}catch(it){We(l,l.return,it)}}s&&S&64&&Lg(m),qo(m,m.return);break;case 27:zg(m);case 26:case 5:qa(f,m,s),s&&l===null&&S&4&&Pg(m),qo(m,m.return);break;case 12:qa(f,m,s);break;case 13:qa(f,m,s),s&&S&4&&Vg(f,m);break;case 22:m.memoizedState===null&&qa(f,m,s),qo(m,m.return);break;case 30:break;default:qa(f,m,s)}i=i.sibling}}function dd(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&No(s))}function hd(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&No(e))}function Hi(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)jg(e,i,s,l),i=i.sibling}function jg(e,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Hi(e,i,s,l),f&2048&&Wo(9,i);break;case 1:Hi(e,i,s,l);break;case 3:Hi(e,i,s,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&No(e)));break;case 12:if(f&2048){Hi(e,i,s,l),e=i.stateNode;try{var m=i.memoizedProps,S=m.id,A=m.onPostCommit;typeof A=="function"&&A(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){We(i,i.return,V)}}else Hi(e,i,s,l);break;case 13:Hi(e,i,s,l);break;case 23:break;case 22:m=i.stateNode,S=i.alternate,i.memoizedState!==null?m._visibility&2?Hi(e,i,s,l):Yo(e,i):m._visibility&2?Hi(e,i,s,l):(m._visibility|=2,ys(e,i,s,l,(i.subtreeFlags&10256)!==0)),f&2048&&dd(S,i);break;case 24:Hi(e,i,s,l),f&2048&&hd(i.alternate,i);break;default:Hi(e,i,s,l)}}function ys(e,i,s,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=e,S=i,A=s,V=l,it=S.flags;switch(S.tag){case 0:case 11:case 15:ys(m,S,A,V,f),Wo(8,S);break;case 23:break;case 22:var mt=S.stateNode;S.memoizedState!==null?mt._visibility&2?ys(m,S,A,V,f):Yo(m,S):(mt._visibility|=2,ys(m,S,A,V,f)),f&&it&2048&&dd(S.alternate,S);break;case 24:ys(m,S,A,V,f),f&&it&2048&&hd(S.alternate,S);break;default:ys(m,S,A,V,f)}i=i.sibling}}function Yo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,f=l.flags;switch(l.tag){case 22:Yo(s,l),f&2048&&dd(l.alternate,l);break;case 24:Yo(s,l),f&2048&&hd(l.alternate,l);break;default:Yo(s,l)}i=i.sibling}}var Zo=8192;function bs(e){if(e.subtreeFlags&Zo)for(e=e.child;e!==null;)Wg(e),e=e.sibling}function Wg(e){switch(e.tag){case 26:bs(e),e.flags&Zo&&e.memoizedState!==null&&bS(Ti,e.memoizedState,e.memoizedProps);break;case 5:bs(e);break;case 3:case 4:var i=Ti;Ti=Nc(e.stateNode.containerInfo),bs(e),Ti=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Zo,Zo=16777216,bs(e),Zo=i):bs(e));break;default:bs(e)}}function qg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Ko(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Tn=l,Zg(l,e)}qg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yg(e),e=e.sibling}function Yg(e){switch(e.tag){case 0:case 11:case 15:Ko(e),e.flags&2048&&ja(9,e,e.return);break;case 3:Ko(e);break;case 12:Ko(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,yc(e)):Ko(e);break;default:Ko(e)}}function yc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Tn=l,Zg(l,e)}qg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:ja(8,i,i.return),yc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,yc(i));break;default:yc(i)}e=e.sibling}}function Zg(e,i){for(;Tn!==null;){var s=Tn;switch(s.tag){case 0:case 11:case 15:ja(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:No(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Tn=l;else t:for(s=e;Tn!==null;){l=Tn;var f=l.sibling,m=l.return;if(Hg(l),l===s){Tn=null;break t}if(f!==null){f.return=m,Tn=f;break t}Tn=m}}}var zb={getCacheForType:function(e){var i=Pn(_n),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},Ib=typeof WeakMap=="function"?WeakMap:Map,ze=0,Qe=null,Se=null,we=0,Ie=0,ai=null,Ya=!1,Ss=!1,pd=!1,ua=0,an=0,Za=0,Br=0,md=0,gi=0,Ms=0,Qo=null,Zn=null,gd=!1,vd=0,bc=1/0,Sc=null,Ka=null,Un=0,Qa=null,Es=null,Ts=0,_d=0,xd=null,Kg=null,$o=0,yd=null;function ri(){if((ze&2)!==0&&we!==0)return we&-we;if(I.T!==null){var e=ds;return e!==0?e:Rd()}return De()}function Qg(){gi===0&&(gi=(we&536870912)===0||Pe?K():536870912);var e=mi.current;return e!==null&&(e.flags|=32),gi}function si(e,i,s){(e===Qe&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(As(e,0),$a(e,we,gi,!1)),St(e,s),((ze&2)===0||e!==Qe)&&(e===Qe&&((ze&2)===0&&(Br|=s),an===4&&$a(e,we,gi,!1)),Gi(e))}function $g(e,i,s){if((ze&6)!==0)throw Error(r(327));var l=!s&&(i&124)===0&&(i&e.expiredLanes)===0||le(e,i),f=l?Gb(e,i):Md(e,i,!0),m=l;do{if(f===0){Ss&&!l&&$a(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!Fb(s)){f=Md(e,i,!1),m=!1;continue}if(f===2){if(m=i,e.errorRecoveryDisabledLanes&m)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var A=e;f=Qo;var V=A.current.memoizedState.isDehydrated;if(V&&(As(A,S).flags|=256),S=Md(A,S,!1),S!==2){if(pd&&!V){A.errorRecoveryDisabledLanes|=m,Br|=m,f=4;break t}m=Zn,Zn=f,m!==null&&(Zn===null?Zn=m:Zn.push.apply(Zn,m))}f=S}if(m=!1,f!==2)continue}}if(f===1){As(e,0),$a(e,i,0,!0);break}t:{switch(l=e,m=f,m){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:$a(l,i,gi,!Ya);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=vd+300-$t(),10<f)){if($a(l,i,gi,!Ya),ge(l,0,!0)!==0)break t;l.timeoutHandle=Rv(Jg.bind(null,l,s,Zn,Sc,gd,i,gi,Br,Ms,Ya,m,2,-0,0),f);break t}Jg(l,s,Zn,Sc,gd,i,gi,Br,Ms,Ya,m,0,-0,0)}}break}while(!0);Gi(e)}function Jg(e,i,s,l,f,m,S,A,V,it,mt,Mt,rt,ot){if(e.timeoutHandle=-1,Mt=i.subtreeFlags,(Mt&8192||(Mt&16785408)===16785408)&&(rl={stylesheets:null,count:0,unsuspend:yS},Wg(i),Mt=SS(),Mt!==null)){e.cancelPendingCommit=Mt(sv.bind(null,e,i,m,s,l,f,S,A,V,mt,1,rt,ot)),$a(e,m,S,!it);return}sv(e,i,m,s,l,f,S,A,V)}function Fb(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!ti(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function $a(e,i,s,l){i&=~md,i&=~Br,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var m=31-Xt(f),S=1<<m;l[m]=-1,f&=~S}s!==0&&Pt(e,s,i)}function Mc(){return(ze&6)===0?(Jo(0),!1):!0}function bd(){if(Se!==null){if(Ie===0)var e=Se.return;else e=Se,na=Dr=null,If(e),_s=null,ko=0,e=Se;for(;e!==null;)Ng(e.alternate,e),e=e.return;Se=null}}function As(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,iS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),bd(),Qe=e,Se=s=Ji(e.current,null),we=i,Ie=0,ai=null,Ya=!1,Ss=le(e,i),pd=!1,Ms=gi=md=Br=Za=an=0,Zn=Qo=null,gd=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-Xt(l),m=1<<f;i|=e[f],l&=~m}return ua=i,jl(),s}function tv(e,i){ve=null,I.H=uc,i===Oo||i===tc?(i=v0(),Ie=3):i===p0?(i=v0(),Ie=4):Ie=i===_g?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ai=i,Se===null&&(an=1,mc(e,fi(i,e.current)))}function ev(){var e=I.H;return I.H=uc,e===null?uc:e}function nv(){var e=I.A;return I.A=zb,e}function Sd(){an=4,Ya||(we&4194048)!==we&&mi.current!==null||(Ss=!0),(Za&134217727)===0&&(Br&134217727)===0||Qe===null||$a(Qe,we,gi,!1)}function Md(e,i,s){var l=ze;ze|=2;var f=ev(),m=nv();(Qe!==e||we!==i)&&(Sc=null,As(e,i)),i=!1;var S=an;t:do try{if(Ie!==0&&Se!==null){var A=Se,V=ai;switch(Ie){case 8:bd(),S=6;break t;case 3:case 2:case 9:case 6:mi.current===null&&(i=!0);var it=Ie;if(Ie=0,ai=null,Rs(e,A,V,it),s&&Ss){S=0;break t}break;default:it=Ie,Ie=0,ai=null,Rs(e,A,V,it)}}Hb(),S=an;break}catch(mt){tv(e,mt)}while(!0);return i&&e.shellSuspendCounter++,na=Dr=null,ze=l,I.H=f,I.A=m,Se===null&&(Qe=null,we=0,jl()),S}function Hb(){for(;Se!==null;)iv(Se)}function Gb(e,i){var s=ze;ze|=2;var l=ev(),f=nv();Qe!==e||we!==i?(Sc=null,bc=$t()+500,As(e,i)):Ss=le(e,i);t:do try{if(Ie!==0&&Se!==null){i=Se;var m=ai;e:switch(Ie){case 1:Ie=0,ai=null,Rs(e,i,m,1);break;case 2:case 9:if(m0(m)){Ie=0,ai=null,av(i);break}i=function(){Ie!==2&&Ie!==9||Qe!==e||(Ie=7),Gi(e)},m.then(i,i);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:m0(m)?(Ie=0,ai=null,av(i)):(Ie=0,ai=null,Rs(e,i,m,7));break;case 5:var S=null;switch(Se.tag){case 26:S=Se.memoizedState;case 5:case 27:var A=Se;if(!S||Fv(S)){Ie=0,ai=null;var V=A.sibling;if(V!==null)Se=V;else{var it=A.return;it!==null?(Se=it,Ec(it)):Se=null}break e}}Ie=0,ai=null,Rs(e,i,m,5);break;case 6:Ie=0,ai=null,Rs(e,i,m,6);break;case 8:bd(),an=6;break t;default:throw Error(r(462))}}Vb();break}catch(mt){tv(e,mt)}while(!0);return na=Dr=null,I.H=l,I.A=f,ze=s,Se!==null?0:(Qe=null,we=0,jl(),an)}function Vb(){for(;Se!==null&&!te();)iv(Se)}function iv(e){var i=Dg(e.alternate,e,ua);e.memoizedProps=e.pendingProps,i===null?Ec(e):Se=i}function av(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=Eg(s,i,i.pendingProps,i.type,void 0,we);break;case 11:i=Eg(s,i,i.pendingProps,i.type.render,i.ref,we);break;case 5:If(i);default:Ng(s,i),i=Se=r0(i,ua),i=Dg(s,i,ua)}e.memoizedProps=e.pendingProps,i===null?Ec(e):Se=i}function Rs(e,i,s,l){na=Dr=null,If(i),_s=null,ko=0;var f=i.return;try{if(Ub(e,f,i,s,we)){an=1,mc(e,fi(s,e.current)),Se=null;return}}catch(m){if(f!==null)throw Se=f,m;an=1,mc(e,fi(s,e.current)),Se=null;return}i.flags&32768?(Pe||l===1?e=!0:Ss||(we&536870912)!==0?e=!1:(Ya=e=!0,(l===2||l===9||l===3||l===6)&&(l=mi.current,l!==null&&l.tag===13&&(l.flags|=16384))),rv(i,e)):Ec(i)}function Ec(e){var i=e;do{if((i.flags&32768)!==0){rv(i,Ya);return}e=i.return;var s=Lb(i.alternate,i,ua);if(s!==null){Se=s;return}if(i=i.sibling,i!==null){Se=i;return}Se=i=e}while(i!==null);an===0&&(an=5)}function rv(e,i){do{var s=Ob(e.alternate,e);if(s!==null){s.flags&=32767,Se=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Se=e;return}Se=e=s}while(e!==null);an=6,Se=null}function sv(e,i,s,l,f,m,S,A,V){e.cancelPendingCommit=null;do Tc();while(Un!==0);if((ze&6)!==0)throw Error(r(327));if(i!==null){if(i===e.current)throw Error(r(177));if(m=i.lanes|i.childLanes,m|=hf,It(e,s,m,S,A,V),e===Qe&&(Se=Qe=null,we=0),Es=i,Qa=e,Ts=s,_d=m,xd=f,Kg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Wb(B,function(){return fv(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,f=q.p,q.p=2,S=ze,ze|=4;try{Pb(e,i,s)}finally{ze=S,q.p=f,I.T=l}}Un=1,ov(),lv(),cv()}}function ov(){if(Un===1){Un=0;var e=Qa,i=Es,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var l=q.p;q.p=2;var f=ze;ze|=4;try{kg(i,e);var m=Pd,S=Zm(e.containerInfo),A=m.focusedElem,V=m.selectionRange;if(S!==A&&A&&A.ownerDocument&&Ym(A.ownerDocument.documentElement,A)){if(V!==null&&lf(A)){var it=V.start,mt=V.end;if(mt===void 0&&(mt=it),"selectionStart"in A)A.selectionStart=it,A.selectionEnd=Math.min(mt,A.value.length);else{var Mt=A.ownerDocument||document,rt=Mt&&Mt.defaultView||window;if(rt.getSelection){var ot=rt.getSelection(),se=A.textContent.length,ee=Math.min(V.start,se),ke=V.end===void 0?ee:Math.min(V.end,se);!ot.extend&&ee>ke&&(S=ke,ke=ee,ee=S);var Q=qm(A,ee),j=qm(A,ke);if(Q&&j&&(ot.rangeCount!==1||ot.anchorNode!==Q.node||ot.anchorOffset!==Q.offset||ot.focusNode!==j.node||ot.focusOffset!==j.offset)){var nt=Mt.createRange();nt.setStart(Q.node,Q.offset),ot.removeAllRanges(),ee>ke?(ot.addRange(nt),ot.extend(j.node,j.offset)):(nt.setEnd(j.node,j.offset),ot.addRange(nt))}}}}for(Mt=[],ot=A;ot=ot.parentNode;)ot.nodeType===1&&Mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Mt.length;A++){var xt=Mt[A];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}zc=!!Od,Pd=Od=null}finally{ze=f,q.p=l,I.T=s}}e.current=i,Un=2}}function lv(){if(Un===2){Un=0;var e=Qa,i=Es,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var l=q.p;q.p=2;var f=ze;ze|=4;try{Fg(e,i.alternate,i)}finally{ze=f,q.p=l,I.T=s}}Un=3}}function cv(){if(Un===4||Un===3){Un=0,oe();var e=Qa,i=Es,s=Ts,l=Kg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Un=5:(Un=0,Es=Qa=null,uv(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ka=null),ln(s),i=i.stateNode,Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(gt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=I.T,f=q.p,q.p=2,I.T=null;try{for(var m=e.onRecoverableError,S=0;S<l.length;S++){var A=l[S];m(A.value,{componentStack:A.stack})}}finally{I.T=i,q.p=f}}(Ts&3)!==0&&Tc(),Gi(e),f=e.pendingLanes,(s&4194090)!==0&&(f&42)!==0?e===yd?$o++:($o=0,yd=e):$o=0,Jo(0)}}function uv(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,No(i)))}function Tc(e){return ov(),lv(),cv(),fv()}function fv(){if(Un!==5)return!1;var e=Qa,i=_d;_d=0;var s=ln(Ts),l=I.T,f=q.p;try{q.p=32>s?32:s,I.T=null,s=xd,xd=null;var m=Qa,S=Ts;if(Un=0,Es=Qa=null,Ts=0,(ze&6)!==0)throw Error(r(331));var A=ze;if(ze|=4,Yg(m.current),jg(m,m.current,S,s),ze=A,Jo(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(gt,m)}catch{}return!0}finally{q.p=f,I.T=l,uv(e,i)}}function dv(e,i,s){i=fi(s,i),i=$f(e.stateNode,i,2),e=Ga(e,i,2),e!==null&&(St(e,2),Gi(e))}function We(e,i,s){if(e.tag===3)dv(e,e,s);else for(;i!==null;){if(i.tag===3){dv(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ka===null||!Ka.has(l))){e=fi(s,e),s=gg(2),l=Ga(i,s,2),l!==null&&(vg(s,l,i,e),St(l,2),Gi(l));break}}i=i.return}}function Ed(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new Ib;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(pd=!0,f.add(s),e=kb.bind(null,e,i,s),i.then(e,e))}function kb(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Qe===e&&(we&s)===s&&(an===4||an===3&&(we&62914560)===we&&300>$t()-vd?(ze&2)===0&&As(e,0):md|=s,Ms===we&&(Ms=0)),Gi(e)}function hv(e,i){i===0&&(i=Ot()),e=ls(e,i),e!==null&&(St(e,i),Gi(e))}function Xb(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),hv(e,s)}function jb(e,i){var s=0;switch(e.tag){case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),hv(e,s)}function Wb(e,i){return Ht(e,i)}var Ac=null,ws=null,Td=!1,Rc=!1,Ad=!1,zr=0;function Gi(e){e!==ws&&e.next===null&&(ws===null?Ac=ws=e:ws=ws.next=e),Rc=!0,Td||(Td=!0,Yb())}function Jo(e,i){if(!Ad&&Rc){Ad=!0;do for(var s=!1,l=Ac;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var S=l.suspendedLanes,A=l.pingedLanes;m=(1<<31-Xt(42|e)+1)-1,m&=f&~(S&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,vv(l,m))}else m=we,m=ge(l,l===Qe?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||le(l,m)||(s=!0,vv(l,m));l=l.next}while(s);Ad=!1}}function qb(){pv()}function pv(){Rc=Td=!1;var e=0;zr!==0&&(nS()&&(e=zr),zr=0);for(var i=$t(),s=null,l=Ac;l!==null;){var f=l.next,m=mv(l,i);m===0?(l.next=null,s===null?Ac=f:s.next=f,f===null&&(ws=s)):(s=l,(e!==0||(m&3)!==0)&&(Rc=!0)),l=f}Jo(e)}function mv(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var S=31-Xt(m),A=1<<S,V=f[S];V===-1?((A&s)===0||(A&l)!==0)&&(f[S]=He(A,i)):V<=i&&(e.expiredLanes|=A),m&=~A}if(i=Qe,s=we,s=ge(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&H(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||le(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&H(l),ln(s)){case 2:case 8:s=Wt;break;case 32:s=B;break;case 268435456:s=at;break;default:s=B}return l=gv.bind(null,e),s=Ht(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&H(l),e.callbackPriority=2,e.callbackNode=null,2}function gv(e,i){if(Un!==0&&Un!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Tc()&&e.callbackNode!==s)return null;var l=we;return l=ge(e,e===Qe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:($g(e,l,i),mv(e,$t()),e.callbackNode!=null&&e.callbackNode===s?gv.bind(null,e):null)}function vv(e,i){if(Tc())return null;$g(e,i,!0)}function Yb(){aS(function(){(ze&6)!==0?Ht(Fe,qb):pv()})}function Rd(){return zr===0&&(zr=K()),zr}function _v(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Il(""+e)}function xv(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function Zb(e,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=_v((f[wn]||null).action),S=l.submitter;S&&(i=(i=S[wn]||null)?_v(i.formAction):S.getAttribute("formAction"),i!==null&&(m=i,S=null));var A=new Vl("action","action",null,l,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(zr!==0){var V=S?xv(f,S):new FormData(f);qf(s,{pending:!0,data:V,method:f.method,action:m},null,V)}}else typeof m=="function"&&(A.preventDefault(),V=S?xv(f,S):new FormData(f),qf(s,{pending:!0,data:V,method:f.method,action:m},m,V))},currentTarget:f}]})}}for(var wd=0;wd<df.length;wd++){var Cd=df[wd],Kb=Cd.toLowerCase(),Qb=Cd[0].toUpperCase()+Cd.slice(1);Ei(Kb,"on"+Qb)}Ei($m,"onAnimationEnd"),Ei(Jm,"onAnimationIteration"),Ei(t0,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(pb,"onTransitionRun"),Ei(mb,"onTransitionStart"),Ei(gb,"onTransitionCancel"),Ei(e0,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),Zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Zi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$b=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function yv(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],f=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var S=l.length-1;0<=S;S--){var A=l[S],V=A.instance,it=A.currentTarget;if(A=A.listener,V!==m&&f.isPropagationStopped())break t;m=A,f.currentTarget=it;try{m(f)}catch(mt){pc(mt)}f.currentTarget=null,m=V}else for(S=0;S<l.length;S++){if(A=l[S],V=A.instance,it=A.currentTarget,A=A.listener,V!==m&&f.isPropagationStopped())break t;m=A,f.currentTarget=it;try{m(f)}catch(mt){pc(mt)}f.currentTarget=null,m=V}}}}function Me(e,i){var s=i[xr];s===void 0&&(s=i[xr]=new Set);var l=e+"__bubble";s.has(l)||(bv(i,e,2,!1),s.add(l))}function Dd(e,i,s){var l=0;i&&(l|=4),bv(s,e,l,i)}var wc="_reactListening"+Math.random().toString(36).slice(2);function Ud(e){if(!e[wc]){e[wc]=!0,Bl.forEach(function(s){s!=="selectionchange"&&($b.has(s)||Dd(s,!1,e),Dd(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[wc]||(i[wc]=!0,Dd("selectionchange",!1,i))}}function bv(e,i,s,l){switch(jv(i)){case 2:var f=TS;break;case 8:f=AS;break;default:f=jd}s=f.bind(null,i,s,e),f=void 0,!$u||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,s,{capture:!0,passive:f}):e.addEventListener(i,s,!0):f!==void 0?e.addEventListener(i,s,{passive:f}):e.addEventListener(i,s,!1)}function Nd(e,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var A=l.stateNode.containerInfo;if(A===f)break;if(S===4)for(S=l.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;A!==null;){if(S=qi(A),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){l=m=S;continue t}A=A.parentNode}}l=l.return}wm(function(){var it=m,mt=Ku(s),Mt=[];t:{var rt=n0.get(e);if(rt!==void 0){var ot=Vl,se=e;switch(e){case"keypress":if(Hl(s)===0)break t;case"keydown":case"keyup":ot=Wy;break;case"focusin":se="focus",ot=nf;break;case"focusout":se="blur",ot=nf;break;case"beforeblur":case"afterblur":ot=nf;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Zy;break;case $m:case Jm:case t0:ot=zy;break;case e0:ot=Qy;break;case"scroll":case"scrollend":ot=Ny;break;case"wheel":ot=Jy;break;case"copy":case"cut":case"paste":ot=Fy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Lm;break;case"toggle":case"beforetoggle":ot=eb}var ee=(i&4)!==0,ke=!ee&&(e==="scroll"||e==="scrollend"),Q=ee?rt!==null?rt+"Capture":null:rt;ee=[];for(var j=it,nt;j!==null;){var xt=j;if(nt=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||nt===null||Q===null||(xt=xo(j,Q),xt!=null&&ee.push(el(j,xt,nt))),ke)break;j=j.return}0<ee.length&&(rt=new ot(rt,se,null,s,mt),Mt.push({event:rt,listeners:ee}))}}if((i&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",rt&&s!==Zu&&(se=s.relatedTarget||s.fromElement)&&(qi(se)||se[jn]))break t;if((ot||rt)&&(rt=mt.window===mt?mt:(rt=mt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ot?(se=s.relatedTarget||s.toElement,ot=it,se=se?qi(se):null,se!==null&&(ke=c(se),ee=se.tag,se!==ke||ee!==5&&ee!==27&&ee!==6)&&(se=null)):(ot=null,se=it),ot!==se)){if(ee=Um,xt="onMouseLeave",Q="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Lm,xt="onPointerLeave",Q="onPointerEnter",j="pointer"),ke=ot==null?rt:br(ot),nt=se==null?rt:br(se),rt=new ee(xt,j+"leave",ot,s,mt),rt.target=ke,rt.relatedTarget=nt,xt=null,qi(mt)===it&&(ee=new ee(Q,j+"enter",se,s,mt),ee.target=nt,ee.relatedTarget=ke,xt=ee),ke=xt,ot&&se)e:{for(ee=ot,Q=se,j=0,nt=ee;nt;nt=Cs(nt))j++;for(nt=0,xt=Q;xt;xt=Cs(xt))nt++;for(;0<j-nt;)ee=Cs(ee),j--;for(;0<nt-j;)Q=Cs(Q),nt--;for(;j--;){if(ee===Q||Q!==null&&ee===Q.alternate)break e;ee=Cs(ee),Q=Cs(Q)}ee=null}else ee=null;ot!==null&&Sv(Mt,rt,ot,ee,!1),se!==null&&ke!==null&&Sv(Mt,ke,se,ee,!0)}}t:{if(rt=it?br(it):window,ot=rt.nodeName&&rt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&rt.type==="file")var Vt=Gm;else if(Fm(rt))if(Vm)Vt=fb;else{Vt=cb;var _e=lb}else ot=rt.nodeName,!ot||ot.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?it&&Yu(it.elementType)&&(Vt=Gm):Vt=ub;if(Vt&&(Vt=Vt(e,it))){Hm(Mt,Vt,s,mt);break t}_e&&_e(e,rt,it),e==="focusout"&&it&&rt.type==="number"&&it.memoizedProps.value!=null&&On(rt,"number",rt.value)}switch(_e=it?br(it):window,e){case"focusin":(Fm(_e)||_e.contentEditable==="true")&&(rs=_e,cf=it,Ro=null);break;case"focusout":Ro=cf=rs=null;break;case"mousedown":uf=!0;break;case"contextmenu":case"mouseup":case"dragend":uf=!1,Km(Mt,s,mt);break;case"selectionchange":if(hb)break;case"keydown":case"keyup":Km(Mt,s,mt)}var qt;if(rf)t:{switch(e){case"compositionstart":var ie="onCompositionStart";break t;case"compositionend":ie="onCompositionEnd";break t;case"compositionupdate":ie="onCompositionUpdate";break t}ie=void 0}else as?zm(e,s)&&(ie="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ie="onCompositionStart");ie&&(Om&&s.locale!=="ko"&&(as||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&as&&(qt=Cm()):(za=mt,Ju="value"in za?za.value:za.textContent,as=!0)),_e=Cc(it,ie),0<_e.length&&(ie=new Nm(ie,e,null,s,mt),Mt.push({event:ie,listeners:_e}),qt?ie.data=qt:(qt=Im(s),qt!==null&&(ie.data=qt)))),(qt=ib?ab(e,s):rb(e,s))&&(ie=Cc(it,"onBeforeInput"),0<ie.length&&(_e=new Nm("onBeforeInput","beforeinput",null,s,mt),Mt.push({event:_e,listeners:ie}),_e.data=qt)),Zb(Mt,e,it,s,mt)}yv(Mt,i)})}function el(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Cc(e,i){for(var s=i+"Capture",l=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=xo(e,s),f!=null&&l.unshift(el(e,f,m)),f=xo(e,i),f!=null&&l.push(el(e,f,m))),e.tag===3)return l;e=e.return}return[]}function Cs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Sv(e,i,s,l,f){for(var m=i._reactName,S=[];s!==null&&s!==l;){var A=s,V=A.alternate,it=A.stateNode;if(A=A.tag,V!==null&&V===l)break;A!==5&&A!==26&&A!==27||it===null||(V=it,f?(it=xo(s,m),it!=null&&S.unshift(el(s,it,V))):f||(it=xo(s,m),it!=null&&S.push(el(s,it,V)))),s=s.return}S.length!==0&&e.push({event:i,listeners:S})}var Jb=/\r\n?/g,tS=/\u0000|\uFFFD/g;function Mv(e){return(typeof e=="string"?e:""+e).replace(Jb,`
`).replace(tS,"")}function Ev(e,i){return i=Mv(i),Mv(e)===i}function Dc(){}function Ve(e,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Bi(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Bi(e,""+l);break;case"className":Ut(e,"class",l);break;case"tabIndex":Ut(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ut(e,s,l);break;case"style":Am(e,l,m);break;case"data":if(i!=="object"){Ut(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Il(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Ve(e,i,"name",f.name,f,null),Ve(e,i,"formEncType",f.formEncType,f,null),Ve(e,i,"formMethod",f.formMethod,f,null),Ve(e,i,"formTarget",f.formTarget,f,null)):(Ve(e,i,"encType",f.encType,f,null),Ve(e,i,"method",f.method,f,null),Ve(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Il(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=Dc);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Il(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Rt(e,"popover",l);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Rt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Dy.get(s)||s,Rt(e,s,l))}}function Ld(e,i,s,l,f,m){switch(s){case"style":Am(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Bi(e,l):(typeof l=="number"||typeof l=="bigint")&&Bi(e,""+l);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Dc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zl.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=e[wn]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,f);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Rt(e,s,l)}}}function Nn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var S=s[m];if(S!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Ve(e,i,m,S,s,null)}}f&&Ve(e,i,"srcSet",s.srcSet,s,null),l&&Ve(e,i,"src",s.src,s,null);return;case"input":Me("invalid",e);var A=m=S=f=null,V=null,it=null;for(l in s)if(s.hasOwnProperty(l)){var mt=s[l];if(mt!=null)switch(l){case"name":f=mt;break;case"type":S=mt;break;case"checked":V=mt;break;case"defaultChecked":it=mt;break;case"value":m=mt;break;case"defaultValue":A=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,i));break;default:Ve(e,i,l,mt,s,null)}}je(e,m,A,V,it,S,f,!1),en(e);return;case"select":Me("invalid",e),l=S=m=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":S=A;break;case"multiple":l=A;default:Ve(e,i,f,A,s,null)}i=m,s=S,e.multiple=!!l,i!=null?vn(e,!!l,i,!1):s!=null&&vn(e,!!l,s,!0);return;case"textarea":Me("invalid",e),m=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(A=s[S],A!=null))switch(S){case"value":l=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Ve(e,i,S,A,s,null)}Cn(e,l,f,m),en(e);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(l=s[V],l!=null))switch(V){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ve(e,i,V,l,s,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(l=0;l<tl.length;l++)Me(tl[l],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in s)if(s.hasOwnProperty(it)&&(l=s[it],l!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Ve(e,i,it,l,s,null)}return;default:if(Yu(i)){for(mt in s)s.hasOwnProperty(mt)&&(l=s[mt],l!==void 0&&Ld(e,i,mt,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Ve(e,i,A,l,s,null))}function eS(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,S=null,A=null,V=null,it=null,mt=null;for(ot in s){var Mt=s[ot];if(s.hasOwnProperty(ot)&&Mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":V=Mt;default:l.hasOwnProperty(ot)||Ve(e,i,ot,null,l,Mt)}}for(var rt in l){var ot=l[rt];if(Mt=s[rt],l.hasOwnProperty(rt)&&(ot!=null||Mt!=null))switch(rt){case"type":m=ot;break;case"name":f=ot;break;case"checked":it=ot;break;case"defaultChecked":mt=ot;break;case"value":S=ot;break;case"defaultValue":A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,i));break;default:ot!==Mt&&Ve(e,i,rt,ot,l,Mt)}}Ki(e,S,A,V,it,mt,m,f);return;case"select":ot=S=A=rt=null;for(m in s)if(V=s[m],s.hasOwnProperty(m)&&V!=null)switch(m){case"value":break;case"multiple":ot=V;default:l.hasOwnProperty(m)||Ve(e,i,m,null,l,V)}for(f in l)if(m=l[f],V=s[f],l.hasOwnProperty(f)&&(m!=null||V!=null))switch(f){case"value":rt=m;break;case"defaultValue":A=m;break;case"multiple":S=m;default:m!==V&&Ve(e,i,f,m,l,V)}i=A,s=S,l=ot,rt!=null?vn(e,!!s,rt,!1):!!l!=!!s&&(i!=null?vn(e,!!s,i,!0):vn(e,!!s,s?[]:"",!1));return;case"textarea":ot=rt=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ve(e,i,A,null,l,f)}for(S in l)if(f=l[S],m=s[S],l.hasOwnProperty(S)&&(f!=null||m!=null))switch(S){case"value":rt=f;break;case"defaultValue":ot=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==m&&Ve(e,i,S,f,l,m)}Mn(e,rt,ot);return;case"option":for(var se in s)if(rt=s[se],s.hasOwnProperty(se)&&rt!=null&&!l.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:Ve(e,i,se,null,l,rt)}for(V in l)if(rt=l[V],ot=s[V],l.hasOwnProperty(V)&&rt!==ot&&(rt!=null||ot!=null))switch(V){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Ve(e,i,V,rt,l,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in s)rt=s[ee],s.hasOwnProperty(ee)&&rt!=null&&!l.hasOwnProperty(ee)&&Ve(e,i,ee,null,l,rt);for(it in l)if(rt=l[it],ot=s[it],l.hasOwnProperty(it)&&rt!==ot&&(rt!=null||ot!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,i));break;default:Ve(e,i,it,rt,l,ot)}return;default:if(Yu(i)){for(var ke in s)rt=s[ke],s.hasOwnProperty(ke)&&rt!==void 0&&!l.hasOwnProperty(ke)&&Ld(e,i,ke,void 0,l,rt);for(mt in l)rt=l[mt],ot=s[mt],!l.hasOwnProperty(mt)||rt===ot||rt===void 0&&ot===void 0||Ld(e,i,mt,rt,l,ot);return}}for(var Q in s)rt=s[Q],s.hasOwnProperty(Q)&&rt!=null&&!l.hasOwnProperty(Q)&&Ve(e,i,Q,null,l,rt);for(Mt in l)rt=l[Mt],ot=s[Mt],!l.hasOwnProperty(Mt)||rt===ot||rt==null&&ot==null||Ve(e,i,Mt,rt,l,ot)}var Od=null,Pd=null;function Uc(e){return e.nodeType===9?e:e.ownerDocument}function Tv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Av(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Bd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var zd=null;function nS(){var e=window.event;return e&&e.type==="popstate"?e===zd?!1:(zd=e,!0):(zd=null,!1)}var Rv=typeof setTimeout=="function"?setTimeout:void 0,iS=typeof clearTimeout=="function"?clearTimeout:void 0,wv=typeof Promise=="function"?Promise:void 0,aS=typeof queueMicrotask=="function"?queueMicrotask:typeof wv<"u"?function(e){return wv.resolve(null).then(e).catch(rS)}:Rv;function rS(e){setTimeout(function(){throw e})}function Ja(e){return e==="head"}function Cv(e,i){var s=i,l=0,f=0;do{var m=s.nextSibling;if(e.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var S=e.ownerDocument;if(s&1&&nl(S.documentElement),s&2&&nl(S.body),s&4)for(s=S.head,nl(s),S=s.firstChild;S;){var A=S.nextSibling,V=S.nodeName;S[La]||V==="SCRIPT"||V==="STYLE"||V==="LINK"&&S.rel.toLowerCase()==="stylesheet"||s.removeChild(S),S=A}}if(f===0){e.removeChild(m),ul(i);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);ul(i)}function Id(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Id(s),Oa(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function sS(e,i,s,l){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[La])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ai(e.nextSibling),e===null)break}return null}function oS(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ai(e.nextSibling),e===null))return null;return e}function Fd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function lS(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ai(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Hd=null;function Dv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function Uv(e,i,s){switch(i=Uc(s),e){case"html":if(e=i.documentElement,!e)throw Error(r(452));return e;case"head":if(e=i.head,!e)throw Error(r(453));return e;case"body":if(e=i.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function nl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Oa(e)}var vi=new Map,Nv=new Set;function Nc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=q.d;q.d={f:cS,r:uS,D:fS,C:dS,L:hS,m:pS,X:gS,S:mS,M:vS};function cS(){var e=fa.f(),i=Mc();return e||i}function uS(e){var i=Yi(e);i!==null&&i.tag===5&&i.type==="form"?$0(i):fa.r(e)}var Ds=typeof document>"u"?null:document;function Lv(e,i,s){var l=Ds;if(l&&typeof i=="string"&&i){var f=Ke(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),Nv.has(f)||(Nv.add(f),e={rel:e,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Nn(i,"link",e),cn(i),l.head.appendChild(i)))}}function fS(e){fa.D(e),Lv("dns-prefetch",e,null)}function dS(e,i){fa.C(e,i),Lv("preconnect",e,i)}function hS(e,i,s){fa.L(e,i,s);var l=Ds;if(l&&e&&i){var f='link[rel="preload"][as="'+Ke(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Ke(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Ke(s.imageSizes)+'"]')):f+='[href="'+Ke(e)+'"]';var m=f;switch(i){case"style":m=Us(e);break;case"script":m=Ns(e)}vi.has(m)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),vi.set(m,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(il(m))||i==="script"&&l.querySelector(al(m))||(i=l.createElement("link"),Nn(i,"link",e),cn(i),l.head.appendChild(i)))}}function pS(e,i){fa.m(e,i);var s=Ds;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Ke(l)+'"][href="'+Ke(e)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Ns(e)}if(!vi.has(m)&&(e=g({rel:"modulepreload",href:e},i),vi.set(m,e),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(al(m)))return}l=s.createElement("link"),Nn(l,"link",e),cn(l),s.head.appendChild(l)}}}function mS(e,i,s){fa.S(e,i,s);var l=Ds;if(l&&e){var f=Pa(l).hoistableStyles,m=Us(e);i=i||"default";var S=f.get(m);if(!S){var A={loading:0,preload:null};if(S=l.querySelector(il(m)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=vi.get(m))&&Gd(e,s);var V=S=l.createElement("link");cn(V),Nn(V,"link",e),V._p=new Promise(function(it,mt){V.onload=it,V.onerror=mt}),V.addEventListener("load",function(){A.loading|=1}),V.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Lc(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:A},f.set(m,S)}}}function gS(e,i){fa.X(e,i);var s=Ds;if(s&&e){var l=Pa(s).hoistableScripts,f=Ns(e),m=l.get(f);m||(m=s.querySelector(al(f)),m||(e=g({src:e,async:!0},i),(i=vi.get(f))&&Vd(e,i),m=s.createElement("script"),cn(m),Nn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function vS(e,i){fa.M(e,i);var s=Ds;if(s&&e){var l=Pa(s).hoistableScripts,f=Ns(e),m=l.get(f);m||(m=s.querySelector(al(f)),m||(e=g({src:e,async:!0,type:"module"},i),(i=vi.get(f))&&Vd(e,i),m=s.createElement("script"),cn(m),Nn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function Ov(e,i,s,l){var f=(f=_t.current)?Nc(f):null;if(!f)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Us(s.href),s=Pa(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Us(s.href);var m=Pa(f).hoistableStyles,S=m.get(e);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,S),(m=f.querySelector(il(e)))&&!m._p&&(S.instance=m,S.state.loading=5),vi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},vi.set(e,s),m||_S(f,e,s,S.state))),i&&l===null)throw Error(r(528,""));return S}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ns(s),s=Pa(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Us(e){return'href="'+Ke(e)+'"'}function il(e){return'link[rel="stylesheet"]['+e+"]"}function Pv(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function _S(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Nn(i,"link",s),cn(i),e.head.appendChild(i))}function Ns(e){return'[src="'+Ke(e)+'"]'}function al(e){return"script[async]"+e}function Bv(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+Ke(s.href)+'"]');if(l)return i.instance=l,cn(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),cn(l),Nn(l,"style",f),Lc(l,s.precedence,e),i.instance=l;case"stylesheet":f=Us(s.href);var m=e.querySelector(il(f));if(m)return i.state.loading|=4,i.instance=m,cn(m),m;l=Pv(s),(f=vi.get(f))&&Gd(l,f),m=(e.ownerDocument||e).createElement("link"),cn(m);var S=m;return S._p=new Promise(function(A,V){S.onload=A,S.onerror=V}),Nn(m,"link",l),i.state.loading|=4,Lc(m,s.precedence,e),i.instance=m;case"script":return m=Ns(s.src),(f=e.querySelector(al(m)))?(i.instance=f,cn(f),f):(l=s,(f=vi.get(m))&&(l=g({},s),Vd(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),cn(f),Nn(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Lc(l,s.precedence,e));return i.instance}function Lc(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,S=0;S<l.length;S++){var A=l[S];if(A.dataset.precedence===i)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Gd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Vd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Oc=null;function zv(e,i,s){if(Oc===null){var l=new Map,f=Oc=new Map;f.set(s,l)}else f=Oc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var m=s[f];if(!(m[La]||m[gn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(i)||"";S=e+S;var A=l.get(S);A?A.push(m):l.set(S,[m])}}return l}function Iv(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function xS(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Fv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var rl=null;function yS(){}function bS(e,i,s){if(rl===null)throw Error(r(475));var l=rl;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=Us(s.href),m=e.querySelector(il(f));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Pc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=m,cn(m);return}m=e.ownerDocument||e,s=Pv(s),(f=vi.get(f))&&Gd(s,f),m=m.createElement("link"),cn(m);var S=m;S._p=new Promise(function(A,V){S.onload=A,S.onerror=V}),Nn(m,"link",s),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Pc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function SS(){if(rl===null)throw Error(r(475));var e=rl;return e.stylesheets&&e.count===0&&kd(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&kd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Pc(){if(this.count--,this.count===0){if(this.stylesheets)kd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bc=null;function kd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bc=new Map,i.forEach(MS,e),Bc=null,Pc.call(e))}function MS(e,i){if(!(i.state.loading&4)){var s=Bc.get(e);if(s)var l=s.get(null);else{s=new Map,Bc.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var S=f[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),m=s.get(S)||l,m===l&&s.set(null,f),s.set(S,f),this.count++,l=Pc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var sl={$$typeof:N,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function ES(e,i,s,l,f,m,S,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ht(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ht(0),this.hiddenUpdates=ht(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Hv(e,i,s,l,f,m,S,A,V,it,mt,Mt){return e=new ES(e,i,s,S,A,V,it,Mt),i=1,m===!0&&(i|=24),m=ei(3,null,null,i),e.current=m,m.stateNode=e,i=Ef(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},wf(m),e}function Gv(e){return e?(e=cs,e):cs}function Vv(e,i,s,l,f,m){f=Gv(f),l.context===null?l.context=f:l.pendingContext=f,l=Ha(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Ga(e,l,i),s!==null&&(si(s,e,i),Bo(s,e,i))}function kv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Xd(e,i){kv(e,i),(e=e.alternate)&&kv(e,i)}function Xv(e){if(e.tag===13){var i=ls(e,67108864);i!==null&&si(i,e,67108864),Xd(e,67108864)}}var zc=!0;function TS(e,i,s,l){var f=I.T;I.T=null;var m=q.p;try{q.p=2,jd(e,i,s,l)}finally{q.p=m,I.T=f}}function AS(e,i,s,l){var f=I.T;I.T=null;var m=q.p;try{q.p=8,jd(e,i,s,l)}finally{q.p=m,I.T=f}}function jd(e,i,s,l){if(zc){var f=Wd(l);if(f===null)Nd(e,i,l,Ic,s),Wv(e,l);else if(wS(f,e,i,s,l))l.stopPropagation();else if(Wv(e,l),i&4&&-1<RS.indexOf(e)){for(;f!==null;){var m=Yi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=zt(m.pendingLanes);if(S!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var V=1<<31-Xt(S);A.entanglements[1]|=V,S&=~V}Gi(m),(ze&6)===0&&(bc=$t()+500,Jo(0))}}break;case 13:A=ls(m,2),A!==null&&si(A,m,2),Mc(),Xd(m,2)}if(m=Wd(l),m===null&&Nd(e,i,l,Ic,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else Nd(e,i,l,null,s)}}function Wd(e){return e=Ku(e),qd(e)}var Ic=null;function qd(e){if(Ic=null,e=qi(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Ic=e,null}function jv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zt()){case Fe:return 2;case Wt:return 8;case B:case R:return 32;case at:return 268435456;default:return 32}default:return 32}}var Yd=!1,tr=null,er=null,nr=null,ol=new Map,ll=new Map,ir=[],RS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wv(e,i){switch(e){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":ol.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ll.delete(i.pointerId)}}function cl(e,i,s,l,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Yi(i),i!==null&&Xv(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function wS(e,i,s,l,f){switch(i){case"focusin":return tr=cl(tr,e,i,s,l,f),!0;case"dragenter":return er=cl(er,e,i,s,l,f),!0;case"mouseover":return nr=cl(nr,e,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return ol.set(m,cl(ol.get(m)||null,e,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,ll.set(m,cl(ll.get(m)||null,e,i,s,l,f)),!0}return!1}function qv(e){var i=qi(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,Jn(e.priority,function(){if(s.tag===13){var l=ri();l=Ze(l);var f=ls(s,l);f!==null&&si(f,s,l),Xd(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Wd(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Zu=l,s.target.dispatchEvent(l),Zu=null}else return i=Yi(s),i!==null&&Xv(i),e.blockedOn=s,!1;i.shift()}return!0}function Yv(e,i,s){Fc(e)&&s.delete(i)}function CS(){Yd=!1,tr!==null&&Fc(tr)&&(tr=null),er!==null&&Fc(er)&&(er=null),nr!==null&&Fc(nr)&&(nr=null),ol.forEach(Yv),ll.forEach(Yv)}function Hc(e,i){e.blockedOn===i&&(e.blockedOn=null,Yd||(Yd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,CS)))}var Gc=null;function Zv(e){Gc!==e&&(Gc=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Gc===e&&(Gc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(qd(l||s)===null)continue;break}var m=Yi(s);m!==null&&(e.splice(i,3),i-=3,qf(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function ul(e){function i(V){return Hc(V,e)}tr!==null&&Hc(tr,e),er!==null&&Hc(er,e),nr!==null&&Hc(nr,e),ol.forEach(i),ll.forEach(i);for(var s=0;s<ir.length;s++){var l=ir[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ir.length&&(s=ir[0],s.blockedOn===null);)qv(s),s.blockedOn===null&&ir.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],S=f[wn]||null;if(typeof m=="function")S||Zv(s);else if(S){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,S=m[wn]||null)A=S.formAction;else if(qd(f)!==null)continue}else A=S.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),Zv(s)}}}function Zd(e){this._internalRoot=e}Vc.prototype.render=Zd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=ri();Vv(s,l,e,i,null,null)},Vc.prototype.unmount=Zd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Vv(e.current,2,null,e,null,null),Mc(),i[jn]=null}};function Vc(e){this._internalRoot=e}Vc.prototype.unstable_scheduleHydration=function(e){if(e){var i=De();e={blockedOn:null,target:e,priority:i};for(var s=0;s<ir.length&&i!==0&&i<ir[s].priority;s++);ir.splice(s,0,e),s===0&&qv(e)}};var Kv=t.version;if(Kv!=="19.1.0")throw Error(r(527,Kv,"19.1.0"));q.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=h(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var DS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kc.isDisabled&&kc.supportsFiber)try{gt=kc.inject(DS),Bt=kc}catch{}}return dl.createRoot=function(e,i){if(!o(e))throw Error(r(299));var s=!1,l="",f=dg,m=hg,S=pg,A=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks)),i=Hv(e,1,!1,null,null,s,l,f,m,S,A,null),e[jn]=i.current,Ud(e),new Zd(i)},dl.hydrateRoot=function(e,i,s){if(!o(e))throw Error(r(299));var l=!1,f="",m=dg,S=hg,A=pg,V=null,it=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(V=s.unstable_transitionCallbacks),s.formState!==void 0&&(it=s.formState)),i=Hv(e,1,!0,i,s??null,l,f,m,S,A,V,it),i.context=Gv(null),s=i.current,l=ri(),l=Ze(l),f=Ha(l),f.callback=null,Ga(s,f,l),s=l,i.current.lanes=s,St(i,s),Gi(i),e[jn]=i.current,Ud(e),new Vc(i)},dl.version="19.1.0",dl}var s_;function FS(){if(s_)return $d.exports;s_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),$d.exports=IS(),$d.exports}var HS=FS(),xu={exports:{}},GS=xu.exports,o_;function VS(){return o_||(o_=1,function(a,t){(function(n,r){a.exports=r()})(GS,function(){return function(n){function r(c){if(o[c])return o[c].exports;var u=o[c]={exports:{},id:c,loaded:!1};return n[c].call(u.exports,u,u.exports,r),u.loaded=!0,u.exports}var o={};return r.m=n,r.c=o,r.p="dist/",r(0)}([function(n,r,o){function c(et){return et&&et.__esModule?et:{default:et}}var u=Object.assign||function(et){for(var ut=1;ut<arguments.length;ut++){var I=arguments[ut];for(var q in I)Object.prototype.hasOwnProperty.call(I,q)&&(et[q]=I[q])}return et},d=o(1),h=(c(d),o(6)),p=c(h),g=o(7),v=c(g),_=o(8),b=c(_),M=o(9),T=c(M),y=o(10),x=c(y),F=o(11),N=c(F),U=o(14),G=c(U),P=[],D=!1,z={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},w=function(){var et=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(et&&(D=!0),D)return P=(0,N.default)(P,z),(0,x.default)(P,z.once),P},E=function(){P=(0,G.default)(),w()},L=function(){P.forEach(function(et,ut){et.node.removeAttribute("data-aos"),et.node.removeAttribute("data-aos-easing"),et.node.removeAttribute("data-aos-duration"),et.node.removeAttribute("data-aos-delay")})},k=function(et){return et===!0||et==="mobile"&&T.default.mobile()||et==="phone"&&T.default.phone()||et==="tablet"&&T.default.tablet()||typeof et=="function"&&et()===!0},W=function(et){z=u(z,et),P=(0,G.default)();var ut=document.all&&!window.atob;return k(z.disable)||ut?L():(z.disableMutationObserver||b.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),z.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",z.easing),document.querySelector("body").setAttribute("data-aos-duration",z.duration),document.querySelector("body").setAttribute("data-aos-delay",z.delay),z.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?w(!0):z.startEvent==="load"?window.addEventListener(z.startEvent,function(){w(!0)}):document.addEventListener(z.startEvent,function(){w(!0)}),window.addEventListener("resize",(0,v.default)(w,z.debounceDelay,!0)),window.addEventListener("orientationchange",(0,v.default)(w,z.debounceDelay,!0)),window.addEventListener("scroll",(0,p.default)(function(){(0,x.default)(P,z.once)},z.throttleDelay)),z.disableMutationObserver||b.default.ready("[data-aos]",E),P)};n.exports={init:W,refresh:w,refreshHard:E}},function(n,r){},,,,,function(n,r){(function(o){function c(k,W,et){function ut(H){var te=Y,oe=dt;return Y=dt=void 0,kt=H,Et=k.apply(oe,te)}function I(H){return kt=H,At=setTimeout(yt,W),ye?ut(H):Et}function q(H){var te=H-jt,oe=H-kt,$t=W-te;return pe?E($t,_t-oe):$t}function X(H){var te=H-jt,oe=H-kt;return jt===void 0||te>=W||te<0||pe&&oe>=_t}function yt(){var H=L();return X(H)?O(H):void(At=setTimeout(yt,q(H)))}function O(H){return At=void 0,Ht&&Y?ut(H):(Y=dt=void 0,Et)}function tt(){At!==void 0&&clearTimeout(At),kt=0,Y=jt=dt=At=void 0}function vt(){return At===void 0?Et:O(L())}function pt(){var H=L(),te=X(H);if(Y=arguments,dt=this,jt=H,te){if(At===void 0)return I(jt);if(pe)return At=setTimeout(yt,W),ut(jt)}return At===void 0&&(At=setTimeout(yt,W)),Et}var Y,dt,_t,Et,At,jt,kt=0,ye=!1,pe=!1,Ht=!0;if(typeof k!="function")throw new TypeError(_);return W=g(W)||0,d(et)&&(ye=!!et.leading,pe="maxWait"in et,_t=pe?w(g(et.maxWait)||0,W):_t,Ht="trailing"in et?!!et.trailing:Ht),pt.cancel=tt,pt.flush=vt,pt}function u(k,W,et){var ut=!0,I=!0;if(typeof k!="function")throw new TypeError(_);return d(et)&&(ut="leading"in et?!!et.leading:ut,I="trailing"in et?!!et.trailing:I),c(k,W,{leading:ut,maxWait:W,trailing:I})}function d(k){var W=typeof k>"u"?"undefined":v(k);return!!k&&(W=="object"||W=="function")}function h(k){return!!k&&(typeof k>"u"?"undefined":v(k))=="object"}function p(k){return(typeof k>"u"?"undefined":v(k))=="symbol"||h(k)&&z.call(k)==M}function g(k){if(typeof k=="number")return k;if(p(k))return b;if(d(k)){var W=typeof k.valueOf=="function"?k.valueOf():k;k=d(W)?W+"":W}if(typeof k!="string")return k===0?k:+k;k=k.replace(T,"");var et=x.test(k);return et||F.test(k)?N(k.slice(2),et?2:8):y.test(k)?b:+k}var v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},_="Expected a function",b=NaN,M="[object Symbol]",T=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,F=/^0o[0-7]+$/i,N=parseInt,U=(typeof o>"u"?"undefined":v(o))=="object"&&o&&o.Object===Object&&o,G=(typeof self>"u"?"undefined":v(self))=="object"&&self&&self.Object===Object&&self,P=U||G||Function("return this")(),D=Object.prototype,z=D.toString,w=Math.max,E=Math.min,L=function(){return P.Date.now()};n.exports=u}).call(r,function(){return this}())},function(n,r){(function(o){function c(L,k,W){function et(Ht){var H=pt,te=Y;return pt=Y=void 0,jt=Ht,_t=L.apply(te,H)}function ut(Ht){return jt=Ht,Et=setTimeout(X,k),kt?et(Ht):_t}function I(Ht){var H=Ht-At,te=Ht-jt,oe=k-H;return ye?w(oe,dt-te):oe}function q(Ht){var H=Ht-At,te=Ht-jt;return At===void 0||H>=k||H<0||ye&&te>=dt}function X(){var Ht=E();return q(Ht)?yt(Ht):void(Et=setTimeout(X,I(Ht)))}function yt(Ht){return Et=void 0,pe&&pt?et(Ht):(pt=Y=void 0,_t)}function O(){Et!==void 0&&clearTimeout(Et),jt=0,pt=At=Y=Et=void 0}function tt(){return Et===void 0?_t:yt(E())}function vt(){var Ht=E(),H=q(Ht);if(pt=arguments,Y=this,At=Ht,H){if(Et===void 0)return ut(At);if(ye)return Et=setTimeout(X,k),et(At)}return Et===void 0&&(Et=setTimeout(X,k)),_t}var pt,Y,dt,_t,Et,At,jt=0,kt=!1,ye=!1,pe=!0;if(typeof L!="function")throw new TypeError(v);return k=p(k)||0,u(W)&&(kt=!!W.leading,ye="maxWait"in W,dt=ye?z(p(W.maxWait)||0,k):dt,pe="trailing"in W?!!W.trailing:pe),vt.cancel=O,vt.flush=tt,vt}function u(L){var k=typeof L>"u"?"undefined":g(L);return!!L&&(k=="object"||k=="function")}function d(L){return!!L&&(typeof L>"u"?"undefined":g(L))=="object"}function h(L){return(typeof L>"u"?"undefined":g(L))=="symbol"||d(L)&&D.call(L)==b}function p(L){if(typeof L=="number")return L;if(h(L))return _;if(u(L)){var k=typeof L.valueOf=="function"?L.valueOf():L;L=u(k)?k+"":k}if(typeof L!="string")return L===0?L:+L;L=L.replace(M,"");var W=y.test(L);return W||x.test(L)?F(L.slice(2),W?2:8):T.test(L)?_:+L}var g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},v="Expected a function",_=NaN,b="[object Symbol]",M=/^\s+|\s+$/g,T=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,x=/^0o[0-7]+$/i,F=parseInt,N=(typeof o>"u"?"undefined":g(o))=="object"&&o&&o.Object===Object&&o,U=(typeof self>"u"?"undefined":g(self))=="object"&&self&&self.Object===Object&&self,G=N||U||Function("return this")(),P=Object.prototype,D=P.toString,z=Math.max,w=Math.min,E=function(){return G.Date.now()};n.exports=c}).call(r,function(){return this}())},function(n,r){function o(g){var v=void 0,_=void 0;for(v=0;v<g.length;v+=1)if(_=g[v],_.dataset&&_.dataset.aos||_.children&&o(_.children))return!0;return!1}function c(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function u(){return!!c()}function d(g,v){var _=window.document,b=c(),M=new b(h);p=v,M.observe(_.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function h(g){g&&g.forEach(function(v){var _=Array.prototype.slice.call(v.addedNodes),b=Array.prototype.slice.call(v.removedNodes),M=_.concat(b);if(o(M))return p()})}Object.defineProperty(r,"__esModule",{value:!0});var p=function(){};r.default={isSupported:u,ready:d}},function(n,r){function o(_,b){if(!(_ instanceof b))throw new TypeError("Cannot call a class as a function")}function c(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var u=function(){function _(b,M){for(var T=0;T<M.length;T++){var y=M[T];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(b,y.key,y)}}return function(b,M,T){return M&&_(b.prototype,M),T&&_(b,T),b}}(),d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,h=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,p=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,g=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,v=function(){function _(){o(this,_)}return u(_,[{key:"phone",value:function(){var b=c();return!(!d.test(b)&&!h.test(b.substr(0,4)))}},{key:"mobile",value:function(){var b=c();return!(!p.test(b)&&!g.test(b.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),_}();r.default=new v},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var o=function(u,d,h){var p=u.node.getAttribute("data-aos-once");d>u.position?u.node.classList.add("aos-animate"):typeof p<"u"&&(p==="false"||!h&&p!=="true")&&u.node.classList.remove("aos-animate")},c=function(u,d){var h=window.pageYOffset,p=window.innerHeight;u.forEach(function(g,v){o(g,p+h,d)})};r.default=c},function(n,r,o){function c(p){return p&&p.__esModule?p:{default:p}}Object.defineProperty(r,"__esModule",{value:!0});var u=o(12),d=c(u),h=function(p,g){return p.forEach(function(v,_){v.node.classList.add("aos-init"),v.position=(0,d.default)(v.node,g.offset)}),p};r.default=h},function(n,r,o){function c(p){return p&&p.__esModule?p:{default:p}}Object.defineProperty(r,"__esModule",{value:!0});var u=o(13),d=c(u),h=function(p,g){var v=0,_=0,b=window.innerHeight,M={offset:p.getAttribute("data-aos-offset"),anchor:p.getAttribute("data-aos-anchor"),anchorPlacement:p.getAttribute("data-aos-anchor-placement")};switch(M.offset&&!isNaN(M.offset)&&(_=parseInt(M.offset)),M.anchor&&document.querySelectorAll(M.anchor)&&(p=document.querySelectorAll(M.anchor)[0]),v=(0,d.default)(p).top,M.anchorPlacement){case"top-bottom":break;case"center-bottom":v+=p.offsetHeight/2;break;case"bottom-bottom":v+=p.offsetHeight;break;case"top-center":v+=b/2;break;case"bottom-center":v+=b/2+p.offsetHeight;break;case"center-center":v+=b/2+p.offsetHeight/2;break;case"top-top":v+=b;break;case"bottom-top":v+=p.offsetHeight+b;break;case"center-top":v+=p.offsetHeight/2+b}return M.anchorPlacement||M.offset||isNaN(g)||(_=g),v+_};r.default=h},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var o=function(c){for(var u=0,d=0;c&&!isNaN(c.offsetLeft)&&!isNaN(c.offsetTop);)u+=c.offsetLeft-(c.tagName!="BODY"?c.scrollLeft:0),d+=c.offsetTop-(c.tagName!="BODY"?c.scrollTop:0),c=c.offsetParent;return{top:d,left:u}};r.default=o},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var o=function(c){return c=c||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(c,function(u){return{node:u}})};r.default=o}])})}(xu)),xu.exports}var kS=VS();const XS=wl(kS);var nh={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var l_;function jS(){return l_||(l_=1,function(a){(function(){var t={}.hasOwnProperty;function n(){for(var c="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(c=o(c,r(d)))}return c}function r(c){if(typeof c=="string"||typeof c=="number")return c;if(typeof c!="object")return"";if(Array.isArray(c))return n.apply(null,c);if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]"))return c.toString();var u="";for(var d in c)t.call(c,d)&&c[d]&&(u=o(u,d));return u}function o(c,u){return u?c?c+" "+u:c+u:c}a.exports?(n.default=n,a.exports=n):window.classNames=n})()}(nh)),nh.exports}var WS=jS();const Oe=wl(WS);function $h(){return $h=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(a[r]=n[r])}return a},$h.apply(null,arguments)}function B1(a,t){if(a==null)return{};var n={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)!==-1)continue;n[r]=a[r]}return n}function c_(a){return"default"+a.charAt(0).toUpperCase()+a.substr(1)}function qS(a){var t=YS(a,"string");return typeof t=="symbol"?t:String(t)}function YS(a,t){if(typeof a!="object"||a===null)return a;var n=a[Symbol.toPrimitive];if(n!==void 0){var r=n.call(a,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function ZS(a,t,n){var r=st.useRef(a!==void 0),o=st.useState(t),c=o[0],u=o[1],d=a!==void 0,h=r.current;return r.current=d,!d&&h&&c!==t&&u(t),[d?a:c,st.useCallback(function(p){for(var g=arguments.length,v=new Array(g>1?g-1:0),_=1;_<g;_++)v[_-1]=arguments[_];n&&n.apply(void 0,[p].concat(v)),u(p)},[n])]}function z1(a,t){return Object.keys(t).reduce(function(n,r){var o,c=n,u=c[c_(r)],d=c[r],h=B1(c,[c_(r),r].map(qS)),p=t[r],g=ZS(d,u,a[p]),v=g[0],_=g[1];return $h({},h,(o={},o[r]=v,o[p]=_,o))},a)}function Jh(a,t){return Jh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Jh(a,t)}function KS(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,Jh(a,t)}const QS=["xxl","xl","lg","md","sm","xs"],$S="xs",zu=st.createContext({prefixes:{},breakpoints:QS,minBreakpoint:$S}),{Consumer:M4,Provider:E4}=zu;function Ye(a,t){const{prefixes:n}=st.useContext(zu);return a||n[t]||t}function I1(){const{breakpoints:a}=st.useContext(zu);return a}function F1(){const{minBreakpoint:a}=st.useContext(zu);return a}function Yp(a){return a&&a.ownerDocument||document}function JS(a){var t=Yp(a);return t&&t.defaultView||window}function tM(a,t){return JS(a).getComputedStyle(a,t)}var eM=/([A-Z])/g;function nM(a){return a.replace(eM,"-$1").toLowerCase()}var iM=/^ms-/;function Xc(a){return nM(a).replace(iM,"-ms-")}var aM=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function rM(a){return!!(a&&aM.test(a))}function Aa(a,t){var n="",r="";if(typeof t=="string")return a.style.getPropertyValue(Xc(t))||tM(a).getPropertyValue(Xc(t));Object.keys(t).forEach(function(o){var c=t[o];!c&&c!==0?a.style.removeProperty(Xc(o)):rM(o)?r+=o+"("+c+") ":n+=Xc(o)+": "+c+";"}),r&&(n+="transform: "+r+";"),a.style.cssText+=";"+n}var ih={exports:{}},ah,u_;function sM(){if(u_)return ah;u_=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ah=a,ah}var rh,f_;function oM(){if(f_)return rh;f_=1;var a=sM();function t(){}function n(){}return n.resetWarningCache=t,rh=function(){function r(u,d,h,p,g,v){if(v!==a){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}r.isRequired=r;function o(){return r}var c={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return c.PropTypes=c,c},rh}var d_;function lM(){return d_||(d_=1,ih.exports=oM()()),ih.exports}var cM=lM();const sh=wl(cM);var uM=P1();const $s=wl(uM),h_={disabled:!1},H1=Hn.createContext(null);var fM=function(t){return t.scrollTop},yl="unmounted",fr="exited",Di="entering",ya="entered",Sl="exiting",Na=function(a){KS(t,a);function t(r,o){var c;c=a.call(this,r,o)||this;var u=o,d=u&&!u.isMounting?r.enter:r.appear,h;return c.appearStatus=null,r.in?d?(h=fr,c.appearStatus=Di):h=ya:r.unmountOnExit||r.mountOnEnter?h=yl:h=fr,c.state={status:h},c.nextCallback=null,c}t.getDerivedStateFromProps=function(o,c){var u=o.in;return u&&c.status===yl?{status:fr}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var c=null;if(o!==this.props){var u=this.state.status;this.props.in?u!==Di&&u!==ya&&(c=Di):(u===Di||u===ya)&&(c=Sl)}this.updateStatus(!1,c)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,c,u,d;return c=u=d=o,o!=null&&typeof o!="number"&&(c=o.exit,u=o.enter,d=o.appear!==void 0?o.appear:u),{exit:c,enter:u,appear:d}},n.updateStatus=function(o,c){if(o===void 0&&(o=!1),c!==null)if(this.cancelNextCallback(),c===Di){if(this.props.unmountOnExit||this.props.mountOnEnter){var u=this.props.nodeRef?this.props.nodeRef.current:$s.findDOMNode(this);u&&fM(u)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===fr&&this.setState({status:yl})},n.performEnter=function(o){var c=this,u=this.props.enter,d=this.context?this.context.isMounting:o,h=this.props.nodeRef?[d]:[$s.findDOMNode(this),d],p=h[0],g=h[1],v=this.getTimeouts(),_=d?v.appear:v.enter;if(!o&&!u||h_.disabled){this.safeSetState({status:ya},function(){c.props.onEntered(p)});return}this.props.onEnter(p,g),this.safeSetState({status:Di},function(){c.props.onEntering(p,g),c.onTransitionEnd(_,function(){c.safeSetState({status:ya},function(){c.props.onEntered(p,g)})})})},n.performExit=function(){var o=this,c=this.props.exit,u=this.getTimeouts(),d=this.props.nodeRef?void 0:$s.findDOMNode(this);if(!c||h_.disabled){this.safeSetState({status:fr},function(){o.props.onExited(d)});return}this.props.onExit(d),this.safeSetState({status:Sl},function(){o.props.onExiting(d),o.onTransitionEnd(u.exit,function(){o.safeSetState({status:fr},function(){o.props.onExited(d)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,c){c=this.setNextCallback(c),this.setState(o,c)},n.setNextCallback=function(o){var c=this,u=!0;return this.nextCallback=function(d){u&&(u=!1,c.nextCallback=null,o(d))},this.nextCallback.cancel=function(){u=!1},this.nextCallback},n.onTransitionEnd=function(o,c){this.setNextCallback(c);var u=this.props.nodeRef?this.props.nodeRef.current:$s.findDOMNode(this),d=o==null&&!this.props.addEndListener;if(!u||d){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var h=this.props.nodeRef?[this.nextCallback]:[u,this.nextCallback],p=h[0],g=h[1];this.props.addEndListener(p,g)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===yl)return null;var c=this.props,u=c.children;c.in,c.mountOnEnter,c.unmountOnExit,c.appear,c.enter,c.exit,c.timeout,c.addEndListener,c.onEnter,c.onEntering,c.onEntered,c.onExit,c.onExiting,c.onExited,c.nodeRef;var d=B1(c,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Hn.createElement(H1.Provider,{value:null},typeof u=="function"?u(o,d):Hn.cloneElement(Hn.Children.only(u),d))},t}(Hn.Component);Na.contextType=H1;Na.propTypes={};function Ls(){}Na.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ls,onEntering:Ls,onEntered:Ls,onExit:Ls,onExiting:Ls,onExited:Ls};Na.UNMOUNTED=yl;Na.EXITED=fr;Na.ENTERING=Di;Na.ENTERED=ya;Na.EXITING=Sl;function dM(a){return a.code==="Escape"||a.keyCode===27}function hM(){const a=st.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function uo(a){if(!a||typeof a=="function")return null;const{major:t}=hM();return t>=19?a.props.ref:a.ref}const Iu=!!(typeof window<"u"&&window.document&&window.document.createElement);var tp=!1,ep=!1;try{var oh={get passive(){return tp=!0},get once(){return ep=tp=!0}};Iu&&(window.addEventListener("test",oh,oh),window.removeEventListener("test",oh,!0))}catch{}function pM(a,t,n,r){if(r&&typeof r!="boolean"&&!ep){var o=r.once,c=r.capture,u=n;!ep&&o&&(u=n.__once||function d(h){this.removeEventListener(t,d,c),n.call(this,h)},n.__once=u),a.addEventListener(t,u,tp?r:c)}a.addEventListener(t,n,r)}function mM(a,t,n,r){var o=r&&typeof r!="boolean"?r.capture:r;a.removeEventListener(t,n,o),n.__once&&a.removeEventListener(t,n.__once,o)}function Ru(a,t,n,r){return pM(a,t,n,r),function(){mM(a,t,n,r)}}function gM(a,t,n,r){if(r===void 0&&(r=!0),a){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),a.dispatchEvent(o)}}function vM(a){var t=Aa(a,"transitionDuration")||"",n=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*n}function _M(a,t,n){n===void 0&&(n=5);var r=!1,o=setTimeout(function(){r||gM(a,"transitionend",!0)},t+n),c=Ru(a,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(o),c()}}function xM(a,t,n,r){n==null&&(n=vM(a)||0);var o=_M(a,n,r),c=Ru(a,"transitionend",t);return function(){o(),c()}}function p_(a,t){const n=Aa(a,t)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function Zp(a,t){const n=p_(a,"transitionDuration"),r=p_(a,"transitionDelay"),o=xM(a,c=>{c.target===a&&(o(),t(c))},n+r)}function hl(...a){return a.filter(t=>t!=null).reduce((t,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return t===null?n:function(...o){t.apply(this,o),n.apply(this,o)}},null)}function G1(a){a.offsetHeight}const m_=a=>!a||typeof a=="function"?a:t=>{a.current=t};function yM(a,t){const n=m_(a),r=m_(t);return o=>{n&&n(o),r&&r(o)}}function bM(a,t){return st.useMemo(()=>yM(a,t),[a,t])}function SM(a){return a&&"setState"in a?$s.findDOMNode(a):a??null}const Kp=Hn.forwardRef(({onEnter:a,onEntering:t,onEntered:n,onExit:r,onExiting:o,onExited:c,addEndListener:u,children:d,childRef:h,...p},g)=>{const v=st.useRef(null),_=bM(v,h),b=P=>{_(SM(P))},M=P=>D=>{P&&v.current&&P(v.current,D)},T=st.useCallback(M(a),[a]),y=st.useCallback(M(t),[t]),x=st.useCallback(M(n),[n]),F=st.useCallback(M(r),[r]),N=st.useCallback(M(o),[o]),U=st.useCallback(M(c),[c]),G=st.useCallback(M(u),[u]);return Z.jsx(Na,{ref:g,...p,onEnter:T,onEntered:x,onEntering:y,onExit:F,onExited:U,onExiting:N,addEndListener:G,nodeRef:v,children:typeof d=="function"?(P,D)=>d(P,{...D,ref:b}):Hn.cloneElement(d,{ref:b})})}),MM={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function EM(a,t){const n=`offset${a[0].toUpperCase()}${a.slice(1)}`,r=t[n],o=MM[a];return r+parseInt(Aa(t,o[0]),10)+parseInt(Aa(t,o[1]),10)}const TM={[fr]:"collapse",[Sl]:"collapsing",[Di]:"collapsing",[ya]:"collapse show"},AM=Hn.forwardRef(({onEnter:a,onEntering:t,onEntered:n,onExit:r,onExiting:o,className:c,children:u,dimension:d="height",in:h=!1,timeout:p=300,mountOnEnter:g=!1,unmountOnExit:v=!1,appear:_=!1,getDimensionValue:b=EM,...M},T)=>{const y=typeof d=="function"?d():d,x=st.useMemo(()=>hl(P=>{P.style[y]="0"},a),[y,a]),F=st.useMemo(()=>hl(P=>{const D=`scroll${y[0].toUpperCase()}${y.slice(1)}`;P.style[y]=`${P[D]}px`},t),[y,t]),N=st.useMemo(()=>hl(P=>{P.style[y]=null},n),[y,n]),U=st.useMemo(()=>hl(P=>{P.style[y]=`${b(y,P)}px`,G1(P)},r),[r,b,y]),G=st.useMemo(()=>hl(P=>{P.style[y]=null},o),[y,o]);return Z.jsx(Kp,{ref:T,addEndListener:Zp,...M,"aria-expanded":M.role?h:null,onEnter:x,onEntering:F,onEntered:N,onExit:U,onExiting:G,childRef:uo(u),in:h,timeout:p,mountOnEnter:g,unmountOnExit:v,appear:_,children:(P,D)=>Hn.cloneElement(u,{...D,className:Oe(c,u.props.className,TM[P],y==="width"&&"collapse-horizontal")})})});function RM(a){const t=st.useRef(a);return st.useEffect(()=>{t.current=a},[a]),t}function Fu(a){const t=RM(a);return st.useCallback(function(...n){return t.current&&t.current(...n)},[t])}const Qp=a=>st.forwardRef((t,n)=>Z.jsx("div",{...t,ref:n,className:Oe(t.className,a)}));function wM(a){const t=st.useRef(a);return st.useEffect(()=>{t.current=a},[a]),t}function ba(a){const t=wM(a);return st.useCallback(function(...n){return t.current&&t.current(...n)},[t])}function CM(){const a=st.useRef(!0),t=st.useRef(()=>a.current);return st.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),t.current}function DM(a){const t=st.useRef(null);return st.useEffect(()=>{t.current=a}),t.current}const UM=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",NM=typeof document<"u",g_=NM||UM?st.useLayoutEffect:st.useEffect,LM=["as","disabled"];function OM(a,t){if(a==null)return{};var n={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)>=0)continue;n[r]=a[r]}return n}function PM(a){return!a||a.trim()==="#"}function $p({tagName:a,disabled:t,href:n,target:r,rel:o,role:c,onClick:u,tabIndex:d=0,type:h}){a||(n!=null||r!=null||o!=null?a="a":a="button");const p={tagName:a};if(a==="button")return[{type:h||"button",disabled:t},p];const g=_=>{if((t||a==="a"&&PM(n))&&_.preventDefault(),t){_.stopPropagation();return}u==null||u(_)},v=_=>{_.key===" "&&(_.preventDefault(),g(_))};return a==="a"&&(n||(n="#"),t&&(n=void 0)),[{role:c??"button",disabled:void 0,tabIndex:t?void 0:d,href:n,target:a==="a"?r:void 0,"aria-disabled":t||void 0,rel:a==="a"?o:void 0,onClick:g,onKeyDown:v},p]}const V1=st.forwardRef((a,t)=>{let{as:n,disabled:r}=a,o=OM(a,LM);const[c,{tagName:u}]=$p(Object.assign({tagName:n,disabled:r},o));return Z.jsx(u,Object.assign({},o,c,{ref:t}))});V1.displayName="Button";const BM=["onKeyDown"];function zM(a,t){if(a==null)return{};var n={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)>=0)continue;n[r]=a[r]}return n}function IM(a){return!a||a.trim()==="#"}const k1=st.forwardRef((a,t)=>{let{onKeyDown:n}=a,r=zM(a,BM);const[o]=$p(Object.assign({tagName:"a"},r)),c=ba(u=>{o.onKeyDown(u),n==null||n(u)});return IM(r.href)||r.role==="button"?Z.jsx("a",Object.assign({ref:t},r,o,{onKeyDown:c})):Z.jsx("a",Object.assign({ref:t},r,{onKeyDown:n}))});k1.displayName="Anchor";const FM={[Di]:"show",[ya]:"show"},X1=st.forwardRef(({className:a,children:t,transitionClasses:n={},onEnter:r,...o},c)=>{const u={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...o},d=st.useCallback((h,p)=>{G1(h),r==null||r(h,p)},[r]);return Z.jsx(Kp,{ref:c,addEndListener:Zp,...u,onEnter:d,childRef:uo(t),children:(h,p)=>st.cloneElement(t,{...p,className:Oe("fade",a,t.props.className,FM[h],n[h])})})});X1.displayName="Fade";const HM={"aria-label":sh.string,onClick:sh.func,variant:sh.oneOf(["white"])},Jp=st.forwardRef(({className:a,variant:t,"aria-label":n="Close",...r},o)=>Z.jsx("button",{ref:o,type:"button",className:Oe("btn-close",t&&`btn-close-${t}`,a),"aria-label":n,...r}));Jp.displayName="CloseButton";Jp.propTypes=HM;const no=st.forwardRef(({as:a,bsPrefix:t,variant:n="primary",size:r,active:o=!1,disabled:c=!1,className:u,...d},h)=>{const p=Ye(t,"btn"),[g,{tagName:v}]=$p({tagName:a,disabled:c,...d}),_=v;return Z.jsx(_,{...g,...d,ref:h,disabled:c,className:Oe(u,p,o&&"active",n&&`${p}-${n}`,r&&`${p}-${r}`,d.href&&c&&"disabled")})});no.displayName="Button";const tm=st.forwardRef(({className:a,bsPrefix:t,as:n="div",...r},o)=>(t=Ye(t,"card-body"),Z.jsx(n,{ref:o,className:Oe(a,t),...r})));tm.displayName="CardBody";const j1=st.forwardRef(({className:a,bsPrefix:t,as:n="div",...r},o)=>(t=Ye(t,"card-footer"),Z.jsx(n,{ref:o,className:Oe(a,t),...r})));j1.displayName="CardFooter";const em=st.createContext(null);em.displayName="CardHeaderContext";const W1=st.forwardRef(({bsPrefix:a,className:t,as:n="div",...r},o)=>{const c=Ye(a,"card-header"),u=st.useMemo(()=>({cardHeaderBsPrefix:c}),[c]);return Z.jsx(em.Provider,{value:u,children:Z.jsx(n,{ref:o,...r,className:Oe(t,c)})})});W1.displayName="CardHeader";const q1=st.forwardRef(({bsPrefix:a,className:t,variant:n,as:r="img",...o},c)=>{const u=Ye(a,"card-img");return Z.jsx(r,{ref:c,className:Oe(n?`${u}-${n}`:u,t),...o})});q1.displayName="CardImg";const Y1=st.forwardRef(({className:a,bsPrefix:t,as:n="div",...r},o)=>(t=Ye(t,"card-img-overlay"),Z.jsx(n,{ref:o,className:Oe(a,t),...r})));Y1.displayName="CardImgOverlay";const Z1=st.forwardRef(({className:a,bsPrefix:t,as:n="a",...r},o)=>(t=Ye(t,"card-link"),Z.jsx(n,{ref:o,className:Oe(a,t),...r})));Z1.displayName="CardLink";const GM=Qp("h6"),K1=st.forwardRef(({className:a,bsPrefix:t,as:n=GM,...r},o)=>(t=Ye(t,"card-subtitle"),Z.jsx(n,{ref:o,className:Oe(a,t),...r})));K1.displayName="CardSubtitle";const Q1=st.forwardRef(({className:a,bsPrefix:t,as:n="p",...r},o)=>(t=Ye(t,"card-text"),Z.jsx(n,{ref:o,className:Oe(a,t),...r})));Q1.displayName="CardText";const VM=Qp("h5"),$1=st.forwardRef(({className:a,bsPrefix:t,as:n=VM,...r},o)=>(t=Ye(t,"card-title"),Z.jsx(n,{ref:o,className:Oe(a,t),...r})));$1.displayName="CardTitle";const J1=st.forwardRef(({bsPrefix:a,className:t,bg:n,text:r,border:o,body:c=!1,children:u,as:d="div",...h},p)=>{const g=Ye(a,"card");return Z.jsx(d,{ref:p,...h,className:Oe(t,g,n&&`bg-${n}`,r&&`text-${r}`,o&&`border-${o}`),children:c?Z.jsx(tm,{children:u}):u})});J1.displayName="Card";const pl=Object.assign(J1,{Img:q1,Title:$1,Subtitle:K1,Body:tm,Link:Z1,Text:Q1,Header:W1,Footer:j1,ImgOverlay:Y1});function kM({as:a,bsPrefix:t,className:n,...r}){t=Ye(t,"col");const o=I1(),c=F1(),u=[],d=[];return o.forEach(h=>{const p=r[h];delete r[h];let g,v,_;typeof p=="object"&&p!=null?{span:g,offset:v,order:_}=p:g=p;const b=h!==c?`-${h}`:"";g&&u.push(g===!0?`${t}${b}`:`${t}${b}-${g}`),_!=null&&d.push(`order${b}-${_}`),v!=null&&d.push(`offset${b}-${v}`)}),[{...r,className:Oe(n,...u,...d)},{as:a,bsPrefix:t,spans:u}]}const ci=st.forwardRef((a,t)=>{const[{className:n,...r},{as:o="div",bsPrefix:c,spans:u}]=kM(a);return Z.jsx(o,{...r,ref:t,className:Oe(n,!u.length&&c)})});ci.displayName="Col";const es=st.forwardRef(({bsPrefix:a,fluid:t=!1,as:n="div",className:r,...o},c)=>{const u=Ye(a,"container"),d=typeof t=="string"?`-${t}`:"-fluid";return Z.jsx(n,{ref:c,...o,className:Oe(r,t?`${u}${d}`:u)})});es.displayName="Container";var XM=Function.prototype.bind.call(Function.prototype.call,[].slice);function Xr(a,t){return XM(a.querySelectorAll(t))}function jM(){const[,a]=st.useReducer(t=>t+1,0);return a}function v_(a,t){if(a.contains)return a.contains(t);if(a.compareDocumentPosition)return a===t||!!(a.compareDocumentPosition(t)&16)}const wu=st.createContext(null),nm=(a,t=null)=>a!=null?String(a):t||null,im=st.createContext(null);im.displayName="NavContext";const WM="data-rr-ui-",qM="rrUi";function Hu(a){return`${WM}${a}`}function YM(a){return`${qM}${a}`}const tx=st.createContext(Iu?window:void 0);tx.Provider;function am(){return st.useContext(tx)}const ZM=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",KM=typeof document<"u",QM=KM||ZM?st.useLayoutEffect:st.useEffect,fo=st.createContext(null);fo.displayName="NavbarContext";const __=a=>!a||typeof a=="function"?a:t=>{a.current=t};function $M(a,t){const n=__(a),r=__(t);return o=>{n&&n(o),r&&r(o)}}function Gu(a,t){return st.useMemo(()=>$M(a,t),[a,t])}const ex=st.createContext(null),JM=["as","active","eventKey"];function tE(a,t){if(a==null)return{};var n={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)>=0)continue;n[r]=a[r]}return n}function nx({key:a,onClick:t,active:n,id:r,role:o,disabled:c}){const u=st.useContext(wu),d=st.useContext(im),h=st.useContext(ex);let p=n;const g={role:o};if(d){!o&&d.role==="tablist"&&(g.role="tab");const v=d.getControllerId(a??null),_=d.getControlledId(a??null);g[Hu("event-key")]=a,g.id=v||r,p=n==null&&a!=null?d.activeKey===a:n,(p||!(h!=null&&h.unmountOnExit)&&!(h!=null&&h.mountOnEnter))&&(g["aria-controls"]=_)}return g.role==="tab"&&(g["aria-selected"]=p,p||(g.tabIndex=-1),c&&(g.tabIndex=-1,g["aria-disabled"]=!0)),g.onClick=ba(v=>{c||(t==null||t(v),a!=null&&u&&!v.isPropagationStopped()&&u(a,v))}),[g,{isActive:p}]}const ix=st.forwardRef((a,t)=>{let{as:n=V1,active:r,eventKey:o}=a,c=tE(a,JM);const[u,d]=nx(Object.assign({key:nm(o,c.href),active:r},c));return u[Hu("active")]=d.isActive,Z.jsx(n,Object.assign({},c,u,{ref:t}))});ix.displayName="NavItem";const eE=["as","onSelect","activeKey","role","onKeyDown"];function nE(a,t){if(a==null)return{};var n={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)>=0)continue;n[r]=a[r]}return n}const x_=()=>{},y_=Hu("event-key"),ax=st.forwardRef((a,t)=>{let{as:n="div",onSelect:r,activeKey:o,role:c,onKeyDown:u}=a,d=nE(a,eE);const h=jM(),p=st.useRef(!1),g=st.useContext(wu),v=st.useContext(ex);let _,b;v&&(c=c||"tablist",o=v.activeKey,_=v.getControlledId,b=v.getControllerId);const M=st.useRef(null),T=N=>{const U=M.current;if(!U)return null;const G=Xr(U,`[${y_}]:not([aria-disabled=true])`),P=U.querySelector("[aria-selected=true]");if(!P||P!==document.activeElement)return null;const D=G.indexOf(P);if(D===-1)return null;let z=D+N;return z>=G.length&&(z=0),z<0&&(z=G.length-1),G[z]},y=(N,U)=>{N!=null&&(r==null||r(N,U),g==null||g(N,U))},x=N=>{if(u==null||u(N),!v)return;let U;switch(N.key){case"ArrowLeft":case"ArrowUp":U=T(-1);break;case"ArrowRight":case"ArrowDown":U=T(1);break;default:return}U&&(N.preventDefault(),y(U.dataset[YM("EventKey")]||null,N),p.current=!0,h())};st.useEffect(()=>{if(M.current&&p.current){const N=M.current.querySelector(`[${y_}][aria-selected=true]`);N==null||N.focus()}p.current=!1});const F=Gu(t,M);return Z.jsx(wu.Provider,{value:y,children:Z.jsx(im.Provider,{value:{role:c,activeKey:nm(o),getControlledId:_||x_,getControllerId:b||x_},children:Z.jsx(n,Object.assign({},d,{onKeyDown:x,ref:F,role:c}))})})});ax.displayName="Nav";const iE=Object.assign(ax,{Item:ix});function lh(a){a===void 0&&(a=Yp());try{var t=a.activeElement;return!t||!t.nodeName?null:t}catch{return a.body}}function aE(a){const t=st.useRef(a);return t.current=a,t}function rE(a){const t=aE(a);st.useEffect(()=>()=>t.current(),[])}function sE(a=document){const t=a.defaultView;return Math.abs(t.innerWidth-a.documentElement.clientWidth)}const b_=Hu("modal-open");class rm{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return sE(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();t.style={overflow:o.style.overflow,[r]:o.style[r]},t.scrollBarWidth&&(n[r]=`${parseInt(Aa(o,r)||"0",10)+t.scrollBarWidth}px`),o.setAttribute(b_,""),Aa(o,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(b_),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const ch=(a,t)=>Iu?a==null?(t||Yp()).body:(typeof a=="function"&&(a=a()),a&&"current"in a&&(a=a.current),a&&("nodeType"in a||a.getBoundingClientRect)?a:null):null;function oE(a,t){const n=am(),[r,o]=st.useState(()=>ch(a,n==null?void 0:n.document));if(!r){const c=ch(a);c&&o(c)}return st.useEffect(()=>{},[t,r]),st.useEffect(()=>{const c=ch(a);c!==r&&o(c)},[a,r]),r}function lE({children:a,in:t,onExited:n,mountOnEnter:r,unmountOnExit:o}){const c=st.useRef(null),u=st.useRef(t),d=ba(n);st.useEffect(()=>{t?u.current=!0:d(c.current)},[t,d]);const h=Gu(c,uo(a)),p=st.cloneElement(a,{ref:h});return t?p:o||!u.current&&r?null:p}const cE=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function uE(a,t){if(a==null)return{};var n={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)>=0)continue;n[r]=a[r]}return n}function fE(a){let{onEnter:t,onEntering:n,onEntered:r,onExit:o,onExiting:c,onExited:u,addEndListener:d,children:h}=a,p=uE(a,cE);const g=st.useRef(null),v=Gu(g,uo(h)),_=U=>G=>{U&&g.current&&U(g.current,G)},b=st.useCallback(_(t),[t]),M=st.useCallback(_(n),[n]),T=st.useCallback(_(r),[r]),y=st.useCallback(_(o),[o]),x=st.useCallback(_(c),[c]),F=st.useCallback(_(u),[u]),N=st.useCallback(_(d),[d]);return Object.assign({},p,{nodeRef:g},t&&{onEnter:b},n&&{onEntering:M},r&&{onEntered:T},o&&{onExit:y},c&&{onExiting:x},u&&{onExited:F},d&&{addEndListener:N},{children:typeof h=="function"?(U,G)=>h(U,Object.assign({},G,{ref:v})):st.cloneElement(h,{ref:v})})}const dE=["component"];function hE(a,t){if(a==null)return{};var n={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)>=0)continue;n[r]=a[r]}return n}const pE=st.forwardRef((a,t)=>{let{component:n}=a,r=hE(a,dE);const o=fE(r);return Z.jsx(n,Object.assign({ref:t},o))});function mE({in:a,onTransition:t}){const n=st.useRef(null),r=st.useRef(!0),o=ba(t);return g_(()=>{if(!n.current)return;let c=!1;return o({in:a,element:n.current,initial:r.current,isStale:()=>c}),()=>{c=!0}},[a,o]),g_(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function gE({children:a,in:t,onExited:n,onEntered:r,transition:o}){const[c,u]=st.useState(!t);t&&c&&u(!1);const d=mE({in:!!t,onTransition:p=>{const g=()=>{p.isStale()||(p.in?r==null||r(p.element,p.initial):(u(!0),n==null||n(p.element)))};Promise.resolve(o(p)).then(g,v=>{throw p.in||u(!0),v})}}),h=Gu(d,uo(a));return c&&!t?null:st.cloneElement(a,{ref:h})}function S_(a,t,n){return a?Z.jsx(pE,Object.assign({},n,{component:a})):t?Z.jsx(gE,Object.assign({},n,{transition:t})):Z.jsx(lE,Object.assign({},n))}const vE=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function _E(a,t){if(a==null)return{};var n={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)>=0)continue;n[r]=a[r]}return n}let uh;function xE(a){return uh||(uh=new rm({ownerDocument:a==null?void 0:a.document})),uh}function yE(a){const t=am(),n=a||xE(t),r=st.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:st.useCallback(o=>{r.current.dialog=o},[]),setBackdropRef:st.useCallback(o=>{r.current.backdrop=o},[])})}const rx=st.forwardRef((a,t)=>{let{show:n=!1,role:r="dialog",className:o,style:c,children:u,backdrop:d=!0,keyboard:h=!0,onBackdropClick:p,onEscapeKeyDown:g,transition:v,runTransition:_,backdropTransition:b,runBackdropTransition:M,autoFocus:T=!0,enforceFocus:y=!0,restoreFocus:x=!0,restoreFocusOptions:F,renderDialog:N,renderBackdrop:U=te=>Z.jsx("div",Object.assign({},te)),manager:G,container:P,onShow:D,onHide:z=()=>{},onExit:w,onExited:E,onExiting:L,onEnter:k,onEntering:W,onEntered:et}=a,ut=_E(a,vE);const I=am(),q=oE(P),X=yE(G),yt=CM(),O=DM(n),[tt,vt]=st.useState(!n),pt=st.useRef(null);st.useImperativeHandle(t,()=>X,[X]),Iu&&!O&&n&&(pt.current=lh(I==null?void 0:I.document)),n&&tt&&vt(!1);const Y=ba(()=>{if(X.add(),kt.current=Ru(document,"keydown",At),jt.current=Ru(document,"focus",()=>setTimeout(_t),!0),D&&D(),T){var te,oe;const $t=lh((te=(oe=X.dialog)==null?void 0:oe.ownerDocument)!=null?te:I==null?void 0:I.document);X.dialog&&$t&&!v_(X.dialog,$t)&&(pt.current=$t,X.dialog.focus())}}),dt=ba(()=>{if(X.remove(),kt.current==null||kt.current(),jt.current==null||jt.current(),x){var te;(te=pt.current)==null||te.focus==null||te.focus(F),pt.current=null}});st.useEffect(()=>{!n||!q||Y()},[n,q,Y]),st.useEffect(()=>{tt&&dt()},[tt,dt]),rE(()=>{dt()});const _t=ba(()=>{if(!y||!yt()||!X.isTopModal())return;const te=lh(I==null?void 0:I.document);X.dialog&&te&&!v_(X.dialog,te)&&X.dialog.focus()}),Et=ba(te=>{te.target===te.currentTarget&&(p==null||p(te),d===!0&&z())}),At=ba(te=>{h&&dM(te)&&X.isTopModal()&&(g==null||g(te),te.defaultPrevented||z())}),jt=st.useRef(),kt=st.useRef(),ye=(...te)=>{vt(!0),E==null||E(...te)};if(!q)return null;const pe=Object.assign({role:r,ref:X.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},ut,{style:c,className:o,tabIndex:-1});let Ht=N?N(pe):Z.jsx("div",Object.assign({},pe,{children:st.cloneElement(u,{role:"document"})}));Ht=S_(v,_,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:w,onExiting:L,onExited:ye,onEnter:k,onEntering:W,onEntered:et,children:Ht});let H=null;return d&&(H=U({ref:X.setBackdropRef,onClick:Et}),H=S_(b,M,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:H})),Z.jsx(Z.Fragment,{children:$s.createPortal(Z.jsxs(Z.Fragment,{children:[H,Ht]}),q)})});rx.displayName="Modal";const bE=Object.assign(rx,{Manager:rm});function SE(a,t){return a.classList?a.classList.contains(t):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+t+" ")!==-1}function ME(a,t){a.classList?a.classList.add(t):SE(a,t)||(typeof a.className=="string"?a.className=a.className+" "+t:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+t))}function M_(a,t){return a.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function EE(a,t){a.classList?a.classList.remove(t):typeof a.className=="string"?a.className=M_(a.className,t):a.setAttribute("class",M_(a.className&&a.className.baseVal||"",t))}const Os={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class sx extends rm{adjustAndStore(t,n,r){const o=n.style[t];n.dataset[t]=o,Aa(n,{[t]:`${parseFloat(Aa(n,t))+r}px`})}restore(t,n){const r=n.dataset[t];r!==void 0&&(delete n.dataset[t],Aa(n,{[t]:r}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(ME(n,"modal-open"),!t.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";Xr(n,Os.FIXED_CONTENT).forEach(c=>this.adjustAndStore(r,c,t.scrollBarWidth)),Xr(n,Os.STICKY_CONTENT).forEach(c=>this.adjustAndStore(o,c,-t.scrollBarWidth)),Xr(n,Os.NAVBAR_TOGGLER).forEach(c=>this.adjustAndStore(o,c,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();EE(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";Xr(n,Os.FIXED_CONTENT).forEach(c=>this.restore(r,c)),Xr(n,Os.STICKY_CONTENT).forEach(c=>this.restore(o,c)),Xr(n,Os.NAVBAR_TOGGLER).forEach(c=>this.restore(o,c))}}let fh;function TE(a){return fh||(fh=new sx(a)),fh}const ox=st.createContext({onHide(){}}),AE=st.forwardRef(({closeLabel:a="Close",closeVariant:t,closeButton:n=!1,onHide:r,children:o,...c},u)=>{const d=st.useContext(ox),h=Fu(()=>{d==null||d.onHide(),r==null||r()});return Z.jsxs("div",{ref:u,...c,children:[o,n&&Z.jsx(Jp,{"aria-label":a,variant:t,onClick:h})]})}),lx=st.forwardRef(({className:a,bsPrefix:t,as:n="div",...r},o)=>(t=Ye(t,"nav-item"),Z.jsx(n,{ref:o,className:Oe(a,t),...r})));lx.displayName="NavItem";const cx=st.forwardRef(({bsPrefix:a,className:t,as:n=k1,active:r,eventKey:o,disabled:c=!1,...u},d)=>{a=Ye(a,"nav-link");const[h,p]=nx({key:nm(o,u.href),active:r,disabled:c,...u});return Z.jsx(n,{...u,...h,ref:d,disabled:c,className:Oe(t,a,c&&"disabled",p.isActive&&"active")})});cx.displayName="NavLink";const ux=st.forwardRef((a,t)=>{const{as:n="div",bsPrefix:r,variant:o,fill:c=!1,justify:u=!1,navbar:d,navbarScroll:h,className:p,activeKey:g,...v}=z1(a,{activeKey:"onSelect"}),_=Ye(r,"nav");let b,M,T=!1;const y=st.useContext(fo),x=st.useContext(em);return y?(b=y.bsPrefix,T=d??!0):x&&({cardHeaderBsPrefix:M}=x),Z.jsx(iE,{as:n,ref:t,activeKey:g,className:Oe(p,{[_]:!T,[`${b}-nav`]:T,[`${b}-nav-scroll`]:T&&h,[`${M}-${o}`]:!!M,[`${_}-${o}`]:!!o,[`${_}-fill`]:c,[`${_}-justified`]:u}),...v})});ux.displayName="Nav";const jc=Object.assign(ux,{Item:lx,Link:cx}),fx=st.forwardRef(({bsPrefix:a,className:t,as:n,...r},o)=>{a=Ye(a,"navbar-brand");const c=n||(r.href?"a":"span");return Z.jsx(c,{...r,ref:o,className:Oe(t,a)})});fx.displayName="NavbarBrand";const dx=st.forwardRef(({children:a,bsPrefix:t,...n},r)=>{t=Ye(t,"navbar-collapse");const o=st.useContext(fo);return Z.jsx(AM,{in:!!(o&&o.expanded),...n,children:Z.jsx("div",{ref:r,className:t,children:a})})});dx.displayName="NavbarCollapse";const hx=st.forwardRef(({bsPrefix:a,className:t,children:n,label:r="Toggle navigation",as:o="button",onClick:c,...u},d)=>{a=Ye(a,"navbar-toggler");const{onToggle:h,expanded:p}=st.useContext(fo)||{},g=Fu(v=>{c&&c(v),h&&h()});return o==="button"&&(u.type="button"),Z.jsx(o,{...u,ref:d,onClick:g,"aria-label":r,className:Oe(t,a,!p&&"collapsed"),children:n||Z.jsx("span",{className:`${a}-icon`})})});hx.displayName="NavbarToggle";const np=new WeakMap,E_=(a,t)=>{if(!a||!t)return;const n=np.get(t)||new Map;np.set(t,n);let r=n.get(a);return r||(r=t.matchMedia(a),r.refCount=0,n.set(r.media,r)),r};function RE(a,t=typeof window>"u"?void 0:window){const n=E_(a,t),[r,o]=st.useState(()=>n?n.matches:!1);return QM(()=>{let c=E_(a,t);if(!c)return o(!1);let u=np.get(t);const d=()=>{o(c.matches)};return c.refCount++,c.addListener(d),d(),()=>{c.removeListener(d),c.refCount--,c.refCount<=0&&(u==null||u.delete(c.media)),c=void 0}},[a]),r}function wE(a){const t=Object.keys(a);function n(d,h){return d===h?h:d?`${d} and ${h}`:h}function r(d){return t[Math.min(t.indexOf(d)+1,t.length-1)]}function o(d){const h=r(d);let p=a[h];return typeof p=="number"?p=`${p-.2}px`:p=`calc(${p} - 0.2px)`,`(max-width: ${p})`}function c(d){let h=a[d];return typeof h=="number"&&(h=`${h}px`),`(min-width: ${h})`}function u(d,h,p){let g;typeof d=="object"?(g=d,p=h,h=!0):(h=h||!0,g={[d]:h});let v=st.useMemo(()=>Object.entries(g).reduce((_,[b,M])=>((M==="up"||M===!0)&&(_=n(_,c(b))),(M==="down"||M===!0)&&(_=n(_,o(b))),_),""),[JSON.stringify(g)]);return RE(v,p)}return u}const CE=wE({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),px=st.forwardRef(({className:a,bsPrefix:t,as:n="div",...r},o)=>(t=Ye(t,"offcanvas-body"),Z.jsx(n,{ref:o,className:Oe(a,t),...r})));px.displayName="OffcanvasBody";const DE={[Di]:"show",[ya]:"show"},mx=st.forwardRef(({bsPrefix:a,className:t,children:n,in:r=!1,mountOnEnter:o=!1,unmountOnExit:c=!1,appear:u=!1,...d},h)=>(a=Ye(a,"offcanvas"),Z.jsx(Kp,{ref:h,addEndListener:Zp,in:r,mountOnEnter:o,unmountOnExit:c,appear:u,...d,childRef:uo(n),children:(p,g)=>st.cloneElement(n,{...g,className:Oe(t,n.props.className,(p===Di||p===Sl)&&`${a}-toggling`,DE[p])})})));mx.displayName="OffcanvasToggling";const gx=st.forwardRef(({bsPrefix:a,className:t,closeLabel:n="Close",closeButton:r=!1,...o},c)=>(a=Ye(a,"offcanvas-header"),Z.jsx(AE,{ref:c,...o,className:Oe(t,a),closeLabel:n,closeButton:r})));gx.displayName="OffcanvasHeader";const UE=Qp("h5"),vx=st.forwardRef(({className:a,bsPrefix:t,as:n=UE,...r},o)=>(t=Ye(t,"offcanvas-title"),Z.jsx(n,{ref:o,className:Oe(a,t),...r})));vx.displayName="OffcanvasTitle";function NE(a){return Z.jsx(mx,{...a})}function LE(a){return Z.jsx(X1,{...a})}const _x=st.forwardRef(({bsPrefix:a,className:t,children:n,"aria-labelledby":r,placement:o="start",responsive:c,show:u=!1,backdrop:d=!0,keyboard:h=!0,scroll:p=!1,onEscapeKeyDown:g,onShow:v,onHide:_,container:b,autoFocus:M=!0,enforceFocus:T=!0,restoreFocus:y=!0,restoreFocusOptions:x,onEntered:F,onExit:N,onExiting:U,onEnter:G,onEntering:P,onExited:D,backdropClassName:z,manager:w,renderStaticNode:E=!1,...L},k)=>{const W=st.useRef();a=Ye(a,"offcanvas");const[et,ut]=st.useState(!1),I=Fu(_),q=CE(c||"xs","up");st.useEffect(()=>{ut(c?u&&!q:u)},[u,c,q]);const X=st.useMemo(()=>({onHide:I}),[I]);function yt(){return w||(p?(W.current||(W.current=new sx({handleContainerOverflow:!1})),W.current):TE())}const O=(Y,...dt)=>{Y&&(Y.style.visibility="visible"),G==null||G(Y,...dt)},tt=(Y,...dt)=>{Y&&(Y.style.visibility=""),D==null||D(...dt)},vt=st.useCallback(Y=>Z.jsx("div",{...Y,className:Oe(`${a}-backdrop`,z)}),[z,a]),pt=Y=>Z.jsx("div",{...Y,...L,className:Oe(t,c?`${a}-${c}`:a,`${a}-${o}`),"aria-labelledby":r,children:n});return Z.jsxs(Z.Fragment,{children:[!et&&(c||E)&&pt({}),Z.jsx(ox.Provider,{value:X,children:Z.jsx(bE,{show:et,ref:k,backdrop:d,container:b,keyboard:h,autoFocus:M,enforceFocus:T&&!p,restoreFocus:y,restoreFocusOptions:x,onEscapeKeyDown:g,onShow:v,onHide:I,onEnter:O,onEntering:P,onEntered:F,onExit:N,onExiting:U,onExited:tt,manager:yt(),transition:NE,backdropTransition:LE,renderBackdrop:vt,renderDialog:pt})})]})});_x.displayName="Offcanvas";const OE=Object.assign(_x,{Body:px,Header:gx,Title:vx}),xx=st.forwardRef(({onHide:a,...t},n)=>{const r=st.useContext(fo),o=Fu(()=>{r==null||r.onToggle==null||r.onToggle(),a==null||a()});return Z.jsx(OE,{ref:n,show:!!(r!=null&&r.expanded),...t,renderStaticNode:!0,onHide:o})});xx.displayName="NavbarOffcanvas";const yx=st.forwardRef(({className:a,bsPrefix:t,as:n="span",...r},o)=>(t=Ye(t,"navbar-text"),Z.jsx(n,{ref:o,className:Oe(a,t),...r})));yx.displayName="NavbarText";const bx=st.forwardRef((a,t)=>{const{bsPrefix:n,expand:r=!0,variant:o="light",bg:c,fixed:u,sticky:d,className:h,as:p="nav",expanded:g,onToggle:v,onSelect:_,collapseOnSelect:b=!1,...M}=z1(a,{expanded:"onToggle"}),T=Ye(n,"navbar"),y=st.useCallback((...N)=>{_==null||_(...N),b&&g&&(v==null||v(!1))},[_,b,g,v]);M.role===void 0&&p!=="nav"&&(M.role="navigation");let x=`${T}-expand`;typeof r=="string"&&(x=`${x}-${r}`);const F=st.useMemo(()=>({onToggle:()=>v==null?void 0:v(!g),bsPrefix:T,expanded:!!g,expand:r}),[T,g,r,v]);return Z.jsx(fo.Provider,{value:F,children:Z.jsx(wu.Provider,{value:y,children:Z.jsx(p,{ref:t,...M,className:Oe(h,T,r&&x,o&&`${T}-${o}`,c&&`bg-${c}`,d&&`sticky-${d}`,u&&`fixed-${u}`)})})})});bx.displayName="Navbar";const Wc=Object.assign(bx,{Brand:fx,Collapse:dx,Offcanvas:xx,Text:yx,Toggle:hx}),bi=st.forwardRef(({bsPrefix:a,className:t,as:n="div",...r},o)=>{const c=Ye(a,"row"),u=I1(),d=F1(),h=`${c}-cols`,p=[];return u.forEach(g=>{const v=r[g];delete r[g];let _;v!=null&&typeof v=="object"?{cols:_}=v:_=v;const b=g!==d?`-${g}`:"";_!=null&&p.push(`${h}${b}-${_}`)}),Z.jsx(n,{ref:o,...r,className:Oe(t,c,...p)})});bi.displayName="Row";function PE(){const[a,t]=st.useState(!1);return st.useEffect(()=>{const n=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),Z.jsx(Wc,{expand:"lg",fixed:"top",variant:"dark",className:`py-3 ${a?"navbar-scrolled":"navbar-top"}`,children:Z.jsxs(es,{children:[Z.jsx(Wc.Brand,{href:"#",style:{color:"#fff",fontWeight:"bold",fontSize:"2.0rem"},children:"LUCAS SOBRAL"}),Z.jsx(Wc.Toggle,{}),Z.jsx(Wc.Collapse,{children:Z.jsxs(jc,{className:"ms-auto",children:[Z.jsx(jc.Link,{href:"#about",className:"text-light",children:"About"}),Z.jsx(jc.Link,{href:"#projects",className:"text-light",children:"Projects"}),Z.jsx(jc.Link,{href:"#contact",className:"text-light",children:"Contact"}),Z.jsx(no,{href:"#contact",className:"btn-hire ms-3",children:"Hire Me"})]})})]})})}const BE=()=>Z.jsx("section",{className:"fullscreen-container text-light py-5 d-flex flex-column justify-content-center align-items-center","data-aos":"fade-up",children:Z.jsxs("div",{className:"text-center",children:[Z.jsxs("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:["Hi, I'm ",Z.jsx("span",{className:"highlight",children:"Lucas Sobral"})]}),Z.jsx("h4",{className:"mb-3","data-aos":"fade-up","data-aos-delay":"200",children:"Software Engineer & AI Developer"}),Z.jsx("p",{"data-aos":"fade-up","data-aos-delay":"300",children:"Building scalable backends, intelligent systems and process automations."}),Z.jsxs("div",{className:"mt-4","data-aos":"fade-up","data-aos-delay":"400",children:[Z.jsx("a",{className:"btn btn-primary me-3",href:"#",children:"Download Resume"}),Z.jsx("a",{className:"btn btn-outline-light",href:"#",children:"Contact Me"})]})]})}),zE="/portfolio./assets/perfil_semfundo-DOtJoTAE.png";var Sx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},T_=Hn.createContext&&Hn.createContext(Sx),IE=["attr","size","title"];function FE(a,t){if(a==null)return{};var n=HE(a,t),r,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);for(o=0;o<c.length;o++)r=c[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(a,r)&&(n[r]=a[r])}return n}function HE(a,t){if(a==null)return{};var n={};for(var r in a)if(Object.prototype.hasOwnProperty.call(a,r)){if(t.indexOf(r)>=0)continue;n[r]=a[r]}return n}function Cu(){return Cu=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(a[r]=n[r])}return a},Cu.apply(this,arguments)}function A_(a,t){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),n.push.apply(n,r)}return n}function Du(a){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?A_(Object(n),!0).forEach(function(r){GE(a,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):A_(Object(n)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(n,r))})}return a}function GE(a,t,n){return t=VE(t),t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,a}function VE(a){var t=kE(a,"string");return typeof t=="symbol"?t:t+""}function kE(a,t){if(typeof a!="object"||!a)return a;var n=a[Symbol.toPrimitive];if(n!==void 0){var r=n.call(a,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function Mx(a){return a&&a.map((t,n)=>Hn.createElement(t.tag,Du({key:n},t.attr),Mx(t.child)))}function Wi(a){return t=>Hn.createElement(XE,Cu({attr:Du({},a.attr)},t),Mx(a.child))}function XE(a){var t=n=>{var{attr:r,size:o,title:c}=a,u=FE(a,IE),d=o||n.size||"1em",h;return n.className&&(h=n.className),a.className&&(h=(h?h+" ":"")+a.className),Hn.createElement("svg",Cu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,u,{className:h,style:Du(Du({color:a.color||n.color},n.style),a.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&Hn.createElement("title",null,c),a.children)};return T_!==void 0?Hn.createElement(T_.Consumer,null,n=>t(n)):t(Sx)}function Ex(a){return Wi({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(a)}function jE(a){return Wi({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(a)}function WE(a){return Wi({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"},child:[]}]})(a)}function qE(a){return Wi({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(a)}function YE(a){return Wi({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"},child:[]}]})(a)}function ZE(a){return Wi({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(a)}function KE(a){return Wi({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(a)}function QE(a){return Wi({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(a)}function $E(a){return Wi({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"},child:[]}]})(a)}function JE(a){return Wi({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(a)}function t2(){return Z.jsx("section",{id:"about",className:"about-section py-5",children:Z.jsxs(es,{children:[Z.jsx(bi,{className:"mb-4 text-center",children:Z.jsxs(ci,{children:[Z.jsx("h2",{className:"fw-bold",style:{color:"#8A2BE2"},children:"About Me"}),Z.jsx("p",{children:"Let me introduce myself"})]})}),Z.jsxs(bi,{className:"align-items-center",children:[Z.jsx(ci,{md:6,className:"text-center mb-4 mb-md-0","data-aos":"fade-right",children:Z.jsx("img",{src:zE,alt:"Lucas Sobral",className:"img-fluid rounded-circle shadow about-img",style:{width:"250px",border:"3px solid #8A2BE2",boxShadow:"0 0 25px rgba(138, 43, 226, 0.3)"}})}),Z.jsx(ci,{md:6,"data-aos":"fade-left",children:Z.jsxs("div",{className:"text-light",style:{fontSize:"1.05rem",lineHeight:"1.7"},children:[Z.jsx("p",{children:"I'm Lucas Sobral, a Software Engineer from Brazil with over 3 years of experience in backend development and AI-powered solutions. I build systems that make complex processes simpler, faster, and smarter."}),Z.jsx("p",{children:"I’ve led projects involving computer vision (YOLOv8), geospatial APIs, and internal AI assistants. Whether it’s automating forestry analysis or optimizing vehicle logistics, I bring data, intelligence, and clean code together."}),Z.jsx("p",{children:"My stack includes Python, FastAPI, Django, PostgreSQL, and machine learning. I'm currently seeking international opportunities to contribute to global, high-impact products."}),Z.jsxs("div",{className:"mt-4 d-flex gap-3 flex-wrap",children:[Z.jsxs(no,{variant:"primary",href:"/Lucas_Sobral_Resume.pdf",target:"_blank",className:"btn-roxo d-flex align-items-center gap-2",children:[Z.jsx(KE,{})," Download CV"]}),Z.jsxs(no,{variant:"outline-light",href:"#projects",className:"d-flex align-items-center gap-2",children:[Z.jsx($E,{})," View Projects"]})]})]})})]})]})})}function e2(){const a=[{icon:Z.jsx(qE,{size:32,color:"#a259ff"}),title:"Backend Development",desc:"APIs, business logic, authentication and clean architecture with Python, FastAPI and Django."},{icon:Z.jsx(WE,{size:32,color:"#a259ff"}),title:"AI & Computer Vision",desc:"Object detection and smart systems using YOLOv8, OpenCV and image processing techniques."},{icon:Z.jsx(ZE,{size:32,color:"#a259ff"}),title:"Data Engineering",desc:"Database design, ETL pipelines and data automation with PostgreSQL and Pandas."},{icon:Z.jsx(JE,{size:32,color:"#a259ff"}),title:"API Integration",desc:"Connect external APIs and automate processes securely and efficiently."},{icon:Z.jsx(YE,{size:32,color:"#a259ff"}),title:"Process Automation",desc:"Automation scripts and system orchestration to save hours of manual work."}];return Z.jsx("section",{className:"services-section",children:Z.jsxs(es,{children:[Z.jsx(bi,{className:"text-center mb-5",children:Z.jsxs(ci,{children:[Z.jsx("h2",{className:"fw-bold section-title",children:"What I Do"}),Z.jsx("p",{children:"My areas of expertise"})]})}),Z.jsx(bi,{children:a.map((t,n)=>Z.jsx(ci,{md:6,lg:4,className:"mb-4","data-aos":"zoom-in","data-aos-delay":n*100,children:Z.jsxs("div",{className:"service-card text-light p-4 rounded h-100",children:[Z.jsx("div",{className:"icon mb-3",children:t.icon}),Z.jsx("h5",{className:"fw-semibold mb-2",children:t.title}),Z.jsx("p",{children:t.desc})]})},n))})]})})}function n2(){const a=[{title:"Forestry Residue Detection",desc:"AI model using YOLOv8 and geospatial data to identify fallen trees from satellite images. Automates environmental monitoring with precision.",image:"/assets/project1.png",github:"https://github.com/LukasSobral/forest-detection"},{title:"Personal Finance API",desc:"RESTful backend built with FastAPI, JWT and PostgreSQL. Handles income, expenses and real-time balance calculations securely.",image:"/assets/project2.png",github:"https://github.com/LukasSobral/finance-api"},{title:"Vehicle Tracking & Routing API",desc:"Geospatial API calculating real-time distances between vehicles and rural assets using shapefiles and GPS data.",image:"/assets/project3.png",github:"https://github.com/LukasSobral/geo-tracking-api"},{title:"Data Sync & ETL Automation",desc:"Python tool to extract, transform and load data from external APIs into relational databases and Excel dashboards.",image:"/assets/project4.png",github:"https://github.com/LukasSobral/data-sync-tool"}];return Z.jsx("section",{id:"projects",className:"projects-section py-5",children:Z.jsxs(es,{children:[Z.jsx(bi,{className:"text-center mb-5",children:Z.jsxs(ci,{children:[Z.jsx("h2",{className:"fw-bold",style:{color:"#8A2BE2"},children:"Projects"}),Z.jsx("p",{children:"Some of the work I've done recently"})]})}),Z.jsx(bi,{children:a.map((t,n)=>Z.jsx(ci,{md:6,className:"mb-4","data-aos":"fade-up","data-aos-delay":n*100,children:Z.jsxs(pl,{className:"project-card border-0 h-100 shadow-sm",children:[Z.jsx(pl.Img,{variant:"top",src:t.image,alt:t.title,style:{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}}),Z.jsxs(pl.Body,{children:[Z.jsx(pl.Title,{className:"fw-semibold",children:t.title}),Z.jsx(pl.Text,{children:t.desc}),Z.jsxs(no,{variant:"outline-light",href:t.github,target:"_blank",rel:"noopener noreferrer",className:"mt-2",children:[Z.jsx(Ex,{className:"me-2"}),"View on GitHub"]})]})]})},n))})]})})}function i2(){return Z.jsx("section",{id:"contact",style:{backgroundColor:"#0e0e10",color:"#ededed",padding:"80px 0"},children:Z.jsxs(es,{children:[Z.jsx(bi,{className:"text-center mb-5",children:Z.jsxs(ci,{children:[Z.jsx("h2",{className:"fw-bold",style:{color:"#8A2BE2"},children:"Get In Touch"}),Z.jsx("p",{children:"Feel free to reach out — I'm open to opportunities and collaborations"})]})}),Z.jsx(bi,{className:"justify-content-center",children:Z.jsx(ci,{md:8,"data-aos":"fade-up",children:Z.jsxs("form",{action:"https://formsubmit.co/lucassobral301@gmail.com",method:"POST",className:"contact-form",children:[Z.jsx("input",{type:"hidden",name:"_captcha",value:"false"}),Z.jsx("input",{type:"hidden",name:"_next",value:"https://lukassobral.github.io/portfolio/#thanks"}),Z.jsxs("div",{className:"mb-3",children:[Z.jsx("label",{htmlFor:"name",className:"form-label",children:"Name"}),Z.jsx("input",{type:"text",name:"name",id:"name",className:"form-control bg-dark text-light",placeholder:"Your name",required:!0})]}),Z.jsxs("div",{className:"mb-3",children:[Z.jsx("label",{htmlFor:"email",className:"form-label",children:"Email"}),Z.jsx("input",{type:"email",name:"email",id:"email",className:"form-control bg-dark text-light",placeholder:"Your email",required:!0})]}),Z.jsxs("div",{className:"mb-4",children:[Z.jsx("label",{htmlFor:"message",className:"form-label",children:"Message"}),Z.jsx("textarea",{name:"message",id:"message",rows:"5",className:"form-control bg-dark text-light",placeholder:"Write your message...",required:!0})]}),Z.jsx("div",{className:"text-center",children:Z.jsx(no,{variant:"outline-light",type:"submit",children:"Send Message"})})]})})})]})})}function a2(){return Z.jsx("footer",{style:{backgroundColor:"#151515",color:"#ededed",padding:"40px 0"},children:Z.jsxs(es,{children:[Z.jsx(bi,{className:"text-center mb-3",children:Z.jsxs(ci,{children:[Z.jsx("h5",{style:{color:"#8A2BE2"},children:"Lucas Sobral"}),Z.jsx("p",{className:"text-muted",children:"Software Engineer · Backend · AI · Automation"})]})}),Z.jsx(bi,{className:"text-center mb-3",children:Z.jsxs(ci,{children:[Z.jsx("a",{href:"https://github.com/LukasSobral",target:"_blank",rel:"noopener noreferrer",className:"text-light mx-3",children:Z.jsx(Ex,{size:24})}),Z.jsx("a",{href:"https://linkedin.com/in/lukasobral",target:"_blank",rel:"noopener noreferrer",className:"text-light mx-3",children:Z.jsx(jE,{size:24})}),Z.jsx("a",{href:"mailto:lucassobral@email.com",className:"text-light mx-3",children:Z.jsx(QE,{size:24})})]})}),Z.jsx(bi,{className:"text-center",children:Z.jsx(ci,{children:Z.jsxs("small",{className:"text-muted",children:["© ",new Date().getFullYear()," Lucas Sobral. All rights reserved."]})})})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sm="176",r2=0,R_=1,s2=2,Tx=1,o2=2,_a=3,mr=0,Qn=1,Sa=2,hr=0,to=1,w_=2,C_=3,D_=4,l2=5,qr=100,c2=101,u2=102,f2=103,d2=104,h2=200,p2=201,m2=202,g2=203,ip=204,ap=205,v2=206,_2=207,x2=208,y2=209,b2=210,S2=211,M2=212,E2=213,T2=214,rp=0,sp=1,op=2,io=3,lp=4,cp=5,up=6,fp=7,Ax=0,A2=1,R2=2,pr=0,w2=1,C2=2,D2=3,U2=4,N2=5,L2=6,O2=7,Rx=300,ao=301,ro=302,dp=303,hp=304,Vu=306,pp=1e3,Zr=1001,mp=1002,Li=1003,P2=1004,qc=1005,ki=1006,dh=1007,Kr=1008,Ca=1009,wx=1010,Cx=1011,Ml=1012,om=1013,Jr=1014,Ma=1015,Cl=1016,lm=1017,cm=1018,El=1020,Dx=35902,Ux=1021,Nx=1022,Ni=1023,Tl=1026,Al=1027,Lx=1028,um=1029,Ox=1030,fm=1031,dm=1033,yu=33776,bu=33777,Su=33778,Mu=33779,gp=35840,vp=35841,_p=35842,xp=35843,yp=36196,bp=37492,Sp=37496,Mp=37808,Ep=37809,Tp=37810,Ap=37811,Rp=37812,wp=37813,Cp=37814,Dp=37815,Up=37816,Np=37817,Lp=37818,Op=37819,Pp=37820,Bp=37821,Eu=36492,zp=36494,Ip=36495,Px=36283,Fp=36284,Hp=36285,Gp=36286,B2=3200,z2=3201,I2=0,F2=1,dr="",xi="srgb",so="srgb-linear",Uu="linear",Xe="srgb",Ps=7680,U_=519,H2=512,G2=513,V2=514,Bx=515,k2=516,X2=517,j2=518,W2=519,N_=35044,L_="300 es",Ea=2e3,Nu=2001;class ho{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(n)===-1&&r[t].push(n)}hasEventListener(t,n){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(n)!==-1}removeEventListener(t,n){const r=this._listeners;if(r===void 0)return;const o=r[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const r=n[t.type];if(r!==void 0){t.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hh=Math.PI/180,Vp=180/Math.PI;function Dl(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(zn[a&255]+zn[a>>8&255]+zn[a>>16&255]+zn[a>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[n&63|128]+zn[n>>8&255]+"-"+zn[n>>16&255]+zn[n>>24&255]+zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]).toLowerCase()}function Re(a,t,n){return Math.max(t,Math.min(n,a))}function q2(a,t){return(a%t+t)%t}function ph(a,t,n){return(1-n)*a+n*t}function Y2(a,t){return a+Math.random()*(t-a)}function ml(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Kn(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Z2={randFloat:Y2};class qe{constructor(t=0,n=0){qe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,r=this.y,o=t.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Re(this.x,t.x,n.x),this.y=Re(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Re(this.x,t,n),this.y=Re(this.y,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(Re(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y;return n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*r-u*o+t.x,this.y=c*o+u*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,n,r,o,c,u,d,h,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,o,c,u,d,h,p)}set(t,n,r,o,c,u,d,h,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=d,g[3]=n,g[4]=c,g[5]=h,g[6]=r,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,o=n.elements,c=this.elements,u=r[0],d=r[3],h=r[6],p=r[1],g=r[4],v=r[7],_=r[2],b=r[5],M=r[8],T=o[0],y=o[3],x=o[6],F=o[1],N=o[4],U=o[7],G=o[2],P=o[5],D=o[8];return c[0]=u*T+d*F+h*G,c[3]=u*y+d*N+h*P,c[6]=u*x+d*U+h*D,c[1]=p*T+g*F+v*G,c[4]=p*y+g*N+v*P,c[7]=p*x+g*U+v*D,c[2]=_*T+b*F+M*G,c[5]=_*y+b*N+M*P,c[8]=_*x+b*U+M*D,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[1],o=t[2],c=t[3],u=t[4],d=t[5],h=t[6],p=t[7],g=t[8];return n*u*g-n*d*p-r*c*g+r*d*h+o*c*p-o*u*h}invert(){const t=this.elements,n=t[0],r=t[1],o=t[2],c=t[3],u=t[4],d=t[5],h=t[6],p=t[7],g=t[8],v=g*u-d*p,_=d*h-g*c,b=p*c-u*h,M=n*v+r*_+o*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return t[0]=v*T,t[1]=(o*p-g*r)*T,t[2]=(d*r-o*u)*T,t[3]=_*T,t[4]=(g*n-o*h)*T,t[5]=(o*c-d*n)*T,t[6]=b*T,t[7]=(r*h-p*n)*T,t[8]=(u*n-r*c)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,r,o,c,u,d){const h=Math.cos(c),p=Math.sin(c);return this.set(r*h,r*p,-r*(h*u+p*d)+u+t,-o*p,o*h,-o*(-p*u+h*d)+d+n,0,0,1),this}scale(t,n){return this.premultiply(mh.makeScale(t,n)),this}rotate(t){return this.premultiply(mh.makeRotation(-t)),this}translate(t,n){return this.premultiply(mh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,r=t.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(t,n=0){for(let r=0;r<9;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const mh=new he;function zx(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function Lu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function K2(){const a=Lu("canvas");return a.style.display="block",a}const O_={};function Tu(a){a in O_||(O_[a]=!0,console.warn(a))}function Q2(a,t,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function $2(a){const t=a.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function J2(a){const t=a.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const P_=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),B_=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tT(){const a={enabled:!0,workingColorSpace:so,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Xe&&(o.r=Ra(o.r),o.g=Ra(o.g),o.b=Ra(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Xe&&(o.r=eo(o.r),o.g=eo(o.g),o.b=eo(o.b))),o},fromWorkingColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},toWorkingColorSpace:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===dr?Uu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[so]:{primaries:t,whitePoint:r,transfer:Uu,toXYZ:P_,fromXYZ:B_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:r,transfer:Xe,toXYZ:P_,fromXYZ:B_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),a}const Le=tT();function Ra(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function eo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Bs;class eT{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Bs===void 0&&(Bs=Lu("canvas")),Bs.width=t.width,Bs.height=t.height;const o=Bs.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),r=Bs}return r.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Lu("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const o=r.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ra(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ra(n[r]/255)*255):n[r]=Ra(n[r]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nT=0;class hm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=Dl(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(gh(o[u].image)):c.push(gh(o[u]))}else c=gh(o);r.url=c}return n||(t.images[this.uuid]=r),r}}function gh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?eT.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iT=0;class $n extends ho{constructor(t=$n.DEFAULT_IMAGE,n=$n.DEFAULT_MAPPING,r=Zr,o=Zr,c=ki,u=Kr,d=Ni,h=Ca,p=$n.DEFAULT_ANISOTROPY,g=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iT++}),this.uuid=Dl(),this.name="",this.source=new hm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=h,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pp:t.x=t.x-Math.floor(t.x);break;case Zr:t.x=t.x<0?0:1;break;case mp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pp:t.y=t.y-Math.floor(t.y);break;case Zr:t.y=t.y<0?0:1;break;case mp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=Rx;$n.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,n=0,r=0,o=1){on.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,r,o){return this.x=t,this.y=n,this.z=r,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,r=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,r,o,c;const h=t.elements,p=h[0],g=h[4],v=h[8],_=h[1],b=h[5],M=h[9],T=h[2],y=h[6],x=h[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(M+y)<.1&&Math.abs(p+b+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(p+1)/2,U=(b+1)/2,G=(x+1)/2,P=(g+_)/4,D=(v+T)/4,z=(M+y)/4;return N>U&&N>G?N<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(N),o=P/r,c=D/r):U>G?U<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(U),r=P/o,c=z/o):G<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(G),r=D/c,o=z/c),this.set(r,o,c,n),this}let F=Math.sqrt((y-M)*(y-M)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(F)<.001&&(F=1),this.x=(y-M)/F,this.y=(v-T)/F,this.z=(_-g)/F,this.w=Math.acos((p+b+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Re(this.x,t.x,n.x),this.y=Re(this.y,t.y,n.y),this.z=Re(this.z,t.z,n.z),this.w=Re(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Re(this.x,t,n),this.y=Re(this.y,t,n),this.z=Re(this.z,t,n),this.w=Re(this.w,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aT extends ho{constructor(t=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=r.depth?r.depth:1,this.scissor=new on(0,0,t,n),this.scissorTest=!1,this.viewport=new on(0,0,t,n);const o={width:t,height:n,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const c=new $n(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,r=1){if(this.width!==t||this.height!==n||this.depth!==r){this.width=t,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new hm(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends aT{constructor(t=1,n=1,r={}){super(t,n,r),this.isWebGLRenderTarget=!0}}class Ix extends $n{constructor(t=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:r,depth:o},this.magFilter=Li,this.minFilter=Li,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rT extends $n{constructor(t=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:r,depth:o},this.magFilter=Li,this.minFilter=Li,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ul{constructor(t=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=r,this._w=o}static slerpFlat(t,n,r,o,c,u,d){let h=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];const _=c[u+0],b=c[u+1],M=c[u+2],T=c[u+3];if(d===0){t[n+0]=h,t[n+1]=p,t[n+2]=g,t[n+3]=v;return}if(d===1){t[n+0]=_,t[n+1]=b,t[n+2]=M,t[n+3]=T;return}if(v!==T||h!==_||p!==b||g!==M){let y=1-d;const x=h*_+p*b+g*M+v*T,F=x>=0?1:-1,N=1-x*x;if(N>Number.EPSILON){const G=Math.sqrt(N),P=Math.atan2(G,x*F);y=Math.sin(y*P)/G,d=Math.sin(d*P)/G}const U=d*F;if(h=h*y+_*U,p=p*y+b*U,g=g*y+M*U,v=v*y+T*U,y===1-d){const G=1/Math.sqrt(h*h+p*p+g*g+v*v);h*=G,p*=G,g*=G,v*=G}}t[n]=h,t[n+1]=p,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,r,o,c,u){const d=r[o],h=r[o+1],p=r[o+2],g=r[o+3],v=c[u],_=c[u+1],b=c[u+2],M=c[u+3];return t[n]=d*M+g*v+h*b-p*_,t[n+1]=h*M+g*_+p*v-d*b,t[n+2]=p*M+g*b+d*_-h*v,t[n+3]=g*M-d*v-h*_-p*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,r,o){return this._x=t,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const r=t._x,o=t._y,c=t._z,u=t._order,d=Math.cos,h=Math.sin,p=d(r/2),g=d(o/2),v=d(c/2),_=h(r/2),b=h(o/2),M=h(c/2);switch(u){case"XYZ":this._x=_*g*v+p*b*M,this._y=p*b*v-_*g*M,this._z=p*g*M+_*b*v,this._w=p*g*v-_*b*M;break;case"YXZ":this._x=_*g*v+p*b*M,this._y=p*b*v-_*g*M,this._z=p*g*M-_*b*v,this._w=p*g*v+_*b*M;break;case"ZXY":this._x=_*g*v-p*b*M,this._y=p*b*v+_*g*M,this._z=p*g*M+_*b*v,this._w=p*g*v-_*b*M;break;case"ZYX":this._x=_*g*v-p*b*M,this._y=p*b*v+_*g*M,this._z=p*g*M-_*b*v,this._w=p*g*v+_*b*M;break;case"YZX":this._x=_*g*v+p*b*M,this._y=p*b*v+_*g*M,this._z=p*g*M-_*b*v,this._w=p*g*v-_*b*M;break;case"XZY":this._x=_*g*v-p*b*M,this._y=p*b*v-_*g*M,this._z=p*g*M+_*b*v,this._w=p*g*v+_*b*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const r=n/2,o=Math.sin(r);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,r=n[0],o=n[4],c=n[8],u=n[1],d=n[5],h=n[9],p=n[2],g=n[6],v=n[10],_=r+d+v;if(_>0){const b=.5/Math.sqrt(_+1);this._w=.25/b,this._x=(g-h)*b,this._y=(c-p)*b,this._z=(u-o)*b}else if(r>d&&r>v){const b=2*Math.sqrt(1+r-d-v);this._w=(g-h)/b,this._x=.25*b,this._y=(o+u)/b,this._z=(c+p)/b}else if(d>v){const b=2*Math.sqrt(1+d-r-v);this._w=(c-p)/b,this._x=(o+u)/b,this._y=.25*b,this._z=(h+g)/b}else{const b=2*Math.sqrt(1+v-r-d);this._w=(u-o)/b,this._x=(c+p)/b,this._y=(h+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let r=t.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,n){const r=this.angleTo(t);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const r=t._x,o=t._y,c=t._z,u=t._w,d=n._x,h=n._y,p=n._z,g=n._w;return this._x=r*g+u*d+o*p-c*h,this._y=o*g+u*h+c*d-r*p,this._z=c*g+u*p+r*h-o*d,this._w=u*g-r*d-o*h-c*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const r=this._x,o=this._y,c=this._z,u=this._w;let d=u*t._w+r*t._x+o*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=u,this._x=r,this._y=o,this._z=c,this;const h=1-d*d;if(h<=Number.EPSILON){const b=1-n;return this._w=b*u+n*this._w,this._x=b*r+n*this._x,this._y=b*o+n*this._y,this._z=b*c+n*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,d),v=Math.sin((1-n)*g)/p,_=Math.sin(n*g)/p;return this._w=u*v+this._w*_,this._x=r*v+this._x*_,this._y=o*v+this._y*_,this._z=c*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,n,r){return this.copy(t).slerp(n,r)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ct{constructor(t=0,n=0,r=0){ct.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(z_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(z_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,r=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,r=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,r=this.y,o=this.z,c=t.x,u=t.y,d=t.z,h=t.w,p=2*(u*o-d*r),g=2*(d*n-c*o),v=2*(c*r-u*n);return this.x=n+h*p+u*v-d*g,this.y=r+h*g+d*p-c*v,this.z=o+h*v+c*g-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,r=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Re(this.x,t.x,n.x),this.y=Re(this.y,t.y,n.y),this.z=Re(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Re(this.x,t,n),this.y=Re(this.y,t,n),this.z=Re(this.z,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const r=t.x,o=t.y,c=t.z,u=n.x,d=n.y,h=n.z;return this.x=o*h-c*d,this.y=c*u-r*h,this.z=r*d-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return vh.copy(this).projectOnVector(t),this.sub(vh)}reflect(t){return this.sub(vh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(Re(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y,o=this.z-t.z;return n*n+r*r+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,r){const o=Math.sin(n)*t;return this.x=o*Math.sin(r),this.y=Math.cos(n)*t,this.z=o*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(t),this.y=n,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vh=new ct,z_=new Ul;class Nl{constructor(t=new ct(1/0,1/0,1/0),n=new ct(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n+=3)this.expandByPoint(Ri.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,r=t.count;n<r;n++)this.expandByPoint(Ri.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const r=Ri.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)t.isMesh===!0?t.getVertexPosition(u,Ri):Ri.fromBufferAttribute(c,u),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yc.copy(r.boundingBox)),Yc.applyMatrix4(t.matrixWorld),this.union(Yc)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gl),Zc.subVectors(this.max,gl),zs.subVectors(t.a,gl),Is.subVectors(t.b,gl),Fs.subVectors(t.c,gl),rr.subVectors(Is,zs),sr.subVectors(Fs,Is),Ir.subVectors(zs,Fs);let n=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Ir.z,Ir.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Ir.z,0,-Ir.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Ir.y,Ir.x,0];return!_h(n,zs,Is,Fs,Zc)||(n=[1,0,0,0,1,0,0,0,1],!_h(n,zs,Is,Fs,Zc))?!1:(Kc.crossVectors(rr,sr),n=[Kc.x,Kc.y,Kc.z],_h(n,zs,Is,Fs,Zc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(da),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const da=[new ct,new ct,new ct,new ct,new ct,new ct,new ct,new ct],Ri=new ct,Yc=new Nl,zs=new ct,Is=new ct,Fs=new ct,rr=new ct,sr=new ct,Ir=new ct,gl=new ct,Zc=new ct,Kc=new ct,Fr=new ct;function _h(a,t,n,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){Fr.fromArray(a,c);const d=o.x*Math.abs(Fr.x)+o.y*Math.abs(Fr.y)+o.z*Math.abs(Fr.z),h=t.dot(Fr),p=n.dot(Fr),g=r.dot(Fr);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>d)return!1}return!0}const sT=new Nl,vl=new ct,xh=new ct;class pm{constructor(t=new ct,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const r=this.center;n!==void 0?r.copy(n):sT.setFromPoints(t).getCenter(r);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const r=this.center.distanceToSquared(t);return n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vl.subVectors(t,this.center);const n=vl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(vl,o/r),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vl.copy(t.center).add(xh)),this.expandByPoint(vl.copy(t.center).sub(xh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ha=new ct,yh=new ct,Qc=new ct,or=new ct,bh=new ct,$c=new ct,Sh=new ct;class oT{constructor(t=new ct,n=new ct(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ha)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ha.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ha.copy(this.origin).addScaledVector(this.direction,n),ha.distanceToSquared(t))}distanceSqToSegment(t,n,r,o){yh.copy(t).add(n).multiplyScalar(.5),Qc.copy(n).sub(t).normalize(),or.copy(this.origin).sub(yh);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Qc),d=or.dot(this.direction),h=-or.dot(Qc),p=or.lengthSq(),g=Math.abs(1-u*u);let v,_,b,M;if(g>0)if(v=u*h-d,_=u*d-h,M=c*g,v>=0)if(_>=-M)if(_<=M){const T=1/g;v*=T,_*=T,b=v*(v+u*_+2*d)+_*(u*v+_+2*h)+p}else _=c,v=Math.max(0,-(u*_+d)),b=-v*v+_*(_+2*h)+p;else _=-c,v=Math.max(0,-(u*_+d)),b=-v*v+_*(_+2*h)+p;else _<=-M?(v=Math.max(0,-(-u*c+d)),_=v>0?-c:Math.min(Math.max(-c,-h),c),b=-v*v+_*(_+2*h)+p):_<=M?(v=0,_=Math.min(Math.max(-c,-h),c),b=_*(_+2*h)+p):(v=Math.max(0,-(u*c+d)),_=v>0?c:Math.min(Math.max(-c,-h),c),b=-v*v+_*(_+2*h)+p);else _=u>0?-c:c,v=Math.max(0,-(u*_+d)),b=-v*v+_*(_+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(yh).addScaledVector(Qc,_),b}intersectSphere(t,n){ha.subVectors(t.center,this.origin);const r=ha.dot(this.direction),o=ha.dot(ha)-r*r,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,h=r+u;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null}intersectPlane(t,n){const r=this.distanceToPlane(t);return r===null?null:this.at(r,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let r,o,c,u,d,h;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(r=(t.min.x-_.x)*p,o=(t.max.x-_.x)*p):(r=(t.max.x-_.x)*p,o=(t.min.x-_.x)*p),g>=0?(c=(t.min.y-_.y)*g,u=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,u=(t.min.y-_.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),v>=0?(d=(t.min.z-_.z)*v,h=(t.max.z-_.z)*v):(d=(t.max.z-_.z)*v,h=(t.min.z-_.z)*v),r>h||d>o)||((d>r||r!==r)&&(r=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(t){return this.intersectBox(t,ha)!==null}intersectTriangle(t,n,r,o,c){bh.subVectors(n,t),$c.subVectors(r,t),Sh.crossVectors(bh,$c);let u=this.direction.dot(Sh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;or.subVectors(this.origin,t);const h=d*this.direction.dot($c.crossVectors(or,$c));if(h<0)return null;const p=d*this.direction.dot(bh.cross(or));if(p<0||h+p>u)return null;const g=-d*or.dot(Sh);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mn{constructor(t,n,r,o,c,u,d,h,p,g,v,_,b,M,T,y){mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,o,c,u,d,h,p,g,v,_,b,M,T,y)}set(t,n,r,o,c,u,d,h,p,g,v,_,b,M,T,y){const x=this.elements;return x[0]=t,x[4]=n,x[8]=r,x[12]=o,x[1]=c,x[5]=u,x[9]=d,x[13]=h,x[2]=p,x[6]=g,x[10]=v,x[14]=_,x[3]=b,x[7]=M,x[11]=T,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mn().fromArray(this.elements)}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(t){const n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,r){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,r=t.elements,o=1/Hs.setFromMatrixColumn(t,0).length(),c=1/Hs.setFromMatrixColumn(t,1).length(),u=1/Hs.setFromMatrixColumn(t,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,r=t.x,o=t.y,c=t.z,u=Math.cos(r),d=Math.sin(r),h=Math.cos(o),p=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=u*g,b=u*v,M=d*g,T=d*v;n[0]=h*g,n[4]=-h*v,n[8]=p,n[1]=b+M*p,n[5]=_-T*p,n[9]=-d*h,n[2]=T-_*p,n[6]=M+b*p,n[10]=u*h}else if(t.order==="YXZ"){const _=h*g,b=h*v,M=p*g,T=p*v;n[0]=_+T*d,n[4]=M*d-b,n[8]=u*p,n[1]=u*v,n[5]=u*g,n[9]=-d,n[2]=b*d-M,n[6]=T+_*d,n[10]=u*h}else if(t.order==="ZXY"){const _=h*g,b=h*v,M=p*g,T=p*v;n[0]=_-T*d,n[4]=-u*v,n[8]=M+b*d,n[1]=b+M*d,n[5]=u*g,n[9]=T-_*d,n[2]=-u*p,n[6]=d,n[10]=u*h}else if(t.order==="ZYX"){const _=u*g,b=u*v,M=d*g,T=d*v;n[0]=h*g,n[4]=M*p-b,n[8]=_*p+T,n[1]=h*v,n[5]=T*p+_,n[9]=b*p-M,n[2]=-p,n[6]=d*h,n[10]=u*h}else if(t.order==="YZX"){const _=u*h,b=u*p,M=d*h,T=d*p;n[0]=h*g,n[4]=T-_*v,n[8]=M*v+b,n[1]=v,n[5]=u*g,n[9]=-d*g,n[2]=-p*g,n[6]=b*v+M,n[10]=_-T*v}else if(t.order==="XZY"){const _=u*h,b=u*p,M=d*h,T=d*p;n[0]=h*g,n[4]=-v,n[8]=p*g,n[1]=_*v+T,n[5]=u*g,n[9]=b*v-M,n[2]=M*v-b,n[6]=d*g,n[10]=T*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lT,t,cT)}lookAt(t,n,r){const o=this.elements;return oi.subVectors(t,n),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),lr.crossVectors(r,oi),lr.lengthSq()===0&&(Math.abs(r.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),lr.crossVectors(r,oi)),lr.normalize(),Jc.crossVectors(oi,lr),o[0]=lr.x,o[4]=Jc.x,o[8]=oi.x,o[1]=lr.y,o[5]=Jc.y,o[9]=oi.y,o[2]=lr.z,o[6]=Jc.z,o[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,o=n.elements,c=this.elements,u=r[0],d=r[4],h=r[8],p=r[12],g=r[1],v=r[5],_=r[9],b=r[13],M=r[2],T=r[6],y=r[10],x=r[14],F=r[3],N=r[7],U=r[11],G=r[15],P=o[0],D=o[4],z=o[8],w=o[12],E=o[1],L=o[5],k=o[9],W=o[13],et=o[2],ut=o[6],I=o[10],q=o[14],X=o[3],yt=o[7],O=o[11],tt=o[15];return c[0]=u*P+d*E+h*et+p*X,c[4]=u*D+d*L+h*ut+p*yt,c[8]=u*z+d*k+h*I+p*O,c[12]=u*w+d*W+h*q+p*tt,c[1]=g*P+v*E+_*et+b*X,c[5]=g*D+v*L+_*ut+b*yt,c[9]=g*z+v*k+_*I+b*O,c[13]=g*w+v*W+_*q+b*tt,c[2]=M*P+T*E+y*et+x*X,c[6]=M*D+T*L+y*ut+x*yt,c[10]=M*z+T*k+y*I+x*O,c[14]=M*w+T*W+y*q+x*tt,c[3]=F*P+N*E+U*et+G*X,c[7]=F*D+N*L+U*ut+G*yt,c[11]=F*z+N*k+U*I+G*O,c[15]=F*w+N*W+U*q+G*tt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[4],o=t[8],c=t[12],u=t[1],d=t[5],h=t[9],p=t[13],g=t[2],v=t[6],_=t[10],b=t[14],M=t[3],T=t[7],y=t[11],x=t[15];return M*(+c*h*v-o*p*v-c*d*_+r*p*_+o*d*b-r*h*b)+T*(+n*h*b-n*p*_+c*u*_-o*u*b+o*p*g-c*h*g)+y*(+n*p*v-n*d*b-c*u*v+r*u*b+c*d*g-r*p*g)+x*(-o*d*g-n*h*v+n*d*_+o*u*v-r*u*_+r*h*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,r){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=r),this}invert(){const t=this.elements,n=t[0],r=t[1],o=t[2],c=t[3],u=t[4],d=t[5],h=t[6],p=t[7],g=t[8],v=t[9],_=t[10],b=t[11],M=t[12],T=t[13],y=t[14],x=t[15],F=v*y*p-T*_*p+T*h*b-d*y*b-v*h*x+d*_*x,N=M*_*p-g*y*p-M*h*b+u*y*b+g*h*x-u*_*x,U=g*T*p-M*v*p+M*d*b-u*T*b-g*d*x+u*v*x,G=M*v*h-g*T*h-M*d*_+u*T*_+g*d*y-u*v*y,P=n*F+r*N+o*U+c*G;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return t[0]=F*D,t[1]=(T*_*c-v*y*c-T*o*b+r*y*b+v*o*x-r*_*x)*D,t[2]=(d*y*c-T*h*c+T*o*p-r*y*p-d*o*x+r*h*x)*D,t[3]=(v*h*c-d*_*c-v*o*p+r*_*p+d*o*b-r*h*b)*D,t[4]=N*D,t[5]=(g*y*c-M*_*c+M*o*b-n*y*b-g*o*x+n*_*x)*D,t[6]=(M*h*c-u*y*c-M*o*p+n*y*p+u*o*x-n*h*x)*D,t[7]=(u*_*c-g*h*c+g*o*p-n*_*p-u*o*b+n*h*b)*D,t[8]=U*D,t[9]=(M*v*c-g*T*c-M*r*b+n*T*b+g*r*x-n*v*x)*D,t[10]=(u*T*c-M*d*c+M*r*p-n*T*p-u*r*x+n*d*x)*D,t[11]=(g*d*c-u*v*c-g*r*p+n*v*p+u*r*b-n*d*b)*D,t[12]=G*D,t[13]=(g*T*o-M*v*o+M*r*_-n*T*_-g*r*y+n*v*y)*D,t[14]=(M*d*o-u*T*o-M*r*h+n*T*h+u*r*y-n*d*y)*D,t[15]=(u*v*o-g*d*o+g*r*h-n*v*h-u*r*_+n*d*_)*D,this}scale(t){const n=this.elements,r=t.x,o=t.y,c=t.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(t,n,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=t.x,d=t.y,h=t.z,p=c*u,g=c*d;return this.set(p*u+r,p*d-o*h,p*h+o*d,0,p*d+o*h,g*d+r,g*h-o*u,0,p*h-o*d,g*h+o*u,c*h*h+r,0,0,0,0,1),this}makeScale(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,n,r,o,c,u){return this.set(1,r,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,r){const o=this.elements,c=n._x,u=n._y,d=n._z,h=n._w,p=c+c,g=u+u,v=d+d,_=c*p,b=c*g,M=c*v,T=u*g,y=u*v,x=d*v,F=h*p,N=h*g,U=h*v,G=r.x,P=r.y,D=r.z;return o[0]=(1-(T+x))*G,o[1]=(b+U)*G,o[2]=(M-N)*G,o[3]=0,o[4]=(b-U)*P,o[5]=(1-(_+x))*P,o[6]=(y+F)*P,o[7]=0,o[8]=(M+N)*D,o[9]=(y-F)*D,o[10]=(1-(_+T))*D,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,r){const o=this.elements;let c=Hs.set(o[0],o[1],o[2]).length();const u=Hs.set(o[4],o[5],o[6]).length(),d=Hs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],wi.copy(this);const p=1/c,g=1/u,v=1/d;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=g,wi.elements[5]*=g,wi.elements[6]*=g,wi.elements[8]*=v,wi.elements[9]*=v,wi.elements[10]*=v,n.setFromRotationMatrix(wi),r.x=c,r.y=u,r.z=d,this}makePerspective(t,n,r,o,c,u,d=Ea){const h=this.elements,p=2*c/(n-t),g=2*c/(r-o),v=(n+t)/(n-t),_=(r+o)/(r-o);let b,M;if(d===Ea)b=-(u+c)/(u-c),M=-2*u*c/(u-c);else if(d===Nu)b=-u/(u-c),M=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=p,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,n,r,o,c,u,d=Ea){const h=this.elements,p=1/(n-t),g=1/(r-o),v=1/(u-c),_=(n+t)*p,b=(r+o)*g;let M,T;if(d===Ea)M=(u+c)*v,T=-2*v;else if(d===Nu)M=c*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-b,h[2]=0,h[6]=0,h[10]=T,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const n=this.elements,r=t.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(t,n=0){for(let r=0;r<16;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t}}const Hs=new ct,wi=new mn,lT=new ct(0,0,0),cT=new ct(1,1,1),lr=new ct,Jc=new ct,oi=new ct,I_=new mn,F_=new Ul;class Da{constructor(t=0,n=0,r=0,o=Da.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,o=this._order){return this._x=t,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){const o=t.elements,c=o[0],u=o[4],d=o[8],h=o[1],p=o[5],g=o[9],v=o[2],_=o[6],b=o[10];switch(n){case"XYZ":this._y=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,b),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Re(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,b),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-Re(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,b),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,b));break;case"XZY":this._z=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return I_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(I_,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return F_.setFromEuler(this),this.setFromQuaternion(F_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Da.DEFAULT_ORDER="XYZ";class Fx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uT=0;const H_=new ct,Gs=new Ul,pa=new mn,tu=new ct,_l=new ct,fT=new ct,dT=new Ul,G_=new ct(1,0,0),V_=new ct(0,1,0),k_=new ct(0,0,1),X_={type:"added"},hT={type:"removed"},Vs={type:"childadded",child:null},Mh={type:"childremoved",child:null};class ui extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=Dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const t=new ct,n=new Da,r=new Ul,o=new ct(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new mn},normalMatrix:{value:new he}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Gs.setFromAxisAngle(t,n),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(t,n){return Gs.setFromAxisAngle(t,n),this.quaternion.premultiply(Gs),this}rotateX(t){return this.rotateOnAxis(G_,t)}rotateY(t){return this.rotateOnAxis(V_,t)}rotateZ(t){return this.rotateOnAxis(k_,t)}translateOnAxis(t,n){return H_.copy(t).applyQuaternion(this.quaternion),this.position.add(H_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(G_,t)}translateY(t){return this.translateOnAxis(V_,t)}translateZ(t){return this.translateOnAxis(k_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?tu.copy(t):tu.set(t,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),_l.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(_l,tu,this.up):pa.lookAt(tu,_l,this.up),this.quaternion.setFromRotationMatrix(pa),o&&(pa.extractRotation(o.matrixWorld),Gs.setFromRotationMatrix(pa),this.quaternion.premultiply(Gs.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(X_),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(hT),Mh.child=t,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pa.multiply(t.parent.matrixWorld)),t.applyMatrix4(pa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(X_),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,t,fT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,dT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const v=h[p];c(t.shapes,v)}else c(t.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,p=this.material.length;h<p;h++)d.push(c(t.materials,this.material[h]));o.material=d}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(c(t.animations,h))}}if(n){const d=u(t.geometries),h=u(t.materials),p=u(t.textures),g=u(t.images),v=u(t.shapes),_=u(t.skeletons),b=u(t.animations),M=u(t.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),b.length>0&&(r.animations=b),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(d){const h=[];for(const p in d){const g=d[p];delete g.metadata,h.push(g)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){const o=t.children[r];this.add(o.clone())}return this}}ui.DEFAULT_UP=new ct(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new ct,ma=new ct,Eh=new ct,ga=new ct,ks=new ct,Xs=new ct,j_=new ct,Th=new ct,Ah=new ct,Rh=new ct,wh=new on,Ch=new on,Dh=new on;class Ui{constructor(t=new ct,n=new ct,r=new ct){this.a=t,this.b=n,this.c=r}static getNormal(t,n,r,o){o.subVectors(r,n),Ci.subVectors(t,n),o.cross(Ci);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,r,o,c){Ci.subVectors(o,n),ma.subVectors(r,n),Eh.subVectors(t,n);const u=Ci.dot(Ci),d=Ci.dot(ma),h=Ci.dot(Eh),p=ma.dot(ma),g=ma.dot(Eh),v=u*p-d*d;if(v===0)return c.set(0,0,0),null;const _=1/v,b=(p*h-d*g)*_,M=(u*g-d*h)*_;return c.set(1-b-M,M,b)}static containsPoint(t,n,r,o){return this.getBarycoord(t,n,r,o,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(t,n,r,o,c,u,d,h){return this.getBarycoord(t,n,r,o,ga)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,ga.x),h.addScaledVector(u,ga.y),h.addScaledVector(d,ga.z),h)}static getInterpolatedAttribute(t,n,r,o,c,u){return wh.setScalar(0),Ch.setScalar(0),Dh.setScalar(0),wh.fromBufferAttribute(t,n),Ch.fromBufferAttribute(t,r),Dh.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(wh,c.x),u.addScaledVector(Ch,c.y),u.addScaledVector(Dh,c.z),u}static isFrontFacing(t,n,r,o){return Ci.subVectors(r,n),ma.subVectors(t,n),Ci.cross(ma).dot(o)<0}set(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(t,n,r,o){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,r,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Ci.cross(ma).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ui.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,o,c){return Ui.getInterpolation(t,this.a,this.b,this.c,n,r,o,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const r=this.a,o=this.b,c=this.c;let u,d;ks.subVectors(o,r),Xs.subVectors(c,r),Th.subVectors(t,r);const h=ks.dot(Th),p=Xs.dot(Th);if(h<=0&&p<=0)return n.copy(r);Ah.subVectors(t,o);const g=ks.dot(Ah),v=Xs.dot(Ah);if(g>=0&&v<=g)return n.copy(o);const _=h*v-g*p;if(_<=0&&h>=0&&g<=0)return u=h/(h-g),n.copy(r).addScaledVector(ks,u);Rh.subVectors(t,c);const b=ks.dot(Rh),M=Xs.dot(Rh);if(M>=0&&b<=M)return n.copy(c);const T=b*p-h*M;if(T<=0&&p>=0&&M<=0)return d=p/(p-M),n.copy(r).addScaledVector(Xs,d);const y=g*M-b*v;if(y<=0&&v-g>=0&&b-M>=0)return j_.subVectors(c,o),d=(v-g)/(v-g+(b-M)),n.copy(o).addScaledVector(j_,d);const x=1/(y+T+_);return u=T*x,d=_*x,n.copy(r).addScaledVector(ks,u).addScaledVector(Xs,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},eu={h:0,s:0,l:0};function Uh(a,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(t-a)*6*n:n<1/2?t:n<2/3?a+(t-a)*6*(2/3-n):a}let Be=class{constructor(t,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,r)}set(t,n,r){if(n===void 0&&r===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.toWorkingColorSpace(this,n),this}setRGB(t,n,r,o=Le.workingColorSpace){return this.r=t,this.g=n,this.b=r,Le.toWorkingColorSpace(this,o),this}setHSL(t,n,r,o=Le.workingColorSpace){if(t=q2(t,1),n=Re(n,0,1),r=Re(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Uh(u,c,t+1/3),this.g=Uh(u,c,t),this.b=Uh(u,c,t-1/3)}return Le.toWorkingColorSpace(this,o),this}setStyle(t,n=xi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=xi){const r=Hx[t.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ra(t.r),this.g=Ra(t.g),this.b=Ra(t.b),this}copyLinearToSRGB(t){return this.r=eo(t.r),this.g=eo(t.g),this.b=eo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return Le.fromWorkingColorSpace(In.copy(this),t),Math.round(Re(In.r*255,0,255))*65536+Math.round(Re(In.g*255,0,255))*256+Math.round(Re(In.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Le.workingColorSpace){Le.fromWorkingColorSpace(In.copy(this),n);const r=In.r,o=In.g,c=In.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let h,p;const g=(d+u)/2;if(d===u)h=0,p=0;else{const v=u-d;switch(p=g<=.5?v/(u+d):v/(2-u-d),u){case r:h=(o-c)/v+(o<c?6:0);break;case o:h=(c-r)/v+2;break;case c:h=(r-o)/v+4;break}h/=6}return t.h=h,t.s=p,t.l=g,t}getRGB(t,n=Le.workingColorSpace){return Le.fromWorkingColorSpace(In.copy(this),n),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=xi){Le.fromWorkingColorSpace(In.copy(this),t);const n=In.r,r=In.g,o=In.b;return t!==xi?`color(${t} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(t,n,r){return this.getHSL(cr),this.setHSL(cr.h+t,cr.s+n,cr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,r){return this.r=t.r+(n.r-t.r)*r,this.g=t.g+(n.g-t.g)*r,this.b=t.b+(n.b-t.b)*r,this}lerpHSL(t,n){this.getHSL(cr),t.getHSL(eu);const r=ph(cr.h,eu.h,n),o=ph(cr.s,eu.s,n),c=ph(cr.l,eu.l,n);return this.setHSL(r,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,r=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const In=new Be;Be.NAMES=Hx;let pT=0;class ku extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pT++}),this.uuid=Dl(),this.name="",this.type="Material",this.blending=to,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ip,this.blendDst=ap,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(r.blending=this.blending),this.side!==mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ip&&(r.blendSrc=this.blendSrc),this.blendDst!==ap&&(r.blendDst=this.blendDst),this.blendEquation!==qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==U_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const h=c[d];delete h.metadata,u.push(h)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Gx extends ku{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Da,this.combine=Ax,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new ct,nu=new qe;let mT=0;class Fn{constructor(t,n,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=r,this.usage=N_,this.updateRanges=[],this.gpuType=Ma,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,r){t*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[r+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)nu.fromBufferAttribute(this,n),nu.applyMatrix3(t),this.setXY(n,nu.x,nu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix3(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix4(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyNormalMatrix(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.transformDirection(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let r=this.array[t*this.itemSize+n];return this.normalized&&(r=ml(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=Kn(r,this.array)),this.array[t*this.itemSize+n]=r,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ml(n,this.array)),n}setX(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ml(n,this.array)),n}setY(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ml(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ml(n,this.array)),n}setW(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,r){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),r=Kn(r,this.array)),this.array[t+0]=n,this.array[t+1]=r,this}setXYZ(t,n,r,o){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),r=Kn(r,this.array),o=Kn(o,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=o,this}setXYZW(t,n,r,o,c){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),r=Kn(r,this.array),o=Kn(o,this.array),c=Kn(c,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==N_&&(t.usage=this.usage),t}}class Vx extends Fn{constructor(t,n,r){super(new Uint16Array(t),n,r)}}class kx extends Fn{constructor(t,n,r){super(new Uint32Array(t),n,r)}}class Qr extends Fn{constructor(t,n,r){super(new Float32Array(t),n,r)}}let gT=0;const _i=new mn,Nh=new ui,js=new ct,li=new Nl,xl=new Nl,Rn=new ct;class gr extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=Dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zx(t)?kx:Vx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,r=0){this.groups.push({start:t,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new he().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,n,r){return _i.makeTranslation(t,n,r),this.applyMatrix4(_i),this}scale(t,n,r){return _i.makeScale(t,n,r),this.applyMatrix4(_i),this}lookAt(t){return Nh.lookAt(t),Nh.updateMatrix(),this.applyMatrix4(Nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Qr(r,3))}else{const r=Math.min(t.length,n.count);for(let o=0;o<r;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ct(-1/0,-1/0,-1/0),new ct(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];li.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pm);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ct,1/0);return}if(t){const r=this.boundingSphere.center;if(li.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];xl.setFromBufferAttribute(d),this.morphTargetsRelative?(Rn.addVectors(li.min,xl.min),li.expandByPoint(Rn),Rn.addVectors(li.max,xl.max),li.expandByPoint(Rn)):(li.expandByPoint(xl.min),li.expandByPoint(xl.max))}li.getCenter(r);let o=0;for(let c=0,u=t.count;c<u;c++)Rn.fromBufferAttribute(t,c),o=Math.max(o,r.distanceToSquared(Rn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],h=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Rn.fromBufferAttribute(d,p),h&&(js.fromBufferAttribute(t,p),Rn.add(js)),o=Math.max(o,r.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let z=0;z<r.count;z++)d[z]=new ct,h[z]=new ct;const p=new ct,g=new ct,v=new ct,_=new qe,b=new qe,M=new qe,T=new ct,y=new ct;function x(z,w,E){p.fromBufferAttribute(r,z),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,E),_.fromBufferAttribute(c,z),b.fromBufferAttribute(c,w),M.fromBufferAttribute(c,E),g.sub(p),v.sub(p),b.sub(_),M.sub(_);const L=1/(b.x*M.y-M.x*b.y);isFinite(L)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(v,-b.y).multiplyScalar(L),y.copy(v).multiplyScalar(b.x).addScaledVector(g,-M.x).multiplyScalar(L),d[z].add(T),d[w].add(T),d[E].add(T),h[z].add(y),h[w].add(y),h[E].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let z=0,w=F.length;z<w;++z){const E=F[z],L=E.start,k=E.count;for(let W=L,et=L+k;W<et;W+=3)x(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const N=new ct,U=new ct,G=new ct,P=new ct;function D(z){G.fromBufferAttribute(o,z),P.copy(G);const w=d[z];N.copy(w),N.sub(G.multiplyScalar(G.dot(w))).normalize(),U.crossVectors(P,w);const L=U.dot(h[z])<0?-1:1;u.setXYZW(z,N.x,N.y,N.z,L)}for(let z=0,w=F.length;z<w;++z){const E=F[z],L=E.start,k=E.count;for(let W=L,et=L+k;W<et;W+=3)D(t.getX(W+0)),D(t.getX(W+1)),D(t.getX(W+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,b=r.count;_<b;_++)r.setXYZ(_,0,0,0);const o=new ct,c=new ct,u=new ct,d=new ct,h=new ct,p=new ct,g=new ct,v=new ct;if(t)for(let _=0,b=t.count;_<b;_+=3){const M=t.getX(_+0),T=t.getX(_+1),y=t.getX(_+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),d.fromBufferAttribute(r,M),h.fromBufferAttribute(r,T),p.fromBufferAttribute(r,y),d.add(g),h.add(g),p.add(g),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,b=n.count;_<b;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,r=t.count;n<r;n++)Rn.fromBufferAttribute(t,n),Rn.normalize(),t.setXYZ(n,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function t(d,h){const p=d.array,g=d.itemSize,v=d.normalized,_=new p.constructor(h.length*g);let b=0,M=0;for(let T=0,y=h.length;T<y;T++){d.isInterleavedBufferAttribute?b=h[T]*d.data.stride+d.offset:b=h[T]*g;for(let x=0;x<g;x++)_[M++]=p[b++]}return new Fn(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gr,r=this.index.array,o=this.attributes;for(const d in o){const h=o[d],p=t(h,r);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const h=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const _=p[g],b=t(_,r);h.push(b)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(t[p]=h[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const p=r[h];t.data.attributes[h]=p.toJSON(t.data)}const o={};let c=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let v=0,_=p.length;v<_;v++){const b=p[v];g.push(b.toJSON(t.data))}g.length>0&&(o[h]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let _=0,b=v.length;_<b;_++)g.push(v[_].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,g=u.length;p<g;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const W_=new mn,Hr=new oT,iu=new pm,q_=new ct,au=new ct,ru=new ct,su=new ct,Lh=new ct,ou=new ct,Y_=new ct,lu=new ct;class Xi extends ui{constructor(t=new gr,n=new Gx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,t);const d=this.morphTargetInfluences;if(c&&d){ou.set(0,0,0);for(let h=0,p=c.length;h<p;h++){const g=d[h],v=c[h];g!==0&&(Lh.fromBufferAttribute(v,t),u?ou.addScaledVector(Lh,g):ou.addScaledVector(Lh.sub(n),g))}n.add(ou)}return n}raycast(t,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),iu.copy(r.boundingSphere),iu.applyMatrix4(c),Hr.copy(t.ray).recast(t.near),!(iu.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(iu,q_)===null||Hr.origin.distanceToSquared(q_)>(t.far-t.near)**2))&&(W_.copy(c).invert(),Hr.copy(t.ray).applyMatrix4(W_),!(r.boundingBox!==null&&Hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,n,Hr)))}_computeIntersections(t,n,r){let o;const c=this.geometry,u=this.material,d=c.index,h=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,b=c.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,T=_.length;M<T;M++){const y=_[M],x=u[y.materialIndex],F=Math.max(y.start,b.start),N=Math.min(d.count,Math.min(y.start+y.count,b.start+b.count));for(let U=F,G=N;U<G;U+=3){const P=d.getX(U),D=d.getX(U+1),z=d.getX(U+2);o=cu(this,x,t,r,p,g,v,P,D,z),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,b.start),T=Math.min(d.count,b.start+b.count);for(let y=M,x=T;y<x;y+=3){const F=d.getX(y),N=d.getX(y+1),U=d.getX(y+2);o=cu(this,u,t,r,p,g,v,F,N,U),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let M=0,T=_.length;M<T;M++){const y=_[M],x=u[y.materialIndex],F=Math.max(y.start,b.start),N=Math.min(h.count,Math.min(y.start+y.count,b.start+b.count));for(let U=F,G=N;U<G;U+=3){const P=U,D=U+1,z=U+2;o=cu(this,x,t,r,p,g,v,P,D,z),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,b.start),T=Math.min(h.count,b.start+b.count);for(let y=M,x=T;y<x;y+=3){const F=y,N=y+1,U=y+2;o=cu(this,u,t,r,p,g,v,F,N,U),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function vT(a,t,n,r,o,c,u,d){let h;if(t.side===Qn?h=r.intersectTriangle(u,c,o,!0,d):h=r.intersectTriangle(o,c,u,t.side===mr,d),h===null)return null;lu.copy(d),lu.applyMatrix4(a.matrixWorld);const p=n.ray.origin.distanceTo(lu);return p<n.near||p>n.far?null:{distance:p,point:lu.clone(),object:a}}function cu(a,t,n,r,o,c,u,d,h,p){a.getVertexPosition(d,au),a.getVertexPosition(h,ru),a.getVertexPosition(p,su);const g=vT(a,t,n,r,au,ru,su,Y_);if(g){const v=new ct;Ui.getBarycoord(Y_,au,ru,su,v),o&&(g.uv=Ui.getInterpolatedAttribute(o,d,h,p,v,new qe)),c&&(g.uv1=Ui.getInterpolatedAttribute(c,d,h,p,v,new qe)),u&&(g.normal=Ui.getInterpolatedAttribute(u,d,h,p,v,new ct),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:h,c:p,normal:new ct,materialIndex:0};Ui.getNormal(au,ru,su,_.normal),g.face=_,g.barycoord=v}return g}class Ll extends gr{constructor(t=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const h=[],p=[],g=[],v=[];let _=0,b=0;M("z","y","x",-1,-1,r,n,t,u,c,0),M("z","y","x",1,-1,r,n,-t,u,c,1),M("x","z","y",1,1,t,r,n,o,u,2),M("x","z","y",1,-1,t,r,-n,o,u,3),M("x","y","z",1,-1,t,n,r,o,c,4),M("x","y","z",-1,-1,t,n,-r,o,c,5),this.setIndex(h),this.setAttribute("position",new Qr(p,3)),this.setAttribute("normal",new Qr(g,3)),this.setAttribute("uv",new Qr(v,2));function M(T,y,x,F,N,U,G,P,D,z,w){const E=U/D,L=G/z,k=U/2,W=G/2,et=P/2,ut=D+1,I=z+1;let q=0,X=0;const yt=new ct;for(let O=0;O<I;O++){const tt=O*L-W;for(let vt=0;vt<ut;vt++){const pt=vt*E-k;yt[T]=pt*F,yt[y]=tt*N,yt[x]=et,p.push(yt.x,yt.y,yt.z),yt[T]=0,yt[y]=0,yt[x]=P>0?1:-1,g.push(yt.x,yt.y,yt.z),v.push(vt/D),v.push(1-O/z),q+=1}}for(let O=0;O<z;O++)for(let tt=0;tt<D;tt++){const vt=_+tt+ut*O,pt=_+tt+ut*(O+1),Y=_+(tt+1)+ut*(O+1),dt=_+(tt+1)+ut*O;h.push(vt,pt,dt),h.push(pt,Y,dt),X+=6}d.addGroup(b,X,w),b+=X,_+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ll(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function oo(a){const t={};for(const n in a){t[n]={};for(const r in a[n]){const o=a[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][r]=null):t[n][r]=o.clone():Array.isArray(o)?t[n][r]=o.slice():t[n][r]=o}}return t}function Xn(a){const t={};for(let n=0;n<a.length;n++){const r=oo(a[n]);for(const o in r)t[o]=r[o]}return t}function _T(a){const t=[];for(let n=0;n<a.length;n++)t.push(a[n].clone());return t}function Xx(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const xT={clone:oo,merge:Xn};var yT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ua extends ku{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yT,this.fragmentShader=bT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=oo(t.uniforms),this.uniformsGroups=_T(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class jx extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=Ea}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ur=new ct,Z_=new qe,K_=new qe;class yi extends jx{constructor(t=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Vp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vp*2*Math.atan(Math.tan(hh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,r){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-t/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ur.x,ur.y).multiplyScalar(-t/ur.z)}getViewSize(t,n){return this.getViewBounds(t,Z_,K_),n.subVectors(K_,Z_)}setViewOffset(t,n,r,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(hh*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/h,n-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ws=-90,qs=1;class ST extends ui{constructor(t,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new yi(Ws,qs,t,n);o.layers=this.layers,this.add(o);const c=new yi(Ws,qs,t,n);c.layers=this.layers,this.add(c);const u=new yi(Ws,qs,t,n);u.layers=this.layers,this.add(u);const d=new yi(Ws,qs,t,n);d.layers=this.layers,this.add(d);const h=new yi(Ws,qs,t,n);h.layers=this.layers,this.add(h);const p=new yi(Ws,qs,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,d,h]=n;for(const p of n)this.remove(p);if(t===Ea)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Nu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,h,p,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,o),t.render(n,c),t.setRenderTarget(r,1,o),t.render(n,u),t.setRenderTarget(r,2,o),t.render(n,d),t.setRenderTarget(r,3,o),t.render(n,h),t.setRenderTarget(r,4,o),t.render(n,p),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,o),t.render(n,g),t.setRenderTarget(v,_,b),t.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Wx extends $n{constructor(t=[],n=ao,r,o,c,u,d,h,p,g){super(t,n,r,o,c,u,d,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class MT extends ts{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},o=[r,r,r,r,r,r];this.texture=new Wx(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ki}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ll(5,5,5),c=new Ua({name:"CubemapFromEquirect",uniforms:oo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qn,blending:hr});c.uniforms.tEquirect.value=n;const u=new Xi(o,c),d=n.minFilter;return n.minFilter===Kr&&(n.minFilter=ki),new ST(1,10,this).update(t,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,r=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,r,o);t.setRenderTarget(c)}}class uu extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ET={type:"move"};class Oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ct,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ct),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ct,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ct),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const r of t.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,r){let o=null,c=null,u=null;const d=this._targetRay,h=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const T of t.hand.values()){const y=n.getJointPose(T,r),x=this._getHandJoint(p,T);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),b=.02,M=.005;p.inputState.pinching&&_>b+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=b-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,r),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(o=n.getPose(t.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ET)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const r=new uu;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[n.jointName]=r,t.add(r)}return t.joints[n.jointName]}}class TT extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Da,this.environmentIntensity=1,this.environmentRotation=new Da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ph=new ct,AT=new ct,RT=new he;class jr{constructor(t=new ct(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,r,o){return this.normal.set(t,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,r){const o=Ph.subVectors(r,n).cross(AT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const r=t.delta(Ph),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const r=n||RT.getNormalMatrix(t),o=this.coplanarPoint(Ph).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new pm,fu=new ct;class qx{constructor(t=new jr,n=new jr,r=new jr,o=new jr,c=new jr,u=new jr){this.planes=[t,n,r,o,c,u]}set(t,n,r,o,c,u){const d=this.planes;return d[0].copy(t),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(t){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,n=Ea){const r=this.planes,o=t.elements,c=o[0],u=o[1],d=o[2],h=o[3],p=o[4],g=o[5],v=o[6],_=o[7],b=o[8],M=o[9],T=o[10],y=o[11],x=o[12],F=o[13],N=o[14],U=o[15];if(r[0].setComponents(h-c,_-p,y-b,U-x).normalize(),r[1].setComponents(h+c,_+p,y+b,U+x).normalize(),r[2].setComponents(h+u,_+g,y+M,U+F).normalize(),r[3].setComponents(h-u,_-g,y-M,U-F).normalize(),r[4].setComponents(h-d,_-v,y-T,U-N).normalize(),n===Ea)r[5].setComponents(h+d,_+v,y+T,U+N).normalize();else if(n===Nu)r[5].setComponents(d,v,T,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(t){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(t){const n=this.planes,r=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(fu.x=o.normal.x>0?t.max.x:t.min.x,fu.y=o.normal.y>0?t.max.y:t.min.y,fu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(fu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yx extends $n{constructor(t,n,r=Jr,o,c,u,d=Li,h=Li,p,g=Tl){if(g!==Tl&&g!==Al)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,c,u,d,h,g,r,p),this.isDepthTexture=!0,this.image={width:t,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Xu extends gr{constructor(t=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:r,heightSegments:o};const c=t/2,u=n/2,d=Math.floor(r),h=Math.floor(o),p=d+1,g=h+1,v=t/d,_=n/h,b=[],M=[],T=[],y=[];for(let x=0;x<g;x++){const F=x*_-u;for(let N=0;N<p;N++){const U=N*v-c;M.push(U,-F,0),T.push(0,0,1),y.push(N/d),y.push(1-x/h)}}for(let x=0;x<h;x++)for(let F=0;F<d;F++){const N=F+p*x,U=F+p*(x+1),G=F+1+p*(x+1),P=F+1+p*x;b.push(N,U,P),b.push(U,G,P)}this.setIndex(b),this.setAttribute("position",new Qr(M,3)),this.setAttribute("normal",new Qr(T,3)),this.setAttribute("uv",new Qr(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xu(t.width,t.height,t.widthSegments,t.heightSegments)}}class wT extends ku{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class CT extends ku{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class DT extends jx{constructor(t=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-t,u=r+t,d=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,d-=g*this.view.offsetY,h=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class UT extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Q_(a,t,n,r){const o=NT(r);switch(n){case Ux:return a*t;case Lx:return a*t/o.components*o.byteLength;case um:return a*t/o.components*o.byteLength;case Ox:return a*t*2/o.components*o.byteLength;case fm:return a*t*2/o.components*o.byteLength;case Nx:return a*t*3/o.components*o.byteLength;case Ni:return a*t*4/o.components*o.byteLength;case dm:return a*t*4/o.components*o.byteLength;case yu:case bu:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Su:case Mu:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case vp:case xp:return Math.max(a,16)*Math.max(t,8)/4;case gp:case _p:return Math.max(a,8)*Math.max(t,8)/2;case yp:case bp:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Sp:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Mp:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Ep:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case Tp:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case Ap:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case Rp:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case wp:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case Cp:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case Dp:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case Up:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case Np:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case Lp:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case Op:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case Pp:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case Bp:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case Eu:case zp:case Ip:return Math.ceil(a/4)*Math.ceil(t/4)*16;case Px:case Fp:return Math.ceil(a/4)*Math.ceil(t/4)*8;case Hp:case Gp:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function NT(a){switch(a){case Ca:case wx:return{byteLength:1,components:1};case Ml:case Cx:case Cl:return{byteLength:2,components:1};case lm:case cm:return{byteLength:2,components:4};case Jr:case om:case Ma:return{byteLength:4,components:1};case Dx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zx(){let a=null,t=!1,n=null,r=null;function o(c,u){n(c,u),r=a.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(r=a.requestAnimationFrame(o),t=!0)},stop:function(){a.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function LT(a){const t=new WeakMap;function n(d,h){const p=d.array,g=d.usage,v=p.byteLength,_=a.createBuffer();a.bindBuffer(h,_),a.bufferData(h,p,g),d.onUploadCallback();let b;if(p instanceof Float32Array)b=a.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?b=a.HALF_FLOAT:b=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=a.SHORT;else if(p instanceof Uint32Array)b=a.UNSIGNED_INT;else if(p instanceof Int32Array)b=a.INT;else if(p instanceof Int8Array)b=a.BYTE;else if(p instanceof Uint8Array)b=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,h,p){const g=h.array,v=h.updateRanges;if(a.bindBuffer(p,d),v.length===0)a.bufferSubData(p,0,g);else{v.sort((b,M)=>b.start-M.start);let _=0;for(let b=1;b<v.length;b++){const M=v[_],T=v[b];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++_,v[_]=T)}v.length=_+1;for(let b=0,M=v.length;b<M;b++){const T=v[b];a.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=t.get(d);h&&(a.deleteBuffer(h.buffer),t.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,n(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,h),p.version=d.version}}return{get:o,remove:c,update:u}}var OT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,BT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,GT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,YT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$T=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,aA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uA="gl_FragColor = linearToOutputTexel( gl_FragColor );",fA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_A=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,SA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,AA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,RA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,NA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,LA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,OA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,PA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,KA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$A=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,i3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,c3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,g3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,v3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,x3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,M3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,R3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,w3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,C3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,N3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const L3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,H3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,G3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,k3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Y3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,aR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:OT,alphahash_pars_fragment:PT,alphamap_fragment:BT,alphamap_pars_fragment:zT,alphatest_fragment:IT,alphatest_pars_fragment:FT,aomap_fragment:HT,aomap_pars_fragment:GT,batching_pars_vertex:VT,batching_vertex:kT,begin_vertex:XT,beginnormal_vertex:jT,bsdfs:WT,iridescence_fragment:qT,bumpmap_pars_fragment:YT,clipping_planes_fragment:ZT,clipping_planes_pars_fragment:KT,clipping_planes_pars_vertex:QT,clipping_planes_vertex:$T,color_fragment:JT,color_pars_fragment:tA,color_pars_vertex:eA,color_vertex:nA,common:iA,cube_uv_reflection_fragment:aA,defaultnormal_vertex:rA,displacementmap_pars_vertex:sA,displacementmap_vertex:oA,emissivemap_fragment:lA,emissivemap_pars_fragment:cA,colorspace_fragment:uA,colorspace_pars_fragment:fA,envmap_fragment:dA,envmap_common_pars_fragment:hA,envmap_pars_fragment:pA,envmap_pars_vertex:mA,envmap_physical_pars_fragment:AA,envmap_vertex:gA,fog_vertex:vA,fog_pars_vertex:_A,fog_fragment:xA,fog_pars_fragment:yA,gradientmap_pars_fragment:bA,lightmap_pars_fragment:SA,lights_lambert_fragment:MA,lights_lambert_pars_fragment:EA,lights_pars_begin:TA,lights_toon_fragment:RA,lights_toon_pars_fragment:wA,lights_phong_fragment:CA,lights_phong_pars_fragment:DA,lights_physical_fragment:UA,lights_physical_pars_fragment:NA,lights_fragment_begin:LA,lights_fragment_maps:OA,lights_fragment_end:PA,logdepthbuf_fragment:BA,logdepthbuf_pars_fragment:zA,logdepthbuf_pars_vertex:IA,logdepthbuf_vertex:FA,map_fragment:HA,map_pars_fragment:GA,map_particle_fragment:VA,map_particle_pars_fragment:kA,metalnessmap_fragment:XA,metalnessmap_pars_fragment:jA,morphinstance_vertex:WA,morphcolor_vertex:qA,morphnormal_vertex:YA,morphtarget_pars_vertex:ZA,morphtarget_vertex:KA,normal_fragment_begin:QA,normal_fragment_maps:$A,normal_pars_fragment:JA,normal_pars_vertex:t3,normal_vertex:e3,normalmap_pars_fragment:n3,clearcoat_normal_fragment_begin:i3,clearcoat_normal_fragment_maps:a3,clearcoat_pars_fragment:r3,iridescence_pars_fragment:s3,opaque_fragment:o3,packing:l3,premultiplied_alpha_fragment:c3,project_vertex:u3,dithering_fragment:f3,dithering_pars_fragment:d3,roughnessmap_fragment:h3,roughnessmap_pars_fragment:p3,shadowmap_pars_fragment:m3,shadowmap_pars_vertex:g3,shadowmap_vertex:v3,shadowmask_pars_fragment:_3,skinbase_vertex:x3,skinning_pars_vertex:y3,skinning_vertex:b3,skinnormal_vertex:S3,specularmap_fragment:M3,specularmap_pars_fragment:E3,tonemapping_fragment:T3,tonemapping_pars_fragment:A3,transmission_fragment:R3,transmission_pars_fragment:w3,uv_pars_fragment:C3,uv_pars_vertex:D3,uv_vertex:U3,worldpos_vertex:N3,background_vert:L3,background_frag:O3,backgroundCube_vert:P3,backgroundCube_frag:B3,cube_vert:z3,cube_frag:I3,depth_vert:F3,depth_frag:H3,distanceRGBA_vert:G3,distanceRGBA_frag:V3,equirect_vert:k3,equirect_frag:X3,linedashed_vert:j3,linedashed_frag:W3,meshbasic_vert:q3,meshbasic_frag:Y3,meshlambert_vert:Z3,meshlambert_frag:K3,meshmatcap_vert:Q3,meshmatcap_frag:$3,meshnormal_vert:J3,meshnormal_frag:tR,meshphong_vert:eR,meshphong_frag:nR,meshphysical_vert:iR,meshphysical_frag:aR,meshtoon_vert:rR,meshtoon_frag:sR,points_vert:oR,points_frag:lR,shadow_vert:cR,shadow_frag:uR,sprite_vert:fR,sprite_frag:dR},Lt={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Vi={basic:{uniforms:Xn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Xn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Be(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Xn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Xn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Xn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Be(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Xn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Xn([Lt.points,Lt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Xn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Xn([Lt.common,Lt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Xn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Xn([Lt.sprite,Lt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Xn([Lt.common,Lt.displacementmap,{referencePosition:{value:new ct},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Xn([Lt.lights,Lt.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Vi.physical={uniforms:Xn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const du={r:0,b:0,g:0},Vr=new Da,hR=new mn;function pR(a,t,n,r,o,c,u){const d=new Be(0);let h=c===!0?0:1,p,g,v=null,_=0,b=null;function M(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?n:t).get(U)),U}function T(N){let U=!1;const G=M(N);G===null?x(d,h):G&&G.isColor&&(x(G,1),U=!0);const P=a.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,u):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(a.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function y(N,U){const G=M(U);G&&(G.isCubeTexture||G.mapping===Vu)?(g===void 0&&(g=new Xi(new Ll(1,1,1),new Ua({name:"BackgroundCubeMaterial",uniforms:oo(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(P,D,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Vr.copy(U.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(hR.makeRotationFromEuler(Vr)),g.material.toneMapped=Le.getTransfer(G.colorSpace)!==Xe,(v!==G||_!==G.version||b!==a.toneMapping)&&(g.material.needsUpdate=!0,v=G,_=G.version,b=a.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new Xi(new Xu(2,2),new Ua({name:"BackgroundMaterial",uniforms:oo(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Le.getTransfer(G.colorSpace)!==Xe,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||_!==G.version||b!==a.toneMapping)&&(p.material.needsUpdate=!0,v=G,_=G.version,b=a.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function x(N,U){N.getRGB(du,Xx(a)),r.buffers.color.setClear(du.r,du.g,du.b,U,u)}function F(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),h=U,x(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,x(d,h)},render:T,addToRenderList:y,dispose:F}}function mR(a,t){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=_(null);let c=o,u=!1;function d(E,L,k,W,et){let ut=!1;const I=v(W,k,L);c!==I&&(c=I,p(c.object)),ut=b(E,W,k,et),ut&&M(E,W,k,et),et!==null&&t.update(et,a.ELEMENT_ARRAY_BUFFER),(ut||u)&&(u=!1,U(E,L,k,W),et!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function h(){return a.createVertexArray()}function p(E){return a.bindVertexArray(E)}function g(E){return a.deleteVertexArray(E)}function v(E,L,k){const W=k.wireframe===!0;let et=r[E.id];et===void 0&&(et={},r[E.id]=et);let ut=et[L.id];ut===void 0&&(ut={},et[L.id]=ut);let I=ut[W];return I===void 0&&(I=_(h()),ut[W]=I),I}function _(E){const L=[],k=[],W=[];for(let et=0;et<n;et++)L[et]=0,k[et]=0,W[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:W,object:E,attributes:{},index:null}}function b(E,L,k,W){const et=c.attributes,ut=L.attributes;let I=0;const q=k.getAttributes();for(const X in q)if(q[X].location>=0){const O=et[X];let tt=ut[X];if(tt===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(tt=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(tt=E.instanceColor)),O===void 0||O.attribute!==tt||tt&&O.data!==tt.data)return!0;I++}return c.attributesNum!==I||c.index!==W}function M(E,L,k,W){const et={},ut=L.attributes;let I=0;const q=k.getAttributes();for(const X in q)if(q[X].location>=0){let O=ut[X];O===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(O=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(O=E.instanceColor));const tt={};tt.attribute=O,O&&O.data&&(tt.data=O.data),et[X]=tt,I++}c.attributes=et,c.attributesNum=I,c.index=W}function T(){const E=c.newAttributes;for(let L=0,k=E.length;L<k;L++)E[L]=0}function y(E){x(E,0)}function x(E,L){const k=c.newAttributes,W=c.enabledAttributes,et=c.attributeDivisors;k[E]=1,W[E]===0&&(a.enableVertexAttribArray(E),W[E]=1),et[E]!==L&&(a.vertexAttribDivisor(E,L),et[E]=L)}function F(){const E=c.newAttributes,L=c.enabledAttributes;for(let k=0,W=L.length;k<W;k++)L[k]!==E[k]&&(a.disableVertexAttribArray(k),L[k]=0)}function N(E,L,k,W,et,ut,I){I===!0?a.vertexAttribIPointer(E,L,k,et,ut):a.vertexAttribPointer(E,L,k,W,et,ut)}function U(E,L,k,W){T();const et=W.attributes,ut=k.getAttributes(),I=L.defaultAttributeValues;for(const q in ut){const X=ut[q];if(X.location>=0){let yt=et[q];if(yt===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(yt=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(yt=E.instanceColor)),yt!==void 0){const O=yt.normalized,tt=yt.itemSize,vt=t.get(yt);if(vt===void 0)continue;const pt=vt.buffer,Y=vt.type,dt=vt.bytesPerElement,_t=Y===a.INT||Y===a.UNSIGNED_INT||yt.gpuType===om;if(yt.isInterleavedBufferAttribute){const Et=yt.data,At=Et.stride,jt=yt.offset;if(Et.isInstancedInterleavedBuffer){for(let kt=0;kt<X.locationSize;kt++)x(X.location+kt,Et.meshPerAttribute);E.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let kt=0;kt<X.locationSize;kt++)y(X.location+kt);a.bindBuffer(a.ARRAY_BUFFER,pt);for(let kt=0;kt<X.locationSize;kt++)N(X.location+kt,tt/X.locationSize,Y,O,At*dt,(jt+tt/X.locationSize*kt)*dt,_t)}else{if(yt.isInstancedBufferAttribute){for(let Et=0;Et<X.locationSize;Et++)x(X.location+Et,yt.meshPerAttribute);E.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Et=0;Et<X.locationSize;Et++)y(X.location+Et);a.bindBuffer(a.ARRAY_BUFFER,pt);for(let Et=0;Et<X.locationSize;Et++)N(X.location+Et,tt/X.locationSize,Y,O,tt*dt,tt/X.locationSize*Et*dt,_t)}}else if(I!==void 0){const O=I[q];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(X.location,O);break;case 3:a.vertexAttrib3fv(X.location,O);break;case 4:a.vertexAttrib4fv(X.location,O);break;default:a.vertexAttrib1fv(X.location,O)}}}}F()}function G(){z();for(const E in r){const L=r[E];for(const k in L){const W=L[k];for(const et in W)g(W[et].object),delete W[et];delete L[k]}delete r[E]}}function P(E){if(r[E.id]===void 0)return;const L=r[E.id];for(const k in L){const W=L[k];for(const et in W)g(W[et].object),delete W[et];delete L[k]}delete r[E.id]}function D(E){for(const L in r){const k=r[L];if(k[E.id]===void 0)continue;const W=k[E.id];for(const et in W)g(W[et].object),delete W[et];delete k[E.id]}}function z(){w(),u=!0,c!==o&&(c=o,p(c.object))}function w(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:z,resetDefaultState:w,dispose:G,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:T,enableAttribute:y,disableUnusedAttributes:F}}function gR(a,t,n){let r;function o(p){r=p}function c(p,g){a.drawArrays(r,p,g),n.update(g,r,1)}function u(p,g,v){v!==0&&(a.drawArraysInstanced(r,p,g,v),n.update(g,r,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let b=0;for(let M=0;M<v;M++)b+=g[M];n.update(b,r,1)}function h(p,g,v,_){if(v===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let M=0;M<p.length;M++)u(p[M],g[M],_[M]);else{b.multiDrawArraysInstancedWEBGL(r,p,0,g,0,_,0,v);let M=0;for(let T=0;T<v;T++)M+=g[T]*_[T];n.update(M,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function vR(a,t,n,r){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");o=a.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(D){return!(D!==Ni&&r.convert(D)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(D){const z=D===Cl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Ca&&r.convert(D)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Ma&&!z)}function h(D){if(D==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),b=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),F=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),N=a.getParameter(a.MAX_VARYING_VECTORS),U=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),G=M>0,P=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:b,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:F,maxVaryings:N,maxFragmentUniforms:U,vertexTextures:G,maxSamples:P}}function _R(a){const t=this;let n=null,r=0,o=!1,c=!1;const u=new jr,d=new he,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const b=v.length!==0||_||r!==0||o;return o=_,r=v.length,b},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,b){const M=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,x=a.get(v);if(!o||M===null||M.length===0||c&&!y)c?g(null):p();else{const F=c?0:r,N=F*4;let U=x.clippingState||null;h.value=U,U=g(M,_,N,b);for(let G=0;G!==N;++G)U[G]=n[G];x.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=F}};function p(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,_,b,M){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=h.value,M!==!0||y===null){const x=b+T*4,F=_.matrixWorldInverse;d.getNormalMatrix(F),(y===null||y.length<x)&&(y=new Float32Array(x));for(let N=0,U=b;N!==T;++N,U+=4)u.copy(v[N]).applyMatrix4(F,d),u.normal.toArray(y,U),y[U+3]=u.constant}h.value=y,h.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function xR(a){let t=new WeakMap;function n(u,d){return d===dp?u.mapping=ao:d===hp&&(u.mapping=ro),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===dp||d===hp)if(t.has(u)){const h=t.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new MT(h.height);return p.fromEquirectangularTexture(a,u),t.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const h=t.get(d);h!==void 0&&(t.delete(d),h.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Js=4,$_=[.125,.215,.35,.446,.526,.582],Yr=20,Bh=new DT,J_=new Be;let zh=null,Ih=0,Fh=0,Hh=!1;const Wr=(1+Math.sqrt(5))/2,Ys=1/Wr,t1=[new ct(-Wr,Ys,0),new ct(Wr,Ys,0),new ct(-Ys,0,Wr),new ct(Ys,0,Wr),new ct(0,Wr,-Ys),new ct(0,Wr,Ys),new ct(-1,1,-1),new ct(1,1,-1),new ct(-1,1,1),new ct(1,1,1)],yR=new ct;class e1{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,r=.1,o=100,c={}){const{size:u=256,position:d=yR}=c;zh=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,r,o,h,d),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zh,Ih,Fh),this._renderer.xr.enabled=Hh,t.scissorTest=!1,hu(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ao||t.mapping===ro?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zh=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ki,minFilter:ki,generateMipmaps:!1,type:Cl,format:Ni,colorSpace:so,depthBuffer:!1},o=n1(t,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n1(t,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bR(c)),this._blurMaterial=SR(c,t,n)}return o}_compileMaterial(t){const n=new Xi(this._lodPlanes[0],t);this._renderer.compile(n,Bh)}_sceneToCubeUV(t,n,r,o,c){const h=new yi(90,1,n,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,b=v.toneMapping;v.getClearColor(J_),v.toneMapping=pr,v.autoClear=!1;const M=new Gx({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),T=new Xi(new Ll,M);let y=!1;const x=t.background;x?x.isColor&&(M.color.copy(x),t.background=null,y=!0):(M.color.copy(J_),y=!0);for(let F=0;F<6;F++){const N=F%3;N===0?(h.up.set(0,p[F],0),h.position.set(c.x,c.y,c.z),h.lookAt(c.x+g[F],c.y,c.z)):N===1?(h.up.set(0,0,p[F]),h.position.set(c.x,c.y,c.z),h.lookAt(c.x,c.y+g[F],c.z)):(h.up.set(0,p[F],0),h.position.set(c.x,c.y,c.z),h.lookAt(c.x,c.y,c.z+g[F]));const U=this._cubeSize;hu(o,N*U,F>2?U:0,U,U),v.setRenderTarget(o),y&&v.render(T,h),v.render(t,h)}T.geometry.dispose(),T.material.dispose(),v.toneMapping=b,v.autoClear=_,t.background=x}_textureToCubeUV(t,n){const r=this._renderer,o=t.mapping===ao||t.mapping===ro;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=a1()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i1());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new Xi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const h=this._cubeSize;hu(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,Bh)}_applyPMREM(t){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=t1[(o-c-1)%t1.length];this._blur(t,c-1,c,u,d)}n.autoClear=r}_blur(t,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,r,o,"latitudinal",c),this._halfBlur(u,t,r,r,o,"longitudinal",c)}_halfBlur(t,n,r,o,c,u,d){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Xi(this._lodPlanes[o],p),_=p.uniforms,b=this._sizeLods[r]-1,M=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Yr-1),T=c/M,y=isFinite(c)?1+Math.floor(g*T):Yr;y>Yr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Yr}`);const x=[];let F=0;for(let D=0;D<Yr;++D){const z=D/T,w=Math.exp(-z*z/2);x.push(w),D===0?F+=w:D<y&&(F+=2*w)}for(let D=0;D<x.length;D++)x[D]=x[D]/F;_.envMap.value=t.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:N}=this;_.dTheta.value=M,_.mipInt.value=N-r;const U=this._sizeLods[o],G=3*U*(o>N-Js?o-N+Js:0),P=4*(this._cubeSize-U);hu(n,G,P,3*U,2*U),h.setRenderTarget(n),h.render(v,Bh)}}function bR(a){const t=[],n=[],r=[];let o=a;const c=a-Js+1+$_.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);n.push(d);let h=1/d;u>a-Js?h=$_[u-a+Js-1]:u===0&&(h=0),r.push(h);const p=1/(d-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],b=6,M=6,T=3,y=2,x=1,F=new Float32Array(T*M*b),N=new Float32Array(y*M*b),U=new Float32Array(x*M*b);for(let P=0;P<b;P++){const D=P%3*2/3-1,z=P>2?0:-1,w=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];F.set(w,T*M*P),N.set(_,y*M*P);const E=[P,P,P,P,P,P];U.set(E,x*M*P)}const G=new gr;G.setAttribute("position",new Fn(F,T)),G.setAttribute("uv",new Fn(N,y)),G.setAttribute("faceIndex",new Fn(U,x)),t.push(G),o>Js&&o--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function n1(a,t,n){const r=new ts(a,t,n);return r.texture.mapping=Vu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function hu(a,t,n,r,o){a.viewport.set(t,n,r,o),a.scissor.set(t,n,r,o)}function SR(a,t,n){const r=new Float32Array(Yr),o=new ct(0,1,0);return new Ua({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function i1(){return new Ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function a1(){return new Ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function mm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function MR(a){let t=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const h=d.mapping,p=h===dp||h===hp,g=h===ao||h===ro;if(p||g){let v=t.get(d);const _=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new e1(a)),v=p?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const b=d.image;return p&&b&&b.height>0||g&&b&&o(b)?(n===null&&(n=new e1(a)),v=p?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function o(d){let h=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&h++;return h===p}function c(d){const h=d.target;h.removeEventListener("dispose",c);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function ER(a){const t={};function n(r){if(t[r]!==void 0)return t[r];let o;switch(r){case"WEBGL_depth_texture":o=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=a.getExtension(r)}return t[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Tu("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function TR(a,t,n,r){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const M in _.attributes)t.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete o[_.id];const b=c.get(_);b&&(t.remove(b),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function d(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function h(v){const _=v.attributes;for(const b in _)t.update(_[b],a.ARRAY_BUFFER)}function p(v){const _=[],b=v.index,M=v.attributes.position;let T=0;if(b!==null){const F=b.array;T=b.version;for(let N=0,U=F.length;N<U;N+=3){const G=F[N+0],P=F[N+1],D=F[N+2];_.push(G,P,P,D,D,G)}}else if(M!==void 0){const F=M.array;T=M.version;for(let N=0,U=F.length/3-1;N<U;N+=3){const G=N+0,P=N+1,D=N+2;_.push(G,P,P,D,D,G)}}else return;const y=new(zx(_)?kx:Vx)(_,1);y.version=T;const x=c.get(v);x&&t.remove(x),c.set(v,y)}function g(v){const _=c.get(v);if(_){const b=v.index;b!==null&&_.version<b.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:h,getWireframeAttribute:g}}function AR(a,t,n){let r;function o(_){r=_}let c,u;function d(_){c=_.type,u=_.bytesPerElement}function h(_,b){a.drawElements(r,b,c,_*u),n.update(b,r,1)}function p(_,b,M){M!==0&&(a.drawElementsInstanced(r,b,c,_*u,M),n.update(b,r,M))}function g(_,b,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,c,_,0,M);let y=0;for(let x=0;x<M;x++)y+=b[x];n.update(y,r,1)}function v(_,b,M,T){if(M===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<_.length;x++)p(_[x]/u,b[x],T[x]);else{y.multiDrawElementsInstancedWEBGL(r,b,0,c,_,0,T,0,M);let x=0;for(let F=0;F<M;F++)x+=b[F]*T[F];n.update(x,r,1)}}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function RR(a){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(n.calls++,u){case a.TRIANGLES:n.triangles+=d*(c/3);break;case a.LINES:n.lines+=d*(c/2);break;case a.LINE_STRIP:n.lines+=d*(c-1);break;case a.LINE_LOOP:n.lines+=d*c;break;case a.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:r}}function wR(a,t,n){const r=new WeakMap,o=new on;function c(u,d,h){const p=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(d);if(_===void 0||_.count!==v){let E=function(){z.dispose(),r.delete(d),d.removeEventListener("dispose",E)};var b=E;_!==void 0&&_.texture.dispose();const M=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let U=0;M===!0&&(U=1),T===!0&&(U=2),y===!0&&(U=3);let G=d.attributes.position.count*U,P=1;G>t.maxTextureSize&&(P=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const D=new Float32Array(G*P*4*v),z=new Ix(D,G,P,v);z.type=Ma,z.needsUpdate=!0;const w=U*4;for(let L=0;L<v;L++){const k=x[L],W=F[L],et=N[L],ut=G*P*4*L;for(let I=0;I<k.count;I++){const q=I*w;M===!0&&(o.fromBufferAttribute(k,I),D[ut+q+0]=o.x,D[ut+q+1]=o.y,D[ut+q+2]=o.z,D[ut+q+3]=0),T===!0&&(o.fromBufferAttribute(W,I),D[ut+q+4]=o.x,D[ut+q+5]=o.y,D[ut+q+6]=o.z,D[ut+q+7]=0),y===!0&&(o.fromBufferAttribute(et,I),D[ut+q+8]=o.x,D[ut+q+9]=o.y,D[ut+q+10]=o.z,D[ut+q+11]=et.itemSize===4?o.w:1)}}_={count:v,texture:z,size:new qe(G,P)},r.set(d,_),d.addEventListener("dispose",E)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(a,"morphTexture",u.morphTexture,n);else{let M=0;for(let y=0;y<p.length;y++)M+=p[y];const T=d.morphTargetsRelative?1:1-M;h.getUniforms().setValue(a,"morphTargetBaseInfluence",T),h.getUniforms().setValue(a,"morphTargetInfluences",p)}h.getUniforms().setValue(a,"morphTargetsTexture",_.texture,n),h.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:c}}function CR(a,t,n,r){let o=new WeakMap;function c(h){const p=r.render.frame,g=h.geometry,v=t.get(h,g);if(o.get(v)!==p&&(t.update(v),o.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==p&&(n.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,a.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return v}function u(){o=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const Kx=new $n,r1=new Yx(1,1),Qx=new Ix,$x=new rT,Jx=new Wx,s1=[],o1=[],l1=new Float32Array(16),c1=new Float32Array(9),u1=new Float32Array(4);function po(a,t,n){const r=a[0];if(r<=0||r>0)return a;const o=t*n;let c=s1[o];if(c===void 0&&(c=new Float32Array(o),s1[o]=c),t!==0){r.toArray(c,0);for(let u=1,d=0;u!==t;++u)d+=n,a[u].toArray(c,d)}return c}function yn(a,t){if(a.length!==t.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==t[n])return!1;return!0}function bn(a,t){for(let n=0,r=t.length;n<r;n++)a[n]=t[n]}function ju(a,t){let n=o1[t];n===void 0&&(n=new Int32Array(t),o1[t]=n);for(let r=0;r!==t;++r)n[r]=a.allocateTextureUnit();return n}function DR(a,t){const n=this.cache;n[0]!==t&&(a.uniform1f(this.addr,t),n[0]=t)}function UR(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;a.uniform2fv(this.addr,t),bn(n,t)}}function NR(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(yn(n,t))return;a.uniform3fv(this.addr,t),bn(n,t)}}function LR(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;a.uniform4fv(this.addr,t),bn(n,t)}}function OR(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(yn(n,t))return;a.uniformMatrix2fv(this.addr,!1,t),bn(n,t)}else{if(yn(n,r))return;u1.set(r),a.uniformMatrix2fv(this.addr,!1,u1),bn(n,r)}}function PR(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(yn(n,t))return;a.uniformMatrix3fv(this.addr,!1,t),bn(n,t)}else{if(yn(n,r))return;c1.set(r),a.uniformMatrix3fv(this.addr,!1,c1),bn(n,r)}}function BR(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(yn(n,t))return;a.uniformMatrix4fv(this.addr,!1,t),bn(n,t)}else{if(yn(n,r))return;l1.set(r),a.uniformMatrix4fv(this.addr,!1,l1),bn(n,r)}}function zR(a,t){const n=this.cache;n[0]!==t&&(a.uniform1i(this.addr,t),n[0]=t)}function IR(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;a.uniform2iv(this.addr,t),bn(n,t)}}function FR(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yn(n,t))return;a.uniform3iv(this.addr,t),bn(n,t)}}function HR(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;a.uniform4iv(this.addr,t),bn(n,t)}}function GR(a,t){const n=this.cache;n[0]!==t&&(a.uniform1ui(this.addr,t),n[0]=t)}function VR(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;a.uniform2uiv(this.addr,t),bn(n,t)}}function kR(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yn(n,t))return;a.uniform3uiv(this.addr,t),bn(n,t)}}function XR(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;a.uniform4uiv(this.addr,t),bn(n,t)}}function jR(a,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(r1.compareFunction=Bx,c=r1):c=Kx,n.setTexture2D(t||c,o)}function WR(a,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(t||$x,o)}function qR(a,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(t||Jx,o)}function YR(a,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(t||Qx,o)}function ZR(a){switch(a){case 5126:return DR;case 35664:return UR;case 35665:return NR;case 35666:return LR;case 35674:return OR;case 35675:return PR;case 35676:return BR;case 5124:case 35670:return zR;case 35667:case 35671:return IR;case 35668:case 35672:return FR;case 35669:case 35673:return HR;case 5125:return GR;case 36294:return VR;case 36295:return kR;case 36296:return XR;case 35678:case 36198:case 36298:case 36306:case 35682:return jR;case 35679:case 36299:case 36307:return WR;case 35680:case 36300:case 36308:case 36293:return qR;case 36289:case 36303:case 36311:case 36292:return YR}}function KR(a,t){a.uniform1fv(this.addr,t)}function QR(a,t){const n=po(t,this.size,2);a.uniform2fv(this.addr,n)}function $R(a,t){const n=po(t,this.size,3);a.uniform3fv(this.addr,n)}function JR(a,t){const n=po(t,this.size,4);a.uniform4fv(this.addr,n)}function tw(a,t){const n=po(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function ew(a,t){const n=po(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function nw(a,t){const n=po(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function iw(a,t){a.uniform1iv(this.addr,t)}function aw(a,t){a.uniform2iv(this.addr,t)}function rw(a,t){a.uniform3iv(this.addr,t)}function sw(a,t){a.uniform4iv(this.addr,t)}function ow(a,t){a.uniform1uiv(this.addr,t)}function lw(a,t){a.uniform2uiv(this.addr,t)}function cw(a,t){a.uniform3uiv(this.addr,t)}function uw(a,t){a.uniform4uiv(this.addr,t)}function fw(a,t,n){const r=this.cache,o=t.length,c=ju(n,o);yn(r,c)||(a.uniform1iv(this.addr,c),bn(r,c));for(let u=0;u!==o;++u)n.setTexture2D(t[u]||Kx,c[u])}function dw(a,t,n){const r=this.cache,o=t.length,c=ju(n,o);yn(r,c)||(a.uniform1iv(this.addr,c),bn(r,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||$x,c[u])}function hw(a,t,n){const r=this.cache,o=t.length,c=ju(n,o);yn(r,c)||(a.uniform1iv(this.addr,c),bn(r,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||Jx,c[u])}function pw(a,t,n){const r=this.cache,o=t.length,c=ju(n,o);yn(r,c)||(a.uniform1iv(this.addr,c),bn(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||Qx,c[u])}function mw(a){switch(a){case 5126:return KR;case 35664:return QR;case 35665:return $R;case 35666:return JR;case 35674:return tw;case 35675:return ew;case 35676:return nw;case 5124:case 35670:return iw;case 35667:case 35671:return aw;case 35668:case 35672:return rw;case 35669:case 35673:return sw;case 5125:return ow;case 36294:return lw;case 36295:return cw;case 36296:return uw;case 35678:case 36198:case 36298:case 36306:case 35682:return fw;case 35679:case 36299:case 36307:return dw;case 35680:case 36300:case 36308:case 36293:return hw;case 36289:case 36303:case 36311:case 36292:return pw}}class gw{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.setValue=ZR(n.type)}}class vw{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mw(n.type)}}class _w{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(t,n[d.id],r)}}}const Gh=/(\w+)(\])?(\[|\.)?/g;function f1(a,t){a.seq.push(t),a.map[t.id]=t}function xw(a,t,n){const r=a.name,o=r.length;for(Gh.lastIndex=0;;){const c=Gh.exec(r),u=Gh.lastIndex;let d=c[1];const h=c[2]==="]",p=c[3];if(h&&(d=d|0),p===void 0||p==="["&&u+2===o){f1(n,p===void 0?new gw(d,a,t):new vw(d,a,t));break}else{let v=n.map[d];v===void 0&&(v=new _w(d),f1(n,v)),n=v}}}class Au{constructor(t,n){this.seq=[],this.map={};const r=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=t.getActiveUniform(n,o),u=t.getUniformLocation(n,c.name);xw(c,u,this)}}setValue(t,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(t,r,o)}setOptional(t,n,r){const o=n[r];o!==void 0&&this.setValue(t,r,o)}static upload(t,n,r,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],h=r[d.id];h.needsUpdate!==!1&&d.setValue(t,h.value,o)}}static seqWithValue(t,n){const r=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&r.push(u)}return r}}function d1(a,t,n){const r=a.createShader(t);return a.shaderSource(r,n),a.compileShader(r),r}const yw=37297;let bw=0;function Sw(a,t){const n=a.split(`
`),r=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===t?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const h1=new he;function Mw(a){Le._getMatrix(h1,Le.workingColorSpace,a);const t=`mat3( ${h1.elements.map(n=>n.toFixed(4))} )`;switch(Le.getTransfer(a)){case Uu:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function p1(a,t,n){const r=a.getShaderParameter(t,a.COMPILE_STATUS),o=a.getShaderInfoLog(t).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+Sw(a.getShaderSource(t),u)}else return o}function Ew(a,t){const n=Mw(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Tw(a,t){let n;switch(t){case w2:n="Linear";break;case C2:n="Reinhard";break;case D2:n="Cineon";break;case U2:n="ACESFilmic";break;case L2:n="AgX";break;case O2:n="Neutral";break;case N2:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pu=new ct;function Aw(){Le.getLuminanceCoefficients(pu);const a=pu.x.toFixed(4),t=pu.y.toFixed(4),n=pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rw(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bl).join(`
`)}function ww(a){const t=[];for(const n in a){const r=a[n];r!==!1&&t.push("#define "+n+" "+r)}return t.join(`
`)}function Cw(a,t){const n={},r=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(t,o),u=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:a.getAttribLocation(t,u),locationSize:d}}return n}function bl(a){return a!==""}function m1(a,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function g1(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Dw=/^[ \t]*#include +<([\w\d./]+)>/gm;function kp(a){return a.replace(Dw,Nw)}const Uw=new Map;function Nw(a,t){let n=me[t];if(n===void 0){const r=Uw.get(t);if(r!==void 0)n=me[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return kp(n)}const Lw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v1(a){return a.replace(Lw,Ow)}function Ow(a,t,n,r){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function _1(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Pw(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Tx?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===o2?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===_a&&(t="SHADOWMAP_TYPE_VSM"),t}function Bw(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case ao:case ro:t="ENVMAP_TYPE_CUBE";break;case Vu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zw(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case ro:t="ENVMAP_MODE_REFRACTION";break}return t}function Iw(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Ax:t="ENVMAP_BLENDING_MULTIPLY";break;case A2:t="ENVMAP_BLENDING_MIX";break;case R2:t="ENVMAP_BLENDING_ADD";break}return t}function Fw(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function Hw(a,t,n,r){const o=a.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const h=Pw(n),p=Bw(n),g=zw(n),v=Iw(n),_=Fw(n),b=Rw(n),M=ww(c),T=o.createProgram();let y,x,F=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(bl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(bl).join(`
`),x.length>0&&(x+=`
`)):(y=[_1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bl).join(`
`),x=[_1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pr?"#define TONE_MAPPING":"",n.toneMapping!==pr?me.tonemapping_pars_fragment:"",n.toneMapping!==pr?Tw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,Ew("linearToOutputTexel",n.outputColorSpace),Aw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(bl).join(`
`)),u=kp(u),u=m1(u,n),u=g1(u,n),d=kp(d),d=m1(d,n),d=g1(d,n),u=v1(u),d=v1(d),n.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===L_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===L_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=F+y+u,U=F+x+d,G=d1(o,o.VERTEX_SHADER,N),P=d1(o,o.FRAGMENT_SHADER,U);o.attachShader(T,G),o.attachShader(T,P),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function D(L){if(a.debug.checkShaderErrors){const k=o.getProgramInfoLog(T).trim(),W=o.getShaderInfoLog(G).trim(),et=o.getShaderInfoLog(P).trim();let ut=!0,I=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(ut=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,T,G,P);else{const q=p1(o,G,"vertex"),X=p1(o,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+q+`
`+X)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(W===""||et==="")&&(I=!1);I&&(L.diagnostics={runnable:ut,programLog:k,vertexShader:{log:W,prefix:y},fragmentShader:{log:et,prefix:x}})}o.deleteShader(G),o.deleteShader(P),z=new Au(o,T),w=Cw(o,T)}let z;this.getUniforms=function(){return z===void 0&&D(this),z};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=o.getProgramParameter(T,yw)),E},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bw++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=G,this.fragmentShader=P,this}let Gw=0;class Vw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,r=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let r=n.get(t);return r===void 0&&(r=new Set,n.set(t,r)),r}_getShaderStage(t){const n=this.shaderCache;let r=n.get(t);return r===void 0&&(r=new kw(t),n.set(t,r)),r}}class kw{constructor(t){this.id=Gw++,this.code=t,this.usedTimes=0}}function Xw(a,t,n,r,o,c,u){const d=new Fx,h=new Vw,p=new Set,g=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let b=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,E,L,k,W){const et=k.fog,ut=W.geometry,I=w.isMeshStandardMaterial?k.environment:null,q=(w.isMeshStandardMaterial?n:t).get(w.envMap||I),X=q&&q.mapping===Vu?q.image.height:null,yt=M[w.type];w.precision!==null&&(b=o.getMaxPrecision(w.precision),b!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",b,"instead."));const O=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,tt=O!==void 0?O.length:0;let vt=0;ut.morphAttributes.position!==void 0&&(vt=1),ut.morphAttributes.normal!==void 0&&(vt=2),ut.morphAttributes.color!==void 0&&(vt=3);let pt,Y,dt,_t;if(yt){const De=Vi[yt];pt=De.vertexShader,Y=De.fragmentShader}else pt=w.vertexShader,Y=w.fragmentShader,h.update(w),dt=h.getVertexShaderID(w),_t=h.getFragmentShaderID(w);const Et=a.getRenderTarget(),At=a.state.buffers.depth.getReversed(),jt=W.isInstancedMesh===!0,kt=W.isBatchedMesh===!0,ye=!!w.map,pe=!!w.matcap,Ht=!!q,H=!!w.aoMap,te=!!w.lightMap,oe=!!w.bumpMap,$t=!!w.normalMap,Zt=!!w.displacementMap,Fe=!!w.emissiveMap,Wt=!!w.metalnessMap,B=!!w.roughnessMap,R=w.anisotropy>0,at=w.clearcoat>0,bt=w.dispersion>0,Tt=w.iridescence>0,gt=w.sheen>0,Bt=w.transmission>0,Dt=R&&!!w.anisotropyMap,Xt=at&&!!w.clearcoatMap,ae=at&&!!w.clearcoatNormalMap,Ct=at&&!!w.clearcoatRoughnessMap,Gt=Tt&&!!w.iridescenceMap,Jt=Tt&&!!w.iridescenceThicknessMap,ne=gt&&!!w.sheenColorMap,zt=gt&&!!w.sheenRoughnessMap,ge=!!w.specularMap,le=!!w.specularColorMap,He=!!w.specularIntensityMap,K=Bt&&!!w.transmissionMap,Ot=Bt&&!!w.thicknessMap,ht=!!w.gradientMap,St=!!w.alphaMap,It=w.alphaTest>0,Pt=!!w.alphaHash,ce=!!w.extensions;let Ze=pr;w.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Ze=a.toneMapping);const ln={shaderID:yt,shaderType:w.type,shaderName:w.name,vertexShader:pt,fragmentShader:Y,defines:w.defines,customVertexShaderID:dt,customFragmentShaderID:_t,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:b,batching:kt,batchingColor:kt&&W._colorsTexture!==null,instancing:jt,instancingColor:jt&&W.instanceColor!==null,instancingMorph:jt&&W.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Et===null?a.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:so,alphaToCoverage:!!w.alphaToCoverage,map:ye,matcap:pe,envMap:Ht,envMapMode:Ht&&q.mapping,envMapCubeUVHeight:X,aoMap:H,lightMap:te,bumpMap:oe,normalMap:$t,displacementMap:_&&Zt,emissiveMap:Fe,normalMapObjectSpace:$t&&w.normalMapType===F2,normalMapTangentSpace:$t&&w.normalMapType===I2,metalnessMap:Wt,roughnessMap:B,anisotropy:R,anisotropyMap:Dt,clearcoat:at,clearcoatMap:Xt,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ct,dispersion:bt,iridescence:Tt,iridescenceMap:Gt,iridescenceThicknessMap:Jt,sheen:gt,sheenColorMap:ne,sheenRoughnessMap:zt,specularMap:ge,specularColorMap:le,specularIntensityMap:He,transmission:Bt,transmissionMap:K,thicknessMap:Ot,gradientMap:ht,opaque:w.transparent===!1&&w.blending===to&&w.alphaToCoverage===!1,alphaMap:St,alphaTest:It,alphaHash:Pt,combine:w.combine,mapUv:ye&&T(w.map.channel),aoMapUv:H&&T(w.aoMap.channel),lightMapUv:te&&T(w.lightMap.channel),bumpMapUv:oe&&T(w.bumpMap.channel),normalMapUv:$t&&T(w.normalMap.channel),displacementMapUv:Zt&&T(w.displacementMap.channel),emissiveMapUv:Fe&&T(w.emissiveMap.channel),metalnessMapUv:Wt&&T(w.metalnessMap.channel),roughnessMapUv:B&&T(w.roughnessMap.channel),anisotropyMapUv:Dt&&T(w.anisotropyMap.channel),clearcoatMapUv:Xt&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:ae&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:zt&&T(w.sheenRoughnessMap.channel),specularMapUv:ge&&T(w.specularMap.channel),specularColorMapUv:le&&T(w.specularColorMap.channel),specularIntensityMapUv:He&&T(w.specularIntensityMap.channel),transmissionMapUv:K&&T(w.transmissionMap.channel),thicknessMapUv:Ot&&T(w.thicknessMap.channel),alphaMapUv:St&&T(w.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&($t||R),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ut.attributes.uv&&(ye||St),fog:!!et,useFog:w.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:At,skinning:W.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:vt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&L.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ze,decodeVideoTexture:ye&&w.map.isVideoTexture===!0&&Le.getTransfer(w.map.colorSpace)===Xe,decodeVideoTextureEmissive:Fe&&w.emissiveMap.isVideoTexture===!0&&Le.getTransfer(w.emissiveMap.colorSpace)===Xe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Sa,flipSided:w.side===Qn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ce&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&w.extensions.multiDraw===!0||kt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ln.vertexUv1s=p.has(1),ln.vertexUv2s=p.has(2),ln.vertexUv3s=p.has(3),p.clear(),ln}function x(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)E.push(L),E.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(F(E,w),N(E,w),E.push(a.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function F(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function N(w,E){d.disableAll(),E.supportsVertexTextures&&d.enable(0),E.instancing&&d.enable(1),E.instancingColor&&d.enable(2),E.instancingMorph&&d.enable(3),E.matcap&&d.enable(4),E.envMap&&d.enable(5),E.normalMapObjectSpace&&d.enable(6),E.normalMapTangentSpace&&d.enable(7),E.clearcoat&&d.enable(8),E.iridescence&&d.enable(9),E.alphaTest&&d.enable(10),E.vertexColors&&d.enable(11),E.vertexAlphas&&d.enable(12),E.vertexUv1s&&d.enable(13),E.vertexUv2s&&d.enable(14),E.vertexUv3s&&d.enable(15),E.vertexTangents&&d.enable(16),E.anisotropy&&d.enable(17),E.alphaHash&&d.enable(18),E.batching&&d.enable(19),E.dispersion&&d.enable(20),E.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),E.fog&&d.enable(0),E.useFog&&d.enable(1),E.flatShading&&d.enable(2),E.logarithmicDepthBuffer&&d.enable(3),E.reverseDepthBuffer&&d.enable(4),E.skinning&&d.enable(5),E.morphTargets&&d.enable(6),E.morphNormals&&d.enable(7),E.morphColors&&d.enable(8),E.premultipliedAlpha&&d.enable(9),E.shadowMapEnabled&&d.enable(10),E.doubleSided&&d.enable(11),E.flipSided&&d.enable(12),E.useDepthPacking&&d.enable(13),E.dithering&&d.enable(14),E.transmission&&d.enable(15),E.sheen&&d.enable(16),E.opaque&&d.enable(17),E.pointsUvs&&d.enable(18),E.decodeVideoTexture&&d.enable(19),E.decodeVideoTextureEmissive&&d.enable(20),E.alphaToCoverage&&d.enable(21),w.push(d.mask)}function U(w){const E=M[w.type];let L;if(E){const k=Vi[E];L=xT.clone(k.uniforms)}else L=w.uniforms;return L}function G(w,E){let L;for(let k=0,W=g.length;k<W;k++){const et=g[k];if(et.cacheKey===E){L=et,++L.usedTimes;break}}return L===void 0&&(L=new Hw(a,E,w,c),g.push(L)),L}function P(w){if(--w.usedTimes===0){const E=g.indexOf(w);g[E]=g[g.length-1],g.pop(),w.destroy()}}function D(w){h.remove(w)}function z(){h.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:U,acquireProgram:G,releaseProgram:P,releaseShaderCache:D,programs:g,dispose:z}}function jw(){let a=new WeakMap;function t(u){return a.has(u)}function n(u){let d=a.get(u);return d===void 0&&(d={},a.set(u,d)),d}function r(u){a.delete(u)}function o(u,d,h){a.get(u)[d]=h}function c(){a=new WeakMap}return{has:t,get:n,remove:r,update:o,dispose:c}}function Ww(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function x1(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function y1(){const a=[];let t=0;const n=[],r=[],o=[];function c(){t=0,n.length=0,r.length=0,o.length=0}function u(v,_,b,M,T,y){let x=a[t];return x===void 0?(x={id:v.id,object:v,geometry:_,material:b,groupOrder:M,renderOrder:v.renderOrder,z:T,group:y},a[t]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=b,x.groupOrder=M,x.renderOrder=v.renderOrder,x.z=T,x.group=y),t++,x}function d(v,_,b,M,T,y){const x=u(v,_,b,M,T,y);b.transmission>0?r.push(x):b.transparent===!0?o.push(x):n.push(x)}function h(v,_,b,M,T,y){const x=u(v,_,b,M,T,y);b.transmission>0?r.unshift(x):b.transparent===!0?o.unshift(x):n.unshift(x)}function p(v,_){n.length>1&&n.sort(v||Ww),r.length>1&&r.sort(_||x1),o.length>1&&o.sort(_||x1)}function g(){for(let v=t,_=a.length;v<_;v++){const b=a[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:d,unshift:h,finish:g,sort:p}}function qw(){let a=new WeakMap;function t(r,o){const c=a.get(r);let u;return c===void 0?(u=new y1,a.set(r,[u])):o>=c.length?(u=new y1,c.push(u)):u=c[o],u}function n(){a=new WeakMap}return{get:t,dispose:n}}function Yw(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new ct,color:new Be};break;case"SpotLight":n={position:new ct,direction:new ct,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ct,color:new Be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ct,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":n={color:new Be,position:new ct,halfWidth:new ct,halfHeight:new ct};break}return a[t.id]=n,n}}}function Zw(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=n,n}}}let Kw=0;function Qw(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function $w(a){const t=new Yw,n=Zw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ct);const o=new ct,c=new mn,u=new mn;function d(p){let g=0,v=0,_=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let b=0,M=0,T=0,y=0,x=0,F=0,N=0,U=0,G=0,P=0,D=0;p.sort(Qw);for(let w=0,E=p.length;w<E;w++){const L=p[w],k=L.color,W=L.intensity,et=L.distance,ut=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)g+=k.r*W,v+=k.g*W,_+=k.b*W;else if(L.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(L.sh.coefficients[I],W);D++}else if(L.isDirectionalLight){const I=t.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const q=L.shadow,X=n.get(L);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,r.directionalShadow[b]=X,r.directionalShadowMap[b]=ut,r.directionalShadowMatrix[b]=L.shadow.matrix,F++}r.directional[b]=I,b++}else if(L.isSpotLight){const I=t.get(L);I.position.setFromMatrixPosition(L.matrixWorld),I.color.copy(k).multiplyScalar(W),I.distance=et,I.coneCos=Math.cos(L.angle),I.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),I.decay=L.decay,r.spot[T]=I;const q=L.shadow;if(L.map&&(r.spotLightMap[G]=L.map,G++,q.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[T]=q.matrix,L.castShadow){const X=n.get(L);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,r.spotShadow[T]=X,r.spotShadowMap[T]=ut,U++}T++}else if(L.isRectAreaLight){const I=t.get(L);I.color.copy(k).multiplyScalar(W),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),r.rectArea[y]=I,y++}else if(L.isPointLight){const I=t.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity),I.distance=L.distance,I.decay=L.decay,L.castShadow){const q=L.shadow,X=n.get(L);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,r.pointShadow[M]=X,r.pointShadowMap[M]=ut,r.pointShadowMatrix[M]=L.shadow.matrix,N++}r.point[M]=I,M++}else if(L.isHemisphereLight){const I=t.get(L);I.skyColor.copy(L.color).multiplyScalar(W),I.groundColor.copy(L.groundColor).multiplyScalar(W),r.hemi[x]=I,x++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const z=r.hash;(z.directionalLength!==b||z.pointLength!==M||z.spotLength!==T||z.rectAreaLength!==y||z.hemiLength!==x||z.numDirectionalShadows!==F||z.numPointShadows!==N||z.numSpotShadows!==U||z.numSpotMaps!==G||z.numLightProbes!==D)&&(r.directional.length=b,r.spot.length=T,r.rectArea.length=y,r.point.length=M,r.hemi.length=x,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=U+G-P,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=D,z.directionalLength=b,z.pointLength=M,z.spotLength=T,z.rectAreaLength=y,z.hemiLength=x,z.numDirectionalShadows=F,z.numPointShadows=N,z.numSpotShadows=U,z.numSpotMaps=G,z.numLightProbes=D,r.version=Kw++)}function h(p,g){let v=0,_=0,b=0,M=0,T=0;const y=g.matrixWorldInverse;for(let x=0,F=p.length;x<F;x++){const N=p[x];if(N.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(y),v++}else if(N.isSpotLight){const U=r.spot[b];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(y),b++}else if(N.isRectAreaLight){const U=r.rectArea[M];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),u.identity(),c.copy(N.matrixWorld),c.premultiply(y),u.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),M++}else if(N.isPointLight){const U=r.point[_];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),_++}else if(N.isHemisphereLight){const U=r.hemi[T];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(y),T++}}}return{setup:d,setupView:h,state:r}}function b1(a){const t=new $w(a),n=[],r=[];function o(g){p.camera=g,n.length=0,r.length=0}function c(g){n.push(g)}function u(g){r.push(g)}function d(){t.setup(n)}function h(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:h,pushLight:c,pushShadow:u}}function Jw(a){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let d;return u===void 0?(d=new b1(a),t.set(o,[d])):c>=u.length?(d=new b1(a),u.push(d)):d=u[c],d}function r(){t=new WeakMap}return{get:n,dispose:r}}const tC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nC(a,t,n){let r=new qx;const o=new qe,c=new qe,u=new on,d=new wT({depthPacking:z2}),h=new CT,p={},g=n.maxTextureSize,v={[mr]:Qn,[Qn]:mr,[Sa]:Sa},_=new Ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:tC,fragmentShader:eC}),b=_.clone();b.defines.HORIZONTAL_PASS=1;const M=new gr;M.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Xi(M,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tx;let x=this.type;this.render=function(P,D,z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;const w=a.getRenderTarget(),E=a.getActiveCubeFace(),L=a.getActiveMipmapLevel(),k=a.state;k.setBlending(hr),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const W=x!==_a&&this.type===_a,et=x===_a&&this.type!==_a;for(let ut=0,I=P.length;ut<I;ut++){const q=P[ut],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const yt=X.getFrameExtents();if(o.multiply(yt),c.copy(X.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/yt.x),o.x=c.x*yt.x,X.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/yt.y),o.y=c.y*yt.y,X.mapSize.y=c.y)),X.map===null||W===!0||et===!0){const tt=this.type!==_a?{minFilter:Li,magFilter:Li}:{};X.map!==null&&X.map.dispose(),X.map=new ts(o.x,o.y,tt),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}a.setRenderTarget(X.map),a.clear();const O=X.getViewportCount();for(let tt=0;tt<O;tt++){const vt=X.getViewport(tt);u.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),k.viewport(u),X.updateMatrices(q,tt),r=X.getFrustum(),U(D,z,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===_a&&F(X,z),X.needsUpdate=!1}x=this.type,y.needsUpdate=!1,a.setRenderTarget(w,E,L)};function F(P,D){const z=t.update(T);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,b.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,b.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ts(o.x,o.y)),_.uniforms.shadow_pass.value=P.map.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,a.setRenderTarget(P.mapPass),a.clear(),a.renderBufferDirect(D,null,z,_,T,null),b.uniforms.shadow_pass.value=P.mapPass.texture,b.uniforms.resolution.value=P.mapSize,b.uniforms.radius.value=P.radius,a.setRenderTarget(P.map),a.clear(),a.renderBufferDirect(D,null,z,b,T,null)}function N(P,D,z,w){let E=null;const L=z.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)E=L;else if(E=z.isPointLight===!0?h:d,a.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const k=E.uuid,W=D.uuid;let et=p[k];et===void 0&&(et={},p[k]=et);let ut=et[W];ut===void 0&&(ut=E.clone(),et[W]=ut,D.addEventListener("dispose",G)),E=ut}if(E.visible=D.visible,E.wireframe=D.wireframe,w===_a?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:v[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,z.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=a.properties.get(E);k.light=z}return E}function U(P,D,z,w,E){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&E===_a)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,P.matrixWorld);const W=t.update(P),et=P.material;if(Array.isArray(et)){const ut=W.groups;for(let I=0,q=ut.length;I<q;I++){const X=ut[I],yt=et[X.materialIndex];if(yt&&yt.visible){const O=N(P,yt,w,E);P.onBeforeShadow(a,P,D,z,W,O,X),a.renderBufferDirect(z,null,W,O,P,X),P.onAfterShadow(a,P,D,z,W,O,X)}}}else if(et.visible){const ut=N(P,et,w,E);P.onBeforeShadow(a,P,D,z,W,ut,null),a.renderBufferDirect(z,null,W,ut,P,null),P.onAfterShadow(a,P,D,z,W,ut,null)}}const k=P.children;for(let W=0,et=k.length;W<et;W++)U(k[W],D,z,w,E)}function G(P){P.target.removeEventListener("dispose",G);for(const z in p){const w=p[z],E=P.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}const iC={[rp]:sp,[op]:up,[lp]:fp,[io]:cp,[sp]:rp,[up]:op,[fp]:lp,[cp]:io};function aC(a,t){function n(){let K=!1;const Ot=new on;let ht=null;const St=new on(0,0,0,0);return{setMask:function(It){ht!==It&&!K&&(a.colorMask(It,It,It,It),ht=It)},setLocked:function(It){K=It},setClear:function(It,Pt,ce,Ze,ln){ln===!0&&(It*=Ze,Pt*=Ze,ce*=Ze),Ot.set(It,Pt,ce,Ze),St.equals(Ot)===!1&&(a.clearColor(It,Pt,ce,Ze),St.copy(Ot))},reset:function(){K=!1,ht=null,St.set(-1,0,0,0)}}}function r(){let K=!1,Ot=!1,ht=null,St=null,It=null;return{setReversed:function(Pt){if(Ot!==Pt){const ce=t.get("EXT_clip_control");Pt?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),Ot=Pt;const Ze=It;It=null,this.setClear(Ze)}},getReversed:function(){return Ot},setTest:function(Pt){Pt?Et(a.DEPTH_TEST):At(a.DEPTH_TEST)},setMask:function(Pt){ht!==Pt&&!K&&(a.depthMask(Pt),ht=Pt)},setFunc:function(Pt){if(Ot&&(Pt=iC[Pt]),St!==Pt){switch(Pt){case rp:a.depthFunc(a.NEVER);break;case sp:a.depthFunc(a.ALWAYS);break;case op:a.depthFunc(a.LESS);break;case io:a.depthFunc(a.LEQUAL);break;case lp:a.depthFunc(a.EQUAL);break;case cp:a.depthFunc(a.GEQUAL);break;case up:a.depthFunc(a.GREATER);break;case fp:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}St=Pt}},setLocked:function(Pt){K=Pt},setClear:function(Pt){It!==Pt&&(Ot&&(Pt=1-Pt),a.clearDepth(Pt),It=Pt)},reset:function(){K=!1,ht=null,St=null,It=null,Ot=!1}}}function o(){let K=!1,Ot=null,ht=null,St=null,It=null,Pt=null,ce=null,Ze=null,ln=null;return{setTest:function(De){K||(De?Et(a.STENCIL_TEST):At(a.STENCIL_TEST))},setMask:function(De){Ot!==De&&!K&&(a.stencilMask(De),Ot=De)},setFunc:function(De,Jn,Sn){(ht!==De||St!==Jn||It!==Sn)&&(a.stencilFunc(De,Jn,Sn),ht=De,St=Jn,It=Sn)},setOp:function(De,Jn,Sn){(Pt!==De||ce!==Jn||Ze!==Sn)&&(a.stencilOp(De,Jn,Sn),Pt=De,ce=Jn,Ze=Sn)},setLocked:function(De){K=De},setClear:function(De){ln!==De&&(a.clearStencil(De),ln=De)},reset:function(){K=!1,Ot=null,ht=null,St=null,It=null,Pt=null,ce=null,Ze=null,ln=null}}}const c=new n,u=new r,d=new o,h=new WeakMap,p=new WeakMap;let g={},v={},_=new WeakMap,b=[],M=null,T=!1,y=null,x=null,F=null,N=null,U=null,G=null,P=null,D=new Be(0,0,0),z=0,w=!1,E=null,L=null,k=null,W=null,et=null;const ut=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,q=0;const X=a.getParameter(a.VERSION);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),I=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),I=q>=2);let yt=null,O={};const tt=a.getParameter(a.SCISSOR_BOX),vt=a.getParameter(a.VIEWPORT),pt=new on().fromArray(tt),Y=new on().fromArray(vt);function dt(K,Ot,ht,St){const It=new Uint8Array(4),Pt=a.createTexture();a.bindTexture(K,Pt),a.texParameteri(K,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(K,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let ce=0;ce<ht;ce++)K===a.TEXTURE_3D||K===a.TEXTURE_2D_ARRAY?a.texImage3D(Ot,0,a.RGBA,1,1,St,0,a.RGBA,a.UNSIGNED_BYTE,It):a.texImage2D(Ot+ce,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,It);return Pt}const _t={};_t[a.TEXTURE_2D]=dt(a.TEXTURE_2D,a.TEXTURE_2D,1),_t[a.TEXTURE_CUBE_MAP]=dt(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[a.TEXTURE_2D_ARRAY]=dt(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),_t[a.TEXTURE_3D]=dt(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Et(a.DEPTH_TEST),u.setFunc(io),oe(!1),$t(R_),Et(a.CULL_FACE),H(hr);function Et(K){g[K]!==!0&&(a.enable(K),g[K]=!0)}function At(K){g[K]!==!1&&(a.disable(K),g[K]=!1)}function jt(K,Ot){return v[K]!==Ot?(a.bindFramebuffer(K,Ot),v[K]=Ot,K===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Ot),K===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Ot),!0):!1}function kt(K,Ot){let ht=b,St=!1;if(K){ht=_.get(Ot),ht===void 0&&(ht=[],_.set(Ot,ht));const It=K.textures;if(ht.length!==It.length||ht[0]!==a.COLOR_ATTACHMENT0){for(let Pt=0,ce=It.length;Pt<ce;Pt++)ht[Pt]=a.COLOR_ATTACHMENT0+Pt;ht.length=It.length,St=!0}}else ht[0]!==a.BACK&&(ht[0]=a.BACK,St=!0);St&&a.drawBuffers(ht)}function ye(K){return M!==K?(a.useProgram(K),M=K,!0):!1}const pe={[qr]:a.FUNC_ADD,[c2]:a.FUNC_SUBTRACT,[u2]:a.FUNC_REVERSE_SUBTRACT};pe[f2]=a.MIN,pe[d2]=a.MAX;const Ht={[h2]:a.ZERO,[p2]:a.ONE,[m2]:a.SRC_COLOR,[ip]:a.SRC_ALPHA,[b2]:a.SRC_ALPHA_SATURATE,[x2]:a.DST_COLOR,[v2]:a.DST_ALPHA,[g2]:a.ONE_MINUS_SRC_COLOR,[ap]:a.ONE_MINUS_SRC_ALPHA,[y2]:a.ONE_MINUS_DST_COLOR,[_2]:a.ONE_MINUS_DST_ALPHA,[S2]:a.CONSTANT_COLOR,[M2]:a.ONE_MINUS_CONSTANT_COLOR,[E2]:a.CONSTANT_ALPHA,[T2]:a.ONE_MINUS_CONSTANT_ALPHA};function H(K,Ot,ht,St,It,Pt,ce,Ze,ln,De){if(K===hr){T===!0&&(At(a.BLEND),T=!1);return}if(T===!1&&(Et(a.BLEND),T=!0),K!==l2){if(K!==y||De!==w){if((x!==qr||U!==qr)&&(a.blendEquation(a.FUNC_ADD),x=qr,U=qr),De)switch(K){case to:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case w_:a.blendFunc(a.ONE,a.ONE);break;case C_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case D_:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case to:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case w_:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case C_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case D_:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}F=null,N=null,G=null,P=null,D.set(0,0,0),z=0,y=K,w=De}return}It=It||Ot,Pt=Pt||ht,ce=ce||St,(Ot!==x||It!==U)&&(a.blendEquationSeparate(pe[Ot],pe[It]),x=Ot,U=It),(ht!==F||St!==N||Pt!==G||ce!==P)&&(a.blendFuncSeparate(Ht[ht],Ht[St],Ht[Pt],Ht[ce]),F=ht,N=St,G=Pt,P=ce),(Ze.equals(D)===!1||ln!==z)&&(a.blendColor(Ze.r,Ze.g,Ze.b,ln),D.copy(Ze),z=ln),y=K,w=!1}function te(K,Ot){K.side===Sa?At(a.CULL_FACE):Et(a.CULL_FACE);let ht=K.side===Qn;Ot&&(ht=!ht),oe(ht),K.blending===to&&K.transparent===!1?H(hr):H(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),u.setFunc(K.depthFunc),u.setTest(K.depthTest),u.setMask(K.depthWrite),c.setMask(K.colorWrite);const St=K.stencilWrite;d.setTest(St),St&&(d.setMask(K.stencilWriteMask),d.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),d.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Fe(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?Et(a.SAMPLE_ALPHA_TO_COVERAGE):At(a.SAMPLE_ALPHA_TO_COVERAGE)}function oe(K){E!==K&&(K?a.frontFace(a.CW):a.frontFace(a.CCW),E=K)}function $t(K){K!==r2?(Et(a.CULL_FACE),K!==L&&(K===R_?a.cullFace(a.BACK):K===s2?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):At(a.CULL_FACE),L=K}function Zt(K){K!==k&&(I&&a.lineWidth(K),k=K)}function Fe(K,Ot,ht){K?(Et(a.POLYGON_OFFSET_FILL),(W!==Ot||et!==ht)&&(a.polygonOffset(Ot,ht),W=Ot,et=ht)):At(a.POLYGON_OFFSET_FILL)}function Wt(K){K?Et(a.SCISSOR_TEST):At(a.SCISSOR_TEST)}function B(K){K===void 0&&(K=a.TEXTURE0+ut-1),yt!==K&&(a.activeTexture(K),yt=K)}function R(K,Ot,ht){ht===void 0&&(yt===null?ht=a.TEXTURE0+ut-1:ht=yt);let St=O[ht];St===void 0&&(St={type:void 0,texture:void 0},O[ht]=St),(St.type!==K||St.texture!==Ot)&&(yt!==ht&&(a.activeTexture(ht),yt=ht),a.bindTexture(K,Ot||_t[K]),St.type=K,St.texture=Ot)}function at(){const K=O[yt];K!==void 0&&K.type!==void 0&&(a.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function bt(){try{a.compressedTexImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Tt(){try{a.compressedTexImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function gt(){try{a.texSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Bt(){try{a.texSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Dt(){try{a.compressedTexSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Xt(){try{a.compressedTexSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ae(){try{a.texStorage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ct(){try{a.texStorage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Gt(){try{a.texImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Jt(){try{a.texImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ne(K){pt.equals(K)===!1&&(a.scissor(K.x,K.y,K.z,K.w),pt.copy(K))}function zt(K){Y.equals(K)===!1&&(a.viewport(K.x,K.y,K.z,K.w),Y.copy(K))}function ge(K,Ot){let ht=p.get(Ot);ht===void 0&&(ht=new WeakMap,p.set(Ot,ht));let St=ht.get(K);St===void 0&&(St=a.getUniformBlockIndex(Ot,K.name),ht.set(K,St))}function le(K,Ot){const St=p.get(Ot).get(K);h.get(Ot)!==St&&(a.uniformBlockBinding(Ot,St,K.__bindingPointIndex),h.set(Ot,St))}function He(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},yt=null,O={},v={},_=new WeakMap,b=[],M=null,T=!1,y=null,x=null,F=null,N=null,U=null,G=null,P=null,D=new Be(0,0,0),z=0,w=!1,E=null,L=null,k=null,W=null,et=null,pt.set(0,0,a.canvas.width,a.canvas.height),Y.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:Et,disable:At,bindFramebuffer:jt,drawBuffers:kt,useProgram:ye,setBlending:H,setMaterial:te,setFlipSided:oe,setCullFace:$t,setLineWidth:Zt,setPolygonOffset:Fe,setScissorTest:Wt,activeTexture:B,bindTexture:R,unbindTexture:at,compressedTexImage2D:bt,compressedTexImage3D:Tt,texImage2D:Gt,texImage3D:Jt,updateUBOMapping:ge,uniformBlockBinding:le,texStorage2D:ae,texStorage3D:Ct,texSubImage2D:gt,texSubImage3D:Bt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Xt,scissor:ne,viewport:zt,reset:He}}function rC(a,t,n,r,o,c,u){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new qe,g=new WeakMap;let v;const _=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(B,R){return b?new OffscreenCanvas(B,R):Lu("canvas")}function T(B,R,at){let bt=1;const Tt=Wt(B);if((Tt.width>at||Tt.height>at)&&(bt=at/Math.max(Tt.width,Tt.height)),bt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const gt=Math.floor(bt*Tt.width),Bt=Math.floor(bt*Tt.height);v===void 0&&(v=M(gt,Bt));const Dt=R?M(gt,Bt):v;return Dt.width=gt,Dt.height=Bt,Dt.getContext("2d").drawImage(B,0,0,gt,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+gt+"x"+Bt+")."),Dt}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),B;return B}function y(B){return B.generateMipmaps}function x(B){a.generateMipmap(B)}function F(B){return B.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?a.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function N(B,R,at,bt,Tt=!1){if(B!==null){if(a[B]!==void 0)return a[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let gt=R;if(R===a.RED&&(at===a.FLOAT&&(gt=a.R32F),at===a.HALF_FLOAT&&(gt=a.R16F),at===a.UNSIGNED_BYTE&&(gt=a.R8)),R===a.RED_INTEGER&&(at===a.UNSIGNED_BYTE&&(gt=a.R8UI),at===a.UNSIGNED_SHORT&&(gt=a.R16UI),at===a.UNSIGNED_INT&&(gt=a.R32UI),at===a.BYTE&&(gt=a.R8I),at===a.SHORT&&(gt=a.R16I),at===a.INT&&(gt=a.R32I)),R===a.RG&&(at===a.FLOAT&&(gt=a.RG32F),at===a.HALF_FLOAT&&(gt=a.RG16F),at===a.UNSIGNED_BYTE&&(gt=a.RG8)),R===a.RG_INTEGER&&(at===a.UNSIGNED_BYTE&&(gt=a.RG8UI),at===a.UNSIGNED_SHORT&&(gt=a.RG16UI),at===a.UNSIGNED_INT&&(gt=a.RG32UI),at===a.BYTE&&(gt=a.RG8I),at===a.SHORT&&(gt=a.RG16I),at===a.INT&&(gt=a.RG32I)),R===a.RGB_INTEGER&&(at===a.UNSIGNED_BYTE&&(gt=a.RGB8UI),at===a.UNSIGNED_SHORT&&(gt=a.RGB16UI),at===a.UNSIGNED_INT&&(gt=a.RGB32UI),at===a.BYTE&&(gt=a.RGB8I),at===a.SHORT&&(gt=a.RGB16I),at===a.INT&&(gt=a.RGB32I)),R===a.RGBA_INTEGER&&(at===a.UNSIGNED_BYTE&&(gt=a.RGBA8UI),at===a.UNSIGNED_SHORT&&(gt=a.RGBA16UI),at===a.UNSIGNED_INT&&(gt=a.RGBA32UI),at===a.BYTE&&(gt=a.RGBA8I),at===a.SHORT&&(gt=a.RGBA16I),at===a.INT&&(gt=a.RGBA32I)),R===a.RGB&&at===a.UNSIGNED_INT_5_9_9_9_REV&&(gt=a.RGB9_E5),R===a.RGBA){const Bt=Tt?Uu:Le.getTransfer(bt);at===a.FLOAT&&(gt=a.RGBA32F),at===a.HALF_FLOAT&&(gt=a.RGBA16F),at===a.UNSIGNED_BYTE&&(gt=Bt===Xe?a.SRGB8_ALPHA8:a.RGBA8),at===a.UNSIGNED_SHORT_4_4_4_4&&(gt=a.RGBA4),at===a.UNSIGNED_SHORT_5_5_5_1&&(gt=a.RGB5_A1)}return(gt===a.R16F||gt===a.R32F||gt===a.RG16F||gt===a.RG32F||gt===a.RGBA16F||gt===a.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function U(B,R){let at;return B?R===null||R===Jr||R===El?at=a.DEPTH24_STENCIL8:R===Ma?at=a.DEPTH32F_STENCIL8:R===Ml&&(at=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Jr||R===El?at=a.DEPTH_COMPONENT24:R===Ma?at=a.DEPTH_COMPONENT32F:R===Ml&&(at=a.DEPTH_COMPONENT16),at}function G(B,R){return y(B)===!0||B.isFramebufferTexture&&B.minFilter!==Li&&B.minFilter!==ki?Math.log2(Math.max(R.width,R.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?R.mipmaps.length:1}function P(B){const R=B.target;R.removeEventListener("dispose",P),z(R),R.isVideoTexture&&g.delete(R)}function D(B){const R=B.target;R.removeEventListener("dispose",D),E(R)}function z(B){const R=r.get(B);if(R.__webglInit===void 0)return;const at=B.source,bt=_.get(at);if(bt){const Tt=bt[R.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&w(B),Object.keys(bt).length===0&&_.delete(at)}r.remove(B)}function w(B){const R=r.get(B);a.deleteTexture(R.__webglTexture);const at=B.source,bt=_.get(at);delete bt[R.__cacheKey],u.memory.textures--}function E(B){const R=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let bt=0;bt<6;bt++){if(Array.isArray(R.__webglFramebuffer[bt]))for(let Tt=0;Tt<R.__webglFramebuffer[bt].length;Tt++)a.deleteFramebuffer(R.__webglFramebuffer[bt][Tt]);else a.deleteFramebuffer(R.__webglFramebuffer[bt]);R.__webglDepthbuffer&&a.deleteRenderbuffer(R.__webglDepthbuffer[bt])}else{if(Array.isArray(R.__webglFramebuffer))for(let bt=0;bt<R.__webglFramebuffer.length;bt++)a.deleteFramebuffer(R.__webglFramebuffer[bt]);else a.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&a.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&a.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let bt=0;bt<R.__webglColorRenderbuffer.length;bt++)R.__webglColorRenderbuffer[bt]&&a.deleteRenderbuffer(R.__webglColorRenderbuffer[bt]);R.__webglDepthRenderbuffer&&a.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const at=B.textures;for(let bt=0,Tt=at.length;bt<Tt;bt++){const gt=r.get(at[bt]);gt.__webglTexture&&(a.deleteTexture(gt.__webglTexture),u.memory.textures--),r.remove(at[bt])}r.remove(B)}let L=0;function k(){L=0}function W(){const B=L;return B>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+o.maxTextures),L+=1,B}function et(B){const R=[];return R.push(B.wrapS),R.push(B.wrapT),R.push(B.wrapR||0),R.push(B.magFilter),R.push(B.minFilter),R.push(B.anisotropy),R.push(B.internalFormat),R.push(B.format),R.push(B.type),R.push(B.generateMipmaps),R.push(B.premultiplyAlpha),R.push(B.flipY),R.push(B.unpackAlignment),R.push(B.colorSpace),R.join()}function ut(B,R){const at=r.get(B);if(B.isVideoTexture&&Zt(B),B.isRenderTargetTexture===!1&&B.version>0&&at.__version!==B.version){const bt=B.image;if(bt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(bt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(at,B,R);return}}n.bindTexture(a.TEXTURE_2D,at.__webglTexture,a.TEXTURE0+R)}function I(B,R){const at=r.get(B);if(B.version>0&&at.__version!==B.version){Y(at,B,R);return}n.bindTexture(a.TEXTURE_2D_ARRAY,at.__webglTexture,a.TEXTURE0+R)}function q(B,R){const at=r.get(B);if(B.version>0&&at.__version!==B.version){Y(at,B,R);return}n.bindTexture(a.TEXTURE_3D,at.__webglTexture,a.TEXTURE0+R)}function X(B,R){const at=r.get(B);if(B.version>0&&at.__version!==B.version){dt(at,B,R);return}n.bindTexture(a.TEXTURE_CUBE_MAP,at.__webglTexture,a.TEXTURE0+R)}const yt={[pp]:a.REPEAT,[Zr]:a.CLAMP_TO_EDGE,[mp]:a.MIRRORED_REPEAT},O={[Li]:a.NEAREST,[P2]:a.NEAREST_MIPMAP_NEAREST,[qc]:a.NEAREST_MIPMAP_LINEAR,[ki]:a.LINEAR,[dh]:a.LINEAR_MIPMAP_NEAREST,[Kr]:a.LINEAR_MIPMAP_LINEAR},tt={[H2]:a.NEVER,[W2]:a.ALWAYS,[G2]:a.LESS,[Bx]:a.LEQUAL,[V2]:a.EQUAL,[j2]:a.GEQUAL,[k2]:a.GREATER,[X2]:a.NOTEQUAL};function vt(B,R){if(R.type===Ma&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===ki||R.magFilter===dh||R.magFilter===qc||R.magFilter===Kr||R.minFilter===ki||R.minFilter===dh||R.minFilter===qc||R.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(B,a.TEXTURE_WRAP_S,yt[R.wrapS]),a.texParameteri(B,a.TEXTURE_WRAP_T,yt[R.wrapT]),(B===a.TEXTURE_3D||B===a.TEXTURE_2D_ARRAY)&&a.texParameteri(B,a.TEXTURE_WRAP_R,yt[R.wrapR]),a.texParameteri(B,a.TEXTURE_MAG_FILTER,O[R.magFilter]),a.texParameteri(B,a.TEXTURE_MIN_FILTER,O[R.minFilter]),R.compareFunction&&(a.texParameteri(B,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(B,a.TEXTURE_COMPARE_FUNC,tt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Li||R.minFilter!==qc&&R.minFilter!==Kr||R.type===Ma&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");a.texParameterf(B,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function pt(B,R){let at=!1;B.__webglInit===void 0&&(B.__webglInit=!0,R.addEventListener("dispose",P));const bt=R.source;let Tt=_.get(bt);Tt===void 0&&(Tt={},_.set(bt,Tt));const gt=et(R);if(gt!==B.__cacheKey){Tt[gt]===void 0&&(Tt[gt]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,at=!0),Tt[gt].usedTimes++;const Bt=Tt[B.__cacheKey];Bt!==void 0&&(Tt[B.__cacheKey].usedTimes--,Bt.usedTimes===0&&w(R)),B.__cacheKey=gt,B.__webglTexture=Tt[gt].texture}return at}function Y(B,R,at){let bt=a.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(bt=a.TEXTURE_2D_ARRAY),R.isData3DTexture&&(bt=a.TEXTURE_3D);const Tt=pt(B,R),gt=R.source;n.bindTexture(bt,B.__webglTexture,a.TEXTURE0+at);const Bt=r.get(gt);if(gt.version!==Bt.__version||Tt===!0){n.activeTexture(a.TEXTURE0+at);const Dt=Le.getPrimaries(Le.workingColorSpace),Xt=R.colorSpace===dr?null:Le.getPrimaries(R.colorSpace),ae=R.colorSpace===dr||Dt===Xt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,R.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,R.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Ct=T(R.image,!1,o.maxTextureSize);Ct=Fe(R,Ct);const Gt=c.convert(R.format,R.colorSpace),Jt=c.convert(R.type);let ne=N(R.internalFormat,Gt,Jt,R.colorSpace,R.isVideoTexture);vt(bt,R);let zt;const ge=R.mipmaps,le=R.isVideoTexture!==!0,He=Bt.__version===void 0||Tt===!0,K=gt.dataReady,Ot=G(R,Ct);if(R.isDepthTexture)ne=U(R.format===Al,R.type),He&&(le?n.texStorage2D(a.TEXTURE_2D,1,ne,Ct.width,Ct.height):n.texImage2D(a.TEXTURE_2D,0,ne,Ct.width,Ct.height,0,Gt,Jt,null));else if(R.isDataTexture)if(ge.length>0){le&&He&&n.texStorage2D(a.TEXTURE_2D,Ot,ne,ge[0].width,ge[0].height);for(let ht=0,St=ge.length;ht<St;ht++)zt=ge[ht],le?K&&n.texSubImage2D(a.TEXTURE_2D,ht,0,0,zt.width,zt.height,Gt,Jt,zt.data):n.texImage2D(a.TEXTURE_2D,ht,ne,zt.width,zt.height,0,Gt,Jt,zt.data);R.generateMipmaps=!1}else le?(He&&n.texStorage2D(a.TEXTURE_2D,Ot,ne,Ct.width,Ct.height),K&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Ct.width,Ct.height,Gt,Jt,Ct.data)):n.texImage2D(a.TEXTURE_2D,0,ne,Ct.width,Ct.height,0,Gt,Jt,Ct.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){le&&He&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ot,ne,ge[0].width,ge[0].height,Ct.depth);for(let ht=0,St=ge.length;ht<St;ht++)if(zt=ge[ht],R.format!==Ni)if(Gt!==null)if(le){if(K)if(R.layerUpdates.size>0){const It=Q_(zt.width,zt.height,R.format,R.type);for(const Pt of R.layerUpdates){const ce=zt.data.subarray(Pt*It/zt.data.BYTES_PER_ELEMENT,(Pt+1)*It/zt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ht,0,0,Pt,zt.width,zt.height,1,Gt,ce)}R.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ht,0,0,0,zt.width,zt.height,Ct.depth,Gt,zt.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ht,ne,zt.width,zt.height,Ct.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?K&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,ht,0,0,0,zt.width,zt.height,Ct.depth,Gt,Jt,zt.data):n.texImage3D(a.TEXTURE_2D_ARRAY,ht,ne,zt.width,zt.height,Ct.depth,0,Gt,Jt,zt.data)}else{le&&He&&n.texStorage2D(a.TEXTURE_2D,Ot,ne,ge[0].width,ge[0].height);for(let ht=0,St=ge.length;ht<St;ht++)zt=ge[ht],R.format!==Ni?Gt!==null?le?K&&n.compressedTexSubImage2D(a.TEXTURE_2D,ht,0,0,zt.width,zt.height,Gt,zt.data):n.compressedTexImage2D(a.TEXTURE_2D,ht,ne,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?K&&n.texSubImage2D(a.TEXTURE_2D,ht,0,0,zt.width,zt.height,Gt,Jt,zt.data):n.texImage2D(a.TEXTURE_2D,ht,ne,zt.width,zt.height,0,Gt,Jt,zt.data)}else if(R.isDataArrayTexture)if(le){if(He&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ot,ne,Ct.width,Ct.height,Ct.depth),K)if(R.layerUpdates.size>0){const ht=Q_(Ct.width,Ct.height,R.format,R.type);for(const St of R.layerUpdates){const It=Ct.data.subarray(St*ht/Ct.data.BYTES_PER_ELEMENT,(St+1)*ht/Ct.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,St,Ct.width,Ct.height,1,Gt,Jt,It)}R.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,Gt,Jt,Ct.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,ne,Ct.width,Ct.height,Ct.depth,0,Gt,Jt,Ct.data);else if(R.isData3DTexture)le?(He&&n.texStorage3D(a.TEXTURE_3D,Ot,ne,Ct.width,Ct.height,Ct.depth),K&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,Gt,Jt,Ct.data)):n.texImage3D(a.TEXTURE_3D,0,ne,Ct.width,Ct.height,Ct.depth,0,Gt,Jt,Ct.data);else if(R.isFramebufferTexture){if(He)if(le)n.texStorage2D(a.TEXTURE_2D,Ot,ne,Ct.width,Ct.height);else{let ht=Ct.width,St=Ct.height;for(let It=0;It<Ot;It++)n.texImage2D(a.TEXTURE_2D,It,ne,ht,St,0,Gt,Jt,null),ht>>=1,St>>=1}}else if(ge.length>0){if(le&&He){const ht=Wt(ge[0]);n.texStorage2D(a.TEXTURE_2D,Ot,ne,ht.width,ht.height)}for(let ht=0,St=ge.length;ht<St;ht++)zt=ge[ht],le?K&&n.texSubImage2D(a.TEXTURE_2D,ht,0,0,Gt,Jt,zt):n.texImage2D(a.TEXTURE_2D,ht,ne,Gt,Jt,zt);R.generateMipmaps=!1}else if(le){if(He){const ht=Wt(Ct);n.texStorage2D(a.TEXTURE_2D,Ot,ne,ht.width,ht.height)}K&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Gt,Jt,Ct)}else n.texImage2D(a.TEXTURE_2D,0,ne,Gt,Jt,Ct);y(R)&&x(bt),Bt.__version=gt.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function dt(B,R,at){if(R.image.length!==6)return;const bt=pt(B,R),Tt=R.source;n.bindTexture(a.TEXTURE_CUBE_MAP,B.__webglTexture,a.TEXTURE0+at);const gt=r.get(Tt);if(Tt.version!==gt.__version||bt===!0){n.activeTexture(a.TEXTURE0+at);const Bt=Le.getPrimaries(Le.workingColorSpace),Dt=R.colorSpace===dr?null:Le.getPrimaries(R.colorSpace),Xt=R.colorSpace===dr||Bt===Dt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,R.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,R.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ae=R.isCompressedTexture||R.image[0].isCompressedTexture,Ct=R.image[0]&&R.image[0].isDataTexture,Gt=[];for(let St=0;St<6;St++)!ae&&!Ct?Gt[St]=T(R.image[St],!0,o.maxCubemapSize):Gt[St]=Ct?R.image[St].image:R.image[St],Gt[St]=Fe(R,Gt[St]);const Jt=Gt[0],ne=c.convert(R.format,R.colorSpace),zt=c.convert(R.type),ge=N(R.internalFormat,ne,zt,R.colorSpace),le=R.isVideoTexture!==!0,He=gt.__version===void 0||bt===!0,K=Tt.dataReady;let Ot=G(R,Jt);vt(a.TEXTURE_CUBE_MAP,R);let ht;if(ae){le&&He&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Ot,ge,Jt.width,Jt.height);for(let St=0;St<6;St++){ht=Gt[St].mipmaps;for(let It=0;It<ht.length;It++){const Pt=ht[It];R.format!==Ni?ne!==null?le?K&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,It,0,0,Pt.width,Pt.height,ne,Pt.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,It,ge,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?K&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,It,0,0,Pt.width,Pt.height,ne,zt,Pt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,It,ge,Pt.width,Pt.height,0,ne,zt,Pt.data)}}}else{if(ht=R.mipmaps,le&&He){ht.length>0&&Ot++;const St=Wt(Gt[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Ot,ge,St.width,St.height)}for(let St=0;St<6;St++)if(Ct){le?K&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Gt[St].width,Gt[St].height,ne,zt,Gt[St].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ge,Gt[St].width,Gt[St].height,0,ne,zt,Gt[St].data);for(let It=0;It<ht.length;It++){const ce=ht[It].image[St].image;le?K&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,It+1,0,0,ce.width,ce.height,ne,zt,ce.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,It+1,ge,ce.width,ce.height,0,ne,zt,ce.data)}}else{le?K&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,ne,zt,Gt[St]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ge,ne,zt,Gt[St]);for(let It=0;It<ht.length;It++){const Pt=ht[It];le?K&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,It+1,0,0,ne,zt,Pt.image[St]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,It+1,ge,ne,zt,Pt.image[St])}}}y(R)&&x(a.TEXTURE_CUBE_MAP),gt.__version=Tt.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function _t(B,R,at,bt,Tt,gt){const Bt=c.convert(at.format,at.colorSpace),Dt=c.convert(at.type),Xt=N(at.internalFormat,Bt,Dt,at.colorSpace),ae=r.get(R),Ct=r.get(at);if(Ct.__renderTarget=R,!ae.__hasExternalTextures){const Gt=Math.max(1,R.width>>gt),Jt=Math.max(1,R.height>>gt);Tt===a.TEXTURE_3D||Tt===a.TEXTURE_2D_ARRAY?n.texImage3D(Tt,gt,Xt,Gt,Jt,R.depth,0,Bt,Dt,null):n.texImage2D(Tt,gt,Xt,Gt,Jt,0,Bt,Dt,null)}n.bindFramebuffer(a.FRAMEBUFFER,B),$t(R)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,bt,Tt,Ct.__webglTexture,0,oe(R)):(Tt===a.TEXTURE_2D||Tt>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,bt,Tt,Ct.__webglTexture,gt),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Et(B,R,at){if(a.bindRenderbuffer(a.RENDERBUFFER,B),R.depthBuffer){const bt=R.depthTexture,Tt=bt&&bt.isDepthTexture?bt.type:null,gt=U(R.stencilBuffer,Tt),Bt=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Dt=oe(R);$t(R)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Dt,gt,R.width,R.height):at?a.renderbufferStorageMultisample(a.RENDERBUFFER,Dt,gt,R.width,R.height):a.renderbufferStorage(a.RENDERBUFFER,gt,R.width,R.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Bt,a.RENDERBUFFER,B)}else{const bt=R.textures;for(let Tt=0;Tt<bt.length;Tt++){const gt=bt[Tt],Bt=c.convert(gt.format,gt.colorSpace),Dt=c.convert(gt.type),Xt=N(gt.internalFormat,Bt,Dt,gt.colorSpace),ae=oe(R);at&&$t(R)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,ae,Xt,R.width,R.height):$t(R)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ae,Xt,R.width,R.height):a.renderbufferStorage(a.RENDERBUFFER,Xt,R.width,R.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function At(B,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,B),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const bt=r.get(R.depthTexture);bt.__renderTarget=R,(!bt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ut(R.depthTexture,0);const Tt=bt.__webglTexture,gt=oe(R);if(R.depthTexture.format===Tl)$t(R)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Tt,0,gt):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Tt,0);else if(R.depthTexture.format===Al)$t(R)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Tt,0,gt):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Tt,0);else throw new Error("Unknown depthTexture format")}function jt(B){const R=r.get(B),at=B.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==B.depthTexture){const bt=B.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),bt){const Tt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,bt.removeEventListener("dispose",Tt)};bt.addEventListener("dispose",Tt),R.__depthDisposeCallback=Tt}R.__boundDepthTexture=bt}if(B.depthTexture&&!R.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");const bt=B.texture.mipmaps;bt&&bt.length>0?At(R.__webglFramebuffer[0],B):At(R.__webglFramebuffer,B)}else if(at){R.__webglDepthbuffer=[];for(let bt=0;bt<6;bt++)if(n.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer[bt]),R.__webglDepthbuffer[bt]===void 0)R.__webglDepthbuffer[bt]=a.createRenderbuffer(),Et(R.__webglDepthbuffer[bt],B,!1);else{const Tt=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,gt=R.__webglDepthbuffer[bt];a.bindRenderbuffer(a.RENDERBUFFER,gt),a.framebufferRenderbuffer(a.FRAMEBUFFER,Tt,a.RENDERBUFFER,gt)}}else{const bt=B.texture.mipmaps;if(bt&&bt.length>0?n.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=a.createRenderbuffer(),Et(R.__webglDepthbuffer,B,!1);else{const Tt=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,gt=R.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,gt),a.framebufferRenderbuffer(a.FRAMEBUFFER,Tt,a.RENDERBUFFER,gt)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function kt(B,R,at){const bt=r.get(B);R!==void 0&&_t(bt.__webglFramebuffer,B,B.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),at!==void 0&&jt(B)}function ye(B){const R=B.texture,at=r.get(B),bt=r.get(R);B.addEventListener("dispose",D);const Tt=B.textures,gt=B.isWebGLCubeRenderTarget===!0,Bt=Tt.length>1;if(Bt||(bt.__webglTexture===void 0&&(bt.__webglTexture=a.createTexture()),bt.__version=R.version,u.memory.textures++),gt){at.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(R.mipmaps&&R.mipmaps.length>0){at.__webglFramebuffer[Dt]=[];for(let Xt=0;Xt<R.mipmaps.length;Xt++)at.__webglFramebuffer[Dt][Xt]=a.createFramebuffer()}else at.__webglFramebuffer[Dt]=a.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){at.__webglFramebuffer=[];for(let Dt=0;Dt<R.mipmaps.length;Dt++)at.__webglFramebuffer[Dt]=a.createFramebuffer()}else at.__webglFramebuffer=a.createFramebuffer();if(Bt)for(let Dt=0,Xt=Tt.length;Dt<Xt;Dt++){const ae=r.get(Tt[Dt]);ae.__webglTexture===void 0&&(ae.__webglTexture=a.createTexture(),u.memory.textures++)}if(B.samples>0&&$t(B)===!1){at.__webglMultisampledFramebuffer=a.createFramebuffer(),at.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Dt=0;Dt<Tt.length;Dt++){const Xt=Tt[Dt];at.__webglColorRenderbuffer[Dt]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,at.__webglColorRenderbuffer[Dt]);const ae=c.convert(Xt.format,Xt.colorSpace),Ct=c.convert(Xt.type),Gt=N(Xt.internalFormat,ae,Ct,Xt.colorSpace,B.isXRRenderTarget===!0),Jt=oe(B);a.renderbufferStorageMultisample(a.RENDERBUFFER,Jt,Gt,B.width,B.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Dt,a.RENDERBUFFER,at.__webglColorRenderbuffer[Dt])}a.bindRenderbuffer(a.RENDERBUFFER,null),B.depthBuffer&&(at.__webglDepthRenderbuffer=a.createRenderbuffer(),Et(at.__webglDepthRenderbuffer,B,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(gt){n.bindTexture(a.TEXTURE_CUBE_MAP,bt.__webglTexture),vt(a.TEXTURE_CUBE_MAP,R);for(let Dt=0;Dt<6;Dt++)if(R.mipmaps&&R.mipmaps.length>0)for(let Xt=0;Xt<R.mipmaps.length;Xt++)_t(at.__webglFramebuffer[Dt][Xt],B,R,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Xt);else _t(at.__webglFramebuffer[Dt],B,R,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(R)&&x(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Bt){for(let Dt=0,Xt=Tt.length;Dt<Xt;Dt++){const ae=Tt[Dt],Ct=r.get(ae);n.bindTexture(a.TEXTURE_2D,Ct.__webglTexture),vt(a.TEXTURE_2D,ae),_t(at.__webglFramebuffer,B,ae,a.COLOR_ATTACHMENT0+Dt,a.TEXTURE_2D,0),y(ae)&&x(a.TEXTURE_2D)}n.unbindTexture()}else{let Dt=a.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Dt=B.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Dt,bt.__webglTexture),vt(Dt,R),R.mipmaps&&R.mipmaps.length>0)for(let Xt=0;Xt<R.mipmaps.length;Xt++)_t(at.__webglFramebuffer[Xt],B,R,a.COLOR_ATTACHMENT0,Dt,Xt);else _t(at.__webglFramebuffer,B,R,a.COLOR_ATTACHMENT0,Dt,0);y(R)&&x(Dt),n.unbindTexture()}B.depthBuffer&&jt(B)}function pe(B){const R=B.textures;for(let at=0,bt=R.length;at<bt;at++){const Tt=R[at];if(y(Tt)){const gt=F(B),Bt=r.get(Tt).__webglTexture;n.bindTexture(gt,Bt),x(gt),n.unbindTexture()}}}const Ht=[],H=[];function te(B){if(B.samples>0){if($t(B)===!1){const R=B.textures,at=B.width,bt=B.height;let Tt=a.COLOR_BUFFER_BIT;const gt=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Bt=r.get(B),Dt=R.length>1;if(Dt)for(let ae=0;ae<R.length;ae++)n.bindFramebuffer(a.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ae,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Bt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ae,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer);const Xt=B.texture.mipmaps;Xt&&Xt.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let ae=0;ae<R.length;ae++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Tt|=a.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Tt|=a.STENCIL_BUFFER_BIT)),Dt){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Bt.__webglColorRenderbuffer[ae]);const Ct=r.get(R[ae]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ct,0)}a.blitFramebuffer(0,0,at,bt,0,0,at,bt,Tt,a.NEAREST),h===!0&&(Ht.length=0,H.length=0,Ht.push(a.COLOR_ATTACHMENT0+ae),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Ht.push(gt),H.push(gt),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,H)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ht))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Dt)for(let ae=0;ae<R.length;ae++){n.bindFramebuffer(a.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ae,a.RENDERBUFFER,Bt.__webglColorRenderbuffer[ae]);const Ct=r.get(R[ae]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Bt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ae,a.TEXTURE_2D,Ct,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&h){const R=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[R])}}}function oe(B){return Math.min(o.maxSamples,B.samples)}function $t(B){const R=r.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Zt(B){const R=u.render.frame;g.get(B)!==R&&(g.set(B,R),B.update())}function Fe(B,R){const at=B.colorSpace,bt=B.format,Tt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||at!==so&&at!==dr&&(Le.getTransfer(at)===Xe?(bt!==Ni||Tt!==Ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),R}function Wt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(p.width=B.naturalWidth||B.width,p.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(p.width=B.displayWidth,p.height=B.displayHeight):(p.width=B.width,p.height=B.height),p}this.allocateTextureUnit=W,this.resetTextureUnits=k,this.setTexture2D=ut,this.setTexture2DArray=I,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=kt,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=$t}function sC(a,t){function n(r,o=dr){let c;const u=Le.getTransfer(o);if(r===Ca)return a.UNSIGNED_BYTE;if(r===lm)return a.UNSIGNED_SHORT_4_4_4_4;if(r===cm)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Dx)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===wx)return a.BYTE;if(r===Cx)return a.SHORT;if(r===Ml)return a.UNSIGNED_SHORT;if(r===om)return a.INT;if(r===Jr)return a.UNSIGNED_INT;if(r===Ma)return a.FLOAT;if(r===Cl)return a.HALF_FLOAT;if(r===Ux)return a.ALPHA;if(r===Nx)return a.RGB;if(r===Ni)return a.RGBA;if(r===Tl)return a.DEPTH_COMPONENT;if(r===Al)return a.DEPTH_STENCIL;if(r===Lx)return a.RED;if(r===um)return a.RED_INTEGER;if(r===Ox)return a.RG;if(r===fm)return a.RG_INTEGER;if(r===dm)return a.RGBA_INTEGER;if(r===yu||r===bu||r===Su||r===Mu)if(u===Xe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===yu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===yu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Su)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gp||r===vp||r===_p||r===xp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===gp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===vp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===_p)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yp||r===bp||r===Sp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===yp||r===bp)return u===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Sp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Mp||r===Ep||r===Tp||r===Ap||r===Rp||r===wp||r===Cp||r===Dp||r===Up||r===Np||r===Lp||r===Op||r===Pp||r===Bp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Mp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ep)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Tp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ap)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Cp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Up)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Np)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Op)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Pp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Eu||r===zp||r===Ip)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Eu)return u===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ip)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Px||r===Fp||r===Hp||r===Gp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Eu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Fp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===El?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const oC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,r){if(this.texture===null){const o=new $n,c=t.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,r=new Ua({vertexShader:oC,fragmentShader:lC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xi(new Xu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uC extends ho{constructor(t,n){super();const r=this;let o=null,c=1,u=null,d="local-floor",h=1,p=null,g=null,v=null,_=null,b=null,M=null;const T=new cC,y=n.getContextAttributes();let x=null,F=null;const N=[],U=[],G=new qe;let P=null;const D=new yi;D.viewport=new on;const z=new yi;z.viewport=new on;const w=[D,z],E=new UT;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let dt=N[Y];return dt===void 0&&(dt=new Oh,N[Y]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(Y){let dt=N[Y];return dt===void 0&&(dt=new Oh,N[Y]=dt),dt.getGripSpace()},this.getHand=function(Y){let dt=N[Y];return dt===void 0&&(dt=new Oh,N[Y]=dt),dt.getHandSpace()};function W(Y){const dt=U.indexOf(Y.inputSource);if(dt===-1)return;const _t=N[dt];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,p||u),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function et(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",et),o.removeEventListener("inputsourceschange",ut);for(let Y=0;Y<N.length;Y++){const dt=U[Y];dt!==null&&(U[Y]=null,N[Y].disconnect(dt))}L=null,k=null,T.reset(),t.setRenderTarget(x),b=null,_=null,v=null,o=null,F=null,pt.stop(),r.isPresenting=!1,t.setPixelRatio(P),t.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){c=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return _!==null?_:b},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Y){if(o=Y,o!==null){if(x=t.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",et),o.addEventListener("inputsourceschange",ut),y.xrCompatible!==!0&&await n.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Et=null,At=null;y.depth&&(At=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_t=y.stencil?Al:Tl,Et=y.stencil?El:Jr);const jt={colorFormat:n.RGBA8,depthFormat:At,scaleFactor:c};v=new XRWebGLBinding(o,n),_=v.createProjectionLayer(jt),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),F=new ts(_.textureWidth,_.textureHeight,{format:Ni,type:Ca,depthTexture:new Yx(_.textureWidth,_.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const _t={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(o,n,_t),o.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),F=new ts(b.framebufferWidth,b.framebufferHeight,{format:Ni,type:Ca,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(d),pt.setContext(o),pt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ut(Y){for(let dt=0;dt<Y.removed.length;dt++){const _t=Y.removed[dt],Et=U.indexOf(_t);Et>=0&&(U[Et]=null,N[Et].disconnect(_t))}for(let dt=0;dt<Y.added.length;dt++){const _t=Y.added[dt];let Et=U.indexOf(_t);if(Et===-1){for(let jt=0;jt<N.length;jt++)if(jt>=U.length){U.push(_t),Et=jt;break}else if(U[jt]===null){U[jt]=_t,Et=jt;break}if(Et===-1)break}const At=N[Et];At&&At.connect(_t)}}const I=new ct,q=new ct;function X(Y,dt,_t){I.setFromMatrixPosition(dt.matrixWorld),q.setFromMatrixPosition(_t.matrixWorld);const Et=I.distanceTo(q),At=dt.projectionMatrix.elements,jt=_t.projectionMatrix.elements,kt=At[14]/(At[10]-1),ye=At[14]/(At[10]+1),pe=(At[9]+1)/At[5],Ht=(At[9]-1)/At[5],H=(At[8]-1)/At[0],te=(jt[8]+1)/jt[0],oe=kt*H,$t=kt*te,Zt=Et/(-H+te),Fe=Zt*-H;if(dt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Fe),Y.translateZ(Zt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),At[10]===-1)Y.projectionMatrix.copy(dt.projectionMatrix),Y.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Wt=kt+Zt,B=ye+Zt,R=oe-Fe,at=$t+(Et-Fe),bt=pe*ye/B*Wt,Tt=Ht*ye/B*Wt;Y.projectionMatrix.makePerspective(R,at,bt,Tt,Wt,B),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function yt(Y,dt){dt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(dt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(o===null)return;let dt=Y.near,_t=Y.far;T.texture!==null&&(T.depthNear>0&&(dt=T.depthNear),T.depthFar>0&&(_t=T.depthFar)),E.near=z.near=D.near=dt,E.far=z.far=D.far=_t,(L!==E.near||k!==E.far)&&(o.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,k=E.far),D.layers.mask=Y.layers.mask|2,z.layers.mask=Y.layers.mask|4,E.layers.mask=D.layers.mask|z.layers.mask;const Et=Y.parent,At=E.cameras;yt(E,Et);for(let jt=0;jt<At.length;jt++)yt(At[jt],Et);At.length===2?X(E,D,z):E.projectionMatrix.copy(D.projectionMatrix),O(Y,E,Et)};function O(Y,dt,_t){_t===null?Y.matrix.copy(dt.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(dt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(dt.projectionMatrix),Y.projectionMatrixInverse.copy(dt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Vp*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(_===null&&b===null))return h},this.setFoveation=function(Y){h=Y,_!==null&&(_.fixedFoveation=Y),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=Y)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(E)};let tt=null;function vt(Y,dt){if(g=dt.getViewerPose(p||u),M=dt,g!==null){const _t=g.views;b!==null&&(t.setRenderTargetFramebuffer(F,b.framebuffer),t.setRenderTarget(F));let Et=!1;_t.length!==E.cameras.length&&(E.cameras.length=0,Et=!0);for(let kt=0;kt<_t.length;kt++){const ye=_t[kt];let pe=null;if(b!==null)pe=b.getViewport(ye);else{const H=v.getViewSubImage(_,ye);pe=H.viewport,kt===0&&(t.setRenderTargetTextures(F,H.colorTexture,H.depthStencilTexture),t.setRenderTarget(F))}let Ht=w[kt];Ht===void 0&&(Ht=new yi,Ht.layers.enable(kt),Ht.viewport=new on,w[kt]=Ht),Ht.matrix.fromArray(ye.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(ye.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(pe.x,pe.y,pe.width,pe.height),kt===0&&(E.matrix.copy(Ht.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Et===!0&&E.cameras.push(Ht)}const At=o.enabledFeatures;if(At&&At.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const kt=v.getDepthInformation(_t[0]);kt&&kt.isValid&&kt.texture&&T.init(t,kt,o.renderState)}}for(let _t=0;_t<N.length;_t++){const Et=U[_t],At=N[_t];Et!==null&&At!==void 0&&At.update(Et,dt,p||u)}tt&&tt(Y,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),M=null}const pt=new Zx;pt.setAnimationLoop(vt),this.setAnimationLoop=function(Y){tt=Y},this.dispose=function(){}}}const kr=new Da,fC=new mn;function dC(a,t){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,Xx(a)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,F,N,U){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(y,x):x.isMeshToonMaterial?(c(y,x),v(y,x)):x.isMeshPhongMaterial?(c(y,x),g(y,x)):x.isMeshStandardMaterial?(c(y,x),_(y,x),x.isMeshPhysicalMaterial&&b(y,x,U)):x.isMeshMatcapMaterial?(c(y,x),M(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),T(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?h(y,x,F,N):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Qn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Qn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const F=t.get(x),N=F.envMap,U=F.envMapRotation;N&&(y.envMap.value=N,kr.copy(U),kr.x*=-1,kr.y*=-1,kr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),y.envMapRotation.value.setFromMatrix4(fC.makeRotationFromEuler(kr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function h(y,x,F,N){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*F,y.scale.value=N*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function b(y,x,F){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Qn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,x){x.matcap&&(y.matcap.value=x.matcap)}function T(y,x){const F=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function hC(a,t,n,r){let o={},c={},u=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function h(F,N){const U=N.program;r.uniformBlockBinding(F,U)}function p(F,N){let U=o[F.id];U===void 0&&(M(F),U=g(F),o[F.id]=U,F.addEventListener("dispose",y));const G=N.program;r.updateUBOMapping(F,G);const P=t.render.frame;c[F.id]!==P&&(_(F),c[F.id]=P)}function g(F){const N=v();F.__bindingPointIndex=N;const U=a.createBuffer(),G=F.__size,P=F.usage;return a.bindBuffer(a.UNIFORM_BUFFER,U),a.bufferData(a.UNIFORM_BUFFER,G,P),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,N,U),U}function v(){for(let F=0;F<d;F++)if(u.indexOf(F)===-1)return u.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(F){const N=o[F.id],U=F.uniforms,G=F.__cache;a.bindBuffer(a.UNIFORM_BUFFER,N);for(let P=0,D=U.length;P<D;P++){const z=Array.isArray(U[P])?U[P]:[U[P]];for(let w=0,E=z.length;w<E;w++){const L=z[w];if(b(L,P,w,G)===!0){const k=L.__offset,W=Array.isArray(L.value)?L.value:[L.value];let et=0;for(let ut=0;ut<W.length;ut++){const I=W[ut],q=T(I);typeof I=="number"||typeof I=="boolean"?(L.__data[0]=I,a.bufferSubData(a.UNIFORM_BUFFER,k+et,L.__data)):I.isMatrix3?(L.__data[0]=I.elements[0],L.__data[1]=I.elements[1],L.__data[2]=I.elements[2],L.__data[3]=0,L.__data[4]=I.elements[3],L.__data[5]=I.elements[4],L.__data[6]=I.elements[5],L.__data[7]=0,L.__data[8]=I.elements[6],L.__data[9]=I.elements[7],L.__data[10]=I.elements[8],L.__data[11]=0):(I.toArray(L.__data,et),et+=q.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,k,L.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function b(F,N,U,G){const P=F.value,D=N+"_"+U;if(G[D]===void 0)return typeof P=="number"||typeof P=="boolean"?G[D]=P:G[D]=P.clone(),!0;{const z=G[D];if(typeof P=="number"||typeof P=="boolean"){if(z!==P)return G[D]=P,!0}else if(z.equals(P)===!1)return z.copy(P),!0}return!1}function M(F){const N=F.uniforms;let U=0;const G=16;for(let D=0,z=N.length;D<z;D++){const w=Array.isArray(N[D])?N[D]:[N[D]];for(let E=0,L=w.length;E<L;E++){const k=w[E],W=Array.isArray(k.value)?k.value:[k.value];for(let et=0,ut=W.length;et<ut;et++){const I=W[et],q=T(I),X=U%G,yt=X%q.boundary,O=X+yt;U+=yt,O!==0&&G-O<q.storage&&(U+=G-O),k.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=U,U+=q.storage}}}const P=U%G;return P>0&&(U+=G-P),F.__size=U,F.__cache={},this}function T(F){const N={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(N.boundary=4,N.storage=4):F.isVector2?(N.boundary=8,N.storage=8):F.isVector3||F.isColor?(N.boundary=16,N.storage=12):F.isVector4?(N.boundary=16,N.storage=16):F.isMatrix3?(N.boundary=48,N.storage=48):F.isMatrix4?(N.boundary=64,N.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),N}function y(F){const N=F.target;N.removeEventListener("dispose",y);const U=u.indexOf(N.__bindingPointIndex);u.splice(U,1),a.deleteBuffer(o[N.id]),delete o[N.id],delete c[N.id]}function x(){for(const F in o)a.deleteBuffer(o[F]);u=[],o={},c={}}return{bind:h,update:p,dispose:x}}class pC{constructor(t={}){const{canvas:n=K2(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=u;const M=new Uint32Array(4),T=new Int32Array(4);let y=null,x=null;const F=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let G=!1;this._outputColorSpace=xi;let P=0,D=0,z=null,w=-1,E=null;const L=new on,k=new on;let W=null;const et=new Be(0);let ut=0,I=n.width,q=n.height,X=1,yt=null,O=null;const tt=new on(0,0,I,q),vt=new on(0,0,I,q);let pt=!1;const Y=new qx;let dt=!1,_t=!1;const Et=new mn,At=new mn,jt=new ct,kt=new on,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function Ht(){return z===null?X:1}let H=r;function te(C,$){return n.getContext(C,$)}try{const C={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sm}`),n.addEventListener("webglcontextlost",St,!1),n.addEventListener("webglcontextrestored",It,!1),n.addEventListener("webglcontextcreationerror",Pt,!1),H===null){const $="webgl2";if(H=te($,C),H===null)throw te($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let oe,$t,Zt,Fe,Wt,B,R,at,bt,Tt,gt,Bt,Dt,Xt,ae,Ct,Gt,Jt,ne,zt,ge,le,He,K;function Ot(){oe=new ER(H),oe.init(),le=new sC(H,oe),$t=new vR(H,oe,t,le),Zt=new aC(H,oe),$t.reverseDepthBuffer&&_&&Zt.buffers.depth.setReversed(!0),Fe=new RR(H),Wt=new jw,B=new rC(H,oe,Zt,Wt,$t,le,Fe),R=new xR(U),at=new MR(U),bt=new LT(H),He=new mR(H,bt),Tt=new TR(H,bt,Fe,He),gt=new CR(H,Tt,bt,Fe),ne=new wR(H,$t,B),Ct=new _R(Wt),Bt=new Xw(U,R,at,oe,$t,He,Ct),Dt=new dC(U,Wt),Xt=new qw,ae=new Jw(oe),Jt=new pR(U,R,at,Zt,gt,b,h),Gt=new nC(U,gt,$t),K=new hC(H,Fe,$t,Zt),zt=new gR(H,oe,Fe),ge=new AR(H,oe,Fe),Fe.programs=Bt.programs,U.capabilities=$t,U.extensions=oe,U.properties=Wt,U.renderLists=Xt,U.shadowMap=Gt,U.state=Zt,U.info=Fe}Ot();const ht=new uC(U,H);this.xr=ht,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=oe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=oe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(C){C!==void 0&&(X=C,this.setSize(I,q,!1))},this.getSize=function(C){return C.set(I,q)},this.setSize=function(C,$,lt=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,q=$,n.width=Math.floor(C*X),n.height=Math.floor($*X),lt===!0&&(n.style.width=C+"px",n.style.height=$+"px"),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(I*X,q*X).floor()},this.setDrawingBufferSize=function(C,$,lt){I=C,q=$,X=lt,n.width=Math.floor(C*lt),n.height=Math.floor($*lt),this.setViewport(0,0,C,$)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(tt)},this.setViewport=function(C,$,lt,ft){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,$,lt,ft),Zt.viewport(L.copy(tt).multiplyScalar(X).round())},this.getScissor=function(C){return C.copy(vt)},this.setScissor=function(C,$,lt,ft){C.isVector4?vt.set(C.x,C.y,C.z,C.w):vt.set(C,$,lt,ft),Zt.scissor(k.copy(vt).multiplyScalar(X).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(C){Zt.setScissorTest(pt=C)},this.setOpaqueSort=function(C){yt=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,lt=!0){let ft=0;if(C){let J=!1;if(z!==null){const Rt=z.texture.format;J=Rt===dm||Rt===fm||Rt===um}if(J){const Rt=z.texture.type,Ut=Rt===Ca||Rt===Jr||Rt===Ml||Rt===El||Rt===lm||Rt===cm,Nt=Jt.getClearColor(),Ft=Jt.getClearAlpha(),re=Nt.r,Kt=Nt.g,Yt=Nt.b;Ut?(M[0]=re,M[1]=Kt,M[2]=Yt,M[3]=Ft,H.clearBufferuiv(H.COLOR,0,M)):(T[0]=re,T[1]=Kt,T[2]=Yt,T[3]=Ft,H.clearBufferiv(H.COLOR,0,T))}else ft|=H.COLOR_BUFFER_BIT}$&&(ft|=H.DEPTH_BUFFER_BIT),lt&&(ft|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",St,!1),n.removeEventListener("webglcontextrestored",It,!1),n.removeEventListener("webglcontextcreationerror",Pt,!1),Jt.dispose(),Xt.dispose(),ae.dispose(),Wt.dispose(),R.dispose(),at.dispose(),gt.dispose(),He.dispose(),K.dispose(),Bt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",gn),ht.removeEventListener("sessionend",wn),jn.stop()};function St(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const C=Fe.autoReset,$=Gt.enabled,lt=Gt.autoUpdate,ft=Gt.needsUpdate,J=Gt.type;Ot(),Fe.autoReset=C,Gt.enabled=$,Gt.autoUpdate=lt,Gt.needsUpdate=ft,Gt.type=J}function Pt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ce(C){const $=C.target;$.removeEventListener("dispose",ce),Ze($)}function Ze(C){ln(C),Wt.remove(C)}function ln(C){const $=Wt.get(C).programs;$!==void 0&&($.forEach(function(lt){Bt.releaseProgram(lt)}),C.isShaderMaterial&&Bt.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,lt,ft,J,Rt){$===null&&($=ye);const Ut=J.isMesh&&J.matrixWorld.determinant()<0,Nt=br(C,$,lt,ft,J);Zt.setMaterial(ft,Ut);let Ft=lt.index,re=1;if(ft.wireframe===!0){if(Ft=Tt.getWireframeAttribute(lt),Ft===void 0)return;re=2}const Kt=lt.drawRange,Yt=lt.attributes.position;let be=Kt.start*re,Ue=(Kt.start+Kt.count)*re;Rt!==null&&(be=Math.max(be,Rt.start*re),Ue=Math.min(Ue,(Rt.start+Rt.count)*re)),Ft!==null?(be=Math.max(be,0),Ue=Math.min(Ue,Ft.count)):Yt!=null&&(be=Math.max(be,0),Ue=Math.min(Ue,Yt.count));const Je=Ue-be;if(Je<0||Je===1/0)return;He.setup(J,ft,Nt,lt,Ft);let Te,Ae=zt;if(Ft!==null&&(Te=bt.get(Ft),Ae=ge,Ae.setIndex(Te)),J.isMesh)ft.wireframe===!0?(Zt.setLineWidth(ft.wireframeLinewidth*Ht()),Ae.setMode(H.LINES)):Ae.setMode(H.TRIANGLES);else if(J.isLine){let Qt=ft.linewidth;Qt===void 0&&(Qt=1),Zt.setLineWidth(Qt*Ht()),J.isLineSegments?Ae.setMode(H.LINES):J.isLineLoop?Ae.setMode(H.LINE_LOOP):Ae.setMode(H.LINE_STRIP)}else J.isPoints?Ae.setMode(H.POINTS):J.isSprite&&Ae.setMode(H.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Tu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))Ae.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Qt=J._multiDrawStarts,en=J._multiDrawCounts,Ce=J._multiDrawCount,Ln=Ft?bt.get(Ft).bytesPerElement:1,Ba=Wt.get(ft).currentProgram.getUniforms();for(let Ke=0;Ke<Ce;Ke++)Ba.setValue(H,"_gl_DrawID",Ke),Ae.render(Qt[Ke]/Ln,en[Ke])}else if(J.isInstancedMesh)Ae.renderInstances(be,Je,J.count);else if(lt.isInstancedBufferGeometry){const Qt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,en=Math.min(lt.instanceCount,Qt);Ae.renderInstances(be,Je,en)}else Ae.render(be,Je)};function De(C,$,lt){C.transparent===!0&&C.side===Sa&&C.forceSinglePass===!1?(C.side=Qn,C.needsUpdate=!0,Oa(C,$,lt),C.side=mr,C.needsUpdate=!0,Oa(C,$,lt),C.side=Sa):Oa(C,$,lt)}this.compile=function(C,$,lt=null){lt===null&&(lt=C),x=ae.get(lt),x.init($),N.push(x),lt.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),C!==lt&&C.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights();const ft=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Rt=J.material;if(Rt)if(Array.isArray(Rt))for(let Ut=0;Ut<Rt.length;Ut++){const Nt=Rt[Ut];De(Nt,lt,J),ft.add(Nt)}else De(Rt,lt,J),ft.add(Rt)}),x=N.pop(),ft},this.compileAsync=function(C,$,lt=null){const ft=this.compile(C,$,lt);return new Promise(J=>{function Rt(){if(ft.forEach(function(Ut){Wt.get(Ut).currentProgram.isReady()&&ft.delete(Ut)}),ft.size===0){J(C);return}setTimeout(Rt,10)}oe.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Jn=null;function Sn(C){Jn&&Jn(C)}function gn(){jn.stop()}function wn(){jn.start()}const jn=new Zx;jn.setAnimationLoop(Sn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(C){Jn=C,ht.setAnimationLoop(C),C===null?jn.stop():jn.start()},ht.addEventListener("sessionstart",gn),ht.addEventListener("sessionend",wn),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera($),$=ht.getCamera()),C.isScene===!0&&C.onBeforeRender(U,C,$,z),x=ae.get(C,N.length),x.init($),N.push(x),At.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Y.setFromProjectionMatrix(At),_t=this.localClippingEnabled,dt=Ct.init(this.clippingPlanes,_t),y=Xt.get(C,F.length),y.init(),F.push(y),ht.enabled===!0&&ht.isPresenting===!0){const Rt=U.xr.getDepthSensingMesh();Rt!==null&&xr(Rt,$,-1/0,U.sortObjects)}xr(C,$,0,U.sortObjects),y.finish(),U.sortObjects===!0&&y.sort(yt,O),pe=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,pe&&Jt.addToRenderList(y,C),this.info.render.frame++,dt===!0&&Ct.beginShadows();const lt=x.state.shadowsArray;Gt.render(lt,C,$),dt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const ft=y.opaque,J=y.transmissive;if(x.setupLights(),$.isArrayCamera){const Rt=$.cameras;if(J.length>0)for(let Ut=0,Nt=Rt.length;Ut<Nt;Ut++){const Ft=Rt[Ut];Pl(ft,J,C,Ft)}pe&&Jt.render(C);for(let Ut=0,Nt=Rt.length;Ut<Nt;Ut++){const Ft=Rt[Ut];Ol(y,C,Ft,Ft.viewport)}}else J.length>0&&Pl(ft,J,C,$),pe&&Jt.render(C),Ol(y,C,$);z!==null&&D===0&&(B.updateMultisampleRenderTarget(z),B.updateRenderTargetMipmap(z)),C.isScene===!0&&C.onAfterRender(U,C,$),He.resetDefaultState(),w=-1,E=null,N.pop(),N.length>0?(x=N[N.length-1],dt===!0&&Ct.setGlobalState(U.clippingPlanes,x.state.camera)):x=null,F.pop(),F.length>0?y=F[F.length-1]:y=null};function xr(C,$,lt,ft){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)lt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){ft&&kt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(At);const Ut=gt.update(C),Nt=C.material;Nt.visible&&y.push(C,Ut,Nt,lt,kt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){const Ut=gt.update(C),Nt=C.material;if(ft&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),kt.copy(C.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),kt.copy(Ut.boundingSphere.center)),kt.applyMatrix4(C.matrixWorld).applyMatrix4(At)),Array.isArray(Nt)){const Ft=Ut.groups;for(let re=0,Kt=Ft.length;re<Kt;re++){const Yt=Ft[re],be=Nt[Yt.materialIndex];be&&be.visible&&y.push(C,Ut,be,lt,kt.z,Yt)}}else Nt.visible&&y.push(C,Ut,Nt,lt,kt.z,null)}}const Rt=C.children;for(let Ut=0,Nt=Rt.length;Ut<Nt;Ut++)xr(Rt[Ut],$,lt,ft)}function Ol(C,$,lt,ft){const J=C.opaque,Rt=C.transmissive,Ut=C.transparent;x.setupLightsView(lt),dt===!0&&Ct.setGlobalState(U.clippingPlanes,lt),ft&&Zt.viewport(L.copy(ft)),J.length>0&&yr(J,$,lt),Rt.length>0&&yr(Rt,$,lt),Ut.length>0&&yr(Ut,$,lt),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function Pl(C,$,lt,ft){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ft.id]===void 0&&(x.state.transmissionRenderTarget[ft.id]=new ts(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?Cl:Ca,minFilter:Kr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Rt=x.state.transmissionRenderTarget[ft.id],Ut=ft.viewport||L;Rt.setSize(Ut.z*U.transmissionResolutionScale,Ut.w*U.transmissionResolutionScale);const Nt=U.getRenderTarget();U.setRenderTarget(Rt),U.getClearColor(et),ut=U.getClearAlpha(),ut<1&&U.setClearColor(16777215,.5),U.clear(),pe&&Jt.render(lt);const Ft=U.toneMapping;U.toneMapping=pr;const re=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),x.setupLightsView(ft),dt===!0&&Ct.setGlobalState(U.clippingPlanes,ft),yr(C,lt,ft),B.updateMultisampleRenderTarget(Rt),B.updateRenderTargetMipmap(Rt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Yt=0,be=$.length;Yt<be;Yt++){const Ue=$[Yt],Je=Ue.object,Te=Ue.geometry,Ae=Ue.material,Qt=Ue.group;if(Ae.side===Sa&&Je.layers.test(ft.layers)){const en=Ae.side;Ae.side=Qn,Ae.needsUpdate=!0,La(Je,lt,ft,Te,Ae,Qt),Ae.side=en,Ae.needsUpdate=!0,Kt=!0}}Kt===!0&&(B.updateMultisampleRenderTarget(Rt),B.updateRenderTargetMipmap(Rt))}U.setRenderTarget(Nt),U.setClearColor(et,ut),re!==void 0&&(ft.viewport=re),U.toneMapping=Ft}function yr(C,$,lt){const ft=$.isScene===!0?$.overrideMaterial:null;for(let J=0,Rt=C.length;J<Rt;J++){const Ut=C[J],Nt=Ut.object,Ft=Ut.geometry,re=Ut.group;let Kt=Ut.material;Kt.allowOverride===!0&&ft!==null&&(Kt=ft),Nt.layers.test(lt.layers)&&La(Nt,$,lt,Ft,Kt,re)}}function La(C,$,lt,ft,J,Rt){C.onBeforeRender(U,$,lt,ft,J,Rt),C.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(U,$,lt,ft,C,Rt),J.transparent===!0&&J.side===Sa&&J.forceSinglePass===!1?(J.side=Qn,J.needsUpdate=!0,U.renderBufferDirect(lt,$,ft,J,C,Rt),J.side=mr,J.needsUpdate=!0,U.renderBufferDirect(lt,$,ft,J,C,Rt),J.side=Sa):U.renderBufferDirect(lt,$,ft,J,C,Rt),C.onAfterRender(U,$,lt,ft,J,Rt)}function Oa(C,$,lt){$.isScene!==!0&&($=ye);const ft=Wt.get(C),J=x.state.lights,Rt=x.state.shadowsArray,Ut=J.state.version,Nt=Bt.getParameters(C,J.state,Rt,$,lt),Ft=Bt.getProgramCacheKey(Nt);let re=ft.programs;ft.environment=C.isMeshStandardMaterial?$.environment:null,ft.fog=$.fog,ft.envMap=(C.isMeshStandardMaterial?at:R).get(C.envMap||ft.environment),ft.envMapRotation=ft.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,re===void 0&&(C.addEventListener("dispose",ce),re=new Map,ft.programs=re);let Kt=re.get(Ft);if(Kt!==void 0){if(ft.currentProgram===Kt&&ft.lightsStateVersion===Ut)return Yi(C,Nt),Kt}else Nt.uniforms=Bt.getUniforms(C),C.onBeforeCompile(Nt,U),Kt=Bt.acquireProgram(Nt,Ft),re.set(Ft,Kt),ft.uniforms=Nt.uniforms;const Yt=ft.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Yt.clippingPlanes=Ct.uniform),Yi(C,Nt),ft.needsLights=cn(C),ft.lightsStateVersion=Ut,ft.needsLights&&(Yt.ambientLightColor.value=J.state.ambient,Yt.lightProbe.value=J.state.probe,Yt.directionalLights.value=J.state.directional,Yt.directionalLightShadows.value=J.state.directionalShadow,Yt.spotLights.value=J.state.spot,Yt.spotLightShadows.value=J.state.spotShadow,Yt.rectAreaLights.value=J.state.rectArea,Yt.ltc_1.value=J.state.rectAreaLTC1,Yt.ltc_2.value=J.state.rectAreaLTC2,Yt.pointLights.value=J.state.point,Yt.pointLightShadows.value=J.state.pointShadow,Yt.hemisphereLights.value=J.state.hemi,Yt.directionalShadowMap.value=J.state.directionalShadowMap,Yt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Yt.spotShadowMap.value=J.state.spotShadowMap,Yt.spotLightMatrix.value=J.state.spotLightMatrix,Yt.spotLightMap.value=J.state.spotLightMap,Yt.pointShadowMap.value=J.state.pointShadowMap,Yt.pointShadowMatrix.value=J.state.pointShadowMatrix),ft.currentProgram=Kt,ft.uniformsList=null,Kt}function qi(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=Au.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function Yi(C,$){const lt=Wt.get(C);lt.outputColorSpace=$.outputColorSpace,lt.batching=$.batching,lt.batchingColor=$.batchingColor,lt.instancing=$.instancing,lt.instancingColor=$.instancingColor,lt.instancingMorph=$.instancingMorph,lt.skinning=$.skinning,lt.morphTargets=$.morphTargets,lt.morphNormals=$.morphNormals,lt.morphColors=$.morphColors,lt.morphTargetsCount=$.morphTargetsCount,lt.numClippingPlanes=$.numClippingPlanes,lt.numIntersection=$.numClipIntersection,lt.vertexAlphas=$.vertexAlphas,lt.vertexTangents=$.vertexTangents,lt.toneMapping=$.toneMapping}function br(C,$,lt,ft,J){$.isScene!==!0&&($=ye),B.resetTextureUnits();const Rt=$.fog,Ut=ft.isMeshStandardMaterial?$.environment:null,Nt=z===null?U.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:so,Ft=(ft.isMeshStandardMaterial?at:R).get(ft.envMap||Ut),re=ft.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Kt=!!lt.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),Yt=!!lt.morphAttributes.position,be=!!lt.morphAttributes.normal,Ue=!!lt.morphAttributes.color;let Je=pr;ft.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Je=U.toneMapping);const Te=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Ae=Te!==void 0?Te.length:0,Qt=Wt.get(ft),en=x.state.lights;if(dt===!0&&(_t===!0||C!==E)){const Mn=C===E&&ft.id===w;Ct.setState(ft,C,Mn)}let Ce=!1;ft.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==en.state.version||Qt.outputColorSpace!==Nt||J.isBatchedMesh&&Qt.batching===!1||!J.isBatchedMesh&&Qt.batching===!0||J.isBatchedMesh&&Qt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Qt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Qt.instancing===!1||!J.isInstancedMesh&&Qt.instancing===!0||J.isSkinnedMesh&&Qt.skinning===!1||!J.isSkinnedMesh&&Qt.skinning===!0||J.isInstancedMesh&&Qt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Qt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Qt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Qt.instancingMorph===!1&&J.morphTexture!==null||Qt.envMap!==Ft||ft.fog===!0&&Qt.fog!==Rt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Ct.numPlanes||Qt.numIntersection!==Ct.numIntersection)||Qt.vertexAlphas!==re||Qt.vertexTangents!==Kt||Qt.morphTargets!==Yt||Qt.morphNormals!==be||Qt.morphColors!==Ue||Qt.toneMapping!==Je||Qt.morphTargetsCount!==Ae)&&(Ce=!0):(Ce=!0,Qt.__version=ft.version);let Ln=Qt.currentProgram;Ce===!0&&(Ln=Oa(ft,$,J));let Ba=!1,Ke=!1,Ki=!1;const je=Ln.getUniforms(),On=Qt.uniforms;if(Zt.useProgram(Ln.program)&&(Ba=!0,Ke=!0,Ki=!0),ft.id!==w&&(w=ft.id,Ke=!0),Ba||E!==C){Zt.buffers.depth.getReversed()?(Et.copy(C.projectionMatrix),$2(Et),J2(Et),je.setValue(H,"projectionMatrix",Et)):je.setValue(H,"projectionMatrix",C.projectionMatrix),je.setValue(H,"viewMatrix",C.matrixWorldInverse);const Cn=je.map.cameraPosition;Cn!==void 0&&Cn.setValue(H,jt.setFromMatrixPosition(C.matrixWorld)),$t.logarithmicDepthBuffer&&je.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&je.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,Ke=!0,Ki=!0)}if(J.isSkinnedMesh){je.setOptional(H,J,"bindMatrix"),je.setOptional(H,J,"bindMatrixInverse");const Mn=J.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),je.setValue(H,"boneTexture",Mn.boneTexture,B))}J.isBatchedMesh&&(je.setOptional(H,J,"batchingTexture"),je.setValue(H,"batchingTexture",J._matricesTexture,B),je.setOptional(H,J,"batchingIdTexture"),je.setValue(H,"batchingIdTexture",J._indirectTexture,B),je.setOptional(H,J,"batchingColorTexture"),J._colorsTexture!==null&&je.setValue(H,"batchingColorTexture",J._colorsTexture,B));const vn=lt.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&ne.update(J,lt,Ln),(Ke||Qt.receiveShadow!==J.receiveShadow)&&(Qt.receiveShadow=J.receiveShadow,je.setValue(H,"receiveShadow",J.receiveShadow)),ft.isMeshGouraudMaterial&&ft.envMap!==null&&(On.envMap.value=Ft,On.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),ft.isMeshStandardMaterial&&ft.envMap===null&&$.environment!==null&&(On.envMapIntensity.value=$.environmentIntensity),Ke&&(je.setValue(H,"toneMappingExposure",U.toneMappingExposure),Qt.needsLights&&Pa(On,Ki),Rt&&ft.fog===!0&&Dt.refreshFogUniforms(On,Rt),Dt.refreshMaterialUniforms(On,ft,X,q,x.state.transmissionRenderTarget[C.id]),Au.upload(H,qi(Qt),On,B)),ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(Au.upload(H,qi(Qt),On,B),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&je.setValue(H,"center",J.center),je.setValue(H,"modelViewMatrix",J.modelViewMatrix),je.setValue(H,"normalMatrix",J.normalMatrix),je.setValue(H,"modelMatrix",J.matrixWorld),ft.isShaderMaterial||ft.isRawShaderMaterial){const Mn=ft.uniformsGroups;for(let Cn=0,Bi=Mn.length;Cn<Bi;Cn++){const Qi=Mn[Cn];K.update(Qi,Ln),K.bind(Qi,Ln)}}return Ln}function Pa(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function cn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(C,$,lt){const ft=Wt.get(C);ft.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),Wt.get(C.texture).__webglTexture=$,Wt.get(C.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:lt,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const lt=Wt.get(C);lt.__webglFramebuffer=$,lt.__useDefaultFramebuffer=$===void 0};const Bl=H.createFramebuffer();this.setRenderTarget=function(C,$=0,lt=0){z=C,P=$,D=lt;let ft=!0,J=null,Rt=!1,Ut=!1;if(C){const Ft=Wt.get(C);if(Ft.__useDefaultFramebuffer!==void 0)Zt.bindFramebuffer(H.FRAMEBUFFER,null),ft=!1;else if(Ft.__webglFramebuffer===void 0)B.setupRenderTarget(C);else if(Ft.__hasExternalTextures)B.rebindTextures(C,Wt.get(C.texture).__webglTexture,Wt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Yt=C.depthTexture;if(Ft.__boundDepthTexture!==Yt){if(Yt!==null&&Wt.has(Yt)&&(C.width!==Yt.image.width||C.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(C)}}const re=C.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Ut=!0);const Kt=Wt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Kt[$])?J=Kt[$][lt]:J=Kt[$],Rt=!0):C.samples>0&&B.useMultisampledRTT(C)===!1?J=Wt.get(C).__webglMultisampledFramebuffer:Array.isArray(Kt)?J=Kt[lt]:J=Kt,L.copy(C.viewport),k.copy(C.scissor),W=C.scissorTest}else L.copy(tt).multiplyScalar(X).floor(),k.copy(vt).multiplyScalar(X).floor(),W=pt;if(lt!==0&&(J=Bl),Zt.bindFramebuffer(H.FRAMEBUFFER,J)&&ft&&Zt.drawBuffers(C,J),Zt.viewport(L),Zt.scissor(k),Zt.setScissorTest(W),Rt){const Ft=Wt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ft.__webglTexture,lt)}else if(Ut){const Ft=Wt.get(C.texture),re=$;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ft.__webglTexture,lt,re)}else if(C!==null&&lt!==0){const Ft=Wt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ft.__webglTexture,lt)}w=-1},this.readRenderTargetPixels=function(C,$,lt,ft,J,Rt,Ut){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){Zt.bindFramebuffer(H.FRAMEBUFFER,Nt);try{const Ft=C.texture,re=Ft.format,Kt=Ft.type;if(!$t.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-ft&&lt>=0&&lt<=C.height-J&&H.readPixels($,lt,ft,J,le.convert(re),le.convert(Kt),Rt)}finally{const Ft=z!==null?Wt.get(z).__webglFramebuffer:null;Zt.bindFramebuffer(H.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(C,$,lt,ft,J,Rt,Ut){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if($>=0&&$<=C.width-ft&&lt>=0&&lt<=C.height-J){Zt.bindFramebuffer(H.FRAMEBUFFER,Nt);const Ft=C.texture,re=Ft.format,Kt=Ft.type;if(!$t.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Yt),H.bufferData(H.PIXEL_PACK_BUFFER,Rt.byteLength,H.STREAM_READ),H.readPixels($,lt,ft,J,le.convert(re),le.convert(Kt),0);const be=z!==null?Wt.get(z).__webglFramebuffer:null;Zt.bindFramebuffer(H.FRAMEBUFFER,be);const Ue=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Q2(H,Ue,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Yt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Rt),H.deleteBuffer(Yt),H.deleteSync(Ue),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,lt=0){const ft=Math.pow(2,-lt),J=Math.floor(C.image.width*ft),Rt=Math.floor(C.image.height*ft),Ut=$!==null?$.x:0,Nt=$!==null?$.y:0;B.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,lt,0,0,Ut,Nt,J,Rt),Zt.unbindTexture()};const zl=H.createFramebuffer(),Zi=H.createFramebuffer();this.copyTextureToTexture=function(C,$,lt=null,ft=null,J=0,Rt=null){Rt===null&&(J!==0?(Tu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Rt=J,J=0):Rt=0);let Ut,Nt,Ft,re,Kt,Yt,be,Ue,Je;const Te=C.isCompressedTexture?C.mipmaps[Rt]:C.image;if(lt!==null)Ut=lt.max.x-lt.min.x,Nt=lt.max.y-lt.min.y,Ft=lt.isBox3?lt.max.z-lt.min.z:1,re=lt.min.x,Kt=lt.min.y,Yt=lt.isBox3?lt.min.z:0;else{const vn=Math.pow(2,-J);Ut=Math.floor(Te.width*vn),Nt=Math.floor(Te.height*vn),C.isDataArrayTexture?Ft=Te.depth:C.isData3DTexture?Ft=Math.floor(Te.depth*vn):Ft=1,re=0,Kt=0,Yt=0}ft!==null?(be=ft.x,Ue=ft.y,Je=ft.z):(be=0,Ue=0,Je=0);const Ae=le.convert($.format),Qt=le.convert($.type);let en;$.isData3DTexture?(B.setTexture3D($,0),en=H.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(B.setTexture2DArray($,0),en=H.TEXTURE_2D_ARRAY):(B.setTexture2D($,0),en=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,$.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,$.unpackAlignment);const Ce=H.getParameter(H.UNPACK_ROW_LENGTH),Ln=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ba=H.getParameter(H.UNPACK_SKIP_PIXELS),Ke=H.getParameter(H.UNPACK_SKIP_ROWS),Ki=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Te.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Te.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,re),H.pixelStorei(H.UNPACK_SKIP_ROWS,Kt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Yt);const je=C.isDataArrayTexture||C.isData3DTexture,On=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const vn=Wt.get(C),Mn=Wt.get($),Cn=Wt.get(vn.__renderTarget),Bi=Wt.get(Mn.__renderTarget);Zt.bindFramebuffer(H.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Zt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Qi=0;Qi<Ft;Qi++)je&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Wt.get(C).__webglTexture,J,Yt+Qi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Wt.get($).__webglTexture,Rt,Je+Qi)),H.blitFramebuffer(re,Kt,Ut,Nt,be,Ue,Ut,Nt,H.DEPTH_BUFFER_BIT,H.NEAREST);Zt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||Wt.has(C)){const vn=Wt.get(C),Mn=Wt.get($);Zt.bindFramebuffer(H.READ_FRAMEBUFFER,zl),Zt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Zi);for(let Cn=0;Cn<Ft;Cn++)je?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,vn.__webglTexture,J,Yt+Cn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,vn.__webglTexture,J),On?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Mn.__webglTexture,Rt,Je+Cn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Mn.__webglTexture,Rt),J!==0?H.blitFramebuffer(re,Kt,Ut,Nt,be,Ue,Ut,Nt,H.COLOR_BUFFER_BIT,H.NEAREST):On?H.copyTexSubImage3D(en,Rt,be,Ue,Je+Cn,re,Kt,Ut,Nt):H.copyTexSubImage2D(en,Rt,be,Ue,re,Kt,Ut,Nt);Zt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else On?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(en,Rt,be,Ue,Je,Ut,Nt,Ft,Ae,Qt,Te.data):$.isCompressedArrayTexture?H.compressedTexSubImage3D(en,Rt,be,Ue,Je,Ut,Nt,Ft,Ae,Te.data):H.texSubImage3D(en,Rt,be,Ue,Je,Ut,Nt,Ft,Ae,Qt,Te):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Rt,be,Ue,Ut,Nt,Ae,Qt,Te.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Rt,be,Ue,Te.width,Te.height,Ae,Te.data):H.texSubImage2D(H.TEXTURE_2D,Rt,be,Ue,Ut,Nt,Ae,Qt,Te);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ce),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ln),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ba),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ke),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ki),Rt===0&&$.generateMipmaps&&H.generateMipmap(en),Zt.unbindTexture()},this.copyTextureToTexture3D=function(C,$,lt=null,ft=null,J=0){return Tu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,$,lt,ft,J)},this.initRenderTarget=function(C){Wt.get(C).__webglFramebuffer===void 0&&B.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?B.setTextureCube(C,0):C.isData3DTexture?B.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?B.setTexture2DArray(C,0):B.setTexture2D(C,0),Zt.unbindTexture()},this.resetState=function(){P=0,D=0,z=null,Zt.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),n.unpackColorSpace=Le._getUnpackColorSpace()}}const{min:mC,max:gC}=Math,$r=(a,t=0,n=1)=>mC(gC(t,a),n),gm=a=>{a._clipped=!1,a._unclipped=a.slice(0);for(let t=0;t<=3;t++)t<3?((a[t]<0||a[t]>255)&&(a._clipped=!0),a[t]=$r(a[t],0,255)):t===3&&(a[t]=$r(a[t],0,1));return a},ty={};for(let a of["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"])ty[`[object ${a}]`]=a.toLowerCase();function xe(a){return ty[Object.prototype.toString.call(a)]||"object"}const fe=(a,t=null)=>a.length>=3?Array.prototype.slice.call(a):xe(a[0])=="object"&&t?t.split("").filter(n=>a[0][n]!==void 0).map(n=>a[0][n]):a[0].slice(0),mo=a=>{if(a.length<2)return null;const t=a.length-1;return xe(a[t])=="string"?a[t].toLowerCase():null},{PI:Wu,min:ey,max:ny}=Math,Si=a=>Math.round(a*100)/100,Xp=a=>Math.round(a*100)/100,xa=Wu*2,Vh=Wu/3,vC=Wu/180,_C=180/Wu;function iy(a){return[...a.slice(0,3).reverse(),...a.slice(3)]}const ue={format:{},autodetect:[]};class wt{constructor(...t){const n=this;if(xe(t[0])==="object"&&t[0].constructor&&t[0].constructor===this.constructor)return t[0];let r=mo(t),o=!1;if(!r){o=!0,ue.sorted||(ue.autodetect=ue.autodetect.sort((c,u)=>u.p-c.p),ue.sorted=!0);for(let c of ue.autodetect)if(r=c.test(...t),r)break}if(ue.format[r]){const c=ue.format[r].apply(null,o?t:t.slice(0,-1));n._rgb=gm(c)}else throw new Error("unknown format: "+t);n._rgb.length===3&&n._rgb.push(1)}toString(){return xe(this.hex)=="function"?this.hex():`[${this._rgb.join(",")}]`}}const xC="3.1.2",Ee=(...a)=>new wt(...a);Ee.version=xC;const lo={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},yC=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,bC=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,ay=a=>{if(a.match(yC)){(a.length===4||a.length===7)&&(a=a.substr(1)),a.length===3&&(a=a.split(""),a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]);const t=parseInt(a,16),n=t>>16,r=t>>8&255,o=t&255;return[n,r,o,1]}if(a.match(bC)){(a.length===5||a.length===9)&&(a=a.substr(1)),a.length===4&&(a=a.split(""),a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]+a[3]+a[3]);const t=parseInt(a,16),n=t>>24&255,r=t>>16&255,o=t>>8&255,c=Math.round((t&255)/255*100)/100;return[n,r,o,c]}throw new Error(`unknown hex color: ${a}`)},{round:mu}=Math,ry=(...a)=>{let[t,n,r,o]=fe(a,"rgba"),c=mo(a)||"auto";o===void 0&&(o=1),c==="auto"&&(c=o<1?"rgba":"rgb"),t=mu(t),n=mu(n),r=mu(r);let d="000000"+(t<<16|n<<8|r).toString(16);d=d.substr(d.length-6);let h="0"+mu(o*255).toString(16);switch(h=h.substr(h.length-2),c.toLowerCase()){case"rgba":return`#${d}${h}`;case"argb":return`#${h}${d}`;default:return`#${d}`}};wt.prototype.name=function(){const a=ry(this._rgb,"rgb");for(let t of Object.keys(lo))if(lo[t]===a)return t.toLowerCase();return a};ue.format.named=a=>{if(a=a.toLowerCase(),lo[a])return ay(lo[a]);throw new Error("unknown color name: "+a)};ue.autodetect.push({p:5,test:(a,...t)=>{if(!t.length&&xe(a)==="string"&&lo[a.toLowerCase()])return"named"}});wt.prototype.alpha=function(a,t=!1){return a!==void 0&&xe(a)==="number"?t?(this._rgb[3]=a,this):new wt([this._rgb[0],this._rgb[1],this._rgb[2],a],"rgb"):this._rgb[3]};wt.prototype.clipped=function(){return this._rgb._clipped||!1};const ji={Kn:18,labWhitePoint:"d65",Xn:.95047,Yn:1,Zn:1.08883,kE:216/24389,kKE:8,kK:24389/27,RefWhiteRGB:{X:.95047,Y:1,Z:1.08883},MtxRGB2XYZ:{m00:.4124564390896922,m01:.21267285140562253,m02:.0193338955823293,m10:.357576077643909,m11:.715152155287818,m12:.11919202588130297,m20:.18043748326639894,m21:.07217499330655958,m22:.9503040785363679},MtxXYZ2RGB:{m00:3.2404541621141045,m01:-.9692660305051868,m02:.055643430959114726,m10:-1.5371385127977166,m11:1.8760108454466942,m12:-.2040259135167538,m20:-.498531409556016,m21:.041556017530349834,m22:1.0572251882231791},As:.9414285350000001,Bs:1.040417467,Cs:1.089532651,MtxAdaptMa:{m00:.8951,m01:-.7502,m02:.0389,m10:.2664,m11:1.7135,m12:-.0685,m20:-.1614,m21:.0367,m22:1.0296},MtxAdaptMaI:{m00:.9869929054667123,m01:.43230526972339456,m02:-.008528664575177328,m10:-.14705425642099013,m11:.5183602715367776,m12:.04004282165408487,m20:.15996265166373125,m21:.0492912282128556,m22:.9684866957875502}},SC=new Map([["a",[1.0985,.35585]],["b",[1.0985,.35585]],["c",[.98074,1.18232]],["d50",[.96422,.82521]],["d55",[.95682,.92149]],["d65",[.95047,1.08883]],["e",[1,1,1]],["f2",[.99186,.67393]],["f7",[.95041,1.08747]],["f11",[1.00962,.6435]],["icc",[.96422,.82521]]]);function Ta(a){const t=SC.get(String(a).toLowerCase());if(!t)throw new Error("unknown Lab illuminant "+a);ji.labWhitePoint=a,ji.Xn=t[0],ji.Zn=t[1]}function Rl(){return ji.labWhitePoint}const vm=(...a)=>{a=fe(a,"lab");const[t,n,r]=a,[o,c,u]=MC(t,n,r),[d,h,p]=sy(o,c,u);return[d,h,p,a.length>3?a[3]:1]},MC=(a,t,n)=>{const{kE:r,kK:o,kKE:c,Xn:u,Yn:d,Zn:h}=ji,p=(a+16)/116,g=.002*t+p,v=p-.005*n,_=g*g*g,b=v*v*v,M=_>r?_:(116*g-16)/o,T=a>c?Math.pow((a+16)/116,3):a/o,y=b>r?b:(116*v-16)/o,x=M*u,F=T*d,N=y*h;return[x,F,N]},kh=a=>{const t=Math.sign(a);return a=Math.abs(a),(a<=.0031308?a*12.92:1.055*Math.pow(a,1/2.4)-.055)*t},sy=(a,t,n)=>{const{MtxAdaptMa:r,MtxAdaptMaI:o,MtxXYZ2RGB:c,RefWhiteRGB:u,Xn:d,Yn:h,Zn:p}=ji,g=d*r.m00+h*r.m10+p*r.m20,v=d*r.m01+h*r.m11+p*r.m21,_=d*r.m02+h*r.m12+p*r.m22,b=u.X*r.m00+u.Y*r.m10+u.Z*r.m20,M=u.X*r.m01+u.Y*r.m11+u.Z*r.m21,T=u.X*r.m02+u.Y*r.m12+u.Z*r.m22,y=(a*r.m00+t*r.m10+n*r.m20)*(b/g),x=(a*r.m01+t*r.m11+n*r.m21)*(M/v),F=(a*r.m02+t*r.m12+n*r.m22)*(T/_),N=y*o.m00+x*o.m10+F*o.m20,U=y*o.m01+x*o.m11+F*o.m21,G=y*o.m02+x*o.m12+F*o.m22,P=kh(N*c.m00+U*c.m10+G*c.m20),D=kh(N*c.m01+U*c.m11+G*c.m21),z=kh(N*c.m02+U*c.m12+G*c.m22);return[P*255,D*255,z*255]},_m=(...a)=>{const[t,n,r,...o]=fe(a,"rgb"),[c,u,d]=oy(t,n,r),[h,p,g]=EC(c,u,d);return[h,p,g,...o.length>0&&o[0]<1?[o[0]]:[]]};function EC(a,t,n){const{Xn:r,Yn:o,Zn:c,kE:u,kK:d}=ji,h=a/r,p=t/o,g=n/c,v=h>u?Math.pow(h,1/3):(d*h+16)/116,_=p>u?Math.pow(p,1/3):(d*p+16)/116,b=g>u?Math.pow(g,1/3):(d*g+16)/116;return[116*_-16,500*(v-_),200*(_-b)]}function Xh(a){const t=Math.sign(a);return a=Math.abs(a),(a<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4))*t}const oy=(a,t,n)=>{a=Xh(a/255),t=Xh(t/255),n=Xh(n/255);const{MtxRGB2XYZ:r,MtxAdaptMa:o,MtxAdaptMaI:c,Xn:u,Yn:d,Zn:h,As:p,Bs:g,Cs:v}=ji;let _=a*r.m00+t*r.m10+n*r.m20,b=a*r.m01+t*r.m11+n*r.m21,M=a*r.m02+t*r.m12+n*r.m22;const T=u*o.m00+d*o.m10+h*o.m20,y=u*o.m01+d*o.m11+h*o.m21,x=u*o.m02+d*o.m12+h*o.m22;let F=_*o.m00+b*o.m10+M*o.m20,N=_*o.m01+b*o.m11+M*o.m21,U=_*o.m02+b*o.m12+M*o.m22;return F*=T/p,N*=y/g,U*=x/v,_=F*c.m00+N*c.m10+U*c.m20,b=F*c.m01+N*c.m11+U*c.m21,M=F*c.m02+N*c.m12+U*c.m22,[_,b,M]};wt.prototype.lab=function(){return _m(this._rgb)};const TC=(...a)=>new wt(...a,"lab");Object.assign(Ee,{lab:TC,getLabWhitePoint:Rl,setLabWhitePoint:Ta});ue.format.lab=vm;ue.autodetect.push({p:2,test:(...a)=>{if(a=fe(a,"lab"),xe(a)==="array"&&a.length===3)return"lab"}});wt.prototype.darken=function(a=1){const t=this,n=t.lab();return n[0]-=ji.Kn*a,new wt(n,"lab").alpha(t.alpha(),!0)};wt.prototype.brighten=function(a=1){return this.darken(-a)};wt.prototype.darker=wt.prototype.darken;wt.prototype.brighter=wt.prototype.brighten;wt.prototype.get=function(a){const[t,n]=a.split("."),r=this[t]();if(n){const o=t.indexOf(n)-(t.substr(0,2)==="ok"?2:0);if(o>-1)return r[o];throw new Error(`unknown channel ${n} in mode ${t}`)}else return r};const{pow:AC}=Math,RC=1e-7,wC=20;wt.prototype.luminance=function(a,t="rgb"){if(a!==void 0&&xe(a)==="number"){if(a===0)return new wt([0,0,0,this._rgb[3]],"rgb");if(a===1)return new wt([255,255,255,this._rgb[3]],"rgb");let n=this.luminance(),r=wC;const o=(u,d)=>{const h=u.interpolate(d,.5,t),p=h.luminance();return Math.abs(a-p)<RC||!r--?h:p>a?o(u,h):o(h,d)},c=(n>a?o(new wt([0,0,0]),this):o(this,new wt([255,255,255]))).rgb();return new wt([...c,this._rgb[3]])}return CC(...this._rgb.slice(0,3))};const CC=(a,t,n)=>(a=jh(a),t=jh(t),n=jh(n),.2126*a+.7152*t+.0722*n),jh=a=>(a/=255,a<=.03928?a/12.92:AC((a+.055)/1.055,2.4)),Gn={},co=(a,t,n=.5,...r)=>{let o=r[0]||"lrgb";if(!Gn[o]&&!r.length&&(o=Object.keys(Gn)[0]),!Gn[o])throw new Error(`interpolation mode ${o} is not defined`);return xe(a)!=="object"&&(a=new wt(a)),xe(t)!=="object"&&(t=new wt(t)),Gn[o](a,t,n).alpha(a.alpha()+n*(t.alpha()-a.alpha()))};wt.prototype.mix=wt.prototype.interpolate=function(a,t=.5,...n){return co(this,a,t,...n)};wt.prototype.premultiply=function(a=!1){const t=this._rgb,n=t[3];return a?(this._rgb=[t[0]*n,t[1]*n,t[2]*n,n],this):new wt([t[0]*n,t[1]*n,t[2]*n,n],"rgb")};const{sin:DC,cos:UC}=Math,ly=(...a)=>{let[t,n,r]=fe(a,"lch");return isNaN(r)&&(r=0),r=r*vC,[t,UC(r)*n,DC(r)*n]},xm=(...a)=>{a=fe(a,"lch");const[t,n,r]=a,[o,c,u]=ly(t,n,r),[d,h,p]=vm(o,c,u);return[d,h,p,a.length>3?a[3]:1]},NC=(...a)=>{const t=iy(fe(a,"hcl"));return xm(...t)},{sqrt:LC,atan2:OC,round:PC}=Math,cy=(...a)=>{const[t,n,r]=fe(a,"lab"),o=LC(n*n+r*r);let c=(OC(r,n)*_C+360)%360;return PC(o*1e4)===0&&(c=Number.NaN),[t,o,c]},ym=(...a)=>{const[t,n,r,...o]=fe(a,"rgb"),[c,u,d]=_m(t,n,r),[h,p,g]=cy(c,u,d);return[h,p,g,...o.length>0&&o[0]<1?[o[0]]:[]]};wt.prototype.lch=function(){return ym(this._rgb)};wt.prototype.hcl=function(){return iy(ym(this._rgb))};const BC=(...a)=>new wt(...a,"lch"),zC=(...a)=>new wt(...a,"hcl");Object.assign(Ee,{lch:BC,hcl:zC});ue.format.lch=xm;ue.format.hcl=NC;["lch","hcl"].forEach(a=>ue.autodetect.push({p:2,test:(...t)=>{if(t=fe(t,a),xe(t)==="array"&&t.length===3)return a}}));wt.prototype.saturate=function(a=1){const t=this,n=t.lch();return n[1]+=ji.Kn*a,n[1]<0&&(n[1]=0),new wt(n,"lch").alpha(t.alpha(),!0)};wt.prototype.desaturate=function(a=1){return this.saturate(-a)};wt.prototype.set=function(a,t,n=!1){const[r,o]=a.split("."),c=this[r]();if(o){const u=r.indexOf(o)-(r.substr(0,2)==="ok"?2:0);if(u>-1){if(xe(t)=="string")switch(t.charAt(0)){case"+":c[u]+=+t;break;case"-":c[u]+=+t;break;case"*":c[u]*=+t.substr(1);break;case"/":c[u]/=+t.substr(1);break;default:c[u]=+t}else if(xe(t)==="number")c[u]=t;else throw new Error("unsupported value for Color.set");const d=new wt(c,r);return n?(this._rgb=d._rgb,this):d}throw new Error(`unknown channel ${o} in mode ${r}`)}else return c};wt.prototype.tint=function(a=.5,...t){return co(this,"white",a,...t)};wt.prototype.shade=function(a=.5,...t){return co(this,"black",a,...t)};const IC=(a,t,n)=>{const r=a._rgb,o=t._rgb;return new wt(r[0]+n*(o[0]-r[0]),r[1]+n*(o[1]-r[1]),r[2]+n*(o[2]-r[2]),"rgb")};Gn.rgb=IC;const{sqrt:Wh,pow:Zs}=Math,FC=(a,t,n)=>{const[r,o,c]=a._rgb,[u,d,h]=t._rgb;return new wt(Wh(Zs(r,2)*(1-n)+Zs(u,2)*n),Wh(Zs(o,2)*(1-n)+Zs(d,2)*n),Wh(Zs(c,2)*(1-n)+Zs(h,2)*n),"rgb")};Gn.lrgb=FC;const HC=(a,t,n)=>{const r=a.lab(),o=t.lab();return new wt(r[0]+n*(o[0]-r[0]),r[1]+n*(o[1]-r[1]),r[2]+n*(o[2]-r[2]),"lab")};Gn.lab=HC;const go=(a,t,n,r)=>{let o,c;r==="hsl"?(o=a.hsl(),c=t.hsl()):r==="hsv"?(o=a.hsv(),c=t.hsv()):r==="hcg"?(o=a.hcg(),c=t.hcg()):r==="hsi"?(o=a.hsi(),c=t.hsi()):r==="lch"||r==="hcl"?(r="hcl",o=a.hcl(),c=t.hcl()):r==="oklch"&&(o=a.oklch().reverse(),c=t.oklch().reverse());let u,d,h,p,g,v;(r.substr(0,1)==="h"||r==="oklch")&&([u,h,g]=o,[d,p,v]=c);let _,b,M,T;return!isNaN(u)&&!isNaN(d)?(d>u&&d-u>180?T=d-(u+360):d<u&&u-d>180?T=d+360-u:T=d-u,b=u+n*T):isNaN(u)?isNaN(d)?b=Number.NaN:(b=d,(g==1||g==0)&&r!="hsv"&&(_=p)):(b=u,(v==1||v==0)&&r!="hsv"&&(_=h)),_===void 0&&(_=h+n*(p-h)),M=g+n*(v-g),r==="oklch"?new wt([M,_,b],r):new wt([b,_,M],r)},uy=(a,t,n)=>go(a,t,n,"lch");Gn.lch=uy;Gn.hcl=uy;const GC=a=>{if(xe(a)=="number"&&a>=0&&a<=16777215){const t=a>>16,n=a>>8&255,r=a&255;return[t,n,r,1]}throw new Error("unknown num color: "+a)},VC=(...a)=>{const[t,n,r]=fe(a,"rgb");return(t<<16)+(n<<8)+r};wt.prototype.num=function(){return VC(this._rgb)};const kC=(...a)=>new wt(...a,"num");Object.assign(Ee,{num:kC});ue.format.num=GC;ue.autodetect.push({p:5,test:(...a)=>{if(a.length===1&&xe(a[0])==="number"&&a[0]>=0&&a[0]<=16777215)return"num"}});const XC=(a,t,n)=>{const r=a.num(),o=t.num();return new wt(r+n*(o-r),"num")};Gn.num=XC;const{floor:jC}=Math,WC=(...a)=>{a=fe(a,"hcg");let[t,n,r]=a,o,c,u;r=r*255;const d=n*255;if(n===0)o=c=u=r;else{t===360&&(t=0),t>360&&(t-=360),t<0&&(t+=360),t/=60;const h=jC(t),p=t-h,g=r*(1-n),v=g+d*(1-p),_=g+d*p,b=g+d;switch(h){case 0:[o,c,u]=[b,_,g];break;case 1:[o,c,u]=[v,b,g];break;case 2:[o,c,u]=[g,b,_];break;case 3:[o,c,u]=[g,v,b];break;case 4:[o,c,u]=[_,g,b];break;case 5:[o,c,u]=[b,g,v];break}}return[o,c,u,a.length>3?a[3]:1]},qC=(...a)=>{const[t,n,r]=fe(a,"rgb"),o=ey(t,n,r),c=ny(t,n,r),u=c-o,d=u*100/255,h=o/(255-u)*100;let p;return u===0?p=Number.NaN:(t===c&&(p=(n-r)/u),n===c&&(p=2+(r-t)/u),r===c&&(p=4+(t-n)/u),p*=60,p<0&&(p+=360)),[p,d,h]};wt.prototype.hcg=function(){return qC(this._rgb)};const YC=(...a)=>new wt(...a,"hcg");Ee.hcg=YC;ue.format.hcg=WC;ue.autodetect.push({p:1,test:(...a)=>{if(a=fe(a,"hcg"),xe(a)==="array"&&a.length===3)return"hcg"}});const ZC=(a,t,n)=>go(a,t,n,"hcg");Gn.hcg=ZC;const{cos:Ks}=Math,KC=(...a)=>{a=fe(a,"hsi");let[t,n,r]=a,o,c,u;return isNaN(t)&&(t=0),isNaN(n)&&(n=0),t>360&&(t-=360),t<0&&(t+=360),t/=360,t<1/3?(u=(1-n)/3,o=(1+n*Ks(xa*t)/Ks(Vh-xa*t))/3,c=1-(u+o)):t<2/3?(t-=1/3,o=(1-n)/3,c=(1+n*Ks(xa*t)/Ks(Vh-xa*t))/3,u=1-(o+c)):(t-=2/3,c=(1-n)/3,u=(1+n*Ks(xa*t)/Ks(Vh-xa*t))/3,o=1-(c+u)),o=$r(r*o*3),c=$r(r*c*3),u=$r(r*u*3),[o*255,c*255,u*255,a.length>3?a[3]:1]},{min:QC,sqrt:$C,acos:JC}=Math,tD=(...a)=>{let[t,n,r]=fe(a,"rgb");t/=255,n/=255,r/=255;let o;const c=QC(t,n,r),u=(t+n+r)/3,d=u>0?1-c/u:0;return d===0?o=NaN:(o=(t-n+(t-r))/2,o/=$C((t-n)*(t-n)+(t-r)*(n-r)),o=JC(o),r>n&&(o=xa-o),o/=xa),[o*360,d,u]};wt.prototype.hsi=function(){return tD(this._rgb)};const eD=(...a)=>new wt(...a,"hsi");Ee.hsi=eD;ue.format.hsi=KC;ue.autodetect.push({p:2,test:(...a)=>{if(a=fe(a,"hsi"),xe(a)==="array"&&a.length===3)return"hsi"}});const nD=(a,t,n)=>go(a,t,n,"hsi");Gn.hsi=nD;const jp=(...a)=>{a=fe(a,"hsl");const[t,n,r]=a;let o,c,u;if(n===0)o=c=u=r*255;else{const d=[0,0,0],h=[0,0,0],p=r<.5?r*(1+n):r+n-r*n,g=2*r-p,v=t/360;d[0]=v+1/3,d[1]=v,d[2]=v-1/3;for(let _=0;_<3;_++)d[_]<0&&(d[_]+=1),d[_]>1&&(d[_]-=1),6*d[_]<1?h[_]=g+(p-g)*6*d[_]:2*d[_]<1?h[_]=p:3*d[_]<2?h[_]=g+(p-g)*(2/3-d[_])*6:h[_]=g;[o,c,u]=[h[0]*255,h[1]*255,h[2]*255]}return a.length>3?[o,c,u,a[3]]:[o,c,u,1]},fy=(...a)=>{a=fe(a,"rgba");let[t,n,r]=a;t/=255,n/=255,r/=255;const o=ey(t,n,r),c=ny(t,n,r),u=(c+o)/2;let d,h;return c===o?(d=0,h=Number.NaN):d=u<.5?(c-o)/(c+o):(c-o)/(2-c-o),t==c?h=(n-r)/(c-o):n==c?h=2+(r-t)/(c-o):r==c&&(h=4+(t-n)/(c-o)),h*=60,h<0&&(h+=360),a.length>3&&a[3]!==void 0?[h,d,u,a[3]]:[h,d,u]};wt.prototype.hsl=function(){return fy(this._rgb)};const iD=(...a)=>new wt(...a,"hsl");Ee.hsl=iD;ue.format.hsl=jp;ue.autodetect.push({p:2,test:(...a)=>{if(a=fe(a,"hsl"),xe(a)==="array"&&a.length===3)return"hsl"}});const aD=(a,t,n)=>go(a,t,n,"hsl");Gn.hsl=aD;const{floor:rD}=Math,sD=(...a)=>{a=fe(a,"hsv");let[t,n,r]=a,o,c,u;if(r*=255,n===0)o=c=u=r;else{t===360&&(t=0),t>360&&(t-=360),t<0&&(t+=360),t/=60;const d=rD(t),h=t-d,p=r*(1-n),g=r*(1-n*h),v=r*(1-n*(1-h));switch(d){case 0:[o,c,u]=[r,v,p];break;case 1:[o,c,u]=[g,r,p];break;case 2:[o,c,u]=[p,r,v];break;case 3:[o,c,u]=[p,g,r];break;case 4:[o,c,u]=[v,p,r];break;case 5:[o,c,u]=[r,p,g];break}}return[o,c,u,a.length>3?a[3]:1]},{min:oD,max:lD}=Math,cD=(...a)=>{a=fe(a,"rgb");let[t,n,r]=a;const o=oD(t,n,r),c=lD(t,n,r),u=c-o;let d,h,p;return p=c/255,c===0?(d=Number.NaN,h=0):(h=u/c,t===c&&(d=(n-r)/u),n===c&&(d=2+(r-t)/u),r===c&&(d=4+(t-n)/u),d*=60,d<0&&(d+=360)),[d,h,p]};wt.prototype.hsv=function(){return cD(this._rgb)};const uD=(...a)=>new wt(...a,"hsv");Ee.hsv=uD;ue.format.hsv=sD;ue.autodetect.push({p:2,test:(...a)=>{if(a=fe(a,"hsv"),xe(a)==="array"&&a.length===3)return"hsv"}});const fD=(a,t,n)=>go(a,t,n,"hsv");Gn.hsv=fD;function Ou(a,t){let n=a.length;Array.isArray(a[0])||(a=[a]),Array.isArray(t[0])||(t=t.map(u=>[u]));let r=t[0].length,o=t[0].map((u,d)=>t.map(h=>h[d])),c=a.map(u=>o.map(d=>Array.isArray(u)?u.reduce((h,p,g)=>h+p*(d[g]||0),0):d.reduce((h,p)=>h+p*u,0)));return n===1&&(c=c[0]),r===1?c.map(u=>u[0]):c}const bm=(...a)=>{a=fe(a,"lab");const[t,n,r,...o]=a,[c,u,d]=dD([t,n,r]),[h,p,g]=sy(c,u,d);return[h,p,g,...o.length>0&&o[0]<1?[o[0]]:[]]};function dD(a){var t=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],n=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],r=Ou(n,a);return Ou(t,r.map(o=>o**3))}const Sm=(...a)=>{const[t,n,r,...o]=fe(a,"rgb"),c=oy(t,n,r);return[...hD(c),...o.length>0&&o[0]<1?[o[0]]:[]]};function hD(a){const t=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],n=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],r=Ou(t,a);return Ou(n,r.map(o=>Math.cbrt(o)))}wt.prototype.oklab=function(){return Sm(this._rgb)};const pD=(...a)=>new wt(...a,"oklab");Object.assign(Ee,{oklab:pD});ue.format.oklab=bm;ue.autodetect.push({p:2,test:(...a)=>{if(a=fe(a,"oklab"),xe(a)==="array"&&a.length===3)return"oklab"}});const mD=(a,t,n)=>{const r=a.oklab(),o=t.oklab();return new wt(r[0]+n*(o[0]-r[0]),r[1]+n*(o[1]-r[1]),r[2]+n*(o[2]-r[2]),"oklab")};Gn.oklab=mD;const gD=(a,t,n)=>go(a,t,n,"oklch");Gn.oklch=gD;const{pow:qh,sqrt:Yh,PI:Zh,cos:S1,sin:M1,atan2:vD}=Math,_D=(a,t="lrgb",n=null)=>{const r=a.length;n||(n=Array.from(new Array(r)).map(()=>1));const o=r/n.reduce(function(v,_){return v+_});if(n.forEach((v,_)=>{n[_]*=o}),a=a.map(v=>new wt(v)),t==="lrgb")return xD(a,n);const c=a.shift(),u=c.get(t),d=[];let h=0,p=0;for(let v=0;v<u.length;v++)if(u[v]=(u[v]||0)*n[0],d.push(isNaN(u[v])?0:n[0]),t.charAt(v)==="h"&&!isNaN(u[v])){const _=u[v]/180*Zh;h+=S1(_)*n[0],p+=M1(_)*n[0]}let g=c.alpha()*n[0];a.forEach((v,_)=>{const b=v.get(t);g+=v.alpha()*n[_+1];for(let M=0;M<u.length;M++)if(!isNaN(b[M]))if(d[M]+=n[_+1],t.charAt(M)==="h"){const T=b[M]/180*Zh;h+=S1(T)*n[_+1],p+=M1(T)*n[_+1]}else u[M]+=b[M]*n[_+1]});for(let v=0;v<u.length;v++)if(t.charAt(v)==="h"){let _=vD(p/d[v],h/d[v])/Zh*180;for(;_<0;)_+=360;for(;_>=360;)_-=360;u[v]=_}else u[v]=u[v]/d[v];return g/=r,new wt(u,t).alpha(g>.99999?1:g,!0)},xD=(a,t)=>{const n=a.length,r=[0,0,0,0];for(let o=0;o<a.length;o++){const c=a[o],u=t[o]/n,d=c._rgb;r[0]+=qh(d[0],2)*u,r[1]+=qh(d[1],2)*u,r[2]+=qh(d[2],2)*u,r[3]+=d[3]*u}return r[0]=Yh(r[0]),r[1]=Yh(r[1]),r[2]=Yh(r[2]),r[3]>.9999999&&(r[3]=1),new wt(gm(r))},{pow:yD}=Math;function Pu(a){let t="rgb",n=Ee("#ccc"),r=0,o=[0,1],c=[],u=[0,0],d=!1,h=[],p=!1,g=0,v=1,_=!1,b={},M=!0,T=1;const y=function(D){if(D=D||["#fff","#000"],D&&xe(D)==="string"&&Ee.brewer&&Ee.brewer[D.toLowerCase()]&&(D=Ee.brewer[D.toLowerCase()]),xe(D)==="array"){D.length===1&&(D=[D[0],D[0]]),D=D.slice(0);for(let z=0;z<D.length;z++)D[z]=Ee(D[z]);c.length=0;for(let z=0;z<D.length;z++)c.push(z/(D.length-1))}return G(),h=D},x=function(D){if(d!=null){const z=d.length-1;let w=0;for(;w<z&&D>=d[w];)w++;return w-1}return 0};let F=D=>D,N=D=>D;const U=function(D,z){let w,E;if(z==null&&(z=!1),isNaN(D)||D===null)return n;z?E=D:d&&d.length>2?E=x(D)/(d.length-2):v!==g?E=(D-g)/(v-g):E=1,E=N(E),z||(E=F(E)),T!==1&&(E=yD(E,T)),E=u[0]+E*(1-u[0]-u[1]),E=$r(E,0,1);const L=Math.floor(E*1e4);if(M&&b[L])w=b[L];else{if(xe(h)==="array")for(let k=0;k<c.length;k++){const W=c[k];if(E<=W){w=h[k];break}if(E>=W&&k===c.length-1){w=h[k];break}if(E>W&&E<c[k+1]){E=(E-W)/(c[k+1]-W),w=Ee.interpolate(h[k],h[k+1],E,t);break}}else xe(h)==="function"&&(w=h(E));M&&(b[L]=w)}return w};var G=()=>b={};y(a);const P=function(D){const z=Ee(U(D));return p&&z[p]?z[p]():z};return P.classes=function(D){if(D!=null){if(xe(D)==="array")d=D,o=[D[0],D[D.length-1]];else{const z=Ee.analyze(o);D===0?d=[z.min,z.max]:d=Ee.limits(z,"e",D)}return P}return d},P.domain=function(D){if(!arguments.length)return o;g=D[0],v=D[D.length-1],c=[];const z=h.length;if(D.length===z&&g!==v)for(let w of Array.from(D))c.push((w-g)/(v-g));else{for(let w=0;w<z;w++)c.push(w/(z-1));if(D.length>2){const w=D.map((L,k)=>k/(D.length-1)),E=D.map(L=>(L-g)/(v-g));E.every((L,k)=>w[k]===L)||(N=L=>{if(L<=0||L>=1)return L;let k=0;for(;L>=E[k+1];)k++;const W=(L-E[k])/(E[k+1]-E[k]);return w[k]+W*(w[k+1]-w[k])})}}return o=[g,v],P},P.mode=function(D){return arguments.length?(t=D,G(),P):t},P.range=function(D,z){return y(D),P},P.out=function(D){return p=D,P},P.spread=function(D){return arguments.length?(r=D,P):r},P.correctLightness=function(D){return D==null&&(D=!0),_=D,G(),_?F=function(z){const w=U(0,!0).lab()[0],E=U(1,!0).lab()[0],L=w>E;let k=U(z,!0).lab()[0];const W=w+(E-w)*z;let et=k-W,ut=0,I=1,q=20;for(;Math.abs(et)>.01&&q-- >0;)(function(){return L&&(et*=-1),et<0?(ut=z,z+=(I-z)*.5):(I=z,z+=(ut-z)*.5),k=U(z,!0).lab()[0],et=k-W})();return z}:F=z=>z,P},P.padding=function(D){return D!=null?(xe(D)==="number"&&(D=[D,D]),u=D,P):u},P.colors=function(D,z){arguments.length<2&&(z="hex");let w=[];if(arguments.length===0)w=h.slice(0);else if(D===1)w=[P(.5)];else if(D>1){const E=o[0],L=o[1]-E;w=bD(0,D).map(k=>P(E+k/(D-1)*L))}else{a=[];let E=[];if(d&&d.length>2)for(let L=1,k=d.length,W=1<=k;W?L<k:L>k;W?L++:L--)E.push((d[L-1]+d[L])*.5);else E=o;w=E.map(L=>P(L))}return Ee[z]&&(w=w.map(E=>E[z]())),w},P.cache=function(D){return D!=null?(M=D,P):M},P.gamma=function(D){return D!=null?(T=D,P):T},P.nodata=function(D){return D!=null?(n=Ee(D),P):n},P}function bD(a,t,n){let r=[],o=a<t,c=t;for(let u=a;o?u<c:u>c;o?u++:u--)r.push(u);return r}const SD=function(a){let t=[1,1];for(let n=1;n<a;n++){let r=[1];for(let o=1;o<=t.length;o++)r[o]=(t[o]||0)+t[o-1];t=r}return t},MD=function(a){let t,n,r,o;if(a=a.map(c=>new wt(c)),a.length===2)[n,r]=a.map(c=>c.lab()),t=function(c){const u=[0,1,2].map(d=>n[d]+c*(r[d]-n[d]));return new wt(u,"lab")};else if(a.length===3)[n,r,o]=a.map(c=>c.lab()),t=function(c){const u=[0,1,2].map(d=>(1-c)*(1-c)*n[d]+2*(1-c)*c*r[d]+c*c*o[d]);return new wt(u,"lab")};else if(a.length===4){let c;[n,r,o,c]=a.map(u=>u.lab()),t=function(u){const d=[0,1,2].map(h=>(1-u)*(1-u)*(1-u)*n[h]+3*(1-u)*(1-u)*u*r[h]+3*(1-u)*u*u*o[h]+u*u*u*c[h]);return new wt(d,"lab")}}else if(a.length>=5){let c,u,d;c=a.map(h=>h.lab()),d=a.length-1,u=SD(d),t=function(h){const p=1-h,g=[0,1,2].map(v=>c.reduce((_,b,M)=>_+u[M]*p**(d-M)*h**M*b[v],0));return new wt(g,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return t},ED=a=>{const t=MD(a);return t.scale=()=>Pu(t),t},{round:dy}=Math;wt.prototype.rgb=function(a=!0){return a===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(dy)};wt.prototype.rgba=function(a=!0){return this._rgb.slice(0,4).map((t,n)=>n<3?a===!1?t:dy(t):t)};const TD=(...a)=>new wt(...a,"rgb");Object.assign(Ee,{rgb:TD});ue.format.rgb=(...a)=>{const t=fe(a,"rgba");return t[3]===void 0&&(t[3]=1),t};ue.autodetect.push({p:3,test:(...a)=>{if(a=fe(a,"rgba"),xe(a)==="array"&&(a.length===3||a.length===4&&xe(a[3])=="number"&&a[3]>=0&&a[3]<=1))return"rgb"}});const Pi=(a,t,n)=>{if(!Pi[n])throw new Error("unknown blend mode "+n);return Pi[n](a,t)},vr=a=>(t,n)=>{const r=Ee(n).rgb(),o=Ee(t).rgb();return Ee.rgb(a(r,o))},_r=a=>(t,n)=>{const r=[];return r[0]=a(t[0],n[0]),r[1]=a(t[1],n[1]),r[2]=a(t[2],n[2]),r},AD=a=>a,RD=(a,t)=>a*t/255,wD=(a,t)=>a>t?t:a,CD=(a,t)=>a>t?a:t,DD=(a,t)=>255*(1-(1-a/255)*(1-t/255)),UD=(a,t)=>t<128?2*a*t/255:255*(1-2*(1-a/255)*(1-t/255)),ND=(a,t)=>255*(1-(1-t/255)/(a/255)),LD=(a,t)=>a===255?255:(a=255*(t/255)/(1-a/255),a>255?255:a);Pi.normal=vr(_r(AD));Pi.multiply=vr(_r(RD));Pi.screen=vr(_r(DD));Pi.overlay=vr(_r(UD));Pi.darken=vr(_r(wD));Pi.lighten=vr(_r(CD));Pi.dodge=vr(_r(LD));Pi.burn=vr(_r(ND));const{pow:OD,sin:PD,cos:BD}=Math;function zD(a=300,t=-1.5,n=1,r=1,o=[0,1]){let c=0,u;xe(o)==="array"?u=o[1]-o[0]:(u=0,o=[o,o]);const d=function(h){const p=xa*((a+120)/360+t*h),g=OD(o[0]+u*h,r),_=(c!==0?n[0]+h*c:n)*g*(1-g)/2,b=BD(p),M=PD(p),T=g+_*(-.14861*b+1.78277*M),y=g+_*(-.29227*b-.90649*M),x=g+_*(1.97294*b);return Ee(gm([T*255,y*255,x*255,1]))};return d.start=function(h){return h==null?a:(a=h,d)},d.rotations=function(h){return h==null?t:(t=h,d)},d.gamma=function(h){return h==null?r:(r=h,d)},d.hue=function(h){return h==null?n:(n=h,xe(n)==="array"?(c=n[1]-n[0],c===0&&(n=n[1])):c=0,d)},d.lightness=function(h){return h==null?o:(xe(h)==="array"?(o=h,u=h[1]-h[0]):(o=[h,h],u=0),d)},d.scale=()=>Ee.scale(d),d.hue(n),d}const ID="0123456789abcdef",{floor:FD,random:HD}=Math,GD=()=>{let a="#";for(let t=0;t<6;t++)a+=ID.charAt(FD(HD()*16));return new wt(a,"hex")},{log:E1,pow:VD,floor:kD,abs:XD}=Math;function hy(a,t=null){const n={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return xe(a)==="object"&&(a=Object.values(a)),a.forEach(r=>{t&&xe(r)==="object"&&(r=r[t]),r!=null&&!isNaN(r)&&(n.values.push(r),n.sum+=r,r<n.min&&(n.min=r),r>n.max&&(n.max=r),n.count+=1)}),n.domain=[n.min,n.max],n.limits=(r,o)=>py(n,r,o),n}function py(a,t="equal",n=7){xe(a)=="array"&&(a=hy(a));const{min:r,max:o}=a,c=a.values.sort((d,h)=>d-h);if(n===1)return[r,o];const u=[];if(t.substr(0,1)==="c"&&(u.push(r),u.push(o)),t.substr(0,1)==="e"){u.push(r);for(let d=1;d<n;d++)u.push(r+d/n*(o-r));u.push(o)}else if(t.substr(0,1)==="l"){if(r<=0)throw new Error("Logarithmic scales are only possible for values > 0");const d=Math.LOG10E*E1(r),h=Math.LOG10E*E1(o);u.push(r);for(let p=1;p<n;p++)u.push(VD(10,d+p/n*(h-d)));u.push(o)}else if(t.substr(0,1)==="q"){u.push(r);for(let d=1;d<n;d++){const h=(c.length-1)*d/n,p=kD(h);if(p===h)u.push(c[p]);else{const g=h-p;u.push(c[p]*(1-g)+c[p+1]*g)}}u.push(o)}else if(t.substr(0,1)==="k"){let d;const h=c.length,p=new Array(h),g=new Array(n);let v=!0,_=0,b=null;b=[],b.push(r);for(let y=1;y<n;y++)b.push(r+y/n*(o-r));for(b.push(o);v;){for(let x=0;x<n;x++)g[x]=0;for(let x=0;x<h;x++){const F=c[x];let N=Number.MAX_VALUE,U;for(let G=0;G<n;G++){const P=XD(b[G]-F);P<N&&(N=P,U=G),g[U]++,p[x]=U}}const y=new Array(n);for(let x=0;x<n;x++)y[x]=null;for(let x=0;x<h;x++)d=p[x],y[d]===null?y[d]=c[x]:y[d]+=c[x];for(let x=0;x<n;x++)y[x]*=1/g[x];v=!1;for(let x=0;x<n;x++)if(y[x]!==b[x]){v=!0;break}b=y,_++,_>200&&(v=!1)}const M={};for(let y=0;y<n;y++)M[y]=[];for(let y=0;y<h;y++)d=p[y],M[d].push(c[y]);let T=[];for(let y=0;y<n;y++)T.push(M[y][0]),T.push(M[y][M[y].length-1]);T=T.sort((y,x)=>y-x),u.push(T[0]);for(let y=1;y<T.length;y+=2){const x=T[y];!isNaN(x)&&u.indexOf(x)===-1&&u.push(x)}}return u}const jD=(a,t)=>{a=new wt(a),t=new wt(t);const n=a.luminance(),r=t.luminance();return n>r?(n+.05)/(r+.05):(r+.05)/(n+.05)};/**
 * @license
 *
 * The APCA contrast prediction algorithm is based of the formulas published
 * in the APCA-1.0.98G specification by Myndex. The specification is available at:
 * https://raw.githubusercontent.com/Myndex/apca-w3/master/images/APCAw3_0.1.17_APCA0.0.98G.svg
 *
 * Note that the APCA implementation is still beta, so please update to
 * future versions of chroma.js when they become available.
 *
 * You can read more about the APCA Readability Criterion at
 * https://readtech.org/ARC/
 */const T1=.027,WD=5e-4,qD=.1,A1=1.14,gu=.022,R1=1.414,YD=(a,t)=>{a=new wt(a),t=new wt(t),a.alpha()<1&&(a=co(t,a,a.alpha(),"rgb"));const n=w1(...a.rgb()),r=w1(...t.rgb()),o=n>=gu?n:n+Math.pow(gu-n,R1),c=r>=gu?r:r+Math.pow(gu-r,R1),u=Math.pow(c,.56)-Math.pow(o,.57),d=Math.pow(c,.65)-Math.pow(o,.62),h=Math.abs(c-o)<WD?0:o<c?u*A1:d*A1;return(Math.abs(h)<qD?0:h>0?h-T1:h+T1)*100};function w1(a,t,n){return .2126729*Math.pow(a/255,2.4)+.7151522*Math.pow(t/255,2.4)+.072175*Math.pow(n/255,2.4)}const{sqrt:va,pow:hn,min:ZD,max:KD,atan2:C1,abs:D1,cos:vu,sin:U1,exp:QD,PI:N1}=Math;function $D(a,t,n=1,r=1,o=1){var c=function(pt){return 360*pt/(2*N1)},u=function(pt){return 2*N1*pt/360};a=new wt(a),t=new wt(t);const[d,h,p]=Array.from(a.lab()),[g,v,_]=Array.from(t.lab()),b=(d+g)/2,M=va(hn(h,2)+hn(p,2)),T=va(hn(v,2)+hn(_,2)),y=(M+T)/2,x=.5*(1-va(hn(y,7)/(hn(y,7)+hn(25,7)))),F=h*(1+x),N=v*(1+x),U=va(hn(F,2)+hn(p,2)),G=va(hn(N,2)+hn(_,2)),P=(U+G)/2,D=c(C1(p,F)),z=c(C1(_,N)),w=D>=0?D:D+360,E=z>=0?z:z+360,L=D1(w-E)>180?(w+E+360)/2:(w+E)/2,k=1-.17*vu(u(L-30))+.24*vu(u(2*L))+.32*vu(u(3*L+6))-.2*vu(u(4*L-63));let W=E-w;W=D1(W)<=180?W:E<=w?W+360:W-360,W=2*va(U*G)*U1(u(W)/2);const et=g-d,ut=G-U,I=1+.015*hn(b-50,2)/va(20+hn(b-50,2)),q=1+.045*P,X=1+.015*P*k,yt=30*QD(-hn((L-275)/25,2)),tt=-(2*va(hn(P,7)/(hn(P,7)+hn(25,7))))*U1(2*u(yt)),vt=va(hn(et/(n*I),2)+hn(ut/(r*q),2)+hn(W/(o*X),2)+tt*(ut/(r*q))*(W/(o*X)));return KD(0,ZD(100,vt))}function JD(a,t,n="lab"){a=new wt(a),t=new wt(t);const r=a.get(n),o=t.get(n);let c=0;for(let u in r){const d=(r[u]||0)-(o[u]||0);c+=d*d}return Math.sqrt(c)}const t4=(...a)=>{try{return new wt(...a),!0}catch{return!1}},e4={cool(){return Pu([Ee.hsl(180,1,.9),Ee.hsl(250,.7,.4)])},hot(){return Pu(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Wp={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},my=Object.keys(Wp),L1=new Map(my.map(a=>[a.toLowerCase(),a])),n4=typeof Proxy=="function"?new Proxy(Wp,{get(a,t){const n=t.toLowerCase();if(L1.has(n))return a[L1.get(n)]},getOwnPropertyNames(){return Object.getOwnPropertyNames(my)}}):Wp,i4=(...a)=>{a=fe(a,"cmyk");const[t,n,r,o]=a,c=a.length>4?a[4]:1;return o===1?[0,0,0,c]:[t>=1?0:255*(1-t)*(1-o),n>=1?0:255*(1-n)*(1-o),r>=1?0:255*(1-r)*(1-o),c]},{max:O1}=Math,a4=(...a)=>{let[t,n,r]=fe(a,"rgb");t=t/255,n=n/255,r=r/255;const o=1-O1(t,O1(n,r)),c=o<1?1/(1-o):0,u=(1-t-o)*c,d=(1-n-o)*c,h=(1-r-o)*c;return[u,d,h,o]};wt.prototype.cmyk=function(){return a4(this._rgb)};const r4=(...a)=>new wt(...a,"cmyk");Object.assign(Ee,{cmyk:r4});ue.format.cmyk=i4;ue.autodetect.push({p:2,test:(...a)=>{if(a=fe(a,"cmyk"),xe(a)==="array"&&a.length===4)return"cmyk"}});const s4=(...a)=>{const t=fe(a,"hsla");let n=mo(a)||"lsa";return t[0]=Si(t[0]||0)+"deg",t[1]=Si(t[1]*100)+"%",t[2]=Si(t[2]*100)+"%",n==="hsla"||t.length>3&&t[3]<1?(t[3]="/ "+(t.length>3?t[3]:1),n="hsla"):t.length=3,`${n.substr(0,3)}(${t.join(" ")})`},o4=(...a)=>{const t=fe(a,"lab");let n=mo(a)||"lab";return t[0]=Si(t[0])+"%",t[1]=Si(t[1]),t[2]=Si(t[2]),n==="laba"||t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`lab(${t.join(" ")})`},l4=(...a)=>{const t=fe(a,"lch");let n=mo(a)||"lab";return t[0]=Si(t[0])+"%",t[1]=Si(t[1]),t[2]=isNaN(t[2])?"none":Si(t[2])+"deg",n==="lcha"||t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`lch(${t.join(" ")})`},c4=(...a)=>{const t=fe(a,"lab");return t[0]=Si(t[0]*100)+"%",t[1]=Xp(t[1]),t[2]=Xp(t[2]),t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`oklab(${t.join(" ")})`},gy=(...a)=>{const[t,n,r,...o]=fe(a,"rgb"),[c,u,d]=Sm(t,n,r),[h,p,g]=cy(c,u,d);return[h,p,g,...o.length>0&&o[0]<1?[o[0]]:[]]},u4=(...a)=>{const t=fe(a,"lch");return t[0]=Si(t[0]*100)+"%",t[1]=Xp(t[1]),t[2]=isNaN(t[2])?"none":Si(t[2])+"deg",t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`oklch(${t.join(" ")})`},{round:Kh}=Math,f4=(...a)=>{const t=fe(a,"rgba");let n=mo(a)||"rgb";if(n.substr(0,3)==="hsl")return s4(fy(t),n);if(n.substr(0,3)==="lab"){const r=Rl();Ta("d50");const o=o4(_m(t),n);return Ta(r),o}if(n.substr(0,3)==="lch"){const r=Rl();Ta("d50");const o=l4(ym(t),n);return Ta(r),o}return n.substr(0,5)==="oklab"?c4(Sm(t)):n.substr(0,5)==="oklch"?u4(gy(t)):(t[0]=Kh(t[0]),t[1]=Kh(t[1]),t[2]=Kh(t[2]),(n==="rgba"||t.length>3&&t[3]<1)&&(t[3]="/ "+(t.length>3?t[3]:1),n="rgba"),`${n.substr(0,3)}(${t.slice(0,n==="rgb"?3:4).join(" ")})`)},vy=(...a)=>{a=fe(a,"lch");const[t,n,r,...o]=a,[c,u,d]=ly(t,n,r),[h,p,g]=bm(c,u,d);return[h,p,g,...o.length>0&&o[0]<1?[o[0]]:[]]},wa=/((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source,Oi=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source,Bu=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source,Mi=/\s*/.source,vo=/\s+/.source,Mm=/\s*,\s*/.source,qu=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source,_o=/\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source,_y=new RegExp("^rgba?\\("+Mi+[wa,wa,wa].join(vo)+_o+"\\)$"),xy=new RegExp("^rgb\\("+Mi+[wa,wa,wa].join(Mm)+Mi+"\\)$"),yy=new RegExp("^rgba\\("+Mi+[wa,wa,wa,Oi].join(Mm)+Mi+"\\)$"),by=new RegExp("^hsla?\\("+Mi+[qu,Bu,Bu].join(vo)+_o+"\\)$"),Sy=new RegExp("^hsl?\\("+Mi+[qu,Bu,Bu].join(Mm)+Mi+"\\)$"),My=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Ey=new RegExp("^lab\\("+Mi+[Oi,Oi,Oi].join(vo)+_o+"\\)$"),Ty=new RegExp("^lch\\("+Mi+[Oi,Oi,qu].join(vo)+_o+"\\)$"),Ay=new RegExp("^oklab\\("+Mi+[Oi,Oi,Oi].join(vo)+_o+"\\)$"),Ry=new RegExp("^oklch\\("+Mi+[Oi,Oi,qu].join(vo)+_o+"\\)$"),{round:wy}=Math,Qs=a=>a.map((t,n)=>n<=2?$r(wy(t),0,255):t),pn=(a,t=0,n=100,r=!1)=>(typeof a=="string"&&a.endsWith("%")&&(a=parseFloat(a.substring(0,a.length-1))/100,r?a=t+(a+1)*.5*(n-t):a=t+a*(n-t)),+a),kn=(a,t)=>a==="none"?t:a,Em=a=>{if(a=a.toLowerCase().trim(),a==="transparent")return[0,0,0,0];let t;if(ue.format.named)try{return ue.format.named(a)}catch{}if((t=a.match(_y))||(t=a.match(xy))){let n=t.slice(1,4);for(let o=0;o<3;o++)n[o]=+pn(kn(n[o],0),0,255);n=Qs(n);const r=t[4]!==void 0?+pn(t[4],0,1):1;return n[3]=r,n}if(t=a.match(yy)){const n=t.slice(1,5);for(let r=0;r<4;r++)n[r]=+pn(n[r],0,255);return n}if((t=a.match(by))||(t=a.match(Sy))){const n=t.slice(1,4);n[0]=+kn(n[0].replace("deg",""),0),n[1]=+pn(kn(n[1],0),0,100)*.01,n[2]=+pn(kn(n[2],0),0,100)*.01;const r=Qs(jp(n)),o=t[4]!==void 0?+pn(t[4],0,1):1;return r[3]=o,r}if(t=a.match(My)){const n=t.slice(1,4);n[1]*=.01,n[2]*=.01;const r=jp(n);for(let o=0;o<3;o++)r[o]=wy(r[o]);return r[3]=+t[4],r}if(t=a.match(Ey)){const n=t.slice(1,4);n[0]=pn(kn(n[0],0),0,100),n[1]=pn(kn(n[1],0),-125,125,!0),n[2]=pn(kn(n[2],0),-125,125,!0);const r=Rl();Ta("d50");const o=Qs(vm(n));Ta(r);const c=t[4]!==void 0?+pn(t[4],0,1):1;return o[3]=c,o}if(t=a.match(Ty)){const n=t.slice(1,4);n[0]=pn(n[0],0,100),n[1]=pn(kn(n[1],0),0,150,!1),n[2]=+kn(n[2].replace("deg",""),0);const r=Rl();Ta("d50");const o=Qs(xm(n));Ta(r);const c=t[4]!==void 0?+pn(t[4],0,1):1;return o[3]=c,o}if(t=a.match(Ay)){const n=t.slice(1,4);n[0]=pn(kn(n[0],0),0,1),n[1]=pn(kn(n[1],0),-.4,.4,!0),n[2]=pn(kn(n[2],0),-.4,.4,!0);const r=Qs(bm(n)),o=t[4]!==void 0?+pn(t[4],0,1):1;return r[3]=o,r}if(t=a.match(Ry)){const n=t.slice(1,4);n[0]=pn(kn(n[0],0),0,1),n[1]=pn(kn(n[1],0),0,.4,!1),n[2]=+kn(n[2].replace("deg",""),0);const r=Qs(vy(n)),o=t[4]!==void 0?+pn(t[4],0,1):1;return r[3]=o,r}};Em.test=a=>_y.test(a)||by.test(a)||Ey.test(a)||Ty.test(a)||Ay.test(a)||Ry.test(a)||xy.test(a)||yy.test(a)||Sy.test(a)||My.test(a)||a==="transparent";wt.prototype.css=function(a){return f4(this._rgb,a)};const d4=(...a)=>new wt(...a,"css");Ee.css=d4;ue.format.css=Em;ue.autodetect.push({p:5,test:(a,...t)=>{if(!t.length&&xe(a)==="string"&&Em.test(a))return"css"}});ue.format.gl=(...a)=>{const t=fe(a,"rgba");return t[0]*=255,t[1]*=255,t[2]*=255,t};const h4=(...a)=>new wt(...a,"gl");Ee.gl=h4;wt.prototype.gl=function(){const a=this._rgb;return[a[0]/255,a[1]/255,a[2]/255,a[3]]};wt.prototype.hex=function(a){return ry(this._rgb,a)};const p4=(...a)=>new wt(...a,"hex");Ee.hex=p4;ue.format.hex=ay;ue.autodetect.push({p:4,test:(a,...t)=>{if(!t.length&&xe(a)==="string"&&[3,4,5,6,7,8,9].indexOf(a.length)>=0)return"hex"}});const{log:_u}=Math,Cy=a=>{const t=a/100;let n,r,o;return t<66?(n=255,r=t<6?0:-155.25485562709179-.44596950469579133*(r=t-2)+104.49216199393888*_u(r),o=t<20?0:-254.76935184120902+.8274096064007395*(o=t-10)+115.67994401066147*_u(o)):(n=351.97690566805693+.114206453784165*(n=t-55)-40.25366309332127*_u(n),r=325.4494125711974+.07943456536662342*(r=t-50)-28.0852963507957*_u(r),o=255),[n,r,o,1]},{round:m4}=Math,g4=(...a)=>{const t=fe(a,"rgb"),n=t[0],r=t[2];let o=1e3,c=4e4;const u=.4;let d;for(;c-o>u;){d=(c+o)*.5;const h=Cy(d);h[2]/h[0]>=r/n?c=d:o=d}return m4(d)};wt.prototype.temp=wt.prototype.kelvin=wt.prototype.temperature=function(){return g4(this._rgb)};const Qh=(...a)=>new wt(...a,"temp");Object.assign(Ee,{temp:Qh,kelvin:Qh,temperature:Qh});ue.format.temp=ue.format.kelvin=ue.format.temperature=Cy;wt.prototype.oklch=function(){return gy(this._rgb)};const v4=(...a)=>new wt(...a,"oklch");Object.assign(Ee,{oklch:v4});ue.format.oklch=vy;ue.autodetect.push({p:2,test:(...a)=>{if(a=fe(a,"oklch"),xe(a)==="array"&&a.length===3)return"oklch"}});Object.assign(Ee,{analyze:hy,average:_D,bezier:ED,blend:Pi,brewer:n4,Color:wt,colors:lo,contrast:jD,contrastAPCA:YD,cubehelix:zD,deltaE:$D,distance:JD,input:ue,interpolate:co,limits:py,mix:co,random:GD,scale:Pu,scales:e4,valid:t4});function _4(){return st.useEffect(()=>{const a={nx:40,ny:100,cscale:Ee.scale(["#2e003e","#4B0082","#663399"]).mode("lch"),darken:-1,angle:Math.PI/3,timeCoef:.1};let t,n,r;const{randFloat:o}=Z2,c={value:0},u={value:a.timeCoef},d=document.getElementById("bg-canvas");if(!d)return;t=new pC({canvas:d,antialias:!0}),r=new yi,h(),window.addEventListener("resize",h),p(),requestAnimationFrame(g);function h(){t.setSize(window.innerWidth,window.innerHeight)}function p(){n=new TT;const v=2/a.nx,_=-2/(a.ny-1),b=-1+v/2,M=1,T=new Float32Array([Math.cos(a.angle),-Math.sin(a.angle),Math.sin(a.angle),Math.cos(a.angle)]);for(let y=0;y<a.nx;y++){const x=[];for(let G=0;G<a.ny;G++)x.push(new ct(b+y*v,M+G*_,0));const F=new b4({points:x}),N=new Ua({uniforms:{uTime:c,uTimeCoef:u,uMat2:{value:T},uSize:{value:1.5/a.nx},uRnd1:{value:new ct(o(-1,1),o(-1,1),o(-1,1))},uRnd2:{value:new ct(o(-1,1),o(-1,1),o(-1,1))},uRnd3:{value:new ct(o(-1,1),o(-1,1),o(-1,1))},uRnd4:{value:new ct(o(-1,1),o(-1,1),o(-1,1))},uRnd5:{value:new ct(o(.2,.5),o(.3,.6),o(.4,.7))},uColor1:{value:new Be(a.cscale(y/a.nx).hex())},uColor2:{value:new Be(a.cscale(y/a.nx).darken(a.darken).hex())}},vertexShader:x4,fragmentShader:y4}),U=new Xi(F.geometry,N);n.add(U)}}function g(v){c.value=v*.001,t.render(n,r),requestAnimationFrame(g)}return()=>{window.removeEventListener("resize",h)}},[]),Z.jsx("canvas",{id:"bg-canvas",style:{position:"fixed",top:0,left:0,zIndex:-1}})}const x4=`
uniform float uTime, uTimeCoef;
uniform float uSize;
uniform mat2 uMat2;
uniform vec3 uRnd1, uRnd2, uRnd3, uRnd4, uRnd5;
attribute vec3 next, prev;
attribute float side;
varying vec2 vUv;

vec2 dp(vec2 sv) {
  return (1.5 * sv * uMat2);
}

void main() {
  vUv = uv;
  vec2 pos = dp(position.xy);
  vec2 normal = dp(vec2(1, 0)) * uSize;

  float time = uTime * uTimeCoef;
  vec3 rnd1 = vec3(cos(time * uRnd1.x + uRnd3.x), cos(time * uRnd1.y + uRnd3.y), cos(time * uRnd1.z + uRnd3.z));
  vec3 rnd2 = vec3(cos(time * uRnd2.x + uRnd4.x), cos(time * uRnd2.y + uRnd4.y), cos(time * uRnd2.z + uRnd4.z));
  normal *= 1.0
    + uRnd5.x * (cos((position.y + rnd1.x) * 20.0 * rnd1.y) + 1.0)
    + uRnd5.y * (sin((position.y + rnd2.x) * 20.0 * rnd2.y) + 1.0)
    + uRnd5.z * (cos((position.y + rnd1.z) * 20.0 * rnd2.z) + 1.0);
  pos.xy -= normal * side;
  gl_Position = vec4(pos, 0.0, 1.0);
}
`,y4=`
uniform vec3 uColor1;
uniform vec3 uColor2;
varying vec2 vUv;
void main() {
  gl_FragColor = vec4(mix(uColor1, uColor2, vUv.x), 1.0);
}
`;class b4{constructor({points:t}){this.points=t,this.count=t.length,this.init(),this.updateGeometry()}init(){this.geometry=new gr,this.position=new Float32Array(this.count*3*2),this.prev=new Float32Array(this.count*3*2),this.next=new Float32Array(this.count*3*2);const t=new Float32Array(this.count*2),n=new Float32Array(this.count*4),r=new Uint16Array((this.count-1)*6);for(let o=0;o<this.count;o++){const c=o*2;t.set([-1,1],c);const u=o/(this.count-1);n.set([0,u,1,u],o*4),o!==this.count-1&&(r.set([c,c+1,c+2],o*6),r.set([c+2,c+1,c+3],o*6+3))}this.geometry.setAttribute("position",new Fn(this.position,3)),this.geometry.setAttribute("prev",new Fn(this.prev,3)),this.geometry.setAttribute("next",new Fn(this.next,3)),this.geometry.setAttribute("side",new Fn(t,1)),this.geometry.setAttribute("uv",new Fn(n,2)),this.geometry.setIndex(new Fn(r,1))}updateGeometry(){const t=new ct;this.points.forEach((n,r)=>{n.toArray(this.position,r*6),n.toArray(this.position,r*6+3),r===0?(t.copy(n).sub(this.points[r+1]).add(n),t.toArray(this.prev,r*6),t.toArray(this.prev,r*6+3)):(n.toArray(this.next,(r-1)*6),n.toArray(this.next,(r-1)*6+3)),r===this.points.length-1?(t.copy(n).sub(this.points[r-1]).add(n),t.toArray(this.next,r*6),t.toArray(this.next,r*6+3)):(n.toArray(this.prev,(r+1)*6),n.toArray(this.prev,(r+1)*6+3))}),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.prev.needsUpdate=!0,this.geometry.attributes.next.needsUpdate=!0}}function S4(){return st.useEffect(()=>{XS.init({duration:800,once:!0,easing:"ease-in-out"})},[]),Z.jsxs(Z.Fragment,{children:[Z.jsx(_4,{}),Z.jsx(PE,{}),Z.jsx(BE,{}),Z.jsx(t2,{}),Z.jsx(e2,{}),Z.jsx(n2,{}),Z.jsx(i2,{}),Z.jsxs("section",{id:"thanks",style:{backgroundColor:"#0e0e10",color:"#ededed",padding:"80px 0",textAlign:"center"},children:[Z.jsx("h2",{style:{color:"#8A2BE2"},children:"Thank you!"}),Z.jsx("p",{children:"Your message has been sent successfully. I’ll get back to you soon."})]}),Z.jsx(a2,{})]})}HS.createRoot(document.getElementById("root")).render(Z.jsx(st.StrictMode,{children:Z.jsx(S4,{})}));
