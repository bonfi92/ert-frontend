!function(){"use strict";function t(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,c=function(){};return{s:c,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var n="list-container--collections",r="list-container--products",o="list-container--years",c="list-container--descriptions",a="list-container--specifics",i="visible",l="active",u=document.querySelectorAll(".".concat(n," li")),f=document.querySelectorAll(".".concat(r," li")),s=function(e,n,r){if(e)if(void 0!==e.length){var o,c=t(e);try{for(c.s();!(o=c.n()).done;)o.value.classList.remove(r)}catch(t){c.e(t)}finally{c.f()}}else e.classList.remove(r);if(n)if(void 0!==n.length){var a,i=t(n);try{for(i.s();!(a=i.n()).done;)a.value.classList.add(r)}catch(t){i.e(t)}finally{i.f()}}else n.classList.add(r)},d=function(t){s(document.querySelector(".".concat(c," li.").concat(i)),t?document.querySelector(".".concat(c,' li[data-product="').concat(t,'"]')):null,i)},y=function(t){s(document.querySelector(".".concat(a," li.").concat(i)),t?document.querySelector(".".concat(a,' li[data-product="').concat(t,'"]')):null,i)};function v(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,i=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){i=!0,c=t},f:function(){try{a||null==n.return||n.return()}finally{if(i)throw c}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var p,h=function(t){var e,c=t.target.dataset,a=c.collection,u=c.image;!function(t){s(document.querySelector(".".concat(n," li.").concat(l)),document.querySelector(".".concat(n,' li[data-collection="').concat(t,'"]')),l)}(a),function(t){s(document.querySelectorAll(".".concat(r," li.").concat(i)),document.querySelectorAll(".".concat(r,' li[data-collection="').concat(t,'"]')),i)}(a),function(t){s(document.querySelector(".".concat(o," li.").concat(i)),document.querySelector(".".concat(o,' li[data-collection="').concat(t,'"]')),i)}(a),e=u,document.querySelector(".preview-image").src=e},S=function(t){var e=t.target.dataset.product;d(e),y(e)},b=function(){d(),y()},g=v(u);try{for(g.s();!(p=g.n()).done;)p.value.addEventListener("click",h)}catch(t){g.e(t)}finally{g.f()}var A,q=v(f);try{for(q.s();!(A=q.n()).done;){var w=A.value;w.addEventListener("mouseover",S),w.addEventListener("mouseleave",b)}}catch(t){q.e(t)}finally{q.f()}}();