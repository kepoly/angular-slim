!function(t,e,n){"use strict";function r(t){return function(){var e,n=arguments[0];for(e="["+(t?t+":":"")+n+"] http://errors.angularjs.org/1.3.15/"+(t?t+"/":"")+n,n=1;n<arguments.length;n++){e=e+(1==n?"?":"&")+"p"+(n-1)+"=";var r,i=encodeURIComponent;r=arguments[n],r="function"==typeof r?r.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof r?"undefined":"string"!=typeof r?JSON.stringify(r):r,e+=i(r)}return Error(e)}}function i(t){if(null==t||C(t))return!1;var e=t.length;return t.nodeType===_r&&e?!0:y(t)||Pr(t)||0===e||"number"==typeof e&&e>0&&e-1 in t}function o(t,e,n){var r,a;if(t)if(x(t))for(r in t)"prototype"==r||"length"==r||"name"==r||t.hasOwnProperty&&!t.hasOwnProperty(r)||e.call(n,t[r],r,t);else if(Pr(t)||i(t)){var s="object"!=typeof t;for(r=0,a=t.length;a>r;r++)(s||r in t)&&e.call(n,t[r],r,t)}else if(t.forEach&&t.forEach!==o)t.forEach(e,n,t);else for(r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r,t);return t}function a(t,e,n){for(var r=Object.keys(t).sort(),i=0;i<r.length;i++)e.call(n,t[r[i]],r[i]);return r}function s(t){return function(e,n){t(n,e)}}function u(){return++Dr}function c(t,e){e?t.$$hashKey=e:delete t.$$hashKey}function l(t){for(var e=t.$$hashKey,n=1,r=arguments.length;r>n;n++){var i=arguments[n];if(i)for(var o=Object.keys(i),a=0,s=o.length;s>a;a++){var u=o[a];t[u]=i[u]}}return c(t,e),t}function f(t){return parseInt(t,10)}function h(t,e){return l(Object.create(t),e)}function $(){}function p(t){return t}function d(t){return function(){return t}}function m(t){return"undefined"==typeof t}function v(t){return"undefined"!=typeof t}function g(t){return null!==t&&"object"==typeof t}function y(t){return"string"==typeof t}function w(t){return"number"==typeof t}function b(t){return"[object Date]"===Mr.call(t)}function x(t){return"function"==typeof t}function S(t){return"[object RegExp]"===Mr.call(t)}function C(t){return t&&t.window===t}function A(t){return t&&t.$evalAsync&&t.$watch}function k(t){return"boolean"==typeof t}function E(t){return!(!t||!(t.nodeName||t.prop&&t.attr&&t.find))}function O(t){var e={};t=t.split(",");var n;for(n=0;n<t.length;n++)e[t[n]]=!0;return e}function T(t){return Cr(t.nodeName||t[0]&&t[0].nodeName)}function M(t,e){var n=t.indexOf(e);return n>=0&&t.splice(n,1),e}function V(t,e,n,r){if(C(t)||A(t))throw Vr("cpws");if(e){if(t===e)throw Vr("cpi");if(n=n||[],r=r||[],g(t)){var i=n.indexOf(t);if(-1!==i)return r[i];n.push(t),r.push(e)}if(Pr(t))for(var a=e.length=0;a<t.length;a++)i=V(t[a],null,n,r),g(t[a])&&(n.push(t[a]),r.push(i)),e.push(i);else{var s=e.$$hashKey;Pr(e)?e.length=0:o(e,function(t,n){delete e[n]});for(a in t)t.hasOwnProperty(a)&&(i=V(t[a],null,n,r),g(t[a])&&(n.push(t[a]),r.push(i)),e[a]=i);c(e,s)}}else(e=t)&&(Pr(t)?e=V(t,[],n,r):b(t)?e=new Date(t.getTime()):S(t)?(e=new RegExp(t.source,t.toString().match(/[^\/]*$/)[0]),e.lastIndex=t.lastIndex):g(t)&&(i=Object.create(Object.getPrototypeOf(t)),e=V(t,i,n,r)));return e}function N(t,e){if(Pr(t)){e=e||[];for(var n=0,r=t.length;r>n;n++)e[n]=t[n]}else if(g(t))for(n in e=e||{},t)("$"!==n.charAt(0)||"$"!==n.charAt(1))&&(e[n]=t[n]);return e||t}function D(t,e){if(t===e)return!0;if(null===t||null===e)return!1;if(t!==t&&e!==e)return!0;var r,i=typeof t;if(i==typeof e&&"object"==i){if(!Pr(t)){if(b(t))return b(e)?D(t.getTime(),e.getTime()):!1;if(S(t))return S(e)?t.toString()==e.toString():!1;if(A(t)||A(e)||C(t)||C(e)||Pr(e)||b(e)||S(e))return!1;i={};for(r in t)if("$"!==r.charAt(0)&&!x(t[r])){if(!D(t[r],e[r]))return!1;i[r]=!0}for(r in e)if(!i.hasOwnProperty(r)&&"$"!==r.charAt(0)&&e[r]!==n&&!x(e[r]))return!1;return!0}if(!Pr(e))return!1;if((i=t.length)==e.length){for(r=0;i>r;r++)if(!D(t[r],e[r]))return!1;return!0}}return!1}function j(t,e,n){return t.concat(Er.call(e,n))}function P(t,e){var n=2<arguments.length?Er.call(arguments,2):[];return!x(e)||e instanceof RegExp?e:n.length?function(){return arguments.length?e.apply(t,j(n,arguments,0)):e.apply(t,n)}:function(){return arguments.length?e.apply(t,arguments):e.call(t)}}function R(t,r){var i=r;return"string"==typeof t&&"$"===t.charAt(0)&&"$"===t.charAt(1)?i=n:C(r)?i="$WINDOW":r&&e===r?i="$DOCUMENT":A(r)&&(i="$SCOPE"),i}function I(t,e){return"undefined"==typeof t?n:(w(e)||(e=e?2:null),JSON.stringify(t,R,e))}function q(t){return y(t)?JSON.parse(t):t}function U(t){t=wr(t).clone();try{t.empty()}catch(e){}var n=wr("<div>").append(t).html();try{return t[0].nodeType===Lr?Cr(n):n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(t,e){return"<"+Cr(e)})}catch(r){return Cr(n)}}function F(t){try{return decodeURIComponent(t)}catch(e){}}function H(t){var e,n,r={};return o((t||"").split("&"),function(t){t&&(e=t.replace(/\+/g,"%20").split("="),n=F(e[0]),v(n)&&(t=v(e[1])?F(e[1]):!0,Ar.call(r,n)?Pr(r[n])?r[n].push(t):r[n]=[r[n],t]:r[n]=t))}),r}function _(t){var e=[];return o(t,function(t,n){Pr(t)?o(t,function(t){e.push(B(n,!0)+(!0===t?"":"="+B(t,!0)))}):e.push(B(n,!0)+(!0===t?"":"="+B(t,!0)))}),e.length?e.join("&"):""}function L(t){return B(t,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function B(t,e){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,e?"%20":"+")}function z(t,e){var n,r,i=Ur.length;for(t=wr(t),r=0;i>r;++r)if(n=Ur[r]+e,y(n=t.attr(n)))return n;return null}function G(t,e){var n,r,i={};o(Ur,function(e){e+="app",!n&&t.hasAttribute&&t.hasAttribute(e)&&(n=t,r=t.getAttribute(e))}),o(Ur,function(e){e+="app";var i;!n&&(i=t.querySelector("["+e.replace(":","\\:")+"]"))&&(n=i,r=i.getAttribute(e))}),n&&(i.strictDi=null!==z(n,"strict-di"),e(n,r?[r]:[],i))}function W(n,r,i){g(i)||(i={}),i=l({strictDi:!1},i);var a=function(){if(n=wr(n),n.injector()){var t=n[0]===e?"document":U(n);throw Vr("btstrpd",t.replace(/</,"&lt;").replace(/>/,"&gt;"))}return r=r||[],r.unshift(["$provide",function(t){t.value("$rootElement",n)}]),i.debugInfoEnabled&&r.push(["$compileProvider",function(t){t.debugInfoEnabled(!0)}]),r.unshift("ng"),t=Ne(r,i.strictDi),t.invoke(["$rootScope","$rootElement","$compile","$injector",function(t,e,n,r){t.$apply(function(){e.data("$injector",r),n(e)(t)})}]),t},s=/^NG_ENABLE_DEBUG_INFO!/,u=/^NG_DEFER_BOOTSTRAP!/;return t&&s.test(t.name)&&(i.debugInfoEnabled=!0,t.name=t.name.replace(s,"")),t&&!u.test(t.name)?a():(t.name=t.name.replace(u,""),Nr.resumeBootstrap=function(t){return o(t,function(t){r.push(t)}),a()},void(x(Nr.resumeDeferredBootstrap)&&Nr.resumeDeferredBootstrap()))}function J(){t.name="NG_ENABLE_DEBUG_INFO!"+t.name,t.location.reload()}function Y(t){if(t=Nr.element(t).injector(),!t)throw Vr("test");return t.get("$$testability")}function Z(t,e){return e=e||"_",t.replace(Fr,function(t,n){return(n?e:"")+t.toLowerCase()})}function K(){var e;Hr||((br=t.jQuery)&&br.fn.on?(wr=br,l(br.fn,{scope:ni.scope,isolateScope:ni.isolateScope,controller:ni.controller,injector:ni.injector,inheritedData:ni.inheritedData}),e=br.cleanData,br.cleanData=function(t){var n;if(jr)jr=!1;else for(var r,i=0;null!=(r=t[i]);i++)(n=br._data(r,"events"))&&n.$destroy&&br(r).triggerHandler("$destroy");e(t)}):wr=ce,Nr.element=wr,Hr=!0)}function X(t,e,n){if(!t)throw Vr("areq",e||"?",n||"required");return t}function Q(t,e,n){return n&&Pr(t)&&(t=t[t.length-1]),X(x(t),e,"not a function, got "+(t&&"object"==typeof t?t.constructor.name||"Object":typeof t)),t}function te(t,e){if("hasOwnProperty"===t)throw Vr("badname",e)}function ee(t,e,n){if(!e)return t;e=e.split(".");for(var r,i=t,o=e.length,a=0;o>a;a++)r=e[a],t&&(t=(i=t)[r]);return!n&&x(t)?P(i,t):t}function ne(t){var e=t[0];t=t[t.length-1];var n=[e];do{if(e=e.nextSibling,!e)break;n.push(e)}while(e!==t);return wr(n)}function re(){return Object.create(null)}function ie(t){function e(t,e,n){return t[e]||(t[e]=n())}var n=r("$injector"),i=r("ng");return t=e(t,"angular",Object),t.$$minErr=t.$$minErr||r,e(t,"module",function(){var t={};return function(r,o,a){if("hasOwnProperty"===r)throw i("badname","module");return o&&t.hasOwnProperty(r)&&(t[r]=null),e(t,r,function(){function t(t,n,r,i){return i||(i=e),function(){return i[r||"push"]([t,n,arguments]),c}}if(!o)throw n("nomod",r);var e=[],i=[],s=[],u=t("$injector","invoke","push",i),c={_invokeQueue:e,_configBlocks:i,_runBlocks:s,requires:o,name:r,provider:t("$provide","provider"),factory:t("$provide","factory"),service:t("$provide","service"),value:t("$provide","value"),constant:t("$provide","constant","unshift"),animation:t("$animateProvider","register"),filter:t("$filterProvider","register"),controller:t("$controllerProvider","register"),directive:t("$compileProvider","directive"),config:u,run:function(t){return s.push(t),this}};return a&&u(a),c})}})}function oe(e){l(e,{bootstrap:W,copy:V,extend:l,equals:D,element:wr,forEach:o,injector:Ne,noop:$,bind:P,toJson:I,fromJson:q,identity:p,isUndefined:m,isDefined:v,isString:y,isFunction:x,isObject:g,isNumber:w,isElement:E,isArray:Pr,version:Br,isDate:b,lowercase:Cr,uppercase:kr,callbacks:{counter:0},getTestability:Y,$$minErr:r,$$csp:qr,reloadWithDebugInfo:J}),xr=ie(t);try{xr("ngLocale")}catch(n){xr("ngLocale",[]).provider("$locale",nn)}xr("ng",["ngLocale"],["$provide",function(t){t.provider({$$sanitizeUri:Dn}),t.provider("$compile",Ue).directive({a:Ji,input:lo,textarea:lo,form:Xi,script:Zo,select:Qo,style:ea,option:ta,ngBind:$o,ngBindHtml:mo,ngBindTemplate:po,ngClass:go,ngClassEven:wo,ngClassOdd:yo,ngCloak:bo,ngController:xo,ngForm:Qi,ngHide:Bo,ngIf:Ao,ngInclude:ko,ngInit:Oo,ngNonBindable:Fo,ngPluralize:Ho,ngRepeat:_o,ngShow:Lo,ngStyle:zo,ngSwitch:Go,ngSwitchWhen:Wo,ngSwitchDefault:Jo,ngOptions:Xo,ngTransclude:Yo,ngModel:Io,ngList:To,ngChange:vo,pattern:ra,ngPattern:ra,required:na,ngRequired:na,minlength:oa,ngMinlength:oa,maxlength:ia,ngMaxlength:ia,ngValue:ho,ngModelOptions:Uo}).directive({ngInclude:Eo}).directive(Yi).directive(So),t.provider({$anchorScroll:De,$animate:hi,$browser:Re,$cacheFactory:Ie,$controller:Le,$document:Be,$exceptionHandler:ze,$filter:zn,$interpolate:tn,$interval:en,$http:Ze,$httpBackend:Xe,$location:mn,$log:vn,$parse:En,$rootScope:Nn,$q:On,$$q:Tn,$sce:In,$sceDelegate:Rn,$sniffer:qn,$templateCache:qe,$templateRequest:Un,$$testability:Fn,$timeout:Hn,$window:Bn,$$rAF:Vn,$$asyncCallback:je,$$jqLite:Oe})}])}function ae(t){return t.replace(Wr,function(t,e,n,r){return r?n.toUpperCase():n}).replace(Jr,"Moz$1")}function se(t){return t=t.nodeType,t===_r||!t||9===t}function ue(t,e){var n,r,i=e.createDocumentFragment(),a=[];if(Xr.test(t)){for(n=n||i.appendChild(e.createElement("div")),r=(Qr.exec(t)||["",""])[1].toLowerCase(),r=ei[r]||ei._default,n.innerHTML=r[1]+t.replace(ti,"<$1></$2>")+r[2],r=r[0];r--;)n=n.lastChild;a=j(a,n.childNodes),n=i.firstChild,n.textContent=""}else a.push(e.createTextNode(t));return i.textContent="",i.innerHTML="",o(a,function(t){i.appendChild(t)}),i}function ce(t){if(t instanceof ce)return t;var n;if(y(t)&&(t=Rr(t),n=!0),!(this instanceof ce)){if(n&&"<"!=t.charAt(0))throw Zr("nosel");return new ce(t)}if(n){n=e;var r;t=(r=Kr.exec(t))?[n.createElement(r[1])]:(r=ue(t,n))?r.childNodes:[]}ye(this,t)}function le(t){return t.cloneNode(!0)}function fe(t,e){if(e||$e(t),t.querySelectorAll)for(var n=t.querySelectorAll("*"),r=0,i=n.length;i>r;r++)$e(n[r])}function he(t,e,n,r){if(v(r))throw Zr("offargs");var i=(r=pe(t))&&r.events,a=r&&r.handle;if(a)if(e)o(e.split(" "),function(e){if(v(n)){var r=i[e];if(M(r||[],n),r&&0<r.length)return}t.removeEventListener(e,a,!1),delete i[e]});else for(e in i)"$destroy"!==e&&t.removeEventListener(e,a,!1),delete i[e]}function $e(t,e){var r=t.ng339,i=r&&zr[r];i&&(e?delete i.data[e]:(i.handle&&(i.events.$destroy&&i.handle({},"$destroy"),he(t)),delete zr[r],t.ng339=n))}function pe(t,e){var r=t.ng339,r=r&&zr[r];return e&&!r&&(t.ng339=r=++Gr,r=zr[r]={events:{},data:{},handle:n}),r}function de(t,e,n){if(se(t)){var r=v(n),i=!r&&e&&!g(e),o=!e;if(t=(t=pe(t,!i))&&t.data,r)t[e]=n;else{if(o)return t;if(i)return t&&t[e];l(t,e)}}}function me(t,e){return t.getAttribute?-1<(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+e+" "):!1}function ve(t,e){e&&t.setAttribute&&o(e.split(" "),function(e){t.setAttribute("class",Rr((" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+Rr(e)+" "," ")))})}function ge(t,e){if(e&&t.setAttribute){var n=(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");o(e.split(" "),function(t){t=Rr(t),-1===n.indexOf(" "+t+" ")&&(n+=t+" ")}),t.setAttribute("class",Rr(n))}}function ye(t,e){if(e)if(e.nodeType)t[t.length++]=e;else{var n=e.length;if("number"==typeof n&&e.window!==e){if(n)for(var r=0;n>r;r++)t[t.length++]=e[r]}else t[t.length++]=e}}function we(t,e){return be(t,"$"+(e||"ngController")+"Controller")}function be(t,e,r){for(9==t.nodeType&&(t=t.documentElement),e=Pr(e)?e:[e];t;){for(var i=0,o=e.length;o>i;i++)if((r=wr.data(t,e[i]))!==n)return r;t=t.parentNode||11===t.nodeType&&t.host}}function xe(t){for(fe(t,!0);t.firstChild;)t.removeChild(t.firstChild)}function Se(t,e){e||fe(t);var n=t.parentNode;n&&n.removeChild(t)}function Ce(e,n){n=n||t,"complete"===n.document.readyState?n.setTimeout(e):wr(n).on("load",e)}function Ae(t,e){var n=ri[e.toLowerCase()];return n&&ii[T(t)]&&n}function ke(t,e){var n=t.nodeName;return("INPUT"===n||"TEXTAREA"===n)&&oi[e]}function Ee(t,e){var n=function(n,r){n.isDefaultPrevented=function(){return n.defaultPrevented};var i=e[r||n.type],o=i?i.length:0;if(o){if(m(n.immediatePropagationStopped)){var a=n.stopImmediatePropagation;n.stopImmediatePropagation=function(){n.immediatePropagationStopped=!0,n.stopPropagation&&n.stopPropagation(),a&&a.call(n)}}n.isImmediatePropagationStopped=function(){return!0===n.immediatePropagationStopped},o>1&&(i=N(i));for(var s=0;o>s;s++)n.isImmediatePropagationStopped()||i[s].call(t,n)}};return n.elem=t,n}function Oe(){this.$get=function(){return l(ce,{hasClass:function(t,e){return t.attr&&(t=t[0]),me(t,e)},addClass:function(t,e){return t.attr&&(t=t[0]),ge(t,e)},removeClass:function(t,e){return t.attr&&(t=t[0]),ve(t,e)}})}}function Te(t,e){var n=t&&t.$$hashKey;return n?("function"==typeof n&&(n=t.$$hashKey()),n):(n=typeof t,n="function"==n||"object"==n&&null!==t?t.$$hashKey=n+":"+(e||u)():n+":"+t)}function Me(t,e){if(e){var n=0;this.nextUid=function(){return++n}}o(t,this.put,this)}function Ve(t){return(t=t.toString().replace(ci,"").match(ai))?"function("+(t[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Ne(t,e){function r(t){return function(e,n){return g(e)?void o(e,s(t)):t(e,n)}}function i(t,e){if(te(t,"service"),(x(e)||Pr(e))&&(e=w.instantiate(e)),!e.$get)throw li("pget",t);return v[t+"Provider"]=e}function a(t,e){return function(){var n=S.invoke(e,this);if(m(n))throw li("undef",t);return n}}function u(t,e,n){return i(t,{$get:!1!==n?a(t,e):e})}function c(t){var e,n=[];return o(t,function(t){function r(t){var e,n;for(e=0,n=t.length;n>e;e++){var r=t[e],i=w.get(r[0]);i[r[1]].apply(i,r[2])}}if(!p.get(t)){p.put(t,!0);try{y(t)?(e=xr(t),n=n.concat(c(e.requires)).concat(e._runBlocks),r(e._invokeQueue),r(e._configBlocks)):x(t)?n.push(w.invoke(t)):Pr(t)?n.push(w.invoke(t)):Q(t,"module")}catch(i){throw Pr(t)&&(t=t[t.length-1]),i.message&&i.stack&&-1==i.stack.indexOf(i.message)&&(i=i.message+"\n"+i.stack),li("modulerr",t,i.stack||i.message||i)}}}),n}function l(t,n){function r(e,r){if(t.hasOwnProperty(e)){if(t[e]===f)throw li("cdep",e+" <- "+h.join(" <- "));return t[e]}try{return h.unshift(e),t[e]=f,t[e]=n(e,r)}catch(i){throw t[e]===f&&delete t[e],i}finally{h.shift()}}function i(t,n,i,o){"string"==typeof i&&(o=i,i=null);var a,s,u,c=[],l=Ne.$$annotate(t,e,o);for(s=0,a=l.length;a>s;s++){if(u=l[s],"string"!=typeof u)throw li("itkn",u);c.push(i&&i.hasOwnProperty(u)?i[u]:r(u,o))}return Pr(t)&&(t=t[a]),t.apply(n,c)}return{invoke:i,instantiate:function(t,e,n){var r=Object.create((Pr(t)?t[t.length-1]:t).prototype||null);return t=i(t,r,e,n),g(t)||x(t)?t:r},get:r,annotate:Ne.$$annotate,has:function(e){return v.hasOwnProperty(e+"Provider")||t.hasOwnProperty(e)}}}e=!0===e;var f={},h=[],p=new Me([],!0),v={$provide:{provider:r(i),factory:r(u),service:r(function(t,e){return u(t,["$injector",function(t){return t.instantiate(e)}])}),value:r(function(t,e){return u(t,d(e),!1)}),constant:r(function(t,e){te(t,"constant"),v[t]=e,b[t]=e}),decorator:function(t,e){var n=w.get(t+"Provider"),r=n.$get;n.$get=function(){var t=S.invoke(r,n);return S.invoke(e,null,{$delegate:t})}}}},w=v.$injector=l(v,function(t,e){throw Nr.isString(e)&&h.push(e),li("unpr",h.join(" <- "))}),b={},S=b.$injector=l(b,function(t,e){var r=w.get(t+"Provider",e);return S.invoke(r.$get,r,n,t)});return o(c(t),function(t){S.invoke(t||$)}),S}function De(){var t=!0;this.disableAutoScrolling=function(){t=!1},this.$get=["$window","$location","$rootScope",function(e,n,r){function i(t){var e=null;return Array.prototype.some.call(t,function(t){return"a"===T(t)?(e=t,!0):void 0}),e}function o(t){if(t){t.scrollIntoView();var n;n=a.yOffset,x(n)?n=n():E(n)?(n=n[0],n="fixed"!==e.getComputedStyle(n).position?0:n.getBoundingClientRect().bottom):w(n)||(n=0),n&&(t=t.getBoundingClientRect().top,e.scrollBy(0,t-n))}else e.scrollTo(0,0)}function a(){var t,e=n.hash();e?(t=s.getElementById(e))?o(t):(t=i(s.getElementsByName(e)))?o(t):"top"===e&&o(null):o(null)}var s=e.document;return t&&r.$watch(function(){return n.hash()},function(t,e){t===e&&""===t||Ce(function(){r.$evalAsync(a)})}),a}]}function je(){this.$get=["$$rAF","$timeout",function(t,e){return t.supported?function(e){return t(e)}:function(t){return e(t,0,!1)}}]}function Pe(t,e,r,i){function a(t){try{t.apply(null,Er.call(arguments,1))}finally{if(x--,0===x)for(;S.length;)try{S.pop()()}catch(e){r.error(e)}}}function s(t,e){!function n(){o(A,function(t){t()}),C=e(n,t)}()}function u(){c(),l()}function c(){t:{try{k=v.state;break t}catch(t){}k=void 0}k=m(k)?null:k,D(k,j)&&(k=j),j=k}function l(){(O!==h.url()||E!==k)&&(O=h.url(),E=k,o(V,function(t){t(h.url(),k)}))}function f(t){try{return decodeURIComponent(t)}catch(e){return t}}var h=this,p=e[0],d=t.location,v=t.history,g=t.setTimeout,w=t.clearTimeout,b={};h.isMock=!1;var x=0,S=[];h.$$completeOutstandingRequest=a,h.$$incOutstandingRequestCount=function(){x++},h.notifyWhenNoOutstandingRequests=function(t){o(A,function(t){t()}),0===x?t():S.push(t)};var C,A=[];h.addPollFn=function(t){return m(C)&&s(100,g),A.push(t),t};var k,E,O=d.href,T=e.find("base"),M=null;c(),E=k,h.url=function(e,n,r){if(m(r)&&(r=null),d!==t.location&&(d=t.location),v!==t.history&&(v=t.history),e){var o=E===r;if(O===e&&(!i.history||o))return h;var a=O&&un(O)===un(e);return O=e,E=r,!i.history||a&&o?(a||(M=e),n?d.replace(e):a?(n=d,r=e.indexOf("#"),e=-1===r?"":e.substr(r+1),n.hash=e):d.href=e):(v[n?"replaceState":"pushState"](r,"",e),c(),E=k),h}return M||d.href.replace(/%27/g,"'")},h.state=function(){return k};var V=[],N=!1,j=null;h.onUrlChange=function(e){return N||(i.history&&wr(t).on("popstate",u),wr(t).on("hashchange",u),N=!0),V.push(e),e},h.$$checkUrlChange=l,h.baseHref=function(){var t=T.attr("href");return t?t.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var P={},R="",I=h.baseHref();h.cookies=function(t,e){var i,o,a,s;if(!t){if(p.cookie!==R)for(R=p.cookie,i=R.split("; "),P={},a=0;a<i.length;a++)o=i[a],s=o.indexOf("="),s>0&&(t=f(o.substring(0,s)),P[t]===n&&(P[t]=f(o.substring(s+1))));return P}e===n?p.cookie=encodeURIComponent(t)+"=;path="+I+";expires=Thu, 01 Jan 1970 00:00:00 GMT":y(e)&&(i=(p.cookie=encodeURIComponent(t)+"="+encodeURIComponent(e)+";path="+I).length+1,i>4096&&r.warn("Cookie '"+t+"' possibly not set or overflowed because it was too large ("+i+" > 4096 bytes)!"))},h.defer=function(t,e){var n;return x++,n=g(function(){delete b[n],a(t)},e||0),b[n]=!0,n},h.defer.cancel=function(t){return b[t]?(delete b[t],w(t),a($),!0):!1}}function Re(){this.$get=["$window","$log","$sniffer","$document",function(t,e,n,r){return new Pe(t,r,e,n)}]}function Ie(){this.$get=function(){function t(t,n){function i(t){t!=h&&($?$==t&&($=t.n):$=t,o(t.n,t.p),o(t,h),h=t,h.n=null)}function o(t,e){t!=e&&(t&&(t.p=e),e&&(e.n=t))}if(t in e)throw r("$cacheFactory")("iid",t);var a=0,s=l({},n,{id:t}),u={},c=n&&n.capacity||Number.MAX_VALUE,f={},h=null,$=null;return e[t]={put:function(t,e){if(c<Number.MAX_VALUE){var n=f[t]||(f[t]={key:t});i(n)}return m(e)?void 0:(t in u||a++,u[t]=e,a>c&&this.remove($.key),e)},get:function(t){if(c<Number.MAX_VALUE){var e=f[t];if(!e)return;i(e)}return u[t]},remove:function(t){if(c<Number.MAX_VALUE){var e=f[t];if(!e)return;e==h&&(h=e.p),e==$&&($=e.n),o(e.n,e.p),delete f[t]}delete u[t],a--},removeAll:function(){u={},a=0,f={},h=$=null},destroy:function(){f=s=u=null,delete e[t]},info:function(){return l({},s,{size:a})}}}var e={};return t.info=function(){var t={};return o(e,function(e,n){t[n]=e.info()}),t},t.get=function(t){return e[t]},t}}function qe(){this.$get=["$cacheFactory",function(t){return t("templates")}]}function Ue(t,r){function i(t,e){var n=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,r={};return o(t,function(t,i){var o=t.match(n);if(!o)throw $i("iscp",e,i,t);r[i]={mode:o[1][0],collection:"*"===o[2],optional:"?"===o[3],attrName:o[4]||i}}),r}var a={},u=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,c=/(([\w\-]+)(?:\:([^;]+))?;?)/,f=O("ngSrc,ngSrcset,src,srcset"),m=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,w=/^(on[a-z]+|formaction)$/;this.directive=function S(e,n){return te(e,"directive"),y(e)?(X(n,"directiveFactory"),a.hasOwnProperty(e)||(a[e]=[],t.factory(e+"Directive",["$injector","$exceptionHandler",function(t,n){var r=[];return o(a[e],function(o,a){try{var s=t.invoke(o);x(s)?s={compile:d(s)}:!s.compile&&s.link&&(s.compile=d(s.link)),s.priority=s.priority||0,s.index=a,s.name=s.name||e,s.require=s.require||s.controller&&s.name,s.restrict=s.restrict||"EA",g(s.scope)&&(s.$$isolateBindings=i(s.scope,s.name)),r.push(s)}catch(u){n(u)}}),r}])),a[e].push(n)):o(e,s(S)),this},this.aHrefSanitizationWhitelist=function(t){return v(t)?(r.aHrefSanitizationWhitelist(t),this):r.aHrefSanitizationWhitelist()},this.imgSrcSanitizationWhitelist=function(t){return v(t)?(r.imgSrcSanitizationWhitelist(t),this):r.imgSrcSanitizationWhitelist()};var b=!0;this.debugInfoEnabled=function(t){return v(t)?(b=t,this):b},this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(t,r,i,s,d,v,S,C,k,E,O){function V(t,e){try{t.addClass(e)}catch(n){}}function N(t,e,n,r,i){t instanceof wr||(t=wr(t)),o(t,function(e,n){e.nodeType==Lr&&e.nodeValue.match(/\S+/)&&(t[n]=wr(e).wrap("<span></span>").parent()[0])});var a=j(t,e,t,n,r,i);N.$$addScopeClass(t);var s=null;return function(e,n,r){X(e,"scope"),r=r||{};var i=r.parentBoundTranscludeFn,o=r.transcludeControllers;if(r=r.futureParentElement,i&&i.$$boundTransclude&&(i=i.$$boundTransclude),s||(s=(r=r&&r[0])&&"foreignobject"!==T(r)&&r.toString().match(/SVG/)?"svg":"html"),r="html"!==s?wr(Y(s,wr("<div>").append(t).html())):n?ni.clone.call(t):t,o)for(var u in o)r.data("$"+u+"Controller",o[u].instance);return N.$$addScopeInfo(r,e),n&&n(r,e),a&&a(e,r,r,i),r}}function j(t,e,r,i,o,a){function s(t,r,i,o){var a,s,u,c,l,f,p;if(h)for(p=Array(r.length),c=0;c<$.length;c+=3)a=$[c],p[a]=r[a];else p=r;for(c=0,l=$.length;l>c;)s=p[$[c++]],r=$[c++],a=$[c++],r?(r.scope?(u=t.$new(),N.$$addScopeInfo(wr(s),u)):u=t,f=r.transcludeOnThisElement?P(t,r.transclude,o,r.elementTranscludeOnThisElement):!r.templateOnThisElement&&o?o:!o&&e?P(t,e):null,r(a,u,s,i,f)):a&&a(t,s.childNodes,n,o)}for(var u,c,l,f,h,$=[],p=0;p<t.length;p++)u=new ie,c=R(t[p],[],u,0===p?i:n,o),(a=c.length?F(c,t[p],u,e,r,null,[],[],a):null)&&a.scope&&N.$$addScopeClass(u.$$element),u=a&&a.terminal||!(l=t[p].childNodes)||!l.length?null:j(l,a?(a.transcludeOnThisElement||!a.templateOnThisElement)&&a.transclude:e),(a||u)&&($.push(p,a,u),f=!0,h=h||a),a=null;return f?s:null}function P(t,e,n){return function(r,i,o,a,s){return r||(r=t.$new(!1,s),r.$$transcluded=!0),e(r,i,{parentBoundTranscludeFn:n,transcludeControllers:o,futureParentElement:a})}}function R(t,e,n,r,i){var o,a=n.$attr;switch(t.nodeType){case _r:_(e,Fe(T(t)),"E",r,i);for(var s,l,f,h=t.attributes,$=0,p=h&&h.length;p>$;$++){var d=!1,m=!1;s=h[$],o=s.name,l=Rr(s.value),s=Fe(o),(f=ue.test(s))&&(o=o.replace(pi,"").substr(8).replace(/_(.)/g,function(t,e){return e.toUpperCase()}));var v=s.replace(/(Start|End)$/,"");L(v)&&s===v+"Start"&&(d=o,m=o.substr(0,o.length-5)+"end",o=o.substr(0,o.length-6)),s=Fe(o.toLowerCase()),a[s]=o,(f||!n.hasOwnProperty(s))&&(n[s]=l,Ae(t,s)&&(n[s]=!0)),Q(t,e,l,s,f),_(e,s,"A",r,i,d,m)}if(t=t.className,g(t)&&(t=t.animVal),y(t)&&""!==t)for(;o=c.exec(t);)s=Fe(o[2]),_(e,s,"C",r,i)&&(n[s]=Rr(o[3])),t=t.substr(o.index+o[0].length);break;case Lr:J(e,t.nodeValue);break;case 8:try{(o=u.exec(t.nodeValue))&&(s=Fe(o[1]),_(e,s,"M",r,i)&&(n[s]=Rr(o[2])))}catch(w){}}return e.sort(G),e}function I(t,e,n){var r=[],i=0;if(e&&t.hasAttribute&&t.hasAttribute(e)){do{if(!t)throw $i("uterdir",e,n);t.nodeType==_r&&(t.hasAttribute(e)&&i++,t.hasAttribute(n)&&i--),r.push(t),t=t.nextSibling}while(i>0)}else r.push(t);return wr(r)}function q(t,e,n){return function(r,i,o,a,s){return i=I(i[0],e,n),t(r,i,o,a,s)}}function F(t,a,s,u,c,l,f,h,$){function p(t,e,n,r){t&&(n&&(t=q(t,n,r)),t.require=k.require,t.directiveName=E,(j===k||k.$$isolateScope)&&(t=ee(t,{isolateScope:!0})),f.push(t)),e&&(n&&(e=q(e,n,r)),e.require=k.require,e.directiveName=E,(j===k||k.$$isolateScope)&&(e=ee(e,{isolateScope:!0})),h.push(e))}function w(t,e,n,r){var i,a,s="data",u=!1,c=n;if(y(e)){if(a=e.match(m),e=e.substring(a[0].length),a[3]&&(a[1]?a[3]=null:a[1]=a[3]),"^"===a[1]?s="inheritedData":"^^"===a[1]&&(s="inheritedData",c=n.parent()),"?"===a[2]&&(u=!0),i=null,r&&"data"===s&&(i=r[e])&&(i=i.instance),i=i||c[s]("$"+e+"Controller"),!i&&!u)throw $i("ctreq",e,t);return i||null}return Pr(e)&&(i=[],o(e,function(e){i.push(w(t,e,n,r))})),i}function b(t,e,i,u,c){function l(t,e,r){var i;return A(t)||(r=e,e=t,t=n),G&&(i=y),r||(r=G?x.parent():x),c(t,e,i,r,E)}var $,p,m,g,y,b,x,S;if(a===i?(S=s,x=s.$$element):(x=wr(i),S=new ie(x,s)),j&&(g=e.$new(!0)),c&&(b=l,b.$$boundTransclude=c),V&&(C={},y={},o(V,function(t){var n={$scope:t===j||t.$$isolateScope?g:e,$element:x,$attrs:S,$transclude:b};m=t.controller,"@"==m&&(m=S[t.name]),n=v(m,n,!0,t.controllerAs),y[t.name]=n,G||x.data("$"+t.name+"Controller",n.instance),C[t.name]=n})),j){N.$$addScopeInfo(x,g,!0,!(P&&(P===j||P===j.$$originalDirective))),N.$$addScopeClass(x,!0),u=C&&C[j.name];var k=g;u&&u.identifier&&!0===j.bindToController&&(k=u.instance),o(g.$$isolateBindings=j.$$isolateBindings,function(t,n){var i,o,a,s,u=t.attrName,c=t.optional;switch(t.mode){case"@":S.$observe(u,function(t){k[n]=t}),S.$$observers[u].$$scope=e,S[u]&&(k[n]=r(S[u])(e));break;case"=":if(c&&!S[u])break;o=d(S[u]),s=o.literal?D:function(t,e){return t===e||t!==t&&e!==e},a=o.assign||function(){throw i=k[n]=o(e),$i("nonassign",S[u],j.name)},i=k[n]=o(e),c=function(t){return s(t,k[n])||(s(t,i)?a(e,t=k[n]):k[n]=t),i=t},c.$stateful=!0,c=t.collection?e.$watchCollection(S[u],c):e.$watch(d(S[u],c),null,o.literal),g.$on("$destroy",c);break;case"&":o=d(S[u]),k[n]=function(t){return o(e,t)}}})}for(C&&(o(C,function(t){t()}),C=null),u=0,$=f.length;$>u;u++)p=f[u],ne(p,p.isolateScope?g:e,x,S,p.require&&w(p.directiveName,p.require,x,y),b);var E=e;for(j&&(j.template||null===j.templateUrl)&&(E=g),t&&t(E,i.childNodes,n,c),u=h.length-1;u>=0;u--)p=h[u],ne(p,p.isolateScope?g:e,x,S,p.require&&w(p.directiveName,p.require,x,y),b)}$=$||{};for(var S,C,k,E,O,T,M=-Number.MAX_VALUE,V=$.controllerDirectives,j=$.newIsolateScopeDirective,P=$.templateDirective,F=$.nonTlbTranscludeDirective,_=!1,L=!1,G=$.hasElementTranscludeDirective,J=s.$$element=wr(a),Z=u,K=0,X=t.length;X>K;K++){k=t[K];var Q=k.$$start,re=k.$$end;if(Q&&(J=I(a,Q,re)),O=n,M>k.priority)break;if((O=k.scope)&&(k.templateUrl||(g(O)?(W("new/isolated scope",j||S,k,J),j=k):W("new/isolated scope",j,k,J)),S=S||k),E=k.name,!k.templateUrl&&k.controller&&(O=k.controller,V=V||{},W("'"+E+"' controller",V[E],k,J),V[E]=k),(O=k.transclude)&&(_=!0,k.$$tlb||(W("transclusion",F,k,J),F=k),"element"==O?(G=!0,M=k.priority,O=J,J=s.$$element=wr(e.createComment(" "+E+": "+s[E]+" ")),a=J[0],te(c,Er.call(O,0),a),Z=N(O,u,M,l&&l.name,{nonTlbTranscludeDirective:F})):(O=wr(le(a)).contents(),J.empty(),Z=N(O,u))),k.template)if(L=!0,W("template",P,k,J),P=k,O=x(k.template)?k.template(J,s):k.template,O=se(O),k.replace){if(l=k,O=Xr.test(O)?_e(Y(k.templateNamespace,Rr(O))):[],a=O[0],1!=O.length||a.nodeType!==_r)throw $i("tplrt",E,"");te(c,J,a),X={$attr:{}},O=R(a,[],X);var oe=t.splice(K+1,t.length-(K+1));j&&H(O),t=t.concat(O).concat(oe),B(s,X),X=t.length}else J.html(O);if(k.templateUrl)L=!0,W("template",P,k,J),P=k,k.replace&&(l=k),b=z(t.splice(K,t.length-K),J,s,c,_&&Z,f,h,{controllerDirectives:V,newIsolateScopeDirective:j,templateDirective:P,nonTlbTranscludeDirective:F}),X=t.length;else if(k.compile)try{T=k.compile(J,s,Z),x(T)?p(null,T,Q,re):T&&p(T.pre,T.post,Q,re)}catch(ae){i(ae,U(J))}k.terminal&&(b.terminal=!0,M=Math.max(M,k.priority))}return b.scope=S&&!0===S.scope,b.transcludeOnThisElement=_,b.elementTranscludeOnThisElement=G,b.templateOnThisElement=L,b.transclude=Z,$.hasElementTranscludeDirective=G,b}function H(t){for(var e=0,n=t.length;n>e;e++)t[e]=h(t[e],{$$isolateScope:!0})}function _(e,r,o,s,u,c,l){if(r===u)return null;if(u=null,a.hasOwnProperty(r)){var f;r=t.get(r+"Directive");for(var $=0,p=r.length;p>$;$++)try{f=r[$],(s===n||s>f.priority)&&-1!=f.restrict.indexOf(o)&&(c&&(f=h(f,{$$start:c,$$end:l})),e.push(f),u=f)}catch(d){i(d)}}return u}function L(e){if(a.hasOwnProperty(e))for(var n=t.get(e+"Directive"),r=0,i=n.length;i>r;r++)if(e=n[r],e.multiElement)return!0;return!1}function B(t,e){var n=e.$attr,r=t.$attr,i=t.$$element;o(t,function(r,i){"$"!=i.charAt(0)&&(e[i]&&e[i]!==r&&(r+=("style"===i?";":" ")+e[i]),t.$set(i,r,!0,n[i]))}),o(e,function(e,o){"class"==o?(V(i,e),t["class"]=(t["class"]?t["class"]+" ":"")+e):"style"==o?(i.attr("style",i.attr("style")+";"+e),t.style=(t.style?t.style+";":"")+e):"$"==o.charAt(0)||t.hasOwnProperty(o)||(t[o]=e,r[o]=n[o])})}function z(t,e,n,r,i,a,u,c){var l,f,$=[],p=e[0],d=t.shift(),m=h(d,{templateUrl:null,transclude:null,replace:null,$$originalDirective:d}),v=x(d.templateUrl)?d.templateUrl(e,n):d.templateUrl,y=d.templateNamespace;return e.empty(),s(k.getTrustedResourceUrl(v)).then(function(s){var h,w;if(s=se(s),d.replace){if(s=Xr.test(s)?_e(Y(y,Rr(s))):[],h=s[0],1!=s.length||h.nodeType!==_r)throw $i("tplrt",d.name,v);s={$attr:{}},te(r,e,h);var b=R(h,[],s);g(d.scope)&&H(b),t=b.concat(t),B(n,s)}else h=p,e.html(s);for(t.unshift(m),l=F(t,h,n,i,e,d,a,u,c),o(r,function(t,n){t==h&&(r[n]=e[0])}),f=j(e[0].childNodes,i);$.length;){s=$.shift(),w=$.shift();var x=$.shift(),S=$.shift(),b=e[0];if(!s.$$destroyed){if(w!==p){var C=w.className;c.hasElementTranscludeDirective&&d.replace||(b=le(h)),te(x,wr(w),b),V(wr(b),C)}w=l.transcludeOnThisElement?P(s,l.transclude,S):S,l(f,s,b,r,w)}}$=null}),function(t,e,n,r,i){t=i,e.$$destroyed||($?$.push(e,n,r,t):(l.transcludeOnThisElement&&(t=P(e,l.transclude,i)),l(f,e,n,r,t)))}}function G(t,e){var n=e.priority-t.priority;return 0!==n?n:t.name!==e.name?t.name<e.name?-1:1:t.index-e.index}function W(t,e,n,r){if(e)throw $i("multidir",e.name,n.name,t,U(r))}function J(t,e){var n=r(e,!0);n&&t.push({priority:0,compile:function(t){t=t.parent();var e=!!t.length;return e&&N.$$addBindingClass(t),function(t,r){var i=r.parent();e||N.$$addBindingClass(i),N.$$addBindingInfo(i,n.expressions),t.$watch(n,function(t){r[0].nodeValue=t})}}})}function Y(t,n){switch(t=Cr(t||"html")){case"svg":case"math":var r=e.createElement("div");return r.innerHTML="<"+t+">"+n+"</"+t+">",r.childNodes[0].childNodes;default:return n}}function K(t,e){if("srcdoc"==e)return k.HTML;var n=T(t);return"xlinkHref"==e||"form"==n&&"action"==e||"img"!=n&&("src"==e||"ngSrc"==e)?k.RESOURCE_URL:void 0}function Q(t,e,n,i,o){var a=K(t,i);o=f[i]||o;var s=r(n,!0,a,o);if(s){if("multiple"===i&&"select"===T(t))throw $i("selmulti",U(t));e.push({priority:100,compile:function(){return{pre:function(t,e,u){if(e=u.$$observers||(u.$$observers={}),w.test(i))throw $i("nodomevents");var c=u[i];c!==n&&(s=c&&r(c,!0,a,o),n=c),s&&(u[i]=s(t),(e[i]||(e[i]=[])).$$inter=!0,(u.$$observers&&u.$$observers[i].$$scope||t).$watch(s,function(t,e){"class"===i&&t!=e?u.$updateClass(t,e):u.$set(i,t)
}))}}}})}}function te(t,n,r){var i,o,a=n[0],s=n.length,u=a.parentNode;if(t)for(i=0,o=t.length;o>i;i++)if(t[i]==a){t[i++]=r,o=i+s-1;for(var c=t.length;c>i;i++,o++)c>o?t[i]=t[o]:delete t[i];t.length-=s-1,t.context===a&&(t.context=r);break}for(u&&u.replaceChild(r,a),t=e.createDocumentFragment(),t.appendChild(a),wr(r).data(wr(a).data()),br?(jr=!0,br.cleanData([a])):delete wr.cache[a[wr.expando]],a=1,s=n.length;s>a;a++)u=n[a],wr(u).remove(),t.appendChild(u),delete n[a];n[0]=r,n.length=1}function ee(t,e){return l(function(){return t.apply(null,arguments)},t,e)}function ne(t,e,n,r,o,a){try{t(e,n,r,o,a)}catch(s){i(s,U(n))}}var ie=function(t,e){if(e){var n,r,i,o=Object.keys(e);for(n=0,r=o.length;r>n;n++)i=o[n],this[i]=e[i]}else this.$attr={};this.$$element=t};ie.prototype={$normalize:Fe,$addClass:function(t){t&&0<t.length&&E.addClass(this.$$element,t)},$removeClass:function(t){t&&0<t.length&&E.removeClass(this.$$element,t)},$updateClass:function(t,e){var n=He(t,e);n&&n.length&&E.addClass(this.$$element,n),(n=He(e,t))&&n.length&&E.removeClass(this.$$element,n)},$set:function(t,e,r,a){var s=this.$$element[0],u=Ae(s,t),c=ke(s,t),s=t;if(u?(this.$$element.prop(t,e),a=u):c&&(this[c]=e,s=c),this[t]=e,a?this.$attr[t]=a:(a=this.$attr[t])||(this.$attr[t]=a=Z(t,"-")),u=T(this.$$element),"a"===u&&"href"===t||"img"===u&&"src"===t)this[t]=e=O(e,"src"===t);else if("img"===u&&"srcset"===t){for(var u="",c=Rr(e),l=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,l=/\s/.test(c)?l:/(,)/,c=c.split(l),l=Math.floor(c.length/2),f=0;l>f;f++)var h=2*f,u=u+O(Rr(c[h]),!0),u=u+(" "+Rr(c[h+1]));c=Rr(c[2*f]).split(/\s/),u+=O(Rr(c[0]),!0),2===c.length&&(u+=" "+Rr(c[1])),this[t]=e=u}!1!==r&&(null===e||e===n?this.$$element.removeAttr(a):this.$$element.attr(a,e)),(t=this.$$observers)&&o(t[s],function(t){try{t(e)}catch(n){i(n)}})},$observe:function(t,e){var n=this,r=n.$$observers||(n.$$observers=re()),i=r[t]||(r[t]=[]);return i.push(e),S.$evalAsync(function(){!i.$$inter&&n.hasOwnProperty(t)&&e(n[t])}),function(){M(i,e)}}};var oe=r.startSymbol(),ae=r.endSymbol(),se="{{"==oe||"}}"==ae?p:function(t){return t.replace(/\{\{/g,oe).replace(/}}/g,ae)},ue=/^ngAttr[A-Z]/;return N.$$addBindingInfo=b?function(t,e){var n=t.data("$binding")||[];Pr(e)?n=n.concat(e):n.push(e),t.data("$binding",n)}:$,N.$$addBindingClass=b?function(t){V(t,"ng-binding")}:$,N.$$addScopeInfo=b?function(t,e,n,r){t.data(n?r?"$isolateScopeNoTemplate":"$isolateScope":"$scope",e)}:$,N.$$addScopeClass=b?function(t,e){V(t,e?"ng-isolate-scope":"ng-scope")}:$,N}]}function Fe(t){return ae(t.replace(pi,""))}function He(t,e){var n="",r=t.split(/\s+/),i=e.split(/\s+/),o=0;t:for(;o<r.length;o++){for(var a=r[o],s=0;s<i.length;s++)if(a==i[s])continue t;n+=(0<n.length?" ":"")+a}return n}function _e(t){t=wr(t);var e=t.length;if(1>=e)return t;for(;e--;)8===t[e].nodeType&&Or.call(t,e,1);return t}function Le(){var t={},e=!1,i=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(e,n){te(e,"controller"),g(e)?l(t,e):t[e]=n},this.allowGlobals=function(){e=!0},this.$get=["$injector","$window",function(o,a){function s(t,e,n,i){if(!t||!g(t.$scope))throw r("$controller")("noscp",i,e);t.$scope[e]=n}return function(r,u,c,f){var h,$,p;if(c=!0===c,f&&y(f)&&(p=f),y(r)){if(f=r.match(i),!f)throw di("ctrlfmt",r);$=f[1],p=p||f[3],r=t.hasOwnProperty($)?t[$]:ee(u.$scope,$,!0)||(e?ee(a,$,!0):n),Q(r,$,!0)}return c?(c=(Pr(r)?r[r.length-1]:r).prototype,h=Object.create(c||null),p&&s(u,p,h,$||r.name),l(function(){return o.invoke(r,h,u,$),h},{instance:h,identifier:p})):(h=o.instantiate(r,u,$),p&&s(u,p,h,$||r.name),h)}}]}function Be(){this.$get=["$window",function(t){return wr(t.document)}]}function ze(){this.$get=["$log",function(t){return function(){t.error.apply(t,arguments)}}]}function Ge(t,e){if(y(t)){var n=t.replace(wi,"").trim();if(n){var r=e("Content-Type");(r=r&&0===r.indexOf(mi))||(r=(r=n.match(gi))&&yi[r[0]].test(n)),r&&(t=q(n))}}return t}function We(t){var e,n,r,i=re();return t?(o(t.split("\n"),function(t){r=t.indexOf(":"),e=Cr(Rr(t.substr(0,r))),n=Rr(t.substr(r+1)),e&&(i[e]=i[e]?i[e]+", "+n:n)}),i):i}function Je(t){var e=g(t)?t:n;return function(n){return e||(e=We(t)),n?(n=e[Cr(n)],void 0===n&&(n=null),n):e}}function Ye(t,e,n,r){return x(r)?r(t,e,n):(o(r,function(r){t=r(t,e,n)}),t)}function Ze(){var t=this.defaults={transformResponse:[Ge],transformRequest:[function(t){return g(t)&&"[object File]"!==Mr.call(t)&&"[object Blob]"!==Mr.call(t)&&"[object FormData]"!==Mr.call(t)?I(t):t}],headers:{common:{Accept:"application/json, text/plain, */*"},post:N(vi),put:N(vi),patch:N(vi)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},e=!1;this.useApplyAsync=function(t){return v(t)?(e=!!t,this):e};var i=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(s,u,c,f,h,$){function p(e){function i(t){var e=l({},t);return e.data=t.data?Ye(t.data,t.headers,t.status,s.transformResponse):t.data,t=t.status,t>=200&&300>t?e:h.reject(e)}function a(t){var e,n={};return o(t,function(t,r){x(t)?(e=t(),null!=e&&(n[r]=e)):n[r]=t}),n}if(!Nr.isObject(e))throw r("$http")("badreq",e);var s=l({method:"get",transformRequest:t.transformRequest,transformResponse:t.transformResponse},e);s.headers=function(e){var n,r,i=t.headers,o=l({},e.headers),i=l({},i.common,i[Cr(e.method)]);t:for(n in i){e=Cr(n);for(r in o)if(Cr(r)===e)continue t;o[n]=i[n]}return a(o)}(e),s.method=kr(s.method);var u=[function(e){var r=e.headers,a=Ye(e.data,Je(r),n,e.transformRequest);return m(a)&&o(r,function(t,e){"content-type"===Cr(e)&&delete r[e]}),m(e.withCredentials)&&!m(t.withCredentials)&&(e.withCredentials=t.withCredentials),d(e,a).then(i,i)},n],c=h.when(s);for(o(C,function(t){(t.request||t.requestError)&&u.unshift(t.request,t.requestError),(t.response||t.responseError)&&u.push(t.response,t.responseError)});u.length;){e=u.shift();var f=u.shift(),c=c.then(e,f)}return c.success=function(t){return c.then(function(e){t(e.data,e.status,e.headers,s)}),c},c.error=function(t){return c.then(null,function(e){t(e.data,e.status,e.headers,s)}),c},c}function d(r,i){function o(t,n,r,i){function o(){a(n,t,r,i)}$&&(t>=200&&300>t?$.put(A,[t,n,We(r),i]):$.remove(A)),e?f.$applyAsync(o):(o(),f.$$phase||f.$apply())}function a(t,e,n,i){e=Math.max(e,0),(e>=200&&300>e?y.resolve:y.reject)({data:t,status:e,headers:Je(n),config:r,statusText:i})}function c(t){a(t.data,t.status,N(t.headers()),t.statusText)}function l(){var t=p.pendingRequests.indexOf(r);-1!==t&&p.pendingRequests.splice(t,1)}var $,d,y=h.defer(),b=y.promise,C=r.headers,A=w(r.url,r.params);return p.pendingRequests.push(r),b.then(l,l),!r.cache&&!t.cache||!1===r.cache||"GET"!==r.method&&"JSONP"!==r.method||($=g(r.cache)?r.cache:g(t.cache)?t.cache:S),$&&(d=$.get(A),v(d)?d&&x(d.then)?d.then(c,c):Pr(d)?a(d[1],d[0],N(d[2]),d[3]):a(d,200,{},"OK"):$.put(A,b)),m(d)&&((d=Ln(r.url)?u.cookies()[r.xsrfCookieName||t.xsrfCookieName]:n)&&(C[r.xsrfHeaderName||t.xsrfHeaderName]=d),s(r.method,A,i,o,C,r.timeout,r.withCredentials,r.responseType)),b}function w(t,e){if(!e)return t;var n=[];return a(e,function(t,e){null===t||m(t)||(Pr(t)||(t=[t]),o(t,function(t){g(t)&&(t=b(t)?t.toISOString():I(t)),n.push(B(e)+"="+B(t))}))}),0<n.length&&(t+=(-1==t.indexOf("?")?"?":"&")+n.join("&")),t}var S=c("$http"),C=[];return o(i,function(t){C.unshift(y(t)?$.get(t):$.invoke(t))}),p.pendingRequests=[],function(){o(arguments,function(t){p[t]=function(e,n){return p(l(n||{},{method:t,url:e}))}})}("get","delete","head","jsonp"),function(){o(arguments,function(t){p[t]=function(e,n,r){return p(l(r||{},{method:t,url:e,data:n}))}})}("post","put","patch"),p.defaults=t,p}]}function Ke(){return new t.XMLHttpRequest}function Xe(){this.$get=["$browser","$window","$document",function(t,e,n){return Qe(t,Ke,t.defer,e.angular.callbacks,n[0])}]}function Qe(t,e,r,i,a){function s(t,e,n){var r=a.createElement("script"),o=null;return r.type="text/javascript",r.src=t,r.async=!0,o=function(t){r.removeEventListener("load",o,!1),r.removeEventListener("error",o,!1),a.body.removeChild(r),r=null;var s=-1,u="unknown";t&&("load"!==t.type||i[e].called||(t={type:"error"}),u=t.type,s="error"===t.type?404:200),n&&n(s,u)},r.addEventListener("load",o,!1),r.addEventListener("error",o,!1),a.body.appendChild(r),o}return function(a,u,c,l,f,h,p,d){function m(){w&&w(),b&&b.abort()}function g(e,i,o,a,s){C!==n&&r.cancel(C),w=b=null,e(i,o,a,s),t.$$completeOutstandingRequest($)}if(t.$$incOutstandingRequestCount(),u=u||t.url(),"jsonp"==Cr(a)){var y="_"+(i.counter++).toString(36);i[y]=function(t){i[y].data=t,i[y].called=!0};var w=s(u.replace("JSON_CALLBACK","angular.callbacks."+y),y,function(t,e){g(l,t,i[y].data,"",e),i[y]=$})}else{var b=e();if(b.open(a,u,!0),o(f,function(t,e){v(t)&&b.setRequestHeader(e,t)}),b.onload=function(){var t=b.statusText||"",e="response"in b?b.response:b.responseText,n=1223===b.status?204:b.status;0===n&&(n=e?200:"file"==_n(u).protocol?404:0),g(l,n,e,b.getAllResponseHeaders(),t)},a=function(){g(l,-1,null,null,"")},b.onerror=a,b.onabort=a,p&&(b.withCredentials=!0),d)try{b.responseType=d}catch(S){if("json"!==d)throw S}b.send(c||null)}if(h>0)var C=r(m,h);else h&&x(h.then)&&h.then(m)}}function tn(){var t="{{",e="}}";this.startSymbol=function(e){return e?(t=e,this):t},this.endSymbol=function(t){return t?(e=t,this):e},this.$get=["$parse","$exceptionHandler","$sce",function(n,r,i){function o(t){return"\\\\\\"+t}function a(o,a,h,$){function p(n){return n.replace(c,t).replace(f,e)}function d(t){try{var e=t;t=h?i.getTrusted(h,e):i.valueOf(e);var n;if($&&!v(t))n=t;else if(null==t)n="";else{switch(typeof t){case"string":break;case"number":t=""+t;break;default:t=I(t)}n=t}return n}catch(a){n=bi("interr",o,a.toString()),r(n)}}$=!!$;for(var g,y,w=0,b=[],S=[],C=o.length,A=[],k=[];C>w;){if(-1==(g=o.indexOf(t,w))||-1==(y=o.indexOf(e,g+s))){w!==C&&A.push(p(o.substring(w)));break}w!==g&&A.push(p(o.substring(w,g))),w=o.substring(g+s,y),b.push(w),S.push(n(w,d)),w=y+u,k.push(A.length),A.push("")}if(h&&1<A.length)throw bi("noconcat",o);if(!a||b.length){var E=function(t){for(var e=0,n=b.length;n>e;e++){if($&&m(t[e]))return;A[k[e]]=t[e]}return A.join("")};return l(function(t){var e=0,n=b.length,i=Array(n);try{for(;n>e;e++)i[e]=S[e](t);return E(i)}catch(a){t=bi("interr",o,a.toString()),r(t)}},{exp:o,expressions:b,$$watchDelegate:function(t,e,n){var r;return t.$watchGroup(S,function(n,i){var o=E(n);x(e)&&e.call(this,o,n!==i?r:o,t),r=o},n)}})}}var s=t.length,u=e.length,c=new RegExp(t.replace(/./g,o),"g"),f=new RegExp(e.replace(/./g,o),"g");return a.startSymbol=function(){return t},a.endSymbol=function(){return e},a}]}function en(){this.$get=["$rootScope","$window","$q","$$q",function(t,e,n,r){function i(i,a,s,u){var c=e.setInterval,l=e.clearInterval,f=0,h=v(u)&&!u,$=(h?r:n).defer(),p=$.promise;return s=v(s)?s:0,p.then(null,null,i),p.$$intervalId=c(function(){$.notify(f++),s>0&&f>=s&&($.resolve(f),l(p.$$intervalId),delete o[p.$$intervalId]),h||t.$apply()},a),o[p.$$intervalId]=$,p}var o={};return i.cancel=function(t){return t&&t.$$intervalId in o?(o[t.$$intervalId].reject("canceled"),e.clearInterval(t.$$intervalId),delete o[t.$$intervalId],!0):!1},i}]}function nn(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"¤",posSuf:"",negPre:"(¤",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(t){return 1===t?"one":"other"}}}}function rn(t){t=t.split("/");for(var e=t.length;e--;)t[e]=L(t[e]);return t.join("/")}function on(t,e){var n=_n(t);e.$$protocol=n.protocol,e.$$host=n.hostname,e.$$port=f(n.port)||Si[n.protocol]||null}function an(t,e){var n="/"!==t.charAt(0);n&&(t="/"+t);var r=_n(t);e.$$path=decodeURIComponent(n&&"/"===r.pathname.charAt(0)?r.pathname.substring(1):r.pathname),e.$$search=H(r.search),e.$$hash=decodeURIComponent(r.hash),e.$$path&&"/"!=e.$$path.charAt(0)&&(e.$$path="/"+e.$$path)}function sn(t,e){return 0===e.indexOf(t)?e.substr(t.length):void 0}function un(t){var e=t.indexOf("#");return-1==e?t:t.substr(0,e)}function cn(t){return t.replace(/(#.+)|#$/,"$1")}function ln(t){return t.substr(0,un(t).lastIndexOf("/")+1)}function fn(t,e){this.$$html5=!0,e=e||"";var r=ln(t);on(t,this),this.$$parse=function(t){var e=sn(r,t);if(!y(e))throw Ci("ipthprfx",t,r);an(e,this),this.$$path||(this.$$path="/"),this.$$compose()},this.$$compose=function(){var t=_(this.$$search),e=this.$$hash?"#"+L(this.$$hash):"";this.$$url=rn(this.$$path)+(t?"?"+t:"")+e,this.$$absUrl=r+this.$$url.substr(1)},this.$$parseLinkUrl=function(i,o){if(o&&"#"===o[0])return this.hash(o.slice(1)),!0;var a,s;return(a=sn(t,i))!==n?(s=a,s=(a=sn(e,a))!==n?r+(sn("/",a)||a):t+s):(a=sn(r,i))!==n?s=r+a:r==i+"/"&&(s=r),s&&this.$$parse(s),!!s}}function hn(t,e){var n=ln(t);on(t,this),this.$$parse=function(r){r=sn(t,r)||sn(n,r);var i;"#"===r.charAt(0)?(i=sn(e,r),m(i)&&(i=r)):i=this.$$html5?r:"",an(i,this),r=this.$$path;var o=/^\/[A-Z]:(\/.*)/;0===i.indexOf(t)&&(i=i.replace(t,"")),o.exec(i)||(r=(i=o.exec(r))?i[1]:r),this.$$path=r,this.$$compose()},this.$$compose=function(){var n=_(this.$$search),r=this.$$hash?"#"+L(this.$$hash):"";this.$$url=rn(this.$$path)+(n?"?"+n:"")+r,this.$$absUrl=t+(this.$$url?e+this.$$url:"")},this.$$parseLinkUrl=function(e){return un(t)==un(e)?(this.$$parse(e),!0):!1}}function $n(t,e){this.$$html5=!0,hn.apply(this,arguments);var n=ln(t);this.$$parseLinkUrl=function(r,i){if(i&&"#"===i[0])return this.hash(i.slice(1)),!0;var o,a;return t==un(r)?o=r:(a=sn(n,r))?o=t+e+a:n===r+"/"&&(o=n),o&&this.$$parse(o),!!o},this.$$compose=function(){var n=_(this.$$search),r=this.$$hash?"#"+L(this.$$hash):"";this.$$url=rn(this.$$path)+(n?"?"+n:"")+r,this.$$absUrl=t+e+this.$$url}}function pn(t){return function(){return this[t]}}function dn(t,e){return function(n){return m(n)?this[t]:(this[t]=e(n),this.$$compose(),this)}}function mn(){var t="",e={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(e){return v(e)?(t=e,this):t},this.html5Mode=function(t){return k(t)?(e.enabled=t,this):g(t)?(k(t.enabled)&&(e.enabled=t.enabled),k(t.requireBase)&&(e.requireBase=t.requireBase),k(t.rewriteLinks)&&(e.rewriteLinks=t.rewriteLinks),this):e},this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(n,r,i,o,a){function s(t,e,n){var i=c.url(),o=c.$$state;try{r.url(t,e,n),c.$$state=r.state()}catch(a){throw c.url(i),c.$$state=o,a}}function u(t,e){n.$broadcast("$locationChangeSuccess",c.absUrl(),t,c.$$state,e)}var c,l;l=r.baseHref();var f,h=r.url();if(e.enabled){if(!l&&e.requireBase)throw Ci("nobase");f=h.substring(0,h.indexOf("/",h.indexOf("//")+2))+(l||"/"),l=i.history?fn:$n}else f=un(h),l=hn;c=new l(f,"#"+t),c.$$parseLinkUrl(h,h),c.$$state=r.state();var $=/^\s*(javascript|mailto):/i;o.on("click",function(t){if(e.rewriteLinks&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey&&2!=t.which&&2!=t.button){for(var i=wr(t.target);"a"!==T(i[0]);)if(i[0]===o[0]||!(i=i.parent())[0])return;var s=i.prop("href"),u=i.attr("href")||i.attr("xlink:href");g(s)&&"[object SVGAnimatedString]"===s.toString()&&(s=_n(s.animVal).href),$.test(s)||!s||i.attr("target")||t.isDefaultPrevented()||!c.$$parseLinkUrl(s,u)||(t.preventDefault(),c.absUrl()!=r.url()&&(n.$apply(),a.angular["ff-684208-preventDefault"]=!0))}}),cn(c.absUrl())!=cn(h)&&r.url(c.absUrl(),!0);var p=!0;return r.onUrlChange(function(t,e){n.$evalAsync(function(){var r,i=c.absUrl(),o=c.$$state;c.$$parse(t),c.$$state=e,r=n.$broadcast("$locationChangeStart",t,i,e,o).defaultPrevented,c.absUrl()===t&&(r?(c.$$parse(i),c.$$state=o,s(i,!1,o)):(p=!1,u(i,o)))}),n.$$phase||n.$digest()}),n.$watch(function(){var t=cn(r.url()),e=cn(c.absUrl()),o=r.state(),a=c.$$replace,l=t!==e||c.$$html5&&i.history&&o!==c.$$state;(p||l)&&(p=!1,n.$evalAsync(function(){var e=c.absUrl(),r=n.$broadcast("$locationChangeStart",e,t,c.$$state,o).defaultPrevented;c.absUrl()===e&&(r?(c.$$parse(t),c.$$state=o):(l&&s(e,a,o===c.$$state?null:c.$$state),u(t,o)))})),c.$$replace=!1}),c}]}function vn(){var t=!0,e=this;this.debugEnabled=function(e){return v(e)?(t=e,this):t},this.$get=["$window",function(n){function r(t){return t instanceof Error&&(t.stack?t=t.message&&-1===t.stack.indexOf(t.message)?"Error: "+t.message+"\n"+t.stack:t.stack:t.sourceURL&&(t=t.message+"\n"+t.sourceURL+":"+t.line)),t}function i(t){var e=n.console||{},i=e[t]||e.log||$;t=!1;try{t=!!i.apply}catch(a){}return t?function(){var t=[];return o(arguments,function(e){t.push(r(e))}),i.apply(e,t)}:function(t,e){i(t,null==e?"":e)}}return{log:i("log"),info:i("info"),warn:i("warn"),error:i("error"),debug:function(){var n=i("debug");return function(){t&&n.apply(e,arguments)}}()}}]}function gn(t,e){if("__defineGetter__"===t||"__defineSetter__"===t||"__lookupGetter__"===t||"__lookupSetter__"===t||"__proto__"===t)throw ki("isecfld",e);return t}function yn(t,e){if(t){if(t.constructor===t)throw ki("isecfn",e);if(t.window===t)throw ki("isecwindow",e);if(t.children&&(t.nodeName||t.prop&&t.attr&&t.find))throw ki("isecdom",e);if(t===Object)throw ki("isecobj",e)}return t}function wn(t){return t.constant}function bn(t,e,n,r,i){yn(t,i),yn(e,i),n=n.split(".");for(var o,a=0;1<n.length;a++){o=gn(n.shift(),i);var s=0===a&&e&&e[o]||t[o];s||(s={},t[o]=s),t=yn(s,i)}return o=gn(n.shift(),i),yn(t[o],i),t[o]=r}function xn(t){return"constructor"==t}function Sn(t,e,r,i,o,a,s){gn(t,a),gn(e,a),gn(r,a),gn(i,a),gn(o,a);var u=function(t){return yn(t,a)},c=s||xn(t)?u:p,l=s||xn(e)?u:p,f=s||xn(r)?u:p,h=s||xn(i)?u:p,$=s||xn(o)?u:p;return function(a,s){var u=s&&s.hasOwnProperty(t)?s:a;return null==u?u:(u=c(u[t]),e?null==u?n:(u=l(u[e]),r?null==u?n:(u=f(u[r]),i?null==u?n:(u=h(u[i]),o?null==u?n:u=$(u[o]):u):u):u):u)}}function Cn(t,e){return function(n,r){return t(n,r,yn,e)}}function An(t,e,r){var i=e.expensiveChecks,a=i?Ri:Pi,s=a[t];if(s)return s;var u=t.split("."),c=u.length;if(e.csp)s=6>c?Sn(u[0],u[1],u[2],u[3],u[4],r,i):function(t,e){var o,a=0;do o=Sn(u[a++],u[a++],u[a++],u[a++],u[a++],r,i)(t,e),e=n,t=o;while(c>a);return o};else{var l="";i&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var f=i;o(u,function(t,e){gn(t,r);var n=(e?"s":'((l&&l.hasOwnProperty("'+t+'"))?l:s)')+"."+t;(i||xn(t))&&(n="eso("+n+", fe)",f=!0),l+="if(s == null) return undefined;\ns="+n+";\n"}),l+="return s;",e=new Function("s","l","eso","fe",l),e.toString=d(l),f&&(e=Cn(e,r)),s=e}return s.sharedGetter=!0,s.assign=function(e,n,r){return bn(e,r,t,n,t)},a[t]=s}function kn(t){return x(t.valueOf)?t.valueOf():Ii.call(t)}function En(){var t=re(),e=re();this.$get=["$filter","$sniffer",function(n,r){function i(t){var e=t;return t.sharedGetter&&(e=function(e,n){return t(e,n)},e.literal=t.literal,e.constant=t.constant,e.assign=t.assign),e}function a(t,e){for(var n=0,r=t.length;r>n;n++){var i=t[n];i.constant||(i.inputs?a(i.inputs,e):-1===e.indexOf(i)&&e.push(i))}return e}function s(t,e){return null==t||null==e?t===e:"object"==typeof t&&(t=kn(t),"object"==typeof t)?!1:t===e||t!==t&&e!==e}function u(t,e,n,r){var i,o=r.$$inputs||(r.$$inputs=a(r.inputs,[]));if(1===o.length){var u=s,o=o[0];return t.$watch(function(t){var e=o(t);return s(e,u)||(i=r(t),u=e&&kn(e)),i},e,n)}for(var c=[],l=0,f=o.length;f>l;l++)c[l]=s;return t.$watch(function(t){for(var e=!1,n=0,a=o.length;a>n;n++){var u=o[n](t);(e||(e=!s(u,c[n])))&&(c[n]=u&&kn(u))}return e&&(i=r(t)),i},e,n)}function c(t,e,n,r){var i,o;return i=t.$watch(function(t){return r(t)},function(t,n,r){o=t,x(e)&&e.apply(this,arguments),v(t)&&r.$$postDigest(function(){v(o)&&i()})},n)}function l(t,e,n,r){function i(t){var e=!0;return o(t,function(t){v(t)||(e=!1)}),e}var a,s;return a=t.$watch(function(t){return r(t)},function(t,n,r){s=t,x(e)&&e.call(this,t,n,r),i(t)&&r.$$postDigest(function(){i(s)&&a()})},n)}function f(t,e,n,r){var i;return i=t.$watch(function(t){return r(t)},function(){x(e)&&e.apply(this,arguments),i()},n)}function h(t,e){if(!e)return t;var n=t.$$watchDelegate,n=n!==l&&n!==c?function(n,r){var i=t(n,r);return e(i,n,r)}:function(n,r){var i=t(n,r),o=e(i,n,r);return v(i)?o:i};return t.$$watchDelegate&&t.$$watchDelegate!==u?n.$$watchDelegate=t.$$watchDelegate:e.$stateful||(n.$$watchDelegate=u,n.inputs=[t]),n}var p={csp:r.csp,expensiveChecks:!1},d={csp:r.csp,expensiveChecks:!0};return function(r,o,a){var s,m,v;switch(typeof r){case"string":v=r=r.trim();var g=a?e:t;return s=g[v],s||(":"===r.charAt(0)&&":"===r.charAt(1)&&(m=!0,r=r.substring(2)),a=a?d:p,s=new Di(a),s=new ji(s,n,a).parse(r),s.constant?s.$$watchDelegate=f:m?(s=i(s),s.$$watchDelegate=s.literal?l:c):s.inputs&&(s.$$watchDelegate=u),g[v]=s),h(s,o);case"function":return h(r,o);default:return h($,o)}}}]}function On(){this.$get=["$rootScope","$exceptionHandler",function(t,e){return Mn(function(e){t.$evalAsync(e)},e)}]}function Tn(){this.$get=["$browser","$exceptionHandler",function(t,e){return Mn(function(e){t.defer(e)},e)}]}function Mn(t,e){function i(t,e,n){function r(e){return function(n){i||(i=!0,e.call(t,n))}}var i=!1;return[r(e),r(n)]}function a(){this.$$state={status:0}}function s(t,e){return function(n){e.call(t,n)}}function u(r){!r.processScheduled&&r.pending&&(r.processScheduled=!0,t(function(){var t,i,o;o=r.pending,r.processScheduled=!1,r.pending=n;for(var a=0,s=o.length;s>a;++a){i=o[a][0],t=o[a][r.status];try{x(t)?i.resolve(t(r.value)):1===r.status?i.resolve(r.value):i.reject(r.value)}catch(u){i.reject(u),e(u)}}}))}function c(){this.promise=new a,this.resolve=s(this,this.resolve),this.reject=s(this,this.reject),this.notify=s(this,this.notify)}var l=r("$q",TypeError);a.prototype={then:function(t,e,n){var r=new c;return this.$$state.pending=this.$$state.pending||[],this.$$state.pending.push([r,t,e,n]),0<this.$$state.status&&u(this.$$state),r.promise},"catch":function(t){return this.then(null,t)},"finally":function(t,e){return this.then(function(e){return h(e,!0,t)},function(e){return h(e,!1,t)},e)}},c.prototype={resolve:function(t){this.promise.$$state.status||(t===this.promise?this.$$reject(l("qcycle",t)):this.$$resolve(t))},$$resolve:function(t){var n,r;r=i(this,this.$$resolve,this.$$reject);try{(g(t)||x(t))&&(n=t&&t.then),x(n)?(this.promise.$$state.status=-1,n.call(t,r[0],r[1],this.notify)):(this.promise.$$state.value=t,this.promise.$$state.status=1,u(this.promise.$$state))}catch(o){r[1](o),e(o)}},reject:function(t){this.promise.$$state.status||this.$$reject(t)},$$reject:function(t){this.promise.$$state.value=t,this.promise.$$state.status=2,u(this.promise.$$state)},notify:function(n){var r=this.promise.$$state.pending;0>=this.promise.$$state.status&&r&&r.length&&t(function(){for(var t,i,o=0,a=r.length;a>o;o++){i=r[o][0],t=r[o][3];try{i.notify(x(t)?t(n):n)}catch(s){e(s)}}})}};var f=function(t,e){var n=new c;return e?n.resolve(t):n.reject(t),n.promise},h=function(t,e,n){var r=null;try{x(n)&&(r=n())}catch(i){return f(i,!1)}return r&&x(r.then)?r.then(function(){return f(t,e)},function(t){return f(t,!1)}):f(t,e)},$=function(t,e,n,r){var i=new c;return i.resolve(t),i.promise.then(e,n,r)},p=function d(t){if(!x(t))throw l("norslvr",t);if(!(this instanceof d))return new d(t);var e=new c;return t(function(t){e.resolve(t)},function(t){e.reject(t)}),e.promise};return p.defer=function(){return new c},p.reject=function(t){var e=new c;return e.reject(t),e.promise},p.when=$,p.all=function(t){var e=new c,n=0,r=Pr(t)?[]:{};return o(t,function(t,i){n++,$(t).then(function(t){r.hasOwnProperty(i)||(r[i]=t,--n||e.resolve(r))},function(t){r.hasOwnProperty(i)||e.reject(t)})}),0===n&&e.resolve(r),e.promise},p}function Vn(){this.$get=["$window","$timeout",function(t,e){var n=t.requestAnimationFrame||t.webkitRequestAnimationFrame,r=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.webkitCancelRequestAnimationFrame,i=!!n,o=i?function(t){var e=n(t);return function(){r(e)}}:function(t){var n=e(t,16.66,!1);return function(){e.cancel(n)}};return o.supported=i,o}]}function Nn(){function t(t){function e(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$id=++Dr,this.$$ChildScope=null}return e.prototype=t,e}var e=10,n=r("$rootScope"),a=null,s=null;this.digestTtl=function(t){return arguments.length&&(e=t),e},this.$get=["$injector","$exceptionHandler","$parse","$browser",function(r,u,c,l){function f(t){t.currentScope.$$destroyed=!0}function h(){this.$id=++Dr,this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,this.$root=this,this.$$destroyed=!1,this.$$listeners={},this.$$listenerCount={},this.$$isolateBindings=null}function p(t){if(b.$$phase)throw n("inprog",b.$$phase);b.$$phase=t}function d(t,e,n){do t.$$listenerCount[n]-=e,0===t.$$listenerCount[n]&&delete t.$$listenerCount[n];while(t=t.$parent)}function v(){}function y(){for(;A.length;)try{A.shift()()}catch(t){u(t)}s=null}function w(){null===s&&(s=l.defer(function(){b.$apply(y)}))}h.prototype={constructor:h,$new:function(e,n){var r;return n=n||this,e?(r=new h,r.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=t(this)),r=new this.$$ChildScope),r.$parent=n,r.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=r,n.$$childTail=r):n.$$childHead=n.$$childTail=r,(e||n!=this)&&r.$on("$destroy",f),r},$watch:function(t,e,n){var r=c(t);if(r.$$watchDelegate)return r.$$watchDelegate(this,e,n,r);var i=this.$$watchers,o={fn:e,last:v,get:r,exp:t,eq:!!n};return a=null,x(e)||(o.fn=$),i||(i=this.$$watchers=[]),i.unshift(o),function(){M(i,o),a=null}},$watchGroup:function(t,e){function n(){u=!1,c?(c=!1,e(i,i,s)):e(i,r,s)}var r=Array(t.length),i=Array(t.length),a=[],s=this,u=!1,c=!0;if(!t.length){var l=!0;return s.$evalAsync(function(){l&&e(i,i,s)}),function(){l=!1}}return 1===t.length?this.$watch(t[0],function(t,n,o){i[0]=t,r[0]=n,e(i,t===n?i:r,o)}):(o(t,function(t,e){var o=s.$watch(t,function(t,o){i[e]=t,r[e]=o,u||(u=!0,s.$evalAsync(n))});a.push(o)}),function(){for(;a.length;)a.shift()()})},$watchCollection:function(t,e){function n(t){r=t;var e,n,a,s;if(!m(r)){if(g(r))if(i(r))for(o!==h&&(o=h,d=o.length=0,l++),t=r.length,d!==t&&(l++,o.length=d=t),e=0;t>e;e++)s=o[e],a=r[e],n=s!==s&&a!==a,n||s===a||(l++,o[e]=a);else{o!==$&&(o=$={},d=0,l++),t=0;for(e in r)r.hasOwnProperty(e)&&(t++,a=r[e],s=o[e],e in o?(n=s!==s&&a!==a,n||s===a||(l++,o[e]=a)):(d++,o[e]=a,l++));if(d>t)for(e in l++,o)r.hasOwnProperty(e)||(d--,delete o[e])}else o!==r&&(o=r,l++);return l}}n.$stateful=!0;var r,o,a,s=this,u=1<e.length,l=0,f=c(t,n),h=[],$={},p=!0,d=0;return this.$watch(f,function(){if(p?(p=!1,e(r,r,s)):e(r,a,s),u)if(g(r))if(i(r)){a=Array(r.length);for(var t=0;t<r.length;t++)a[t]=r[t]}else for(t in a={},r)Ar.call(r,t)&&(a[t]=r[t]);else a=r})},$digest:function(){var t,r,i,o,c,f,h,$,d,m=e,g=[];p("$digest"),l.$$checkUrlChange(),this===b&&null!==s&&(l.defer.cancel(s),y()),a=null;do{for(f=!1,h=this;S.length;){try{d=S.shift(),d.scope.$eval(d.expression,d.locals)}catch(w){u(w)}a=null}t:do{if(o=h.$$watchers)for(c=o.length;c--;)try{if(t=o[c])if((r=t.get(h))===(i=t.last)||(t.eq?D(r,i):"number"==typeof r&&"number"==typeof i&&isNaN(r)&&isNaN(i))){if(t===a){f=!1;break t}}else f=!0,a=t,t.last=t.eq?V(r,null):r,t.fn(r,i===v?r:i,h),5>m&&($=4-m,g[$]||(g[$]=[]),g[$].push({msg:x(t.exp)?"fn: "+(t.exp.name||t.exp.toString()):t.exp,newVal:r,oldVal:i}))}catch(A){u(A)}if(!(o=h.$$childHead||h!==this&&h.$$nextSibling))for(;h!==this&&!(o=h.$$nextSibling);)h=h.$parent}while(h=o);if((f||S.length)&&!m--)throw b.$$phase=null,n("infdig",e,g)}while(f||S.length);for(b.$$phase=null;C.length;)try{C.shift()()}catch(k){u(k)}},$destroy:function(){if(!this.$$destroyed){var t=this.$parent;if(this.$broadcast("$destroy"),this.$$destroyed=!0,this!==b){for(var e in this.$$listenerCount)d(this,this.$$listenerCount[e],e);t.$$childHead==this&&(t.$$childHead=this.$$nextSibling),t.$$childTail==this&&(t.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=$,this.$on=this.$watch=this.$watchGroup=function(){return $},this.$$listeners={},this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(t,e){return c(t)(this,e)},$evalAsync:function(t,e){b.$$phase||S.length||l.defer(function(){S.length&&b.$digest()}),S.push({scope:this,expression:t,locals:e})},$$postDigest:function(t){C.push(t)},$apply:function(t){try{return p("$apply"),this.$eval(t)}catch(e){u(e)}finally{b.$$phase=null;try{b.$digest()}catch(n){throw u(n),n}}},$applyAsync:function(t){function e(){n.$eval(t)}var n=this;t&&A.push(e),w()},$on:function(t,e){var n=this.$$listeners[t];n||(this.$$listeners[t]=n=[]),n.push(e);var r=this;do r.$$listenerCount[t]||(r.$$listenerCount[t]=0),r.$$listenerCount[t]++;while(r=r.$parent);var i=this;return function(){var r=n.indexOf(e);-1!==r&&(n[r]=null,d(i,1,t))}},$emit:function(t){var e,n,r,i=[],o=this,a=!1,s={name:t,targetScope:o,stopPropagation:function(){a=!0},preventDefault:function(){s.defaultPrevented=!0},defaultPrevented:!1},c=j([s],arguments,1);do{for(e=o.$$listeners[t]||i,s.currentScope=o,n=0,r=e.length;r>n;n++)if(e[n])try{e[n].apply(null,c)}catch(l){u(l)}else e.splice(n,1),n--,r--;if(a)return s.currentScope=null,s;o=o.$parent}while(o);return s.currentScope=null,s},$broadcast:function(t){var e=this,n=this,r={name:t,targetScope:this,preventDefault:function(){r.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[t])return r;for(var i,o,a=j([r],arguments,1);e=n;){for(r.currentScope=e,n=e.$$listeners[t]||[],i=0,o=n.length;o>i;i++)if(n[i])try{n[i].apply(null,a)}catch(s){u(s)}else n.splice(i,1),i--,o--;if(!(n=e.$$listenerCount[t]&&e.$$childHead||e!==this&&e.$$nextSibling))for(;e!==this&&!(n=e.$$nextSibling);)e=e.$parent}return r.currentScope=null,r}};var b=new h,S=b.$$asyncQueue=[],C=b.$$postDigestQueue=[],A=b.$$applyAsyncQueue=[];return b}]}function Dn(){var t=/^\s*(https?|ftp|mailto|tel|file):/,e=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(e){return v(e)?(t=e,this):t},this.imgSrcSanitizationWhitelist=function(t){return v(t)?(e=t,this):e},this.$get=function(){return function(n,r){var i,o=r?e:t;return i=_n(n).href,""===i||i.match(o)?n:"unsafe:"+i}}}function jn(t){if("self"===t)return t;if(y(t)){if(-1<t.indexOf("***"))throw qi("iwcard",t);return t=Ir(t).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*"),new RegExp("^"+t+"$")}if(S(t))return new RegExp("^"+t.source+"$");throw qi("imatcher")}function Pn(t){var e=[];return v(t)&&o(t,function(t){e.push(jn(t))}),e}function Rn(){this.SCE_CONTEXTS=Ui;var t=["self"],e=[];this.resourceUrlWhitelist=function(e){return arguments.length&&(t=Pn(e)),t},this.resourceUrlBlacklist=function(t){return arguments.length&&(e=Pn(t)),e},this.$get=["$injector",function(r){function i(t,e){return"self"===t?Ln(e):!!t.exec(e.href)}function o(t){var e=function(t){this.$$unwrapTrustedValue=function(){return t}};return t&&(e.prototype=new t),e.prototype.valueOf=function(){return this.$$unwrapTrustedValue()},e.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()},e}var a=function(){throw qi("unsafe")};r.has("$sanitize")&&(a=r.get("$sanitize"));var s=o(),u={};return u[Ui.HTML]=o(s),u[Ui.CSS]=o(s),u[Ui.URL]=o(s),u[Ui.JS]=o(s),u[Ui.RESOURCE_URL]=o(u[Ui.URL]),{trustAs:function(t,e){var r=u.hasOwnProperty(t)?u[t]:null;if(!r)throw qi("icontext",t,e);if(null===e||e===n||""===e)return e;if("string"!=typeof e)throw qi("itype",t);
    return new r(e)},getTrusted:function(r,o){if(null===o||o===n||""===o)return o;var s=u.hasOwnProperty(r)?u[r]:null;if(s&&o instanceof s)return o.$$unwrapTrustedValue();if(r===Ui.RESOURCE_URL){var c,l,s=_n(o.toString()),f=!1;for(c=0,l=t.length;l>c;c++)if(i(t[c],s)){f=!0;break}if(f)for(c=0,l=e.length;l>c;c++)if(i(e[c],s)){f=!1;break}if(f)return o;throw qi("insecurl",o.toString())}if(r===Ui.HTML)return a(o);throw qi("unsafe")},valueOf:function(t){return t instanceof s?t.$$unwrapTrustedValue():t}}}]}function In(){var t=!0;this.enabled=function(e){return arguments.length&&(t=!!e),t},this.$get=["$parse","$sceDelegate",function(e,n){if(t&&8>yr)throw qi("iequirks");var r=N(Ui);r.isEnabled=function(){return t},r.trustAs=n.trustAs,r.getTrusted=n.getTrusted,r.valueOf=n.valueOf,t||(r.trustAs=r.getTrusted=function(t,e){return e},r.valueOf=p),r.parseAs=function(t,n){var i=e(n);return i.literal&&i.constant?i:e(n,function(e){return r.getTrusted(t,e)})};var i=r.parseAs,a=r.getTrusted,s=r.trustAs;return o(Ui,function(t,e){var n=Cr(e);r[ae("parse_as_"+n)]=function(e){return i(t,e)},r[ae("get_trusted_"+n)]=function(e){return a(t,e)},r[ae("trust_as_"+n)]=function(e){return s(t,e)}}),r}]}function qn(){this.$get=["$window","$document",function(t,e){var n,r={},i=f((/android (\d+)/.exec(Cr((t.navigator||{}).userAgent))||[])[1]),o=/Boxee/i.test((t.navigator||{}).userAgent),a=e[0]||{},s=/^(Moz|webkit|ms)(?=[A-Z])/,u=a.body&&a.body.style,c=!1,l=!1;if(u){for(var h in u)if(c=s.exec(h)){n=c[0],n=n.substr(0,1).toUpperCase()+n.substr(1);break}n||(n="WebkitOpacity"in u&&"webkit"),c=!!("transition"in u||n+"Transition"in u),l=!!("animation"in u||n+"Animation"in u),!i||c&&l||(c=y(a.body.style.webkitTransition),l=y(a.body.style.webkitAnimation))}return{history:!(!t.history||!t.history.pushState||4>i||o),hasEvent:function(t){if("input"===t&&11>=yr)return!1;if(m(r[t])){var e=a.createElement("div");r[t]="on"+t in e}return r[t]},csp:qr(),vendorPrefix:n,transitions:c,animations:l,android:i}}]}function Un(){this.$get=["$templateCache","$http","$q",function(t,e,n){function r(i,o){r.totalPendingRequests++;var a=e.defaults&&e.defaults.transformResponse;return Pr(a)?a=a.filter(function(t){return t!==Ge}):a===Ge&&(a=null),e.get(i,{cache:t,transformResponse:a})["finally"](function(){r.totalPendingRequests--}).then(function(t){return t.data},function(t){if(!o)throw $i("tpload",i);return n.reject(t)})}return r.totalPendingRequests=0,r}]}function Fn(){this.$get=["$rootScope","$browser","$location",function(t,e,n){return{findBindings:function(t,e,n){t=t.getElementsByClassName("ng-binding");var r=[];return o(t,function(t){var i=Nr.element(t).data("$binding");i&&o(i,function(i){n?new RegExp("(^|\\s)"+Ir(e)+"(\\s|\\||$)").test(i)&&r.push(t):-1!=i.indexOf(e)&&r.push(t)})}),r},findModels:function(t,e,n){for(var r=["ng-","data-ng-","ng\\:"],i=0;i<r.length;++i){var o=t.querySelectorAll("["+r[i]+"model"+(n?"=":"*=")+'"'+e+'"]');if(o.length)return o}},getLocation:function(){return n.url()},setLocation:function(e){e!==n.url()&&(n.url(e),t.$digest())},whenStable:function(t){e.notifyWhenNoOutstandingRequests(t)}}}]}function Hn(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(t,e,n,r,i){function o(o,s,u){var c=v(u)&&!u,l=(c?r:n).defer(),f=l.promise;return s=e.defer(function(){try{l.resolve(o())}catch(e){l.reject(e),i(e)}finally{delete a[f.$$timeoutId]}c||t.$apply()},s),f.$$timeoutId=s,a[s]=l,f}var a={};return o.cancel=function(t){return t&&t.$$timeoutId in a?(a[t.$$timeoutId].reject("canceled"),delete a[t.$$timeoutId],e.defer.cancel(t.$$timeoutId)):!1},o}]}function _n(t){return yr&&(Fi.setAttribute("href",t),t=Fi.href),Fi.setAttribute("href",t),{href:Fi.href,protocol:Fi.protocol?Fi.protocol.replace(/:$/,""):"",host:Fi.host,search:Fi.search?Fi.search.replace(/^\?/,""):"",hash:Fi.hash?Fi.hash.replace(/^#/,""):"",hostname:Fi.hostname,port:Fi.port,pathname:"/"===Fi.pathname.charAt(0)?Fi.pathname:"/"+Fi.pathname}}function Ln(t){return t=y(t)?_n(t):t,t.protocol===Hi.protocol&&t.host===Hi.host}function Bn(){this.$get=d(t)}function zn(t){function e(n,r){if(g(n)){var i={};return o(n,function(t,n){i[n]=e(n,t)}),i}return t.factory(n+"Filter",r)}this.register=e,this.$get=["$injector",function(t){return function(e){return t.get(e+"Filter")}}],e("currency",Yn),e("date",ir),e("filter",Gn),e("json",or),e("limitTo",ar),e("lowercase",Gi),e("number",Zn),e("orderBy",sr),e("uppercase",Wi)}function Gn(){return function(t,e,n){if(!Pr(t))return t;var r;switch(typeof e){case"function":break;case"boolean":case"number":case"string":r=!0;case"object":e=Wn(e,n,r);break;default:return t}return t.filter(e)}}function Wn(t,e,n){var r=g(t)&&"$"in t;return!0===e?e=D:x(e)||(e=function(t,e){return g(t)||g(e)?!1:(t=Cr(""+t),e=Cr(""+e),-1!==t.indexOf(e))}),function(i){return r&&!g(i)?Jn(i,t.$,e,!1):Jn(i,t,e,n)}}function Jn(t,e,n,r,i){var o=null!==t?typeof t:"null",a=null!==e?typeof e:"null";if("string"===a&&"!"===e.charAt(0))return!Jn(t,e.substring(1),n,r);if(Pr(t))return t.some(function(t){return Jn(t,e,n,r)});switch(o){case"object":var s;if(r){for(s in t)if("$"!==s.charAt(0)&&Jn(t[s],e,n,!0))return!0;return i?!1:Jn(t,e,n,!1)}if("object"===a){for(s in e)if(i=e[s],!x(i)&&!m(i)&&(o="$"===s,!Jn(o?t:t[s],i,n,o,o)))return!1;return!0}return n(t,e);case"function":return!1;default:return n(t,e)}}function Yn(t){var e=t.NUMBER_FORMATS;return function(t,n,r){return m(n)&&(n=e.CURRENCY_SYM),m(r)&&(r=e.PATTERNS[1].maxFrac),null==t?t:Kn(t,e.PATTERNS[1],e.GROUP_SEP,e.DECIMAL_SEP,r).replace(/\u00A4/g,n)}}function Zn(t){var e=t.NUMBER_FORMATS;return function(t,n){return null==t?t:Kn(t,e.PATTERNS[0],e.GROUP_SEP,e.DECIMAL_SEP,n)}}function Kn(t,e,n,r,i){if(!isFinite(t)||g(t))return"";var o=0>t;t=Math.abs(t);var a=t+"",s="",u=[],c=!1;if(-1!==a.indexOf("e")){var l=a.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>i+1?t=0:(s=a,c=!0)}if(c)i>0&&1>t&&(s=t.toFixed(i),t=parseFloat(s));else{a=(a.split(_i)[1]||"").length,m(i)&&(i=Math.min(Math.max(e.minFrac,a),e.maxFrac)),t=+(Math.round(+(t.toString()+"e"+i)).toString()+"e"+-i);var a=(""+t).split(_i),c=a[0],a=a[1]||"",f=0,h=e.lgSize,$=e.gSize;if(c.length>=h+$)for(f=c.length-h,l=0;f>l;l++)0===(f-l)%$&&0!==l&&(s+=n),s+=c.charAt(l);for(l=f;l<c.length;l++)0===(c.length-l)%h&&0!==l&&(s+=n),s+=c.charAt(l);for(;a.length<i;)a+="0";i&&"0"!==i&&(s+=r+a.substr(0,i))}return 0===t&&(o=!1),u.push(o?e.negPre:e.posPre,s,o?e.negSuf:e.posSuf),u.join("")}function Xn(t,e,n){var r="";for(0>t&&(r="-",t=-t),t=""+t;t.length<e;)t="0"+t;return n&&(t=t.substr(t.length-e)),r+t}function Qn(t,e,n,r){return n=n||0,function(i){return i=i["get"+t](),(n>0||i>-n)&&(i+=n),0===i&&-12==n&&(i=12),Xn(i,e,r)}}function tr(t,e){return function(n,r){var i=n["get"+t](),o=kr(e?"SHORT"+t:t);return r[o][i]}}function er(t){var e=new Date(t,0,1).getDay();return new Date(t,0,(4>=e?5:12)-e)}function nr(t){return function(e){var n=er(e.getFullYear());return e=+new Date(e.getFullYear(),e.getMonth(),e.getDate()+(4-e.getDay()))-+n,e=1+Math.round(e/6048e5),Xn(e,t)}}function rr(t,e){return 0>=t.getFullYear()?e.ERAS[0]:e.ERAS[1]}function ir(t){function e(t){var e;if(e=t.match(n)){t=new Date(0);var r=0,i=0,o=e[8]?t.setUTCFullYear:t.setFullYear,a=e[8]?t.setUTCHours:t.setHours;e[9]&&(r=f(e[9]+e[10]),i=f(e[9]+e[11])),o.call(t,f(e[1]),f(e[2])-1,f(e[3])),r=f(e[4]||0)-r,i=f(e[5]||0)-i,o=f(e[6]||0),e=Math.round(1e3*parseFloat("0."+(e[7]||0))),a.call(t,r,i,o,e)}return t}var n=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(n,r,i){var a,s,u="",c=[];if(r=r||"mediumDate",r=t.DATETIME_FORMATS[r]||r,y(n)&&(n=zi.test(n)?f(n):e(n)),w(n)&&(n=new Date(n)),!b(n))return n;for(;r;)(s=Bi.exec(r))?(c=j(c,s,1),r=c.pop()):(c.push(r),r=null);return i&&"UTC"===i&&(n=new Date(n.getTime()),n.setMinutes(n.getMinutes()+n.getTimezoneOffset())),o(c,function(e){a=Li[e],u+=a?a(n,t.DATETIME_FORMATS):e.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}}function or(){return function(t,e){return m(e)&&(e=2),I(t,e)}}function ar(){return function(t,e){return w(t)&&(t=t.toString()),Pr(t)||y(t)?(e=1/0===Math.abs(Number(e))?Number(e):f(e))?e>0?t.slice(0,e):t.slice(e):y(t)?"":[]:t}}function sr(t){return function(e,n,r){function o(t,e){return e?function(e,n){return t(n,e)}:t}function a(t){switch(typeof t){case"number":case"boolean":case"string":return!0;default:return!1}}function s(t){return null===t?"null":"function"==typeof t.valueOf&&(t=t.valueOf(),a(t))||"function"==typeof t.toString&&(t=t.toString(),a(t))?t:""}function u(t,e){var n=typeof t,r=typeof e;return n===r&&"object"===n&&(t=s(t),e=s(e)),n===r?("string"===n&&(t=t.toLowerCase(),e=e.toLowerCase()),t===e?0:e>t?-1:1):r>n?-1:1}return i(e)?(n=Pr(n)?n:[n],0===n.length&&(n=["+"]),n=n.map(function(e){var n=!1,r=e||p;if(y(e)){if(("+"==e.charAt(0)||"-"==e.charAt(0))&&(n="-"==e.charAt(0),e=e.substring(1)),""===e)return o(u,n);if(r=t(e),r.constant){var i=r();return o(function(t,e){return u(t[i],e[i])},n)}}return o(function(t,e){return u(r(t),r(e))},n)}),Er.call(e).sort(o(function(t,e){for(var r=0;r<n.length;r++){var i=n[r](t,e);if(0!==i)return i}return 0},r))):e}}function ur(t){return x(t)&&(t={link:t}),t.restrict=t.restrict||"AC",d(t)}function cr(t,e,r,i,a){var s=this,u=[],c=s.$$parentForm=t.parent().controller("form")||Zi;s.$error={},s.$$success={},s.$pending=n,s.$name=a(e.name||e.ngForm||"")(r),s.$dirty=!1,s.$pristine=!0,s.$valid=!0,s.$invalid=!1,s.$submitted=!1,c.$addControl(s),s.$rollbackViewValue=function(){o(u,function(t){t.$rollbackViewValue()})},s.$commitViewValue=function(){o(u,function(t){t.$commitViewValue()})},s.$addControl=function(t){te(t.$name,"input"),u.push(t),t.$name&&(s[t.$name]=t)},s.$$renameControl=function(t,e){var n=t.$name;s[n]===t&&delete s[n],s[e]=t,t.$name=e},s.$removeControl=function(t){t.$name&&s[t.$name]===t&&delete s[t.$name],o(s.$pending,function(e,n){s.$setValidity(n,null,t)}),o(s.$error,function(e,n){s.$setValidity(n,null,t)}),o(s.$$success,function(e,n){s.$setValidity(n,null,t)}),M(u,t)},vr({ctrl:this,$element:t,set:function(t,e,n){var r=t[e];r?-1===r.indexOf(n)&&r.push(n):t[e]=[n]},unset:function(t,e,n){var r=t[e];r&&(M(r,n),0===r.length&&delete t[e])},parentForm:c,$animate:i}),s.$setDirty=function(){i.removeClass(t,No),i.addClass(t,Do),s.$dirty=!0,s.$pristine=!1,c.$setDirty()},s.$setPristine=function(){i.setClass(t,No,Do+" ng-submitted"),s.$dirty=!1,s.$pristine=!0,s.$submitted=!1,o(u,function(t){t.$setPristine()})},s.$setUntouched=function(){o(u,function(t){t.$setUntouched()})},s.$setSubmitted=function(){i.addClass(t,"ng-submitted"),s.$submitted=!0,c.$setSubmitted()}}function lr(t){t.$formatters.push(function(e){return t.$isEmpty(e)?e:e.toString()})}function fr(t,e,n,r,i,o){var a=Cr(e[0].type);if(!i.android){var s=!1;e.on("compositionstart",function(){s=!0}),e.on("compositionend",function(){s=!1,u()})}var u=function(t){if(c&&(o.defer.cancel(c),c=null),!s){var i=e.val();t=t&&t.type,"password"===a||n.ngTrim&&"false"===n.ngTrim||(i=Rr(i)),(r.$viewValue!==i||""===i&&r.$$hasNativeValidators)&&r.$setViewValue(i,t)}};if(i.hasEvent("input"))e.on("input",u);else{var c,l=function(t,e,n){c||(c=o.defer(function(){c=null,e&&e.value===n||u(t)}))};e.on("keydown",function(t){var e=t.keyCode;91===e||e>15&&19>e||e>=37&&40>=e||l(t,this,this.value)}),i.hasEvent("paste")&&e.on("paste cut",l)}e.on("change",u),r.$render=function(){e.val(r.$isEmpty(r.$viewValue)?"":r.$viewValue)}}function hr(t,e){return function(n,r){var i,a;if(b(n))return n;if(y(n)){if('"'==n.charAt(0)&&'"'==n.charAt(n.length-1)&&(n=n.substring(1,n.length-1)),to.test(n))return new Date(n);if(t.lastIndex=0,i=t.exec(n))return i.shift(),a=r?{yyyy:r.getFullYear(),MM:r.getMonth()+1,dd:r.getDate(),HH:r.getHours(),mm:r.getMinutes(),ss:r.getSeconds(),sss:r.getMilliseconds()/1e3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},o(i,function(t,n){n<e.length&&(a[e[n]]=+t)}),new Date(a.yyyy,a.MM-1,a.dd,a.HH,a.mm,a.ss||0,1e3*a.sss||0)}return 0/0}}function $r(t,e,r,i){return function(o,a,s,u,c,l,f){function h(t){return t&&!(t.getTime&&t.getTime()!==t.getTime())}function $(t){return v(t)?b(t)?t:r(t):n}pr(o,a,s,u),fr(o,a,s,u,c,l);var p,d=u&&u.$options&&u.$options.timezone;if(u.$$parserName=t,u.$parsers.push(function(t){return u.$isEmpty(t)?null:e.test(t)?(t=r(t,p),"UTC"===d&&t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t):n}),u.$formatters.push(function(t){if(t&&!b(t))throw Po("datefmt",t);if(h(t)){if((p=t)&&"UTC"===d){var e=6e4*p.getTimezoneOffset();p=new Date(p.getTime()+e)}return f("date")(t,i,d)}return p=null,""}),v(s.min)||s.ngMin){var g;u.$validators.min=function(t){return!h(t)||m(g)||r(t)>=g},s.$observe("min",function(t){g=$(t),u.$validate()})}if(v(s.max)||s.ngMax){var y;u.$validators.max=function(t){return!h(t)||m(y)||r(t)<=y},s.$observe("max",function(t){y=$(t),u.$validate()})}}}function pr(t,e,r,i){(i.$$hasNativeValidators=g(e[0].validity))&&i.$parsers.push(function(t){var r=e.prop("validity")||{};return r.badInput&&!r.typeMismatch?n:t})}function dr(t,e,n,i,o){if(v(i)){if(t=t(i),!t.constant)throw r("ngModel")("constexpr",n,i);return t(e)}return o}function mr(t,e){return t="ngClass"+t,["$animate",function(n){function r(t,e){var n=[],r=0;t:for(;r<t.length;r++){for(var i=t[r],o=0;o<e.length;o++)if(i==e[o])continue t;n.push(i)}return n}function i(t){if(!Pr(t)){if(y(t))return t.split(" ");if(g(t)){var e=[];return o(t,function(t,n){t&&(e=e.concat(n.split(" ")))}),e}}return t}return{restrict:"AC",link:function(a,s,u){function c(t,e){var n=s.data("$classCounts")||{},r=[];return o(t,function(t){(e>0||n[t])&&(n[t]=(n[t]||0)+e,n[t]===+(e>0)&&r.push(t))}),s.data("$classCounts",n),r.join(" ")}function l(t){if(!0===e||a.$index%2===e){var o=i(t||[]);if(f){if(!D(t,f)){var l=i(f),h=r(o,l),o=r(l,o),h=c(h,1),o=c(o,-1);h&&h.length&&n.addClass(s,h),o&&o.length&&n.removeClass(s,o)}}else{var h=c(o,1);u.$addClass(h)}}f=N(t)}var f;a.$watch(u[t],l,!0),u.$observe("class",function(){l(a.$eval(u[t]))}),"ngClass"!==t&&a.$watch("$index",function(n,r){var o=1&n;if(o!==(1&r)){var s=i(a.$eval(u[t]));o===e?(o=c(s,1),u.$addClass(o)):(o=c(s,-1),u.$removeClass(o))}})}}}]}function vr(t){function e(t,e){e&&!a[t]?(l.addClass(o,t),a[t]=!0):!e&&a[t]&&(l.removeClass(o,t),a[t]=!1)}function r(t,n){t=t?"-"+Z(t,"-"):"",e(Mo+t,!0===n),e(Vo+t,!1===n)}var i=t.ctrl,o=t.$element,a={},s=t.set,u=t.unset,c=t.parentForm,l=t.$animate;a[Vo]=!(a[Mo]=o.hasClass(Mo)),i.$setValidity=function(t,o,a){o===n?(i.$pending||(i.$pending={}),s(i.$pending,t,a)):(i.$pending&&u(i.$pending,t,a),gr(i.$pending)&&(i.$pending=n)),k(o)?o?(u(i.$error,t,a),s(i.$$success,t,a)):(s(i.$error,t,a),u(i.$$success,t,a)):(u(i.$error,t,a),u(i.$$success,t,a)),i.$pending?(e(jo,!0),i.$valid=i.$invalid=n,r("",null)):(e(jo,!1),i.$valid=gr(i.$error),i.$invalid=!i.$valid,r("",i.$valid)),o=i.$pending&&i.$pending[t]?n:i.$error[t]?!1:i.$$success[t]?!0:null,r(t,o),c.$setValidity(t,o,i)}}function gr(t){if(t)for(var e in t)return!1;return!0}var yr,wr,br,xr,Sr=/^\/(.+)\/([a-z]*)$/,Cr=function(t){return y(t)?t.toLowerCase():t},Ar=Object.prototype.hasOwnProperty,kr=function(t){return y(t)?t.toUpperCase():t},Er=[].slice,Or=[].splice,Tr=[].push,Mr=Object.prototype.toString,Vr=r("ng"),Nr=t.angular||(t.angular={}),Dr=0;yr=e.documentMode,$.$inject=[],p.$inject=[];var jr,Pr=Array.isArray,Rr=function(t){return y(t)?t.trim():t},Ir=function(t){return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},qr=function(){if(v(qr.isActive_))return qr.isActive_;var t=!(!e.querySelector("[ng-csp]")&&!e.querySelector("[data-ng-csp]"));if(!t)try{new Function("")}catch(n){t=!0}return qr.isActive_=t},Ur=["ng-","data-ng-","ng:","x-ng-"],Fr=/[A-Z]/g,Hr=!1,_r=1,Lr=3,Br={full:"1.3.15",major:1,minor:3,dot:15,codeName:"locality-filtration"};ce.expando="ng339";var zr=ce.cache={},Gr=1;ce._data=function(t){return this.cache[t[this.expando]]||{}};var Wr=/([\:\-\_]+(.))/g,Jr=/^moz([A-Z])/,Yr={mouseleave:"mouseout",mouseenter:"mouseover"},Zr=r("jqLite"),Kr=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Xr=/<|&#?\w+;/,Qr=/<([\w:]+)/,ti=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ei={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ei.optgroup=ei.option,ei.tbody=ei.tfoot=ei.colgroup=ei.caption=ei.thead,ei.th=ei.td;var ni=ce.prototype={ready:function(n){function r(){i||(i=!0,n())}var i=!1;"complete"===e.readyState?setTimeout(r):(this.on("DOMContentLoaded",r),ce(t).on("load",r))},toString:function(){var t=[];return o(this,function(e){t.push(""+e)}),"["+t.join(", ")+"]"},eq:function(t){return wr(t>=0?this[t]:this[this.length+t])},length:0,push:Tr,sort:[].sort,splice:[].splice},ri={};o("multiple selected checked disabled readOnly required open".split(" "),function(t){ri[Cr(t)]=t});var ii={};o("input select option textarea button form details".split(" "),function(t){ii[t]=!0});var oi={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};o({data:de,removeData:$e},function(t,e){ce[e]=t}),o({data:de,inheritedData:be,scope:function(t){return wr.data(t,"$scope")||be(t.parentNode||t,["$isolateScope","$scope"])},isolateScope:function(t){return wr.data(t,"$isolateScope")||wr.data(t,"$isolateScopeNoTemplate")},controller:we,injector:function(t){return be(t,"$injector")},removeAttr:function(t,e){t.removeAttribute(e)},hasClass:me,css:function(t,e,n){return e=ae(e),v(n)?void(t.style[e]=n):t.style[e]},attr:function(t,e,r){var i=Cr(e);if(ri[i]){if(!v(r))return t[e]||(t.attributes.getNamedItem(e)||$).specified?i:n;r?(t[e]=!0,t.setAttribute(e,i)):(t[e]=!1,t.removeAttribute(i))}else if(v(r))t.setAttribute(e,r);else if(t.getAttribute)return t=t.getAttribute(e,2),null===t?n:t},prop:function(t,e,n){return v(n)?void(t[e]=n):t[e]},text:function(){function t(t,e){if(m(e)){var n=t.nodeType;return n===_r||n===Lr?t.textContent:""}t.textContent=e}return t.$dv="",t}(),val:function(t,e){if(m(e)){if(t.multiple&&"select"===T(t)){var n=[];return o(t.options,function(t){t.selected&&n.push(t.value||t.text)}),0===n.length?null:n}return t.value}t.value=e},html:function(t,e){return m(e)?t.innerHTML:(fe(t,!0),void(t.innerHTML=e))},empty:xe},function(t,e){ce.prototype[e]=function(e,r){var i,o,a=this.length;if(t!==xe&&(2==t.length&&t!==me&&t!==we?e:r)===n){if(g(e)){for(i=0;a>i;i++)if(t===de)t(this[i],e);else for(o in e)t(this[i],o,e[o]);return this}for(i=t.$dv,a=i===n?Math.min(a,1):a,o=0;a>o;o++){var s=t(this[o],e,r);i=i?i+s:s}return i}for(i=0;a>i;i++)t(this[i],e,r);return this}}),o({removeData:$e,on:function aa(t,e,n,r){if(v(r))throw Zr("onargs");if(se(t)){var i=pe(t,!0);r=i.events;var o=i.handle;o||(o=i.handle=Ee(t,r));for(var i=0<=e.indexOf(" ")?e.split(" "):[e],a=i.length;a--;){e=i[a];var s=r[e];s||(r[e]=[],"mouseenter"===e||"mouseleave"===e?aa(t,Yr[e],function(t){var n=t.relatedTarget;n&&(n===this||this.contains(n))||o(t,e)}):"$destroy"!==e&&t.addEventListener(e,o,!1),s=r[e]),s.push(n)}}},off:he,one:function(t,e,n){t=wr(t),t.on(e,function r(){t.off(e,n),t.off(e,r)}),t.on(e,n)},replaceWith:function(t,e){var n,r=t.parentNode;fe(t),o(new ce(e),function(e){n?r.insertBefore(e,n.nextSibling):r.replaceChild(e,t),n=e})},children:function(t){var e=[];return o(t.childNodes,function(t){t.nodeType===_r&&e.push(t)}),e},contents:function(t){return t.contentDocument||t.childNodes||[]},append:function(t,e){var n=t.nodeType;if(n===_r||11===n){e=new ce(e);for(var n=0,r=e.length;r>n;n++)t.appendChild(e[n])}},prepend:function(t,e){if(t.nodeType===_r){var n=t.firstChild;o(new ce(e),function(e){t.insertBefore(e,n)})}},wrap:function(t,e){e=wr(e).eq(0).clone()[0];var n=t.parentNode;n&&n.replaceChild(e,t),e.appendChild(t)},remove:Se,detach:function(t){Se(t,!0)},after:function(t,e){var n=t,r=t.parentNode;e=new ce(e);for(var i=0,o=e.length;o>i;i++){var a=e[i];r.insertBefore(a,n.nextSibling),n=a}},addClass:ge,removeClass:ve,toggleClass:function(t,e,n){e&&o(e.split(" "),function(e){var r=n;m(r)&&(r=!me(t,e)),(r?ge:ve)(t,e)})},parent:function(t){return(t=t.parentNode)&&11!==t.nodeType?t:null},next:function(t){return t.nextElementSibling},find:function(t,e){return t.getElementsByTagName?t.getElementsByTagName(e):[]},clone:le,triggerHandler:function(t,e,n){var r,i,a=e.type||e,s=pe(t);(s=(s=s&&s.events)&&s[a])&&(r={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:$,type:a,target:t},e.type&&(r=l(r,e)),e=N(s),i=n?[r].concat(n):[r],o(e,function(e){r.isImmediatePropagationStopped()||e.apply(t,i)}))}},function(t,e){ce.prototype[e]=function(e,n,r){for(var i,o=0,a=this.length;a>o;o++)m(i)?(i=t(this[o],e,n,r),v(i)&&(i=wr(i))):ye(i,t(this[o],e,n,r));return v(i)?i:this},ce.prototype.bind=ce.prototype.on,ce.prototype.unbind=ce.prototype.off}),Me.prototype={put:function(t,e){this[Te(t,this.nextUid)]=e},get:function(t){return this[Te(t,this.nextUid)]},remove:function(t){var e=this[t=Te(t,this.nextUid)];return delete this[t],e}};var ai=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,si=/,/,ui=/^\s*(_?)(\S+?)\1\s*$/,ci=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,li=r("$injector");Ne.$$annotate=function(t,e,n){var r;if("function"==typeof t){if(!(r=t.$inject)){if(r=[],t.length){if(e)throw y(n)&&n||(n=t.name||Ve(t)),li("strictdi",n);e=t.toString().replace(ci,""),e=e.match(ai),o(e[1].split(si),function(t){t.replace(ui,function(t,e,n){r.push(n)})})}t.$inject=r}}else Pr(t)?(e=t.length-1,Q(t[e],"fn"),r=t.slice(0,e)):Q(t,"fn",!0);return r};var fi=r("$animate"),hi=["$provide",function(t){this.$$selectors={},this.register=function(e,n){var r=e+"-animation";if(e&&"."!=e.charAt(0))throw fi("notcsel",e);this.$$selectors[e.substr(1)]=r,t.factory(r,n)},this.classNameFilter=function(t){return 1===arguments.length&&(this.$$classNameFilter=t instanceof RegExp?t:null),this.$$classNameFilter},this.$get=["$$q","$$asyncCallback","$rootScope",function(t,e,n){function r(e){var r,i=t.defer();return i.promise.$$cancelFn=function(){r&&r()},n.$$postDigest(function(){r=e(function(){i.resolve()})}),i.promise}function i(t,e){var n=[],r=[],i=re();return o((t.attr("class")||"").split(/\s+/),function(t){i[t]=!0}),o(e,function(t,e){var o=i[e];!1===t&&o?r.push(e):!0!==t||o||n.push(e)}),0<n.length+r.length&&[n.length?n:null,r.length?r:null]}function a(t,e,n){for(var r=0,i=e.length;i>r;++r)t[e[r]]=n}function s(){return c||(c=t.defer(),e(function(){c.resolve(),c=null})),c.promise}function u(t,e){if(Nr.isObject(e)){var n=l(e.from||{},e.to||{});t.css(n)}}var c;return{animate:function(t,e,n){return u(t,{from:e,to:n}),s()},enter:function(t,e,n,r){return u(t,r),n?n.after(t):e.prepend(t),s()},leave:function(t,e){return u(t,e),t.remove(),s()},move:function(t,e,n,r){return this.enter(t,e,n,r)},addClass:function(t,e,n){return this.setClass(t,e,[],n)},$$addClassImmediately:function(t,e,n){return t=wr(t),e=y(e)?e:Pr(e)?e.join(" "):"",o(t,function(t){ge(t,e)}),u(t,n),s()},removeClass:function(t,e,n){return this.setClass(t,[],e,n)},$$removeClassImmediately:function(t,e,n){return t=wr(t),e=y(e)?e:Pr(e)?e.join(" "):"",o(t,function(t){ve(t,e)}),u(t,n),s()},setClass:function(t,e,n,o){var s=this,u=!1;t=wr(t);var c=t.data("$$animateClasses");return c?o&&c.options&&(c.options=Nr.extend(c.options||{},o)):(c={classes:{},options:o},u=!0),o=c.classes,e=Pr(e)?e:e.split(" "),n=Pr(n)?n:n.split(" "),a(o,e,!0),a(o,n,!1),u&&(c.promise=r(function(e){var n=t.data("$$animateClasses");if(t.removeData("$$animateClasses"),n){var r=i(t,n.classes);r&&s.$$setClassImmediately(t,r[0],r[1],n.options)}e()}),t.data("$$animateClasses",c)),c.promise},$$setClassImmediately:function(t,e,n,r){return e&&this.$$addClassImmediately(t,e),n&&this.$$removeClassImmediately(t,n),u(t,r),s()},enabled:$,cancel:$}}]}],$i=r("$compile");Ue.$inject=["$provide","$$sanitizeUriProvider"];var pi=/^((?:x|data)[\:\-_])/i,di=r("$controller"),mi="application/json",vi={"Content-Type":mi+";charset=utf-8"},gi=/^\[|^\{(?!\{)/,yi={"[":/]$/,"{":/}$/},wi=/^\)\]\}',?\n/,bi=r("$interpolate"),xi=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Si={http:80,https:443,ftp:21},Ci=r("$location"),Ai={$$html5:!1,$$replace:!1,absUrl:pn("$$absUrl"),url:function(t){if(m(t))return this.$$url;var e=xi.exec(t);return(e[1]||""===t)&&this.path(decodeURIComponent(e[1])),(e[2]||e[1]||""===t)&&this.search(e[3]||""),this.hash(e[5]||""),this},protocol:pn("$$protocol"),host:pn("$$host"),port:pn("$$port"),path:dn("$$path",function(t){return t=null!==t?t.toString():"","/"==t.charAt(0)?t:"/"+t}),search:function(t,e){switch(arguments.length){case 0:return this.$$search;case 1:if(y(t)||w(t))t=t.toString(),this.$$search=H(t);else{if(!g(t))throw Ci("isrcharg");t=V(t,{}),o(t,function(e,n){null==e&&delete t[n]}),this.$$search=t}break;default:m(e)||null===e?delete this.$$search[t]:this.$$search[t]=e}return this.$$compose(),this},hash:dn("$$hash",function(t){return null!==t?t.toString():""}),replace:function(){return this.$$replace=!0,this}};o([$n,hn,fn],function(t){t.prototype=Object.create(Ai),t.prototype.state=function(e){if(!arguments.length)return this.$$state;if(t!==fn||!this.$$html5)throw Ci("nostate");return this.$$state=m(e)?null:e,this}});var ki=r("$parse"),Ei=Function.prototype.call,Oi=Function.prototype.apply,Ti=Function.prototype.bind,Mi=re();o({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(t,e){t.constant=t.literal=t.sharedGetter=!0,Mi[e]=t}),Mi["this"]=function(t){return t},Mi["this"].sharedGetter=!0;var Vi=l(re(),{"+":function(t,e,r,i){return r=r(t,e),i=i(t,e),v(r)?v(i)?r+i:r:v(i)?i:n},"-":function(t,e,n,r){return n=n(t,e),r=r(t,e),(v(n)?n:0)-(v(r)?r:0)},"*":function(t,e,n,r){return n(t,e)*r(t,e)},"/":function(t,e,n,r){return n(t,e)/r(t,e)},"%":function(t,e,n,r){return n(t,e)%r(t,e)},"===":function(t,e,n,r){return n(t,e)===r(t,e)},"!==":function(t,e,n,r){return n(t,e)!==r(t,e)},"==":function(t,e,n,r){return n(t,e)==r(t,e)},"!=":function(t,e,n,r){return n(t,e)!=r(t,e)},"<":function(t,e,n,r){return n(t,e)<r(t,e)},">":function(t,e,n,r){return n(t,e)>r(t,e)},"<=":function(t,e,n,r){return n(t,e)<=r(t,e)},">=":function(t,e,n,r){return n(t,e)>=r(t,e)},"&&":function(t,e,n,r){return n(t,e)&&r(t,e)},"||":function(t,e,n,r){return n(t,e)||r(t,e)},"!":function(t,e,n){return!n(t,e)},"=":!0,"|":!0}),Ni={n:"\n",f:"\f",r:"\r",t:"	",v:"","'":"'",'"':'"'},Di=function(t){this.options=t};Di.prototype={constructor:Di,lex:function(t){for(this.text=t,this.index=0,this.tokens=[];this.index<this.text.length;)if(t=this.text.charAt(this.index),'"'===t||"'"===t)this.readString(t);else if(this.isNumber(t)||"."===t&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(t))this.readIdent();else if(this.is(t,"(){}[].,;:?"))this.tokens.push({index:this.index,text:t}),this.index++;else if(this.isWhitespace(t))this.index++;else{var e=t+this.peek(),n=e+this.peek(2),r=Vi[e],i=Vi[n];Vi[t]||r||i?(t=i?n:r?e:t,this.tokens.push({index:this.index,text:t,operator:!0}),this.index+=t.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(t,e){return-1!==e.indexOf(t)},peek:function(t){return t=t||1,this.index+t<this.text.length?this.text.charAt(this.index+t):!1},isNumber:function(t){return t>="0"&&"9">=t&&"string"==typeof t},isWhitespace:function(t){return" "===t||"\r"===t||"	"===t||"\n"===t||""===t||" "===t},isIdent:function(t){return t>="a"&&"z">=t||t>="A"&&"Z">=t||"_"===t||"$"===t},isExpOperator:function(t){return"-"===t||"+"===t||this.isNumber(t)},throwError:function(t,e,n){throw n=n||this.index,e=v(e)?"s "+e+"-"+this.index+" ["+this.text.substring(e,n)+"]":" "+n,ki("lexerr",t,e,this.text)},readNumber:function(){for(var t="",e=this.index;this.index<this.text.length;){var n=Cr(this.text.charAt(this.index));if("."==n||this.isNumber(n))t+=n;else{var r=this.peek();if("e"==n&&this.isExpOperator(r))t+=n;else if(this.isExpOperator(n)&&r&&this.isNumber(r)&&"e"==t.charAt(t.length-1))t+=n;else{if(!this.isExpOperator(n)||r&&this.isNumber(r)||"e"!=t.charAt(t.length-1))break;this.throwError("Invalid exponent")}}this.index++}this.tokens.push({index:e,text:t,constant:!0,value:Number(t)})},readIdent:function(){for(var t=this.index;this.index<this.text.length;){var e=this.text.charAt(this.index);if(!this.isIdent(e)&&!this.isNumber(e))break;this.index++}this.tokens.push({index:t,text:this.text.slice(t,this.index),identifier:!0})},readString:function(t){var e=this.index;this.index++;for(var n="",r=t,i=!1;this.index<this.text.length;){var o=this.text.charAt(this.index),r=r+o;if(i)"u"===o?(i=this.text.substring(this.index+1,this.index+5),i.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+i+"]"),this.index+=4,n+=String.fromCharCode(parseInt(i,16))):n+=Ni[o]||o,i=!1;else if("\\"===o)i=!0;else{if(o===t)return this.index++,void this.tokens.push({index:e,text:r,constant:!0,value:n});n+=o}this.index++}this.throwError("Unterminated quote",e)}};var ji=function(t,e,n){this.lexer=t,this.$filter=e,this.options=n};ji.ZERO=l(function(){return 0},{sharedGetter:!0,constant:!0}),ji.prototype={constructor:ji,parse:function(t){return this.text=t,this.tokens=this.lexer.lex(t),t=this.statements(),0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),t.literal=!!t.literal,t.constant=!!t.constant,t},primary:function(){var t;this.expect("(")?(t=this.filterChain(),this.consume(")")):this.expect("[")?t=this.arrayDeclaration():this.expect("{")?t=this.object():this.peek().identifier&&this.peek().text in Mi?t=Mi[this.consume().text]:this.peek().identifier?t=this.identifier():this.peek().constant?t=this.constant():this.throwError("not a primary expression",this.peek());for(var e,n;e=this.expect("(","[",".");)"("===e.text?(t=this.functionCall(t,n),n=null):"["===e.text?(n=t,t=this.objectIndex(t)):"."===e.text?(n=t,t=this.fieldAccess(t)):this.throwError("IMPOSSIBLE");return t},throwError:function(t,e){throw ki("syntax",e.text,t,e.index+1,this.text,this.text.substring(e.index))},peekToken:function(){if(0===this.tokens.length)throw ki("ueoe",this.text);return this.tokens[0]},peek:function(t,e,n,r){return this.peekAhead(0,t,e,n,r)},peekAhead:function(t,e,n,r,i){if(this.tokens.length>t){t=this.tokens[t];var o=t.text;if(o===e||o===n||o===r||o===i||!(e||n||r||i))return t}return!1},expect:function(t,e,n,r){return(t=this.peek(t,e,n,r))?(this.tokens.shift(),t):!1},consume:function(t){if(0===this.tokens.length)throw ki("ueoe",this.text);var e=this.expect(t);return e||this.throwError("is unexpected, expecting ["+t+"]",this.peek()),e},unaryFn:function(t,e){var n=Vi[t];return l(function(t,r){return n(t,r,e)},{constant:e.constant,inputs:[e]})},binaryFn:function(t,e,n,r){var i=Vi[e];return l(function(e,r){return i(e,r,t,n)},{constant:t.constant&&n.constant,inputs:!r&&[t,n]})},identifier:function(){for(var t=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)t+=this.consume().text+this.consume().text;return An(t,this.options,this.text)},constant:function(){var t=this.consume().value;return l(function(){return t},{constant:!0,literal:!0})},statements:function(){for(var t=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&t.push(this.filterChain()),!this.expect(";"))return 1===t.length?t[0]:function(e,n){for(var r,i=0,o=t.length;o>i;i++)r=t[i](e,n);return r}},filterChain:function(){for(var t=this.expression();this.expect("|");)t=this.filter(t);return t},filter:function(t){var e,r,i=this.$filter(this.consume().text);if(this.peek(":"))for(e=[],r=[];this.expect(":");)e.push(this.expression());var o=[t].concat(e||[]);return l(function(o,a){var s=t(o,a);if(r){for(r[0]=s,s=e.length;s--;)r[s+1]=e[s](o,a);return i.apply(n,r)}return i(s)},{constant:!i.$stateful&&o.every(wn),inputs:!i.$stateful&&o})},expression:function(){return this.assignment()},assignment:function(){var t,e,n=this.ternary();return(e=this.expect("="))?(n.assign||this.throwError("implies assignment but ["+this.text.substring(0,e.index)+"] can not be assigned to",e),t=this.ternary(),l(function(e,r){return n.assign(e,t(e,r),r)
},{inputs:[n,t]})):n},ternary:function(){var t,e=this.logicalOR();if(this.expect("?")&&(t=this.assignment(),this.consume(":"))){var n=this.assignment();return l(function(r,i){return e(r,i)?t(r,i):n(r,i)},{constant:e.constant&&t.constant&&n.constant})}return e},logicalOR:function(){for(var t,e=this.logicalAND();t=this.expect("||");)e=this.binaryFn(e,t.text,this.logicalAND(),!0);return e},logicalAND:function(){for(var t,e=this.equality();t=this.expect("&&");)e=this.binaryFn(e,t.text,this.equality(),!0);return e},equality:function(){for(var t,e=this.relational();t=this.expect("==","!=","===","!==");)e=this.binaryFn(e,t.text,this.relational());return e},relational:function(){for(var t,e=this.additive();t=this.expect("<",">","<=",">=");)e=this.binaryFn(e,t.text,this.additive());return e},additive:function(){for(var t,e=this.multiplicative();t=this.expect("+","-");)e=this.binaryFn(e,t.text,this.multiplicative());return e},multiplicative:function(){for(var t,e=this.unary();t=this.expect("*","/","%");)e=this.binaryFn(e,t.text,this.unary());return e},unary:function(){var t;return this.expect("+")?this.primary():(t=this.expect("-"))?this.binaryFn(ji.ZERO,t.text,this.unary()):(t=this.expect("!"))?this.unaryFn(t.text,this.unary()):this.primary()},fieldAccess:function(t){var e=this.identifier();return l(function(r,i,o){return r=o||t(r,i),null==r?n:e(r)},{assign:function(n,r,i){var o=t(n,i);return o||t.assign(n,o={},i),e.assign(o,r)}})},objectIndex:function(t){var e=this.text,r=this.expression();return this.consume("]"),l(function(i,o){var a=t(i,o),s=r(i,o);return gn(s,e),a?yn(a[s],e):n},{assign:function(n,i,o){var a=gn(r(n,o),e),s=yn(t(n,o),e);return s||t.assign(n,s={},o),s[a]=i}})},functionCall:function(t,e){var r=[];if(")"!==this.peekToken().text)do r.push(this.expression());while(this.expect(","));this.consume(")");var i=this.text,o=r.length?[]:null;return function(a,s){var u=e?e(a,s):v(e)?n:a,c=t(a,s,u)||$;if(o)for(var l=r.length;l--;)o[l]=yn(r[l](a,s),i);if(yn(u,i),c){if(c.constructor===c)throw ki("isecfn",i);if(c===Ei||c===Oi||c===Ti)throw ki("isecff",i)}return u=c.apply?c.apply(u,o):c(o[0],o[1],o[2],o[3],o[4]),o&&(o.length=0),yn(u,i)}},arrayDeclaration:function(){var t=[];if("]"!==this.peekToken().text)do{if(this.peek("]"))break;t.push(this.expression())}while(this.expect(","));return this.consume("]"),l(function(e,n){for(var r=[],i=0,o=t.length;o>i;i++)r.push(t[i](e,n));return r},{literal:!0,constant:t.every(wn),inputs:t})},object:function(){var t=[],e=[];if("}"!==this.peekToken().text)do{if(this.peek("}"))break;var n=this.consume();n.constant?t.push(n.value):n.identifier?t.push(n.text):this.throwError("invalid key",n),this.consume(":"),e.push(this.expression())}while(this.expect(","));return this.consume("}"),l(function(n,r){for(var i={},o=0,a=e.length;a>o;o++)i[t[o]]=e[o](n,r);return i},{literal:!0,constant:e.every(wn),inputs:e})}};var Pi=re(),Ri=re(),Ii=Object.prototype.valueOf,qi=r("$sce"),Ui={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},$i=r("$compile"),Fi=e.createElement("a"),Hi=_n(t.location.href);zn.$inject=["$provide"],Yn.$inject=["$locale"],Zn.$inject=["$locale"];var _i=".",Li={yyyy:Qn("FullYear",4),yy:Qn("FullYear",2,0,!0),y:Qn("FullYear",1),MMMM:tr("Month"),MMM:tr("Month",!0),MM:Qn("Month",2,1),M:Qn("Month",1,1),dd:Qn("Date",2),d:Qn("Date",1),HH:Qn("Hours",2),H:Qn("Hours",1),hh:Qn("Hours",2,-12),h:Qn("Hours",1,-12),mm:Qn("Minutes",2),m:Qn("Minutes",1),ss:Qn("Seconds",2),s:Qn("Seconds",1),sss:Qn("Milliseconds",3),EEEE:tr("Day"),EEE:tr("Day",!0),a:function(t,e){return 12>t.getHours()?e.AMPMS[0]:e.AMPMS[1]},Z:function(t){return t=-1*t.getTimezoneOffset(),t=(t>=0?"+":"")+(Xn(Math[t>0?"floor":"ceil"](t/60),2)+Xn(Math.abs(t%60),2))},ww:nr(2),w:nr(1),G:rr,GG:rr,GGG:rr,GGGG:function(t,e){return 0>=t.getFullYear()?e.ERANAMES[0]:e.ERANAMES[1]}},Bi=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,zi=/^\-?\d+$/;ir.$inject=["$locale"];var Gi=d(Cr),Wi=d(kr);sr.$inject=["$parse"];var Ji=d({restrict:"E",compile:function(t,e){return e.href||e.xlinkHref||e.name?void 0:function(t,e){if("a"===e[0].nodeName.toLowerCase()){var n="[object SVGAnimatedString]"===Mr.call(e.prop("href"))?"xlink:href":"href";e.on("click",function(t){e.attr(n)||t.preventDefault()})}}}}),Yi={};o(ri,function(t,e){if("multiple"!=t){var n=Fe("ng-"+e);Yi[n]=function(){return{restrict:"A",priority:100,link:function(t,r,i){t.$watch(i[n],function(t){i.$set(e,!!t)})}}}}}),o(oi,function(t,e){Yi[e]=function(){return{priority:100,link:function(t,n,r){return"ngPattern"===e&&"/"==r.ngPattern.charAt(0)&&(n=r.ngPattern.match(Sr))?void r.$set("ngPattern",new RegExp(n[1],n[2])):void t.$watch(r[e],function(t){r.$set(e,t)})}}}}),o(["src","srcset","href"],function(t){var e=Fe("ng-"+t);Yi[e]=function(){return{priority:99,link:function(n,r,i){var o=t,a=t;"href"===t&&"[object SVGAnimatedString]"===Mr.call(r.prop("href"))&&(a="xlinkHref",i.$attr[a]="xlink:href",o=null),i.$observe(e,function(e){e?(i.$set(a,e),yr&&o&&r.prop(o,i[a])):"href"===t&&i.$set(a,null)})}}}});var Zi={$addControl:$,$$renameControl:function(t,e){t.$name=e},$removeControl:$,$setValidity:$,$setDirty:$,$setPristine:$,$setSubmitted:$};cr.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Ki=function(t){return["$timeout",function(e){return{name:"form",restrict:t?"EAC":"E",controller:cr,compile:function(r,i){r.addClass(No).addClass(Mo);var o=i.name?"name":t&&i.ngForm?"ngForm":!1;return{pre:function(t,r,i,a){if(!("action"in i)){var s=function(e){t.$apply(function(){a.$commitViewValue(),a.$setSubmitted()}),e.preventDefault()};r[0].addEventListener("submit",s,!1),r.on("$destroy",function(){e(function(){r[0].removeEventListener("submit",s,!1)},0,!1)})}var u=a.$$parentForm;o&&(bn(t,null,a.$name,a,a.$name),i.$observe(o,function(e){a.$name!==e&&(bn(t,null,a.$name,n,a.$name),u.$$renameControl(a,e),bn(t,null,a.$name,a,a.$name))})),r.on("$destroy",function(){u.$removeControl(a),o&&bn(t,null,i[o],n,a.$name),l(a,Zi)})}}}}}]},Xi=Ki(),Qi=Ki(!0),to=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,eo=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,no=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,ro=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,io=/^(\d{4})-(\d{2})-(\d{2})$/,oo=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ao=/^(\d{4})-W(\d\d)$/,so=/^(\d{4})-(\d\d)$/,uo=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,co={text:function(t,e,n,r,i,o){fr(t,e,n,r,i,o),lr(r)},date:$r("date",io,hr(io,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":$r("datetimelocal",oo,hr(oo,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:$r("time",uo,hr(uo,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:$r("week",ao,function(t,e){if(b(t))return t;if(y(t)){ao.lastIndex=0;var n=ao.exec(t);if(n){var r=+n[1],i=+n[2],o=n=0,a=0,s=0,u=er(r),i=7*(i-1);return e&&(n=e.getHours(),o=e.getMinutes(),a=e.getSeconds(),s=e.getMilliseconds()),new Date(r,0,u.getDate()+i,n,o,a,s)}}return 0/0},"yyyy-Www"),month:$r("month",so,hr(so,["yyyy","MM"]),"yyyy-MM"),number:function(t,e,r,i,o,a){if(pr(t,e,r,i),fr(t,e,r,i,o,a),i.$$parserName="number",i.$parsers.push(function(t){return i.$isEmpty(t)?null:ro.test(t)?parseFloat(t):n}),i.$formatters.push(function(t){if(!i.$isEmpty(t)){if(!w(t))throw Po("numfmt",t);t=t.toString()}return t}),v(r.min)||r.ngMin){var s;i.$validators.min=function(t){return i.$isEmpty(t)||m(s)||t>=s},r.$observe("min",function(t){v(t)&&!w(t)&&(t=parseFloat(t,10)),s=w(t)&&!isNaN(t)?t:n,i.$validate()})}if(v(r.max)||r.ngMax){var u;i.$validators.max=function(t){return i.$isEmpty(t)||m(u)||u>=t},r.$observe("max",function(t){v(t)&&!w(t)&&(t=parseFloat(t,10)),u=w(t)&&!isNaN(t)?t:n,i.$validate()})}},url:function(t,e,n,r,i,o){fr(t,e,n,r,i,o),lr(r),r.$$parserName="url",r.$validators.url=function(t,e){var n=t||e;return r.$isEmpty(n)||eo.test(n)}},email:function(t,e,n,r,i,o){fr(t,e,n,r,i,o),lr(r),r.$$parserName="email",r.$validators.email=function(t,e){var n=t||e;return r.$isEmpty(n)||no.test(n)}},radio:function(t,e,n,r){m(n.name)&&e.attr("name",++Dr),e.on("click",function(t){e[0].checked&&r.$setViewValue(n.value,t&&t.type)}),r.$render=function(){e[0].checked=n.value==r.$viewValue},n.$observe("value",r.$render)},checkbox:function(t,e,n,r,i,o,a,s){var u=dr(s,t,"ngTrueValue",n.ngTrueValue,!0),c=dr(s,t,"ngFalseValue",n.ngFalseValue,!1);e.on("click",function(t){r.$setViewValue(e[0].checked,t&&t.type)}),r.$render=function(){e[0].checked=r.$viewValue},r.$isEmpty=function(t){return!1===t},r.$formatters.push(function(t){return D(t,u)}),r.$parsers.push(function(t){return t?u:c})},hidden:$,button:$,submit:$,reset:$,file:$},lo=["$browser","$sniffer","$filter","$parse",function(t,e,n,r){return{restrict:"E",require:["?ngModel"],link:{pre:function(i,o,a,s){s[0]&&(co[Cr(a.type)]||co.text)(i,o,a,s[0],e,t,n,r)}}}}],fo=/^(true|false|\d+)$/,ho=function(){return{restrict:"A",priority:100,compile:function(t,e){return fo.test(e.ngValue)?function(t,e,n){n.$set("value",t.$eval(n.ngValue))}:function(t,e,n){t.$watch(n.ngValue,function(t){n.$set("value",t)})}}}},$o=["$compile",function(t){return{restrict:"AC",compile:function(e){return t.$$addBindingClass(e),function(e,r,i){t.$$addBindingInfo(r,i.ngBind),r=r[0],e.$watch(i.ngBind,function(t){r.textContent=t===n?"":t})}}}}],po=["$interpolate","$compile",function(t,e){return{compile:function(r){return e.$$addBindingClass(r),function(r,i,o){r=t(i.attr(o.$attr.ngBindTemplate)),e.$$addBindingInfo(i,r.expressions),i=i[0],o.$observe("ngBindTemplate",function(t){i.textContent=t===n?"":t})}}}}],mo=["$sce","$parse","$compile",function(t,e,n){return{restrict:"A",compile:function(r,i){var o=e(i.ngBindHtml),a=e(i.ngBindHtml,function(t){return(t||"").toString()});return n.$$addBindingClass(r),function(e,r,i){n.$$addBindingInfo(r,i.ngBindHtml),e.$watch(a,function(){r.html(t.getTrustedHtml(o(e))||"")})}}}}],vo=d({restrict:"A",require:"ngModel",link:function(t,e,n,r){r.$viewChangeListeners.push(function(){t.$eval(n.ngChange)})}}),go=mr("",!0),yo=mr("Odd",0),wo=mr("Even",1),bo=ur({compile:function(t,e){e.$set("ngCloak",n),t.removeClass("ng-cloak")}}),xo=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],So={},Co={blur:!0,focus:!0};o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(t){var e=Fe("ng-"+t);So[e]=["$parse","$rootScope",function(n,r){return{restrict:"A",compile:function(i,o){var a=n(o[e],null,!0);return function(e,n){n.on(t,function(n){var i=function(){a(e,{$event:n})};Co[t]&&r.$$phase?e.$evalAsync(i):e.$apply(i)})}}}}]});var Ao=["$animate",function(t){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(n,r,i,o,a){var s,u,c;n.$watch(i.ngIf,function(n){n?u||a(function(n,o){u=o,n[n.length++]=e.createComment(" end ngIf: "+i.ngIf+" "),s={clone:n},t.enter(n,r.parent(),r)}):(c&&(c.remove(),c=null),u&&(u.$destroy(),u=null),s&&(c=ne(s.clone),t.leave(c).then(function(){c=null}),s=null))})}}}],ko=["$templateRequest","$anchorScroll","$animate","$sce",function(t,e,n,r){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Nr.noop,compile:function(i,o){var a=o.ngInclude||o.src,s=o.onload||"",u=o.autoscroll;return function(i,o,c,l,f){var h,$,p,d=0,m=function(){$&&($.remove(),$=null),h&&(h.$destroy(),h=null),p&&(n.leave(p).then(function(){$=null}),$=p,p=null)};i.$watch(r.parseAsResourceUrl(a),function(r){var a=function(){!v(u)||u&&!i.$eval(u)||e()},c=++d;r?(t(r,!0).then(function(t){if(c===d){var e=i.$new();l.template=t,t=f(e,function(t){m(),n.enter(t,null,o).then(a)}),h=e,p=t,h.$emit("$includeContentLoaded",r),i.$eval(s)}},function(){c===d&&(m(),i.$emit("$includeContentError",r))}),i.$emit("$includeContentRequested",r)):(m(),l.template=null)})}}}}],Eo=["$compile",function(t){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(n,r,i,o){/SVG/.test(r[0].toString())?(r.empty(),t(ue(o.template,e).childNodes)(n,function(t){r.append(t)},{futureParentElement:r})):(r.html(o.template),t(r.contents())(n))}}}],Oo=ur({priority:450,compile:function(){return{pre:function(t,e,n){t.$eval(n.ngInit)}}}}),To=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(t,e,r,i){var a=e.attr(r.$attr.ngList)||", ",s="false"!==r.ngTrim,u=s?Rr(a):a;i.$parsers.push(function(t){if(!m(t)){var e=[];return t&&o(t.split(u),function(t){t&&e.push(s?Rr(t):t)}),e}}),i.$formatters.push(function(t){return Pr(t)?t.join(a):n}),i.$isEmpty=function(t){return!t||!t.length}}}},Mo="ng-valid",Vo="ng-invalid",No="ng-pristine",Do="ng-dirty",jo="ng-pending",Po=new r("ngModel"),Ro=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(t,e,r,i,a,s,u,c,l,f){this.$modelValue=this.$viewValue=Number.NaN,this.$$rawModelValue=n,this.$validators={},this.$asyncValidators={},this.$parsers=[],this.$formatters=[],this.$viewChangeListeners=[],this.$untouched=!0,this.$touched=!1,this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$error={},this.$$success={},this.$pending=n,this.$name=f(r.name||"",!1)(t);var h,p=a(r.ngModel),d=p.assign,g=p,y=d,b=null,S=this;this.$$setOptions=function(t){if((S.$options=t)&&t.getterSetter){var e=a(r.ngModel+"()"),n=a(r.ngModel+"($$$p)");g=function(t){var n=p(t);return x(n)&&(n=e(t)),n},y=function(t){x(p(t))?n(t,{$$$p:S.$modelValue}):d(t,S.$modelValue)}}else if(!p.assign)throw Po("nonassign",r.ngModel,U(i))},this.$render=$,this.$isEmpty=function(t){return m(t)||""===t||null===t||t!==t};var C=i.inheritedData("$formController")||Zi,A=0;vr({ctrl:this,$element:i,set:function(t,e){t[e]=!0},unset:function(t,e){delete t[e]},parentForm:C,$animate:s}),this.$setPristine=function(){S.$dirty=!1,S.$pristine=!0,s.removeClass(i,Do),s.addClass(i,No)},this.$setDirty=function(){S.$dirty=!0,S.$pristine=!1,s.removeClass(i,No),s.addClass(i,Do),C.$setDirty()},this.$setUntouched=function(){S.$touched=!1,S.$untouched=!0,s.setClass(i,"ng-untouched","ng-touched")},this.$setTouched=function(){S.$touched=!0,S.$untouched=!1,s.setClass(i,"ng-touched","ng-untouched")},this.$rollbackViewValue=function(){u.cancel(b),S.$viewValue=S.$$lastCommittedViewValue,S.$render()},this.$validate=function(){if(!w(S.$modelValue)||!isNaN(S.$modelValue)){var t=S.$$rawModelValue,e=S.$valid,r=S.$modelValue,i=S.$options&&S.$options.allowInvalid;S.$$runValidators(t,S.$$lastCommittedViewValue,function(o){i||e===o||(S.$modelValue=o?t:n,S.$modelValue!==r&&S.$$writeModelToScope())})}},this.$$runValidators=function(t,e,r){function i(){var n=!0;return o(S.$validators,function(r,i){var o=r(t,e);n=n&&o,s(i,o)}),n?!0:(o(S.$asyncValidators,function(t,e){s(e,null)}),!1)}function a(){var r=[],i=!0;o(S.$asyncValidators,function(o,a){var u=o(t,e);if(!u||!x(u.then))throw Po("$asyncValidators",u);s(a,n),r.push(u.then(function(){s(a,!0)},function(){i=!1,s(a,!1)}))}),r.length?l.all(r).then(function(){u(i)},$):u(!0)}function s(t,e){c===A&&S.$setValidity(t,e)}function u(t){c===A&&r(t)}A++;var c=A;(function(){var t=S.$$parserName||"parse";return h!==n?(h||(o(S.$validators,function(t,e){s(e,null)}),o(S.$asyncValidators,function(t,e){s(e,null)})),s(t,h),h):(s(t,null),!0)})()&&i()?a():u(!1)},this.$commitViewValue=function(){var t=S.$viewValue;u.cancel(b),(S.$$lastCommittedViewValue!==t||""===t&&S.$$hasNativeValidators)&&(S.$$lastCommittedViewValue=t,S.$pristine&&this.$setDirty(),this.$$parseAndValidate())},this.$$parseAndValidate=function(){var e=S.$$lastCommittedViewValue;if(h=m(e)?n:!0)for(var r=0;r<S.$parsers.length;r++)if(e=S.$parsers[r](e),m(e)){h=!1;break}w(S.$modelValue)&&isNaN(S.$modelValue)&&(S.$modelValue=g(t));var i=S.$modelValue,o=S.$options&&S.$options.allowInvalid;S.$$rawModelValue=e,o&&(S.$modelValue=e,S.$modelValue!==i&&S.$$writeModelToScope()),S.$$runValidators(e,S.$$lastCommittedViewValue,function(t){o||(S.$modelValue=t?e:n,S.$modelValue!==i&&S.$$writeModelToScope())})},this.$$writeModelToScope=function(){y(t,S.$modelValue),o(S.$viewChangeListeners,function(t){try{t()}catch(n){e(n)}})},this.$setViewValue=function(t,e){S.$viewValue=t,S.$options&&!S.$options.updateOnDefault||S.$$debounceViewValueCommit(e)},this.$$debounceViewValueCommit=function(e){var n=0,r=S.$options;r&&v(r.debounce)&&(r=r.debounce,w(r)?n=r:w(r[e])?n=r[e]:w(r["default"])&&(n=r["default"])),u.cancel(b),n?b=u(function(){S.$commitViewValue()},n):c.$$phase?S.$commitViewValue():t.$apply(function(){S.$commitViewValue()})},t.$watch(function(){var e=g(t);if(e!==S.$modelValue){S.$modelValue=S.$$rawModelValue=e,h=n;for(var r=S.$formatters,i=r.length,o=e;i--;)o=r[i](o);S.$viewValue!==o&&(S.$viewValue=S.$$lastCommittedViewValue=o,S.$render(),S.$$runValidators(e,o,$))}return e})}],Io=["$rootScope",function(t){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Ro,priority:1,compile:function(e){return e.addClass(No).addClass("ng-untouched").addClass(Mo),{pre:function(t,e,n,r){var i=r[0],o=r[1]||Zi;i.$$setOptions(r[2]&&r[2].$options),o.$addControl(i),n.$observe("name",function(t){i.$name!==t&&o.$$renameControl(i,t)}),t.$on("$destroy",function(){o.$removeControl(i)})},post:function(e,n,r,i){var o=i[0];o.$options&&o.$options.updateOn&&n.on(o.$options.updateOn,function(t){o.$$debounceViewValueCommit(t&&t.type)}),n.on("blur",function(){o.$touched||(t.$$phase?e.$evalAsync(o.$setTouched):e.$apply(o.$setTouched))})}}}}}],qo=/(\s+|^)default(\s+|$)/,Uo=function(){return{restrict:"A",controller:["$scope","$attrs",function(t,e){var r=this;this.$options=t.$eval(e.ngModelOptions),this.$options.updateOn!==n?(this.$options.updateOnDefault=!1,this.$options.updateOn=Rr(this.$options.updateOn.replace(qo,function(){return r.$options.updateOnDefault=!0," "}))):this.$options.updateOnDefault=!0}]}},Fo=ur({terminal:!0,priority:1e3}),Ho=["$locale","$interpolate",function(t,e){var n=/{}/g,r=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(i,a,s){function u(t){a.text(t||"")}var c,l=s.count,f=s.$attr.when&&a.attr(s.$attr.when),h=s.offset||0,$=i.$eval(f)||{},p={},f=e.startSymbol(),d=e.endSymbol(),m=f+l+"-"+h+d,v=Nr.noop;o(s,function(t,e){var n=r.exec(e);n&&(n=(n[1]?"-":"")+Cr(n[2]),$[n]=a.attr(s.$attr[e]))}),o($,function(t,r){p[r]=e(t.replace(n,m))}),i.$watch(l,function(e){e=parseFloat(e);var n=isNaN(e);n||e in $||(e=t.pluralCat(e-h)),e===c||n&&isNaN(c)||(v(),v=i.$watch(p[e],u),c=e)})}}}],_o=["$parse","$animate",function(t,a){var s=r("ngRepeat"),u=function(t,e,n,r,i,o,a){t[n]=r,i&&(t[i]=o),t.$index=e,t.$first=0===e,t.$last=e===a-1,t.$middle=!(t.$first||t.$last),t.$odd=!(t.$even=0===(1&e))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,compile:function(r,c){var l=c.ngRepeat,f=e.createComment(" end ngRepeat: "+l+" "),h=l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!h)throw s("iexp",l);var $=h[1],p=h[2],d=h[3],m=h[4],h=$.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!h)throw s("iidexp",$);var v=h[3]||h[1],g=h[2];if(d&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(d)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(d)))throw s("badident",d);var y,w,b,x,S={$id:Te};return m?y=t(m):(b=function(t,e){return Te(e)},x=function(t){return t}),function(t,e,r,c,h){y&&(w=function(e,n,r){return g&&(S[g]=e),S[v]=n,S.$index=r,y(t,S)});var $=re();t.$watchCollection(p,function(r){var c,p,m,y,S,C,A,k,E,O,T=e[0],M=re();if(d&&(t[d]=r),i(r))k=r,p=w||b;else{p=w||x,k=[];for(O in r)r.hasOwnProperty(O)&&"$"!=O.charAt(0)&&k.push(O);k.sort()}for(y=k.length,O=Array(y),c=0;y>c;c++)if(S=r===k?c:k[c],C=r[S],A=p(S,C,c),$[A])E=$[A],delete $[A],M[A]=E,O[c]=E;else{if(M[A])throw o(O,function(t){t&&t.scope&&($[t.id]=t)}),s("dupes",l,A,C);O[c]={id:A,scope:n,clone:n},M[A]=!0}for(m in $){if(E=$[m],A=ne(E.clone),a.leave(A),A[0].parentNode)for(c=0,p=A.length;p>c;c++)A[c].$$NG_REMOVED=!0;E.scope.$destroy()}for(c=0;y>c;c++)if(S=r===k?c:k[c],C=r[S],E=O[c],E.scope){m=T;do m=m.nextSibling;while(m&&m.$$NG_REMOVED);E.clone[0]!=m&&a.move(ne(E.clone),null,wr(T)),T=E.clone[E.clone.length-1],u(E.scope,c,v,C,g,S,y)}else h(function(t,e){E.scope=e;var n=f.cloneNode(!1);t[t.length++]=n,a.enter(t,null,wr(T)),T=n,E.clone=t,M[E.id]=E,u(E.scope,c,v,C,g,S,y)});$=M})}}}}],Lo=["$animate",function(t){return{restrict:"A",multiElement:!0,link:function(e,n,r){e.$watch(r.ngShow,function(e){t[e?"removeClass":"addClass"](n,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Bo=["$animate",function(t){return{restrict:"A",multiElement:!0,link:function(e,n,r){e.$watch(r.ngHide,function(e){t[e?"addClass":"removeClass"](n,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],zo=ur(function(t,e,n){t.$watchCollection(n.ngStyle,function(t,n){n&&t!==n&&o(n,function(t,n){e.css(n,"")}),t&&e.css(t)})}),Go=["$animate",function(t){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(n,r,i,a){var s=[],u=[],c=[],l=[],f=function(t,e){return function(){t.splice(e,1)}};n.$watch(i.ngSwitch||i.on,function(n){var r,i;for(r=0,i=c.length;i>r;++r)t.cancel(c[r]);for(r=c.length=0,i=l.length;i>r;++r){var h=ne(u[r].clone);l[r].$destroy(),(c[r]=t.leave(h)).then(f(c,r))}u.length=0,l.length=0,(s=a.cases["!"+n]||a.cases["?"])&&o(s,function(n){n.transclude(function(r,i){l.push(i);var o=n.element;r[r.length++]=e.createComment(" end ngSwitchWhen: "),u.push({clone:r}),t.enter(r,o.parent(),o)})})})}}}],Wo=ur({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(t,e,n,r,i){r.cases["!"+n.ngSwitchWhen]=r.cases["!"+n.ngSwitchWhen]||[],r.cases["!"+n.ngSwitchWhen].push({transclude:i,element:e})}}),Jo=ur({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(t,e,n,r,i){r.cases["?"]=r.cases["?"]||[],r.cases["?"].push({transclude:i,element:e})}}),Yo=ur({restrict:"EAC",link:function(t,e,n,i,o){if(!o)throw r("ngTransclude")("orphan",U(e));o(function(t){e.empty(),e.append(t)})}}),Zo=["$templateCache",function(t){return{restrict:"E",terminal:!0,compile:function(e,n){"text/ng-template"==n.type&&t.put(n.id,e[0].text)}}}],Ko=r("ngOptions"),Xo=d({restrict:"A",terminal:!0}),Qo=["$compile","$parse",function(t,r){var i=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,a={$setViewValue:$};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(t,e,n){var r,i=this,o={},s=a;i.databound=n.ngModel,i.init=function(t,e,n){s=t,r=n},i.addOption=function(e,n){te(e,'"option value"'),o[e]=!0,s.$viewValue==e&&(t.val(e),r.parent()&&r.remove()),n&&n[0].hasAttribute("selected")&&(n[0].selected=!0)},i.removeOption=function(t){this.hasOption(t)&&(delete o[t],s.$viewValue===t&&this.renderUnknownOption(t))},i.renderUnknownOption=function(e){e="? "+Te(e)+" ?",r.val(e),t.prepend(r),t.val(e),r.prop("selected",!0)},i.hasOption=function(t){return o.hasOwnProperty(t)},e.$on("$destroy",function(){i.renderUnknownOption=$})}],link:function(a,s,u,c){function l(t,e,n,r){n.$render=function(){var t=n.$viewValue;r.hasOption(t)?(S.parent()&&S.remove(),e.val(t),""===t&&p.prop("selected",!0)):m(t)&&p?e.val(""):r.renderUnknownOption(t)},e.on("change",function(){t.$apply(function(){S.parent()&&S.remove(),n.$setViewValue(e.val())})})}function f(t,e,n){var r;n.$render=function(){var t=new Me(n.$viewValue);o(e.find("option"),function(e){e.selected=v(t.get(e.value))})},t.$watch(function(){D(r,n.$viewValue)||(r=N(n.$viewValue),n.$render())}),e.on("change",function(){t.$apply(function(){var t=[];o(e.find("option"),function(e){e.selected&&t.push(e.value)}),n.$setViewValue(t)})})}function h(e,a,s){function u(t,n,r){return D[S]=r,k&&(D[k]=n),t(e,D)}function c(t){var e;if(d)if(M&&Pr(t)){e=new Me([]);for(var n=0;n<t.length;n++)e.put(u(M,null,t[n]),!0)}else e=new Me(t);else M&&(t=u(M,null,t));return function(n,r){var i;return i=M?M:A?A:O,d?v(e.remove(u(i,n,r))):t===u(i,n,r)}}function l(){w||(e.$$postDigest(h),w=!0)}function f(t,e,n){t[e]=t[e]||0,t[e]+=n?1:-1}function h(){w=!1;var t,n,r,i,l,h={"":[]},p=[""];r=s.$viewValue,i=T(e)||[];var g,S,C,A,O=k?Object.keys(i).sort():i,j={};l=c(r);var P,R,I=!1;for(V={},A=0;C=O.length,C>A;A++)g=A,k&&(g=O[A],"$"===g.charAt(0))||(S=i[g],t=u(E,g,S)||"",(n=h[t])||(n=h[t]=[],p.push(t)),t=l(g,S),I=I||t,S=u(m,g,S),S=v(S)?S:"",R=M?M(e,D):k?O[A]:A,M&&(V[R]=g),n.push({id:R,label:S,selected:t}));for(d||(y||null===r?h[""].unshift({id:"",label:"",selected:!I}):I||h[""].unshift({id:"?",label:"",selected:!0})),g=0,O=p.length;O>g;g++){for(t=p[g],n=h[t],N.length<=g?(r={element:x.clone().attr("label",t),label:n.label},i=[r],N.push(i),a.append(r.element)):(i=N[g],r=i[0],r.label!=t&&r.element.attr("label",r.label=t)),I=null,A=0,C=n.length;C>A;A++)t=n[A],(l=i[A+1])?(I=l.element,l.label!==t.label&&(f(j,l.label,!1),f(j,t.label,!0),I.text(l.label=t.label),I.prop("label",l.label)),l.id!==t.id&&I.val(l.id=t.id),I[0].selected!==t.selected&&(I.prop("selected",l.selected=t.selected),yr&&I.prop("selected",l.selected))):(""===t.id&&y?P=y:(P=b.clone()).val(t.id).prop("selected",t.selected).attr("selected",t.selected).prop("label",t.label).text(t.label),i.push(l={element:P,label:t.label,id:t.id,selected:t.selected}),f(j,t.label,!0),I?I.after(P):r.element.append(P),I=P);for(A++;i.length>A;)t=i.pop(),f(j,t.label,!1),t.element.remove()}for(;N.length>g;){for(n=N.pop(),A=1;A<n.length;++A)f(j,n[A].label,!1);n[0].element.remove()}o(j,function(t,e){t>0?$.addOption(e):0>t&&$.removeOption(e)})}var p;if(!(p=g.match(i)))throw Ko("iexp",g,U(a));var m=r(p[2]||p[1]),S=p[4]||p[6],C=/ as /.test(p[0])&&p[1],A=C?r(C):null,k=p[5],E=r(p[3]||""),O=r(p[2]?p[1]:S),T=r(p[7]),M=p[8]?r(p[8]):null,V={},N=[[{element:a,label:""}]],D={};y&&(t(y)(e),y.removeClass("ng-scope"),y.remove()),a.empty(),a.on("change",function(){e.$apply(function(){var t,r=T(e)||[];if(d)t=[],o(a.val(),function(e){e=M?V[e]:e,t.push("?"===e?n:""===e?null:u(A?A:O,e,r[e]))});else{var i=M?V[a.val()]:a.val();t="?"===i?n:""===i?null:u(A?A:O,i,r[i])}s.$setViewValue(t),h()})}),s.$render=h,e.$watchCollection(T,l),e.$watchCollection(function(){var t,n=T(e);if(n&&Pr(n)){t=Array(n.length);for(var r=0,i=n.length;i>r;r++)t[r]=u(m,r,n[r])}else if(n)for(r in t={},n)n.hasOwnProperty(r)&&(t[r]=u(m,r,n[r]));return t},l),d&&e.$watchCollection(function(){return s.$modelValue},l)}if(c[1]){var $=c[0];c=c[1];var p,d=u.multiple,g=u.ngOptions,y=!1,w=!1,b=wr(e.createElement("option")),x=wr(e.createElement("optgroup")),S=b.clone();u=0;for(var C=s.children(),A=C.length;A>u;u++)if(""===C[u].value){p=y=C.eq(u);break}$.init(c,y,S),d&&(c.$isEmpty=function(t){return!t||0===t.length}),g?h(a,s,c):d?f(a,s,c):l(a,s,c,$)}}}}],ta=["$interpolate",function(t){var e={addOption:$,removeOption:$};return{restrict:"E",priority:100,compile:function(n,r){if(m(r.value)){var i=t(n.text(),!0);i||r.$set("value",n.text())}return function(t,n,r){var o=n.parent(),a=o.data("$selectController")||o.parent().data("$selectController");a&&a.databound||(a=e),i?t.$watch(i,function(t,e){r.$set("value",t),e!==t&&a.removeOption(e),a.addOption(t,n)}):a.addOption(r.value,n),n.on("$destroy",function(){a.removeOption(r.value)})}}}}],ea=d({restrict:"E",terminal:!1}),na=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){r&&(n.required=!0,r.$validators.required=function(t,e){return!n.required||!r.$isEmpty(e)},n.$observe("required",function(){r.$validate()}))}}},ra=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,i,o){if(o){var a,s=i.ngPattern||i.pattern;i.$observe("pattern",function(t){if(y(t)&&0<t.length&&(t=new RegExp("^"+t+"$")),t&&!t.test)throw r("ngPattern")("noregexp",s,t,U(e));a=t||n,o.$validate()}),o.$validators.pattern=function(t){return o.$isEmpty(t)||m(a)||a.test(t)}}}}},ia=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){if(r){var i=-1;n.$observe("maxlength",function(t){t=f(t),i=isNaN(t)?-1:t,r.$validate()}),r.$validators.maxlength=function(t,e){return 0>i||r.$isEmpty(e)||e.length<=i}}}}},oa=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){if(r){var i=0;n.$observe("minlength",function(t){i=f(t)||0,r.$validate()}),r.$validators.minlength=function(t,e){return r.$isEmpty(e)||e.length>=i}}}}};t.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(K(),oe(Nr),wr(e).ready(function(){G(e,W)}))}(window,document),!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
/*
 AngularJS v1.5.8
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
 */
(function(P,d){'use strict';function G(t,g){g=g||{};d.forEach(g,function(d,q){delete g[q]});for(var q in t)!t.hasOwnProperty(q)||"$"===q.charAt(0)&&"$"===q.charAt(1)||(g[q]=t[q]);return g}var z=d.$$minErr("$resource"),M=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;d.module("ngResource",["ng"]).provider("$resource",function(){var t=/^https?:\/\/[^\/]*/,g=this;this.defaults={stripTrailingSlashes:!0,cancellable:!1,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},
    "delete":{method:"DELETE"}}};this.$get=["$http","$log","$q","$timeout",function(q,L,H,I){function A(d,h){return encodeURIComponent(d).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,h?"%20":"+")}function B(d,h){this.template=d;this.defaults=v({},g.defaults,h);this.urlParams={}}function J(e,h,n,k){function b(a,c){var b={};c=v({},h,c);u(c,function(c,h){x(c)&&(c=c(a));var f;if(c&&c.charAt&&"@"==c.charAt(0)){f=a;var l=c.substr(1);if(null==l||""===l||"hasOwnProperty"===
    l||!M.test("."+l))throw z("badmember",l);for(var l=l.split("."),m=0,k=l.length;m<k&&d.isDefined(f);m++){var r=l[m];f=null!==f?f[r]:void 0}}else f=c;b[h]=f});return b}function N(a){return a.resource}function m(a){G(a||{},this)}var t=new B(e,k);n=v({},g.defaults.actions,n);m.prototype.toJSON=function(){var a=v({},this);delete a.$promise;delete a.$resolved;return a};u(n,function(a,c){var h=/^(POST|PUT|PATCH)$/i.test(a.method),e=a.timeout,E=d.isDefined(a.cancellable)?a.cancellable:k&&d.isDefined(k.cancellable)?
    k.cancellable:g.defaults.cancellable;e&&!d.isNumber(e)&&(L.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."),delete a.timeout,e=null);m[c]=function(f,l,k,g){var r={},n,w,C;switch(arguments.length){case 4:C=g,w=k;case 3:case 2:if(x(l)){if(x(f)){w=f;C=l;break}w=l;C=k}else{r=f;n=l;w=k;break}case 1:x(f)?
    w=f:h?n=f:r=f;break;case 0:break;default:throw z("badargs",arguments.length);}var D=this instanceof m,p=D?n:a.isArray?[]:new m(n),s={},A=a.interceptor&&a.interceptor.response||N,B=a.interceptor&&a.interceptor.responseError||void 0,y,F;u(a,function(a,c){switch(c){default:s[c]=O(a);case "params":case "isArray":case "interceptor":case "cancellable":}});!D&&E&&(y=H.defer(),s.timeout=y.promise,e&&(F=I(y.resolve,e)));h&&(s.data=n);t.setUrlParams(s,v({},b(n,a.params||{}),r),a.url);r=q(s).then(function(f){var b=
    f.data;if(b){if(d.isArray(b)!==!!a.isArray)throw z("badcfg",c,a.isArray?"array":"object",d.isArray(b)?"array":"object",s.method,s.url);if(a.isArray)p.length=0,u(b,function(a){"object"===typeof a?p.push(new m(a)):p.push(a)});else{var l=p.$promise;G(b,p);p.$promise=l}}f.resource=p;return f},function(a){(C||K)(a);return H.reject(a)});r["finally"](function(){p.$resolved=!0;!D&&E&&(p.$cancelRequest=d.noop,I.cancel(F),y=F=s.timeout=null)});r=r.then(function(a){var c=A(a);(w||K)(c,a.headers);return c},B);
    return D?r:(p.$promise=r,p.$resolved=!1,E&&(p.$cancelRequest=y.resolve),p)};m.prototype["$"+c]=function(a,b,d){x(a)&&(d=b,b=a,a={});a=m[c].call(this,a,this,b,d);return a.$promise||a}});m.bind=function(a){return J(e,v({},h,a),n)};return m}var K=d.noop,u=d.forEach,v=d.extend,O=d.copy,x=d.isFunction;B.prototype={setUrlParams:function(e,h,n){var k=this,b=n||k.template,g,m,q="",a=k.urlParams={};u(b.split(/\W/),function(c){if("hasOwnProperty"===c)throw z("badname");!/^\d+$/.test(c)&&c&&(new RegExp("(^|[^\\\\]):"+
    c+"(\\W|$)")).test(b)&&(a[c]={isQueryParamValue:(new RegExp("\\?.*=:"+c+"(?:\\W|$)")).test(b)})});b=b.replace(/\\:/g,":");b=b.replace(t,function(a){q=a;return""});h=h||{};u(k.urlParams,function(a,e){g=h.hasOwnProperty(e)?h[e]:k.defaults[e];d.isDefined(g)&&null!==g?(m=a.isQueryParamValue?A(g,!0):A(g,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),b=b.replace(new RegExp(":"+e+"(\\W|$)","g"),function(a,c){return m+c})):b=b.replace(new RegExp("(/?):"+e+"(\\W|$)","g"),function(a,c,b){return"/"==
b.charAt(0)?b:c+b})});k.defaults.stripTrailingSlashes&&(b=b.replace(/\/+$/,"")||"/");b=b.replace(/\/\.(?=\w+($|\?))/,".");e.url=q+b.replace(/\/\\\./,"/.");u(h,function(a,b){k.urlParams[b]||(e.params=e.params||{},e.params[b]=a)})}};return J}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map
/*
 AngularJS v1.5.8
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
 */
(function(E,d){'use strict';function y(t,l,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(b,e,a,c,k){function p(){m&&(g.cancel(m),m=null);h&&(h.$destroy(),h=null);n&&(m=g.leave(n),m.then(function(){m=null}),n=null)}function B(){var a=t.current&&t.current.locals;if(d.isDefined(a&&a.$template)){var a=b.$new(),c=t.current;n=k(a,function(a){g.enter(a,null,n||e).then(function(){!d.isDefined(A)||A&&!b.$eval(A)||l()});p()});h=c.scope=a;h.$emit("$viewContentLoaded");
    h.$eval(s)}else p()}var h,n,m,A=a.autoscroll,s=a.onload||"";b.$on("$routeChangeSuccess",B);B()}}}function w(d,l,g){return{restrict:"ECA",priority:-400,link:function(b,e){var a=g.current,c=a.locals;e.html(c.$template);var k=d(e.contents());if(a.controller){c.$scope=b;var p=l(a.controller,c);a.controllerAs&&(b[a.controllerAs]=p);e.data("$ngControllerController",p);e.children().data("$ngControllerController",p)}b[a.resolveAs||"$resolve"]=c;k(b)}}}var x,C,s=d.module("ngRoute",["ng"]).provider("$route",
    function(){function t(b,e){return d.extend(Object.create(b),e)}function l(b,d){var a=d.caseInsensitiveMatch,c={originalPath:b,regexp:b},g=c.keys=[];b=b.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)(\*\?|[\?\*])?/g,function(b,a,d,c){b="?"===c||"*?"===c?"?":null;c="*"===c||"*?"===c?"*":null;g.push({name:d,optional:!!b});a=a||"";return""+(b?"":a)+"(?:"+(b?a:"")+(c&&"(.+?)"||"([^/]+)")+(b||"")+")"+(b||"")}).replace(/([\/$\*])/g,"\\$1");c.regexp=new RegExp("^"+b+"$",a?"i":"");return c}x=d.isArray;C=
        d.isObject;var g={};this.when=function(b,e){var a;a=void 0;if(x(e)){a=a||[];for(var c=0,k=e.length;c<k;c++)a[c]=e[c]}else if(C(e))for(c in a=a||{},e)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=e[c];a=a||e;d.isUndefined(a.reloadOnSearch)&&(a.reloadOnSearch=!0);d.isUndefined(a.caseInsensitiveMatch)&&(a.caseInsensitiveMatch=this.caseInsensitiveMatch);g[b]=d.extend(a,b&&l(b,a));b&&(c="/"==b[b.length-1]?b.substr(0,b.length-1):b+"/",g[c]=d.extend({redirectTo:b},l(c,a)));return this};this.caseInsensitiveMatch=
        !1;this.otherwise=function(b){"string"===typeof b&&(b={redirectTo:b});this.when(null,b);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(b,e,a,c,k,p,l){function h(a){var f=v.current;(x=(r=y())&&f&&r.$$route===f.$$route&&d.equals(r.pathParams,f.pathParams)&&!r.reloadOnSearch&&!z)||!f&&!r||b.$broadcast("$routeChangeStart",r,f).defaultPrevented&&a&&a.preventDefault()}function n(){var u=v.current,f=r;if(x)u.params=f.params,d.copy(u.params,
        a),b.$broadcast("$routeUpdate",u);else if(f||u)z=!1,(v.current=f)&&f.redirectTo&&(d.isString(f.redirectTo)?e.path(w(f.redirectTo,f.params)).search(f.params).replace():e.url(f.redirectTo(f.pathParams,e.path(),e.search())).replace()),c.when(f).then(m).then(function(c){f==v.current&&(f&&(f.locals=c,d.copy(f.params,a)),b.$broadcast("$routeChangeSuccess",f,u))},function(a){f==v.current&&b.$broadcast("$routeChangeError",f,u,a)})}function m(a){if(a){var b=d.extend({},a.resolve);d.forEach(b,function(a,c){b[c]=
        d.isString(a)?k.get(a):k.invoke(a,null,null,c)});a=s(a);d.isDefined(a)&&(b.$template=a);return c.all(b)}}function s(a){var b,c;d.isDefined(b=a.template)?d.isFunction(b)&&(b=b(a.params)):d.isDefined(c=a.templateUrl)&&(d.isFunction(c)&&(c=c(a.params)),d.isDefined(c)&&(a.loadedTemplateUrl=l.valueOf(c),b=p(c)));return b}function y(){var a,b;d.forEach(g,function(c,g){var q;if(q=!b){var h=e.path();q=c.keys;var l={};if(c.regexp)if(h=c.regexp.exec(h)){for(var k=1,p=h.length;k<p;++k){var m=q[k-1],n=h[k];m&&
    n&&(l[m.name]=n)}q=l}else q=null;else q=null;q=a=q}q&&(b=t(c,{params:d.extend({},e.search(),a),pathParams:a}),b.$$route=c)});return b||g[null]&&t(g[null],{params:{},pathParams:{}})}function w(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var e=a.match(/(\w+)(?:[?*])?(.*)/),g=e[1];c.push(b[g]);c.push(e[2]||"");delete b[g]}});return c.join("")}var z=!1,r,x,v={routes:g,reload:function(){z=!0;var a={defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=
        !0;z=!1}};b.$evalAsync(function(){h(a);a.defaultPrevented||n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),e.path(w(this.current.$$route.originalPath,a)),e.search(a);else throw D("norout");}};b.$on("$locationChangeStart",h);b.$on("$locationChangeSuccess",n);return v}]}),D=d.$$minErr("ngRoute");s.provider("$routeParams",function(){this.$get=function(){return{}}});s.directive("ngView",y);s.directive("ngView",w);y.$inject=["$route","$anchorScroll",
    "$animate"];w.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 2.4.0 - 2016-12-29
 * License: MIT
 */angular.module("ui.bootstrap", ["ui.bootstrap.collapse","ui.bootstrap.tabindex","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.isClass","ui.bootstrap.datepicker","ui.bootstrap.position","ui.bootstrap.datepickerPopup","ui.bootstrap.debounce","ui.bootstrap.multiMap","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.paging","ui.bootstrap.pager","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]);
angular.module('ui.bootstrap.collapse', [])

  .directive('uibCollapse', ['$animate', '$q', '$parse', '$injector', function($animate, $q, $parse, $injector) {
    var $animateCss = $injector.has('$animateCss') ? $injector.get('$animateCss') : null;
    return {
      link: function(scope, element, attrs) {
        var expandingExpr = $parse(attrs.expanding),
          expandedExpr = $parse(attrs.expanded),
          collapsingExpr = $parse(attrs.collapsing),
          collapsedExpr = $parse(attrs.collapsed),
          horizontal = false,
          css = {},
          cssTo = {};

        init();

        function init() {
          horizontal = !!('horizontal' in attrs);
          if (horizontal) {
            css = {
              width: ''
            };
            cssTo = {width: '0'};
          } else {
            css = {
              height: ''
            };
            cssTo = {height: '0'};
          }
          if (!scope.$eval(attrs.uibCollapse)) {
            element.addClass('in')
              .addClass('collapse')
              .attr('aria-expanded', true)
              .attr('aria-hidden', false)
              .css(css);
          }
        }

        function getScrollFromElement(element) {
          if (horizontal) {
            return {width: element.scrollWidth + 'px'};
          }
          return {height: element.scrollHeight + 'px'};
        }

        function expand() {
          if (element.hasClass('collapse') && element.hasClass('in')) {
            return;
          }

          $q.resolve(expandingExpr(scope))
            .then(function() {
              element.removeClass('collapse')
                .addClass('collapsing')
                .attr('aria-expanded', true)
                .attr('aria-hidden', false);

              if ($animateCss) {
                $animateCss(element, {
                  addClass: 'in',
                  easing: 'ease',
                  css: {
                    overflow: 'hidden'
                  },
                  to: getScrollFromElement(element[0])
                }).start()['finally'](expandDone);
              } else {
                $animate.addClass(element, 'in', {
                  css: {
                    overflow: 'hidden'
                  },
                  to: getScrollFromElement(element[0])
                }).then(expandDone);
              }
            });
        }

        function expandDone() {
          element.removeClass('collapsing')
            .addClass('collapse')
            .css(css);
          expandedExpr(scope);
        }

        function collapse() {
          if (!element.hasClass('collapse') && !element.hasClass('in')) {
            return collapseDone();
          }

          $q.resolve(collapsingExpr(scope))
            .then(function() {
              element
              // IMPORTANT: The width must be set before adding "collapsing" class.
              // Otherwise, the browser attempts to animate from width 0 (in
              // collapsing class) to the given width here.
                .css(getScrollFromElement(element[0]))
                // initially all panel collapse have the collapse class, this removal
                // prevents the animation from jumping to collapsed state
                .removeClass('collapse')
                .addClass('collapsing')
                .attr('aria-expanded', false)
                .attr('aria-hidden', true);

              if ($animateCss) {
                $animateCss(element, {
                  removeClass: 'in',
                  to: cssTo
                }).start()['finally'](collapseDone);
              } else {
                $animate.removeClass(element, 'in', {
                  to: cssTo
                }).then(collapseDone);
              }
            });
        }

        function collapseDone() {
          element.css(cssTo); // Required so that collapse works when animation is disabled
          element.removeClass('collapsing')
            .addClass('collapse');
          collapsedExpr(scope);
        }

        scope.$watch(attrs.uibCollapse, function(shouldCollapse) {
          if (shouldCollapse) {
            collapse();
          } else {
            expand();
          }
        });
      }
    };
  }]);

angular.module('ui.bootstrap.tabindex', [])

.directive('uibTabindexToggle', function() {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      attrs.$observe('disabled', function(disabled) {
        attrs.$set('tabindex', disabled ? -1 : null);
      });
    }
  };
});

angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse', 'ui.bootstrap.tabindex'])

.constant('uibAccordionConfig', {
  closeOthers: true
})

.controller('UibAccordionController', ['$scope', '$attrs', 'uibAccordionConfig', function($scope, $attrs, accordionConfig) {
  // This array keeps track of the accordion groups
  this.groups = [];

  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
  this.closeOthers = function(openGroup) {
    var closeOthers = angular.isDefined($attrs.closeOthers) ?
      $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
    if (closeOthers) {
      angular.forEach(this.groups, function(group) {
        if (group !== openGroup) {
          group.isOpen = false;
        }
      });
    }
  };

  // This is called from the accordion-group directive to add itself to the accordion
  this.addGroup = function(groupScope) {
    var that = this;
    this.groups.push(groupScope);

    groupScope.$on('$destroy', function(event) {
      that.removeGroup(groupScope);
    });
  };

  // This is called from the accordion-group directive when to remove itself
  this.removeGroup = function(group) {
    var index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  };
}])

// The accordion directive simply sets up the directive controller
// and adds an accordion CSS class to itself element.
.directive('uibAccordion', function() {
  return {
    controller: 'UibAccordionController',
    controllerAs: 'accordion',
    transclude: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/accordion/accordion.html';
    }
  };
})

// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
.directive('uibAccordionGroup', function() {
  return {
    require: '^uibAccordion',         // We need this directive to be inside an accordion
    transclude: true,              // It transcludes the contents of the directive into the template
    restrict: 'A',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/accordion/accordion-group.html';
    },
    scope: {
      heading: '@',               // Interpolate the heading attribute onto this scope
      panelClass: '@?',           // Ditto with panelClass
      isOpen: '=?',
      isDisabled: '=?'
    },
    controller: function() {
      this.setHeading = function(element) {
        this.heading = element;
      };
    },
    link: function(scope, element, attrs, accordionCtrl) {
      element.addClass('panel');
      accordionCtrl.addGroup(scope);

      scope.openClass = attrs.openClass || 'panel-open';
      scope.panelClass = attrs.panelClass || 'panel-default';
      scope.$watch('isOpen', function(value) {
        element.toggleClass(scope.openClass, !!value);
        if (value) {
          accordionCtrl.closeOthers(scope);
        }
      });

      scope.toggleOpen = function($event) {
        if (!scope.isDisabled) {
          if (!$event || $event.which === 32) {
            scope.isOpen = !scope.isOpen;
          }
        }
      };

      var id = 'accordiongroup-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
      scope.headingId = id + '-tab';
      scope.panelId = id + '-panel';
    }
  };
})

// Use accordion-heading below an accordion-group to provide a heading containing HTML
.directive('uibAccordionHeading', function() {
  return {
    transclude: true,   // Grab the contents to be used as the heading
    template: '',       // In effect remove this element!
    replace: true,
    require: '^uibAccordionGroup',
    link: function(scope, element, attrs, accordionGroupCtrl, transclude) {
      // Pass the heading to the accordion-group controller
      // so that it can be transcluded into the right place in the template
      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
      accordionGroupCtrl.setHeading(transclude(scope, angular.noop));
    }
  };
})

// Use in the accordion-group template to indicate where you want the heading to be transcluded
// You must provide the property on the accordion-group controller that will hold the transcluded element
.directive('uibAccordionTransclude', function() {
  return {
    require: '^uibAccordionGroup',
    link: function(scope, element, attrs, controller) {
      scope.$watch(function() { return controller[attrs.uibAccordionTransclude]; }, function(heading) {
        if (heading) {
          var elem = angular.element(element[0].querySelector(getHeaderSelectors()));
          elem.html('');
          elem.append(heading);
        }
      });
    }
  };

  function getHeaderSelectors() {
      return 'uib-accordion-header,' +
          'data-uib-accordion-header,' +
          'x-uib-accordion-header,' +
          'uib\\:accordion-header,' +
          '[uib-accordion-header],' +
          '[data-uib-accordion-header],' +
          '[x-uib-accordion-header]';
  }
});

angular.module('ui.bootstrap.alert', [])

.controller('UibAlertController', ['$scope', '$element', '$attrs', '$interpolate', '$timeout', function($scope, $element, $attrs, $interpolate, $timeout) {
  $scope.closeable = !!$attrs.close;
  $element.addClass('alert');
  $attrs.$set('role', 'alert');
  if ($scope.closeable) {
    $element.addClass('alert-dismissible');
  }

  var dismissOnTimeout = angular.isDefined($attrs.dismissOnTimeout) ?
    $interpolate($attrs.dismissOnTimeout)($scope.$parent) : null;

  if (dismissOnTimeout) {
    $timeout(function() {
      $scope.close();
    }, parseInt(dismissOnTimeout, 10));
  }
}])

.directive('uibAlert', function() {
  return {
    controller: 'UibAlertController',
    controllerAs: 'alert',
    restrict: 'A',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/alert/alert.html';
    },
    transclude: true,
    scope: {
      close: '&'
    }
  };
});

angular.module('ui.bootstrap.buttons', [])

.constant('uibButtonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
})

.controller('UibButtonsController', ['uibButtonConfig', function(buttonConfig) {
  this.activeClass = buttonConfig.activeClass || 'active';
  this.toggleEvent = buttonConfig.toggleEvent || 'click';
}])

.directive('uibBtnRadio', ['$parse', function($parse) {
  return {
    require: ['uibBtnRadio', 'ngModel'],
    controller: 'UibButtonsController',
    controllerAs: 'buttons',
    link: function(scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      var uncheckableExpr = $parse(attrs.uibUncheckable);

      element.find('input').css({display: 'none'});

      //model -> UI
      ngModelCtrl.$render = function() {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.uibBtnRadio)));
      };

      //ui->model
      element.on(buttonsCtrl.toggleEvent, function() {
        if (attrs.disabled) {
          return;
        }

        var isActive = element.hasClass(buttonsCtrl.activeClass);

        if (!isActive || angular.isDefined(attrs.uncheckable)) {
          scope.$apply(function() {
            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.uibBtnRadio));
            ngModelCtrl.$render();
          });
        }
      });

      if (attrs.uibUncheckable) {
        scope.$watch(uncheckableExpr, function(uncheckable) {
          attrs.$set('uncheckable', uncheckable ? '' : undefined);
        });
      }
    }
  };
}])

.directive('uibBtnCheckbox', function() {
  return {
    require: ['uibBtnCheckbox', 'ngModel'],
    controller: 'UibButtonsController',
    controllerAs: 'button',
    link: function(scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      element.find('input').css({display: 'none'});

      function getTrueValue() {
        return getCheckboxValue(attrs.btnCheckboxTrue, true);
      }

      function getFalseValue() {
        return getCheckboxValue(attrs.btnCheckboxFalse, false);
      }

      function getCheckboxValue(attribute, defaultValue) {
        return angular.isDefined(attribute) ? scope.$eval(attribute) : defaultValue;
      }

      //model -> UI
      ngModelCtrl.$render = function() {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
      };

      //ui->model
      element.on(buttonsCtrl.toggleEvent, function() {
        if (attrs.disabled) {
          return;
        }

        scope.$apply(function() {
          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
          ngModelCtrl.$render();
        });
      });
    }
  };
});

angular.module('ui.bootstrap.carousel', [])

.controller('UibCarouselController', ['$scope', '$element', '$interval', '$timeout', '$animate', function($scope, $element, $interval, $timeout, $animate) {
  var self = this,
    slides = self.slides = $scope.slides = [],
    SLIDE_DIRECTION = 'uib-slideDirection',
    currentIndex = $scope.active,
    currentInterval, isPlaying, bufferedTransitions = [];

  var destroyed = false;
  $element.addClass('carousel');

  self.addSlide = function(slide, element) {
    slides.push({
      slide: slide,
      element: element
    });
    slides.sort(function(a, b) {
      return +a.slide.index - +b.slide.index;
    });
    //if this is the first slide or the slide is set to active, select it
    if (slide.index === $scope.active || slides.length === 1 && !angular.isNumber($scope.active)) {
      if ($scope.$currentTransition) {
        $scope.$currentTransition = null;
      }

      currentIndex = slide.index;
      $scope.active = slide.index;
      setActive(currentIndex);
      self.select(slides[findSlideIndex(slide)]);
      if (slides.length === 1) {
        $scope.play();
      }
    }
  };

  self.getCurrentIndex = function() {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].slide.index === currentIndex) {
        return i;
      }
    }
  };

  self.next = $scope.next = function() {
    var newIndex = (self.getCurrentIndex() + 1) % slides.length;

    if (newIndex === 0 && $scope.noWrap()) {
      $scope.pause();
      return;
    }

    return self.select(slides[newIndex], 'next');
  };

  self.prev = $scope.prev = function() {
    var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;

    if ($scope.noWrap() && newIndex === slides.length - 1) {
      $scope.pause();
      return;
    }

    return self.select(slides[newIndex], 'prev');
  };

  self.removeSlide = function(slide) {
    var index = findSlideIndex(slide);

    var bufferedIndex = bufferedTransitions.indexOf(slides[index]);
    if (bufferedIndex !== -1) {
      bufferedTransitions.splice(bufferedIndex, 1);
    }

    //get the index of the slide inside the carousel
    slides.splice(index, 1);
    if (slides.length > 0 && currentIndex === index) {
      if (index >= slides.length) {
        currentIndex = slides.length - 1;
        $scope.active = currentIndex;
        setActive(currentIndex);
        self.select(slides[slides.length - 1]);
      } else {
        currentIndex = index;
        $scope.active = currentIndex;
        setActive(currentIndex);
        self.select(slides[index]);
      }
    } else if (currentIndex > index) {
      currentIndex--;
      $scope.active = currentIndex;
    }

    //clean the active value when no more slide
    if (slides.length === 0) {
      currentIndex = null;
      $scope.active = null;
      clearBufferedTransitions();
    }
  };

  /* direction: "prev" or "next" */
  self.select = $scope.select = function(nextSlide, direction) {
    var nextIndex = findSlideIndex(nextSlide.slide);
    //Decide direction if it's not given
    if (direction === undefined) {
      direction = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
    }
    //Prevent this user-triggered transition from occurring if there is already one in progress
    if (nextSlide.slide.index !== currentIndex &&
      !$scope.$currentTransition) {
      goNext(nextSlide.slide, nextIndex, direction);
    } else if (nextSlide && nextSlide.slide.index !== currentIndex && $scope.$currentTransition) {
      bufferedTransitions.push(slides[nextIndex]);
    }
  };

  /* Allow outside people to call indexOf on slides array */
  $scope.indexOfSlide = function(slide) {
    return +slide.slide.index;
  };

  $scope.isActive = function(slide) {
    return $scope.active === slide.slide.index;
  };

  $scope.isPrevDisabled = function() {
    return $scope.active === 0 && $scope.noWrap();
  };

  $scope.isNextDisabled = function() {
    return $scope.active === slides.length - 1 && $scope.noWrap();
  };

  $scope.pause = function() {
    if (!$scope.noPause) {
      isPlaying = false;
      resetTimer();
    }
  };

  $scope.play = function() {
    if (!isPlaying) {
      isPlaying = true;
      restartTimer();
    }
  };

  $element.on('mouseenter', $scope.pause);
  $element.on('mouseleave', $scope.play);

  $scope.$on('$destroy', function() {
    destroyed = true;
    resetTimer();
  });

  $scope.$watch('noTransition', function(noTransition) {
    $animate.enabled($element, !noTransition);
  });

  $scope.$watch('interval', restartTimer);

  $scope.$watchCollection('slides', resetTransition);

  $scope.$watch('active', function(index) {
    if (angular.isNumber(index) && currentIndex !== index) {
      for (var i = 0; i < slides.length; i++) {
        if (slides[i].slide.index === index) {
          index = i;
          break;
        }
      }

      var slide = slides[index];
      if (slide) {
        setActive(index);
        self.select(slides[index]);
        currentIndex = index;
      }
    }
  });

  function clearBufferedTransitions() {
    while (bufferedTransitions.length) {
      bufferedTransitions.shift();
    }
  }

  function getSlideByIndex(index) {
    for (var i = 0, l = slides.length; i < l; ++i) {
      if (slides[i].index === index) {
        return slides[i];
      }
    }
  }

  function setActive(index) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].slide.active = i === index;
    }
  }

  function goNext(slide, index, direction) {
    if (destroyed) {
      return;
    }

    angular.extend(slide, {direction: direction});
    angular.extend(slides[currentIndex].slide || {}, {direction: direction});
    if ($animate.enabled($element) && !$scope.$currentTransition &&
      slides[index].element && self.slides.length > 1) {
      slides[index].element.data(SLIDE_DIRECTION, slide.direction);
      var currentIdx = self.getCurrentIndex();

      if (angular.isNumber(currentIdx) && slides[currentIdx].element) {
        slides[currentIdx].element.data(SLIDE_DIRECTION, slide.direction);
      }

      $scope.$currentTransition = true;
      $animate.on('addClass', slides[index].element, function(element, phase) {
        if (phase === 'close') {
          $scope.$currentTransition = null;
          $animate.off('addClass', element);
          if (bufferedTransitions.length) {
            var nextSlide = bufferedTransitions.pop().slide;
            var nextIndex = nextSlide.index;
            var nextDirection = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
            clearBufferedTransitions();

            goNext(nextSlide, nextIndex, nextDirection);
          }
        }
      });
    }

    $scope.active = slide.index;
    currentIndex = slide.index;
    setActive(index);

    //every time you change slides, reset the timer
    restartTimer();
  }

  function findSlideIndex(slide) {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].slide === slide) {
        return i;
      }
    }
  }

  function resetTimer() {
    if (currentInterval) {
      $interval.cancel(currentInterval);
      currentInterval = null;
    }
  }

  function resetTransition(slides) {
    if (!slides.length) {
      $scope.$currentTransition = null;
      clearBufferedTransitions();
    }
  }

  function restartTimer() {
    resetTimer();
    var interval = +$scope.interval;
    if (!isNaN(interval) && interval > 0) {
      currentInterval = $interval(timerFn, interval);
    }
  }

  function timerFn() {
    var interval = +$scope.interval;
    if (isPlaying && !isNaN(interval) && interval > 0 && slides.length) {
      $scope.next();
    } else {
      $scope.pause();
    }
  }
}])

.directive('uibCarousel', function() {
  return {
    transclude: true,
    controller: 'UibCarouselController',
    controllerAs: 'carousel',
    restrict: 'A',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/carousel/carousel.html';
    },
    scope: {
      active: '=',
      interval: '=',
      noTransition: '=',
      noPause: '=',
      noWrap: '&'
    }
  };
})

.directive('uibSlide', ['$animate', function($animate) {
  return {
    require: '^uibCarousel',
    restrict: 'A',
    transclude: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/carousel/slide.html';
    },
    scope: {
      actual: '=?',
      index: '=?'
    },
    link: function (scope, element, attrs, carouselCtrl) {
      element.addClass('item');
      carouselCtrl.addSlide(scope, element);
      //when the scope is destroyed then remove the slide from the current slides array
      scope.$on('$destroy', function() {
        carouselCtrl.removeSlide(scope);
      });

      scope.$watch('active', function(active) {
        $animate[active ? 'addClass' : 'removeClass'](element, 'active');
      });
    }
  };
}])

.animation('.item', ['$animateCss',
function($animateCss) {
  var SLIDE_DIRECTION = 'uib-slideDirection';

  function removeClass(element, className, callback) {
    element.removeClass(className);
    if (callback) {
      callback();
    }
  }

  return {
    beforeAddClass: function(element, className, done) {
      if (className === 'active') {
        var stopped = false;
        var direction = element.data(SLIDE_DIRECTION);
        var directionClass = direction === 'next' ? 'left' : 'right';
        var removeClassFn = removeClass.bind(this, element,
          directionClass + ' ' + direction, done);
        element.addClass(direction);

        $animateCss(element, {addClass: directionClass})
          .start()
          .done(removeClassFn);

        return function() {
          stopped = true;
        };
      }
      done();
    },
    beforeRemoveClass: function (element, className, done) {
      if (className === 'active') {
        var stopped = false;
        var direction = element.data(SLIDE_DIRECTION);
        var directionClass = direction === 'next' ? 'left' : 'right';
        var removeClassFn = removeClass.bind(this, element, directionClass, done);

        $animateCss(element, {addClass: directionClass})
          .start()
          .done(removeClassFn);

        return function() {
          stopped = true;
        };
      }
      done();
    }
  };
}]);

angular.module('ui.bootstrap.dateparser', [])

.service('uibDateParser', ['$log', '$locale', 'dateFilter', 'orderByFilter', 'filterFilter', function($log, $locale, dateFilter, orderByFilter, filterFilter) {
  // Pulled from https://github.com/mbostock/d3/blob/master/src/format/requote.js
  var SPECIAL_CHARACTERS_REGEXP = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

  var localeId;
  var formatCodeToRegex;

  this.init = function() {
    localeId = $locale.id;

    this.parsers = {};
    this.formatters = {};

    formatCodeToRegex = [
      {
        key: 'yyyy',
        regex: '\\d{4}',
        apply: function(value) { this.year = +value; },
        formatter: function(date) {
          var _date = new Date();
          _date.setFullYear(Math.abs(date.getFullYear()));
          return dateFilter(_date, 'yyyy');
        }
      },
      {
        key: 'yy',
        regex: '\\d{2}',
        apply: function(value) { value = +value; this.year = value < 69 ? value + 2000 : value + 1900; },
        formatter: function(date) {
          var _date = new Date();
          _date.setFullYear(Math.abs(date.getFullYear()));
          return dateFilter(_date, 'yy');
        }
      },
      {
        key: 'y',
        regex: '\\d{1,4}',
        apply: function(value) { this.year = +value; },
        formatter: function(date) {
          var _date = new Date();
          _date.setFullYear(Math.abs(date.getFullYear()));
          return dateFilter(_date, 'y');
        }
      },
      {
        key: 'M!',
        regex: '0?[1-9]|1[0-2]',
        apply: function(value) { this.month = value - 1; },
        formatter: function(date) {
          var value = date.getMonth();
          if (/^[0-9]$/.test(value)) {
            return dateFilter(date, 'MM');
          }

          return dateFilter(date, 'M');
        }
      },
      {
        key: 'MMMM',
        regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
        apply: function(value) { this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value); },
        formatter: function(date) { return dateFilter(date, 'MMMM'); }
      },
      {
        key: 'MMM',
        regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
        apply: function(value) { this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value); },
        formatter: function(date) { return dateFilter(date, 'MMM'); }
      },
      {
        key: 'MM',
        regex: '0[1-9]|1[0-2]',
        apply: function(value) { this.month = value - 1; },
        formatter: function(date) { return dateFilter(date, 'MM'); }
      },
      {
        key: 'M',
        regex: '[1-9]|1[0-2]',
        apply: function(value) { this.month = value - 1; },
        formatter: function(date) { return dateFilter(date, 'M'); }
      },
      {
        key: 'd!',
        regex: '[0-2]?[0-9]{1}|3[0-1]{1}',
        apply: function(value) { this.date = +value; },
        formatter: function(date) {
          var value = date.getDate();
          if (/^[1-9]$/.test(value)) {
            return dateFilter(date, 'dd');
          }

          return dateFilter(date, 'd');
        }
      },
      {
        key: 'dd',
        regex: '[0-2][0-9]{1}|3[0-1]{1}',
        apply: function(value) { this.date = +value; },
        formatter: function(date) { return dateFilter(date, 'dd'); }
      },
      {
        key: 'd',
        regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
        apply: function(value) { this.date = +value; },
        formatter: function(date) { return dateFilter(date, 'd'); }
      },
      {
        key: 'EEEE',
        regex: $locale.DATETIME_FORMATS.DAY.join('|'),
        formatter: function(date) { return dateFilter(date, 'EEEE'); }
      },
      {
        key: 'EEE',
        regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|'),
        formatter: function(date) { return dateFilter(date, 'EEE'); }
      },
      {
        key: 'HH',
        regex: '(?:0|1)[0-9]|2[0-3]',
        apply: function(value) { this.hours = +value; },
        formatter: function(date) { return dateFilter(date, 'HH'); }
      },
      {
        key: 'hh',
        regex: '0[0-9]|1[0-2]',
        apply: function(value) { this.hours = +value; },
        formatter: function(date) { return dateFilter(date, 'hh'); }
      },
      {
        key: 'H',
        regex: '1?[0-9]|2[0-3]',
        apply: function(value) { this.hours = +value; },
        formatter: function(date) { return dateFilter(date, 'H'); }
      },
      {
        key: 'h',
        regex: '[0-9]|1[0-2]',
        apply: function(value) { this.hours = +value; },
        formatter: function(date) { return dateFilter(date, 'h'); }
      },
      {
        key: 'mm',
        regex: '[0-5][0-9]',
        apply: function(value) { this.minutes = +value; },
        formatter: function(date) { return dateFilter(date, 'mm'); }
      },
      {
        key: 'm',
        regex: '[0-9]|[1-5][0-9]',
        apply: function(value) { this.minutes = +value; },
        formatter: function(date) { return dateFilter(date, 'm'); }
      },
      {
        key: 'sss',
        regex: '[0-9][0-9][0-9]',
        apply: function(value) { this.milliseconds = +value; },
        formatter: function(date) { return dateFilter(date, 'sss'); }
      },
      {
        key: 'ss',
        regex: '[0-5][0-9]',
        apply: function(value) { this.seconds = +value; },
        formatter: function(date) { return dateFilter(date, 'ss'); }
      },
      {
        key: 's',
        regex: '[0-9]|[1-5][0-9]',
        apply: function(value) { this.seconds = +value; },
        formatter: function(date) { return dateFilter(date, 's'); }
      },
      {
        key: 'a',
        regex: $locale.DATETIME_FORMATS.AMPMS.join('|'),
        apply: function(value) {
          if (this.hours === 12) {
            this.hours = 0;
          }

          if (value === 'PM') {
            this.hours += 12;
          }
        },
        formatter: function(date) { return dateFilter(date, 'a'); }
      },
      {
        key: 'Z',
        regex: '[+-]\\d{4}',
        apply: function(value) {
          var matches = value.match(/([+-])(\d{2})(\d{2})/),
            sign = matches[1],
            hours = matches[2],
            minutes = matches[3];
          this.hours += toInt(sign + hours);
          this.minutes += toInt(sign + minutes);
        },
        formatter: function(date) {
          return dateFilter(date, 'Z');
        }
      },
      {
        key: 'ww',
        regex: '[0-4][0-9]|5[0-3]',
        formatter: function(date) { return dateFilter(date, 'ww'); }
      },
      {
        key: 'w',
        regex: '[0-9]|[1-4][0-9]|5[0-3]',
        formatter: function(date) { return dateFilter(date, 'w'); }
      },
      {
        key: 'GGGG',
        regex: $locale.DATETIME_FORMATS.ERANAMES.join('|').replace(/\s/g, '\\s'),
        formatter: function(date) { return dateFilter(date, 'GGGG'); }
      },
      {
        key: 'GGG',
        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
        formatter: function(date) { return dateFilter(date, 'GGG'); }
      },
      {
        key: 'GG',
        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
        formatter: function(date) { return dateFilter(date, 'GG'); }
      },
      {
        key: 'G',
        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
        formatter: function(date) { return dateFilter(date, 'G'); }
      }
    ];

    if (angular.version.major >= 1 && angular.version.minor > 4) {
      formatCodeToRegex.push({
        key: 'LLLL',
        regex: $locale.DATETIME_FORMATS.STANDALONEMONTH.join('|'),
        apply: function(value) { this.month = $locale.DATETIME_FORMATS.STANDALONEMONTH.indexOf(value); },
        formatter: function(date) { return dateFilter(date, 'LLLL'); }
      });
    }
  };

  this.init();

  function getFormatCodeToRegex(key) {
    return filterFilter(formatCodeToRegex, {key: key}, true)[0];
  }

  this.getParser = function (key) {
    var f = getFormatCodeToRegex(key);
    return f && f.apply || null;
  };

  this.overrideParser = function (key, parser) {
    var f = getFormatCodeToRegex(key);
    if (f && angular.isFunction(parser)) {
      this.parsers = {};
      f.apply = parser;
    }
  }.bind(this);

  function createParser(format) {
    var map = [], regex = format.split('');

    // check for literal values
    var quoteIndex = format.indexOf('\'');
    if (quoteIndex > -1) {
      var inLiteral = false;
      format = format.split('');
      for (var i = quoteIndex; i < format.length; i++) {
        if (inLiteral) {
          if (format[i] === '\'') {
            if (i + 1 < format.length && format[i+1] === '\'') { // escaped single quote
              format[i+1] = '$';
              regex[i+1] = '';
            } else { // end of literal
              regex[i] = '';
              inLiteral = false;
            }
          }
          format[i] = '$';
        } else {
          if (format[i] === '\'') { // start of literal
            format[i] = '$';
            regex[i] = '';
            inLiteral = true;
          }
        }
      }

      format = format.join('');
    }

    angular.forEach(formatCodeToRegex, function(data) {
      var index = format.indexOf(data.key);

      if (index > -1) {
        format = format.split('');

        regex[index] = '(' + data.regex + ')';
        format[index] = '$'; // Custom symbol to define consumed part of format
        for (var i = index + 1, n = index + data.key.length; i < n; i++) {
          regex[i] = '';
          format[i] = '$';
        }
        format = format.join('');

        map.push({
          index: index,
          key: data.key,
          apply: data.apply,
          matcher: data.regex
        });
      }
    });

    return {
      regex: new RegExp('^' + regex.join('') + '$'),
      map: orderByFilter(map, 'index')
    };
  }

  function createFormatter(format) {
    var formatters = [];
    var i = 0;
    var formatter, literalIdx;
    while (i < format.length) {
      if (angular.isNumber(literalIdx)) {
        if (format.charAt(i) === '\'') {
          if (i + 1 >= format.length || format.charAt(i + 1) !== '\'') {
            formatters.push(constructLiteralFormatter(format, literalIdx, i));
            literalIdx = null;
          }
        } else if (i === format.length) {
          while (literalIdx < format.length) {
            formatter = constructFormatterFromIdx(format, literalIdx);
            formatters.push(formatter);
            literalIdx = formatter.endIdx;
          }
        }

        i++;
        continue;
      }

      if (format.charAt(i) === '\'') {
        literalIdx = i;
        i++;
        continue;
      }

      formatter = constructFormatterFromIdx(format, i);

      formatters.push(formatter.parser);
      i = formatter.endIdx;
    }

    return formatters;
  }

  function constructLiteralFormatter(format, literalIdx, endIdx) {
    return function() {
      return format.substr(literalIdx + 1, endIdx - literalIdx - 1);
    };
  }

  function constructFormatterFromIdx(format, i) {
    var currentPosStr = format.substr(i);
    for (var j = 0; j < formatCodeToRegex.length; j++) {
      if (new RegExp('^' + formatCodeToRegex[j].key).test(currentPosStr)) {
        var data = formatCodeToRegex[j];
        return {
          endIdx: i + data.key.length,
          parser: data.formatter
        };
      }
    }

    return {
      endIdx: i + 1,
      parser: function() {
        return currentPosStr.charAt(0);
      }
    };
  }

  this.filter = function(date, format) {
    if (!angular.isDate(date) || isNaN(date) || !format) {
      return '';
    }

    format = $locale.DATETIME_FORMATS[format] || format;

    if ($locale.id !== localeId) {
      this.init();
    }

    if (!this.formatters[format]) {
      this.formatters[format] = createFormatter(format);
    }

    var formatters = this.formatters[format];

    return formatters.reduce(function(str, formatter) {
      return str + formatter(date);
    }, '');
  };

  this.parse = function(input, format, baseDate) {
    if (!angular.isString(input) || !format) {
      return input;
    }

    format = $locale.DATETIME_FORMATS[format] || format;
    format = format.replace(SPECIAL_CHARACTERS_REGEXP, '\\$&');

    if ($locale.id !== localeId) {
      this.init();
    }

    if (!this.parsers[format]) {
      this.parsers[format] = createParser(format, 'apply');
    }

    var parser = this.parsers[format],
        regex = parser.regex,
        map = parser.map,
        results = input.match(regex),
        tzOffset = false;
    if (results && results.length) {
      var fields, dt;
      if (angular.isDate(baseDate) && !isNaN(baseDate.getTime())) {
        fields = {
          year: baseDate.getFullYear(),
          month: baseDate.getMonth(),
          date: baseDate.getDate(),
          hours: baseDate.getHours(),
          minutes: baseDate.getMinutes(),
          seconds: baseDate.getSeconds(),
          milliseconds: baseDate.getMilliseconds()
        };
      } else {
        if (baseDate) {
          $log.warn('dateparser:', 'baseDate is not a valid date');
        }
        fields = { year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
      }

      for (var i = 1, n = results.length; i < n; i++) {
        var mapper = map[i - 1];
        if (mapper.matcher === 'Z') {
          tzOffset = true;
        }

        if (mapper.apply) {
          mapper.apply.call(fields, results[i]);
        }
      }

      var datesetter = tzOffset ? Date.prototype.setUTCFullYear :
        Date.prototype.setFullYear;
      var timesetter = tzOffset ? Date.prototype.setUTCHours :
        Date.prototype.setHours;

      if (isValid(fields.year, fields.month, fields.date)) {
        if (angular.isDate(baseDate) && !isNaN(baseDate.getTime()) && !tzOffset) {
          dt = new Date(baseDate);
          datesetter.call(dt, fields.year, fields.month, fields.date);
          timesetter.call(dt, fields.hours, fields.minutes,
            fields.seconds, fields.milliseconds);
        } else {
          dt = new Date(0);
          datesetter.call(dt, fields.year, fields.month, fields.date);
          timesetter.call(dt, fields.hours || 0, fields.minutes || 0,
            fields.seconds || 0, fields.milliseconds || 0);
        }
      }

      return dt;
    }
  };

  // Check if date is valid for specific month (and year for February).
  // Month: 0 = Jan, 1 = Feb, etc
  function isValid(year, month, date) {
    if (date < 1) {
      return false;
    }

    if (month === 1 && date > 28) {
      return date === 29 && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
    }

    if (month === 3 || month === 5 || month === 8 || month === 10) {
      return date < 31;
    }

    return true;
  }

  function toInt(str) {
    return parseInt(str, 10);
  }

  this.toTimezone = toTimezone;
  this.fromTimezone = fromTimezone;
  this.timezoneToOffset = timezoneToOffset;
  this.addDateMinutes = addDateMinutes;
  this.convertTimezoneToLocal = convertTimezoneToLocal;

  function toTimezone(date, timezone) {
    return date && timezone ? convertTimezoneToLocal(date, timezone) : date;
  }

  function fromTimezone(date, timezone) {
    return date && timezone ? convertTimezoneToLocal(date, timezone, true) : date;
  }

  //https://github.com/angular/angular.js/blob/622c42169699ec07fc6daaa19fe6d224e5d2f70e/src/Angular.js#L1207
  function timezoneToOffset(timezone, fallback) {
    timezone = timezone.replace(/:/g, '');
    var requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
    return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
  }

  function addDateMinutes(date, minutes) {
    date = new Date(date.getTime());
    date.setMinutes(date.getMinutes() + minutes);
    return date;
  }

  function convertTimezoneToLocal(date, timezone, reverse) {
    reverse = reverse ? -1 : 1;
    var dateTimezoneOffset = date.getTimezoneOffset();
    var timezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
    return addDateMinutes(date, reverse * (timezoneOffset - dateTimezoneOffset));
  }
}]);

// Avoiding use of ng-class as it creates a lot of watchers when a class is to be applied to
// at most one element.
angular.module('ui.bootstrap.isClass', [])
.directive('uibIsClass', [
         '$animate',
function ($animate) {
  //                    11111111          22222222
  var ON_REGEXP = /^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/;
  //                    11111111           22222222
  var IS_REGEXP = /^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;

  var dataPerTracked = {};

  return {
    restrict: 'A',
    compile: function(tElement, tAttrs) {
      var linkedScopes = [];
      var instances = [];
      var expToData = {};
      var lastActivated = null;
      var onExpMatches = tAttrs.uibIsClass.match(ON_REGEXP);
      var onExp = onExpMatches[2];
      var expsStr = onExpMatches[1];
      var exps = expsStr.split(',');

      return linkFn;

      function linkFn(scope, element, attrs) {
        linkedScopes.push(scope);
        instances.push({
          scope: scope,
          element: element
        });

        exps.forEach(function(exp, k) {
          addForExp(exp, scope);
        });

        scope.$on('$destroy', removeScope);
      }

      function addForExp(exp, scope) {
        var matches = exp.match(IS_REGEXP);
        var clazz = scope.$eval(matches[1]);
        var compareWithExp = matches[2];
        var data = expToData[exp];
        if (!data) {
          var watchFn = function(compareWithVal) {
            var newActivated = null;
            instances.some(function(instance) {
              var thisVal = instance.scope.$eval(onExp);
              if (thisVal === compareWithVal) {
                newActivated = instance;
                return true;
              }
            });
            if (data.lastActivated !== newActivated) {
              if (data.lastActivated) {
                $animate.removeClass(data.lastActivated.element, clazz);
              }
              if (newActivated) {
                $animate.addClass(newActivated.element, clazz);
              }
              data.lastActivated = newActivated;
            }
          };
          expToData[exp] = data = {
            lastActivated: null,
            scope: scope,
            watchFn: watchFn,
            compareWithExp: compareWithExp,
            watcher: scope.$watch(compareWithExp, watchFn)
          };
        }
        data.watchFn(scope.$eval(compareWithExp));
      }

      function removeScope(e) {
        var removedScope = e.targetScope;
        var index = linkedScopes.indexOf(removedScope);
        linkedScopes.splice(index, 1);
        instances.splice(index, 1);
        if (linkedScopes.length) {
          var newWatchScope = linkedScopes[0];
          angular.forEach(expToData, function(data) {
            if (data.scope === removedScope) {
              data.watcher = newWatchScope.$watch(data.compareWithExp, data.watchFn);
              data.scope = newWatchScope;
            }
          });
        } else {
          expToData = {};
        }
      }
    }
  };
}]);
angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.isClass'])

.value('$datepickerSuppressError', false)

.value('$datepickerLiteralWarning', true)

.constant('uibDatepickerConfig', {
  datepickerMode: 'day',
  formatDay: 'dd',
  formatMonth: 'MMMM',
  formatYear: 'yyyy',
  formatDayHeader: 'EEE',
  formatDayTitle: 'MMMM yyyy',
  formatMonthTitle: 'yyyy',
  maxDate: null,
  maxMode: 'year',
  minDate: null,
  minMode: 'day',
  monthColumns: 3,
  ngModelOptions: {},
  shortcutPropagation: false,
  showWeeks: true,
  yearColumns: 5,
  yearRows: 4
})

.controller('UibDatepickerController', ['$scope', '$element', '$attrs', '$parse', '$interpolate', '$locale', '$log', 'dateFilter', 'uibDatepickerConfig', '$datepickerLiteralWarning', '$datepickerSuppressError', 'uibDateParser',
  function($scope, $element, $attrs, $parse, $interpolate, $locale, $log, dateFilter, datepickerConfig, $datepickerLiteralWarning, $datepickerSuppressError, dateParser) {
  var self = this,
      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl;
      ngModelOptions = {},
      watchListeners = [];

  $element.addClass('uib-datepicker');
  $attrs.$set('role', 'application');

  if (!$scope.datepickerOptions) {
    $scope.datepickerOptions = {};
  }

  // Modes chain
  this.modes = ['day', 'month', 'year'];

  [
    'customClass',
    'dateDisabled',
    'datepickerMode',
    'formatDay',
    'formatDayHeader',
    'formatDayTitle',
    'formatMonth',
    'formatMonthTitle',
    'formatYear',
    'maxDate',
    'maxMode',
    'minDate',
    'minMode',
    'monthColumns',
    'showWeeks',
    'shortcutPropagation',
    'startingDay',
    'yearColumns',
    'yearRows'
  ].forEach(function(key) {
    switch (key) {
      case 'customClass':
      case 'dateDisabled':
        $scope[key] = $scope.datepickerOptions[key] || angular.noop;
        break;
      case 'datepickerMode':
        $scope.datepickerMode = angular.isDefined($scope.datepickerOptions.datepickerMode) ?
          $scope.datepickerOptions.datepickerMode : datepickerConfig.datepickerMode;
        break;
      case 'formatDay':
      case 'formatDayHeader':
      case 'formatDayTitle':
      case 'formatMonth':
      case 'formatMonthTitle':
      case 'formatYear':
        self[key] = angular.isDefined($scope.datepickerOptions[key]) ?
          $interpolate($scope.datepickerOptions[key])($scope.$parent) :
          datepickerConfig[key];
        break;
      case 'monthColumns':
      case 'showWeeks':
      case 'shortcutPropagation':
      case 'yearColumns':
      case 'yearRows':
        self[key] = angular.isDefined($scope.datepickerOptions[key]) ?
          $scope.datepickerOptions[key] : datepickerConfig[key];
        break;
      case 'startingDay':
        if (angular.isDefined($scope.datepickerOptions.startingDay)) {
          self.startingDay = $scope.datepickerOptions.startingDay;
        } else if (angular.isNumber(datepickerConfig.startingDay)) {
          self.startingDay = datepickerConfig.startingDay;
        } else {
          self.startingDay = ($locale.DATETIME_FORMATS.FIRSTDAYOFWEEK + 8) % 7;
        }

        break;
      case 'maxDate':
      case 'minDate':
        $scope.$watch('datepickerOptions.' + key, function(value) {
          if (value) {
            if (angular.isDate(value)) {
              self[key] = dateParser.fromTimezone(new Date(value), ngModelOptions.timezone);
            } else {
              if ($datepickerLiteralWarning) {
                $log.warn('Literal date support has been deprecated, please switch to date object usage');
              }

              self[key] = new Date(dateFilter(value, 'medium'));
            }
          } else {
            self[key] = datepickerConfig[key] ?
              dateParser.fromTimezone(new Date(datepickerConfig[key]), ngModelOptions.timezone) :
              null;
          }

          self.refreshView();
        });

        break;
      case 'maxMode':
      case 'minMode':
        if ($scope.datepickerOptions[key]) {
          $scope.$watch(function() { return $scope.datepickerOptions[key]; }, function(value) {
            self[key] = $scope[key] = angular.isDefined(value) ? value : $scope.datepickerOptions[key];
            if (key === 'minMode' && self.modes.indexOf($scope.datepickerOptions.datepickerMode) < self.modes.indexOf(self[key]) ||
              key === 'maxMode' && self.modes.indexOf($scope.datepickerOptions.datepickerMode) > self.modes.indexOf(self[key])) {
              $scope.datepickerMode = self[key];
              $scope.datepickerOptions.datepickerMode = self[key];
            }
          });
        } else {
          self[key] = $scope[key] = datepickerConfig[key] || null;
        }

        break;
    }
  });

  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);

  $scope.disabled = angular.isDefined($attrs.disabled) || false;
  if (angular.isDefined($attrs.ngDisabled)) {
    watchListeners.push($scope.$parent.$watch($attrs.ngDisabled, function(disabled) {
      $scope.disabled = disabled;
      self.refreshView();
    }));
  }

  $scope.isActive = function(dateObject) {
    if (self.compare(dateObject.date, self.activeDate) === 0) {
      $scope.activeDateId = dateObject.uid;
      return true;
    }
    return false;
  };

  this.init = function(ngModelCtrl_) {
    ngModelCtrl = ngModelCtrl_;
    ngModelOptions = ngModelCtrl_.$options ||
      $scope.datepickerOptions.ngModelOptions ||
      datepickerConfig.ngModelOptions;
    if ($scope.datepickerOptions.initDate) {
      self.activeDate = dateParser.fromTimezone($scope.datepickerOptions.initDate, ngModelOptions.timezone) || new Date();
      $scope.$watch('datepickerOptions.initDate', function(initDate) {
        if (initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)) {
          self.activeDate = dateParser.fromTimezone(initDate, ngModelOptions.timezone);
          self.refreshView();
        }
      });
    } else {
      self.activeDate = new Date();
    }

    var date = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : new Date();
    this.activeDate = !isNaN(date) ?
      dateParser.fromTimezone(date, ngModelOptions.timezone) :
      dateParser.fromTimezone(new Date(), ngModelOptions.timezone);

    ngModelCtrl.$render = function() {
      self.render();
    };
  };

  this.render = function() {
    if (ngModelCtrl.$viewValue) {
      var date = new Date(ngModelCtrl.$viewValue),
          isValid = !isNaN(date);

      if (isValid) {
        this.activeDate = dateParser.fromTimezone(date, ngModelOptions.timezone);
      } else if (!$datepickerSuppressError) {
        $log.error('Datepicker directive: "ng-model" value must be a Date object');
      }
    }
    this.refreshView();
  };

  this.refreshView = function() {
    if (this.element) {
      $scope.selectedDt = null;
      this._refreshView();
      if ($scope.activeDt) {
        $scope.activeDateId = $scope.activeDt.uid;
      }

      var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
      date = dateParser.fromTimezone(date, ngModelOptions.timezone);
      ngModelCtrl.$setValidity('dateDisabled', !date ||
        this.element && !this.isDisabled(date));
    }
  };

  this.createDateObject = function(date, format) {
    var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
    model = dateParser.fromTimezone(model, ngModelOptions.timezone);
    var today = new Date();
    today = dateParser.fromTimezone(today, ngModelOptions.timezone);
    var time = this.compare(date, today);
    var dt = {
      date: date,
      label: dateParser.filter(date, format),
      selected: model && this.compare(date, model) === 0,
      disabled: this.isDisabled(date),
      past: time < 0,
      current: time === 0,
      future: time > 0,
      customClass: this.customClass(date) || null
    };

    if (model && this.compare(date, model) === 0) {
      $scope.selectedDt = dt;
    }

    if (self.activeDate && this.compare(dt.date, self.activeDate) === 0) {
      $scope.activeDt = dt;
    }

    return dt;
  };

  this.isDisabled = function(date) {
    return $scope.disabled ||
      this.minDate && this.compare(date, this.minDate) < 0 ||
      this.maxDate && this.compare(date, this.maxDate) > 0 ||
      $scope.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode});
  };

  this.customClass = function(date) {
    return $scope.customClass({date: date, mode: $scope.datepickerMode});
  };

  // Split array into smaller arrays
  this.split = function(arr, size) {
    var arrays = [];
    while (arr.length > 0) {
      arrays.push(arr.splice(0, size));
    }
    return arrays;
  };

  $scope.select = function(date) {
    if ($scope.datepickerMode === self.minMode) {
      var dt = ngModelCtrl.$viewValue ? dateParser.fromTimezone(new Date(ngModelCtrl.$viewValue), ngModelOptions.timezone) : new Date(0, 0, 0, 0, 0, 0, 0);
      dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
      dt = dateParser.toTimezone(dt, ngModelOptions.timezone);
      ngModelCtrl.$setViewValue(dt);
      ngModelCtrl.$render();
    } else {
      self.activeDate = date;
      setMode(self.modes[self.modes.indexOf($scope.datepickerMode) - 1]);

      $scope.$emit('uib:datepicker.mode');
    }

    $scope.$broadcast('uib:datepicker.focus');
  };

  $scope.move = function(direction) {
    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
        month = self.activeDate.getMonth() + direction * (self.step.months || 0);
    self.activeDate.setFullYear(year, month, 1);
    self.refreshView();
  };

  $scope.toggleMode = function(direction) {
    direction = direction || 1;

    if ($scope.datepickerMode === self.maxMode && direction === 1 ||
      $scope.datepickerMode === self.minMode && direction === -1) {
      return;
    }

    setMode(self.modes[self.modes.indexOf($scope.datepickerMode) + direction]);

    $scope.$emit('uib:datepicker.mode');
  };

  // Key event mapper
  $scope.keys = { 13: 'enter', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right', 40: 'down' };

  var focusElement = function() {
    self.element[0].focus();
  };

  // Listen for focus requests from popup directive
  $scope.$on('uib:datepicker.focus', focusElement);

  $scope.keydown = function(evt) {
    var key = $scope.keys[evt.which];

    if (!key || evt.shiftKey || evt.altKey || $scope.disabled) {
      return;
    }

    evt.preventDefault();
    if (!self.shortcutPropagation) {
      evt.stopPropagation();
    }

    if (key === 'enter' || key === 'space') {
      if (self.isDisabled(self.activeDate)) {
        return; // do nothing
      }
      $scope.select(self.activeDate);
    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
      $scope.toggleMode(key === 'up' ? 1 : -1);
    } else {
      self.handleKeyDown(key, evt);
      self.refreshView();
    }
  };

  $element.on('keydown', function(evt) {
    $scope.$apply(function() {
      $scope.keydown(evt);
    });
  });

  $scope.$on('$destroy', function() {
    //Clear all watch listeners on destroy
    while (watchListeners.length) {
      watchListeners.shift()();
    }
  });

  function setMode(mode) {
    $scope.datepickerMode = mode;
    $scope.datepickerOptions.datepickerMode = mode;
  }
}])

.controller('UibDaypickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
  var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  this.step = { months: 1 };
  this.element = $element;
  function getDaysInMonth(year, month) {
    return month === 1 && year % 4 === 0 &&
      (year % 100 !== 0 || year % 400 === 0) ? 29 : DAYS_IN_MONTH[month];
  }

  this.init = function(ctrl) {
    angular.extend(ctrl, this);
    scope.showWeeks = ctrl.showWeeks;
    ctrl.refreshView();
  };

  this.getDates = function(startDate, n) {
    var dates = new Array(n), current = new Date(startDate), i = 0, date;
    while (i < n) {
      date = new Date(current);
      dates[i++] = date;
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  this._refreshView = function() {
    var year = this.activeDate.getFullYear(),
      month = this.activeDate.getMonth(),
      firstDayOfMonth = new Date(this.activeDate);

    firstDayOfMonth.setFullYear(year, month, 1);

    var difference = this.startingDay - firstDayOfMonth.getDay(),
      numDisplayedFromPreviousMonth = difference > 0 ?
        7 - difference : - difference,
      firstDate = new Date(firstDayOfMonth);

    if (numDisplayedFromPreviousMonth > 0) {
      firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
    }

    // 42 is the number of days on a six-week calendar
    var days = this.getDates(firstDate, 42);
    for (var i = 0; i < 42; i ++) {
      days[i] = angular.extend(this.createDateObject(days[i], this.formatDay), {
        secondary: days[i].getMonth() !== month,
        uid: scope.uniqueId + '-' + i
      });
    }

    scope.labels = new Array(7);
    for (var j = 0; j < 7; j++) {
      scope.labels[j] = {
        abbr: dateFilter(days[j].date, this.formatDayHeader),
        full: dateFilter(days[j].date, 'EEEE')
      };
    }

    scope.title = dateFilter(this.activeDate, this.formatDayTitle);
    scope.rows = this.split(days, 7);

    if (scope.showWeeks) {
      scope.weekNumbers = [];
      var thursdayIndex = (4 + 7 - this.startingDay) % 7,
          numWeeks = scope.rows.length;
      for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
        scope.weekNumbers.push(
          getISO8601WeekNumber(scope.rows[curWeek][thursdayIndex].date));
      }
    }
  };

  this.compare = function(date1, date2) {
    var _date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
    var _date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
    _date1.setFullYear(date1.getFullYear());
    _date2.setFullYear(date2.getFullYear());
    return _date1 - _date2;
  };

  function getISO8601WeekNumber(date) {
    var checkDate = new Date(date);
    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
    var time = checkDate.getTime();
    checkDate.setMonth(0); // Compare with Jan 1
    checkDate.setDate(1);
    return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
  }

  this.handleKeyDown = function(key, evt) {
    var date = this.activeDate.getDate();

    if (key === 'left') {
      date = date - 1;
    } else if (key === 'up') {
      date = date - 7;
    } else if (key === 'right') {
      date = date + 1;
    } else if (key === 'down') {
      date = date + 7;
    } else if (key === 'pageup' || key === 'pagedown') {
      var month = this.activeDate.getMonth() + (key === 'pageup' ? - 1 : 1);
      this.activeDate.setMonth(month, 1);
      date = Math.min(getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth()), date);
    } else if (key === 'home') {
      date = 1;
    } else if (key === 'end') {
      date = getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth());
    }
    this.activeDate.setDate(date);
  };
}])

.controller('UibMonthpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
  this.step = { years: 1 };
  this.element = $element;

  this.init = function(ctrl) {
    angular.extend(ctrl, this);
    ctrl.refreshView();
  };

  this._refreshView = function() {
    var months = new Array(12),
        year = this.activeDate.getFullYear(),
        date;

    for (var i = 0; i < 12; i++) {
      date = new Date(this.activeDate);
      date.setFullYear(year, i, 1);
      months[i] = angular.extend(this.createDateObject(date, this.formatMonth), {
        uid: scope.uniqueId + '-' + i
      });
    }

    scope.title = dateFilter(this.activeDate, this.formatMonthTitle);
    scope.rows = this.split(months, this.monthColumns);
    scope.yearHeaderColspan = this.monthColumns > 3 ? this.monthColumns - 2 : 1;
  };

  this.compare = function(date1, date2) {
    var _date1 = new Date(date1.getFullYear(), date1.getMonth());
    var _date2 = new Date(date2.getFullYear(), date2.getMonth());
    _date1.setFullYear(date1.getFullYear());
    _date2.setFullYear(date2.getFullYear());
    return _date1 - _date2;
  };

  this.handleKeyDown = function(key, evt) {
    var date = this.activeDate.getMonth();

    if (key === 'left') {
      date = date - 1;
    } else if (key === 'up') {
      date = date - this.monthColumns;
    } else if (key === 'right') {
      date = date + 1;
    } else if (key === 'down') {
      date = date + this.monthColumns;
    } else if (key === 'pageup' || key === 'pagedown') {
      var year = this.activeDate.getFullYear() + (key === 'pageup' ? - 1 : 1);
      this.activeDate.setFullYear(year);
    } else if (key === 'home') {
      date = 0;
    } else if (key === 'end') {
      date = 11;
    }
    this.activeDate.setMonth(date);
  };
}])

.controller('UibYearpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
  var columns, range;
  this.element = $element;

  function getStartingYear(year) {
    return parseInt((year - 1) / range, 10) * range + 1;
  }

  this.yearpickerInit = function() {
    columns = this.yearColumns;
    range = this.yearRows * columns;
    this.step = { years: range };
  };

  this._refreshView = function() {
    var years = new Array(range), date;

    for (var i = 0, start = getStartingYear(this.activeDate.getFullYear()); i < range; i++) {
      date = new Date(this.activeDate);
      date.setFullYear(start + i, 0, 1);
      years[i] = angular.extend(this.createDateObject(date, this.formatYear), {
        uid: scope.uniqueId + '-' + i
      });
    }

    scope.title = [years[0].label, years[range - 1].label].join(' - ');
    scope.rows = this.split(years, columns);
    scope.columns = columns;
  };

  this.compare = function(date1, date2) {
    return date1.getFullYear() - date2.getFullYear();
  };

  this.handleKeyDown = function(key, evt) {
    var date = this.activeDate.getFullYear();

    if (key === 'left') {
      date = date - 1;
    } else if (key === 'up') {
      date = date - columns;
    } else if (key === 'right') {
      date = date + 1;
    } else if (key === 'down') {
      date = date + columns;
    } else if (key === 'pageup' || key === 'pagedown') {
      date += (key === 'pageup' ? - 1 : 1) * range;
    } else if (key === 'home') {
      date = getStartingYear(this.activeDate.getFullYear());
    } else if (key === 'end') {
      date = getStartingYear(this.activeDate.getFullYear()) + range - 1;
    }
    this.activeDate.setFullYear(date);
  };
}])

.directive('uibDatepicker', function() {
  return {
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepicker/datepicker.html';
    },
    scope: {
      datepickerOptions: '=?'
    },
    require: ['uibDatepicker', '^ngModel'],
    restrict: 'A',
    controller: 'UibDatepickerController',
    controllerAs: 'datepicker',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      datepickerCtrl.init(ngModelCtrl);
    }
  };
})

.directive('uibDaypicker', function() {
  return {
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepicker/day.html';
    },
    require: ['^uibDatepicker', 'uibDaypicker'],
    restrict: 'A',
    controller: 'UibDaypickerController',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0],
        daypickerCtrl = ctrls[1];

      daypickerCtrl.init(datepickerCtrl);
    }
  };
})

.directive('uibMonthpicker', function() {
  return {
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepicker/month.html';
    },
    require: ['^uibDatepicker', 'uibMonthpicker'],
    restrict: 'A',
    controller: 'UibMonthpickerController',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0],
        monthpickerCtrl = ctrls[1];

      monthpickerCtrl.init(datepickerCtrl);
    }
  };
})

.directive('uibYearpicker', function() {
  return {
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepicker/year.html';
    },
    require: ['^uibDatepicker', 'uibYearpicker'],
    restrict: 'A',
    controller: 'UibYearpickerController',
    link: function(scope, element, attrs, ctrls) {
      var ctrl = ctrls[0];
      angular.extend(ctrl, ctrls[1]);
      ctrl.yearpickerInit();

      ctrl.refreshView();
    }
  };
});

angular.module('ui.bootstrap.position', [])

/**
 * A set of utility methods for working with the DOM.
 * It is meant to be used where we need to absolute-position elements in
 * relation to another element (this is the case for tooltips, popovers,
 * typeahead suggestions etc.).
 */
  .factory('$uibPosition', ['$document', '$window', function($document, $window) {
    /**
     * Used by scrollbarWidth() function to cache scrollbar's width.
     * Do not access this variable directly, use scrollbarWidth() instead.
     */
    var SCROLLBAR_WIDTH;
    /**
     * scrollbar on body and html element in IE and Edge overlay
     * content and should be considered 0 width.
     */
    var BODY_SCROLLBAR_WIDTH;
    var OVERFLOW_REGEX = {
      normal: /(auto|scroll)/,
      hidden: /(auto|scroll|hidden)/
    };
    var PLACEMENT_REGEX = {
      auto: /\s?auto?\s?/i,
      primary: /^(top|bottom|left|right)$/,
      secondary: /^(top|bottom|left|right|center)$/,
      vertical: /^(top|bottom)$/
    };
    var BODY_REGEX = /(HTML|BODY)/;

    return {

      /**
       * Provides a raw DOM element from a jQuery/jQLite element.
       *
       * @param {element} elem - The element to convert.
       *
       * @returns {element} A HTML element.
       */
      getRawNode: function(elem) {
        return elem.nodeName ? elem : elem[0] || elem;
      },

      /**
       * Provides a parsed number for a style property.  Strips
       * units and casts invalid numbers to 0.
       *
       * @param {string} value - The style value to parse.
       *
       * @returns {number} A valid number.
       */
      parseStyle: function(value) {
        value = parseFloat(value);
        return isFinite(value) ? value : 0;
      },

      /**
       * Provides the closest positioned ancestor.
       *
       * @param {element} element - The element to get the offest parent for.
       *
       * @returns {element} The closest positioned ancestor.
       */
      offsetParent: function(elem) {
        elem = this.getRawNode(elem);

        var offsetParent = elem.offsetParent || $document[0].documentElement;

        function isStaticPositioned(el) {
          return ($window.getComputedStyle(el).position || 'static') === 'static';
        }

        while (offsetParent && offsetParent !== $document[0].documentElement && isStaticPositioned(offsetParent)) {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || $document[0].documentElement;
      },

      /**
       * Provides the scrollbar width, concept from TWBS measureScrollbar()
       * function in https://github.com/twbs/bootstrap/blob/master/js/modal.js
       * In IE and Edge, scollbar on body and html element overlay and should
       * return a width of 0.
       *
       * @returns {number} The width of the browser scollbar.
       */
      scrollbarWidth: function(isBody) {
        if (isBody) {
          if (angular.isUndefined(BODY_SCROLLBAR_WIDTH)) {
            var bodyElem = $document.find('body');
            bodyElem.addClass('uib-position-body-scrollbar-measure');
            BODY_SCROLLBAR_WIDTH = $window.innerWidth - bodyElem[0].clientWidth;
            BODY_SCROLLBAR_WIDTH = isFinite(BODY_SCROLLBAR_WIDTH) ? BODY_SCROLLBAR_WIDTH : 0;
            bodyElem.removeClass('uib-position-body-scrollbar-measure');
          }
          return BODY_SCROLLBAR_WIDTH;
        }

        if (angular.isUndefined(SCROLLBAR_WIDTH)) {
          var scrollElem = angular.element('<div class="uib-position-scrollbar-measure"></div>');
          $document.find('body').append(scrollElem);
          SCROLLBAR_WIDTH = scrollElem[0].offsetWidth - scrollElem[0].clientWidth;
          SCROLLBAR_WIDTH = isFinite(SCROLLBAR_WIDTH) ? SCROLLBAR_WIDTH : 0;
          scrollElem.remove();
        }

        return SCROLLBAR_WIDTH;
      },

      /**
       * Provides the padding required on an element to replace the scrollbar.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**scrollbarWidth**: the width of the scrollbar</li>
       *     <li>**widthOverflow**: whether the the width is overflowing</li>
       *     <li>**right**: the amount of right padding on the element needed to replace the scrollbar</li>
       *     <li>**rightOriginal**: the amount of right padding currently on the element</li>
       *     <li>**heightOverflow**: whether the the height is overflowing</li>
       *     <li>**bottom**: the amount of bottom padding on the element needed to replace the scrollbar</li>
       *     <li>**bottomOriginal**: the amount of bottom padding currently on the element</li>
       *   </ul>
       */
      scrollbarPadding: function(elem) {
        elem = this.getRawNode(elem);

        var elemStyle = $window.getComputedStyle(elem);
        var paddingRight = this.parseStyle(elemStyle.paddingRight);
        var paddingBottom = this.parseStyle(elemStyle.paddingBottom);
        var scrollParent = this.scrollParent(elem, false, true);
        var scrollbarWidth = this.scrollbarWidth(BODY_REGEX.test(scrollParent.tagName));

        return {
          scrollbarWidth: scrollbarWidth,
          widthOverflow: scrollParent.scrollWidth > scrollParent.clientWidth,
          right: paddingRight + scrollbarWidth,
          originalRight: paddingRight,
          heightOverflow: scrollParent.scrollHeight > scrollParent.clientHeight,
          bottom: paddingBottom + scrollbarWidth,
          originalBottom: paddingBottom
         };
      },

      /**
       * Checks to see if the element is scrollable.
       *
       * @param {element} elem - The element to check.
       * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
       *   default is false.
       *
       * @returns {boolean} Whether the element is scrollable.
       */
      isScrollable: function(elem, includeHidden) {
        elem = this.getRawNode(elem);

        var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
        var elemStyle = $window.getComputedStyle(elem);
        return overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX);
      },

      /**
       * Provides the closest scrollable ancestor.
       * A port of the jQuery UI scrollParent method:
       * https://github.com/jquery/jquery-ui/blob/master/ui/scroll-parent.js
       *
       * @param {element} elem - The element to find the scroll parent of.
       * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
       *   default is false.
       * @param {boolean=} [includeSelf=false] - Should the element being passed be
       * included in the scrollable llokup.
       *
       * @returns {element} A HTML element.
       */
      scrollParent: function(elem, includeHidden, includeSelf) {
        elem = this.getRawNode(elem);

        var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
        var documentEl = $document[0].documentElement;
        var elemStyle = $window.getComputedStyle(elem);
        if (includeSelf && overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX)) {
          return elem;
        }
        var excludeStatic = elemStyle.position === 'absolute';
        var scrollParent = elem.parentElement || documentEl;

        if (scrollParent === documentEl || elemStyle.position === 'fixed') {
          return documentEl;
        }

        while (scrollParent.parentElement && scrollParent !== documentEl) {
          var spStyle = $window.getComputedStyle(scrollParent);
          if (excludeStatic && spStyle.position !== 'static') {
            excludeStatic = false;
          }

          if (!excludeStatic && overflowRegex.test(spStyle.overflow + spStyle.overflowY + spStyle.overflowX)) {
            break;
          }
          scrollParent = scrollParent.parentElement;
        }

        return scrollParent;
      },

      /**
       * Provides read-only equivalent of jQuery's position function:
       * http://api.jquery.com/position/ - distance to closest positioned
       * ancestor.  Does not account for margins by default like jQuery position.
       *
       * @param {element} elem - The element to caclulate the position on.
       * @param {boolean=} [includeMargins=false] - Should margins be accounted
       * for, default is false.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**width**: the width of the element</li>
       *     <li>**height**: the height of the element</li>
       *     <li>**top**: distance to top edge of offset parent</li>
       *     <li>**left**: distance to left edge of offset parent</li>
       *   </ul>
       */
      position: function(elem, includeMagins) {
        elem = this.getRawNode(elem);

        var elemOffset = this.offset(elem);
        if (includeMagins) {
          var elemStyle = $window.getComputedStyle(elem);
          elemOffset.top -= this.parseStyle(elemStyle.marginTop);
          elemOffset.left -= this.parseStyle(elemStyle.marginLeft);
        }
        var parent = this.offsetParent(elem);
        var parentOffset = {top: 0, left: 0};

        if (parent !== $document[0].documentElement) {
          parentOffset = this.offset(parent);
          parentOffset.top += parent.clientTop - parent.scrollTop;
          parentOffset.left += parent.clientLeft - parent.scrollLeft;
        }

        return {
          width: Math.round(angular.isNumber(elemOffset.width) ? elemOffset.width : elem.offsetWidth),
          height: Math.round(angular.isNumber(elemOffset.height) ? elemOffset.height : elem.offsetHeight),
          top: Math.round(elemOffset.top - parentOffset.top),
          left: Math.round(elemOffset.left - parentOffset.left)
        };
      },

      /**
       * Provides read-only equivalent of jQuery's offset function:
       * http://api.jquery.com/offset/ - distance to viewport.  Does
       * not account for borders, margins, or padding on the body
       * element.
       *
       * @param {element} elem - The element to calculate the offset on.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**width**: the width of the element</li>
       *     <li>**height**: the height of the element</li>
       *     <li>**top**: distance to top edge of viewport</li>
       *     <li>**right**: distance to bottom edge of viewport</li>
       *   </ul>
       */
      offset: function(elem) {
        elem = this.getRawNode(elem);

        var elemBCR = elem.getBoundingClientRect();
        return {
          width: Math.round(angular.isNumber(elemBCR.width) ? elemBCR.width : elem.offsetWidth),
          height: Math.round(angular.isNumber(elemBCR.height) ? elemBCR.height : elem.offsetHeight),
          top: Math.round(elemBCR.top + ($window.pageYOffset || $document[0].documentElement.scrollTop)),
          left: Math.round(elemBCR.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft))
        };
      },

      /**
       * Provides offset distance to the closest scrollable ancestor
       * or viewport.  Accounts for border and scrollbar width.
       *
       * Right and bottom dimensions represent the distance to the
       * respective edge of the viewport element.  If the element
       * edge extends beyond the viewport, a negative value will be
       * reported.
       *
       * @param {element} elem - The element to get the viewport offset for.
       * @param {boolean=} [useDocument=false] - Should the viewport be the document element instead
       * of the first scrollable element, default is false.
       * @param {boolean=} [includePadding=true] - Should the padding on the offset parent element
       * be accounted for, default is true.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**top**: distance to the top content edge of viewport element</li>
       *     <li>**bottom**: distance to the bottom content edge of viewport element</li>
       *     <li>**left**: distance to the left content edge of viewport element</li>
       *     <li>**right**: distance to the right content edge of viewport element</li>
       *   </ul>
       */
      viewportOffset: function(elem, useDocument, includePadding) {
        elem = this.getRawNode(elem);
        includePadding = includePadding !== false ? true : false;

        var elemBCR = elem.getBoundingClientRect();
        var offsetBCR = {top: 0, left: 0, bottom: 0, right: 0};

        var offsetParent = useDocument ? $document[0].documentElement : this.scrollParent(elem);
        var offsetParentBCR = offsetParent.getBoundingClientRect();

        offsetBCR.top = offsetParentBCR.top + offsetParent.clientTop;
        offsetBCR.left = offsetParentBCR.left + offsetParent.clientLeft;
        if (offsetParent === $document[0].documentElement) {
          offsetBCR.top += $window.pageYOffset;
          offsetBCR.left += $window.pageXOffset;
        }
        offsetBCR.bottom = offsetBCR.top + offsetParent.clientHeight;
        offsetBCR.right = offsetBCR.left + offsetParent.clientWidth;

        if (includePadding) {
          var offsetParentStyle = $window.getComputedStyle(offsetParent);
          offsetBCR.top += this.parseStyle(offsetParentStyle.paddingTop);
          offsetBCR.bottom -= this.parseStyle(offsetParentStyle.paddingBottom);
          offsetBCR.left += this.parseStyle(offsetParentStyle.paddingLeft);
          offsetBCR.right -= this.parseStyle(offsetParentStyle.paddingRight);
        }

        return {
          top: Math.round(elemBCR.top - offsetBCR.top),
          bottom: Math.round(offsetBCR.bottom - elemBCR.bottom),
          left: Math.round(elemBCR.left - offsetBCR.left),
          right: Math.round(offsetBCR.right - elemBCR.right)
        };
      },

      /**
       * Provides an array of placement values parsed from a placement string.
       * Along with the 'auto' indicator, supported placement strings are:
       *   <ul>
       *     <li>top: element on top, horizontally centered on host element.</li>
       *     <li>top-left: element on top, left edge aligned with host element left edge.</li>
       *     <li>top-right: element on top, lerightft edge aligned with host element right edge.</li>
       *     <li>bottom: element on bottom, horizontally centered on host element.</li>
       *     <li>bottom-left: element on bottom, left edge aligned with host element left edge.</li>
       *     <li>bottom-right: element on bottom, right edge aligned with host element right edge.</li>
       *     <li>left: element on left, vertically centered on host element.</li>
       *     <li>left-top: element on left, top edge aligned with host element top edge.</li>
       *     <li>left-bottom: element on left, bottom edge aligned with host element bottom edge.</li>
       *     <li>right: element on right, vertically centered on host element.</li>
       *     <li>right-top: element on right, top edge aligned with host element top edge.</li>
       *     <li>right-bottom: element on right, bottom edge aligned with host element bottom edge.</li>
       *   </ul>
       * A placement string with an 'auto' indicator is expected to be
       * space separated from the placement, i.e: 'auto bottom-left'  If
       * the primary and secondary placement values do not match 'top,
       * bottom, left, right' then 'top' will be the primary placement and
       * 'center' will be the secondary placement.  If 'auto' is passed, true
       * will be returned as the 3rd value of the array.
       *
       * @param {string} placement - The placement string to parse.
       *
       * @returns {array} An array with the following values
       * <ul>
       *   <li>**[0]**: The primary placement.</li>
       *   <li>**[1]**: The secondary placement.</li>
       *   <li>**[2]**: If auto is passed: true, else undefined.</li>
       * </ul>
       */
      parsePlacement: function(placement) {
        var autoPlace = PLACEMENT_REGEX.auto.test(placement);
        if (autoPlace) {
          placement = placement.replace(PLACEMENT_REGEX.auto, '');
        }

        placement = placement.split('-');

        placement[0] = placement[0] || 'top';
        if (!PLACEMENT_REGEX.primary.test(placement[0])) {
          placement[0] = 'top';
        }

        placement[1] = placement[1] || 'center';
        if (!PLACEMENT_REGEX.secondary.test(placement[1])) {
          placement[1] = 'center';
        }

        if (autoPlace) {
          placement[2] = true;
        } else {
          placement[2] = false;
        }

        return placement;
      },

      /**
       * Provides coordinates for an element to be positioned relative to
       * another element.  Passing 'auto' as part of the placement parameter
       * will enable smart placement - where the element fits. i.e:
       * 'auto left-top' will check to see if there is enough space to the left
       * of the hostElem to fit the targetElem, if not place right (same for secondary
       * top placement).  Available space is calculated using the viewportOffset
       * function.
       *
       * @param {element} hostElem - The element to position against.
       * @param {element} targetElem - The element to position.
       * @param {string=} [placement=top] - The placement for the targetElem,
       *   default is 'top'. 'center' is assumed as secondary placement for
       *   'top', 'left', 'right', and 'bottom' placements.  Available placements are:
       *   <ul>
       *     <li>top</li>
       *     <li>top-right</li>
       *     <li>top-left</li>
       *     <li>bottom</li>
       *     <li>bottom-left</li>
       *     <li>bottom-right</li>
       *     <li>left</li>
       *     <li>left-top</li>
       *     <li>left-bottom</li>
       *     <li>right</li>
       *     <li>right-top</li>
       *     <li>right-bottom</li>
       *   </ul>
       * @param {boolean=} [appendToBody=false] - Should the top and left values returned
       *   be calculated from the body element, default is false.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**top**: Value for targetElem top.</li>
       *     <li>**left**: Value for targetElem left.</li>
       *     <li>**placement**: The resolved placement.</li>
       *   </ul>
       */
      positionElements: function(hostElem, targetElem, placement, appendToBody) {
        hostElem = this.getRawNode(hostElem);
        targetElem = this.getRawNode(targetElem);

        // need to read from prop to support tests.
        var targetWidth = angular.isDefined(targetElem.offsetWidth) ? targetElem.offsetWidth : targetElem.prop('offsetWidth');
        var targetHeight = angular.isDefined(targetElem.offsetHeight) ? targetElem.offsetHeight : targetElem.prop('offsetHeight');

        placement = this.parsePlacement(placement);

        var hostElemPos = appendToBody ? this.offset(hostElem) : this.position(hostElem);
        var targetElemPos = {top: 0, left: 0, placement: ''};

        if (placement[2]) {
          var viewportOffset = this.viewportOffset(hostElem, appendToBody);

          var targetElemStyle = $window.getComputedStyle(targetElem);
          var adjustedSize = {
            width: targetWidth + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginLeft) + this.parseStyle(targetElemStyle.marginRight))),
            height: targetHeight + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginTop) + this.parseStyle(targetElemStyle.marginBottom)))
          };

          placement[0] = placement[0] === 'top' && adjustedSize.height > viewportOffset.top && adjustedSize.height <= viewportOffset.bottom ? 'bottom' :
                         placement[0] === 'bottom' && adjustedSize.height > viewportOffset.bottom && adjustedSize.height <= viewportOffset.top ? 'top' :
                         placement[0] === 'left' && adjustedSize.width > viewportOffset.left && adjustedSize.width <= viewportOffset.right ? 'right' :
                         placement[0] === 'right' && adjustedSize.width > viewportOffset.right && adjustedSize.width <= viewportOffset.left ? 'left' :
                         placement[0];

          placement[1] = placement[1] === 'top' && adjustedSize.height - hostElemPos.height > viewportOffset.bottom && adjustedSize.height - hostElemPos.height <= viewportOffset.top ? 'bottom' :
                         placement[1] === 'bottom' && adjustedSize.height - hostElemPos.height > viewportOffset.top && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom ? 'top' :
                         placement[1] === 'left' && adjustedSize.width - hostElemPos.width > viewportOffset.right && adjustedSize.width - hostElemPos.width <= viewportOffset.left ? 'right' :
                         placement[1] === 'right' && adjustedSize.width - hostElemPos.width > viewportOffset.left && adjustedSize.width - hostElemPos.width <= viewportOffset.right ? 'left' :
                         placement[1];

          if (placement[1] === 'center') {
            if (PLACEMENT_REGEX.vertical.test(placement[0])) {
              var xOverflow = hostElemPos.width / 2 - targetWidth / 2;
              if (viewportOffset.left + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.right) {
                placement[1] = 'left';
              } else if (viewportOffset.right + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.left) {
                placement[1] = 'right';
              }
            } else {
              var yOverflow = hostElemPos.height / 2 - adjustedSize.height / 2;
              if (viewportOffset.top + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom) {
                placement[1] = 'top';
              } else if (viewportOffset.bottom + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.top) {
                placement[1] = 'bottom';
              }
            }
          }
        }

        switch (placement[0]) {
          case 'top':
            targetElemPos.top = hostElemPos.top - targetHeight;
            break;
          case 'bottom':
            targetElemPos.top = hostElemPos.top + hostElemPos.height;
            break;
          case 'left':
            targetElemPos.left = hostElemPos.left - targetWidth;
            break;
          case 'right':
            targetElemPos.left = hostElemPos.left + hostElemPos.width;
            break;
        }

        switch (placement[1]) {
          case 'top':
            targetElemPos.top = hostElemPos.top;
            break;
          case 'bottom':
            targetElemPos.top = hostElemPos.top + hostElemPos.height - targetHeight;
            break;
          case 'left':
            targetElemPos.left = hostElemPos.left;
            break;
          case 'right':
            targetElemPos.left = hostElemPos.left + hostElemPos.width - targetWidth;
            break;
          case 'center':
            if (PLACEMENT_REGEX.vertical.test(placement[0])) {
              targetElemPos.left = hostElemPos.left + hostElemPos.width / 2 - targetWidth / 2;
            } else {
              targetElemPos.top = hostElemPos.top + hostElemPos.height / 2 - targetHeight / 2;
            }
            break;
        }

        targetElemPos.top = Math.round(targetElemPos.top);
        targetElemPos.left = Math.round(targetElemPos.left);
        targetElemPos.placement = placement[1] === 'center' ? placement[0] : placement[0] + '-' + placement[1];

        return targetElemPos;
      },

      /**
       * Provides a way to adjust the top positioning after first
       * render to correctly align element to top after content
       * rendering causes resized element height
       *
       * @param {array} placementClasses - The array of strings of classes
       * element should have.
       * @param {object} containerPosition - The object with container
       * position information
       * @param {number} initialHeight - The initial height for the elem.
       * @param {number} currentHeight - The current height for the elem.
       */
      adjustTop: function(placementClasses, containerPosition, initialHeight, currentHeight) {
        if (placementClasses.indexOf('top') !== -1 && initialHeight !== currentHeight) {
          return {
            top: containerPosition.top - currentHeight + 'px'
          };
        }
      },

      /**
       * Provides a way for positioning tooltip & dropdown
       * arrows when using placement options beyond the standard
       * left, right, top, or bottom.
       *
       * @param {element} elem - The tooltip/dropdown element.
       * @param {string} placement - The placement for the elem.
       */
      positionArrow: function(elem, placement) {
        elem = this.getRawNode(elem);

        var innerElem = elem.querySelector('.tooltip-inner, .popover-inner');
        if (!innerElem) {
          return;
        }

        var isTooltip = angular.element(innerElem).hasClass('tooltip-inner');

        var arrowElem = isTooltip ? elem.querySelector('.tooltip-arrow') : elem.querySelector('.arrow');
        if (!arrowElem) {
          return;
        }

        var arrowCss = {
          top: '',
          bottom: '',
          left: '',
          right: ''
        };

        placement = this.parsePlacement(placement);
        if (placement[1] === 'center') {
          // no adjustment necessary - just reset styles
          angular.element(arrowElem).css(arrowCss);
          return;
        }

        var borderProp = 'border-' + placement[0] + '-width';
        var borderWidth = $window.getComputedStyle(arrowElem)[borderProp];

        var borderRadiusProp = 'border-';
        if (PLACEMENT_REGEX.vertical.test(placement[0])) {
          borderRadiusProp += placement[0] + '-' + placement[1];
        } else {
          borderRadiusProp += placement[1] + '-' + placement[0];
        }
        borderRadiusProp += '-radius';
        var borderRadius = $window.getComputedStyle(isTooltip ? innerElem : elem)[borderRadiusProp];

        switch (placement[0]) {
          case 'top':
            arrowCss.bottom = isTooltip ? '0' : '-' + borderWidth;
            break;
          case 'bottom':
            arrowCss.top = isTooltip ? '0' : '-' + borderWidth;
            break;
          case 'left':
            arrowCss.right = isTooltip ? '0' : '-' + borderWidth;
            break;
          case 'right':
            arrowCss.left = isTooltip ? '0' : '-' + borderWidth;
            break;
        }

        arrowCss[placement[1]] = borderRadius;

        angular.element(arrowElem).css(arrowCss);
      }
    };
  }]);

angular.module('ui.bootstrap.datepickerPopup', ['ui.bootstrap.datepicker', 'ui.bootstrap.position'])

.value('$datepickerPopupLiteralWarning', true)

.constant('uibDatepickerPopupConfig', {
  altInputFormats: [],
  appendToBody: false,
  clearText: 'Clear',
  closeOnDateSelection: true,
  closeText: 'Done',
  currentText: 'Today',
  datepickerPopup: 'yyyy-MM-dd',
  datepickerPopupTemplateUrl: 'uib/template/datepickerPopup/popup.html',
  datepickerTemplateUrl: 'uib/template/datepicker/datepicker.html',
  html5Types: {
    date: 'yyyy-MM-dd',
    'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
    'month': 'yyyy-MM'
  },
  onOpenFocus: true,
  showButtonBar: true,
  placement: 'auto bottom-left'
})

.controller('UibDatepickerPopupController', ['$scope', '$element', '$attrs', '$compile', '$log', '$parse', '$window', '$document', '$rootScope', '$uibPosition', 'dateFilter', 'uibDateParser', 'uibDatepickerPopupConfig', '$timeout', 'uibDatepickerConfig', '$datepickerPopupLiteralWarning',
function($scope, $element, $attrs, $compile, $log, $parse, $window, $document, $rootScope, $position, dateFilter, dateParser, datepickerPopupConfig, $timeout, datepickerConfig, $datepickerPopupLiteralWarning) {
  var cache = {},
    isHtml5DateInput = false;
  var dateFormat, closeOnDateSelection, appendToBody, onOpenFocus,
    datepickerPopupTemplateUrl, datepickerTemplateUrl, popupEl, datepickerEl, scrollParentEl,
    ngModel, ngModelOptions, $popup, altInputFormats, watchListeners = [];

  this.init = function(_ngModel_) {
    ngModel = _ngModel_;
    ngModelOptions = angular.isObject(_ngModel_.$options) ?
      _ngModel_.$options :
      {
        timezone: null
      };
    closeOnDateSelection = angular.isDefined($attrs.closeOnDateSelection) ?
      $scope.$parent.$eval($attrs.closeOnDateSelection) :
      datepickerPopupConfig.closeOnDateSelection;
    appendToBody = angular.isDefined($attrs.datepickerAppendToBody) ?
      $scope.$parent.$eval($attrs.datepickerAppendToBody) :
      datepickerPopupConfig.appendToBody;
    onOpenFocus = angular.isDefined($attrs.onOpenFocus) ?
      $scope.$parent.$eval($attrs.onOpenFocus) : datepickerPopupConfig.onOpenFocus;
    datepickerPopupTemplateUrl = angular.isDefined($attrs.datepickerPopupTemplateUrl) ?
      $attrs.datepickerPopupTemplateUrl :
      datepickerPopupConfig.datepickerPopupTemplateUrl;
    datepickerTemplateUrl = angular.isDefined($attrs.datepickerTemplateUrl) ?
      $attrs.datepickerTemplateUrl : datepickerPopupConfig.datepickerTemplateUrl;
    altInputFormats = angular.isDefined($attrs.altInputFormats) ?
      $scope.$parent.$eval($attrs.altInputFormats) :
      datepickerPopupConfig.altInputFormats;

    $scope.showButtonBar = angular.isDefined($attrs.showButtonBar) ?
      $scope.$parent.$eval($attrs.showButtonBar) :
      datepickerPopupConfig.showButtonBar;

    if (datepickerPopupConfig.html5Types[$attrs.type]) {
      dateFormat = datepickerPopupConfig.html5Types[$attrs.type];
      isHtml5DateInput = true;
    } else {
      dateFormat = $attrs.uibDatepickerPopup || datepickerPopupConfig.datepickerPopup;
      $attrs.$observe('uibDatepickerPopup', function(value, oldValue) {
        var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
        // Invalidate the $modelValue to ensure that formatters re-run
        // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
        if (newDateFormat !== dateFormat) {
          dateFormat = newDateFormat;
          ngModel.$modelValue = null;

          if (!dateFormat) {
            throw new Error('uibDatepickerPopup must have a date format specified.');
          }
        }
      });
    }

    if (!dateFormat) {
      throw new Error('uibDatepickerPopup must have a date format specified.');
    }

    if (isHtml5DateInput && $attrs.uibDatepickerPopup) {
      throw new Error('HTML5 date input types do not support custom formats.');
    }

    // popup element used to display calendar
    popupEl = angular.element('<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>');

    popupEl.attr({
      'ng-model': 'date',
      'ng-change': 'dateSelection(date)',
      'template-url': datepickerPopupTemplateUrl
    });

    // datepicker element
    datepickerEl = angular.element(popupEl.children()[0]);
    datepickerEl.attr('template-url', datepickerTemplateUrl);

    if (!$scope.datepickerOptions) {
      $scope.datepickerOptions = {};
    }

    if (isHtml5DateInput) {
      if ($attrs.type === 'month') {
        $scope.datepickerOptions.datepickerMode = 'month';
        $scope.datepickerOptions.minMode = 'month';
      }
    }

    datepickerEl.attr('datepicker-options', 'datepickerOptions');

    if (!isHtml5DateInput) {
      // Internal API to maintain the correct ng-invalid-[key] class
      ngModel.$$parserName = 'date';
      ngModel.$validators.date = validator;
      ngModel.$parsers.unshift(parseDate);
      ngModel.$formatters.push(function(value) {
        if (ngModel.$isEmpty(value)) {
          $scope.date = value;
          return value;
        }

        if (angular.isNumber(value)) {
          value = new Date(value);
        }

        $scope.date = dateParser.fromTimezone(value, ngModelOptions.timezone);

        return dateParser.filter($scope.date, dateFormat);
      });
    } else {
      ngModel.$formatters.push(function(value) {
        $scope.date = dateParser.fromTimezone(value, ngModelOptions.timezone);
        return value;
      });
    }

    // Detect changes in the view from the text box
    ngModel.$viewChangeListeners.push(function() {
      $scope.date = parseDateString(ngModel.$viewValue);
    });

    $element.on('keydown', inputKeydownBind);

    $popup = $compile(popupEl)($scope);
    // Prevent jQuery cache memory leak (template is now redundant after linking)
    popupEl.remove();

    if (appendToBody) {
      $document.find('body').append($popup);
    } else {
      $element.after($popup);
    }

    $scope.$on('$destroy', function() {
      if ($scope.isOpen === true) {
        if (!$rootScope.$$phase) {
          $scope.$apply(function() {
            $scope.isOpen = false;
          });
        }
      }

      $popup.remove();
      $element.off('keydown', inputKeydownBind);
      $document.off('click', documentClickBind);
      if (scrollParentEl) {
        scrollParentEl.off('scroll', positionPopup);
      }
      angular.element($window).off('resize', positionPopup);

      //Clear all watch listeners on destroy
      while (watchListeners.length) {
        watchListeners.shift()();
      }
    });
  };

  $scope.getText = function(key) {
    return $scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
  };

  $scope.isDisabled = function(date) {
    if (date === 'today') {
      date = dateParser.fromTimezone(new Date(), ngModelOptions.timezone);
    }

    var dates = {};
    angular.forEach(['minDate', 'maxDate'], function(key) {
      if (!$scope.datepickerOptions[key]) {
        dates[key] = null;
      } else if (angular.isDate($scope.datepickerOptions[key])) {
        dates[key] = new Date($scope.datepickerOptions[key]);
      } else {
        if ($datepickerPopupLiteralWarning) {
          $log.warn('Literal date support has been deprecated, please switch to date object usage');
        }

        dates[key] = new Date(dateFilter($scope.datepickerOptions[key], 'medium'));
      }
    });

    return $scope.datepickerOptions &&
      dates.minDate && $scope.compare(date, dates.minDate) < 0 ||
      dates.maxDate && $scope.compare(date, dates.maxDate) > 0;
  };

  $scope.compare = function(date1, date2) {
    return new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
  };

  // Inner change
  $scope.dateSelection = function(dt) {
    $scope.date = dt;
    var date = $scope.date ? dateParser.filter($scope.date, dateFormat) : null; // Setting to NULL is necessary for form validators to function
    $element.val(date);
    ngModel.$setViewValue(date);

    if (closeOnDateSelection) {
      $scope.isOpen = false;
      $element[0].focus();
    }
  };

  $scope.keydown = function(evt) {
    if (evt.which === 27) {
      evt.stopPropagation();
      $scope.isOpen = false;
      $element[0].focus();
    }
  };

  $scope.select = function(date, evt) {
    evt.stopPropagation();

    if (date === 'today') {
      var today = new Date();
      if (angular.isDate($scope.date)) {
        date = new Date($scope.date);
        date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
      } else {
        date = dateParser.fromTimezone(today, ngModelOptions.timezone);
        date.setHours(0, 0, 0, 0);
      }
    }
    $scope.dateSelection(date);
  };

  $scope.close = function(evt) {
    evt.stopPropagation();

    $scope.isOpen = false;
    $element[0].focus();
  };

  $scope.disabled = angular.isDefined($attrs.disabled) || false;
  if ($attrs.ngDisabled) {
    watchListeners.push($scope.$parent.$watch($parse($attrs.ngDisabled), function(disabled) {
      $scope.disabled = disabled;
    }));
  }

  $scope.$watch('isOpen', function(value) {
    if (value) {
      if (!$scope.disabled) {
        $timeout(function() {
          positionPopup();

          if (onOpenFocus) {
            $scope.$broadcast('uib:datepicker.focus');
          }

          $document.on('click', documentClickBind);

          var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
          if (appendToBody || $position.parsePlacement(placement)[2]) {
            scrollParentEl = scrollParentEl || angular.element($position.scrollParent($element));
            if (scrollParentEl) {
              scrollParentEl.on('scroll', positionPopup);
            }
          } else {
            scrollParentEl = null;
          }

          angular.element($window).on('resize', positionPopup);
        }, 0, false);
      } else {
        $scope.isOpen = false;
      }
    } else {
      $document.off('click', documentClickBind);
      if (scrollParentEl) {
        scrollParentEl.off('scroll', positionPopup);
      }
      angular.element($window).off('resize', positionPopup);
    }
  });

  function cameltoDash(string) {
    return string.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); });
  }

  function parseDateString(viewValue) {
    var date = dateParser.parse(viewValue, dateFormat, $scope.date);
    if (isNaN(date)) {
      for (var i = 0; i < altInputFormats.length; i++) {
        date = dateParser.parse(viewValue, altInputFormats[i], $scope.date);
        if (!isNaN(date)) {
          return date;
        }
      }
    }
    return date;
  }

  function parseDate(viewValue) {
    if (angular.isNumber(viewValue)) {
      // presumably timestamp to date object
      viewValue = new Date(viewValue);
    }

    if (!viewValue) {
      return null;
    }

    if (angular.isDate(viewValue) && !isNaN(viewValue)) {
      return viewValue;
    }

    if (angular.isString(viewValue)) {
      var date = parseDateString(viewValue);
      if (!isNaN(date)) {
        return dateParser.toTimezone(date, ngModelOptions.timezone);
      }
    }

    return ngModel.$options && ngModel.$options.allowInvalid ? viewValue : undefined;
  }

  function validator(modelValue, viewValue) {
    var value = modelValue || viewValue;

    if (!$attrs.ngRequired && !value) {
      return true;
    }

    if (angular.isNumber(value)) {
      value = new Date(value);
    }

    if (!value) {
      return true;
    }

    if (angular.isDate(value) && !isNaN(value)) {
      return true;
    }

    if (angular.isString(value)) {
      return !isNaN(parseDateString(value));
    }

    return false;
  }

  function documentClickBind(event) {
    if (!$scope.isOpen && $scope.disabled) {
      return;
    }

    var popup = $popup[0];
    var dpContainsTarget = $element[0].contains(event.target);
    // The popup node may not be an element node
    // In some browsers (IE) only element nodes have the 'contains' function
    var popupContainsTarget = popup.contains !== undefined && popup.contains(event.target);
    if ($scope.isOpen && !(dpContainsTarget || popupContainsTarget)) {
      $scope.$apply(function() {
        $scope.isOpen = false;
      });
    }
  }

  function inputKeydownBind(evt) {
    if (evt.which === 27 && $scope.isOpen) {
      evt.preventDefault();
      evt.stopPropagation();
      $scope.$apply(function() {
        $scope.isOpen = false;
      });
      $element[0].focus();
    } else if (evt.which === 40 && !$scope.isOpen) {
      evt.preventDefault();
      evt.stopPropagation();
      $scope.$apply(function() {
        $scope.isOpen = true;
      });
    }
  }

  function positionPopup() {
    if ($scope.isOpen) {
      var dpElement = angular.element($popup[0].querySelector('.uib-datepicker-popup'));
      var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
      var position = $position.positionElements($element, dpElement, placement, appendToBody);
      dpElement.css({top: position.top + 'px', left: position.left + 'px'});
      if (dpElement.hasClass('uib-position-measure')) {
        dpElement.removeClass('uib-position-measure');
      }
    }
  }

  $scope.$on('uib:datepicker.mode', function() {
    $timeout(positionPopup, 0, false);
  });
}])

.directive('uibDatepickerPopup', function() {
  return {
    require: ['ngModel', 'uibDatepickerPopup'],
    controller: 'UibDatepickerPopupController',
    scope: {
      datepickerOptions: '=?',
      isOpen: '=?',
      currentText: '@',
      clearText: '@',
      closeText: '@'
    },
    link: function(scope, element, attrs, ctrls) {
      var ngModel = ctrls[0],
        ctrl = ctrls[1];

      ctrl.init(ngModel);
    }
  };
})

.directive('uibDatepickerPopupWrap', function() {
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepickerPopup/popup.html';
    }
  };
});

angular.module('ui.bootstrap.debounce', [])
/**
 * A helper, internal service that debounces a function
 */
  .factory('$$debounce', ['$timeout', function($timeout) {
    return function(callback, debounceTime) {
      var timeoutPromise;

      return function() {
        var self = this;
        var args = Array.prototype.slice.call(arguments);
        if (timeoutPromise) {
          $timeout.cancel(timeoutPromise);
        }

        timeoutPromise = $timeout(function() {
          callback.apply(self, args);
        }, debounceTime);
      };
    };
  }]);

angular.module('ui.bootstrap.multiMap', [])
/**
 * A helper, internal data structure that stores all references attached to key
 */
  .factory('$$multiMap', function() {
    return {
      createNew: function() {
        var map = {};

        return {
          entries: function() {
            return Object.keys(map).map(function(key) {
              return {
                key: key,
                value: map[key]
              };
            });
          },
          get: function(key) {
            return map[key];
          },
          hasKey: function(key) {
            return !!map[key];
          },
          keys: function() {
            return Object.keys(map);
          },
          put: function(key, value) {
            if (!map[key]) {
              map[key] = [];
            }

            map[key].push(value);
          },
          remove: function(key, value) {
            var values = map[key];

            if (!values) {
              return;
            }

            var idx = values.indexOf(value);

            if (idx !== -1) {
              values.splice(idx, 1);
            }

            if (!values.length) {
              delete map[key];
            }
          }
        };
      }
    };
  });

angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.multiMap', 'ui.bootstrap.position'])

.constant('uibDropdownConfig', {
  appendToOpenClass: 'uib-dropdown-open',
  openClass: 'open'
})

.service('uibDropdownService', ['$document', '$rootScope', '$$multiMap', function($document, $rootScope, $$multiMap) {
  var openScope = null;
  var openedContainers = $$multiMap.createNew();

  this.isOnlyOpen = function(dropdownScope, appendTo) {
    var openedDropdowns = openedContainers.get(appendTo);
    if (openedDropdowns) {
      var openDropdown = openedDropdowns.reduce(function(toClose, dropdown) {
        if (dropdown.scope === dropdownScope) {
          return dropdown;
        }

        return toClose;
      }, {});
      if (openDropdown) {
        return openedDropdowns.length === 1;
      }
    }

    return false;
  };

  this.open = function(dropdownScope, element, appendTo) {
    if (!openScope) {
      $document.on('click', closeDropdown);
    }

    if (openScope && openScope !== dropdownScope) {
      openScope.isOpen = false;
    }

    openScope = dropdownScope;

    if (!appendTo) {
      return;
    }

    var openedDropdowns = openedContainers.get(appendTo);
    if (openedDropdowns) {
      var openedScopes = openedDropdowns.map(function(dropdown) {
        return dropdown.scope;
      });
      if (openedScopes.indexOf(dropdownScope) === -1) {
        openedContainers.put(appendTo, {
          scope: dropdownScope
        });
      }
    } else {
      openedContainers.put(appendTo, {
        scope: dropdownScope
      });
    }
  };

  this.close = function(dropdownScope, element, appendTo) {
    if (openScope === dropdownScope) {
      $document.off('click', closeDropdown);
      $document.off('keydown', this.keybindFilter);
      openScope = null;
    }

    if (!appendTo) {
      return;
    }

    var openedDropdowns = openedContainers.get(appendTo);
    if (openedDropdowns) {
      var dropdownToClose = openedDropdowns.reduce(function(toClose, dropdown) {
        if (dropdown.scope === dropdownScope) {
          return dropdown;
        }

        return toClose;
      }, {});
      if (dropdownToClose) {
        openedContainers.remove(appendTo, dropdownToClose);
      }
    }
  };

  var closeDropdown = function(evt) {
    // This method may still be called during the same mouse event that
    // unbound this event handler. So check openScope before proceeding.
    if (!openScope) { return; }

    if (evt && openScope.getAutoClose() === 'disabled') { return; }

    if (evt && evt.which === 3) { return; }

    var toggleElement = openScope.getToggleElement();
    if (evt && toggleElement && toggleElement[0].contains(evt.target)) {
      return;
    }

    var dropdownElement = openScope.getDropdownElement();
    if (evt && openScope.getAutoClose() === 'outsideClick' &&
      dropdownElement && dropdownElement[0].contains(evt.target)) {
      return;
    }

    openScope.focusToggleElement();
    openScope.isOpen = false;

    if (!$rootScope.$$phase) {
      openScope.$apply();
    }
  };

  this.keybindFilter = function(evt) {
    if (!openScope) {
      // see this.close as ESC could have been pressed which kills the scope so we can not proceed
      return;
    }

    var dropdownElement = openScope.getDropdownElement();
    var toggleElement = openScope.getToggleElement();
    var dropdownElementTargeted = dropdownElement && dropdownElement[0].contains(evt.target);
    var toggleElementTargeted = toggleElement && toggleElement[0].contains(evt.target);
    if (evt.which === 27) {
      evt.stopPropagation();
      openScope.focusToggleElement();
      closeDropdown();
    } else if (openScope.isKeynavEnabled() && [38, 40].indexOf(evt.which) !== -1 && openScope.isOpen && (dropdownElementTargeted || toggleElementTargeted)) {
      evt.preventDefault();
      evt.stopPropagation();
      openScope.focusDropdownEntry(evt.which);
    }
  };
}])

.controller('UibDropdownController', ['$scope', '$element', '$attrs', '$parse', 'uibDropdownConfig', 'uibDropdownService', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', function($scope, $element, $attrs, $parse, dropdownConfig, uibDropdownService, $animate, $position, $document, $compile, $templateRequest) {
  var self = this,
    scope = $scope.$new(), // create a child scope so we are not polluting original one
    templateScope,
    appendToOpenClass = dropdownConfig.appendToOpenClass,
    openClass = dropdownConfig.openClass,
    getIsOpen,
    setIsOpen = angular.noop,
    toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
    appendToBody = false,
    appendTo = null,
    keynavEnabled = false,
    selectedOption = null,
    body = $document.find('body');

  $element.addClass('dropdown');

  this.init = function() {
    if ($attrs.isOpen) {
      getIsOpen = $parse($attrs.isOpen);
      setIsOpen = getIsOpen.assign;

      $scope.$watch(getIsOpen, function(value) {
        scope.isOpen = !!value;
      });
    }

    if (angular.isDefined($attrs.dropdownAppendTo)) {
      var appendToEl = $parse($attrs.dropdownAppendTo)(scope);
      if (appendToEl) {
        appendTo = angular.element(appendToEl);
      }
    }

    appendToBody = angular.isDefined($attrs.dropdownAppendToBody);
    keynavEnabled = angular.isDefined($attrs.keyboardNav);

    if (appendToBody && !appendTo) {
      appendTo = body;
    }

    if (appendTo && self.dropdownMenu) {
      appendTo.append(self.dropdownMenu);
      $element.on('$destroy', function handleDestroyEvent() {
        self.dropdownMenu.remove();
      });
    }
  };

  this.toggle = function(open) {
    scope.isOpen = arguments.length ? !!open : !scope.isOpen;
    if (angular.isFunction(setIsOpen)) {
      setIsOpen(scope, scope.isOpen);
    }

    return scope.isOpen;
  };

  // Allow other directives to watch status
  this.isOpen = function() {
    return scope.isOpen;
  };

  scope.getToggleElement = function() {
    return self.toggleElement;
  };

  scope.getAutoClose = function() {
    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
  };

  scope.getElement = function() {
    return $element;
  };

  scope.isKeynavEnabled = function() {
    return keynavEnabled;
  };

  scope.focusDropdownEntry = function(keyCode) {
    var elems = self.dropdownMenu ? //If append to body is used.
      angular.element(self.dropdownMenu).find('a') :
      $element.find('ul').eq(0).find('a');

    switch (keyCode) {
      case 40: {
        if (!angular.isNumber(self.selectedOption)) {
          self.selectedOption = 0;
        } else {
          self.selectedOption = self.selectedOption === elems.length - 1 ?
            self.selectedOption :
            self.selectedOption + 1;
        }
        break;
      }
      case 38: {
        if (!angular.isNumber(self.selectedOption)) {
          self.selectedOption = elems.length - 1;
        } else {
          self.selectedOption = self.selectedOption === 0 ?
            0 : self.selectedOption - 1;
        }
        break;
      }
    }
    elems[self.selectedOption].focus();
  };

  scope.getDropdownElement = function() {
    return self.dropdownMenu;
  };

  scope.focusToggleElement = function() {
    if (self.toggleElement) {
      self.toggleElement[0].focus();
    }
  };

  scope.$watch('isOpen', function(isOpen, wasOpen) {
    if (appendTo && self.dropdownMenu) {
      var pos = $position.positionElements($element, self.dropdownMenu, 'bottom-left', true),
        css,
        rightalign,
        scrollbarPadding,
        scrollbarWidth = 0;

      css = {
        top: pos.top + 'px',
        display: isOpen ? 'block' : 'none'
      };

      rightalign = self.dropdownMenu.hasClass('dropdown-menu-right');
      if (!rightalign) {
        css.left = pos.left + 'px';
        css.right = 'auto';
      } else {
        css.left = 'auto';
        scrollbarPadding = $position.scrollbarPadding(appendTo);

        if (scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
          scrollbarWidth = scrollbarPadding.scrollbarWidth;
        }

        css.right = window.innerWidth - scrollbarWidth -
          (pos.left + $element.prop('offsetWidth')) + 'px';
      }

      // Need to adjust our positioning to be relative to the appendTo container
      // if it's not the body element
      if (!appendToBody) {
        var appendOffset = $position.offset(appendTo);

        css.top = pos.top - appendOffset.top + 'px';

        if (!rightalign) {
          css.left = pos.left - appendOffset.left + 'px';
        } else {
          css.right = window.innerWidth -
            (pos.left - appendOffset.left + $element.prop('offsetWidth')) + 'px';
        }
      }

      self.dropdownMenu.css(css);
    }

    var openContainer = appendTo ? appendTo : $element;
    var dropdownOpenClass = appendTo ? appendToOpenClass : openClass;
    var hasOpenClass = openContainer.hasClass(dropdownOpenClass);
    var isOnlyOpen = uibDropdownService.isOnlyOpen($scope, appendTo);

    if (hasOpenClass === !isOpen) {
      var toggleClass;
      if (appendTo) {
        toggleClass = !isOnlyOpen ? 'addClass' : 'removeClass';
      } else {
        toggleClass = isOpen ? 'addClass' : 'removeClass';
      }
      $animate[toggleClass](openContainer, dropdownOpenClass).then(function() {
        if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
          toggleInvoker($scope, { open: !!isOpen });
        }
      });
    }

    if (isOpen) {
      if (self.dropdownMenuTemplateUrl) {
        $templateRequest(self.dropdownMenuTemplateUrl).then(function(tplContent) {
          templateScope = scope.$new();
          $compile(tplContent.trim())(templateScope, function(dropdownElement) {
            var newEl = dropdownElement;
            self.dropdownMenu.replaceWith(newEl);
            self.dropdownMenu = newEl;
            $document.on('keydown', uibDropdownService.keybindFilter);
          });
        });
      } else {
        $document.on('keydown', uibDropdownService.keybindFilter);
      }

      scope.focusToggleElement();
      uibDropdownService.open(scope, $element, appendTo);
    } else {
      uibDropdownService.close(scope, $element, appendTo);
      if (self.dropdownMenuTemplateUrl) {
        if (templateScope) {
          templateScope.$destroy();
        }
        var newEl = angular.element('<ul class="dropdown-menu"></ul>');
        self.dropdownMenu.replaceWith(newEl);
        self.dropdownMenu = newEl;
      }

      self.selectedOption = null;
    }

    if (angular.isFunction(setIsOpen)) {
      setIsOpen($scope, isOpen);
    }
  });
}])

.directive('uibDropdown', function() {
  return {
    controller: 'UibDropdownController',
    link: function(scope, element, attrs, dropdownCtrl) {
      dropdownCtrl.init();
    }
  };
})

.directive('uibDropdownMenu', function() {
  return {
    restrict: 'A',
    require: '?^uibDropdown',
    link: function(scope, element, attrs, dropdownCtrl) {
      if (!dropdownCtrl || angular.isDefined(attrs.dropdownNested)) {
        return;
      }

      element.addClass('dropdown-menu');

      var tplUrl = attrs.templateUrl;
      if (tplUrl) {
        dropdownCtrl.dropdownMenuTemplateUrl = tplUrl;
      }

      if (!dropdownCtrl.dropdownMenu) {
        dropdownCtrl.dropdownMenu = element;
      }
    }
  };
})

.directive('uibDropdownToggle', function() {
  return {
    require: '?^uibDropdown',
    link: function(scope, element, attrs, dropdownCtrl) {
      if (!dropdownCtrl) {
        return;
      }

      element.addClass('dropdown-toggle');

      dropdownCtrl.toggleElement = element;

      var toggleDropdown = function(event) {
        event.preventDefault();

        if (!element.hasClass('disabled') && !attrs.disabled) {
          scope.$apply(function() {
            dropdownCtrl.toggle();
          });
        }
      };

      element.on('click', toggleDropdown);

      // WAI-ARIA
      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
      scope.$watch(dropdownCtrl.isOpen, function(isOpen) {
        element.attr('aria-expanded', !!isOpen);
      });

      scope.$on('$destroy', function() {
        element.off('click', toggleDropdown);
      });
    }
  };
});

angular.module('ui.bootstrap.stackedMap', [])
/**
 * A helper, internal data structure that acts as a map but also allows getting / removing
 * elements in the LIFO order
 */
  .factory('$$stackedMap', function() {
    return {
      createNew: function() {
        var stack = [];

        return {
          add: function(key, value) {
            stack.push({
              key: key,
              value: value
            });
          },
          get: function(key) {
            for (var i = 0; i < stack.length; i++) {
              if (key === stack[i].key) {
                return stack[i];
              }
            }
          },
          keys: function() {
            var keys = [];
            for (var i = 0; i < stack.length; i++) {
              keys.push(stack[i].key);
            }
            return keys;
          },
          top: function() {
            return stack[stack.length - 1];
          },
          remove: function(key) {
            var idx = -1;
            for (var i = 0; i < stack.length; i++) {
              if (key === stack[i].key) {
                idx = i;
                break;
              }
            }
            return stack.splice(idx, 1)[0];
          },
          removeTop: function() {
            return stack.pop();
          },
          length: function() {
            return stack.length;
          }
        };
      }
    };
  });
angular.module('ui.bootstrap.modal', ['ui.bootstrap.multiMap', 'ui.bootstrap.stackedMap', 'ui.bootstrap.position'])
/**
 * Pluggable resolve mechanism for the modal resolve resolution
 * Supports UI Router's $resolve service
 */
  .provider('$uibResolve', function() {
    var resolve = this;
    this.resolver = null;

    this.setResolver = function(resolver) {
      this.resolver = resolver;
    };

    this.$get = ['$injector', '$q', function($injector, $q) {
      var resolver = resolve.resolver ? $injector.get(resolve.resolver) : null;
      return {
        resolve: function(invocables, locals, parent, self) {
          if (resolver) {
            return resolver.resolve(invocables, locals, parent, self);
          }

          var promises = [];

          angular.forEach(invocables, function(value) {
            if (angular.isFunction(value) || angular.isArray(value)) {
              promises.push($q.resolve($injector.invoke(value)));
            } else if (angular.isString(value)) {
              promises.push($q.resolve($injector.get(value)));
            } else {
              promises.push($q.resolve(value));
            }
          });

          return $q.all(promises).then(function(resolves) {
            var resolveObj = {};
            var resolveIter = 0;
            angular.forEach(invocables, function(value, key) {
              resolveObj[key] = resolves[resolveIter++];
            });

            return resolveObj;
          });
        }
      };
    }];
  })

/**
 * A helper directive for the $modal service. It creates a backdrop element.
 */
  .directive('uibModalBackdrop', ['$animate', '$injector', '$uibModalStack',
  function($animate, $injector, $modalStack) {
    return {
      restrict: 'A',
      compile: function(tElement, tAttrs) {
        tElement.addClass(tAttrs.backdropClass);
        return linkFn;
      }
    };

    function linkFn(scope, element, attrs) {
      if (attrs.modalInClass) {
        $animate.addClass(element, attrs.modalInClass);

        scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
          var done = setIsAsync();
          if (scope.modalOptions.animation) {
            $animate.removeClass(element, attrs.modalInClass).then(done);
          } else {
            done();
          }
        });
      }
    }
  }])

  .directive('uibModalWindow', ['$uibModalStack', '$q', '$animateCss', '$document',
  function($modalStack, $q, $animateCss, $document) {
    return {
      scope: {
        index: '@'
      },
      restrict: 'A',
      transclude: true,
      templateUrl: function(tElement, tAttrs) {
        return tAttrs.templateUrl || 'uib/template/modal/window.html';
      },
      link: function(scope, element, attrs) {
        element.addClass(attrs.windowTopClass || '');
        scope.size = attrs.size;

        scope.close = function(evt) {
          var modal = $modalStack.getTop();
          if (modal && modal.value.backdrop &&
            modal.value.backdrop !== 'static' &&
            evt.target === evt.currentTarget) {
            evt.preventDefault();
            evt.stopPropagation();
            $modalStack.dismiss(modal.key, 'backdrop click');
          }
        };

        // moved from template to fix issue #2280
        element.on('click', scope.close);

        // This property is only added to the scope for the purpose of detecting when this directive is rendered.
        // We can detect that by using this property in the template associated with this directive and then use
        // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
        scope.$isRendered = true;

        // Deferred object that will be resolved when this modal is rendered.
        var modalRenderDeferObj = $q.defer();
        // Resolve render promise post-digest
        scope.$$postDigest(function() {
          modalRenderDeferObj.resolve();
        });

        modalRenderDeferObj.promise.then(function() {
          var animationPromise = null;

          if (attrs.modalInClass) {
            animationPromise = $animateCss(element, {
              addClass: attrs.modalInClass
            }).start();

            scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
              var done = setIsAsync();
              $animateCss(element, {
                removeClass: attrs.modalInClass
              }).start().then(done);
            });
          }


          $q.when(animationPromise).then(function() {
            // Notify {@link $modalStack} that modal is rendered.
            var modal = $modalStack.getTop();
            if (modal) {
              $modalStack.modalRendered(modal.key);
            }

            /**
             * If something within the freshly-opened modal already has focus (perhaps via a
             * directive that causes focus) then there's no need to try to focus anything.
             */
            if (!($document[0].activeElement && element[0].contains($document[0].activeElement))) {
              var inputWithAutofocus = element[0].querySelector('[autofocus]');
              /**
               * Auto-focusing of a freshly-opened modal element causes any child elements
               * with the autofocus attribute to lose focus. This is an issue on touch
               * based devices which will show and then hide the onscreen keyboard.
               * Attempts to refocus the autofocus element via JavaScript will not reopen
               * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
               * the modal element if the modal does not contain an autofocus element.
               */
              if (inputWithAutofocus) {
                inputWithAutofocus.focus();
              } else {
                element[0].focus();
              }
            }
          });
        });
      }
    };
  }])

  .directive('uibModalAnimationClass', function() {
    return {
      compile: function(tElement, tAttrs) {
        if (tAttrs.modalAnimation) {
          tElement.addClass(tAttrs.uibModalAnimationClass);
        }
      }
    };
  })

  .directive('uibModalTransclude', ['$animate', function($animate) {
    return {
      link: function(scope, element, attrs, controller, transclude) {
        transclude(scope.$parent, function(clone) {
          element.empty();
          $animate.enter(clone, element);
        });
      }
    };
  }])

  .factory('$uibModalStack', ['$animate', '$animateCss', '$document',
    '$compile', '$rootScope', '$q', '$$multiMap', '$$stackedMap', '$uibPosition',
    function($animate, $animateCss, $document, $compile, $rootScope, $q, $$multiMap, $$stackedMap, $uibPosition) {
      var OPENED_MODAL_CLASS = 'modal-open';

      var backdropDomEl, backdropScope;
      var openedWindows = $$stackedMap.createNew();
      var openedClasses = $$multiMap.createNew();
      var $modalStack = {
        NOW_CLOSING_EVENT: 'modal.stack.now-closing'
      };
      var topModalIndex = 0;
      var previousTopOpenedModal = null;
      var ARIA_HIDDEN_ATTRIBUTE_NAME = 'data-bootstrap-modal-aria-hidden-count';

      //Modal focus behavior
      var tabbableSelector = 'a[href], area[href], input:not([disabled]):not([tabindex=\'-1\']), ' +
        'button:not([disabled]):not([tabindex=\'-1\']),select:not([disabled]):not([tabindex=\'-1\']), textarea:not([disabled]):not([tabindex=\'-1\']), ' +
        'iframe, object, embed, *[tabindex]:not([tabindex=\'-1\']), *[contenteditable=true]';
      var scrollbarPadding;
      var SNAKE_CASE_REGEXP = /[A-Z]/g;

      // TODO: extract into common dependency with tooltip
      function snake_case(name) {
        var separator = '-';
        return name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
          return (pos ? separator : '') + letter.toLowerCase();
        });
      }

      function isVisible(element) {
        return !!(element.offsetWidth ||
          element.offsetHeight ||
          element.getClientRects().length);
      }

      function backdropIndex() {
        var topBackdropIndex = -1;
        var opened = openedWindows.keys();
        for (var i = 0; i < opened.length; i++) {
          if (openedWindows.get(opened[i]).value.backdrop) {
            topBackdropIndex = i;
          }
        }

        // If any backdrop exist, ensure that it's index is always
        // right below the top modal
        if (topBackdropIndex > -1 && topBackdropIndex < topModalIndex) {
          topBackdropIndex = topModalIndex;
        }
        return topBackdropIndex;
      }

      $rootScope.$watch(backdropIndex, function(newBackdropIndex) {
        if (backdropScope) {
          backdropScope.index = newBackdropIndex;
        }
      });

      function removeModalWindow(modalInstance, elementToReceiveFocus) {
        var modalWindow = openedWindows.get(modalInstance).value;
        var appendToElement = modalWindow.appendTo;

        //clean up the stack
        openedWindows.remove(modalInstance);
        previousTopOpenedModal = openedWindows.top();
        if (previousTopOpenedModal) {
          topModalIndex = parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10);
        }

        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
          var modalBodyClass = modalWindow.openedClass || OPENED_MODAL_CLASS;
          openedClasses.remove(modalBodyClass, modalInstance);
          var areAnyOpen = openedClasses.hasKey(modalBodyClass);
          appendToElement.toggleClass(modalBodyClass, areAnyOpen);
          if (!areAnyOpen && scrollbarPadding && scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
            if (scrollbarPadding.originalRight) {
              appendToElement.css({paddingRight: scrollbarPadding.originalRight + 'px'});
            } else {
              appendToElement.css({paddingRight: ''});
            }
            scrollbarPadding = null;
          }
          toggleTopWindowClass(true);
        }, modalWindow.closedDeferred);
        checkRemoveBackdrop();

        //move focus to specified element if available, or else to body
        if (elementToReceiveFocus && elementToReceiveFocus.focus) {
          elementToReceiveFocus.focus();
        } else if (appendToElement.focus) {
          appendToElement.focus();
        }
      }

      // Add or remove "windowTopClass" from the top window in the stack
      function toggleTopWindowClass(toggleSwitch) {
        var modalWindow;

        if (openedWindows.length() > 0) {
          modalWindow = openedWindows.top().value;
          modalWindow.modalDomEl.toggleClass(modalWindow.windowTopClass || '', toggleSwitch);
        }
      }

      function checkRemoveBackdrop() {
        //remove backdrop if no longer needed
        if (backdropDomEl && backdropIndex() === -1) {
          var backdropScopeRef = backdropScope;
          removeAfterAnimate(backdropDomEl, backdropScope, function() {
            backdropScopeRef = null;
          });
          backdropDomEl = undefined;
          backdropScope = undefined;
        }
      }

      function removeAfterAnimate(domEl, scope, done, closedDeferred) {
        var asyncDeferred;
        var asyncPromise = null;
        var setIsAsync = function() {
          if (!asyncDeferred) {
            asyncDeferred = $q.defer();
            asyncPromise = asyncDeferred.promise;
          }

          return function asyncDone() {
            asyncDeferred.resolve();
          };
        };
        scope.$broadcast($modalStack.NOW_CLOSING_EVENT, setIsAsync);

        // Note that it's intentional that asyncPromise might be null.
        // That's when setIsAsync has not been called during the
        // NOW_CLOSING_EVENT broadcast.
        return $q.when(asyncPromise).then(afterAnimating);

        function afterAnimating() {
          if (afterAnimating.done) {
            return;
          }
          afterAnimating.done = true;

          $animate.leave(domEl).then(function() {
            if (done) {
              done();
            }

            domEl.remove();
            if (closedDeferred) {
              closedDeferred.resolve();
            }
          });

          scope.$destroy();
        }
      }

      $document.on('keydown', keydownListener);

      $rootScope.$on('$destroy', function() {
        $document.off('keydown', keydownListener);
      });

      function keydownListener(evt) {
        if (evt.isDefaultPrevented()) {
          return evt;
        }

        var modal = openedWindows.top();
        if (modal) {
          switch (evt.which) {
            case 27: {
              if (modal.value.keyboard) {
                evt.preventDefault();
                $rootScope.$apply(function() {
                  $modalStack.dismiss(modal.key, 'escape key press');
                });
              }
              break;
            }
            case 9: {
              var list = $modalStack.loadFocusElementList(modal);
              var focusChanged = false;
              if (evt.shiftKey) {
                if ($modalStack.isFocusInFirstItem(evt, list) || $modalStack.isModalFocused(evt, modal)) {
                  focusChanged = $modalStack.focusLastFocusableElement(list);
                }
              } else {
                if ($modalStack.isFocusInLastItem(evt, list)) {
                  focusChanged = $modalStack.focusFirstFocusableElement(list);
                }
              }

              if (focusChanged) {
                evt.preventDefault();
                evt.stopPropagation();
              }

              break;
            }
          }
        }
      }

      $modalStack.open = function(modalInstance, modal) {
        var modalOpener = $document[0].activeElement,
          modalBodyClass = modal.openedClass || OPENED_MODAL_CLASS;

        toggleTopWindowClass(false);

        // Store the current top first, to determine what index we ought to use
        // for the current top modal
        previousTopOpenedModal = openedWindows.top();

        openedWindows.add(modalInstance, {
          deferred: modal.deferred,
          renderDeferred: modal.renderDeferred,
          closedDeferred: modal.closedDeferred,
          modalScope: modal.scope,
          backdrop: modal.backdrop,
          keyboard: modal.keyboard,
          openedClass: modal.openedClass,
          windowTopClass: modal.windowTopClass,
          animation: modal.animation,
          appendTo: modal.appendTo
        });

        openedClasses.put(modalBodyClass, modalInstance);

        var appendToElement = modal.appendTo,
            currBackdropIndex = backdropIndex();

        if (!appendToElement.length) {
          throw new Error('appendTo element not found. Make sure that the element passed is in DOM.');
        }

        if (currBackdropIndex >= 0 && !backdropDomEl) {
          backdropScope = $rootScope.$new(true);
          backdropScope.modalOptions = modal;
          backdropScope.index = currBackdropIndex;
          backdropDomEl = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');
          backdropDomEl.attr({
            'class': 'modal-backdrop',
            'ng-style': '{\'z-index\': 1040 + (index && 1 || 0) + index*10}',
            'uib-modal-animation-class': 'fade',
            'modal-in-class': 'in'
          });
          if (modal.backdropClass) {
            backdropDomEl.addClass(modal.backdropClass);
          }

          if (modal.animation) {
            backdropDomEl.attr('modal-animation', 'true');
          }
          $compile(backdropDomEl)(backdropScope);
          $animate.enter(backdropDomEl, appendToElement);
          if ($uibPosition.isScrollable(appendToElement)) {
            scrollbarPadding = $uibPosition.scrollbarPadding(appendToElement);
            if (scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
              appendToElement.css({paddingRight: scrollbarPadding.right + 'px'});
            }
          }
        }

        var content;
        if (modal.component) {
          content = document.createElement(snake_case(modal.component.name));
          content = angular.element(content);
          content.attr({
            resolve: '$resolve',
            'modal-instance': '$uibModalInstance',
            close: '$close($value)',
            dismiss: '$dismiss($value)'
          });
        } else {
          content = modal.content;
        }

        // Set the top modal index based on the index of the previous top modal
        topModalIndex = previousTopOpenedModal ? parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10) + 1 : 0;
        var angularDomEl = angular.element('<div uib-modal-window="modal-window"></div>');
        angularDomEl.attr({
          'class': 'modal',
          'template-url': modal.windowTemplateUrl,
          'window-top-class': modal.windowTopClass,
          'role': 'dialog',
          'aria-labelledby': modal.ariaLabelledBy,
          'aria-describedby': modal.ariaDescribedBy,
          'size': modal.size,
          'index': topModalIndex,
          'animate': 'animate',
          'ng-style': '{\'z-index\': 1050 + $$topModalIndex*10, display: \'block\'}',
          'tabindex': -1,
          'uib-modal-animation-class': 'fade',
          'modal-in-class': 'in'
        }).append(content);
        if (modal.windowClass) {
          angularDomEl.addClass(modal.windowClass);
        }

        if (modal.animation) {
          angularDomEl.attr('modal-animation', 'true');
        }

        appendToElement.addClass(modalBodyClass);
        if (modal.scope) {
          // we need to explicitly add the modal index to the modal scope
          // because it is needed by ngStyle to compute the zIndex property.
          modal.scope.$$topModalIndex = topModalIndex;
        }
        $animate.enter($compile(angularDomEl)(modal.scope), appendToElement);

        openedWindows.top().value.modalDomEl = angularDomEl;
        openedWindows.top().value.modalOpener = modalOpener;

        applyAriaHidden(angularDomEl);

        function applyAriaHidden(el) {
          if (!el || el[0].tagName === 'BODY') {
            return;
          }

          getSiblings(el).forEach(function(sibling) {
            var elemIsAlreadyHidden = sibling.getAttribute('aria-hidden') === 'true',
              ariaHiddenCount = parseInt(sibling.getAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME), 10);

            if (!ariaHiddenCount) {
              ariaHiddenCount = elemIsAlreadyHidden ? 1 : 0;
            }

            sibling.setAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME, ariaHiddenCount + 1);
            sibling.setAttribute('aria-hidden', 'true');
          });

          return applyAriaHidden(el.parent());

          function getSiblings(el) {
            var children = el.parent() ? el.parent().children() : [];

            return Array.prototype.filter.call(children, function(child) {
              return child !== el[0];
            });
          }
        }
      };

      function broadcastClosing(modalWindow, resultOrReason, closing) {
        return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
      }

      function unhideBackgroundElements() {
        Array.prototype.forEach.call(
          document.querySelectorAll('[' + ARIA_HIDDEN_ATTRIBUTE_NAME + ']'),
          function(hiddenEl) {
            var ariaHiddenCount = parseInt(hiddenEl.getAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME), 10),
              newHiddenCount = ariaHiddenCount - 1;
            hiddenEl.setAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME, newHiddenCount);

            if (!newHiddenCount) {
              hiddenEl.removeAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME);
              hiddenEl.removeAttribute('aria-hidden');
            }
          }
        );
      }

      $modalStack.close = function(modalInstance, result) {
        var modalWindow = openedWindows.get(modalInstance);
        unhideBackgroundElements();
        if (modalWindow && broadcastClosing(modalWindow, result, true)) {
          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
          modalWindow.value.deferred.resolve(result);
          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
          return true;
        }

        return !modalWindow;
      };

      $modalStack.dismiss = function(modalInstance, reason) {
        var modalWindow = openedWindows.get(modalInstance);
        unhideBackgroundElements();
        if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
          modalWindow.value.deferred.reject(reason);
          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
          return true;
        }
        return !modalWindow;
      };

      $modalStack.dismissAll = function(reason) {
        var topModal = this.getTop();
        while (topModal && this.dismiss(topModal.key, reason)) {
          topModal = this.getTop();
        }
      };

      $modalStack.getTop = function() {
        return openedWindows.top();
      };

      $modalStack.modalRendered = function(modalInstance) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow) {
          modalWindow.value.renderDeferred.resolve();
        }
      };

      $modalStack.focusFirstFocusableElement = function(list) {
        if (list.length > 0) {
          list[0].focus();
          return true;
        }
        return false;
      };

      $modalStack.focusLastFocusableElement = function(list) {
        if (list.length > 0) {
          list[list.length - 1].focus();
          return true;
        }
        return false;
      };

      $modalStack.isModalFocused = function(evt, modalWindow) {
        if (evt && modalWindow) {
          var modalDomEl = modalWindow.value.modalDomEl;
          if (modalDomEl && modalDomEl.length) {
            return (evt.target || evt.srcElement) === modalDomEl[0];
          }
        }
        return false;
      };

      $modalStack.isFocusInFirstItem = function(evt, list) {
        if (list.length > 0) {
          return (evt.target || evt.srcElement) === list[0];
        }
        return false;
      };

      $modalStack.isFocusInLastItem = function(evt, list) {
        if (list.length > 0) {
          return (evt.target || evt.srcElement) === list[list.length - 1];
        }
        return false;
      };

      $modalStack.loadFocusElementList = function(modalWindow) {
        if (modalWindow) {
          var modalDomE1 = modalWindow.value.modalDomEl;
          if (modalDomE1 && modalDomE1.length) {
            var elements = modalDomE1[0].querySelectorAll(tabbableSelector);
            return elements ?
              Array.prototype.filter.call(elements, function(element) {
                return isVisible(element);
              }) : elements;
          }
        }
      };

      return $modalStack;
    }])

  .provider('$uibModal', function() {
    var $modalProvider = {
      options: {
        animation: true,
        backdrop: true, //can also be false or 'static'
        keyboard: true
      },
      $get: ['$rootScope', '$q', '$document', '$templateRequest', '$controller', '$uibResolve', '$uibModalStack',
        function ($rootScope, $q, $document, $templateRequest, $controller, $uibResolve, $modalStack) {
          var $modal = {};

          function getTemplatePromise(options) {
            return options.template ? $q.when(options.template) :
              $templateRequest(angular.isFunction(options.templateUrl) ?
                options.templateUrl() : options.templateUrl);
          }

          var promiseChain = null;
          $modal.getPromiseChain = function() {
            return promiseChain;
          };

          $modal.open = function(modalOptions) {
            var modalResultDeferred = $q.defer();
            var modalOpenedDeferred = $q.defer();
            var modalClosedDeferred = $q.defer();
            var modalRenderDeferred = $q.defer();

            //prepare an instance of a modal to be injected into controllers and returned to a caller
            var modalInstance = {
              result: modalResultDeferred.promise,
              opened: modalOpenedDeferred.promise,
              closed: modalClosedDeferred.promise,
              rendered: modalRenderDeferred.promise,
              close: function (result) {
                return $modalStack.close(modalInstance, result);
              },
              dismiss: function (reason) {
                return $modalStack.dismiss(modalInstance, reason);
              }
            };

            //merge and clean up options
            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
            modalOptions.resolve = modalOptions.resolve || {};
            modalOptions.appendTo = modalOptions.appendTo || $document.find('body').eq(0);

            //verify options
            if (!modalOptions.component && !modalOptions.template && !modalOptions.templateUrl) {
              throw new Error('One of component or template or templateUrl options is required.');
            }

            var templateAndResolvePromise;
            if (modalOptions.component) {
              templateAndResolvePromise = $q.when($uibResolve.resolve(modalOptions.resolve, {}, null, null));
            } else {
              templateAndResolvePromise =
                $q.all([getTemplatePromise(modalOptions), $uibResolve.resolve(modalOptions.resolve, {}, null, null)]);
            }

            function resolveWithTemplate() {
              return templateAndResolvePromise;
            }

            // Wait for the resolution of the existing promise chain.
            // Then switch to our own combined promise dependency (regardless of how the previous modal fared).
            // Then add to $modalStack and resolve opened.
            // Finally clean up the chain variable if no subsequent modal has overwritten it.
            var samePromise;
            samePromise = promiseChain = $q.all([promiseChain])
              .then(resolveWithTemplate, resolveWithTemplate)
              .then(function resolveSuccess(tplAndVars) {
                var providedScope = modalOptions.scope || $rootScope;

                var modalScope = providedScope.$new();
                modalScope.$close = modalInstance.close;
                modalScope.$dismiss = modalInstance.dismiss;

                modalScope.$on('$destroy', function() {
                  if (!modalScope.$$uibDestructionScheduled) {
                    modalScope.$dismiss('$uibUnscheduledDestruction');
                  }
                });

                var modal = {
                  scope: modalScope,
                  deferred: modalResultDeferred,
                  renderDeferred: modalRenderDeferred,
                  closedDeferred: modalClosedDeferred,
                  animation: modalOptions.animation,
                  backdrop: modalOptions.backdrop,
                  keyboard: modalOptions.keyboard,
                  backdropClass: modalOptions.backdropClass,
                  windowTopClass: modalOptions.windowTopClass,
                  windowClass: modalOptions.windowClass,
                  windowTemplateUrl: modalOptions.windowTemplateUrl,
                  ariaLabelledBy: modalOptions.ariaLabelledBy,
                  ariaDescribedBy: modalOptions.ariaDescribedBy,
                  size: modalOptions.size,
                  openedClass: modalOptions.openedClass,
                  appendTo: modalOptions.appendTo
                };

                var component = {};
                var ctrlInstance, ctrlInstantiate, ctrlLocals = {};

                if (modalOptions.component) {
                  constructLocals(component, false, true, false);
                  component.name = modalOptions.component;
                  modal.component = component;
                } else if (modalOptions.controller) {
                  constructLocals(ctrlLocals, true, false, true);

                  // the third param will make the controller instantiate later,private api
                  // @see https://github.com/angular/angular.js/blob/master/src/ng/controller.js#L126
                  ctrlInstantiate = $controller(modalOptions.controller, ctrlLocals, true, modalOptions.controllerAs);
                  if (modalOptions.controllerAs && modalOptions.bindToController) {
                    ctrlInstance = ctrlInstantiate.instance;
                    ctrlInstance.$close = modalScope.$close;
                    ctrlInstance.$dismiss = modalScope.$dismiss;
                    angular.extend(ctrlInstance, {
                      $resolve: ctrlLocals.$scope.$resolve
                    }, providedScope);
                  }

                  ctrlInstance = ctrlInstantiate();

                  if (angular.isFunction(ctrlInstance.$onInit)) {
                    ctrlInstance.$onInit();
                  }
                }

                if (!modalOptions.component) {
                  modal.content = tplAndVars[0];
                }

                $modalStack.open(modalInstance, modal);
                modalOpenedDeferred.resolve(true);

                function constructLocals(obj, template, instanceOnScope, injectable) {
                  obj.$scope = modalScope;
                  obj.$scope.$resolve = {};
                  if (instanceOnScope) {
                    obj.$scope.$uibModalInstance = modalInstance;
                  } else {
                    obj.$uibModalInstance = modalInstance;
                  }

                  var resolves = template ? tplAndVars[1] : tplAndVars;
                  angular.forEach(resolves, function(value, key) {
                    if (injectable) {
                      obj[key] = value;
                    }

                    obj.$scope.$resolve[key] = value;
                  });
                }
            }, function resolveError(reason) {
              modalOpenedDeferred.reject(reason);
              modalResultDeferred.reject(reason);
            })['finally'](function() {
              if (promiseChain === samePromise) {
                promiseChain = null;
              }
            });

            return modalInstance;
          };

          return $modal;
        }
      ]
    };

    return $modalProvider;
  });

angular.module('ui.bootstrap.paging', [])
/**
 * Helper internal service for generating common controller code between the
 * pager and pagination components
 */
.factory('uibPaging', ['$parse', function($parse) {
  return {
    create: function(ctrl, $scope, $attrs) {
      ctrl.setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;
      ctrl.ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl
      ctrl._watchers = [];

      ctrl.init = function(ngModelCtrl, config) {
        ctrl.ngModelCtrl = ngModelCtrl;
        ctrl.config = config;

        ngModelCtrl.$render = function() {
          ctrl.render();
        };

        if ($attrs.itemsPerPage) {
          ctrl._watchers.push($scope.$parent.$watch($attrs.itemsPerPage, function(value) {
            ctrl.itemsPerPage = parseInt(value, 10);
            $scope.totalPages = ctrl.calculateTotalPages();
            ctrl.updatePage();
          }));
        } else {
          ctrl.itemsPerPage = config.itemsPerPage;
        }

        $scope.$watch('totalItems', function(newTotal, oldTotal) {
          if (angular.isDefined(newTotal) || newTotal !== oldTotal) {
            $scope.totalPages = ctrl.calculateTotalPages();
            ctrl.updatePage();
          }
        });
      };

      ctrl.calculateTotalPages = function() {
        var totalPages = ctrl.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / ctrl.itemsPerPage);
        return Math.max(totalPages || 0, 1);
      };

      ctrl.render = function() {
        $scope.page = parseInt(ctrl.ngModelCtrl.$viewValue, 10) || 1;
      };

      $scope.selectPage = function(page, evt) {
        if (evt) {
          evt.preventDefault();
        }

        var clickAllowed = !$scope.ngDisabled || !evt;
        if (clickAllowed && $scope.page !== page && page > 0 && page <= $scope.totalPages) {
          if (evt && evt.target) {
            evt.target.blur();
          }
          ctrl.ngModelCtrl.$setViewValue(page);
          ctrl.ngModelCtrl.$render();
        }
      };

      $scope.getText = function(key) {
        return $scope[key + 'Text'] || ctrl.config[key + 'Text'];
      };

      $scope.noPrevious = function() {
        return $scope.page === 1;
      };

      $scope.noNext = function() {
        return $scope.page === $scope.totalPages;
      };

      ctrl.updatePage = function() {
        ctrl.setNumPages($scope.$parent, $scope.totalPages); // Readonly variable

        if ($scope.page > $scope.totalPages) {
          $scope.selectPage($scope.totalPages);
        } else {
          ctrl.ngModelCtrl.$render();
        }
      };

      $scope.$on('$destroy', function() {
        while (ctrl._watchers.length) {
          ctrl._watchers.shift()();
        }
      });
    }
  };
}]);

angular.module('ui.bootstrap.pager', ['ui.bootstrap.paging', 'ui.bootstrap.tabindex'])

.controller('UibPagerController', ['$scope', '$attrs', 'uibPaging', 'uibPagerConfig', function($scope, $attrs, uibPaging, uibPagerConfig) {
  $scope.align = angular.isDefined($attrs.align) ? $scope.$parent.$eval($attrs.align) : uibPagerConfig.align;

  uibPaging.create(this, $scope, $attrs);
}])

.constant('uibPagerConfig', {
  itemsPerPage: 10,
  previousText: '« Previous',
  nextText: 'Next »',
  align: true
})

.directive('uibPager', ['uibPagerConfig', function(uibPagerConfig) {
  return {
    scope: {
      totalItems: '=',
      previousText: '@',
      nextText: '@',
      ngDisabled: '='
    },
    require: ['uibPager', '?ngModel'],
    restrict: 'A',
    controller: 'UibPagerController',
    controllerAs: 'pager',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/pager/pager.html';
    },
    link: function(scope, element, attrs, ctrls) {
      element.addClass('pager');
      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (!ngModelCtrl) {
        return; // do nothing if no ng-model
      }

      paginationCtrl.init(ngModelCtrl, uibPagerConfig);
    }
  };
}]);

angular.module('ui.bootstrap.pagination', ['ui.bootstrap.paging', 'ui.bootstrap.tabindex'])
.controller('UibPaginationController', ['$scope', '$attrs', '$parse', 'uibPaging', 'uibPaginationConfig', function($scope, $attrs, $parse, uibPaging, uibPaginationConfig) {
  var ctrl = this;
  // Setup configuration parameters
  var maxSize = angular.isDefined($attrs.maxSize) ? $scope.$parent.$eval($attrs.maxSize) : uibPaginationConfig.maxSize,
    rotate = angular.isDefined($attrs.rotate) ? $scope.$parent.$eval($attrs.rotate) : uibPaginationConfig.rotate,
    forceEllipses = angular.isDefined($attrs.forceEllipses) ? $scope.$parent.$eval($attrs.forceEllipses) : uibPaginationConfig.forceEllipses,
    boundaryLinkNumbers = angular.isDefined($attrs.boundaryLinkNumbers) ? $scope.$parent.$eval($attrs.boundaryLinkNumbers) : uibPaginationConfig.boundaryLinkNumbers,
    pageLabel = angular.isDefined($attrs.pageLabel) ? function(idx) { return $scope.$parent.$eval($attrs.pageLabel, {$page: idx}); } : angular.identity;
  $scope.boundaryLinks = angular.isDefined($attrs.boundaryLinks) ? $scope.$parent.$eval($attrs.boundaryLinks) : uibPaginationConfig.boundaryLinks;
  $scope.directionLinks = angular.isDefined($attrs.directionLinks) ? $scope.$parent.$eval($attrs.directionLinks) : uibPaginationConfig.directionLinks;

  uibPaging.create(this, $scope, $attrs);

  if ($attrs.maxSize) {
    ctrl._watchers.push($scope.$parent.$watch($parse($attrs.maxSize), function(value) {
      maxSize = parseInt(value, 10);
      ctrl.render();
    }));
  }

  // Create page object used in template
  function makePage(number, text, isActive) {
    return {
      number: number,
      text: text,
      active: isActive
    };
  }

  function getPages(currentPage, totalPages) {
    var pages = [];

    // Default page limits
    var startPage = 1, endPage = totalPages;
    var isMaxSized = angular.isDefined(maxSize) && maxSize < totalPages;

    // recompute if maxSize
    if (isMaxSized) {
      if (rotate) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
        endPage = startPage + maxSize - 1;

        // Adjust if limit is exceeded
        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - maxSize + 1;
        }
      } else {
        // Visible pages are paginated with maxSize
        startPage = (Math.ceil(currentPage / maxSize) - 1) * maxSize + 1;

        // Adjust last page if limit is exceeded
        endPage = Math.min(startPage + maxSize - 1, totalPages);
      }
    }

    // Add page number links
    for (var number = startPage; number <= endPage; number++) {
      var page = makePage(number, pageLabel(number), number === currentPage);
      pages.push(page);
    }

    // Add links to move between page sets
    if (isMaxSized && maxSize > 0 && (!rotate || forceEllipses || boundaryLinkNumbers)) {
      if (startPage > 1) {
        if (!boundaryLinkNumbers || startPage > 3) { //need ellipsis for all options unless range is too close to beginning
        var previousPageSet = makePage(startPage - 1, '...', false);
        pages.unshift(previousPageSet);
      }
        if (boundaryLinkNumbers) {
          if (startPage === 3) { //need to replace ellipsis when the buttons would be sequential
            var secondPageLink = makePage(2, '2', false);
            pages.unshift(secondPageLink);
          }
          //add the first page
          var firstPageLink = makePage(1, '1', false);
          pages.unshift(firstPageLink);
        }
      }

      if (endPage < totalPages) {
        if (!boundaryLinkNumbers || endPage < totalPages - 2) { //need ellipsis for all options unless range is too close to end
        var nextPageSet = makePage(endPage + 1, '...', false);
        pages.push(nextPageSet);
      }
        if (boundaryLinkNumbers) {
          if (endPage === totalPages - 2) { //need to replace ellipsis when the buttons would be sequential
            var secondToLastPageLink = makePage(totalPages - 1, totalPages - 1, false);
            pages.push(secondToLastPageLink);
          }
          //add the last page
          var lastPageLink = makePage(totalPages, totalPages, false);
          pages.push(lastPageLink);
        }
      }
    }
    return pages;
  }

  var originalRender = this.render;
  this.render = function() {
    originalRender();
    if ($scope.page > 0 && $scope.page <= $scope.totalPages) {
      $scope.pages = getPages($scope.page, $scope.totalPages);
    }
  };
}])

.constant('uibPaginationConfig', {
  itemsPerPage: 10,
  boundaryLinks: false,
  boundaryLinkNumbers: false,
  directionLinks: true,
  firstText: 'First',
  previousText: 'Previous',
  nextText: 'Next',
  lastText: 'Last',
  rotate: true,
  forceEllipses: false
})

.directive('uibPagination', ['$parse', 'uibPaginationConfig', function($parse, uibPaginationConfig) {
  return {
    scope: {
      totalItems: '=',
      firstText: '@',
      previousText: '@',
      nextText: '@',
      lastText: '@',
      ngDisabled:'='
    },
    require: ['uibPagination', '?ngModel'],
    restrict: 'A',
    controller: 'UibPaginationController',
    controllerAs: 'pagination',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/pagination/pagination.html';
    },
    link: function(scope, element, attrs, ctrls) {
      element.addClass('pagination');
      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (!ngModelCtrl) {
         return; // do nothing if no ng-model
      }

      paginationCtrl.init(ngModelCtrl, uibPaginationConfig);
    }
  };
}]);

/**
 * The following features are still outstanding: animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html tooltips, and selector delegation.
 */
angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position', 'ui.bootstrap.stackedMap'])

/**
 * The $tooltip service creates tooltip- and popover-like directives as well as
 * houses global options for them.
 */
.provider('$uibTooltip', function() {
  // The default options tooltip and popover.
  var defaultOptions = {
    placement: 'top',
    placementClassPrefix: '',
    animation: true,
    popupDelay: 0,
    popupCloseDelay: 0,
    useContentExp: false
  };

  // Default hide triggers for each show trigger
  var triggerMap = {
    'mouseenter': 'mouseleave',
    'click': 'click',
    'outsideClick': 'outsideClick',
    'focus': 'blur',
    'none': ''
  };

  // The options specified to the provider globally.
  var globalOptions = {};

  /**
   * `options({})` allows global configuration of all tooltips in the
   * application.
   *
   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
   *     // place tooltips left instead of top by default
   *     $tooltipProvider.options( { placement: 'left' } );
   *   });
   */
	this.options = function(value) {
		angular.extend(globalOptions, value);
	};

  /**
   * This allows you to extend the set of trigger mappings available. E.g.:
   *
   *   $tooltipProvider.setTriggers( { 'openTrigger': 'closeTrigger' } );
   */
  this.setTriggers = function setTriggers(triggers) {
    angular.extend(triggerMap, triggers);
  };

  /**
   * This is a helper function for translating camel-case to snake_case.
   */
  function snake_case(name) {
    var regexp = /[A-Z]/g;
    var separator = '-';
    return name.replace(regexp, function(letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }

  /**
   * Returns the actual instance of the $tooltip service.
   * TODO support multiple triggers
   */
  this.$get = ['$window', '$compile', '$timeout', '$document', '$uibPosition', '$interpolate', '$rootScope', '$parse', '$$stackedMap', function($window, $compile, $timeout, $document, $position, $interpolate, $rootScope, $parse, $$stackedMap) {
    var openedTooltips = $$stackedMap.createNew();
    $document.on('keyup', keypressListener);

    $rootScope.$on('$destroy', function() {
      $document.off('keyup', keypressListener);
    });

    function keypressListener(e) {
      if (e.which === 27) {
        var last = openedTooltips.top();
        if (last) {
          last.value.close();
          last = null;
        }
      }
    }

    return function $tooltip(ttType, prefix, defaultTriggerShow, options) {
      options = angular.extend({}, defaultOptions, globalOptions, options);

      /**
       * Returns an object of show and hide triggers.
       *
       * If a trigger is supplied,
       * it is used to show the tooltip; otherwise, it will use the `trigger`
       * option passed to the `$tooltipProvider.options` method; else it will
       * default to the trigger supplied to this directive factory.
       *
       * The hide trigger is based on the show trigger. If the `trigger` option
       * was passed to the `$tooltipProvider.options` method, it will use the
       * mapped trigger from `triggerMap` or the passed trigger if the map is
       * undefined; otherwise, it uses the `triggerMap` value of the show
       * trigger; else it will just use the show trigger.
       */
      function getTriggers(trigger) {
        var show = (trigger || options.trigger || defaultTriggerShow).split(' ');
        var hide = show.map(function(trigger) {
          return triggerMap[trigger] || trigger;
        });
        return {
          show: show,
          hide: hide
        };
      }

      var directiveName = snake_case(ttType);

      var startSym = $interpolate.startSymbol();
      var endSym = $interpolate.endSymbol();
      var template =
        '<div '+ directiveName + '-popup ' +
          'uib-title="' + startSym + 'title' + endSym + '" ' +
          (options.useContentExp ?
            'content-exp="contentExp()" ' :
            'content="' + startSym + 'content' + endSym + '" ') +
          'origin-scope="origScope" ' +
          'class="uib-position-measure ' + prefix + '" ' +
          'tooltip-animation-class="fade"' +
          'uib-tooltip-classes ' +
          'ng-class="{ in: isOpen }" ' +
          '>' +
        '</div>';

      return {
        compile: function(tElem, tAttrs) {
          var tooltipLinker = $compile(template);

          return function link(scope, element, attrs, tooltipCtrl) {
            var tooltip;
            var tooltipLinkedScope;
            var transitionTimeout;
            var showTimeout;
            var hideTimeout;
            var positionTimeout;
            var adjustmentTimeout;
            var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
            var triggers = getTriggers(undefined);
            var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
            var ttScope = scope.$new(true);
            var repositionScheduled = false;
            var isOpenParse = angular.isDefined(attrs[prefix + 'IsOpen']) ? $parse(attrs[prefix + 'IsOpen']) : false;
            var contentParse = options.useContentExp ? $parse(attrs[ttType]) : false;
            var observers = [];
            var lastPlacement;

            var positionTooltip = function() {
              // check if tooltip exists and is not empty
              if (!tooltip || !tooltip.html()) { return; }

              if (!positionTimeout) {
                positionTimeout = $timeout(function() {
                  var ttPosition = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
                  var initialHeight = angular.isDefined(tooltip.offsetHeight) ? tooltip.offsetHeight : tooltip.prop('offsetHeight');
                  var elementPos = appendToBody ? $position.offset(element) : $position.position(element);
                  tooltip.css({ top: ttPosition.top + 'px', left: ttPosition.left + 'px' });
                  var placementClasses = ttPosition.placement.split('-');

                  if (!tooltip.hasClass(placementClasses[0])) {
                    tooltip.removeClass(lastPlacement.split('-')[0]);
                    tooltip.addClass(placementClasses[0]);
                  }

                  if (!tooltip.hasClass(options.placementClassPrefix + ttPosition.placement)) {
                    tooltip.removeClass(options.placementClassPrefix + lastPlacement);
                    tooltip.addClass(options.placementClassPrefix + ttPosition.placement);
                  }

                  adjustmentTimeout = $timeout(function() {
                    var currentHeight = angular.isDefined(tooltip.offsetHeight) ? tooltip.offsetHeight : tooltip.prop('offsetHeight');
                    var adjustment = $position.adjustTop(placementClasses, elementPos, initialHeight, currentHeight);
                    if (adjustment) {
                      tooltip.css(adjustment);
                    }
                    adjustmentTimeout = null;
                  }, 0, false);

                  // first time through tt element will have the
                  // uib-position-measure class or if the placement
                  // has changed we need to position the arrow.
                  if (tooltip.hasClass('uib-position-measure')) {
                    $position.positionArrow(tooltip, ttPosition.placement);
                    tooltip.removeClass('uib-position-measure');
                  } else if (lastPlacement !== ttPosition.placement) {
                    $position.positionArrow(tooltip, ttPosition.placement);
                  }
                  lastPlacement = ttPosition.placement;

                  positionTimeout = null;
                }, 0, false);
              }
            };

            // Set up the correct scope to allow transclusion later
            ttScope.origScope = scope;

            // By default, the tooltip is not open.
            // TODO add ability to start tooltip opened
            ttScope.isOpen = false;

            function toggleTooltipBind() {
              if (!ttScope.isOpen) {
                showTooltipBind();
              } else {
                hideTooltipBind();
              }
            }

            // Show the tooltip with delay if specified, otherwise show it immediately
            function showTooltipBind() {
              if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
                return;
              }

              cancelHide();
              prepareTooltip();

              if (ttScope.popupDelay) {
                // Do nothing if the tooltip was already scheduled to pop-up.
                // This happens if show is triggered multiple times before any hide is triggered.
                if (!showTimeout) {
                  showTimeout = $timeout(show, ttScope.popupDelay, false);
                }
              } else {
                show();
              }
            }

            function hideTooltipBind() {
              cancelShow();

              if (ttScope.popupCloseDelay) {
                if (!hideTimeout) {
                  hideTimeout = $timeout(hide, ttScope.popupCloseDelay, false);
                }
              } else {
                hide();
              }
            }

            // Show the tooltip popup element.
            function show() {
              cancelShow();
              cancelHide();

              // Don't show empty tooltips.
              if (!ttScope.content) {
                return angular.noop;
              }

              createTooltip();

              // And show the tooltip.
              ttScope.$evalAsync(function() {
                ttScope.isOpen = true;
                assignIsOpen(true);
                positionTooltip();
              });
            }

            function cancelShow() {
              if (showTimeout) {
                $timeout.cancel(showTimeout);
                showTimeout = null;
              }

              if (positionTimeout) {
                $timeout.cancel(positionTimeout);
                positionTimeout = null;
              }
            }

            // Hide the tooltip popup element.
            function hide() {
              if (!ttScope) {
                return;
              }

              // First things first: we don't show it anymore.
              ttScope.$evalAsync(function() {
                if (ttScope) {
                  ttScope.isOpen = false;
                  assignIsOpen(false);
                  // And now we remove it from the DOM. However, if we have animation, we
                  // need to wait for it to expire beforehand.
                  // FIXME: this is a placeholder for a port of the transitions library.
                  // The fade transition in TWBS is 150ms.
                  if (ttScope.animation) {
                    if (!transitionTimeout) {
                      transitionTimeout = $timeout(removeTooltip, 150, false);
                    }
                  } else {
                    removeTooltip();
                  }
                }
              });
            }

            function cancelHide() {
              if (hideTimeout) {
                $timeout.cancel(hideTimeout);
                hideTimeout = null;
              }

              if (transitionTimeout) {
                $timeout.cancel(transitionTimeout);
                transitionTimeout = null;
              }
            }

            function createTooltip() {
              // There can only be one tooltip element per directive shown at once.
              if (tooltip) {
                return;
              }

              tooltipLinkedScope = ttScope.$new();
              tooltip = tooltipLinker(tooltipLinkedScope, function(tooltip) {
                if (appendToBody) {
                  $document.find('body').append(tooltip);
                } else {
                  element.after(tooltip);
                }
              });

              openedTooltips.add(ttScope, {
                close: hide
              });

              prepObservers();
            }

            function removeTooltip() {
              cancelShow();
              cancelHide();
              unregisterObservers();

              if (tooltip) {
                tooltip.remove();
                
                tooltip = null;
                if (adjustmentTimeout) {
                  $timeout.cancel(adjustmentTimeout);
                }
              }

              openedTooltips.remove(ttScope);
              
              if (tooltipLinkedScope) {
                tooltipLinkedScope.$destroy();
                tooltipLinkedScope = null;
              }
            }

            /**
             * Set the initial scope values. Once
             * the tooltip is created, the observers
             * will be added to keep things in sync.
             */
            function prepareTooltip() {
              ttScope.title = attrs[prefix + 'Title'];
              if (contentParse) {
                ttScope.content = contentParse(scope);
              } else {
                ttScope.content = attrs[ttType];
              }

              ttScope.popupClass = attrs[prefix + 'Class'];
              ttScope.placement = angular.isDefined(attrs[prefix + 'Placement']) ? attrs[prefix + 'Placement'] : options.placement;
              var placement = $position.parsePlacement(ttScope.placement);
              lastPlacement = placement[1] ? placement[0] + '-' + placement[1] : placement[0];

              var delay = parseInt(attrs[prefix + 'PopupDelay'], 10);
              var closeDelay = parseInt(attrs[prefix + 'PopupCloseDelay'], 10);
              ttScope.popupDelay = !isNaN(delay) ? delay : options.popupDelay;
              ttScope.popupCloseDelay = !isNaN(closeDelay) ? closeDelay : options.popupCloseDelay;
            }

            function assignIsOpen(isOpen) {
              if (isOpenParse && angular.isFunction(isOpenParse.assign)) {
                isOpenParse.assign(scope, isOpen);
              }
            }

            ttScope.contentExp = function() {
              return ttScope.content;
            };

            /**
             * Observe the relevant attributes.
             */
            attrs.$observe('disabled', function(val) {
              if (val) {
                cancelShow();
              }

              if (val && ttScope.isOpen) {
                hide();
              }
            });

            if (isOpenParse) {
              scope.$watch(isOpenParse, function(val) {
                if (ttScope && !val === ttScope.isOpen) {
                  toggleTooltipBind();
                }
              });
            }

            function prepObservers() {
              observers.length = 0;

              if (contentParse) {
                observers.push(
                  scope.$watch(contentParse, function(val) {
                    ttScope.content = val;
                    if (!val && ttScope.isOpen) {
                      hide();
                    }
                  })
                );

                observers.push(
                  tooltipLinkedScope.$watch(function() {
                    if (!repositionScheduled) {
                      repositionScheduled = true;
                      tooltipLinkedScope.$$postDigest(function() {
                        repositionScheduled = false;
                        if (ttScope && ttScope.isOpen) {
                          positionTooltip();
                        }
                      });
                    }
                  })
                );
              } else {
                observers.push(
                  attrs.$observe(ttType, function(val) {
                    ttScope.content = val;
                    if (!val && ttScope.isOpen) {
                      hide();
                    } else {
                      positionTooltip();
                    }
                  })
                );
              }

              observers.push(
                attrs.$observe(prefix + 'Title', function(val) {
                  ttScope.title = val;
                  if (ttScope.isOpen) {
                    positionTooltip();
                  }
                })
              );

              observers.push(
                attrs.$observe(prefix + 'Placement', function(val) {
                  ttScope.placement = val ? val : options.placement;
                  if (ttScope.isOpen) {
                    positionTooltip();
                  }
                })
              );
            }

            function unregisterObservers() {
              if (observers.length) {
                angular.forEach(observers, function(observer) {
                  observer();
                });
                observers.length = 0;
              }
            }

            // hide tooltips/popovers for outsideClick trigger
            function bodyHideTooltipBind(e) {
              if (!ttScope || !ttScope.isOpen || !tooltip) {
                return;
              }
              // make sure the tooltip/popover link or tool tooltip/popover itself were not clicked
              if (!element[0].contains(e.target) && !tooltip[0].contains(e.target)) {
                hideTooltipBind();
              }
            }

            var unregisterTriggers = function() {
              triggers.show.forEach(function(trigger) {
                if (trigger === 'outsideClick') {
                  element.off('click', toggleTooltipBind);
                } else {
                  element.off(trigger, showTooltipBind);
                  element.off(trigger, toggleTooltipBind);
                }
              });
              triggers.hide.forEach(function(trigger) {
                if (trigger === 'outsideClick') {
                  $document.off('click', bodyHideTooltipBind);
                } else {
                  element.off(trigger, hideTooltipBind);
                }
              });
            };

            function prepTriggers() {
              var showTriggers = [], hideTriggers = [];
              var val = scope.$eval(attrs[prefix + 'Trigger']);
              unregisterTriggers();

              if (angular.isObject(val)) {
                Object.keys(val).forEach(function(key) {
                  showTriggers.push(key);
                  hideTriggers.push(val[key]);
                });
                triggers = {
                  show: showTriggers,
                  hide: hideTriggers
                };
              } else {
                triggers = getTriggers(val);
              }

              if (triggers.show !== 'none') {
                triggers.show.forEach(function(trigger, idx) {
                  if (trigger === 'outsideClick') {
                    element.on('click', toggleTooltipBind);
                    $document.on('click', bodyHideTooltipBind);
                  } else if (trigger === triggers.hide[idx]) {
                    element.on(trigger, toggleTooltipBind);
                  } else if (trigger) {
                    element.on(trigger, showTooltipBind);
                    element.on(triggers.hide[idx], hideTooltipBind);
                  }

                  element.on('keypress', function(e) {
                    if (e.which === 27) {
                      hideTooltipBind();
                    }
                  });
                });
              }
            }

            prepTriggers();

            var animation = scope.$eval(attrs[prefix + 'Animation']);
            ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;

            var appendToBodyVal;
            var appendKey = prefix + 'AppendToBody';
            if (appendKey in attrs && attrs[appendKey] === undefined) {
              appendToBodyVal = true;
            } else {
              appendToBodyVal = scope.$eval(attrs[appendKey]);
            }

            appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;

            // Make sure tooltip is destroyed and removed.
            scope.$on('$destroy', function onDestroyTooltip() {
              unregisterTriggers();
              removeTooltip();
              ttScope = null;
            });
          };
        }
      };
    };
  }];
})

// This is mostly ngInclude code but with a custom scope
.directive('uibTooltipTemplateTransclude', [
         '$animate', '$sce', '$compile', '$templateRequest',
function ($animate, $sce, $compile, $templateRequest) {
  return {
    link: function(scope, elem, attrs) {
      var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);

      var changeCounter = 0,
        currentScope,
        previousElement,
        currentElement;

      var cleanupLastIncludeContent = function() {
        if (previousElement) {
          previousElement.remove();
          previousElement = null;
        }

        if (currentScope) {
          currentScope.$destroy();
          currentScope = null;
        }

        if (currentElement) {
          $animate.leave(currentElement).then(function() {
            previousElement = null;
          });
          previousElement = currentElement;
          currentElement = null;
        }
      };

      scope.$watch($sce.parseAsResourceUrl(attrs.uibTooltipTemplateTransclude), function(src) {
        var thisChangeId = ++changeCounter;

        if (src) {
          //set the 2nd param to true to ignore the template request error so that the inner
          //contents and scope can be cleaned up.
          $templateRequest(src, true).then(function(response) {
            if (thisChangeId !== changeCounter) { return; }
            var newScope = origScope.$new();
            var template = response;

            var clone = $compile(template)(newScope, function(clone) {
              cleanupLastIncludeContent();
              $animate.enter(clone, elem);
            });

            currentScope = newScope;
            currentElement = clone;

            currentScope.$emit('$includeContentLoaded', src);
          }, function() {
            if (thisChangeId === changeCounter) {
              cleanupLastIncludeContent();
              scope.$emit('$includeContentError', src);
            }
          });
          scope.$emit('$includeContentRequested', src);
        } else {
          cleanupLastIncludeContent();
        }
      });

      scope.$on('$destroy', cleanupLastIncludeContent);
    }
  };
}])

/**
 * Note that it's intentional that these classes are *not* applied through $animate.
 * They must not be animated as they're expected to be present on the tooltip on
 * initialization.
 */
.directive('uibTooltipClasses', ['$uibPosition', function($uibPosition) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      // need to set the primary position so the
      // arrow has space during position measure.
      // tooltip.positionTooltip()
      if (scope.placement) {
        // // There are no top-left etc... classes
        // // in TWBS, so we need the primary position.
        var position = $uibPosition.parsePlacement(scope.placement);
        element.addClass(position[0]);
      }

      if (scope.popupClass) {
        element.addClass(scope.popupClass);
      }

      if (scope.animation) {
        element.addClass(attrs.tooltipAnimationClass);
      }
    }
  };
}])

.directive('uibTooltipPopup', function() {
  return {
    restrict: 'A',
    scope: { content: '@' },
    templateUrl: 'uib/template/tooltip/tooltip-popup.html'
  };
})

.directive('uibTooltip', [ '$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibTooltip', 'tooltip', 'mouseenter');
}])

.directive('uibTooltipTemplatePopup', function() {
  return {
    restrict: 'A',
    scope: { contentExp: '&', originScope: '&' },
    templateUrl: 'uib/template/tooltip/tooltip-template-popup.html'
  };
})

.directive('uibTooltipTemplate', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibTooltipTemplate', 'tooltip', 'mouseenter', {
    useContentExp: true
  });
}])

.directive('uibTooltipHtmlPopup', function() {
  return {
    restrict: 'A',
    scope: { contentExp: '&' },
    templateUrl: 'uib/template/tooltip/tooltip-html-popup.html'
  };
})

.directive('uibTooltipHtml', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibTooltipHtml', 'tooltip', 'mouseenter', {
    useContentExp: true
  });
}]);

/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, and selector delegatation.
 */
angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip'])

.directive('uibPopoverTemplatePopup', function() {
  return {
    restrict: 'A',
    scope: { uibTitle: '@', contentExp: '&', originScope: '&' },
    templateUrl: 'uib/template/popover/popover-template.html'
  };
})

.directive('uibPopoverTemplate', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibPopoverTemplate', 'popover', 'click', {
    useContentExp: true
  });
}])

.directive('uibPopoverHtmlPopup', function() {
  return {
    restrict: 'A',
    scope: { contentExp: '&', uibTitle: '@' },
    templateUrl: 'uib/template/popover/popover-html.html'
  };
})

.directive('uibPopoverHtml', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibPopoverHtml', 'popover', 'click', {
    useContentExp: true
  });
}])

.directive('uibPopoverPopup', function() {
  return {
    restrict: 'A',
    scope: { uibTitle: '@', content: '@' },
    templateUrl: 'uib/template/popover/popover.html'
  };
})

.directive('uibPopover', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibPopover', 'popover', 'click');
}]);

angular.module('ui.bootstrap.progressbar', [])

.constant('uibProgressConfig', {
  animate: true,
  max: 100
})

.controller('UibProgressController', ['$scope', '$attrs', 'uibProgressConfig', function($scope, $attrs, progressConfig) {
  var self = this,
      animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;

  this.bars = [];
  $scope.max = getMaxOrDefault();

  this.addBar = function(bar, element, attrs) {
    if (!animate) {
      element.css({'transition': 'none'});
    }

    this.bars.push(bar);

    bar.max = getMaxOrDefault();
    bar.title = attrs && angular.isDefined(attrs.title) ? attrs.title : 'progressbar';

    bar.$watch('value', function(value) {
      bar.recalculatePercentage();
    });

    bar.recalculatePercentage = function() {
      var totalPercentage = self.bars.reduce(function(total, bar) {
        bar.percent = +(100 * bar.value / bar.max).toFixed(2);
        return total + bar.percent;
      }, 0);

      if (totalPercentage > 100) {
        bar.percent -= totalPercentage - 100;
      }
    };

    bar.$on('$destroy', function() {
      element = null;
      self.removeBar(bar);
    });
  };

  this.removeBar = function(bar) {
    this.bars.splice(this.bars.indexOf(bar), 1);
    this.bars.forEach(function (bar) {
      bar.recalculatePercentage();
    });
  };

  //$attrs.$observe('maxParam', function(maxParam) {
  $scope.$watch('maxParam', function(maxParam) {
    self.bars.forEach(function(bar) {
      bar.max = getMaxOrDefault();
      bar.recalculatePercentage();
    });
  });

  function getMaxOrDefault () {
    return angular.isDefined($scope.maxParam) ? $scope.maxParam : progressConfig.max;
  }
}])

.directive('uibProgress', function() {
  return {
    replace: true,
    transclude: true,
    controller: 'UibProgressController',
    require: 'uibProgress',
    scope: {
      maxParam: '=?max'
    },
    templateUrl: 'uib/template/progressbar/progress.html'
  };
})

.directive('uibBar', function() {
  return {
    replace: true,
    transclude: true,
    require: '^uibProgress',
    scope: {
      value: '=',
      type: '@'
    },
    templateUrl: 'uib/template/progressbar/bar.html',
    link: function(scope, element, attrs, progressCtrl) {
      progressCtrl.addBar(scope, element, attrs);
    }
  };
})

.directive('uibProgressbar', function() {
  return {
    replace: true,
    transclude: true,
    controller: 'UibProgressController',
    scope: {
      value: '=',
      maxParam: '=?max',
      type: '@'
    },
    templateUrl: 'uib/template/progressbar/progressbar.html',
    link: function(scope, element, attrs, progressCtrl) {
      progressCtrl.addBar(scope, angular.element(element.children()[0]), {title: attrs.title});
    }
  };
});

angular.module('ui.bootstrap.rating', [])

.constant('uibRatingConfig', {
  max: 5,
  stateOn: null,
  stateOff: null,
  enableReset: true,
  titles: ['one', 'two', 'three', 'four', 'five']
})

.controller('UibRatingController', ['$scope', '$attrs', 'uibRatingConfig', function($scope, $attrs, ratingConfig) {
  var ngModelCtrl = { $setViewValue: angular.noop },
    self = this;

  this.init = function(ngModelCtrl_) {
    ngModelCtrl = ngModelCtrl_;
    ngModelCtrl.$render = this.render;

    ngModelCtrl.$formatters.push(function(value) {
      if (angular.isNumber(value) && value << 0 !== value) {
        value = Math.round(value);
      }

      return value;
    });

    this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
    this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
    this.enableReset = angular.isDefined($attrs.enableReset) ?
      $scope.$parent.$eval($attrs.enableReset) : ratingConfig.enableReset;
    var tmpTitles = angular.isDefined($attrs.titles) ? $scope.$parent.$eval($attrs.titles) : ratingConfig.titles;
    this.titles = angular.isArray(tmpTitles) && tmpTitles.length > 0 ?
      tmpTitles : ratingConfig.titles;

    var ratingStates = angular.isDefined($attrs.ratingStates) ?
      $scope.$parent.$eval($attrs.ratingStates) :
      new Array(angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max);
    $scope.range = this.buildTemplateObjects(ratingStates);
  };

  this.buildTemplateObjects = function(states) {
    for (var i = 0, n = states.length; i < n; i++) {
      states[i] = angular.extend({ index: i }, { stateOn: this.stateOn, stateOff: this.stateOff, title: this.getTitle(i) }, states[i]);
    }
    return states;
  };

  this.getTitle = function(index) {
    if (index >= this.titles.length) {
      return index + 1;
    }

    return this.titles[index];
  };

  $scope.rate = function(value) {
    if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
      var newViewValue = self.enableReset && ngModelCtrl.$viewValue === value ? 0 : value;
      ngModelCtrl.$setViewValue(newViewValue);
      ngModelCtrl.$render();
    }
  };

  $scope.enter = function(value) {
    if (!$scope.readonly) {
      $scope.value = value;
    }
    $scope.onHover({value: value});
  };

  $scope.reset = function() {
    $scope.value = ngModelCtrl.$viewValue;
    $scope.onLeave();
  };

  $scope.onKeydown = function(evt) {
    if (/(37|38|39|40)/.test(evt.which)) {
      evt.preventDefault();
      evt.stopPropagation();
      $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1));
    }
  };

  this.render = function() {
    $scope.value = ngModelCtrl.$viewValue;
    $scope.title = self.getTitle($scope.value - 1);
  };
}])

.directive('uibRating', function() {
  return {
    require: ['uibRating', 'ngModel'],
    restrict: 'A',
    scope: {
      readonly: '=?readOnly',
      onHover: '&',
      onLeave: '&'
    },
    controller: 'UibRatingController',
    templateUrl: 'uib/template/rating/rating.html',
    link: function(scope, element, attrs, ctrls) {
      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      ratingCtrl.init(ngModelCtrl);
    }
  };
});

angular.module('ui.bootstrap.tabs', [])

.controller('UibTabsetController', ['$scope', function ($scope) {
  var ctrl = this,
    oldIndex;
  ctrl.tabs = [];

  ctrl.select = function(index, evt) {
    if (!destroyed) {
      var previousIndex = findTabIndex(oldIndex);
      var previousSelected = ctrl.tabs[previousIndex];
      if (previousSelected) {
        previousSelected.tab.onDeselect({
          $event: evt,
          $selectedIndex: index
        });
        if (evt && evt.isDefaultPrevented()) {
          return;
        }
        previousSelected.tab.active = false;
      }

      var selected = ctrl.tabs[index];
      if (selected) {
        selected.tab.onSelect({
          $event: evt
        });
        selected.tab.active = true;
        ctrl.active = selected.index;
        oldIndex = selected.index;
      } else if (!selected && angular.isDefined(oldIndex)) {
        ctrl.active = null;
        oldIndex = null;
      }
    }
  };

  ctrl.addTab = function addTab(tab) {
    ctrl.tabs.push({
      tab: tab,
      index: tab.index
    });
    ctrl.tabs.sort(function(t1, t2) {
      if (t1.index > t2.index) {
        return 1;
      }

      if (t1.index < t2.index) {
        return -1;
      }

      return 0;
    });

    if (tab.index === ctrl.active || !angular.isDefined(ctrl.active) && ctrl.tabs.length === 1) {
      var newActiveIndex = findTabIndex(tab.index);
      ctrl.select(newActiveIndex);
    }
  };

  ctrl.removeTab = function removeTab(tab) {
    var index;
    for (var i = 0; i < ctrl.tabs.length; i++) {
      if (ctrl.tabs[i].tab === tab) {
        index = i;
        break;
      }
    }

    if (ctrl.tabs[index].index === ctrl.active) {
      var newActiveTabIndex = index === ctrl.tabs.length - 1 ?
        index - 1 : index + 1 % ctrl.tabs.length;
      ctrl.select(newActiveTabIndex);
    }

    ctrl.tabs.splice(index, 1);
  };

  $scope.$watch('tabset.active', function(val) {
    if (angular.isDefined(val) && val !== oldIndex) {
      ctrl.select(findTabIndex(val));
    }
  });

  var destroyed;
  $scope.$on('$destroy', function() {
    destroyed = true;
  });

  function findTabIndex(index) {
    for (var i = 0; i < ctrl.tabs.length; i++) {
      if (ctrl.tabs[i].index === index) {
        return i;
      }
    }
  }
}])

.directive('uibTabset', function() {
  return {
    transclude: true,
    replace: true,
    scope: {},
    bindToController: {
      active: '=?',
      type: '@'
    },
    controller: 'UibTabsetController',
    controllerAs: 'tabset',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/tabs/tabset.html';
    },
    link: function(scope, element, attrs) {
      scope.vertical = angular.isDefined(attrs.vertical) ?
        scope.$parent.$eval(attrs.vertical) : false;
      scope.justified = angular.isDefined(attrs.justified) ?
        scope.$parent.$eval(attrs.justified) : false;
    }
  };
})

.directive('uibTab', ['$parse', function($parse) {
  return {
    require: '^uibTabset',
    replace: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/tabs/tab.html';
    },
    transclude: true,
    scope: {
      heading: '@',
      index: '=?',
      classes: '@?',
      onSelect: '&select', //This callback is called in contentHeadingTransclude
                          //once it inserts the tab's content into the dom
      onDeselect: '&deselect'
    },
    controller: function() {
      //Empty controller so other directives can require being 'under' a tab
    },
    controllerAs: 'tab',
    link: function(scope, elm, attrs, tabsetCtrl, transclude) {
      scope.disabled = false;
      if (attrs.disable) {
        scope.$parent.$watch($parse(attrs.disable), function(value) {
          scope.disabled = !! value;
        });
      }

      if (angular.isUndefined(attrs.index)) {
        if (tabsetCtrl.tabs && tabsetCtrl.tabs.length) {
          scope.index = Math.max.apply(null, tabsetCtrl.tabs.map(function(t) { return t.index; })) + 1;
        } else {
          scope.index = 0;
        }
      }

      if (angular.isUndefined(attrs.classes)) {
        scope.classes = '';
      }

      scope.select = function(evt) {
        if (!scope.disabled) {
          var index;
          for (var i = 0; i < tabsetCtrl.tabs.length; i++) {
            if (tabsetCtrl.tabs[i].tab === scope) {
              index = i;
              break;
            }
          }

          tabsetCtrl.select(index, evt);
        }
      };

      tabsetCtrl.addTab(scope);
      scope.$on('$destroy', function() {
        tabsetCtrl.removeTab(scope);
      });

      //We need to transclude later, once the content container is ready.
      //when this link happens, we're inside a tab heading.
      scope.$transcludeFn = transclude;
    }
  };
}])

.directive('uibTabHeadingTransclude', function() {
  return {
    restrict: 'A',
    require: '^uibTab',
    link: function(scope, elm) {
      scope.$watch('headingElement', function updateHeadingElement(heading) {
        if (heading) {
          elm.html('');
          elm.append(heading);
        }
      });
    }
  };
})

.directive('uibTabContentTransclude', function() {
  return {
    restrict: 'A',
    require: '^uibTabset',
    link: function(scope, elm, attrs) {
      var tab = scope.$eval(attrs.uibTabContentTransclude).tab;

      //Now our tab is ready to be transcluded: both the tab heading area
      //and the tab content area are loaded.  Transclude 'em both.
      tab.$transcludeFn(tab.$parent, function(contents) {
        angular.forEach(contents, function(node) {
          if (isTabHeading(node)) {
            //Let tabHeadingTransclude know.
            tab.headingElement = node;
          } else {
            elm.append(node);
          }
        });
      });
    }
  };

  function isTabHeading(node) {
    return node.tagName && (
      node.hasAttribute('uib-tab-heading') ||
      node.hasAttribute('data-uib-tab-heading') ||
      node.hasAttribute('x-uib-tab-heading') ||
      node.tagName.toLowerCase() === 'uib-tab-heading' ||
      node.tagName.toLowerCase() === 'data-uib-tab-heading' ||
      node.tagName.toLowerCase() === 'x-uib-tab-heading' ||
      node.tagName.toLowerCase() === 'uib:tab-heading'
    );
  }
});

angular.module('ui.bootstrap.timepicker', [])

.constant('uibTimepickerConfig', {
  hourStep: 1,
  minuteStep: 1,
  secondStep: 1,
  showMeridian: true,
  showSeconds: false,
  meridians: null,
  readonlyInput: false,
  mousewheel: true,
  arrowkeys: true,
  showSpinners: true,
  templateUrl: 'uib/template/timepicker/timepicker.html'
})

.controller('UibTimepickerController', ['$scope', '$element', '$attrs', '$parse', '$log', '$locale', 'uibTimepickerConfig', function($scope, $element, $attrs, $parse, $log, $locale, timepickerConfig) {
  var hoursModelCtrl, minutesModelCtrl, secondsModelCtrl;
  var selected = new Date(),
    watchers = [],
    ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
    meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS,
    padHours = angular.isDefined($attrs.padHours) ? $scope.$parent.$eval($attrs.padHours) : true;

  $scope.tabindex = angular.isDefined($attrs.tabindex) ? $attrs.tabindex : 0;
  $element.removeAttr('tabindex');

  this.init = function(ngModelCtrl_, inputs) {
    ngModelCtrl = ngModelCtrl_;
    ngModelCtrl.$render = this.render;

    ngModelCtrl.$formatters.unshift(function(modelValue) {
      return modelValue ? new Date(modelValue) : null;
    });

    var hoursInputEl = inputs.eq(0),
        minutesInputEl = inputs.eq(1),
        secondsInputEl = inputs.eq(2);

    hoursModelCtrl = hoursInputEl.controller('ngModel');
    minutesModelCtrl = minutesInputEl.controller('ngModel');
    secondsModelCtrl = secondsInputEl.controller('ngModel');

    var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;

    if (mousewheel) {
      this.setupMousewheelEvents(hoursInputEl, minutesInputEl, secondsInputEl);
    }

    var arrowkeys = angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys;
    if (arrowkeys) {
      this.setupArrowkeyEvents(hoursInputEl, minutesInputEl, secondsInputEl);
    }

    $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
    this.setupInputEvents(hoursInputEl, minutesInputEl, secondsInputEl);
  };

  var hourStep = timepickerConfig.hourStep;
  if ($attrs.hourStep) {
    watchers.push($scope.$parent.$watch($parse($attrs.hourStep), function(value) {
      hourStep = +value;
    }));
  }

  var minuteStep = timepickerConfig.minuteStep;
  if ($attrs.minuteStep) {
    watchers.push($scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
      minuteStep = +value;
    }));
  }

  var min;
  watchers.push($scope.$parent.$watch($parse($attrs.min), function(value) {
    var dt = new Date(value);
    min = isNaN(dt) ? undefined : dt;
  }));

  var max;
  watchers.push($scope.$parent.$watch($parse($attrs.max), function(value) {
    var dt = new Date(value);
    max = isNaN(dt) ? undefined : dt;
  }));

  var disabled = false;
  if ($attrs.ngDisabled) {
    watchers.push($scope.$parent.$watch($parse($attrs.ngDisabled), function(value) {
      disabled = value;
    }));
  }

  $scope.noIncrementHours = function() {
    var incrementedSelected = addMinutes(selected, hourStep * 60);
    return disabled || incrementedSelected > max ||
      incrementedSelected < selected && incrementedSelected < min;
  };

  $scope.noDecrementHours = function() {
    var decrementedSelected = addMinutes(selected, -hourStep * 60);
    return disabled || decrementedSelected < min ||
      decrementedSelected > selected && decrementedSelected > max;
  };

  $scope.noIncrementMinutes = function() {
    var incrementedSelected = addMinutes(selected, minuteStep);
    return disabled || incrementedSelected > max ||
      incrementedSelected < selected && incrementedSelected < min;
  };

  $scope.noDecrementMinutes = function() {
    var decrementedSelected = addMinutes(selected, -minuteStep);
    return disabled || decrementedSelected < min ||
      decrementedSelected > selected && decrementedSelected > max;
  };

  $scope.noIncrementSeconds = function() {
    var incrementedSelected = addSeconds(selected, secondStep);
    return disabled || incrementedSelected > max ||
      incrementedSelected < selected && incrementedSelected < min;
  };

  $scope.noDecrementSeconds = function() {
    var decrementedSelected = addSeconds(selected, -secondStep);
    return disabled || decrementedSelected < min ||
      decrementedSelected > selected && decrementedSelected > max;
  };

  $scope.noToggleMeridian = function() {
    if (selected.getHours() < 12) {
      return disabled || addMinutes(selected, 12 * 60) > max;
    }

    return disabled || addMinutes(selected, -12 * 60) < min;
  };

  var secondStep = timepickerConfig.secondStep;
  if ($attrs.secondStep) {
    watchers.push($scope.$parent.$watch($parse($attrs.secondStep), function(value) {
      secondStep = +value;
    }));
  }

  $scope.showSeconds = timepickerConfig.showSeconds;
  if ($attrs.showSeconds) {
    watchers.push($scope.$parent.$watch($parse($attrs.showSeconds), function(value) {
      $scope.showSeconds = !!value;
    }));
  }

  // 12H / 24H mode
  $scope.showMeridian = timepickerConfig.showMeridian;
  if ($attrs.showMeridian) {
    watchers.push($scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
      $scope.showMeridian = !!value;

      if (ngModelCtrl.$error.time) {
        // Evaluate from template
        var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
        if (angular.isDefined(hours) && angular.isDefined(minutes)) {
          selected.setHours(hours);
          refresh();
        }
      } else {
        updateTemplate();
      }
    }));
  }

  // Get $scope.hours in 24H mode if valid
  function getHoursFromTemplate() {
    var hours = +$scope.hours;
    var valid = $scope.showMeridian ? hours > 0 && hours < 13 :
      hours >= 0 && hours < 24;
    if (!valid || $scope.hours === '') {
      return undefined;
    }

    if ($scope.showMeridian) {
      if (hours === 12) {
        hours = 0;
      }
      if ($scope.meridian === meridians[1]) {
        hours = hours + 12;
      }
    }
    return hours;
  }

  function getMinutesFromTemplate() {
    var minutes = +$scope.minutes;
    var valid = minutes >= 0 && minutes < 60;
    if (!valid || $scope.minutes === '') {
      return undefined;
    }
    return minutes;
  }

  function getSecondsFromTemplate() {
    var seconds = +$scope.seconds;
    return seconds >= 0 && seconds < 60 ? seconds : undefined;
  }

  function pad(value, noPad) {
    if (value === null) {
      return '';
    }

    return angular.isDefined(value) && value.toString().length < 2 && !noPad ?
      '0' + value : value.toString();
  }

  // Respond on mousewheel spin
  this.setupMousewheelEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
    var isScrollingUp = function(e) {
      if (e.originalEvent) {
        e = e.originalEvent;
      }
      //pick correct delta variable depending on event
      var delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
      return e.detail || delta > 0;
    };

    hoursInputEl.on('mousewheel wheel', function(e) {
      if (!disabled) {
        $scope.$apply(isScrollingUp(e) ? $scope.incrementHours() : $scope.decrementHours());
      }
      e.preventDefault();
    });

    minutesInputEl.on('mousewheel wheel', function(e) {
      if (!disabled) {
        $scope.$apply(isScrollingUp(e) ? $scope.incrementMinutes() : $scope.decrementMinutes());
      }
      e.preventDefault();
    });

     secondsInputEl.on('mousewheel wheel', function(e) {
      if (!disabled) {
        $scope.$apply(isScrollingUp(e) ? $scope.incrementSeconds() : $scope.decrementSeconds());
      }
      e.preventDefault();
    });
  };

  // Respond on up/down arrowkeys
  this.setupArrowkeyEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
    hoursInputEl.on('keydown', function(e) {
      if (!disabled) {
        if (e.which === 38) { // up
          e.preventDefault();
          $scope.incrementHours();
          $scope.$apply();
        } else if (e.which === 40) { // down
          e.preventDefault();
          $scope.decrementHours();
          $scope.$apply();
        }
      }
    });

    minutesInputEl.on('keydown', function(e) {
      if (!disabled) {
        if (e.which === 38) { // up
          e.preventDefault();
          $scope.incrementMinutes();
          $scope.$apply();
        } else if (e.which === 40) { // down
          e.preventDefault();
          $scope.decrementMinutes();
          $scope.$apply();
        }
      }
    });

    secondsInputEl.on('keydown', function(e) {
      if (!disabled) {
        if (e.which === 38) { // up
          e.preventDefault();
          $scope.incrementSeconds();
          $scope.$apply();
        } else if (e.which === 40) { // down
          e.preventDefault();
          $scope.decrementSeconds();
          $scope.$apply();
        }
      }
    });
  };

  this.setupInputEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
    if ($scope.readonlyInput) {
      $scope.updateHours = angular.noop;
      $scope.updateMinutes = angular.noop;
      $scope.updateSeconds = angular.noop;
      return;
    }

    var invalidate = function(invalidHours, invalidMinutes, invalidSeconds) {
      ngModelCtrl.$setViewValue(null);
      ngModelCtrl.$setValidity('time', false);
      if (angular.isDefined(invalidHours)) {
        $scope.invalidHours = invalidHours;
        if (hoursModelCtrl) {
          hoursModelCtrl.$setValidity('hours', false);
        }
      }

      if (angular.isDefined(invalidMinutes)) {
        $scope.invalidMinutes = invalidMinutes;
        if (minutesModelCtrl) {
          minutesModelCtrl.$setValidity('minutes', false);
        }
      }

      if (angular.isDefined(invalidSeconds)) {
        $scope.invalidSeconds = invalidSeconds;
        if (secondsModelCtrl) {
          secondsModelCtrl.$setValidity('seconds', false);
        }
      }
    };

    $scope.updateHours = function() {
      var hours = getHoursFromTemplate(),
        minutes = getMinutesFromTemplate();

      ngModelCtrl.$setDirty();

      if (angular.isDefined(hours) && angular.isDefined(minutes)) {
        selected.setHours(hours);
        selected.setMinutes(minutes);
        if (selected < min || selected > max) {
          invalidate(true);
        } else {
          refresh('h');
        }
      } else {
        invalidate(true);
      }
    };

    hoursInputEl.on('blur', function(e) {
      ngModelCtrl.$setTouched();
      if (modelIsEmpty()) {
        makeValid();
      } else if ($scope.hours === null || $scope.hours === '') {
        invalidate(true);
      } else if (!$scope.invalidHours && $scope.hours < 10) {
        $scope.$apply(function() {
          $scope.hours = pad($scope.hours, !padHours);
        });
      }
    });

    $scope.updateMinutes = function() {
      var minutes = getMinutesFromTemplate(),
        hours = getHoursFromTemplate();

      ngModelCtrl.$setDirty();

      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
        selected.setHours(hours);
        selected.setMinutes(minutes);
        if (selected < min || selected > max) {
          invalidate(undefined, true);
        } else {
          refresh('m');
        }
      } else {
        invalidate(undefined, true);
      }
    };

    minutesInputEl.on('blur', function(e) {
      ngModelCtrl.$setTouched();
      if (modelIsEmpty()) {
        makeValid();
      } else if ($scope.minutes === null) {
        invalidate(undefined, true);
      } else if (!$scope.invalidMinutes && $scope.minutes < 10) {
        $scope.$apply(function() {
          $scope.minutes = pad($scope.minutes);
        });
      }
    });

    $scope.updateSeconds = function() {
      var seconds = getSecondsFromTemplate();

      ngModelCtrl.$setDirty();

      if (angular.isDefined(seconds)) {
        selected.setSeconds(seconds);
        refresh('s');
      } else {
        invalidate(undefined, undefined, true);
      }
    };

    secondsInputEl.on('blur', function(e) {
      if (modelIsEmpty()) {
        makeValid();
      } else if (!$scope.invalidSeconds && $scope.seconds < 10) {
        $scope.$apply( function() {
          $scope.seconds = pad($scope.seconds);
        });
      }
    });

  };

  this.render = function() {
    var date = ngModelCtrl.$viewValue;

    if (isNaN(date)) {
      ngModelCtrl.$setValidity('time', false);
      $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
    } else {
      if (date) {
        selected = date;
      }

      if (selected < min || selected > max) {
        ngModelCtrl.$setValidity('time', false);
        $scope.invalidHours = true;
        $scope.invalidMinutes = true;
      } else {
        makeValid();
      }
      updateTemplate();
    }
  };

  // Call internally when we know that model is valid.
  function refresh(keyboardChange) {
    makeValid();
    ngModelCtrl.$setViewValue(new Date(selected));
    updateTemplate(keyboardChange);
  }

  function makeValid() {
    if (hoursModelCtrl) {
      hoursModelCtrl.$setValidity('hours', true);
    }

    if (minutesModelCtrl) {
      minutesModelCtrl.$setValidity('minutes', true);
    }

    if (secondsModelCtrl) {
      secondsModelCtrl.$setValidity('seconds', true);
    }

    ngModelCtrl.$setValidity('time', true);
    $scope.invalidHours = false;
    $scope.invalidMinutes = false;
    $scope.invalidSeconds = false;
  }

  function updateTemplate(keyboardChange) {
    if (!ngModelCtrl.$modelValue) {
      $scope.hours = null;
      $scope.minutes = null;
      $scope.seconds = null;
      $scope.meridian = meridians[0];
    } else {
      var hours = selected.getHours(),
        minutes = selected.getMinutes(),
        seconds = selected.getSeconds();

      if ($scope.showMeridian) {
        hours = hours === 0 || hours === 12 ? 12 : hours % 12; // Convert 24 to 12 hour system
      }

      $scope.hours = keyboardChange === 'h' ? hours : pad(hours, !padHours);
      if (keyboardChange !== 'm') {
        $scope.minutes = pad(minutes);
      }
      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];

      if (keyboardChange !== 's') {
        $scope.seconds = pad(seconds);
      }
      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
    }
  }

  function addSecondsToSelected(seconds) {
    selected = addSeconds(selected, seconds);
    refresh();
  }

  function addMinutes(selected, minutes) {
    return addSeconds(selected, minutes*60);
  }

  function addSeconds(date, seconds) {
    var dt = new Date(date.getTime() + seconds * 1000);
    var newDate = new Date(date);
    newDate.setHours(dt.getHours(), dt.getMinutes(), dt.getSeconds());
    return newDate;
  }

  function modelIsEmpty() {
    return ($scope.hours === null || $scope.hours === '') &&
      ($scope.minutes === null || $scope.minutes === '') &&
      (!$scope.showSeconds || $scope.showSeconds && ($scope.seconds === null || $scope.seconds === ''));
  }

  $scope.showSpinners = angular.isDefined($attrs.showSpinners) ?
    $scope.$parent.$eval($attrs.showSpinners) : timepickerConfig.showSpinners;

  $scope.incrementHours = function() {
    if (!$scope.noIncrementHours()) {
      addSecondsToSelected(hourStep * 60 * 60);
    }
  };

  $scope.decrementHours = function() {
    if (!$scope.noDecrementHours()) {
      addSecondsToSelected(-hourStep * 60 * 60);
    }
  };

  $scope.incrementMinutes = function() {
    if (!$scope.noIncrementMinutes()) {
      addSecondsToSelected(minuteStep * 60);
    }
  };

  $scope.decrementMinutes = function() {
    if (!$scope.noDecrementMinutes()) {
      addSecondsToSelected(-minuteStep * 60);
    }
  };

  $scope.incrementSeconds = function() {
    if (!$scope.noIncrementSeconds()) {
      addSecondsToSelected(secondStep);
    }
  };

  $scope.decrementSeconds = function() {
    if (!$scope.noDecrementSeconds()) {
      addSecondsToSelected(-secondStep);
    }
  };

  $scope.toggleMeridian = function() {
    var minutes = getMinutesFromTemplate(),
        hours = getHoursFromTemplate();

    if (!$scope.noToggleMeridian()) {
      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
        addSecondsToSelected(12 * 60 * (selected.getHours() < 12 ? 60 : -60));
      } else {
        $scope.meridian = $scope.meridian === meridians[0] ? meridians[1] : meridians[0];
      }
    }
  };

  $scope.blur = function() {
    ngModelCtrl.$setTouched();
  };

  $scope.$on('$destroy', function() {
    while (watchers.length) {
      watchers.shift()();
    }
  });
}])

.directive('uibTimepicker', ['uibTimepickerConfig', function(uibTimepickerConfig) {
  return {
    require: ['uibTimepicker', '?^ngModel'],
    restrict: 'A',
    controller: 'UibTimepickerController',
    controllerAs: 'timepicker',
    scope: {},
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || uibTimepickerConfig.templateUrl;
    },
    link: function(scope, element, attrs, ctrls) {
      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (ngModelCtrl) {
        timepickerCtrl.init(ngModelCtrl, element.find('input'));
      }
    }
  };
}]);

angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.debounce', 'ui.bootstrap.position'])

/**
 * A helper service that can parse typeahead's syntax (string provided by users)
 * Extracted to a separate service for ease of unit testing
 */
  .factory('uibTypeaheadParser', ['$parse', function($parse) {
    //                      000001111111100000000000002222222200000000000000003333333333333330000000000044444444000
    var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
    return {
      parse: function(input) {
        var match = input.match(TYPEAHEAD_REGEXP);
        if (!match) {
          throw new Error(
            'Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' +
              ' but got "' + input + '".');
        }

        return {
          itemName: match[3],
          source: $parse(match[4]),
          viewMapper: $parse(match[2] || match[1]),
          modelMapper: $parse(match[1])
        };
      }
    };
  }])

  .controller('UibTypeaheadController', ['$scope', '$element', '$attrs', '$compile', '$parse', '$q', '$timeout', '$document', '$window', '$rootScope', '$$debounce', '$uibPosition', 'uibTypeaheadParser',
    function(originalScope, element, attrs, $compile, $parse, $q, $timeout, $document, $window, $rootScope, $$debounce, $position, typeaheadParser) {
    var HOT_KEYS = [9, 13, 27, 38, 40];
    var eventDebounceTime = 200;
    var modelCtrl, ngModelOptions;
    //SUPPORTED ATTRIBUTES (OPTIONS)

    //minimal no of characters that needs to be entered before typeahead kicks-in
    var minLength = originalScope.$eval(attrs.typeaheadMinLength);
    if (!minLength && minLength !== 0) {
      minLength = 1;
    }

    originalScope.$watch(attrs.typeaheadMinLength, function (newVal) {
        minLength = !newVal && newVal !== 0 ? 1 : newVal;
    });

    //minimal wait time after last character typed before typeahead kicks-in
    var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;

    //should it restrict model values to the ones selected from the popup only?
    var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;
    originalScope.$watch(attrs.typeaheadEditable, function (newVal) {
      isEditable = newVal !== false;
    });

    //binding to a variable that indicates if matches are being retrieved asynchronously
    var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;

    //a function to determine if an event should cause selection
    var isSelectEvent = attrs.typeaheadShouldSelect ? $parse(attrs.typeaheadShouldSelect) : function(scope, vals) {
      var evt = vals.$event;
      return evt.which === 13 || evt.which === 9;
    };

    //a callback executed when a match is selected
    var onSelectCallback = $parse(attrs.typeaheadOnSelect);

    //should it select highlighted popup value when losing focus?
    var isSelectOnBlur = angular.isDefined(attrs.typeaheadSelectOnBlur) ? originalScope.$eval(attrs.typeaheadSelectOnBlur) : false;

    //binding to a variable that indicates if there were no results after the query is completed
    var isNoResultsSetter = $parse(attrs.typeaheadNoResults).assign || angular.noop;

    var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;

    var appendToBody = attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;

    var appendTo = attrs.typeaheadAppendTo ?
      originalScope.$eval(attrs.typeaheadAppendTo) : null;

    var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;

    //If input matches an item of the list exactly, select it automatically
    var selectOnExact = attrs.typeaheadSelectOnExact ? originalScope.$eval(attrs.typeaheadSelectOnExact) : false;

    //binding to a variable that indicates if dropdown is open
    var isOpenSetter = $parse(attrs.typeaheadIsOpen).assign || angular.noop;

    var showHint = originalScope.$eval(attrs.typeaheadShowHint) || false;

    //INTERNAL VARIABLES

    //model setter executed upon match selection
    var parsedModel = $parse(attrs.ngModel);
    var invokeModelSetter = $parse(attrs.ngModel + '($$$p)');
    var $setModelValue = function(scope, newValue) {
      if (angular.isFunction(parsedModel(originalScope)) &&
        ngModelOptions && ngModelOptions.$options && ngModelOptions.$options.getterSetter) {
        return invokeModelSetter(scope, {$$$p: newValue});
      }

      return parsedModel.assign(scope, newValue);
    };

    //expressions used by typeahead
    var parserResult = typeaheadParser.parse(attrs.uibTypeahead);

    var hasFocus;

    //Used to avoid bug in iOS webview where iOS keyboard does not fire
    //mousedown & mouseup events
    //Issue #3699
    var selected;

    //create a child scope for the typeahead directive so we are not polluting original scope
    //with typeahead-specific data (matches, query etc.)
    var scope = originalScope.$new();
    var offDestroy = originalScope.$on('$destroy', function() {
      scope.$destroy();
    });
    scope.$on('$destroy', offDestroy);

    // WAI-ARIA
    var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
    element.attr({
      'aria-autocomplete': 'list',
      'aria-expanded': false,
      'aria-owns': popupId
    });

    var inputsContainer, hintInputElem;
    //add read-only input to show hint
    if (showHint) {
      inputsContainer = angular.element('<div></div>');
      inputsContainer.css('position', 'relative');
      element.after(inputsContainer);
      hintInputElem = element.clone();
      hintInputElem.attr('placeholder', '');
      hintInputElem.attr('tabindex', '-1');
      hintInputElem.val('');
      hintInputElem.css({
        'position': 'absolute',
        'top': '0px',
        'left': '0px',
        'border-color': 'transparent',
        'box-shadow': 'none',
        'opacity': 1,
        'background': 'none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)',
        'color': '#999'
      });
      element.css({
        'position': 'relative',
        'vertical-align': 'top',
        'background-color': 'transparent'
      });

      if (hintInputElem.attr('id')) {
        hintInputElem.removeAttr('id'); // remove duplicate id if present.
      }
      inputsContainer.append(hintInputElem);
      hintInputElem.after(element);
    }

    //pop-up element used to display matches
    var popUpEl = angular.element('<div uib-typeahead-popup></div>');
    popUpEl.attr({
      id: popupId,
      matches: 'matches',
      active: 'activeIdx',
      select: 'select(activeIdx, evt)',
      'move-in-progress': 'moveInProgress',
      query: 'query',
      position: 'position',
      'assign-is-open': 'assignIsOpen(isOpen)',
      debounce: 'debounceUpdate'
    });
    //custom item template
    if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
      popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
    }

    if (angular.isDefined(attrs.typeaheadPopupTemplateUrl)) {
      popUpEl.attr('popup-template-url', attrs.typeaheadPopupTemplateUrl);
    }

    var resetHint = function() {
      if (showHint) {
        hintInputElem.val('');
      }
    };

    var resetMatches = function() {
      scope.matches = [];
      scope.activeIdx = -1;
      element.attr('aria-expanded', false);
      resetHint();
    };

    var getMatchId = function(index) {
      return popupId + '-option-' + index;
    };

    // Indicate that the specified match is the active (pre-selected) item in the list owned by this typeahead.
    // This attribute is added or removed automatically when the `activeIdx` changes.
    scope.$watch('activeIdx', function(index) {
      if (index < 0) {
        element.removeAttr('aria-activedescendant');
      } else {
        element.attr('aria-activedescendant', getMatchId(index));
      }
    });

    var inputIsExactMatch = function(inputValue, index) {
      if (scope.matches.length > index && inputValue) {
        return inputValue.toUpperCase() === scope.matches[index].label.toUpperCase();
      }

      return false;
    };

    var getMatchesAsync = function(inputValue, evt) {
      var locals = {$viewValue: inputValue};
      isLoadingSetter(originalScope, true);
      isNoResultsSetter(originalScope, false);
      $q.when(parserResult.source(originalScope, locals)).then(function(matches) {
        //it might happen that several async queries were in progress if a user were typing fast
        //but we are interested only in responses that correspond to the current view value
        var onCurrentRequest = inputValue === modelCtrl.$viewValue;
        if (onCurrentRequest && hasFocus) {
          if (matches && matches.length > 0) {
            scope.activeIdx = focusFirst ? 0 : -1;
            isNoResultsSetter(originalScope, false);
            scope.matches.length = 0;

            //transform labels
            for (var i = 0; i < matches.length; i++) {
              locals[parserResult.itemName] = matches[i];
              scope.matches.push({
                id: getMatchId(i),
                label: parserResult.viewMapper(scope, locals),
                model: matches[i]
              });
            }

            scope.query = inputValue;
            //position pop-up with matches - we need to re-calculate its position each time we are opening a window
            //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
            //due to other elements being rendered
            recalculatePosition();

            element.attr('aria-expanded', true);

            //Select the single remaining option if user input matches
            if (selectOnExact && scope.matches.length === 1 && inputIsExactMatch(inputValue, 0)) {
              if (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate)) {
                $$debounce(function() {
                  scope.select(0, evt);
                }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate['default']);
              } else {
                scope.select(0, evt);
              }
            }

            if (showHint) {
              var firstLabel = scope.matches[0].label;
              if (angular.isString(inputValue) &&
                inputValue.length > 0 &&
                firstLabel.slice(0, inputValue.length).toUpperCase() === inputValue.toUpperCase()) {
                hintInputElem.val(inputValue + firstLabel.slice(inputValue.length));
              } else {
                hintInputElem.val('');
              }
            }
          } else {
            resetMatches();
            isNoResultsSetter(originalScope, true);
          }
        }
        if (onCurrentRequest) {
          isLoadingSetter(originalScope, false);
        }
      }, function() {
        resetMatches();
        isLoadingSetter(originalScope, false);
        isNoResultsSetter(originalScope, true);
      });
    };

    // bind events only if appendToBody params exist - performance feature
    if (appendToBody) {
      angular.element($window).on('resize', fireRecalculating);
      $document.find('body').on('scroll', fireRecalculating);
    }

    // Declare the debounced function outside recalculating for
    // proper debouncing
    var debouncedRecalculate = $$debounce(function() {
      // if popup is visible
      if (scope.matches.length) {
        recalculatePosition();
      }

      scope.moveInProgress = false;
    }, eventDebounceTime);

    // Default progress type
    scope.moveInProgress = false;

    function fireRecalculating() {
      if (!scope.moveInProgress) {
        scope.moveInProgress = true;
        scope.$digest();
      }

      debouncedRecalculate();
    }

    // recalculate actual position and set new values to scope
    // after digest loop is popup in right position
    function recalculatePosition() {
      scope.position = appendToBody ? $position.offset(element) : $position.position(element);
      scope.position.top += element.prop('offsetHeight');
    }

    //we need to propagate user's query so we can higlight matches
    scope.query = undefined;

    //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
    var timeoutPromise;

    var scheduleSearchWithTimeout = function(inputValue) {
      timeoutPromise = $timeout(function() {
        getMatchesAsync(inputValue);
      }, waitTime);
    };

    var cancelPreviousTimeout = function() {
      if (timeoutPromise) {
        $timeout.cancel(timeoutPromise);
      }
    };

    resetMatches();

    scope.assignIsOpen = function (isOpen) {
      isOpenSetter(originalScope, isOpen);
    };

    scope.select = function(activeIdx, evt) {
      //called from within the $digest() cycle
      var locals = {};
      var model, item;

      selected = true;
      locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
      model = parserResult.modelMapper(originalScope, locals);
      $setModelValue(originalScope, model);
      modelCtrl.$setValidity('editable', true);
      modelCtrl.$setValidity('parse', true);

      onSelectCallback(originalScope, {
        $item: item,
        $model: model,
        $label: parserResult.viewMapper(originalScope, locals),
        $event: evt
      });

      resetMatches();

      //return focus to the input element if a match was selected via a mouse click event
      // use timeout to avoid $rootScope:inprog error
      if (scope.$eval(attrs.typeaheadFocusOnSelect) !== false) {
        $timeout(function() { element[0].focus(); }, 0, false);
      }
    };

    //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
    element.on('keydown', function(evt) {
      //typeahead is open and an "interesting" key was pressed
      if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
        return;
      }

      var shouldSelect = isSelectEvent(originalScope, {$event: evt});

      /**
       * if there's nothing selected (i.e. focusFirst) and enter or tab is hit
       * or
       * shift + tab is pressed to bring focus to the previous element
       * then clear the results
       */
      if (scope.activeIdx === -1 && shouldSelect || evt.which === 9 && !!evt.shiftKey) {
        resetMatches();
        scope.$digest();
        return;
      }

      evt.preventDefault();
      var target;
      switch (evt.which) {
        case 27: // escape
          evt.stopPropagation();

          resetMatches();
          originalScope.$digest();
          break;
        case 38: // up arrow
          scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
          scope.$digest();
          target = popUpEl[0].querySelectorAll('.uib-typeahead-match')[scope.activeIdx];
          target.parentNode.scrollTop = target.offsetTop;
          break;
        case 40: // down arrow
          scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
          scope.$digest();
          target = popUpEl[0].querySelectorAll('.uib-typeahead-match')[scope.activeIdx];
          target.parentNode.scrollTop = target.offsetTop;
          break;
        default:
          if (shouldSelect) {
            scope.$apply(function() {
              if (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate)) {
                $$debounce(function() {
                  scope.select(scope.activeIdx, evt);
                }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate['default']);
              } else {
                scope.select(scope.activeIdx, evt);
              }
            });
          }
      }
    });

    element.on('focus', function (evt) {
      hasFocus = true;
      if (minLength === 0 && !modelCtrl.$viewValue) {
        $timeout(function() {
          getMatchesAsync(modelCtrl.$viewValue, evt);
        }, 0);
      }
    });

    element.on('blur', function(evt) {
      if (isSelectOnBlur && scope.matches.length && scope.activeIdx !== -1 && !selected) {
        selected = true;
        scope.$apply(function() {
          if (angular.isObject(scope.debounceUpdate) && angular.isNumber(scope.debounceUpdate.blur)) {
            $$debounce(function() {
              scope.select(scope.activeIdx, evt);
            }, scope.debounceUpdate.blur);
          } else {
            scope.select(scope.activeIdx, evt);
          }
        });
      }
      if (!isEditable && modelCtrl.$error.editable) {
        modelCtrl.$setViewValue();
        scope.$apply(function() {
          // Reset validity as we are clearing
          modelCtrl.$setValidity('editable', true);
          modelCtrl.$setValidity('parse', true);
        });
        element.val('');
      }
      hasFocus = false;
      selected = false;
    });

    // Keep reference to click handler to unbind it.
    var dismissClickHandler = function(evt) {
      // Issue #3973
      // Firefox treats right click as a click on document
      if (element[0] !== evt.target && evt.which !== 3 && scope.matches.length !== 0) {
        resetMatches();
        if (!$rootScope.$$phase) {
          originalScope.$digest();
        }
      }
    };

    $document.on('click', dismissClickHandler);

    originalScope.$on('$destroy', function() {
      $document.off('click', dismissClickHandler);
      if (appendToBody || appendTo) {
        $popup.remove();
      }

      if (appendToBody) {
        angular.element($window).off('resize', fireRecalculating);
        $document.find('body').off('scroll', fireRecalculating);
      }
      // Prevent jQuery cache memory leak
      popUpEl.remove();

      if (showHint) {
          inputsContainer.remove();
      }
    });

    var $popup = $compile(popUpEl)(scope);

    if (appendToBody) {
      $document.find('body').append($popup);
    } else if (appendTo) {
      angular.element(appendTo).eq(0).append($popup);
    } else {
      element.after($popup);
    }

    this.init = function(_modelCtrl, _ngModelOptions) {
      modelCtrl = _modelCtrl;
      ngModelOptions = _ngModelOptions;

      scope.debounceUpdate = modelCtrl.$options && $parse(modelCtrl.$options.debounce)(originalScope);

      //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
      //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
      modelCtrl.$parsers.unshift(function(inputValue) {
        hasFocus = true;

        if (minLength === 0 || inputValue && inputValue.length >= minLength) {
          if (waitTime > 0) {
            cancelPreviousTimeout();
            scheduleSearchWithTimeout(inputValue);
          } else {
            getMatchesAsync(inputValue);
          }
        } else {
          isLoadingSetter(originalScope, false);
          cancelPreviousTimeout();
          resetMatches();
        }

        if (isEditable) {
          return inputValue;
        }

        if (!inputValue) {
          // Reset in case user had typed something previously.
          modelCtrl.$setValidity('editable', true);
          return null;
        }

        modelCtrl.$setValidity('editable', false);
        return undefined;
      });

      modelCtrl.$formatters.push(function(modelValue) {
        var candidateViewValue, emptyViewValue;
        var locals = {};

        // The validity may be set to false via $parsers (see above) if
        // the model is restricted to selected values. If the model
        // is set manually it is considered to be valid.
        if (!isEditable) {
          modelCtrl.$setValidity('editable', true);
        }

        if (inputFormatter) {
          locals.$model = modelValue;
          return inputFormatter(originalScope, locals);
        }

        //it might happen that we don't have enough info to properly render input value
        //we need to check for this situation and simply return model value if we can't apply custom formatting
        locals[parserResult.itemName] = modelValue;
        candidateViewValue = parserResult.viewMapper(originalScope, locals);
        locals[parserResult.itemName] = undefined;
        emptyViewValue = parserResult.viewMapper(originalScope, locals);

        return candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue;
      });
    };
  }])

  .directive('uibTypeahead', function() {
    return {
      controller: 'UibTypeaheadController',
      require: ['ngModel', '^?ngModelOptions', 'uibTypeahead'],
      link: function(originalScope, element, attrs, ctrls) {
        ctrls[2].init(ctrls[0], ctrls[1]);
      }
    };
  })

  .directive('uibTypeaheadPopup', ['$$debounce', function($$debounce) {
    return {
      scope: {
        matches: '=',
        query: '=',
        active: '=',
        position: '&',
        moveInProgress: '=',
        select: '&',
        assignIsOpen: '&',
        debounce: '&'
      },
      replace: true,
      templateUrl: function(element, attrs) {
        return attrs.popupTemplateUrl || 'uib/template/typeahead/typeahead-popup.html';
      },
      link: function(scope, element, attrs) {
        scope.templateUrl = attrs.templateUrl;

        scope.isOpen = function() {
          var isDropdownOpen = scope.matches.length > 0;
          scope.assignIsOpen({ isOpen: isDropdownOpen });
          return isDropdownOpen;
        };

        scope.isActive = function(matchIdx) {
          return scope.active === matchIdx;
        };

        scope.selectActive = function(matchIdx) {
          scope.active = matchIdx;
        };

        scope.selectMatch = function(activeIdx, evt) {
          var debounce = scope.debounce();
          if (angular.isNumber(debounce) || angular.isObject(debounce)) {
            $$debounce(function() {
              scope.select({activeIdx: activeIdx, evt: evt});
            }, angular.isNumber(debounce) ? debounce : debounce['default']);
          } else {
            scope.select({activeIdx: activeIdx, evt: evt});
          }
        };
      }
    };
  }])

  .directive('uibTypeaheadMatch', ['$templateRequest', '$compile', '$parse', function($templateRequest, $compile, $parse) {
    return {
      scope: {
        index: '=',
        match: '=',
        query: '='
      },
      link: function(scope, element, attrs) {
        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'uib/template/typeahead/typeahead-match.html';
        $templateRequest(tplUrl).then(function(tplContent) {
          var tplEl = angular.element(tplContent.trim());
          element.replaceWith(tplEl);
          $compile(tplEl)(scope);
        });
      }
    };
  }])

  .filter('uibTypeaheadHighlight', ['$sce', '$injector', '$log', function($sce, $injector, $log) {
    var isSanitizePresent;
    isSanitizePresent = $injector.has('$sanitize');

    function escapeRegexp(queryToEscape) {
      // Regex: capture the whole query string and replace it with the string that will be used to match
      // the results, for example if the capture is "a" the result will be \a
      return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }

    function containsHtml(matchItem) {
      return /<.*>/g.test(matchItem);
    }

    return function(matchItem, query) {
      if (!isSanitizePresent && containsHtml(matchItem)) {
        $log.warn('Unsafe use of typeahead please use ngSanitize'); // Warn the user about the danger
      }
      matchItem = query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem; // Replaces the capture string with a the same string inside of a "strong" tag
      if (!isSanitizePresent) {
        matchItem = $sce.trustAsHtml(matchItem); // If $sanitize is not present we pack the string in a $sce object for the ng-bind-html directive
      }
      return matchItem;
    };
  }]);
angular.module('ui.bootstrap.carousel').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibCarouselCss && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'); angular.$$uibCarouselCss = true; });
angular.module('ui.bootstrap.datepicker').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibDatepickerCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'); angular.$$uibDatepickerCss = true; });
angular.module('ui.bootstrap.position').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibPositionCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'); angular.$$uibPositionCss = true; });
angular.module('ui.bootstrap.datepickerPopup').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibDatepickerpopupCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'); angular.$$uibDatepickerpopupCss = true; });
angular.module('ui.bootstrap.tooltip').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTooltipCss && angular.element(document).find('head').prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'); angular.$$uibTooltipCss = true; });
angular.module('ui.bootstrap.timepicker').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTimepickerCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-time input{width:50px;}</style>'); angular.$$uibTimepickerCss = true; });
angular.module('ui.bootstrap.typeahead').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTypeaheadCss && angular.element(document).find('head').prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'); angular.$$uibTypeaheadCss = true; });