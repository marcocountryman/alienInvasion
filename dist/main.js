(()=>{var t={9662:(t,e,r)=>{var n=r(7854),o=r(614),i=r(6330),a=n.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not a function")}},9670:(t,e,r)=>{var n=r(7854),o=r(111),i=n.String,a=n.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not an object")}},1318:(t,e,r)=>{var n=r(5656),o=r(1400),i=r(6244),a=function(t){return function(e,r,a){var s,u=n(e),c=i(u),l=o(a,c);if(t&&r!=r){for(;c>l;)if((s=u[l++])!=s)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},206:(t,e,r)=>{var n=r(1702);t.exports=n([].slice)},4326:(t,e,r)=>{var n=r(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},9920:(t,e,r)=>{var n=r(2597),o=r(3887),i=r(1236),a=r(3070);t.exports=function(t,e){for(var r=o(e),s=a.f,u=i.f,c=0;c<r.length;c++){var l=r[c];n(t,l)||s(t,l,u(e,l))}}},8880:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(7854),o=r(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8113:(t,e,r)=>{var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:(t,e,r)=>{var n,o,i=r(7854),a=r(8113),s=i.process,u=i.Deno,c=s&&s.versions||u&&u.version,l=c&&c.v8;l&&(o=(n=l.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,i=r(8880),a=r(1320),s=r(3505),u=r(9920),c=r(4705);t.exports=function(t,e){var r,l,f,p,v,h=t.target,y=t.global,d=t.stat;if(r=y?n:d?n[h]||s(h,{}):(n[h]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(v=o(r,l))&&v.value:r[l],!c(y?l:h+(d?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),a(r,l,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},2104:t=>{var e=Function.prototype,r=e.apply,n=e.bind,o=e.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?o.bind(r):function(){return o.apply(r,arguments)})},7065:(t,e,r)=>{"use strict";var n=r(7854),o=r(1702),i=r(9662),a=r(111),s=r(2597),u=r(206),c=n.Function,l=o([].concat),f=o([].join),p={},v=function(t,e,r){if(!s(p,e)){for(var n=[],o=0;o<e;o++)n[o]="a["+o+"]";p[e]=c("C,a","return new C("+f(n,",")+")")}return p[e](t,r)};t.exports=c.bind||function(t){var e=i(this),r=e.prototype,n=u(arguments,1),o=function(){var r=l(n,u(arguments));return this instanceof o?v(e,r.length,r):e.apply(t,r)};return a(r)&&(o.prototype=r),o}},6916:t=>{var e=Function.prototype.call;t.exports=e.bind?e.bind(e):function(){return e.apply(e,arguments)}},6530:(t,e,r)=>{var n=r(9781),o=r(2597),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,s=o(i,"name"),u=s&&"something"===function(){}.name,c=s&&(!n||n&&a(i,"name").configurable);t.exports={EXISTS:s,PROPER:u,CONFIGURABLE:c}},1702:t=>{var e=Function.prototype,r=e.bind,n=e.call,o=r&&r.bind(n);t.exports=r?function(t){return t&&o(n,t)}:function(t){return t&&function(){return n.apply(t,arguments)}}},5005:(t,e,r)=>{var n=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t]):n[t]&&n[t][e]}},8173:(t,e,r)=>{var n=r(9662);t.exports=function(t,e){var r=t[e];return null==r?void 0:n(r)}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:(t,e,r)=>{var n=r(1702),o=r(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:t=>{t.exports={}},4664:(t,e,r)=>{var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(7854),o=r(1702),i=r(7293),a=r(4326),s=n.Object,u=o("".split);t.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?u(t,""):s(t)}:s},2788:(t,e,r)=>{var n=r(1702),o=r(614),i=r(5465),a=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:(t,e,r)=>{var n,o,i,a=r(8536),s=r(7854),u=r(1702),c=r(111),l=r(8880),f=r(2597),p=r(5465),v=r(6200),h=r(3501),y="Object already initialized",d=s.TypeError,m=s.WeakMap;if(a||p.state){var g=p.state||(p.state=new m),b=u(g.get),w=u(g.has),x=u(g.set);n=function(t,e){if(w(g,t))throw new d(y);return e.facade=t,x(g,t,e),e},o=function(t){return b(g,t)||{}},i=function(t){return w(g,t)}}else{var S=v("state");h[S]=!0,n=function(t,e){if(f(t,S))throw new d(y);return e.facade=t,l(t,S,e),e},o=function(t){return f(t,S)?t[S]:{}},i=function(t){return f(t,S)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!c(e)||(r=o(e)).type!==t)throw d("Incompatible receiver, "+t+" required");return r}}}},614:t=>{t.exports=function(t){return"function"==typeof t}},4705:(t,e,r)=>{var n=r(7293),o=r(614),i=/#|\.prototype\./,a=function(t,e){var r=u[s(t)];return r==l||r!=c&&(o(e)?n(e):!!e)},s=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=a.data={},c=a.NATIVE="N",l=a.POLYFILL="P";t.exports=a},111:(t,e,r)=>{var n=r(614);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},2190:(t,e,r)=>{var n=r(7854),o=r(5005),i=r(614),a=r(7976),s=r(3307),u=n.Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&a(e.prototype,u(t))}},6244:(t,e,r)=>{var n=r(7466);t.exports=function(t){return n(t.length)}},133:(t,e,r)=>{var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,e,r)=>{var n=r(7854),o=r(614),i=r(2788),a=n.WeakMap;t.exports=o(a)&&/native code/.test(i(a))},3070:(t,e,r)=>{var n=r(7854),o=r(9781),i=r(4664),a=r(9670),s=r(4948),u=n.TypeError,c=Object.defineProperty;e.f=o?c:function(t,e,r){if(a(t),e=s(e),a(r),i)try{return c(t,e,r)}catch(t){}if("get"in r||"set"in r)throw u("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(6916),i=r(5296),a=r(9114),s=r(5656),u=r(4948),c=r(2597),l=r(4664),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=s(t),e=u(e),l)try{return f(t,e)}catch(t){}if(c(t,e))return a(!o(i.f,t,e),t[e])}},8006:(t,e,r)=>{var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},7976:(t,e,r)=>{var n=r(1702);t.exports=n({}.isPrototypeOf)},6324:(t,e,r)=>{var n=r(1702),o=r(2597),i=r(5656),a=r(1318).indexOf,s=r(3501),u=n([].push);t.exports=function(t,e){var r,n=i(t),c=0,l=[];for(r in n)!o(s,r)&&o(n,r)&&u(l,r);for(;e.length>c;)o(n,r=e[c++])&&(~a(l,r)||u(l,r));return l}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},2140:(t,e,r)=>{var n=r(7854),o=r(6916),i=r(614),a=r(111),s=n.TypeError;t.exports=function(t,e){var r,n;if("string"===e&&i(r=t.toString)&&!a(n=o(r,t)))return n;if(i(r=t.valueOf)&&!a(n=o(r,t)))return n;if("string"!==e&&i(r=t.toString)&&!a(n=o(r,t)))return n;throw s("Can't convert object to primitive value")}},3887:(t,e,r)=>{var n=r(5005),o=r(1702),i=r(8006),a=r(5181),s=r(9670),u=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(s(t)),r=a.f;return r?u(e,r(t)):e}},1320:(t,e,r)=>{var n=r(7854),o=r(614),i=r(2597),a=r(8880),s=r(3505),u=r(2788),c=r(9909),l=r(6530).CONFIGURABLE,f=c.get,p=c.enforce,v=String(String).split("String");(t.exports=function(t,e,r,u){var c,f=!!u&&!!u.unsafe,h=!!u&&!!u.enumerable,y=!!u&&!!u.noTargetGet,d=u&&void 0!==u.name?u.name:e;o(r)&&("Symbol("===String(d).slice(0,7)&&(d="["+String(d).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||l&&r.name!==d)&&a(r,"name",d),(c=p(r)).source||(c.source=v.join("string"==typeof d?d:""))),t!==n?(f?!y&&t[e]&&(h=!0):delete t[e],h?t[e]=r:a(t,e,r)):h?t[e]=r:s(e,r)})(Function.prototype,"toString",(function(){return o(this)&&f(this).source||u(this)}))},4488:(t,e,r)=>{var n=r(7854).TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},3505:(t,e,r)=>{var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3505),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.2",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:(t,e,r)=>{var n=r(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?r:e)(n)}},7466:(t,e,r)=>{var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(7854),o=r(4488),i=n.Object;t.exports=function(t){return i(o(t))}},7593:(t,e,r)=>{var n=r(7854),o=r(6916),i=r(111),a=r(2190),s=r(8173),u=r(2140),c=r(5112),l=n.TypeError,f=c("toPrimitive");t.exports=function(t,e){if(!i(t)||a(t))return t;var r,n=s(t,f);if(n){if(void 0===e&&(e="default"),r=o(n,t,e),!i(r)||a(r))return r;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)}},4948:(t,e,r)=>{var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},6330:(t,e,r)=>{var n=r(7854).String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},9711:(t,e,r)=>{var n=r(1702),o=0,i=Math.random(),a=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:(t,e,r)=>{var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,e,r)=>{var n=r(7854),o=r(2309),i=r(2597),a=r(9711),s=r(133),u=r(3307),c=o("wks"),l=n.Symbol,f=l&&l.for,p=u?l:l&&l.withoutSetter||a;t.exports=function(t){if(!i(c,t)||!s&&"string"!=typeof c[t]){var e="Symbol."+t;s&&i(l,t)?c[t]=l[t]:c[t]=u&&f?f(e):p(e)}return c[t]}},4812:(t,e,r)=>{r(2109)({target:"Function",proto:!0},{bind:r(7065)})},9070:(t,e,r)=>{var n=r(2109),o=r(9781);n({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:r(3070).f})},2564:(t,e,r)=>{var n=r(2109),o=r(7854),i=r(2104),a=r(614),s=r(8113),u=r(206),c=/MSIE .\./.test(s),l=o.Function,f=function(t){return function(e,r){var n=arguments.length>2,o=n?u(arguments,2):void 0;return t(n?function(){i(a(e)?e:l(e),this,o)}:e,r)}};n({global:!0,bind:!0,forced:c},{setTimeout:f(o.setTimeout),setInterval:f(o.setInterval)})}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}r(9070);var e=function(){function e(t,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.game=t,this.context=r,this.canvas=n}var r,n;return r=e,(n=[{key:"start",value:function(){this.game.characterSequence(this.context)}}])&&t(r.prototype,n),e}();const n=e;function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}r(4812),r(2564);var i=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.pos=e,this.size=r,this.alive=!0,this.game=n}var e,r;return e=t,(r=[{key:"draw",value:function(t){var e=this,r=new Image;r.onload=function(){t.drawImage(r,e.pos[0],e.pos[1],e.size[0],e.size[1])},r.src="images/alienfinal.png",setTimeout((function(){e.response(t)}),1e3),setTimeout((function(){t.clearRect(0,0,800,600)}),2200)}},{key:"response",value:function(t){var e=this;if(this.alive){var r=function(){t.clearRect(this.pos[0],this.pos[1],this.size[0],this.size[1]);var r=new Image;r.onload=function(){t.drawImage(r,e.pos[0],e.pos[1],e.size[0],e.size[1])},r.src="images/alienlasereyes.png",this.game.lives-=1,this.game.removeHeart()}.bind(this);setTimeout(r,200)}}},{key:"dead",value:function(t){var e=this;this.alive=!1,t.clearRect(this.pos[0],this.pos[1],this.size[0],this.size[1]);var r=new Image;r.onload=function(){t.drawImage(r,e.pos[0],e.pos[1],e.size[0],e.size[1])},r.src="images/explode.png"}},{key:"hitCheck",value:function(t,e){return t>this.pos[0]&&t<this.pos[0]+this.size[0]&&e>this.pos[1]&&e<this.pos[1]+this.size[1]}}])&&o(e.prototype,r),t}();const a=i;function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const u=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.pos=e,this.size=r,this.color=n,this.alive=!0}var e,r;return e=t,(r=[{key:"draw",value:function(t){var e=this,r=new Image;r.onload=function(){t.drawImage(r,e.pos[0],e.pos[1],e.size[0],e.size[1])},r.src="images/scaredguy.png",setTimeout((function(){e.response(t)}),1e3),setTimeout((function(){t.clearRect(0,0,800,600)}),2200)}},{key:"response",value:function(t){var e=this;if(this.alive){var r=function(){var r=new Image;r.onload=function(){t.drawImage(r,e.pos[0],e.pos[1],e.size[0],e.size[1])},r.src="images/scaredguy.png"}.bind(this);setTimeout(r,200)}}},{key:"dead",value:function(t){var e=this;this.alive=!1,t.clearRect(this.pos[0],this.pos[1],this.size[0],this.size[1]);var r=new Image;r.onload=function(){t.drawImage(r,e.pos[0],e.pos[1],e.size[0],e.size[1])},r.src="images/explode.png"}},{key:"hitCheck",value:function(t,e){return t>this.pos[0]&&t<this.pos[0]+this.size[0]&&e>this.pos[1]&&e<this.pos[1]+this.size[1]}}])&&s(e.prototype,r),t}();function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var l=[100,200],f=[[10,314],[600,400],[415,370],[215,390]];const p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=e,this.characters=[],this.fillCharacters(),this.killCount=0,this.lives=3,this.gameover=!1}var e,r;return e=t,(r=[{key:"randomAlien",value:function(){var t=Math.floor(Math.random()*f.length);return new a(f[t],l,this)}},{key:"randomCivilian",value:function(){var t=Math.floor(Math.random()*f.length);return new u(f[t],l,this)}},{key:"randomCharacter",value:function(){var t=this.randomAlien(),e=[t,this.randomCivilian(),t,t,t];return this.shuffle(e),e[Math.floor(3*Math.random())]}},{key:"fillCharacters",value:function(){for(var t=0;t<10;t++){var e=this.randomCharacter();this.characters.push(e)}var r=this.randomCharacter();this.characters.push(r)}},{key:"shuffle",value:function(t){for(var e=0;e<t.length;e++){var r=Math.floor(Math.random()*(e+1)),n=t[e];t[e]=t[r],t[r]=n}return t}},{key:"characterSequence",value:function(t){var e=function(){var e=this.characters.pop(),n=new AbortController;this.gameover&&clearInterval(r),e.draw(t),this.canvas.removeEventListener("click",i),this.characters.length||(clearInterval(r),this.renderClearMessage());var o=this;function i(r){var i=o.canvas.getBoundingClientRect(),a=r.clientX-i.left,s=r.clientY-i.top;n.abort(),e.hitCheck(a,s)&&(e.dead(t),o.killCount+=1,o.upgradeKillCount())}this.canvas.addEventListener("click",i,{signal:n.signal})}.bind(this),r=setInterval(e,2500)}},{key:"upgradeKillCount",value:function(){document.querySelector("#kills").innerText="Blast Count : ".concat(this.killCount)}},{key:"removeHeart",value:function(){2===this.lives&&(document.querySelector("#heart3").style.visibility="hidden"),1===this.lives&&(document.querySelector("#heart2").style.visibility="hidden"),0===this.lives&&(document.querySelector("#heart1").style.visibility="hidden",this.gameover=!0,this.gameoverMessage())}},{key:"renderClearMessage",value:function(){document.querySelector(".levelclear").style.visibility="visible"}},{key:"gameoverMessage",value:function(){document.querySelector(".gameover").style.visibility="visible"}}])&&c(e.prototype,r),t}();document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("alien-canvas"),e=t.getContext("2d"),r=new p(t),o=new n(r,e,t),i=document.querySelector("#initiate"),a=document.querySelector("#music"),s=new Audio("sound/music.mp3"),u=new Audio("sound/lasergun.mp3");function c(){u.play()}i.addEventListener("click",(function(t){o.start(),s.play()})),a.addEventListener("click",(function(t){s.paused?s.play():s.pause(),document.removeEventListener("click",c)})),document.addEventListener("click",c)}))})()})();
//# sourceMappingURL=main.js.map