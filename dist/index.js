(()=>{(function(){function t(){for(var n=arguments.length,i=0;i<n;i++){var a=i<0||arguments.length<=i?void 0:arguments[i];a.nodeType===1||a.nodeType===11?this.appendChild(a):this.appendChild(document.createTextNode(String(a)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function r(){for(var n=this.parentNode,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];var l=a.length;if(n)for(l||n.removeChild(this);l--;){var f=a[l];typeof f!="object"?f=this.ownerDocument.createTextNode(f):f.parentNode&&f.parentNode.removeChild(f),l?n.insertBefore(this.previousSibling,f):n.replaceChild(f,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=t,DocumentFragment.prototype.append=t),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=r,DocumentFragment.prototype.replaceWith=r))})();function xt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function tt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function et(t,e,r){return e&&tt(t.prototype,e),r&&tt(t,r),t}function Ct(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function rt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function nt(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?rt(Object(r),!0).forEach(function(n){Ct(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):rt(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function ot(t,e){return _t(t)||Lt(t,e)||at(t,e)||Rt()}function E(t){return Ot(t)||It(t)||at(t)||Nt()}function Ot(t){if(Array.isArray(t))return q(t)}function _t(t){if(Array.isArray(t))return t}function It(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}function Lt(t,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(t)))){var r=[],n=!0,i=!1,a=void 0;try{for(var s=t[Symbol.iterator](),l;!(n=(l=s.next()).done)&&(r.push(l.value),!(e&&r.length===e));n=!0);}catch(f){i=!0,a=f}finally{try{!n&&s.return!=null&&s.return()}finally{if(i)throw a}}return r}}function at(t,e){if(t){if(typeof t=="string")return q(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return q(t,e)}}function q(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Nt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(t,e){return Object.getOwnPropertyNames(Object(t)).reduce(function(r,n){var i=Object.getOwnPropertyDescriptor(Object(t),n),a=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(r,n,a||i)},{})}function B(t){return typeof t=="string"}function J(t){return Array.isArray(t)}function F(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=M(t),r;return e.types!==void 0?r=e.types:e.split!==void 0&&(r=e.split),r!==void 0&&(e.types=(B(r)||J(r)?String(r):"").split(",").map(function(n){return String(n).trim()}).filter(function(n){return/((line)|(word)|(char))/i.test(n)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(t.position)),e}function K(t){var e=B(t)||J(t)?String(t):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function U(t){return t!==null&&typeof t=="object"}function kt(t){return U(t)&&/^(1|3|11)$/.test(t.nodeType)}function jt(t){return typeof t=="number"&&t>-1&&t%1===0}function Mt(t){return U(t)&&jt(t.length)}function W(t){return J(t)?t:t==null?[]:Mt(t)?Array.prototype.slice.call(t):[t]}function it(t){var e=t;return B(t)&&(/^(#[a-z]\w+)$/.test(t.trim())?e=document.getElementById(t.trim().slice(1)):e=document.querySelectorAll(t)),W(e).reduce(function(r,n){return[].concat(E(r),E(W(n).filter(kt)))},[])}var Pt=Object.entries,G="_splittype",C={},Wt=0;function _(t,e,r){if(!U(t))return console.warn("[data.set] owner is not an object"),null;var n=t[G]||(t[G]=++Wt),i=C[n]||(C[n]={});return r===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(C[n]=nt(nt({},i),e)):e!==void 0&&(i[e]=r),r}function P(t,e){var r=U(t)?t[G]:null,n=r&&C[r]||{};return e===void 0?n:n[e]}function st(t){var e=t&&t[G];e&&(delete t[e],delete C[e])}function Dt(){Object.keys(C).forEach(function(t){delete C[t]})}function Bt(){Pt(C).forEach(function(t){var e=ot(t,2),r=e[0],n=e[1],i=n.isRoot,a=n.isSplit;(!i||!a)&&(C[r]=null,delete C[r])})}function Ht(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",r=t?String(t):"";return r.trim().replace(/\s+/g," ").split(e)}var Z="\\ud800-\\udfff",ct="\\u0300-\\u036f\\ufe20-\\ufe23",lt="\\u20d0-\\u20f0",ut="\\ufe0e\\ufe0f",$t="[".concat(Z,"]"),Y="[".concat(ct).concat(lt,"]"),z="\\ud83c[\\udffb-\\udfff]",Ft="(?:".concat(Y,"|").concat(z,")"),ft="[^".concat(Z,"]"),pt="(?:\\ud83c[\\udde6-\\uddff]){2}",dt="[\\ud800-\\udbff][\\udc00-\\udfff]",ht="\\u200d",gt="".concat(Ft,"?"),vt="[".concat(ut,"]?"),Gt="(?:"+ht+"(?:"+[ft,pt,dt].join("|")+")"+vt+gt+")*",Ut=vt+gt+Gt,Vt="(?:".concat(["".concat(ft).concat(Y,"?"),Y,pt,dt,$t].join("|"),`
)`),qt=RegExp("".concat(z,"(?=").concat(z,")|").concat(Vt).concat(Ut),"g"),Yt=[ht,Z,ct,lt,ut],zt=RegExp("[".concat(Yt.join(""),"]"));function Xt(t){return t.split("")}function yt(t){return zt.test(t)}function Jt(t){return t.match(qt)||[]}function Kt(t){return yt(t)?Jt(t):Xt(t)}function Zt(t){return t==null?"":String(t)}function Qt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return t=Zt(t),t&&B(t)&&!e&&yt(t)?Kt(t):t.split(e)}function X(t,e){var r=document.createElement(t);return e&&Object.keys(e).forEach(function(n){var i=e[n],a=B(i)?i.trim():i;a===null||a===""||(n==="children"?r.append.apply(r,E(W(a))):r.setAttribute(n,a))}),r}var Q={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function te(t,e){e=M(Q,e);var r=K(e.types),n=e.tagName,i=t.nodeValue,a=document.createDocumentFragment(),s=[],l=[];return/^\s/.test(i)&&a.append(" "),s=Ht(i).reduce(function(f,d,y,h){var A,p;return r.chars&&(p=Qt(d).map(function(S){var x=X(n,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:S});return _(x,"isChar",!0),l=[].concat(E(l),[x]),x})),r.words||r.lines?(A=X(n,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(r.words&&e.absolute?"position: relative;":""),children:r.chars?p:d}),_(A,{isWord:!0,isWordStart:!0,isWordEnd:!0}),a.appendChild(A)):p.forEach(function(S){a.appendChild(S)}),y<h.length-1&&a.append(" "),r.words?f.concat(A):f},[]),/\s$/.test(i)&&a.append(" "),t.replaceWith(a),{words:s,chars:l}}function bt(t,e){var r=t.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(r))return n;if(r===3&&/\S/.test(t.nodeValue))return te(t,e);var i=W(t.childNodes);if(i.length&&(_(t,"isSplit",!0),!P(t).isRoot)){t.style.display="inline-block",t.style.position="relative";var a=t.nextSibling,s=t.previousSibling,l=t.textContent||"",f=a?a.textContent:" ",d=s?s.textContent:" ";_(t,{isWordEnd:/\s$/.test(l)||/^\s/.test(f),isWordStart:/^\s/.test(l)||/\s$/.test(d)})}return i.reduce(function(y,h){var A=bt(h,e),p=A.words,S=A.chars;return{words:[].concat(E(y.words),E(p)),chars:[].concat(E(y.chars),E(S))}},n)}function ee(t,e,r,n){if(!r.absolute)return{top:e?t.offsetTop:null};var i=t.offsetParent,a=ot(n,2),s=a[0],l=a[1],f=0,d=0;if(i&&i!==document.body){var y=i.getBoundingClientRect();f=y.x+s,d=y.y+l}var h=t.getBoundingClientRect(),A=h.width,p=h.height,S=h.x,x=h.y,T=x+l-d,I=S+s-f;return{width:A,height:p,top:T,left:I}}function mt(t){P(t).isWord?(st(t),t.replaceWith.apply(t,E(t.childNodes))):W(t.children).forEach(function(e){return mt(e)})}var re=function(){return document.createDocumentFragment()};function ne(t,e,r){var n=K(e.types),i=e.tagName,a=t.getElementsByTagName("*"),s=[],l=[],f=null,d,y,h,A=[],p=t.parentElement,S=t.nextElementSibling,x=re(),T=window.getComputedStyle(t),I=T.textAlign,H=parseFloat(T.fontSize),$=H*.2;return e.absolute&&(h={left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth},y=t.offsetWidth,d=t.offsetHeight,_(t,{cssWidth:t.style.width,cssHeight:t.style.height})),W(a).forEach(function(b){var g=b.parentElement===t,m=ee(b,g,e,r),L=m.width,j=m.height,N=m.top,R=m.left;/^br$/i.test(b.nodeName)||(n.lines&&g&&((f===null||N-f>=$)&&(f=N,s.push(l=[])),l.push(b)),e.absolute&&_(b,{top:N,left:R,width:L,height:j}))}),p&&p.removeChild(t),n.lines&&(A=s.map(function(b){var g=X(i,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(I,"; width: 100%;")});_(g,"isLine",!0);var m={height:0,top:1e4};return x.appendChild(g),b.forEach(function(L,j,N){var R=P(L),o=R.isWordEnd,c=R.top,u=R.height,v=N[j+1];m.height=Math.max(m.height,u),m.top=Math.min(m.top,c),g.appendChild(L),o&&P(v).isWordStart&&g.append(" ")}),e.absolute&&_(g,{height:m.height,top:m.top}),g}),n.words||mt(x),t.replaceChildren(x)),e.absolute&&(t.style.width="".concat(t.style.width||y,"px"),t.style.height="".concat(d,"px"),W(a).forEach(function(b){var g=P(b),m=g.isLine,L=g.top,j=g.left,N=g.width,R=g.height,o=P(b.parentElement),c=!m&&o.isLine;b.style.top="".concat(c?L-o.top:L,"px"),b.style.left=m?"".concat(h.left,"px"):"".concat(j-(c?h.left:0),"px"),b.style.height="".concat(R,"px"),b.style.width=m?"".concat(h.width,"px"):"".concat(N,"px"),b.style.position="absolute"})),p&&(S?p.insertBefore(t,S):p.appendChild(t)),A}var D=M(Q,{}),At=function(){et(t,null,[{key:"clearData",value:function(){Dt()}},{key:"setDefaults",value:function(r){return D=M(D,F(r)),Q}},{key:"revert",value:function(r){it(r).forEach(function(n){var i=P(n),a=i.isSplit,s=i.html,l=i.cssWidth,f=i.cssHeight;a&&(n.innerHTML=s,n.style.width=l||"",n.style.height=f||"",st(n))})}},{key:"create",value:function(r,n){return new t(r,n)}},{key:"data",get:function(){return C}},{key:"defaults",get:function(){return D},set:function(r){D=M(D,F(r))}}]);function t(e,r){xt(this,t),this.isSplit=!1,this.settings=M(D,F(r)),this.elements=it(e),this.split()}return et(t,[{key:"split",value:function(r){var n=this;this.revert(),this.elements.forEach(function(s){_(s,"html",s.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var i=[window.pageXOffset,window.pageYOffset];r!==void 0&&(this.settings=M(this.settings,F(r)));var a=K(this.settings.types);a.none||(this.elements.forEach(function(s){_(s,"isRoot",!0);var l=bt(s,n.settings),f=l.words,d=l.chars;n.words=[].concat(E(n.words),E(f)),n.chars=[].concat(E(n.chars),E(d))}),this.elements.forEach(function(s){if(a.lines||n.settings.absolute){var l=ne(s,n.settings,i);n.lines=[].concat(E(n.lines),E(l))}}),this.isSplit=!0,window.scrollTo(i[0],i[1]),Bt())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),t.revert(this.elements)}}]),t}();var w=function(t,e){let r=typeof t;return typeof e!="string"||e.trim()===""?t:e==="true"&&r==="boolean"?!0:e==="false"&&r==="boolean"?!1:isNaN(e)&&r==="string"?e:!isNaN(e)&&r==="number"?+e:t},V=function(t,e="lines, words"){if(t)return typeSplit=new At(t,{types:e}),typeSplit},k=function(t,e,r){if(!t||!e||!r){console.error(`GSAP checkBreakpoints Error in ${e}`);return}let{isMobile:n,isTablet:i,isDesktop:a,reduceMotion:s}=r.conditions;if(n===void 0||i===void 0||a===void 0){console.error("GSAP Match Media Conditions Not Defined");return}let l=`data-ix-${e}-desktop`,f=`data-ix-${e}-tablet`,d=`data-ix-${e}-mobile`,y=`data-ix-${e}-run`;return runAll=w(!0,t.getAttribute(y)),runMobile=w(!0,t.getAttribute(d)),runTablet=w(!0,t.getAttribute(f)),runDesktop=w(!0,t.getAttribute(l)),!(runAll===!1||runMobile===!1&&n||runTablet===!1&&i||runDesktop===!1&&a)};var Et=function(t){let e="hoveractive",r='[data-ix-hoveractive="wrap"]',n="data-ix-hoveractive-class",i="is-active";gsap.utils.toArray(r).forEach(s=>{if(!s)return;let l=attr(i,s.getAttribute(n));k(s,e,t)!==!1&&(s.addEventListener("mouseover",function(d){s.classList.add(l)}),s.addEventListener("mouseleave",function(d){s.classList.remove(l)}))})};var wt=function(t){let e="textscrub",r='[data-ix-textscrub="item"]',n="data-ix-textscrub-class",i="is-active";gsap.utils.toArray(r).forEach(s=>{!s||k(s,e,t)===!1||V(s,"lines")})};var St=function(t){let e="scrollin",r="data-ix-scrollin",n="heading",i="item",a="container",s="stagger",l="rich-text",f="image-wrap",d="image",y="line",h="data-ix-scrollin-toggle-actions",A="data-ix-scrollin-scrub",p="data-ix-scrollin-start",S="data-ix-scrollin-end",x="data-ix-scrollin-direction",T=function(o){let c={scrub:!1,toggleActions:"play none none none",start:"top 90%",end:"top 75%"};return c.toggleActions=w(c.toggleActions,o.getAttribute(h)),c.scrub=w(c.scrub,o.getAttribute(A)),c.start=w(c.start,o.getAttribute(p)),c.end=w(c.end,o.getAttribute(S)),gsap.timeline({defaults:{duration:.6,ease:"power1.out"},scrollTrigger:{trigger:o,start:c.start,end:c.end,toggleActions:c.toggleActions,scrub:c.scrub}})},I=function(o,c,u={}){let v={opacity:0,y:"2rem"},O={opacity:1,y:"0rem"};return u.stagger==="small"&&(O.stagger={each:.1,from:"start"}),u.stagger==="large"&&(O.stagger={each:.3,from:"start"}),c.fromTo(o,v,O)},H=function(o){o.classList.contains("w-richtext")&&(o=o.firstChild);let c=V(o);if(!c)return;let u=T(o),v=I(c.words,u,{stagger:"small",skew:"large"});u.eventCallback("onComplete",()=>{c.revert()})},$=function(o){if(o)if(o.classList.contains("w-richtext")){let c=gsap.utils.toArray(o.children);if(c.length===0)return;c.forEach(u=>{let v=T(u),O=I(u,v)})}else{let c=T(o),u=I(o,c)}},b=function(o){let c="right",u,v=w(c,o.getAttribute(x)),O={left:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",right:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",top:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",bottom:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"};return v==="left"&&(u=O.left),v==="right"&&(u=O.right),v==="top"&&(u=O.top),v==="bottom"&&(u=O.bottom),u},g=function(o){if(!o)return;let c=o.firstChild,u=T(o);u.fromTo(c,{scale:1.2},{scale:1,duration:1}),u.fromTo(o,{scale:.9},{scale:1,duration:1},"<")},m=function(o){if(!o)return;let c=b(o);T(o).fromTo(o,{clipPath:c},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})},L=function(o){if(!o)return;let c=gsap.utils.toArray(o.children);c.length!==0&&c.forEach(u=>{let v=T(u),O=I(u,v)})},j=function(o){if(!o)return;let c=gsap.utils.toArray(o.children);if(c.length===0)return;let u=T(o),v=I(c,u,{stagger:"large"})},N=function(o){if(!o)return;let c=gsap.utils.toArray(o.children);c.length!==0&&c.forEach(u=>{let v=u.tagName;["H1","H2","H3","H4","H5","H6"].includes(v)&&H(u),v==="FIGURE"?g(u):$(u)})};gsap.utils.toArray(`[${r}]`).forEach(o=>{if(!o||k(o,e,t)===!1)return;let u=o.getAttribute(r);u===n&&H(o),u===i&&$(o),u===d&&g(o),u===y&&m(o),u===a&&L(o),u===s&&j(o),u===l&&N(o)})};var Tt=function(t){let e="parallax",r='[data-ix-parallax="wrap"]',n='[data-ix-parallax="section"]',i='[data-ix-parallax="trigger"]',a="data-ix-parallax-type",s="data-ix-parallax-amount";gsap.utils.toArray(r).forEach(f=>{let d=f.querySelector(n),y=f.querySelector(i);if(!f||!d||!y)return;let h="uncover";if(h=w("uncover",f.getAttribute(a)),moveAmount=w(50,f.getAttribute(s)),k(f,e,t)===!1)return;let p={scrub:!0,start:"top bottom",end:"top top",moveStart:"-100vh",moveEnd:"0vh"};h==="cover"&&(p.start="bottom bottom",p.end="bottom top",p.moveStart="0vh",p.moveEnd="100vh"),h==="parallax"&&(p.moveStart=`-${moveAmount}vh`,p.moveEnd="0vh"),gsap.timeline({scrollTrigger:{trigger:y,markers:!1,start:p.start,end:p.end,scrub:p.scrub},defaults:{duration:1,ease:"none"},onStart:()=>{ScrollTrigger.refresh()}}).fromTo(d,{y:p.moveStart},{y:p.moveEnd})})};document.addEventListener("DOMContentLoaded",function(){console.log("Local Script"),gsap.ScrollTrigger!==void 0&&gsap.registerPlugin(ScrollTrigger),gsap.Flip!==void 0&&gsap.registerPlugin(Flip),function(){gsap.matchMedia().add({isMobile:"(max-width: 767px)",isTablet:"(min-width: 768px)  and (max-width: 991px)",isDesktop:"(min-width: 992px)",reduceMotion:"(prefers-reduced-motion: reduce)"},n=>{let{isMobile:i,isTablet:a,isDesktop:s,reduceMotion:l}=n.conditions;Et(n),l||(St(n),wt(n),Tt(n))})}(),function(){let r="[data-ix-reset]",n="data-ix-reset-time";document.querySelectorAll(r).forEach(function(a){a.addEventListener("click",function(s){if(ScrollTrigger.refresh(),a.hasAttribute(n)){let l=w(1e3,a.getAttribute(n));setTimeout(()=>{ScrollTrigger.refresh()},l)}})})}()});})();
