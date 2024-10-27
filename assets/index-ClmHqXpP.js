function gd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function wd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pu={exports:{}},Fl={},zu={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sr=Symbol.for("react.element"),xd=Symbol.for("react.portal"),Sd=Symbol.for("react.fragment"),kd=Symbol.for("react.strict_mode"),Cd=Symbol.for("react.profiler"),Ed=Symbol.for("react.provider"),jd=Symbol.for("react.context"),Nd=Symbol.for("react.forward_ref"),_d=Symbol.for("react.suspense"),Pd=Symbol.for("react.memo"),zd=Symbol.for("react.lazy"),aa=Symbol.iterator;function Od(e){return e===null||typeof e!="object"?null:(e=aa&&e[aa]||e["@@iterator"],typeof e=="function"?e:null)}var Ou={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lu=Object.assign,Tu={};function Nn(e,t,n){this.props=e,this.context=t,this.refs=Tu,this.updater=n||Ou}Nn.prototype.isReactComponent={};Nn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Iu(){}Iu.prototype=Nn.prototype;function ts(e,t,n){this.props=e,this.context=t,this.refs=Tu,this.updater=n||Ou}var ns=ts.prototype=new Iu;ns.constructor=ts;Lu(ns,Nn.prototype);ns.isPureReactComponent=!0;var ua=Array.isArray,Ru=Object.prototype.hasOwnProperty,rs={current:null},Mu={key:!0,ref:!0,__self:!0,__source:!0};function $u(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Ru.call(t,r)&&!Mu.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Sr,type:e,key:o,ref:i,props:l,_owner:rs.current}}function Ld(e,t){return{$$typeof:Sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ls(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sr}function Td(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ca=/\/+/g;function Po(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Td(""+e.key):t.toString(36)}function Gr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Sr:case xd:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Po(i,0):r,ua(l)?(n="",e!=null&&(n=e.replace(ca,"$&/")+"/"),Gr(l,t,n,"",function(c){return c})):l!=null&&(ls(l)&&(l=Ld(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(ca,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",ua(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+Po(o,s);i+=Gr(o,t,n,a,l)}else if(a=Od(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+Po(o,s++),i+=Gr(o,t,n,a,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function zr(e,t,n){if(e==null)return e;var r=[],l=0;return Gr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Id(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},Zr={transition:null},Rd={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Zr,ReactCurrentOwner:rs};function Du(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:zr,forEach:function(e,t,n){zr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return zr(e,function(){t++}),t},toArray:function(e){return zr(e,function(t){return t})||[]},only:function(e){if(!ls(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Nn;I.Fragment=Sd;I.Profiler=Cd;I.PureComponent=ts;I.StrictMode=kd;I.Suspense=_d;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rd;I.act=Du;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lu({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=rs.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Ru.call(t,a)&&!Mu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Sr,type:e.type,key:l,ref:o,props:r,_owner:i}};I.createContext=function(e){return e={$$typeof:jd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ed,_context:e},e.Consumer=e};I.createElement=$u;I.createFactory=function(e){var t=$u.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Nd,render:e}};I.isValidElement=ls;I.lazy=function(e){return{$$typeof:zd,_payload:{_status:-1,_result:e},_init:Id}};I.memo=function(e,t){return{$$typeof:Pd,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Zr.transition;Zr.transition={};try{e()}finally{Zr.transition=t}};I.unstable_act=Du;I.useCallback=function(e,t){return we.current.useCallback(e,t)};I.useContext=function(e){return we.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return we.current.useDeferredValue(e)};I.useEffect=function(e,t){return we.current.useEffect(e,t)};I.useId=function(){return we.current.useId()};I.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return we.current.useMemo(e,t)};I.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};I.useRef=function(e){return we.current.useRef(e)};I.useState=function(e){return we.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return we.current.useTransition()};I.version="18.3.1";zu.exports=I;var T=zu.exports;const at=wd(T),fa=gd({__proto__:null,default:at},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md=T,$d=Symbol.for("react.element"),Dd=Symbol.for("react.fragment"),Fd=Object.prototype.hasOwnProperty,Ad=Md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bd={key:!0,ref:!0,__self:!0,__source:!0};function Fu(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Fd.call(t,r)&&!Bd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:$d,type:e,key:o,ref:i,props:l,_owner:Ad.current}}Fl.Fragment=Dd;Fl.jsx=Fu;Fl.jsxs=Fu;Pu.exports=Fl;var p=Pu.exports,ni={},Au={exports:{}},Te={},Bu={exports:{}},Uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,O){var L=_.length;_.push(O);e:for(;0<L;){var Z=L-1>>>1,ne=_[Z];if(0<l(ne,O))_[Z]=O,_[L]=ne,L=Z;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var O=_[0],L=_.pop();if(L!==O){_[0]=L;e:for(var Z=0,ne=_.length,_r=ne>>>1;Z<_r;){var Mt=2*(Z+1)-1,_o=_[Mt],$t=Mt+1,Pr=_[$t];if(0>l(_o,L))$t<ne&&0>l(Pr,_o)?(_[Z]=Pr,_[$t]=L,Z=$t):(_[Z]=_o,_[Mt]=L,Z=Mt);else if($t<ne&&0>l(Pr,L))_[Z]=Pr,_[$t]=L,Z=$t;else break e}}return O}function l(_,O){var L=_.sortIndex-O.sortIndex;return L!==0?L:_.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],c=[],h=1,m=null,v=3,x=!1,w=!1,y=!1,z=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(_){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=_)r(c),O.sortIndex=O.expirationTime,t(a,O);else break;O=n(c)}}function g(_){if(y=!1,d(_),!w)if(n(a)!==null)w=!0,jo(E);else{var O=n(c);O!==null&&No(g,O.startTime-_)}}function E(_,O){w=!1,y&&(y=!1,f(P),P=-1),x=!0;var L=v;try{for(d(O),m=n(a);m!==null&&(!(m.expirationTime>O)||_&&!Ve());){var Z=m.callback;if(typeof Z=="function"){m.callback=null,v=m.priorityLevel;var ne=Z(m.expirationTime<=O);O=e.unstable_now(),typeof ne=="function"?m.callback=ne:m===n(a)&&r(a),d(O)}else r(a);m=n(a)}if(m!==null)var _r=!0;else{var Mt=n(c);Mt!==null&&No(g,Mt.startTime-O),_r=!1}return _r}finally{m=null,v=L,x=!1}}var j=!1,C=null,P=-1,G=5,R=-1;function Ve(){return!(e.unstable_now()-R<G)}function On(){if(C!==null){var _=e.unstable_now();R=_;var O=!0;try{O=C(!0,_)}finally{O?Ln():(j=!1,C=null)}}else j=!1}var Ln;if(typeof u=="function")Ln=function(){u(On)};else if(typeof MessageChannel<"u"){var sa=new MessageChannel,yd=sa.port2;sa.port1.onmessage=On,Ln=function(){yd.postMessage(null)}}else Ln=function(){z(On,0)};function jo(_){C=_,j||(j=!0,Ln())}function No(_,O){P=z(function(){_(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,jo(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(_){switch(v){case 1:case 2:case 3:var O=3;break;default:O=v}var L=v;v=O;try{return _()}finally{v=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,O){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var L=v;v=_;try{return O()}finally{v=L}},e.unstable_scheduleCallback=function(_,O,L){var Z=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Z+L:Z):L=Z,_){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=L+ne,_={id:h++,callback:O,priorityLevel:_,startTime:L,expirationTime:ne,sortIndex:-1},L>Z?(_.sortIndex=L,t(c,_),n(a)===null&&_===n(c)&&(y?(f(P),P=-1):y=!0,No(g,L-Z))):(_.sortIndex=ne,t(a,_),w||x||(w=!0,jo(E))),_},e.unstable_shouldYield=Ve,e.unstable_wrapCallback=function(_){var O=v;return function(){var L=v;v=O;try{return _.apply(this,arguments)}finally{v=L}}}})(Uu);Bu.exports=Uu;var Ud=Bu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd=T,Le=Ud;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vu=new Set,er={};function Gt(e,t){gn(e,t),gn(e+"Capture",t)}function gn(e,t){for(er[e]=t,e=0;e<t.length;e++)Vu.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ri=Object.prototype.hasOwnProperty,Wd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,da={},pa={};function Hd(e){return ri.call(pa,e)?!0:ri.call(da,e)?!1:Wd.test(e)?pa[e]=!0:(da[e]=!0,!1)}function Qd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yd(e,t,n,r){if(t===null||typeof t>"u"||Qd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var os=/[\-:]([a-z])/g;function is(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(os,is);ce[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(os,is);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(os,is);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ss(e,t,n,r){var l=ce.hasOwnProperty(t)?ce[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yd(t,n,l,r)&&(n=null),r||l===null?Hd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=Vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Or=Symbol.for("react.element"),qt=Symbol.for("react.portal"),bt=Symbol.for("react.fragment"),as=Symbol.for("react.strict_mode"),li=Symbol.for("react.profiler"),Wu=Symbol.for("react.provider"),Hu=Symbol.for("react.context"),us=Symbol.for("react.forward_ref"),oi=Symbol.for("react.suspense"),ii=Symbol.for("react.suspense_list"),cs=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),Qu=Symbol.for("react.offscreen"),ma=Symbol.iterator;function Tn(e){return e===null||typeof e!="object"?null:(e=ma&&e[ma]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,zo;function Un(e){if(zo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zo=t&&t[1]||""}return`
`+zo+e}var Oo=!1;function Lo(e,t){if(!e||Oo)return"";Oo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Oo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Un(e):""}function Xd(e){switch(e.tag){case 5:return Un(e.type);case 16:return Un("Lazy");case 13:return Un("Suspense");case 19:return Un("SuspenseList");case 0:case 2:case 15:return e=Lo(e.type,!1),e;case 11:return e=Lo(e.type.render,!1),e;case 1:return e=Lo(e.type,!0),e;default:return""}}function si(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bt:return"Fragment";case qt:return"Portal";case li:return"Profiler";case as:return"StrictMode";case oi:return"Suspense";case ii:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hu:return(e.displayName||"Context")+".Consumer";case Wu:return(e._context.displayName||"Context")+".Provider";case us:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cs:return t=e.displayName||null,t!==null?t:si(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return si(e(t))}catch{}}return null}function Kd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return si(t);case 8:return t===as?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ot(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gd(e){var t=Yu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lr(e){e._valueTracker||(e._valueTracker=Gd(e))}function Xu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Yu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function cl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ai(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ha(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ot(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ku(e,t){t=t.checked,t!=null&&ss(e,"checked",t,!1)}function ui(e,t){Ku(e,t);var n=Ot(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ci(e,t.type,n):t.hasOwnProperty("defaultValue")&&ci(e,t.type,Ot(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function va(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ci(e,t,n){(t!=="number"||cl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vn=Array.isArray;function fn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ot(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function fi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ya(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Vn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ot(n)}}function Gu(e,t){var n=Ot(t.value),r=Ot(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ga(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function di(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tr,Ju=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tr=Tr||document.createElement("div"),Tr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zd=["Webkit","ms","Moz","O"];Object.keys(Qn).forEach(function(e){Zd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qn[t]=Qn[e]})});function qu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qn.hasOwnProperty(e)&&Qn[e]?(""+t).trim():t+"px"}function bu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=qu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Jd=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pi(e,t){if(t){if(Jd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function mi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hi=null;function fs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vi=null,dn=null,pn=null;function wa(e){if(e=Er(e)){if(typeof vi!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Wl(t),vi(e.stateNode,e.type,t))}}function ec(e){dn?pn?pn.push(e):pn=[e]:dn=e}function tc(){if(dn){var e=dn,t=pn;if(pn=dn=null,wa(e),t)for(e=0;e<t.length;e++)wa(t[e])}}function nc(e,t){return e(t)}function rc(){}var To=!1;function lc(e,t,n){if(To)return e(t,n);To=!0;try{return nc(e,t,n)}finally{To=!1,(dn!==null||pn!==null)&&(rc(),tc())}}function nr(e,t){var n=e.stateNode;if(n===null)return null;var r=Wl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var yi=!1;if(ct)try{var In={};Object.defineProperty(In,"passive",{get:function(){yi=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{yi=!1}function qd(e,t,n,r,l,o,i,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Yn=!1,fl=null,dl=!1,gi=null,bd={onError:function(e){Yn=!0,fl=e}};function e0(e,t,n,r,l,o,i,s,a){Yn=!1,fl=null,qd.apply(bd,arguments)}function t0(e,t,n,r,l,o,i,s,a){if(e0.apply(this,arguments),Yn){if(Yn){var c=fl;Yn=!1,fl=null}else throw Error(S(198));dl||(dl=!0,gi=c)}}function Zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function oc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xa(e){if(Zt(e)!==e)throw Error(S(188))}function n0(e){var t=e.alternate;if(!t){if(t=Zt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return xa(l),e;if(o===r)return xa(l),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function ic(e){return e=n0(e),e!==null?sc(e):null}function sc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sc(e);if(t!==null)return t;e=e.sibling}return null}var ac=Le.unstable_scheduleCallback,Sa=Le.unstable_cancelCallback,r0=Le.unstable_shouldYield,l0=Le.unstable_requestPaint,J=Le.unstable_now,o0=Le.unstable_getCurrentPriorityLevel,ds=Le.unstable_ImmediatePriority,uc=Le.unstable_UserBlockingPriority,pl=Le.unstable_NormalPriority,i0=Le.unstable_LowPriority,cc=Le.unstable_IdlePriority,Al=null,tt=null;function s0(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Al,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:c0,a0=Math.log,u0=Math.LN2;function c0(e){return e>>>=0,e===0?32:31-(a0(e)/u0|0)|0}var Ir=64,Rr=4194304;function Wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ml(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=Wn(s):(o&=i,o!==0&&(r=Wn(o)))}else i=n&~l,i!==0?r=Wn(i):o!==0&&(r=Wn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),l=1<<n,r|=e[n],t&=~l;return r}function f0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Xe(o),s=1<<i,a=l[i];a===-1?(!(s&n)||s&r)&&(l[i]=f0(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function wi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fc(){var e=Ir;return Ir<<=1,!(Ir&4194240)&&(Ir=64),e}function Io(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function p0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Xe(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function ps(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var F=0;function dc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pc,ms,mc,hc,vc,xi=!1,Mr=[],kt=null,Ct=null,Et=null,rr=new Map,lr=new Map,gt=[],m0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ka(e,t){switch(e){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":Et=null;break;case"pointerover":case"pointerout":rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(t.pointerId)}}function Rn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Er(t),t!==null&&ms(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function h0(e,t,n,r,l){switch(t){case"focusin":return kt=Rn(kt,e,t,n,r,l),!0;case"dragenter":return Ct=Rn(Ct,e,t,n,r,l),!0;case"mouseover":return Et=Rn(Et,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return rr.set(o,Rn(rr.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,lr.set(o,Rn(lr.get(o)||null,e,t,n,r,l)),!0}return!1}function yc(e){var t=At(e.target);if(t!==null){var n=Zt(t);if(n!==null){if(t=n.tag,t===13){if(t=oc(n),t!==null){e.blockedOn=t,vc(e.priority,function(){mc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Si(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hi=r,n.target.dispatchEvent(r),hi=null}else return t=Er(n),t!==null&&ms(t),e.blockedOn=n,!1;t.shift()}return!0}function Ca(e,t,n){Jr(e)&&n.delete(t)}function v0(){xi=!1,kt!==null&&Jr(kt)&&(kt=null),Ct!==null&&Jr(Ct)&&(Ct=null),Et!==null&&Jr(Et)&&(Et=null),rr.forEach(Ca),lr.forEach(Ca)}function Mn(e,t){e.blockedOn===t&&(e.blockedOn=null,xi||(xi=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,v0)))}function or(e){function t(l){return Mn(l,e)}if(0<Mr.length){Mn(Mr[0],e);for(var n=1;n<Mr.length;n++){var r=Mr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kt!==null&&Mn(kt,e),Ct!==null&&Mn(Ct,e),Et!==null&&Mn(Et,e),rr.forEach(t),lr.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)yc(n),n.blockedOn===null&&gt.shift()}var mn=mt.ReactCurrentBatchConfig,hl=!0;function y0(e,t,n,r){var l=F,o=mn.transition;mn.transition=null;try{F=1,hs(e,t,n,r)}finally{F=l,mn.transition=o}}function g0(e,t,n,r){var l=F,o=mn.transition;mn.transition=null;try{F=4,hs(e,t,n,r)}finally{F=l,mn.transition=o}}function hs(e,t,n,r){if(hl){var l=Si(e,t,n,r);if(l===null)Wo(e,t,r,vl,n),ka(e,r);else if(h0(l,e,t,n,r))r.stopPropagation();else if(ka(e,r),t&4&&-1<m0.indexOf(e)){for(;l!==null;){var o=Er(l);if(o!==null&&pc(o),o=Si(e,t,n,r),o===null&&Wo(e,t,r,vl,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Wo(e,t,r,null,n)}}var vl=null;function Si(e,t,n,r){if(vl=null,e=fs(r),e=At(e),e!==null)if(t=Zt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=oc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vl=e,null}function gc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(o0()){case ds:return 1;case uc:return 4;case pl:case i0:return 16;case cc:return 536870912;default:return 16}default:return 16}}var xt=null,vs=null,qr=null;function wc(){if(qr)return qr;var e,t=vs,n=t.length,r,l="value"in xt?xt.value:xt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return qr=l.slice(e,1<r?1-r:void 0)}function br(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $r(){return!0}function Ea(){return!1}function Ie(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?$r:Ea,this.isPropagationStopped=Ea,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$r)},persist:function(){},isPersistent:$r}),t}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ys=Ie(_n),Cr=X({},_n,{view:0,detail:0}),w0=Ie(Cr),Ro,Mo,$n,Bl=X({},Cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$n&&($n&&e.type==="mousemove"?(Ro=e.screenX-$n.screenX,Mo=e.screenY-$n.screenY):Mo=Ro=0,$n=e),Ro)},movementY:function(e){return"movementY"in e?e.movementY:Mo}}),ja=Ie(Bl),x0=X({},Bl,{dataTransfer:0}),S0=Ie(x0),k0=X({},Cr,{relatedTarget:0}),$o=Ie(k0),C0=X({},_n,{animationName:0,elapsedTime:0,pseudoElement:0}),E0=Ie(C0),j0=X({},_n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),N0=Ie(j0),_0=X({},_n,{data:0}),Na=Ie(_0),P0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=O0[e])?!!t[e]:!1}function gs(){return L0}var T0=X({},Cr,{key:function(e){if(e.key){var t=P0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?z0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gs,charCode:function(e){return e.type==="keypress"?br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),I0=Ie(T0),R0=X({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_a=Ie(R0),M0=X({},Cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gs}),$0=Ie(M0),D0=X({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0}),F0=Ie(D0),A0=X({},Bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),B0=Ie(A0),U0=[9,13,27,32],ws=ct&&"CompositionEvent"in window,Xn=null;ct&&"documentMode"in document&&(Xn=document.documentMode);var V0=ct&&"TextEvent"in window&&!Xn,xc=ct&&(!ws||Xn&&8<Xn&&11>=Xn),Pa=" ",za=!1;function Sc(e,t){switch(e){case"keyup":return U0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var en=!1;function W0(e,t){switch(e){case"compositionend":return kc(t);case"keypress":return t.which!==32?null:(za=!0,Pa);case"textInput":return e=t.data,e===Pa&&za?null:e;default:return null}}function H0(e,t){if(en)return e==="compositionend"||!ws&&Sc(e,t)?(e=wc(),qr=vs=xt=null,en=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xc&&t.locale!=="ko"?null:t.data;default:return null}}var Q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Q0[e.type]:t==="textarea"}function Cc(e,t,n,r){ec(r),t=yl(t,"onChange"),0<t.length&&(n=new ys("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,ir=null;function Y0(e){Rc(e,0)}function Ul(e){var t=rn(e);if(Xu(t))return e}function X0(e,t){if(e==="change")return t}var Ec=!1;if(ct){var Do;if(ct){var Fo="oninput"in document;if(!Fo){var La=document.createElement("div");La.setAttribute("oninput","return;"),Fo=typeof La.oninput=="function"}Do=Fo}else Do=!1;Ec=Do&&(!document.documentMode||9<document.documentMode)}function Ta(){Kn&&(Kn.detachEvent("onpropertychange",jc),ir=Kn=null)}function jc(e){if(e.propertyName==="value"&&Ul(ir)){var t=[];Cc(t,ir,e,fs(e)),lc(Y0,t)}}function K0(e,t,n){e==="focusin"?(Ta(),Kn=t,ir=n,Kn.attachEvent("onpropertychange",jc)):e==="focusout"&&Ta()}function G0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ul(ir)}function Z0(e,t){if(e==="click")return Ul(t)}function J0(e,t){if(e==="input"||e==="change")return Ul(t)}function q0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:q0;function sr(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ri.call(t,l)||!Ge(e[l],t[l]))return!1}return!0}function Ia(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ra(e,t){var n=Ia(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ia(n)}}function Nc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _c(){for(var e=window,t=cl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=cl(e.document)}return t}function xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function b0(e){var t=_c(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nc(n.ownerDocument.documentElement,n)){if(r!==null&&xs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Ra(n,o);var i=Ra(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ep=ct&&"documentMode"in document&&11>=document.documentMode,tn=null,ki=null,Gn=null,Ci=!1;function Ma(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ci||tn==null||tn!==cl(r)||(r=tn,"selectionStart"in r&&xs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gn&&sr(Gn,r)||(Gn=r,r=yl(ki,"onSelect"),0<r.length&&(t=new ys("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=tn)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nn={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionend:Dr("Transition","TransitionEnd")},Ao={},Pc={};ct&&(Pc=document.createElement("div").style,"AnimationEvent"in window||(delete nn.animationend.animation,delete nn.animationiteration.animation,delete nn.animationstart.animation),"TransitionEvent"in window||delete nn.transitionend.transition);function Vl(e){if(Ao[e])return Ao[e];if(!nn[e])return e;var t=nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pc)return Ao[e]=t[n];return e}var zc=Vl("animationend"),Oc=Vl("animationiteration"),Lc=Vl("animationstart"),Tc=Vl("transitionend"),Ic=new Map,$a="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){Ic.set(e,t),Gt(t,[e])}for(var Bo=0;Bo<$a.length;Bo++){var Uo=$a[Bo],tp=Uo.toLowerCase(),np=Uo[0].toUpperCase()+Uo.slice(1);Tt(tp,"on"+np)}Tt(zc,"onAnimationEnd");Tt(Oc,"onAnimationIteration");Tt(Lc,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(Tc,"onTransitionEnd");gn("onMouseEnter",["mouseout","mouseover"]);gn("onMouseLeave",["mouseout","mouseover"]);gn("onPointerEnter",["pointerout","pointerover"]);gn("onPointerLeave",["pointerout","pointerover"]);Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));function Da(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,t0(r,t,void 0,e),e.currentTarget=null}function Rc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==o&&l.isPropagationStopped())break e;Da(l,s,c),o=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,c=s.currentTarget,s=s.listener,a!==o&&l.isPropagationStopped())break e;Da(l,s,c),o=a}}}if(dl)throw e=gi,dl=!1,gi=null,e}function V(e,t){var n=t[Pi];n===void 0&&(n=t[Pi]=new Set);var r=e+"__bubble";n.has(r)||(Mc(t,e,2,!1),n.add(r))}function Vo(e,t,n){var r=0;t&&(r|=4),Mc(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Fr]){e[Fr]=!0,Vu.forEach(function(n){n!=="selectionchange"&&(rp.has(n)||Vo(n,!1,e),Vo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fr]||(t[Fr]=!0,Vo("selectionchange",!1,t))}}function Mc(e,t,n,r){switch(gc(t)){case 1:var l=y0;break;case 4:l=g0;break;default:l=hs}n=l.bind(null,t,n,e),l=void 0,!yi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Wo(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;s!==null;){if(i=At(s),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}s=s.parentNode}}r=r.return}lc(function(){var c=o,h=fs(n),m=[];e:{var v=Ic.get(e);if(v!==void 0){var x=ys,w=e;switch(e){case"keypress":if(br(n)===0)break e;case"keydown":case"keyup":x=I0;break;case"focusin":w="focus",x=$o;break;case"focusout":w="blur",x=$o;break;case"beforeblur":case"afterblur":x=$o;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ja;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=S0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=$0;break;case zc:case Oc:case Lc:x=E0;break;case Tc:x=F0;break;case"scroll":x=w0;break;case"wheel":x=B0;break;case"copy":case"cut":case"paste":x=N0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=_a}var y=(t&4)!==0,z=!y&&e==="scroll",f=y?v!==null?v+"Capture":null:v;y=[];for(var u=c,d;u!==null;){d=u;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,f!==null&&(g=nr(u,f),g!=null&&y.push(ur(u,g,d)))),z)break;u=u.return}0<y.length&&(v=new x(v,w,null,n,h),m.push({event:v,listeners:y}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",v&&n!==hi&&(w=n.relatedTarget||n.fromElement)&&(At(w)||w[ft]))break e;if((x||v)&&(v=h.window===h?h:(v=h.ownerDocument)?v.defaultView||v.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=c,w=w?At(w):null,w!==null&&(z=Zt(w),w!==z||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=c),x!==w)){if(y=ja,g="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=_a,g="onPointerLeave",f="onPointerEnter",u="pointer"),z=x==null?v:rn(x),d=w==null?v:rn(w),v=new y(g,u+"leave",x,n,h),v.target=z,v.relatedTarget=d,g=null,At(h)===c&&(y=new y(f,u+"enter",w,n,h),y.target=d,y.relatedTarget=z,g=y),z=g,x&&w)t:{for(y=x,f=w,u=0,d=y;d;d=Jt(d))u++;for(d=0,g=f;g;g=Jt(g))d++;for(;0<u-d;)y=Jt(y),u--;for(;0<d-u;)f=Jt(f),d--;for(;u--;){if(y===f||f!==null&&y===f.alternate)break t;y=Jt(y),f=Jt(f)}y=null}else y=null;x!==null&&Fa(m,v,x,y,!1),w!==null&&z!==null&&Fa(m,z,w,y,!0)}}e:{if(v=c?rn(c):window,x=v.nodeName&&v.nodeName.toLowerCase(),x==="select"||x==="input"&&v.type==="file")var E=X0;else if(Oa(v))if(Ec)E=J0;else{E=G0;var j=K0}else(x=v.nodeName)&&x.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(E=Z0);if(E&&(E=E(e,c))){Cc(m,E,n,h);break e}j&&j(e,v,c),e==="focusout"&&(j=v._wrapperState)&&j.controlled&&v.type==="number"&&ci(v,"number",v.value)}switch(j=c?rn(c):window,e){case"focusin":(Oa(j)||j.contentEditable==="true")&&(tn=j,ki=c,Gn=null);break;case"focusout":Gn=ki=tn=null;break;case"mousedown":Ci=!0;break;case"contextmenu":case"mouseup":case"dragend":Ci=!1,Ma(m,n,h);break;case"selectionchange":if(ep)break;case"keydown":case"keyup":Ma(m,n,h)}var C;if(ws)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else en?Sc(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(xc&&n.locale!=="ko"&&(en||P!=="onCompositionStart"?P==="onCompositionEnd"&&en&&(C=wc()):(xt=h,vs="value"in xt?xt.value:xt.textContent,en=!0)),j=yl(c,P),0<j.length&&(P=new Na(P,e,null,n,h),m.push({event:P,listeners:j}),C?P.data=C:(C=kc(n),C!==null&&(P.data=C)))),(C=V0?W0(e,n):H0(e,n))&&(c=yl(c,"onBeforeInput"),0<c.length&&(h=new Na("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=C))}Rc(m,t)})}function ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=nr(e,n),o!=null&&r.unshift(ur(e,o,l)),o=nr(e,t),o!=null&&r.push(ur(e,o,l))),e=e.return}return r}function Jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fa(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,l?(a=nr(n,o),a!=null&&i.unshift(ur(n,a,s))):l||(a=nr(n,o),a!=null&&i.push(ur(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var lp=/\r\n?/g,op=/\u0000|\uFFFD/g;function Aa(e){return(typeof e=="string"?e:""+e).replace(lp,`
`).replace(op,"")}function Ar(e,t,n){if(t=Aa(t),Aa(e)!==t&&n)throw Error(S(425))}function gl(){}var Ei=null,ji=null;function Ni(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _i=typeof setTimeout=="function"?setTimeout:void 0,ip=typeof clearTimeout=="function"?clearTimeout:void 0,Ba=typeof Promise=="function"?Promise:void 0,sp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ba<"u"?function(e){return Ba.resolve(null).then(e).catch(ap)}:_i;function ap(e){setTimeout(function(){throw e})}function Ho(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);or(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ua(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),et="__reactFiber$"+Pn,cr="__reactProps$"+Pn,ft="__reactContainer$"+Pn,Pi="__reactEvents$"+Pn,up="__reactListeners$"+Pn,cp="__reactHandles$"+Pn;function At(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ua(e);e!==null;){if(n=e[et])return n;e=Ua(e)}return t}e=n,n=e.parentNode}return null}function Er(e){return e=e[et]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Wl(e){return e[cr]||null}var zi=[],ln=-1;function It(e){return{current:e}}function W(e){0>ln||(e.current=zi[ln],zi[ln]=null,ln--)}function U(e,t){ln++,zi[ln]=e.current,e.current=t}var Lt={},he=It(Lt),Ce=It(!1),Ht=Lt;function wn(e,t){var n=e.type.contextTypes;if(!n)return Lt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ee(e){return e=e.childContextTypes,e!=null}function wl(){W(Ce),W(he)}function Va(e,t,n){if(he.current!==Lt)throw Error(S(168));U(he,t),U(Ce,n)}function $c(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,Kd(e)||"Unknown",l));return X({},n,r)}function xl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,Ht=he.current,U(he,e),U(Ce,Ce.current),!0}function Wa(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=$c(e,t,Ht),r.__reactInternalMemoizedMergedChildContext=e,W(Ce),W(he),U(he,e)):W(Ce),U(Ce,n)}var ot=null,Hl=!1,Qo=!1;function Dc(e){ot===null?ot=[e]:ot.push(e)}function fp(e){Hl=!0,Dc(e)}function Rt(){if(!Qo&&ot!==null){Qo=!0;var e=0,t=F;try{var n=ot;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ot=null,Hl=!1}catch(l){throw ot!==null&&(ot=ot.slice(e+1)),ac(ds,Rt),l}finally{F=t,Qo=!1}}return null}var on=[],sn=0,Sl=null,kl=0,Me=[],$e=0,Qt=null,it=1,st="";function Dt(e,t){on[sn++]=kl,on[sn++]=Sl,Sl=e,kl=t}function Fc(e,t,n){Me[$e++]=it,Me[$e++]=st,Me[$e++]=Qt,Qt=e;var r=it;e=st;var l=32-Xe(r)-1;r&=~(1<<l),n+=1;var o=32-Xe(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,it=1<<32-Xe(t)+l|n<<l|r,st=o+e}else it=1<<o|n<<l|r,st=e}function Ss(e){e.return!==null&&(Dt(e,1),Fc(e,1,0))}function ks(e){for(;e===Sl;)Sl=on[--sn],on[sn]=null,kl=on[--sn],on[sn]=null;for(;e===Qt;)Qt=Me[--$e],Me[$e]=null,st=Me[--$e],Me[$e]=null,it=Me[--$e],Me[$e]=null}var ze=null,Pe=null,H=!1,Ye=null;function Ac(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ha(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Pe=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qt!==null?{id:it,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Pe=null,!0):!1;default:return!1}}function Oi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Li(e){if(H){var t=Pe;if(t){var n=t;if(!Ha(e,t)){if(Oi(e))throw Error(S(418));t=jt(n.nextSibling);var r=ze;t&&Ha(e,t)?Ac(r,n):(e.flags=e.flags&-4097|2,H=!1,ze=e)}}else{if(Oi(e))throw Error(S(418));e.flags=e.flags&-4097|2,H=!1,ze=e}}}function Qa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Br(e){if(e!==ze)return!1;if(!H)return Qa(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ni(e.type,e.memoizedProps)),t&&(t=Pe)){if(Oi(e))throw Bc(),Error(S(418));for(;t;)Ac(e,t),t=jt(t.nextSibling)}if(Qa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=ze?jt(e.stateNode.nextSibling):null;return!0}function Bc(){for(var e=Pe;e;)e=jt(e.nextSibling)}function xn(){Pe=ze=null,H=!1}function Cs(e){Ye===null?Ye=[e]:Ye.push(e)}var dp=mt.ReactCurrentBatchConfig;function Dn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Ur(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ya(e){var t=e._init;return t(e._payload)}function Uc(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function l(f,u){return f=zt(f,u),f.index=0,f.sibling=null,f}function o(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,d,g){return u===null||u.tag!==6?(u=qo(d,f.mode,g),u.return=f,u):(u=l(u,d),u.return=f,u)}function a(f,u,d,g){var E=d.type;return E===bt?h(f,u,d.props.children,g,d.key):u!==null&&(u.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===vt&&Ya(E)===u.type)?(g=l(u,d.props),g.ref=Dn(f,u,d),g.return=f,g):(g=il(d.type,d.key,d.props,null,f.mode,g),g.ref=Dn(f,u,d),g.return=f,g)}function c(f,u,d,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=bo(d,f.mode,g),u.return=f,u):(u=l(u,d.children||[]),u.return=f,u)}function h(f,u,d,g,E){return u===null||u.tag!==7?(u=Wt(d,f.mode,g,E),u.return=f,u):(u=l(u,d),u.return=f,u)}function m(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=qo(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Or:return d=il(u.type,u.key,u.props,null,f.mode,d),d.ref=Dn(f,null,u),d.return=f,d;case qt:return u=bo(u,f.mode,d),u.return=f,u;case vt:var g=u._init;return m(f,g(u._payload),d)}if(Vn(u)||Tn(u))return u=Wt(u,f.mode,d,null),u.return=f,u;Ur(f,u)}return null}function v(f,u,d,g){var E=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:s(f,u,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Or:return d.key===E?a(f,u,d,g):null;case qt:return d.key===E?c(f,u,d,g):null;case vt:return E=d._init,v(f,u,E(d._payload),g)}if(Vn(d)||Tn(d))return E!==null?null:h(f,u,d,g,null);Ur(f,d)}return null}function x(f,u,d,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(d)||null,s(u,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Or:return f=f.get(g.key===null?d:g.key)||null,a(u,f,g,E);case qt:return f=f.get(g.key===null?d:g.key)||null,c(u,f,g,E);case vt:var j=g._init;return x(f,u,d,j(g._payload),E)}if(Vn(g)||Tn(g))return f=f.get(d)||null,h(u,f,g,E,null);Ur(u,g)}return null}function w(f,u,d,g){for(var E=null,j=null,C=u,P=u=0,G=null;C!==null&&P<d.length;P++){C.index>P?(G=C,C=null):G=C.sibling;var R=v(f,C,d[P],g);if(R===null){C===null&&(C=G);break}e&&C&&R.alternate===null&&t(f,C),u=o(R,u,P),j===null?E=R:j.sibling=R,j=R,C=G}if(P===d.length)return n(f,C),H&&Dt(f,P),E;if(C===null){for(;P<d.length;P++)C=m(f,d[P],g),C!==null&&(u=o(C,u,P),j===null?E=C:j.sibling=C,j=C);return H&&Dt(f,P),E}for(C=r(f,C);P<d.length;P++)G=x(C,f,P,d[P],g),G!==null&&(e&&G.alternate!==null&&C.delete(G.key===null?P:G.key),u=o(G,u,P),j===null?E=G:j.sibling=G,j=G);return e&&C.forEach(function(Ve){return t(f,Ve)}),H&&Dt(f,P),E}function y(f,u,d,g){var E=Tn(d);if(typeof E!="function")throw Error(S(150));if(d=E.call(d),d==null)throw Error(S(151));for(var j=E=null,C=u,P=u=0,G=null,R=d.next();C!==null&&!R.done;P++,R=d.next()){C.index>P?(G=C,C=null):G=C.sibling;var Ve=v(f,C,R.value,g);if(Ve===null){C===null&&(C=G);break}e&&C&&Ve.alternate===null&&t(f,C),u=o(Ve,u,P),j===null?E=Ve:j.sibling=Ve,j=Ve,C=G}if(R.done)return n(f,C),H&&Dt(f,P),E;if(C===null){for(;!R.done;P++,R=d.next())R=m(f,R.value,g),R!==null&&(u=o(R,u,P),j===null?E=R:j.sibling=R,j=R);return H&&Dt(f,P),E}for(C=r(f,C);!R.done;P++,R=d.next())R=x(C,f,P,R.value,g),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?P:R.key),u=o(R,u,P),j===null?E=R:j.sibling=R,j=R);return e&&C.forEach(function(On){return t(f,On)}),H&&Dt(f,P),E}function z(f,u,d,g){if(typeof d=="object"&&d!==null&&d.type===bt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Or:e:{for(var E=d.key,j=u;j!==null;){if(j.key===E){if(E=d.type,E===bt){if(j.tag===7){n(f,j.sibling),u=l(j,d.props.children),u.return=f,f=u;break e}}else if(j.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===vt&&Ya(E)===j.type){n(f,j.sibling),u=l(j,d.props),u.ref=Dn(f,j,d),u.return=f,f=u;break e}n(f,j);break}else t(f,j);j=j.sibling}d.type===bt?(u=Wt(d.props.children,f.mode,g,d.key),u.return=f,f=u):(g=il(d.type,d.key,d.props,null,f.mode,g),g.ref=Dn(f,u,d),g.return=f,f=g)}return i(f);case qt:e:{for(j=d.key;u!==null;){if(u.key===j)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=l(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=bo(d,f.mode,g),u.return=f,f=u}return i(f);case vt:return j=d._init,z(f,u,j(d._payload),g)}if(Vn(d))return w(f,u,d,g);if(Tn(d))return y(f,u,d,g);Ur(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=l(u,d),u.return=f,f=u):(n(f,u),u=qo(d,f.mode,g),u.return=f,f=u),i(f)):n(f,u)}return z}var Sn=Uc(!0),Vc=Uc(!1),Cl=It(null),El=null,an=null,Es=null;function js(){Es=an=El=null}function Ns(e){var t=Cl.current;W(Cl),e._currentValue=t}function Ti(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hn(e,t){El=e,Es=an=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Es!==e)if(e={context:e,memoizedValue:t,next:null},an===null){if(El===null)throw Error(S(308));an=e,El.dependencies={lanes:0,firstContext:e}}else an=an.next=e;return t}var Bt=null;function _s(e){Bt===null?Bt=[e]:Bt.push(e)}function Wc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,_s(t)):(n.next=l.next,l.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yt=!1;function Ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,dt(e,n)}return l=r.interleaved,l===null?(t.next=t,_s(r)):(t.next=l.next,l.next=t),r.interleaved=t,dt(e,n)}function el(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ps(e,n)}}function Xa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function jl(e,t,n,r){var l=e.updateQueue;yt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,c=a.next;a.next=null,i===null?o=c:i.next=c,i=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==i&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=a))}if(o!==null){var m=l.baseState;i=0,h=c=a=null,s=o;do{var v=s.lane,x=s.eventTime;if((r&v)===v){h!==null&&(h=h.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,y=s;switch(v=t,x=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){m=w.call(x,m,v);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,v=typeof w=="function"?w.call(x,m,v):w,v==null)break e;m=X({},m,v);break e;case 2:yt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=l.effects,v===null?l.effects=[s]:v.push(s))}else x={eventTime:x,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=x,a=m):h=h.next=x,i|=v;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;v=s,s=v.next,v.next=null,l.lastBaseUpdate=v,l.shared.pending=null}}while(!0);if(h===null&&(a=m),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Xt|=i,e.lanes=i,e.memoizedState=m}}function Ka(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var jr={},nt=It(jr),fr=It(jr),dr=It(jr);function Ut(e){if(e===jr)throw Error(S(174));return e}function zs(e,t){switch(U(dr,t),U(fr,e),U(nt,jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:di(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=di(t,e)}W(nt),U(nt,t)}function kn(){W(nt),W(fr),W(dr)}function Qc(e){Ut(dr.current);var t=Ut(nt.current),n=di(t,e.type);t!==n&&(U(fr,e),U(nt,n))}function Os(e){fr.current===e&&(W(nt),W(fr))}var Q=It(0);function Nl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yo=[];function Ls(){for(var e=0;e<Yo.length;e++)Yo[e]._workInProgressVersionPrimary=null;Yo.length=0}var tl=mt.ReactCurrentDispatcher,Xo=mt.ReactCurrentBatchConfig,Yt=0,Y=null,ee=null,le=null,_l=!1,Zn=!1,pr=0,pp=0;function fe(){throw Error(S(321))}function Ts(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function Is(e,t,n,r,l,o){if(Yt=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,tl.current=e===null||e.memoizedState===null?yp:gp,e=n(r,l),Zn){o=0;do{if(Zn=!1,pr=0,25<=o)throw Error(S(301));o+=1,le=ee=null,t.updateQueue=null,tl.current=wp,e=n(r,l)}while(Zn)}if(tl.current=Pl,t=ee!==null&&ee.next!==null,Yt=0,le=ee=Y=null,_l=!1,t)throw Error(S(300));return e}function Rs(){var e=pr!==0;return pr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Y.memoizedState=le=e:le=le.next=e,le}function Be(){if(ee===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=le===null?Y.memoizedState:le.next;if(t!==null)le=t,ee=e;else{if(e===null)throw Error(S(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},le===null?Y.memoizedState=le=e:le=le.next=e}return le}function mr(e,t){return typeof t=="function"?t(e):t}function Ko(e){var t=Be(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ee,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,a=null,c=o;do{var h=c.lane;if((Yt&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=m,i=r):a=a.next=m,Y.lanes|=h,Xt|=h}c=c.next}while(c!==null&&c!==o);a===null?i=r:a.next=s,Ge(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,Y.lanes|=o,Xt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Go(e){var t=Be(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Ge(o,t.memoizedState)||(ke=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Yc(){}function Xc(e,t){var n=Y,r=Be(),l=t(),o=!Ge(r.memoizedState,l);if(o&&(r.memoizedState=l,ke=!0),r=r.queue,Ms(Zc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,hr(9,Gc.bind(null,n,r,l,t),void 0,null),oe===null)throw Error(S(349));Yt&30||Kc(n,t,l)}return l}function Kc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gc(e,t,n,r){t.value=n,t.getSnapshot=r,Jc(t)&&qc(e)}function Zc(e,t,n){return n(function(){Jc(t)&&qc(e)})}function Jc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function qc(e){var t=dt(e,1);t!==null&&Ke(t,e,1,-1)}function Ga(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},t.queue=e,e=e.dispatch=vp.bind(null,Y,e),[t.memoizedState,e]}function hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bc(){return Be().memoizedState}function nl(e,t,n,r){var l=Je();Y.flags|=e,l.memoizedState=hr(1|t,n,void 0,r===void 0?null:r)}function Ql(e,t,n,r){var l=Be();r=r===void 0?null:r;var o=void 0;if(ee!==null){var i=ee.memoizedState;if(o=i.destroy,r!==null&&Ts(r,i.deps)){l.memoizedState=hr(t,n,o,r);return}}Y.flags|=e,l.memoizedState=hr(1|t,n,o,r)}function Za(e,t){return nl(8390656,8,e,t)}function Ms(e,t){return Ql(2048,8,e,t)}function ef(e,t){return Ql(4,2,e,t)}function tf(e,t){return Ql(4,4,e,t)}function nf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rf(e,t,n){return n=n!=null?n.concat([e]):null,Ql(4,4,nf.bind(null,t,e),n)}function $s(){}function lf(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ts(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function of(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ts(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sf(e,t,n){return Yt&21?(Ge(n,t)||(n=fc(),Y.lanes|=n,Xt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function mp(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Xo.transition;Xo.transition={};try{e(!1),t()}finally{F=n,Xo.transition=r}}function af(){return Be().memoizedState}function hp(e,t,n){var r=Pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uf(e))cf(t,n);else if(n=Wc(e,t,n,r),n!==null){var l=ge();Ke(n,e,r,l),ff(n,t,r)}}function vp(e,t,n){var r=Pt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uf(e))cf(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,Ge(s,i)){var a=t.interleaved;a===null?(l.next=l,_s(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=Wc(e,t,l,r),n!==null&&(l=ge(),Ke(n,e,r,l),ff(n,t,r))}}function uf(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function cf(e,t){Zn=_l=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ff(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ps(e,n)}}var Pl={readContext:Ae,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},yp={readContext:Ae,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Za,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,nl(4194308,4,nf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return nl(4194308,4,e,t)},useInsertionEffect:function(e,t){return nl(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hp.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:Ga,useDebugValue:$s,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Ga(!1),t=e[0];return e=mp.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,l=Je();if(H){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),oe===null)throw Error(S(349));Yt&30||Kc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Za(Zc.bind(null,r,o,e),[e]),r.flags|=2048,hr(9,Gc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Je(),t=oe.identifierPrefix;if(H){var n=st,r=it;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gp={readContext:Ae,useCallback:lf,useContext:Ae,useEffect:Ms,useImperativeHandle:rf,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:of,useReducer:Ko,useRef:bc,useState:function(){return Ko(mr)},useDebugValue:$s,useDeferredValue:function(e){var t=Be();return sf(t,ee.memoizedState,e)},useTransition:function(){var e=Ko(mr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Yc,useSyncExternalStore:Xc,useId:af,unstable_isNewReconciler:!1},wp={readContext:Ae,useCallback:lf,useContext:Ae,useEffect:Ms,useImperativeHandle:rf,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:of,useReducer:Go,useRef:bc,useState:function(){return Go(mr)},useDebugValue:$s,useDeferredValue:function(e){var t=Be();return ee===null?t.memoizedState=e:sf(t,ee.memoizedState,e)},useTransition:function(){var e=Go(mr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Yc,useSyncExternalStore:Xc,useId:af,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ii(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yl={isMounted:function(e){return(e=e._reactInternals)?Zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),l=Pt(e),o=ut(r,l);o.payload=t,n!=null&&(o.callback=n),t=Nt(e,o,l),t!==null&&(Ke(t,e,l,r),el(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),l=Pt(e),o=ut(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Nt(e,o,l),t!==null&&(Ke(t,e,l,r),el(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=Pt(e),l=ut(n,r);l.tag=2,t!=null&&(l.callback=t),t=Nt(e,l,r),t!==null&&(Ke(t,e,r,n),el(t,e,r))}};function Ja(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!sr(n,r)||!sr(l,o):!0}function df(e,t,n){var r=!1,l=Lt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ae(o):(l=Ee(t)?Ht:he.current,r=t.contextTypes,o=(r=r!=null)?wn(e,l):Lt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function qa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yl.enqueueReplaceState(t,t.state,null)}function Ri(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ps(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ae(o):(o=Ee(t)?Ht:he.current,l.context=wn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ii(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Yl.enqueueReplaceState(l,l.state,null),jl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Cn(e,t){try{var n="",r=t;do n+=Xd(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Zo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Mi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xp=typeof WeakMap=="function"?WeakMap:Map;function pf(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ol||(Ol=!0,Qi=r),Mi(e,t)},n}function mf(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Mi(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Mi(e,t),typeof r!="function"&&(_t===null?_t=new Set([this]):_t.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function ba(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Rp.bind(null,e,t,n),t.then(e,e))}function eu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var Sp=mt.ReactCurrentOwner,ke=!1;function ye(e,t,n,r){t.child=e===null?Vc(t,null,n,r):Sn(t,e.child,n,r)}function nu(e,t,n,r,l){n=n.render;var o=t.ref;return hn(t,l),r=Is(e,t,n,r,o,l),n=Rs(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,pt(e,t,l)):(H&&n&&Ss(t),t.flags|=1,ye(e,t,r,l),t.child)}function ru(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Hs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,hf(e,t,o,r,l)):(e=il(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:sr,n(i,r)&&e.ref===t.ref)return pt(e,t,l)}return t.flags|=1,e=zt(o,r),e.ref=t.ref,e.return=t,t.child=e}function hf(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,pt(e,t,l)}return $i(e,t,n,r,l)}function vf(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(cn,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(cn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(cn,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(cn,_e),_e|=r;return ye(e,t,l,n),t.child}function yf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $i(e,t,n,r,l){var o=Ee(n)?Ht:he.current;return o=wn(t,o),hn(t,l),n=Is(e,t,n,r,o,l),r=Rs(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,pt(e,t,l)):(H&&r&&Ss(t),t.flags|=1,ye(e,t,n,l),t.child)}function lu(e,t,n,r,l){if(Ee(n)){var o=!0;xl(t)}else o=!1;if(hn(t,l),t.stateNode===null)rl(e,t),df(t,n,r),Ri(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ae(c):(c=Ee(n)?Ht:he.current,c=wn(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==c)&&qa(t,i,r,c),yt=!1;var v=t.memoizedState;i.state=v,jl(t,r,i,l),a=t.memoizedState,s!==r||v!==a||Ce.current||yt?(typeof h=="function"&&(Ii(t,n,h,r),a=t.memoizedState),(s=yt||Ja(t,n,s,r,v,a,c))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Hc(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:He(t.type,s),i.props=c,m=t.pendingProps,v=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ae(a):(a=Ee(n)?Ht:he.current,a=wn(t,a));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==m||v!==a)&&qa(t,i,r,a),yt=!1,v=t.memoizedState,i.state=v,jl(t,r,i,l);var w=t.memoizedState;s!==m||v!==w||Ce.current||yt?(typeof x=="function"&&(Ii(t,n,x,r),w=t.memoizedState),(c=yt||Ja(t,n,c,r,v,w,a)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Di(e,t,n,r,o,l)}function Di(e,t,n,r,l,o){yf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&Wa(t,n,!1),pt(e,t,o);r=t.stateNode,Sp.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Sn(t,e.child,null,o),t.child=Sn(t,null,s,o)):ye(e,t,s,o),t.memoizedState=r.state,l&&Wa(t,n,!0),t.child}function gf(e){var t=e.stateNode;t.pendingContext?Va(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Va(e,t.context,!1),zs(e,t.containerInfo)}function ou(e,t,n,r,l){return xn(),Cs(l),t.flags|=256,ye(e,t,n,r),t.child}var Fi={dehydrated:null,treeContext:null,retryLane:0};function Ai(e){return{baseLanes:e,cachePool:null,transitions:null}}function wf(e,t,n){var r=t.pendingProps,l=Q.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(Q,l&1),e===null)return Li(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Gl(i,r,0,null),e=Wt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ai(n),t.memoizedState=Fi,e):Ds(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return kp(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=zt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=zt(s,o):(o=Wt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Ai(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Fi,r}return o=e.child,e=o.sibling,r=zt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ds(e,t){return t=Gl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vr(e,t,n,r){return r!==null&&Cs(r),Sn(t,e.child,null,n),e=Ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kp(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Zo(Error(S(422))),Vr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Gl({mode:"visible",children:r.children},l,0,null),o=Wt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Sn(t,e.child,null,i),t.child.memoizedState=Ai(i),t.memoizedState=Fi,o);if(!(t.mode&1))return Vr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(S(419)),r=Zo(o,r,void 0),Vr(e,t,i,r)}if(s=(i&e.childLanes)!==0,ke||s){if(r=oe,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,dt(e,l),Ke(r,e,l,-1))}return Ws(),r=Zo(Error(S(421))),Vr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Mp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Pe=jt(l.nextSibling),ze=t,H=!0,Ye=null,e!==null&&(Me[$e++]=it,Me[$e++]=st,Me[$e++]=Qt,it=e.id,st=e.overflow,Qt=t),t=Ds(t,r.children),t.flags|=4096,t)}function iu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ti(e.return,t,n)}function Jo(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function xf(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ye(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&iu(e,n,t);else if(e.tag===19)iu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Q,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Nl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Jo(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Nl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Jo(t,!0,n,null,o);break;case"together":Jo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function rl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cp(e,t,n){switch(t.tag){case 3:gf(t),xn();break;case 5:Qc(t);break;case 1:Ee(t.type)&&xl(t);break;case 4:zs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;U(Cl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?wf(e,t,n):(U(Q,Q.current&1),e=pt(e,t,n),e!==null?e.sibling:null);U(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xf(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,vf(e,t,n)}return pt(e,t,n)}var Sf,Bi,kf,Cf;Sf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bi=function(){};kf=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ut(nt.current);var o=null;switch(n){case"input":l=ai(e,l),r=ai(e,r),o=[];break;case"select":l=X({},l,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":l=fi(e,l),r=fi(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=gl)}pi(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(er.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(er.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&V("scroll",e),o||s===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Cf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ep(e,t,n){var r=t.pendingProps;switch(ks(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return Ee(t.type)&&wl(),de(t),null;case 3:return r=t.stateNode,kn(),W(Ce),W(he),Ls(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(Ki(Ye),Ye=null))),Bi(e,t),de(t),null;case 5:Os(t);var l=Ut(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)kf(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return de(t),null}if(e=Ut(nt.current),Br(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[et]=t,r[cr]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(l=0;l<Hn.length;l++)V(Hn[l],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":ha(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":ya(r,o),V("invalid",r)}pi(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Ar(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Ar(r.textContent,s,e),l=["children",""+s]):er.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&V("scroll",r)}switch(n){case"input":Lr(r),va(r,o,!0);break;case"textarea":Lr(r),ga(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=gl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[et]=t,e[cr]=r,Sf(e,t,!1,!1),t.stateNode=e;e:{switch(i=mi(n,r),n){case"dialog":V("cancel",e),V("close",e),l=r;break;case"iframe":case"object":case"embed":V("load",e),l=r;break;case"video":case"audio":for(l=0;l<Hn.length;l++)V(Hn[l],e);l=r;break;case"source":V("error",e),l=r;break;case"img":case"image":case"link":V("error",e),V("load",e),l=r;break;case"details":V("toggle",e),l=r;break;case"input":ha(e,r),l=ai(e,r),V("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=X({},r,{value:void 0}),V("invalid",e);break;case"textarea":ya(e,r),l=fi(e,r),V("invalid",e);break;default:l=r}pi(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?bu(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ju(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&tr(e,a):typeof a=="number"&&tr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(er.hasOwnProperty(o)?a!=null&&o==="onScroll"&&V("scroll",e):a!=null&&ss(e,o,a,i))}switch(n){case"input":Lr(e),va(e,r,!1);break;case"textarea":Lr(e),ga(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ot(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?fn(e,!!r.multiple,o,!1):r.defaultValue!=null&&fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)Cf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Ut(dr.current),Ut(nt.current),Br(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(o=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:Ar(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ar(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return de(t),null;case 13:if(W(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Pe!==null&&t.mode&1&&!(t.flags&128))Bc(),xn(),t.flags|=98560,o=!1;else if(o=Br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[et]=t}else xn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),o=!1}else Ye!==null&&(Ki(Ye),Ye=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?te===0&&(te=3):Ws())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return kn(),Bi(e,t),e===null&&ar(t.stateNode.containerInfo),de(t),null;case 10:return Ns(t.type._context),de(t),null;case 17:return Ee(t.type)&&wl(),de(t),null;case 19:if(W(Q),o=t.memoizedState,o===null)return de(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)Fn(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Nl(e),i!==null){for(t.flags|=128,Fn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>En&&(t.flags|=128,r=!0,Fn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Nl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!H)return de(t),null}else 2*J()-o.renderingStartTime>En&&n!==1073741824&&(t.flags|=128,r=!0,Fn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=Q.current,U(Q,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Vs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function jp(e,t){switch(ks(t),t.tag){case 1:return Ee(t.type)&&wl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kn(),W(Ce),W(he),Ls(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Os(t),null;case 13:if(W(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Q),null;case 4:return kn(),null;case 10:return Ns(t.type._context),null;case 22:case 23:return Vs(),null;case 24:return null;default:return null}}var Wr=!1,me=!1,Np=typeof WeakSet=="function"?WeakSet:Set,N=null;function un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Ui(e,t,n){try{n()}catch(r){K(e,t,r)}}var su=!1;function _p(e,t){if(Ei=hl,e=_c(),xs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,c=0,h=0,m=e,v=null;t:for(;;){for(var x;m!==n||l!==0&&m.nodeType!==3||(s=i+l),m!==o||r!==0&&m.nodeType!==3||(a=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(x=m.firstChild)!==null;)v=m,m=x;for(;;){if(m===e)break t;if(v===n&&++c===l&&(s=i),v===o&&++h===r&&(a=i),(x=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=x}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ji={focusedElem:e,selectionRange:n},hl=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,z=w.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:He(t.type,y),z);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(g){K(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return w=su,su=!1,w}function Jn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Ui(t,n,o)}l=l.next}while(l!==r)}}function Xl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ef(e){var t=e.alternate;t!==null&&(e.alternate=null,Ef(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[cr],delete t[Pi],delete t[up],delete t[cp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jf(e){return e.tag===5||e.tag===3||e.tag===4}function au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gl));else if(r!==4&&(e=e.child,e!==null))for(Wi(e,t,n),e=e.sibling;e!==null;)Wi(e,t,n),e=e.sibling}function Hi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hi(e,t,n),e=e.sibling;e!==null;)Hi(e,t,n),e=e.sibling}var se=null,Qe=!1;function ht(e,t,n){for(n=n.child;n!==null;)Nf(e,t,n),n=n.sibling}function Nf(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Al,n)}catch{}switch(n.tag){case 5:me||un(n,t);case 6:var r=se,l=Qe;se=null,ht(e,t,n),se=r,Qe=l,se!==null&&(Qe?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Qe?(e=se,n=n.stateNode,e.nodeType===8?Ho(e.parentNode,n):e.nodeType===1&&Ho(e,n),or(e)):Ho(se,n.stateNode));break;case 4:r=se,l=Qe,se=n.stateNode.containerInfo,Qe=!0,ht(e,t,n),se=r,Qe=l;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Ui(n,t,i),l=l.next}while(l!==r)}ht(e,t,n);break;case 1:if(!me&&(un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){K(n,t,s)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,ht(e,t,n),me=r):ht(e,t,n);break;default:ht(e,t,n)}}function uu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Np),t.forEach(function(r){var l=$p.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:se=s.stateNode,Qe=!1;break e;case 3:se=s.stateNode.containerInfo,Qe=!0;break e;case 4:se=s.stateNode.containerInfo,Qe=!0;break e}s=s.return}if(se===null)throw Error(S(160));Nf(o,i,l),se=null,Qe=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){K(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_f(t,e),t=t.sibling}function _f(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),Ze(e),r&4){try{Jn(3,e,e.return),Xl(3,e)}catch(y){K(e,e.return,y)}try{Jn(5,e,e.return)}catch(y){K(e,e.return,y)}}break;case 1:We(t,e),Ze(e),r&512&&n!==null&&un(n,n.return);break;case 5:if(We(t,e),Ze(e),r&512&&n!==null&&un(n,n.return),e.flags&32){var l=e.stateNode;try{tr(l,"")}catch(y){K(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Ku(l,o),mi(s,i);var c=mi(s,o);for(i=0;i<a.length;i+=2){var h=a[i],m=a[i+1];h==="style"?bu(l,m):h==="dangerouslySetInnerHTML"?Ju(l,m):h==="children"?tr(l,m):ss(l,h,m,c)}switch(s){case"input":ui(l,o);break;case"textarea":Gu(l,o);break;case"select":var v=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?fn(l,!!o.multiple,x,!1):v!==!!o.multiple&&(o.defaultValue!=null?fn(l,!!o.multiple,o.defaultValue,!0):fn(l,!!o.multiple,o.multiple?[]:"",!1))}l[cr]=o}catch(y){K(e,e.return,y)}}break;case 6:if(We(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(y){K(e,e.return,y)}}break;case 3:if(We(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{or(t.containerInfo)}catch(y){K(e,e.return,y)}break;case 4:We(t,e),Ze(e);break;case 13:We(t,e),Ze(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Bs=J())),r&4&&uu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(me=(c=me)||h,We(t,e),me=c):We(t,e),Ze(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(N=e,h=e.child;h!==null;){for(m=N=h;N!==null;){switch(v=N,x=v.child,v.tag){case 0:case 11:case 14:case 15:Jn(4,v,v.return);break;case 1:un(v,v.return);var w=v.stateNode;if(typeof w.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){K(r,n,y)}}break;case 5:un(v,v.return);break;case 22:if(v.memoizedState!==null){fu(m);continue}}x!==null?(x.return=v,N=x):fu(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,a=m.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=qu("display",i))}catch(y){K(e,e.return,y)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(y){K(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:We(t,e),Ze(e),r&4&&uu(e);break;case 21:break;default:We(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jf(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(tr(l,""),r.flags&=-33);var o=au(e);Hi(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=au(e);Wi(e,s,i);break;default:throw Error(S(161))}}catch(a){K(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pp(e,t,n){N=e,Pf(e)}function Pf(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var l=N,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Wr;if(!i){var s=l.alternate,a=s!==null&&s.memoizedState!==null||me;s=Wr;var c=me;if(Wr=i,(me=a)&&!c)for(N=l;N!==null;)i=N,a=i.child,i.tag===22&&i.memoizedState!==null?du(l):a!==null?(a.return=i,N=a):du(l);for(;o!==null;)N=o,Pf(o),o=o.sibling;N=l,Wr=s,me=c}cu(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,N=o):cu(e)}}function cu(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Xl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ka(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ka(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&or(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}me||t.flags&512&&Vi(t)}catch(v){K(t,t.return,v)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function fu(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function du(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xl(4,t)}catch(a){K(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){K(t,l,a)}}var o=t.return;try{Vi(t)}catch(a){K(t,o,a)}break;case 5:var i=t.return;try{Vi(t)}catch(a){K(t,i,a)}}}catch(a){K(t,t.return,a)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var zp=Math.ceil,zl=mt.ReactCurrentDispatcher,Fs=mt.ReactCurrentOwner,Fe=mt.ReactCurrentBatchConfig,M=0,oe=null,b=null,ue=0,_e=0,cn=It(0),te=0,vr=null,Xt=0,Kl=0,As=0,qn=null,Se=null,Bs=0,En=1/0,lt=null,Ol=!1,Qi=null,_t=null,Hr=!1,St=null,Ll=0,bn=0,Yi=null,ll=-1,ol=0;function ge(){return M&6?J():ll!==-1?ll:ll=J()}function Pt(e){return e.mode&1?M&2&&ue!==0?ue&-ue:dp.transition!==null?(ol===0&&(ol=fc()),ol):(e=F,e!==0||(e=window.event,e=e===void 0?16:gc(e.type)),e):1}function Ke(e,t,n,r){if(50<bn)throw bn=0,Yi=null,Error(S(185));kr(e,n,r),(!(M&2)||e!==oe)&&(e===oe&&(!(M&2)&&(Kl|=n),te===4&&wt(e,ue)),je(e,r),n===1&&M===0&&!(t.mode&1)&&(En=J()+500,Hl&&Rt()))}function je(e,t){var n=e.callbackNode;d0(e,t);var r=ml(e,e===oe?ue:0);if(r===0)n!==null&&Sa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sa(n),t===1)e.tag===0?fp(pu.bind(null,e)):Dc(pu.bind(null,e)),sp(function(){!(M&6)&&Rt()}),n=null;else{switch(dc(r)){case 1:n=ds;break;case 4:n=uc;break;case 16:n=pl;break;case 536870912:n=cc;break;default:n=pl}n=$f(n,zf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zf(e,t){if(ll=-1,ol=0,M&6)throw Error(S(327));var n=e.callbackNode;if(vn()&&e.callbackNode!==n)return null;var r=ml(e,e===oe?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Tl(e,r);else{t=r;var l=M;M|=2;var o=Lf();(oe!==e||ue!==t)&&(lt=null,En=J()+500,Vt(e,t));do try{Tp();break}catch(s){Of(e,s)}while(!0);js(),zl.current=o,M=l,b!==null?t=0:(oe=null,ue=0,t=te)}if(t!==0){if(t===2&&(l=wi(e),l!==0&&(r=l,t=Xi(e,l))),t===1)throw n=vr,Vt(e,0),wt(e,r),je(e,J()),n;if(t===6)wt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Op(l)&&(t=Tl(e,r),t===2&&(o=wi(e),o!==0&&(r=o,t=Xi(e,o))),t===1))throw n=vr,Vt(e,0),wt(e,r),je(e,J()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Ft(e,Se,lt);break;case 3:if(wt(e,r),(r&130023424)===r&&(t=Bs+500-J(),10<t)){if(ml(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=_i(Ft.bind(null,e,Se,lt),t);break}Ft(e,Se,lt);break;case 4:if(wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Xe(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zp(r/1960))-r,10<r){e.timeoutHandle=_i(Ft.bind(null,e,Se,lt),r);break}Ft(e,Se,lt);break;case 5:Ft(e,Se,lt);break;default:throw Error(S(329))}}}return je(e,J()),e.callbackNode===n?zf.bind(null,e):null}function Xi(e,t){var n=qn;return e.current.memoizedState.isDehydrated&&(Vt(e,t).flags|=256),e=Tl(e,t),e!==2&&(t=Se,Se=n,t!==null&&Ki(t)),e}function Ki(e){Se===null?Se=e:Se.push.apply(Se,e)}function Op(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Ge(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wt(e,t){for(t&=~As,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function pu(e){if(M&6)throw Error(S(327));vn();var t=ml(e,0);if(!(t&1))return je(e,J()),null;var n=Tl(e,t);if(e.tag!==0&&n===2){var r=wi(e);r!==0&&(t=r,n=Xi(e,r))}if(n===1)throw n=vr,Vt(e,0),wt(e,t),je(e,J()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ft(e,Se,lt),je(e,J()),null}function Us(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(En=J()+500,Hl&&Rt())}}function Kt(e){St!==null&&St.tag===0&&!(M&6)&&vn();var t=M;M|=1;var n=Fe.transition,r=F;try{if(Fe.transition=null,F=1,e)return e()}finally{F=r,Fe.transition=n,M=t,!(M&6)&&Rt()}}function Vs(){_e=cn.current,W(cn)}function Vt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ip(n)),b!==null)for(n=b.return;n!==null;){var r=n;switch(ks(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wl();break;case 3:kn(),W(Ce),W(he),Ls();break;case 5:Os(r);break;case 4:kn();break;case 13:W(Q);break;case 19:W(Q);break;case 10:Ns(r.type._context);break;case 22:case 23:Vs()}n=n.return}if(oe=e,b=e=zt(e.current,null),ue=_e=t,te=0,vr=null,As=Kl=Xt=0,Se=qn=null,Bt!==null){for(t=0;t<Bt.length;t++)if(n=Bt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Bt=null}return e}function Of(e,t){do{var n=b;try{if(js(),tl.current=Pl,_l){for(var r=Y.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}_l=!1}if(Yt=0,le=ee=Y=null,Zn=!1,pr=0,Fs.current=null,n===null||n.return===null){te=1,vr=t,b=null;break}e:{var o=e,i=n.return,s=n,a=t;if(t=ue,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=s,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var v=h.alternate;v?(h.updateQueue=v.updateQueue,h.memoizedState=v.memoizedState,h.lanes=v.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=eu(i);if(x!==null){x.flags&=-257,tu(x,i,s,o,t),x.mode&1&&ba(o,c,t),t=x,a=c;var w=t.updateQueue;if(w===null){var y=new Set;y.add(a),t.updateQueue=y}else w.add(a);break e}else{if(!(t&1)){ba(o,c,t),Ws();break e}a=Error(S(426))}}else if(H&&s.mode&1){var z=eu(i);if(z!==null){!(z.flags&65536)&&(z.flags|=256),tu(z,i,s,o,t),Cs(Cn(a,s));break e}}o=a=Cn(a,s),te!==4&&(te=2),qn===null?qn=[o]:qn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=pf(o,a,t);Xa(o,f);break e;case 1:s=a;var u=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(_t===null||!_t.has(d)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=mf(o,s,t);Xa(o,g);break e}}o=o.return}while(o!==null)}If(n)}catch(E){t=E,b===n&&n!==null&&(b=n=n.return);continue}break}while(!0)}function Lf(){var e=zl.current;return zl.current=Pl,e===null?Pl:e}function Ws(){(te===0||te===3||te===2)&&(te=4),oe===null||!(Xt&268435455)&&!(Kl&268435455)||wt(oe,ue)}function Tl(e,t){var n=M;M|=2;var r=Lf();(oe!==e||ue!==t)&&(lt=null,Vt(e,t));do try{Lp();break}catch(l){Of(e,l)}while(!0);if(js(),M=n,zl.current=r,b!==null)throw Error(S(261));return oe=null,ue=0,te}function Lp(){for(;b!==null;)Tf(b)}function Tp(){for(;b!==null&&!r0();)Tf(b)}function Tf(e){var t=Mf(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?If(e):b=t,Fs.current=null}function If(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jp(n,t),n!==null){n.flags&=32767,b=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,b=null;return}}else if(n=Ep(n,t,_e),n!==null){b=n;return}if(t=t.sibling,t!==null){b=t;return}b=t=e}while(t!==null);te===0&&(te=5)}function Ft(e,t,n){var r=F,l=Fe.transition;try{Fe.transition=null,F=1,Ip(e,t,n,r)}finally{Fe.transition=l,F=r}return null}function Ip(e,t,n,r){do vn();while(St!==null);if(M&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(p0(e,o),e===oe&&(b=oe=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hr||(Hr=!0,$f(pl,function(){return vn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fe.transition,Fe.transition=null;var i=F;F=1;var s=M;M|=4,Fs.current=null,_p(e,n),_f(n,e),b0(ji),hl=!!Ei,ji=Ei=null,e.current=n,Pp(n),l0(),M=s,F=i,Fe.transition=o}else e.current=n;if(Hr&&(Hr=!1,St=e,Ll=l),o=e.pendingLanes,o===0&&(_t=null),s0(n.stateNode),je(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Ol)throw Ol=!1,e=Qi,Qi=null,e;return Ll&1&&e.tag!==0&&vn(),o=e.pendingLanes,o&1?e===Yi?bn++:(bn=0,Yi=e):bn=0,Rt(),null}function vn(){if(St!==null){var e=dc(Ll),t=Fe.transition,n=F;try{if(Fe.transition=null,F=16>e?16:e,St===null)var r=!1;else{if(e=St,St=null,Ll=0,M&6)throw Error(S(331));var l=M;for(M|=4,N=e.current;N!==null;){var o=N,i=o.child;if(N.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(N=c;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:Jn(8,h,o)}var m=h.child;if(m!==null)m.return=h,N=m;else for(;N!==null;){h=N;var v=h.sibling,x=h.return;if(Ef(h),h===c){N=null;break}if(v!==null){v.return=x,N=v;break}N=x}}}var w=o.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var z=y.sibling;y.sibling=null,y=z}while(y!==null)}}N=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,N=i;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Jn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,N=f;break e}N=o.return}}var u=e.current;for(N=u;N!==null;){i=N;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,N=d;else e:for(i=u;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Xl(9,s)}}catch(E){K(s,s.return,E)}if(s===i){N=null;break e}var g=s.sibling;if(g!==null){g.return=s.return,N=g;break e}N=s.return}}if(M=l,Rt(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Al,e)}catch{}r=!0}return r}finally{F=n,Fe.transition=t}}return!1}function mu(e,t,n){t=Cn(n,t),t=pf(e,t,1),e=Nt(e,t,1),t=ge(),e!==null&&(kr(e,1,t),je(e,t))}function K(e,t,n){if(e.tag===3)mu(e,e,n);else for(;t!==null;){if(t.tag===3){mu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_t===null||!_t.has(r))){e=Cn(n,e),e=mf(t,e,1),t=Nt(t,e,1),e=ge(),t!==null&&(kr(t,1,e),je(t,e));break}}t=t.return}}function Rp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(ue&n)===n&&(te===4||te===3&&(ue&130023424)===ue&&500>J()-Bs?Vt(e,0):As|=n),je(e,t)}function Rf(e,t){t===0&&(e.mode&1?(t=Rr,Rr<<=1,!(Rr&130023424)&&(Rr=4194304)):t=1);var n=ge();e=dt(e,t),e!==null&&(kr(e,t,n),je(e,n))}function Mp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rf(e,n)}function $p(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Rf(e,n)}var Mf;Mf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,Cp(e,t,n);ke=!!(e.flags&131072)}else ke=!1,H&&t.flags&1048576&&Fc(t,kl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;rl(e,t),e=t.pendingProps;var l=wn(t,he.current);hn(t,n),l=Is(null,t,r,e,l,n);var o=Rs();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(o=!0,xl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ps(t),l.updater=Yl,t.stateNode=l,l._reactInternals=t,Ri(t,r,e,n),t=Di(null,t,r,!0,o,n)):(t.tag=0,H&&o&&Ss(t),ye(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(rl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Fp(r),e=He(r,e),l){case 0:t=$i(null,t,r,e,n);break e;case 1:t=lu(null,t,r,e,n);break e;case 11:t=nu(null,t,r,e,n);break e;case 14:t=ru(null,t,r,He(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:He(r,l),$i(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:He(r,l),lu(e,t,r,l,n);case 3:e:{if(gf(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Hc(e,t),jl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Cn(Error(S(423)),t),t=ou(e,t,r,n,l);break e}else if(r!==l){l=Cn(Error(S(424)),t),t=ou(e,t,r,n,l);break e}else for(Pe=jt(t.stateNode.containerInfo.firstChild),ze=t,H=!0,Ye=null,n=Vc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xn(),r===l){t=pt(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return Qc(t),e===null&&Li(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Ni(r,l)?i=null:o!==null&&Ni(r,o)&&(t.flags|=32),yf(e,t),ye(e,t,i,n),t.child;case 6:return e===null&&Li(t),null;case 13:return wf(e,t,n);case 4:return zs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sn(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:He(r,l),nu(e,t,r,l,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,U(Cl,r._currentValue),r._currentValue=i,o!==null)if(Ge(o.value,i)){if(o.children===l.children&&!Ce.current){t=pt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=ut(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ti(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(S(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ti(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ye(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,hn(t,n),l=Ae(l),r=r(l),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,l=He(r,t.pendingProps),l=He(r.type,l),ru(e,t,r,l,n);case 15:return hf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:He(r,l),rl(e,t),t.tag=1,Ee(r)?(e=!0,xl(t)):e=!1,hn(t,n),df(t,r,l),Ri(t,r,l,n),Di(null,t,r,!0,e,n);case 19:return xf(e,t,n);case 22:return vf(e,t,n)}throw Error(S(156,t.tag))};function $f(e,t){return ac(e,t)}function Dp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new Dp(e,t,n,r)}function Hs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fp(e){if(typeof e=="function")return Hs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===us)return 11;if(e===cs)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function il(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Hs(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case bt:return Wt(n.children,l,o,t);case as:i=8,l|=8;break;case li:return e=De(12,n,t,l|2),e.elementType=li,e.lanes=o,e;case oi:return e=De(13,n,t,l),e.elementType=oi,e.lanes=o,e;case ii:return e=De(19,n,t,l),e.elementType=ii,e.lanes=o,e;case Qu:return Gl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wu:i=10;break e;case Hu:i=9;break e;case us:i=11;break e;case cs:i=14;break e;case vt:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=De(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Wt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Gl(e,t,n,r){return e=De(22,e,r,t),e.elementType=Qu,e.lanes=n,e.stateNode={isHidden:!1},e}function qo(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function bo(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ap(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Io(0),this.expirationTimes=Io(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Io(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Qs(e,t,n,r,l,o,i,s,a){return e=new Ap(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=De(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ps(o),e}function Bp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Df(e){if(!e)return Lt;e=e._reactInternals;e:{if(Zt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ee(n))return $c(e,n,t)}return t}function Ff(e,t,n,r,l,o,i,s,a){return e=Qs(n,r,!0,e,l,o,i,s,a),e.context=Df(null),n=e.current,r=ge(),l=Pt(n),o=ut(r,l),o.callback=t??null,Nt(n,o,l),e.current.lanes=l,kr(e,l,r),je(e,r),e}function Zl(e,t,n,r){var l=t.current,o=ge(),i=Pt(l);return n=Df(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(l,t,i),e!==null&&(Ke(e,l,i,o),el(e,l,i)),i}function Il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ys(e,t){hu(e,t),(e=e.alternate)&&hu(e,t)}function Up(){return null}var Af=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xs(e){this._internalRoot=e}Jl.prototype.render=Xs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Zl(e,t,null,null)};Jl.prototype.unmount=Xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kt(function(){Zl(null,e,null,null)}),t[ft]=null}};function Jl(e){this._internalRoot=e}Jl.prototype.unstable_scheduleHydration=function(e){if(e){var t=hc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&yc(e)}};function Ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vu(){}function Vp(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=Il(i);o.call(c)}}var i=Ff(t,r,e,0,null,!1,!1,"",vu);return e._reactRootContainer=i,e[ft]=i.current,ar(e.nodeType===8?e.parentNode:e),Kt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=Il(a);s.call(c)}}var a=Qs(e,0,!1,null,null,!1,!1,"",vu);return e._reactRootContainer=a,e[ft]=a.current,ar(e.nodeType===8?e.parentNode:e),Kt(function(){Zl(t,a,n,r)}),a}function bl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var a=Il(i);s.call(a)}}Zl(t,i,e,l)}else i=Vp(n,t,e,l,r);return Il(i)}pc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wn(t.pendingLanes);n!==0&&(ps(t,n|1),je(t,J()),!(M&6)&&(En=J()+500,Rt()))}break;case 13:Kt(function(){var r=dt(e,1);if(r!==null){var l=ge();Ke(r,e,1,l)}}),Ys(e,1)}};ms=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=ge();Ke(t,e,134217728,n)}Ys(e,134217728)}};mc=function(e){if(e.tag===13){var t=Pt(e),n=dt(e,t);if(n!==null){var r=ge();Ke(n,e,t,r)}Ys(e,t)}};hc=function(){return F};vc=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};vi=function(e,t,n){switch(t){case"input":if(ui(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Wl(r);if(!l)throw Error(S(90));Xu(r),ui(r,l)}}}break;case"textarea":Gu(e,n);break;case"select":t=n.value,t!=null&&fn(e,!!n.multiple,t,!1)}};nc=Us;rc=Kt;var Wp={usingClientEntryPoint:!1,Events:[Er,rn,Wl,ec,tc,Us]},An={findFiberByHostInstance:At,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hp={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ic(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||Up,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qr.isDisabled&&Qr.supportsFiber)try{Al=Qr.inject(Hp),tt=Qr}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wp;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ks(t))throw Error(S(200));return Bp(e,t,null,n)};Te.createRoot=function(e,t){if(!Ks(e))throw Error(S(299));var n=!1,r="",l=Af;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Qs(e,1,!1,null,null,n,!1,r,l),e[ft]=t.current,ar(e.nodeType===8?e.parentNode:e),new Xs(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=ic(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return Kt(e)};Te.hydrate=function(e,t,n){if(!ql(t))throw Error(S(200));return bl(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!Ks(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=Af;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Ff(t,null,e,1,n??null,l,!1,o,i),e[ft]=t.current,ar(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Jl(t)};Te.render=function(e,t,n){if(!ql(t))throw Error(S(200));return bl(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!ql(e))throw Error(S(40));return e._reactRootContainer?(Kt(function(){bl(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1};Te.unstable_batchedUpdates=Us;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ql(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return bl(e,t,n,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function Bf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bf)}catch(e){console.error(e)}}Bf(),Au.exports=Te;var Qp=Au.exports,yu=Qp;ni.createRoot=yu.createRoot,ni.hydrateRoot=yu.hydrateRoot;const Yp="/personal-website/assets/pastel-bg-GweXZvXU.jpg",Xp="data:image/svg+xml,%3csvg%20class='svg-icon'%20style='width:%201em;height:%201em;vertical-align:%20middle;fill:%20currentColor;overflow:%20hidden;'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M838.9%2068h-654C119.5%2068%2065.9%20121.6%2065.9%20187v654.2C65.9%20906.4%20119.5%20960%20184.9%20960h654.2c66%200%20119-53.6%20119-119v-654C957.9%20121.6%20904.3%2068%20838.9%2068zM240.1%20241.6h192v232l123.6-232h221.8l-162.4%20264H240.1v-264z%20m323.6%20544.2l-131.4-227.2v227.2h-192V524.2h383l177.2%20261.6H563.7z'%20/%3e%3c/svg%3e";var Uf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},gu=at.createContext&&at.createContext(Uf),Kp=["attr","size","title"];function Gp(e,t){if(e==null)return{};var n=Zp(e,t),r,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)r=o[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Zp(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Rl(){return Rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rl.apply(this,arguments)}function wu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function Ml(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wu(Object(n),!0).forEach(function(r){Jp(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Jp(e,t,n){return t=qp(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qp(e){var t=bp(e,"string");return typeof t=="symbol"?t:t+""}function bp(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Vf(e){return e&&e.map((t,n)=>at.createElement(t.tag,Ml({key:n},t.attr),Vf(t.child)))}function ve(e){return t=>at.createElement(e1,Rl({attr:Ml({},e.attr)},t),Vf(e.child))}function e1(e){var t=n=>{var{attr:r,size:l,title:o}=e,i=Gp(e,Kp),s=l||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),at.createElement("svg",Rl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,i,{className:a,style:Ml(Ml({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&at.createElement("title",null,o),e.children)};return gu!==void 0?at.createElement(gu.Consumer,null,n=>t(n)):t(Uf)}function t1(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"},child:[]}]})(e)}function n1(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"},child:[]}]})(e)}function r1(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"},child:[]}]})(e)}function l1(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"},child:[]}]})(e)}function o1(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"},child:[]}]})(e)}function i1(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"},child:[]}]})(e)}function s1(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"},child:[]}]})(e)}function a1(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"},child:[]}]})(e)}function u1(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1"},child:[]}]})(e)}function c1(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"},child:[]},{tag:"path",attr:{d:"M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"},child:[]}]})(e)}function f1(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"},child:[]}]})(e)}function Wf(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"},child:[]}]})(e)}function d1(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"},child:[]},{tag:"path",attr:{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"},child:[]}]})(e)}function p1(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"},child:[]}]})(e)}function m1(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"},child:[]}]})(e)}function h1(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"},child:[]},{tag:"path",attr:{d:"M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"},child:[]},{tag:"path",attr:{fillRule:"evenodd",d:"M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"},child:[]}]})(e)}function v1(e){return p.jsxs("div",{className:"navbar",children:[p.jsx(y1,{width:e.width}),p.jsx(g1,{})]})}function y1(e){return p.jsxs("div",{className:"flex items-center",children:[p.jsx("img",{className:"navbar-logo",src:Xp,alt:"logo"}),p.jsx("div",{className:"navbar-title",children:e.width>900?"Kelvin Lin":"Kelvin"})]})}function g1(){return p.jsxs("div",{className:"navbar-toolbar",children:[p.jsxs("a",{href:"#about",className:"navbar-tools",children:[p.jsx(t1,{className:"navbar-tool-icon"}),p.jsx("span",{className:"navbar-tool-label",children:"About"})]}),p.jsxs("a",{href:"#projects",className:"navbar-tools",children:[p.jsx(u1,{className:"navbar-tool-icon"}),p.jsx("span",{className:"navbar-tool-label",children:"Projects"})]}),p.jsxs("a",{href:"#tools",className:"navbar-tools",children:[p.jsx(m1,{className:"navbar-tool-icon"}),p.jsx("span",{className:"navbar-tool-label",children:"Tools"})]}),p.jsxs("a",{href:"#contact",className:"navbar-tools mr-4",children:[p.jsx(c1,{className:"navbar-tool-icon"}),p.jsx("span",{className:"navbar-tool-label",children:"Contact"})]})]})}function w1(){return p.jsxs("div",{className:"flex flex-col items-center justify-center footer",children:[p.jsx("span",{children:"Site coded in TypeScript and built using React, Vite, and Tailwind."}),p.jsxs("span",{children:["Background designed by ",p.jsx("a",{className:"classic-anchor1",href:"https://www.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_13223498.htm#query=pastel&position=19&from_view=keyword&track=ais_hybrid&uuid=f952c164-e355-44dc-8d01-b7c6080a9dda",target:"_blank",children:"Freepik"})]})]})}const eo=({entryNumber:e,titleLabel:t,className:n=""})=>{const r=e.toString().padStart(2,"0");return p.jsx("div",{className:n,children:p.jsxs("div",{className:"section-header fira-code",children:[p.jsx("span",{className:"header-num",children:`${r}| `}),p.jsx("span",{className:"header-title",children:t})]})})};function x1(e){return p.jsx("iframe",{src:`https://open.spotify.com/embed/playlist/${e.playlistID}`,width:"100%",height:"352",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"})}function S1(e){const[t,n]=T.useState(""),r=o=>{n(o.target.value)},l=o=>{if(o.preventDefault(),t.length!=0){if(t.startsWith("https://open.spotify.com/playlist/")){const i=k1(t);i&&e.setPlaylistID(i)}else e.setPlaylistID(t);n("")}};return p.jsxs("form",{onSubmit:l,className:"spotify-form",children:[p.jsx("input",{className:"spotify-form-input",type:"text",value:t,onChange:r,placeholder:"Enter Playlist ID or URL:"}),p.jsx("button",{className:"spotify-form-submit",type:"submit",children:"Submit"})]})}function k1(e){const t=e.match(/\/playlist\/(.*?)(\?)/);return t?t[1]:null}function C1(e){const[t,n]=T.useState("6Szov1HwTIZXeQq5weihCa");return p.jsxs("div",{id:"about",className:"flex flex-row justify-between items-center",children:[p.jsx(eo,{className:"about",entryNumber:1,titleLabel:e.width>1200?"About":""}),p.jsxs("div",{className:"about-description flex flex-col justify-start",children:[p.jsxs("div",{className:"about-description-heading flex flex-row whitespace-pre",children:[p.jsx("span",{className:"about-description-h1",children:p.jsx("span",{children:"Hey"})}),p.jsx("span",{children:", I'm "}),p.jsx("span",{className:"about-description-h2",children:"Kelvin"}),p.jsx("span",{children:"!"})]}),p.jsx("br",{}),p.jsxs("div",{className:"about-description-paragraph",children:["I am currently a Software Engineering student based in New York. My passions in the field include ",p.jsx("span",{className:"about-description-paragraph-ul",children:"Game Development"})," and ",p.jsx("span",{className:"about-description-paragraph-ul",children:"Web Development"}),"."]}),p.jsx("br",{}),p.jsxs("div",{className:"about-description-paragraph",children:["As a student, I am currently taking a course on ",p.jsx("span",{className:"about-description-paragraph-ul",children:"Natural Language Processing"})," and am double majoring in ",p.jsx("span",{className:"about-description-paragraph-ul",children:"Applied Mathematics and Statistics"}),"."]}),p.jsx("br",{}),p.jsx("div",{className:"about-description-paragraph",children:"I'm always open and eager to learn new technologies and frameworks. Currently, I am seeking an entry-level position or internship where I can continue to expand upon my skills. Please feel free to explore some of my past projects!"})]}),p.jsxs("div",{className:"about-spotify flex flex-col items-center",children:[p.jsx(S1,{playlistID:t,setPlaylistID:n}),p.jsx(x1,{playlistID:t,setPlaylistID:n})]})]})}var E1=!1;function j1(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function N1(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var _1=function(){function e(n){var r=this;this._insertTag=function(l){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(l,o),r.tags.push(l)},this.isSpeedy=n.speedy===void 0?!E1:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(N1(this));var l=this.tags[this.tags.length-1];if(this.isSpeedy){var o=j1(l);try{o.insertRule(r,o.cssRules.length)}catch{}}else l.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var l;return(l=r.parentNode)==null?void 0:l.removeChild(r)}),this.tags=[],this.ctr=0},e}(),pe="-ms-",$l="-moz-",$="-webkit-",Hf="comm",Gs="rule",Zs="decl",P1="@import",Qf="@keyframes",z1="@layer",O1=Math.abs,to=String.fromCharCode,L1=Object.assign;function T1(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function Yf(e){return e.trim()}function I1(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function Gi(e,t){return e.indexOf(t)}function ae(e,t){return e.charCodeAt(t)|0}function yr(e,t,n){return e.slice(t,n)}function qe(e){return e.length}function Js(e){return e.length}function Yr(e,t){return t.push(e),e}function R1(e,t){return e.map(t).join("")}var no=1,jn=1,Xf=0,Ne=0,q=0,zn="";function ro(e,t,n,r,l,o,i){return{value:e,root:t,parent:n,type:r,props:l,children:o,line:no,column:jn,length:i,return:""}}function Bn(e,t){return L1(ro("",null,null,"",null,null,0),e,{length:-e.length},t)}function M1(){return q}function $1(){return q=Ne>0?ae(zn,--Ne):0,jn--,q===10&&(jn=1,no--),q}function Oe(){return q=Ne<Xf?ae(zn,Ne++):0,jn++,q===10&&(jn=1,no++),q}function rt(){return ae(zn,Ne)}function sl(){return Ne}function Nr(e,t){return yr(zn,e,t)}function gr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Kf(e){return no=jn=1,Xf=qe(zn=e),Ne=0,[]}function Gf(e){return zn="",e}function al(e){return Yf(Nr(Ne-1,Zi(e===91?e+2:e===40?e+1:e)))}function D1(e){for(;(q=rt())&&q<33;)Oe();return gr(e)>2||gr(q)>3?"":" "}function F1(e,t){for(;--t&&Oe()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return Nr(e,sl()+(t<6&&rt()==32&&Oe()==32))}function Zi(e){for(;Oe();)switch(q){case e:return Ne;case 34:case 39:e!==34&&e!==39&&Zi(q);break;case 40:e===41&&Zi(e);break;case 92:Oe();break}return Ne}function A1(e,t){for(;Oe()&&e+q!==57;)if(e+q===84&&rt()===47)break;return"/*"+Nr(t,Ne-1)+"*"+to(e===47?e:Oe())}function B1(e){for(;!gr(rt());)Oe();return Nr(e,Ne)}function U1(e){return Gf(ul("",null,null,null,[""],e=Kf(e),0,[0],e))}function ul(e,t,n,r,l,o,i,s,a){for(var c=0,h=0,m=i,v=0,x=0,w=0,y=1,z=1,f=1,u=0,d="",g=l,E=o,j=r,C=d;z;)switch(w=u,u=Oe()){case 40:if(w!=108&&ae(C,m-1)==58){Gi(C+=D(al(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:C+=al(u);break;case 9:case 10:case 13:case 32:C+=D1(w);break;case 92:C+=F1(sl()-1,7);continue;case 47:switch(rt()){case 42:case 47:Yr(V1(A1(Oe(),sl()),t,n),a);break;default:C+="/"}break;case 123*y:s[c++]=qe(C)*f;case 125*y:case 59:case 0:switch(u){case 0:case 125:z=0;case 59+h:f==-1&&(C=D(C,/\f/g,"")),x>0&&qe(C)-m&&Yr(x>32?Su(C+";",r,n,m-1):Su(D(C," ","")+";",r,n,m-2),a);break;case 59:C+=";";default:if(Yr(j=xu(C,t,n,c,h,l,s,d,g=[],E=[],m),o),u===123)if(h===0)ul(C,t,j,j,g,o,m,s,E);else switch(v===99&&ae(C,3)===110?100:v){case 100:case 108:case 109:case 115:ul(e,j,j,r&&Yr(xu(e,j,j,0,0,l,s,d,l,g=[],m),E),l,E,m,s,r?g:E);break;default:ul(C,j,j,j,[""],E,0,s,E)}}c=h=x=0,y=f=1,d=C="",m=i;break;case 58:m=1+qe(C),x=w;default:if(y<1){if(u==123)--y;else if(u==125&&y++==0&&$1()==125)continue}switch(C+=to(u),u*y){case 38:f=h>0?1:(C+="\f",-1);break;case 44:s[c++]=(qe(C)-1)*f,f=1;break;case 64:rt()===45&&(C+=al(Oe())),v=rt(),h=m=qe(d=C+=B1(sl())),u++;break;case 45:w===45&&qe(C)==2&&(y=0)}}return o}function xu(e,t,n,r,l,o,i,s,a,c,h){for(var m=l-1,v=l===0?o:[""],x=Js(v),w=0,y=0,z=0;w<r;++w)for(var f=0,u=yr(e,m+1,m=O1(y=i[w])),d=e;f<x;++f)(d=Yf(y>0?v[f]+" "+u:D(u,/&\f/g,v[f])))&&(a[z++]=d);return ro(e,t,n,l===0?Gs:s,a,c,h)}function V1(e,t,n){return ro(e,t,n,Hf,to(M1()),yr(e,2,-2),0)}function Su(e,t,n,r){return ro(e,t,n,Zs,yr(e,0,r),yr(e,r+1,-1),r)}function yn(e,t){for(var n="",r=Js(e),l=0;l<r;l++)n+=t(e[l],l,e,t)||"";return n}function W1(e,t,n,r){switch(e.type){case z1:if(e.children.length)break;case P1:case Zs:return e.return=e.return||e.value;case Hf:return"";case Qf:return e.return=e.value+"{"+yn(e.children,r)+"}";case Gs:e.value=e.props.join(",")}return qe(n=yn(e.children,r))?e.return=e.value+"{"+n+"}":""}function H1(e){var t=Js(e);return function(n,r,l,o){for(var i="",s=0;s<t;s++)i+=e[s](n,r,l,o)||"";return i}}function Q1(e){return function(t){t.root||(t=t.return)&&e(t)}}function Y1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var X1=function(t,n,r){for(var l=0,o=0;l=o,o=rt(),l===38&&o===12&&(n[r]=1),!gr(o);)Oe();return Nr(t,Ne)},K1=function(t,n){var r=-1,l=44;do switch(gr(l)){case 0:l===38&&rt()===12&&(n[r]=1),t[r]+=X1(Ne-1,n,r);break;case 2:t[r]+=al(l);break;case 4:if(l===44){t[++r]=rt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=to(l)}while(l=Oe());return t},G1=function(t,n){return Gf(K1(Kf(t),n))},ku=new WeakMap,Z1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,l=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!ku.get(r))&&!l){ku.set(t,!0);for(var o=[],i=G1(n,o),s=r.props,a=0,c=0;a<i.length;a++)for(var h=0;h<s.length;h++,c++)t.props[c]=o[a]?i[a].replace(/&\f/g,s[h]):s[h]+" "+i[a]}}},J1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Zf(e,t){switch(T1(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+$l+e+pe+e+e;case 6828:case 4268:return $+e+pe+e+e;case 6165:return $+e+pe+"flex-"+e+e;case 5187:return $+e+D(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+pe+"flex-$1$2")+e;case 5443:return $+e+pe+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return $+e+pe+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+pe+D(e,"shrink","negative")+e;case 5292:return $+e+pe+D(e,"basis","preferred-size")+e;case 6060:return $+"box-"+D(e,"-grow","")+$+e+pe+D(e,"grow","positive")+e;case 4554:return $+D(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qe(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+$l+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Gi(e,"stretch")?Zf(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ae(e,t+1)!==115)break;case 6444:switch(ae(e,qe(e)-3-(~Gi(e,"!important")&&10))){case 107:return D(e,":",":"+$)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(ae(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+pe+"$2box$3")+e}break;case 5936:switch(ae(e,t+11)){case 114:return $+e+pe+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+pe+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+pe+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+pe+e+e}return e}var q1=function(t,n,r,l){if(t.length>-1&&!t.return)switch(t.type){case Zs:t.return=Zf(t.value,t.length);break;case Qf:return yn([Bn(t,{value:D(t.value,"@","@"+$)})],l);case Gs:if(t.length)return R1(t.props,function(o){switch(I1(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return yn([Bn(t,{props:[D(o,/:(read-\w+)/,":"+$l+"$1")]})],l);case"::placeholder":return yn([Bn(t,{props:[D(o,/:(plac\w+)/,":"+$+"input-$1")]}),Bn(t,{props:[D(o,/:(plac\w+)/,":"+$l+"$1")]}),Bn(t,{props:[D(o,/:(plac\w+)/,pe+"input-$1")]})],l)}return""})}},b1=[q1],em=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var z=y.getAttribute("data-emotion");z.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var l=t.stylisPlugins||b1,o={},i,s=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var z=y.getAttribute("data-emotion").split(" "),f=1;f<z.length;f++)o[z[f]]=!0;s.push(y)});var a,c=[Z1,J1];{var h,m=[W1,Q1(function(y){h.insert(y)})],v=H1(c.concat(l,m)),x=function(z){return yn(U1(z),v)};a=function(z,f,u,d){h=u,x(z?z+"{"+f.styles+"}":f.styles),d&&(w.inserted[f.name]=!0)}}var w={key:n,sheet:new _1({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:a};return w.sheet.hydrate(s),w},Jf={exports:{}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie=typeof Symbol=="function"&&Symbol.for,qs=ie?Symbol.for("react.element"):60103,bs=ie?Symbol.for("react.portal"):60106,lo=ie?Symbol.for("react.fragment"):60107,oo=ie?Symbol.for("react.strict_mode"):60108,io=ie?Symbol.for("react.profiler"):60114,so=ie?Symbol.for("react.provider"):60109,ao=ie?Symbol.for("react.context"):60110,ea=ie?Symbol.for("react.async_mode"):60111,uo=ie?Symbol.for("react.concurrent_mode"):60111,co=ie?Symbol.for("react.forward_ref"):60112,fo=ie?Symbol.for("react.suspense"):60113,tm=ie?Symbol.for("react.suspense_list"):60120,po=ie?Symbol.for("react.memo"):60115,mo=ie?Symbol.for("react.lazy"):60116,nm=ie?Symbol.for("react.block"):60121,rm=ie?Symbol.for("react.fundamental"):60117,lm=ie?Symbol.for("react.responder"):60118,om=ie?Symbol.for("react.scope"):60119;function Re(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case qs:switch(e=e.type,e){case ea:case uo:case lo:case io:case oo:case fo:return e;default:switch(e=e&&e.$$typeof,e){case ao:case co:case mo:case po:case so:return e;default:return t}}case bs:return t}}}function qf(e){return Re(e)===uo}A.AsyncMode=ea;A.ConcurrentMode=uo;A.ContextConsumer=ao;A.ContextProvider=so;A.Element=qs;A.ForwardRef=co;A.Fragment=lo;A.Lazy=mo;A.Memo=po;A.Portal=bs;A.Profiler=io;A.StrictMode=oo;A.Suspense=fo;A.isAsyncMode=function(e){return qf(e)||Re(e)===ea};A.isConcurrentMode=qf;A.isContextConsumer=function(e){return Re(e)===ao};A.isContextProvider=function(e){return Re(e)===so};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===qs};A.isForwardRef=function(e){return Re(e)===co};A.isFragment=function(e){return Re(e)===lo};A.isLazy=function(e){return Re(e)===mo};A.isMemo=function(e){return Re(e)===po};A.isPortal=function(e){return Re(e)===bs};A.isProfiler=function(e){return Re(e)===io};A.isStrictMode=function(e){return Re(e)===oo};A.isSuspense=function(e){return Re(e)===fo};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===lo||e===uo||e===io||e===oo||e===fo||e===tm||typeof e=="object"&&e!==null&&(e.$$typeof===mo||e.$$typeof===po||e.$$typeof===so||e.$$typeof===ao||e.$$typeof===co||e.$$typeof===rm||e.$$typeof===lm||e.$$typeof===om||e.$$typeof===nm)};A.typeOf=Re;Jf.exports=A;var im=Jf.exports,bf=im,sm={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},am={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ed={};ed[bf.ForwardRef]=sm;ed[bf.Memo]=am;var um=!0;function td(e,t,n){var r="";return n.split(" ").forEach(function(l){e[l]!==void 0?t.push(e[l]+";"):l&&(r+=l+" ")}),r}var ta=function(t,n,r){var l=t.key+"-"+n.name;(r===!1||um===!1)&&t.registered[l]===void 0&&(t.registered[l]=n.styles)},nd=function(t,n,r){ta(t,n,r);var l=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+l:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function cm(e){for(var t=0,n,r=0,l=e.length;l>=4;++r,l-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(l){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var fm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dm=!1,pm=/[A-Z]|^ms/g,mm=/_EMO_([^_]+?)_([^]*?)_EMO_/g,rd=function(t){return t.charCodeAt(1)===45},Cu=function(t){return t!=null&&typeof t!="boolean"},ei=Y1(function(e){return rd(e)?e:e.replace(pm,"-$&").toLowerCase()}),Eu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(mm,function(r,l,o){return be={name:l,styles:o,next:be},l})}return fm[t]!==1&&!rd(t)&&typeof n=="number"&&n!==0?n+"px":n},hm="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function wr(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var l=n;if(l.anim===1)return be={name:l.name,styles:l.styles,next:be},l.name;var o=n;if(o.styles!==void 0){var i=o.next;if(i!==void 0)for(;i!==void 0;)be={name:i.name,styles:i.styles,next:be},i=i.next;var s=o.styles+";";return s}return vm(e,t,n)}case"function":{if(e!==void 0){var a=be,c=n(e);return be=a,wr(e,t,c)}break}}var h=n;if(t==null)return h;var m=t[h];return m!==void 0?m:h}function vm(e,t,n){var r="";if(Array.isArray(n))for(var l=0;l<n.length;l++)r+=wr(e,t,n[l])+";";else for(var o in n){var i=n[o];if(typeof i!="object"){var s=i;t!=null&&t[s]!==void 0?r+=o+"{"+t[s]+"}":Cu(s)&&(r+=ei(o)+":"+Eu(o,s)+";")}else{if(o==="NO_COMPONENT_SELECTOR"&&dm)throw new Error(hm);if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var a=0;a<i.length;a++)Cu(i[a])&&(r+=ei(o)+":"+Eu(o,i[a])+";");else{var c=wr(e,t,i);switch(o){case"animation":case"animationName":{r+=ei(o)+":"+c+";";break}default:r+=o+"{"+c+"}"}}}}return r}var ju=/label:\s*([^\s;{]+)\s*(;|$)/g,be;function na(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,l="";be=void 0;var o=e[0];if(o==null||o.raw===void 0)r=!1,l+=wr(n,t,o);else{var i=o;l+=i[0]}for(var s=1;s<e.length;s++)if(l+=wr(n,t,e[s]),r){var a=o;l+=a[s]}ju.lastIndex=0;for(var c="",h;(h=ju.exec(l))!==null;)c+="-"+h[1];var m=cm(l)+c;return{name:m,styles:l,next:be}}var ym=function(t){return t()},gm=fa.useInsertionEffect?fa.useInsertionEffect:!1,ld=gm||ym,Ji=!1,od=T.createContext(typeof HTMLElement<"u"?em({key:"css"}):null);od.Provider;var id=function(t){return T.forwardRef(function(n,r){var l=T.useContext(od);return t(n,l,r)})},sd=T.createContext({}),ra={}.hasOwnProperty,qi="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",wm=function(t,n){var r={};for(var l in n)ra.call(n,l)&&(r[l]=n[l]);return r[qi]=t,r},xm=function(t){var n=t.cache,r=t.serialized,l=t.isStringTag;return ta(n,r,l),ld(function(){return nd(n,r,l)}),null},Sm=id(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var l=e[qi],o=[r],i="";typeof e.className=="string"?i=td(t.registered,o,e.className):e.className!=null&&(i=e.className+" ");var s=na(o,void 0,T.useContext(sd));i+=t.key+"-"+s.name;var a={};for(var c in e)ra.call(e,c)&&c!=="css"&&c!==qi&&!Ji&&(a[c]=e[c]);return a.className=i,n&&(a.ref=n),T.createElement(T.Fragment,null,T.createElement(xm,{cache:t,serialized:s,isStringTag:typeof l=="string"}),T.createElement(l,a))}),km=Sm,Cm=p.Fragment;function re(e,t,n){return ra.call(t,"css")?p.jsx(km,wm(e,t),n):p.jsx(e,t,n)}function ad(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return na(t)}var k=function(){var t=ad.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Em=function e(t){for(var n=t.length,r=0,l="";r<n;r++){var o=t[r];if(o!=null){var i=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))i=e(o);else{i="";for(var s in o)o[s]&&s&&(i&&(i+=" "),i+=s)}break}default:i=o}i&&(l&&(l+=" "),l+=i)}}return l};function jm(e,t,n){var r=[],l=td(e,r,n);return r.length<2?n:l+t(r)}var Nm=function(t){var n=t.cache,r=t.serializedArr;return ld(function(){for(var l=0;l<r.length;l++)nd(n,r[l],!1)}),null},ti=id(function(e,t){var n=!1,r=[],l=function(){if(n&&Ji)throw new Error("css can only be used during render");for(var c=arguments.length,h=new Array(c),m=0;m<c;m++)h[m]=arguments[m];var v=na(h,t.registered);return r.push(v),ta(t,v,!1),t.key+"-"+v.name},o=function(){if(n&&Ji)throw new Error("cx can only be used during render");for(var c=arguments.length,h=new Array(c),m=0;m<c;m++)h[m]=arguments[m];return jm(t.registered,l,Em(h))},i={css:l,cx:o,theme:T.useContext(sd)},s=e.children(i);return n=!0,T.createElement(T.Fragment,null,T.createElement(Nm,{cache:t,serializedArr:r}),s)}),_m=Object.defineProperty,Pm=(e,t,n)=>t in e?_m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xr=(e,t,n)=>Pm(e,typeof t!="symbol"?t+"":t,n),bi=new Map,Kr=new WeakMap,Nu=0,zm=void 0;function Om(e){return e?(Kr.has(e)||(Nu+=1,Kr.set(e,Nu.toString())),Kr.get(e)):"0"}function Lm(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Om(e.root):e[t]}`).toString()}function Tm(e){const t=Lm(e);let n=bi.get(t);if(!n){const r=new Map;let l;const o=new IntersectionObserver(i=>{i.forEach(s=>{var a;const c=s.isIntersecting&&l.some(h=>s.intersectionRatio>=h);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(a=r.get(s.target))==null||a.forEach(h=>{h(c,s)})})},e);l=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},bi.set(t,n)}return n}function ud(e,t,n={},r=zm){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:l,observer:o,elements:i}=Tm(n),s=i.get(e)||[];return i.has(e)||i.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(i.delete(e),o.unobserve(e)),i.size===0&&(o.disconnect(),bi.delete(l))}}function Im(e){return typeof e.children!="function"}var _u=class extends T.Component{constructor(e){super(e),Xr(this,"node",null),Xr(this,"_unobserveCb",null),Xr(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Xr(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Im(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:l,fallbackInView:o}=this.props;this._unobserveCb=ud(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:l},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:x,entry:w}=this.state;return e({inView:x,entry:w,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:l,rootMargin:o,onChange:i,skip:s,trackVisibility:a,delay:c,initialInView:h,fallbackInView:m,...v}=this.props;return T.createElement(t||"div",{ref:this.handleNode,...v},e)}};function cd({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:l,triggerOnce:o,skip:i,initialInView:s,fallbackInView:a,onChange:c}={}){var h;const[m,v]=T.useState(null),x=T.useRef(),[w,y]=T.useState({inView:!!s,entry:void 0});x.current=c,T.useEffect(()=>{if(i||!m)return;let d;return d=ud(m,(g,E)=>{y({inView:g,entry:E}),x.current&&x.current(g,E),E.isIntersecting&&o&&d&&(d(),d=void 0)},{root:l,rootMargin:r,threshold:e,trackVisibility:n,delay:t},a),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,m,l,r,o,i,n,a,t]);const z=(h=w.entry)==null?void 0:h.target,f=T.useRef();!m&&z&&!o&&!i&&f.current!==z&&(f.current=z,y({inView:!!s,entry:void 0}));const u=[v,w.inView,w.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}var fd={exports:{}},B={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=Symbol.for("react.element"),oa=Symbol.for("react.portal"),ho=Symbol.for("react.fragment"),vo=Symbol.for("react.strict_mode"),yo=Symbol.for("react.profiler"),go=Symbol.for("react.provider"),wo=Symbol.for("react.context"),Rm=Symbol.for("react.server_context"),xo=Symbol.for("react.forward_ref"),So=Symbol.for("react.suspense"),ko=Symbol.for("react.suspense_list"),Co=Symbol.for("react.memo"),Eo=Symbol.for("react.lazy"),Mm=Symbol.for("react.offscreen"),dd;dd=Symbol.for("react.module.reference");function Ue(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case la:switch(e=e.type,e){case ho:case yo:case vo:case So:case ko:return e;default:switch(e=e&&e.$$typeof,e){case Rm:case wo:case xo:case Eo:case Co:case go:return e;default:return t}}case oa:return t}}}B.ContextConsumer=wo;B.ContextProvider=go;B.Element=la;B.ForwardRef=xo;B.Fragment=ho;B.Lazy=Eo;B.Memo=Co;B.Portal=oa;B.Profiler=yo;B.StrictMode=vo;B.Suspense=So;B.SuspenseList=ko;B.isAsyncMode=function(){return!1};B.isConcurrentMode=function(){return!1};B.isContextConsumer=function(e){return Ue(e)===wo};B.isContextProvider=function(e){return Ue(e)===go};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===la};B.isForwardRef=function(e){return Ue(e)===xo};B.isFragment=function(e){return Ue(e)===ho};B.isLazy=function(e){return Ue(e)===Eo};B.isMemo=function(e){return Ue(e)===Co};B.isPortal=function(e){return Ue(e)===oa};B.isProfiler=function(e){return Ue(e)===yo};B.isStrictMode=function(e){return Ue(e)===vo};B.isSuspense=function(e){return Ue(e)===So};B.isSuspenseList=function(e){return Ue(e)===ko};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ho||e===yo||e===vo||e===So||e===ko||e===Mm||typeof e=="object"&&e!==null&&(e.$$typeof===Eo||e.$$typeof===Co||e.$$typeof===go||e.$$typeof===wo||e.$$typeof===xo||e.$$typeof===dd||e.getModuleId!==void 0)};B.typeOf=Ue;fd.exports=B;var $m=fd.exports;k`
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
`;k`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;k`
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
`;k`
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
`;k`
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
`;k`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;const Dm=k`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Fm=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Am=k`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Bm=k`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Um=k`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ia=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Vm=k`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Wm=k`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Hm=k`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Qm=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ym=k`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Xm=k`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Km=k`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Gm({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=ia,iterationCount:l=1}){return ad`
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
  `}function Zm(e){return e==null}function Jm(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function pd(e,t){return n=>n?e():t()}function xr(e){return pd(e,()=>null)}function es(e){return xr(()=>({opacity:0}))(e)}const md=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:l=1e3,fraction:o=0,keyframes:i=ia,triggerOnce:s=!1,className:a,style:c,childClassName:h,childStyle:m,children:v,onVisibilityChange:x}=e,w=T.useMemo(()=>Gm({keyframes:i,duration:l}),[l,i]);return Zm(v)?null:Jm(v)?re(bm,{...e,animationStyles:w,children:String(v)}):$m.isFragment(v)?re(hd,{...e,animationStyles:w}):re(Cm,{children:T.Children.map(v,(y,z)=>{if(!T.isValidElement(y))return null;const f=r+(t?z*l*n:0);switch(y.type){case"ol":case"ul":return re(ti,{children:({cx:u})=>re(y.type,{...y.props,className:u(a,y.props.className),style:Object.assign({},c,y.props.style),children:re(md,{...e,children:y.props.children})})});case"li":return re(_u,{threshold:o,triggerOnce:s,onChange:x,children:({inView:u,ref:d})=>re(ti,{children:({cx:g})=>re(y.type,{...y.props,ref:d,className:g(h,y.props.className),css:xr(()=>w)(u),style:Object.assign({},m,y.props.style,es(!u),{animationDelay:f+"ms"})})})});default:return re(_u,{threshold:o,triggerOnce:s,onChange:x,children:({inView:u,ref:d})=>re("div",{ref:d,className:a,css:xr(()=>w)(u),style:Object.assign({},c,es(!u),{animationDelay:f+"ms"}),children:re(ti,{children:({cx:g})=>re(y.type,{...y.props,className:g(h,y.props.className),style:Object.assign({},m,y.props.style)})})})})}})})},qm={display:"inline-block",whiteSpace:"pre"},bm=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:l=0,duration:o=1e3,fraction:i=0,triggerOnce:s=!1,className:a,style:c,children:h,onVisibilityChange:m}=e,{ref:v,inView:x}=cd({triggerOnce:s,threshold:i,onChange:m});return pd(()=>re("div",{ref:v,className:a,style:Object.assign({},c,qm),children:h.split("").map((w,y)=>re("span",{css:xr(()=>t)(x),style:{animationDelay:l+y*o*r+"ms"},children:w},y))}),()=>re(hd,{...e,children:h}))(n)},hd=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:l,style:o,children:i,onVisibilityChange:s}=e,{ref:a,inView:c}=cd({triggerOnce:r,threshold:n,onChange:s});return re("div",{ref:a,className:l,css:xr(()=>t)(c),style:Object.assign({},o,es(!c)),children:i})};k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;k`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;k`
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
`;const eh=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,th=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,nh=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,rh=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,lh=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,oh=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,ih=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,sh=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,ah=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,uh=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,ch=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,fh=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,dh=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function ph(e,t,n){switch(n){case"bottom-left":return t?th:Fm;case"bottom-right":return t?nh:Am;case"down":return e?t?lh:Um:t?rh:Bm;case"left":return e?t?ih:Vm:t?oh:ia;case"right":return e?t?ah:Hm:t?sh:Wm;case"top-left":return t?uh:Qm;case"top-right":return t?ch:Ym;case"up":return e?t?dh:Km:t?fh:Xm;default:return t?eh:Dm}}const Dl=e=>{const{big:t=!1,direction:n,reverse:r=!1,...l}=e,o=T.useMemo(()=>ph(t,r,n),[t,n,r]);return re(md,{keyframes:o,...l})};k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;k`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;k`
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
`;const mh="/personal-website/assets/01-TitlePage-1Nponcj1.png?type=url",hh=Object.freeze(Object.defineProperty({__proto__:null,default:mh},Symbol.toStringTag,{value:"Module"})),vh="/personal-website/assets/02-Level0-01-CLFB4mlR.png?type=url",yh=Object.freeze(Object.defineProperty({__proto__:null,default:vh},Symbol.toStringTag,{value:"Module"})),gh="/personal-website/assets/03-Level0-02-BndSZnyW.png?type=url",wh=Object.freeze(Object.defineProperty({__proto__:null,default:gh},Symbol.toStringTag,{value:"Module"})),vd=[{title:"Asphodel Game",status:"Plans for Revision",last_updated:"Jul 3, 2024",images:Object.values(Object.assign({"/src/assets/project-images/Asphodel/01-TitlePage.png":hh,"/src/assets/project-images/Asphodel/02-Level0-01.png":yh,"/src/assets/project-images/Asphodel/03-Level0-02.png":wh})),description:"Placeholder Description",objectives:["Placeholder Objective"],links:[{type:"Try",name:"Asphodel",url:"https://asphodel-game.web.app/"}]},{title:"ViewYou",status:"Plans for Revision",last_updated:"Mar 13, 2024",images:Object.values(Object.assign({})),description:"Placeholder Description",objectives:["Placeholder Objective"],links:[]},{title:"Minecraft Bingo",status:"Plans for Revision",last_updated:"Oct 29, 2023",images:Object.values(Object.assign({})),description:"Placeholder Description",objectives:["Placeholder Objective"],links:[]},{title:"Fake Stack Overflow",status:"Plans for Revision",last_updated:"Dec 22, 2023",images:Object.values(Object.assign({})),description:"Placeholder Description",objectives:["Placeholder Objective"],links:[]},{title:"Time2Learn",status:"Plans for Revision",last_updated:"Feb 11, 2024",images:Object.values(Object.assign({})),description:"Placeholder Description",objectives:["Placeholder Objective"],links:[]},{title:"C Memory Allocator",status:"Completed",last_updated:"Apr 05, 2023",images:Object.values(Object.assign({})),description:"Placeholder Description",objectives:["Placeholder Objective"],links:[]},{title:"Graphs in MIPs",status:"Completed",last_updated:"Dec 11, 2022",images:Object.values(Object.assign({})),description:"Placeholder Description",objectives:["Placeholder Objective"],links:[]},{title:"Totally Not Crossy Road",status:"Completed",last_updated:"Jun 14, 2020",images:Object.values(Object.assign({})),description:"Placeholder Description",objectives:["Placeholder Objective"],links:[]}];function xh(e){const[t,n]=T.useState(1),r={projectData:vd,projectIndex:t,setProjectIndex:n};return p.jsxs("div",{id:"projects",className:"flex flex-row items-center",children:[p.jsx(eo,{className:"projects",entryNumber:2,titleLabel:e.width>1200?"Projects":""}),p.jsxs("div",{className:"projects-container flex flex-col text-white",children:[p.jsx(Sh,{projectData:r.projectData,projectIndex:r.projectIndex,setProjectIndex:r.setProjectIndex}),p.jsxs(Dl,{children:[p.jsx(kh,{projectData:r.projectData,projectIndex:r.projectIndex,setProjectIndex:r.setProjectIndex}),p.jsx(Ch,{projectData:r.projectData,projectIndex:r.projectIndex,setProjectIndex:r.setProjectIndex,setFocus:e.setFocus}),p.jsx(jh,{projectData:r.projectData,projectIndex:r.projectIndex,setProjectIndex:r.setProjectIndex})]},t)]})]})}function Sh({projectData:e,projectIndex:t,setProjectIndex:n}){const r=l=>{l&&t==e.length?n(1):!l&&t==1?n(e.length):n(t+(l?1:-1))};return p.jsxs("div",{className:"flex flex-row justify-between items-center",children:[p.jsx("div",{className:"text-red-500 font-bold montserrat",children:"CURRENT LISTING:"}),p.jsxs("div",{className:"projects-header-settings flex justify-center items-center",children:[p.jsx(n1,{className:"projects-header-arrow",onClick:()=>{r(!1)}}),p.jsxs("div",{className:"projects-header-index",children:[p.jsx("span",{className:"font-medium text-red-500",children:`${t.toString().padStart(3,"0")}`}),p.jsx("span",{children:" / "}),p.jsx("span",{children:`${e.length.toString().padStart(3,"0")}`})]}),p.jsx(l1,{className:"projects-header-arrow",onClick:()=>{r(!0)}})]})]})}function kh({projectData:e,projectIndex:t}){const n=e[t-1];return p.jsxs("div",{className:"projects-header-section flex flex-col",children:[p.jsx("div",{className:"projects-header-title averia-serif",children:n.title}),p.jsx("div",{className:"projects-header-status montserrat text-gray-500 font-bold",children:`Status: [${n.status}]`})]})}function Ch({projectData:e,projectIndex:t,setProjectIndex:n,setFocus:r}){const l=e[t-1];return p.jsxs("div",{className:"projects-display-section flex flex-col overflow-hidden",children:[p.jsx(Eh,{projectData:e,projectIndex:t,setProjectIndex:n,setFocus:r}),p.jsxs("div",{className:"italic montserrat",children:[p.jsx("span",{className:"underline",children:"Last Updated"}),p.jsx("span",{children:`: ${l.last_updated}`})]})]})}function Eh({projectData:e,projectIndex:t,setFocus:n}){const r=e[t-1],l=r.images.length,[o,i]=T.useState(0),[s,a]=T.useState(r.images),c=h=>{h?(i(o+1),a([...s.slice(1),s[0]])):(o==0?i(l-1):i(o-1),a([s[s.length-1],...s.slice(0,-1)]))};return r.images.length==0?p.jsx("div",{className:"project-display-images flex items-center",children:"No Images Found"}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"flex flex-row mt-4 mb-4",children:[p.jsx(i1,{size:32,className:"cursor-pointer mr-4",onClick:()=>c(!1)}),p.jsx(s1,{size:32,className:"cursor-pointer ml-4",onClick:()=>c(!0)})]}),p.jsx(Dl,{children:p.jsx("div",{className:"project-display-images flex items-center",children:s.map((h,m)=>p.jsxs("div",{className:"relative project-img-container",children:[p.jsx("img",{src:h.default,className:"project-img",onClick:()=>n((m+o)%l)}),p.jsx("span",{className:"project-img-index",children:`${(m+o)%l}`}),p.jsx(h1,{className:"project-img-zoom"})]},m))})},`${t}-${o}`)]})}function jh({projectData:e,projectIndex:t,setProjectIndex:n}){return p.jsxs("div",{className:"projects-details-section flex flex-row",children:[p.jsxs("div",{className:"projects-details-description w-1/2",children:[p.jsx(Nh,{projectData:e,projectIndex:t,setProjectIndex:n}),p.jsx(Ph,{projectData:e,projectIndex:t,setProjectIndex:n})]}),p.jsx("div",{className:"projects-details-misc w-1/2 flex flex-col",children:p.jsx(_h,{projectData:e,projectIndex:t,setProjectIndex:n})})]})}function Nh({projectData:e,projectIndex:t}){const n=e[t-1];return p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"projects-details-title",children:"DESCRIPTION"}),p.jsx("div",{className:"projects-description-content source-code-pro mb-10",children:n.description})]})}function _h({projectData:e,projectIndex:t}){const n=e[t-1];return p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"projects-details-title",children:"OBJECTIVES"}),p.jsx("div",{className:"projects-description-content source-code-pro",children:n.objectives.map((r,l)=>p.jsx("span",{className:"projects-objective-listing",children:`- ${r}`},l))})]})}function Ph({projectData:e,projectIndex:t}){const n=e[t-1];return p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"projects-details-title",children:"LINKS"}),p.jsxs("div",{className:"`projects-links-container",children:[n.links.length==0&&p.jsx("div",{className:"source-code-pro",children:"No Links Available"}),n.links.map((r,l)=>p.jsxs("div",{className:"flex items-center",children:[r.type=="GitHub"&&p.jsxs(p.Fragment,{children:[p.jsx(Wf,{size:24,className:"mr-2"}),p.jsx("span",{className:"source-code-pro",children:"Github: "})]}),r.type=="Code"&&p.jsxs(p.Fragment,{children:[p.jsx(a1,{size:24,className:"mr-2"}),p.jsx("span",{className:"source-code-pro",children:"Code Snippets: "})]}),r.type=="Try"&&p.jsxs(p.Fragment,{children:[p.jsx(d1,{size:24,className:"mr-2"}),p.jsx("span",{className:"source-code-pro",children:"Try Yourself: "})]}),p.jsx("a",{className:"source-code-pro classic-anchor1",href:r.url,target:"_blank",children:r.name})]},`Link${l}`))]})]})}function zh(e){return p.jsx("div",{id:"tools",className:"flex flex-row items-center",children:p.jsx(eo,{className:"tools",entryNumber:3,titleLabel:e.width>1200?"Tools (WIP)":""})})}function Oh(e){return p.jsxs("div",{id:"contact",className:"relative",children:[p.jsx(eo,{className:"contact absolute top-1/2",entryNumber:4,titleLabel:e.width>1200?"Contact":""}),p.jsx("div",{className:"contact-div flex align-center",children:p.jsxs("div",{children:[p.jsxs("div",{className:"contact-entry w-fit",children:[p.jsx(f1,{className:"contact-entry-icon"}),p.jsxs("span",{className:"contact-entry-text source-code-pro",children:["Email: ",p.jsx("a",{className:"classic-anchor2",href:"mailto:kelvinlin2003@gmail.com",target:"_blank",children:"kelvinlin2003@gmail.com"})]})]}),p.jsx("div",{className:"pb-6"}),p.jsxs("div",{className:"contact-entry w-fit",children:[p.jsx(p1,{className:"contact-entry-icon"}),p.jsxs("span",{className:"contact-entry-text source-code-pro",children:["LinkedIn: ",p.jsx("a",{className:"classic-anchor2",href:"https://www.linkedin.com/in/kelvin-lin-J2003/",target:"_blank",children:"in/kelvin-lin-J2003/"})]})]}),p.jsx("div",{className:"pb-6"}),p.jsxs("div",{className:"contact-entry w-fit",children:[p.jsx(Wf,{className:"contact-entry-icon"}),p.jsxs("span",{className:"contact-entry-text source-code-pro",children:["GitHub: ",p.jsx("a",{className:"classic-anchor2",href:"https://github.com/klin2003",target:"_blank",children:"gh/klin2003"})]})]})]})})]})}function Lh(e){const t=vd,[n,r]=T.useState(!1),l=o=>{if(n)return;const i=t[e.projectIndex-1].images.length-1;o?e.setFocus(e.focusState==i?0:e.focusState+1):e.setFocus(e.focusState==0?i:e.focusState-1),r(!0),setTimeout(()=>{r(!1)},500)};return p.jsx("div",{className:"fixed inset-0 w-full h-full flex items-center justify-center",children:p.jsxs(Dl,{className:"flex items-center justify-center",children:[p.jsx("div",{className:"absolute inset-0 z-10 full-screen-overlay"}),p.jsxs("div",{className:"flex flex-row items-center",children:[p.jsx("div",{children:p.jsx(r1,{className:"full-screen-overlay-arrows",size:36,color:"white",onClick:()=>l(!1)})}),p.jsxs("div",{className:"flex flex-col items-center",children:[p.jsx(Dl,{children:p.jsx("img",{src:t[e.projectIndex-1].images[e.focusState].default,className:"project-focus-img"})},e.focusState),p.jsx("span",{className:"full-screen-overlay-exit-text",onClick:()=>e.setFocus(-1),children:"Click Here to Exit"})]}),p.jsx("div",{children:p.jsx(o1,{className:"full-screen-overlay-arrows",size:36,color:"white",onClick:()=>l(!0)})})]})]})})}function Th(){const[e,t]=T.useState(window.innerWidth),[n,r]=T.useState(1),[l,o]=T.useState(-1),i=()=>{t(window.innerWidth)};return T.useEffect(()=>(window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}),[]),p.jsxs("div",{className:"relative",children:[p.jsx("img",{className:"bg-image",src:Yp}),p.jsx(v1,{width:e}),p.jsx(C1,{width:e}),p.jsx(xh,{width:e,projectIndex:n,setProjectIndex:r,setFocus:o}),p.jsx(zh,{width:e}),p.jsx(Oh,{width:e}),l>=0&&p.jsx(Lh,{projectIndex:n,setFocus:o,focusState:l}),p.jsx(w1,{})]})}ni.createRoot(document.getElementById("root")).render(p.jsx(at.StrictMode,{children:p.jsx(Th,{})}));