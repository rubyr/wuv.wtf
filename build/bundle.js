var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function r(t){return null==t?"":t}function c(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function f(){return t=" ",document.createTextNode(t);var t}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let m;function h(t){m=t}function g(t){(function(){if(!m)throw new Error("Function called outside component initialization");return m})().$$.on_mount.push(t)}const p=[],v=[],$=[],w=[],x=Promise.resolve();let y=!1;function b(t){$.push(t)}let j=!1;const _=new Set;function k(){if(!j){j=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];h(n),E(n.$$)}for(h(null),p.length=0;v.length;)v.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];_.has(n)||(_.add(n),n())}$.length=0}while(p.length);for(;w.length;)w.pop()();y=!1,j=!1,_.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(b)}}const R=new Set;let M;function N(t,n){t&&t.i&&(R.delete(t),t.i(n))}function A(t,n,e,o){if(t&&t.o){if(R.has(t))return;R.add(t),M.c.push((()=>{R.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const H="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function T(t,e,i,r){const{fragment:c,on_mount:a,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,i),r||b((()=>{const e=a.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(b)}function L(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function O(t,n){-1===t.$$.dirty[0]&&(p.push(t),y||(y=!0,x.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function q(n,s,i,r,c,a,u=[-1]){const f=m;h(n);const d=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:u,skip_bound:!1};let g=!1;if(d.ctx=i?i(n,s.props||{},((t,e,...o)=>{const s=o.length?o[0]:e;return d.ctx&&c(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),g&&O(n,t)),e})):[],d.update(),g=!0,o(d.before_update),d.fragment=!!r&&r(d.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);d.fragment&&d.fragment.l(t),t.forEach(l)}else d.fragment&&d.fragment.c();s.intro&&N(n.$$.fragment),T(n,s.target,s.anchor,s.customElement),k()}h(f)}class B{$destroy(){L(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function C(n){let e,o;return{c(){e=u("img"),e.src!==(o=n[0])&&d(e,"src",o),d(e,"alt","heart"),d(e,"style",n[1]),d(e,"class","svelte-doemhd")},m(t,n){a(t,e,n)},p(t,[n]){1&n&&e.src!==(o=t[0])&&d(e,"src",o),2&n&&d(e,"style",t[1])},i:t,o:t,d(t){t&&l(e)}}}function F(t,n,e){let o,{src:s}=n,{x:i}=n,{y:r}=n,{initialRotation:c}=n;return t.$$set=t=>{"src"in t&&e(0,s=t.src),"x"in t&&e(2,i=t.x),"y"in t&&e(3,r=t.y),"initialRotation"in t&&e(4,c=t.initialRotation)},t.$$.update=()=>{28&t.$$.dirty&&e(1,o=`transform: translate(${i}px, ${r}px) rotate(${c+r}deg);`)},[s,o,i,r,c]}class S extends B{constructor(t){super(),q(this,t,F,C,i,{src:0,x:2,y:3,initialRotation:4})}}const z=["https://twemoji.maxcdn.com/v/13.0.1/svg/1f493.svg","https://twemoji.maxcdn.com/v/13.0.1/svg/1f495.svg","https://twemoji.maxcdn.com/v/13.0.1/svg/1f496.svg","https://twemoji.maxcdn.com/v/13.0.1/svg/1f497.svg","https://twemoji.maxcdn.com/v/13.0.1/svg/1f498.svg","https://twemoji.maxcdn.com/v/13.0.1/svg/1f499.svg","https://twemoji.maxcdn.com/v/13.0.1/svg/1f49a.svg","https://twemoji.maxcdn.com/v/13.0.1/svg/1f49b.svg","https://twemoji.maxcdn.com/v/13.0.1/svg/1f49c.svg","https://twemoji.maxcdn.com/v/13.0.1/svg/1f49d.svg","https://twemoji.maxcdn.com/v/13.0.1/svg/1f49e.svg","https://twemoji.maxcdn.com/v/13.0.1/svg/1f49f.svg","https://twemoji.maxcdn.com/v/13.0.1/svg/1f5a4.svg","https://twemoji.maxcdn.com/v/13.0.1/svg/1f90d.svg","https://twemoji.maxcdn.com/v/13.0.1/svg/1f90e.svg","https://twemoji.maxcdn.com/v/13.0.1/svg/2764.svg","https://twemoji.maxcdn.com/v/13.0.1/svg/2763.svg"];class P{x=0;y=30;vy=-10;initialRotation=360*Math.random();constructor(t){this.x=Math.random()*(t-100)+25,this.src=z[Math.floor(Math.random()*z.length)]}}class W{acc=1;constructor(){this.hearts=[],this.addNewHeart()}addNewHeart(){this.hearts.push(new P(window.innerWidth))}update(){this.addNewHeart(),this.hearts.forEach((t=>{t.vy+=this.acc,t.y+=t.vy})),this.hearts=this.hearts.filter((t=>t.y<window.innerHeight-40))}}const{window:D}=H;function G(t,n,e){const o=t.slice();return o[6]=n[e],o}function I(t){let n,e;return n=new S({props:{x:t[6].x,y:t[6].y,src:t[6].src,initialRotation:t[6].initialRotation}}),{c(){var t;(t=n.$$.fragment)&&t.c()},m(t,o){T(n,t,o),e=!0},p(t,e){const o={};2&e&&(o.x=t[6].x),2&e&&(o.y=t[6].y),2&e&&(o.src=t[6].src),2&e&&(o.initialRotation=t[6].initialRotation),n.$set(o)},i(t){e||(N(n.$$.fragment,t),e=!0)},o(t){A(n.$$.fragment,t),e=!1},d(t){L(n,t)}}}function J(t){let n,e,s,i,m,h,g,p,v=t[1].hearts,$=[];for(let n=0;n<v.length;n+=1)$[n]=I(G(t,v,n));const w=t=>A($[t],1,1,(()=>{$[t]=null}));return{c(){n=u("main");for(let t=0;t<$.length;t+=1)$[t].c();e=f(),s=u("section"),s.innerHTML='<p class="svelte-ikrsg2">made with <img src="https://twemoji.maxcdn.com/v/13.0.1/svg/2764.svg" alt="♥" class="svelte-ikrsg2"/>\n      by <a href="https://twitter.com/woobyrubes">@woobyrubes</a></p>',m=f(),d(s,"class","svelte-ikrsg2"),d(n,"class",i=r(t[0]&&"trans")+" svelte-ikrsg2"),document.title="wuvvv"},m(o,i){a(o,n,i);for(let t=0;t<$.length;t+=1)$[t].m(n,null);var r,l,u,f;c(n,e),c(n,s),a(o,m,i),h=!0,g||(r=D,l="keydown",u=t[2],r.addEventListener(l,u,f),p=()=>r.removeEventListener(l,u,f),g=!0)},p(t,[s]){if(2&s){let i;for(v=t[1].hearts,i=0;i<v.length;i+=1){const o=G(t,v,i);$[i]?($[i].p(o,s),N($[i],1)):($[i]=I(o),$[i].c(),N($[i],1),$[i].m(n,e))}for(M={r:0,c:[],p:M},i=v.length;i<$.length;i+=1)w(i);M.r||o(M.c),M=M.p}(!h||1&s&&i!==(i=r(t[0]&&"trans")+" svelte-ikrsg2"))&&d(n,"class",i)},i(t){if(!h){for(let t=0;t<v.length;t+=1)N($[t]);h=!0}},o(t){$=$.filter(Boolean);for(let t=0;t<$.length;t+=1)A($[t]);h=!1},d(t){t&&l(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}($,t),t&&l(m),g=!1,p()}}}function K(t,n,e){let o=!1;const s="transrights".split("");let i=0,r=new W;const c=()=>{r.update(),e(1,r),window.requestAnimationFrame(c)};return g((()=>{c()})),[o,r,t=>{t.key===s[i]&&i++,e(0,o=i>=s.length)}]}return new class extends B{constructor(t){super(),q(this,t,K,J,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map