(self["webpackChunksecshop"]=self["webpackChunksecshop"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),i=n(6330),o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not a function")}},9670:function(e,t,n){var r=n(111),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),i=n(1400),o=n(6244),s=function(e){return function(t,n,s){var a,c=r(t),l=o(c),u=i(s,l);if(e&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!s(e,"length").writable)throw o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){var r=n(84),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},9920:function(e,t,n){var r=n(2597),i=n(3887),o=n(1236),s=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=s.f,l=o.f,u=0;u<a.length;u++){var h=a[u];r(e,h)||n&&r(n,h)||c(e,h,l(t,h))}}},8880:function(e,t,n){var r=n(9781),i=n(3070),o=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),i=n(3070),o=n(6339),s=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:t;if(r(n)&&o(n,l,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(u){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){"use strict";var r=n(6330),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,o=n(7854),s=n(8113),a=o.process,c=o.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),i=n(1236).f,o=n(8880),s=n(8052),a=n(3072),c=n(9920),l=n(4705);e.exports=function(e,t){var n,u,h,d,f,p,_=e.target,g=e.global,m=e.stat;if(u=g?r:m?r[_]||a(_,{}):(r[_]||{}).prototype,u)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(u,h),d=p&&p.value):d=u[h],n=l(g?h:_+(m?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(u,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},84:function(e,t,n){var r=n(4374),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);e.exports=r?s:function(e){return function(){return o.apply(e,arguments)}}},1702:function(e,t,n){var r=n(4326),i=n(84);e.exports=function(e){if("Function"===r(e))return i(e)}},5005:function(e,t,n){var r=n(7854),i=n(614),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),o=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),o=n(4326),s=Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a(e,""):s(e)}:s},2788:function(e,t,n){var r=n(1702),i=n(614),o=n(5465),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},9909:function(e,t,n){var r,i,o,s=n(4811),a=n(7854),c=n(111),l=n(8880),u=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",_=a.TypeError,g=a.WeakMap,m=function(e){return o(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw _("Incompatible receiver, "+e+" required");return n}};if(s||h.state){var y=h.state||(h.state=new g);y.get=y.get,y.has=y.has,y.set=y.set,r=function(e,t){if(y.has(e))throw _(p);return t.facade=e,y.set(e,t),t},i=function(e){return y.get(e)||{}},o=function(e){return y.has(e)}}else{var b=d("state");f[b]=!0,r=function(e,t){if(u(e,b))throw _(p);return t.facade=e,l(e,b,t),t},i=function(e){return u(e,b)?e[b]:{}},o=function(e){return u(e,b)}}e.exports={set:r,get:i,has:o,enforce:m,getterFor:v}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==u||n!=l&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},l=s.NATIVE="N",u=s.POLYFILL="P";e.exports=s},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),o=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===o}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),o=n(7976),s=n(3307),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),i=n(614),o=n(2597),s=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),l=n(9909),u=l.enforce,h=l.get,d=Object.defineProperty,f=s&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),_=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||a&&e.name!==t)&&(s?d(e,"name",{value:t,configurable:!0}):e.name=t),f&&n&&o(n,"arity")&&e.length!==n.arity&&d(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?s&&d(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=u(e);return o(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=_((function(){return i(this)&&h(this).source||c(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},3070:function(e,t,n){var r=n(9781),i=n(4664),o=n(3353),s=n(9670),a=n(4948),c=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=u(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),o=n(5296),s=n(9114),a=n(5656),c=n(4948),l=n(2597),u=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),u)try{return h(e,t)}catch(n){}if(l(e,t))return s(!i(o.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=o(e),l=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&c(u,n);while(t.length>l)i(r,n=t[l++])&&(~s(u,n)||c(u,n));return u}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2140:function(e,t,n){var r=n(6916),i=n(614),o=n(111),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!o(a=r(n,e)))return a;if(i(n=e.valueOf)&&!o(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!o(a=r(n,e)))return a;throw s("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),o=n(8006),s=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.0",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),o=n(2190),s=n(8173),a=n(2140),c=n(5112),l=TypeError,u=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,c=s(e,u);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),i=n(614),o=r.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},5112:function(e,t,n){var r=n(7854),i=n(2309),o=n(2597),s=n(9711),a=n(6293),c=n(3307),l=i("wks"),u=r.Symbol,h=u&&u["for"],d=c?u:u&&u.withoutSetter||s;e.exports=function(e){if(!o(l,e)||!a&&"string"!=typeof l[e]){var t="Symbol."+e;a&&o(u,e)?l[e]=u[e]:l[e]=c&&h?h(t):d(t)}return l[e]}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(7207),c=n(7293),l=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:l||u},{push:function(e){var t=i(this),n=o(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},541:function(e,t,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(5117),c=n(7207),l=1!==[].unshift(0),u=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:l||u},{unshift:function(e){var t=i(this),n=o(t),r=arguments.length;if(r){c(n+r);var l=n;while(l--){var u=l+r;l in t?t[u]=t[l]:a(t,u)}for(var h=0;h<r;h++)t[h]=arguments[h]}return s(t,n+r)}})},4870:function(e,t,n){"use strict";n.d(t,{Bj:function(){return o},Fl:function(){return Ve},IU:function(){return xe},Jd:function(){return E},PG:function(){return Se},SU:function(){return qe},Um:function(){return we},WL:function(){return We},X$:function(){return k},X3:function(){return ke},XI:function(){return Fe},Xl:function(){return Pe},dq:function(){return Ae},iH:function(){return Le},j:function(){return I},lk:function(){return S},qj:function(){return be},qq:function(){return y},yT:function(){return Te}});n(7658);var r=n(7139);let i;class o{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this.active=!1}}}function s(e,t=i){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&p)>0,l=e=>(e.n&p)>0,u=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~p,i.n&=~p}t.length=n}},d=new WeakMap;let f=0,p=1;const _=30;let g;const m=Symbol(""),v=Symbol("");class y{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,s(this,n)}run(){if(!this.active)return this.fn();let e=g,t=w;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,w=!0,p=1<<++f,f<=_?u(this):b(this),this.fn()}finally{f<=_&&h(this),p=1<<--f,g=this.parent,w=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let w=!0;const C=[];function E(){C.push(w),w=!1}function S(){const e=C.pop();w=void 0===e||e}function I(e,t,n){if(w&&g){let t=d.get(e);t||d.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const i=void 0;T(r,i)}}function T(e,t){let n=!1;f<=_?l(e)||(e.n|=p,n=!c(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function k(e,t,n,i,o,s){const c=d.get(e);if(!c)return;let l=[];if("clear"===t)l=[...c.values()];else if("length"===n&&(0,r.kJ)(e))c.forEach(((e,t)=>{("length"===t||t>=i)&&l.push(e)}));else switch(void 0!==n&&l.push(c.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&l.push(c.get("length")):(l.push(c.get(m)),(0,r._N)(e)&&l.push(c.get(v)));break;case"delete":(0,r.kJ)(e)||(l.push(c.get(m)),(0,r._N)(e)&&l.push(c.get(v)));break;case"set":(0,r._N)(e)&&l.push(c.get(m));break}if(1===l.length)l[0]&&x(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);x(a(e))}}function x(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&P(r,t);for(const r of n)r.computed||P(r,t)}function P(e,t){(e!==g||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const R=(0,r.fY)("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),O=M(),D=M(!1,!0),A=M(!0),L=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=xe(this);for(let t=0,i=this.length;t<i;t++)I(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(xe)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){E();const n=xe(this)[t].apply(this,e);return S(),n}})),e}function M(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&o===(e?t?me:ge:t?_e:pe).get(n))return n;const s=(0,r.kJ)(n);if(!e&&s&&(0,r.RI)(L,i))return Reflect.get(L,i,o);const a=Reflect.get(n,i,o);return((0,r.yk)(i)?N.has(i):R(i))?a:(e||I(n,"get",i),t?a:Ae(a)?s&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Ce(a):be(a):a)}}const j=U(),q=U(!0);function U(e=!1){return function(t,n,i,o){let s=t[n];if(Ie(s)&&Ae(s)&&!Ae(i))return!1;if(!e&&(Te(i)||Ie(i)||(s=xe(s),i=xe(i)),!(0,r.kJ)(t)&&Ae(s)&&!Ae(i)))return s.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,o);return t===xe(o)&&(a?(0,r.aU)(i,s)&&k(t,"set",n,i,s):k(t,"add",n,i)),c}}function W(e,t){const n=(0,r.RI)(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&k(e,"delete",t,void 0,i),o}function B(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&N.has(t)||I(e,"has",t),n}function H(e){return I(e,"iterate",(0,r.kJ)(e)?"length":m),Reflect.ownKeys(e)}const V={get:O,set:j,deleteProperty:W,has:B,ownKeys:H},$={get:A,set(e,t){return!0},deleteProperty(e,t){return!0}},z=(0,r.l7)({},V,{get:D,set:q}),K=e=>e,Y=e=>Reflect.getPrototypeOf(e);function J(e,t,n=!1,r=!1){e=e["__v_raw"];const i=xe(e),o=xe(t);n||(t!==o&&I(i,"get",t),I(i,"get",o));const{has:s}=Y(i),a=r?K:n?Ne:Re;return s.call(i,t)?a(e.get(t)):s.call(i,o)?a(e.get(o)):void(e!==i&&e.get(t))}function G(e,t=!1){const n=this["__v_raw"],r=xe(n),i=xe(e);return t||(e!==i&&I(r,"has",e),I(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Q(e,t=!1){return e=e["__v_raw"],!t&&I(xe(e),"iterate",m),Reflect.get(e,"size",e)}function Z(e){e=xe(e);const t=xe(this),n=Y(t),r=n.has.call(t,e);return r||(t.add(e),k(t,"add",e,e)),this}function X(e,t){t=xe(t);const n=xe(this),{has:i,get:o}=Y(n);let s=i.call(n,e);s||(e=xe(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?(0,r.aU)(t,a)&&k(n,"set",e,t,a):k(n,"add",e,t),this}function ee(e){const t=xe(this),{has:n,get:r}=Y(t);let i=n.call(t,e);i||(e=xe(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&k(t,"delete",e,void 0,o),s}function te(){const e=xe(this),t=0!==e.size,n=void 0,r=e.clear();return t&&k(e,"clear",void 0,void 0,n),r}function ne(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=xe(o),a=t?K:e?Ne:Re;return!e&&I(s,"iterate",m),o.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function re(e,t,n){return function(...i){const o=this["__v_raw"],s=xe(o),a=(0,r._N)(s),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=o[e](...i),h=n?K:t?Ne:Re;return!t&&I(s,"iterate",l?v:m),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&this}}function oe(){const e={get(e){return J(this,e)},get size(){return Q(this)},has:G,add:Z,set:X,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return J(this,e,!1,!0)},get size(){return Q(this)},has:G,add:Z,set:X,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return J(this,e,!0)},get size(){return Q(this,!0)},has(e){return G.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!1)},r={get(e){return J(this,e,!0,!0)},get size(){return Q(this,!0)},has(e){return G.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=re(i,!1,!1),n[i]=re(i,!0,!1),t[i]=re(i,!1,!0),r[i]=re(i,!0,!0)})),[e,n,t,r]}const[se,ae,ce,le]=oe();function ue(e,t){const n=t?e?le:ce:e?ae:se;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,o)}const he={get:ue(!1,!1)},de={get:ue(!1,!0)},fe={get:ue(!0,!1)};const pe=new WeakMap,_e=new WeakMap,ge=new WeakMap,me=new WeakMap;function ve(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ye(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ve((0,r.W7)(e))}function be(e){return Ie(e)?e:Ee(e,!1,V,he,pe)}function we(e){return Ee(e,!1,z,de,_e)}function Ce(e){return Ee(e,!0,$,fe,ge)}function Ee(e,t,n,i,o){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=ye(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function Se(e){return Ie(e)?Se(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ie(e){return!(!e||!e["__v_isReadonly"])}function Te(e){return!(!e||!e["__v_isShallow"])}function ke(e){return Se(e)||Ie(e)}function xe(e){const t=e&&e["__v_raw"];return t?xe(t):e}function Pe(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Re=e=>(0,r.Kn)(e)?be(e):e,Ne=e=>(0,r.Kn)(e)?Ce(e):e;function Oe(e){w&&g&&(e=xe(e),T(e.dep||(e.dep=a())))}function De(e,t){e=xe(e),e.dep&&x(e.dep)}function Ae(e){return!(!e||!0!==e.__v_isRef)}function Le(e){return Me(e,!1)}function Fe(e){return Me(e,!0)}function Me(e,t){return Ae(e)?e:new je(e,t)}class je{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:xe(e),this._value=t?e:Re(e)}get value(){return Oe(this),this._value}set value(e){const t=this.__v_isShallow||Te(e)||Ie(e);e=t?e:xe(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Re(e),De(this,e))}}function qe(e){return Ae(e)?e.value:e}const Ue={get:(e,t,n)=>qe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ae(i)&&!Ae(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function We(e){return Se(e)?e:new Proxy(e,Ue)}var Be;class He{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Be]=!1,this._dirty=!0,this.effect=new y(e,(()=>{this._dirty||(this._dirty=!0,De(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=xe(this);return Oe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ve(e,t,n=!1){let i,o;const s=(0,r.mf)(e);s?(i=e,o=r.dG):(i=e.get,o=e.set);const a=new He(i,o,s||!o,n);return a}Be="__v_isReadonly"},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return s},FN:function(){return hn},Fl:function(){return kn},HY:function(){return Pt},JJ:function(){return V},Ko:function(){return Me},P$:function(){return te},Q6:function(){return ae},U2:function(){return re},Uk:function(){return Zt},Us:function(){return Et},Wm:function(){return Yt},Y3:function(){return v},Y8:function(){return Z},YP:function(){return K},_:function(){return Kt},aZ:function(){return ce},bv:function(){return we},f3:function(){return $},h:function(){return xn},iD:function(){return Ut},ic:function(){return Ee},kq:function(){return en},nK:function(){return se},uE:function(){return Xt},up:function(){return De},w5:function(){return L},wg:function(){return Lt},wy:function(){return Re}});n(7658),n(541);var r=n(4870),i=n(7139);function o(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){a(o,t,n)}return i}function s(e,t,n,r){if((0,i.mf)(e)){const s=o(e,t,n,r);return s&&(0,i.tI)(s)&&s.catch((e=>{a(e,t,n)})),s}const c=[];for(let i=0;i<e.length;i++)c.push(s(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void o(a,null,10,[e,i,s])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let l=!1,u=!1;const h=[];let d=0;const f=[];let p=null,_=0;const g=Promise.resolve();let m=null;function v(e){const t=m||g;return e?t.then(this?e.bind(this):e):t}function y(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=T(h[r]);i<e?t=r+1:n=r}return t}function b(e){h.length&&h.includes(e,l&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(y(e.id),0,e),w())}function w(){l||u||(u=!0,m=g.then(x))}function C(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function E(e){(0,i.kJ)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?_+1:_)||f.push(e),w()}function S(e,t=(l?d+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function I(e){if(f.length){const e=[...new Set(f)];if(f.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>T(e)-T(t))),_=0;_<p.length;_++)p[_]();p=null,_=0}}const T=e=>null==e.id?1/0:e.id,k=(e,t)=>{const n=T(e)-T(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function x(e){u=!1,l=!0,h.sort(k);i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&o(e,null,14)}}finally{d=0,h.length=0,I(e),l=!1,m=null,(h.length||f.length)&&x(e)}}new Set;new Map;function P(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let o=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:s}=r[e]||i.kT;s&&(o=n.map((e=>e.trim()))),t&&(o=n.map(i.He))}let l;let u=r[l=(0,i.hR)(t)]||r[l=(0,i.hR)((0,i._A)(t))];!u&&a&&(u=r[l=(0,i.hR)((0,i.rs)(t))]),u&&s(u,e,6,o);const h=r[l+"Once"];if(h){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,s(h,e,6,o)}}function R(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=R(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||c?((0,i.kJ)(s)?s.forEach((e=>a[e]=null)):(0,i.l7)(a,s),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function N(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let O=null,D=null;function A(e){const t=O;return O=e,D=e&&e.type.__scopeId||null,t}function L(e,t=O,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&jt(-1);const i=A(t);let o;try{o=e(...n)}finally{A(i),r._d&&jt(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function F(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[c],slots:l,attrs:u,emit:h,render:d,renderCache:f,data:p,setupState:_,ctx:g,inheritAttrs:m}=e;let v,y;const b=A(e);try{if(4&n.shapeFlag){const e=o||r;v=tn(d.call(e,e,f,s,_,p,g)),y=u}else{const e=t;0,v=tn(e.length>1?e(s,{attrs:u,slots:l,emit:h}):e(s,null)),y=t.props?u:M(u)}}catch(C){Dt.length=0,a(C,e,1),v=Yt(Nt)}let w=v;if(y&&!1!==m){const e=Object.keys(y),{shapeFlag:t}=w;e.length&&7&t&&(c&&e.some(i.tR)&&(y=j(y,c)),w=Qt(w,y))}return n.dirs&&(w=Qt(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),v=w,A(b),v}const M=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},j=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function q(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||U(r,s,l):!!s);if(1024&c)return!0;if(16&c)return r?U(r,s,l):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!N(l,n))return!0}}return!1}function U(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!N(n,o))return!0}return!1}function W({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const B=e=>e.__isSuspense;function H(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):E(e)}function V(e,t){if(un){let n=un.provides;const r=un.parent&&un.parent.provides;r===n&&(n=un.provides=Object.create(r)),n[e]=t}else 0}function $(e,t,n=!1){const r=un||O;if(r){const o=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const z={};function K(e,t,n){return Y(e,t,n)}function Y(e,t,{immediate:n,deep:a,flush:c,onTrack:l,onTrigger:u}=i.kT){const h=un;let d,f,p=!1,_=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,i.kJ)(e)?(_=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?Q(e):(0,i.mf)(e)?o(e,h,2):void 0))):d=(0,i.mf)(e)?t?()=>o(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),s(e,h,3,[g])}:i.dG,t&&a){const e=d;d=()=>Q(e())}let g=e=>{f=w.onStop=()=>{o(e,h,4)}};if(mn)return g=i.dG,t?n&&s(t,h,3,[d(),_?[]:void 0,g]):d(),i.dG;let m=_?[]:z;const v=()=>{if(w.active)if(t){const e=w.run();(a||p||(_?e.some(((e,t)=>(0,i.aU)(e,m[t]))):(0,i.aU)(e,m)))&&(f&&f(),s(t,h,3,[e,m===z?void 0:m,g]),m=e)}else w.run()};let y;v.allowRecurse=!!t,"sync"===c?y=v:"post"===c?y=()=>Ct(v,h&&h.suspense):(v.pre=!0,h&&(v.id=h.uid),y=()=>b(v));const w=new r.qq(d,y);return t?n?v():m=w.run():"post"===c?Ct(w.run.bind(w),h&&h.suspense):w.run(),()=>{w.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,w)}}function J(e,t,n){const r=this.proxy,o=(0,i.HD)(e)?e.includes(".")?G(r,e):()=>r[e]:e.bind(r,r);let s;(0,i.mf)(t)?s=t:(s=t.handler,n=t);const a=un;dn(this);const c=Y(o,s.bind(r),n);return a?dn(a):fn(),c}function G(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Q(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))Q(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)Q(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{Q(e,t)}));else if((0,i.PO)(e))for(const n in e)Q(e[n],t);return e}function Z(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return we((()=>{e.isMounted=!0})),Se((()=>{e.isUnmounting=!0})),e}const X=[Function,Array],ee={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:X,onEnter:X,onAfterEnter:X,onEnterCancelled:X,onBeforeLeave:X,onLeave:X,onAfterLeave:X,onLeaveCancelled:X,onBeforeAppear:X,onAppear:X,onAfterAppear:X,onAppearCancelled:X},setup(e,{slots:t}){const n=hn(),i=Z();let o;return()=>{const s=t.default&&ae(t.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==Nt){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:l}=c;if(i.isLeaving)return ie(a);const u=oe(a);if(!u)return ie(a);const h=re(u,c,i,n);se(u,h);const d=n.subTree,f=d&&oe(d);let p=!1;const{getTransitionKey:_}=u.type;if(_){const e=_();void 0===o?o=e:e!==o&&(o=e,p=!0)}if(f&&f.type!==Nt&&(!Ht(u,f)||p)){const e=re(f,c,i,n);if(se(f,e),"out-in"===l)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},ie(a);"in-out"===l&&u.type!==Nt&&(e.delayLeave=(e,t,n)=>{const r=ne(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},te=ee;function ne(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function re(e,t,n,r){const{appear:o,mode:a,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:m,onAppear:v,onAfterAppear:y,onAppearCancelled:b}=t,w=String(e.key),C=ne(n,e),E=(e,t)=>{e&&s(e,r,9,t)},S=(e,t)=>{const n=t[1];E(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},I={mode:a,persisted:c,beforeEnter(t){let r=l;if(!n.isMounted){if(!o)return;r=m||l}t._leaveCb&&t._leaveCb(!0);const i=C[w];i&&Ht(e,i)&&i.el._leaveCb&&i.el._leaveCb(),E(r,[t])},enter(e){let t=u,r=h,i=d;if(!n.isMounted){if(!o)return;t=v||u,r=y||h,i=b||d}let s=!1;const a=e._enterCb=t=>{s||(s=!0,E(t?i:r,[e]),I.delayedLeave&&I.delayedLeave(),e._enterCb=void 0)};t?S(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();E(f,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),E(n?g:_,[t]),t._leaveCb=void 0,C[i]===e&&delete C[i])};C[i]=e,p?S(p,[t,s]):s()},clone(e){return re(e,t,n,r)}};return I}function ie(e){if(ue(e))return e=Qt(e),e.children=null,e}function oe(e){return ue(e)?e.children?e.children[0]:void 0:e}function se(e,t){6&e.shapeFlag&&e.component?se(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ae(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===Pt?(128&s.patchFlag&&i++,r=r.concat(ae(s.children,t,a))):(t||s.type!==Nt)&&r.push(null!=a?Qt(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function ce(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const le=e=>!!e.type.__asyncLoader;const ue=e=>e.type.__isKeepAlive;RegExp,RegExp;function he(e,t){return(0,i.kJ)(e)?e.some((e=>he(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function de(e,t){pe(e,"a",t)}function fe(e,t){pe(e,"da",t)}function pe(e,t,n=un){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ve(t,r,n),n){let e=n.parent;while(e&&e.parent)ue(e.parent.vnode)&&_e(r,t,n,e),e=e.parent}}function _e(e,t,n,r){const o=ve(t,e,r,!0);Ie((()=>{(0,i.Od)(r[t],o)}),n)}function ge(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function me(e){return 128&e.shapeFlag?e.ssContent:e}function ve(e,t,n=un,i=!1){if(n){const o=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),dn(n);const o=s(t,n,e,i);return fn(),(0,r.lk)(),o});return i?o.unshift(a):o.push(a),a}}const ye=e=>(t,n=un)=>(!mn||"sp"===e)&&ve(e,((...e)=>t(...e)),n),be=ye("bm"),we=ye("m"),Ce=ye("bu"),Ee=ye("u"),Se=ye("bum"),Ie=ye("um"),Te=ye("sp"),ke=ye("rtg"),xe=ye("rtc");function Pe(e,t=un){ve("ec",e,t)}function Re(e,t){const n=O;if(null===n)return e;const r=Sn(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=i.kT]=t[s];(0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Q(n),o.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function Ne(e,t,n,i){const o=e.dirs,a=t&&t.dirs;for(let c=0;c<o.length;c++){const l=o[c];a&&(l.oldValue=a[c].value);let u=l.dir[i];u&&((0,r.Jd)(),s(u,n,8,[e.el,l,e,t]),(0,r.lk)())}}const Oe="components";function De(e,t){return Le(Oe,e,!0,t)||e}const Ae=Symbol();function Le(e,t,n=!0,r=!1){const o=O||un;if(o){const n=o.type;if(e===Oe){const e=In(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const s=Fe(o[e]||n[e],t)||Fe(o.appContext[e],t);return!s&&r?n:s}}function Fe(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function Me(e,t,n,r){let o;const s=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[r]=o),o}const je=e=>e?pn(e)?Sn(e)||e.proxy:je(e.parent):null,qe=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>je(e.parent),$root:e=>je(e.root),$emit:e=>e.emit,$options:e=>ze(e),$forceUpdate:e=>e.f||(e.f=()=>b(e.update)),$nextTick:e=>e.n||(e.n=v.bind(e.proxy)),$watch:e=>J.bind(e)}),Ue={get({_:e},t){const{ctx:n,setupState:o,data:s,props:a,accessCache:c,type:l,appContext:u}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=1,o[t];if(s!==i.kT&&(0,i.RI)(s,t))return c[t]=2,s[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];We&&(c[t]=0)}}const d=qe[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=l.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=u.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return o!==i.kT&&(0,i.RI)(o,t)?(o[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||t!==i.kT&&(0,i.RI)(t,a)||(c=s[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(qe,a)||(0,i.RI)(o.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let We=!0;function Be(e){const t=ze(e),n=e.proxy,o=e.ctx;We=!1,t.beforeCreate&&Ve(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:_,updated:g,activated:m,deactivated:v,beforeDestroy:y,beforeUnmount:b,destroyed:w,unmounted:C,render:E,renderTracked:S,renderTriggered:I,errorCaptured:T,serverPrefetch:k,expose:x,inheritAttrs:P,components:R,directives:N,filters:O}=t,D=null;if(h&&He(h,o,D,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(o[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(We=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const s=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=kn({get:t,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const r in l)$e(l[r],o,n,r);if(u){const e=(0,i.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{V(t,e[t])}))}function A(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Ve(d,e,"c"),A(be,f),A(we,p),A(Ce,_),A(Ee,g),A(de,m),A(fe,v),A(Pe,T),A(xe,S),A(ke,I),A(Se,b),A(Ie,C),A(Te,k),(0,i.kJ)(x))if(x.length){const t=e.exposed||(e.exposed={});x.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i.dG&&(e.render=E),null!=P&&(e.inheritAttrs=P),R&&(e.components=R),N&&(e.directives=N)}function He(e,t,n=i.dG,o=!1){(0,i.kJ)(e)&&(e=Qe(e));for(const s in e){const n=e[s];let a;a=(0,i.Kn)(n)?"default"in n?$(n.from||s,n.default,!0):$(n.from||s):$(n),(0,r.dq)(a)&&o?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[s]=a}}function Ve(e,t,n){s((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function $e(e,t,n,r){const o=r.includes(".")?G(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&K(o,n)}else if((0,i.mf)(e))K(o,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>$e(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&K(o,r,e)}else 0}function ze(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,c=s.get(t);let l;return c?l=c:o.length||n||r?(l={},o.length&&o.forEach((e=>Ke(l,e,a,!0))),Ke(l,t,a)):l=t,(0,i.Kn)(t)&&s.set(t,l),l}function Ke(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Ke(e,o,n,!0),i&&i.forEach((t=>Ke(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=Ye[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Ye={data:Je,props:Xe,emits:Xe,methods:Xe,computed:Xe,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:Xe,directives:Xe,watch:et,provide:Je,inject:Ge};function Je(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function Ge(e,t){return Xe(Qe(e),Qe(t))}function Qe(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ze(e,t){return e?[...new Set([].concat(e,t))]:t}function Xe(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function et(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=Ze(e[r],t[r]);return n}function tt(e,t,n,o=!1){const s={},a={};(0,i.Nj)(a,Vt,1),e.propsDefaults=Object.create(null),rt(e,t,s,a);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=o?s:(0,r.Um)(s):e.type.props?e.props=s:e.props=a,e.attrs=a}function nt(e,t,n,o){const{props:s,attrs:a,vnode:{patchFlag:c}}=e,l=(0,r.IU)(s),[u]=e.propsOptions;let h=!1;if(!(o||c>0)||16&c){let r;rt(e,t,s,a)&&(h=!0);for(const o in l)t&&((0,i.RI)(t,o)||(r=(0,i.rs)(o))!==o&&(0,i.RI)(t,r))||(u?!n||void 0===n[o]&&void 0===n[r]||(s[o]=it(u,l,o,void 0,e,!0)):delete s[o]);if(a!==l)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(N(e.emitsOptions,o))continue;const c=t[o];if(u)if((0,i.RI)(a,o))c!==a[o]&&(a[o]=c,h=!0);else{const t=(0,i._A)(o);s[t]=it(u,l,t,c,e,!1)}else c!==a[o]&&(a[o]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function rt(e,t,n,o){const[s,a]=e.propsOptions;let c,l=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const u=t[r];let h;s&&(0,i.RI)(s,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:N(e.emitsOptions,r)||r in o&&u===o[r]||(o[r]=u,l=!0)}if(a){const t=(0,r.IU)(n),o=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=it(s,t,c,o[c],e,!(0,i.RI)(o,c))}}return l}function it(e,t,n,r,o,s){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=o;n in i?r=i[n]:(dn(o),r=i[n]=e.call(null,t),fn())}else r=e}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function ot(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,a={},c=[];let l=!1;if(!(0,i.mf)(e)){const r=e=>{l=!0;const[n,r]=ot(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!l)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(s))for(let h=0;h<s.length;h++){0;const e=(0,i._A)(s[h]);st(e)&&(a[e]=i.kT)}else if(s){0;for(const e in s){const t=(0,i._A)(e);if(st(t)){const n=s[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const e=lt(Boolean,r.type),n=lt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const u=[a,c];return(0,i.Kn)(e)&&r.set(e,u),u}function st(e){return"$"!==e[0]}function at(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function ct(e,t){return at(e)===at(t)}function lt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>ct(t,e))):(0,i.mf)(t)&&ct(t,e)?0:-1}const ut=e=>"_"===e[0]||"$stable"===e,ht=e=>(0,i.kJ)(e)?e.map(tn):[tn(e)],dt=(e,t,n)=>{if(t._n)return t;const r=L(((...e)=>ht(t(...e))),n);return r._c=!1,r},ft=(e,t,n)=>{const r=e._ctx;for(const o in e){if(ut(o))continue;const n=e[o];if((0,i.mf)(n))t[o]=dt(o,n,r);else if(null!=n){0;const e=ht(n);t[o]=()=>e}}},pt=(e,t)=>{const n=ht(t);e.slots.default=()=>n},_t=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):ft(t,e.slots={})}else e.slots={},t&&pt(e,t);(0,i.Nj)(e.slots,Vt,1)},gt=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:((0,i.l7)(o,t),n||1!==e||delete o._):(s=!t.$stable,ft(t,o)),a=t}else t&&(pt(e,t),a={default:1});if(s)for(const i in o)ut(i)||i in a||delete o[i]};function mt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vt=0;function yt(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const o=mt(),s=new Set;let a=!1;const c=o.app={_uid:vt++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:Pn,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,i.mf)(e.install)?(s.add(e),e.install(c,...t)):(0,i.mf)(e)&&(s.add(e),e(c,...t))),c},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),c},component(e,t){return t?(o.components[e]=t,c):o.components[e]},directive(e,t){return t?(o.directives[e]=t,c):o.directives[e]},mount(i,s,l){if(!a){0;const u=Yt(n,r);return u.appContext=o,s&&t?t(u,i):e(u,i,l),a=!0,c._container=i,i.__vue_app__=c,Sn(u.component)||u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return o.provides[e]=t,c}};return c}}function bt(e,t,n,s,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>bt(e,t&&((0,i.kJ)(t)?t[r]:t),n,s,a)));if(le(s)&&!a)return;const c=4&s.shapeFlag?Sn(s.component)||s.component.proxy:s.el,l=a?null:c,{i:u,r:h}=e;const d=t&&t.r,f=u.refs===i.kT?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))o(h,u,12,[l,f]);else{const t=(0,i.HD)(h),o=(0,r.dq)(h);if(t||o){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,h)?p[h]:f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=l,(0,i.RI)(p,h)&&(p[h]=l)):o&&(h.value=l,e.k&&(f[e.k]=l))};l?(r.id=-1,Ct(r,n)):r()}else 0}}function wt(){}const Ct=H;function Et(e){return St(e)}function St(e,t){wt();const n=(0,i.E9)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:_=i.dG,insertStaticContent:g}=e,m=(e,t,n,r=null,i=null,o=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ht(e,t)&&(r=Z(e),K(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Rt:v(e,t,n,r);break;case Nt:y(e,t,n,r);break;case Ot:null==e&&w(t,n,r,s);break;case Pt:A(e,t,n,r,i,o,s,a,c);break;default:1&h?k(e,t,n,r,i,o,s,a,c):6&h?L(e,t,n,r,i,o,s,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,o,s,a,c,ee)}null!=u&&i&&bt(u,e&&e.ref,o,t||e,!t)},v=(e,t,n,r)=>{if(null==e)o(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},y=(e,t,n,r)=>{null==e?o(t.el=u(t.children||""),n,r):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),o(e,n,r),e=i;o(t,n,r)},T=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},k=(e,t,n,r,i,o,s,a,c)=>{s=s||"svg"===t.type,null==e?x(t,n,r,i,o,s,a,c):N(e,t,i,o,s,a,c)},x=(e,t,n,r,s,l,u,h)=>{let f,p;const{type:_,props:g,shapeFlag:m,transition:v,dirs:y}=e;if(f=e.el=c(e.type,l,g&&g.is,g),8&m?d(f,e.children):16&m&&R(e.children,f,null,r,s,l&&"foreignObject"!==_,u,h),y&&Ne(e,null,r,"created"),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(f,t,null,g[t],l,e.children,r,s,Q);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&sn(p,r,e)}P(f,e,e.scopeId,u,r),y&&Ne(e,null,r,"beforeMount");const b=(!s||s&&!s.pendingBranch)&&v&&!v.persisted;b&&v.beforeEnter(f),o(f,t,n),((p=g&&g.onVnodeMounted)||b||y)&&Ct((()=>{p&&sn(p,r,e),b&&v.enter(f),y&&Ne(e,null,r,"mounted")}),s)},P=(e,t,n,r,i)=>{if(n&&_(e,n),r)for(let o=0;o<r.length;o++)_(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;P(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},R=(e,t,n,r,i,o,s,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?nn(e[l]):tn(e[l]);m(null,c,t,n,r,i,o,s,a)}},N=(e,t,n,r,o,s,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||i.kT,_=t.props||i.kT;let g;n&&It(n,!1),(g=_.onVnodeBeforeUpdate)&&sn(g,n,t,e),f&&Ne(t,e,n,"beforeUpdate"),n&&It(n,!0);const m=o&&"foreignObject"!==t.type;if(h?O(e.dynamicChildren,h,l,n,r,m,s):c||H(e,t,l,null,n,r,m,s,!1),u>0){if(16&u)D(l,t,p,_,n,r,o);else if(2&u&&p.class!==_.class&&a(l,"class",null,_.class,o),4&u&&a(l,"style",p.style,_.style,o),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const s=i[t],c=p[s],u=_[s];u===c&&"value"!==s||a(l,s,c,u,o,e.children,n,r,Q)}}1&u&&e.children!==t.children&&d(l,t.children)}else c||null!=h||D(l,t,p,_,n,r,o);((g=_.onVnodeUpdated)||f)&&Ct((()=>{g&&sn(g,n,t,e),f&&Ne(t,e,n,"updated")}),r)},O=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===Pt||!Ht(c,l)||70&c.shapeFlag)?f(c.el):n;m(c,l,u,null,r,i,o,s,!0)}},D=(e,t,n,r,o,s,c)=>{if(n!==r){if(n!==i.kT)for(const l in n)(0,i.Gg)(l)||l in r||a(e,l,n[l],null,c,t.children,o,s,Q);for(const l in r){if((0,i.Gg)(l))continue;const u=r[l],h=n[l];u!==h&&"value"!==l&&a(e,l,h,u,c,t.children,o,s,Q)}"value"in r&&a(e,"value",n.value,r.value)}},A=(e,t,n,r,i,s,a,c,u)=>{const h=t.el=e?e.el:l(""),d=t.anchor=e?e.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:_}=t;_&&(c=c?c.concat(_):_),null==e?(o(h,n,r),o(d,n,r),R(t.children,n,d,i,s,a,c,u)):f>0&&64&f&&p&&e.dynamicChildren?(O(e.dynamicChildren,p,n,i,s,a,c),(null!=t.key||i&&t===i.subTree)&&Tt(e,t,!0)):H(e,t,n,d,i,s,a,c,u)},L=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):M(t,n,r,i,o,s,c):j(e,t,c)},M=(e,t,n,r,i,o,s)=>{const a=e.component=ln(e,r,i);if(ue(e)&&(a.ctx.renderer=ee),vn(a),a.asyncDep){if(i&&i.registerDep(a,U),!e.el){const e=a.subTree=Yt(Nt);y(null,e,t,n)}}else U(a,e,t,n,i,o,s)},j=(e,t,n)=>{const r=t.component=e.component;if(q(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,C(r.update),r.update()}else t.el=e.el,r.vnode=t},U=(e,t,n,o,s,a,c)=>{const l=()=>{if(e.isMounted){let t,{next:n,bu:r,u:o,parent:l,vnode:u}=e,h=n;0,It(e,!1),n?(n.el=u.el,B(e,n,c)):n=u,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&sn(t,l,n,u),It(e,!0);const d=F(e);0;const p=e.subTree;e.subTree=d,m(p,d,f(p.el),Z(p),e,s,a),n.el=d.el,null===h&&W(e,d.el),o&&Ct(o,s),(t=n.props&&n.props.onVnodeUpdated)&&Ct((()=>sn(t,l,n,u)),s)}else{let r;const{el:c,props:l}=t,{bm:u,m:h,parent:d}=e,f=le(t);if(It(e,!1),u&&(0,i.ir)(u),!f&&(r=l&&l.onVnodeBeforeMount)&&sn(r,d,t),It(e,!0),c&&ne){const n=()=>{e.subTree=F(e),ne(c,e.subTree,e,s,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=F(e);0,m(null,r,n,o,e,s,a),t.el=r.el}if(h&&Ct(h,s),!f&&(r=l&&l.onVnodeMounted)){const e=t;Ct((()=>sn(r,d,e)),s)}(256&t.shapeFlag||d&&le(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Ct(e.a,s),e.isMounted=!0,t=n=o=null}},u=e.effect=new r.qq(l,(()=>b(h)),e.scope),h=e.update=()=>u.run();h.id=e.uid,It(e,!0),h()},B=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,nt(e,t.props,i,n),gt(e,t.children,n),(0,r.Jd)(),S(),(0,r.lk)()},H=(e,t,n,r,i,o,s,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void $(l,h,n,r,i,o,s,a,c);if(256&f)return void V(l,h,n,r,i,o,s,a,c)}8&p?(16&u&&Q(l,i,o),h!==l&&d(n,h)):16&u?16&p?$(l,h,n,r,i,o,s,a,c):Q(l,i,o,!0):(8&u&&d(n,""),16&p&&R(h,n,r,i,o,s,a,c))},V=(e,t,n,r,o,s,a,c,l)=>{e=e||i.Z6,t=t||i.Z6;const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=t[f]=l?nn(t[f]):tn(t[f]);m(e[f],r,n,null,o,s,a,c,l)}u>h?Q(e,o,s,!0,!1,d):R(t,n,r,o,s,a,c,l,d)},$=(e,t,n,r,o,s,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const r=e[u],i=t[u]=l?nn(t[u]):tn(t[u]);if(!Ht(r,i))break;m(r,i,n,null,o,s,a,c,l),u++}while(u<=d&&u<=f){const r=e[d],i=t[f]=l?nn(t[f]):tn(t[f]);if(!Ht(r,i))break;m(r,i,n,null,o,s,a,c,l),d--,f--}if(u>d){if(u<=f){const e=f+1,i=e<h?t[e].el:r;while(u<=f)m(null,t[u]=l?nn(t[u]):tn(t[u]),n,i,o,s,a,c,l),u++}}else if(u>f)while(u<=d)K(e[u],o,s,!0),u++;else{const p=u,_=u,g=new Map;for(u=_;u<=f;u++){const e=t[u]=l?nn(t[u]):tn(t[u]);null!=e.key&&g.set(e.key,u)}let v,y=0;const b=f-_+1;let w=!1,C=0;const E=new Array(b);for(u=0;u<b;u++)E[u]=0;for(u=p;u<=d;u++){const r=e[u];if(y>=b){K(r,o,s,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=_;v<=f;v++)if(0===E[v-_]&&Ht(r,t[v])){i=v;break}void 0===i?K(r,o,s,!0):(E[i-_]=u+1,i>=C?C=i:w=!0,m(r,t[i],n,null,o,s,a,c,l),y++)}const S=w?kt(E):i.Z6;for(v=S.length-1,u=b-1;u>=0;u--){const e=_+u,i=t[e],d=e+1<h?t[e+1].el:r;0===E[u]?m(null,i,n,d,o,s,a,c,l):w&&(v<0||u!==S[v]?z(i,n,d,2):v--)}}},z=(e,t,n,r,i=null)=>{const{el:s,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void z(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,ee);if(a===Pt){o(s,t,n);for(let e=0;e<l.length;e++)z(l[e],t,n,r);return void o(e.anchor,t,n)}if(a===Ot)return void E(e,t,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(s),o(s,t,n),Ct((()=>c.enter(s)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>o(s,t,n),l=()=>{e(s,(()=>{a(),i&&i()}))};r?r(s,a,l):l()}else o(s,t,n)},K=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&bt(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!le(e);let _;if(p&&(_=s&&s.onVnodeBeforeUnmount)&&sn(_,t,e),6&u)G(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&Ne(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,ee,r):l&&(o!==Pt||h>0&&64&h)?Q(l,t,n,!1,!0):(o===Pt&&384&h||!i&&16&u)&&Q(c,t,n),r&&Y(e)}(p&&(_=s&&s.onVnodeUnmounted)||f)&&Ct((()=>{_&&sn(_,t,e),f&&Ne(e,null,t,"unmounted")}),n)},Y=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Pt)return void J(n,r);if(t===Ot)return void T(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},J=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},G=(e,t,n)=>{const{bum:r,scope:o,update:s,subTree:a,um:c}=e;r&&(0,i.ir)(r),o.stop(),s&&(s.active=!1,K(a,e,t,n)),c&&Ct(c,t),Ct((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Q=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)K(e[s],t,n,r,i)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),X=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):m(t._vnode||null,e,t,null,null,null,n),S(),I(),t._vnode=e},ee={p:m,um:K,m:z,r:Y,mt:M,mc:R,pc:H,pbc:O,n:Z,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:X,hydrate:te,createApp:yt(X,te)}}function It({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Tt(e,t,n=!1){const r=e.children,o=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(o))for(let i=0;i<r.length;i++){const e=r[i];let t=o[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[i]=nn(o[i]),t.el=e.el),n||Tt(e,t))}}function kt(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const xt=e=>e.__isTeleport;const Pt=Symbol(void 0),Rt=Symbol(void 0),Nt=Symbol(void 0),Ot=Symbol(void 0),Dt=[];let At=null;function Lt(e=!1){Dt.push(At=e?null:[])}function Ft(){Dt.pop(),At=Dt[Dt.length-1]||null}let Mt=1;function jt(e){Mt+=e}function qt(e){return e.dynamicChildren=Mt>0?At||i.Z6:null,Ft(),Mt>0&&At&&At.push(e),e}function Ut(e,t,n,r,i,o){return qt(Kt(e,t,n,r,i,o,!0))}function Wt(e,t,n,r,i){return qt(Yt(e,t,n,r,i,!0))}function Bt(e){return!!e&&!0===e.__v_isVNode}function Ht(e,t){return e.type===t.type&&e.key===t.key}const Vt="__vInternal",$t=({key:e})=>null!=e?e:null,zt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:O,r:e,k:t,f:!!n}:e:null;function Kt(e,t=null,n=null,r=0,o=null,s=(e===Pt?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$t(t),ref:t&&zt(t),scopeId:D,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};return c?(rn(l,n),128&s&&e.normalize(l)):n&&(l.shapeFlag|=(0,i.HD)(n)?8:16),Mt>0&&!a&&At&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&At.push(l),l}const Yt=Jt;function Jt(e,t=null,n=null,o=0,s=null,a=!1){if(e&&e!==Ae||(e=Nt),Bt(e)){const r=Qt(e,t,!0);return n&&rn(r,n),Mt>0&&!a&&At&&(6&r.shapeFlag?At[At.indexOf(e)]=r:At.push(r)),r.patchFlag|=-2,r}if(Tn(e)&&(e=e.__vccOpts),t){t=Gt(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:B(e)?128:xt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Kt(e,t,n,o,s,c,a,!0)}function Gt(e){return e?(0,r.X3)(e)||Vt in e?(0,i.l7)({},e):e:null}function Qt(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:a}=e,c=t?on(r||{},t):r,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&$t(c),ref:t&&t.ref?n&&o?(0,i.kJ)(o)?o.concat(zt(t)):[o,zt(t)]:zt(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pt?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Qt(e.ssContent),ssFallback:e.ssFallback&&Qt(e.ssFallback),el:e.el,anchor:e.anchor};return l}function Zt(e=" ",t=0){return Yt(Rt,null,e,t)}function Xt(e,t){const n=Yt(Ot,null,e);return n.staticCount=t,n}function en(e="",t=!1){return t?(Lt(),Wt(Nt,null,e)):Yt(Nt,null,e)}function tn(e){return null==e||"boolean"===typeof e?Yt(Nt):(0,i.kJ)(e)?Yt(Pt,null,e.slice()):"object"===typeof e?nn(e):Yt(Rt,null,String(e))}function nn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:Qt(e)}function rn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),rn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Vt in t?3===r&&O&&(1===O.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=O}}else(0,i.mf)(t)?(t={default:t,_ctx:O},n=32):(t=String(t),64&r?(n=16,t=[Zt(t)]):n=8);e.children=t,e.shapeFlag|=n}function on(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],o=r[e];!o||n===o||(0,i.kJ)(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=r[e])}return t}function sn(e,t,n,r=null){s(e,t,7,[n,r])}const an=mt();let cn=0;function ln(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||an,a={uid:cn++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ot(o,s),emitsOptions:R(o,s),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:o.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=P.bind(null,a),e.ce&&e.ce(a),a}let un=null;const hn=()=>un||O,dn=e=>{un=e,e.scope.on()},fn=()=>{un&&un.scope.off(),un=null};function pn(e){return 4&e.vnode.shapeFlag}let _n,gn,mn=!1;function vn(e,t=!1){mn=t;const{props:n,children:r}=e.vnode,i=pn(e);tt(e,n,i,t),_t(e,r);const o=i?yn(e,t):void 0;return mn=!1,o}function yn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Ue));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?En(e):null;dn(e),(0,r.Jd)();const c=o(s,e,0,[e.props,n]);if((0,r.lk)(),fn(),(0,i.tI)(c)){if(c.then(fn,fn),t)return c.then((n=>{bn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else bn(e,c,t)}else wn(e,t)}function bn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),wn(e,n)}function wn(e,t,n){const o=e.type;if(!e.render){if(!t&&_n&&!o.render){const t=o.template||ze(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:s},r),a);o.render=_n(t,c)}}e.render=o.render||i.dG,gn&&gn(e)}dn(e),(0,r.Jd)(),Be(e),(0,r.lk)(),fn()}function Cn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function En(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Cn(e))},slots:e.slots,emit:e.emit,expose:t}}function Sn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in qe?qe[n](e):void 0}}))}function In(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Tn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const kn=(e,t)=>(0,r.Fl)(e,t,mn);function xn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Bt(t)?Yt(e,null,[t]):Yt(e,t):Yt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Bt(n)&&(n=[n]),Yt(e,t,n))}Symbol("");const Pn="3.2.41"},9242:function(e,t,n){"use strict";n.d(t,{iM:function(){return ne},nr:function(){return X},ri:function(){return se}});n(7658);var r=n(7139),i=n(3396);n(4870);const o="http://www.w3.org/2000/svg",s="undefined"!==typeof document?document:null,a=s&&s.createElement("template"),c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?s.createElementNS(o,e):s.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>s.createTextNode(e),createComment:e=>s.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>s.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{a.innerHTML=r?`<svg>${e}</svg>`:e;const i=a.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function l(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function u(e,t,n){const i=e.style,o=(0,r.HD)(n);if(n&&!o){for(const e in n)d(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&d(i,e,"")}else{const r=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const h=/\s*!important$/;function d(e,t,n){if((0,r.kJ)(n))n.forEach((n=>d(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=_(e,t);h.test(n)?e.setProperty((0,r.rs)(i),n.replace(h,""),"important"):e[i]=n}}const f=["Webkit","Moz","ms"],p={};function _(e,t){const n=p[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return p[t]=i;i=(0,r.kC)(i);for(let r=0;r<f.length;r++){const n=f[r]+i;if(n in e)return p[t]=n}return t}const g="http://www.w3.org/1999/xlink";function m(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function v(e,t,n,i,o,s,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,o,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(l){0}c&&e.removeAttribute(t)}function y(e,t,n,r){e.addEventListener(t,n,r)}function b(e,t,n,r){e.removeEventListener(t,n,r)}function w(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=E(t);if(r){const s=o[t]=k(r,i);y(e,n,s,a)}else s&&(b(e,n,s,a),o[t]=void 0)}}const C=/(?:Once|Passive|Capture)$/;function E(e){let t;if(C.test(e)){let n;t={};while(n=e.match(C))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let S=0;const I=Promise.resolve(),T=()=>S||(I.then((()=>S=0)),S=Date.now());function k(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.$d)(x(e,n.value),t,5,[e])};return n.value=e,n.attached=T(),n}function x(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const P=/^on[a-z]/,R=(e,t,n,i,o=!1,s,a,c,h)=>{"class"===t?l(e,i,o):"style"===t?u(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||w(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):N(e,t,i,o))?v(e,t,i,s,a,c,h):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),m(e,t,i,o))};function N(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&P.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!P.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const O="transition",D="animation",A=(e,{slots:t})=>(0,i.h)(i.P$,j(e),t);A.displayName="Transition";const L={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F=(A.props=(0,r.l7)({},i.P$.props,L),(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),M=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function j(e){const t={};for(const r in e)r in L||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,_=q(o),g=_&&_[0],m=_&&_[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:w,onLeaveCancelled:C,onBeforeAppear:E=v,onAppear:S=y,onAppearCancelled:I=b}=t,T=(e,t,n)=>{B(e,t?h:c),B(e,t?u:a),n&&n()},k=(e,t)=>{e._isLeaving=!1,B(e,d),B(e,p),B(e,f),t&&t()},x=e=>(t,n)=>{const r=e?S:y,o=()=>T(t,e,n);F(r,[t,o]),H((()=>{B(t,e?l:s),W(t,e?h:c),M(r)||$(t,i,g,o)}))};return(0,r.l7)(t,{onBeforeEnter(e){F(v,[e]),W(e,s),W(e,a)},onBeforeAppear(e){F(E,[e]),W(e,l),W(e,u)},onEnter:x(!1),onAppear:x(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>k(e,t);W(e,d),J(),W(e,f),H((()=>{e._isLeaving&&(B(e,d),W(e,p),M(w)||$(e,i,m,n))})),F(w,[e,n])},onEnterCancelled(e){T(e,!1),F(b,[e])},onAppearCancelled(e){T(e,!0),F(I,[e])},onLeaveCancelled(e){k(e),F(C,[e])}})}function q(e){if(null==e)return null;if((0,r.Kn)(e))return[U(e.enter),U(e.leave)];{const t=U(e);return[t,t]}}function U(e){const t=(0,r.He)(e);return t}function W(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function B(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function H(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let V=0;function $(e,t,n,r){const i=e._endId=++V,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=z(e,t);if(!s)return r();const l=s+"end";let u=0;const h=()=>{e.removeEventListener(l,d),o()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),e.addEventListener(l,d)}function z(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(O+"Delay"),o=r(O+"Duration"),s=K(i,o),a=r(D+"Delay"),c=r(D+"Duration"),l=K(a,c);let u=null,h=0,d=0;t===O?s>0&&(u=O,h=s,d=o.length):t===D?l>0&&(u=D,h=l,d=c.length):(h=Math.max(s,l),u=h>0?s>l?O:D:null,d=u?u===O?o.length:c.length:0);const f=u===O&&/\b(transform|all)(,|$)/.test(n[O+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function K(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Y(t)+Y(e[n]))))}function Y(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function J(){return document.body.offsetHeight}new WeakMap,new WeakMap;const G=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function Q(e){e.target.composing=!0}function Z(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const X={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e._assign=G(o);const s=i||o.props&&"number"===o.props.type;y(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),s&&(i=(0,r.He)(i)),e._assign(i)})),n&&y(e,"change",(()=>{e.value=e.value.trim()})),t||(y(e,"compositionstart",Q),y(e,"compositionend",Z),y(e,"change",Z))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:o}},s){if(e._assign=G(s),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((o||"number"===e.type)&&(0,r.He)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const ee=["ctrl","shift","alt","meta"],te={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ee.some((n=>e[`${n}Key`]&&!t.includes(n)))},ne=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=te[t[e]];if(r&&r(n,t))return}return e(n,...r)};const re=(0,r.l7)({patchProp:R},c);let ie;function oe(){return ie||(ie=(0,i.Us)(re))}const se=(...e)=>{const t=oe().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=ae(e);if(!i)return;const o=t._component;(0,r.mf)(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function ae(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){"use strict";n.d(t,{C_:function(){return f},DM:function(){return O},E9:function(){return re},F7:function(){return S},Gg:function(){return V},HD:function(){return L},He:function(){return te},Kn:function(){return M},NO:function(){return C},Nj:function(){return ee},Od:function(){return k},PO:function(){return B},Pq:function(){return a},RI:function(){return P},S0:function(){return H},W7:function(){return W},WV:function(){return _},Z6:function(){return b},_A:function(){return K},_N:function(){return N},aU:function(){return Z},dG:function(){return w},e1:function(){return o},fY:function(){return r},hR:function(){return Q},hq:function(){return g},ir:function(){return X},j5:function(){return l},kC:function(){return G},kJ:function(){return R},kT:function(){return y},l7:function(){return T},mf:function(){return A},rs:function(){return J},tI:function(){return j},tR:function(){return I},yA:function(){return c},yk:function(){return F},zw:function(){return m}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(e){return!!e||""===e}function l(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=L(r)?d(r):l(r);if(i)for(const e in i)t[e]=i[e]}return t}return L(e)||M(e)?e:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(u).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function f(e){let t="";if(L(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(M(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=_(e[r],t[r]);return n}function _(e,t){if(e===t)return!0;let n=D(e),r=D(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=F(e),r=F(t),n||r)return e===t;if(n=R(e),r=R(t),n||r)return!(!n||!r)&&p(e,t);if(n=M(e),r=M(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!_(e[n],t[n]))return!1}}return String(e)===String(t)}function g(e,t){return e.findIndex((e=>_(e,t)))}const m=e=>L(e)?e:null==e?"":R(e)||M(e)&&(e.toString===q||!A(e.toString))?JSON.stringify(e,v,2):String(e),v=(e,t)=>t&&t.__v_isRef?v(e,t.value):N(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:O(t)?{[`Set(${t.size})`]:[...t.values()]}:!M(t)||R(t)||B(t)?t:String(t),y={},b=[],w=()=>{},C=()=>!1,E=/^on[^a-z]/,S=e=>E.test(e),I=e=>e.startsWith("onUpdate:"),T=Object.assign,k=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},x=Object.prototype.hasOwnProperty,P=(e,t)=>x.call(e,t),R=Array.isArray,N=e=>"[object Map]"===U(e),O=e=>"[object Set]"===U(e),D=e=>"[object Date]"===U(e),A=e=>"function"===typeof e,L=e=>"string"===typeof e,F=e=>"symbol"===typeof e,M=e=>null!==e&&"object"===typeof e,j=e=>M(e)&&A(e.then)&&A(e.catch),q=Object.prototype.toString,U=e=>q.call(e),W=e=>U(e).slice(8,-1),B=e=>"[object Object]"===U(e),H=e=>L(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,V=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},z=/-(\w)/g,K=$((e=>e.replace(z,((e,t)=>t?t.toUpperCase():"")))),Y=/\B([A-Z])/g,J=$((e=>e.replace(Y,"-$1").toLowerCase())),G=$((e=>e.charAt(0).toUpperCase()+e.slice(1))),Q=$((e=>e?`on${G(e)}`:"")),Z=(e,t)=>!Object.is(e,t),X=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const re=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},4606:function(e,t,n){var r=n(7288),i=n(1680),o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not a function")}},5645:function(e,t,n){var r=n(7288),i=String,o=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+i(e)+" as a prototype")}},4371:function(e,t,n){var r=n(9918),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},6308:function(e,t,n){var r=n(6985),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not an object")}},2227:function(e,t,n){var r=n(9544),i=n(6709),o=n(4600),s=function(e){return function(t,n,s){var a,c=r(t),l=o(c),u=i(s,l);if(e&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},5137:function(e,t,n){"use strict";var r=n(6160),i=n(8003),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!s(e,"length").writable)throw o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},829:function(e,t,n){var r=n(9006),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},8059:function(e,t,n){var r=n(5444),i=n(7288),o=n(829),s=n(8935),a=s("toStringTag"),c=Object,l="Arguments"==o(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=c(e),a))?n:l?o(t):"Object"==(r=o(t))&&i(t.callee)?"Arguments":r}},7156:function(e,t,n){var r=n(7915),i=n(9491),o=n(4662),s=n(46);e.exports=function(e,t,n){for(var a=i(t),c=s.f,l=o.f,u=0;u<a.length;u++){var h=a[u];r(e,h)||n&&r(n,h)||c(e,h,l(t,h))}}},5016:function(e,t,n){var r=n(6160),i=n(46),o=n(2795);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},2795:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},394:function(e,t,n){var r=n(7288),i=n(46),o=n(3214),s=n(929);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:t;if(r(n)&&o(n,l,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(u){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},929:function(e,t,n){var r=n(3256),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},6160:function(e,t,n){var r=n(3273);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2804:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},4695:function(e,t,n){var r=n(3256),i=n(6985),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},3128:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},8018:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},5166:function(e,t,n){var r=n(5696);e.exports=r("navigator","userAgent")||""},100:function(e,t,n){var r,i,o=n(3256),s=n(5166),a=o.process,c=o.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},3673:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},3569:function(e,t,n){var r=n(7633),i=Error,o=r("".replace),s=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,a,"");return e}},7434:function(e,t,n){var r=n(3256),i=n(4662).f,o=n(5016),s=n(394),a=n(929),c=n(7156),l=n(7629);e.exports=function(e,t){var n,u,h,d,f,p,_=e.target,g=e.global,m=e.stat;if(u=g?r:m?r[_]||a(_,{}):(r[_]||{}).prototype,u)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(u,h),d=p&&p.value):d=u[h],n=l(g?h:_+(m?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(u,h,f,e)}}},3273:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},949:function(e,t,n){var r=n(3273);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},5898:function(e,t,n){var r=n(949),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},8029:function(e,t,n){var r=n(6160),i=n(7915),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},9006:function(e,t,n){var r=n(949),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);e.exports=r?s:function(e){return function(){return o.apply(e,arguments)}}},7633:function(e,t,n){var r=n(829),i=n(9006);e.exports=function(e){if("Function"===r(e))return i(e)}},5696:function(e,t,n){var r=n(3256),i=n(7288),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},7418:function(e,t,n){var r=n(4606),i=n(553);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},3256:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},7915:function(e,t,n){var r=n(7633),i=n(4815),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},4313:function(e){e.exports={}},4853:function(e,t,n){var r=n(6160),i=n(3273),o=n(4695);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},2138:function(e,t,n){var r=n(7633),i=n(3273),o=n(829),s=Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a(e,""):s(e)}:s},8748:function(e,t,n){var r=n(7288),i=n(6985),o=n(5924);e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},1259:function(e,t,n){var r=n(7633),i=n(7288),o=n(496),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},742:function(e,t,n){var r,i,o,s=n(1835),a=n(3256),c=n(6985),l=n(5016),u=n(7915),h=n(496),d=n(7692),f=n(4313),p="Object already initialized",_=a.TypeError,g=a.WeakMap,m=function(e){return o(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw _("Incompatible receiver, "+e+" required");return n}};if(s||h.state){var y=h.state||(h.state=new g);y.get=y.get,y.has=y.has,y.set=y.set,r=function(e,t){if(y.has(e))throw _(p);return t.facade=e,y.set(e,t),t},i=function(e){return y.get(e)||{}},o=function(e){return y.has(e)}}else{var b=d("state");f[b]=!0,r=function(e,t){if(u(e,b))throw _(p);return t.facade=e,l(e,b,t),t},i=function(e){return u(e,b)?e[b]:{}},o=function(e){return u(e,b)}}e.exports={set:r,get:i,has:o,enforce:m,getterFor:v}},8003:function(e,t,n){var r=n(829);e.exports=Array.isArray||function(e){return"Array"==r(e)}},7288:function(e,t,n){var r=n(2804),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},7629:function(e,t,n){var r=n(3273),i=n(7288),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==u||n!=l&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},l=s.NATIVE="N",u=s.POLYFILL="P";e.exports=s},553:function(e){e.exports=function(e){return null===e||void 0===e}},6985:function(e,t,n){var r=n(7288),i=n(2804),o=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===o}:function(e){return"object"==typeof e?null!==e:r(e)}},5521:function(e){e.exports=!1},5570:function(e,t,n){var r=n(5696),i=n(7288),o=n(9918),s=n(794),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,a(e))}},4600:function(e,t,n){var r=n(5936);e.exports=function(e){return r(e.length)}},3214:function(e,t,n){var r=n(3273),i=n(7288),o=n(7915),s=n(6160),a=n(8029).CONFIGURABLE,c=n(1259),l=n(742),u=l.enforce,h=l.get,d=Object.defineProperty,f=s&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),_=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||a&&e.name!==t)&&(s?d(e,"name",{value:t,configurable:!0}):e.name=t),f&&n&&o(n,"arity")&&e.length!==n.arity&&d(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?s&&d(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=u(e);return o(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=_((function(){return i(this)&&h(this).source||c(this)}),"toString")},201:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},3186:function(e,t,n){var r=n(9626);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},46:function(e,t,n){var r=n(6160),i=n(4853),o=n(5273),s=n(6308),a=n(5812),c=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=u(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},4662:function(e,t,n){var r=n(6160),i=n(5898),o=n(8471),s=n(2795),a=n(9544),c=n(5812),l=n(7915),u=n(4853),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),u)try{return h(e,t)}catch(n){}if(l(e,t))return s(!i(o.f,e,t),e[t])}},3367:function(e,t,n){var r=n(5106),i=n(3673),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5921:function(e,t){t.f=Object.getOwnPropertySymbols},9918:function(e,t,n){var r=n(7633);e.exports=r({}.isPrototypeOf)},5106:function(e,t,n){var r=n(7633),i=n(7915),o=n(9544),s=n(2227).indexOf,a=n(4313),c=r([].push);e.exports=function(e,t){var n,r=o(e),l=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&c(u,n);while(t.length>l)i(r,n=t[l++])&&(~s(u,n)||c(u,n));return u}},8471:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},5924:function(e,t,n){var r=n(7633),i=n(6308),o=n(5645);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},5378:function(e,t,n){var r=n(5898),i=n(7288),o=n(6985),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!o(a=r(n,e)))return a;if(i(n=e.valueOf)&&!o(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!o(a=r(n,e)))return a;throw s("Can't convert object to primitive value")}},9491:function(e,t,n){var r=n(5696),i=n(7633),o=n(3367),s=n(5921),a=n(6308),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},1995:function(e,t,n){var r=n(553),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},7692:function(e,t,n){var r=n(9168),i=n(4983),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},496:function(e,t,n){var r=n(3256),i=n(929),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},9168:function(e,t,n){var r=n(5521),i=n(496);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.0",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"})},9300:function(e,t,n){var r=n(100),i=n(3273);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},6709:function(e,t,n){var r=n(2572),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},9544:function(e,t,n){var r=n(2138),i=n(1995);e.exports=function(e){return r(i(e))}},2572:function(e,t,n){var r=n(201);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},5936:function(e,t,n){var r=n(2572),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},4815:function(e,t,n){var r=n(1995),i=Object;e.exports=function(e){return i(r(e))}},1140:function(e,t,n){var r=n(5898),i=n(6985),o=n(5570),s=n(7418),a=n(5378),c=n(8935),l=TypeError,u=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,c=s(e,u);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},5812:function(e,t,n){var r=n(1140),i=n(5570);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},5444:function(e,t,n){var r=n(8935),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},9626:function(e,t,n){var r=n(8059),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},1680:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},4983:function(e,t,n){var r=n(7633),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},794:function(e,t,n){var r=n(9300);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5273:function(e,t,n){var r=n(6160),i=n(3273);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},1835:function(e,t,n){var r=n(3256),i=n(7288),o=r.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},8935:function(e,t,n){var r=n(3256),i=n(9168),o=n(7915),s=n(4983),a=n(9300),c=n(794),l=i("wks"),u=r.Symbol,h=u&&u["for"],d=c?u:u&&u.withoutSetter||s;e.exports=function(e){if(!o(l,e)||!a&&"string"!=typeof l[e]){var t="Symbol."+e;a&&o(u,e)?l[e]=u[e]:l[e]=c&&h?h(t):d(t)}return l[e]}},3014:function(e,t,n){"use strict";var r=n(7434),i=n(4815),o=n(4600),s=n(5137),a=n(3128),c=n(3273),l=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:l||u},{push:function(e){var t=i(this),n=o(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},6727:function(e,t,n){"use strict";var r=n(7434),i=n(3256),o=n(5696),s=n(2795),a=n(46).f,c=n(7915),l=n(4371),u=n(8748),h=n(3186),d=n(8018),f=n(3569),p=n(6160),_=n(5521),g="DOMException",m=o("Error"),v=o(g),y=function(){l(this,b);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new v(t,n),i=m(t);return i.name=g,a(r,"stack",s(1,f(i.stack,1))),u(r,this,y),r},b=y.prototype=v.prototype,w="stack"in m(g),C="stack"in new v(1,2),E=v&&p&&Object.getOwnPropertyDescriptor(i,g),S=!!E&&!(E.writable&&E.configurable),I=w&&!S&&!C;r({global:!0,constructor:!0,forced:_||I},{DOMException:I?y:v});var T=o(g),k=T.prototype;if(k.constructor!==T)for(var x in _||a(k,"constructor",s(1,T)),d)if(c(d,x)){var P=d[x],R=P.s;c(T,R)||a(T,R,s(6,P.c))}},3868:function(e,t,n){"use strict";n.d(t,{BH:function(){return x},DV:function(){return W},Dv:function(){return Z},GJ:function(){return q},L:function(){return u},LL:function(){return O},Sg:function(){return P},UI:function(){return H},US:function(){return c},Wj:function(){return ee},Wl:function(){return F},Yr:function(){return y},ZB:function(){return f},ZR:function(){return N},aH:function(){return k},b$:function(){return v},cI:function(){return L},dS:function(){return ne},eu:function(){return w},g5:function(){return o},gK:function(){return X},gQ:function(){return K},h$:function(){return l},hl:function(){return b},hu:function(){return i},jU:function(){return m},lb:function(){return te},m9:function(){return ie},ne:function(){return Y},p$:function(){return d},r3:function(){return U},uI:function(){return g},ug:function(){return re},vZ:function(){return V},w9:function(){return j},xO:function(){return z},xb:function(){return B}});n(6727),n(3014);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const l=i<e.length,u=l?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==u)throw Error();const h=t<<2|s>>4;if(r.push(h),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==u){const e=c<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},l=function(e){const t=s(e);return c.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},h=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&p(n)&&(e[n]=f(e[n],t[n]));return e}function p(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function g(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function m(){return"object"===typeof self&&self.self===self}function v(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function y(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function b(){return"object"===typeof indexedDB}function w(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function C(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=()=>C().__FIREBASE_DEFAULTS__,S=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},I=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&h(e[1]);return t&&JSON.parse(t)},T=()=>{try{return E()||S()||I()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},k=()=>{var e;return null===(e=T())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[u(JSON.stringify(n)),u(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R="FirebaseError";class N extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=R,Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?D(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new N(r,s,n);return a}}function D(e,t){return e.replace(A,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){return JSON.parse(e)}function F(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=L(h(o[0])||""),n=L(h(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:t,claims:n,data:r,signature:i}},j=function(e){const t=M(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},q=function(e){const t=M(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function W(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function B(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function H(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function V(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if($(n)&&$(o)){if(!V(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(r=c^s&(a^c),i=1518500249):(r=s^a^c,i=1859775393):u<60?(r=s&a|c&(s|a),i=2400959708):(r=s^a^c,i=3395469782);const e=(o<<5|o>>>27)+r+l+i+n[u]&4294967295;l=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=e}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;while(r<t){if(0===o)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<t)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function Y(e,t){const n=new J(e,t);return n.subscribe.bind(n)}class J{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=G(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Q),void 0===r.error&&(r.error=Q),void 0===r.complete&&(r.complete=Q);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function G(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function Q(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=function(e,t,n,r){let i;if(r<t?i="at least "+t:r>n&&(i=0===n?"none":"no more than "+n),i){const t=e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+i+".";throw new Error(t)}};function X(e,t){return`${e} failed: ${t} argument `}function ee(e,t,n,r){if((!r||n)&&"function"!==typeof n)throw new Error(X(e,t)+"must be a valid function.")}function te(e,t,n,r){if((!r||n)&&("object"!==typeof n||null===n))throw new Error(X(e,t)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);if(o>=55296&&o<=56319){const t=o-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;o=65536+(t<<10)+n}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},re=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ie(e){return e&&e._delegate?e._delegate:e}},8447:function(e,t,n){"use strict";n.d(t,{Z:function(){return r.Z}});var r=n(5425),i="firebase",o="9.14.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.Z.registerVersion(i,o,"app-compat")},1356:function(e,t,n){"use strict";var r=n(5425),i=n(8507),o=(n(3014),n(6104)),s=n(3868),a=n(6056);const c="@firebase/database",l="0.13.10";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u="";function h(e){u=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,s.Wl)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,s.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,s.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new d(t)}}catch(t){}return new f},_=p("localStorage"),g=p("sessionStorage"),m=new a.Yd("@firebase/database"),v=function(){let e=1;return function(){return e++}}(),y=function(e){const t=(0,s.dS)(e),n=new s.gQ;n.update(t);const r=n.digest();return s.US.encodeByteArray(r)},b=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=b.apply(null,r):t+="object"===typeof r?(0,s.Wl)(r):r,t+=" "}return t};let w=null,C=!0;const E=function(e,t){(0,s.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(m.logLevel=a["in"].VERBOSE,w=m.log.bind(m),t&&g.set("logging_enabled",!0)):"function"===typeof e?w=e:(w=null,g.remove("logging_enabled"))},S=function(...e){if(!0===C&&(C=!1,null===w&&!0===g.get("logging_enabled")&&E(!0)),w){const t=b.apply(null,e);w(t)}},I=function(e){return function(...t){S(e,...t)}},T=function(...e){const t="FIREBASE INTERNAL ERROR: "+b(...e);m.error(t)},k=function(...e){const t=`FIREBASE FATAL ERROR: ${b(...e)}`;throw m.error(t),new Error(t)},x=function(...e){const t="FIREBASE WARNING: "+b(...e);m.warn(t)},P=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&x("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},R=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},N=function(e){if((0,s.Yr)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},O="[MIN_NAME]",D="[MAX_NAME]",A=function(e,t){if(e===t)return 0;if(e===O||t===D)return-1;if(t===O||e===D)return 1;{const n=K(e),r=K(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},L=function(e,t){return e===t?0:e<t?-1:1},F=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,s.Wl)(t))},M=function(e){if("object"!==typeof e||null===e)return(0,s.Wl)(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=(0,s.Wl)(t[r]),n+=":",n+=M(e[t[r]]);return n+="}",n},j=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function q(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const U=function(e){(0,s.hu)(!R(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,o,a,c,l;0===e?(o=0,a=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),r),o=c+r,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(h.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},W=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},B=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function H(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const V=new RegExp("^-?(0*)\\d{1,10}$"),$=-2147483648,z=2147483647,K=function(e){if(V.test(e)){const t=Number(e);if(t>=$&&t<=z)return t}return null},Y=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw x("Exception was thrown by user callback.",e),t}),Math.floor(0))}},J=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},G=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){x(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(S("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',x(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ee="5",te="v",ne="s",re="r",ie="f",oe=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,se="ls",ae="p",ce="ac",le="websocket",ue="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(e,t,n,r,i=!1,o="",s=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function de(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function fe(e,t,n){let r;if((0,s.hu)("string"===typeof t,"typeof type must == string"),(0,s.hu)("object"===typeof n,"typeof params must == object"),t===le)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ue)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}de(e)&&(n["ns"]=e.namespace);const i=[];return q(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,s.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,s.p$)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e={},ge={};function me(e){const t=e.toString();return _e[t]||(_e[t]=new pe),_e[t]}function ve(e,t){const n=e.toString();return ge[n]||(ge[n]=t()),ge[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Y((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="start",we="close",Ce="pLPCommand",Ee="pRTLPCB",Se="id",Ie="pw",Te="ser",ke="cb",xe="seg",Pe="ts",Re="d",Ne="dframe",Oe=1870,De=30,Ae=Oe-De,Le=25e3,Fe=3e4;class Me{constructor(e,t,n,r,i,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=I(e),this.stats_=me(t),this.urlFn=e=>(this.appCheckToken&&(e[ce]=this.appCheckToken),fe(t,ue,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ye(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Fe)),N((()=>{if(this.isClosed_)return;this.scriptTagHolder=new je(((...e)=>{const[t,n,r,i,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===be)this.id=n,this.password=r;else{if(t!==we)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[be]="t",e[Te]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[ke]=this.scriptTagHolder.uniqueCallbackIdentifier),e[te]=ee,this.transportSessionId&&(e[ne]=this.transportSessionId),this.lastSessionId&&(e[se]=this.lastSessionId),this.applicationId&&(e[ae]=this.applicationId),this.appCheckToken&&(e[ce]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&oe.test(location.hostname)&&(e[re]=ie);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Me.forceAllow_=!0}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){return!(0,s.Yr)()&&(!!Me.forceAllow_||!Me.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!W()&&!B())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,s.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,s.h$)(t),r=j(n,Ae);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,s.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Ne]="t",n[Se]=e,n[Ie]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,s.Wl)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class je{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,s.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=v(),window[Ce+this.uniqueCallbackIdentifier]=e,window[Ee+this.uniqueCallbackIdentifier]=t,this.myIFrame=je.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){S("frame writing exception"),i.stack&&S(i.stack),S(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||S("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Se]=this.myID,e[Ie]=this.myPW,e[Te]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+De+n.length<=Oe))break;{const e=this.pendingSegs.shift();n=n+"&"+xe+r+"="+e.seg+"&"+Pe+r+"="+e.ts+"&"+Re+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(Le)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){(0,s.Yr)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{S("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=16384,Ue=45e3;let We=null;"undefined"!==typeof MozWebSocket?We=MozWebSocket:"undefined"!==typeof WebSocket&&(We=WebSocket);class Be{constructor(e,t,n,r,i,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=I(this.connId),this.stats_=me(t),this.connURL=Be.connectionURL_(t,o,s,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const o={};return o[te]=ee,!(0,s.Yr)()&&"undefined"!==typeof location&&location.hostname&&oe.test(location.hostname)&&(o[re]=ie),t&&(o[ne]=t),n&&(o[se]=n),r&&(o[ce]=r),i&&(o[ae]=i),fe(e,le,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_.set("previous_websocket_failure",!0);try{let e;if((0,s.Yr)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${ee}/${u}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/"},r=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];r&&(e["proxy"]={origin:r})}this.mySock=new We(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Be.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==We&&!Be.forceDisallow_}static previouslyFailed(){return _.isInMemoryStorage||!0===_.get("previous_websocket_failure")}markConnectionHealthy(){_.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,s.cI)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,s.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,s.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=j(t,qe);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Ue))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Be.responsesRequiredToBeHealthy=2,Be.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class He{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Me,Be]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Be&&Be["isAvailable"]();let n=t&&!Be.previouslyFailed();if(e.webSocketOnly&&(t||x("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Be];else{const e=this.transports_=[];for(const t of He.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);He.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}He.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ve=6e4,$e=5e3,ze=10240,Ke=102400,Ye="t",Je="d",Ge="s",Qe="r",Ze="e",Xe="o",et="a",tt="n",nt="p",rt="h";class it{constructor(e,t,n,r,i,o,s,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=I("c:"+this.id+":"),this.transportManager_=new He(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=G((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ke?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ze?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ye in e){const t=e[Ye];t===et?this.upgradeIfSecondaryHealthy_():t===Qe?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=F("t",e),n=F("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:et,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tt,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=F("t",e),n=F("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=F(Ye,e);if(Je in e){const n=e[Je];if(t===rt)this.onHandshake_(n);else if(t===tt){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ge?this.onConnectionShutdown_(n):t===Qe?this.onReset_(n):t===Ze?T("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):T("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ee!==n&&x("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),G((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(Ve))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):G((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor($e))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,s.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){(0,s.hu)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends st{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,s.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new at}getInitialEvent(e){return(0,s.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=32,lt=768;class ut{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ht(){return new ut("")}function dt(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ft(e){return e.pieces_.length-e.pieceNum_}function pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ut(e.pieces_,t)}function _t(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function gt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function mt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function vt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ut(t,0)}function yt(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof ut)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ut(n,0)}function bt(e){return e.pieceNum_>=e.pieces_.length}function wt(e,t){const n=dt(e),r=dt(t);if(null===n)return t;if(n===r)return wt(pt(e),pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ct(e,t){const n=mt(e,0),r=mt(t,0);for(let i=0;i<n.length&&i<r.length;i++){const e=A(n[i],r[i]);if(0!==e)return e}return n.length===r.length?0:n.length<r.length?-1:1}function Et(e,t){if(ft(e)!==ft(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function St(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(ft(e)>ft(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class It{constructor(e,t){this.errorPrefix_=t,this.parts_=mt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,s.ug)(this.parts_[n]);xt(this)}}function Tt(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,s.ug)(t),xt(e)}function kt(e){const t=e.parts_.pop();e.byteLength_-=(0,s.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}function xt(e){if(e.byteLength_>lt)throw new Error(e.errorPrefix_+"has a key path longer than "+lt+" bytes ("+e.byteLength_+").");if(e.parts_.length>ct)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ct+") or object contains a cycle "+Pt(e))}function Pt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends st{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Rt}getInitialEvent(e){return(0,s.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=1e3,Ot=3e5,Dt=3e4,At=1.3,Lt=3e4,Ft="server_kill",Mt=3;class jt extends ot{constructor(e,t,n,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=jt.nextPersistentConnectionId_++,this.log_=I("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Nt,this.maxReconnectDelay_=Ot,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,s.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Rt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&at.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_((0,s.Wl)(i)),(0,s.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new s.BH,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),(0,s.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,s.hu)(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(o,i,(i=>{const o=i["d"],s=i["s"];jt.warnOnListenWarnings_(o,t);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,s.r3)(e,"w")){const n=(0,s.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();x(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,s.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Dt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,s.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,s.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};void 0!==i&&(o["h"]=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,s.Wl)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):T("Unrecognized action received from server: "+(0,s.Wl)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,s.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Lt&&(this.reconnectDelay_=Nt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*At)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+jt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(e){(0,s.hu)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?S("getToken() completed but was canceled"):(S("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=c&&c.token,a=new it(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{x(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ft)}),i))}catch(T){this.log_("Failed to get token: "+T),o||(this.repoInfo_.nodeAdmin&&x(T),c())}}}interrupt(e){S("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){S("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,s.xb)(this.interruptReasons_)&&(this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>M(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new ut(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){S("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mt&&(this.reconnectDelay_=Dt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){S("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,s.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+u.replace(/\./g,"-")]=1,(0,s.uI)()?e["framework.cordova"]=1:(0,s.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=at.getInstance().currentlyOnline();return(0,s.xb)(this.interruptReasons_)&&e}}jt.nextPersistentConnectionId_=0,jt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new qt(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new qt(O,e),r=new qt(O,t);return 0!==this.compare(n,r)}minPost(){return qt.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wt;class Bt extends Ut{static get __EMPTY_NODE(){return Wt}static set __EMPTY_NODE(e){Wt=e}compare(e,t){return A(e.name,t.name)}isDefinedOn(e){throw(0,s.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return qt.MIN}maxPost(){return new qt(D,Wt)}makePost(e,t){return(0,s.hu)("string"===typeof e,"KeyIndex indexValue must always be a string."),new qt(e,Wt)}toString(){return".key"}}const Ht=new Bt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;while(!e.isEmpty())if(o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $t{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:$t.RED,this.left=null!=r?r:Kt.EMPTY_NODE,this.right=null!=i?i:Kt.EMPTY_NODE}copy(e,t,n,r,i){return new $t(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Kt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Kt.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$t.RED=!0,$t.BLACK=!1;class zt{copy(e,t,n,r,i){return this}insert(e,t,n){return new $t(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Kt{constructor(e,t=Kt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Kt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,$t.BLACK,null,null))}remove(e){return new Kt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$t.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Vt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yt(e,t){return A(e.name,t.name)}function Jt(e,t){return A(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gt;function Qt(e){Gt=e}Kt.EMPTY_NODE=new zt;const Zt=function(e){return"number"===typeof e?"number:"+U(e):"string:"+e},Xt=function(e){if(e.isLeafNode()){const t=e.val();(0,s.hu)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,s.r3)(t,".sv"),"Priority must be a string or number.")}else(0,s.hu)(e===Gt||e.isEmpty(),"priority of unexpected type.");(0,s.hu)(e===Gt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let en,tn,nn;class rn{constructor(e,t=rn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,s.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Xt(this.priorityNode_)}static set __childrenNodeConstructor(e){en=e}static get __childrenNodeConstructor(){return en}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return bt(e)?this:".priority"===dt(e)?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:rn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=dt(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,s.hu)(".priority"!==n||1===ft(e),".priority must be the last token in a path"),this.updateImmediateChild(n,rn.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?U(this.value_):this.value_,this.lazyHash_=y(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rn.__childrenNodeConstructor?-1:((0,s.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=rn.VALUE_TYPE_ORDER.indexOf(t),i=rn.VALUE_TYPE_ORDER.indexOf(n);return(0,s.hu)(r>=0,"Unknown leaf type: "+t),(0,s.hu)(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function on(e){tn=e}function sn(e){nn=e}rn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class an extends Ut{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?A(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return qt.MIN}maxPost(){return new qt(D,new rn("[PRIORITY-POST]",nn))}makePost(e,t){const n=tn(e);return new qt(t,new rn("[PRIORITY-POST]",n))}toString(){return".priority"}}const cn=new an,ln=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){const t=e=>parseInt(Math.log(e)/ln,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hn=function(e,t,n,r){e.sort(t);const i=function(t,r){const o=r-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new $t(a,s.node,$t.BLACK,null,null);{const c=parseInt(o/2,10)+t,l=i(t,c),u=i(c+1,r);return s=e[c],a=n?n(s):s,new $t(a,s.node,$t.BLACK,l,u)}},o=function(t){let r=null,o=null,s=e.length;const a=function(t,r){const o=s-t,a=s;s-=t;const l=i(o+1,a),u=e[o],h=n?n(u):u;c(new $t(h,u.node,r,null,l))},c=function(e){r?(r.left=e,r=e):(o=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,$t.BLACK):(a(r,$t.BLACK),a(r,$t.RED))}return o},s=new un(e.length),a=o(s);return new Kt(r||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;const fn={};class pn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,s.hu)(fn&&cn,"ChildrenNode.ts has not been loaded"),dn=dn||new pn({".priority":fn},{".priority":cn}),dn}get(e){const t=(0,s.DV)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Kt?t:null}hasIndex(e){return(0,s.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,s.hu)(e!==Ht,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(qt.Wrap);let o,a=i.getNext();while(a)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();o=r?hn(n,e.getCompare()):fn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=o,new pn(u,l)}addToIndexes(e,t){const n=(0,s.UI)(this.indexes_,((n,r)=>{const i=(0,s.DV)(this.indexSet_,r);if((0,s.hu)(i,"Missing index implementation for "+r),n===fn){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(qt.Wrap);let o=r.getNext();while(o)o.name!==e.name&&n.push(o),o=r.getNext();return n.push(e),hn(n,i.getCompare())}return fn}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new qt(e.name,r))),i.insert(e,e.node)}}));return new pn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,s.UI)(this.indexes_,(n=>{if(n===fn)return n;{const r=t.get(e.name);return r?n.remove(new qt(e.name,r)):n}}));return new pn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _n;class gn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Xt(this.priorityNode_),this.children_.isEmpty()&&(0,s.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _n||(_n=new gn(new Kt(Jt),null,pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_n}updatePriority(e){return this.children_.isEmpty()?this:new gn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?_n:t}}getChild(e){const t=dt(e);return null===t?this:this.getImmediateChild(t).getChild(pt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,s.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new qt(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?_n:this.priorityNode_;return new gn(r,o,i)}}updateChild(e,t){const n=dt(e);if(null===n)return t;{(0,s.hu)(".priority"!==dt(e)||1===ft(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(pt(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(cn,((o,s)=>{t[o]=s.val(e),n++,i&&gn.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zt(this.getPriority().val())+":"),this.forEachChild(cn,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":y(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new qt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new qt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new qt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,qt.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,qt.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vn?-1:0}withIndex(e){if(e===Ht||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new gn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ht||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(cn),n=t.getIterator(cn);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Ht?null:this.indexMap_.get(e.toString())}}gn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mn extends gn{constructor(){super(new Kt(Jt),gn.EMPTY_NODE,pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return gn.EMPTY_NODE}isEmpty(){return!1}}const vn=new mn;Object.defineProperties(qt,{MIN:{value:new qt(O,gn.EMPTY_NODE)},MAX:{value:new qt(D,vn)}}),Bt.__EMPTY_NODE=gn.EMPTY_NODE,rn.__childrenNodeConstructor=gn,Qt(vn),sn(vn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn=!0;function bn(e,t=null){if(null===e)return gn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,s.hu)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new rn(n,bn(t))}if(e instanceof Array||!yn){let n=gn.EMPTY_NODE;return q(e,((t,r)=>{if((0,s.r3)(e,t)&&"."!==t.substring(0,1)){const e=bn(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(bn(t))}{const n=[];let r=!1;const i=e;if(q(i,((e,t)=>{if("."!==e.substring(0,1)){const i=bn(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new qt(e,i)))}})),0===n.length)return gn.EMPTY_NODE;const o=hn(n,Yt,(e=>e.name),Jt);if(r){const e=hn(n,cn.getCompare());return new gn(o,bn(t),new pn({".priority":e},{".priority":cn}))}return new gn(o,bn(t),pn.Default)}}on(bn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn extends Ut{constructor(e){super(),this.indexPath_=e,(0,s.hu)(!bt(e)&&".priority"!==dt(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?A(e.name,t.name):i}makePost(e,t){const n=bn(e),r=gn.EMPTY_NODE.updateChild(this.indexPath_,n);return new qt(t,r)}maxPost(){const e=gn.EMPTY_NODE.updateChild(this.indexPath_,vn);return new qt(D,e)}toString(){return mt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Ut{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?A(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return qt.MIN}maxPost(){return qt.MAX}makePost(e,t){const n=bn(e);return new qt(t,n)}toString(){return".value"}}const En=new Cn,Sn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",In="-",Tn="z",kn=786,xn=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const o=new Array(8);for(i=7;i>=0;i--)o[i]=Sn.charAt(n%64),n=Math.floor(n/64);(0,s.hu)(0===n,"Cannot push at time == 0");let a=o.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)a+=Sn.charAt(t[i]);return(0,s.hu)(20===a.length,"nextPushId: Length should be 20."),a}}(),Pn=function(e){if(e===""+z)return In;const t=K(e);if(null!=t)return""+(t+1);const n=new Array(e.length);for(let s=0;s<n.length;s++)n[s]=e.charAt(s);if(n.length<kn)return n.push(In),n.join("");let r=n.length-1;while(r>=0&&n[r]===Tn)r--;if(-1===r)return D;const i=n[r],o=Sn.charAt(Sn.indexOf(i)+1);return n[r]=o,n.slice(0,r+1).join("")},Rn=function(e){if(e===""+$)return O;const t=K(e);if(null!=t)return""+(t-1);const n=new Array(e.length);for(let r=0;r<n.length;r++)n[r]=e.charAt(r);return n[n.length-1]===In?1===n.length?""+z:(delete n[n.length-1],n.join("")):(n[n.length-1]=Sn.charAt(Sn.indexOf(n[n.length-1])-1),n.join("")+Tn.repeat(kn-n.length))};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nn(e){return{type:"value",snapshotNode:e}}function On(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Dn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function An(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Ln(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.index_=e}updateChild(e,t,n,r,i,o){(0,s.hu)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(Dn(t,a)):(0,s.hu)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(On(t,n)):o.trackChildChange(An(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(cn,((e,r)=>{t.hasChild(e)||n.trackChildChange(Dn(e,r))})),t.isLeafNode()||t.forEachChild(cn,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(An(t,r,i))}else n.trackChildChange(On(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?gn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.indexedFilter_=new Fn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Mn.getStartPost_(e),this.endPost_=Mn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,o){return this.matches(new qt(t,n))||(n=gn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=gn.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(gn.EMPTY_NODE);const i=this;return t.forEachChild(cn,((e,t)=>{i.matches(new qt(e,t))||(r=r.updateImmediateChild(e,gn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.rangedFilter_=new Mn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new qt(t,n))||(n=gn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=gn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=gn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,o;if(r=t.withIndex(this.index_),r=r.updatePriority(gn.EMPTY_NODE),this.reverse_){o=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else o=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let s=0,a=!1;while(o.hasNext()){const t=o.getNext();!a&&i(e,t)<=0&&(a=!0);const c=a&&s<this.limit_&&i(t,n)<=0;c?s++:r=r.updateImmediateChild(t.name,gn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;(0,s.hu)(a.numChildren()===this.limit_,"");const c=new qt(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=r.getChildAfterChild(this.index_,l,this.reverse_);while(null!=s&&(s.name===t||a.hasChild(s.name)))s=r.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(An(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Dn(t,e));const n=a.updateImmediateChild(t,gn.EMPTY_NODE),r=null!=s&&this.rangedFilter_.matches(s);return r?(null!=i&&i.trackChildChange(On(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:u&&o(l,c)>=0?(null!=i&&(i.trackChildChange(Dn(l.name,l.node)),i.trackChildChange(On(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,gn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=cn}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,s.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,s.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:O}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,s.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,s.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:D}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,s.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===cn}copy(){const e=new qn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Un(e){return e.loadsAllData()?new Fn(e.getIndex()):e.hasLimit()?new jn(e):new Mn(e)}function Wn(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}function Bn(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}function Hn(e,t,n){const r=e.copy();return r.startSet_=!0,void 0===t&&(t=null),r.indexStartValue_=t,null!=n?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function Vn(e,t,n){let r;if(e.index_===Ht)"string"===typeof t&&(t=Pn(t)),r=Hn(e,t,n);else{let i;i=null==n?D:Pn(n),r=Hn(e,t,i)}return r.startAfterSet_=!0,r}function $n(e,t,n){const r=e.copy();return r.endSet_=!0,void 0===t&&(t=null),r.indexEndValue_=t,void 0!==n?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function zn(e,t,n){let r,i;return e.index_===Ht?("string"===typeof t&&(t=Rn(t)),i=$n(e,t,n)):(r=null==n?O:Rn(n),i=$n(e,t,r)),i.endBeforeSet_=!0,i}function Kn(e,t){const n=e.copy();return n.index_=t,n}function Yn(e){const t={};if(e.isDefault())return t;let n;return e.index_===cn?n="$priority":e.index_===En?n="$value":e.index_===Ht?n="$key":((0,s.hu)(e.index_ instanceof wn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,s.Wl)(n),e.startSet_&&(t["startAt"]=(0,s.Wl)(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+(0,s.Wl)(e.indexStartName_))),e.endSet_&&(t["endAt"]=(0,s.Wl)(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+(0,s.Wl)(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Jn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==cn&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends ot{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=I("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,s.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Gn.getListenId_(e,n),a={};this.listens_[o]=a;const c=Yn(e._queryParams);this.restRequest_(i+".json",c,((e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),(0,s.DV)(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Gn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Yn(e._queryParams),n=e._path.toString(),r=new s.BH;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,s.xO)(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=(0,s.cI)(a.responseText)}catch(e){x("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&x("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.rootNode_=gn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(){return{value:null,children:new Map}}function Xn(e,t,n){if(bt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=dt(t);e.children.has(r)||e.children.set(r,Zn());const i=e.children.get(r);t=pt(t),Xn(i,t,n)}}function er(e,t){if(bt(t))return e.value=null,e.children.clear(),!0;if(null!==e.value){if(e.value.isLeafNode())return!1;{const n=e.value;return e.value=null,n.forEachChild(cn,((t,n)=>{Xn(e,new ut(t),n)})),er(e,t)}}if(e.children.size>0){const n=dt(t);if(t=pt(t),e.children.has(n)){const r=er(e.children.get(n),t);r&&e.children.delete(n)}return 0===e.children.size}return!0}function tr(e,t,n){null!==e.value?n(t,e.value):nr(e,((e,r)=>{const i=new ut(t.toString()+"/"+e);tr(r,i,n)}))}function nr(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&q(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=1e4,or=3e4,sr=3e5;class ar{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new rr(e);const n=ir+(or-ir)*Math.random();G(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;q(e,((e,r)=>{r>0&&(0,s.r3)(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),G(this.reportStats_.bind(this),Math.floor(2*Math.random()*sr))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cr;function lr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ur(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hr(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(cr||(cr={}));class dr{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=cr.ACK_USER_WRITE,this.source=lr()}operationForChild(e){if(bt(this.path)){if(null!=this.affectedTree.value)return(0,s.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ut(e));return new dr(ht(),t,this.revert)}}return(0,s.hu)(dt(this.path)===e,"operationForChild called for unrelated child."),new dr(pt(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t){this.source=e,this.path=t,this.type=cr.LISTEN_COMPLETE}operationForChild(e){return bt(this.path)?new fr(this.source,ht()):new fr(this.source,pt(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=cr.OVERWRITE}operationForChild(e){return bt(this.path)?new pr(this.source,ht(),this.snap.getImmediateChild(e)):new pr(this.source,pt(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=cr.MERGE}operationForChild(e){if(bt(this.path)){const t=this.children.subtree(new ut(e));return t.isEmpty()?null:t.value?new pr(this.source,ht(),t.value):new _r(this.source,ht(),t)}return(0,s.hu)(dt(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _r(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(bt(e))return this.isFullyInitialized()&&!this.filtered_;const t=dt(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function vr(e,t,n,r){const i=[],o=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(Ln(t.childName,t.snapshotNode))})),yr(e,i,"child_removed",t,r,n),yr(e,i,"child_added",t,r,n),yr(e,i,"child_moved",o,r,n),yr(e,i,"child_changed",t,r,n),yr(e,i,"value",t,r,n),i}function yr(e,t,n,r,i,o){const s=r.filter((e=>e.type===n));s.sort(((t,n)=>wr(e,t,n))),s.forEach((n=>{const r=br(e,n,o);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function br(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function wr(e,t,n){if(null==t.childName||null==n.childName)throw(0,s.g5)("Should only compare child_ events.");const r=new qt(t.childName,t.snapshotNode),i=new qt(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(e,t){return{eventCache:e,serverCache:t}}function Er(e,t,n,r){return Cr(new gr(t,n,r),e.serverCache)}function Sr(e,t,n,r){return Cr(e.eventCache,new gr(t,n,r))}function Ir(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Tr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kr;const xr=()=>(kr||(kr=new Kt(L)),kr);class Pr{constructor(e,t=xr()){this.value=e,this.children=t}static fromObject(e){let t=new Pr(null);return q(e,((e,n)=>{t=t.set(new ut(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ht(),value:this.value};if(bt(e))return null;{const n=dt(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(pt(e),t);if(null!=i){const e=yt(new ut(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(bt(e))return this;{const t=dt(e),n=this.children.get(t);return null!==n?n.subtree(pt(e)):new Pr(null)}}set(e,t){if(bt(e))return new Pr(t,this.children);{const n=dt(e),r=this.children.get(n)||new Pr(null),i=r.set(pt(e),t),o=this.children.insert(n,i);return new Pr(this.value,o)}}remove(e){if(bt(e))return this.children.isEmpty()?new Pr(null):new Pr(null,this.children);{const t=dt(e),n=this.children.get(t);if(n){const r=n.remove(pt(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new Pr(null):new Pr(this.value,i)}return this}}get(e){if(bt(e))return this.value;{const t=dt(e),n=this.children.get(t);return n?n.get(pt(e)):null}}setTree(e,t){if(bt(e))return t;{const n=dt(e),r=this.children.get(n)||new Pr(null),i=r.setTree(pt(e),t);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Pr(this.value,o)}}fold(e){return this.fold_(ht(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(yt(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ht(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(bt(e))return null;{const r=dt(e),i=this.children.get(r);return i?i.findOnPath_(pt(e),yt(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ht(),t)}foreachOnPath_(e,t,n){if(bt(e))return this;{this.value&&n(t,this.value);const r=dt(e),i=this.children.get(r);return i?i.foreachOnPath_(pt(e),yt(t,r),n):new Pr(null)}}foreach(e){this.foreach_(ht(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(yt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.writeTree_=e}static empty(){return new Rr(new Pr(null))}}function Nr(e,t,n){if(bt(t))return new Rr(new Pr(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let o=r.value;const s=wt(i,t);return o=o.updateChild(s,n),new Rr(e.writeTree_.set(i,o))}{const r=new Pr(n),i=e.writeTree_.setTree(t,r);return new Rr(i)}}}function Or(e,t,n){let r=e;return q(n,((e,n)=>{r=Nr(r,yt(t,e),n)})),r}function Dr(e,t){if(bt(t))return Rr.empty();{const n=e.writeTree_.setTree(t,new Pr(null));return new Rr(n)}}function Ar(e,t){return null!=Lr(e,t)}function Lr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(wt(n.path,t)):null}function Fr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(cn,((e,n)=>{t.push(new qt(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new qt(e,n.value))})),t}function Mr(e,t){if(bt(t))return e;{const n=Lr(e,t);return new Rr(null!=n?new Pr(n):e.writeTree_.subtree(t))}}function jr(e){return e.writeTree_.isEmpty()}function qr(e,t){return Ur(ht(),e.writeTree_,t)}function Ur(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?((0,s.hu)(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Ur(yt(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(yt(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(e,t){return ui(t,e)}function Br(e,t,n,r,i){(0,s.hu)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Nr(e.visibleWrites,t,n)),e.lastWriteId=r}function Hr(e,t,n,r){(0,s.hu)(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Or(e.visibleWrites,t,n),e.lastWriteId=r}function Vr(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function $r(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,s.hu)(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,a=e.allWrites.length-1;while(i&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&zr(t,r.path)?i=!1:St(r.path,t.path)&&(o=!0)),a--}if(i){if(o)return Kr(e),!0;if(r.snap)e.visibleWrites=Dr(e.visibleWrites,r.path);else{const t=r.children;q(t,(t=>{e.visibleWrites=Dr(e.visibleWrites,yt(r.path,t))}))}return!0}return!1}function zr(e,t){if(e.snap)return St(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&St(yt(e.path,n),t))return!0;return!1}function Kr(e){e.visibleWrites=Jr(e.allWrites,Yr,ht()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Yr(e){return e.visible}function Jr(e,t,n){let r=Rr.empty();for(let i=0;i<e.length;++i){const o=e[i];if(t(o)){const e=o.path;let t;if(o.snap)St(n,e)?(t=wt(n,e),r=Nr(r,t,o.snap)):St(e,n)&&(t=wt(e,n),r=Nr(r,ht(),o.snap.getChild(t)));else{if(!o.children)throw(0,s.g5)("WriteRecord should have .snap or .children");if(St(n,e))t=wt(n,e),r=Or(r,t,o.children);else if(St(e,n))if(t=wt(e,n),bt(t))r=Or(r,ht(),o.children);else{const e=(0,s.DV)(o.children,dt(t));if(e){const n=e.getChild(pt(t));r=Nr(r,ht(),n)}}}}}return r}function Gr(e,t,n,r,i){if(r||i){const o=Mr(e.visibleWrites,t);if(!i&&jr(o))return n;if(i||null!=n||Ar(o,ht())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(St(e.path,t)||St(t,e.path))},s=Jr(e.allWrites,o,t),a=n||gn.EMPTY_NODE;return qr(s,a)}return null}{const r=Lr(e.visibleWrites,t);if(null!=r)return r;{const r=Mr(e.visibleWrites,t);if(jr(r))return n;if(null!=n||Ar(r,ht())){const e=n||gn.EMPTY_NODE;return qr(r,e)}return null}}}function Qr(e,t,n){let r=gn.EMPTY_NODE;const i=Lr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(cn,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=Mr(e.visibleWrites,t);return n.forEachChild(cn,((e,t)=>{const n=qr(Mr(i,new ut(e)),t);r=r.updateImmediateChild(e,n)})),Fr(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}{const n=Mr(e.visibleWrites,t);return Fr(n).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}}function Zr(e,t,n,r,i){(0,s.hu)(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=yt(t,n);if(Ar(e.visibleWrites,o))return null;{const t=Mr(e.visibleWrites,o);return jr(t)?i.getChild(n):qr(t,i.getChild(n))}}function Xr(e,t,n,r){const i=yt(t,n),o=Lr(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n)){const t=Mr(e.visibleWrites,i);return qr(t,r.getNode().getImmediateChild(n))}return null}function ei(e,t){return Lr(e.visibleWrites,t)}function ti(e,t,n,r,i,o,s){let a;const c=Mr(e.visibleWrites,t),l=Lr(c,ht());if(null!=l)a=l;else{if(null==n)return[];a=qr(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let c=n.getNext();while(c&&e.length<i)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}function ni(){return{visibleWrites:Rr.empty(),allWrites:[],lastWriteId:-1}}function ri(e,t,n,r){return Gr(e.writeTree,e.treePath,t,n,r)}function ii(e,t){return Qr(e.writeTree,e.treePath,t)}function oi(e,t,n,r){return Zr(e.writeTree,e.treePath,t,n,r)}function si(e,t){return ei(e.writeTree,yt(e.treePath,t))}function ai(e,t,n,r,i,o){return ti(e.writeTree,e.treePath,t,n,r,i,o)}function ci(e,t,n){return Xr(e.writeTree,e.treePath,t,n)}function li(e,t){return ui(yt(e.treePath,t),e.writeTree)}function ui(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,s.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,s.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,An(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Dn(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,On(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw(0,s.g5)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,An(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const fi=new di;class pi{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new gr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ci(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Tr(this.viewCache_),i=ai(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(e){return{filter:e}}function gi(e,t){(0,s.hu)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,s.hu)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function mi(e,t,n,r,i){const o=new hi;let a,c;if(n.type===cr.OVERWRITE){const l=n;l.source.fromUser?a=wi(e,t,l.path,l.snap,r,i,o):((0,s.hu)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!bt(l.path),a=bi(e,t,l.path,l.snap,r,i,c,o))}else if(n.type===cr.MERGE){const l=n;l.source.fromUser?a=Ei(e,t,l.path,l.children,r,i,o):((0,s.hu)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=Ii(e,t,l.path,l.children,r,i,c,o))}else if(n.type===cr.ACK_USER_WRITE){const s=n;a=s.revert?xi(e,t,s.path,r,i,o):Ti(e,t,s.path,s.affectedTree,r,i,o)}else{if(n.type!==cr.LISTEN_COMPLETE)throw(0,s.g5)("Unknown operation type: "+n.type);a=ki(e,t,n.path,r,o)}const l=o.getChanges();return vi(t,a,l),{viewCache:a,changes:l}}function vi(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=Ir(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(Nn(Ir(t)))}}function yi(e,t,n,r,i,o){const a=t.eventCache;if(null!=si(r,n))return t;{let c,l;if(bt(n))if((0,s.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Tr(t),i=n instanceof gn?n:gn.EMPTY_NODE,s=ii(r,i);c=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=ri(r,Tr(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const u=dt(n);if(".priority"===u){(0,s.hu)(1===ft(n),"Can't have a priority with additional path components");const i=a.getNode();l=t.serverCache.getNode();const o=oi(r,n,i,l);c=null!=o?e.filter.updatePriority(i,o):a.getNode()}else{const s=pt(n);let h;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const e=oi(r,n,a.getNode(),l);h=null!=e?a.getNode().getImmediateChild(u).updateChild(s,e):a.getNode().getImmediateChild(u)}else h=ci(r,u,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),u,h,s,i,o):a.getNode()}}return Er(t,c,a.isFullyInitialized()||bt(n),e.filter.filtersNodes())}}function bi(e,t,n,r,i,o,s,a){const c=t.serverCache;let l;const u=s?e.filter:e.filter.getIndexedFilter();if(bt(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),e,null)}else{const e=dt(n);if(!c.isCompleteForPath(n)&&ft(n)>1)return t;const i=pt(n),o=c.getNode().getImmediateChild(e),s=o.updateChild(i,r);l=".priority"===e?u.updatePriority(c.getNode(),s):u.updateChild(c.getNode(),e,s,i,fi,null)}const h=Sr(t,l,c.isFullyInitialized()||bt(n),u.filtersNodes()),d=new pi(i,h,o);return yi(e,h,n,i,d,a)}function wi(e,t,n,r,i,o,s){const a=t.eventCache;let c,l;const u=new pi(i,t,o);if(bt(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,s),c=Er(t,l,!0,e.filter.filtersNodes());else{const i=dt(n);if(".priority"===i)l=e.filter.updatePriority(t.eventCache.getNode(),r),c=Er(t,l,a.isFullyInitialized(),a.isFiltered());else{const o=pt(n),l=a.getNode().getImmediateChild(i);let h;if(bt(o))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===_t(o)&&e.getChild(vt(o)).isEmpty()?e:e.updateChild(o,r):gn.EMPTY_NODE}if(l.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),i,h,o,u,s);c=Er(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function Ci(e,t){return e.eventCache.isCompleteForChild(t)}function Ei(e,t,n,r,i,o,s){let a=t;return r.foreach(((r,c)=>{const l=yt(n,r);Ci(t,dt(l))&&(a=wi(e,a,l,c,i,o,s))})),r.foreach(((r,c)=>{const l=yt(n,r);Ci(t,dt(l))||(a=wi(e,a,l,c,i,o,s))})),a}function Si(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Ii(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=bt(n)?r:new Pr(null).setTree(n,r);const u=t.serverCache.getNode();return c.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),u=Si(e,c,r);l=bi(e,l,new ut(n),u,i,o,s,a)}})),c.children.inorderTraversal(((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),u=Si(e,c,r);l=bi(e,l,new ut(n),u,i,o,s,a)}})),l}function Ti(e,t,n,r,i,o,s){if(null!=si(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(bt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return bi(e,t,n,c.getNode().getChild(n),i,o,a,s);if(bt(n)){let r=new Pr(null);return c.getNode().forEachChild(Ht,((e,t)=>{r=r.set(new ut(e),t)})),Ii(e,t,n,r,i,o,a,s)}return t}{let l=new Pr(null);return r.foreach(((e,t)=>{const r=yt(n,e);c.isCompleteForPath(r)&&(l=l.set(e,c.getNode().getChild(r)))})),Ii(e,t,n,l,i,o,a,s)}}function ki(e,t,n,r,i){const o=t.serverCache,s=Sr(t,o.getNode(),o.isFullyInitialized()||bt(n),o.isFiltered());return yi(e,s,n,r,fi,i)}function xi(e,t,n,r,i,o){let a;if(null!=si(r,n))return t;{const c=new pi(r,t,i),l=t.eventCache.getNode();let u;if(bt(n)||".priority"===dt(n)){let n;if(t.serverCache.isFullyInitialized())n=ri(r,Tr(t));else{const e=t.serverCache.getNode();(0,s.hu)(e instanceof gn,"serverChildren would be complete if leaf node"),n=ii(r,e)}u=e.filter.updateFullNode(l,n,o)}else{const i=dt(n);let s=ci(r,i,t.serverCache);null==s&&t.serverCache.isCompleteForChild(i)&&(s=l.getImmediateChild(i)),u=null!=s?e.filter.updateChild(l,i,s,pt(n),c,o):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,gn.EMPTY_NODE,pt(n),c,o):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=ri(r,Tr(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=si(r,ht()),Er(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Fn(n.getIndex()),i=Un(n);this.processor_=_i(i);const o=t.serverCache,s=t.eventCache,a=r.updateFullNode(gn.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(gn.EMPTY_NODE,s.getNode(),null),l=new gr(a,o.isFullyInitialized(),r.filtersNodes()),u=new gr(c,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=Cr(u,l),this.eventGenerator_=new mr(this.query_)}get query(){return this.query_}}function Ri(e){return e.viewCache_.serverCache.getNode()}function Ni(e){return Ir(e.viewCache_)}function Oi(e,t){const n=Tr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!bt(t)&&!n.getImmediateChild(dt(t)).isEmpty())?n.getChild(t):null}function Di(e){return 0===e.eventRegistrations_.length}function Ai(e,t){e.eventRegistrations_.push(t)}function Li(e,t,n){const r=[];if(n){(0,s.hu)(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Fi(e,t,n,r){t.type===cr.MERGE&&null!==t.source.queryId&&((0,s.hu)(Tr(e.viewCache_),"We should always have a full cache before handling merges"),(0,s.hu)(Ir(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=mi(e.processor_,i,t,n,r);return gi(e.processor_,o.viewCache),(0,s.hu)(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,ji(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Mi(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(cn,((e,t)=>{r.push(On(e,t))}))}return n.isFullyInitialized()&&r.push(Nn(n.getNode())),ji(e,r,n.getNode(),t)}function ji(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return vr(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi,Ui;class Wi{constructor(){this.views=new Map}}function Bi(e){(0,s.hu)(!qi,"__referenceConstructor has already been defined"),qi=e}function Hi(){return(0,s.hu)(qi,"Reference.ts has not been loaded"),qi}function Vi(e){return 0===e.views.size}function $i(e,t,n,r){const i=t.source.queryId;if(null!==i){const o=e.views.get(i);return(0,s.hu)(null!=o,"SyncTree gave us an op for an invalid query."),Fi(o,t,n,r)}{let i=[];for(const o of e.views.values())i=i.concat(Fi(o,t,n,r));return i}}function zi(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let e=ri(n,i?r:null),o=!1;e?o=!0:r instanceof gn?(e=ii(n,r),o=!1):(e=gn.EMPTY_NODE,o=!1);const s=Cr(new gr(e,o,!1),new gr(r,i,!1));return new Pi(t,s)}return s}function Ki(e,t,n,r,i,o){const s=zi(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),Ai(s,n),Mi(s,n)}function Yi(e,t,n,r){const i=t._queryIdentifier,o=[];let s=[];const a=Xi(e);if("default"===i)for(const[c,l]of e.views.entries())s=s.concat(Li(l,n,r)),Di(l)&&(e.views.delete(c),l.query._queryParams.loadsAllData()||o.push(l.query));else{const t=e.views.get(i);t&&(s=s.concat(Li(t,n,r)),Di(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||o.push(t.query)))}return a&&!Xi(e)&&o.push(new(Hi())(t._repo,t._path)),{removed:o,events:s}}function Ji(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Gi(e,t){let n=null;for(const r of e.views.values())n=n||Oi(r,t);return n}function Qi(e,t){const n=t._queryParams;if(n.loadsAllData())return eo(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Zi(e,t){return null!=Qi(e,t)}function Xi(e){return null!=eo(e)}function eo(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(e){(0,s.hu)(!Ui,"__referenceConstructor has already been defined"),Ui=e}function no(){return(0,s.hu)(Ui,"Reference.ts has not been loaded"),Ui}let ro=1;class io{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pr(null),this.pendingWriteTree_=ni(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oo(e,t,n,r,i){return Br(e.pendingWriteTree_,t,n,r,i),i?yo(e,new pr(lr(),t,n)):[]}function so(e,t,n,r){Hr(e.pendingWriteTree_,t,n,r);const i=Pr.fromObject(n);return yo(e,new _r(lr(),t,i))}function ao(e,t,n=!1){const r=Vr(e.pendingWriteTree_,t),i=$r(e.pendingWriteTree_,t);if(i){let t=new Pr(null);return null!=r.snap?t=t.set(ht(),!0):q(r.children,(e=>{t=t.set(new ut(e),!0)})),yo(e,new dr(r.path,t,n))}return[]}function co(e,t,n){return yo(e,new pr(ur(),t,n))}function lo(e,t,n){const r=Pr.fromObject(n);return yo(e,new _r(ur(),t,r))}function uo(e,t){return yo(e,new fr(ur(),t))}function ho(e,t,n){const r=Io(e,n);if(r){const n=To(r),i=n.path,o=n.queryId,s=wt(i,t),a=new fr(hr(o),s);return ko(e,i,a)}return[]}function fo(e,t,n,r,i=!1){const o=t._path,s=e.syncPointTree_.get(o);let a=[];if(s&&("default"===t._queryIdentifier||Zi(s,t))){const c=Yi(s,t,n,r);Vi(s)&&(e.syncPointTree_=e.syncPointTree_.remove(o));const l=c.removed;if(a=c.events,!i){const n=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),i=e.syncPointTree_.findOnPath(o,((e,t)=>Xi(t)));if(n&&!i){const t=e.syncPointTree_.subtree(o);if(!t.isEmpty()){const n=xo(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,o=Co(e,r);e.listenProvider_.startListening(Po(i),Eo(e,i),o.hashFn,o.onComplete)}}}if(!i&&l.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(Po(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(So(t));e.listenProvider_.stopListening(Po(t),n)}))}Ro(e,l)}return a}function po(e,t,n,r){const i=Io(e,r);if(null!=i){const r=To(i),o=r.path,s=r.queryId,a=wt(o,t),c=new pr(hr(s),a,n);return ko(e,o,c)}return[]}function _o(e,t,n,r){const i=Io(e,r);if(i){const r=To(i),o=r.path,s=r.queryId,a=wt(o,t),c=Pr.fromObject(n),l=new _r(hr(s),a,c);return ko(e,o,l)}return[]}function go(e,t,n,r=!1){const i=t._path;let o=null,a=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=wt(e,i);o=o||Gi(t,n),a=a||Xi(t)}));let c,l=e.syncPointTree_.get(i);if(l?(a=a||Xi(l),o=o||Gi(l,ht())):(l=new Wi,e.syncPointTree_=e.syncPointTree_.set(i,l)),null!=o)c=!0;else{c=!1,o=gn.EMPTY_NODE;const t=e.syncPointTree_.subtree(i);t.foreachChild(((e,t)=>{const n=Gi(t,ht());n&&(o=o.updateImmediateChild(e,n))}))}const u=Zi(l,t);if(!u&&!t._queryParams.loadsAllData()){const n=So(t);(0,s.hu)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=No();e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}const h=Wr(e.pendingWriteTree_,i);let d=Ki(l,t,n,h,o,c);if(!u&&!a&&!r){const n=Qi(l,t);d=d.concat(Oo(e,t,n))}return d}function mo(e,t,n){const r=!0,i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=wt(e,t),i=Gi(n,r);if(i)return i}));return Gr(i,t,o,n,r)}function vo(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const i=wt(e,n);r=r||Gi(t,i)}));let i=e.syncPointTree_.get(n);i?r=r||Gi(i,ht()):(i=new Wi,e.syncPointTree_=e.syncPointTree_.set(n,i));const o=null!=r,s=o?new gr(r,!0,!1):null,a=Wr(e.pendingWriteTree_,t._path),c=zi(i,t,a,o?s.getNode():gn.EMPTY_NODE,o);return Ni(c)}function yo(e,t){return bo(t,e.syncPointTree_,null,Wr(e.pendingWriteTree_,ht()))}function bo(e,t,n,r){if(bt(e.path))return wo(e,t,n,r);{const i=t.get(ht());null==n&&null!=i&&(n=Gi(i,ht()));let o=[];const s=dt(e.path),a=e.operationForChild(s),c=t.children.get(s);if(c&&a){const e=n?n.getImmediateChild(s):null,t=li(r,s);o=o.concat(bo(a,c,e,t))}return i&&(o=o.concat($i(i,e,r,n))),o}}function wo(e,t,n,r){const i=t.get(ht());null==n&&null!=i&&(n=Gi(i,ht()));let o=[];return t.children.inorderTraversal(((t,i)=>{const s=n?n.getImmediateChild(t):null,a=li(r,t),c=e.operationForChild(t);c&&(o=o.concat(wo(c,i,s,a)))})),i&&(o=o.concat($i(i,e,r,n))),o}function Co(e,t){const n=t.query,r=Eo(e,n);return{hashFn:()=>{const e=Ri(t)||gn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?ho(e,n._path,r):uo(e,n._path);{const r=H(t,n);return fo(e,n,null,r)}}}}function Eo(e,t){const n=So(t);return e.queryToTagMap.get(n)}function So(e){return e._path.toString()+"$"+e._queryIdentifier}function Io(e,t){return e.tagToQueryMap.get(t)}function To(e){const t=e.indexOf("$");return(0,s.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ut(e.substr(0,t))}}function ko(e,t,n){const r=e.syncPointTree_.get(t);(0,s.hu)(r,"Missing sync point for query tag that we're tracking");const i=Wr(e.pendingWriteTree_,t);return $i(r,n,i,null)}function xo(e){return e.fold(((e,t,n)=>{if(t&&Xi(t)){const e=eo(t);return[e]}{let e=[];return t&&(e=Ji(t)),q(n,((t,n)=>{e=e.concat(n)})),e}}))}function Po(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(no())(e._repo,e._path):e}function Ro(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=So(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function No(){return ro++}function Oo(e,t,n){const r=t._path,i=Eo(e,t),o=Co(e,n),a=e.listenProvider_.startListening(Po(t),i,o.hashFn,o.onComplete),c=e.syncPointTree_.subtree(r);if(i)(0,s.hu)(!Xi(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold(((e,t,n)=>{if(!bt(e)&&t&&Xi(t))return[eo(t).query];{let e=[];return t&&(e=e.concat(Ji(t).map((e=>e.query)))),q(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(Po(r),Eo(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Do(t)}node(){return this.node_}}class Ao{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=yt(this.path_,e);return new Ao(this.syncTree_,t)}node(){return mo(this.syncTree_,this.path_)}}const Lo=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Fo=function(e,t,n){return e&&"object"===typeof e?((0,s.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Mo(e[".sv"],t,n):"object"===typeof e[".sv"]?jo(e[".sv"],t):void(0,s.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Mo=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,s.hu)(!1,"Unexpected server value: "+e)}},jo=function(e,t,n){e.hasOwnProperty("increment")||(0,s.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&(0,s.hu)(!1,"Unexpected increment value: "+r);const i=t.node();if((0,s.hu)(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i,a=o.getValue();return"number"!==typeof a?r:a+r},qo=function(e,t,n,r){return Wo(t,new Ao(n,e),r)},Uo=function(e,t,n){return Wo(e,new Do(t),n)};function Wo(e,t,n){const r=e.getPriority().val(),i=Fo(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const r=e,o=Fo(r.getValue(),t,n);return o!==r.getValue()||i!==r.getPriority().val()?new rn(o,bn(i)):e}{const r=e;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new rn(i))),r.forEachChild(cn,((e,r)=>{const i=Wo(r,t.getImmediateChild(e),n);i!==r&&(o=o.updateImmediateChild(e,i))})),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ho(e,t){let n=t instanceof ut?t:new ut(t),r=e,i=dt(n);while(null!==i){const e=(0,s.DV)(r.node.children,i)||{children:{},childCount:0};r=new Bo(i,r,e),n=pt(n),i=dt(n)}return r}function Vo(e){return e.node.value}function $o(e,t){e.node.value=t,Zo(e)}function zo(e){return e.node.childCount>0}function Ko(e){return void 0===Vo(e)&&!zo(e)}function Yo(e,t){q(e.node.children,((n,r)=>{t(new Bo(n,e,r))}))}function Jo(e,t,n,r){n&&!r&&t(e),Yo(e,(e=>{Jo(e,t,!0,r)})),n&&r&&t(e)}function Go(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function Qo(e){return new ut(null===e.parent?e.name:Qo(e.parent)+"/"+e.name)}function Zo(e){null!==e.parent&&Xo(e.parent,e.name,e)}function Xo(e,t,n){const r=Ko(n),i=(0,s.r3)(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Zo(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Zo(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=/[\[\].#$\/\u0000-\u001F\u007F]/,ts=/[\[\].#$\u0000-\u001F\u007F]/,ns=10485760,rs=function(e){return"string"===typeof e&&0!==e.length&&!es.test(e)},is=function(e){return"string"===typeof e&&0!==e.length&&!ts.test(e)},os=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),is(e)},ss=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!R(e)||e&&"object"===typeof e&&(0,s.r3)(e,".sv")},as=function(e,t,n,r){r&&void 0===t||cs((0,s.gK)(e,"value"),t,n)},cs=function(e,t,n){const r=n instanceof ut?new It(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Pt(r));if("function"===typeof t)throw new Error(e+"contains a function "+Pt(r)+" with contents = "+t.toString());if(R(t))throw new Error(e+"contains "+t.toString()+" "+Pt(r));if("string"===typeof t&&t.length>ns/3&&(0,s.ug)(t)>ns)throw new Error(e+"contains a string greater than "+ns+" utf8 bytes "+Pt(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(q(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!rs(t)))throw new Error(e+" contains an invalid key ("+t+") "+Pt(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Tt(r,t),cs(e,o,r),kt(r)})),n&&i)throw new Error(e+' contains ".value" child '+Pt(r)+" in addition to actual children.")}},ls=function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const i=mt(r);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!rs(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(Ct);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&St(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},us=function(e,t,n,r){if(r&&void 0===t)return;const i=(0,s.gK)(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const o=[];q(t,((e,t)=>{const r=new ut(e);if(cs(i,t,yt(n,r)),".priority"===_t(r)&&!ss(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(r)})),ls(i,o)},hs=function(e,t,n){if(!n||void 0!==t){if(R(t))throw new Error((0,s.gK)(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!ss(t))throw new Error((0,s.gK)(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},ds=function(e,t,n,r){if((!r||void 0!==n)&&!rs(n))throw new Error((0,s.gK)(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},fs=function(e,t,n,r){if((!r||void 0!==n)&&!is(n))throw new Error((0,s.gK)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},ps=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),fs(e,t,n,r)},_s=function(e,t){if(".info"===dt(t))throw new Error(e+" failed = Can't modify data under /.info/")},gs=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!rs(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!os(n))throw new Error((0,s.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ms{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function vs(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();null===n||Et(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function ys(e,t,n){vs(e,n),ws(e,(e=>Et(e,t)))}function bs(e,t,n){vs(e,n),ws(e,(e=>St(e,t)||St(t,e)))}function ws(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(Cs(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Cs(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();w&&S("event: "+n.toString()),Y(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="repo_interrupt",Ss=25;class Is{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ms,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zn(),this.transactionQueueTree_=new Bo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ts(e,t,n){if(e.stats_=me(e.repoInfo_),e.forceRestClient_||J())e.server_=new Gn(e.repoInfo_,((t,n,r,i)=>{Ps(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Rs(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,s.Wl)(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new jt(e.repoInfo_,t,((t,n,r,i)=>{Ps(e,t,n,r,i)}),(t=>{Rs(e,t)}),(t=>{Ns(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=ve(e.repoInfo_,(()=>new ar(e.stats_,e.server_))),e.infoData_=new Qn,e.infoSyncTree_=new io({startListening:(t,n,r,i)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=co(e.infoSyncTree_,t._path,s),setTimeout((()=>{i("ok")}),0)),o},stopListening:()=>{}}),Os(e,"connected",!1),e.serverSyncTree_=new io({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const o=i(n,r);bs(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function ks(e){const t=e.infoData_.getNode(new ut(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function xs(e){return Lo({timestamp:ks(e)})}function Ps(e,t,n,r,i){e.dataUpdateCount++;const o=new ut(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=(0,s.UI)(n,(e=>bn(e)));a=_o(e.serverSyncTree_,o,t,i)}else{const t=bn(n);a=po(e.serverSyncTree_,o,t,i)}else if(r){const t=(0,s.UI)(n,(e=>bn(e)));a=lo(e.serverSyncTree_,o,t)}else{const t=bn(n);a=co(e.serverSyncTree_,o,t)}let c=o;a.length>0&&(c=Zs(e,o)),bs(e.eventQueue_,c,a)}function Rs(e,t){Os(e,"connected",t),!1===t&&Ms(e)}function Ns(e,t){q(t,((t,n)=>{Os(e,t,n)}))}function Os(e,t,n){const r=new ut("/.info/"+t),i=bn(n);e.infoData_.updateSnapshot(r,i);const o=co(e.infoSyncTree_,r,i);bs(e.eventQueue_,r,o)}function Ds(e){return e.nextWriteId_++}function As(e,t,n){const r=vo(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then((r=>{const i=bn(r).withIndex(t._queryParams.getIndex());let o;if(go(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())o=co(e.serverSyncTree_,t._path,i);else{const n=Eo(e.serverSyncTree_,t);o=po(e.serverSyncTree_,t._path,i,n)}return bs(e.eventQueue_,t._path,o),fo(e.serverSyncTree_,t,n,null,!0),i}),(n=>(zs(e,"get for query "+(0,s.Wl)(t)+" failed: "+n),Promise.reject(new Error(n)))))}function Ls(e,t,n,r,i){zs(e,"set",{path:t.toString(),value:n,priority:r});const o=xs(e),s=bn(n,r),a=mo(e.serverSyncTree_,t),c=Uo(s,a,o),l=Ds(e),u=oo(e.serverSyncTree_,t,c,l,!0);vs(e.eventQueue_,u),e.server_.put(t.toString(),s.val(!0),((n,r)=>{const o="ok"===n;o||x("set at "+t+" failed: "+n);const s=ao(e.serverSyncTree_,l,!o);bs(e.eventQueue_,t,s),Ks(e,i,n,r)}));const h=ia(e,t);Zs(e,h),bs(e.eventQueue_,h,[])}function Fs(e,t,n,r){zs(e,"update",{path:t.toString(),value:n});let i=!0;const o=xs(e),s={};if(q(n,((n,r)=>{i=!1,s[n]=qo(yt(t,n),bn(r),e.serverSyncTree_,o)})),i)S("update() called with empty data.  Don't do anything."),Ks(e,r,"ok",void 0);else{const i=Ds(e),o=so(e.serverSyncTree_,t,s,i);vs(e.eventQueue_,o),e.server_.merge(t.toString(),n,((n,o)=>{const s="ok"===n;s||x("update at "+t+" failed: "+n);const a=ao(e.serverSyncTree_,i,!s),c=a.length>0?Zs(e,t):t;bs(e.eventQueue_,c,a),Ks(e,r,n,o)})),q(n,(n=>{const r=ia(e,yt(t,n));Zs(e,r)})),bs(e.eventQueue_,t,[])}}function Ms(e){zs(e,"onDisconnectEvents");const t=xs(e),n=Zn();tr(e.onDisconnect_,ht(),((r,i)=>{const o=qo(r,i,e.serverSyncTree_,t);Xn(n,r,o)}));let r=[];tr(n,ht(),((t,n)=>{r=r.concat(co(e.serverSyncTree_,t,n));const i=ia(e,t);Zs(e,i)})),e.onDisconnect_=Zn(),bs(e.eventQueue_,ht(),r)}function js(e,t,n){e.server_.onDisconnectCancel(t.toString(),((r,i)=>{"ok"===r&&er(e.onDisconnect_,t),Ks(e,n,r,i)}))}function qs(e,t,n,r){const i=bn(n);e.server_.onDisconnectPut(t.toString(),i.val(!0),((n,o)=>{"ok"===n&&Xn(e.onDisconnect_,t,i),Ks(e,r,n,o)}))}function Us(e,t,n,r,i){const o=bn(n,r);e.server_.onDisconnectPut(t.toString(),o.val(!0),((n,r)=>{"ok"===n&&Xn(e.onDisconnect_,t,o),Ks(e,i,n,r)}))}function Ws(e,t,n,r){if((0,s.xb)(n))return S("onDisconnect().update() called with empty data.  Don't do anything."),void Ks(e,r,"ok",void 0);e.server_.onDisconnectMerge(t.toString(),n,((i,o)=>{"ok"===i&&q(n,((n,r)=>{const i=bn(r);Xn(e.onDisconnect_,yt(t,n),i)})),Ks(e,r,i,o)}))}function Bs(e,t,n){let r;r=".info"===dt(t._path)?go(e.infoSyncTree_,t,n):go(e.serverSyncTree_,t,n),ys(e.eventQueue_,t._path,r)}function Hs(e,t,n){let r;r=".info"===dt(t._path)?fo(e.infoSyncTree_,t,n):fo(e.serverSyncTree_,t,n),ys(e.eventQueue_,t._path,r)}function Vs(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Es)}function $s(e){e.persistentConnection_&&e.persistentConnection_.resume(Es)}function zs(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),S(n,...t)}function Ks(e,t,n,r){t&&Y((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const o=new Error(i);o.code=e,t(o)}}))}function Ys(e,t,n,r,i,o){zs(e,"transaction on "+t);const a={path:t,update:n,onComplete:r,status:null,order:v(),applyLocally:o,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},c=Js(e,t,void 0);a.currentInputSnapshot=c;const l=a.update(c.val());if(void 0===l)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{cs("transaction failed: Data returned ",l,a.path),a.status=0;const n=Ho(e.transactionQueueTree_,t),r=Vo(n)||[];let i;if(r.push(a),$o(n,r),"object"===typeof l&&null!==l&&(0,s.r3)(l,".priority"))i=(0,s.DV)(l,".priority"),(0,s.hu)(ss(i),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{const n=mo(e.serverSyncTree_,t)||gn.EMPTY_NODE;i=n.getPriority().val()}const o=xs(e),u=bn(l,i),h=Uo(u,c,o);a.currentOutputSnapshotRaw=u,a.currentOutputSnapshotResolved=h,a.currentWriteId=Ds(e);const d=oo(e.serverSyncTree_,t,h,a.currentWriteId,a.applyLocally);bs(e.eventQueue_,t,d),Gs(e,e.transactionQueueTree_)}}function Js(e,t,n){return mo(e.serverSyncTree_,t,n)||gn.EMPTY_NODE}function Gs(e,t=e.transactionQueueTree_){if(t||ra(e,t),Vo(t)){const n=ta(e,t);(0,s.hu)(n.length>0,"Sending zero length transaction queue");const r=n.every((e=>0===e.status));r&&Qs(e,Qo(t),n)}else zo(t)&&Yo(t,(t=>{Gs(e,t)}))}function Qs(e,t,n){const r=n.map((e=>e.currentWriteId)),i=Js(e,t,r);let o=i;const a=i.hash();for(let u=0;u<n.length;u++){const e=n[u];(0,s.hu)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=wt(t,e.path);o=o.updateChild(r,e.currentOutputSnapshotRaw)}const c=o.val(!0),l=t;e.server_.put(l.toString(),c,(r=>{zs(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(ao(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();ra(e,Ho(e.transactionQueueTree_,t)),Gs(e,e.transactionQueueTree_),bs(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)Y(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{x("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Zs(e,t)}}),a)}function Zs(e,t){const n=ea(e,t),r=Qo(n),i=ta(e,n);return Xs(e,i,r),r}function Xs(e,t,n){if(0===t.length)return;const r=[];let i=[];const o=t.filter((e=>0===e.status)),a=o.map((e=>e.currentWriteId));for(let c=0;c<t.length;c++){const o=t[c],l=wt(n,o.path);let u,h=!1;if((0,s.hu)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,u=o.abortReason,i=i.concat(ao(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=Ss)h=!0,u="maxretry",i=i.concat(ao(e.serverSyncTree_,o.currentWriteId,!0));else{const n=Js(e,o.path,a);o.currentInputSnapshot=n;const r=t[c].update(n.val());if(void 0!==r){cs("transaction failed: Data returned ",r,o.path);let t=bn(r);const c="object"===typeof r&&null!=r&&(0,s.r3)(r,".priority");c||(t=t.updatePriority(n.getPriority()));const l=o.currentWriteId,u=xs(e),h=Uo(t,n,u);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=h,o.currentWriteId=Ds(e),a.splice(a.indexOf(l),1),i=i.concat(oo(e.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),i=i.concat(ao(e.serverSyncTree_,l,!0))}else h=!0,u="nodata",i=i.concat(ao(e.serverSyncTree_,o.currentWriteId,!0))}bs(e.eventQueue_,n,i),i=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===u?r.push((()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot))):r.push((()=>t[c].onComplete(new Error(u),!1,null)))))}ra(e,e.transactionQueueTree_);for(let s=0;s<r.length;s++)Y(r[s]);Gs(e,e.transactionQueueTree_)}function ea(e,t){let n,r=e.transactionQueueTree_;n=dt(t);while(null!==n&&void 0===Vo(r))r=Ho(r,n),t=pt(t),n=dt(t);return r}function ta(e,t){const n=[];return na(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function na(e,t,n){const r=Vo(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Yo(t,(t=>{na(e,t,n)}))}function ra(e,t){const n=Vo(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,$o(t,n.length>0?n:void 0)}Yo(t,(t=>{ra(e,t)}))}function ia(e,t){const n=Qo(ea(e,t)),r=Ho(e.transactionQueueTree_,t);return Go(r,(t=>{oa(e,t)})),oa(e,r),Jo(r,(t=>{oa(e,t)})),n}function oa(e,t){const n=Vo(t);if(n){const r=[];let i=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,s.hu)(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):((0,s.hu)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(ao(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?$o(t,void 0):n.length=o+1,bs(e.eventQueue_,Qo(t),i);for(let e=0;e<r.length;e++)Y(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function aa(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):x(`Invalid query segment '${n}' in query '${e}'`)}return t}const ca=function(e,t){const n=la(e),r=n.namespace;"firebase.com"===n.domain&&k(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||k("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||P();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new he(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new ut(n.pathString)}},la=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",c=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=sa(e.substring(u,h)));const d=aa(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(s="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in d&&(o=d["ns"])}return{host:t,port:c,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ua{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,s.Wl)(this.snapshot.exportVal())}}class ha{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,s.hu)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new s.BH;return js(this._repo,this._path,e.wrapCallback((()=>{}))),e.promise}remove(){_s("OnDisconnect.remove",this._path);const e=new s.BH;return qs(this._repo,this._path,null,e.wrapCallback((()=>{}))),e.promise}set(e){_s("OnDisconnect.set",this._path),as("OnDisconnect.set",e,this._path,!1);const t=new s.BH;return qs(this._repo,this._path,e,t.wrapCallback((()=>{}))),t.promise}setWithPriority(e,t){_s("OnDisconnect.setWithPriority",this._path),as("OnDisconnect.setWithPriority",e,this._path,!1),hs("OnDisconnect.setWithPriority",t,!1);const n=new s.BH;return Us(this._repo,this._path,e,t,n.wrapCallback((()=>{}))),n.promise}update(e){_s("OnDisconnect.update",this._path),us("OnDisconnect.update",e,this._path,!1);const t=new s.BH;return Ws(this._repo,this._path,e,t.wrapCallback((()=>{}))),t.promise}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return bt(this._path)?null:_t(this._path)}get ref(){return new va(this._repo,this._path)}get _queryIdentifier(){const e=Jn(this._queryParams),t=M(e);return"{}"===t?"default":t}get _queryObject(){return Jn(this._queryParams)}isEqual(e){if(e=(0,s.m9)(e),!(e instanceof pa))return!1;const t=this._repo===e._repo,n=Et(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+gt(this._path)}}function _a(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function ga(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===Ht){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){const n=e.getIndexStartName();if(n!==O)throw new Error(r);if("string"!==typeof t)throw new Error(i)}if(e.hasEnd()){const t=e.getIndexEndName();if(t!==D)throw new Error(r);if("string"!==typeof n)throw new Error(i)}}else if(e.getIndex()===cn){if(null!=t&&!ss(t)||null!=n&&!ss(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if((0,s.hu)(e.getIndex()instanceof wn||e.getIndex()===En,"unknown index type."),null!=t&&"object"===typeof t||null!=n&&"object"===typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function ma(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class va extends pa{constructor(e,t){super(e,t,new qn,!1)}get parent(){const e=vt(this._path);return null===e?null:new va(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class ya{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ut(e),n=Ca(this.ref,e);return new ya(this._node.getChild(t),n,cn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new ya(n,Ca(this.ref,t),cn))))}hasChild(e){const t=new ut(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ba(e,t){return e=(0,s.m9)(e),e._checkNotDeleted("ref"),void 0!==t?Ca(e._root,t):e._root}function wa(e,t){e=(0,s.m9)(e),e._checkNotDeleted("refFromURL");const n=ca(t,e._repo.repoInfo_.nodeAdmin);gs("refFromURL",n);const r=n.repoInfo;return e._repo.repoInfo_.isCustomHost()||r.host===e._repo.repoInfo_.host||k("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+e._repo.repoInfo_.host+")"),ba(e,n.path.toString())}function Ca(e,t){return e=(0,s.m9)(e),null===dt(e._path)?ps("child","path",t,!1):fs("child","path",t,!1),new va(e._repo,yt(e._path,t))}function Ea(e,t){e=(0,s.m9)(e),_s("push",e._path),as("push",t,e._path,!0);const n=ks(e._repo),r=xn(n),i=Ca(e,r),o=Ca(e,r);let a;return a=null!=t?Ia(o,t).then((()=>o)):Promise.resolve(o),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function Sa(e){return _s("remove",e._path),Ia(e,null)}function Ia(e,t){e=(0,s.m9)(e),_s("set",e._path),as("set",t,e._path,!1);const n=new s.BH;return Ls(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Ta(e,t){e=(0,s.m9)(e),_s("setPriority",e._path),hs("setPriority",t,!1);const n=new s.BH;return Ls(e._repo,yt(e._path,".priority"),t,null,n.wrapCallback((()=>{}))),n.promise}function ka(e,t,n){if(_s("setWithPriority",e._path),as("setWithPriority",t,e._path,!1),hs("setWithPriority",n,!1),".length"===e.key||".keys"===e.key)throw"setWithPriority failed: "+e.key+" is a read-only object.";const r=new s.BH;return Ls(e._repo,e._path,t,n,r.wrapCallback((()=>{}))),r.promise}function xa(e,t){us("update",t,e._path,!1);const n=new s.BH;return Fs(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}function Pa(e){e=(0,s.m9)(e);const t=new da((()=>{})),n=new Ra(t);return As(e._repo,e,n).then((t=>new ya(t,new va(e._repo,e._path),e._queryParams.getIndex())))}class Ra{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new ua("value",this,new ya(e.snapshotNode,new va(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ha(this,e,t):null}matches(e){return e instanceof Ra&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Na{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ha(this,e,t):null}createEvent(e,t){(0,s.hu)(null!=e.childName,"Child events should have a childName.");const n=Ca(new va(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new ua(e.type,this,new ya(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Na&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Oa(e,t,n,r,i){let o;if("object"===typeof r&&(o=void 0,i=r),"function"===typeof r&&(o=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{Hs(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const s=new da(n,o||void 0),a="value"===t?new Ra(s):new Na(t,s);return Bs(e._repo,e,a),()=>Hs(e._repo,e,a)}function Da(e,t,n,r){return Oa(e,"value",t,n,r)}function Aa(e,t,n,r){return Oa(e,"child_added",t,n,r)}function La(e,t,n,r){return Oa(e,"child_changed",t,n,r)}function Fa(e,t,n,r){return Oa(e,"child_moved",t,n,r)}function Ma(e,t,n,r){return Oa(e,"child_removed",t,n,r)}function ja(e,t,n){let r=null;const i=n?new da(n):null;"value"===t?r=new Ra(i):t&&(r=new Na(t,i)),Hs(e._repo,e,r)}class qa{}class Ua extends qa{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){as("endAt",this._value,e._path,!0);const t=$n(e._queryParams,this._value,this._key);if(ma(t),ga(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new pa(e._repo,e._path,t,e._orderByCalled)}}function Wa(e,t){return ds("endAt","key",t,!0),new Ua(e,t)}class Ba extends qa{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){as("endBefore",this._value,e._path,!1);const t=zn(e._queryParams,this._value,this._key);if(ma(t),ga(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new pa(e._repo,e._path,t,e._orderByCalled)}}function Ha(e,t){return ds("endBefore","key",t,!0),new Ba(e,t)}class Va extends qa{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){as("startAt",this._value,e._path,!0);const t=Hn(e._queryParams,this._value,this._key);if(ma(t),ga(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new pa(e._repo,e._path,t,e._orderByCalled)}}function $a(e=null,t){return ds("startAt","key",t,!0),new Va(e,t)}class za extends qa{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){as("startAfter",this._value,e._path,!1);const t=Vn(e._queryParams,this._value,this._key);if(ma(t),ga(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new pa(e._repo,e._path,t,e._orderByCalled)}}function Ka(e,t){return ds("startAfter","key",t,!0),new za(e,t)}class Ya extends qa{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new pa(e._repo,e._path,Wn(e._queryParams,this._limit),e._orderByCalled)}}function Ja(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Ya(e)}class Ga extends qa{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new pa(e._repo,e._path,Bn(e._queryParams,this._limit),e._orderByCalled)}}function Qa(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Ga(e)}class Za extends qa{constructor(e){super(),this._path=e}_apply(e){_a(e,"orderByChild");const t=new ut(this._path);if(bt(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new wn(t),r=Kn(e._queryParams,n);return ga(r),new pa(e._repo,e._path,r,!0)}}function Xa(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return fs("orderByChild","path",e,!1),new Za(e)}class ec extends qa{_apply(e){_a(e,"orderByKey");const t=Kn(e._queryParams,Ht);return ga(t),new pa(e._repo,e._path,t,!0)}}function tc(){return new ec}class nc extends qa{_apply(e){_a(e,"orderByPriority");const t=Kn(e._queryParams,cn);return ga(t),new pa(e._repo,e._path,t,!0)}}function rc(){return new nc}class ic extends qa{_apply(e){_a(e,"orderByValue");const t=Kn(e._queryParams,En);return ga(t),new pa(e._repo,e._path,t,!0)}}function oc(){return new ic}class sc extends qa{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(as("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Ua(this._value,this._key)._apply(new Va(this._value,this._key)._apply(e))}}function ac(e,t){return ds("equalTo","key",t,!0),new sc(e,t)}function cc(e,...t){let n=(0,s.m9)(e);for(const r of t)n=r._apply(n);return n}Bi(va),to(va);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lc="FIREBASE_DATABASE_EMULATOR_HOST",uc={};let hc=!1;function dc(e,t,n,r){e.repoInfo_=new he(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),r&&(e.authTokenProvider_=r)}function fc(e,t,n,r,i){let o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||k("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),S("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s,a,c=ca(o,i),l=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/"}[lc]),a?(s=!0,o=`http://${a}?ns=${l.namespace}`,c=ca(o,i),l=c.repoInfo):s=!c.repoInfo.secure;const u=i&&s?new X(X.OWNER):new Z(e.name,e.options,t);gs("Invalid Firebase Database URL",c),bt(c.path)||k("Database URL must point to the root of a Firebase Database (not including a child path).");const h=_c(l,e,u,new Q(e.name,n));return new gc(h,e)}function pc(e,t){const n=uc[t];n&&n[e.key]===e||k(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Vs(e),delete n[e.key]}function _c(e,t,n,r){let i=uc[t.name];i||(i={},uc[t.name]=i);let o=i[e.toURLString()];return o&&k("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new Is(e,hc,n,r),i[e.toURLString()]=o,o}class gc{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ts(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new va(this._repo,ht())),this._rootInternal}_delete(){return null!==this._rootInternal&&(pc(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&k("Cannot call "+e+" on a deleted database.")}}function mc(){He.IS_TRANSPORT_INITIALIZED&&x("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function vc(){mc(),Me.forceDisallow()}function yc(){mc(),Be.forceDisallow(),Me.forceAllow()}function bc(e,t,n,r={}){e=(0,s.m9)(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&k("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&k('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new X(X.OWNER);else if(r.mockUserToken){const t="string"===typeof r.mockUserToken?r.mockUserToken:(0,s.Sg)(r.mockUserToken,e.app.options.projectId);o=new X(t)}dc(i,t,n,o)}function wc(e){e=(0,s.m9)(e),e._checkNotDeleted("goOffline"),Vs(e._repo)}function Cc(e){e=(0,s.m9)(e),e._checkNotDeleted("goOnline"),$s(e._repo)}function Ec(e,t){E(e,t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(e){h(o.SDK_VERSION),(0,o._registerComponent)(new i.wA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return fc(n,r,i,t)}),"PUBLIC").setMultipleInstances(!0)),(0,o.registerVersion)(c,l,e),(0,o.registerVersion)(c,l,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic={".sv":"timestamp"};function Tc(){return Ic}function kc(e){return{".sv":{increment:e}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function Pc(e,t,n){var r;if(e=(0,s.m9)(e),_s("Reference.transaction",e._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object.";const i=null===(r=null===n||void 0===n?void 0:n.applyLocally)||void 0===r||r,o=new s.BH,a=(t,n,r)=>{let i=null;t?o.reject(t):(i=new ya(r,new va(e._repo,e._path),cn),o.resolve(new xc(n,i)))},c=Da(e,(()=>{}));return Ys(e._repo,e._path,t,a,c,i),o.promise}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},jt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Sc();const Rc="@firebase/database-compat",Nc="0.2.10",Oc=new a.Yd("@firebase/database-compat"),Dc=function(e){const t="FIREBASE WARNING: "+e;Oc.warn(t)},Ac=function(e,t,n,r){if((!r||void 0!==n)&&"boolean"!==typeof n)throw new Error((0,s.gK)(e,t)+"must be a boolean.")},Lc=function(e,t,n){if(!n||void 0!==t)switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error((0,s.gK)(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fc{constructor(e){this._delegate=e}cancel(e){(0,s.Dv)("OnDisconnect.cancel",0,1,arguments.length),(0,s.Wj)("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then((()=>e(null)),(t=>e(t))),t}remove(e){(0,s.Dv)("OnDisconnect.remove",0,1,arguments.length),(0,s.Wj)("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then((()=>e(null)),(t=>e(t))),t}set(e,t){(0,s.Dv)("OnDisconnect.set",1,2,arguments.length),(0,s.Wj)("OnDisconnect.set","onComplete",t,!0);const n=this._delegate.set(e);return t&&n.then((()=>t(null)),(e=>t(e))),n}setWithPriority(e,t,n){(0,s.Dv)("OnDisconnect.setWithPriority",2,3,arguments.length),(0,s.Wj)("OnDisconnect.setWithPriority","onComplete",n,!0);const r=this._delegate.setWithPriority(e,t);return n&&r.then((()=>n(null)),(e=>n(e))),r}update(e,t){if((0,s.Dv)("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,Dc("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}(0,s.Wj)("OnDisconnect.update","onComplete",t,!0);const n=this._delegate.update(e);return t&&n.then((()=>t(null)),(e=>t(e))),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return(0,s.Dv)("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){this._database=e,this._delegate=t}val(){return(0,s.Dv)("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return(0,s.Dv)("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return(0,s.Dv)("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return(0,s.Dv)("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return(0,s.Dv)("DataSnapshot.child",0,1,arguments.length),e=String(e),fs("DataSnapshot.child","path",e,!1),new jc(this._database,this._delegate.child(e))}hasChild(e){return(0,s.Dv)("DataSnapshot.hasChild",1,1,arguments.length),fs("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return(0,s.Dv)("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return(0,s.Dv)("DataSnapshot.forEach",1,1,arguments.length),(0,s.Wj)("DataSnapshot.forEach","action",e,!1),this._delegate.forEach((t=>e(new jc(this._database,t))))}hasChildren(){return(0,s.Dv)("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return(0,s.Dv)("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return(0,s.Dv)("DataSnapshot.ref",0,0,arguments.length),new Uc(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class qc{constructor(e,t){this.database=e,this._delegate=t}on(e,t,n,r){var i;(0,s.Dv)("Query.on",2,4,arguments.length),(0,s.Wj)("Query.on","callback",t,!1);const o=qc.getCancelAndContextArgs_("Query.on",n,r),a=(e,n)=>{t.call(o.context,new jc(this.database,e),n)};a.userCallback=t,a.context=o.context;const c=null===(i=o.cancel)||void 0===i?void 0:i.bind(o.context);switch(e){case"value":return Da(this._delegate,a,c),t;case"child_added":return Aa(this._delegate,a,c),t;case"child_removed":return Ma(this._delegate,a,c),t;case"child_changed":return La(this._delegate,a,c),t;case"child_moved":return Fa(this._delegate,a,c),t;default:throw new Error((0,s.gK)("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,n){if((0,s.Dv)("Query.off",0,3,arguments.length),Lc("Query.off",e,!0),(0,s.Wj)("Query.off","callback",t,!0),(0,s.lb)("Query.off","context",n,!0),t){const r=()=>{};r.userCallback=t,r.context=n,ja(this._delegate,e,r)}else ja(this._delegate,e)}get(){return Pa(this._delegate).then((e=>new jc(this.database,e)))}once(e,t,n,r){(0,s.Dv)("Query.once",1,4,arguments.length),(0,s.Wj)("Query.once","callback",t,!0);const i=qc.getCancelAndContextArgs_("Query.once",n,r),o=new s.BH,a=(e,n)=>{const r=new jc(this.database,e);t&&t.call(i.context,r,n),o.resolve(r)};a.userCallback=t,a.context=i.context;const c=e=>{i.cancel&&i.cancel.call(i.context,e),o.reject(e)};switch(e){case"value":Da(this._delegate,a,c,{onlyOnce:!0});break;case"child_added":Aa(this._delegate,a,c,{onlyOnce:!0});break;case"child_removed":Ma(this._delegate,a,c,{onlyOnce:!0});break;case"child_changed":La(this._delegate,a,c,{onlyOnce:!0});break;case"child_moved":Fa(this._delegate,a,c,{onlyOnce:!0});break;default:throw new Error((0,s.gK)("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return(0,s.Dv)("Query.limitToFirst",1,1,arguments.length),new qc(this.database,cc(this._delegate,Ja(e)))}limitToLast(e){return(0,s.Dv)("Query.limitToLast",1,1,arguments.length),new qc(this.database,cc(this._delegate,Qa(e)))}orderByChild(e){return(0,s.Dv)("Query.orderByChild",1,1,arguments.length),new qc(this.database,cc(this._delegate,Xa(e)))}orderByKey(){return(0,s.Dv)("Query.orderByKey",0,0,arguments.length),new qc(this.database,cc(this._delegate,tc()))}orderByPriority(){return(0,s.Dv)("Query.orderByPriority",0,0,arguments.length),new qc(this.database,cc(this._delegate,rc()))}orderByValue(){return(0,s.Dv)("Query.orderByValue",0,0,arguments.length),new qc(this.database,cc(this._delegate,oc()))}startAt(e=null,t){return(0,s.Dv)("Query.startAt",0,2,arguments.length),new qc(this.database,cc(this._delegate,$a(e,t)))}startAfter(e=null,t){return(0,s.Dv)("Query.startAfter",0,2,arguments.length),new qc(this.database,cc(this._delegate,Ka(e,t)))}endAt(e=null,t){return(0,s.Dv)("Query.endAt",0,2,arguments.length),new qc(this.database,cc(this._delegate,Wa(e,t)))}endBefore(e=null,t){return(0,s.Dv)("Query.endBefore",0,2,arguments.length),new qc(this.database,cc(this._delegate,Ha(e,t)))}equalTo(e,t){return(0,s.Dv)("Query.equalTo",1,2,arguments.length),new qc(this.database,cc(this._delegate,ac(e,t)))}toString(){return(0,s.Dv)("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return(0,s.Dv)("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if((0,s.Dv)("Query.isEqual",1,1,arguments.length),!(e instanceof qc)){const e="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(e)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,n){const r={cancel:void 0,context:void 0};if(t&&n)r.cancel=t,(0,s.Wj)(e,"cancel",r.cancel,!0),r.context=n,(0,s.lb)(e,"context",r.context,!0);else if(t)if("object"===typeof t&&null!==t)r.context=t;else{if("function"!==typeof t)throw new Error((0,s.gK)(e,"cancelOrContext")+" must either be a cancel callback or a context object.");r.cancel=t}return r}get ref(){return new Uc(this.database,new va(this._delegate._repo,this._delegate._path))}}class Uc extends qc{constructor(e,t){super(e,new pa(t._repo,t._path,new qn,!1)),this.database=e,this._delegate=t}getKey(){return(0,s.Dv)("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return(0,s.Dv)("Reference.child",1,1,arguments.length),"number"===typeof e&&(e=String(e)),new Uc(this.database,Ca(this._delegate,e))}getParent(){(0,s.Dv)("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Uc(this.database,e):null}getRoot(){return(0,s.Dv)("Reference.root",0,0,arguments.length),new Uc(this.database,this._delegate.root)}set(e,t){(0,s.Dv)("Reference.set",1,2,arguments.length),(0,s.Wj)("Reference.set","onComplete",t,!0);const n=Ia(this._delegate,e);return t&&n.then((()=>t(null)),(e=>t(e))),n}update(e,t){if((0,s.Dv)("Reference.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,Dc("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}_s("Reference.update",this._delegate._path),(0,s.Wj)("Reference.update","onComplete",t,!0);const n=xa(this._delegate,e);return t&&n.then((()=>t(null)),(e=>t(e))),n}setWithPriority(e,t,n){(0,s.Dv)("Reference.setWithPriority",2,3,arguments.length),(0,s.Wj)("Reference.setWithPriority","onComplete",n,!0);const r=ka(this._delegate,e,t);return n&&r.then((()=>n(null)),(e=>n(e))),r}remove(e){(0,s.Dv)("Reference.remove",0,1,arguments.length),(0,s.Wj)("Reference.remove","onComplete",e,!0);const t=Sa(this._delegate);return e&&t.then((()=>e(null)),(t=>e(t))),t}transaction(e,t,n){(0,s.Dv)("Reference.transaction",1,3,arguments.length),(0,s.Wj)("Reference.transaction","transactionUpdate",e,!1),(0,s.Wj)("Reference.transaction","onComplete",t,!0),Ac("Reference.transaction","applyLocally",n,!0);const r=Pc(this._delegate,e,{applyLocally:n}).then((e=>new Mc(e.committed,new jc(this.database,e.snapshot))));return t&&r.then((e=>t(null,e.committed,e.snapshot)),(e=>t(e,!1,null))),r}setPriority(e,t){(0,s.Dv)("Reference.setPriority",1,2,arguments.length),(0,s.Wj)("Reference.setPriority","onComplete",t,!0);const n=Ta(this._delegate,e);return t&&n.then((()=>t(null)),(e=>t(e))),n}push(e,t){(0,s.Dv)("Reference.push",0,2,arguments.length),(0,s.Wj)("Reference.push","onComplete",t,!0);const n=Ea(this._delegate,e),r=n.then((e=>new Uc(this.database,e)));t&&r.then((()=>t(null)),(e=>t(e)));const i=new Uc(this.database,n);return i.then=r.then.bind(r),i.catch=r.catch.bind(r,void 0),i}onDisconnect(){return _s("Reference.onDisconnect",this._delegate._path),new Fc(new fa(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:vc,forceLongPolling:yc}}useEmulator(e,t,n={}){bc(this._delegate,e,t,n)}ref(e){if((0,s.Dv)("database.ref",0,1,arguments.length),e instanceof Uc){const t=wa(this._delegate,e.toString());return new Uc(this,t)}{const t=ba(this._delegate,e);return new Uc(this,t)}}refFromURL(e){const t="database.refFromURL";(0,s.Dv)(t,1,1,arguments.length);const n=wa(this._delegate,e);return new Uc(this,n)}goOffline(){return(0,s.Dv)("database.goOffline",0,0,arguments.length),wc(this._delegate)}goOnline(){return(0,s.Dv)("database.goOnline",0,0,arguments.length),Cc(this._delegate)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bc({app:e,url:t,version:n,customAuthImpl:r,namespace:o,nodeAdmin:s=!1}){h(n);const a=new i.zt("auth-internal",new i.H0("database-standalone"));return a.setComponent(new i.wA("auth-internal",(()=>r),"PRIVATE")),{instance:new Wc(fc(e,a,void 0,t,s),e),namespace:o}}Wc.ServerValue={TIMESTAMP:Tc(),increment:e=>kc(e)};var Hc=Object.freeze({__proto__:null,initStandalone:Bc});
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=Wc.ServerValue;function $c(e){e.INTERNAL.registerComponent(new i.wA("database-compat",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("database").getImmediate({identifier:t});return new Wc(r,n)}),"PUBLIC").setServiceProps({Reference:Uc,Query:qc,Database:Wc,DataSnapshot:jc,enableLogging:Ec,INTERNAL:Hc,ServerValue:Vc}).setMultipleInstances(!0)),e.registerVersion(Rc,Nc)}$c(r.Z)},2483:function(e,t,n){"use strict";n.d(t,{PO:function(){return q},p7:function(){return tt}});n(7658),n(541);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const o="undefined"!==typeof window;function s(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=u(i)?i.map(e):e(i)}return n}const l=()=>{},u=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),i=e(o)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=w(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&m(t.matched[r],n.matched[i])&&v(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function m(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function v(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!y(e[n],t[n]))return!1;return!0}function y(e,t){return u(e)?b(e,t):u(t)?b(t,e):e===t}function b(e,t){return u(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function w(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],"."!==o){if(".."!==o)break;s>1&&s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var C,E;(function(e){e["pop"]="pop",e["push"]="push"})(C||(C={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(E||(E={}));function S(e){if(!e)if(o){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const I=/^[^#]+#/;function T(e,t){return e.replace(I,"#")+t}function k(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const x=()=>({left:window.pageXOffset,top:window.pageYOffset});function P(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=k(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function R(e,t){const n=history.state?history.state.position-t:-1;return n+e}const N=new Map;function O(e,t){N.set(e,t)}function D(e){const t=N.get(e);return N.delete(e),t}let A=()=>location.protocol+"//"+location.host;function L(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),_(n,"")}const s=_(n,e);return s+r+i}function F(e,t,n,r){let i=[],o=[],s=null;const c=({state:o})=>{const a=L(e,location),c=n.value,l=t.value;let u=0;if(o){if(n.value=a,t.value=o,s&&s===c)return void(s=null);u=l?o.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:C.pop,direction:u?u>0?E.forward:E.back:E.unknown})}))};function l(){s=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:x()}),"")}function d(){for(const e of o)e();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h),{pauseListeners:l,listen:u,destroy:d}}function M(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?x():null}}function j(e){const{history:t,location:n}=window,r={value:L(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:A()+e+r;try{t[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(l){console.error(l),n[s?"replace":"assign"](c)}}function s(e,n){const s=a({},t.state,M(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function c(e,n){const s=a({},i.value,t.state,{forward:e,scroll:x()});o(s.current,s,!0);const c=a({},M(r.value,e,null),{position:s.position+1},n);o(e,c,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:s}}function q(e){e=S(e);const t=j(e),n=F(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:T.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function U(e){return"string"===typeof e||e&&"object"===typeof e}function W(e){return"string"===typeof e||"symbol"===typeof e}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},H=Symbol("");var V;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(V||(V={}));function $(e,t){return a(new Error,{type:e,[H]:!0},t)}function z(e,t){return e instanceof Error&&H in e&&(null==t||!!(e.type&t))}const K="[^/]+?",Y={sensitive:!1,strict:!1,start:!0,end:!0},J=/[.+*?^${}()[\]/\\]/g;function G(e,t){const n=a({},Y,t),r=[];let i=n.start?"^":"";const o=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(J,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:l}=r;o.push({name:e,repeatable:n,optional:c});const u=l||K;if(u!==K){s+=10;try{new RegExp(`(${u})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+h.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,s+=20,c&&(s+=-8),n&&(s+=-20),".*"===u&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function l(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,c=o in t?t[o]:"";if(u(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const l=u(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}return{re:s,score:r,keys:o,parse:c,stringify:l}}function Q(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Z(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=Q(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(X(r))return 1;if(X(i))return-1}return i.length-r.length}function X(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ee={type:0,value:""},te=/[a-zA-Z0-9_]/;function ne(e){if(!e)return[[]];if("/"===e)return[[ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,l="",u="";function h(){l&&(0===n?o.push({type:0,value:l}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),s()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:te.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),s(),i}function re(e,t,n){const r=G(ne(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ie(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,c=se(e);c.aliasOf=r&&r.record;const h=ue(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=re(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!ce(f)&&s(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)o(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&u(f)}return p?()=>{s(p)}:l}function s(e){if(W(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function c(){return n}function u(e){let t=0;while(t<n.length&&Z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!he(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ce(e)&&r.set(e.record.name,e)}function h(e,t){let i,o,s,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw $(1,{location:e});0,s=i.record.name,c=a(oe(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&oe(e.params,i.keys.map((e=>e.name)))),o=i.stringify(c)}else if("path"in e)o=e.path,i=n.find((e=>e.re.test(o))),i&&(c=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw $(1,{location:e,currentLocation:t});s=i.record.name,c=a({},t.params,e.params),o=i.stringify(c)}const l=[];let u=i;while(u)l.unshift(u.record),u=u.parent;return{name:s,path:o,params:c,matched:l,meta:le(l)}}return t=ue({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:h,removeRoute:s,getRoutes:c,getRecordMatcher:i}}function oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function se(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ae(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ce(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function le(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function ue(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function he(e,t){return t.children.some((t=>t===e||he(e,t)))}const de=/#/g,fe=/&/g,pe=/\//g,_e=/=/g,ge=/\?/g,me=/\+/g,ve=/%5B/g,ye=/%5D/g,be=/%5E/g,we=/%60/g,Ce=/%7B/g,Ee=/%7C/g,Se=/%7D/g,Ie=/%20/g;function Te(e){return encodeURI(""+e).replace(Ee,"|").replace(ve,"[").replace(ye,"]")}function ke(e){return Te(e).replace(Ce,"{").replace(Se,"}").replace(be,"^")}function xe(e){return Te(e).replace(me,"%2B").replace(Ie,"+").replace(de,"%23").replace(fe,"%26").replace(we,"`").replace(Ce,"{").replace(Se,"}").replace(be,"^")}function Pe(e){return xe(e).replace(_e,"%3D")}function Re(e){return Te(e).replace(de,"%23").replace(ge,"%3F")}function Ne(e){return null==e?"":Re(e).replace(pe,"%2F")}function Oe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function De(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(me," "),n=e.indexOf("="),o=Oe(n<0?e:e.slice(0,n)),s=n<0?null:Oe(e.slice(n+1));if(o in t){let e=t[o];u(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function Ae(e){let t="";for(let n in e){const r=e[n];if(n=Pe(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=u(r)?r.map((e=>e&&xe(e))):[r&&xe(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Le(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=u(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Fe=Symbol(""),Me=Symbol(""),je=Symbol(""),qe=Symbol(""),Ue=Symbol("");function We(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((s,a)=>{const c=e=>{!1===e?a($(4,{from:n,to:t})):e instanceof Error?a(e):U(e)?a($(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),s())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function He(e,t,n,r){const i=[];for(const o of e){0;for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(Ve(a)){const s=a.__vccOpts||a,c=s[t];c&&i.push(Be(c,n,r,o,e))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const a=s(i)?i.default:i;o.components[e]=a;const c=a.__vccOpts||a,l=c[t];return l&&Be(l,n,r,o,e)()}))))}}}return i}function Ve(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function $e(e){const t=(0,r.f3)(je),n=(0,r.f3)(qe),o=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),s=(0,r.Fl)((()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(m.bind(null,r));if(s>-1)return s;const a=Ge(e[t-2]);return t>1&&Ge(r)===a&&i[i.length-1].path!==a?i.findIndex(m.bind(null,e[t-2])):s})),a=(0,r.Fl)((()=>s.value>-1&&Je(n.params,o.value.params))),c=(0,r.Fl)((()=>s.value>-1&&s.value===n.matched.length-1&&v(n.params,o.value.params)));function u(n={}){return Ye(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(l):Promise.resolve()}return{route:o,href:(0,r.Fl)((()=>o.value.href)),isActive:a,isExactActive:c,navigate:u}}const ze=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$e,setup(e,{slots:t}){const n=(0,i.qj)($e(e)),{options:o}=(0,r.f3)(je),s=(0,r.Fl)((()=>({[Qe(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Qe(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ke=ze;function Ye(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!u(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Ge(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qe=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=(0,r.f3)(Ue),s=(0,r.Fl)((()=>e.route||o.value)),c=(0,r.f3)(Me,0),l=(0,r.Fl)((()=>{let e=(0,i.SU)(c);const{matched:t}=s.value;let n;while((n=t[e])&&!n.components)e++;return e})),u=(0,r.Fl)((()=>s.value.matched[l.value]));(0,r.JJ)(Me,(0,r.Fl)((()=>l.value+1))),(0,r.JJ)(Fe,u),(0,r.JJ)(Ue,s);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,u.value,e.name]),(([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&m(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=s.value,o=e.name,c=u.value,l=c&&c.components[o];if(!l)return Xe(n.default,{Component:l,route:i});const d=c.props[o],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[o]=null)},_=(0,r.h)(l,a({},f,t,{onVnodeUnmounted:p,ref:h}));return Xe(n.default,{Component:_,route:i})||_}}});function Xe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Ze;function tt(e){const t=ie(e.routes,e),n=e.parseQuery||De,s=e.stringifyQuery||Ae,h=e.history;const d=We(),_=We(),m=We(),v=(0,i.XI)(B);let y=B;o&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=c.bind(null,(e=>""+e)),w=c.bind(null,Ne),E=c.bind(null,Oe);function S(e,n){let r,i;return W(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function I(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function T(){return t.getRoutes().map((e=>e.record))}function k(e){return!!t.getRecordMatcher(e)}function N(e,r){if(r=a({},r||v.value),"string"===typeof e){const i=f(n,e,r.path),o=t.resolve({path:i.path},r),s=h.createHref(i.fullPath);return a(i,o,{params:E(o.params),hash:Oe(i.hash),redirectedFrom:void 0,href:s})}let i;if("path"in e)i=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:w(e.params)}),r.params=w(r.params)}const o=t.resolve(i,r),c=e.hash||"";o.params=b(E(o.params));const l=p(s,a({},e,{hash:ke(c),path:o.path})),u=h.createHref(l);return a({fullPath:l,hash:c,query:s===Ae?Le(e.query):e.query||{}},o,{redirectedFrom:void 0,href:u})}function A(e){return"string"===typeof e?f(n,e,v.value.path):a({},e)}function L(e,t){if(y!==e)return $(8,{from:t,to:e})}function F(e){return q(e)}function M(e){return F(a(A(e),{replace:!0}))}function j(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=A(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function q(e,t){const n=y=N(e),r=v.value,i=e.state,o=e.force,c=!0===e.replace,l=j(n);if(l)return q(a(A(l),{state:"object"===typeof l?a({},i,l.state):i,force:o,replace:c}),t||n);const u=n;let h;return u.redirectedFrom=t,!o&&g(s,r,n)&&(h=$(16,{to:u,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):H(u,r)).catch((e=>z(e)?z(e,2)?e:te(e):X(e,u,r))).then((e=>{if(e){if(z(e,2))return q(a({replace:c},A(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:o}),t||u)}else e=K(u,r,!0,c,i);return V(u,r,e),e}))}function U(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function H(e,t){let n;const[r,i,o]=rt(e,t);n=He(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Be(r,e,t))}));const s=U.bind(null,e,t);return n.push(s),nt(n).then((()=>{n=[];for(const r of d.list())n.push(Be(r,e,t));return n.push(s),nt(n)})).then((()=>{n=He(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(Be(r,e,t))}));return n.push(s),nt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(u(r.beforeEnter))for(const i of r.beforeEnter)n.push(Be(i,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(s),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=He(o,"beforeRouteEnter",e,t),n.push(s),nt(n)))).then((()=>{n=[];for(const r of _.list())n.push(Be(r,e,t));return n.push(s),nt(n)})).catch((e=>z(e,8)?e:Promise.reject(e)))}function V(e,t,n){for(const r of m.list())r(e,t,n)}function K(e,t,n,r,i){const s=L(e,t);if(s)return s;const c=t===B,l=o?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&l&&l.scroll},i)):h.push(e.fullPath,i)),v.value=e,ne(e,t,n,c),te()}let Y;function J(){Y||(Y=h.listen(((e,t,n)=>{if(!ae.listening)return;const r=N(e),i=j(r);if(i)return void q(a(i,{replace:!0}),r).catch(l);y=r;const s=v.value;o&&O(R(s.fullPath,n.delta),x()),H(r,s).catch((e=>z(e,12)?e:z(e,2)?(q(e.to,r).then((e=>{z(e,20)&&!n.delta&&n.type===C.pop&&h.go(-1,!1)})).catch(l),Promise.reject()):(n.delta&&h.go(-n.delta,!1),X(e,r,s)))).then((e=>{e=e||K(r,s,!1),e&&(n.delta&&!z(e,8)?h.go(-n.delta,!1):n.type===C.pop&&z(e,20)&&h.go(-1,!1)),V(r,s,e)})).catch(l)})))}let G,Q=We(),Z=We();function X(e,t,n){te(e);const r=Z.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return G&&v.value!==B?Promise.resolve():new Promise(((e,t)=>{Q.add([e,t])}))}function te(e){return G||(G=!e,J(),Q.list().forEach((([t,n])=>e?n(e):t())),Q.reset()),e}function ne(t,n,i,s){const{scrollBehavior:a}=e;if(!o||!a)return Promise.resolve();const c=!i&&D(R(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,c))).then((e=>e&&P(e))).catch((e=>X(e,t,n)))}const re=e=>h.go(e);let oe;const se=new Set,ae={currentRoute:v,listening:!0,addRoute:S,removeRoute:I,hasRoute:k,getRoutes:T,resolve:N,options:e,push:F,replace:M,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:_.add,afterEach:m.add,onError:Z.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Ke),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),o&&!oe&&v.value===B&&(oe=!0,F(h.location).catch((e=>{0})));const n={};for(const i in B)n[i]=(0,r.Fl)((()=>v.value[i]));e.provide(je,t),e.provide(qe,(0,i.qj)(n)),e.provide(Ue,v);const s=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(y=B,Y&&Y(),Y=null,v.value=B,oe=!1,G=!1),s()}}};return ae}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find((e=>m(e,o)))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find((e=>m(e,a)))||i.push(a))}return[n,r,i]}},5425:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(3868),i=n(8507),o=n(6104),s=n(6056);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,o._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,o.deleteApp)(this._delegate))))}_getService(e,t=o._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=o._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,o._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,o._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},l=new r.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e){const t={},n={__esModule:!0,initializeApp:a,app:s,registerVersion:o.registerVersion,setLogLevel:o.setLogLevel,onLog:o.onLog,apps:null,SDK_VERSION:o.SDK_VERSION,INTERNAL:{registerComponent:u,removeApp:i,useAsService:h,modularAPIs:o}};function i(e){delete t[e]}function s(e){if(e=e||o._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw l.create("no-app",{appName:e});return t[e]}function a(i,s={}){const a=o.initializeApp(i,s);if((0,r.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function u(t){const i=t.name,a=i.replace("-compat","");if(o._registerComponent(t)&&"PUBLIC"===t.type){const o=(e=s())=>{if("function"!==typeof e[a])throw l.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(o,t.serviceProps),n[a]=o,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),s["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=u(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const d=h(),f=new s.Yd("@firebase/app-compat"),p="@firebase/app-compat",_="0.1.39";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){(0,o.registerVersion)(p,_,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const m=d;g()},6104:function(e,t,n){"use strict";n.r(t),n.d(t,{FirebaseError:function(){return o.ZR},SDK_VERSION:function(){return ve},_DEFAULT_ENTRY_NAME:function(){return oe},_addComponent:function(){return le},_addOrOverwriteComponent:function(){return ue},_apps:function(){return ae},_clearComponents:function(){return pe},_components:function(){return ce},_getProvider:function(){return de},_registerComponent:function(){return he},_removeServiceInstance:function(){return fe},deleteApp:function(){return Ce},getApp:function(){return be},getApps:function(){return we},initializeApp:function(){return ye},onLog:function(){return Se},registerVersion:function(){return Ee},setLogLevel:function(){return Ie}});n(3014);var r=n(8507),i=n(6056),o=n(3868);n(6727);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,_=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(C(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),_.set(t,e),t}function m(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return C(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){v=e(v)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(E(this),t),C(h.get(this))}:function(...t){return C(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return f.set(r,t.sort?t.sort():[t]),C(r)}}function w(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&m(e),s(e,l())?new Proxy(e,v):e)}function C(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),_.set(t,e)),t}const E=e=>_.get(e);function S(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=C(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(C(s.result),e.oldVersion,e.newVersion,C(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],T=["put","add","delete","clear"],k=new Map;function x(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=T.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return k.set(t,o),o}y((e=>({...e,get:(t,n,r)=>x(t,n)||e.get(t,n,r),has:(t,n)=>!!x(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(R(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function R(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const N="@firebase/app",O="0.8.4",D=new i.Yd("@firebase/app"),A="@firebase/app-compat",L="@firebase/analytics-compat",F="@firebase/analytics",M="@firebase/app-check-compat",j="@firebase/app-check",q="@firebase/auth",U="@firebase/auth-compat",W="@firebase/database",B="@firebase/database-compat",H="@firebase/functions",V="@firebase/functions-compat",$="@firebase/installations",z="@firebase/installations-compat",K="@firebase/messaging",Y="@firebase/messaging-compat",J="@firebase/performance",G="@firebase/performance-compat",Q="@firebase/remote-config",Z="@firebase/remote-config-compat",X="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.14.0",oe="[DEFAULT]",se={[N]:"fire-core",[A]:"fire-core-compat",[F]:"fire-analytics",[L]:"fire-analytics-compat",[j]:"fire-app-check",[M]:"fire-app-check-compat",[q]:"fire-auth",[U]:"fire-auth-compat",[W]:"fire-rtdb",[B]:"fire-rtdb-compat",[H]:"fire-fn",[V]:"fire-fn-compat",[$]:"fire-iid",[z]:"fire-iid-compat",[K]:"fire-fcm",[Y]:"fire-fcm-compat",[J]:"fire-perf",[G]:"fire-perf-compat",[Q]:"fire-rc",[Z]:"fire-rc-compat",[X]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function le(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())le(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=oe){de(e,t).clearInstance(n)}function pe(){ce.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ge=new o.LL("app","Firebase",_e);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=ie;function ye(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:oe,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!==typeof s||!s)throw ge.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.aH)()),!n)throw ge.create("no-options");const a=ae.get(s);if(a){if((0,o.vZ)(n,a.options)&&(0,o.vZ)(i,a.config))return a;throw ge.create("duplicate-app",{appName:s})}const c=new r.H0(s);for(const r of ce.values())c.addComponent(r);const l=new me(n,i,c);return ae.set(s,l),l}function be(e=oe){const t=ae.get(e);if(!t&&e===oe)return ye();if(!t)throw ge.create("no-app",{appName:e});return t}function we(){return Array.from(ae.values())}async function Ce(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Ee(e,t,n){var i;let o=null!==(i=se[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void D.warn(e.join(" "))}he(new r.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}function Se(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");(0,i.Am)(e,t)}function Ie(e){(0,i.Ub)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="firebase-heartbeat-database",ke=1,xe="firebase-heartbeat-store";let Pe=null;function Re(){return Pe||(Pe=S(Te,ke,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(xe)}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),Pe}async function Ne(e){var t;try{const t=await Re();return t.transaction(xe).objectStore(xe).get(De(e))}catch(n){if(n instanceof o.ZR)D.warn(n.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});D.warn(e.message)}}}async function Oe(e,t){var n;try{const n=await Re(),r=n.transaction(xe,"readwrite"),i=r.objectStore(xe);return await i.put(t,De(e)),r.done}catch(r){if(r instanceof o.ZR)D.warn(r.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});D.warn(e.message)}}}function De(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=1024,Le=2592e6;class Fe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Me();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Le})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Me(),{heartbeatsToSend:t,unsentEntries:n}=je(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Me(){const e=new Date;return e.toISOString().substring(0,10)}function je(e,t=Ae){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ue(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ue(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ne(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Oe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Oe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ue(e){return(0,o.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e){he(new r.wA("platform-logger",(e=>new P(e)),"PRIVATE")),he(new r.wA("heartbeat",(e=>new Fe(e)),"PRIVATE")),Ee(N,O,e),Ee(N,O,"esm2017"),Ee("fire-js","")}We("")},8507:function(e,t,n){"use strict";n.d(t,{H0:function(){return l},wA:function(){return i},zt:function(){return s}});var r=n(3868);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},6056:function(e,t,n){"use strict";n.d(t,{Am:function(){return h},Ub:function(){return u},Yd:function(){return l},in:function(){return i}});n(3014);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function u(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}}}]);
//# sourceMappingURL=chunk-vendors.85ee885a.js.map