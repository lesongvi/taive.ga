
(function(p,t,u,b){function m(a,c){F&&F.count&&F.count("aui:"+a,0===c?0:c||(F.count("aui:"+a)||0)+1)}function l(a){try{return a.test(navigator.userAgent)}catch(c){return!1}}function k(a,c,b){a.addEventListener?a.addEventListener(c,b,!1):a.attachEvent&&a.attachEvent("on"+c,b)}function h(a,c,b,d){c=c&&b?c+a+b:c||b;return d?h(a,c,d):c}function g(a,c,b){try{Object.defineProperty(a,c,{value:b,writable:!1})}catch(d){a[c]=b}return b}function f(){return setTimeout(L,0)}function e(a,c){var b=a.length,d=b,
e=function(){d--||(I.push(c),J||(f(),J=!0))};for(e();b--;)B[a[b]]?e():(K[a[b]]=K[a[b]]||[]).push(e)}function d(a,c,b,d){var e=t.createElement(a?"script":"link");k(e,"error",d);if(a){e.type="text/javascript";e.async=!0;if(a=b)a=-1!==c.indexOf("images/I")||/AUIClients/.test(c);a&&e.setAttribute("crossorigin","anonymous");e.src=c}else e.rel="stylesheet",e.href=c;t.getElementsByTagName("head")[0].appendChild(e)}function a(a,c){return function(b){function e(){d(c,b,f,function(c){n?m("resource_unload"):
f?(f=!1,m("resource_retry"),e()):(m("resource_error"),a.log("Asset failed to load: "+b));c&&c.stopPropagation?c.stopPropagation():p.event&&(p.event.cancelBubble=!0)})}if(M[b])return!1;M[b]=!0;m("resource_count");var f=!0;return!e()}}function c(a){for(var c=[],b=0;b<a.length;b++)c[b]=T[a[b]];return c}function q(a,d,f,g,k){return function(l,m){function q(){var a=null;g?a=m:"function"===typeof m&&(x.start=H(),a=m.apply(p,c(n)),x.end=H());if(d){T[l]=a;a=l;for(B[a]=!0;(K[a]||[]).length;)K[a].shift()();
delete K[a]}x.done=!0}var r=k||this;"function"===typeof l&&(m=l,l=b);d&&(l=(l||"__NONAME__").replace(/^prv:/,""),T.hasOwnProperty(l)&&r.error(h(" @ ","Component already registered",l),l),T[l]=b);for(var n=[],w=0;w<a.length;w++)n[w]=a[w].replace(/^prv:/,"");var x=ca[l]={depend:n,registered:H()};f?q():e(n,r.guardFatal(l,q))}}function r(a){return function(){return{execute:q(arguments,!1,a,!1,this),register:q(arguments,!0,a,!1,this)}}}function w(a,c){return function(d,e){e||(e=d,d=b);return function(){ja.push({attribution:a,
name:d,logLevel:c});var b=e.apply(this,arguments);ja.pop();return b}}}function x(c,b){this.logError=function(a,b,d,e){return p.ueLogError?(b={message:b,logLevel:d||"ERROR",attribution:h(":",c,e)},p.ueLogError(a||b,a?b:null),!0):!1};this.error=function(a,b,d,e){a=Error(h(":",e,a,d));a.attribution=h(":",c,b);throw a;};this.guardError=w(c);this.guardFatal=w(c,"FATAL");this.load={js:a(this,!0),css:a(this)};g(this,"namespace",b)}function v(){t.body?ga.trigger("a-bodyBegin"):setTimeout(v,20)}function y(a,
c){if(c){for(var b=a.className.split(" "),d=b.length;d--;)if(b[d]===c)return;a.className+=" "+c}}function z(a,c){for(var d=a.className.split(" "),e=[],f;(f=d.pop())!==b;)f&&f!==c&&e.push(f);a.className=e.join(" ")}function A(a){try{return a()}catch(c){return!1}}function D(){if(ba){var a=p.innerWidth?{w:p.innerWidth,h:p.innerHeight}:{w:la.clientWidth,h:la.clientHeight},c=!1;5<Math.abs(a.w-ua.w)||50<a.h-ua.h?(ua=a,qa=4,(c=ka.mobile||ka.tablet?a.w>a.h:1250<=a.w)?y(la,"a-ws"):z(la,"a-ws")):qa--&&(Da=
setTimeout(D,16))}}function E(a){(ba=a===b?!ba:!!a)&&D()}function C(){return ba}var G=p.AmazonUIPageJS||p.P;if(G&&G.when&&G.register)throw Error("A copy of P has already been loaded on this page.");var F=p.ue;F&&F.tag&&(F.tag("aui"),F.tag("aui:aui_build_date:3.16.8.5-2016-07-28"));var H=u.now=u.now||function(){return+new u},I=[],J=!1,L;L=function(){for(var a=f(),c=H();I.length;)if(I.shift()(),50<H()-c)return;clearTimeout(a);J=!1};l(/OS 6_[0-9]+ like Mac OS X/i)&&k(p,"scroll",f);var B=
{},K={},M={},n=!1;k(p,"beforeunload",function(){n=!0;setTimeout(function(){n=!1},1E4)});var T={},ca={},ja=[],ra=p.onerror;p.onerror=function(a,c,d,e,f){f&&"object"===typeof f||(f=Error(a,c,d),f.columnNumber=e,f.stack=c||d||e?h(String.fromCharCode(92),f.message,"at "+h(":",c,d,e)):b);var g=ja.pop()||{};f.attribution=h(":",f.attribution||g.attribution,g.name);f.logLevel=g.logLevel;f.attribution&&console&&console.log&&console.log([f.logLevel||"ERROR",a,"thrown by",f.attribution].join(" "));ja=[];ra&&
(g=[].slice.call(arguments),g[4]=f,ra.apply(p,g))};x.prototype={log:function(a,c,b){return this.logError(null,a,c,b)},declare:q([],!0,!0,!0),register:q([],!0),execute:q([]),AUI_BUILD_DATE:"3.16.8.5-2016-07-28",when:r(),now:r(!0),trigger:function(a,c){var b=H();this.declare(a,{data:c,pageElapsedTime:b-(p.aPageStart||NaN),triggerTime:b})},handleTriggers:function(){this.log("handleTriggers deprecated")},attributeErrors:function(a){return new x(a)},_namespace:function(a,c){return new x(a,c)}};var ga=
g(p,"AmazonUIPageJS",new x);ga._namespace("PageJS","AmazonUI").declare("prv:p-debug",ca);ga.declare("p-recorder-events",[]);ga.declare("p-recorder-stop",function(){});g(p,"P",ga);v();if(t.addEventListener){var aa;t.addEventListener("DOMContentLoaded",aa=function(){ga.trigger("a-domready");t.removeEventListener("DOMContentLoaded",aa,!1)},!1)}var la=t.documentElement,na=function(){var a=["O","ms","Moz","Webkit"],c=t.createElement("div");return{testGradients:function(){c.style.cssText=("background-image:-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:"+
a.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0,-17);return-1<c.style.backgroundImage.indexOf("gradient")},test:function(b){var d=b.charAt(0).toUpperCase()+b.substr(1);b=(a.join(d+" ")+d+" "+b).split(" ");for(d=b.length;d--;)if(""===c.style[b[d]])return!0;return!1},testTransform3d:function(){var a=!1;p.matchMedia&&(a=p.matchMedia("(-webkit-transform-3d)").matches);return a}}}(),G=la.className,pa=/(^| )a-mobile( |$)/.test(G),ya=/(^| )a-tablet( |$)/.test(G),ka={audio:function(){return!!t.createElement("audio").canPlayType},
video:function(){return!!t.createElement("video").canPlayType},canvas:function(){return!!t.createElement("canvas").getContext},svg:function(){return!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect},offline:function(){return navigator.hasOwnProperty&&navigator.hasOwnProperty("onLine")&&navigator.onLine},dragDrop:function(){return"draggable"in t.createElement("span")},geolocation:function(){return!!navigator.geolocation},history:function(){return!(!p.history||
!p.history.pushState)},webworker:function(){return!!p.Worker},autofocus:function(){return"autofocus"in t.createElement("input")},inputPlaceholder:function(){return"placeholder"in t.createElement("input")},textareaPlaceholder:function(){return"placeholder"in t.createElement("textarea")},localStorage:function(){return"localStorage"in p&&null!==p.localStorage},orientation:function(){return"orientation"in p},touch:function(){return"ontouchend"in t},gradients:function(){return na.testGradients()},hires:function(){var a=
p.devicePixelRatio&&1.5<=p.devicePixelRatio||p.matchMedia&&p.matchMedia("(min-resolution:144dpi)").matches;m("hiRes"+(pa?"Mobile":ya?"Tablet":"Desktop"),a?1:0);return a},transform3d:function(){return na.testTransform3d()},touchScrolling:function(){return l(/Windowshop|android.([3-9]|[L-Z])|OS ([5-9]|[1-9][0-9]+)(_[0-9]{1,2})+ like Mac OS X|Chrome|Silk|Firefox|Trident.+?; Touch/i)},ios:function(){return l(/OS [1-9][0-9]*(_[0-9]*)+ like Mac OS X/i)},android:function(){return l(/android.([1-9]|[L-Z])/i)&&
!l(/trident/i)},mobile:function(){return pa},tablet:function(){return ya}},O;for(O in ka)ka.hasOwnProperty(O)&&(ka[O]=A(ka[O]));for(var Z="textShadow textStroke boxShadow borderRadius borderImage opacity transform transition".split(" "),Y=0;Y<Z.length;Y++)ka[Z[Y]]=A(function(){return na.test(Z[Y])});var ba=!0,Da=0,ua={w:0,h:0},qa=4;D();k(p,"resize",function(){clearTimeout(Da);qa=4;D()});z(la,"a-no-js");y(la,"a-js");!l(/OS [1-8](_[0-9]*)+ like Mac OS X/i)||p.navigator.standalone||l(/safari/i)||y(la,
"a-ember");ka.localStorage&&y(la,localStorage.getItem("a-skin-font-class"));G=[];for(O in ka)ka.hasOwnProperty(O)&&ka[O]&&G.push("a-"+O.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()}));y(la,G.join(" "));la.setAttribute("data-aui-build-date","3.16.8.5-2016-07-28");ga.register("p-detect",function(){return{capabilities:ka,toggleResponsiveGrid:E,responsiveGridEnabled:C}});ga.declare("a-event-revised-handling",!1)})(window,document,Date);
