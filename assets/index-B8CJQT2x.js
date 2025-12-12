function j0(i,a){for(var u=0;u<a.length;u++){const f=a[u];if(typeof f!="string"&&!Array.isArray(f)){for(const p in f)if(p!=="default"&&!(p in i)){const v=Object.getOwnPropertyDescriptor(f,p);v&&Object.defineProperty(i,p,v.get?v:{enumerable:!0,get:()=>f[p]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))f(p);new MutationObserver(p=>{for(const v of p)if(v.type==="childList")for(const x of v.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&f(x)}).observe(document,{childList:!0,subtree:!0});function u(p){const v={};return p.integrity&&(v.integrity=p.integrity),p.referrerPolicy&&(v.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?v.credentials="include":p.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function f(p){if(p.ep)return;p.ep=!0;const v=u(p);fetch(p.href,v)}})();function Zc(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var sa={exports:{}},Fr={},ua={exports:{}},te={};var Cc;function C0(){if(Cc)return te;Cc=1;var i=Symbol.for("react.element"),a=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),x=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),R=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),I=Symbol.iterator;function U(y){return y===null||typeof y!="object"?null:(y=I&&y[I]||y["@@iterator"],typeof y=="function"?y:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,O={};function _(y,E,ee){this.props=y,this.context=E,this.refs=O,this.updater=ee||Y}_.prototype.isReactComponent={},_.prototype.setState=function(y,E){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,E,"setState")},_.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function J(){}J.prototype=_.prototype;function G(y,E,ee){this.props=y,this.context=E,this.refs=O,this.updater=ee||Y}var X=G.prototype=new J;X.constructor=G,W(X,_.prototype),X.isPureReactComponent=!0;var oe=Array.isArray,z=Object.prototype.hasOwnProperty,re={current:null},Z={key:!0,ref:!0,__self:!0,__source:!0};function tt(y,E,ee){var le,ae={},se=null,ye=null;if(E!=null)for(le in E.ref!==void 0&&(ye=E.ref),E.key!==void 0&&(se=""+E.key),E)z.call(E,le)&&!Z.hasOwnProperty(le)&&(ae[le]=E[le]);var me=arguments.length-2;if(me===1)ae.children=ee;else if(1<me){for(var Se=Array(me),rt=0;rt<me;rt++)Se[rt]=arguments[rt+2];ae.children=Se}if(y&&y.defaultProps)for(le in me=y.defaultProps,me)ae[le]===void 0&&(ae[le]=me[le]);return{$$typeof:i,type:y,key:se,ref:ye,props:ae,_owner:re.current}}function Ht(y,E){return{$$typeof:i,type:y.type,key:E,ref:y.ref,props:y.props,_owner:y._owner}}function Rt(y){return typeof y=="object"&&y!==null&&y.$$typeof===i}function cn(y){var E={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(ee){return E[ee]})}var kt=/\/+/g;function nt(y,E){return typeof y=="object"&&y!==null&&y.key!=null?cn(""+y.key):E.toString(36)}function ht(y,E,ee,le,ae){var se=typeof y;(se==="undefined"||se==="boolean")&&(y=null);var ye=!1;if(y===null)ye=!0;else switch(se){case"string":case"number":ye=!0;break;case"object":switch(y.$$typeof){case i:case a:ye=!0}}if(ye)return ye=y,ae=ae(ye),y=le===""?"."+nt(ye,0):le,oe(ae)?(ee="",y!=null&&(ee=y.replace(kt,"$&/")+"/"),ht(ae,E,ee,"",function(rt){return rt})):ae!=null&&(Rt(ae)&&(ae=Ht(ae,ee+(!ae.key||ye&&ye.key===ae.key?"":(""+ae.key).replace(kt,"$&/")+"/")+y)),E.push(ae)),1;if(ye=0,le=le===""?".":le+":",oe(y))for(var me=0;me<y.length;me++){se=y[me];var Se=le+nt(se,me);ye+=ht(se,E,ee,Se,ae)}else if(Se=U(y),typeof Se=="function")for(y=Se.call(y),me=0;!(se=y.next()).done;)se=se.value,Se=le+nt(se,me++),ye+=ht(se,E,ee,Se,ae);else if(se==="object")throw E=String(y),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.");return ye}function jt(y,E,ee){if(y==null)return y;var le=[],ae=0;return ht(y,le,"","",function(se){return E.call(ee,se,ae++)}),le}function Ye(y){if(y._status===-1){var E=y._result;E=E(),E.then(function(ee){(y._status===0||y._status===-1)&&(y._status=1,y._result=ee)},function(ee){(y._status===0||y._status===-1)&&(y._status=2,y._result=ee)}),y._status===-1&&(y._status=0,y._result=E)}if(y._status===1)return y._result.default;throw y._result}var je={current:null},D={transition:null},K={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:D,ReactCurrentOwner:re};function $(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:jt,forEach:function(y,E,ee){jt(y,function(){E.apply(this,arguments)},ee)},count:function(y){var E=0;return jt(y,function(){E++}),E},toArray:function(y){return jt(y,function(E){return E})||[]},only:function(y){if(!Rt(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},te.Component=_,te.Fragment=u,te.Profiler=p,te.PureComponent=G,te.StrictMode=f,te.Suspense=k,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,te.act=$,te.cloneElement=function(y,E,ee){if(y==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+y+".");var le=W({},y.props),ae=y.key,se=y.ref,ye=y._owner;if(E!=null){if(E.ref!==void 0&&(se=E.ref,ye=re.current),E.key!==void 0&&(ae=""+E.key),y.type&&y.type.defaultProps)var me=y.type.defaultProps;for(Se in E)z.call(E,Se)&&!Z.hasOwnProperty(Se)&&(le[Se]=E[Se]===void 0&&me!==void 0?me[Se]:E[Se])}var Se=arguments.length-2;if(Se===1)le.children=ee;else if(1<Se){me=Array(Se);for(var rt=0;rt<Se;rt++)me[rt]=arguments[rt+2];le.children=me}return{$$typeof:i,type:y.type,key:ae,ref:se,props:le,_owner:ye}},te.createContext=function(y){return y={$$typeof:x,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},y.Provider={$$typeof:v,_context:y},y.Consumer=y},te.createElement=tt,te.createFactory=function(y){var E=tt.bind(null,y);return E.type=y,E},te.createRef=function(){return{current:null}},te.forwardRef=function(y){return{$$typeof:C,render:y}},te.isValidElement=Rt,te.lazy=function(y){return{$$typeof:M,_payload:{_status:-1,_result:y},_init:Ye}},te.memo=function(y,E){return{$$typeof:R,type:y,compare:E===void 0?null:E}},te.startTransition=function(y){var E=D.transition;D.transition={};try{y()}finally{D.transition=E}},te.unstable_act=$,te.useCallback=function(y,E){return je.current.useCallback(y,E)},te.useContext=function(y){return je.current.useContext(y)},te.useDebugValue=function(){},te.useDeferredValue=function(y){return je.current.useDeferredValue(y)},te.useEffect=function(y,E){return je.current.useEffect(y,E)},te.useId=function(){return je.current.useId()},te.useImperativeHandle=function(y,E,ee){return je.current.useImperativeHandle(y,E,ee)},te.useInsertionEffect=function(y,E){return je.current.useInsertionEffect(y,E)},te.useLayoutEffect=function(y,E){return je.current.useLayoutEffect(y,E)},te.useMemo=function(y,E){return je.current.useMemo(y,E)},te.useReducer=function(y,E,ee){return je.current.useReducer(y,E,ee)},te.useRef=function(y){return je.current.useRef(y)},te.useState=function(y){return je.current.useState(y)},te.useSyncExternalStore=function(y,E,ee){return je.current.useSyncExternalStore(y,E,ee)},te.useTransition=function(){return je.current.useTransition()},te.version="18.3.1",te}var Ec;function ka(){return Ec||(Ec=1,ua.exports=C0()),ua.exports}var Nc;function E0(){if(Nc)return Fr;Nc=1;var i=ka(),a=Symbol.for("react.element"),u=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,p=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function x(C,k,R){var M,I={},U=null,Y=null;R!==void 0&&(U=""+R),k.key!==void 0&&(U=""+k.key),k.ref!==void 0&&(Y=k.ref);for(M in k)f.call(k,M)&&!v.hasOwnProperty(M)&&(I[M]=k[M]);if(C&&C.defaultProps)for(M in k=C.defaultProps,k)I[M]===void 0&&(I[M]=k[M]);return{$$typeof:a,type:C,key:U,ref:Y,props:I,_owner:p.current}}return Fr.Fragment=u,Fr.jsx=x,Fr.jsxs=x,Fr}var Pc;function N0(){return Pc||(Pc=1,sa.exports=E0()),sa.exports}var h=N0(),ne=ka();const Vt=Zc(ne),Oc=j0({__proto__:null,default:Vt},[ne]);var eo={},ca={exports:{}},Ze={},fa={exports:{}},da={};var zc;function P0(){return zc||(zc=1,(function(i){function a(D,K){var $=D.length;D.push(K);e:for(;0<$;){var y=$-1>>>1,E=D[y];if(0<p(E,K))D[y]=K,D[$]=E,$=y;else break e}}function u(D){return D.length===0?null:D[0]}function f(D){if(D.length===0)return null;var K=D[0],$=D.pop();if($!==K){D[0]=$;e:for(var y=0,E=D.length,ee=E>>>1;y<ee;){var le=2*(y+1)-1,ae=D[le],se=le+1,ye=D[se];if(0>p(ae,$))se<E&&0>p(ye,ae)?(D[y]=ye,D[se]=$,y=se):(D[y]=ae,D[le]=$,y=le);else if(se<E&&0>p(ye,$))D[y]=ye,D[se]=$,y=se;else break e}}return K}function p(D,K){var $=D.sortIndex-K.sortIndex;return $!==0?$:D.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var v=performance;i.unstable_now=function(){return v.now()}}else{var x=Date,C=x.now();i.unstable_now=function(){return x.now()-C}}var k=[],R=[],M=1,I=null,U=3,Y=!1,W=!1,O=!1,_=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(D){for(var K=u(R);K!==null;){if(K.callback===null)f(R);else if(K.startTime<=D)f(R),K.sortIndex=K.expirationTime,a(k,K);else break;K=u(R)}}function oe(D){if(O=!1,X(D),!W)if(u(k)!==null)W=!0,Ye(z);else{var K=u(R);K!==null&&je(oe,K.startTime-D)}}function z(D,K){W=!1,O&&(O=!1,J(tt),tt=-1),Y=!0;var $=U;try{for(X(K),I=u(k);I!==null&&(!(I.expirationTime>K)||D&&!cn());){var y=I.callback;if(typeof y=="function"){I.callback=null,U=I.priorityLevel;var E=y(I.expirationTime<=K);K=i.unstable_now(),typeof E=="function"?I.callback=E:I===u(k)&&f(k),X(K)}else f(k);I=u(k)}if(I!==null)var ee=!0;else{var le=u(R);le!==null&&je(oe,le.startTime-K),ee=!1}return ee}finally{I=null,U=$,Y=!1}}var re=!1,Z=null,tt=-1,Ht=5,Rt=-1;function cn(){return!(i.unstable_now()-Rt<Ht)}function kt(){if(Z!==null){var D=i.unstable_now();Rt=D;var K=!0;try{K=Z(!0,D)}finally{K?nt():(re=!1,Z=null)}}else re=!1}var nt;if(typeof G=="function")nt=function(){G(kt)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,jt=ht.port2;ht.port1.onmessage=kt,nt=function(){jt.postMessage(null)}}else nt=function(){_(kt,0)};function Ye(D){Z=D,re||(re=!0,nt())}function je(D,K){tt=_(function(){D(i.unstable_now())},K)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(D){D.callback=null},i.unstable_continueExecution=function(){W||Y||(W=!0,Ye(z))},i.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ht=0<D?Math.floor(1e3/D):5},i.unstable_getCurrentPriorityLevel=function(){return U},i.unstable_getFirstCallbackNode=function(){return u(k)},i.unstable_next=function(D){switch(U){case 1:case 2:case 3:var K=3;break;default:K=U}var $=U;U=K;try{return D()}finally{U=$}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var $=U;U=D;try{return K()}finally{U=$}},i.unstable_scheduleCallback=function(D,K,$){var y=i.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?y+$:y):$=y,D){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=$+E,D={id:M++,callback:K,priorityLevel:D,startTime:$,expirationTime:E,sortIndex:-1},$>y?(D.sortIndex=$,a(R,D),u(k)===null&&D===u(R)&&(O?(J(tt),tt=-1):O=!0,je(oe,$-y))):(D.sortIndex=E,a(k,D),W||Y||(W=!0,Ye(z))),D},i.unstable_shouldYield=cn,i.unstable_wrapCallback=function(D){var K=U;return function(){var $=U;U=K;try{return D.apply(this,arguments)}finally{U=$}}}})(da)),da}var Tc;function O0(){return Tc||(Tc=1,fa.exports=P0()),fa.exports}var Lc;function z0(){if(Lc)return Ze;Lc=1;var i=ka(),a=O0();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,p={};function v(e,t){x(e,t),x(e+"Capture",t)}function x(e,t){for(p[e]=t,e=0;e<t.length;e++)f.add(t[e])}var C=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,R=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,M={},I={};function U(e){return k.call(I,e)?!0:k.call(M,e)?!1:R.test(e)?I[e]=!0:(M[e]=!0,!1)}function Y(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function W(e,t,n,r){if(t===null||typeof t>"u"||Y(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function O(e,t,n,r,l,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_[e]=new O(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_[t]=new O(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){_[e]=new O(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_[e]=new O(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_[e]=new O(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){_[e]=new O(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){_[e]=new O(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){_[e]=new O(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){_[e]=new O(e,5,!1,e.toLowerCase(),null,!1,!1)});var J=/[\-:]([a-z])/g;function G(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(J,G);_[t]=new O(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(J,G);_[t]=new O(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(J,G);_[t]=new O(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){_[e]=new O(e,1,!1,e.toLowerCase(),null,!1,!1)}),_.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){_[e]=new O(e,1,!1,e.toLowerCase(),null,!0,!0)});function X(e,t,n,r){var l=_.hasOwnProperty(t)?_[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(W(t,n,l,r)&&(n=null),r||l===null?U(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var oe=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),re=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),tt=Symbol.for("react.strict_mode"),Ht=Symbol.for("react.profiler"),Rt=Symbol.for("react.provider"),cn=Symbol.for("react.context"),kt=Symbol.for("react.forward_ref"),nt=Symbol.for("react.suspense"),ht=Symbol.for("react.suspense_list"),jt=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),D=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,y;function E(e){if(y===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);y=t&&t[1]||""}return`
`+y+e}var ee=!1;function le(e,t){if(!e||ee)return"";ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(S){var r=S}Reflect.construct(e,[],t)}else{try{t.call()}catch(S){r=S}e.call(t.prototype)}else{try{throw Error()}catch(S){r=S}e()}}catch(S){if(S&&r&&typeof S.stack=="string"){for(var l=S.stack.split(`
`),o=r.stack.split(`
`),s=l.length-1,c=o.length-1;1<=s&&0<=c&&l[s]!==o[c];)c--;for(;1<=s&&0<=c;s--,c--)if(l[s]!==o[c]){if(s!==1||c!==1)do if(s--,c--,0>c||l[s]!==o[c]){var d=`
`+l[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=c);break}}}finally{ee=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?E(e):""}function ae(e){switch(e.tag){case 5:return E(e.type);case 16:return E("Lazy");case 13:return E("Suspense");case 19:return E("SuspenseList");case 0:case 2:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case re:return"Portal";case Ht:return"Profiler";case tt:return"StrictMode";case nt:return"Suspense";case ht:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cn:return(e.displayName||"Context")+".Consumer";case Rt:return(e._context.displayName||"Context")+".Provider";case kt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case jt:return t=e.displayName||null,t!==null?t:se(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}function ye(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(t);case 8:return t===tt?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function me(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Se(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rt(e){var t=Se(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wr(e){e._valueTracker||(e._valueTracker=rt(e))}function Ta(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Se(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ho(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function La(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=me(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ra(e,t){t=t.checked,t!=null&&X(e,"checked",t,!1)}function yo(e,t){Ra(e,t);var n=me(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vo(e,t.type,n):t.hasOwnProperty("defaultValue")&&vo(e,t.type,me(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ma(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vo(e,t,n){(t!=="number"||br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jn=Array.isArray;function jn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+me(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function go(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ia(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(Jn(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:me(n)}}function Da(e,t){var n=me(t.value),r=me(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Aa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Aa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qr,$a=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qr=Qr||document.createElement("div"),Qr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pf=["Webkit","ms","Moz","O"];Object.keys(er).forEach(function(e){Pf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),er[t]=er[e]})});function Ba(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||er.hasOwnProperty(e)&&er[e]?(""+t).trim():t+"px"}function Ua(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ba(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Of=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function So(e,t){if(t){if(Of[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function xo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _o=null;function ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jo=null,Cn=null,En=null;function Va(e){if(e=_r(e)){if(typeof jo!="function")throw Error(u(280));var t=e.stateNode;t&&(t=hl(t),jo(e.stateNode,e.type,t))}}function Ha(e){Cn?En?En.push(e):En=[e]:Cn=e}function Wa(){if(Cn){var e=Cn,t=En;if(En=Cn=null,Va(e),t)for(e=0;e<t.length;e++)Va(t[e])}}function ba(e,t){return e(t)}function Qa(){}var Co=!1;function Ya(e,t,n){if(Co)return e(t,n);Co=!0;try{return ba(e,t,n)}finally{Co=!1,(Cn!==null||En!==null)&&(Qa(),Wa())}}function tr(e,t){var n=e.stateNode;if(n===null)return null;var r=hl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Eo=!1;if(C)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){Eo=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{Eo=!1}function zf(e,t,n,r,l,o,s,c,d){var S=Array.prototype.slice.call(arguments,3);try{t.apply(n,S)}catch(N){this.onError(N)}}var rr=!1,Yr=null,Gr=!1,No=null,Tf={onError:function(e){rr=!0,Yr=e}};function Lf(e,t,n,r,l,o,s,c,d){rr=!1,Yr=null,zf.apply(Tf,arguments)}function Rf(e,t,n,r,l,o,s,c,d){if(Lf.apply(this,arguments),rr){if(rr){var S=Yr;rr=!1,Yr=null}else throw Error(u(198));Gr||(Gr=!0,No=S)}}function fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ga(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xa(e){if(fn(e)!==e)throw Error(u(188))}function Mf(e){var t=e.alternate;if(!t){if(t=fn(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Xa(l),e;if(o===r)return Xa(l),t;o=o.sibling}throw Error(u(188))}if(n.return!==r.return)n=l,r=o;else{for(var s=!1,c=l.child;c;){if(c===n){s=!0,n=l,r=o;break}if(c===r){s=!0,r=l,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,r=l;break}if(c===r){s=!0,r=o,n=l;break}c=c.sibling}if(!s)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function Ka(e){return e=Mf(e),e!==null?qa(e):null}function qa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qa(e);if(t!==null)return t;e=e.sibling}return null}var Ja=a.unstable_scheduleCallback,Za=a.unstable_cancelCallback,If=a.unstable_shouldYield,Df=a.unstable_requestPaint,Ee=a.unstable_now,Ff=a.unstable_getCurrentPriorityLevel,Po=a.unstable_ImmediatePriority,es=a.unstable_UserBlockingPriority,Xr=a.unstable_NormalPriority,Af=a.unstable_LowPriority,ts=a.unstable_IdlePriority,Kr=null,Ct=null;function $f(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Kr,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:Vf,Bf=Math.log,Uf=Math.LN2;function Vf(e){return e>>>=0,e===0?32:31-(Bf(e)/Uf|0)|0}var qr=64,Jr=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var c=s&~l;c!==0?r=lr(c):(o&=s,o!==0&&(r=lr(o)))}else s=n&~l,s!==0?r=lr(s):o!==0&&(r=lr(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),l=1<<n,r|=e[n],t&=~l;return r}function Hf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-yt(o),c=1<<s,d=l[s];d===-1?((c&n)===0||(c&r)!==0)&&(l[s]=Hf(c,t)):d<=t&&(e.expiredLanes|=c),o&=~c}}function Oo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ns(){var e=qr;return qr<<=1,(qr&4194240)===0&&(qr=64),e}function zo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function bf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-yt(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function To(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var he=0;function rs(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ls,Lo,os,is,as,Ro=!1,el=[],Wt=null,bt=null,Qt=null,ir=new Map,ar=new Map,Yt=[],Qf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ss(e,t){switch(e){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":ir.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ar.delete(t.pointerId)}}function sr(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=_r(t),t!==null&&Lo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Yf(e,t,n,r,l){switch(t){case"focusin":return Wt=sr(Wt,e,t,n,r,l),!0;case"dragenter":return bt=sr(bt,e,t,n,r,l),!0;case"mouseover":return Qt=sr(Qt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return ir.set(o,sr(ir.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,ar.set(o,sr(ar.get(o)||null,e,t,n,r,l)),!0}return!1}function us(e){var t=dn(e.target);if(t!==null){var n=fn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ga(n),t!==null){e.blockedOn=t,as(e.priority,function(){os(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Io(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_o=r,n.target.dispatchEvent(r),_o=null}else return t=_r(n),t!==null&&Lo(t),e.blockedOn=n,!1;t.shift()}return!0}function cs(e,t,n){tl(e)&&n.delete(t)}function Gf(){Ro=!1,Wt!==null&&tl(Wt)&&(Wt=null),bt!==null&&tl(bt)&&(bt=null),Qt!==null&&tl(Qt)&&(Qt=null),ir.forEach(cs),ar.forEach(cs)}function ur(e,t){e.blockedOn===t&&(e.blockedOn=null,Ro||(Ro=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Gf)))}function cr(e){function t(l){return ur(l,e)}if(0<el.length){ur(el[0],e);for(var n=1;n<el.length;n++){var r=el[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Wt!==null&&ur(Wt,e),bt!==null&&ur(bt,e),Qt!==null&&ur(Qt,e),ir.forEach(t),ar.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)us(n),n.blockedOn===null&&Yt.shift()}var Nn=oe.ReactCurrentBatchConfig,nl=!0;function Xf(e,t,n,r){var l=he,o=Nn.transition;Nn.transition=null;try{he=1,Mo(e,t,n,r)}finally{he=l,Nn.transition=o}}function Kf(e,t,n,r){var l=he,o=Nn.transition;Nn.transition=null;try{he=4,Mo(e,t,n,r)}finally{he=l,Nn.transition=o}}function Mo(e,t,n,r){if(nl){var l=Io(e,t,n,r);if(l===null)Jo(e,t,r,rl,n),ss(e,r);else if(Yf(l,e,t,n,r))r.stopPropagation();else if(ss(e,r),t&4&&-1<Qf.indexOf(e)){for(;l!==null;){var o=_r(l);if(o!==null&&ls(o),o=Io(e,t,n,r),o===null&&Jo(e,t,r,rl,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Jo(e,t,r,null,n)}}var rl=null;function Io(e,t,n,r){if(rl=null,e=ko(r),e=dn(e),e!==null)if(t=fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ga(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return rl=e,null}function fs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ff()){case Po:return 1;case es:return 4;case Xr:case Af:return 16;case ts:return 536870912;default:return 16}default:return 16}}var Gt=null,Do=null,ll=null;function ds(){if(ll)return ll;var e,t=Do,n=t.length,r,l="value"in Gt?Gt.value:Gt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===l[o-r];r++);return ll=l.slice(e,1<r?1-r:void 0)}function ol(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function il(){return!0}function ps(){return!1}function lt(e){function t(n,r,l,o,s){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?il:ps,this.isPropagationStopped=ps,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),t}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fo=lt(Pn),fr=$({},Pn,{view:0,detail:0}),qf=lt(fr),Ao,$o,dr,al=$({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dr&&(dr&&e.type==="mousemove"?(Ao=e.screenX-dr.screenX,$o=e.screenY-dr.screenY):$o=Ao=0,dr=e),Ao)},movementY:function(e){return"movementY"in e?e.movementY:$o}}),ms=lt(al),Jf=$({},al,{dataTransfer:0}),Zf=lt(Jf),ed=$({},fr,{relatedTarget:0}),Bo=lt(ed),td=$({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),nd=lt(td),rd=$({},Pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ld=lt(rd),od=$({},Pn,{data:0}),hs=lt(od),id={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ad={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ud(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sd[e])?!!t[e]:!1}function Uo(){return ud}var cd=$({},fr,{key:function(e){if(e.key){var t=id[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ad[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uo,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fd=lt(cd),dd=$({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ys=lt(dd),pd=$({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uo}),md=lt(pd),hd=$({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),yd=lt(hd),vd=$({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gd=lt(vd),wd=[9,13,27,32],Vo=C&&"CompositionEvent"in window,pr=null;C&&"documentMode"in document&&(pr=document.documentMode);var Sd=C&&"TextEvent"in window&&!pr,vs=C&&(!Vo||pr&&8<pr&&11>=pr),gs=" ",ws=!1;function Ss(e,t){switch(e){case"keyup":return wd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function xd(e,t){switch(e){case"compositionend":return xs(t);case"keypress":return t.which!==32?null:(ws=!0,gs);case"textInput":return e=t.data,e===gs&&ws?null:e;default:return null}}function _d(e,t){if(On)return e==="compositionend"||!Vo&&Ss(e,t)?(e=ds(),ll=Do=Gt=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vs&&t.locale!=="ko"?null:t.data;default:return null}}var kd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kd[e.type]:t==="textarea"}function ks(e,t,n,r){Ha(r),t=dl(t,"onChange"),0<t.length&&(n=new Fo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function jd(e){Us(e,0)}function sl(e){var t=Mn(e);if(Ta(t))return e}function Cd(e,t){if(e==="change")return t}var js=!1;if(C){var Ho;if(C){var Wo="oninput"in document;if(!Wo){var Cs=document.createElement("div");Cs.setAttribute("oninput","return;"),Wo=typeof Cs.oninput=="function"}Ho=Wo}else Ho=!1;js=Ho&&(!document.documentMode||9<document.documentMode)}function Es(){mr&&(mr.detachEvent("onpropertychange",Ns),hr=mr=null)}function Ns(e){if(e.propertyName==="value"&&sl(hr)){var t=[];ks(t,hr,e,ko(e)),Ya(jd,t)}}function Ed(e,t,n){e==="focusin"?(Es(),mr=t,hr=n,mr.attachEvent("onpropertychange",Ns)):e==="focusout"&&Es()}function Nd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sl(hr)}function Pd(e,t){if(e==="click")return sl(t)}function Od(e,t){if(e==="input"||e==="change")return sl(t)}function zd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:zd;function yr(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!k.call(t,l)||!vt(e[l],t[l]))return!1}return!0}function Ps(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Os(e,t){var n=Ps(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ps(n)}}function zs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ts(){for(var e=window,t=br();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=br(e.document)}return t}function bo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Td(e){var t=Ts(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zs(n.ownerDocument.documentElement,n)){if(r!==null&&bo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Os(n,o);var s=Os(n,r);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ld=C&&"documentMode"in document&&11>=document.documentMode,zn=null,Qo=null,vr=null,Yo=!1;function Ls(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yo||zn==null||zn!==br(r)||(r=zn,"selectionStart"in r&&bo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vr&&yr(vr,r)||(vr=r,r=dl(Qo,"onSelect"),0<r.length&&(t=new Fo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function ul(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tn={animationend:ul("Animation","AnimationEnd"),animationiteration:ul("Animation","AnimationIteration"),animationstart:ul("Animation","AnimationStart"),transitionend:ul("Transition","TransitionEnd")},Go={},Rs={};C&&(Rs=document.createElement("div").style,"AnimationEvent"in window||(delete Tn.animationend.animation,delete Tn.animationiteration.animation,delete Tn.animationstart.animation),"TransitionEvent"in window||delete Tn.transitionend.transition);function cl(e){if(Go[e])return Go[e];if(!Tn[e])return e;var t=Tn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rs)return Go[e]=t[n];return e}var Ms=cl("animationend"),Is=cl("animationiteration"),Ds=cl("animationstart"),Fs=cl("transitionend"),As=new Map,$s="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){As.set(e,t),v(t,[e])}for(var Xo=0;Xo<$s.length;Xo++){var Ko=$s[Xo],Rd=Ko.toLowerCase(),Md=Ko[0].toUpperCase()+Ko.slice(1);Xt(Rd,"on"+Md)}Xt(Ms,"onAnimationEnd"),Xt(Is,"onAnimationIteration"),Xt(Ds,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(Fs,"onTransitionEnd"),x("onMouseEnter",["mouseout","mouseover"]),x("onMouseLeave",["mouseout","mouseover"]),x("onPointerEnter",["pointerout","pointerover"]),x("onPointerLeave",["pointerout","pointerover"]),v("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),v("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),v("onBeforeInput",["compositionend","keypress","textInput","paste"]),v("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Id=new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));function Bs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Rf(r,t,void 0,e),e.currentTarget=null}function Us(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var c=r[s],d=c.instance,S=c.currentTarget;if(c=c.listener,d!==o&&l.isPropagationStopped())break e;Bs(l,c,S),o=d}else for(s=0;s<r.length;s++){if(c=r[s],d=c.instance,S=c.currentTarget,c=c.listener,d!==o&&l.isPropagationStopped())break e;Bs(l,c,S),o=d}}}if(Gr)throw e=No,Gr=!1,No=null,e}function ge(e,t){var n=t[li];n===void 0&&(n=t[li]=new Set);var r=e+"__bubble";n.has(r)||(Vs(t,e,2,!1),n.add(r))}function qo(e,t,n){var r=0;t&&(r|=4),Vs(n,e,r,t)}var fl="_reactListening"+Math.random().toString(36).slice(2);function wr(e){if(!e[fl]){e[fl]=!0,f.forEach(function(n){n!=="selectionchange"&&(Id.has(n)||qo(n,!1,e),qo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fl]||(t[fl]=!0,qo("selectionchange",!1,t))}}function Vs(e,t,n,r){switch(fs(t)){case 1:var l=Xf;break;case 4:l=Kf;break;default:l=Mo}n=l.bind(null,t,n,e),l=void 0,!Eo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Jo(e,t,n,r,l){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===l||c.nodeType===8&&c.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===l||d.nodeType===8&&d.parentNode===l))return;s=s.return}for(;c!==null;){if(s=dn(c),s===null)return;if(d=s.tag,d===5||d===6){r=o=s;continue e}c=c.parentNode}}r=r.return}Ya(function(){var S=o,N=ko(n),P=[];e:{var j=As.get(e);if(j!==void 0){var F=Fo,B=e;switch(e){case"keypress":if(ol(n)===0)break e;case"keydown":case"keyup":F=fd;break;case"focusin":B="focus",F=Bo;break;case"focusout":B="blur",F=Bo;break;case"beforeblur":case"afterblur":F=Bo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=Zf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=md;break;case Ms:case Is:case Ds:F=nd;break;case Fs:F=yd;break;case"scroll":F=qf;break;case"wheel":F=gd;break;case"copy":case"cut":case"paste":F=ld;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=ys}var V=(t&4)!==0,Ne=!V&&e==="scroll",g=V?j!==null?j+"Capture":null:j;V=[];for(var m=S,w;m!==null;){w=m;var T=w.stateNode;if(w.tag===5&&T!==null&&(w=T,g!==null&&(T=tr(m,g),T!=null&&V.push(Sr(m,T,w)))),Ne)break;m=m.return}0<V.length&&(j=new F(j,B,null,n,N),P.push({event:j,listeners:V}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",j&&n!==_o&&(B=n.relatedTarget||n.fromElement)&&(dn(B)||B[Mt]))break e;if((F||j)&&(j=N.window===N?N:(j=N.ownerDocument)?j.defaultView||j.parentWindow:window,F?(B=n.relatedTarget||n.toElement,F=S,B=B?dn(B):null,B!==null&&(Ne=fn(B),B!==Ne||B.tag!==5&&B.tag!==6)&&(B=null)):(F=null,B=S),F!==B)){if(V=ms,T="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(V=ys,T="onPointerLeave",g="onPointerEnter",m="pointer"),Ne=F==null?j:Mn(F),w=B==null?j:Mn(B),j=new V(T,m+"leave",F,n,N),j.target=Ne,j.relatedTarget=w,T=null,dn(N)===S&&(V=new V(g,m+"enter",B,n,N),V.target=w,V.relatedTarget=Ne,T=V),Ne=T,F&&B)t:{for(V=F,g=B,m=0,w=V;w;w=Ln(w))m++;for(w=0,T=g;T;T=Ln(T))w++;for(;0<m-w;)V=Ln(V),m--;for(;0<w-m;)g=Ln(g),w--;for(;m--;){if(V===g||g!==null&&V===g.alternate)break t;V=Ln(V),g=Ln(g)}V=null}else V=null;F!==null&&Hs(P,j,F,V,!1),B!==null&&Ne!==null&&Hs(P,Ne,B,V,!0)}}e:{if(j=S?Mn(S):window,F=j.nodeName&&j.nodeName.toLowerCase(),F==="select"||F==="input"&&j.type==="file")var H=Cd;else if(_s(j))if(js)H=Od;else{H=Nd;var b=Ed}else(F=j.nodeName)&&F.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(H=Pd);if(H&&(H=H(e,S))){ks(P,H,n,N);break e}b&&b(e,j,S),e==="focusout"&&(b=j._wrapperState)&&b.controlled&&j.type==="number"&&vo(j,"number",j.value)}switch(b=S?Mn(S):window,e){case"focusin":(_s(b)||b.contentEditable==="true")&&(zn=b,Qo=S,vr=null);break;case"focusout":vr=Qo=zn=null;break;case"mousedown":Yo=!0;break;case"contextmenu":case"mouseup":case"dragend":Yo=!1,Ls(P,n,N);break;case"selectionchange":if(Ld)break;case"keydown":case"keyup":Ls(P,n,N)}var Q;if(Vo)e:{switch(e){case"compositionstart":var q="onCompositionStart";break e;case"compositionend":q="onCompositionEnd";break e;case"compositionupdate":q="onCompositionUpdate";break e}q=void 0}else On?Ss(e,n)&&(q="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(q="onCompositionStart");q&&(vs&&n.locale!=="ko"&&(On||q!=="onCompositionStart"?q==="onCompositionEnd"&&On&&(Q=ds()):(Gt=N,Do="value"in Gt?Gt.value:Gt.textContent,On=!0)),b=dl(S,q),0<b.length&&(q=new hs(q,e,null,n,N),P.push({event:q,listeners:b}),Q?q.data=Q:(Q=xs(n),Q!==null&&(q.data=Q)))),(Q=Sd?xd(e,n):_d(e,n))&&(S=dl(S,"onBeforeInput"),0<S.length&&(N=new hs("onBeforeInput","beforeinput",null,n,N),P.push({event:N,listeners:S}),N.data=Q))}Us(P,t)})}function Sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function dl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=tr(e,n),o!=null&&r.unshift(Sr(e,o,l)),o=tr(e,t),o!=null&&r.push(Sr(e,o,l))),e=e.return}return r}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hs(e,t,n,r,l){for(var o=t._reactName,s=[];n!==null&&n!==r;){var c=n,d=c.alternate,S=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&S!==null&&(c=S,l?(d=tr(n,o),d!=null&&s.unshift(Sr(n,d,c))):l||(d=tr(n,o),d!=null&&s.push(Sr(n,d,c)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Dd=/\r\n?/g,Fd=/\u0000|\uFFFD/g;function Ws(e){return(typeof e=="string"?e:""+e).replace(Dd,`
`).replace(Fd,"")}function pl(e,t,n){if(t=Ws(t),Ws(e)!==t&&n)throw Error(u(425))}function ml(){}var Zo=null,ei=null;function ti(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ni=typeof setTimeout=="function"?setTimeout:void 0,Ad=typeof clearTimeout=="function"?clearTimeout:void 0,bs=typeof Promise=="function"?Promise:void 0,$d=typeof queueMicrotask=="function"?queueMicrotask:typeof bs<"u"?function(e){return bs.resolve(null).then(e).catch(Bd)}:ni;function Bd(e){setTimeout(function(){throw e})}function ri(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),cr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);cr(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rn=Math.random().toString(36).slice(2),Et="__reactFiber$"+Rn,xr="__reactProps$"+Rn,Mt="__reactContainer$"+Rn,li="__reactEvents$"+Rn,Ud="__reactListeners$"+Rn,Vd="__reactHandles$"+Rn;function dn(e){var t=e[Et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[Et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qs(e);e!==null;){if(n=e[Et])return n;e=Qs(e)}return t}e=n,n=e.parentNode}return null}function _r(e){return e=e[Et]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function hl(e){return e[xr]||null}var oi=[],In=-1;function qt(e){return{current:e}}function we(e){0>In||(e.current=oi[In],oi[In]=null,In--)}function ve(e,t){In++,oi[In]=e.current,e.current=t}var Jt={},Be=qt(Jt),Ge=qt(!1),pn=Jt;function Dn(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Xe(e){return e=e.childContextTypes,e!=null}function yl(){we(Ge),we(Be)}function Ys(e,t,n){if(Be.current!==Jt)throw Error(u(168));ve(Be,t),ve(Ge,n)}function Gs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(u(108,ye(e)||"Unknown",l));return $({},n,r)}function vl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,pn=Be.current,ve(Be,e),ve(Ge,Ge.current),!0}function Xs(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=Gs(e,t,pn),r.__reactInternalMemoizedMergedChildContext=e,we(Ge),we(Be),ve(Be,e)):we(Ge),ve(Ge,n)}var It=null,gl=!1,ii=!1;function Ks(e){It===null?It=[e]:It.push(e)}function Hd(e){gl=!0,Ks(e)}function Zt(){if(!ii&&It!==null){ii=!0;var e=0,t=he;try{var n=It;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,gl=!1}catch(l){throw It!==null&&(It=It.slice(e+1)),Ja(Po,Zt),l}finally{he=t,ii=!1}}return null}var Fn=[],An=0,wl=null,Sl=0,ut=[],ct=0,mn=null,Dt=1,Ft="";function hn(e,t){Fn[An++]=Sl,Fn[An++]=wl,wl=e,Sl=t}function qs(e,t,n){ut[ct++]=Dt,ut[ct++]=Ft,ut[ct++]=mn,mn=e;var r=Dt;e=Ft;var l=32-yt(r)-1;r&=~(1<<l),n+=1;var o=32-yt(t)+l;if(30<o){var s=l-l%5;o=(r&(1<<s)-1).toString(32),r>>=s,l-=s,Dt=1<<32-yt(t)+l|n<<l|r,Ft=o+e}else Dt=1<<o|n<<l|r,Ft=e}function ai(e){e.return!==null&&(hn(e,1),qs(e,1,0))}function si(e){for(;e===wl;)wl=Fn[--An],Fn[An]=null,Sl=Fn[--An],Fn[An]=null;for(;e===mn;)mn=ut[--ct],ut[ct]=null,Ft=ut[--ct],ut[ct]=null,Dt=ut[--ct],ut[ct]=null}var ot=null,it=null,xe=!1,gt=null;function Js(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,it=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:Dt,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,it=null,!0):!1;default:return!1}}function ui(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ci(e){if(xe){var t=it;if(t){var n=t;if(!Zs(e,t)){if(ui(e))throw Error(u(418));t=Kt(n.nextSibling);var r=ot;t&&Zs(e,t)?Js(r,n):(e.flags=e.flags&-4097|2,xe=!1,ot=e)}}else{if(ui(e))throw Error(u(418));e.flags=e.flags&-4097|2,xe=!1,ot=e}}}function eu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function xl(e){if(e!==ot)return!1;if(!xe)return eu(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ti(e.type,e.memoizedProps)),t&&(t=it)){if(ui(e))throw tu(),Error(u(418));for(;t;)Js(e,t),t=Kt(t.nextSibling)}if(eu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=Kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=ot?Kt(e.stateNode.nextSibling):null;return!0}function tu(){for(var e=it;e;)e=Kt(e.nextSibling)}function $n(){it=ot=null,xe=!1}function fi(e){gt===null?gt=[e]:gt.push(e)}var Wd=oe.ReactCurrentBatchConfig;function kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var c=l.refs;s===null?delete c[o]:c[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function _l(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nu(e){var t=e._init;return t(e._payload)}function ru(e){function t(g,m){if(e){var w=g.deletions;w===null?(g.deletions=[m],g.flags|=16):w.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function l(g,m){return g=sn(g,m),g.index=0,g.sibling=null,g}function o(g,m,w){return g.index=w,e?(w=g.alternate,w!==null?(w=w.index,w<m?(g.flags|=2,m):w):(g.flags|=2,m)):(g.flags|=1048576,m)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function c(g,m,w,T){return m===null||m.tag!==6?(m=na(w,g.mode,T),m.return=g,m):(m=l(m,w),m.return=g,m)}function d(g,m,w,T){var H=w.type;return H===Z?N(g,m,w.props.children,T,w.key):m!==null&&(m.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ye&&nu(H)===m.type)?(T=l(m,w.props),T.ref=kr(g,m,w),T.return=g,T):(T=Ql(w.type,w.key,w.props,null,g.mode,T),T.ref=kr(g,m,w),T.return=g,T)}function S(g,m,w,T){return m===null||m.tag!==4||m.stateNode.containerInfo!==w.containerInfo||m.stateNode.implementation!==w.implementation?(m=ra(w,g.mode,T),m.return=g,m):(m=l(m,w.children||[]),m.return=g,m)}function N(g,m,w,T,H){return m===null||m.tag!==7?(m=kn(w,g.mode,T,H),m.return=g,m):(m=l(m,w),m.return=g,m)}function P(g,m,w){if(typeof m=="string"&&m!==""||typeof m=="number")return m=na(""+m,g.mode,w),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case z:return w=Ql(m.type,m.key,m.props,null,g.mode,w),w.ref=kr(g,null,m),w.return=g,w;case re:return m=ra(m,g.mode,w),m.return=g,m;case Ye:var T=m._init;return P(g,T(m._payload),w)}if(Jn(m)||K(m))return m=kn(m,g.mode,w,null),m.return=g,m;_l(g,m)}return null}function j(g,m,w,T){var H=m!==null?m.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return H!==null?null:c(g,m,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case z:return w.key===H?d(g,m,w,T):null;case re:return w.key===H?S(g,m,w,T):null;case Ye:return H=w._init,j(g,m,H(w._payload),T)}if(Jn(w)||K(w))return H!==null?null:N(g,m,w,T,null);_l(g,w)}return null}function F(g,m,w,T,H){if(typeof T=="string"&&T!==""||typeof T=="number")return g=g.get(w)||null,c(m,g,""+T,H);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case z:return g=g.get(T.key===null?w:T.key)||null,d(m,g,T,H);case re:return g=g.get(T.key===null?w:T.key)||null,S(m,g,T,H);case Ye:var b=T._init;return F(g,m,w,b(T._payload),H)}if(Jn(T)||K(T))return g=g.get(w)||null,N(m,g,T,H,null);_l(m,T)}return null}function B(g,m,w,T){for(var H=null,b=null,Q=m,q=m=0,Ie=null;Q!==null&&q<w.length;q++){Q.index>q?(Ie=Q,Q=null):Ie=Q.sibling;var ue=j(g,Q,w[q],T);if(ue===null){Q===null&&(Q=Ie);break}e&&Q&&ue.alternate===null&&t(g,Q),m=o(ue,m,q),b===null?H=ue:b.sibling=ue,b=ue,Q=Ie}if(q===w.length)return n(g,Q),xe&&hn(g,q),H;if(Q===null){for(;q<w.length;q++)Q=P(g,w[q],T),Q!==null&&(m=o(Q,m,q),b===null?H=Q:b.sibling=Q,b=Q);return xe&&hn(g,q),H}for(Q=r(g,Q);q<w.length;q++)Ie=F(Q,g,q,w[q],T),Ie!==null&&(e&&Ie.alternate!==null&&Q.delete(Ie.key===null?q:Ie.key),m=o(Ie,m,q),b===null?H=Ie:b.sibling=Ie,b=Ie);return e&&Q.forEach(function(un){return t(g,un)}),xe&&hn(g,q),H}function V(g,m,w,T){var H=K(w);if(typeof H!="function")throw Error(u(150));if(w=H.call(w),w==null)throw Error(u(151));for(var b=H=null,Q=m,q=m=0,Ie=null,ue=w.next();Q!==null&&!ue.done;q++,ue=w.next()){Q.index>q?(Ie=Q,Q=null):Ie=Q.sibling;var un=j(g,Q,ue.value,T);if(un===null){Q===null&&(Q=Ie);break}e&&Q&&un.alternate===null&&t(g,Q),m=o(un,m,q),b===null?H=un:b.sibling=un,b=un,Q=Ie}if(ue.done)return n(g,Q),xe&&hn(g,q),H;if(Q===null){for(;!ue.done;q++,ue=w.next())ue=P(g,ue.value,T),ue!==null&&(m=o(ue,m,q),b===null?H=ue:b.sibling=ue,b=ue);return xe&&hn(g,q),H}for(Q=r(g,Q);!ue.done;q++,ue=w.next())ue=F(Q,g,q,ue.value,T),ue!==null&&(e&&ue.alternate!==null&&Q.delete(ue.key===null?q:ue.key),m=o(ue,m,q),b===null?H=ue:b.sibling=ue,b=ue);return e&&Q.forEach(function(k0){return t(g,k0)}),xe&&hn(g,q),H}function Ne(g,m,w,T){if(typeof w=="object"&&w!==null&&w.type===Z&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case z:e:{for(var H=w.key,b=m;b!==null;){if(b.key===H){if(H=w.type,H===Z){if(b.tag===7){n(g,b.sibling),m=l(b,w.props.children),m.return=g,g=m;break e}}else if(b.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ye&&nu(H)===b.type){n(g,b.sibling),m=l(b,w.props),m.ref=kr(g,b,w),m.return=g,g=m;break e}n(g,b);break}else t(g,b);b=b.sibling}w.type===Z?(m=kn(w.props.children,g.mode,T,w.key),m.return=g,g=m):(T=Ql(w.type,w.key,w.props,null,g.mode,T),T.ref=kr(g,m,w),T.return=g,g=T)}return s(g);case re:e:{for(b=w.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===w.containerInfo&&m.stateNode.implementation===w.implementation){n(g,m.sibling),m=l(m,w.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=ra(w,g.mode,T),m.return=g,g=m}return s(g);case Ye:return b=w._init,Ne(g,m,b(w._payload),T)}if(Jn(w))return B(g,m,w,T);if(K(w))return V(g,m,w,T);_l(g,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,m!==null&&m.tag===6?(n(g,m.sibling),m=l(m,w),m.return=g,g=m):(n(g,m),m=na(w,g.mode,T),m.return=g,g=m),s(g)):n(g,m)}return Ne}var Bn=ru(!0),lu=ru(!1),kl=qt(null),jl=null,Un=null,di=null;function pi(){di=Un=jl=null}function mi(e){var t=kl.current;we(kl),e._currentValue=t}function hi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Vn(e,t){jl=e,di=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ke=!0),e.firstContext=null)}function ft(e){var t=e._currentValue;if(di!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(jl===null)throw Error(u(308));Un=e,jl.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var yn=null;function yi(e){yn===null?yn=[e]:yn.push(e)}function ou(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,yi(t)):(n.next=l.next,l.next=n),t.interleaved=n,At(e,r)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function vi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ie&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,At(e,n)}return l=r.interleaved,l===null?(t.next=t,yi(r)):(t.next=l.next,l.next=t),r.interleaved=t,At(e,n)}function Cl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,To(e,n)}}function au(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function El(e,t,n,r){var l=e.updateQueue;en=!1;var o=l.firstBaseUpdate,s=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var d=c,S=d.next;d.next=null,s===null?o=S:s.next=S,s=d;var N=e.alternate;N!==null&&(N=N.updateQueue,c=N.lastBaseUpdate,c!==s&&(c===null?N.firstBaseUpdate=S:c.next=S,N.lastBaseUpdate=d))}if(o!==null){var P=l.baseState;s=0,N=S=d=null,c=o;do{var j=c.lane,F=c.eventTime;if((r&j)===j){N!==null&&(N=N.next={eventTime:F,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var B=e,V=c;switch(j=t,F=n,V.tag){case 1:if(B=V.payload,typeof B=="function"){P=B.call(F,P,j);break e}P=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=V.payload,j=typeof B=="function"?B.call(F,P,j):B,j==null)break e;P=$({},P,j);break e;case 2:en=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,j=l.effects,j===null?l.effects=[c]:j.push(c))}else F={eventTime:F,lane:j,tag:c.tag,payload:c.payload,callback:c.callback,next:null},N===null?(S=N=F,d=P):N=N.next=F,s|=j;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;j=c,c=j.next,j.next=null,l.lastBaseUpdate=j,l.shared.pending=null}}while(!0);if(N===null&&(d=P),l.baseState=d,l.firstBaseUpdate=S,l.lastBaseUpdate=N,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);wn|=s,e.lanes=s,e.memoizedState=P}}function su(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(u(191,l));l.call(r)}}}var jr={},Nt=qt(jr),Cr=qt(jr),Er=qt(jr);function vn(e){if(e===jr)throw Error(u(174));return e}function gi(e,t){switch(ve(Er,t),ve(Cr,e),ve(Nt,jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wo(t,e)}we(Nt),ve(Nt,t)}function Hn(){we(Nt),we(Cr),we(Er)}function uu(e){vn(Er.current);var t=vn(Nt.current),n=wo(t,e.type);t!==n&&(ve(Cr,e),ve(Nt,n))}function wi(e){Cr.current===e&&(we(Nt),we(Cr))}var _e=qt(0);function Nl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Si=[];function xi(){for(var e=0;e<Si.length;e++)Si[e]._workInProgressVersionPrimary=null;Si.length=0}var Pl=oe.ReactCurrentDispatcher,_i=oe.ReactCurrentBatchConfig,gn=0,ke=null,ze=null,Re=null,Ol=!1,Nr=!1,Pr=0,bd=0;function Ue(){throw Error(u(321))}function ki(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function ji(e,t,n,r,l,o){if(gn=o,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pl.current=e===null||e.memoizedState===null?Xd:Kd,e=n(r,l),Nr){o=0;do{if(Nr=!1,Pr=0,25<=o)throw Error(u(301));o+=1,Re=ze=null,t.updateQueue=null,Pl.current=qd,e=n(r,l)}while(Nr)}if(Pl.current=Ll,t=ze!==null&&ze.next!==null,gn=0,Re=ze=ke=null,Ol=!1,t)throw Error(u(300));return e}function Ci(){var e=Pr!==0;return Pr=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ke.memoizedState=Re=e:Re=Re.next=e,Re}function dt(){if(ze===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Re===null?ke.memoizedState:Re.next;if(t!==null)Re=t,ze=e;else{if(e===null)throw Error(u(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Re===null?ke.memoizedState=Re=e:Re=Re.next=e}return Re}function Or(e,t){return typeof t=="function"?t(e):t}function Ei(e){var t=dt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=ze,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var s=l.next;l.next=o.next,o.next=s}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var c=s=null,d=null,S=o;do{var N=S.lane;if((gn&N)===N)d!==null&&(d=d.next={lane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),r=S.hasEagerState?S.eagerState:e(r,S.action);else{var P={lane:N,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null};d===null?(c=d=P,s=r):d=d.next=P,ke.lanes|=N,wn|=N}S=S.next}while(S!==null&&S!==o);d===null?s=r:d.next=c,vt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,ke.lanes|=o,wn|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ni(e){var t=dt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do o=e(o,s.action),s=s.next;while(s!==l);vt(o,t.memoizedState)||(Ke=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function cu(){}function fu(e,t){var n=ke,r=dt(),l=t(),o=!vt(r.memoizedState,l);if(o&&(r.memoizedState=l,Ke=!0),r=r.queue,Pi(mu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,zr(9,pu.bind(null,n,r,l,t),void 0,null),Me===null)throw Error(u(349));(gn&30)!==0||du(n,t,l)}return l}function du(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pu(e,t,n,r){t.value=n,t.getSnapshot=r,hu(t)&&yu(e)}function mu(e,t,n){return n(function(){hu(t)&&yu(e)})}function hu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function yu(e){var t=At(e,1);t!==null&&_t(t,e,1,-1)}function vu(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Or,lastRenderedState:e},t.queue=e,e=e.dispatch=Gd.bind(null,ke,e),[t.memoizedState,e]}function zr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gu(){return dt().memoizedState}function zl(e,t,n,r){var l=Pt();ke.flags|=e,l.memoizedState=zr(1|t,n,void 0,r===void 0?null:r)}function Tl(e,t,n,r){var l=dt();r=r===void 0?null:r;var o=void 0;if(ze!==null){var s=ze.memoizedState;if(o=s.destroy,r!==null&&ki(r,s.deps)){l.memoizedState=zr(t,n,o,r);return}}ke.flags|=e,l.memoizedState=zr(1|t,n,o,r)}function wu(e,t){return zl(8390656,8,e,t)}function Pi(e,t){return Tl(2048,8,e,t)}function Su(e,t){return Tl(4,2,e,t)}function xu(e,t){return Tl(4,4,e,t)}function _u(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ku(e,t,n){return n=n!=null?n.concat([e]):null,Tl(4,4,_u.bind(null,t,e),n)}function Oi(){}function ju(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ki(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cu(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ki(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Eu(e,t,n){return(gn&21)===0?(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n):(vt(n,t)||(n=ns(),ke.lanes|=n,wn|=n,e.baseState=!0),t)}function Qd(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=_i.transition;_i.transition={};try{e(!1),t()}finally{he=n,_i.transition=r}}function Nu(){return dt().memoizedState}function Yd(e,t,n){var r=on(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pu(e))Ou(t,n);else if(n=ou(e,t,n,r),n!==null){var l=Qe();_t(n,e,r,l),zu(n,t,r)}}function Gd(e,t,n){var r=on(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pu(e))Ou(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,c=o(s,n);if(l.hasEagerState=!0,l.eagerState=c,vt(c,s)){var d=t.interleaved;d===null?(l.next=l,yi(t)):(l.next=d.next,d.next=l),t.interleaved=l;return}}catch{}finally{}n=ou(e,t,l,r),n!==null&&(l=Qe(),_t(n,e,r,l),zu(n,t,r))}}function Pu(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function Ou(e,t){Nr=Ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,To(e,n)}}var Ll={readContext:ft,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},Xd={readContext:ft,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:wu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zl(4194308,4,_u.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zl(4194308,4,e,t)},useInsertionEffect:function(e,t){return zl(4,2,e,t)},useMemo:function(e,t){var n=Pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yd.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:vu,useDebugValue:Oi,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=vu(!1),t=e[0];return e=Qd.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,l=Pt();if(xe){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Me===null)throw Error(u(349));(gn&30)!==0||du(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,wu(mu.bind(null,r,o,e),[e]),r.flags|=2048,zr(9,pu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Pt(),t=Me.identifierPrefix;if(xe){var n=Ft,r=Dt;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=bd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Kd={readContext:ft,useCallback:ju,useContext:ft,useEffect:Pi,useImperativeHandle:ku,useInsertionEffect:Su,useLayoutEffect:xu,useMemo:Cu,useReducer:Ei,useRef:gu,useState:function(){return Ei(Or)},useDebugValue:Oi,useDeferredValue:function(e){var t=dt();return Eu(t,ze.memoizedState,e)},useTransition:function(){var e=Ei(Or)[0],t=dt().memoizedState;return[e,t]},useMutableSource:cu,useSyncExternalStore:fu,useId:Nu,unstable_isNewReconciler:!1},qd={readContext:ft,useCallback:ju,useContext:ft,useEffect:Pi,useImperativeHandle:ku,useInsertionEffect:Su,useLayoutEffect:xu,useMemo:Cu,useReducer:Ni,useRef:gu,useState:function(){return Ni(Or)},useDebugValue:Oi,useDeferredValue:function(e){var t=dt();return ze===null?t.memoizedState=e:Eu(t,ze.memoizedState,e)},useTransition:function(){var e=Ni(Or)[0],t=dt().memoizedState;return[e,t]},useMutableSource:cu,useSyncExternalStore:fu,useId:Nu,unstable_isNewReconciler:!1};function wt(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rl={isMounted:function(e){return(e=e._reactInternals)?fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),l=on(e),o=$t(r,l);o.payload=t,n!=null&&(o.callback=n),t=tn(e,o,l),t!==null&&(_t(t,e,l,r),Cl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),l=on(e),o=$t(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=tn(e,o,l),t!==null&&(_t(t,e,l,r),Cl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=on(e),l=$t(n,r);l.tag=2,t!=null&&(l.callback=t),t=tn(e,l,r),t!==null&&(_t(t,e,r,n),Cl(t,e,r))}};function Tu(e,t,n,r,l,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!yr(n,r)||!yr(l,o):!0}function Lu(e,t,n){var r=!1,l=Jt,o=t.contextType;return typeof o=="object"&&o!==null?o=ft(o):(l=Xe(t)?pn:Be.current,r=t.contextTypes,o=(r=r!=null)?Dn(e,l):Jt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Rl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ru(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Rl.enqueueReplaceState(t,t.state,null)}function Ti(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},vi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=ft(o):(o=Xe(t)?pn:Be.current,l.context=Dn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(zi(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Rl.enqueueReplaceState(l,l.state,null),El(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Wn(e,t){try{var n="",r=t;do n+=ae(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Li(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ri(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Jd=typeof WeakMap=="function"?WeakMap:Map;function Mu(e,t,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bl||(Bl=!0,Gi=r),Ri(e,t)},n}function Iu(e,t,n){n=$t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ri(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ri(e,t),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Du(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Jd;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=d0.bind(null,e,t,n),t.then(e,e))}function Fu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Au(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$t(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Zd=oe.ReactCurrentOwner,Ke=!1;function be(e,t,n,r){t.child=e===null?lu(t,null,n,r):Bn(t,e.child,n,r)}function $u(e,t,n,r,l){n=n.render;var o=t.ref;return Vn(t,l),r=ji(e,t,n,r,o,l),n=Ci(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Bt(e,t,l)):(xe&&n&&ai(t),t.flags|=1,be(e,t,r,l),t.child)}function Bu(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!ta(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Uu(e,t,o,r,l)):(e=Ql(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&l)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:yr,n(s,r)&&e.ref===t.ref)return Bt(e,t,l)}return t.flags|=1,e=sn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Uu(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(yr(o,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=o,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,Bt(e,t,l)}return Mi(e,t,n,r,l)}function Vu(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Qn,at),at|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(Qn,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ve(Qn,at),at|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ve(Qn,at),at|=r;return be(e,t,l,n),t.child}function Hu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mi(e,t,n,r,l){var o=Xe(n)?pn:Be.current;return o=Dn(t,o),Vn(t,l),n=ji(e,t,n,r,o,l),r=Ci(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Bt(e,t,l)):(xe&&r&&ai(t),t.flags|=1,be(e,t,n,l),t.child)}function Wu(e,t,n,r,l){if(Xe(n)){var o=!0;vl(t)}else o=!1;if(Vn(t,l),t.stateNode===null)Il(e,t),Lu(t,n,r),Ti(t,n,r,l),r=!0;else if(e===null){var s=t.stateNode,c=t.memoizedProps;s.props=c;var d=s.context,S=n.contextType;typeof S=="object"&&S!==null?S=ft(S):(S=Xe(n)?pn:Be.current,S=Dn(t,S));var N=n.getDerivedStateFromProps,P=typeof N=="function"||typeof s.getSnapshotBeforeUpdate=="function";P||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==r||d!==S)&&Ru(t,s,r,S),en=!1;var j=t.memoizedState;s.state=j,El(t,r,s,l),d=t.memoizedState,c!==r||j!==d||Ge.current||en?(typeof N=="function"&&(zi(t,n,N,r),d=t.memoizedState),(c=en||Tu(t,n,c,r,j,d,S))?(P||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),s.props=r,s.state=d,s.context=S,r=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,iu(e,t),c=t.memoizedProps,S=t.type===t.elementType?c:wt(t.type,c),s.props=S,P=t.pendingProps,j=s.context,d=n.contextType,typeof d=="object"&&d!==null?d=ft(d):(d=Xe(n)?pn:Be.current,d=Dn(t,d));var F=n.getDerivedStateFromProps;(N=typeof F=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==P||j!==d)&&Ru(t,s,r,d),en=!1,j=t.memoizedState,s.state=j,El(t,r,s,l);var B=t.memoizedState;c!==P||j!==B||Ge.current||en?(typeof F=="function"&&(zi(t,n,F,r),B=t.memoizedState),(S=en||Tu(t,n,S,r,j,B,d)||!1)?(N||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,B,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,B,d)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=B),s.props=r,s.state=B,s.context=d,r=S):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),r=!1)}return Ii(e,t,n,r,o,l)}function Ii(e,t,n,r,l,o){Hu(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return l&&Xs(t,n,!1),Bt(e,t,o);r=t.stateNode,Zd.current=t;var c=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Bn(t,e.child,null,o),t.child=Bn(t,null,c,o)):be(e,t,c,o),t.memoizedState=r.state,l&&Xs(t,n,!0),t.child}function bu(e){var t=e.stateNode;t.pendingContext?Ys(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ys(e,t.context,!1),gi(e,t.containerInfo)}function Qu(e,t,n,r,l){return $n(),fi(l),t.flags|=256,be(e,t,n,r),t.child}var Di={dehydrated:null,treeContext:null,retryLane:0};function Fi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yu(e,t,n){var r=t.pendingProps,l=_e.current,o=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(l&2)!==0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ve(_e,l&1),e===null)return ci(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Yl(s,r,0,null),e=kn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Fi(n),t.memoizedState=Di,e):Ai(t,s));if(l=e.memoizedState,l!==null&&(c=l.dehydrated,c!==null))return e0(e,t,s,r,c,l,n);if(o){o=r.fallback,s=t.mode,l=e.child,c=l.sibling;var d={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=sn(l,d),r.subtreeFlags=l.subtreeFlags&14680064),c!==null?o=sn(c,o):(o=kn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Fi(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Di,r}return o=e.child,e=o.sibling,r=sn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ai(e,t){return t=Yl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ml(e,t,n,r){return r!==null&&fi(r),Bn(t,e.child,null,n),e=Ai(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function e0(e,t,n,r,l,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Li(Error(u(422))),Ml(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Yl({mode:"visible",children:r.children},l,0,null),o=kn(o,l,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Bn(t,e.child,null,s),t.child.memoizedState=Fi(s),t.memoizedState=Di,o);if((t.mode&1)===0)return Ml(e,t,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var c=r.dgst;return r=c,o=Error(u(419)),r=Li(o,r,void 0),Ml(e,t,s,r)}if(c=(s&e.childLanes)!==0,Ke||c){if(r=Me,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|s))!==0?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,At(e,l),_t(r,e,l,-1))}return ea(),r=Li(Error(u(421))),Ml(e,t,s,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=p0.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,it=Kt(l.nextSibling),ot=t,xe=!0,gt=null,e!==null&&(ut[ct++]=Dt,ut[ct++]=Ft,ut[ct++]=mn,Dt=e.id,Ft=e.overflow,mn=t),t=Ai(t,r.children),t.flags|=4096,t)}function Gu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),hi(e.return,t,n)}function $i(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Xu(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(be(e,t,r.children,n),r=_e.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gu(e,n,t);else if(e.tag===19)Gu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(_e,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Nl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),$i(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Nl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}$i(t,!0,n,null,o);break;case"together":$i(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Il(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function t0(e,t,n){switch(t.tag){case 3:bu(t),$n();break;case 5:uu(t);break;case 1:Xe(t.type)&&vl(t);break;case 4:gi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;ve(kl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(_e,_e.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Yu(e,t,n):(ve(_e,_e.current&1),e=Bt(e,t,n),e!==null?e.sibling:null);ve(_e,_e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Xu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ve(_e,_e.current),r)break;return null;case 22:case 23:return t.lanes=0,Vu(e,t,n)}return Bt(e,t,n)}var Ku,Bi,qu,Ju;Ku=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Bi=function(){},qu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,vn(Nt.current);var o=null;switch(n){case"input":l=ho(e,l),r=ho(e,r),o=[];break;case"select":l=$({},l,{value:void 0}),r=$({},r,{value:void 0}),o=[];break;case"textarea":l=go(e,l),r=go(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ml)}So(n,r);var s;n=null;for(S in l)if(!r.hasOwnProperty(S)&&l.hasOwnProperty(S)&&l[S]!=null)if(S==="style"){var c=l[S];for(s in c)c.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else S!=="dangerouslySetInnerHTML"&&S!=="children"&&S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(p.hasOwnProperty(S)?o||(o=[]):(o=o||[]).push(S,null));for(S in r){var d=r[S];if(c=l?.[S],r.hasOwnProperty(S)&&d!==c&&(d!=null||c!=null))if(S==="style")if(c){for(s in c)!c.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in d)d.hasOwnProperty(s)&&c[s]!==d[s]&&(n||(n={}),n[s]=d[s])}else n||(o||(o=[]),o.push(S,n)),n=d;else S==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(o=o||[]).push(S,d)):S==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(S,""+d):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&(p.hasOwnProperty(S)?(d!=null&&S==="onScroll"&&ge("scroll",e),o||c===d||(o=[])):(o=o||[]).push(S,d))}n&&(o=o||[]).push("style",n);var S=o;(t.updateQueue=S)&&(t.flags|=4)}},Ju=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tr(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function n0(e,t,n){var r=t.pendingProps;switch(si(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Xe(t.type)&&yl(),Ve(t),null;case 3:return r=t.stateNode,Hn(),we(Ge),we(Be),xi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,gt!==null&&(qi(gt),gt=null))),Bi(e,t),Ve(t),null;case 5:wi(t);var l=vn(Er.current);if(n=t.type,e!==null&&t.stateNode!=null)qu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return Ve(t),null}if(e=vn(Nt.current),xl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Et]=t,r[xr]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(l=0;l<gr.length;l++)ge(gr[l],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":La(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":Ia(r,o),ge("invalid",r)}So(n,o),l=null;for(var s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="children"?typeof c=="string"?r.textContent!==c&&(o.suppressHydrationWarning!==!0&&pl(r.textContent,c,e),l=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&pl(r.textContent,c,e),l=["children",""+c]):p.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&ge("scroll",r)}switch(n){case"input":Wr(r),Ma(r,o,!0);break;case"textarea":Wr(r),Fa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ml)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Aa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Et]=t,e[xr]=r,Ku(e,t,!1,!1),t.stateNode=e;e:{switch(s=xo(n,r),n){case"dialog":ge("cancel",e),ge("close",e),l=r;break;case"iframe":case"object":case"embed":ge("load",e),l=r;break;case"video":case"audio":for(l=0;l<gr.length;l++)ge(gr[l],e);l=r;break;case"source":ge("error",e),l=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),l=r;break;case"details":ge("toggle",e),l=r;break;case"input":La(e,r),l=ho(e,r),ge("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=$({},r,{value:void 0}),ge("invalid",e);break;case"textarea":Ia(e,r),l=go(e,r),ge("invalid",e);break;default:l=r}So(n,l),c=l;for(o in c)if(c.hasOwnProperty(o)){var d=c[o];o==="style"?Ua(e,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&$a(e,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Zn(e,d):typeof d=="number"&&Zn(e,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(p.hasOwnProperty(o)?d!=null&&o==="onScroll"&&ge("scroll",e):d!=null&&X(e,o,d,s))}switch(n){case"input":Wr(e),Ma(e,r,!1);break;case"textarea":Wr(e),Fa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+me(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?jn(e,!!r.multiple,o,!1):r.defaultValue!=null&&jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ml)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ve(t),null;case 6:if(e&&t.stateNode!=null)Ju(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=vn(Er.current),vn(Nt.current),xl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Et]=t,(o=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:pl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pl(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Et]=t,t.stateNode=r}return Ve(t),null;case 13:if(we(_e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&it!==null&&(t.mode&1)!==0&&(t.flags&128)===0)tu(),$n(),t.flags|=98560,o=!1;else if(o=xl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[Et]=t}else $n(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),o=!1}else gt!==null&&(qi(gt),gt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(_e.current&1)!==0?Te===0&&(Te=3):ea())),t.updateQueue!==null&&(t.flags|=4),Ve(t),null);case 4:return Hn(),Bi(e,t),e===null&&wr(t.stateNode.containerInfo),Ve(t),null;case 10:return mi(t.type._context),Ve(t),null;case 17:return Xe(t.type)&&yl(),Ve(t),null;case 19:if(we(_e),o=t.memoizedState,o===null)return Ve(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Tr(o,!1);else{if(Te!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Nl(e),s!==null){for(t.flags|=128,Tr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(_e,_e.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ee()>Yn&&(t.flags|=128,r=!0,Tr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Nl(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!xe)return Ve(t),null}else 2*Ee()-o.renderingStartTime>Yn&&n!==1073741824&&(t.flags|=128,r=!0,Tr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ee(),t.sibling=null,n=_e.current,ve(_e,r?n&1|2:n&1),t):(Ve(t),null);case 22:case 23:return Zi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(at&1073741824)!==0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function r0(e,t){switch(si(t),t.tag){case 1:return Xe(t.type)&&yl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),we(Ge),we(Be),xi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return wi(t),null;case 13:if(we(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(_e),null;case 4:return Hn(),null;case 10:return mi(t.type._context),null;case 22:case 23:return Zi(),null;case 24:return null;default:return null}}var Dl=!1,He=!1,l0=typeof WeakSet=="function"?WeakSet:Set,A=null;function bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function Ui(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var Zu=!1;function o0(e,t){if(Zo=nl,e=Ts(),bo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,c=-1,d=-1,S=0,N=0,P=e,j=null;t:for(;;){for(var F;P!==n||l!==0&&P.nodeType!==3||(c=s+l),P!==o||r!==0&&P.nodeType!==3||(d=s+r),P.nodeType===3&&(s+=P.nodeValue.length),(F=P.firstChild)!==null;)j=P,P=F;for(;;){if(P===e)break t;if(j===n&&++S===l&&(c=s),j===o&&++N===r&&(d=s),(F=P.nextSibling)!==null)break;P=j,j=P.parentNode}P=F}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(ei={focusedElem:e,selectionRange:n},nl=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var B=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var V=B.memoizedProps,Ne=B.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?V:wt(t.type,V),Ne);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(T){Ce(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return B=Zu,Zu=!1,B}function Lr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Ui(t,n,o)}l=l.next}while(l!==r)}}function Fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ec(e){var t=e.alternate;t!==null&&(e.alternate=null,ec(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Et],delete t[xr],delete t[li],delete t[Ud],delete t[Vd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tc(e){return e.tag===5||e.tag===3||e.tag===4}function nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ml));else if(r!==4&&(e=e.child,e!==null))for(Hi(e,t,n),e=e.sibling;e!==null;)Hi(e,t,n),e=e.sibling}function Wi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wi(e,t,n),e=e.sibling;e!==null;)Wi(e,t,n),e=e.sibling}var Fe=null,St=!1;function nn(e,t,n){for(n=n.child;n!==null;)rc(e,t,n),n=n.sibling}function rc(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Kr,n)}catch{}switch(n.tag){case 5:He||bn(n,t);case 6:var r=Fe,l=St;Fe=null,nn(e,t,n),Fe=r,St=l,Fe!==null&&(St?(e=Fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(St?(e=Fe,n=n.stateNode,e.nodeType===8?ri(e.parentNode,n):e.nodeType===1&&ri(e,n),cr(e)):ri(Fe,n.stateNode));break;case 4:r=Fe,l=St,Fe=n.stateNode.containerInfo,St=!0,nn(e,t,n),Fe=r,St=l;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&Ui(n,t,s),l=l.next}while(l!==r)}nn(e,t,n);break;case 1:if(!He&&(bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){Ce(n,t,c)}nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,nn(e,t,n),He=r):nn(e,t,n);break;default:nn(e,t,n)}}function lc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new l0),t.forEach(function(r){var l=m0.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:Fe=c.stateNode,St=!1;break e;case 3:Fe=c.stateNode.containerInfo,St=!0;break e;case 4:Fe=c.stateNode.containerInfo,St=!0;break e}c=c.return}if(Fe===null)throw Error(u(160));rc(o,s,l),Fe=null,St=!1;var d=l.alternate;d!==null&&(d.return=null),l.return=null}catch(S){Ce(l,t,S)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)oc(t,e),t=t.sibling}function oc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),Ot(e),r&4){try{Lr(3,e,e.return),Fl(3,e)}catch(V){Ce(e,e.return,V)}try{Lr(5,e,e.return)}catch(V){Ce(e,e.return,V)}}break;case 1:xt(t,e),Ot(e),r&512&&n!==null&&bn(n,n.return);break;case 5:if(xt(t,e),Ot(e),r&512&&n!==null&&bn(n,n.return),e.flags&32){var l=e.stateNode;try{Zn(l,"")}catch(V){Ce(e,e.return,V)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&Ra(l,o),xo(c,s);var S=xo(c,o);for(s=0;s<d.length;s+=2){var N=d[s],P=d[s+1];N==="style"?Ua(l,P):N==="dangerouslySetInnerHTML"?$a(l,P):N==="children"?Zn(l,P):X(l,N,P,S)}switch(c){case"input":yo(l,o);break;case"textarea":Da(l,o);break;case"select":var j=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var F=o.value;F!=null?jn(l,!!o.multiple,F,!1):j!==!!o.multiple&&(o.defaultValue!=null?jn(l,!!o.multiple,o.defaultValue,!0):jn(l,!!o.multiple,o.multiple?[]:"",!1))}l[xr]=o}catch(V){Ce(e,e.return,V)}}break;case 6:if(xt(t,e),Ot(e),r&4){if(e.stateNode===null)throw Error(u(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(V){Ce(e,e.return,V)}}break;case 3:if(xt(t,e),Ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{cr(t.containerInfo)}catch(V){Ce(e,e.return,V)}break;case 4:xt(t,e),Ot(e);break;case 13:xt(t,e),Ot(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Yi=Ee())),r&4&&lc(e);break;case 22:if(N=n!==null&&n.memoizedState!==null,e.mode&1?(He=(S=He)||N,xt(t,e),He=S):xt(t,e),Ot(e),r&8192){if(S=e.memoizedState!==null,(e.stateNode.isHidden=S)&&!N&&(e.mode&1)!==0)for(A=e,N=e.child;N!==null;){for(P=A=N;A!==null;){switch(j=A,F=j.child,j.tag){case 0:case 11:case 14:case 15:Lr(4,j,j.return);break;case 1:bn(j,j.return);var B=j.stateNode;if(typeof B.componentWillUnmount=="function"){r=j,n=j.return;try{t=r,B.props=t.memoizedProps,B.state=t.memoizedState,B.componentWillUnmount()}catch(V){Ce(r,n,V)}}break;case 5:bn(j,j.return);break;case 22:if(j.memoizedState!==null){sc(P);continue}}F!==null?(F.return=j,A=F):sc(P)}N=N.sibling}e:for(N=null,P=e;;){if(P.tag===5){if(N===null){N=P;try{l=P.stateNode,S?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=P.stateNode,d=P.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=Ba("display",s))}catch(V){Ce(e,e.return,V)}}}else if(P.tag===6){if(N===null)try{P.stateNode.nodeValue=S?"":P.memoizedProps}catch(V){Ce(e,e.return,V)}}else if((P.tag!==22&&P.tag!==23||P.memoizedState===null||P===e)&&P.child!==null){P.child.return=P,P=P.child;continue}if(P===e)break e;for(;P.sibling===null;){if(P.return===null||P.return===e)break e;N===P&&(N=null),P=P.return}N===P&&(N=null),P.sibling.return=P.return,P=P.sibling}}break;case 19:xt(t,e),Ot(e),r&4&&lc(e);break;case 21:break;default:xt(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tc(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Zn(l,""),r.flags&=-33);var o=nc(e);Wi(e,o,l);break;case 3:case 4:var s=r.stateNode.containerInfo,c=nc(e);Hi(e,c,s);break;default:throw Error(u(161))}}catch(d){Ce(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function i0(e,t,n){A=e,ic(e)}function ic(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var l=A,o=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||Dl;if(!s){var c=l.alternate,d=c!==null&&c.memoizedState!==null||He;c=Dl;var S=He;if(Dl=s,(He=d)&&!S)for(A=l;A!==null;)s=A,d=s.child,s.tag===22&&s.memoizedState!==null?uc(l):d!==null?(d.return=s,A=d):uc(l);for(;o!==null;)A=o,ic(o),o=o.sibling;A=l,Dl=c,He=S}ac(e)}else(l.subtreeFlags&8772)!==0&&o!==null?(o.return=l,A=o):ac(e)}}function ac(e){for(;A!==null;){var t=A;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:He||Fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!He)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:wt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&su(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}su(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var S=t.alternate;if(S!==null){var N=S.memoizedState;if(N!==null){var P=N.dehydrated;P!==null&&cr(P)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}He||t.flags&512&&Vi(t)}catch(j){Ce(t,t.return,j)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function sc(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function uc(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fl(4,t)}catch(d){Ce(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(d){Ce(t,l,d)}}var o=t.return;try{Vi(t)}catch(d){Ce(t,o,d)}break;case 5:var s=t.return;try{Vi(t)}catch(d){Ce(t,s,d)}}}catch(d){Ce(t,t.return,d)}if(t===e){A=null;break}var c=t.sibling;if(c!==null){c.return=t.return,A=c;break}A=t.return}}var a0=Math.ceil,Al=oe.ReactCurrentDispatcher,bi=oe.ReactCurrentOwner,pt=oe.ReactCurrentBatchConfig,ie=0,Me=null,Pe=null,Ae=0,at=0,Qn=qt(0),Te=0,Rr=null,wn=0,$l=0,Qi=0,Mr=null,qe=null,Yi=0,Yn=1/0,Ut=null,Bl=!1,Gi=null,rn=null,Ul=!1,ln=null,Vl=0,Ir=0,Xi=null,Hl=-1,Wl=0;function Qe(){return(ie&6)!==0?Ee():Hl!==-1?Hl:Hl=Ee()}function on(e){return(e.mode&1)===0?1:(ie&2)!==0&&Ae!==0?Ae&-Ae:Wd.transition!==null?(Wl===0&&(Wl=ns()),Wl):(e=he,e!==0||(e=window.event,e=e===void 0?16:fs(e.type)),e)}function _t(e,t,n,r){if(50<Ir)throw Ir=0,Xi=null,Error(u(185));or(e,n,r),((ie&2)===0||e!==Me)&&(e===Me&&((ie&2)===0&&($l|=n),Te===4&&an(e,Ae)),Je(e,r),n===1&&ie===0&&(t.mode&1)===0&&(Yn=Ee()+500,gl&&Zt()))}function Je(e,t){var n=e.callbackNode;Wf(e,t);var r=Zr(e,e===Me?Ae:0);if(r===0)n!==null&&Za(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Za(n),t===1)e.tag===0?Hd(fc.bind(null,e)):Ks(fc.bind(null,e)),$d(function(){(ie&6)===0&&Zt()}),n=null;else{switch(rs(r)){case 1:n=Po;break;case 4:n=es;break;case 16:n=Xr;break;case 536870912:n=ts;break;default:n=Xr}n=wc(n,cc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cc(e,t){if(Hl=-1,Wl=0,(ie&6)!==0)throw Error(u(327));var n=e.callbackNode;if(Gn()&&e.callbackNode!==n)return null;var r=Zr(e,e===Me?Ae:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=bl(e,r);else{t=r;var l=ie;ie|=2;var o=pc();(Me!==e||Ae!==t)&&(Ut=null,Yn=Ee()+500,xn(e,t));do try{c0();break}catch(c){dc(e,c)}while(!0);pi(),Al.current=o,ie=l,Pe!==null?t=0:(Me=null,Ae=0,t=Te)}if(t!==0){if(t===2&&(l=Oo(e),l!==0&&(r=l,t=Ki(e,l))),t===1)throw n=Rr,xn(e,0),an(e,r),Je(e,Ee()),n;if(t===6)an(e,r);else{if(l=e.current.alternate,(r&30)===0&&!s0(l)&&(t=bl(e,r),t===2&&(o=Oo(e),o!==0&&(r=o,t=Ki(e,o))),t===1))throw n=Rr,xn(e,0),an(e,r),Je(e,Ee()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:_n(e,qe,Ut);break;case 3:if(an(e,r),(r&130023424)===r&&(t=Yi+500-Ee(),10<t)){if(Zr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ni(_n.bind(null,e,qe,Ut),t);break}_n(e,qe,Ut);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var s=31-yt(r);o=1<<s,s=t[s],s>l&&(l=s),r&=~o}if(r=l,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*a0(r/1960))-r,10<r){e.timeoutHandle=ni(_n.bind(null,e,qe,Ut),r);break}_n(e,qe,Ut);break;case 5:_n(e,qe,Ut);break;default:throw Error(u(329))}}}return Je(e,Ee()),e.callbackNode===n?cc.bind(null,e):null}function Ki(e,t){var n=Mr;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=bl(e,t),e!==2&&(t=qe,qe=n,t!==null&&qi(t)),e}function qi(e){qe===null?qe=e:qe.push.apply(qe,e)}function s0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!vt(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~Qi,t&=~$l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function fc(e){if((ie&6)!==0)throw Error(u(327));Gn();var t=Zr(e,0);if((t&1)===0)return Je(e,Ee()),null;var n=bl(e,t);if(e.tag!==0&&n===2){var r=Oo(e);r!==0&&(t=r,n=Ki(e,r))}if(n===1)throw n=Rr,xn(e,0),an(e,t),Je(e,Ee()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,qe,Ut),Je(e,Ee()),null}function Ji(e,t){var n=ie;ie|=1;try{return e(t)}finally{ie=n,ie===0&&(Yn=Ee()+500,gl&&Zt())}}function Sn(e){ln!==null&&ln.tag===0&&(ie&6)===0&&Gn();var t=ie;ie|=1;var n=pt.transition,r=he;try{if(pt.transition=null,he=1,e)return e()}finally{he=r,pt.transition=n,ie=t,(ie&6)===0&&Zt()}}function Zi(){at=Qn.current,we(Qn)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ad(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(si(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yl();break;case 3:Hn(),we(Ge),we(Be),xi();break;case 5:wi(r);break;case 4:Hn();break;case 13:we(_e);break;case 19:we(_e);break;case 10:mi(r.type._context);break;case 22:case 23:Zi()}n=n.return}if(Me=e,Pe=e=sn(e.current,null),Ae=at=t,Te=0,Rr=null,Qi=$l=wn=0,qe=Mr=null,yn!==null){for(t=0;t<yn.length;t++)if(n=yn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=l,r.next=s}n.pending=r}yn=null}return e}function dc(e,t){do{var n=Pe;try{if(pi(),Pl.current=Ll,Ol){for(var r=ke.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Ol=!1}if(gn=0,Re=ze=ke=null,Nr=!1,Pr=0,bi.current=null,n===null||n.return===null){Te=1,Rr=t,Pe=null;break}e:{var o=e,s=n.return,c=n,d=t;if(t=Ae,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var S=d,N=c,P=N.tag;if((N.mode&1)===0&&(P===0||P===11||P===15)){var j=N.alternate;j?(N.updateQueue=j.updateQueue,N.memoizedState=j.memoizedState,N.lanes=j.lanes):(N.updateQueue=null,N.memoizedState=null)}var F=Fu(s);if(F!==null){F.flags&=-257,Au(F,s,c,o,t),F.mode&1&&Du(o,S,t),t=F,d=S;var B=t.updateQueue;if(B===null){var V=new Set;V.add(d),t.updateQueue=V}else B.add(d);break e}else{if((t&1)===0){Du(o,S,t),ea();break e}d=Error(u(426))}}else if(xe&&c.mode&1){var Ne=Fu(s);if(Ne!==null){(Ne.flags&65536)===0&&(Ne.flags|=256),Au(Ne,s,c,o,t),fi(Wn(d,c));break e}}o=d=Wn(d,c),Te!==4&&(Te=2),Mr===null?Mr=[o]:Mr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Mu(o,d,t);au(o,g);break e;case 1:c=d;var m=o.type,w=o.stateNode;if((o.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(rn===null||!rn.has(w)))){o.flags|=65536,t&=-t,o.lanes|=t;var T=Iu(o,c,t);au(o,T);break e}}o=o.return}while(o!==null)}hc(n)}catch(H){t=H,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function pc(){var e=Al.current;return Al.current=Ll,e===null?Ll:e}function ea(){(Te===0||Te===3||Te===2)&&(Te=4),Me===null||(wn&268435455)===0&&($l&268435455)===0||an(Me,Ae)}function bl(e,t){var n=ie;ie|=2;var r=pc();(Me!==e||Ae!==t)&&(Ut=null,xn(e,t));do try{u0();break}catch(l){dc(e,l)}while(!0);if(pi(),ie=n,Al.current=r,Pe!==null)throw Error(u(261));return Me=null,Ae=0,Te}function u0(){for(;Pe!==null;)mc(Pe)}function c0(){for(;Pe!==null&&!If();)mc(Pe)}function mc(e){var t=gc(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?hc(e):Pe=t,bi.current=null}function hc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=n0(n,t,at),n!==null){Pe=n;return}}else{if(n=r0(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,Pe=null;return}}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Te===0&&(Te=5)}function _n(e,t,n){var r=he,l=pt.transition;try{pt.transition=null,he=1,f0(e,t,n,r)}finally{pt.transition=l,he=r}return null}function f0(e,t,n,r){do Gn();while(ln!==null);if((ie&6)!==0)throw Error(u(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(bf(e,o),e===Me&&(Pe=Me=null,Ae=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ul||(Ul=!0,wc(Xr,function(){return Gn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=pt.transition,pt.transition=null;var s=he;he=1;var c=ie;ie|=4,bi.current=null,o0(e,n),oc(n,e),Td(ei),nl=!!Zo,ei=Zo=null,e.current=n,i0(n),Df(),ie=c,he=s,pt.transition=o}else e.current=n;if(Ul&&(Ul=!1,ln=e,Vl=l),o=e.pendingLanes,o===0&&(rn=null),$f(n.stateNode),Je(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Bl)throw Bl=!1,e=Gi,Gi=null,e;return(Vl&1)!==0&&e.tag!==0&&Gn(),o=e.pendingLanes,(o&1)!==0?e===Xi?Ir++:(Ir=0,Xi=e):Ir=0,Zt(),null}function Gn(){if(ln!==null){var e=rs(Vl),t=pt.transition,n=he;try{if(pt.transition=null,he=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,Vl=0,(ie&6)!==0)throw Error(u(331));var l=ie;for(ie|=4,A=e.current;A!==null;){var o=A,s=o.child;if((A.flags&16)!==0){var c=o.deletions;if(c!==null){for(var d=0;d<c.length;d++){var S=c[d];for(A=S;A!==null;){var N=A;switch(N.tag){case 0:case 11:case 15:Lr(8,N,o)}var P=N.child;if(P!==null)P.return=N,A=P;else for(;A!==null;){N=A;var j=N.sibling,F=N.return;if(ec(N),N===S){A=null;break}if(j!==null){j.return=F,A=j;break}A=F}}}var B=o.alternate;if(B!==null){var V=B.child;if(V!==null){B.child=null;do{var Ne=V.sibling;V.sibling=null,V=Ne}while(V!==null)}}A=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,A=s;else e:for(;A!==null;){if(o=A,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Lr(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,A=g;break e}A=o.return}}var m=e.current;for(A=m;A!==null;){s=A;var w=s.child;if((s.subtreeFlags&2064)!==0&&w!==null)w.return=s,A=w;else e:for(s=m;A!==null;){if(c=A,(c.flags&2048)!==0)try{switch(c.tag){case 0:case 11:case 15:Fl(9,c)}}catch(H){Ce(c,c.return,H)}if(c===s){A=null;break e}var T=c.sibling;if(T!==null){T.return=c.return,A=T;break e}A=c.return}}if(ie=l,Zt(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Kr,e)}catch{}r=!0}return r}finally{he=n,pt.transition=t}}return!1}function yc(e,t,n){t=Wn(n,t),t=Mu(e,t,1),e=tn(e,t,1),t=Qe(),e!==null&&(or(e,1,t),Je(e,t))}function Ce(e,t,n){if(e.tag===3)yc(e,e,n);else for(;t!==null;){if(t.tag===3){yc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){e=Wn(n,e),e=Iu(t,e,1),t=tn(t,e,1),e=Qe(),t!==null&&(or(t,1,e),Je(t,e));break}}t=t.return}}function d0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(Ae&n)===n&&(Te===4||Te===3&&(Ae&130023424)===Ae&&500>Ee()-Yi?xn(e,0):Qi|=n),Je(e,t)}function vc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Jr,Jr<<=1,(Jr&130023424)===0&&(Jr=4194304)));var n=Qe();e=At(e,t),e!==null&&(or(e,t,n),Je(e,n))}function p0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vc(e,n)}function m0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),vc(e,n)}var gc;gc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Ke=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ke=!1,t0(e,t,n);Ke=(e.flags&131072)!==0}else Ke=!1,xe&&(t.flags&1048576)!==0&&qs(t,Sl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Il(e,t),e=t.pendingProps;var l=Dn(t,Be.current);Vn(t,n),l=ji(null,t,r,e,l,n);var o=Ci();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(o=!0,vl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,vi(t),l.updater=Rl,t.stateNode=l,l._reactInternals=t,Ti(t,r,e,n),t=Ii(null,t,r,!0,o,n)):(t.tag=0,xe&&o&&ai(t),be(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Il(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=y0(r),e=wt(r,e),l){case 0:t=Mi(null,t,r,e,n);break e;case 1:t=Wu(null,t,r,e,n);break e;case 11:t=$u(null,t,r,e,n);break e;case 14:t=Bu(null,t,r,wt(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:wt(r,l),Mi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:wt(r,l),Wu(e,t,r,l,n);case 3:e:{if(bu(t),e===null)throw Error(u(387));r=t.pendingProps,o=t.memoizedState,l=o.element,iu(e,t),El(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Wn(Error(u(423)),t),t=Qu(e,t,r,n,l);break e}else if(r!==l){l=Wn(Error(u(424)),t),t=Qu(e,t,r,n,l);break e}else for(it=Kt(t.stateNode.containerInfo.firstChild),ot=t,xe=!0,gt=null,n=lu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($n(),r===l){t=Bt(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return uu(t),e===null&&ci(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,s=l.children,ti(r,l)?s=null:o!==null&&ti(r,o)&&(t.flags|=32),Hu(e,t),be(e,t,s,n),t.child;case 6:return e===null&&ci(t),null;case 13:return Yu(e,t,n);case 4:return gi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Bn(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:wt(r,l),$u(e,t,r,l,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,s=l.value,ve(kl,r._currentValue),r._currentValue=s,o!==null)if(vt(o.value,s)){if(o.children===l.children&&!Ge.current){t=Bt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(o.tag===1){d=$t(-1,n&-n),d.tag=2;var S=o.updateQueue;if(S!==null){S=S.shared;var N=S.pending;N===null?d.next=d:(d.next=N.next,N.next=d),S.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),hi(o.return,n,t),c.lanes|=n;break}d=d.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(u(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),hi(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}be(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Vn(t,n),l=ft(l),r=r(l),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,l=wt(r,t.pendingProps),l=wt(r.type,l),Bu(e,t,r,l,n);case 15:return Uu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:wt(r,l),Il(e,t),t.tag=1,Xe(r)?(e=!0,vl(t)):e=!1,Vn(t,n),Lu(t,r,l),Ti(t,r,l,n),Ii(null,t,r,!0,e,n);case 19:return Xu(e,t,n);case 22:return Vu(e,t,n)}throw Error(u(156,t.tag))};function wc(e,t){return Ja(e,t)}function h0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new h0(e,t,n,r)}function ta(e){return e=e.prototype,!(!e||!e.isReactComponent)}function y0(e){if(typeof e=="function")return ta(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kt)return 11;if(e===jt)return 14}return 2}function sn(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ql(e,t,n,r,l,o){var s=2;if(r=e,typeof e=="function")ta(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Z:return kn(n.children,l,o,t);case tt:s=8,l|=8;break;case Ht:return e=mt(12,n,t,l|2),e.elementType=Ht,e.lanes=o,e;case nt:return e=mt(13,n,t,l),e.elementType=nt,e.lanes=o,e;case ht:return e=mt(19,n,t,l),e.elementType=ht,e.lanes=o,e;case je:return Yl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rt:s=10;break e;case cn:s=9;break e;case kt:s=11;break e;case jt:s=14;break e;case Ye:s=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=mt(s,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function kn(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function Yl(e,t,n,r){return e=mt(22,e,r,t),e.elementType=je,e.lanes=n,e.stateNode={isHidden:!1},e}function na(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function ra(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function v0(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zo(0),this.expirationTimes=zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zo(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function la(e,t,n,r,l,o,s,c,d){return e=new v0(e,t,n,c,d),t===1?(t=1,o===!0&&(t|=8)):t=0,o=mt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vi(o),e}function g0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:re,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Sc(e){if(!e)return Jt;e=e._reactInternals;e:{if(fn(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(Xe(n))return Gs(e,n,t)}return t}function xc(e,t,n,r,l,o,s,c,d){return e=la(n,r,!0,e,l,o,s,c,d),e.context=Sc(null),n=e.current,r=Qe(),l=on(n),o=$t(r,l),o.callback=t??null,tn(n,o,l),e.current.lanes=l,or(e,l,r),Je(e,r),e}function Gl(e,t,n,r){var l=t.current,o=Qe(),s=on(l);return n=Sc(n),t.context===null?t.context=n:t.pendingContext=n,t=$t(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(l,t,s),e!==null&&(_t(e,l,s,o),Cl(e,l,s)),s}function Xl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _c(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function oa(e,t){_c(e,t),(e=e.alternate)&&_c(e,t)}function w0(){return null}var kc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ia(e){this._internalRoot=e}Kl.prototype.render=ia.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Gl(e,t,null,null)},Kl.prototype.unmount=ia.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sn(function(){Gl(null,e,null,null)}),t[Mt]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=is();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&us(e)}};function aa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jc(){}function S0(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var S=Xl(s);o.call(S)}}var s=xc(t,r,e,0,null,!1,!1,"",jc);return e._reactRootContainer=s,e[Mt]=s.current,wr(e.nodeType===8?e.parentNode:e),Sn(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var c=r;r=function(){var S=Xl(d);c.call(S)}}var d=la(e,0,!1,null,null,!1,!1,"",jc);return e._reactRootContainer=d,e[Mt]=d.current,wr(e.nodeType===8?e.parentNode:e),Sn(function(){Gl(t,d,n,r)}),d}function Jl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var s=o;if(typeof l=="function"){var c=l;l=function(){var d=Xl(s);c.call(d)}}Gl(t,s,e,l)}else s=S0(n,t,e,l,r);return Xl(s)}ls=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lr(t.pendingLanes);n!==0&&(To(t,n|1),Je(t,Ee()),(ie&6)===0&&(Yn=Ee()+500,Zt()))}break;case 13:Sn(function(){var r=At(e,1);if(r!==null){var l=Qe();_t(r,e,1,l)}}),oa(e,1)}},Lo=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=Qe();_t(t,e,134217728,n)}oa(e,134217728)}},os=function(e){if(e.tag===13){var t=on(e),n=At(e,t);if(n!==null){var r=Qe();_t(n,e,t,r)}oa(e,t)}},is=function(){return he},as=function(e,t){var n=he;try{return he=e,t()}finally{he=n}},jo=function(e,t,n){switch(t){case"input":if(yo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=hl(r);if(!l)throw Error(u(90));Ta(r),yo(r,l)}}}break;case"textarea":Da(e,n);break;case"select":t=n.value,t!=null&&jn(e,!!n.multiple,t,!1)}},ba=Ji,Qa=Sn;var x0={usingClientEntryPoint:!1,Events:[_r,Mn,hl,Ha,Wa,Ji]},Dr={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_0={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ka(e),e===null?null:e.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||w0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{Kr=Zl.inject(_0),Ct=Zl}catch{}}return Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x0,Ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!aa(t))throw Error(u(200));return g0(e,t,null,n)},Ze.createRoot=function(e,t){if(!aa(e))throw Error(u(299));var n=!1,r="",l=kc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=la(e,1,!1,null,null,n,!1,r,l),e[Mt]=t.current,wr(e.nodeType===8?e.parentNode:e),new ia(t)},Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=Ka(t),e=e===null?null:e.stateNode,e},Ze.flushSync=function(e){return Sn(e)},Ze.hydrate=function(e,t,n){if(!ql(t))throw Error(u(200));return Jl(null,e,t,!0,n)},Ze.hydrateRoot=function(e,t,n){if(!aa(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",s=kc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=xc(t,null,e,1,n??null,l,!1,o,s),e[Mt]=t.current,wr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Kl(t)},Ze.render=function(e,t,n){if(!ql(t))throw Error(u(200));return Jl(null,e,t,!1,n)},Ze.unmountComponentAtNode=function(e){if(!ql(e))throw Error(u(40));return e._reactRootContainer?(Sn(function(){Jl(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1},Ze.unstable_batchedUpdates=Ji,Ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ql(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return Jl(e,t,n,!1,r)},Ze.version="18.3.1-next-f1338f8080-20240426",Ze}var Rc;function T0(){if(Rc)return ca.exports;Rc=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(a){console.error(a)}}return i(),ca.exports=z0(),ca.exports}var Mc;function L0(){if(Mc)return eo;Mc=1;var i=T0();return eo.createRoot=i.createRoot,eo.hydrateRoot=i.hydrateRoot,eo}var R0=L0();const M0=Zc(R0),I0="/personal-website/assets/pastel-bg-B1UW2q9y.jpg";var ef={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ic=Vt.createContext&&Vt.createContext(ef),D0=["attr","size","title"];function F0(i,a){if(i==null)return{};var u=A0(i,a),f,p;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(i);for(p=0;p<v.length;p++)f=v[p],!(a.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(i,f)&&(u[f]=i[f])}return u}function A0(i,a){if(i==null)return{};var u={};for(var f in i)if(Object.prototype.hasOwnProperty.call(i,f)){if(a.indexOf(f)>=0)continue;u[f]=i[f]}return u}function ao(){return ao=Object.assign?Object.assign.bind():function(i){for(var a=1;a<arguments.length;a++){var u=arguments[a];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(i[f]=u[f])}return i},ao.apply(this,arguments)}function Dc(i,a){var u=Object.keys(i);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(i);a&&(f=f.filter(function(p){return Object.getOwnPropertyDescriptor(i,p).enumerable})),u.push.apply(u,f)}return u}function so(i){for(var a=1;a<arguments.length;a++){var u=arguments[a]!=null?arguments[a]:{};a%2?Dc(Object(u),!0).forEach(function(f){$0(i,f,u[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(u)):Dc(Object(u)).forEach(function(f){Object.defineProperty(i,f,Object.getOwnPropertyDescriptor(u,f))})}return i}function $0(i,a,u){return a=B0(a),a in i?Object.defineProperty(i,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):i[a]=u,i}function B0(i){var a=U0(i,"string");return typeof a=="symbol"?a:a+""}function U0(i,a){if(typeof i!="object"||!i)return i;var u=i[Symbol.toPrimitive];if(u!==void 0){var f=u.call(i,a);if(typeof f!="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(i)}function tf(i){return i&&i.map((a,u)=>Vt.createElement(a.tag,so({key:u},a.attr),tf(a.child)))}function Le(i){return a=>Vt.createElement(V0,ao({attr:so({},i.attr)},a),tf(i.child))}function V0(i){var a=u=>{var{attr:f,size:p,title:v}=i,x=F0(i,D0),C=p||u.size||"1em",k;return u.className&&(k=u.className),i.className&&(k=(k?k+" ":"")+i.className),Vt.createElement("svg",ao({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,f,x,{className:k,style:so(so({color:i.color||u.color},u.style),i.style),height:C,width:C,xmlns:"http://www.w3.org/2000/svg"}),v&&Vt.createElement("title",null,v),i.children)};return Ic!==void 0?Vt.createElement(Ic.Consumer,null,u=>a(u)):a(ef)}function H0(i){return Le({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2l.04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3M2.19 3q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293L7.586 3zm9.608 5.271-3.182 1.97c-.27.166-.616-.036-.616-.372V9.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742"},child:[]}]})(i)}function W0(i){return Le({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"},child:[]}]})(i)}function b0(i){return Le({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"},child:[]}]})(i)}function Q0(i){return Le({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"},child:[]}]})(i)}function Y0(i){return Le({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"},child:[]}]})(i)}function G0(i){return Le({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"},child:[]}]})(i)}function Fc(i){return Le({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"},child:[]}]})(i)}function Ac(i){return Le({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"},child:[]}]})(i)}function X0(i){return Le({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"},child:[]}]})(i)}function K0(i){return Le({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1"},child:[]}]})(i)}function q0(i){return Le({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"},child:[]},{tag:"path",attr:{d:"M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"},child:[]}]})(i)}function J0(i){return Le({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"},child:[]}]})(i)}function nf(i){return Le({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"},child:[]}]})(i)}function Z0(i){return Le({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"},child:[]},{tag:"path",attr:{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"},child:[]}]})(i)}function ep(i){return Le({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"},child:[]}]})(i)}function tp(i){return Le({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},child:[]}]})(i)}function np(i){return Le({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"},child:[]}]})(i)}function rp(i){return Le({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"},child:[]}]})(i)}function lp(i){return Le({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"},child:[]},{tag:"path",attr:{d:"M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"},child:[]},{tag:"path",attr:{fillRule:"evenodd",d:"M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"},child:[]}]})(i)}function op(){return h.jsxs("div",{className:"navbar",children:[h.jsx(ip,{}),h.jsx(ap,{})]})}function ip(){return h.jsxs("div",{className:"flex items-center",children:[h.jsx(X0,{className:"navbar-logo"}),h.jsx("div",{className:"navbar-title",children:"Kelvin Lin"})]})}function ap(){return h.jsxs("div",{className:"navbar-toolbar",children:[h.jsxs("a",{href:"#about",className:"navbar-tools",children:[h.jsx(W0,{className:"navbar-tool-icon"}),h.jsx("span",{className:"navbar-tool-label",children:"About"})]}),h.jsxs("a",{href:"#projects",className:"navbar-tools",children:[h.jsx(K0,{className:"navbar-tool-icon"}),h.jsx("span",{className:"navbar-tool-label",children:"Projects"})]}),h.jsxs("a",{href:"#tools",className:"navbar-tools mr-4",children:[h.jsx(np,{className:"navbar-tool-icon"}),h.jsx("span",{className:"navbar-tool-label",children:"Tools"})]})]})}function sp(){return h.jsxs("div",{className:"flex flex-col items-center justify-center footer",children:[h.jsx("span",{children:"Site coded in TypeScript and built using React, Vite, and Tailwind."}),h.jsxs("span",{children:["Background designed by ",h.jsx("a",{className:"classic-anchor1",href:"https://www.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_13223498.htm#query=pastel&position=19&from_view=keyword&track=ais_hybrid&uuid=f952c164-e355-44dc-8d01-b7c6080a9dda",target:"_blank",children:"Freepik"})]})]})}const ja=({entryNumber:i,titleLabel:a,className:u=""})=>{const f=i.toString().padStart(2,"0");return h.jsx("div",{className:u,children:h.jsxs("div",{className:"section-header fira-code",children:[h.jsx("span",{className:"header-num",children:`${f}| `}),h.jsx("span",{className:"header-title",children:a})]})})};function up(i){return h.jsxs("div",{id:"about",className:"flex flex-row justify-between items-center",children:[h.jsx(ja,{className:"about",entryNumber:1,titleLabel:i.width>1200?"About":""}),h.jsxs("div",{className:"about-description flex flex-col justify-start",children:[h.jsxs("div",{className:"about-description-heading flex flex-row whitespace-pre",children:[h.jsx("div",{className:"about-description-h1 allura text-64xl",children:"Hey,"}),h.jsxs("div",{className:"flex flex-col justify-center",children:[h.jsxs("span",{className:"about-description-h2",children:["I'm ",h.jsx("span",{className:"about-description-h2-name",children:"Kelvin"})]}),h.jsx("span",{className:"about-description-h3",children:" NY-based Software Engineer"})]})]}),h.jsxs("div",{className:"about-description-paragraph",children:["My personal passions in the Software Engineering field are ",h.jsx("span",{className:"about-description-paragraph-ul",children:"Game Development"})," and ",h.jsx("span",{className:"about-description-paragraph-ul",children:"Web Development"}),". Besides these two focuses, I have also dabbled in ",h.jsx("span",{className:"about-description-paragraph-ul",children:"Natural Language Processing"})," over the course of my academic career."]}),h.jsx("br",{}),h.jsxs("div",{className:"about-description-paragraph",children:["Having double majored in both ",h.jsx("span",{className:"about-description-paragraph-ul",children:"Computer Science"})," and ",h.jsx("span",{className:"about-description-paragraph-ul",children:"Applied Mathematics and Statistics"}),", I'm open to exploring various fields and always excited to learn new technologies and frameworks."]}),h.jsx("br",{}),h.jsx("div",{className:"about-description-paragraph",children:"Currently seeking an entry-level position or internship. Feel free to contact me or browse some of my past projects below!"})]}),h.jsxs("div",{className:"contact-details",children:[h.jsx("img",{src:"https://github.com/klin2003.png",alt:"GitHub Avatar",className:"about-avatar"}),h.jsx(cp,{})]})]})}function cp(){return h.jsxs("div",{className:"flex flex-col items-center justify-center",children:[h.jsxs("div",{className:"contact-entry w-fit",children:[h.jsxs("div",{className:"flex flex-row items-center justify-center",children:[h.jsx(J0,{className:"contact-entry-icon"}),h.jsx("span",{className:"contact-entry-title",children:h.jsx("b",{children:"Email"})})]}),h.jsx("a",{className:"contact-entry-text classic-anchor2",href:"mailto:kelvinlin2003@gmail.com",target:"_blank",children:"kelvinlin2003@gmail.com"})]}),h.jsx("div",{className:"pb-6"}),h.jsxs("div",{className:"contact-entry w-fit",children:[h.jsxs("div",{className:"flex flex-row items-center justify-center",children:[h.jsx(ep,{className:"contact-entry-icon"}),h.jsx("span",{className:"contact-entry-title",children:h.jsx("b",{children:"LinkedIn"})})]}),h.jsx("a",{className:"contact-entry-text classic-anchor2",href:"https://www.linkedin.com/in/kelvin-lin-J2003/",target:"_blank",children:"in/kelvin-lin-J2003"})]}),h.jsx("div",{className:"pb-6"}),h.jsxs("div",{className:"contact-entry w-fit",children:[h.jsxs("div",{className:"flex flex-row items-center justify-center",children:[h.jsx(nf,{className:"contact-entry-icon"}),h.jsx("span",{className:"contact-entry-title",children:h.jsx("b",{children:"GitHub"})})]}),h.jsx("a",{className:"contact-entry-text classic-anchor2",href:"https://github.com/klin2003",target:"_blank",children:"gh/klin2003"})]})]})}function fp(i){if(i.sheet)return i.sheet;for(var a=0;a<document.styleSheets.length;a++)if(document.styleSheets[a].ownerNode===i)return document.styleSheets[a]}function dp(i){var a=document.createElement("style");return a.setAttribute("data-emotion",i.key),i.nonce!==void 0&&a.setAttribute("nonce",i.nonce),a.appendChild(document.createTextNode("")),a.setAttribute("data-s",""),a}var pp=(function(){function i(u){var f=this;this._insertTag=function(p){var v;f.tags.length===0?f.insertionPoint?v=f.insertionPoint.nextSibling:f.prepend?v=f.container.firstChild:v=f.before:v=f.tags[f.tags.length-1].nextSibling,f.container.insertBefore(p,v),f.tags.push(p)},this.isSpeedy=u.speedy===void 0?!0:u.speedy,this.tags=[],this.ctr=0,this.nonce=u.nonce,this.key=u.key,this.container=u.container,this.prepend=u.prepend,this.insertionPoint=u.insertionPoint,this.before=null}var a=i.prototype;return a.hydrate=function(f){f.forEach(this._insertTag)},a.insert=function(f){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(dp(this));var p=this.tags[this.tags.length-1];if(this.isSpeedy){var v=fp(p);try{v.insertRule(f,v.cssRules.length)}catch{}}else p.appendChild(document.createTextNode(f));this.ctr++},a.flush=function(){this.tags.forEach(function(f){var p;return(p=f.parentNode)==null?void 0:p.removeChild(f)}),this.tags=[],this.ctr=0},i})(),We="-ms-",uo="-moz-",ce="-webkit-",rf="comm",Ca="rule",Ea="decl",mp="@import",lf="@keyframes",hp="@layer",yp=Math.abs,co=String.fromCharCode,vp=Object.assign;function gp(i,a){return $e(i,0)^45?(((a<<2^$e(i,0))<<2^$e(i,1))<<2^$e(i,2))<<2^$e(i,3):0}function of(i){return i.trim()}function wp(i,a){return(i=a.exec(i))?i[0]:i}function fe(i,a,u){return i.replace(a,u)}function ga(i,a){return i.indexOf(a)}function $e(i,a){return i.charCodeAt(a)|0}function $r(i,a,u){return i.slice(a,u)}function zt(i){return i.length}function Na(i){return i.length}function to(i,a){return a.push(i),i}function Sp(i,a){return i.map(a).join("")}var fo=1,Kn=1,af=0,et=0,Oe=0,qn="";function po(i,a,u,f,p,v,x){return{value:i,root:a,parent:u,type:f,props:p,children:v,line:fo,column:Kn,length:x,return:""}}function Ar(i,a){return vp(po("",null,null,"",null,null,0),i,{length:-i.length},a)}function xp(){return Oe}function _p(){return Oe=et>0?$e(qn,--et):0,Kn--,Oe===10&&(Kn=1,fo--),Oe}function st(){return Oe=et<af?$e(qn,et++):0,Kn++,Oe===10&&(Kn=1,fo++),Oe}function Lt(){return $e(qn,et)}function lo(){return et}function Hr(i,a){return $r(qn,i,a)}function Br(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sf(i){return fo=Kn=1,af=zt(qn=i),et=0,[]}function uf(i){return qn="",i}function oo(i){return of(Hr(et-1,wa(i===91?i+2:i===40?i+1:i)))}function kp(i){for(;(Oe=Lt())&&Oe<33;)st();return Br(i)>2||Br(Oe)>3?"":" "}function jp(i,a){for(;--a&&st()&&!(Oe<48||Oe>102||Oe>57&&Oe<65||Oe>70&&Oe<97););return Hr(i,lo()+(a<6&&Lt()==32&&st()==32))}function wa(i){for(;st();)switch(Oe){case i:return et;case 34:case 39:i!==34&&i!==39&&wa(Oe);break;case 40:i===41&&wa(i);break;case 92:st();break}return et}function Cp(i,a){for(;st()&&i+Oe!==57;)if(i+Oe===84&&Lt()===47)break;return"/*"+Hr(a,et-1)+"*"+co(i===47?i:st())}function Ep(i){for(;!Br(Lt());)st();return Hr(i,et)}function Np(i){return uf(io("",null,null,null,[""],i=sf(i),0,[0],i))}function io(i,a,u,f,p,v,x,C,k){for(var R=0,M=0,I=x,U=0,Y=0,W=0,O=1,_=1,J=1,G=0,X="",oe=p,z=v,re=f,Z=X;_;)switch(W=G,G=st()){case 40:if(W!=108&&$e(Z,I-1)==58){ga(Z+=fe(oo(G),"&","&\f"),"&\f")!=-1&&(J=-1);break}case 34:case 39:case 91:Z+=oo(G);break;case 9:case 10:case 13:case 32:Z+=kp(W);break;case 92:Z+=jp(lo()-1,7);continue;case 47:switch(Lt()){case 42:case 47:to(Pp(Cp(st(),lo()),a,u),k);break;default:Z+="/"}break;case 123*O:C[R++]=zt(Z)*J;case 125*O:case 59:case 0:switch(G){case 0:case 125:_=0;case 59+M:J==-1&&(Z=fe(Z,/\f/g,"")),Y>0&&zt(Z)-I&&to(Y>32?Bc(Z+";",f,u,I-1):Bc(fe(Z," ","")+";",f,u,I-2),k);break;case 59:Z+=";";default:if(to(re=$c(Z,a,u,R,M,p,C,X,oe=[],z=[],I),v),G===123)if(M===0)io(Z,a,re,re,oe,v,I,C,z);else switch(U===99&&$e(Z,3)===110?100:U){case 100:case 108:case 109:case 115:io(i,re,re,f&&to($c(i,re,re,0,0,p,C,X,p,oe=[],I),z),p,z,I,C,f?oe:z);break;default:io(Z,re,re,re,[""],z,0,C,z)}}R=M=Y=0,O=J=1,X=Z="",I=x;break;case 58:I=1+zt(Z),Y=W;default:if(O<1){if(G==123)--O;else if(G==125&&O++==0&&_p()==125)continue}switch(Z+=co(G),G*O){case 38:J=M>0?1:(Z+="\f",-1);break;case 44:C[R++]=(zt(Z)-1)*J,J=1;break;case 64:Lt()===45&&(Z+=oo(st())),U=Lt(),M=I=zt(X=Z+=Ep(lo())),G++;break;case 45:W===45&&zt(Z)==2&&(O=0)}}return v}function $c(i,a,u,f,p,v,x,C,k,R,M){for(var I=p-1,U=p===0?v:[""],Y=Na(U),W=0,O=0,_=0;W<f;++W)for(var J=0,G=$r(i,I+1,I=yp(O=x[W])),X=i;J<Y;++J)(X=of(O>0?U[J]+" "+G:fe(G,/&\f/g,U[J])))&&(k[_++]=X);return po(i,a,u,p===0?Ca:C,k,R,M)}function Pp(i,a,u){return po(i,a,u,rf,co(xp()),$r(i,2,-2),0)}function Bc(i,a,u,f){return po(i,a,u,Ea,$r(i,0,f),$r(i,f+1,-1),f)}function Xn(i,a){for(var u="",f=Na(i),p=0;p<f;p++)u+=a(i[p],p,i,a)||"";return u}function Op(i,a,u,f){switch(i.type){case hp:if(i.children.length)break;case mp:case Ea:return i.return=i.return||i.value;case rf:return"";case lf:return i.return=i.value+"{"+Xn(i.children,f)+"}";case Ca:i.value=i.props.join(",")}return zt(u=Xn(i.children,f))?i.return=i.value+"{"+u+"}":""}function zp(i){var a=Na(i);return function(u,f,p,v){for(var x="",C=0;C<a;C++)x+=i[C](u,f,p,v)||"";return x}}function Tp(i){return function(a){a.root||(a=a.return)&&i(a)}}function Lp(i){var a=Object.create(null);return function(u){return a[u]===void 0&&(a[u]=i(u)),a[u]}}var Rp=function(a,u,f){for(var p=0,v=0;p=v,v=Lt(),p===38&&v===12&&(u[f]=1),!Br(v);)st();return Hr(a,et)},Mp=function(a,u){var f=-1,p=44;do switch(Br(p)){case 0:p===38&&Lt()===12&&(u[f]=1),a[f]+=Rp(et-1,u,f);break;case 2:a[f]+=oo(p);break;case 4:if(p===44){a[++f]=Lt()===58?"&\f":"",u[f]=a[f].length;break}default:a[f]+=co(p)}while(p=st());return a},Ip=function(a,u){return uf(Mp(sf(a),u))},Uc=new WeakMap,Dp=function(a){if(!(a.type!=="rule"||!a.parent||a.length<1)){for(var u=a.value,f=a.parent,p=a.column===f.column&&a.line===f.line;f.type!=="rule";)if(f=f.parent,!f)return;if(!(a.props.length===1&&u.charCodeAt(0)!==58&&!Uc.get(f))&&!p){Uc.set(a,!0);for(var v=[],x=Ip(u,v),C=f.props,k=0,R=0;k<x.length;k++)for(var M=0;M<C.length;M++,R++)a.props[R]=v[k]?x[k].replace(/&\f/g,C[M]):C[M]+" "+x[k]}}},Fp=function(a){if(a.type==="decl"){var u=a.value;u.charCodeAt(0)===108&&u.charCodeAt(2)===98&&(a.return="",a.value="")}};function cf(i,a){switch(gp(i,a)){case 5103:return ce+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+i+uo+i+We+i+i;case 6828:case 4268:return ce+i+We+i+i;case 6165:return ce+i+We+"flex-"+i+i;case 5187:return ce+i+fe(i,/(\w+).+(:[^]+)/,ce+"box-$1$2"+We+"flex-$1$2")+i;case 5443:return ce+i+We+"flex-item-"+fe(i,/flex-|-self/,"")+i;case 4675:return ce+i+We+"flex-line-pack"+fe(i,/align-content|flex-|-self/,"")+i;case 5548:return ce+i+We+fe(i,"shrink","negative")+i;case 5292:return ce+i+We+fe(i,"basis","preferred-size")+i;case 6060:return ce+"box-"+fe(i,"-grow","")+ce+i+We+fe(i,"grow","positive")+i;case 4554:return ce+fe(i,/([^-])(transform)/g,"$1"+ce+"$2")+i;case 6187:return fe(fe(fe(i,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),i,"")+i;case 5495:case 3959:return fe(i,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return fe(fe(i,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+We+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+i+i;case 4095:case 3583:case 4068:case 2532:return fe(i,/(.+)-inline(.+)/,ce+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zt(i)-1-a>6)switch($e(i,a+1)){case 109:if($e(i,a+4)!==45)break;case 102:return fe(i,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+uo+($e(i,a+3)==108?"$3":"$2-$3"))+i;case 115:return~ga(i,"stretch")?cf(fe(i,"stretch","fill-available"),a)+i:i}break;case 4949:if($e(i,a+1)!==115)break;case 6444:switch($e(i,zt(i)-3-(~ga(i,"!important")&&10))){case 107:return fe(i,":",":"+ce)+i;case 101:return fe(i,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ce+($e(i,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+We+"$2box$3")+i}break;case 5936:switch($e(i,a+11)){case 114:return ce+i+We+fe(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return ce+i+We+fe(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return ce+i+We+fe(i,/[svh]\w+-[tblr]{2}/,"lr")+i}return ce+i+We+i+i}return i}var Ap=function(a,u,f,p){if(a.length>-1&&!a.return)switch(a.type){case Ea:a.return=cf(a.value,a.length);break;case lf:return Xn([Ar(a,{value:fe(a.value,"@","@"+ce)})],p);case Ca:if(a.length)return Sp(a.props,function(v){switch(wp(v,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Xn([Ar(a,{props:[fe(v,/:(read-\w+)/,":"+uo+"$1")]})],p);case"::placeholder":return Xn([Ar(a,{props:[fe(v,/:(plac\w+)/,":"+ce+"input-$1")]}),Ar(a,{props:[fe(v,/:(plac\w+)/,":"+uo+"$1")]}),Ar(a,{props:[fe(v,/:(plac\w+)/,We+"input-$1")]})],p)}return""})}},$p=[Ap],Bp=function(a){var u=a.key;if(u==="css"){var f=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(f,function(O){var _=O.getAttribute("data-emotion");_.indexOf(" ")!==-1&&(document.head.appendChild(O),O.setAttribute("data-s",""))})}var p=a.stylisPlugins||$p,v={},x,C=[];x=a.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+u+' "]'),function(O){for(var _=O.getAttribute("data-emotion").split(" "),J=1;J<_.length;J++)v[_[J]]=!0;C.push(O)});var k,R=[Dp,Fp];{var M,I=[Op,Tp(function(O){M.insert(O)})],U=zp(R.concat(p,I)),Y=function(_){return Xn(Np(_),U)};k=function(_,J,G,X){M=G,Y(_?_+"{"+J.styles+"}":J.styles),X&&(W.inserted[J.name]=!0)}}var W={key:u,sheet:new pp({key:u,container:x,nonce:a.nonce,speedy:a.speedy,prepend:a.prepend,insertionPoint:a.insertionPoint}),nonce:a.nonce,inserted:v,registered:{},insert:k};return W.sheet.hydrate(C),W},pa={exports:{}},de={};var Vc;function Up(){if(Vc)return de;Vc=1;var i=typeof Symbol=="function"&&Symbol.for,a=i?Symbol.for("react.element"):60103,u=i?Symbol.for("react.portal"):60106,f=i?Symbol.for("react.fragment"):60107,p=i?Symbol.for("react.strict_mode"):60108,v=i?Symbol.for("react.profiler"):60114,x=i?Symbol.for("react.provider"):60109,C=i?Symbol.for("react.context"):60110,k=i?Symbol.for("react.async_mode"):60111,R=i?Symbol.for("react.concurrent_mode"):60111,M=i?Symbol.for("react.forward_ref"):60112,I=i?Symbol.for("react.suspense"):60113,U=i?Symbol.for("react.suspense_list"):60120,Y=i?Symbol.for("react.memo"):60115,W=i?Symbol.for("react.lazy"):60116,O=i?Symbol.for("react.block"):60121,_=i?Symbol.for("react.fundamental"):60117,J=i?Symbol.for("react.responder"):60118,G=i?Symbol.for("react.scope"):60119;function X(z){if(typeof z=="object"&&z!==null){var re=z.$$typeof;switch(re){case a:switch(z=z.type,z){case k:case R:case f:case v:case p:case I:return z;default:switch(z=z&&z.$$typeof,z){case C:case M:case W:case Y:case x:return z;default:return re}}case u:return re}}}function oe(z){return X(z)===R}return de.AsyncMode=k,de.ConcurrentMode=R,de.ContextConsumer=C,de.ContextProvider=x,de.Element=a,de.ForwardRef=M,de.Fragment=f,de.Lazy=W,de.Memo=Y,de.Portal=u,de.Profiler=v,de.StrictMode=p,de.Suspense=I,de.isAsyncMode=function(z){return oe(z)||X(z)===k},de.isConcurrentMode=oe,de.isContextConsumer=function(z){return X(z)===C},de.isContextProvider=function(z){return X(z)===x},de.isElement=function(z){return typeof z=="object"&&z!==null&&z.$$typeof===a},de.isForwardRef=function(z){return X(z)===M},de.isFragment=function(z){return X(z)===f},de.isLazy=function(z){return X(z)===W},de.isMemo=function(z){return X(z)===Y},de.isPortal=function(z){return X(z)===u},de.isProfiler=function(z){return X(z)===v},de.isStrictMode=function(z){return X(z)===p},de.isSuspense=function(z){return X(z)===I},de.isValidElementType=function(z){return typeof z=="string"||typeof z=="function"||z===f||z===R||z===v||z===p||z===I||z===U||typeof z=="object"&&z!==null&&(z.$$typeof===W||z.$$typeof===Y||z.$$typeof===x||z.$$typeof===C||z.$$typeof===M||z.$$typeof===_||z.$$typeof===J||z.$$typeof===G||z.$$typeof===O)},de.typeOf=X,de}var Hc;function Vp(){return Hc||(Hc=1,pa.exports=Up()),pa.exports}var ma,Wc;function Hp(){if(Wc)return ma;Wc=1;var i=Vp(),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},f={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},p={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},v={};v[i.ForwardRef]=f,v[i.Memo]=p;function x(W){return i.isMemo(W)?p:v[W.$$typeof]||a}var C=Object.defineProperty,k=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,M=Object.getOwnPropertyDescriptor,I=Object.getPrototypeOf,U=Object.prototype;function Y(W,O,_){if(typeof O!="string"){if(U){var J=I(O);J&&J!==U&&Y(W,J,_)}var G=k(O);R&&(G=G.concat(R(O)));for(var X=x(W),oe=x(O),z=0;z<G.length;++z){var re=G[z];if(!u[re]&&!(_&&_[re])&&!(oe&&oe[re])&&!(X&&X[re])){var Z=M(O,re);try{C(W,re,Z)}catch{}}}}return W}return ma=Y,ma}Hp();var Wp=!0;function ff(i,a,u){var f="";return u.split(" ").forEach(function(p){i[p]!==void 0?a.push(i[p]+";"):p&&(f+=p+" ")}),f}var Pa=function(a,u,f){var p=a.key+"-"+u.name;(f===!1||Wp===!1)&&a.registered[p]===void 0&&(a.registered[p]=u.styles)},df=function(a,u,f){Pa(a,u,f);var p=a.key+"-"+u.name;if(a.inserted[u.name]===void 0){var v=u;do a.insert(u===v?"."+p:"",v,a.sheet,!0),v=v.next;while(v!==void 0)}};function bp(i){for(var a=0,u,f=0,p=i.length;p>=4;++f,p-=4)u=i.charCodeAt(f)&255|(i.charCodeAt(++f)&255)<<8|(i.charCodeAt(++f)&255)<<16|(i.charCodeAt(++f)&255)<<24,u=(u&65535)*1540483477+((u>>>16)*59797<<16),u^=u>>>24,a=(u&65535)*1540483477+((u>>>16)*59797<<16)^(a&65535)*1540483477+((a>>>16)*59797<<16);switch(p){case 3:a^=(i.charCodeAt(f+2)&255)<<16;case 2:a^=(i.charCodeAt(f+1)&255)<<8;case 1:a^=i.charCodeAt(f)&255,a=(a&65535)*1540483477+((a>>>16)*59797<<16)}return a^=a>>>13,a=(a&65535)*1540483477+((a>>>16)*59797<<16),((a^a>>>15)>>>0).toString(36)}var Qp={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Yp=/[A-Z]|^ms/g,Gp=/_EMO_([^_]+?)_([^]*?)_EMO_/g,pf=function(a){return a.charCodeAt(1)===45},bc=function(a){return a!=null&&typeof a!="boolean"},ha=Lp(function(i){return pf(i)?i:i.replace(Yp,"-$&").toLowerCase()}),Qc=function(a,u){switch(a){case"animation":case"animationName":if(typeof u=="string")return u.replace(Gp,function(f,p,v){return Tt={name:p,styles:v,next:Tt},p})}return Qp[a]!==1&&!pf(a)&&typeof u=="number"&&u!==0?u+"px":u};function Ur(i,a,u){if(u==null)return"";var f=u;if(f.__emotion_styles!==void 0)return f;switch(typeof u){case"boolean":return"";case"object":{var p=u;if(p.anim===1)return Tt={name:p.name,styles:p.styles,next:Tt},p.name;var v=u;if(v.styles!==void 0){var x=v.next;if(x!==void 0)for(;x!==void 0;)Tt={name:x.name,styles:x.styles,next:Tt},x=x.next;var C=v.styles+";";return C}return Xp(i,a,u)}case"function":{if(i!==void 0){var k=Tt,R=u(i);return Tt=k,Ur(i,a,R)}break}}var M=u;if(a==null)return M;var I=a[M];return I!==void 0?I:M}function Xp(i,a,u){var f="";if(Array.isArray(u))for(var p=0;p<u.length;p++)f+=Ur(i,a,u[p])+";";else for(var v in u){var x=u[v];if(typeof x!="object"){var C=x;a!=null&&a[C]!==void 0?f+=v+"{"+a[C]+"}":bc(C)&&(f+=ha(v)+":"+Qc(v,C)+";")}else if(Array.isArray(x)&&typeof x[0]=="string"&&(a==null||a[x[0]]===void 0))for(var k=0;k<x.length;k++)bc(x[k])&&(f+=ha(v)+":"+Qc(v,x[k])+";");else{var R=Ur(i,a,x);switch(v){case"animation":case"animationName":{f+=ha(v)+":"+R+";";break}default:f+=v+"{"+R+"}"}}}return f}var Yc=/label:\s*([^\s;{]+)\s*(;|$)/g,Tt;function Oa(i,a,u){if(i.length===1&&typeof i[0]=="object"&&i[0]!==null&&i[0].styles!==void 0)return i[0];var f=!0,p="";Tt=void 0;var v=i[0];if(v==null||v.raw===void 0)f=!1,p+=Ur(u,a,v);else{var x=v;p+=x[0]}for(var C=1;C<i.length;C++)if(p+=Ur(u,a,i[C]),f){var k=v;p+=k[C]}Yc.lastIndex=0;for(var R="",M;(M=Yc.exec(p))!==null;)R+="-"+M[1];var I=bp(p)+R;return{name:I,styles:p,next:Tt}}var Kp=function(a){return a()},qp=Oc.useInsertionEffect?Oc.useInsertionEffect:!1,mf=qp||Kp,hf=ne.createContext(typeof HTMLElement<"u"?Bp({key:"css"}):null);hf.Provider;var yf=function(a){return ne.forwardRef(function(u,f){var p=ne.useContext(hf);return a(u,p,f)})},vf=ne.createContext({}),mo={}.hasOwnProperty,Sa="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",gf=function(a,u){var f={};for(var p in u)mo.call(u,p)&&(f[p]=u[p]);return f[Sa]=a,f},Jp=function(a){var u=a.cache,f=a.serialized,p=a.isStringTag;return Pa(u,f,p),mf(function(){return df(u,f,p)}),null},Zp=yf(function(i,a,u){var f=i.css;typeof f=="string"&&a.registered[f]!==void 0&&(f=a.registered[f]);var p=i[Sa],v=[f],x="";typeof i.className=="string"?x=ff(a.registered,v,i.className):i.className!=null&&(x=i.className+" ");var C=Oa(v,void 0,ne.useContext(vf));x+=a.key+"-"+C.name;var k={};for(var R in i)mo.call(i,R)&&R!=="css"&&R!==Sa&&(k[R]=i[R]);return k.className=x,u&&(k.ref=u),ne.createElement(ne.Fragment,null,ne.createElement(Jp,{cache:a,serialized:C,isStringTag:typeof p=="string"}),ne.createElement(p,k))}),wf=Zp,em=h.Fragment,De=function(a,u,f){return mo.call(u,"css")?h.jsx(wf,gf(a,u),f):h.jsx(a,u,f)},Gc=function(a,u){var f=arguments;if(u==null||!mo.call(u,"css"))return ne.createElement.apply(void 0,f);var p=f.length,v=new Array(p);v[0]=wf,v[1]=gf(a,u);for(var x=2;x<p;x++)v[x]=f[x];return ne.createElement.apply(null,v)};(function(i){var a;a||(a=i.JSX||(i.JSX={}))})(Gc||(Gc={}));function Sf(){for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];return Oa(a)}function L(){var i=Sf.apply(void 0,arguments),a="animation-"+i.name;return{name:a,styles:"@keyframes "+a+"{"+i.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var tm=function i(a){for(var u=a.length,f=0,p="";f<u;f++){var v=a[f];if(v!=null){var x=void 0;switch(typeof v){case"boolean":break;case"object":{if(Array.isArray(v))x=i(v);else{x="";for(var C in v)v[C]&&C&&(x&&(x+=" "),x+=C)}break}default:x=v}x&&(p&&(p+=" "),p+=x)}}return p};function nm(i,a,u){var f=[],p=ff(i,f,u);return f.length<2?u:p+a(f)}var rm=function(a){var u=a.cache,f=a.serializedArr;return mf(function(){for(var p=0;p<f.length;p++)df(u,f[p],!1)}),null},ya=yf(function(i,a){var u=[],f=function(){for(var k=arguments.length,R=new Array(k),M=0;M<k;M++)R[M]=arguments[M];var I=Oa(R,a.registered);return u.push(I),Pa(a,I,!1),a.key+"-"+I.name},p=function(){for(var k=arguments.length,R=new Array(k),M=0;M<k;M++)R[M]=arguments[M];return nm(a.registered,f,tm(R))},v={css:f,cx:p,theme:ne.useContext(vf)},x=i.children(v);return ne.createElement(ne.Fragment,null,ne.createElement(rm,{cache:a,serializedArr:u}),x)}),lm=Object.defineProperty,om=(i,a,u)=>a in i?lm(i,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):i[a]=u,no=(i,a,u)=>om(i,typeof a!="symbol"?a+"":a,u),xa=new Map,ro=new WeakMap,Xc=0,im=void 0;function am(i){return i?(ro.has(i)||(Xc+=1,ro.set(i,Xc.toString())),ro.get(i)):"0"}function sm(i){return Object.keys(i).sort().filter(a=>i[a]!==void 0).map(a=>`${a}_${a==="root"?am(i.root):i[a]}`).toString()}function um(i){const a=sm(i);let u=xa.get(a);if(!u){const f=new Map;let p;const v=new IntersectionObserver(x=>{x.forEach(C=>{var k;const R=C.isIntersecting&&p.some(M=>C.intersectionRatio>=M);i.trackVisibility&&typeof C.isVisible>"u"&&(C.isVisible=R),(k=f.get(C.target))==null||k.forEach(M=>{M(R,C)})})},i);p=v.thresholds||(Array.isArray(i.threshold)?i.threshold:[i.threshold||0]),u={id:a,observer:v,elements:f},xa.set(a,u)}return u}function xf(i,a,u={},f=im){if(typeof window.IntersectionObserver>"u"&&f!==void 0){const k=i.getBoundingClientRect();return a(f,{isIntersecting:f,target:i,intersectionRatio:typeof u.threshold=="number"?u.threshold:0,time:0,boundingClientRect:k,intersectionRect:k,rootBounds:k}),()=>{}}const{id:p,observer:v,elements:x}=um(u),C=x.get(i)||[];return x.has(i)||x.set(i,C),C.push(a),v.observe(i),function(){C.splice(C.indexOf(a),1),C.length===0&&(x.delete(i),v.unobserve(i)),x.size===0&&(v.disconnect(),xa.delete(p))}}function cm(i){return typeof i.children!="function"}var Kc=class extends ne.Component{constructor(i){super(i),no(this,"node",null),no(this,"_unobserveCb",null),no(this,"handleNode",a=>{this.node&&(this.unobserve(),!a&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=a||null,this.observeNode()}),no(this,"handleChange",(a,u)=>{a&&this.props.triggerOnce&&this.unobserve(),cm(this.props)||this.setState({inView:a,entry:u}),this.props.onChange&&this.props.onChange(a,u)}),this.state={inView:!!i.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(i){(i.rootMargin!==this.props.rootMargin||i.root!==this.props.root||i.threshold!==this.props.threshold||i.skip!==this.props.skip||i.trackVisibility!==this.props.trackVisibility||i.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:i,root:a,rootMargin:u,trackVisibility:f,delay:p,fallbackInView:v}=this.props;this._unobserveCb=xf(this.node,this.handleChange,{threshold:i,root:a,rootMargin:u,trackVisibility:f,delay:p},v)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:i}=this.props;if(typeof i=="function"){const{inView:Y,entry:W}=this.state;return i({inView:Y,entry:W,ref:this.handleNode})}const{as:a,triggerOnce:u,threshold:f,root:p,rootMargin:v,onChange:x,skip:C,trackVisibility:k,delay:R,initialInView:M,fallbackInView:I,...U}=this.props;return ne.createElement(a||"div",{ref:this.handleNode,...U},i)}};function _f({threshold:i,delay:a,trackVisibility:u,rootMargin:f,root:p,triggerOnce:v,skip:x,initialInView:C,fallbackInView:k,onChange:R}={}){var M;const[I,U]=ne.useState(null),Y=ne.useRef(R),[W,O]=ne.useState({inView:!!C,entry:void 0});Y.current=R,ne.useEffect(()=>{if(x||!I)return;let X;return X=xf(I,(oe,z)=>{O({inView:oe,entry:z}),Y.current&&Y.current(oe,z),z.isIntersecting&&v&&X&&(X(),X=void 0)},{root:p,rootMargin:f,threshold:i,trackVisibility:u,delay:a},k),()=>{X&&X()}},[Array.isArray(i)?i.toString():i,I,p,f,v,x,u,k,a]);const _=(M=W.entry)==null?void 0:M.target,J=ne.useRef(void 0);!I&&_&&!v&&!x&&J.current!==_&&(J.current=_,O({inView:!!C,entry:void 0}));const G=[U,W.inView,W.entry];return G.ref=G[0],G.inView=G[1],G.entry=G[2],G}var va={exports:{}},pe={};var qc;function fm(){if(qc)return pe;qc=1;var i=Symbol.for("react.element"),a=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),x=Symbol.for("react.context"),C=Symbol.for("react.server_context"),k=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),W;W=Symbol.for("react.module.reference");function O(_){if(typeof _=="object"&&_!==null){var J=_.$$typeof;switch(J){case i:switch(_=_.type,_){case u:case p:case f:case R:case M:return _;default:switch(_=_&&_.$$typeof,_){case C:case x:case k:case U:case I:case v:return _;default:return J}}case a:return J}}}return pe.ContextConsumer=x,pe.ContextProvider=v,pe.Element=i,pe.ForwardRef=k,pe.Fragment=u,pe.Lazy=U,pe.Memo=I,pe.Portal=a,pe.Profiler=p,pe.StrictMode=f,pe.Suspense=R,pe.SuspenseList=M,pe.isAsyncMode=function(){return!1},pe.isConcurrentMode=function(){return!1},pe.isContextConsumer=function(_){return O(_)===x},pe.isContextProvider=function(_){return O(_)===v},pe.isElement=function(_){return typeof _=="object"&&_!==null&&_.$$typeof===i},pe.isForwardRef=function(_){return O(_)===k},pe.isFragment=function(_){return O(_)===u},pe.isLazy=function(_){return O(_)===U},pe.isMemo=function(_){return O(_)===I},pe.isPortal=function(_){return O(_)===a},pe.isProfiler=function(_){return O(_)===p},pe.isStrictMode=function(_){return O(_)===f},pe.isSuspense=function(_){return O(_)===R},pe.isSuspenseList=function(_){return O(_)===M},pe.isValidElementType=function(_){return typeof _=="string"||typeof _=="function"||_===u||_===p||_===f||_===R||_===M||_===Y||typeof _=="object"&&_!==null&&(_.$$typeof===U||_.$$typeof===I||_.$$typeof===v||_.$$typeof===x||_.$$typeof===k||_.$$typeof===W||_.getModuleId!==void 0)},pe.typeOf=O,pe}var Jc;function dm(){return Jc||(Jc=1,va.exports=fm()),va.exports}var pm=dm();L`
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
`;L`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;L`
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
`;L`
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
`;L`
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
`;L`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;L`
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
`;L`
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
`;L`
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
`;L`
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
`;L`
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
`;L`
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
`;L`
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
`;const mm=L`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,hm=L`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ym=L`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vm=L`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gm=L`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,za=L`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wm=L`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Sm=L`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xm=L`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_m=L`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,km=L`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,jm=L`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Cm=L`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Em({duration:i=1e3,delay:a=0,timingFunction:u="ease",keyframes:f=za,iterationCount:p=1}){return Sf`
    animation-duration: ${i}ms;
    animation-timing-function: ${u};
    animation-delay: ${a}ms;
    animation-name: ${f};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${p};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Nm(i){return i==null}function Pm(i){return typeof i=="string"||typeof i=="number"||typeof i=="boolean"}function kf(i,a){return u=>u?i():a()}function Vr(i){return kf(i,()=>null)}function _a(i){return Vr(()=>({opacity:0}))(i)}const jf=i=>{const{cascade:a=!1,damping:u=.5,delay:f=0,duration:p=1e3,fraction:v=0,keyframes:x=za,triggerOnce:C=!1,className:k,style:R,childClassName:M,childStyle:I,children:U,onVisibilityChange:Y}=i,W=ne.useMemo(()=>Em({keyframes:x,duration:p}),[p,x]);return Nm(U)?null:Pm(U)?De(zm,{...i,animationStyles:W,children:String(U)}):pm.isFragment(U)?De(Cf,{...i,animationStyles:W}):De(em,{children:ne.Children.map(U,(O,_)=>{if(!ne.isValidElement(O))return null;const J=f+(a?_*p*u:0);switch(O.type){case"ol":case"ul":return De(ya,{children:({cx:G})=>De(O.type,{...O.props,className:G(k,O.props.className),style:Object.assign({},R,O.props.style),children:De(jf,{...i,children:O.props.children})})});case"li":return De(Kc,{threshold:v,triggerOnce:C,onChange:Y,children:({inView:G,ref:X})=>De(ya,{children:({cx:oe})=>De(O.type,{...O.props,ref:X,className:oe(M,O.props.className),css:Vr(()=>W)(G),style:Object.assign({},I,O.props.style,_a(!G),{animationDelay:J+"ms"})})})});default:return De(Kc,{threshold:v,triggerOnce:C,onChange:Y,children:({inView:G,ref:X})=>De("div",{ref:X,className:k,css:Vr(()=>W)(G),style:Object.assign({},R,_a(!G),{animationDelay:J+"ms"}),children:De(ya,{children:({cx:oe})=>De(O.type,{...O.props,className:oe(M,O.props.className),style:Object.assign({},I,O.props.style)})})})})}})})},Om={display:"inline-block",whiteSpace:"pre"},zm=i=>{const{animationStyles:a,cascade:u=!1,damping:f=.5,delay:p=0,duration:v=1e3,fraction:x=0,triggerOnce:C=!1,className:k,style:R,children:M,onVisibilityChange:I}=i,{ref:U,inView:Y}=_f({triggerOnce:C,threshold:x,onChange:I});return kf(()=>De("div",{ref:U,className:k,style:Object.assign({},R,Om),children:M.split("").map((W,O)=>De("span",{css:Vr(()=>a)(Y),style:{animationDelay:p+O*v*f+"ms"},children:W},O))}),()=>De(Cf,{...i,children:M}))(u)},Cf=i=>{const{animationStyles:a,fraction:u=0,triggerOnce:f=!1,className:p,style:v,children:x,onVisibilityChange:C}=i,{ref:k,inView:R}=_f({triggerOnce:f,threshold:u,onChange:C});return De("div",{ref:k,className:p,css:Vr(()=>a)(R),style:Object.assign({},v,_a(!R)),children:x})};L`
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
`;L`
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
`;L`
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
`;L`
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
`;L`
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
`;L`
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
`;L`
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
`;L`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;L`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;L`
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
`;const Tm=L`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Lm=L`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Rm=L`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Mm=L`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Im=L`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Dm=L`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Fm=L`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Am=L`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,$m=L`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Bm=L`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Um=L`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Vm=L`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Hm=L`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Wm(i,a,u){switch(u){case"bottom-left":return a?Lm:hm;case"bottom-right":return a?Rm:ym;case"down":return i?a?Im:gm:a?Mm:vm;case"left":return i?a?Fm:wm:a?Dm:za;case"right":return i?a?$m:xm:a?Am:Sm;case"top-left":return a?Bm:_m;case"top-right":return a?Um:km;case"up":return i?a?Hm:Cm:a?Vm:jm;default:return a?Tm:mm}}const Ef=i=>{const{big:a=!1,direction:u,reverse:f=!1,...p}=i,v=ne.useMemo(()=>Wm(a,f,u),[a,u,f]);return De(jf,{keyframes:v,...p})};L`
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
`;L`
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
`;L`
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
`;L`
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
`;L`
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
`;L`
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
`;L`
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
`;L`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;L`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;L`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;L`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;L`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;L`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;L`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;L`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;L`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;L`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;L`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;L`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;L`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;L`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;L`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;L`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;L`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;L`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;L`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;L`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;L`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;L`
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
`;L`
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
`;L`
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
`;L`
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
`;L`
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
`;L`
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
`;L`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;L`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;L`
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
`;const bm="/personal-website/assets/01-SelectScreen-C39aqvsp.png?type=url",Qm=Object.freeze(Object.defineProperty({__proto__:null,default:bm},Symbol.toStringTag,{value:"Module"})),Ym="/personal-website/assets/02-SC-StateSummary-DqOrXHm6.png?type=url",Gm=Object.freeze(Object.defineProperty({__proto__:null,default:Ym},Symbol.toStringTag,{value:"Module"})),Xm="/personal-website/assets/03-SC-DistrictSummary-D7zkRfh7.png?type=url",Km=Object.freeze(Object.defineProperty({__proto__:null,default:Xm},Symbol.toStringTag,{value:"Module"})),qm="/personal-website/assets/04-SC-HeatMap-p9O3hWcU.png?type=url",Jm=Object.freeze(Object.defineProperty({__proto__:null,default:qm},Symbol.toStringTag,{value:"Module"})),Zm="/personal-website/assets/05-SC-Gingles-C1yA30Dn.png?type=url",e1=Object.freeze(Object.defineProperty({__proto__:null,default:Zm},Symbol.toStringTag,{value:"Module"})),t1="/personal-website/assets/06-SC-EI-A-gNQvc8.png?type=url",n1=Object.freeze(Object.defineProperty({__proto__:null,default:t1},Symbol.toStringTag,{value:"Module"})),r1="/personal-website/assets/07-SC-EnsembleSplit-0NcQtuMd.png?type=url",l1=Object.freeze(Object.defineProperty({__proto__:null,default:r1},Symbol.toStringTag,{value:"Module"})),o1="/personal-website/assets/08-SC-ComparePlans-MuYf_4gr.png?type=url",i1=Object.freeze(Object.defineProperty({__proto__:null,default:o1},Symbol.toStringTag,{value:"Module"})),a1="/personal-website/assets/01-TitleScreen-S4AIekUF.png?type=url",s1=Object.freeze(Object.defineProperty({__proto__:null,default:a1},Symbol.toStringTag,{value:"Module"})),u1="/personal-website/assets/02-Level0-01-FBGtNfUS.png?type=url",c1=Object.freeze(Object.defineProperty({__proto__:null,default:u1},Symbol.toStringTag,{value:"Module"})),f1="/personal-website/assets/03-Level1-01-H3zFxNdI.png?type=url",d1=Object.freeze(Object.defineProperty({__proto__:null,default:f1},Symbol.toStringTag,{value:"Module"})),p1="/personal-website/assets/04-Level1-02-YnX2lNNV.png?type=url",m1=Object.freeze(Object.defineProperty({__proto__:null,default:p1},Symbol.toStringTag,{value:"Module"})),h1="/personal-website/assets/05-Level2-BhPGqFz3.png?type=url",y1=Object.freeze(Object.defineProperty({__proto__:null,default:h1},Symbol.toStringTag,{value:"Module"})),v1="/personal-website/assets/06-Level3-01-BxSYqAvl.png?type=url",g1=Object.freeze(Object.defineProperty({__proto__:null,default:v1},Symbol.toStringTag,{value:"Module"})),w1="/personal-website/assets/07-Level3-02-T82fa1La.png?type=url",S1=Object.freeze(Object.defineProperty({__proto__:null,default:w1},Symbol.toStringTag,{value:"Module"})),x1="/personal-website/assets/08-Level4-01-DD3KrhpT.png?type=url",_1=Object.freeze(Object.defineProperty({__proto__:null,default:x1},Symbol.toStringTag,{value:"Module"})),k1="/personal-website/assets/09-Level5-01-x51Nrjki.png?type=url",j1=Object.freeze(Object.defineProperty({__proto__:null,default:k1},Symbol.toStringTag,{value:"Module"})),C1="/personal-website/assets/10-Level5-02-osKL2R_2.png?type=url",E1=Object.freeze(Object.defineProperty({__proto__:null,default:C1},Symbol.toStringTag,{value:"Module"})),N1="/personal-website/assets/01-Home-DFd9jogf.png?type=url",P1=Object.freeze(Object.defineProperty({__proto__:null,default:N1},Symbol.toStringTag,{value:"Module"})),O1="/personal-website/assets/02-Loading-D6jB0z3s.png?type=url",z1=Object.freeze(Object.defineProperty({__proto__:null,default:O1},Symbol.toStringTag,{value:"Module"})),T1="/personal-website/assets/03-Interview-BtTDuA4T.png?type=url",L1=Object.freeze(Object.defineProperty({__proto__:null,default:T1},Symbol.toStringTag,{value:"Module"})),R1="/personal-website/assets/04-Feedback-DgCdfFC6.png?type=url",M1=Object.freeze(Object.defineProperty({__proto__:null,default:R1},Symbol.toStringTag,{value:"Module"})),I1="/personal-website/assets/05-FeedbackSTAR-Ct2FM57k.png?type=url",D1=Object.freeze(Object.defineProperty({__proto__:null,default:I1},Symbol.toStringTag,{value:"Module"})),F1="/personal-website/assets/01-malloc-cmhriKdS.png?type=url",A1=Object.freeze(Object.defineProperty({__proto__:null,default:F1},Symbol.toStringTag,{value:"Module"})),$1="/personal-website/assets/02-free-CCY2b8-O.png?type=url",B1=Object.freeze(Object.defineProperty({__proto__:null,default:$1},Symbol.toStringTag,{value:"Module"})),U1="/personal-website/assets/03-realloc-BqFnm-GQ.png?type=url",V1=Object.freeze(Object.defineProperty({__proto__:null,default:U1},Symbol.toStringTag,{value:"Module"})),H1="/personal-website/assets/04-memalign-07retMby.png?type=url",W1=Object.freeze(Object.defineProperty({__proto__:null,default:H1},Symbol.toStringTag,{value:"Module"})),b1="/personal-website/assets/01-CreateNetwork-DI45LLOS.png?type=url",Q1=Object.freeze(Object.defineProperty({__proto__:null,default:b1},Symbol.toStringTag,{value:"Module"})),Y1="/personal-website/assets/02-AddPerson-Ce7VuyLK.png?type=url",G1=Object.freeze(Object.defineProperty({__proto__:null,default:Y1},Symbol.toStringTag,{value:"Module"})),X1="/personal-website/assets/03-GetPerson-CLl0L3-0.png?type=url",K1=Object.freeze(Object.defineProperty({__proto__:null,default:X1},Symbol.toStringTag,{value:"Module"})),q1="/personal-website/assets/04-AddRelation-BTKj5-Qc.png?type=url",J1=Object.freeze(Object.defineProperty({__proto__:null,default:q1},Symbol.toStringTag,{value:"Module"})),Z1="/personal-website/assets/05-GetDistantFriends-C8IDcUFR.png?type=url",eh=Object.freeze(Object.defineProperty({__proto__:null,default:Z1},Symbol.toStringTag,{value:"Module"})),th="/personal-website/assets/01-TitleScreen-BwBwWMz4.png?type=url",nh=Object.freeze(Object.defineProperty({__proto__:null,default:th},Symbol.toStringTag,{value:"Module"})),rh="/personal-website/assets/02-GameStart-DZ_J1KRT.png?type=url",lh=Object.freeze(Object.defineProperty({__proto__:null,default:rh},Symbol.toStringTag,{value:"Module"})),oh="/personal-website/assets/03-GameScreen-D6l0jE3_.png?type=url",ih=Object.freeze(Object.defineProperty({__proto__:null,default:oh},Symbol.toStringTag,{value:"Module"})),ah="/personal-website/assets/04-DeathScreen-nHaWga4y.png?type=url",sh=Object.freeze(Object.defineProperty({__proto__:null,default:ah},Symbol.toStringTag,{value:"Module"})),Nf=[{title:"Lobos Client",status:"Plans for Revision",last_updated:"Feb 6, 2025",images:Object.values([Qm,Gm,Km,Jm,e1,n1,l1,i1]),aspect_ratio:1920/1080,description:"Senior design project completed as a team of four, focusing on analyzing and visualizing political data. Python was used to preprocess Census data through Pandas, with further analysis done through libraries such as PyEI and GerryChain. Check out the project via the attached link and feel free to reach out with any questions!",tags:["JavaScript","React","Leaflet","MongoDB","Java","Spring","Python","Pandas"],links:[{type:"Try",name:"Lobos Client",url:"https://lobos-client.vercel.app/"}]},{title:"Asphodel Game",status:"Plans for Revision",last_updated:"Jul 3, 2024",images:Object.values([s1,c1,d1,m1,y1,g1,S1,_1,j1,E1]),aspect_ratio:1500/1e3,description:"A browser game built as a team of three for our 2D Game Development course. Developed with TypeScript using a custom engine, Wolfie2D, and bundled with Gulp.js, then served via Firebase. Play with a friend in this immersive local 2-player adventure through the attached link!",tags:["TypeScript","Gulp.js","Wolfie2D","Firebase"],links:[{type:"Try",name:"Asphodel",url:"https://asphodel-game.web.app/"},{type:"Resource",name:"Wolfie2D",url:"https://zgrandison.github.io/"}]},{title:"Minecraft Bingo",status:"Plans for Revision",last_updated:"Oct 29, 2023",images:Object.values([]),aspect_ratio:1920/1080,description:"Using the Minecraft Development Plugin for IntelliJ with Bukkit and Spigot, I created a Bingo plugin for Minecraft. Players form teams of any size and compete by searching for items throughout the world. To keep things engaging, players vote on modifications during the game, adding unique twists and extra flair to the experience.",tags:["Java","SpigotMC"],links:[{type:"Resource",name:"Spigot MC",url:"https://www.spigotmc.org/"},{type:"Resource",name:"Minecraft Development Plugin",url:"https://plugins.jetbrains.com/plugin/8327-minecraft-development"}]},{title:"ViewYou",status:"Archived",last_updated:"Mar 13, 2024",images:Object.values([P1,z1,L1,M1,D1]),aspect_ratio:1920/1080,description:"ViewYou is a 4-person hackathon project designed using OpenAI to help users prep for interviews by generating behavioral questions. OpenAI's speech recognition and DeepFace's sentiment analysis are used to analyze both speech and body language for feedback.",disclaimer:"This project was created for the CEWIT 2024 Hackathon while exploring new tools and technologies. The code is no longer maintained and likely contains many bugs.",tags:["JavaScript","React","Node.js","Express.js","Python","Flask","DeepFace","OpenAI"],links:[{type:"GitHub",name:"Frontend",url:"https://github.com/yemoeaung1/frontend"},{type:"GitHub",name:"Backend",url:"https://github.com/klin4042/cewit-2024-backend"},{type:"Other",title:"DevPost",name:"ViewYou",url:"https://devpost.com/software/viewyou"}]},{title:"C Memory Allocator",status:"Completed",last_updated:"Apr 05, 2023",images:Object.values([A1,B1,V1,W1]),aspect_ratio:1920/1080,description:"A custom dynamic memory allocator in C, replicating malloc(), free(), and realloc(). This project utilizes quick lists for efficient small block management, headers/footers for tracking, and coalescing to reduce fragmentation. A deep dive into memory management and systems programming. Check out the attached GitHub repo for more information!",tags:["C","GDB","Valgrind"],links:[{type:"GitHub",name:"320 Memory Allocator",url:"https://github.com/klin2003/320-memory-allocator"}]},{title:"Graphs in MIPS",status:"Completed",last_updated:"Dec 11, 2022",images:Object.values([Q1,G1,K1,J1,eh]),aspect_ratio:1920/1080,description:"This project builds a simple graph-based social network in MIPS assembly, with nodes as people and relationships as edges. It allows you to add people, find users by name, manage relationships, and query for distant friends. This project explores memory management, data structures, and graph traversal in low-level programming. Check out the GitHub repo for more details!",tags:["MIPS","Assembly","MARS"],links:[{type:"GitHub",name:"220 MIPs Graphs",url:"https://github.com/klin2003/220-mips-graphs"}]},{title:"Totally Not Crossy Road",status:"Archived",last_updated:"Jun 14, 2020",images:Object.values([nh,lh,ih,sh]),aspect_ratio:800/800,description:"Two-day project for my AP Computer Science A high school course where Java and Processing API were used to create a replica of Crossy Road. Our ultimate goal was to combine concepts discussed in class with official documentation to create a replica of an existing game. Try the game out by downloading it from the attached GitHub repo!",tags:["Java","Processing"],links:[{type:"GitHub",name:"Totally Not Crossy Road",url:"https://github.com/klin2003/totally-not-crossy-road"},{type:"Resource",name:"Processing API",url:"https://processing.org/"}]}],uh="/personal-website/assets/NoImages-Cnq4Uv_V.png";function ch(i){const a={projectData:Nf,projectIndex:i.projectIndex,setProjectIndex:i.setProjectIndex};return h.jsxs("div",{id:"projects",children:[h.jsx(ja,{className:"projects-section-header",entryNumber:2,titleLabel:i.width>1200?"Projects":""}),h.jsxs("div",{className:"projects-container flex flex-col text-white",children:[h.jsx(fh,{projectData:a.projectData,projectIndex:a.projectIndex,setProjectIndex:a.setProjectIndex}),h.jsxs(Ef,{children:[h.jsx(dh,{projectData:a.projectData,projectIndex:a.projectIndex,setProjectIndex:a.setProjectIndex}),h.jsx(ph,{projectData:a.projectData,projectIndex:a.projectIndex,setProjectIndex:a.setProjectIndex,setFocus:i.setFocus}),h.jsx(mh,{projectData:a.projectData,projectIndex:a.projectIndex,setProjectIndex:a.setProjectIndex})]},i.projectIndex)]})]})}function fh({projectData:i,projectIndex:a,setProjectIndex:u}){const f=p=>{p&&a==i.length?u(1):!p&&a==1?u(i.length):u(a+(p?1:-1))};return h.jsxs("div",{className:"flex flex-row justify-between items-center",children:[h.jsx("div",{className:"text-red-500 font-bold text-sm montserrat",children:"CURRENT LISTING:"}),h.jsxs("div",{className:"projects-header-settings flex justify-center items-center",children:[h.jsx(b0,{className:"projects-header-arrow",onClick:()=>{f(!1)}}),h.jsxs("div",{className:"projects-header-index",children:[h.jsx("span",{className:"font-medium text-red-500",children:`${a.toString().padStart(3,"0")}`}),h.jsx("span",{children:" / "}),h.jsx("span",{children:`${i.length.toString().padStart(3,"0")}`})]}),h.jsx(Y0,{className:"projects-header-arrow",onClick:()=>{f(!0)}})]})]})}function dh({projectData:i,projectIndex:a}){const u=i[a-1];return h.jsxs("div",{className:"projects-header-section flex flex-row items-center justify-between mt-2 mb-2",children:[h.jsx("div",{className:"projects-header-title averia-serif",children:u.title}),h.jsxs("div",{className:"montserrat text-gray-300 font-semibold text-sm text-center",children:[h.jsx("span",{className:"underline underline-offset-4",children:"Last Updated"}),h.jsx("span",{children:`: ${u.last_updated}`}),h.jsx("div",{className:"mt-2",children:`=={ ${u.status} }==`})]})]})}function ph({projectData:i,projectIndex:a,setFocus:u}){const f=i[a-1],p=f.images.length,[v,x]=ne.useState(0),[C,k]=ne.useState(0),R=ne.useRef(null),M=U=>{x(U?(v+1)%p:(v-1+p)%p)},I=()=>{if(R.current){const U=R.current.querySelector(".project-img-container");if(U){const Y=U.getBoundingClientRect().width;k(Y+48)}}};return f.images.length==0?h.jsxs("div",{className:"projects-display-section",children:[h.jsx("div",{ref:R,className:"project-display-images flex items-center",children:h.jsx("img",{src:uh,className:"project-img-none"})}),h.jsxs("div",{className:"flex flex-row items-center justify-between mt-2 p-2 border-y-2 border-gray-500 border-dashed",children:[h.jsx(Fc,{size:24,className:"projects-img-arrow cursor-not-allowed mr-4"}),h.jsx("div",{className:"projects-img-slides-index",children:h.jsx("span",{children:"No Images Found"})}),h.jsx(Ac,{size:24,className:"projects-img-arrow cursor-not-allowed ml-4"})]})]}):h.jsxs("div",{className:"projects-display-section",children:[h.jsx("div",{ref:R,className:"project-display-images flex items-center",children:f.images.map((U,Y)=>h.jsxs("div",{className:"relative project-img-container flex transition-transform duration-500 ease-in-out",style:{transform:`translateX(-${v*C}px)`},children:[h.jsx("img",{src:U.default,className:"project-img",onClick:()=>{console.log(Y),u(Y)},onLoad:I}),h.jsx(lp,{className:"project-img-zoom cursor-pointer",onClick:()=>{console.log(Y),u(Y)}})]},Y))}),h.jsxs("div",{className:"flex flex-row items-center justify-between mt-2 p-2 border-y-2 border-gray-500 border-dashed",children:[h.jsx(Fc,{size:24,className:"projects-img-arrow mr-4",onClick:()=>M(!1)}),h.jsxs("div",{className:"projects-img-slides-index",children:[h.jsx("span",{className:"text-red-500",children:`${(v+1).toString().padStart(2,"0")}`}),h.jsx("span",{children:" / "}),h.jsx("span",{children:`${p.toString().padStart(2,"0")}`})]}),h.jsx(Ac,{size:24,className:"projects-img-arrow ml-4",onClick:()=>M(!0)})]})]})}function mh({projectData:i,projectIndex:a,setProjectIndex:u}){return h.jsxs("div",{className:"projects-details-section",children:[h.jsx("div",{className:"flex-[0_0_50%]",children:h.jsx(hh,{projectData:i,projectIndex:a,setProjectIndex:u})}),h.jsxs("div",{className:"flex flex-col flex-[0_0_50%]",children:[h.jsx(yh,{projectData:i,projectIndex:a,setProjectIndex:u}),h.jsx(vh,{projectData:i,projectIndex:a,setProjectIndex:u})]})]})}function hh({projectData:i,projectIndex:a}){const u=i[a-1];return h.jsxs("div",{className:"projects-description-container mb-6",children:[h.jsx("div",{className:"projects-details-title",children:"DESCRIPTION"}),h.jsx("div",{className:"projects-description-content source-code-pro",children:u.description}),u.disclaimer&&h.jsxs("div",{className:"mt-6",children:[h.jsx("div",{className:"projects-details-title text-red-500",children:"DISCLAIMER"}),h.jsx("div",{className:"projects-description-content source-code-pro italic text-sm",children:u.disclaimer})]})]})}function yh({projectData:i,projectIndex:a}){const u=i[a-1];return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"projects-details-title",children:"TECH STACK"}),h.jsxs("div",{className:"projects-tech-stack mb-6",children:[u.tags.length==0&&h.jsx("div",{className:"source-code-pro",children:"No Tech Stack Provided"}),h.jsx("div",{className:"projects-tech-stack-grid",children:u.tags.map((f,p)=>h.jsx("div",{className:"projects-tech-stack-item",children:f},`Tag${p}`))})]})]})}function vh({projectData:i,projectIndex:a}){const u=i[a-1];return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"projects-details-title",children:"LINKS"}),h.jsxs("div",{className:"projects-links-container mb-4",children:[u.links.length==0&&h.jsx("div",{className:"source-code-pro",children:"No Links Available"}),u.links.map((f,p)=>h.jsxs("div",{className:"flex items-center pb-4",children:[f.type=="GitHub"&&h.jsxs(h.Fragment,{children:[h.jsx(nf,{size:24,className:"mr-4"}),h.jsx("span",{className:"source-code-pro",children:"GitHub Repo: "})]}),f.type=="Try"&&h.jsxs(h.Fragment,{children:[h.jsx(Z0,{size:24,className:"mr-4"}),h.jsx("span",{className:"source-code-pro",children:"Try Yourself: "})]}),f.type=="Resource"&&h.jsxs(h.Fragment,{children:[h.jsx(H0,{size:24,className:"mr-4"}),h.jsx("span",{className:"source-code-pro",children:"Resource: "})]}),f.type=="Download"&&h.jsxs(h.Fragment,{children:[h.jsx(q0,{size:24,className:"mr-4"}),h.jsx("span",{className:"source-code-pro",children:"Download: "})]}),f.type=="Other"&&h.jsxs(h.Fragment,{children:[h.jsx(tp,{size:24,className:"mr-4"}),h.jsxs("span",{className:"source-code-pro",children:[f.title,": "]})]}),h.jsx("a",{className:"source-code-pro classic-anchor1",href:f.url,target:"_blank",children:f.name})]},`Link${p}`))]})]})}function gh(i){return h.jsx("div",{id:"tools",className:"flex flex-row items-center",children:h.jsx(ja,{className:"tools",entryNumber:3,titleLabel:i.width>1200?"Tools (WIP)":""})})}function wh(i){const a=Nf,u=a[i.projectIndex-1].images.length,[f,p]=ne.useState(!0),[v,x]=ne.useState(!1),C=k=>{x(!0),k?i.setFocus((i.focusState+1)%u):i.setFocus((i.focusState-1+u)%u)};return ne.useEffect(()=>{const k=document.getElementById("project-focus-img-modal"),R=document.getElementById("project-focus-img");k&&R&&(p(!v),x(!1),i.focusState<0?k.style.display="none":(k.style.display="flex",R.src=a[i.projectIndex-1].images[i.focusState].default))},[i.focusState]),h.jsx(h.Fragment,{children:h.jsxs("div",{id:"project-focus-img-modal",children:[h.jsx(rp,{className:"project-focus-img-modal-close",onClick:()=>{i.setFocus(-1)}}),h.jsxs("div",{className:"flex flex-row items-center",children:[h.jsx(Q0,{className:"project-focus-img-arrow",onClick:()=>C(!1)}),h.jsx(Ef,{duration:1e3,children:h.jsx("img",{id:"project-focus-img",className:`${f?"zoom":""}`})},i.focusState),h.jsx(G0,{className:"project-focus-img-arrow",onClick:()=>C(!0)})]})]})})}function Sh(){const[i,a]=ne.useState(window.innerWidth),[u,f]=ne.useState(1),[p,v]=ne.useState(-1),x=()=>{a(window.innerWidth)};return ne.useEffect(()=>(window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x)}),[]),h.jsxs("div",{className:"relative",children:[h.jsx("img",{className:"bg-image",src:I0}),h.jsx(op,{}),h.jsx(up,{width:i}),h.jsx(ch,{width:i,projectIndex:u,setProjectIndex:f,setFocus:v}),h.jsx(gh,{width:i}),h.jsx(wh,{projectIndex:u,setFocus:v,focusState:p}),h.jsx(sp,{})]})}M0.createRoot(document.getElementById("root")).render(h.jsx(Vt.StrictMode,{children:h.jsx(Sh,{})}));
