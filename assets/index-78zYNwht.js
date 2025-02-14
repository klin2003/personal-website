function kd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function jd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ou={exports:{}},Fo={},Lu={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xr=Symbol.for("react.element"),Cd=Symbol.for("react.portal"),Ed=Symbol.for("react.fragment"),Nd=Symbol.for("react.strict_mode"),Pd=Symbol.for("react.profiler"),zd=Symbol.for("react.provider"),Od=Symbol.for("react.context"),Ld=Symbol.for("react.forward_ref"),Td=Symbol.for("react.suspense"),Md=Symbol.for("react.memo"),Rd=Symbol.for("react.lazy"),sa=Symbol.iterator;function Id(e){return e===null||typeof e!="object"?null:(e=sa&&e[sa]||e["@@iterator"],typeof e=="function"?e:null)}var Tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mu=Object.assign,Ru={};function En(e,t,n){this.props=e,this.context=t,this.refs=Ru,this.updater=n||Tu}En.prototype.isReactComponent={};En.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};En.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Iu(){}Iu.prototype=En.prototype;function es(e,t,n){this.props=e,this.context=t,this.refs=Ru,this.updater=n||Tu}var ts=es.prototype=new Iu;ts.constructor=es;Mu(ts,En.prototype);ts.isPureReactComponent=!0;var aa=Array.isArray,$u=Object.prototype.hasOwnProperty,ns={current:null},Du={key:!0,ref:!0,__self:!0,__source:!0};function Fu(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)$u.call(t,r)&&!Du.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:xr,type:e,key:l,ref:i,props:o,_owner:ns.current}}function $d(e,t){return{$$typeof:xr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function rs(e){return typeof e=="object"&&e!==null&&e.$$typeof===xr}function Dd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ua=/\/+/g;function Nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dd(""+e.key):t.toString(36)}function Kr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case xr:case Cd:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Nl(i,0):r,aa(o)?(n="",e!=null&&(n=e.replace(ua,"$&/")+"/"),Kr(o,t,n,"",function(c){return c})):o!=null&&(rs(o)&&(o=$d(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(ua,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",aa(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Nl(l,s);i+=Kr(l,t,n,a,o)}else if(a=Id(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Nl(l,s++),i+=Kr(l,t,n,a,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function zr(e,t,n){if(e==null)return e;var r=[],o=0;return Kr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Fd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},br={transition:null},Ad={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:br,ReactCurrentOwner:ns};function Au(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:zr,forEach:function(e,t,n){zr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return zr(e,function(){t++}),t},toArray:function(e){return zr(e,function(t){return t})||[]},only:function(e){if(!rs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=En;M.Fragment=Ed;M.Profiler=Pd;M.PureComponent=es;M.StrictMode=Nd;M.Suspense=Td;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ad;M.act=Au;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mu({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=ns.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)$u.call(t,a)&&!Du.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:xr,type:e.type,key:o,ref:l,props:r,_owner:i}};M.createContext=function(e){return e={$$typeof:Od,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zd,_context:e},e.Consumer=e};M.createElement=Fu;M.createFactory=function(e){var t=Fu.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Ld,render:e}};M.isValidElement=rs;M.lazy=function(e){return{$$typeof:Rd,_payload:{_status:-1,_result:e},_init:Fd}};M.memo=function(e,t){return{$$typeof:Md,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=br.transition;br.transition={};try{e()}finally{br.transition=t}};M.unstable_act=Au;M.useCallback=function(e,t){return we.current.useCallback(e,t)};M.useContext=function(e){return we.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return we.current.useDeferredValue(e)};M.useEffect=function(e,t){return we.current.useEffect(e,t)};M.useId=function(){return we.current.useId()};M.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return we.current.useMemo(e,t)};M.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};M.useRef=function(e){return we.current.useRef(e)};M.useState=function(e){return we.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return we.current.useTransition()};M.version="18.3.1";Lu.exports=M;var L=Lu.exports;const at=jd(L),ca=kd({__proto__:null,default:at},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd=L,Ud=Symbol.for("react.element"),Vd=Symbol.for("react.fragment"),Wd=Object.prototype.hasOwnProperty,Hd=Bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qd={key:!0,ref:!0,__self:!0,__source:!0};function Bu(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Wd.call(t,r)&&!Qd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Ud,type:e,key:l,ref:i,props:o,_owner:Hd.current}}Fo.Fragment=Vd;Fo.jsx=Bu;Fo.jsxs=Bu;Ou.exports=Fo;var p=Ou.exports,ti={},Uu={exports:{}},Te={},Vu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,O){var T=N.length;N.push(O);e:for(;0<T;){var b=T-1>>>1,ne=N[b];if(0<o(ne,O))N[b]=O,N[T]=ne,T=b;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var O=N[0],T=N.pop();if(T!==O){N[0]=T;e:for(var b=0,ne=N.length,Nr=ne>>>1;b<Nr;){var It=2*(b+1)-1,El=N[It],$t=It+1,Pr=N[$t];if(0>o(El,T))$t<ne&&0>o(Pr,El)?(N[b]=Pr,N[$t]=T,b=$t):(N[b]=El,N[It]=T,b=It);else if($t<ne&&0>o(Pr,T))N[b]=Pr,N[$t]=T,b=$t;else break e}}return O}function o(N,O){var T=N.sortIndex-O.sortIndex;return T!==0?T:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],c=[],g=1,m=null,h=3,w=!1,S=!1,v=!1,z=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(N){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=N)r(c),O.sortIndex=O.expirationTime,t(a,O);else break;O=n(c)}}function y(N){if(v=!1,d(N),!S)if(n(a)!==null)S=!0,jl(j);else{var O=n(c);O!==null&&Cl(y,O.startTime-N)}}function j(N,O){S=!1,v&&(v=!1,f(P),P=-1),w=!0;var T=h;try{for(d(O),m=n(a);m!==null&&(!(m.expirationTime>O)||N&&!Ve());){var b=m.callback;if(typeof b=="function"){m.callback=null,h=m.priorityLevel;var ne=b(m.expirationTime<=O);O=e.unstable_now(),typeof ne=="function"?m.callback=ne:m===n(a)&&r(a),d(O)}else r(a);m=n(a)}if(m!==null)var Nr=!0;else{var It=n(c);It!==null&&Cl(y,It.startTime-O),Nr=!1}return Nr}finally{m=null,h=T,w=!1}}var C=!1,k=null,P=-1,K=5,R=-1;function Ve(){return!(e.unstable_now()-R<K)}function On(){if(k!==null){var N=e.unstable_now();R=N;var O=!0;try{O=k(!0,N)}finally{O?Ln():(C=!1,k=null)}}else C=!1}var Ln;if(typeof u=="function")Ln=function(){u(On)};else if(typeof MessageChannel<"u"){var ia=new MessageChannel,_d=ia.port2;ia.port1.onmessage=On,Ln=function(){_d.postMessage(null)}}else Ln=function(){z(On,0)};function jl(N){k=N,C||(C=!0,Ln())}function Cl(N,O){P=z(function(){N(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){S||w||(S=!0,jl(j))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var T=h;h=O;try{return N()}finally{h=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var T=h;h=N;try{return O()}finally{h=T}},e.unstable_scheduleCallback=function(N,O,T){var b=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?b+T:b):T=b,N){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=T+ne,N={id:g++,callback:O,priorityLevel:N,startTime:T,expirationTime:ne,sortIndex:-1},T>b?(N.sortIndex=T,t(c,N),n(a)===null&&N===n(c)&&(v?(f(P),P=-1):v=!0,Cl(y,T-b))):(N.sortIndex=ne,t(a,N),S||w||(S=!0,jl(j))),N},e.unstable_shouldYield=Ve,e.unstable_wrapCallback=function(N){var O=h;return function(){var T=h;h=O;try{return N.apply(this,arguments)}finally{h=T}}}})(Wu);Vu.exports=Wu;var Yd=Vu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd=L,Le=Yd;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hu=new Set,er={};function Kt(e,t){yn(e,t),yn(e+"Capture",t)}function yn(e,t){for(er[e]=t,e=0;e<t.length;e++)Hu.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ni=Object.prototype.hasOwnProperty,Gd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fa={},da={};function Kd(e){return ni.call(da,e)?!0:ni.call(fa,e)?!1:Gd.test(e)?da[e]=!0:(fa[e]=!0,!1)}function bd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jd(e,t,n,r){if(t===null||typeof t>"u"||bd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var os=/[\-:]([a-z])/g;function ls(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(os,ls);ce[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(os,ls);ce[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(os,ls);ce[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function is(e,t,n,r){var o=ce.hasOwnProperty(t)?ce[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Jd(t,n,o,r)&&(n=null),r||o===null?Kd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=Xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Or=Symbol.for("react.element"),Zt=Symbol.for("react.portal"),qt=Symbol.for("react.fragment"),ss=Symbol.for("react.strict_mode"),ri=Symbol.for("react.profiler"),Qu=Symbol.for("react.provider"),Yu=Symbol.for("react.context"),as=Symbol.for("react.forward_ref"),oi=Symbol.for("react.suspense"),li=Symbol.for("react.suspense_list"),us=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),Xu=Symbol.for("react.offscreen"),pa=Symbol.iterator;function Tn(e){return e===null||typeof e!="object"?null:(e=pa&&e[pa]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Pl;function Un(e){if(Pl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pl=t&&t[1]||""}return`
`+Pl+e}var zl=!1;function Ol(e,t){if(!e||zl)return"";zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{zl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Un(e):""}function Zd(e){switch(e.tag){case 5:return Un(e.type);case 16:return Un("Lazy");case 13:return Un("Suspense");case 19:return Un("SuspenseList");case 0:case 2:case 15:return e=Ol(e.type,!1),e;case 11:return e=Ol(e.type.render,!1),e;case 1:return e=Ol(e.type,!0),e;default:return""}}function ii(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qt:return"Fragment";case Zt:return"Portal";case ri:return"Profiler";case ss:return"StrictMode";case oi:return"Suspense";case li:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yu:return(e.displayName||"Context")+".Consumer";case Qu:return(e._context.displayName||"Context")+".Provider";case as:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case us:return t=e.displayName||null,t!==null?t:ii(e.type)||"Memo";case gt:t=e._payload,e=e._init;try{return ii(e(t))}catch{}}return null}function qd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ii(t);case 8:return t===ss?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ot(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function e0(e){var t=Gu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lr(e){e._valueTracker||(e._valueTracker=e0(e))}function Ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function si(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ma(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ot(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bu(e,t){t=t.checked,t!=null&&is(e,"checked",t,!1)}function ai(e,t){bu(e,t);var n=Ot(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ui(e,t.type,n):t.hasOwnProperty("defaultValue")&&ui(e,t.type,Ot(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ha(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ui(e,t,n){(t!=="number"||co(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vn=Array.isArray;function fn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ot(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ci(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ga(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Vn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ot(n)}}function Ju(e,t){var n=Ot(t.value),r=Ot(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function va(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tr,qu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tr=Tr||document.createElement("div"),Tr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},t0=["Webkit","ms","Moz","O"];Object.keys(Qn).forEach(function(e){t0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qn[t]=Qn[e]})});function ec(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qn.hasOwnProperty(e)&&Qn[e]?(""+t).trim():t+"px"}function tc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ec(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var n0=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function di(e,t){if(t){if(n0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function pi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mi=null;function cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hi=null,dn=null,pn=null;function ya(e){if(e=jr(e)){if(typeof hi!="function")throw Error(x(280));var t=e.stateNode;t&&(t=Wo(t),hi(e.stateNode,e.type,t))}}function nc(e){dn?pn?pn.push(e):pn=[e]:dn=e}function rc(){if(dn){var e=dn,t=pn;if(pn=dn=null,ya(e),t)for(e=0;e<t.length;e++)ya(t[e])}}function oc(e,t){return e(t)}function lc(){}var Ll=!1;function ic(e,t,n){if(Ll)return e(t,n);Ll=!0;try{return oc(e,t,n)}finally{Ll=!1,(dn!==null||pn!==null)&&(lc(),rc())}}function nr(e,t){var n=e.stateNode;if(n===null)return null;var r=Wo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var gi=!1;if(ct)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){gi=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{gi=!1}function r0(e,t,n,r,o,l,i,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Yn=!1,fo=null,po=!1,vi=null,o0={onError:function(e){Yn=!0,fo=e}};function l0(e,t,n,r,o,l,i,s,a){Yn=!1,fo=null,r0.apply(o0,arguments)}function i0(e,t,n,r,o,l,i,s,a){if(l0.apply(this,arguments),Yn){if(Yn){var c=fo;Yn=!1,fo=null}else throw Error(x(198));po||(po=!0,vi=c)}}function bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wa(e){if(bt(e)!==e)throw Error(x(188))}function s0(e){var t=e.alternate;if(!t){if(t=bt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return wa(o),e;if(l===r)return wa(o),t;l=l.sibling}throw Error(x(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function ac(e){return e=s0(e),e!==null?uc(e):null}function uc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=uc(e);if(t!==null)return t;e=e.sibling}return null}var cc=Le.unstable_scheduleCallback,Sa=Le.unstable_cancelCallback,a0=Le.unstable_shouldYield,u0=Le.unstable_requestPaint,J=Le.unstable_now,c0=Le.unstable_getCurrentPriorityLevel,fs=Le.unstable_ImmediatePriority,fc=Le.unstable_UserBlockingPriority,mo=Le.unstable_NormalPriority,f0=Le.unstable_LowPriority,dc=Le.unstable_IdlePriority,Ao=null,tt=null;function d0(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Ao,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:h0,p0=Math.log,m0=Math.LN2;function h0(e){return e>>>=0,e===0?32:31-(p0(e)/m0|0)|0}var Mr=64,Rr=4194304;function Wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ho(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=Wn(s):(l&=i,l!==0&&(r=Wn(l)))}else i=n&~o,i!==0?r=Wn(i):l!==0&&(r=Wn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),o=1<<n,r|=e[n],t&=~o;return r}function g0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function v0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Xe(l),s=1<<i,a=o[i];a===-1?(!(s&n)||s&r)&&(o[i]=g0(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function yi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pc(){var e=Mr;return Mr<<=1,!(Mr&4194240)&&(Mr=64),e}function Tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _r(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function y0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Xe(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function ds(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function mc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hc,ps,gc,vc,yc,wi=!1,Ir=[],_t=null,kt=null,jt=null,rr=new Map,or=new Map,yt=[],w0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xa(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":or.delete(t.pointerId)}}function Rn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=jr(t),t!==null&&ps(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function S0(e,t,n,r,o){switch(t){case"focusin":return _t=Rn(_t,e,t,n,r,o),!0;case"dragenter":return kt=Rn(kt,e,t,n,r,o),!0;case"mouseover":return jt=Rn(jt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return rr.set(l,Rn(rr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,or.set(l,Rn(or.get(l)||null,e,t,n,r,o)),!0}return!1}function wc(e){var t=At(e.target);if(t!==null){var n=bt(t);if(n!==null){if(t=n.tag,t===13){if(t=sc(n),t!==null){e.blockedOn=t,yc(e.priority,function(){gc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Si(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);mi=r,n.target.dispatchEvent(r),mi=null}else return t=jr(n),t!==null&&ps(t),e.blockedOn=n,!1;t.shift()}return!0}function _a(e,t,n){Jr(e)&&n.delete(t)}function x0(){wi=!1,_t!==null&&Jr(_t)&&(_t=null),kt!==null&&Jr(kt)&&(kt=null),jt!==null&&Jr(jt)&&(jt=null),rr.forEach(_a),or.forEach(_a)}function In(e,t){e.blockedOn===t&&(e.blockedOn=null,wi||(wi=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,x0)))}function lr(e){function t(o){return In(o,e)}if(0<Ir.length){In(Ir[0],e);for(var n=1;n<Ir.length;n++){var r=Ir[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&In(_t,e),kt!==null&&In(kt,e),jt!==null&&In(jt,e),rr.forEach(t),or.forEach(t),n=0;n<yt.length;n++)r=yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yt.length&&(n=yt[0],n.blockedOn===null);)wc(n),n.blockedOn===null&&yt.shift()}var mn=mt.ReactCurrentBatchConfig,go=!0;function _0(e,t,n,r){var o=F,l=mn.transition;mn.transition=null;try{F=1,ms(e,t,n,r)}finally{F=o,mn.transition=l}}function k0(e,t,n,r){var o=F,l=mn.transition;mn.transition=null;try{F=4,ms(e,t,n,r)}finally{F=o,mn.transition=l}}function ms(e,t,n,r){if(go){var o=Si(e,t,n,r);if(o===null)Vl(e,t,r,vo,n),xa(e,r);else if(S0(o,e,t,n,r))r.stopPropagation();else if(xa(e,r),t&4&&-1<w0.indexOf(e)){for(;o!==null;){var l=jr(o);if(l!==null&&hc(l),l=Si(e,t,n,r),l===null&&Vl(e,t,r,vo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Vl(e,t,r,null,n)}}var vo=null;function Si(e,t,n,r){if(vo=null,e=cs(r),e=At(e),e!==null)if(t=bt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vo=e,null}function Sc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(c0()){case fs:return 1;case fc:return 4;case mo:case f0:return 16;case dc:return 536870912;default:return 16}default:return 16}}var St=null,hs=null,Zr=null;function xc(){if(Zr)return Zr;var e,t=hs,n=t.length,r,o="value"in St?St.value:St.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Zr=o.slice(e,1<r?1-r:void 0)}function qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $r(){return!0}function ka(){return!1}function Me(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?$r:ka,this.isPropagationStopped=ka,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$r)},persist:function(){},isPersistent:$r}),t}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gs=Me(Nn),kr=X({},Nn,{view:0,detail:0}),j0=Me(kr),Ml,Rl,$n,Bo=X({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$n&&($n&&e.type==="mousemove"?(Ml=e.screenX-$n.screenX,Rl=e.screenY-$n.screenY):Rl=Ml=0,$n=e),Ml)},movementY:function(e){return"movementY"in e?e.movementY:Rl}}),ja=Me(Bo),C0=X({},Bo,{dataTransfer:0}),E0=Me(C0),N0=X({},kr,{relatedTarget:0}),Il=Me(N0),P0=X({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),z0=Me(P0),O0=X({},Nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),L0=Me(O0),T0=X({},Nn,{data:0}),Ca=Me(T0),M0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=I0[e])?!!t[e]:!1}function vs(){return $0}var D0=X({},kr,{key:function(e){if(e.key){var t=M0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?R0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vs,charCode:function(e){return e.type==="keypress"?qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),F0=Me(D0),A0=X({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ea=Me(A0),B0=X({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vs}),U0=Me(B0),V0=X({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),W0=Me(V0),H0=X({},Bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Q0=Me(H0),Y0=[9,13,27,32],ys=ct&&"CompositionEvent"in window,Xn=null;ct&&"documentMode"in document&&(Xn=document.documentMode);var X0=ct&&"TextEvent"in window&&!Xn,_c=ct&&(!ys||Xn&&8<Xn&&11>=Xn),Na=" ",Pa=!1;function kc(e,t){switch(e){case"keyup":return Y0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var en=!1;function G0(e,t){switch(e){case"compositionend":return jc(t);case"keypress":return t.which!==32?null:(Pa=!0,Na);case"textInput":return e=t.data,e===Na&&Pa?null:e;default:return null}}function K0(e,t){if(en)return e==="compositionend"||!ys&&kc(e,t)?(e=xc(),Zr=hs=St=null,en=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _c&&t.locale!=="ko"?null:t.data;default:return null}}var b0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!b0[e.type]:t==="textarea"}function Cc(e,t,n,r){nc(r),t=yo(t,"onChange"),0<t.length&&(n=new gs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,ir=null;function J0(e){$c(e,0)}function Uo(e){var t=rn(e);if(Ku(t))return e}function Z0(e,t){if(e==="change")return t}var Ec=!1;if(ct){var $l;if(ct){var Dl="oninput"in document;if(!Dl){var Oa=document.createElement("div");Oa.setAttribute("oninput","return;"),Dl=typeof Oa.oninput=="function"}$l=Dl}else $l=!1;Ec=$l&&(!document.documentMode||9<document.documentMode)}function La(){Gn&&(Gn.detachEvent("onpropertychange",Nc),ir=Gn=null)}function Nc(e){if(e.propertyName==="value"&&Uo(ir)){var t=[];Cc(t,ir,e,cs(e)),ic(J0,t)}}function q0(e,t,n){e==="focusin"?(La(),Gn=t,ir=n,Gn.attachEvent("onpropertychange",Nc)):e==="focusout"&&La()}function ep(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Uo(ir)}function tp(e,t){if(e==="click")return Uo(t)}function np(e,t){if(e==="input"||e==="change")return Uo(t)}function rp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:rp;function sr(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ni.call(t,o)||!Ke(e[o],t[o]))return!1}return!0}function Ta(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ma(e,t){var n=Ta(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ta(n)}}function Pc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zc(){for(var e=window,t=co();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=co(e.document)}return t}function ws(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function op(e){var t=zc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pc(n.ownerDocument.documentElement,n)){if(r!==null&&ws(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Ma(n,l);var i=Ma(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lp=ct&&"documentMode"in document&&11>=document.documentMode,tn=null,xi=null,Kn=null,_i=!1;function Ra(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_i||tn==null||tn!==co(r)||(r=tn,"selectionStart"in r&&ws(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kn&&sr(Kn,r)||(Kn=r,r=yo(xi,"onSelect"),0<r.length&&(t=new gs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=tn)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nn={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionend:Dr("Transition","TransitionEnd")},Fl={},Oc={};ct&&(Oc=document.createElement("div").style,"AnimationEvent"in window||(delete nn.animationend.animation,delete nn.animationiteration.animation,delete nn.animationstart.animation),"TransitionEvent"in window||delete nn.transitionend.transition);function Vo(e){if(Fl[e])return Fl[e];if(!nn[e])return e;var t=nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Oc)return Fl[e]=t[n];return e}var Lc=Vo("animationend"),Tc=Vo("animationiteration"),Mc=Vo("animationstart"),Rc=Vo("transitionend"),Ic=new Map,Ia="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){Ic.set(e,t),Kt(t,[e])}for(var Al=0;Al<Ia.length;Al++){var Bl=Ia[Al],ip=Bl.toLowerCase(),sp=Bl[0].toUpperCase()+Bl.slice(1);Tt(ip,"on"+sp)}Tt(Lc,"onAnimationEnd");Tt(Tc,"onAnimationIteration");Tt(Mc,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(Rc,"onTransitionEnd");yn("onMouseEnter",["mouseout","mouseover"]);yn("onMouseLeave",["mouseout","mouseover"]);yn("onPointerEnter",["pointerout","pointerover"]);yn("onPointerLeave",["pointerout","pointerover"]);Kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ap=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));function $a(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,i0(r,t,void 0,e),e.currentTarget=null}function $c(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==l&&o.isPropagationStopped())break e;$a(o,s,c),l=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,c=s.currentTarget,s=s.listener,a!==l&&o.isPropagationStopped())break e;$a(o,s,c),l=a}}}if(po)throw e=vi,po=!1,vi=null,e}function V(e,t){var n=t[Ni];n===void 0&&(n=t[Ni]=new Set);var r=e+"__bubble";n.has(r)||(Dc(t,e,2,!1),n.add(r))}function Ul(e,t,n){var r=0;t&&(r|=4),Dc(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Fr]){e[Fr]=!0,Hu.forEach(function(n){n!=="selectionchange"&&(ap.has(n)||Ul(n,!1,e),Ul(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fr]||(t[Fr]=!0,Ul("selectionchange",!1,t))}}function Dc(e,t,n,r){switch(Sc(t)){case 1:var o=_0;break;case 4:o=k0;break;default:o=ms}n=o.bind(null,t,n,e),o=void 0,!gi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Vl(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;s!==null;){if(i=At(s),i===null)return;if(a=i.tag,a===5||a===6){r=l=i;continue e}s=s.parentNode}}r=r.return}ic(function(){var c=l,g=cs(n),m=[];e:{var h=Ic.get(e);if(h!==void 0){var w=gs,S=e;switch(e){case"keypress":if(qr(n)===0)break e;case"keydown":case"keyup":w=F0;break;case"focusin":S="focus",w=Il;break;case"focusout":S="blur",w=Il;break;case"beforeblur":case"afterblur":w=Il;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ja;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=E0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=U0;break;case Lc:case Tc:case Mc:w=z0;break;case Rc:w=W0;break;case"scroll":w=j0;break;case"wheel":w=Q0;break;case"copy":case"cut":case"paste":w=L0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ea}var v=(t&4)!==0,z=!v&&e==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var u=c,d;u!==null;){d=u;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,f!==null&&(y=nr(u,f),y!=null&&v.push(ur(u,y,d)))),z)break;u=u.return}0<v.length&&(h=new w(h,S,null,n,g),m.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==mi&&(S=n.relatedTarget||n.fromElement)&&(At(S)||S[ft]))break e;if((w||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,w?(S=n.relatedTarget||n.toElement,w=c,S=S?At(S):null,S!==null&&(z=bt(S),S!==z||S.tag!==5&&S.tag!==6)&&(S=null)):(w=null,S=c),w!==S)){if(v=ja,y="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ea,y="onPointerLeave",f="onPointerEnter",u="pointer"),z=w==null?h:rn(w),d=S==null?h:rn(S),h=new v(y,u+"leave",w,n,g),h.target=z,h.relatedTarget=d,y=null,At(g)===c&&(v=new v(f,u+"enter",S,n,g),v.target=d,v.relatedTarget=z,y=v),z=y,w&&S)t:{for(v=w,f=S,u=0,d=v;d;d=Jt(d))u++;for(d=0,y=f;y;y=Jt(y))d++;for(;0<u-d;)v=Jt(v),u--;for(;0<d-u;)f=Jt(f),d--;for(;u--;){if(v===f||f!==null&&v===f.alternate)break t;v=Jt(v),f=Jt(f)}v=null}else v=null;w!==null&&Da(m,h,w,v,!1),S!==null&&z!==null&&Da(m,z,S,v,!0)}}e:{if(h=c?rn(c):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var j=Z0;else if(za(h))if(Ec)j=np;else{j=ep;var C=q0}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=tp);if(j&&(j=j(e,c))){Cc(m,j,n,g);break e}C&&C(e,h,c),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&ui(h,"number",h.value)}switch(C=c?rn(c):window,e){case"focusin":(za(C)||C.contentEditable==="true")&&(tn=C,xi=c,Kn=null);break;case"focusout":Kn=xi=tn=null;break;case"mousedown":_i=!0;break;case"contextmenu":case"mouseup":case"dragend":_i=!1,Ra(m,n,g);break;case"selectionchange":if(lp)break;case"keydown":case"keyup":Ra(m,n,g)}var k;if(ys)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else en?kc(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(_c&&n.locale!=="ko"&&(en||P!=="onCompositionStart"?P==="onCompositionEnd"&&en&&(k=xc()):(St=g,hs="value"in St?St.value:St.textContent,en=!0)),C=yo(c,P),0<C.length&&(P=new Ca(P,e,null,n,g),m.push({event:P,listeners:C}),k?P.data=k:(k=jc(n),k!==null&&(P.data=k)))),(k=X0?G0(e,n):K0(e,n))&&(c=yo(c,"onBeforeInput"),0<c.length&&(g=new Ca("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:c}),g.data=k))}$c(m,t)})}function ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=nr(e,n),l!=null&&r.unshift(ur(e,l,o)),l=nr(e,t),l!=null&&r.push(ur(e,l,o))),e=e.return}return r}function Jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Da(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=nr(n,l),a!=null&&i.unshift(ur(n,a,s))):o||(a=nr(n,l),a!=null&&i.push(ur(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var up=/\r\n?/g,cp=/\u0000|\uFFFD/g;function Fa(e){return(typeof e=="string"?e:""+e).replace(up,`
`).replace(cp,"")}function Ar(e,t,n){if(t=Fa(t),Fa(e)!==t&&n)throw Error(x(425))}function wo(){}var ki=null,ji=null;function Ci(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ei=typeof setTimeout=="function"?setTimeout:void 0,fp=typeof clearTimeout=="function"?clearTimeout:void 0,Aa=typeof Promise=="function"?Promise:void 0,dp=typeof queueMicrotask=="function"?queueMicrotask:typeof Aa<"u"?function(e){return Aa.resolve(null).then(e).catch(pp)}:Ei;function pp(e){setTimeout(function(){throw e})}function Wl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);lr(t)}function Ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ba(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),et="__reactFiber$"+Pn,cr="__reactProps$"+Pn,ft="__reactContainer$"+Pn,Ni="__reactEvents$"+Pn,mp="__reactListeners$"+Pn,hp="__reactHandles$"+Pn;function At(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ba(e);e!==null;){if(n=e[et])return n;e=Ba(e)}return t}e=n,n=e.parentNode}return null}function jr(e){return e=e[et]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function Wo(e){return e[cr]||null}var Pi=[],on=-1;function Mt(e){return{current:e}}function W(e){0>on||(e.current=Pi[on],Pi[on]=null,on--)}function U(e,t){on++,Pi[on]=e.current,e.current=t}var Lt={},ge=Mt(Lt),ke=Mt(!1),Ht=Lt;function wn(e,t){var n=e.type.contextTypes;if(!n)return Lt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function je(e){return e=e.childContextTypes,e!=null}function So(){W(ke),W(ge)}function Ua(e,t,n){if(ge.current!==Lt)throw Error(x(168));U(ge,t),U(ke,n)}function Fc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(x(108,qd(e)||"Unknown",o));return X({},n,r)}function xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,Ht=ge.current,U(ge,e),U(ke,ke.current),!0}function Va(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=Fc(e,t,Ht),r.__reactInternalMemoizedMergedChildContext=e,W(ke),W(ge),U(ge,e)):W(ke),U(ke,n)}var lt=null,Ho=!1,Hl=!1;function Ac(e){lt===null?lt=[e]:lt.push(e)}function gp(e){Ho=!0,Ac(e)}function Rt(){if(!Hl&&lt!==null){Hl=!0;var e=0,t=F;try{var n=lt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}lt=null,Ho=!1}catch(o){throw lt!==null&&(lt=lt.slice(e+1)),cc(fs,Rt),o}finally{F=t,Hl=!1}}return null}var ln=[],sn=0,_o=null,ko=0,Ie=[],$e=0,Qt=null,it=1,st="";function Dt(e,t){ln[sn++]=ko,ln[sn++]=_o,_o=e,ko=t}function Bc(e,t,n){Ie[$e++]=it,Ie[$e++]=st,Ie[$e++]=Qt,Qt=e;var r=it;e=st;var o=32-Xe(r)-1;r&=~(1<<o),n+=1;var l=32-Xe(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,it=1<<32-Xe(t)+o|n<<o|r,st=l+e}else it=1<<l|n<<o|r,st=e}function Ss(e){e.return!==null&&(Dt(e,1),Bc(e,1,0))}function xs(e){for(;e===_o;)_o=ln[--sn],ln[sn]=null,ko=ln[--sn],ln[sn]=null;for(;e===Qt;)Qt=Ie[--$e],Ie[$e]=null,st=Ie[--$e],Ie[$e]=null,it=Ie[--$e],Ie[$e]=null}var ze=null,Pe=null,H=!1,Ye=null;function Uc(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Wa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Pe=Ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qt!==null?{id:it,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Pe=null,!0):!1;default:return!1}}function zi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oi(e){if(H){var t=Pe;if(t){var n=t;if(!Wa(e,t)){if(zi(e))throw Error(x(418));t=Ct(n.nextSibling);var r=ze;t&&Wa(e,t)?Uc(r,n):(e.flags=e.flags&-4097|2,H=!1,ze=e)}}else{if(zi(e))throw Error(x(418));e.flags=e.flags&-4097|2,H=!1,ze=e}}}function Ha(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Br(e){if(e!==ze)return!1;if(!H)return Ha(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ci(e.type,e.memoizedProps)),t&&(t=Pe)){if(zi(e))throw Vc(),Error(x(418));for(;t;)Uc(e,t),t=Ct(t.nextSibling)}if(Ha(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=Ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=ze?Ct(e.stateNode.nextSibling):null;return!0}function Vc(){for(var e=Pe;e;)e=Ct(e.nextSibling)}function Sn(){Pe=ze=null,H=!1}function _s(e){Ye===null?Ye=[e]:Ye.push(e)}var vp=mt.ReactCurrentBatchConfig;function Dn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function Ur(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qa(e){var t=e._init;return t(e._payload)}function Wc(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=zt(f,u),f.index=0,f.sibling=null,f}function l(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,d,y){return u===null||u.tag!==6?(u=Jl(d,f.mode,y),u.return=f,u):(u=o(u,d),u.return=f,u)}function a(f,u,d,y){var j=d.type;return j===qt?g(f,u,d.props.children,y,d.key):u!==null&&(u.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===gt&&Qa(j)===u.type)?(y=o(u,d.props),y.ref=Dn(f,u,d),y.return=f,y):(y=io(d.type,d.key,d.props,null,f.mode,y),y.ref=Dn(f,u,d),y.return=f,y)}function c(f,u,d,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Zl(d,f.mode,y),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function g(f,u,d,y,j){return u===null||u.tag!==7?(u=Wt(d,f.mode,y,j),u.return=f,u):(u=o(u,d),u.return=f,u)}function m(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Jl(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Or:return d=io(u.type,u.key,u.props,null,f.mode,d),d.ref=Dn(f,null,u),d.return=f,d;case Zt:return u=Zl(u,f.mode,d),u.return=f,u;case gt:var y=u._init;return m(f,y(u._payload),d)}if(Vn(u)||Tn(u))return u=Wt(u,f.mode,d,null),u.return=f,u;Ur(f,u)}return null}function h(f,u,d,y){var j=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return j!==null?null:s(f,u,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Or:return d.key===j?a(f,u,d,y):null;case Zt:return d.key===j?c(f,u,d,y):null;case gt:return j=d._init,h(f,u,j(d._payload),y)}if(Vn(d)||Tn(d))return j!==null?null:g(f,u,d,y,null);Ur(f,d)}return null}function w(f,u,d,y,j){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(d)||null,s(u,f,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Or:return f=f.get(y.key===null?d:y.key)||null,a(u,f,y,j);case Zt:return f=f.get(y.key===null?d:y.key)||null,c(u,f,y,j);case gt:var C=y._init;return w(f,u,d,C(y._payload),j)}if(Vn(y)||Tn(y))return f=f.get(d)||null,g(u,f,y,j,null);Ur(u,y)}return null}function S(f,u,d,y){for(var j=null,C=null,k=u,P=u=0,K=null;k!==null&&P<d.length;P++){k.index>P?(K=k,k=null):K=k.sibling;var R=h(f,k,d[P],y);if(R===null){k===null&&(k=K);break}e&&k&&R.alternate===null&&t(f,k),u=l(R,u,P),C===null?j=R:C.sibling=R,C=R,k=K}if(P===d.length)return n(f,k),H&&Dt(f,P),j;if(k===null){for(;P<d.length;P++)k=m(f,d[P],y),k!==null&&(u=l(k,u,P),C===null?j=k:C.sibling=k,C=k);return H&&Dt(f,P),j}for(k=r(f,k);P<d.length;P++)K=w(k,f,P,d[P],y),K!==null&&(e&&K.alternate!==null&&k.delete(K.key===null?P:K.key),u=l(K,u,P),C===null?j=K:C.sibling=K,C=K);return e&&k.forEach(function(Ve){return t(f,Ve)}),H&&Dt(f,P),j}function v(f,u,d,y){var j=Tn(d);if(typeof j!="function")throw Error(x(150));if(d=j.call(d),d==null)throw Error(x(151));for(var C=j=null,k=u,P=u=0,K=null,R=d.next();k!==null&&!R.done;P++,R=d.next()){k.index>P?(K=k,k=null):K=k.sibling;var Ve=h(f,k,R.value,y);if(Ve===null){k===null&&(k=K);break}e&&k&&Ve.alternate===null&&t(f,k),u=l(Ve,u,P),C===null?j=Ve:C.sibling=Ve,C=Ve,k=K}if(R.done)return n(f,k),H&&Dt(f,P),j;if(k===null){for(;!R.done;P++,R=d.next())R=m(f,R.value,y),R!==null&&(u=l(R,u,P),C===null?j=R:C.sibling=R,C=R);return H&&Dt(f,P),j}for(k=r(f,k);!R.done;P++,R=d.next())R=w(k,f,P,R.value,y),R!==null&&(e&&R.alternate!==null&&k.delete(R.key===null?P:R.key),u=l(R,u,P),C===null?j=R:C.sibling=R,C=R);return e&&k.forEach(function(On){return t(f,On)}),H&&Dt(f,P),j}function z(f,u,d,y){if(typeof d=="object"&&d!==null&&d.type===qt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Or:e:{for(var j=d.key,C=u;C!==null;){if(C.key===j){if(j=d.type,j===qt){if(C.tag===7){n(f,C.sibling),u=o(C,d.props.children),u.return=f,f=u;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===gt&&Qa(j)===C.type){n(f,C.sibling),u=o(C,d.props),u.ref=Dn(f,C,d),u.return=f,f=u;break e}n(f,C);break}else t(f,C);C=C.sibling}d.type===qt?(u=Wt(d.props.children,f.mode,y,d.key),u.return=f,f=u):(y=io(d.type,d.key,d.props,null,f.mode,y),y.ref=Dn(f,u,d),y.return=f,f=y)}return i(f);case Zt:e:{for(C=d.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Zl(d,f.mode,y),u.return=f,f=u}return i(f);case gt:return C=d._init,z(f,u,C(d._payload),y)}if(Vn(d))return S(f,u,d,y);if(Tn(d))return v(f,u,d,y);Ur(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=Jl(d,f.mode,y),u.return=f,f=u),i(f)):n(f,u)}return z}var xn=Wc(!0),Hc=Wc(!1),jo=Mt(null),Co=null,an=null,ks=null;function js(){ks=an=Co=null}function Cs(e){var t=jo.current;W(jo),e._currentValue=t}function Li(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hn(e,t){Co=e,ks=an=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(ks!==e)if(e={context:e,memoizedValue:t,next:null},an===null){if(Co===null)throw Error(x(308));an=e,Co.dependencies={lanes:0,firstContext:e}}else an=an.next=e;return t}var Bt=null;function Es(e){Bt===null?Bt=[e]:Bt.push(e)}function Qc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Es(t)):(n.next=o.next,o.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vt=!1;function Ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Et(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,dt(e,n)}return o=r.interleaved,o===null?(t.next=t,Es(r)):(t.next=o.next,o.next=t),r.interleaved=t,dt(e,n)}function eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ds(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Eo(e,t,n,r){var o=e.updateQueue;vt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,i===null?l=c:i.next=c,i=a;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==i&&(s===null?g.firstBaseUpdate=c:s.next=c,g.lastBaseUpdate=a))}if(l!==null){var m=o.baseState;i=0,g=c=a=null,s=l;do{var h=s.lane,w=s.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var S=e,v=s;switch(h=t,w=n,v.tag){case 1:if(S=v.payload,typeof S=="function"){m=S.call(w,m,h);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=v.payload,h=typeof S=="function"?S.call(w,m,h):S,h==null)break e;m=X({},m,h);break e;case 2:vt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else w={eventTime:w,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(c=g=w,a=m):g=g.next=w,i|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(g===null&&(a=m),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Xt|=i,e.lanes=i,e.memoizedState=m}}function Xa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(x(191,o));o.call(r)}}}var Cr={},nt=Mt(Cr),fr=Mt(Cr),dr=Mt(Cr);function Ut(e){if(e===Cr)throw Error(x(174));return e}function Ps(e,t){switch(U(dr,t),U(fr,e),U(nt,Cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fi(t,e)}W(nt),U(nt,t)}function _n(){W(nt),W(fr),W(dr)}function Xc(e){Ut(dr.current);var t=Ut(nt.current),n=fi(t,e.type);t!==n&&(U(fr,e),U(nt,n))}function zs(e){fr.current===e&&(W(nt),W(fr))}var Q=Mt(0);function No(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ql=[];function Os(){for(var e=0;e<Ql.length;e++)Ql[e]._workInProgressVersionPrimary=null;Ql.length=0}var to=mt.ReactCurrentDispatcher,Yl=mt.ReactCurrentBatchConfig,Yt=0,Y=null,ee=null,oe=null,Po=!1,bn=!1,pr=0,yp=0;function de(){throw Error(x(321))}function Ls(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function Ts(e,t,n,r,o,l){if(Yt=l,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,to.current=e===null||e.memoizedState===null?_p:kp,e=n(r,o),bn){l=0;do{if(bn=!1,pr=0,25<=l)throw Error(x(301));l+=1,oe=ee=null,t.updateQueue=null,to.current=jp,e=n(r,o)}while(bn)}if(to.current=zo,t=ee!==null&&ee.next!==null,Yt=0,oe=ee=Y=null,Po=!1,t)throw Error(x(300));return e}function Ms(){var e=pr!==0;return pr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?Y.memoizedState=oe=e:oe=oe.next=e,oe}function Be(){if(ee===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=oe===null?Y.memoizedState:oe.next;if(t!==null)oe=t,ee=e;else{if(e===null)throw Error(x(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},oe===null?Y.memoizedState=oe=e:oe=oe.next=e}return oe}function mr(e,t){return typeof t=="function"?t(e):t}function Xl(e){var t=Be(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=ee,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,a=null,c=l;do{var g=c.lane;if((Yt&g)===g)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=m,i=r):a=a.next=m,Y.lanes|=g,Xt|=g}c=c.next}while(c!==null&&c!==l);a===null?i=r:a.next=s,Ke(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Y.lanes|=l,Xt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gl(e){var t=Be(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ke(l,t.memoizedState)||(_e=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Gc(){}function Kc(e,t){var n=Y,r=Be(),o=t(),l=!Ke(r.memoizedState,o);if(l&&(r.memoizedState=o,_e=!0),r=r.queue,Rs(Zc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,hr(9,Jc.bind(null,n,r,o,t),void 0,null),le===null)throw Error(x(349));Yt&30||bc(n,t,o)}return o}function bc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jc(e,t,n,r){t.value=n,t.getSnapshot=r,qc(t)&&ef(e)}function Zc(e,t,n){return n(function(){qc(t)&&ef(e)})}function qc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function ef(e){var t=dt(e,1);t!==null&&Ge(t,e,1,-1)}function Ga(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},t.queue=e,e=e.dispatch=xp.bind(null,Y,e),[t.memoizedState,e]}function hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function tf(){return Be().memoizedState}function no(e,t,n,r){var o=Je();Y.flags|=e,o.memoizedState=hr(1|t,n,void 0,r===void 0?null:r)}function Qo(e,t,n,r){var o=Be();r=r===void 0?null:r;var l=void 0;if(ee!==null){var i=ee.memoizedState;if(l=i.destroy,r!==null&&Ls(r,i.deps)){o.memoizedState=hr(t,n,l,r);return}}Y.flags|=e,o.memoizedState=hr(1|t,n,l,r)}function Ka(e,t){return no(8390656,8,e,t)}function Rs(e,t){return Qo(2048,8,e,t)}function nf(e,t){return Qo(4,2,e,t)}function rf(e,t){return Qo(4,4,e,t)}function of(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lf(e,t,n){return n=n!=null?n.concat([e]):null,Qo(4,4,of.bind(null,t,e),n)}function Is(){}function sf(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function af(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function uf(e,t,n){return Yt&21?(Ke(n,t)||(n=pc(),Y.lanes|=n,Xt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function wp(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Yl.transition;Yl.transition={};try{e(!1),t()}finally{F=n,Yl.transition=r}}function cf(){return Be().memoizedState}function Sp(e,t,n){var r=Pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ff(e))df(t,n);else if(n=Qc(e,t,n,r),n!==null){var o=ye();Ge(n,e,r,o),pf(n,t,r)}}function xp(e,t,n){var r=Pt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ff(e))df(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,n);if(o.hasEagerState=!0,o.eagerState=s,Ke(s,i)){var a=t.interleaved;a===null?(o.next=o,Es(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Qc(e,t,o,r),n!==null&&(o=ye(),Ge(n,e,r,o),pf(n,t,r))}}function ff(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function df(e,t){bn=Po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ds(e,n)}}var zo={readContext:Ae,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},_p={readContext:Ae,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Ka,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,no(4194308,4,of.bind(null,t,e),n)},useLayoutEffect:function(e,t){return no(4194308,4,e,t)},useInsertionEffect:function(e,t){return no(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Sp.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:Ga,useDebugValue:Is,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Ga(!1),t=e[0];return e=wp.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,o=Je();if(H){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),le===null)throw Error(x(349));Yt&30||bc(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ka(Zc.bind(null,r,l,e),[e]),r.flags|=2048,hr(9,Jc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Je(),t=le.identifierPrefix;if(H){var n=st,r=it;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=yp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kp={readContext:Ae,useCallback:sf,useContext:Ae,useEffect:Rs,useImperativeHandle:lf,useInsertionEffect:nf,useLayoutEffect:rf,useMemo:af,useReducer:Xl,useRef:tf,useState:function(){return Xl(mr)},useDebugValue:Is,useDeferredValue:function(e){var t=Be();return uf(t,ee.memoizedState,e)},useTransition:function(){var e=Xl(mr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Gc,useSyncExternalStore:Kc,useId:cf,unstable_isNewReconciler:!1},jp={readContext:Ae,useCallback:sf,useContext:Ae,useEffect:Rs,useImperativeHandle:lf,useInsertionEffect:nf,useLayoutEffect:rf,useMemo:af,useReducer:Gl,useRef:tf,useState:function(){return Gl(mr)},useDebugValue:Is,useDeferredValue:function(e){var t=Be();return ee===null?t.memoizedState=e:uf(t,ee.memoizedState,e)},useTransition:function(){var e=Gl(mr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Gc,useSyncExternalStore:Kc,useId:cf,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ti(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yo={isMounted:function(e){return(e=e._reactInternals)?bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Pt(e),l=ut(r,o);l.payload=t,n!=null&&(l.callback=n),t=Et(e,l,o),t!==null&&(Ge(t,e,o,r),eo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Pt(e),l=ut(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Et(e,l,o),t!==null&&(Ge(t,e,o,r),eo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Pt(e),o=ut(n,r);o.tag=2,t!=null&&(o.callback=t),t=Et(e,o,r),t!==null&&(Ge(t,e,r,n),eo(t,e,r))}};function ba(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!sr(n,r)||!sr(o,l):!0}function mf(e,t,n){var r=!1,o=Lt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ae(l):(o=je(t)?Ht:ge.current,r=t.contextTypes,l=(r=r!=null)?wn(e,o):Lt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ja(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yo.enqueueReplaceState(t,t.state,null)}function Mi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ns(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Ae(l):(l=je(t)?Ht:ge.current,o.context=wn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ti(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Yo.enqueueReplaceState(o,o.state,null),Eo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function kn(e,t){try{var n="",r=t;do n+=Zd(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ri(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Cp=typeof WeakMap=="function"?WeakMap:Map;function hf(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Lo||(Lo=!0,Hi=r),Ri(e,t)},n}function gf(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ri(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ri(e,t),typeof r!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Za(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Cp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ap.bind(null,e,t,n),t.then(e,e))}function qa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function eu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,Et(n,t,1))),n.lanes|=1),e)}var Ep=mt.ReactCurrentOwner,_e=!1;function ve(e,t,n,r){t.child=e===null?Hc(t,null,n,r):xn(t,e.child,n,r)}function tu(e,t,n,r,o){n=n.render;var l=t.ref;return hn(t,o),r=Ts(e,t,n,r,l,o),n=Ms(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,pt(e,t,o)):(H&&n&&Ss(t),t.flags|=1,ve(e,t,r,o),t.child)}function nu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Ws(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,vf(e,t,l,r,o)):(e=io(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:sr,n(i,r)&&e.ref===t.ref)return pt(e,t,o)}return t.flags|=1,e=zt(l,r),e.ref=t.ref,e.return=t,t.child=e}function vf(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(sr(l,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,pt(e,t,o)}return Ii(e,t,n,r,o)}function yf(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(cn,Ne),Ne|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(cn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,U(cn,Ne),Ne|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,U(cn,Ne),Ne|=r;return ve(e,t,o,n),t.child}function wf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ii(e,t,n,r,o){var l=je(n)?Ht:ge.current;return l=wn(t,l),hn(t,o),n=Ts(e,t,n,r,l,o),r=Ms(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,pt(e,t,o)):(H&&r&&Ss(t),t.flags|=1,ve(e,t,n,o),t.child)}function ru(e,t,n,r,o){if(je(n)){var l=!0;xo(t)}else l=!1;if(hn(t,o),t.stateNode===null)ro(e,t),mf(t,n,r),Mi(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ae(c):(c=je(n)?Ht:ge.current,c=wn(t,c));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Ja(t,i,r,c),vt=!1;var h=t.memoizedState;i.state=h,Eo(t,r,i,o),a=t.memoizedState,s!==r||h!==a||ke.current||vt?(typeof g=="function"&&(Ti(t,n,g,r),a=t.memoizedState),(s=vt||ba(t,n,s,r,h,a,c))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Yc(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:He(t.type,s),i.props=c,m=t.pendingProps,h=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ae(a):(a=je(n)?Ht:ge.current,a=wn(t,a));var w=n.getDerivedStateFromProps;(g=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==m||h!==a)&&Ja(t,i,r,a),vt=!1,h=t.memoizedState,i.state=h,Eo(t,r,i,o);var S=t.memoizedState;s!==m||h!==S||ke.current||vt?(typeof w=="function"&&(Ti(t,n,w,r),S=t.memoizedState),(c=vt||ba(t,n,c,r,h,S,a)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,S,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,S,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),i.props=r,i.state=S,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return $i(e,t,n,r,l,o)}function $i(e,t,n,r,o,l){wf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Va(t,n,!1),pt(e,t,l);r=t.stateNode,Ep.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=xn(t,e.child,null,l),t.child=xn(t,null,s,l)):ve(e,t,s,l),t.memoizedState=r.state,o&&Va(t,n,!0),t.child}function Sf(e){var t=e.stateNode;t.pendingContext?Ua(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ua(e,t.context,!1),Ps(e,t.containerInfo)}function ou(e,t,n,r,o){return Sn(),_s(o),t.flags|=256,ve(e,t,n,r),t.child}var Di={dehydrated:null,treeContext:null,retryLane:0};function Fi(e){return{baseLanes:e,cachePool:null,transitions:null}}function xf(e,t,n){var r=t.pendingProps,o=Q.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),U(Q,o&1),e===null)return Oi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Ko(i,r,0,null),e=Wt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Fi(n),t.memoizedState=Di,e):$s(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Np(e,t,i,r,s,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=zt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=zt(s,l):(l=Wt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Fi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Di,r}return l=e.child,e=l.sibling,r=zt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $s(e,t){return t=Ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vr(e,t,n,r){return r!==null&&_s(r),xn(t,e.child,null,n),e=$s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Np(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Kl(Error(x(422))),Vr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Ko({mode:"visible",children:r.children},o,0,null),l=Wt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&xn(t,e.child,null,i),t.child.memoizedState=Fi(i),t.memoizedState=Di,l);if(!(t.mode&1))return Vr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(x(419)),r=Kl(l,r,void 0),Vr(e,t,i,r)}if(s=(i&e.childLanes)!==0,_e||s){if(r=le,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,dt(e,o),Ge(r,e,o,-1))}return Vs(),r=Kl(Error(x(421))),Vr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Bp.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Pe=Ct(o.nextSibling),ze=t,H=!0,Ye=null,e!==null&&(Ie[$e++]=it,Ie[$e++]=st,Ie[$e++]=Qt,it=e.id,st=e.overflow,Qt=t),t=$s(t,r.children),t.flags|=4096,t)}function lu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Li(e.return,t,n)}function bl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function _f(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(ve(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lu(e,n,t);else if(e.tag===19)lu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&No(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),bl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&No(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}bl(t,!0,n,null,l);break;case"together":bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ro(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pp(e,t,n){switch(t.tag){case 3:Sf(t),Sn();break;case 5:Xc(t);break;case 1:je(t.type)&&xo(t);break;case 4:Ps(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;U(jo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?xf(e,t,n):(U(Q,Q.current&1),e=pt(e,t,n),e!==null?e.sibling:null);U(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return _f(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),U(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,yf(e,t,n)}return pt(e,t,n)}var kf,Ai,jf,Cf;kf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ai=function(){};jf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ut(nt.current);var l=null;switch(n){case"input":o=si(e,o),r=si(e,r),l=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),l=[];break;case"textarea":o=ci(e,o),r=ci(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wo)}di(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(er.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(l||(l=[]),l.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(er.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&V("scroll",e),l||s===a||(l=[])):(l=l||[]).push(c,a))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};Cf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zp(e,t,n){var r=t.pendingProps;switch(xs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return je(t.type)&&So(),pe(t),null;case 3:return r=t.stateNode,_n(),W(ke),W(ge),Os(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(Xi(Ye),Ye=null))),Ai(e,t),pe(t),null;case 5:zs(t);var o=Ut(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)jf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return pe(t),null}if(e=Ut(nt.current),Br(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[et]=t,r[cr]=l,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<Hn.length;o++)V(Hn[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":ma(r,l),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},V("invalid",r);break;case"textarea":ga(r,l),V("invalid",r)}di(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Ar(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Ar(r.textContent,s,e),o=["children",""+s]):er.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&V("scroll",r)}switch(n){case"input":Lr(r),ha(r,l,!0);break;case"textarea":Lr(r),va(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=wo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[et]=t,e[cr]=r,kf(e,t,!1,!1),t.stateNode=e;e:{switch(i=pi(n,r),n){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<Hn.length;o++)V(Hn[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":ma(e,r),o=si(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),V("invalid",e);break;case"textarea":ga(e,r),o=ci(e,r),V("invalid",e);break;default:o=r}di(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?tc(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&qu(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&tr(e,a):typeof a=="number"&&tr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(er.hasOwnProperty(l)?a!=null&&l==="onScroll"&&V("scroll",e):a!=null&&is(e,l,a,i))}switch(n){case"input":Lr(e),ha(e,r,!1);break;case"textarea":Lr(e),va(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ot(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?fn(e,!!r.multiple,l,!1):r.defaultValue!=null&&fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=wo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)Cf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Ut(dr.current),Ut(nt.current),Br(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(l=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:Ar(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ar(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return pe(t),null;case 13:if(W(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Pe!==null&&t.mode&1&&!(t.flags&128))Vc(),Sn(),t.flags|=98560,l=!1;else if(l=Br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(x(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(x(317));l[et]=t}else Sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),l=!1}else Ye!==null&&(Xi(Ye),Ye=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?te===0&&(te=3):Vs())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return _n(),Ai(e,t),e===null&&ar(t.stateNode.containerInfo),pe(t),null;case 10:return Cs(t.type._context),pe(t),null;case 17:return je(t.type)&&So(),pe(t),null;case 19:if(W(Q),l=t.memoizedState,l===null)return pe(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Fn(l,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=No(e),i!==null){for(t.flags|=128,Fn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Q,Q.current&1|2),t.child}e=e.sibling}l.tail!==null&&J()>jn&&(t.flags|=128,r=!0,Fn(l,!1),t.lanes=4194304)}else{if(!r)if(e=No(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!H)return pe(t),null}else 2*J()-l.renderingStartTime>jn&&n!==1073741824&&(t.flags|=128,r=!0,Fn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=J(),t.sibling=null,n=Q.current,U(Q,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return Us(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Op(e,t){switch(xs(t),t.tag){case 1:return je(t.type)&&So(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(),W(ke),W(ge),Os(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zs(t),null;case 13:if(W(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));Sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Q),null;case 4:return _n(),null;case 10:return Cs(t.type._context),null;case 22:case 23:return Us(),null;case 24:return null;default:return null}}var Wr=!1,he=!1,Lp=typeof WeakSet=="function"?WeakSet:Set,E=null;function un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Bi(e,t,n){try{n()}catch(r){G(e,t,r)}}var iu=!1;function Tp(e,t){if(ki=go,e=zc(),ws(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,c=0,g=0,m=e,h=null;t:for(;;){for(var w;m!==n||o!==0&&m.nodeType!==3||(s=i+o),m!==l||r!==0&&m.nodeType!==3||(a=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(w=m.firstChild)!==null;)h=m,m=w;for(;;){if(m===e)break t;if(h===n&&++c===o&&(s=i),h===l&&++g===r&&(a=i),(w=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ji={focusedElem:e,selectionRange:n},go=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var v=S.memoizedProps,z=S.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:He(t.type,v),z);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(y){G(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return S=iu,iu=!1,S}function Jn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Bi(t,n,l)}o=o.next}while(o!==r)}}function Xo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ui(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ef(e){var t=e.alternate;t!==null&&(e.alternate=null,Ef(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[cr],delete t[Ni],delete t[mp],delete t[hp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nf(e){return e.tag===5||e.tag===3||e.tag===4}function su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wo));else if(r!==4&&(e=e.child,e!==null))for(Vi(e,t,n),e=e.sibling;e!==null;)Vi(e,t,n),e=e.sibling}function Wi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wi(e,t,n),e=e.sibling;e!==null;)Wi(e,t,n),e=e.sibling}var se=null,Qe=!1;function ht(e,t,n){for(n=n.child;n!==null;)Pf(e,t,n),n=n.sibling}function Pf(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Ao,n)}catch{}switch(n.tag){case 5:he||un(n,t);case 6:var r=se,o=Qe;se=null,ht(e,t,n),se=r,Qe=o,se!==null&&(Qe?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Qe?(e=se,n=n.stateNode,e.nodeType===8?Wl(e.parentNode,n):e.nodeType===1&&Wl(e,n),lr(e)):Wl(se,n.stateNode));break;case 4:r=se,o=Qe,se=n.stateNode.containerInfo,Qe=!0,ht(e,t,n),se=r,Qe=o;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Bi(n,t,i),o=o.next}while(o!==r)}ht(e,t,n);break;case 1:if(!he&&(un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){G(n,t,s)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,ht(e,t,n),he=r):ht(e,t,n);break;default:ht(e,t,n)}}function au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Lp),t.forEach(function(r){var o=Up.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:se=s.stateNode,Qe=!1;break e;case 3:se=s.stateNode.containerInfo,Qe=!0;break e;case 4:se=s.stateNode.containerInfo,Qe=!0;break e}s=s.return}if(se===null)throw Error(x(160));Pf(l,i,o),se=null,Qe=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){G(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zf(t,e),t=t.sibling}function zf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),be(e),r&4){try{Jn(3,e,e.return),Xo(3,e)}catch(v){G(e,e.return,v)}try{Jn(5,e,e.return)}catch(v){G(e,e.return,v)}}break;case 1:We(t,e),be(e),r&512&&n!==null&&un(n,n.return);break;case 5:if(We(t,e),be(e),r&512&&n!==null&&un(n,n.return),e.flags&32){var o=e.stateNode;try{tr(o,"")}catch(v){G(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&bu(o,l),pi(s,i);var c=pi(s,l);for(i=0;i<a.length;i+=2){var g=a[i],m=a[i+1];g==="style"?tc(o,m):g==="dangerouslySetInnerHTML"?qu(o,m):g==="children"?tr(o,m):is(o,g,m,c)}switch(s){case"input":ai(o,l);break;case"textarea":Ju(o,l);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?fn(o,!!l.multiple,w,!1):h!==!!l.multiple&&(l.defaultValue!=null?fn(o,!!l.multiple,l.defaultValue,!0):fn(o,!!l.multiple,l.multiple?[]:"",!1))}o[cr]=l}catch(v){G(e,e.return,v)}}break;case 6:if(We(t,e),be(e),r&4){if(e.stateNode===null)throw Error(x(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(v){G(e,e.return,v)}}break;case 3:if(We(t,e),be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lr(t.containerInfo)}catch(v){G(e,e.return,v)}break;case 4:We(t,e),be(e);break;case 13:We(t,e),be(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(As=J())),r&4&&au(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(he=(c=he)||g,We(t,e),he=c):We(t,e),be(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(E=e,g=e.child;g!==null;){for(m=E=g;E!==null;){switch(h=E,w=h.child,h.tag){case 0:case 11:case 14:case 15:Jn(4,h,h.return);break;case 1:un(h,h.return);var S=h.stateNode;if(typeof S.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(v){G(r,n,v)}}break;case 5:un(h,h.return);break;case 22:if(h.memoizedState!==null){cu(m);continue}}w!==null?(w.return=h,E=w):cu(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{o=m.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=m.stateNode,a=m.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=ec("display",i))}catch(v){G(e,e.return,v)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(v){G(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:We(t,e),be(e),r&4&&au(e);break;case 21:break;default:We(t,e),be(e)}}function be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Nf(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(tr(o,""),r.flags&=-33);var l=su(e);Wi(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=su(e);Vi(e,s,i);break;default:throw Error(x(161))}}catch(a){G(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mp(e,t,n){E=e,Of(e)}function Of(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var o=E,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Wr;if(!i){var s=o.alternate,a=s!==null&&s.memoizedState!==null||he;s=Wr;var c=he;if(Wr=i,(he=a)&&!c)for(E=o;E!==null;)i=E,a=i.child,i.tag===22&&i.memoizedState!==null?fu(o):a!==null?(a.return=i,E=a):fu(o);for(;l!==null;)E=l,Of(l),l=l.sibling;E=o,Wr=s,he=c}uu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,E=l):uu(e)}}function uu(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Xo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Xa(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xa(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&lr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}he||t.flags&512&&Ui(t)}catch(h){G(t,t.return,h)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function cu(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function fu(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xo(4,t)}catch(a){G(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){G(t,o,a)}}var l=t.return;try{Ui(t)}catch(a){G(t,l,a)}break;case 5:var i=t.return;try{Ui(t)}catch(a){G(t,i,a)}}}catch(a){G(t,t.return,a)}if(t===e){E=null;break}var s=t.sibling;if(s!==null){s.return=t.return,E=s;break}E=t.return}}var Rp=Math.ceil,Oo=mt.ReactCurrentDispatcher,Ds=mt.ReactCurrentOwner,Fe=mt.ReactCurrentBatchConfig,I=0,le=null,q=null,ue=0,Ne=0,cn=Mt(0),te=0,gr=null,Xt=0,Go=0,Fs=0,Zn=null,xe=null,As=0,jn=1/0,ot=null,Lo=!1,Hi=null,Nt=null,Hr=!1,xt=null,To=0,qn=0,Qi=null,oo=-1,lo=0;function ye(){return I&6?J():oo!==-1?oo:oo=J()}function Pt(e){return e.mode&1?I&2&&ue!==0?ue&-ue:vp.transition!==null?(lo===0&&(lo=pc()),lo):(e=F,e!==0||(e=window.event,e=e===void 0?16:Sc(e.type)),e):1}function Ge(e,t,n,r){if(50<qn)throw qn=0,Qi=null,Error(x(185));_r(e,n,r),(!(I&2)||e!==le)&&(e===le&&(!(I&2)&&(Go|=n),te===4&&wt(e,ue)),Ce(e,r),n===1&&I===0&&!(t.mode&1)&&(jn=J()+500,Ho&&Rt()))}function Ce(e,t){var n=e.callbackNode;v0(e,t);var r=ho(e,e===le?ue:0);if(r===0)n!==null&&Sa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sa(n),t===1)e.tag===0?gp(du.bind(null,e)):Ac(du.bind(null,e)),dp(function(){!(I&6)&&Rt()}),n=null;else{switch(mc(r)){case 1:n=fs;break;case 4:n=fc;break;case 16:n=mo;break;case 536870912:n=dc;break;default:n=mo}n=Ff(n,Lf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lf(e,t){if(oo=-1,lo=0,I&6)throw Error(x(327));var n=e.callbackNode;if(gn()&&e.callbackNode!==n)return null;var r=ho(e,e===le?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Mo(e,r);else{t=r;var o=I;I|=2;var l=Mf();(le!==e||ue!==t)&&(ot=null,jn=J()+500,Vt(e,t));do try{Dp();break}catch(s){Tf(e,s)}while(!0);js(),Oo.current=l,I=o,q!==null?t=0:(le=null,ue=0,t=te)}if(t!==0){if(t===2&&(o=yi(e),o!==0&&(r=o,t=Yi(e,o))),t===1)throw n=gr,Vt(e,0),wt(e,r),Ce(e,J()),n;if(t===6)wt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Ip(o)&&(t=Mo(e,r),t===2&&(l=yi(e),l!==0&&(r=l,t=Yi(e,l))),t===1))throw n=gr,Vt(e,0),wt(e,r),Ce(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:Ft(e,xe,ot);break;case 3:if(wt(e,r),(r&130023424)===r&&(t=As+500-J(),10<t)){if(ho(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ei(Ft.bind(null,e,xe,ot),t);break}Ft(e,xe,ot);break;case 4:if(wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Xe(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rp(r/1960))-r,10<r){e.timeoutHandle=Ei(Ft.bind(null,e,xe,ot),r);break}Ft(e,xe,ot);break;case 5:Ft(e,xe,ot);break;default:throw Error(x(329))}}}return Ce(e,J()),e.callbackNode===n?Lf.bind(null,e):null}function Yi(e,t){var n=Zn;return e.current.memoizedState.isDehydrated&&(Vt(e,t).flags|=256),e=Mo(e,t),e!==2&&(t=xe,xe=n,t!==null&&Xi(t)),e}function Xi(e){xe===null?xe=e:xe.push.apply(xe,e)}function Ip(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ke(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wt(e,t){for(t&=~Fs,t&=~Go,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function du(e){if(I&6)throw Error(x(327));gn();var t=ho(e,0);if(!(t&1))return Ce(e,J()),null;var n=Mo(e,t);if(e.tag!==0&&n===2){var r=yi(e);r!==0&&(t=r,n=Yi(e,r))}if(n===1)throw n=gr,Vt(e,0),wt(e,t),Ce(e,J()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ft(e,xe,ot),Ce(e,J()),null}function Bs(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(jn=J()+500,Ho&&Rt())}}function Gt(e){xt!==null&&xt.tag===0&&!(I&6)&&gn();var t=I;I|=1;var n=Fe.transition,r=F;try{if(Fe.transition=null,F=1,e)return e()}finally{F=r,Fe.transition=n,I=t,!(I&6)&&Rt()}}function Us(){Ne=cn.current,W(cn)}function Vt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,fp(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(xs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&So();break;case 3:_n(),W(ke),W(ge),Os();break;case 5:zs(r);break;case 4:_n();break;case 13:W(Q);break;case 19:W(Q);break;case 10:Cs(r.type._context);break;case 22:case 23:Us()}n=n.return}if(le=e,q=e=zt(e.current,null),ue=Ne=t,te=0,gr=null,Fs=Go=Xt=0,xe=Zn=null,Bt!==null){for(t=0;t<Bt.length;t++)if(n=Bt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Bt=null}return e}function Tf(e,t){do{var n=q;try{if(js(),to.current=zo,Po){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Po=!1}if(Yt=0,oe=ee=Y=null,bn=!1,pr=0,Ds.current=null,n===null||n.return===null){te=1,gr=t,q=null;break}e:{var l=e,i=n.return,s=n,a=t;if(t=ue,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,g=s,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=qa(i);if(w!==null){w.flags&=-257,eu(w,i,s,l,t),w.mode&1&&Za(l,c,t),t=w,a=c;var S=t.updateQueue;if(S===null){var v=new Set;v.add(a),t.updateQueue=v}else S.add(a);break e}else{if(!(t&1)){Za(l,c,t),Vs();break e}a=Error(x(426))}}else if(H&&s.mode&1){var z=qa(i);if(z!==null){!(z.flags&65536)&&(z.flags|=256),eu(z,i,s,l,t),_s(kn(a,s));break e}}l=a=kn(a,s),te!==4&&(te=2),Zn===null?Zn=[l]:Zn.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=hf(l,a,t);Ya(l,f);break e;case 1:s=a;var u=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Nt===null||!Nt.has(d)))){l.flags|=65536,t&=-t,l.lanes|=t;var y=gf(l,s,t);Ya(l,y);break e}}l=l.return}while(l!==null)}If(n)}catch(j){t=j,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function Mf(){var e=Oo.current;return Oo.current=zo,e===null?zo:e}function Vs(){(te===0||te===3||te===2)&&(te=4),le===null||!(Xt&268435455)&&!(Go&268435455)||wt(le,ue)}function Mo(e,t){var n=I;I|=2;var r=Mf();(le!==e||ue!==t)&&(ot=null,Vt(e,t));do try{$p();break}catch(o){Tf(e,o)}while(!0);if(js(),I=n,Oo.current=r,q!==null)throw Error(x(261));return le=null,ue=0,te}function $p(){for(;q!==null;)Rf(q)}function Dp(){for(;q!==null&&!a0();)Rf(q)}function Rf(e){var t=Df(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?If(e):q=t,Ds.current=null}function If(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Op(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,q=null;return}}else if(n=zp(n,t,Ne),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);te===0&&(te=5)}function Ft(e,t,n){var r=F,o=Fe.transition;try{Fe.transition=null,F=1,Fp(e,t,n,r)}finally{Fe.transition=o,F=r}return null}function Fp(e,t,n,r){do gn();while(xt!==null);if(I&6)throw Error(x(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(y0(e,l),e===le&&(q=le=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hr||(Hr=!0,Ff(mo,function(){return gn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Fe.transition,Fe.transition=null;var i=F;F=1;var s=I;I|=4,Ds.current=null,Tp(e,n),zf(n,e),op(ji),go=!!ki,ji=ki=null,e.current=n,Mp(n),u0(),I=s,F=i,Fe.transition=l}else e.current=n;if(Hr&&(Hr=!1,xt=e,To=o),l=e.pendingLanes,l===0&&(Nt=null),d0(n.stateNode),Ce(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Lo)throw Lo=!1,e=Hi,Hi=null,e;return To&1&&e.tag!==0&&gn(),l=e.pendingLanes,l&1?e===Qi?qn++:(qn=0,Qi=e):qn=0,Rt(),null}function gn(){if(xt!==null){var e=mc(To),t=Fe.transition,n=F;try{if(Fe.transition=null,F=16>e?16:e,xt===null)var r=!1;else{if(e=xt,xt=null,To=0,I&6)throw Error(x(331));var o=I;for(I|=4,E=e.current;E!==null;){var l=E,i=l.child;if(E.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(E=c;E!==null;){var g=E;switch(g.tag){case 0:case 11:case 15:Jn(8,g,l)}var m=g.child;if(m!==null)m.return=g,E=m;else for(;E!==null;){g=E;var h=g.sibling,w=g.return;if(Ef(g),g===c){E=null;break}if(h!==null){h.return=w,E=h;break}E=w}}}var S=l.alternate;if(S!==null){var v=S.child;if(v!==null){S.child=null;do{var z=v.sibling;v.sibling=null,v=z}while(v!==null)}}E=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,E=i;else e:for(;E!==null;){if(l=E,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Jn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,E=f;break e}E=l.return}}var u=e.current;for(E=u;E!==null;){i=E;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,E=d;else e:for(i=u;E!==null;){if(s=E,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Xo(9,s)}}catch(j){G(s,s.return,j)}if(s===i){E=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,E=y;break e}E=s.return}}if(I=o,Rt(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Ao,e)}catch{}r=!0}return r}finally{F=n,Fe.transition=t}}return!1}function pu(e,t,n){t=kn(n,t),t=hf(e,t,1),e=Et(e,t,1),t=ye(),e!==null&&(_r(e,1,t),Ce(e,t))}function G(e,t,n){if(e.tag===3)pu(e,e,n);else for(;t!==null;){if(t.tag===3){pu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nt===null||!Nt.has(r))){e=kn(n,e),e=gf(t,e,1),t=Et(t,e,1),e=ye(),t!==null&&(_r(t,1,e),Ce(t,e));break}}t=t.return}}function Ap(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ue&n)===n&&(te===4||te===3&&(ue&130023424)===ue&&500>J()-As?Vt(e,0):Fs|=n),Ce(e,t)}function $f(e,t){t===0&&(e.mode&1?(t=Rr,Rr<<=1,!(Rr&130023424)&&(Rr=4194304)):t=1);var n=ye();e=dt(e,t),e!==null&&(_r(e,t,n),Ce(e,n))}function Bp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$f(e,n)}function Up(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),$f(e,n)}var Df;Df=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,Pp(e,t,n);_e=!!(e.flags&131072)}else _e=!1,H&&t.flags&1048576&&Bc(t,ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ro(e,t),e=t.pendingProps;var o=wn(t,ge.current);hn(t,n),o=Ts(null,t,r,e,o,n);var l=Ms();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(l=!0,xo(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ns(t),o.updater=Yo,t.stateNode=o,o._reactInternals=t,Mi(t,r,e,n),t=$i(null,t,r,!0,l,n)):(t.tag=0,H&&l&&Ss(t),ve(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ro(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Wp(r),e=He(r,e),o){case 0:t=Ii(null,t,r,e,n);break e;case 1:t=ru(null,t,r,e,n);break e;case 11:t=tu(null,t,r,e,n);break e;case 14:t=nu(null,t,r,He(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Ii(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),ru(e,t,r,o,n);case 3:e:{if(Sf(t),e===null)throw Error(x(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Yc(e,t),Eo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=kn(Error(x(423)),t),t=ou(e,t,r,n,o);break e}else if(r!==o){o=kn(Error(x(424)),t),t=ou(e,t,r,n,o);break e}else for(Pe=Ct(t.stateNode.containerInfo.firstChild),ze=t,H=!0,Ye=null,n=Hc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sn(),r===o){t=pt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Xc(t),e===null&&Oi(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Ci(r,o)?i=null:l!==null&&Ci(r,l)&&(t.flags|=32),wf(e,t),ve(e,t,i,n),t.child;case 6:return e===null&&Oi(t),null;case 13:return xf(e,t,n);case 4:return Ps(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),tu(e,t,r,o,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,U(jo,r._currentValue),r._currentValue=i,l!==null)if(Ke(l.value,i)){if(l.children===o.children&&!ke.current){t=pt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=ut(-1,n&-n),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?a.next=a:(a.next=g.next,g.next=a),c.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Li(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(x(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Li(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}ve(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,hn(t,n),o=Ae(o),r=r(o),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,o=He(r,t.pendingProps),o=He(r.type,o),nu(e,t,r,o,n);case 15:return vf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),ro(e,t),t.tag=1,je(r)?(e=!0,xo(t)):e=!1,hn(t,n),mf(t,r,o),Mi(t,r,o,n),$i(null,t,r,!0,e,n);case 19:return _f(e,t,n);case 22:return yf(e,t,n)}throw Error(x(156,t.tag))};function Ff(e,t){return cc(e,t)}function Vp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new Vp(e,t,n,r)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wp(e){if(typeof e=="function")return Ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===as)return 11;if(e===us)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function io(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Ws(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case qt:return Wt(n.children,o,l,t);case ss:i=8,o|=8;break;case ri:return e=De(12,n,t,o|2),e.elementType=ri,e.lanes=l,e;case oi:return e=De(13,n,t,o),e.elementType=oi,e.lanes=l,e;case li:return e=De(19,n,t,o),e.elementType=li,e.lanes=l,e;case Xu:return Ko(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qu:i=10;break e;case Yu:i=9;break e;case as:i=11;break e;case us:i=14;break e;case gt:i=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=De(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Wt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Ko(e,t,n,r){return e=De(22,e,r,t),e.elementType=Xu,e.lanes=n,e.stateNode={isHidden:!1},e}function Jl(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function Zl(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Hs(e,t,n,r,o,l,i,s,a){return e=new Hp(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=De(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ns(l),e}function Qp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Af(e){if(!e)return Lt;e=e._reactInternals;e:{if(bt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(je(n))return Fc(e,n,t)}return t}function Bf(e,t,n,r,o,l,i,s,a){return e=Hs(n,r,!0,e,o,l,i,s,a),e.context=Af(null),n=e.current,r=ye(),o=Pt(n),l=ut(r,o),l.callback=t??null,Et(n,l,o),e.current.lanes=o,_r(e,o,r),Ce(e,r),e}function bo(e,t,n,r){var o=t.current,l=ye(),i=Pt(o);return n=Af(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Et(o,t,i),e!==null&&(Ge(e,o,i,l),eo(e,o,i)),i}function Ro(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qs(e,t){mu(e,t),(e=e.alternate)&&mu(e,t)}function Yp(){return null}var Uf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ys(e){this._internalRoot=e}Jo.prototype.render=Ys.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));bo(e,t,null,null)};Jo.prototype.unmount=Ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gt(function(){bo(null,e,null,null)}),t[ft]=null}};function Jo(e){this._internalRoot=e}Jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=vc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yt.length&&t!==0&&t<yt[n].priority;n++);yt.splice(n,0,e),n===0&&wc(e)}};function Xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hu(){}function Xp(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=Ro(i);l.call(c)}}var i=Bf(t,r,e,0,null,!1,!1,"",hu);return e._reactRootContainer=i,e[ft]=i.current,ar(e.nodeType===8?e.parentNode:e),Gt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=Ro(a);s.call(c)}}var a=Hs(e,0,!1,null,null,!1,!1,"",hu);return e._reactRootContainer=a,e[ft]=a.current,ar(e.nodeType===8?e.parentNode:e),Gt(function(){bo(t,a,n,r)}),a}function qo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var a=Ro(i);s.call(a)}}bo(t,i,e,o)}else i=Xp(n,t,e,o,r);return Ro(i)}hc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wn(t.pendingLanes);n!==0&&(ds(t,n|1),Ce(t,J()),!(I&6)&&(jn=J()+500,Rt()))}break;case 13:Gt(function(){var r=dt(e,1);if(r!==null){var o=ye();Ge(r,e,1,o)}}),Qs(e,1)}};ps=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=ye();Ge(t,e,134217728,n)}Qs(e,134217728)}};gc=function(e){if(e.tag===13){var t=Pt(e),n=dt(e,t);if(n!==null){var r=ye();Ge(n,e,t,r)}Qs(e,t)}};vc=function(){return F};yc=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};hi=function(e,t,n){switch(t){case"input":if(ai(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Wo(r);if(!o)throw Error(x(90));Ku(r),ai(r,o)}}}break;case"textarea":Ju(e,n);break;case"select":t=n.value,t!=null&&fn(e,!!n.multiple,t,!1)}};oc=Bs;lc=Gt;var Gp={usingClientEntryPoint:!1,Events:[jr,rn,Wo,nc,rc,Bs]},An={findFiberByHostInstance:At,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kp={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ac(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||Yp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qr.isDisabled&&Qr.supportsFiber)try{Ao=Qr.inject(Kp),tt=Qr}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gp;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xs(t))throw Error(x(200));return Qp(e,t,null,n)};Te.createRoot=function(e,t){if(!Xs(e))throw Error(x(299));var n=!1,r="",o=Uf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Hs(e,1,!1,null,null,n,!1,r,o),e[ft]=t.current,ar(e.nodeType===8?e.parentNode:e),new Ys(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=ac(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return Gt(e)};Te.hydrate=function(e,t,n){if(!Zo(t))throw Error(x(200));return qo(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!Xs(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Uf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Bf(t,null,e,1,n??null,o,!1,l,i),e[ft]=t.current,ar(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Jo(t)};Te.render=function(e,t,n){if(!Zo(t))throw Error(x(200));return qo(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Zo(e))throw Error(x(40));return e._reactRootContainer?(Gt(function(){qo(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1};Te.unstable_batchedUpdates=Bs;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zo(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return qo(e,t,n,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function Vf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vf)}catch(e){console.error(e)}}Vf(),Uu.exports=Te;var bp=Uu.exports,gu=bp;ti.createRoot=gu.createRoot,ti.hydrateRoot=gu.hydrateRoot;const Jp="/personal-website/assets/pastel-bg-B1UW2q9y.jpg";var Wf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},vu=at.createContext&&at.createContext(Wf),Zp=["attr","size","title"];function qp(e,t){if(e==null)return{};var n=e1(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function e1(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Io(){return Io=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Io.apply(this,arguments)}function yu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function $o(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yu(Object(n),!0).forEach(function(r){t1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function t1(e,t,n){return t=n1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n1(e){var t=r1(e,"string");return typeof t=="symbol"?t:t+""}function r1(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Hf(e){return e&&e.map((t,n)=>at.createElement(t.tag,$o({key:n},t.attr),Hf(t.child)))}function fe(e){return t=>at.createElement(o1,Io({attr:$o({},e.attr)},t),Hf(e.child))}function o1(e){var t=n=>{var{attr:r,size:o,title:l}=e,i=qp(e,Zp),s=o||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),at.createElement("svg",Io({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,i,{className:a,style:$o($o({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&at.createElement("title",null,l),e.children)};return vu!==void 0?at.createElement(vu.Consumer,null,n=>t(n)):t(Wf)}function l1(e){return fe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2l.04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3M2.19 3q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293L7.586 3zm9.608 5.271-3.182 1.97c-.27.166-.616-.036-.616-.372V9.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742"},child:[]}]})(e)}function i1(e){return fe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"},child:[]}]})(e)}function s1(e){return fe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"},child:[]}]})(e)}function a1(e){return fe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"},child:[]}]})(e)}function u1(e){return fe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"},child:[]}]})(e)}function c1(e){return fe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"},child:[]}]})(e)}function wu(e){return fe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"},child:[]}]})(e)}function Su(e){return fe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"},child:[]}]})(e)}function f1(e){return fe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"},child:[]}]})(e)}function d1(e){return fe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1"},child:[]}]})(e)}function p1(e){return fe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"},child:[]}]})(e)}function Qf(e){return fe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"},child:[]}]})(e)}function m1(e){return fe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"},child:[]},{tag:"path",attr:{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"},child:[]}]})(e)}function h1(e){return fe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"},child:[]}]})(e)}function g1(e){return fe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"},child:[]}]})(e)}function v1(e){return fe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"},child:[]}]})(e)}function y1(e){return fe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"},child:[]},{tag:"path",attr:{d:"M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"},child:[]},{tag:"path",attr:{fillRule:"evenodd",d:"M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"},child:[]}]})(e)}function w1(){return p.jsxs("div",{className:"navbar",children:[p.jsx(S1,{}),p.jsx(x1,{})]})}function S1(){return p.jsxs("div",{className:"flex items-center",children:[p.jsx(f1,{className:"navbar-logo"}),p.jsx("div",{className:"navbar-title",children:"Kelvin Lin"})]})}function x1(){return p.jsxs("div",{className:"navbar-toolbar",children:[p.jsxs("a",{href:"#about",className:"navbar-tools",children:[p.jsx(i1,{className:"navbar-tool-icon"}),p.jsx("span",{className:"navbar-tool-label",children:"About"})]}),p.jsxs("a",{href:"#projects",className:"navbar-tools",children:[p.jsx(d1,{className:"navbar-tool-icon"}),p.jsx("span",{className:"navbar-tool-label",children:"Projects"})]}),p.jsxs("a",{href:"#tools",className:"navbar-tools mr-4",children:[p.jsx(g1,{className:"navbar-tool-icon"}),p.jsx("span",{className:"navbar-tool-label",children:"Tools"})]})]})}function _1(){return p.jsxs("div",{className:"flex flex-col items-center justify-center footer",children:[p.jsx("span",{children:"Site coded in TypeScript and built using React, Vite, and Tailwind."}),p.jsxs("span",{children:["Background designed by ",p.jsx("a",{className:"classic-anchor1",href:"https://www.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_13223498.htm#query=pastel&position=19&from_view=keyword&track=ais_hybrid&uuid=f952c164-e355-44dc-8d01-b7c6080a9dda",target:"_blank",children:"Freepik"})]})]})}const Gs=({entryNumber:e,titleLabel:t,className:n=""})=>{const r=e.toString().padStart(2,"0");return p.jsx("div",{className:n,children:p.jsxs("div",{className:"section-header fira-code",children:[p.jsx("span",{className:"header-num",children:`${r}| `}),p.jsx("span",{className:"header-title",children:t})]})})};function k1(e){return p.jsxs("div",{id:"about",className:"flex flex-row justify-between items-center",children:[p.jsx(Gs,{className:"about",entryNumber:1,titleLabel:e.width>1200?"About":""}),p.jsxs("div",{className:"about-description flex flex-col justify-start",children:[p.jsxs("div",{className:"about-description-heading flex flex-row whitespace-pre",children:[p.jsx("div",{className:"about-description-h1 allura text-64xl",children:"Hey,"}),p.jsxs("div",{className:"flex flex-col justify-center",children:[p.jsxs("span",{className:"about-description-h2",children:["I'm ",p.jsx("span",{className:"about-description-h2-name",children:"Kelvin"})]}),p.jsx("span",{className:"about-description-h3",children:" NY-based Software Engineer"})]})]}),p.jsxs("div",{className:"about-description-paragraph",children:["My personal passions in the Software Engineering field are ",p.jsx("span",{className:"about-description-paragraph-ul",children:"Game Development"})," and ",p.jsx("span",{className:"about-description-paragraph-ul",children:"Web Development"}),". Besides these two focuses, I have also dabbled in ",p.jsx("span",{className:"about-description-paragraph-ul",children:"Natural Language Processing"})," over the course of my academic career."]}),p.jsx("br",{}),p.jsxs("div",{className:"about-description-paragraph",children:["Having double majored in both ",p.jsx("span",{className:"about-description-paragraph-ul",children:"Computer Science"})," and ",p.jsx("span",{className:"about-description-paragraph-ul",children:"Applied Mathematics and Statistics"}),", I'm open to exploring various fields and always excited to learn new technologies and frameworks."]}),p.jsx("br",{}),p.jsx("div",{className:"about-description-paragraph",children:"Currently seeking an entry-level position or internship. Feel free to contact me or browse some of my past projects below!"})]}),p.jsxs("div",{className:"contact-details",children:[p.jsx("img",{src:"https://github.com/klin2003.png",alt:"GitHub Avatar",className:"about-avatar"}),p.jsx(j1,{})]})]})}function j1(){return p.jsxs("div",{className:"flex flex-col items-center justify-center",children:[p.jsxs("div",{className:"contact-entry w-fit",children:[p.jsxs("div",{className:"flex flex-row items-center justify-center",children:[p.jsx(p1,{className:"contact-entry-icon"}),p.jsx("span",{className:"contact-entry-title",children:p.jsx("b",{children:"Email"})})]}),p.jsx("a",{className:"contact-entry-text classic-anchor2",href:"mailto:kelvinlin2003@gmail.com",target:"_blank",children:"kelvinlin2003@gmail.com"})]}),p.jsx("div",{className:"pb-6"}),p.jsxs("div",{className:"contact-entry w-fit",children:[p.jsxs("div",{className:"flex flex-row items-center justify-center",children:[p.jsx(h1,{className:"contact-entry-icon"}),p.jsx("span",{className:"contact-entry-title",children:p.jsx("b",{children:"LinkedIn"})})]}),p.jsx("a",{className:"contact-entry-text classic-anchor2",href:"https://www.linkedin.com/in/kelvin-lin-J2003/",target:"_blank",children:"in/kelvin-lin-J2003"})]}),p.jsx("div",{className:"pb-6"}),p.jsxs("div",{className:"contact-entry w-fit",children:[p.jsxs("div",{className:"flex flex-row items-center justify-center",children:[p.jsx(Qf,{className:"contact-entry-icon"}),p.jsx("span",{className:"contact-entry-title",children:p.jsx("b",{children:"GitHub"})})]}),p.jsx("a",{className:"contact-entry-text classic-anchor2",href:"https://github.com/klin2003",target:"_blank",children:"gh/klin2003"})]})]})}var C1=!1;function E1(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function N1(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var P1=function(){function e(n){var r=this;this._insertTag=function(o){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,l),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!C1:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(N1(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=E1(o);try{l.insertRule(r,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var o;return(o=r.parentNode)==null?void 0:o.removeChild(r)}),this.tags=[],this.ctr=0},e}(),me="-ms-",Do="-moz-",$="-webkit-",Yf="comm",Ks="rule",bs="decl",z1="@import",Xf="@keyframes",O1="@layer",L1=Math.abs,el=String.fromCharCode,T1=Object.assign;function M1(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function Gf(e){return e.trim()}function R1(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function Gi(e,t){return e.indexOf(t)}function ae(e,t){return e.charCodeAt(t)|0}function vr(e,t,n){return e.slice(t,n)}function Ze(e){return e.length}function Js(e){return e.length}function Yr(e,t){return t.push(e),e}function I1(e,t){return e.map(t).join("")}var tl=1,Cn=1,Kf=0,Ee=0,Z=0,zn="";function nl(e,t,n,r,o,l,i){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:tl,column:Cn,length:i,return:""}}function Bn(e,t){return T1(nl("",null,null,"",null,null,0),e,{length:-e.length},t)}function $1(){return Z}function D1(){return Z=Ee>0?ae(zn,--Ee):0,Cn--,Z===10&&(Cn=1,tl--),Z}function Oe(){return Z=Ee<Kf?ae(zn,Ee++):0,Cn++,Z===10&&(Cn=1,tl++),Z}function rt(){return ae(zn,Ee)}function so(){return Ee}function Er(e,t){return vr(zn,e,t)}function yr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bf(e){return tl=Cn=1,Kf=Ze(zn=e),Ee=0,[]}function Jf(e){return zn="",e}function ao(e){return Gf(Er(Ee-1,Ki(e===91?e+2:e===40?e+1:e)))}function F1(e){for(;(Z=rt())&&Z<33;)Oe();return yr(e)>2||yr(Z)>3?"":" "}function A1(e,t){for(;--t&&Oe()&&!(Z<48||Z>102||Z>57&&Z<65||Z>70&&Z<97););return Er(e,so()+(t<6&&rt()==32&&Oe()==32))}function Ki(e){for(;Oe();)switch(Z){case e:return Ee;case 34:case 39:e!==34&&e!==39&&Ki(Z);break;case 40:e===41&&Ki(e);break;case 92:Oe();break}return Ee}function B1(e,t){for(;Oe()&&e+Z!==57;)if(e+Z===84&&rt()===47)break;return"/*"+Er(t,Ee-1)+"*"+el(e===47?e:Oe())}function U1(e){for(;!yr(rt());)Oe();return Er(e,Ee)}function V1(e){return Jf(uo("",null,null,null,[""],e=bf(e),0,[0],e))}function uo(e,t,n,r,o,l,i,s,a){for(var c=0,g=0,m=i,h=0,w=0,S=0,v=1,z=1,f=1,u=0,d="",y=o,j=l,C=r,k=d;z;)switch(S=u,u=Oe()){case 40:if(S!=108&&ae(k,m-1)==58){Gi(k+=D(ao(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:k+=ao(u);break;case 9:case 10:case 13:case 32:k+=F1(S);break;case 92:k+=A1(so()-1,7);continue;case 47:switch(rt()){case 42:case 47:Yr(W1(B1(Oe(),so()),t,n),a);break;default:k+="/"}break;case 123*v:s[c++]=Ze(k)*f;case 125*v:case 59:case 0:switch(u){case 0:case 125:z=0;case 59+g:f==-1&&(k=D(k,/\f/g,"")),w>0&&Ze(k)-m&&Yr(w>32?_u(k+";",r,n,m-1):_u(D(k," ","")+";",r,n,m-2),a);break;case 59:k+=";";default:if(Yr(C=xu(k,t,n,c,g,o,s,d,y=[],j=[],m),l),u===123)if(g===0)uo(k,t,C,C,y,l,m,s,j);else switch(h===99&&ae(k,3)===110?100:h){case 100:case 108:case 109:case 115:uo(e,C,C,r&&Yr(xu(e,C,C,0,0,o,s,d,o,y=[],m),j),o,j,m,s,r?y:j);break;default:uo(k,C,C,C,[""],j,0,s,j)}}c=g=w=0,v=f=1,d=k="",m=i;break;case 58:m=1+Ze(k),w=S;default:if(v<1){if(u==123)--v;else if(u==125&&v++==0&&D1()==125)continue}switch(k+=el(u),u*v){case 38:f=g>0?1:(k+="\f",-1);break;case 44:s[c++]=(Ze(k)-1)*f,f=1;break;case 64:rt()===45&&(k+=ao(Oe())),h=rt(),g=m=Ze(d=k+=U1(so())),u++;break;case 45:S===45&&Ze(k)==2&&(v=0)}}return l}function xu(e,t,n,r,o,l,i,s,a,c,g){for(var m=o-1,h=o===0?l:[""],w=Js(h),S=0,v=0,z=0;S<r;++S)for(var f=0,u=vr(e,m+1,m=L1(v=i[S])),d=e;f<w;++f)(d=Gf(v>0?h[f]+" "+u:D(u,/&\f/g,h[f])))&&(a[z++]=d);return nl(e,t,n,o===0?Ks:s,a,c,g)}function W1(e,t,n){return nl(e,t,n,Yf,el($1()),vr(e,2,-2),0)}function _u(e,t,n,r){return nl(e,t,n,bs,vr(e,0,r),vr(e,r+1,-1),r)}function vn(e,t){for(var n="",r=Js(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function H1(e,t,n,r){switch(e.type){case O1:if(e.children.length)break;case z1:case bs:return e.return=e.return||e.value;case Yf:return"";case Xf:return e.return=e.value+"{"+vn(e.children,r)+"}";case Ks:e.value=e.props.join(",")}return Ze(n=vn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Q1(e){var t=Js(e);return function(n,r,o,l){for(var i="",s=0;s<t;s++)i+=e[s](n,r,o,l)||"";return i}}function Y1(e){return function(t){t.root||(t=t.return)&&e(t)}}function X1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var G1=function(t,n,r){for(var o=0,l=0;o=l,l=rt(),o===38&&l===12&&(n[r]=1),!yr(l);)Oe();return Er(t,Ee)},K1=function(t,n){var r=-1,o=44;do switch(yr(o)){case 0:o===38&&rt()===12&&(n[r]=1),t[r]+=G1(Ee-1,n,r);break;case 2:t[r]+=ao(o);break;case 4:if(o===44){t[++r]=rt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=el(o)}while(o=Oe());return t},b1=function(t,n){return Jf(K1(bf(t),n))},ku=new WeakMap,J1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!ku.get(r))&&!o){ku.set(t,!0);for(var l=[],i=b1(n,l),s=r.props,a=0,c=0;a<i.length;a++)for(var g=0;g<s.length;g++,c++)t.props[c]=l[a]?i[a].replace(/&\f/g,s[g]):s[g]+" "+i[a]}}},Z1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Zf(e,t){switch(M1(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+Do+e+me+e+e;case 6828:case 4268:return $+e+me+e+e;case 6165:return $+e+me+"flex-"+e+e;case 5187:return $+e+D(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+me+"flex-$1$2")+e;case 5443:return $+e+me+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return $+e+me+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+me+D(e,"shrink","negative")+e;case 5292:return $+e+me+D(e,"basis","preferred-size")+e;case 6060:return $+"box-"+D(e,"-grow","")+$+e+me+D(e,"grow","positive")+e;case 4554:return $+D(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+me+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ze(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Do+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Gi(e,"stretch")?Zf(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ae(e,t+1)!==115)break;case 6444:switch(ae(e,Ze(e)-3-(~Gi(e,"!important")&&10))){case 107:return D(e,":",":"+$)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(ae(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+me+"$2box$3")+e}break;case 5936:switch(ae(e,t+11)){case 114:return $+e+me+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+me+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+me+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+me+e+e}return e}var q1=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case bs:t.return=Zf(t.value,t.length);break;case Xf:return vn([Bn(t,{value:D(t.value,"@","@"+$)})],o);case Ks:if(t.length)return I1(t.props,function(l){switch(R1(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return vn([Bn(t,{props:[D(l,/:(read-\w+)/,":"+Do+"$1")]})],o);case"::placeholder":return vn([Bn(t,{props:[D(l,/:(plac\w+)/,":"+$+"input-$1")]}),Bn(t,{props:[D(l,/:(plac\w+)/,":"+Do+"$1")]}),Bn(t,{props:[D(l,/:(plac\w+)/,me+"input-$1")]})],o)}return""})}},em=[q1],tm=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var z=v.getAttribute("data-emotion");z.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=t.stylisPlugins||em,l={},i,s=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var z=v.getAttribute("data-emotion").split(" "),f=1;f<z.length;f++)l[z[f]]=!0;s.push(v)});var a,c=[J1,Z1];{var g,m=[H1,Y1(function(v){g.insert(v)})],h=Q1(c.concat(o,m)),w=function(z){return vn(V1(z),h)};a=function(z,f,u,d){g=u,w(z?z+"{"+f.styles+"}":f.styles),d&&(S.inserted[f.name]=!0)}}var S={key:n,sheet:new P1({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:a};return S.sheet.hydrate(s),S},qf={exports:{}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie=typeof Symbol=="function"&&Symbol.for,Zs=ie?Symbol.for("react.element"):60103,qs=ie?Symbol.for("react.portal"):60106,rl=ie?Symbol.for("react.fragment"):60107,ol=ie?Symbol.for("react.strict_mode"):60108,ll=ie?Symbol.for("react.profiler"):60114,il=ie?Symbol.for("react.provider"):60109,sl=ie?Symbol.for("react.context"):60110,ea=ie?Symbol.for("react.async_mode"):60111,al=ie?Symbol.for("react.concurrent_mode"):60111,ul=ie?Symbol.for("react.forward_ref"):60112,cl=ie?Symbol.for("react.suspense"):60113,nm=ie?Symbol.for("react.suspense_list"):60120,fl=ie?Symbol.for("react.memo"):60115,dl=ie?Symbol.for("react.lazy"):60116,rm=ie?Symbol.for("react.block"):60121,om=ie?Symbol.for("react.fundamental"):60117,lm=ie?Symbol.for("react.responder"):60118,im=ie?Symbol.for("react.scope"):60119;function Re(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Zs:switch(e=e.type,e){case ea:case al:case rl:case ll:case ol:case cl:return e;default:switch(e=e&&e.$$typeof,e){case sl:case ul:case dl:case fl:case il:return e;default:return t}}case qs:return t}}}function ed(e){return Re(e)===al}A.AsyncMode=ea;A.ConcurrentMode=al;A.ContextConsumer=sl;A.ContextProvider=il;A.Element=Zs;A.ForwardRef=ul;A.Fragment=rl;A.Lazy=dl;A.Memo=fl;A.Portal=qs;A.Profiler=ll;A.StrictMode=ol;A.Suspense=cl;A.isAsyncMode=function(e){return ed(e)||Re(e)===ea};A.isConcurrentMode=ed;A.isContextConsumer=function(e){return Re(e)===sl};A.isContextProvider=function(e){return Re(e)===il};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zs};A.isForwardRef=function(e){return Re(e)===ul};A.isFragment=function(e){return Re(e)===rl};A.isLazy=function(e){return Re(e)===dl};A.isMemo=function(e){return Re(e)===fl};A.isPortal=function(e){return Re(e)===qs};A.isProfiler=function(e){return Re(e)===ll};A.isStrictMode=function(e){return Re(e)===ol};A.isSuspense=function(e){return Re(e)===cl};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===rl||e===al||e===ll||e===ol||e===cl||e===nm||typeof e=="object"&&e!==null&&(e.$$typeof===dl||e.$$typeof===fl||e.$$typeof===il||e.$$typeof===sl||e.$$typeof===ul||e.$$typeof===om||e.$$typeof===lm||e.$$typeof===im||e.$$typeof===rm)};A.typeOf=Re;qf.exports=A;var sm=qf.exports,td=sm,am={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},um={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nd={};nd[td.ForwardRef]=am;nd[td.Memo]=um;var cm=!0;function rd(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(r+=o+" ")}),r}var ta=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||cm===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},od=function(t,n,r){ta(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function fm(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var dm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},pm=!1,mm=/[A-Z]|^ms/g,hm=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ld=function(t){return t.charCodeAt(1)===45},ju=function(t){return t!=null&&typeof t!="boolean"},ql=X1(function(e){return ld(e)?e:e.replace(mm,"-$&").toLowerCase()}),Cu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(hm,function(r,o,l){return qe={name:o,styles:l,next:qe},o})}return dm[t]!==1&&!ld(t)&&typeof n=="number"&&n!==0?n+"px":n},gm="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function wr(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var o=n;if(o.anim===1)return qe={name:o.name,styles:o.styles,next:qe},o.name;var l=n;if(l.styles!==void 0){var i=l.next;if(i!==void 0)for(;i!==void 0;)qe={name:i.name,styles:i.styles,next:qe},i=i.next;var s=l.styles+";";return s}return vm(e,t,n)}case"function":{if(e!==void 0){var a=qe,c=n(e);return qe=a,wr(e,t,c)}break}}var g=n;if(t==null)return g;var m=t[g];return m!==void 0?m:g}function vm(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=wr(e,t,n[o])+";";else for(var l in n){var i=n[l];if(typeof i!="object"){var s=i;t!=null&&t[s]!==void 0?r+=l+"{"+t[s]+"}":ju(s)&&(r+=ql(l)+":"+Cu(l,s)+";")}else{if(l==="NO_COMPONENT_SELECTOR"&&pm)throw new Error(gm);if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var a=0;a<i.length;a++)ju(i[a])&&(r+=ql(l)+":"+Cu(l,i[a])+";");else{var c=wr(e,t,i);switch(l){case"animation":case"animationName":{r+=ql(l)+":"+c+";";break}default:r+=l+"{"+c+"}"}}}}return r}var Eu=/label:\s*([^\s;{]+)\s*(;|$)/g,qe;function na(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,o="";qe=void 0;var l=e[0];if(l==null||l.raw===void 0)r=!1,o+=wr(n,t,l);else{var i=l;o+=i[0]}for(var s=1;s<e.length;s++)if(o+=wr(n,t,e[s]),r){var a=l;o+=a[s]}Eu.lastIndex=0;for(var c="",g;(g=Eu.exec(o))!==null;)c+="-"+g[1];var m=fm(o)+c;return{name:m,styles:o,next:qe}}var ym=function(t){return t()},wm=ca.useInsertionEffect?ca.useInsertionEffect:!1,id=wm||ym,bi=!1,sd=L.createContext(typeof HTMLElement<"u"?tm({key:"css"}):null);sd.Provider;var ad=function(t){return L.forwardRef(function(n,r){var o=L.useContext(sd);return t(n,o,r)})},ud=L.createContext({}),pl={}.hasOwnProperty,Ji="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",cd=function(t,n){var r={};for(var o in n)pl.call(n,o)&&(r[o]=n[o]);return r[Ji]=t,r},Sm=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return ta(n,r,o),id(function(){return od(n,r,o)}),null},xm=ad(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Ji],l=[r],i="";typeof e.className=="string"?i=rd(t.registered,l,e.className):e.className!=null&&(i=e.className+" ");var s=na(l,void 0,L.useContext(ud));i+=t.key+"-"+s.name;var a={};for(var c in e)pl.call(e,c)&&c!=="css"&&c!==Ji&&!bi&&(a[c]=e[c]);return a.className=i,n&&(a.ref=n),L.createElement(L.Fragment,null,L.createElement(Sm,{cache:t,serialized:s,isStringTag:typeof o=="string"}),L.createElement(o,a))}),fd=xm,_m=p.Fragment,re=function(t,n,r){return pl.call(n,"css")?p.jsx(fd,cd(t,n),r):p.jsx(t,n,r)},Nu=function(t,n){var r=arguments;if(n==null||!pl.call(n,"css"))return L.createElement.apply(void 0,r);var o=r.length,l=new Array(o);l[0]=fd,l[1]=cd(t,n);for(var i=2;i<o;i++)l[i]=r[i];return L.createElement.apply(null,l)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(Nu||(Nu={}));function dd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return na(t)}function _(){var e=dd.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var km=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var l=t[r];if(l!=null){var i=void 0;switch(typeof l){case"boolean":break;case"object":{if(Array.isArray(l))i=e(l);else{i="";for(var s in l)l[s]&&s&&(i&&(i+=" "),i+=s)}break}default:i=l}i&&(o&&(o+=" "),o+=i)}}return o};function jm(e,t,n){var r=[],o=rd(e,r,n);return r.length<2?n:o+t(r)}var Cm=function(t){var n=t.cache,r=t.serializedArr;return id(function(){for(var o=0;o<r.length;o++)od(n,r[o],!1)}),null},ei=ad(function(e,t){var n=!1,r=[],o=function(){if(n&&bi)throw new Error("css can only be used during render");for(var c=arguments.length,g=new Array(c),m=0;m<c;m++)g[m]=arguments[m];var h=na(g,t.registered);return r.push(h),ta(t,h,!1),t.key+"-"+h.name},l=function(){if(n&&bi)throw new Error("cx can only be used during render");for(var c=arguments.length,g=new Array(c),m=0;m<c;m++)g[m]=arguments[m];return jm(t.registered,o,km(g))},i={css:o,cx:l,theme:L.useContext(ud)},s=e.children(i);return n=!0,L.createElement(L.Fragment,null,L.createElement(Cm,{cache:t,serializedArr:r}),s)}),Em=Object.defineProperty,Nm=(e,t,n)=>t in e?Em(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xr=(e,t,n)=>Nm(e,typeof t!="symbol"?t+"":t,n),Zi=new Map,Gr=new WeakMap,Pu=0,Pm=void 0;function zm(e){return e?(Gr.has(e)||(Pu+=1,Gr.set(e,Pu.toString())),Gr.get(e)):"0"}function Om(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?zm(e.root):e[t]}`).toString()}function Lm(e){const t=Om(e);let n=Zi.get(t);if(!n){const r=new Map;let o;const l=new IntersectionObserver(i=>{i.forEach(s=>{var a;const c=s.isIntersecting&&o.some(g=>s.intersectionRatio>=g);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(a=r.get(s.target))==null||a.forEach(g=>{g(c,s)})})},e);o=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:r},Zi.set(t,n)}return n}function pd(e,t,n={},r=Pm){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:o,observer:l,elements:i}=Lm(n),s=i.get(e)||[];return i.has(e)||i.set(e,s),s.push(t),l.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(i.delete(e),l.unobserve(e)),i.size===0&&(l.disconnect(),Zi.delete(o))}}function Tm(e){return typeof e.children!="function"}var zu=class extends L.Component{constructor(e){super(e),Xr(this,"node",null),Xr(this,"_unobserveCb",null),Xr(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Xr(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Tm(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:l}=this.props;this._unobserveCb=pd(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:w,entry:S}=this.state;return e({inView:w,entry:S,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:l,onChange:i,skip:s,trackVisibility:a,delay:c,initialInView:g,fallbackInView:m,...h}=this.props;return L.createElement(t||"div",{ref:this.handleNode,...h},e)}};function md({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:l,skip:i,initialInView:s,fallbackInView:a,onChange:c}={}){var g;const[m,h]=L.useState(null),w=L.useRef(),[S,v]=L.useState({inView:!!s,entry:void 0});w.current=c,L.useEffect(()=>{if(i||!m)return;let d;return d=pd(m,(y,j)=>{v({inView:y,entry:j}),w.current&&w.current(y,j),j.isIntersecting&&l&&d&&(d(),d=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},a),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,m,o,r,l,i,n,a,t]);const z=(g=S.entry)==null?void 0:g.target,f=L.useRef();!m&&z&&!l&&!i&&f.current!==z&&(f.current=z,v({inView:!!s,entry:void 0}));const u=[h,S.inView,S.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}var hd={exports:{}},B={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=Symbol.for("react.element"),oa=Symbol.for("react.portal"),ml=Symbol.for("react.fragment"),hl=Symbol.for("react.strict_mode"),gl=Symbol.for("react.profiler"),vl=Symbol.for("react.provider"),yl=Symbol.for("react.context"),Mm=Symbol.for("react.server_context"),wl=Symbol.for("react.forward_ref"),Sl=Symbol.for("react.suspense"),xl=Symbol.for("react.suspense_list"),_l=Symbol.for("react.memo"),kl=Symbol.for("react.lazy"),Rm=Symbol.for("react.offscreen"),gd;gd=Symbol.for("react.module.reference");function Ue(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ra:switch(e=e.type,e){case ml:case gl:case hl:case Sl:case xl:return e;default:switch(e=e&&e.$$typeof,e){case Mm:case yl:case wl:case kl:case _l:case vl:return e;default:return t}}case oa:return t}}}B.ContextConsumer=yl;B.ContextProvider=vl;B.Element=ra;B.ForwardRef=wl;B.Fragment=ml;B.Lazy=kl;B.Memo=_l;B.Portal=oa;B.Profiler=gl;B.StrictMode=hl;B.Suspense=Sl;B.SuspenseList=xl;B.isAsyncMode=function(){return!1};B.isConcurrentMode=function(){return!1};B.isContextConsumer=function(e){return Ue(e)===yl};B.isContextProvider=function(e){return Ue(e)===vl};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ra};B.isForwardRef=function(e){return Ue(e)===wl};B.isFragment=function(e){return Ue(e)===ml};B.isLazy=function(e){return Ue(e)===kl};B.isMemo=function(e){return Ue(e)===_l};B.isPortal=function(e){return Ue(e)===oa};B.isProfiler=function(e){return Ue(e)===gl};B.isStrictMode=function(e){return Ue(e)===hl};B.isSuspense=function(e){return Ue(e)===Sl};B.isSuspenseList=function(e){return Ue(e)===xl};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ml||e===gl||e===hl||e===Sl||e===xl||e===Rm||typeof e=="object"&&e!==null&&(e.$$typeof===kl||e.$$typeof===_l||e.$$typeof===vl||e.$$typeof===yl||e.$$typeof===wl||e.$$typeof===gd||e.getModuleId!==void 0)};B.typeOf=Ue;hd.exports=B;var Im=hd.exports;_`
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
`;const $m=_`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Dm=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Fm=_`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Am=_`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Bm=_`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,la=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Um=_`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Vm=_`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Wm=_`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Hm=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Qm=_`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ym=_`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Xm=_`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Gm({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=la,iterationCount:o=1}){return dd`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Km(e){return e==null}function bm(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function vd(e,t){return n=>n?e():t()}function Sr(e){return vd(e,()=>null)}function qi(e){return Sr(()=>({opacity:0}))(e)}const yd=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:l=0,keyframes:i=la,triggerOnce:s=!1,className:a,style:c,childClassName:g,childStyle:m,children:h,onVisibilityChange:w}=e,S=L.useMemo(()=>Gm({keyframes:i,duration:o}),[o,i]);return Km(h)?null:bm(h)?re(Zm,{...e,animationStyles:S,children:String(h)}):Im.isFragment(h)?re(wd,{...e,animationStyles:S}):re(_m,{children:L.Children.map(h,(v,z)=>{if(!L.isValidElement(v))return null;const f=r+(t?z*o*n:0);switch(v.type){case"ol":case"ul":return re(ei,{children:({cx:u})=>re(v.type,{...v.props,className:u(a,v.props.className),style:Object.assign({},c,v.props.style),children:re(yd,{...e,children:v.props.children})})});case"li":return re(zu,{threshold:l,triggerOnce:s,onChange:w,children:({inView:u,ref:d})=>re(ei,{children:({cx:y})=>re(v.type,{...v.props,ref:d,className:y(g,v.props.className),css:Sr(()=>S)(u),style:Object.assign({},m,v.props.style,qi(!u),{animationDelay:f+"ms"})})})});default:return re(zu,{threshold:l,triggerOnce:s,onChange:w,children:({inView:u,ref:d})=>re("div",{ref:d,className:a,css:Sr(()=>S)(u),style:Object.assign({},c,qi(!u),{animationDelay:f+"ms"}),children:re(ei,{children:({cx:y})=>re(v.type,{...v.props,className:y(g,v.props.className),style:Object.assign({},m,v.props.style)})})})})}})})},Jm={display:"inline-block",whiteSpace:"pre"},Zm=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:l=1e3,fraction:i=0,triggerOnce:s=!1,className:a,style:c,children:g,onVisibilityChange:m}=e,{ref:h,inView:w}=md({triggerOnce:s,threshold:i,onChange:m});return vd(()=>re("div",{ref:h,className:a,style:Object.assign({},c,Jm),children:g.split("").map((S,v)=>re("span",{css:Sr(()=>t)(w),style:{animationDelay:o+v*l*r+"ms"},children:S},v))}),()=>re(wd,{...e,children:g}))(n)},wd=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:l,children:i,onVisibilityChange:s}=e,{ref:a,inView:c}=md({triggerOnce:r,threshold:n,onChange:s});return re("div",{ref:a,className:o,css:Sr(()=>t)(c),style:Object.assign({},l,qi(!c)),children:i})};_`
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
`;const qm=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,eh=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,th=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,nh=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,rh=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,oh=_`
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
`,ih=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,sh=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,ah=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,uh=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,ch=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,fh=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function dh(e,t,n){switch(n){case"bottom-left":return t?eh:Dm;case"bottom-right":return t?th:Fm;case"down":return e?t?rh:Bm:t?nh:Am;case"left":return e?t?lh:Um:t?oh:la;case"right":return e?t?sh:Wm:t?ih:Vm;case"top-left":return t?ah:Hm;case"top-right":return t?uh:Qm;case"up":return e?t?fh:Xm:t?ch:Ym;default:return t?qm:$m}}const Sd=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,l=L.useMemo(()=>dh(t,r,n),[t,n,r]);return re(yd,{keyframes:l,...o})};_`
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
`;const ph="/personal-website/assets/01-SelectScreen-C39aqvsp.png?type=url",mh=Object.freeze(Object.defineProperty({__proto__:null,default:ph},Symbol.toStringTag,{value:"Module"})),hh="/personal-website/assets/02-SC-StateSummary-DqOrXHm6.png?type=url",gh=Object.freeze(Object.defineProperty({__proto__:null,default:hh},Symbol.toStringTag,{value:"Module"})),vh="/personal-website/assets/03-SC-DistrictSummary-D7zkRfh7.png?type=url",yh=Object.freeze(Object.defineProperty({__proto__:null,default:vh},Symbol.toStringTag,{value:"Module"})),wh="/personal-website/assets/04-SC-HeatMap-p9O3hWcU.png?type=url",Sh=Object.freeze(Object.defineProperty({__proto__:null,default:wh},Symbol.toStringTag,{value:"Module"})),xh="/personal-website/assets/05-SC-Gingles-C1yA30Dn.png?type=url",_h=Object.freeze(Object.defineProperty({__proto__:null,default:xh},Symbol.toStringTag,{value:"Module"})),kh="/personal-website/assets/06-SC-EI-A-gNQvc8.png?type=url",jh=Object.freeze(Object.defineProperty({__proto__:null,default:kh},Symbol.toStringTag,{value:"Module"})),Ch="/personal-website/assets/07-SC-EnsembleSplit-0NcQtuMd.png?type=url",Eh=Object.freeze(Object.defineProperty({__proto__:null,default:Ch},Symbol.toStringTag,{value:"Module"})),Nh="/personal-website/assets/08-SC-ComparePlans-MuYf_4gr.png?type=url",Ph=Object.freeze(Object.defineProperty({__proto__:null,default:Nh},Symbol.toStringTag,{value:"Module"})),zh="/personal-website/assets/01-TitleScreen-S4AIekUF.png?type=url",Oh=Object.freeze(Object.defineProperty({__proto__:null,default:zh},Symbol.toStringTag,{value:"Module"})),Lh="/personal-website/assets/02-Level0-01-FBGtNfUS.png?type=url",Th=Object.freeze(Object.defineProperty({__proto__:null,default:Lh},Symbol.toStringTag,{value:"Module"})),Mh="/personal-website/assets/03-Level1-01-Crrq8nW7.png?type=url",Rh=Object.freeze(Object.defineProperty({__proto__:null,default:Mh},Symbol.toStringTag,{value:"Module"})),Ih="/personal-website/assets/04-Level1-02-B_nn8TFr.png?type=url",$h=Object.freeze(Object.defineProperty({__proto__:null,default:Ih},Symbol.toStringTag,{value:"Module"})),Dh="/personal-website/assets/05-Level1-03-CrmedIEW.png?type=url",Fh=Object.freeze(Object.defineProperty({__proto__:null,default:Dh},Symbol.toStringTag,{value:"Module"})),Ah="/personal-website/assets/06-Level1-04-bWyJnUR5.png?type=url",Bh=Object.freeze(Object.defineProperty({__proto__:null,default:Ah},Symbol.toStringTag,{value:"Module"})),Uh="/personal-website/assets/07-Level2-01-C-Ag6qa_.png?type=url",Vh=Object.freeze(Object.defineProperty({__proto__:null,default:Uh},Symbol.toStringTag,{value:"Module"})),Wh="/personal-website/assets/08-Level3-01-DdTKLTNC.png?type=url",Hh=Object.freeze(Object.defineProperty({__proto__:null,default:Wh},Symbol.toStringTag,{value:"Module"})),Qh="/personal-website/assets/09-Level4-01-DD3KrhpT.png?type=url",Yh=Object.freeze(Object.defineProperty({__proto__:null,default:Qh},Symbol.toStringTag,{value:"Module"})),Xh="/personal-website/assets/10-Level5-01-BUNSE7He.png?type=url",Gh=Object.freeze(Object.defineProperty({__proto__:null,default:Xh},Symbol.toStringTag,{value:"Module"})),Kh="/personal-website/assets/11-Level5-02-C3O_lhVJ.png?type=url",bh=Object.freeze(Object.defineProperty({__proto__:null,default:Kh},Symbol.toStringTag,{value:"Module"})),Jh="/personal-website/assets/12-Level5-03-osKL2R_2.png?type=url",Zh=Object.freeze(Object.defineProperty({__proto__:null,default:Jh},Symbol.toStringTag,{value:"Module"})),qh="/personal-website/assets/13-LoadingScreen-7BaEHjX-.png?type=url",eg=Object.freeze(Object.defineProperty({__proto__:null,default:qh},Symbol.toStringTag,{value:"Module"})),tg="/personal-website/assets/01-TitleScreen-BwBwWMz4.png?type=url",ng=Object.freeze(Object.defineProperty({__proto__:null,default:tg},Symbol.toStringTag,{value:"Module"})),rg="/personal-website/assets/02-GameStart-DZ_J1KRT.png?type=url",og=Object.freeze(Object.defineProperty({__proto__:null,default:rg},Symbol.toStringTag,{value:"Module"})),lg="/personal-website/assets/03-GameScreen-D6l0jE3_.png?type=url",ig=Object.freeze(Object.defineProperty({__proto__:null,default:lg},Symbol.toStringTag,{value:"Module"})),sg="/personal-website/assets/04-DeathScreen-nHaWga4y.png?type=url",ag=Object.freeze(Object.defineProperty({__proto__:null,default:sg},Symbol.toStringTag,{value:"Module"})),xd=[{title:"Lobos Client",status:"Plans for Revision",last_updated:"Feb 6, 2025",images:Object.values(Object.assign({"/src/assets/project-images/LobosClient/01-SelectScreen.png":mh,"/src/assets/project-images/LobosClient/02-SC-StateSummary.png":gh,"/src/assets/project-images/LobosClient/03-SC-DistrictSummary.png":yh,"/src/assets/project-images/LobosClient/04-SC-HeatMap.png":Sh,"/src/assets/project-images/LobosClient/05-SC-Gingles.png":_h,"/src/assets/project-images/LobosClient/06-SC-EI.png":jh,"/src/assets/project-images/LobosClient/07-SC-EnsembleSplit.png":Eh,"/src/assets/project-images/LobosClient/08-SC-ComparePlans.png":Ph})),aspect_ratio:1920/1080,description:"Senior design project completed as a team of four, focusing on analyzing and visualizing political data. Python was used to preprocess Census data through Pandas, with further analysis done through libraries such as PyEI and GerryChain. Check out the project via the attached link and feel free to reach out with any questions!",tags:["JavaScript","React","Leaflet","axios","Java","Spring","Python","Pandas","MongoDB"],links:[{type:"Try",name:"Lobos Client",url:"https://lobos-client.vercel.app/"}]},{title:"Asphodel Game",status:"Plans for Revision",last_updated:"Jul 3, 2024",images:Object.values(Object.assign({"/src/assets/project-images/Asphodel/01-TitleScreen.png":Oh,"/src/assets/project-images/Asphodel/02-Level0-01.png":Th,"/src/assets/project-images/Asphodel/03-Level1-01.png":Rh,"/src/assets/project-images/Asphodel/04-Level1-02.png":$h,"/src/assets/project-images/Asphodel/05-Level1-03.png":Fh,"/src/assets/project-images/Asphodel/06-Level1-04.png":Bh,"/src/assets/project-images/Asphodel/07-Level2-01.png":Vh,"/src/assets/project-images/Asphodel/08-Level3-01.png":Hh,"/src/assets/project-images/Asphodel/09-Level4-01.png":Yh,"/src/assets/project-images/Asphodel/10-Level5-01.png":Gh,"/src/assets/project-images/Asphodel/11-Level5-02.png":bh,"/src/assets/project-images/Asphodel/12-Level5-03.png":Zh,"/src/assets/project-images/Asphodel/13-LoadingScreen.png":eg})),aspect_ratio:1500/1e3,description:"A browser game built as a team of three for our 2D Game Development course. Developed with TypeScript using a custom engine, Wolfie2D, and bundled with Gulp.js, then served via Firebase. Play with a friend in this immersive local 2-player adventure through the attached link!",tags:["TypeScript","Gulp.js","Wolfie2D","Firebase"],links:[{type:"Try",name:"Asphodel",url:"https://asphodel-game.web.app/"},{type:"Resource",name:"Wolfie2D",url:"https://zgrandison.github.io/"}]},{title:"ViewYou",status:"Plans for Revision",last_updated:"Mar 13, 2024",images:Object.values(Object.assign({})),aspect_ratio:1920/1080,description:"Placeholder Description",tags:["JavaScript","React","Node.js","Express.js","Python","Flask","DeepFace","OpenAI"],links:[]},{title:"Minecraft Bingo",status:"Plans for Revision",last_updated:"Oct 29, 2023",images:Object.values(Object.assign({})),aspect_ratio:1920/1080,description:"Placeholder Description",tags:["Java","SpigotMC"],links:[]},{title:"Fake Stack Overflow",status:"Plans for Revision",last_updated:"Dec 22, 2023",images:Object.values(Object.assign({})),aspect_ratio:1920/1080,description:"Placeholder Description",tags:["JavaScript","React","Node.js","Express.js","bcrypt","MongoDB"],links:[]},{title:"Time2Learn",status:"Completed",last_updated:"Feb 11, 2024",images:Object.values(Object.assign({})),aspect_ratio:1920/1080,description:"Placeholder Description",tags:["JavaScript","React","Node.js","MongoDB"],links:[]},{title:"C Memory Allocator",status:"Completed",last_updated:"Apr 05, 2023",images:Object.values(Object.assign({})),aspect_ratio:1920/1080,description:"Placeholder Description",tags:["C","GDB"],links:[{type:"GitHub",name:"320 Memory Allocator",url:"https://github.com/klin2003/320-memory-allocator"}]},{title:"Graphs in MIPS",status:"Completed",last_updated:"Dec 11, 2022",images:Object.values(Object.assign({})),aspect_ratio:1920/1080,description:"Placeholder Description",tags:["MIPS Assembly","MARS"],links:[{type:"GitHub",name:"220 MIPs Graphs",url:"https://github.com/klin2003/220-mips-graphs"}]},{title:"Totally Not Crossy Road",status:"Completed",last_updated:"Jun 14, 2020",images:Object.values(Object.assign({"/src/assets/project-images/TNCR/01-TitleScreen.png":ng,"/src/assets/project-images/TNCR/02-GameStart.png":og,"/src/assets/project-images/TNCR/03-GameScreen.png":ig,"/src/assets/project-images/TNCR/04-DeathScreen.png":ag})),aspect_ratio:800/800,description:"Two-day project for my AP Computer Science A course in high school where Java was used together with Processing API to create a replica of Crossy Road. Our ultimate goal was to combine concepts from class with official documentation on Processing API to create a replica of an existing game. Try the game out by downloading it from the attached GitHub repo!",tags:["Java","Processing"],links:[{type:"GitHub",name:"Totally Not Crossy Road",url:"https://github.com/klin2003/totally-not-crossy-road"},{type:"Resource",name:"Processing API",url:"https://processing.org/"}]}],ug="/personal-website/assets/NoImages-Cnq4Uv_V.png";function cg(e){const t={projectData:xd,projectIndex:e.projectIndex,setProjectIndex:e.setProjectIndex};return p.jsxs("div",{id:"projects",children:[p.jsx(Gs,{className:"projects-section-header",entryNumber:2,titleLabel:e.width>1200?"Projects":""}),p.jsxs("div",{className:"projects-container flex flex-col text-white",children:[p.jsx(fg,{projectData:t.projectData,projectIndex:t.projectIndex,setProjectIndex:t.setProjectIndex}),p.jsxs(Sd,{children:[p.jsx(dg,{projectData:t.projectData,projectIndex:t.projectIndex,setProjectIndex:t.setProjectIndex}),p.jsx(pg,{projectData:t.projectData,projectIndex:t.projectIndex,setProjectIndex:t.setProjectIndex,setFocus:e.setFocus}),p.jsx(mg,{projectData:t.projectData,projectIndex:t.projectIndex,setProjectIndex:t.setProjectIndex})]},e.projectIndex)]})]})}function fg({projectData:e,projectIndex:t,setProjectIndex:n}){const r=o=>{o&&t==e.length?n(1):!o&&t==1?n(e.length):n(t+(o?1:-1))};return p.jsxs("div",{className:"flex flex-row justify-between items-center",children:[p.jsx("div",{className:"text-red-500 font-bold text-sm montserrat",children:"CURRENT LISTING:"}),p.jsxs("div",{className:"projects-header-settings flex justify-center items-center",children:[p.jsx(s1,{className:"projects-header-arrow",onClick:()=>{r(!1)}}),p.jsxs("div",{className:"projects-header-index",children:[p.jsx("span",{className:"font-medium text-red-500",children:`${t.toString().padStart(3,"0")}`}),p.jsx("span",{children:" / "}),p.jsx("span",{children:`${e.length.toString().padStart(3,"0")}`})]}),p.jsx(u1,{className:"projects-header-arrow",onClick:()=>{r(!0)}})]})]})}function dg({projectData:e,projectIndex:t}){const n=e[t-1];return p.jsxs("div",{className:"projects-header-section flex flex-row items-center justify-between mt-2 mb-2",children:[p.jsx("div",{className:"projects-header-title averia-serif",children:n.title}),p.jsxs("div",{className:"montserrat text-gray-300 font-semibold text-sm text-center",children:[p.jsx("span",{className:"underline underline-offset-4",children:"Last Updated"}),p.jsx("span",{children:`: ${n.last_updated}`}),p.jsx("div",{className:"mt-2",children:`=={ ${n.status} }==`})]})]})}function pg({projectData:e,projectIndex:t,setFocus:n}){const r=e[t-1],o=r.images.length,[l,i]=L.useState(0),[s,a]=L.useState(0),c=L.useRef(null),g=h=>{i(h?(l+1)%o:(l-1+o)%o)},m=()=>{if(c.current){const h=c.current.querySelector(".project-img-container");if(h){const w=h.getBoundingClientRect().width;a(w+48)}}};return r.images.length==0?p.jsxs("div",{className:"projects-display-section",children:[p.jsx("div",{ref:c,className:"project-display-images flex items-center",children:p.jsx("img",{src:ug,className:"project-img-none"})}),p.jsxs("div",{className:"flex flex-row items-center justify-between mt-2 p-2 border-y-2 border-gray-500 border-dashed",children:[p.jsx(wu,{size:24,className:"projects-img-arrow cursor-not-allowed mr-4"}),p.jsx("div",{className:"projects-img-slides-index",children:p.jsx("span",{children:"No Images Found"})}),p.jsx(Su,{size:24,className:"projects-img-arrow cursor-not-allowed ml-4"})]})]}):p.jsxs("div",{className:"projects-display-section",children:[p.jsx("div",{ref:c,className:"project-display-images flex items-center",children:r.images.map((h,w)=>p.jsxs("div",{className:"relative project-img-container flex transition-transform duration-500 ease-in-out",style:{transform:`translateX(-${l*s}px)`},children:[p.jsx("img",{src:h.default,className:"project-img",onClick:()=>n((w+l)%o),onLoad:m}),p.jsx(y1,{className:"project-img-zoom cursor-pointer",onClick:()=>n((w+l)%o)})]},w))}),p.jsxs("div",{className:"flex flex-row items-center justify-between mt-2 p-2 border-y-2 border-gray-500 border-dashed",children:[p.jsx(wu,{size:24,className:"projects-img-arrow mr-4",onClick:()=>g(!1)}),p.jsxs("div",{className:"projects-img-slides-index",children:[p.jsx("span",{className:"text-red-500",children:`${(l+1).toString().padStart(2,"0")}`}),p.jsx("span",{children:" / "}),p.jsx("span",{children:`${o.toString().padStart(2,"0")}`})]}),p.jsx(Su,{size:24,className:"projects-img-arrow ml-4",onClick:()=>g(!0)})]})]})}function mg({projectData:e,projectIndex:t,setProjectIndex:n}){return p.jsxs("div",{className:"projects-details-section",children:[p.jsx("div",{className:"flex-[0_0_50%]",children:p.jsx(hg,{projectData:e,projectIndex:t,setProjectIndex:n})}),p.jsxs("div",{className:"flex flex-col flex-[0_0_50%]",children:[p.jsx(gg,{projectData:e,projectIndex:t,setProjectIndex:n}),p.jsx(vg,{projectData:e,projectIndex:t,setProjectIndex:n})]})]})}function hg({projectData:e,projectIndex:t}){const n=e[t-1];return p.jsxs("div",{className:"projects-description-container mb-6",children:[p.jsx("div",{className:"projects-details-title",children:"DESCRIPTION"}),p.jsx("div",{className:"projects-description-content source-code-pro",children:n.description})]})}function gg({projectData:e,projectIndex:t}){const n=e[t-1];return p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"projects-details-title",children:"TECH STACK"}),p.jsxs("div",{className:"projects-tech-stack mb-6",children:[n.tags.length==0&&p.jsx("div",{className:"source-code-pro",children:"No Tech Stack Provided"}),p.jsx("div",{className:"projects-tech-stack-grid",children:n.tags.map((r,o)=>p.jsx("div",{className:"projects-tech-stack-item",children:r},`Tag${o}`))})]})]})}function vg({projectData:e,projectIndex:t}){const n=e[t-1];return p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"projects-details-title",children:"LINKS"}),p.jsxs("div",{className:"projects-links-container mb-4",children:[n.links.length==0&&p.jsx("div",{className:"source-code-pro",children:"No Links Available"}),n.links.map((r,o)=>p.jsxs("div",{className:"flex items-center pb-4",children:[r.type=="GitHub"&&p.jsxs(p.Fragment,{children:[p.jsx(Qf,{size:24,className:"mr-2"}),p.jsx("span",{className:"source-code-pro",children:"GitHub Repo: "})]}),r.type=="Try"&&p.jsxs(p.Fragment,{children:[p.jsx(m1,{size:24,className:"mr-2"}),p.jsx("span",{className:"source-code-pro",children:"Try Yourself: "})]}),r.type=="Resource"&&p.jsxs(p.Fragment,{children:[p.jsx(l1,{size:24,className:"mr-2"}),p.jsx("span",{className:"source-code-pro",children:"Resource: "})]}),p.jsx("a",{className:"source-code-pro classic-anchor1",href:r.url,target:"_blank",children:r.name})]},`Link${o}`))]})]})}function yg(e){return p.jsx("div",{id:"tools",className:"flex flex-row items-center",children:p.jsx(Gs,{className:"tools",entryNumber:3,titleLabel:e.width>1200?"Tools (WIP)":""})})}function wg(e){const t=xd,n=t[e.projectIndex-1].images.length,[r,o]=L.useState(!0),[l,i]=L.useState(!1),s=a=>{i(!0),a?e.setFocus((e.focusState+1)%n):e.setFocus((e.focusState-1+n)%n)};return L.useEffect(()=>{const a=document.getElementById("project-focus-img-modal"),c=document.getElementById("project-focus-img");a&&c&&(o(!l),i(!1),e.focusState<0?a.style.display="none":(a.style.display="flex",c.src=t[e.projectIndex-1].images[e.focusState].default))},[e.focusState]),p.jsx(p.Fragment,{children:p.jsxs("div",{id:"project-focus-img-modal",children:[p.jsx(v1,{className:"project-focus-img-modal-close",onClick:()=>{e.setFocus(-1)}}),p.jsxs("div",{className:"flex flex-row items-center",children:[p.jsx(a1,{className:"project-focus-img-arrow",onClick:()=>s(!1)}),p.jsx(Sd,{duration:1e3,children:p.jsx("img",{id:"project-focus-img",className:`${r?"zoom":""}`})},e.focusState),p.jsx(c1,{className:"project-focus-img-arrow",onClick:()=>s(!0)})]})]})})}function Sg(){const[e,t]=L.useState(window.innerWidth),[n,r]=L.useState(1),[o,l]=L.useState(-1),i=()=>{t(window.innerWidth)};return L.useEffect(()=>(window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}),[]),p.jsxs("div",{className:"relative",children:[p.jsx("img",{className:"bg-image",src:Jp}),p.jsx(w1,{}),p.jsx(k1,{width:e}),p.jsx(cg,{width:e,projectIndex:n,setProjectIndex:r,setFocus:l}),p.jsx(yg,{width:e}),p.jsx(wg,{projectIndex:n,setFocus:l,focusState:o}),p.jsx(_1,{})]})}ti.createRoot(document.getElementById("root")).render(p.jsx(at.StrictMode,{children:p.jsx(Sg,{})}));
