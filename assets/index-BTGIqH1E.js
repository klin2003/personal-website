function xd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function _d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pu={exports:{}},Dl={},Ou={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xr=Symbol.for("react.element"),kd=Symbol.for("react.portal"),Cd=Symbol.for("react.fragment"),jd=Symbol.for("react.strict_mode"),Ed=Symbol.for("react.profiler"),Nd=Symbol.for("react.provider"),Pd=Symbol.for("react.context"),Od=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Ld=Symbol.for("react.memo"),Td=Symbol.for("react.lazy"),sa=Symbol.iterator;function Md(e){return e===null||typeof e!="object"?null:(e=sa&&e[sa]||e["@@iterator"],typeof e=="function"?e:null)}var zu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lu=Object.assign,Tu={};function En(e,t,n){this.props=e,this.context=t,this.refs=Tu,this.updater=n||zu}En.prototype.isReactComponent={};En.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};En.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mu(){}Mu.prototype=En.prototype;function es(e,t,n){this.props=e,this.context=t,this.refs=Tu,this.updater=n||zu}var ts=es.prototype=new Mu;ts.constructor=es;Lu(ts,En.prototype);ts.isPureReactComponent=!0;var aa=Array.isArray,Ru=Object.prototype.hasOwnProperty,ns={current:null},Iu={key:!0,ref:!0,__self:!0,__source:!0};function $u(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Ru.call(t,r)&&!Iu.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:xr,type:e,key:o,ref:i,props:l,_owner:ns.current}}function Rd(e,t){return{$$typeof:xr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function rs(e){return typeof e=="object"&&e!==null&&e.$$typeof===xr}function Id(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ua=/\/+/g;function No(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Id(""+e.key):t.toString(36)}function Kr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case xr:case kd:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+No(i,0):r,aa(l)?(n="",e!=null&&(n=e.replace(ua,"$&/")+"/"),Kr(l,t,n,"",function(c){return c})):l!=null&&(rs(l)&&(l=Rd(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(ua,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",aa(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+No(o,s);i+=Kr(o,t,n,a,l)}else if(a=Md(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+No(o,s++),i+=Kr(o,t,n,a,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Or(e,t,n){if(e==null)return e;var r=[],l=0;return Kr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function $d(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},br={transition:null},Dd={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:br,ReactCurrentOwner:ns};function Du(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Or,forEach:function(e,t,n){Or(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Or(e,function(){t++}),t},toArray:function(e){return Or(e,function(t){return t})||[]},only:function(e){if(!rs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=En;M.Fragment=Cd;M.Profiler=Ed;M.PureComponent=es;M.StrictMode=jd;M.Suspense=zd;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dd;M.act=Du;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lu({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=ns.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Ru.call(t,a)&&!Iu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:xr,type:e.type,key:l,ref:o,props:r,_owner:i}};M.createContext=function(e){return e={$$typeof:Pd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nd,_context:e},e.Consumer=e};M.createElement=$u;M.createFactory=function(e){var t=$u.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Od,render:e}};M.isValidElement=rs;M.lazy=function(e){return{$$typeof:Td,_payload:{_status:-1,_result:e},_init:$d}};M.memo=function(e,t){return{$$typeof:Ld,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=br.transition;br.transition={};try{e()}finally{br.transition=t}};M.unstable_act=Du;M.useCallback=function(e,t){return we.current.useCallback(e,t)};M.useContext=function(e){return we.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return we.current.useDeferredValue(e)};M.useEffect=function(e,t){return we.current.useEffect(e,t)};M.useId=function(){return we.current.useId()};M.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return we.current.useMemo(e,t)};M.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};M.useRef=function(e){return we.current.useRef(e)};M.useState=function(e){return we.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return we.current.useTransition()};M.version="18.3.1";Ou.exports=M;var L=Ou.exports;const at=_d(L),ca=xd({__proto__:null,default:at},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd=L,Ad=Symbol.for("react.element"),Bd=Symbol.for("react.fragment"),Ud=Object.prototype.hasOwnProperty,Vd=Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wd={key:!0,ref:!0,__self:!0,__source:!0};function Fu(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Ud.call(t,r)&&!Wd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Ad,type:e,key:o,ref:i,props:l,_owner:Vd.current}}Dl.Fragment=Bd;Dl.jsx=Fu;Dl.jsxs=Fu;Pu.exports=Dl;var p=Pu.exports,ti={},Au={exports:{}},Te={},Bu={exports:{}},Uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,z){var T=N.length;N.push(z);e:for(;0<T;){var b=T-1>>>1,ne=N[b];if(0<l(ne,z))N[b]=z,N[T]=ne,T=b;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],T=N.pop();if(T!==z){N[0]=T;e:for(var b=0,ne=N.length,Nr=ne>>>1;b<Nr;){var It=2*(b+1)-1,Eo=N[It],$t=It+1,Pr=N[$t];if(0>l(Eo,T))$t<ne&&0>l(Pr,Eo)?(N[b]=Pr,N[$t]=T,b=$t):(N[b]=Eo,N[It]=T,b=It);else if($t<ne&&0>l(Pr,T))N[b]=Pr,N[$t]=T,b=$t;else break e}}return z}function l(N,z){var T=N.sortIndex-z.sortIndex;return T!==0?T:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],c=[],g=1,m=null,h=3,w=!1,S=!1,v=!1,O=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(N){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=N)r(c),z.sortIndex=z.expirationTime,t(a,z);else break;z=n(c)}}function y(N){if(v=!1,d(N),!S)if(n(a)!==null)S=!0,Co(C);else{var z=n(c);z!==null&&jo(y,z.startTime-N)}}function C(N,z){S=!1,v&&(v=!1,f(P),P=-1),w=!0;var T=h;try{for(d(z),m=n(a);m!==null&&(!(m.expirationTime>z)||N&&!Ve());){var b=m.callback;if(typeof b=="function"){m.callback=null,h=m.priorityLevel;var ne=b(m.expirationTime<=z);z=e.unstable_now(),typeof ne=="function"?m.callback=ne:m===n(a)&&r(a),d(z)}else r(a);m=n(a)}if(m!==null)var Nr=!0;else{var It=n(c);It!==null&&jo(y,It.startTime-z),Nr=!1}return Nr}finally{m=null,h=T,w=!1}}var j=!1,k=null,P=-1,K=5,R=-1;function Ve(){return!(e.unstable_now()-R<K)}function zn(){if(k!==null){var N=e.unstable_now();R=N;var z=!0;try{z=k(!0,N)}finally{z?Ln():(j=!1,k=null)}}else j=!1}var Ln;if(typeof u=="function")Ln=function(){u(zn)};else if(typeof MessageChannel<"u"){var ia=new MessageChannel,Sd=ia.port2;ia.port1.onmessage=zn,Ln=function(){Sd.postMessage(null)}}else Ln=function(){O(zn,0)};function Co(N){k=N,j||(j=!0,Ln())}function jo(N,z){P=O(function(){N(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){S||w||(S=!0,Co(C))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var T=h;h=z;try{return N()}finally{h=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var T=h;h=N;try{return z()}finally{h=T}},e.unstable_scheduleCallback=function(N,z,T){var b=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?b+T:b):T=b,N){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=T+ne,N={id:g++,callback:z,priorityLevel:N,startTime:T,expirationTime:ne,sortIndex:-1},T>b?(N.sortIndex=T,t(c,N),n(a)===null&&N===n(c)&&(v?(f(P),P=-1):v=!0,jo(y,T-b))):(N.sortIndex=ne,t(a,N),S||w||(S=!0,Co(C))),N},e.unstable_shouldYield=Ve,e.unstable_wrapCallback=function(N){var z=h;return function(){var T=h;h=z;try{return N.apply(this,arguments)}finally{h=T}}}})(Uu);Bu.exports=Uu;var Hd=Bu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd=L,Le=Hd;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vu=new Set,er={};function Kt(e,t){yn(e,t),yn(e+"Capture",t)}function yn(e,t){for(er[e]=t,e=0;e<t.length;e++)Vu.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ni=Object.prototype.hasOwnProperty,Yd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fa={},da={};function Xd(e){return ni.call(da,e)?!0:ni.call(fa,e)?!1:Yd.test(e)?da[e]=!0:(fa[e]=!0,!1)}function Gd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kd(e,t,n,r){if(t===null||typeof t>"u"||Gd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var ls=/[\-:]([a-z])/g;function os(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ls,os);ce[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ls,os);ce[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ls,os);ce[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function is(e,t,n,r){var l=ce.hasOwnProperty(t)?ce[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kd(t,n,l,r)&&(n=null),r||l===null?Xd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=Qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zr=Symbol.for("react.element"),Zt=Symbol.for("react.portal"),qt=Symbol.for("react.fragment"),ss=Symbol.for("react.strict_mode"),ri=Symbol.for("react.profiler"),Wu=Symbol.for("react.provider"),Hu=Symbol.for("react.context"),as=Symbol.for("react.forward_ref"),li=Symbol.for("react.suspense"),oi=Symbol.for("react.suspense_list"),us=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),Qu=Symbol.for("react.offscreen"),pa=Symbol.iterator;function Tn(e){return e===null||typeof e!="object"?null:(e=pa&&e[pa]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Po;function Un(e){if(Po===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Po=t&&t[1]||""}return`
`+Po+e}var Oo=!1;function zo(e,t){if(!e||Oo)return"";Oo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Oo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Un(e):""}function bd(e){switch(e.tag){case 5:return Un(e.type);case 16:return Un("Lazy");case 13:return Un("Suspense");case 19:return Un("SuspenseList");case 0:case 2:case 15:return e=zo(e.type,!1),e;case 11:return e=zo(e.type.render,!1),e;case 1:return e=zo(e.type,!0),e;default:return""}}function ii(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qt:return"Fragment";case Zt:return"Portal";case ri:return"Profiler";case ss:return"StrictMode";case li:return"Suspense";case oi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hu:return(e.displayName||"Context")+".Consumer";case Wu:return(e._context.displayName||"Context")+".Provider";case as:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case us:return t=e.displayName||null,t!==null?t:ii(e.type)||"Memo";case gt:t=e._payload,e=e._init;try{return ii(e(t))}catch{}}return null}function Jd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ii(t);case 8:return t===ss?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zd(e){var t=Yu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lr(e){e._valueTracker||(e._valueTracker=Zd(e))}function Xu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Yu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function cl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function si(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ma(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gu(e,t){t=t.checked,t!=null&&is(e,"checked",t,!1)}function ai(e,t){Gu(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ui(e,t.type,n):t.hasOwnProperty("defaultValue")&&ui(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ha(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ui(e,t,n){(t!=="number"||cl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vn=Array.isArray;function fn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ci(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ga(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Vn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function Ku(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function va(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tr,Ju=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tr=Tr||document.createElement("div"),Tr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qd=["Webkit","ms","Moz","O"];Object.keys(Qn).forEach(function(e){qd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qn[t]=Qn[e]})});function Zu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qn.hasOwnProperty(e)&&Qn[e]?(""+t).trim():t+"px"}function qu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Zu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var e0=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function di(e,t){if(t){if(e0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function pi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mi=null;function cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hi=null,dn=null,pn=null;function ya(e){if(e=Cr(e)){if(typeof hi!="function")throw Error(x(280));var t=e.stateNode;t&&(t=Vl(t),hi(e.stateNode,e.type,t))}}function ec(e){dn?pn?pn.push(e):pn=[e]:dn=e}function tc(){if(dn){var e=dn,t=pn;if(pn=dn=null,ya(e),t)for(e=0;e<t.length;e++)ya(t[e])}}function nc(e,t){return e(t)}function rc(){}var Lo=!1;function lc(e,t,n){if(Lo)return e(t,n);Lo=!0;try{return nc(e,t,n)}finally{Lo=!1,(dn!==null||pn!==null)&&(rc(),tc())}}function nr(e,t){var n=e.stateNode;if(n===null)return null;var r=Vl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var gi=!1;if(ct)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){gi=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{gi=!1}function t0(e,t,n,r,l,o,i,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Yn=!1,fl=null,dl=!1,vi=null,n0={onError:function(e){Yn=!0,fl=e}};function r0(e,t,n,r,l,o,i,s,a){Yn=!1,fl=null,t0.apply(n0,arguments)}function l0(e,t,n,r,l,o,i,s,a){if(r0.apply(this,arguments),Yn){if(Yn){var c=fl;Yn=!1,fl=null}else throw Error(x(198));dl||(dl=!0,vi=c)}}function bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function oc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wa(e){if(bt(e)!==e)throw Error(x(188))}function o0(e){var t=e.alternate;if(!t){if(t=bt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return wa(l),e;if(o===r)return wa(l),t;o=o.sibling}throw Error(x(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function ic(e){return e=o0(e),e!==null?sc(e):null}function sc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sc(e);if(t!==null)return t;e=e.sibling}return null}var ac=Le.unstable_scheduleCallback,Sa=Le.unstable_cancelCallback,i0=Le.unstable_shouldYield,s0=Le.unstable_requestPaint,J=Le.unstable_now,a0=Le.unstable_getCurrentPriorityLevel,fs=Le.unstable_ImmediatePriority,uc=Le.unstable_UserBlockingPriority,pl=Le.unstable_NormalPriority,u0=Le.unstable_LowPriority,cc=Le.unstable_IdlePriority,Fl=null,tt=null;function c0(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Fl,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:p0,f0=Math.log,d0=Math.LN2;function p0(e){return e>>>=0,e===0?32:31-(f0(e)/d0|0)|0}var Mr=64,Rr=4194304;function Wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ml(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=Wn(s):(o&=i,o!==0&&(r=Wn(o)))}else i=n&~l,i!==0?r=Wn(i):o!==0&&(r=Wn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),l=1<<n,r|=e[n],t&=~l;return r}function m0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function h0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Xe(o),s=1<<i,a=l[i];a===-1?(!(s&n)||s&r)&&(l[i]=m0(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function yi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fc(){var e=Mr;return Mr<<=1,!(Mr&4194240)&&(Mr=64),e}function To(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _r(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function g0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Xe(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function ds(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var F=0;function dc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pc,ps,mc,hc,gc,wi=!1,Ir=[],_t=null,kt=null,Ct=null,rr=new Map,lr=new Map,yt=[],v0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xa(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(t.pointerId)}}function Rn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Cr(t),t!==null&&ps(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function y0(e,t,n,r,l){switch(t){case"focusin":return _t=Rn(_t,e,t,n,r,l),!0;case"dragenter":return kt=Rn(kt,e,t,n,r,l),!0;case"mouseover":return Ct=Rn(Ct,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return rr.set(o,Rn(rr.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,lr.set(o,Rn(lr.get(o)||null,e,t,n,r,l)),!0}return!1}function vc(e){var t=At(e.target);if(t!==null){var n=bt(t);if(n!==null){if(t=n.tag,t===13){if(t=oc(n),t!==null){e.blockedOn=t,gc(e.priority,function(){mc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Si(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);mi=r,n.target.dispatchEvent(r),mi=null}else return t=Cr(n),t!==null&&ps(t),e.blockedOn=n,!1;t.shift()}return!0}function _a(e,t,n){Jr(e)&&n.delete(t)}function w0(){wi=!1,_t!==null&&Jr(_t)&&(_t=null),kt!==null&&Jr(kt)&&(kt=null),Ct!==null&&Jr(Ct)&&(Ct=null),rr.forEach(_a),lr.forEach(_a)}function In(e,t){e.blockedOn===t&&(e.blockedOn=null,wi||(wi=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,w0)))}function or(e){function t(l){return In(l,e)}if(0<Ir.length){In(Ir[0],e);for(var n=1;n<Ir.length;n++){var r=Ir[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&In(_t,e),kt!==null&&In(kt,e),Ct!==null&&In(Ct,e),rr.forEach(t),lr.forEach(t),n=0;n<yt.length;n++)r=yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yt.length&&(n=yt[0],n.blockedOn===null);)vc(n),n.blockedOn===null&&yt.shift()}var mn=mt.ReactCurrentBatchConfig,hl=!0;function S0(e,t,n,r){var l=F,o=mn.transition;mn.transition=null;try{F=1,ms(e,t,n,r)}finally{F=l,mn.transition=o}}function x0(e,t,n,r){var l=F,o=mn.transition;mn.transition=null;try{F=4,ms(e,t,n,r)}finally{F=l,mn.transition=o}}function ms(e,t,n,r){if(hl){var l=Si(e,t,n,r);if(l===null)Vo(e,t,r,gl,n),xa(e,r);else if(y0(l,e,t,n,r))r.stopPropagation();else if(xa(e,r),t&4&&-1<v0.indexOf(e)){for(;l!==null;){var o=Cr(l);if(o!==null&&pc(o),o=Si(e,t,n,r),o===null&&Vo(e,t,r,gl,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Vo(e,t,r,null,n)}}var gl=null;function Si(e,t,n,r){if(gl=null,e=cs(r),e=At(e),e!==null)if(t=bt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=oc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gl=e,null}function yc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a0()){case fs:return 1;case uc:return 4;case pl:case u0:return 16;case cc:return 536870912;default:return 16}default:return 16}}var St=null,hs=null,Zr=null;function wc(){if(Zr)return Zr;var e,t=hs,n=t.length,r,l="value"in St?St.value:St.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Zr=l.slice(e,1<r?1-r:void 0)}function qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $r(){return!0}function ka(){return!1}function Me(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?$r:ka,this.isPropagationStopped=ka,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$r)},persist:function(){},isPersistent:$r}),t}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gs=Me(Nn),kr=X({},Nn,{view:0,detail:0}),_0=Me(kr),Mo,Ro,$n,Al=X({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$n&&($n&&e.type==="mousemove"?(Mo=e.screenX-$n.screenX,Ro=e.screenY-$n.screenY):Ro=Mo=0,$n=e),Mo)},movementY:function(e){return"movementY"in e?e.movementY:Ro}}),Ca=Me(Al),k0=X({},Al,{dataTransfer:0}),C0=Me(k0),j0=X({},kr,{relatedTarget:0}),Io=Me(j0),E0=X({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),N0=Me(E0),P0=X({},Nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),O0=Me(P0),z0=X({},Nn,{data:0}),ja=Me(z0),L0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=M0[e])?!!t[e]:!1}function vs(){return R0}var I0=X({},kr,{key:function(e){if(e.key){var t=L0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?T0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vs,charCode:function(e){return e.type==="keypress"?qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$0=Me(I0),D0=X({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ea=Me(D0),F0=X({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vs}),A0=Me(F0),B0=X({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),U0=Me(B0),V0=X({},Al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),W0=Me(V0),H0=[9,13,27,32],ys=ct&&"CompositionEvent"in window,Xn=null;ct&&"documentMode"in document&&(Xn=document.documentMode);var Q0=ct&&"TextEvent"in window&&!Xn,Sc=ct&&(!ys||Xn&&8<Xn&&11>=Xn),Na=" ",Pa=!1;function xc(e,t){switch(e){case"keyup":return H0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _c(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var en=!1;function Y0(e,t){switch(e){case"compositionend":return _c(t);case"keypress":return t.which!==32?null:(Pa=!0,Na);case"textInput":return e=t.data,e===Na&&Pa?null:e;default:return null}}function X0(e,t){if(en)return e==="compositionend"||!ys&&xc(e,t)?(e=wc(),Zr=hs=St=null,en=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sc&&t.locale!=="ko"?null:t.data;default:return null}}var G0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!G0[e.type]:t==="textarea"}function kc(e,t,n,r){ec(r),t=vl(t,"onChange"),0<t.length&&(n=new gs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,ir=null;function K0(e){Rc(e,0)}function Bl(e){var t=rn(e);if(Xu(t))return e}function b0(e,t){if(e==="change")return t}var Cc=!1;if(ct){var $o;if(ct){var Do="oninput"in document;if(!Do){var za=document.createElement("div");za.setAttribute("oninput","return;"),Do=typeof za.oninput=="function"}$o=Do}else $o=!1;Cc=$o&&(!document.documentMode||9<document.documentMode)}function La(){Gn&&(Gn.detachEvent("onpropertychange",jc),ir=Gn=null)}function jc(e){if(e.propertyName==="value"&&Bl(ir)){var t=[];kc(t,ir,e,cs(e)),lc(K0,t)}}function J0(e,t,n){e==="focusin"?(La(),Gn=t,ir=n,Gn.attachEvent("onpropertychange",jc)):e==="focusout"&&La()}function Z0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bl(ir)}function q0(e,t){if(e==="click")return Bl(t)}function ep(e,t){if(e==="input"||e==="change")return Bl(t)}function tp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:tp;function sr(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ni.call(t,l)||!Ke(e[l],t[l]))return!1}return!0}function Ta(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ma(e,t){var n=Ta(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ta(n)}}function Ec(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ec(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nc(){for(var e=window,t=cl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=cl(e.document)}return t}function ws(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function np(e){var t=Nc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ec(n.ownerDocument.documentElement,n)){if(r!==null&&ws(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Ma(n,o);var i=Ma(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rp=ct&&"documentMode"in document&&11>=document.documentMode,tn=null,xi=null,Kn=null,_i=!1;function Ra(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_i||tn==null||tn!==cl(r)||(r=tn,"selectionStart"in r&&ws(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kn&&sr(Kn,r)||(Kn=r,r=vl(xi,"onSelect"),0<r.length&&(t=new gs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=tn)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nn={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionend:Dr("Transition","TransitionEnd")},Fo={},Pc={};ct&&(Pc=document.createElement("div").style,"AnimationEvent"in window||(delete nn.animationend.animation,delete nn.animationiteration.animation,delete nn.animationstart.animation),"TransitionEvent"in window||delete nn.transitionend.transition);function Ul(e){if(Fo[e])return Fo[e];if(!nn[e])return e;var t=nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pc)return Fo[e]=t[n];return e}var Oc=Ul("animationend"),zc=Ul("animationiteration"),Lc=Ul("animationstart"),Tc=Ul("transitionend"),Mc=new Map,Ia="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){Mc.set(e,t),Kt(t,[e])}for(var Ao=0;Ao<Ia.length;Ao++){var Bo=Ia[Ao],lp=Bo.toLowerCase(),op=Bo[0].toUpperCase()+Bo.slice(1);Tt(lp,"on"+op)}Tt(Oc,"onAnimationEnd");Tt(zc,"onAnimationIteration");Tt(Lc,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(Tc,"onTransitionEnd");yn("onMouseEnter",["mouseout","mouseover"]);yn("onMouseLeave",["mouseout","mouseover"]);yn("onPointerEnter",["pointerout","pointerover"]);yn("onPointerLeave",["pointerout","pointerover"]);Kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ip=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));function $a(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,l0(r,t,void 0,e),e.currentTarget=null}function Rc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==o&&l.isPropagationStopped())break e;$a(l,s,c),o=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,c=s.currentTarget,s=s.listener,a!==o&&l.isPropagationStopped())break e;$a(l,s,c),o=a}}}if(dl)throw e=vi,dl=!1,vi=null,e}function V(e,t){var n=t[Ni];n===void 0&&(n=t[Ni]=new Set);var r=e+"__bubble";n.has(r)||(Ic(t,e,2,!1),n.add(r))}function Uo(e,t,n){var r=0;t&&(r|=4),Ic(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Fr]){e[Fr]=!0,Vu.forEach(function(n){n!=="selectionchange"&&(ip.has(n)||Uo(n,!1,e),Uo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fr]||(t[Fr]=!0,Uo("selectionchange",!1,t))}}function Ic(e,t,n,r){switch(yc(t)){case 1:var l=S0;break;case 4:l=x0;break;default:l=ms}n=l.bind(null,t,n,e),l=void 0,!gi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Vo(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;s!==null;){if(i=At(s),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}s=s.parentNode}}r=r.return}lc(function(){var c=o,g=cs(n),m=[];e:{var h=Mc.get(e);if(h!==void 0){var w=gs,S=e;switch(e){case"keypress":if(qr(n)===0)break e;case"keydown":case"keyup":w=$0;break;case"focusin":S="focus",w=Io;break;case"focusout":S="blur",w=Io;break;case"beforeblur":case"afterblur":w=Io;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ca;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=C0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=A0;break;case Oc:case zc:case Lc:w=N0;break;case Tc:w=U0;break;case"scroll":w=_0;break;case"wheel":w=W0;break;case"copy":case"cut":case"paste":w=O0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ea}var v=(t&4)!==0,O=!v&&e==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var u=c,d;u!==null;){d=u;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,f!==null&&(y=nr(u,f),y!=null&&v.push(ur(u,y,d)))),O)break;u=u.return}0<v.length&&(h=new w(h,S,null,n,g),m.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==mi&&(S=n.relatedTarget||n.fromElement)&&(At(S)||S[ft]))break e;if((w||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,w?(S=n.relatedTarget||n.toElement,w=c,S=S?At(S):null,S!==null&&(O=bt(S),S!==O||S.tag!==5&&S.tag!==6)&&(S=null)):(w=null,S=c),w!==S)){if(v=Ca,y="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ea,y="onPointerLeave",f="onPointerEnter",u="pointer"),O=w==null?h:rn(w),d=S==null?h:rn(S),h=new v(y,u+"leave",w,n,g),h.target=O,h.relatedTarget=d,y=null,At(g)===c&&(v=new v(f,u+"enter",S,n,g),v.target=d,v.relatedTarget=O,y=v),O=y,w&&S)t:{for(v=w,f=S,u=0,d=v;d;d=Jt(d))u++;for(d=0,y=f;y;y=Jt(y))d++;for(;0<u-d;)v=Jt(v),u--;for(;0<d-u;)f=Jt(f),d--;for(;u--;){if(v===f||f!==null&&v===f.alternate)break t;v=Jt(v),f=Jt(f)}v=null}else v=null;w!==null&&Da(m,h,w,v,!1),S!==null&&O!==null&&Da(m,O,S,v,!0)}}e:{if(h=c?rn(c):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var C=b0;else if(Oa(h))if(Cc)C=ep;else{C=Z0;var j=J0}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=q0);if(C&&(C=C(e,c))){kc(m,C,n,g);break e}j&&j(e,h,c),e==="focusout"&&(j=h._wrapperState)&&j.controlled&&h.type==="number"&&ui(h,"number",h.value)}switch(j=c?rn(c):window,e){case"focusin":(Oa(j)||j.contentEditable==="true")&&(tn=j,xi=c,Kn=null);break;case"focusout":Kn=xi=tn=null;break;case"mousedown":_i=!0;break;case"contextmenu":case"mouseup":case"dragend":_i=!1,Ra(m,n,g);break;case"selectionchange":if(rp)break;case"keydown":case"keyup":Ra(m,n,g)}var k;if(ys)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else en?xc(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Sc&&n.locale!=="ko"&&(en||P!=="onCompositionStart"?P==="onCompositionEnd"&&en&&(k=wc()):(St=g,hs="value"in St?St.value:St.textContent,en=!0)),j=vl(c,P),0<j.length&&(P=new ja(P,e,null,n,g),m.push({event:P,listeners:j}),k?P.data=k:(k=_c(n),k!==null&&(P.data=k)))),(k=Q0?Y0(e,n):X0(e,n))&&(c=vl(c,"onBeforeInput"),0<c.length&&(g=new ja("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:c}),g.data=k))}Rc(m,t)})}function ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=nr(e,n),o!=null&&r.unshift(ur(e,o,l)),o=nr(e,t),o!=null&&r.push(ur(e,o,l))),e=e.return}return r}function Jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Da(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,l?(a=nr(n,o),a!=null&&i.unshift(ur(n,a,s))):l||(a=nr(n,o),a!=null&&i.push(ur(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var sp=/\r\n?/g,ap=/\u0000|\uFFFD/g;function Fa(e){return(typeof e=="string"?e:""+e).replace(sp,`
`).replace(ap,"")}function Ar(e,t,n){if(t=Fa(t),Fa(e)!==t&&n)throw Error(x(425))}function yl(){}var ki=null,Ci=null;function ji(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ei=typeof setTimeout=="function"?setTimeout:void 0,up=typeof clearTimeout=="function"?clearTimeout:void 0,Aa=typeof Promise=="function"?Promise:void 0,cp=typeof queueMicrotask=="function"?queueMicrotask:typeof Aa<"u"?function(e){return Aa.resolve(null).then(e).catch(fp)}:Ei;function fp(e){setTimeout(function(){throw e})}function Wo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);or(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ba(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),et="__reactFiber$"+Pn,cr="__reactProps$"+Pn,ft="__reactContainer$"+Pn,Ni="__reactEvents$"+Pn,dp="__reactListeners$"+Pn,pp="__reactHandles$"+Pn;function At(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ba(e);e!==null;){if(n=e[et])return n;e=Ba(e)}return t}e=n,n=e.parentNode}return null}function Cr(e){return e=e[et]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function Vl(e){return e[cr]||null}var Pi=[],ln=-1;function Mt(e){return{current:e}}function W(e){0>ln||(e.current=Pi[ln],Pi[ln]=null,ln--)}function U(e,t){ln++,Pi[ln]=e.current,e.current=t}var Lt={},he=Mt(Lt),ke=Mt(!1),Ht=Lt;function wn(e,t){var n=e.type.contextTypes;if(!n)return Lt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ce(e){return e=e.childContextTypes,e!=null}function wl(){W(ke),W(he)}function Ua(e,t,n){if(he.current!==Lt)throw Error(x(168));U(he,t),U(ke,n)}function $c(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(x(108,Jd(e)||"Unknown",l));return X({},n,r)}function Sl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,Ht=he.current,U(he,e),U(ke,ke.current),!0}function Va(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=$c(e,t,Ht),r.__reactInternalMemoizedMergedChildContext=e,W(ke),W(he),U(he,e)):W(ke),U(ke,n)}var ot=null,Wl=!1,Ho=!1;function Dc(e){ot===null?ot=[e]:ot.push(e)}function mp(e){Wl=!0,Dc(e)}function Rt(){if(!Ho&&ot!==null){Ho=!0;var e=0,t=F;try{var n=ot;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ot=null,Wl=!1}catch(l){throw ot!==null&&(ot=ot.slice(e+1)),ac(fs,Rt),l}finally{F=t,Ho=!1}}return null}var on=[],sn=0,xl=null,_l=0,Ie=[],$e=0,Qt=null,it=1,st="";function Dt(e,t){on[sn++]=_l,on[sn++]=xl,xl=e,_l=t}function Fc(e,t,n){Ie[$e++]=it,Ie[$e++]=st,Ie[$e++]=Qt,Qt=e;var r=it;e=st;var l=32-Xe(r)-1;r&=~(1<<l),n+=1;var o=32-Xe(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,it=1<<32-Xe(t)+l|n<<l|r,st=o+e}else it=1<<o|n<<l|r,st=e}function Ss(e){e.return!==null&&(Dt(e,1),Fc(e,1,0))}function xs(e){for(;e===xl;)xl=on[--sn],on[sn]=null,_l=on[--sn],on[sn]=null;for(;e===Qt;)Qt=Ie[--$e],Ie[$e]=null,st=Ie[--$e],Ie[$e]=null,it=Ie[--$e],Ie[$e]=null}var Oe=null,Pe=null,H=!1,Ye=null;function Ac(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Wa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Oe=e,Pe=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Oe=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qt!==null?{id:it,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oe=e,Pe=null,!0):!1;default:return!1}}function Oi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zi(e){if(H){var t=Pe;if(t){var n=t;if(!Wa(e,t)){if(Oi(e))throw Error(x(418));t=jt(n.nextSibling);var r=Oe;t&&Wa(e,t)?Ac(r,n):(e.flags=e.flags&-4097|2,H=!1,Oe=e)}}else{if(Oi(e))throw Error(x(418));e.flags=e.flags&-4097|2,H=!1,Oe=e}}}function Ha(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function Br(e){if(e!==Oe)return!1;if(!H)return Ha(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ji(e.type,e.memoizedProps)),t&&(t=Pe)){if(Oi(e))throw Bc(),Error(x(418));for(;t;)Ac(e,t),t=jt(t.nextSibling)}if(Ha(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=Oe?jt(e.stateNode.nextSibling):null;return!0}function Bc(){for(var e=Pe;e;)e=jt(e.nextSibling)}function Sn(){Pe=Oe=null,H=!1}function _s(e){Ye===null?Ye=[e]:Ye.push(e)}var hp=mt.ReactCurrentBatchConfig;function Dn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function Ur(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qa(e){var t=e._init;return t(e._payload)}function Uc(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function l(f,u){return f=Ot(f,u),f.index=0,f.sibling=null,f}function o(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,d,y){return u===null||u.tag!==6?(u=Jo(d,f.mode,y),u.return=f,u):(u=l(u,d),u.return=f,u)}function a(f,u,d,y){var C=d.type;return C===qt?g(f,u,d.props.children,y,d.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gt&&Qa(C)===u.type)?(y=l(u,d.props),y.ref=Dn(f,u,d),y.return=f,y):(y=il(d.type,d.key,d.props,null,f.mode,y),y.ref=Dn(f,u,d),y.return=f,y)}function c(f,u,d,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Zo(d,f.mode,y),u.return=f,u):(u=l(u,d.children||[]),u.return=f,u)}function g(f,u,d,y,C){return u===null||u.tag!==7?(u=Wt(d,f.mode,y,C),u.return=f,u):(u=l(u,d),u.return=f,u)}function m(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Jo(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case zr:return d=il(u.type,u.key,u.props,null,f.mode,d),d.ref=Dn(f,null,u),d.return=f,d;case Zt:return u=Zo(u,f.mode,d),u.return=f,u;case gt:var y=u._init;return m(f,y(u._payload),d)}if(Vn(u)||Tn(u))return u=Wt(u,f.mode,d,null),u.return=f,u;Ur(f,u)}return null}function h(f,u,d,y){var C=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return C!==null?null:s(f,u,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case zr:return d.key===C?a(f,u,d,y):null;case Zt:return d.key===C?c(f,u,d,y):null;case gt:return C=d._init,h(f,u,C(d._payload),y)}if(Vn(d)||Tn(d))return C!==null?null:g(f,u,d,y,null);Ur(f,d)}return null}function w(f,u,d,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(d)||null,s(u,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case zr:return f=f.get(y.key===null?d:y.key)||null,a(u,f,y,C);case Zt:return f=f.get(y.key===null?d:y.key)||null,c(u,f,y,C);case gt:var j=y._init;return w(f,u,d,j(y._payload),C)}if(Vn(y)||Tn(y))return f=f.get(d)||null,g(u,f,y,C,null);Ur(u,y)}return null}function S(f,u,d,y){for(var C=null,j=null,k=u,P=u=0,K=null;k!==null&&P<d.length;P++){k.index>P?(K=k,k=null):K=k.sibling;var R=h(f,k,d[P],y);if(R===null){k===null&&(k=K);break}e&&k&&R.alternate===null&&t(f,k),u=o(R,u,P),j===null?C=R:j.sibling=R,j=R,k=K}if(P===d.length)return n(f,k),H&&Dt(f,P),C;if(k===null){for(;P<d.length;P++)k=m(f,d[P],y),k!==null&&(u=o(k,u,P),j===null?C=k:j.sibling=k,j=k);return H&&Dt(f,P),C}for(k=r(f,k);P<d.length;P++)K=w(k,f,P,d[P],y),K!==null&&(e&&K.alternate!==null&&k.delete(K.key===null?P:K.key),u=o(K,u,P),j===null?C=K:j.sibling=K,j=K);return e&&k.forEach(function(Ve){return t(f,Ve)}),H&&Dt(f,P),C}function v(f,u,d,y){var C=Tn(d);if(typeof C!="function")throw Error(x(150));if(d=C.call(d),d==null)throw Error(x(151));for(var j=C=null,k=u,P=u=0,K=null,R=d.next();k!==null&&!R.done;P++,R=d.next()){k.index>P?(K=k,k=null):K=k.sibling;var Ve=h(f,k,R.value,y);if(Ve===null){k===null&&(k=K);break}e&&k&&Ve.alternate===null&&t(f,k),u=o(Ve,u,P),j===null?C=Ve:j.sibling=Ve,j=Ve,k=K}if(R.done)return n(f,k),H&&Dt(f,P),C;if(k===null){for(;!R.done;P++,R=d.next())R=m(f,R.value,y),R!==null&&(u=o(R,u,P),j===null?C=R:j.sibling=R,j=R);return H&&Dt(f,P),C}for(k=r(f,k);!R.done;P++,R=d.next())R=w(k,f,P,R.value,y),R!==null&&(e&&R.alternate!==null&&k.delete(R.key===null?P:R.key),u=o(R,u,P),j===null?C=R:j.sibling=R,j=R);return e&&k.forEach(function(zn){return t(f,zn)}),H&&Dt(f,P),C}function O(f,u,d,y){if(typeof d=="object"&&d!==null&&d.type===qt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case zr:e:{for(var C=d.key,j=u;j!==null;){if(j.key===C){if(C=d.type,C===qt){if(j.tag===7){n(f,j.sibling),u=l(j,d.props.children),u.return=f,f=u;break e}}else if(j.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gt&&Qa(C)===j.type){n(f,j.sibling),u=l(j,d.props),u.ref=Dn(f,j,d),u.return=f,f=u;break e}n(f,j);break}else t(f,j);j=j.sibling}d.type===qt?(u=Wt(d.props.children,f.mode,y,d.key),u.return=f,f=u):(y=il(d.type,d.key,d.props,null,f.mode,y),y.ref=Dn(f,u,d),y.return=f,f=y)}return i(f);case Zt:e:{for(j=d.key;u!==null;){if(u.key===j)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=l(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Zo(d,f.mode,y),u.return=f,f=u}return i(f);case gt:return j=d._init,O(f,u,j(d._payload),y)}if(Vn(d))return S(f,u,d,y);if(Tn(d))return v(f,u,d,y);Ur(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=l(u,d),u.return=f,f=u):(n(f,u),u=Jo(d,f.mode,y),u.return=f,f=u),i(f)):n(f,u)}return O}var xn=Uc(!0),Vc=Uc(!1),kl=Mt(null),Cl=null,an=null,ks=null;function Cs(){ks=an=Cl=null}function js(e){var t=kl.current;W(kl),e._currentValue=t}function Li(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hn(e,t){Cl=e,ks=an=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(ks!==e)if(e={context:e,memoizedValue:t,next:null},an===null){if(Cl===null)throw Error(x(308));an=e,Cl.dependencies={lanes:0,firstContext:e}}else an=an.next=e;return t}var Bt=null;function Es(e){Bt===null?Bt=[e]:Bt.push(e)}function Wc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Es(t)):(n.next=l.next,l.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vt=!1;function Ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Et(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,dt(e,n)}return l=r.interleaved,l===null?(t.next=t,Es(r)):(t.next=l.next,l.next=t),r.interleaved=t,dt(e,n)}function el(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ds(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function jl(e,t,n,r){var l=e.updateQueue;vt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,c=a.next;a.next=null,i===null?o=c:i.next=c,i=a;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==i&&(s===null?g.firstBaseUpdate=c:s.next=c,g.lastBaseUpdate=a))}if(o!==null){var m=l.baseState;i=0,g=c=a=null,s=o;do{var h=s.lane,w=s.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var S=e,v=s;switch(h=t,w=n,v.tag){case 1:if(S=v.payload,typeof S=="function"){m=S.call(w,m,h);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=v.payload,h=typeof S=="function"?S.call(w,m,h):S,h==null)break e;m=X({},m,h);break e;case 2:vt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else w={eventTime:w,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(c=g=w,a=m):g=g.next=w,i|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(g===null&&(a=m),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Xt|=i,e.lanes=i,e.memoizedState=m}}function Xa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(x(191,l));l.call(r)}}}var jr={},nt=Mt(jr),fr=Mt(jr),dr=Mt(jr);function Ut(e){if(e===jr)throw Error(x(174));return e}function Ps(e,t){switch(U(dr,t),U(fr,e),U(nt,jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fi(t,e)}W(nt),U(nt,t)}function _n(){W(nt),W(fr),W(dr)}function Qc(e){Ut(dr.current);var t=Ut(nt.current),n=fi(t,e.type);t!==n&&(U(fr,e),U(nt,n))}function Os(e){fr.current===e&&(W(nt),W(fr))}var Q=Mt(0);function El(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qo=[];function zs(){for(var e=0;e<Qo.length;e++)Qo[e]._workInProgressVersionPrimary=null;Qo.length=0}var tl=mt.ReactCurrentDispatcher,Yo=mt.ReactCurrentBatchConfig,Yt=0,Y=null,ee=null,le=null,Nl=!1,bn=!1,pr=0,gp=0;function fe(){throw Error(x(321))}function Ls(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function Ts(e,t,n,r,l,o){if(Yt=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,tl.current=e===null||e.memoizedState===null?Sp:xp,e=n(r,l),bn){o=0;do{if(bn=!1,pr=0,25<=o)throw Error(x(301));o+=1,le=ee=null,t.updateQueue=null,tl.current=_p,e=n(r,l)}while(bn)}if(tl.current=Pl,t=ee!==null&&ee.next!==null,Yt=0,le=ee=Y=null,Nl=!1,t)throw Error(x(300));return e}function Ms(){var e=pr!==0;return pr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Y.memoizedState=le=e:le=le.next=e,le}function Be(){if(ee===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=le===null?Y.memoizedState:le.next;if(t!==null)le=t,ee=e;else{if(e===null)throw Error(x(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},le===null?Y.memoizedState=le=e:le=le.next=e}return le}function mr(e,t){return typeof t=="function"?t(e):t}function Xo(e){var t=Be(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=ee,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,a=null,c=o;do{var g=c.lane;if((Yt&g)===g)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=m,i=r):a=a.next=m,Y.lanes|=g,Xt|=g}c=c.next}while(c!==null&&c!==o);a===null?i=r:a.next=s,Ke(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,Y.lanes|=o,Xt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Go(e){var t=Be(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Ke(o,t.memoizedState)||(_e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Yc(){}function Xc(e,t){var n=Y,r=Be(),l=t(),o=!Ke(r.memoizedState,l);if(o&&(r.memoizedState=l,_e=!0),r=r.queue,Rs(bc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,hr(9,Kc.bind(null,n,r,l,t),void 0,null),oe===null)throw Error(x(349));Yt&30||Gc(n,t,l)}return l}function Gc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kc(e,t,n,r){t.value=n,t.getSnapshot=r,Jc(t)&&Zc(e)}function bc(e,t,n){return n(function(){Jc(t)&&Zc(e)})}function Jc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function Zc(e){var t=dt(e,1);t!==null&&Ge(t,e,1,-1)}function Ga(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},t.queue=e,e=e.dispatch=wp.bind(null,Y,e),[t.memoizedState,e]}function hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qc(){return Be().memoizedState}function nl(e,t,n,r){var l=Je();Y.flags|=e,l.memoizedState=hr(1|t,n,void 0,r===void 0?null:r)}function Hl(e,t,n,r){var l=Be();r=r===void 0?null:r;var o=void 0;if(ee!==null){var i=ee.memoizedState;if(o=i.destroy,r!==null&&Ls(r,i.deps)){l.memoizedState=hr(t,n,o,r);return}}Y.flags|=e,l.memoizedState=hr(1|t,n,o,r)}function Ka(e,t){return nl(8390656,8,e,t)}function Rs(e,t){return Hl(2048,8,e,t)}function ef(e,t){return Hl(4,2,e,t)}function tf(e,t){return Hl(4,4,e,t)}function nf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rf(e,t,n){return n=n!=null?n.concat([e]):null,Hl(4,4,nf.bind(null,t,e),n)}function Is(){}function lf(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function of(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sf(e,t,n){return Yt&21?(Ke(n,t)||(n=fc(),Y.lanes|=n,Xt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function vp(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Yo.transition;Yo.transition={};try{e(!1),t()}finally{F=n,Yo.transition=r}}function af(){return Be().memoizedState}function yp(e,t,n){var r=Pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uf(e))cf(t,n);else if(n=Wc(e,t,n,r),n!==null){var l=ye();Ge(n,e,r,l),ff(n,t,r)}}function wp(e,t,n){var r=Pt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uf(e))cf(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,Ke(s,i)){var a=t.interleaved;a===null?(l.next=l,Es(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=Wc(e,t,l,r),n!==null&&(l=ye(),Ge(n,e,r,l),ff(n,t,r))}}function uf(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function cf(e,t){bn=Nl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ff(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ds(e,n)}}var Pl={readContext:Ae,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},Sp={readContext:Ae,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Ka,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,nl(4194308,4,nf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return nl(4194308,4,e,t)},useInsertionEffect:function(e,t){return nl(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yp.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:Ga,useDebugValue:Is,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Ga(!1),t=e[0];return e=vp.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,l=Je();if(H){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),oe===null)throw Error(x(349));Yt&30||Gc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Ka(bc.bind(null,r,o,e),[e]),r.flags|=2048,hr(9,Kc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Je(),t=oe.identifierPrefix;if(H){var n=st,r=it;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xp={readContext:Ae,useCallback:lf,useContext:Ae,useEffect:Rs,useImperativeHandle:rf,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:of,useReducer:Xo,useRef:qc,useState:function(){return Xo(mr)},useDebugValue:Is,useDeferredValue:function(e){var t=Be();return sf(t,ee.memoizedState,e)},useTransition:function(){var e=Xo(mr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Yc,useSyncExternalStore:Xc,useId:af,unstable_isNewReconciler:!1},_p={readContext:Ae,useCallback:lf,useContext:Ae,useEffect:Rs,useImperativeHandle:rf,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:of,useReducer:Go,useRef:qc,useState:function(){return Go(mr)},useDebugValue:Is,useDeferredValue:function(e){var t=Be();return ee===null?t.memoizedState=e:sf(t,ee.memoizedState,e)},useTransition:function(){var e=Go(mr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Yc,useSyncExternalStore:Xc,useId:af,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ti(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ql={isMounted:function(e){return(e=e._reactInternals)?bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),l=Pt(e),o=ut(r,l);o.payload=t,n!=null&&(o.callback=n),t=Et(e,o,l),t!==null&&(Ge(t,e,l,r),el(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),l=Pt(e),o=ut(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Et(e,o,l),t!==null&&(Ge(t,e,l,r),el(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Pt(e),l=ut(n,r);l.tag=2,t!=null&&(l.callback=t),t=Et(e,l,r),t!==null&&(Ge(t,e,r,n),el(t,e,r))}};function ba(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!sr(n,r)||!sr(l,o):!0}function df(e,t,n){var r=!1,l=Lt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ae(o):(l=Ce(t)?Ht:he.current,r=t.contextTypes,o=(r=r!=null)?wn(e,l):Lt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ql,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ja(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ql.enqueueReplaceState(t,t.state,null)}function Mi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ns(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ae(o):(o=Ce(t)?Ht:he.current,l.context=wn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ti(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Ql.enqueueReplaceState(l,l.state,null),jl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function kn(e,t){try{var n="",r=t;do n+=bd(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Ko(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ri(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kp=typeof WeakMap=="function"?WeakMap:Map;function pf(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zl||(zl=!0,Hi=r),Ri(e,t)},n}function mf(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ri(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ri(e,t),typeof r!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Za(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new kp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Dp.bind(null,e,t,n),t.then(e,e))}function qa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function eu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,Et(n,t,1))),n.lanes|=1),e)}var Cp=mt.ReactCurrentOwner,_e=!1;function ve(e,t,n,r){t.child=e===null?Vc(t,null,n,r):xn(t,e.child,n,r)}function tu(e,t,n,r,l){n=n.render;var o=t.ref;return hn(t,l),r=Ts(e,t,n,r,o,l),n=Ms(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,pt(e,t,l)):(H&&n&&Ss(t),t.flags|=1,ve(e,t,r,l),t.child)}function nu(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ws(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,hf(e,t,o,r,l)):(e=il(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:sr,n(i,r)&&e.ref===t.ref)return pt(e,t,l)}return t.flags|=1,e=Ot(o,r),e.ref=t.ref,e.return=t,t.child=e}function hf(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,pt(e,t,l)}return Ii(e,t,n,r,l)}function gf(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(cn,Ne),Ne|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(cn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(cn,Ne),Ne|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(cn,Ne),Ne|=r;return ve(e,t,l,n),t.child}function vf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ii(e,t,n,r,l){var o=Ce(n)?Ht:he.current;return o=wn(t,o),hn(t,l),n=Ts(e,t,n,r,o,l),r=Ms(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,pt(e,t,l)):(H&&r&&Ss(t),t.flags|=1,ve(e,t,n,l),t.child)}function ru(e,t,n,r,l){if(Ce(n)){var o=!0;Sl(t)}else o=!1;if(hn(t,l),t.stateNode===null)rl(e,t),df(t,n,r),Mi(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ae(c):(c=Ce(n)?Ht:he.current,c=wn(t,c));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Ja(t,i,r,c),vt=!1;var h=t.memoizedState;i.state=h,jl(t,r,i,l),a=t.memoizedState,s!==r||h!==a||ke.current||vt?(typeof g=="function"&&(Ti(t,n,g,r),a=t.memoizedState),(s=vt||ba(t,n,s,r,h,a,c))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Hc(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:He(t.type,s),i.props=c,m=t.pendingProps,h=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ae(a):(a=Ce(n)?Ht:he.current,a=wn(t,a));var w=n.getDerivedStateFromProps;(g=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==m||h!==a)&&Ja(t,i,r,a),vt=!1,h=t.memoizedState,i.state=h,jl(t,r,i,l);var S=t.memoizedState;s!==m||h!==S||ke.current||vt?(typeof w=="function"&&(Ti(t,n,w,r),S=t.memoizedState),(c=vt||ba(t,n,c,r,h,S,a)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,S,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,S,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),i.props=r,i.state=S,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return $i(e,t,n,r,o,l)}function $i(e,t,n,r,l,o){vf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&Va(t,n,!1),pt(e,t,o);r=t.stateNode,Cp.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=xn(t,e.child,null,o),t.child=xn(t,null,s,o)):ve(e,t,s,o),t.memoizedState=r.state,l&&Va(t,n,!0),t.child}function yf(e){var t=e.stateNode;t.pendingContext?Ua(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ua(e,t.context,!1),Ps(e,t.containerInfo)}function lu(e,t,n,r,l){return Sn(),_s(l),t.flags|=256,ve(e,t,n,r),t.child}var Di={dehydrated:null,treeContext:null,retryLane:0};function Fi(e){return{baseLanes:e,cachePool:null,transitions:null}}function wf(e,t,n){var r=t.pendingProps,l=Q.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(Q,l&1),e===null)return zi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Gl(i,r,0,null),e=Wt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Fi(n),t.memoizedState=Di,e):$s(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return jp(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Ot(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=Ot(s,o):(o=Wt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Fi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Di,r}return o=e.child,e=o.sibling,r=Ot(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $s(e,t){return t=Gl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vr(e,t,n,r){return r!==null&&_s(r),xn(t,e.child,null,n),e=$s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jp(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Ko(Error(x(422))),Vr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Gl({mode:"visible",children:r.children},l,0,null),o=Wt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&xn(t,e.child,null,i),t.child.memoizedState=Fi(i),t.memoizedState=Di,o);if(!(t.mode&1))return Vr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(x(419)),r=Ko(o,r,void 0),Vr(e,t,i,r)}if(s=(i&e.childLanes)!==0,_e||s){if(r=oe,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,dt(e,l),Ge(r,e,l,-1))}return Vs(),r=Ko(Error(x(421))),Vr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Fp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Pe=jt(l.nextSibling),Oe=t,H=!0,Ye=null,e!==null&&(Ie[$e++]=it,Ie[$e++]=st,Ie[$e++]=Qt,it=e.id,st=e.overflow,Qt=t),t=$s(t,r.children),t.flags|=4096,t)}function ou(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Li(e.return,t,n)}function bo(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Sf(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ve(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ou(e,n,t);else if(e.tag===19)ou(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Q,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&El(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),bo(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&El(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}bo(t,!0,n,null,o);break;case"together":bo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function rl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=Ot(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ot(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ep(e,t,n){switch(t.tag){case 3:yf(t),Sn();break;case 5:Qc(t);break;case 1:Ce(t.type)&&Sl(t);break;case 4:Ps(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;U(kl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?wf(e,t,n):(U(Q,Q.current&1),e=pt(e,t,n),e!==null?e.sibling:null);U(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sf(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,gf(e,t,n)}return pt(e,t,n)}var xf,Ai,_f,kf;xf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ai=function(){};_f=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ut(nt.current);var o=null;switch(n){case"input":l=si(e,l),r=si(e,r),o=[];break;case"select":l=X({},l,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":l=ci(e,l),r=ci(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=yl)}di(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(er.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(er.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&V("scroll",e),o||s===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};kf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Np(e,t,n){var r=t.pendingProps;switch(xs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return Ce(t.type)&&wl(),de(t),null;case 3:return r=t.stateNode,_n(),W(ke),W(he),zs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(Xi(Ye),Ye=null))),Ai(e,t),de(t),null;case 5:Os(t);var l=Ut(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)_f(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return de(t),null}if(e=Ut(nt.current),Br(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[et]=t,r[cr]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(l=0;l<Hn.length;l++)V(Hn[l],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":ma(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":ga(r,o),V("invalid",r)}di(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Ar(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Ar(r.textContent,s,e),l=["children",""+s]):er.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&V("scroll",r)}switch(n){case"input":Lr(r),ha(r,o,!0);break;case"textarea":Lr(r),va(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=yl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[et]=t,e[cr]=r,xf(e,t,!1,!1),t.stateNode=e;e:{switch(i=pi(n,r),n){case"dialog":V("cancel",e),V("close",e),l=r;break;case"iframe":case"object":case"embed":V("load",e),l=r;break;case"video":case"audio":for(l=0;l<Hn.length;l++)V(Hn[l],e);l=r;break;case"source":V("error",e),l=r;break;case"img":case"image":case"link":V("error",e),V("load",e),l=r;break;case"details":V("toggle",e),l=r;break;case"input":ma(e,r),l=si(e,r),V("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=X({},r,{value:void 0}),V("invalid",e);break;case"textarea":ga(e,r),l=ci(e,r),V("invalid",e);break;default:l=r}di(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?qu(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ju(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&tr(e,a):typeof a=="number"&&tr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(er.hasOwnProperty(o)?a!=null&&o==="onScroll"&&V("scroll",e):a!=null&&is(e,o,a,i))}switch(n){case"input":Lr(e),ha(e,r,!1);break;case"textarea":Lr(e),va(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?fn(e,!!r.multiple,o,!1):r.defaultValue!=null&&fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=yl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)kf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Ut(dr.current),Ut(nt.current),Br(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(o=r.nodeValue!==n)&&(e=Oe,e!==null))switch(e.tag){case 3:Ar(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ar(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return de(t),null;case 13:if(W(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Pe!==null&&t.mode&1&&!(t.flags&128))Bc(),Sn(),t.flags|=98560,o=!1;else if(o=Br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(x(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(x(317));o[et]=t}else Sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),o=!1}else Ye!==null&&(Xi(Ye),Ye=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?te===0&&(te=3):Vs())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return _n(),Ai(e,t),e===null&&ar(t.stateNode.containerInfo),de(t),null;case 10:return js(t.type._context),de(t),null;case 17:return Ce(t.type)&&wl(),de(t),null;case 19:if(W(Q),o=t.memoizedState,o===null)return de(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)Fn(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=El(e),i!==null){for(t.flags|=128,Fn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>Cn&&(t.flags|=128,r=!0,Fn(o,!1),t.lanes=4194304)}else{if(!r)if(e=El(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!H)return de(t),null}else 2*J()-o.renderingStartTime>Cn&&n!==1073741824&&(t.flags|=128,r=!0,Fn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=Q.current,U(Q,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Us(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Pp(e,t){switch(xs(t),t.tag){case 1:return Ce(t.type)&&wl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(),W(ke),W(he),zs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Os(t),null;case 13:if(W(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));Sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Q),null;case 4:return _n(),null;case 10:return js(t.type._context),null;case 22:case 23:return Us(),null;case 24:return null;default:return null}}var Wr=!1,me=!1,Op=typeof WeakSet=="function"?WeakSet:Set,E=null;function un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Bi(e,t,n){try{n()}catch(r){G(e,t,r)}}var iu=!1;function zp(e,t){if(ki=hl,e=Nc(),ws(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,c=0,g=0,m=e,h=null;t:for(;;){for(var w;m!==n||l!==0&&m.nodeType!==3||(s=i+l),m!==o||r!==0&&m.nodeType!==3||(a=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(w=m.firstChild)!==null;)h=m,m=w;for(;;){if(m===e)break t;if(h===n&&++c===l&&(s=i),h===o&&++g===r&&(a=i),(w=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ci={focusedElem:e,selectionRange:n},hl=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var v=S.memoizedProps,O=S.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:He(t.type,v),O);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(y){G(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return S=iu,iu=!1,S}function Jn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Bi(t,n,o)}l=l.next}while(l!==r)}}function Yl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ui(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cf(e){var t=e.alternate;t!==null&&(e.alternate=null,Cf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[cr],delete t[Ni],delete t[dp],delete t[pp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jf(e){return e.tag===5||e.tag===3||e.tag===4}function su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yl));else if(r!==4&&(e=e.child,e!==null))for(Vi(e,t,n),e=e.sibling;e!==null;)Vi(e,t,n),e=e.sibling}function Wi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wi(e,t,n),e=e.sibling;e!==null;)Wi(e,t,n),e=e.sibling}var se=null,Qe=!1;function ht(e,t,n){for(n=n.child;n!==null;)Ef(e,t,n),n=n.sibling}function Ef(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 5:me||un(n,t);case 6:var r=se,l=Qe;se=null,ht(e,t,n),se=r,Qe=l,se!==null&&(Qe?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Qe?(e=se,n=n.stateNode,e.nodeType===8?Wo(e.parentNode,n):e.nodeType===1&&Wo(e,n),or(e)):Wo(se,n.stateNode));break;case 4:r=se,l=Qe,se=n.stateNode.containerInfo,Qe=!0,ht(e,t,n),se=r,Qe=l;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Bi(n,t,i),l=l.next}while(l!==r)}ht(e,t,n);break;case 1:if(!me&&(un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){G(n,t,s)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,ht(e,t,n),me=r):ht(e,t,n);break;default:ht(e,t,n)}}function au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Op),t.forEach(function(r){var l=Ap.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:se=s.stateNode,Qe=!1;break e;case 3:se=s.stateNode.containerInfo,Qe=!0;break e;case 4:se=s.stateNode.containerInfo,Qe=!0;break e}s=s.return}if(se===null)throw Error(x(160));Ef(o,i,l),se=null,Qe=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){G(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nf(t,e),t=t.sibling}function Nf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),be(e),r&4){try{Jn(3,e,e.return),Yl(3,e)}catch(v){G(e,e.return,v)}try{Jn(5,e,e.return)}catch(v){G(e,e.return,v)}}break;case 1:We(t,e),be(e),r&512&&n!==null&&un(n,n.return);break;case 5:if(We(t,e),be(e),r&512&&n!==null&&un(n,n.return),e.flags&32){var l=e.stateNode;try{tr(l,"")}catch(v){G(e,e.return,v)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Gu(l,o),pi(s,i);var c=pi(s,o);for(i=0;i<a.length;i+=2){var g=a[i],m=a[i+1];g==="style"?qu(l,m):g==="dangerouslySetInnerHTML"?Ju(l,m):g==="children"?tr(l,m):is(l,g,m,c)}switch(s){case"input":ai(l,o);break;case"textarea":Ku(l,o);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?fn(l,!!o.multiple,w,!1):h!==!!o.multiple&&(o.defaultValue!=null?fn(l,!!o.multiple,o.defaultValue,!0):fn(l,!!o.multiple,o.multiple?[]:"",!1))}l[cr]=o}catch(v){G(e,e.return,v)}}break;case 6:if(We(t,e),be(e),r&4){if(e.stateNode===null)throw Error(x(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(v){G(e,e.return,v)}}break;case 3:if(We(t,e),be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{or(t.containerInfo)}catch(v){G(e,e.return,v)}break;case 4:We(t,e),be(e);break;case 13:We(t,e),be(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(As=J())),r&4&&au(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(me=(c=me)||g,We(t,e),me=c):We(t,e),be(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(E=e,g=e.child;g!==null;){for(m=E=g;E!==null;){switch(h=E,w=h.child,h.tag){case 0:case 11:case 14:case 15:Jn(4,h,h.return);break;case 1:un(h,h.return);var S=h.stateNode;if(typeof S.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(v){G(r,n,v)}}break;case 5:un(h,h.return);break;case 22:if(h.memoizedState!==null){cu(m);continue}}w!==null?(w.return=h,E=w):cu(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{l=m.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,a=m.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Zu("display",i))}catch(v){G(e,e.return,v)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(v){G(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:We(t,e),be(e),r&4&&au(e);break;case 21:break;default:We(t,e),be(e)}}function be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jf(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(tr(l,""),r.flags&=-33);var o=su(e);Wi(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=su(e);Vi(e,s,i);break;default:throw Error(x(161))}}catch(a){G(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lp(e,t,n){E=e,Pf(e)}function Pf(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var l=E,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Wr;if(!i){var s=l.alternate,a=s!==null&&s.memoizedState!==null||me;s=Wr;var c=me;if(Wr=i,(me=a)&&!c)for(E=l;E!==null;)i=E,a=i.child,i.tag===22&&i.memoizedState!==null?fu(l):a!==null?(a.return=i,E=a):fu(l);for(;o!==null;)E=o,Pf(o),o=o.sibling;E=l,Wr=s,me=c}uu(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,E=o):uu(e)}}function uu(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Yl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Xa(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xa(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&or(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}me||t.flags&512&&Ui(t)}catch(h){G(t,t.return,h)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function cu(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function fu(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Yl(4,t)}catch(a){G(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){G(t,l,a)}}var o=t.return;try{Ui(t)}catch(a){G(t,o,a)}break;case 5:var i=t.return;try{Ui(t)}catch(a){G(t,i,a)}}}catch(a){G(t,t.return,a)}if(t===e){E=null;break}var s=t.sibling;if(s!==null){s.return=t.return,E=s;break}E=t.return}}var Tp=Math.ceil,Ol=mt.ReactCurrentDispatcher,Ds=mt.ReactCurrentOwner,Fe=mt.ReactCurrentBatchConfig,I=0,oe=null,q=null,ue=0,Ne=0,cn=Mt(0),te=0,gr=null,Xt=0,Xl=0,Fs=0,Zn=null,xe=null,As=0,Cn=1/0,lt=null,zl=!1,Hi=null,Nt=null,Hr=!1,xt=null,Ll=0,qn=0,Qi=null,ll=-1,ol=0;function ye(){return I&6?J():ll!==-1?ll:ll=J()}function Pt(e){return e.mode&1?I&2&&ue!==0?ue&-ue:hp.transition!==null?(ol===0&&(ol=fc()),ol):(e=F,e!==0||(e=window.event,e=e===void 0?16:yc(e.type)),e):1}function Ge(e,t,n,r){if(50<qn)throw qn=0,Qi=null,Error(x(185));_r(e,n,r),(!(I&2)||e!==oe)&&(e===oe&&(!(I&2)&&(Xl|=n),te===4&&wt(e,ue)),je(e,r),n===1&&I===0&&!(t.mode&1)&&(Cn=J()+500,Wl&&Rt()))}function je(e,t){var n=e.callbackNode;h0(e,t);var r=ml(e,e===oe?ue:0);if(r===0)n!==null&&Sa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sa(n),t===1)e.tag===0?mp(du.bind(null,e)):Dc(du.bind(null,e)),cp(function(){!(I&6)&&Rt()}),n=null;else{switch(dc(r)){case 1:n=fs;break;case 4:n=uc;break;case 16:n=pl;break;case 536870912:n=cc;break;default:n=pl}n=$f(n,Of.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Of(e,t){if(ll=-1,ol=0,I&6)throw Error(x(327));var n=e.callbackNode;if(gn()&&e.callbackNode!==n)return null;var r=ml(e,e===oe?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Tl(e,r);else{t=r;var l=I;I|=2;var o=Lf();(oe!==e||ue!==t)&&(lt=null,Cn=J()+500,Vt(e,t));do try{Ip();break}catch(s){zf(e,s)}while(!0);Cs(),Ol.current=o,I=l,q!==null?t=0:(oe=null,ue=0,t=te)}if(t!==0){if(t===2&&(l=yi(e),l!==0&&(r=l,t=Yi(e,l))),t===1)throw n=gr,Vt(e,0),wt(e,r),je(e,J()),n;if(t===6)wt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Mp(l)&&(t=Tl(e,r),t===2&&(o=yi(e),o!==0&&(r=o,t=Yi(e,o))),t===1))throw n=gr,Vt(e,0),wt(e,r),je(e,J()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:Ft(e,xe,lt);break;case 3:if(wt(e,r),(r&130023424)===r&&(t=As+500-J(),10<t)){if(ml(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ei(Ft.bind(null,e,xe,lt),t);break}Ft(e,xe,lt);break;case 4:if(wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Xe(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tp(r/1960))-r,10<r){e.timeoutHandle=Ei(Ft.bind(null,e,xe,lt),r);break}Ft(e,xe,lt);break;case 5:Ft(e,xe,lt);break;default:throw Error(x(329))}}}return je(e,J()),e.callbackNode===n?Of.bind(null,e):null}function Yi(e,t){var n=Zn;return e.current.memoizedState.isDehydrated&&(Vt(e,t).flags|=256),e=Tl(e,t),e!==2&&(t=xe,xe=n,t!==null&&Xi(t)),e}function Xi(e){xe===null?xe=e:xe.push.apply(xe,e)}function Mp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Ke(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wt(e,t){for(t&=~Fs,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function du(e){if(I&6)throw Error(x(327));gn();var t=ml(e,0);if(!(t&1))return je(e,J()),null;var n=Tl(e,t);if(e.tag!==0&&n===2){var r=yi(e);r!==0&&(t=r,n=Yi(e,r))}if(n===1)throw n=gr,Vt(e,0),wt(e,t),je(e,J()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ft(e,xe,lt),je(e,J()),null}function Bs(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Cn=J()+500,Wl&&Rt())}}function Gt(e){xt!==null&&xt.tag===0&&!(I&6)&&gn();var t=I;I|=1;var n=Fe.transition,r=F;try{if(Fe.transition=null,F=1,e)return e()}finally{F=r,Fe.transition=n,I=t,!(I&6)&&Rt()}}function Us(){Ne=cn.current,W(cn)}function Vt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,up(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(xs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wl();break;case 3:_n(),W(ke),W(he),zs();break;case 5:Os(r);break;case 4:_n();break;case 13:W(Q);break;case 19:W(Q);break;case 10:js(r.type._context);break;case 22:case 23:Us()}n=n.return}if(oe=e,q=e=Ot(e.current,null),ue=Ne=t,te=0,gr=null,Fs=Xl=Xt=0,xe=Zn=null,Bt!==null){for(t=0;t<Bt.length;t++)if(n=Bt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Bt=null}return e}function zf(e,t){do{var n=q;try{if(Cs(),tl.current=Pl,Nl){for(var r=Y.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Nl=!1}if(Yt=0,le=ee=Y=null,bn=!1,pr=0,Ds.current=null,n===null||n.return===null){te=1,gr=t,q=null;break}e:{var o=e,i=n.return,s=n,a=t;if(t=ue,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,g=s,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=qa(i);if(w!==null){w.flags&=-257,eu(w,i,s,o,t),w.mode&1&&Za(o,c,t),t=w,a=c;var S=t.updateQueue;if(S===null){var v=new Set;v.add(a),t.updateQueue=v}else S.add(a);break e}else{if(!(t&1)){Za(o,c,t),Vs();break e}a=Error(x(426))}}else if(H&&s.mode&1){var O=qa(i);if(O!==null){!(O.flags&65536)&&(O.flags|=256),eu(O,i,s,o,t),_s(kn(a,s));break e}}o=a=kn(a,s),te!==4&&(te=2),Zn===null?Zn=[o]:Zn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=pf(o,a,t);Ya(o,f);break e;case 1:s=a;var u=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Nt===null||!Nt.has(d)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=mf(o,s,t);Ya(o,y);break e}}o=o.return}while(o!==null)}Mf(n)}catch(C){t=C,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function Lf(){var e=Ol.current;return Ol.current=Pl,e===null?Pl:e}function Vs(){(te===0||te===3||te===2)&&(te=4),oe===null||!(Xt&268435455)&&!(Xl&268435455)||wt(oe,ue)}function Tl(e,t){var n=I;I|=2;var r=Lf();(oe!==e||ue!==t)&&(lt=null,Vt(e,t));do try{Rp();break}catch(l){zf(e,l)}while(!0);if(Cs(),I=n,Ol.current=r,q!==null)throw Error(x(261));return oe=null,ue=0,te}function Rp(){for(;q!==null;)Tf(q)}function Ip(){for(;q!==null&&!i0();)Tf(q)}function Tf(e){var t=If(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Mf(e):q=t,Ds.current=null}function Mf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Pp(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,q=null;return}}else if(n=Np(n,t,Ne),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);te===0&&(te=5)}function Ft(e,t,n){var r=F,l=Fe.transition;try{Fe.transition=null,F=1,$p(e,t,n,r)}finally{Fe.transition=l,F=r}return null}function $p(e,t,n,r){do gn();while(xt!==null);if(I&6)throw Error(x(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(g0(e,o),e===oe&&(q=oe=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hr||(Hr=!0,$f(pl,function(){return gn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fe.transition,Fe.transition=null;var i=F;F=1;var s=I;I|=4,Ds.current=null,zp(e,n),Nf(n,e),np(Ci),hl=!!ki,Ci=ki=null,e.current=n,Lp(n),s0(),I=s,F=i,Fe.transition=o}else e.current=n;if(Hr&&(Hr=!1,xt=e,Ll=l),o=e.pendingLanes,o===0&&(Nt=null),c0(n.stateNode),je(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(zl)throw zl=!1,e=Hi,Hi=null,e;return Ll&1&&e.tag!==0&&gn(),o=e.pendingLanes,o&1?e===Qi?qn++:(qn=0,Qi=e):qn=0,Rt(),null}function gn(){if(xt!==null){var e=dc(Ll),t=Fe.transition,n=F;try{if(Fe.transition=null,F=16>e?16:e,xt===null)var r=!1;else{if(e=xt,xt=null,Ll=0,I&6)throw Error(x(331));var l=I;for(I|=4,E=e.current;E!==null;){var o=E,i=o.child;if(E.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(E=c;E!==null;){var g=E;switch(g.tag){case 0:case 11:case 15:Jn(8,g,o)}var m=g.child;if(m!==null)m.return=g,E=m;else for(;E!==null;){g=E;var h=g.sibling,w=g.return;if(Cf(g),g===c){E=null;break}if(h!==null){h.return=w,E=h;break}E=w}}}var S=o.alternate;if(S!==null){var v=S.child;if(v!==null){S.child=null;do{var O=v.sibling;v.sibling=null,v=O}while(v!==null)}}E=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,E=i;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Jn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,E=f;break e}E=o.return}}var u=e.current;for(E=u;E!==null;){i=E;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,E=d;else e:for(i=u;E!==null;){if(s=E,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Yl(9,s)}}catch(C){G(s,s.return,C)}if(s===i){E=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,E=y;break e}E=s.return}}if(I=l,Rt(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Fl,e)}catch{}r=!0}return r}finally{F=n,Fe.transition=t}}return!1}function pu(e,t,n){t=kn(n,t),t=pf(e,t,1),e=Et(e,t,1),t=ye(),e!==null&&(_r(e,1,t),je(e,t))}function G(e,t,n){if(e.tag===3)pu(e,e,n);else for(;t!==null;){if(t.tag===3){pu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nt===null||!Nt.has(r))){e=kn(n,e),e=mf(t,e,1),t=Et(t,e,1),e=ye(),t!==null&&(_r(t,1,e),je(t,e));break}}t=t.return}}function Dp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(ue&n)===n&&(te===4||te===3&&(ue&130023424)===ue&&500>J()-As?Vt(e,0):Fs|=n),je(e,t)}function Rf(e,t){t===0&&(e.mode&1?(t=Rr,Rr<<=1,!(Rr&130023424)&&(Rr=4194304)):t=1);var n=ye();e=dt(e,t),e!==null&&(_r(e,t,n),je(e,n))}function Fp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rf(e,n)}function Ap(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),Rf(e,n)}var If;If=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,Ep(e,t,n);_e=!!(e.flags&131072)}else _e=!1,H&&t.flags&1048576&&Fc(t,_l,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;rl(e,t),e=t.pendingProps;var l=wn(t,he.current);hn(t,n),l=Ts(null,t,r,e,l,n);var o=Ms();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(o=!0,Sl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ns(t),l.updater=Ql,t.stateNode=l,l._reactInternals=t,Mi(t,r,e,n),t=$i(null,t,r,!0,o,n)):(t.tag=0,H&&o&&Ss(t),ve(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(rl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Up(r),e=He(r,e),l){case 0:t=Ii(null,t,r,e,n);break e;case 1:t=ru(null,t,r,e,n);break e;case 11:t=tu(null,t,r,e,n);break e;case 14:t=nu(null,t,r,He(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:He(r,l),Ii(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:He(r,l),ru(e,t,r,l,n);case 3:e:{if(yf(t),e===null)throw Error(x(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Hc(e,t),jl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=kn(Error(x(423)),t),t=lu(e,t,r,n,l);break e}else if(r!==l){l=kn(Error(x(424)),t),t=lu(e,t,r,n,l);break e}else for(Pe=jt(t.stateNode.containerInfo.firstChild),Oe=t,H=!0,Ye=null,n=Vc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sn(),r===l){t=pt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Qc(t),e===null&&zi(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,ji(r,l)?i=null:o!==null&&ji(r,o)&&(t.flags|=32),vf(e,t),ve(e,t,i,n),t.child;case 6:return e===null&&zi(t),null;case 13:return wf(e,t,n);case 4:return Ps(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:He(r,l),tu(e,t,r,l,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,U(kl,r._currentValue),r._currentValue=i,o!==null)if(Ke(o.value,i)){if(o.children===l.children&&!ke.current){t=pt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=ut(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?a.next=a:(a.next=g.next,g.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Li(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(x(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Li(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ve(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,hn(t,n),l=Ae(l),r=r(l),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,l=He(r,t.pendingProps),l=He(r.type,l),nu(e,t,r,l,n);case 15:return hf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:He(r,l),rl(e,t),t.tag=1,Ce(r)?(e=!0,Sl(t)):e=!1,hn(t,n),df(t,r,l),Mi(t,r,l,n),$i(null,t,r,!0,e,n);case 19:return Sf(e,t,n);case 22:return gf(e,t,n)}throw Error(x(156,t.tag))};function $f(e,t){return ac(e,t)}function Bp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new Bp(e,t,n,r)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Up(e){if(typeof e=="function")return Ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===as)return 11;if(e===us)return 14}return 2}function Ot(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function il(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Ws(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case qt:return Wt(n.children,l,o,t);case ss:i=8,l|=8;break;case ri:return e=De(12,n,t,l|2),e.elementType=ri,e.lanes=o,e;case li:return e=De(13,n,t,l),e.elementType=li,e.lanes=o,e;case oi:return e=De(19,n,t,l),e.elementType=oi,e.lanes=o,e;case Qu:return Gl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wu:i=10;break e;case Hu:i=9;break e;case as:i=11;break e;case us:i=14;break e;case gt:i=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=De(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Wt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Gl(e,t,n,r){return e=De(22,e,r,t),e.elementType=Qu,e.lanes=n,e.stateNode={isHidden:!1},e}function Jo(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function Zo(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=To(0),this.expirationTimes=To(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=To(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Hs(e,t,n,r,l,o,i,s,a){return e=new Vp(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=De(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ns(o),e}function Wp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Df(e){if(!e)return Lt;e=e._reactInternals;e:{if(bt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(Ce(n))return $c(e,n,t)}return t}function Ff(e,t,n,r,l,o,i,s,a){return e=Hs(n,r,!0,e,l,o,i,s,a),e.context=Df(null),n=e.current,r=ye(),l=Pt(n),o=ut(r,l),o.callback=t??null,Et(n,o,l),e.current.lanes=l,_r(e,l,r),je(e,r),e}function Kl(e,t,n,r){var l=t.current,o=ye(),i=Pt(l);return n=Df(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Et(l,t,i),e!==null&&(Ge(e,l,i,o),el(e,l,i)),i}function Ml(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qs(e,t){mu(e,t),(e=e.alternate)&&mu(e,t)}function Hp(){return null}var Af=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ys(e){this._internalRoot=e}bl.prototype.render=Ys.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));Kl(e,t,null,null)};bl.prototype.unmount=Ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gt(function(){Kl(null,e,null,null)}),t[ft]=null}};function bl(e){this._internalRoot=e}bl.prototype.unstable_scheduleHydration=function(e){if(e){var t=hc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yt.length&&t!==0&&t<yt[n].priority;n++);yt.splice(n,0,e),n===0&&vc(e)}};function Xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hu(){}function Qp(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=Ml(i);o.call(c)}}var i=Ff(t,r,e,0,null,!1,!1,"",hu);return e._reactRootContainer=i,e[ft]=i.current,ar(e.nodeType===8?e.parentNode:e),Gt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=Ml(a);s.call(c)}}var a=Hs(e,0,!1,null,null,!1,!1,"",hu);return e._reactRootContainer=a,e[ft]=a.current,ar(e.nodeType===8?e.parentNode:e),Gt(function(){Kl(t,a,n,r)}),a}function Zl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var a=Ml(i);s.call(a)}}Kl(t,i,e,l)}else i=Qp(n,t,e,l,r);return Ml(i)}pc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wn(t.pendingLanes);n!==0&&(ds(t,n|1),je(t,J()),!(I&6)&&(Cn=J()+500,Rt()))}break;case 13:Gt(function(){var r=dt(e,1);if(r!==null){var l=ye();Ge(r,e,1,l)}}),Qs(e,1)}};ps=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=ye();Ge(t,e,134217728,n)}Qs(e,134217728)}};mc=function(e){if(e.tag===13){var t=Pt(e),n=dt(e,t);if(n!==null){var r=ye();Ge(n,e,t,r)}Qs(e,t)}};hc=function(){return F};gc=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};hi=function(e,t,n){switch(t){case"input":if(ai(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Vl(r);if(!l)throw Error(x(90));Xu(r),ai(r,l)}}}break;case"textarea":Ku(e,n);break;case"select":t=n.value,t!=null&&fn(e,!!n.multiple,t,!1)}};nc=Bs;rc=Gt;var Yp={usingClientEntryPoint:!1,Events:[Cr,rn,Vl,ec,tc,Bs]},An={findFiberByHostInstance:At,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xp={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ic(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||Hp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qr.isDisabled&&Qr.supportsFiber)try{Fl=Qr.inject(Xp),tt=Qr}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yp;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xs(t))throw Error(x(200));return Wp(e,t,null,n)};Te.createRoot=function(e,t){if(!Xs(e))throw Error(x(299));var n=!1,r="",l=Af;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Hs(e,1,!1,null,null,n,!1,r,l),e[ft]=t.current,ar(e.nodeType===8?e.parentNode:e),new Ys(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=ic(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return Gt(e)};Te.hydrate=function(e,t,n){if(!Jl(t))throw Error(x(200));return Zl(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!Xs(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=Af;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Ff(t,null,e,1,n??null,l,!1,o,i),e[ft]=t.current,ar(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new bl(t)};Te.render=function(e,t,n){if(!Jl(t))throw Error(x(200));return Zl(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Jl(e))throw Error(x(40));return e._reactRootContainer?(Gt(function(){Zl(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1};Te.unstable_batchedUpdates=Bs;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Jl(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Zl(e,t,n,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function Bf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bf)}catch(e){console.error(e)}}Bf(),Au.exports=Te;var Gp=Au.exports,gu=Gp;ti.createRoot=gu.createRoot,ti.hydrateRoot=gu.hydrateRoot;const Kp="/personal-website/assets/pastel-bg-B1UW2q9y.jpg";var Uf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},vu=at.createContext&&at.createContext(Uf),bp=["attr","size","title"];function Jp(e,t){if(e==null)return{};var n=Zp(e,t),r,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)r=o[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Zp(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Rl(){return Rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rl.apply(this,arguments)}function yu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function Il(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yu(Object(n),!0).forEach(function(r){qp(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qp(e,t,n){return t=e1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function e1(e){var t=t1(e,"string");return typeof t=="symbol"?t:t+""}function t1(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Vf(e){return e&&e.map((t,n)=>at.createElement(t.tag,Il({key:n},t.attr),Vf(t.child)))}function ge(e){return t=>at.createElement(n1,Rl({attr:Il({},e.attr)},t),Vf(e.child))}function n1(e){var t=n=>{var{attr:r,size:l,title:o}=e,i=Jp(e,bp),s=l||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),at.createElement("svg",Rl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,i,{className:a,style:Il(Il({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&at.createElement("title",null,o),e.children)};return vu!==void 0?at.createElement(vu.Consumer,null,n=>t(n)):t(Uf)}function r1(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"},child:[]}]})(e)}function l1(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"},child:[]}]})(e)}function o1(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"},child:[]}]})(e)}function i1(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"},child:[]}]})(e)}function s1(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"},child:[]}]})(e)}function a1(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"},child:[]}]})(e)}function u1(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"},child:[]}]})(e)}function c1(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"},child:[]}]})(e)}function f1(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1"},child:[]}]})(e)}function d1(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"},child:[]}]})(e)}function Wf(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"},child:[]}]})(e)}function p1(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"},child:[]},{tag:"path",attr:{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"},child:[]}]})(e)}function m1(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"},child:[]}]})(e)}function h1(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"},child:[]}]})(e)}function g1(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"},child:[]}]})(e)}function v1(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"},child:[]},{tag:"path",attr:{d:"M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"},child:[]},{tag:"path",attr:{fillRule:"evenodd",d:"M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"},child:[]}]})(e)}function y1(){return p.jsxs("div",{className:"navbar",children:[p.jsx(w1,{}),p.jsx(S1,{})]})}function w1(){return p.jsxs("div",{className:"flex items-center",children:[p.jsx(c1,{className:"navbar-logo"}),p.jsx("div",{className:"navbar-title",children:"Kelvin Lin"})]})}function S1(){return p.jsxs("div",{className:"navbar-toolbar",children:[p.jsxs("a",{href:"#about",className:"navbar-tools",children:[p.jsx(r1,{className:"navbar-tool-icon"}),p.jsx("span",{className:"navbar-tool-label",children:"About"})]}),p.jsxs("a",{href:"#projects",className:"navbar-tools",children:[p.jsx(f1,{className:"navbar-tool-icon"}),p.jsx("span",{className:"navbar-tool-label",children:"Projects"})]}),p.jsxs("a",{href:"#tools",className:"navbar-tools mr-4",children:[p.jsx(h1,{className:"navbar-tool-icon"}),p.jsx("span",{className:"navbar-tool-label",children:"Tools"})]})]})}function x1(){return p.jsxs("div",{className:"flex flex-col items-center justify-center footer",children:[p.jsx("span",{children:"Site coded in TypeScript and built using React, Vite, and Tailwind."}),p.jsxs("span",{children:["Background designed by ",p.jsx("a",{className:"classic-anchor1",href:"https://www.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_13223498.htm#query=pastel&position=19&from_view=keyword&track=ais_hybrid&uuid=f952c164-e355-44dc-8d01-b7c6080a9dda",target:"_blank",children:"Freepik"})]})]})}const Gs=({entryNumber:e,titleLabel:t,className:n=""})=>{const r=e.toString().padStart(2,"0");return p.jsx("div",{className:n,children:p.jsxs("div",{className:"section-header fira-code",children:[p.jsx("span",{className:"header-num",children:`${r}| `}),p.jsx("span",{className:"header-title",children:t})]})})};function _1(e){return p.jsxs("div",{id:"about",className:"flex flex-row justify-between items-center",children:[p.jsx(Gs,{className:"about",entryNumber:1,titleLabel:e.width>1200?"About":""}),p.jsxs("div",{className:"about-description flex flex-col justify-start",children:[p.jsxs("div",{className:"about-description-heading flex flex-row whitespace-pre",children:[p.jsx("div",{className:"about-description-h1 allura text-64xl",children:"Hey,"}),p.jsxs("div",{className:"flex flex-col justify-center",children:[p.jsxs("span",{className:"about-description-h2",children:["I'm ",p.jsx("span",{className:"about-description-h2-name",children:"Kelvin"})]}),p.jsx("span",{className:"about-description-h3",children:" NY-based Software Engineer"})]})]}),p.jsxs("div",{className:"about-description-paragraph",children:["My personal passions in the Software Engineering field are ",p.jsx("span",{className:"about-description-paragraph-ul",children:"Game Development"})," and ",p.jsx("span",{className:"about-description-paragraph-ul",children:"Web Development"}),". Besides these two focuses, I have also dabbled in ",p.jsx("span",{className:"about-description-paragraph-ul",children:"Natural Language Processing"})," over the course of my academic career."]}),p.jsx("br",{}),p.jsxs("div",{className:"about-description-paragraph",children:["Having double majored in both ",p.jsx("span",{className:"about-description-paragraph-ul",children:"Computer Science"})," and ",p.jsx("span",{className:"about-description-paragraph-ul",children:"Applied Mathematics and Statistics"}),", I'm open to exploring various fields and always excited to learn new technologies and frameworks."]}),p.jsx("br",{}),p.jsx("div",{className:"about-description-paragraph",children:"Currently seeking an entry-level position or internship. Feel free to contact me or browse some of my past projects below!"})]}),p.jsxs("div",{className:"contact-details",children:[p.jsx("img",{src:"https://github.com/klin2003.png",alt:"GitHub Avatar",className:"about-avatar"}),p.jsx(k1,{})]})]})}function k1(){return p.jsxs("div",{className:"flex flex-col items-center justify-center",children:[p.jsxs("div",{className:"contact-entry w-fit",children:[p.jsxs("div",{className:"flex flex-row items-center justify-center",children:[p.jsx(d1,{className:"contact-entry-icon"}),p.jsx("span",{className:"contact-entry-title",children:p.jsx("b",{children:"Email"})})]}),p.jsx("a",{className:"contact-entry-text classic-anchor2",href:"mailto:kelvinlin2003@gmail.com",target:"_blank",children:"kelvinlin2003@gmail.com"})]}),p.jsx("div",{className:"pb-6"}),p.jsxs("div",{className:"contact-entry w-fit",children:[p.jsxs("div",{className:"flex flex-row items-center justify-center",children:[p.jsx(m1,{className:"contact-entry-icon"}),p.jsx("span",{className:"contact-entry-title",children:p.jsx("b",{children:"LinkedIn"})})]}),p.jsx("a",{className:"contact-entry-text classic-anchor2",href:"https://www.linkedin.com/in/kelvin-lin-J2003/",target:"_blank",children:"in/kelvin-lin-J2003"})]}),p.jsx("div",{className:"pb-6"}),p.jsxs("div",{className:"contact-entry w-fit",children:[p.jsxs("div",{className:"flex flex-row items-center justify-center",children:[p.jsx(Wf,{className:"contact-entry-icon"}),p.jsx("span",{className:"contact-entry-title",children:p.jsx("b",{children:"GitHub"})})]}),p.jsx("a",{className:"contact-entry-text classic-anchor2",href:"https://github.com/klin2003",target:"_blank",children:"gh/klin2003"})]})]})}var C1=!1;function j1(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function E1(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var N1=function(){function e(n){var r=this;this._insertTag=function(l){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(l,o),r.tags.push(l)},this.isSpeedy=n.speedy===void 0?!C1:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(E1(this));var l=this.tags[this.tags.length-1];if(this.isSpeedy){var o=j1(l);try{o.insertRule(r,o.cssRules.length)}catch{}}else l.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var l;return(l=r.parentNode)==null?void 0:l.removeChild(r)}),this.tags=[],this.ctr=0},e}(),pe="-ms-",$l="-moz-",$="-webkit-",Hf="comm",Ks="rule",bs="decl",P1="@import",Qf="@keyframes",O1="@layer",z1=Math.abs,ql=String.fromCharCode,L1=Object.assign;function T1(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function Yf(e){return e.trim()}function M1(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function Gi(e,t){return e.indexOf(t)}function ae(e,t){return e.charCodeAt(t)|0}function vr(e,t,n){return e.slice(t,n)}function Ze(e){return e.length}function Js(e){return e.length}function Yr(e,t){return t.push(e),e}function R1(e,t){return e.map(t).join("")}var eo=1,jn=1,Xf=0,Ee=0,Z=0,On="";function to(e,t,n,r,l,o,i){return{value:e,root:t,parent:n,type:r,props:l,children:o,line:eo,column:jn,length:i,return:""}}function Bn(e,t){return L1(to("",null,null,"",null,null,0),e,{length:-e.length},t)}function I1(){return Z}function $1(){return Z=Ee>0?ae(On,--Ee):0,jn--,Z===10&&(jn=1,eo--),Z}function ze(){return Z=Ee<Xf?ae(On,Ee++):0,jn++,Z===10&&(jn=1,eo++),Z}function rt(){return ae(On,Ee)}function sl(){return Ee}function Er(e,t){return vr(On,e,t)}function yr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gf(e){return eo=jn=1,Xf=Ze(On=e),Ee=0,[]}function Kf(e){return On="",e}function al(e){return Yf(Er(Ee-1,Ki(e===91?e+2:e===40?e+1:e)))}function D1(e){for(;(Z=rt())&&Z<33;)ze();return yr(e)>2||yr(Z)>3?"":" "}function F1(e,t){for(;--t&&ze()&&!(Z<48||Z>102||Z>57&&Z<65||Z>70&&Z<97););return Er(e,sl()+(t<6&&rt()==32&&ze()==32))}function Ki(e){for(;ze();)switch(Z){case e:return Ee;case 34:case 39:e!==34&&e!==39&&Ki(Z);break;case 40:e===41&&Ki(e);break;case 92:ze();break}return Ee}function A1(e,t){for(;ze()&&e+Z!==57;)if(e+Z===84&&rt()===47)break;return"/*"+Er(t,Ee-1)+"*"+ql(e===47?e:ze())}function B1(e){for(;!yr(rt());)ze();return Er(e,Ee)}function U1(e){return Kf(ul("",null,null,null,[""],e=Gf(e),0,[0],e))}function ul(e,t,n,r,l,o,i,s,a){for(var c=0,g=0,m=i,h=0,w=0,S=0,v=1,O=1,f=1,u=0,d="",y=l,C=o,j=r,k=d;O;)switch(S=u,u=ze()){case 40:if(S!=108&&ae(k,m-1)==58){Gi(k+=D(al(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:k+=al(u);break;case 9:case 10:case 13:case 32:k+=D1(S);break;case 92:k+=F1(sl()-1,7);continue;case 47:switch(rt()){case 42:case 47:Yr(V1(A1(ze(),sl()),t,n),a);break;default:k+="/"}break;case 123*v:s[c++]=Ze(k)*f;case 125*v:case 59:case 0:switch(u){case 0:case 125:O=0;case 59+g:f==-1&&(k=D(k,/\f/g,"")),w>0&&Ze(k)-m&&Yr(w>32?Su(k+";",r,n,m-1):Su(D(k," ","")+";",r,n,m-2),a);break;case 59:k+=";";default:if(Yr(j=wu(k,t,n,c,g,l,s,d,y=[],C=[],m),o),u===123)if(g===0)ul(k,t,j,j,y,o,m,s,C);else switch(h===99&&ae(k,3)===110?100:h){case 100:case 108:case 109:case 115:ul(e,j,j,r&&Yr(wu(e,j,j,0,0,l,s,d,l,y=[],m),C),l,C,m,s,r?y:C);break;default:ul(k,j,j,j,[""],C,0,s,C)}}c=g=w=0,v=f=1,d=k="",m=i;break;case 58:m=1+Ze(k),w=S;default:if(v<1){if(u==123)--v;else if(u==125&&v++==0&&$1()==125)continue}switch(k+=ql(u),u*v){case 38:f=g>0?1:(k+="\f",-1);break;case 44:s[c++]=(Ze(k)-1)*f,f=1;break;case 64:rt()===45&&(k+=al(ze())),h=rt(),g=m=Ze(d=k+=B1(sl())),u++;break;case 45:S===45&&Ze(k)==2&&(v=0)}}return o}function wu(e,t,n,r,l,o,i,s,a,c,g){for(var m=l-1,h=l===0?o:[""],w=Js(h),S=0,v=0,O=0;S<r;++S)for(var f=0,u=vr(e,m+1,m=z1(v=i[S])),d=e;f<w;++f)(d=Yf(v>0?h[f]+" "+u:D(u,/&\f/g,h[f])))&&(a[O++]=d);return to(e,t,n,l===0?Ks:s,a,c,g)}function V1(e,t,n){return to(e,t,n,Hf,ql(I1()),vr(e,2,-2),0)}function Su(e,t,n,r){return to(e,t,n,bs,vr(e,0,r),vr(e,r+1,-1),r)}function vn(e,t){for(var n="",r=Js(e),l=0;l<r;l++)n+=t(e[l],l,e,t)||"";return n}function W1(e,t,n,r){switch(e.type){case O1:if(e.children.length)break;case P1:case bs:return e.return=e.return||e.value;case Hf:return"";case Qf:return e.return=e.value+"{"+vn(e.children,r)+"}";case Ks:e.value=e.props.join(",")}return Ze(n=vn(e.children,r))?e.return=e.value+"{"+n+"}":""}function H1(e){var t=Js(e);return function(n,r,l,o){for(var i="",s=0;s<t;s++)i+=e[s](n,r,l,o)||"";return i}}function Q1(e){return function(t){t.root||(t=t.return)&&e(t)}}function Y1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var X1=function(t,n,r){for(var l=0,o=0;l=o,o=rt(),l===38&&o===12&&(n[r]=1),!yr(o);)ze();return Er(t,Ee)},G1=function(t,n){var r=-1,l=44;do switch(yr(l)){case 0:l===38&&rt()===12&&(n[r]=1),t[r]+=X1(Ee-1,n,r);break;case 2:t[r]+=al(l);break;case 4:if(l===44){t[++r]=rt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ql(l)}while(l=ze());return t},K1=function(t,n){return Kf(G1(Gf(t),n))},xu=new WeakMap,b1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,l=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!xu.get(r))&&!l){xu.set(t,!0);for(var o=[],i=K1(n,o),s=r.props,a=0,c=0;a<i.length;a++)for(var g=0;g<s.length;g++,c++)t.props[c]=o[a]?i[a].replace(/&\f/g,s[g]):s[g]+" "+i[a]}}},J1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function bf(e,t){switch(T1(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+$l+e+pe+e+e;case 6828:case 4268:return $+e+pe+e+e;case 6165:return $+e+pe+"flex-"+e+e;case 5187:return $+e+D(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+pe+"flex-$1$2")+e;case 5443:return $+e+pe+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return $+e+pe+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+pe+D(e,"shrink","negative")+e;case 5292:return $+e+pe+D(e,"basis","preferred-size")+e;case 6060:return $+"box-"+D(e,"-grow","")+$+e+pe+D(e,"grow","positive")+e;case 4554:return $+D(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ze(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+$l+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Gi(e,"stretch")?bf(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ae(e,t+1)!==115)break;case 6444:switch(ae(e,Ze(e)-3-(~Gi(e,"!important")&&10))){case 107:return D(e,":",":"+$)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(ae(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+pe+"$2box$3")+e}break;case 5936:switch(ae(e,t+11)){case 114:return $+e+pe+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+pe+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+pe+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+pe+e+e}return e}var Z1=function(t,n,r,l){if(t.length>-1&&!t.return)switch(t.type){case bs:t.return=bf(t.value,t.length);break;case Qf:return vn([Bn(t,{value:D(t.value,"@","@"+$)})],l);case Ks:if(t.length)return R1(t.props,function(o){switch(M1(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return vn([Bn(t,{props:[D(o,/:(read-\w+)/,":"+$l+"$1")]})],l);case"::placeholder":return vn([Bn(t,{props:[D(o,/:(plac\w+)/,":"+$+"input-$1")]}),Bn(t,{props:[D(o,/:(plac\w+)/,":"+$l+"$1")]}),Bn(t,{props:[D(o,/:(plac\w+)/,pe+"input-$1")]})],l)}return""})}},q1=[Z1],em=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var O=v.getAttribute("data-emotion");O.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var l=t.stylisPlugins||q1,o={},i,s=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var O=v.getAttribute("data-emotion").split(" "),f=1;f<O.length;f++)o[O[f]]=!0;s.push(v)});var a,c=[b1,J1];{var g,m=[W1,Q1(function(v){g.insert(v)})],h=H1(c.concat(l,m)),w=function(O){return vn(U1(O),h)};a=function(O,f,u,d){g=u,w(O?O+"{"+f.styles+"}":f.styles),d&&(S.inserted[f.name]=!0)}}var S={key:n,sheet:new N1({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:a};return S.sheet.hydrate(s),S},Jf={exports:{}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie=typeof Symbol=="function"&&Symbol.for,Zs=ie?Symbol.for("react.element"):60103,qs=ie?Symbol.for("react.portal"):60106,no=ie?Symbol.for("react.fragment"):60107,ro=ie?Symbol.for("react.strict_mode"):60108,lo=ie?Symbol.for("react.profiler"):60114,oo=ie?Symbol.for("react.provider"):60109,io=ie?Symbol.for("react.context"):60110,ea=ie?Symbol.for("react.async_mode"):60111,so=ie?Symbol.for("react.concurrent_mode"):60111,ao=ie?Symbol.for("react.forward_ref"):60112,uo=ie?Symbol.for("react.suspense"):60113,tm=ie?Symbol.for("react.suspense_list"):60120,co=ie?Symbol.for("react.memo"):60115,fo=ie?Symbol.for("react.lazy"):60116,nm=ie?Symbol.for("react.block"):60121,rm=ie?Symbol.for("react.fundamental"):60117,lm=ie?Symbol.for("react.responder"):60118,om=ie?Symbol.for("react.scope"):60119;function Re(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Zs:switch(e=e.type,e){case ea:case so:case no:case lo:case ro:case uo:return e;default:switch(e=e&&e.$$typeof,e){case io:case ao:case fo:case co:case oo:return e;default:return t}}case qs:return t}}}function Zf(e){return Re(e)===so}A.AsyncMode=ea;A.ConcurrentMode=so;A.ContextConsumer=io;A.ContextProvider=oo;A.Element=Zs;A.ForwardRef=ao;A.Fragment=no;A.Lazy=fo;A.Memo=co;A.Portal=qs;A.Profiler=lo;A.StrictMode=ro;A.Suspense=uo;A.isAsyncMode=function(e){return Zf(e)||Re(e)===ea};A.isConcurrentMode=Zf;A.isContextConsumer=function(e){return Re(e)===io};A.isContextProvider=function(e){return Re(e)===oo};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zs};A.isForwardRef=function(e){return Re(e)===ao};A.isFragment=function(e){return Re(e)===no};A.isLazy=function(e){return Re(e)===fo};A.isMemo=function(e){return Re(e)===co};A.isPortal=function(e){return Re(e)===qs};A.isProfiler=function(e){return Re(e)===lo};A.isStrictMode=function(e){return Re(e)===ro};A.isSuspense=function(e){return Re(e)===uo};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===no||e===so||e===lo||e===ro||e===uo||e===tm||typeof e=="object"&&e!==null&&(e.$$typeof===fo||e.$$typeof===co||e.$$typeof===oo||e.$$typeof===io||e.$$typeof===ao||e.$$typeof===rm||e.$$typeof===lm||e.$$typeof===om||e.$$typeof===nm)};A.typeOf=Re;Jf.exports=A;var im=Jf.exports,qf=im,sm={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},am={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ed={};ed[qf.ForwardRef]=sm;ed[qf.Memo]=am;var um=!0;function td(e,t,n){var r="";return n.split(" ").forEach(function(l){e[l]!==void 0?t.push(e[l]+";"):l&&(r+=l+" ")}),r}var ta=function(t,n,r){var l=t.key+"-"+n.name;(r===!1||um===!1)&&t.registered[l]===void 0&&(t.registered[l]=n.styles)},nd=function(t,n,r){ta(t,n,r);var l=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+l:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function cm(e){for(var t=0,n,r=0,l=e.length;l>=4;++r,l-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(l){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var fm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dm=!1,pm=/[A-Z]|^ms/g,mm=/_EMO_([^_]+?)_([^]*?)_EMO_/g,rd=function(t){return t.charCodeAt(1)===45},_u=function(t){return t!=null&&typeof t!="boolean"},qo=Y1(function(e){return rd(e)?e:e.replace(pm,"-$&").toLowerCase()}),ku=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(mm,function(r,l,o){return qe={name:l,styles:o,next:qe},l})}return fm[t]!==1&&!rd(t)&&typeof n=="number"&&n!==0?n+"px":n},hm="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function wr(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var l=n;if(l.anim===1)return qe={name:l.name,styles:l.styles,next:qe},l.name;var o=n;if(o.styles!==void 0){var i=o.next;if(i!==void 0)for(;i!==void 0;)qe={name:i.name,styles:i.styles,next:qe},i=i.next;var s=o.styles+";";return s}return gm(e,t,n)}case"function":{if(e!==void 0){var a=qe,c=n(e);return qe=a,wr(e,t,c)}break}}var g=n;if(t==null)return g;var m=t[g];return m!==void 0?m:g}function gm(e,t,n){var r="";if(Array.isArray(n))for(var l=0;l<n.length;l++)r+=wr(e,t,n[l])+";";else for(var o in n){var i=n[o];if(typeof i!="object"){var s=i;t!=null&&t[s]!==void 0?r+=o+"{"+t[s]+"}":_u(s)&&(r+=qo(o)+":"+ku(o,s)+";")}else{if(o==="NO_COMPONENT_SELECTOR"&&dm)throw new Error(hm);if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var a=0;a<i.length;a++)_u(i[a])&&(r+=qo(o)+":"+ku(o,i[a])+";");else{var c=wr(e,t,i);switch(o){case"animation":case"animationName":{r+=qo(o)+":"+c+";";break}default:r+=o+"{"+c+"}"}}}}return r}var Cu=/label:\s*([^\s;{]+)\s*(;|$)/g,qe;function na(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,l="";qe=void 0;var o=e[0];if(o==null||o.raw===void 0)r=!1,l+=wr(n,t,o);else{var i=o;l+=i[0]}for(var s=1;s<e.length;s++)if(l+=wr(n,t,e[s]),r){var a=o;l+=a[s]}Cu.lastIndex=0;for(var c="",g;(g=Cu.exec(l))!==null;)c+="-"+g[1];var m=cm(l)+c;return{name:m,styles:l,next:qe}}var vm=function(t){return t()},ym=ca.useInsertionEffect?ca.useInsertionEffect:!1,ld=ym||vm,bi=!1,od=L.createContext(typeof HTMLElement<"u"?em({key:"css"}):null);od.Provider;var id=function(t){return L.forwardRef(function(n,r){var l=L.useContext(od);return t(n,l,r)})},sd=L.createContext({}),po={}.hasOwnProperty,Ji="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",ad=function(t,n){var r={};for(var l in n)po.call(n,l)&&(r[l]=n[l]);return r[Ji]=t,r},wm=function(t){var n=t.cache,r=t.serialized,l=t.isStringTag;return ta(n,r,l),ld(function(){return nd(n,r,l)}),null},Sm=id(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var l=e[Ji],o=[r],i="";typeof e.className=="string"?i=td(t.registered,o,e.className):e.className!=null&&(i=e.className+" ");var s=na(o,void 0,L.useContext(sd));i+=t.key+"-"+s.name;var a={};for(var c in e)po.call(e,c)&&c!=="css"&&c!==Ji&&!bi&&(a[c]=e[c]);return a.className=i,n&&(a.ref=n),L.createElement(L.Fragment,null,L.createElement(wm,{cache:t,serialized:s,isStringTag:typeof l=="string"}),L.createElement(l,a))}),ud=Sm,xm=p.Fragment,re=function(t,n,r){return po.call(n,"css")?p.jsx(ud,ad(t,n),r):p.jsx(t,n,r)},ju=function(t,n){var r=arguments;if(n==null||!po.call(n,"css"))return L.createElement.apply(void 0,r);var l=r.length,o=new Array(l);o[0]=ud,o[1]=ad(t,n);for(var i=2;i<l;i++)o[i]=r[i];return L.createElement.apply(null,o)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(ju||(ju={}));function cd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return na(t)}function _(){var e=cd.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var _m=function e(t){for(var n=t.length,r=0,l="";r<n;r++){var o=t[r];if(o!=null){var i=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))i=e(o);else{i="";for(var s in o)o[s]&&s&&(i&&(i+=" "),i+=s)}break}default:i=o}i&&(l&&(l+=" "),l+=i)}}return l};function km(e,t,n){var r=[],l=td(e,r,n);return r.length<2?n:l+t(r)}var Cm=function(t){var n=t.cache,r=t.serializedArr;return ld(function(){for(var l=0;l<r.length;l++)nd(n,r[l],!1)}),null},ei=id(function(e,t){var n=!1,r=[],l=function(){if(n&&bi)throw new Error("css can only be used during render");for(var c=arguments.length,g=new Array(c),m=0;m<c;m++)g[m]=arguments[m];var h=na(g,t.registered);return r.push(h),ta(t,h,!1),t.key+"-"+h.name},o=function(){if(n&&bi)throw new Error("cx can only be used during render");for(var c=arguments.length,g=new Array(c),m=0;m<c;m++)g[m]=arguments[m];return km(t.registered,l,_m(g))},i={css:l,cx:o,theme:L.useContext(sd)},s=e.children(i);return n=!0,L.createElement(L.Fragment,null,L.createElement(Cm,{cache:t,serializedArr:r}),s)}),jm=Object.defineProperty,Em=(e,t,n)=>t in e?jm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xr=(e,t,n)=>Em(e,typeof t!="symbol"?t+"":t,n),Zi=new Map,Gr=new WeakMap,Eu=0,Nm=void 0;function Pm(e){return e?(Gr.has(e)||(Eu+=1,Gr.set(e,Eu.toString())),Gr.get(e)):"0"}function Om(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Pm(e.root):e[t]}`).toString()}function zm(e){const t=Om(e);let n=Zi.get(t);if(!n){const r=new Map;let l;const o=new IntersectionObserver(i=>{i.forEach(s=>{var a;const c=s.isIntersecting&&l.some(g=>s.intersectionRatio>=g);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(a=r.get(s.target))==null||a.forEach(g=>{g(c,s)})})},e);l=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Zi.set(t,n)}return n}function fd(e,t,n={},r=Nm){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:l,observer:o,elements:i}=zm(n),s=i.get(e)||[];return i.has(e)||i.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(i.delete(e),o.unobserve(e)),i.size===0&&(o.disconnect(),Zi.delete(l))}}function Lm(e){return typeof e.children!="function"}var Nu=class extends L.Component{constructor(e){super(e),Xr(this,"node",null),Xr(this,"_unobserveCb",null),Xr(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Xr(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Lm(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:l,fallbackInView:o}=this.props;this._unobserveCb=fd(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:l},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:w,entry:S}=this.state;return e({inView:w,entry:S,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:l,rootMargin:o,onChange:i,skip:s,trackVisibility:a,delay:c,initialInView:g,fallbackInView:m,...h}=this.props;return L.createElement(t||"div",{ref:this.handleNode,...h},e)}};function dd({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:l,triggerOnce:o,skip:i,initialInView:s,fallbackInView:a,onChange:c}={}){var g;const[m,h]=L.useState(null),w=L.useRef(),[S,v]=L.useState({inView:!!s,entry:void 0});w.current=c,L.useEffect(()=>{if(i||!m)return;let d;return d=fd(m,(y,C)=>{v({inView:y,entry:C}),w.current&&w.current(y,C),C.isIntersecting&&o&&d&&(d(),d=void 0)},{root:l,rootMargin:r,threshold:e,trackVisibility:n,delay:t},a),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,m,l,r,o,i,n,a,t]);const O=(g=S.entry)==null?void 0:g.target,f=L.useRef();!m&&O&&!o&&!i&&f.current!==O&&(f.current=O,v({inView:!!s,entry:void 0}));const u=[h,S.inView,S.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}var pd={exports:{}},B={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=Symbol.for("react.element"),la=Symbol.for("react.portal"),mo=Symbol.for("react.fragment"),ho=Symbol.for("react.strict_mode"),go=Symbol.for("react.profiler"),vo=Symbol.for("react.provider"),yo=Symbol.for("react.context"),Tm=Symbol.for("react.server_context"),wo=Symbol.for("react.forward_ref"),So=Symbol.for("react.suspense"),xo=Symbol.for("react.suspense_list"),_o=Symbol.for("react.memo"),ko=Symbol.for("react.lazy"),Mm=Symbol.for("react.offscreen"),md;md=Symbol.for("react.module.reference");function Ue(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ra:switch(e=e.type,e){case mo:case go:case ho:case So:case xo:return e;default:switch(e=e&&e.$$typeof,e){case Tm:case yo:case wo:case ko:case _o:case vo:return e;default:return t}}case la:return t}}}B.ContextConsumer=yo;B.ContextProvider=vo;B.Element=ra;B.ForwardRef=wo;B.Fragment=mo;B.Lazy=ko;B.Memo=_o;B.Portal=la;B.Profiler=go;B.StrictMode=ho;B.Suspense=So;B.SuspenseList=xo;B.isAsyncMode=function(){return!1};B.isConcurrentMode=function(){return!1};B.isContextConsumer=function(e){return Ue(e)===yo};B.isContextProvider=function(e){return Ue(e)===vo};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ra};B.isForwardRef=function(e){return Ue(e)===wo};B.isFragment=function(e){return Ue(e)===mo};B.isLazy=function(e){return Ue(e)===ko};B.isMemo=function(e){return Ue(e)===_o};B.isPortal=function(e){return Ue(e)===la};B.isProfiler=function(e){return Ue(e)===go};B.isStrictMode=function(e){return Ue(e)===ho};B.isSuspense=function(e){return Ue(e)===So};B.isSuspenseList=function(e){return Ue(e)===xo};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===mo||e===go||e===ho||e===So||e===xo||e===Mm||typeof e=="object"&&e!==null&&(e.$$typeof===ko||e.$$typeof===_o||e.$$typeof===vo||e.$$typeof===yo||e.$$typeof===wo||e.$$typeof===md||e.getModuleId!==void 0)};B.typeOf=Ue;pd.exports=B;var Rm=pd.exports;_`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;_`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;_`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;_`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;_`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;_`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Im=_`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,$m=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Dm=_`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Fm=_`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Am=_`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,oa=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Bm=_`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Um=_`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Vm=_`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Wm=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Hm=_`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Qm=_`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ym=_`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Xm({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=oa,iterationCount:l=1}){return cd`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${l};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Gm(e){return e==null}function Km(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function hd(e,t){return n=>n?e():t()}function Sr(e){return hd(e,()=>null)}function qi(e){return Sr(()=>({opacity:0}))(e)}const gd=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:l=1e3,fraction:o=0,keyframes:i=oa,triggerOnce:s=!1,className:a,style:c,childClassName:g,childStyle:m,children:h,onVisibilityChange:w}=e,S=L.useMemo(()=>Xm({keyframes:i,duration:l}),[l,i]);return Gm(h)?null:Km(h)?re(Jm,{...e,animationStyles:S,children:String(h)}):Rm.isFragment(h)?re(vd,{...e,animationStyles:S}):re(xm,{children:L.Children.map(h,(v,O)=>{if(!L.isValidElement(v))return null;const f=r+(t?O*l*n:0);switch(v.type){case"ol":case"ul":return re(ei,{children:({cx:u})=>re(v.type,{...v.props,className:u(a,v.props.className),style:Object.assign({},c,v.props.style),children:re(gd,{...e,children:v.props.children})})});case"li":return re(Nu,{threshold:o,triggerOnce:s,onChange:w,children:({inView:u,ref:d})=>re(ei,{children:({cx:y})=>re(v.type,{...v.props,ref:d,className:y(g,v.props.className),css:Sr(()=>S)(u),style:Object.assign({},m,v.props.style,qi(!u),{animationDelay:f+"ms"})})})});default:return re(Nu,{threshold:o,triggerOnce:s,onChange:w,children:({inView:u,ref:d})=>re("div",{ref:d,className:a,css:Sr(()=>S)(u),style:Object.assign({},c,qi(!u),{animationDelay:f+"ms"}),children:re(ei,{children:({cx:y})=>re(v.type,{...v.props,className:y(g,v.props.className),style:Object.assign({},m,v.props.style)})})})})}})})},bm={display:"inline-block",whiteSpace:"pre"},Jm=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:l=0,duration:o=1e3,fraction:i=0,triggerOnce:s=!1,className:a,style:c,children:g,onVisibilityChange:m}=e,{ref:h,inView:w}=dd({triggerOnce:s,threshold:i,onChange:m});return hd(()=>re("div",{ref:h,className:a,style:Object.assign({},c,bm),children:g.split("").map((S,v)=>re("span",{css:Sr(()=>t)(w),style:{animationDelay:l+v*o*r+"ms"},children:S},v))}),()=>re(vd,{...e,children:g}))(n)},vd=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:l,style:o,children:i,onVisibilityChange:s}=e,{ref:a,inView:c}=dd({triggerOnce:r,threshold:n,onChange:s});return re("div",{ref:a,className:l,css:Sr(()=>t)(c),style:Object.assign({},o,qi(!c)),children:i})};_`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;_`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;_`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;_`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;_`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Zm=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,qm=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,eh=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,th=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,nh=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,rh=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,lh=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,oh=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,ih=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,sh=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,ah=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,uh=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,ch=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function fh(e,t,n){switch(n){case"bottom-left":return t?qm:$m;case"bottom-right":return t?eh:Dm;case"down":return e?t?nh:Am:t?th:Fm;case"left":return e?t?lh:Bm:t?rh:oa;case"right":return e?t?ih:Vm:t?oh:Um;case"top-left":return t?sh:Wm;case"top-right":return t?ah:Hm;case"up":return e?t?ch:Ym:t?uh:Qm;default:return t?Zm:Im}}const yd=e=>{const{big:t=!1,direction:n,reverse:r=!1,...l}=e,o=L.useMemo(()=>fh(t,r,n),[t,n,r]);return re(gd,{keyframes:o,...l})};_`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;_`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;_`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;_`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;_`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;_`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;_`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;_`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const dh="/personal-website/assets/01-SelectScreen-C39aqvsp.png?type=url",ph=Object.freeze(Object.defineProperty({__proto__:null,default:dh},Symbol.toStringTag,{value:"Module"})),mh="/personal-website/assets/02-SC-StateSummary-DqOrXHm6.png?type=url",hh=Object.freeze(Object.defineProperty({__proto__:null,default:mh},Symbol.toStringTag,{value:"Module"})),gh="/personal-website/assets/03-SC-DistrictSummary-DVUrekdx.png?type=url",vh=Object.freeze(Object.defineProperty({__proto__:null,default:gh},Symbol.toStringTag,{value:"Module"})),yh="/personal-website/assets/04-SC-PrecinctSummary-C-nPk3h2.png?type=url",wh=Object.freeze(Object.defineProperty({__proto__:null,default:yh},Symbol.toStringTag,{value:"Module"})),Sh="/personal-website/assets/05-SC-HeatMap-CWTJLppd.png?type=url",xh=Object.freeze(Object.defineProperty({__proto__:null,default:Sh},Symbol.toStringTag,{value:"Module"})),_h="/personal-website/assets/06-SC-Gingles-C1yA30Dn.png?type=url",kh=Object.freeze(Object.defineProperty({__proto__:null,default:_h},Symbol.toStringTag,{value:"Module"})),Ch="/personal-website/assets/07-SC-EI-A-gNQvc8.png?type=url",jh=Object.freeze(Object.defineProperty({__proto__:null,default:Ch},Symbol.toStringTag,{value:"Module"})),Eh="/personal-website/assets/08-SC-EnsembleSplit-0NcQtuMd.png?type=url",Nh=Object.freeze(Object.defineProperty({__proto__:null,default:Eh},Symbol.toStringTag,{value:"Module"})),Ph="/personal-website/assets/09-SC-BWPlot-q8YeQVzA.png?type=url",Oh=Object.freeze(Object.defineProperty({__proto__:null,default:Ph},Symbol.toStringTag,{value:"Module"})),zh="/personal-website/assets/10-SC-ComparePlans-D5XhmwXY.png?type=url",Lh=Object.freeze(Object.defineProperty({__proto__:null,default:zh},Symbol.toStringTag,{value:"Module"})),Th="/personal-website/assets/01-TitleScreen-S4AIekUF.png?type=url",Mh=Object.freeze(Object.defineProperty({__proto__:null,default:Th},Symbol.toStringTag,{value:"Module"})),Rh="/personal-website/assets/02-Level0-01-FBGtNfUS.png?type=url",Ih=Object.freeze(Object.defineProperty({__proto__:null,default:Rh},Symbol.toStringTag,{value:"Module"})),$h="/personal-website/assets/03-Level1-01-Crrq8nW7.png?type=url",Dh=Object.freeze(Object.defineProperty({__proto__:null,default:$h},Symbol.toStringTag,{value:"Module"})),Fh="/personal-website/assets/04-Level1-02-B_nn8TFr.png?type=url",Ah=Object.freeze(Object.defineProperty({__proto__:null,default:Fh},Symbol.toStringTag,{value:"Module"})),Bh="/personal-website/assets/05-Level1-03-CrmedIEW.png?type=url",Uh=Object.freeze(Object.defineProperty({__proto__:null,default:Bh},Symbol.toStringTag,{value:"Module"})),Vh="/personal-website/assets/06-Level1-04-bWyJnUR5.png?type=url",Wh=Object.freeze(Object.defineProperty({__proto__:null,default:Vh},Symbol.toStringTag,{value:"Module"})),Hh="/personal-website/assets/07-Level2-01-C-Ag6qa_.png?type=url",Qh=Object.freeze(Object.defineProperty({__proto__:null,default:Hh},Symbol.toStringTag,{value:"Module"})),Yh="/personal-website/assets/08-Level3-01-DdTKLTNC.png?type=url",Xh=Object.freeze(Object.defineProperty({__proto__:null,default:Yh},Symbol.toStringTag,{value:"Module"})),Gh="/personal-website/assets/09-Level4-01-DD3KrhpT.png?type=url",Kh=Object.freeze(Object.defineProperty({__proto__:null,default:Gh},Symbol.toStringTag,{value:"Module"})),bh="/personal-website/assets/10-Level5-01-BUNSE7He.png?type=url",Jh=Object.freeze(Object.defineProperty({__proto__:null,default:bh},Symbol.toStringTag,{value:"Module"})),Zh="/personal-website/assets/11-Level5-02-C3O_lhVJ.png?type=url",qh=Object.freeze(Object.defineProperty({__proto__:null,default:Zh},Symbol.toStringTag,{value:"Module"})),eg="/personal-website/assets/12-Level5-03-osKL2R_2.png?type=url",tg=Object.freeze(Object.defineProperty({__proto__:null,default:eg},Symbol.toStringTag,{value:"Module"})),ng="/personal-website/assets/13-LoadingScreen-7BaEHjX-.png?type=url",rg=Object.freeze(Object.defineProperty({__proto__:null,default:ng},Symbol.toStringTag,{value:"Module"})),lg="/personal-website/assets/01-TitleScreen-BwBwWMz4.png?type=url",og=Object.freeze(Object.defineProperty({__proto__:null,default:lg},Symbol.toStringTag,{value:"Module"})),ig="/personal-website/assets/02-GameStart-DZ_J1KRT.png?type=url",sg=Object.freeze(Object.defineProperty({__proto__:null,default:ig},Symbol.toStringTag,{value:"Module"})),ag="/personal-website/assets/03-GameScreen-D6l0jE3_.png?type=url",ug=Object.freeze(Object.defineProperty({__proto__:null,default:ag},Symbol.toStringTag,{value:"Module"})),cg="/personal-website/assets/04-DeathScreen-nHaWga4y.png?type=url",fg=Object.freeze(Object.defineProperty({__proto__:null,default:cg},Symbol.toStringTag,{value:"Module"})),wd=[{title:"Lobos Client",status:"Plans for Revision",last_updated:"Feb 6, 2025",images:Object.values(Object.assign({"/src/assets/project-images/LobosClient/01-SelectScreen.png":ph,"/src/assets/project-images/LobosClient/02-SC-StateSummary.png":hh,"/src/assets/project-images/LobosClient/03-SC-DistrictSummary.png":vh,"/src/assets/project-images/LobosClient/04-SC-PrecinctSummary.png":wh,"/src/assets/project-images/LobosClient/05-SC-HeatMap.png":xh,"/src/assets/project-images/LobosClient/06-SC-Gingles.png":kh,"/src/assets/project-images/LobosClient/07-SC-EI.png":jh,"/src/assets/project-images/LobosClient/08-SC-EnsembleSplit.png":Nh,"/src/assets/project-images/LobosClient/09-SC-BWPlot.png":Oh,"/src/assets/project-images/LobosClient/10-SC-ComparePlans.png":Lh})),aspect_ratio:1920/1080,description:"Placeholder Description",tags:["JavaScript","React","Java","Spring","Python","Pandas","GeoPandas","MongoDB"],links:[{type:"Try",name:"Lobos Client",url:"https://lobos-client.vercel.app/"}]},{title:"Asphodel Game",status:"Plans for Revision",last_updated:"Jul 3, 2024",images:Object.values(Object.assign({"/src/assets/project-images/Asphodel/01-TitleScreen.png":Mh,"/src/assets/project-images/Asphodel/02-Level0-01.png":Ih,"/src/assets/project-images/Asphodel/03-Level1-01.png":Dh,"/src/assets/project-images/Asphodel/04-Level1-02.png":Ah,"/src/assets/project-images/Asphodel/05-Level1-03.png":Uh,"/src/assets/project-images/Asphodel/06-Level1-04.png":Wh,"/src/assets/project-images/Asphodel/07-Level2-01.png":Qh,"/src/assets/project-images/Asphodel/08-Level3-01.png":Xh,"/src/assets/project-images/Asphodel/09-Level4-01.png":Kh,"/src/assets/project-images/Asphodel/10-Level5-01.png":Jh,"/src/assets/project-images/Asphodel/11-Level5-02.png":qh,"/src/assets/project-images/Asphodel/12-Level5-03.png":tg,"/src/assets/project-images/Asphodel/13-LoadingScreen.png":rg})),aspect_ratio:1500/1e3,description:"Placeholder Description",tags:["TypeScript","Gulp.js","Wolfie2D"],links:[{type:"Try",name:"Asphodel",url:"https://asphodel-game.web.app/"}]},{title:"ViewYou",status:"Plans for Revision",last_updated:"Mar 13, 2024",images:Object.values(Object.assign({})),aspect_ratio:1920/1080,description:"Placeholder Description",tags:["JavaScript","React","Node.js","Express.js","Python","Flask","DeepFace","OpenAI"],links:[]},{title:"Minecraft Bingo",status:"Plans for Revision",last_updated:"Oct 29, 2023",images:Object.values(Object.assign({})),aspect_ratio:1920/1080,description:"Placeholder Description",tags:["Java","SpigotMC"],links:[]},{title:"Fake Stack Overflow",status:"Plans for Revision",last_updated:"Dec 22, 2023",images:Object.values(Object.assign({})),aspect_ratio:1920/1080,description:"Placeholder Description",tags:["JavaScript","React","Node.js","Express.js","bcrypt","MongoDB"],links:[]},{title:"Time2Learn",status:"Completed",last_updated:"Feb 11, 2024",images:Object.values(Object.assign({})),aspect_ratio:1920/1080,description:"Placeholder Description",tags:["JavaScript","React","Node.js","MongoDB"],links:[]},{title:"C Memory Allocator",status:"Completed",last_updated:"Apr 05, 2023",images:Object.values(Object.assign({})),aspect_ratio:1920/1080,description:"Placeholder Description",tags:["C","GDB"],links:[{type:"GitHub",name:"320 Memory Allocator",url:"https://github.com/klin2003/320-memory-allocator"}]},{title:"Graphs in MIPS",status:"Completed",last_updated:"Dec 11, 2022",images:Object.values(Object.assign({})),aspect_ratio:1920/1080,description:"Placeholder Description",tags:["MIPS Assembly","MARS"],links:[{type:"GitHub",name:"220 MIPs Graphs",url:"https://github.com/klin2003/220-mips-graphs"}]},{title:"Totally Not Crossy Road",status:"Completed",last_updated:"Jun 14, 2020",images:Object.values(Object.assign({"/src/assets/project-images/TNCR/01-TitleScreen.png":og,"/src/assets/project-images/TNCR/02-GameStart.png":sg,"/src/assets/project-images/TNCR/03-GameScreen.png":ug,"/src/assets/project-images/TNCR/04-DeathScreen.png":fg})),aspect_ratio:800/800,description:"Placeholder Description",tags:["Java","Processing"],links:[{type:"GitHub",name:"Totally Not Crossy Road",url:"https://github.com/klin2003/totally-not-crossy-road"}]}],dg="/personal-website/assets/NoImages-Cnq4Uv_V.png";function pg(e){const t={projectData:wd,projectIndex:e.projectIndex,setProjectIndex:e.setProjectIndex};return p.jsxs("div",{id:"projects",children:[p.jsx(Gs,{className:"projects-section-header",entryNumber:2,titleLabel:e.width>1200?"Projects":""}),p.jsxs("div",{className:"projects-container flex flex-col text-white",children:[p.jsx(mg,{projectData:t.projectData,projectIndex:t.projectIndex,setProjectIndex:t.setProjectIndex}),p.jsxs(yd,{children:[p.jsx(hg,{projectData:t.projectData,projectIndex:t.projectIndex,setProjectIndex:t.setProjectIndex}),p.jsx(gg,{projectData:t.projectData,projectIndex:t.projectIndex,setProjectIndex:t.setProjectIndex,setFocus:e.setFocus}),p.jsx(vg,{projectData:t.projectData,projectIndex:t.projectIndex,setProjectIndex:t.setProjectIndex})]},e.projectIndex)]})]})}function mg({projectData:e,projectIndex:t,setProjectIndex:n}){const r=l=>{l&&t==e.length?n(1):!l&&t==1?n(e.length):n(t+(l?1:-1))};return p.jsxs("div",{className:"flex flex-row justify-between items-center",children:[p.jsx("div",{className:"text-red-500 font-bold montserrat",children:"CURRENT LISTING:"}),p.jsxs("div",{className:"projects-header-settings flex justify-center items-center",children:[p.jsx(l1,{className:"projects-header-arrow",onClick:()=>{r(!1)}}),p.jsxs("div",{className:"projects-header-index",children:[p.jsx("span",{className:"font-medium text-red-500",children:`${t.toString().padStart(3,"0")}`}),p.jsx("span",{children:" / "}),p.jsx("span",{children:`${e.length.toString().padStart(3,"0")}`})]}),p.jsx(i1,{className:"projects-header-arrow",onClick:()=>{r(!0)}})]})]})}function hg({projectData:e,projectIndex:t}){const n=e[t-1];return p.jsxs("div",{className:"projects-header-section flex flex-col",children:[p.jsx("div",{className:"projects-header-title averia-serif",children:n.title}),p.jsxs("div",{className:"montserrat text-gray-400 font-bold mb-8",children:[p.jsx("span",{className:"underline underline-offset-4",children:"Last Updated"}),p.jsx("span",{children:`: ${n.last_updated}`}),p.jsx("div",{className:"mt-2",children:`Status: [${n.status}]`})]})]})}function gg({projectData:e,projectIndex:t,setFocus:n}){const r=e[t-1],l=r.images.length,[o,i]=L.useState(0),[s,a]=L.useState(0),c=L.useRef(null),g=h=>{i(h?(o+1)%l:(o-1+l)%l)},m=()=>{if(c.current){const h=c.current.querySelector(".project-img-container");if(h){const w=h.getBoundingClientRect().width;a(w+48)}}};return r.images.length==0?p.jsx("div",{className:"project-display-section flex items-center",children:p.jsx("img",{src:dg,className:"project-img-none"})}):p.jsxs("div",{className:"projects-display-section flex flex-col overflow-hidden",children:[p.jsx("div",{ref:c,className:"project-display-images flex items-center",children:r.images.map((h,w)=>p.jsxs("div",{className:"relative project-img-container flex transition-transform duration-500 ease-in-out",style:{transform:`translateX(-${o*s}px)`},children:[p.jsx("img",{src:h.default,className:"project-img",onClick:()=>n((w+o)%l),onLoad:m}),p.jsx(v1,{className:"project-img-zoom cursor-pointer",onClick:()=>n((w+o)%l)})]},w))}),p.jsxs("div",{className:"flex flex-row justify-between mt-2 p-2 border-y-2 border-gray-500 border-dashed",children:[p.jsx(a1,{size:32,className:"projects-img-arrow mr-4",onClick:()=>g(!1)}),p.jsxs("div",{className:"projects-img-slides-index",children:[p.jsx("span",{className:"font-medium text-red-500",children:`${(o+1).toString().padStart(2,"0")}`}),p.jsx("span",{children:" / "}),p.jsx("span",{children:`${l.toString().padStart(2,"0")}`})]}),p.jsx(u1,{size:32,className:"projects-img-arrow ml-4",onClick:()=>g(!0)})]})]})}function vg({projectData:e,projectIndex:t,setProjectIndex:n}){return p.jsxs("div",{className:"projects-details-section",children:[p.jsx("div",{className:"flex-1",children:p.jsx(yg,{projectData:e,projectIndex:t,setProjectIndex:n})}),p.jsxs("div",{className:"flex flex-col flex-1",children:[p.jsx(wg,{projectData:e,projectIndex:t,setProjectIndex:n}),p.jsx(Sg,{projectData:e,projectIndex:t,setProjectIndex:n})]})]})}function yg({projectData:e,projectIndex:t}){const n=e[t-1];return p.jsxs("div",{className:"projects-description-container mb-8",children:[p.jsx("div",{className:"projects-details-title",children:"DESCRIPTION"}),p.jsx("div",{className:"projects-description-content source-code-pro mb-4",children:n.description})]})}function wg({projectData:e,projectIndex:t}){const n=e[t-1];return p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"projects-details-title",children:"TECH STACK"}),p.jsxs("div",{className:"projects-tech-stack mb-8",children:[n.tags.length==0&&p.jsx("div",{className:"source-code-pro",children:"No Tech Stack Provided"}),p.jsx("div",{className:"projects-tech-stack-grid",children:n.tags.map((r,l)=>p.jsx("div",{className:"projects-tech-stack-item",children:r},`Tag${l}`))})]})]})}function Sg({projectData:e,projectIndex:t}){const n=e[t-1];return p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"projects-details-title",children:"LINKS"}),p.jsxs("div",{className:"projects-links-container mb-4",children:[n.links.length==0&&p.jsx("div",{className:"source-code-pro",children:"No Links Available"}),n.links.map((r,l)=>p.jsxs("div",{className:"flex items-center",children:[r.type=="GitHub"&&p.jsxs(p.Fragment,{children:[p.jsx(Wf,{size:24,className:"mr-2"}),p.jsx("span",{className:"source-code-pro",children:"GitHub Repo: "})]}),r.type=="Try"&&p.jsxs(p.Fragment,{children:[p.jsx(p1,{size:24,className:"mr-2"}),p.jsx("span",{className:"source-code-pro",children:"Try Yourself: "})]}),p.jsx("a",{className:"source-code-pro classic-anchor1",href:r.url,target:"_blank",children:r.name})]},`Link${l}`))]})]})}function xg(e){return p.jsx("div",{id:"tools",className:"flex flex-row items-center",children:p.jsx(Gs,{className:"tools",entryNumber:3,titleLabel:e.width>1200?"Tools (WIP)":""})})}function _g(e){const t=wd,n=t[e.projectIndex-1].images.length,[r,l]=L.useState(!0),[o,i]=L.useState(!1),s=a=>{i(!0),a?e.setFocus((e.focusState+1)%n):e.setFocus((e.focusState-1+n)%n)};return L.useEffect(()=>{const a=document.getElementById("project-focus-img-modal"),c=document.getElementById("project-focus-img");a&&c&&(l(!o),i(!1),e.focusState<0?a.style.display="none":(a.style.display="flex",c.src=t[e.projectIndex-1].images[e.focusState].default))},[e.focusState]),p.jsx(p.Fragment,{children:p.jsxs("div",{id:"project-focus-img-modal",children:[p.jsx(g1,{className:"project-focus-img-modal-close",onClick:()=>{e.setFocus(-1)}}),p.jsxs("div",{className:"flex flex-row items-center",children:[p.jsx(o1,{className:"project-focus-img-arrow",onClick:()=>s(!1)}),p.jsx(yd,{duration:1e3,children:p.jsx("img",{id:"project-focus-img",className:`${r?"zoom":""}`})},e.focusState),p.jsx(s1,{className:"project-focus-img-arrow",onClick:()=>s(!0)})]})]})})}function kg(){const[e,t]=L.useState(window.innerWidth),[n,r]=L.useState(1),[l,o]=L.useState(-1),i=()=>{t(window.innerWidth)};return L.useEffect(()=>(window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}),[]),p.jsxs("div",{className:"relative",children:[p.jsx("img",{className:"bg-image",src:Kp}),p.jsx(y1,{}),p.jsx(_1,{width:e}),p.jsx(pg,{width:e,projectIndex:n,setProjectIndex:r,setFocus:o}),p.jsx(xg,{width:e}),p.jsx(_g,{projectIndex:n,setFocus:o,focusState:l}),p.jsx(x1,{})]})}ti.createRoot(document.getElementById("root")).render(p.jsx(at.StrictMode,{children:p.jsx(kg,{})}));
