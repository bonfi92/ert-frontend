!function(){"use strict";var e="home__list--collections",t="home__list--products",n="home__list--years",r="home__list--descriptions",o="home__list--specifics",c="home__collection-image",a="home__product-image",l="visible",i="active",u="Europe/Rome",s=document.querySelectorAll(".".concat(e," li")),d=document.querySelectorAll(".".concat(t," li")),f=document.querySelector(".footer__hour"),m=document.querySelector(".footer__minute"),y=document.querySelector(".footer__option--date"),v=document.querySelector(".slideshow");function h(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,c=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw c}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S=function(e,t,n){if(e)if(void 0!==e.length){var r,o=h(e);try{for(o.s();!(r=o.n()).done;)r.value.classList.remove(n)}catch(e){o.e(e)}finally{o.f()}}else e.classList.remove(n);if(t)if(void 0!==t.length){var c,a=h(t);try{for(a.s();!(c=a.n()).done;)c.value.classList.add(n)}catch(e){a.e(e)}finally{a.f()}}else t.classList.add(n)},g=function(e){S(document.querySelector(".".concat(a,".").concat(l)),document.querySelector(".".concat(a,'[data-product="').concat(e,'"]')),l)},b=function(e){S(document.querySelector(".".concat(r," li.").concat(l)),e?document.querySelector(".".concat(r,' li[data-product="').concat(e,'"]')):null,l)},_=function(e){S(document.querySelector(".".concat(o," li.").concat(l)),e?document.querySelector(".".concat(o,' li[data-product="').concat(e,'"]')):null,l)},q=function(e,t){return new Date(("string"==typeof e?new Date(e):e).toLocaleString("en-US",{timeZone:t}))},L=function(e){return("0"+e).slice(-2)};function w(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,c=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw c}}}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var A,x=function(r){var o=r.target.dataset.collection;!function(t){S(document.querySelector(".".concat(e," li.").concat(i)),document.querySelector(".".concat(e,' li[data-collection="').concat(t,'"]')),i)}(o),function(e){S(document.querySelectorAll(".".concat(t," li.").concat(l)),document.querySelectorAll(".".concat(t,' li[data-collection="').concat(e,'"]')),l)}(o),function(e){S(document.querySelector(".".concat(n," li.").concat(l)),document.querySelector(".".concat(n,' li[data-collection="').concat(e,'"]')),l)}(o),function(e){S(document.querySelector(".".concat(c,".").concat(l)),document.querySelector(".".concat(c,'[data-collection="').concat(e,'"]')),l)}(o),g(o)},C=function(e){var t=e.target.dataset.product;b(t),_(t),g(t)},I=function(){b(),_(),g()},M=function(){var e=new Date,t=q(e,u);f.innerHTML=L(t.getHours()),m.innerHTML=L(t.getMinutes())},j=w(s);try{for(j.s();!(A=j.n()).done;)A.value.addEventListener("click",x)}catch(e){j.e(e)}finally{j.f()}var k,D,T,H=w(d);try{for(H.s();!(k=H.n()).done;){var O=k.value;O.addEventListener("mouseover",C),O.addEventListener("mouseleave",I)}}catch(e){H.e(e)}finally{H.f()}D=new Date,T=q(D,u),y.innerHTML=L(T.getDate())+"."+L(T.getMonth()+1)+"."+T.getFullYear(),M(),setInterval(M,2500),v&&function(e){var t,n,r,o=e.querySelector(".slideshow__slides"),c=e.querySelector(".slideshow__prev"),a=e.querySelector(".slideshow__next"),l=function(){n.classList.add("current"),t.classList.add("prev"),r.classList.add("next")},i=function(e){var c,a,i,u=["prev","current","next"];if((c=t.classList).remove.apply(c,u),(a=n.classList).remove.apply(a,u),(i=r.classList).remove.apply(i,u),"back"===e){var s=[t.previousElementSibling||o.lastElementChild,t,n];t=s[0],n=s[1],r=s[2]}else{var d=[n,r,r.nextElementSibling||o.firstElementChild];t=d[0],n=d[1],r=d[2]}l()};n=e.querySelector(".current")||o.firstElementChild,t=n.previousElementSibling||o.lastElementChild,r=n.nextElementSibling||o.firstElementChild,l(),c.addEventListener("click",(function(){return i("back")})),a.addEventListener("click",i)}(v)}();