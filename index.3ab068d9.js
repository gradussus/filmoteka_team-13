!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r),r.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return i.default(e)};var n,i=(n=r("8NIkP"))&&n.__esModule?n:{default:n}})),r.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}})),r.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),r.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),r.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return i.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i.default(e,t)};var n,i=(n=r("8NIkP"))&&n.__esModule?n:{default:n}}));var o={backdrop:document.querySelector(".backdrop"),teamLink:document.querySelector(".js-team"),spinerBackdrop:document.querySelector(".spiner__backdrop"),filmsListRef:document.querySelector(".films"),gallery:document.querySelector(".gallery__set"),libGallery:document.querySelector(".lib-gallery__set"),container:document.getElementById("pagination"),galleryGenreItem:document.querySelector(".film__genres"),form:document.querySelector(".header-film__form"),closeModalBtnForOneMovie:document.querySelector(".modal__button"),modalForOneMovie:document.querySelector(".modal"),backdropOneMovie:document.querySelector(".backdrop"),btnAddToWatched:document.querySelector(".btn__modal-add"),btnRemoveFromWatched:document.querySelector(".btn__modal-r-watched"),btnAddToQuene:document.querySelector(".btn__modal-queue"),btnRemoveFromQuene:document.querySelector(".btn__modal-r-queue")},s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e){return a.default(e)||u.default(e)||l.default(e)||c.default()};var a=d(r("kMC0W")),u=d(r("7AJDX")),c=d(r("8CtQK")),l=d(r("auk6i"));function d(e){return e&&e.__esModule?e:{default:e}}var f,p={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,f=function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){"use strict";e.exports=function(e,t){var n,i,r,o,s=Object.prototype.hasOwnProperty;for(r=1,o=arguments.length;r<o;r+=1)for(i in n=arguments[r])s.call(n,i)&&(e[i]=n[i]);return e}},function(e,t,n){"use strict";e.exports=function(e){return void 0===e}},function(e,t,n){"use strict";e.exports=function(e){return e instanceof Array}},function(e,t,n){"use strict";var i=n(2),r=n(17),o=n(6);e.exports=function(e,t,n){i(e)?r(e,t,n):o(e,t,n)}},function(e,t,n){"use strict";e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){"use strict";e.exports=function(e){return e instanceof Function}},function(e,t,n){"use strict";e.exports=function(e,t,n){var i;for(i in n=n||null,e)if(e.hasOwnProperty(i)&&!1===t.call(n,e[i],i,e))break}},function(e,t,n){"use strict";var i=n(18),r=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&i(n,e),t.hasOwnProperty("static")&&(r(n,t.static),delete t.static),r(n.prototype,t),n}},function(e,t,n){"use strict";var i=n(2);e.exports=function(e,t,n){var r,o;if(n=n||0,!i(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(o=t.length,r=n;n>=0&&r<o;r+=1)if(t[r]===e)return r;return-1}},function(e,t,n){"use strict";var i=n(29),r=n(30),o=n(5),s={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),r=o(e)?e(t):i(e,t);return n.innerHTML=r,n.firstChild},bind:function(e,t){var n,i=Array.prototype.slice;return e.bind?e.bind.apply(e,i.call(arguments,1)):(n=i.call(arguments,2),function(){return e.apply(t,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){r("pagination","UA-129987462-1")}};e.exports=s},function(e,t,n){"use strict";n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){"use strict";var i=n(13),r=n(7),o=n(0),s=n(1),a=n(20),u=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=r({init:function(e,t){this._options=o({},c,t),this._currentPage=0,this._view=new a(e,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===e;return this._options.centerAlign?i?t-1:t+n:i?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),i=this._getPageIndex(e),r=this._getPageIndex(n),o=this._getEdge(e);return t.leftPageNumber=o.left,t.rightPageNumber=o.right,t.prevMore=i>1,t.nextMore=i<r,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,i,r=this._getLastPage(),o=this._options.visiblePages,s=this._getPageIndex(e);return this._options.centerAlign?(i=Math.floor(o/2),(n=(t=Math.max(e-i,1))+o-1)>r&&(t=Math.max(r-o+1,1),n=r)):(t=(s-1)*o+1,n=s*o,n=Math.min(n,r)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){s(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(l),e.exports=l},function(e,t,n){"use strict";var i=n(0),r=n(14),o=n(4),s=n(16),a=n(2),u=n(5),c=n(3),l=/\s+/g;function d(){this.events=null,this.contexts=null}d.mixin=function(e){i(e.prototype,d.prototype)},d.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},d.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},d.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},d.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},d.prototype._memorizeContext=function(e){var t,n;r(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},d.prototype._forgetContext=function(e){var t,n;r(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},d.prototype._bindEvent=function(e,t,n){var i=this._safeEvent(e);this._memorizeContext(n),i.push(this._getHandlerItem(t,n))},d.prototype.on=function(e,t,n){var i=this;o(e)?(e=e.split(l),c(e,(function(e){i._bindEvent(e,t,n)}))):s(e)&&(n=t,c(e,(function(e,t){i.on(t,e,n)})))},d.prototype.once=function(e,t,n){var i=this;if(s(e))return n=t,void c(e,(function(e,t){i.once(t,e,n)}));this.on(e,(function r(){t.apply(n,arguments),i.off(e,r,n)}),n)},d.prototype._spliceMatches=function(e,t){var n,i=0;if(a(e))for(n=e.length;i<n;i+=1)!0===t(e[i])&&(e.splice(i,1),n-=1,i-=1)},d.prototype._matchHandler=function(e){var t=this;return function(n){var i=e===n.handler;return i&&t._forgetContext(n.context),i}},d.prototype._matchContext=function(e){var t=this;return function(n){var i=e===n.context;return i&&t._forgetContext(n.context),i}},d.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(i){var r=e===i.handler,o=t===i.context,s=r&&o;return s&&n._forgetContext(i.context),s}},d.prototype._offByEventName=function(e,t){var n=this,i=u(t),r=n._matchHandler(t);e=e.split(l),c(e,(function(e){var t=n._safeEvent(e);i?n._spliceMatches(t,r):(c(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},d.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);c(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},d.prototype._offByObject=function(e,t){var n,i=this;this._indexOfContext(e)<0?c(e,(function(e,t){i.off(t,e)})):o(t)?(n=this._matchContext(e),i._spliceMatches(this._safeEvent(t),n)):u(t)?(n=this._matchHandlerAndContext(t,e),c(this._safeEvent(),(function(e){i._spliceMatches(e,n)}))):(n=this._matchContext(e),c(this._safeEvent(),(function(e){i._spliceMatches(e,n)})))},d.prototype.off=function(e,t){o(e)?this._offByEventName(e,t):arguments.length?u(e)?this._offByHandler(e):s(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},d.prototype.fire=function(e){this.invoke.apply(this,arguments)},d.prototype.invoke=function(e){var t,n,i,r;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),i=0;t[i];){if(!1===(r=t[i]).handler.apply(r.context,n))return!1;i+=1}return!0},d.prototype.hasListener=function(e){return this.getListenerLength(e)>0},d.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=d},function(e,t,n){"use strict";var i=n(1),r=n(15);e.exports=function(e){return!i(e)&&!r(e)}},function(e,t,n){"use strict";e.exports=function(e){return null===e}},function(e,t,n){"use strict";e.exports=function(e){return e===Object(e)}},function(e,t,n){"use strict";e.exports=function(e,t,n){var i=0,r=e.length;for(n=n||null;i<r&&!1!==t.call(n,e[i],i,e);i+=1);}},function(e,t,n){"use strict";var i=n(19);e.exports=function(e,t){var n=i(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){"use strict";e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){"use strict";var i=n(3),r=n(7),o=n(21),s=n(22),a=n(24),u=n(25),c=n(0),l=n(4),d=n(28),f=n(9),p={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},m=["first","prev","next","last"],h=["prev","next"],g=r({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=c({},p,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(l(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!d(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){i(m,(function(e){this._buttons[e]=f.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){i(m,(function(e){var t="disabled"+f.capitalizeFirstLetter(e);this._buttons[t]=f.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){i(h,(function(e){var t=e+"More";this._buttons[t]=f.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,u(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,u(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,i=e.leftPageNumber,r=e.rightPageNumber;for(n=i;n<=r;n+=1)n===e.page?t=f.createElementByTemplate(this._template.currentPage,{page:n}):(t=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==i||e.prevMore||u(t,this._firstItemClassName),n!==r||e.nextMore||u(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();s(t,"click",(function(t){var n,i,r=o(t);a(t),(i=this._getButtonType(r))||(n=this._getPageNumber(r)),e(i,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return i(n,(function(n,i){return!f.isContained(e,n)||(t=i,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(t=this._enabledPageElements[n],f.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=g},function(e,t,n){"use strict";e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){"use strict";var i=n(4),r=n(3),o=n(23);function s(e,t,n,i){function s(t){n.call(i||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,s):"attachEvent"in e&&e.attachEvent("on"+t,s),function(e,t,n,i){var s=o(e,t),a=!1;r(s,(function(e){return e.handler!==n||(a=!0,!1)})),a||s.push({handler:n,wrappedHandler:i})}(e,t,n,s)}e.exports=function(e,t,n,o){i(t)?r(t.split(/\s+/g),(function(t){s(e,t,n,o)})):r(t,(function(t,i){s(e,i,t,n)}))}},function(e,t,n){"use strict";var i="_feEventKey";e.exports=function(e,t){var n,r=e[i];return r||(r=e[i]={}),(n=r[t])||(n=r[t]=[]),n}},function(e,t,n){"use strict";e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){"use strict";var i=n(3),r=n(8),o=n(26),s=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),a=e.classList,u=[];a?i(n,(function(t){e.classList.add(t)})):((t=o(e))&&(n=[].concat(t.split(/\s+/),n)),i(n,(function(e){r(e,u)<0&&u.push(e)})),s(e,u))}},function(e,t,n){"use strict";var i=n(1);e.exports=function(e){return e&&e.className?i(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){"use strict";var i=n(2),r=n(1);e.exports=function(e,t){t=(t=i(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),r(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){"use strict";e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){"use strict";var i=n(8),r=n(3),o=n(2),s=n(4),a=n(0),u=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,d=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,p=/^["']\w+["']$/,m=/"|'/g,h=/^-?\d+\.?\d*$/,g={if:function(e,t,n){var i=function(e,t){var n=[e],i=[],o=0,s=0;return r(t,(function(e,r){0===e.indexOf("if")?o+=1:"/if"===e?o-=1:o||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),i.push(t.slice(s,r)),s=r+1)})),i.push(t.slice(s)),{exps:n,sourcesInsideIf:i}}(e,t),o=!1,s="";return r(i.exps,(function(e,t){return(o=b(e,n))&&(s=x(i.sourcesInsideIf[t],n)),!o})),s},each:function(e,t,n){var i=b(e,n),s=o(i)?"@index":"@key",u={},c="";return r(i,(function(e,i){u[s]=i,u["@this"]=e,a(n,u),c+=x(t.slice(),n)})),c},with:function(e,t,n){var r=i("as",e),o=e[r+1],s=b(e.slice(0,r),n),u={};return u[o]=s,x(t,a(n,u))||""}},v=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,i,r=[],o=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)i=n.index,r.push(e.slice(o,i)),o=i+n[0].length,n=t.exec(e);return r.push(e.slice(o)),r};function _(e,t){var n,i=t[e];return"true"===e?i=!0:"false"===e?i=!1:p.test(e)?i=e.replace(m,""):c.test(e)?i=_((n=e.split(l))[0],t)[_(n[1],t)]:d.test(e)?i=_((n=e.split(f))[0],t)[n[1]]:h.test(e)&&(i=parseFloat(e)),i}function y(e,t,n){for(var i,r,o,a,u=g[e],c=1,l=2,d=t[l];c&&s(d);)0===d.indexOf(e)?c+=1:0===d.indexOf("/"+e)&&(c-=1,i=l),d=t[l+=2];if(c)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=u(t[0].split(" ").slice(1),(r=0,o=i,(a=t.splice(r+1,o-r)).pop(),a),n),t}function b(e,t){var n=_(e[0],t);return n instanceof Function?function(e,t,n){var i=[];return r(t,(function(e){i.push(_(e,n))})),e.apply(null,i)}(n,e.slice(1),t):n}function x(e,t){for(var n,i,r,o=1,a=e[o];s(a);)i=(n=a.split(" "))[0],g[i]?(r=y(i,e.splice(o,e.length-o),t),e=e.concat(r)):e[o]=b(n,t),a=e[o+=2];return e.join("")}e.exports=function(e,t){return x(v(e,u),t)}},function(e,t,n){"use strict";var i=n(1),r=n(31);e.exports=function(e,t){var n=location.hostname,o="TOAST UI "+e+" for "+n+": Statistics",s=window.localStorage.getItem(o);(i(window.tui)||!1!==window.tui.usageStatistics)&&(s&&!function(e){return(new Date).getTime()-e>6048e5}(s)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||r("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){"use strict";var i=n(6);e.exports=function(e,t){var n=document.createElement("img"),r="";return i(t,(function(e,t){r+="&"+t+"="+e})),r=r.substring(1),n.src=e+"?"+r,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},p=f();var m={};Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var h={};function g(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t,n){t&&g(e.prototype,t);n&&g(e,n);return e};var v="0888b454b4f7be0ebcd69ceb372ced29",_="https://api.themoviedb.org/3/";function y(e){e.map((function(e){var t=e.poster_path,n=e.genre_ids,i=e.title,r=e.release_date,o=e.id,s=t?"https://image.tmdb.org/t/p/w500".concat(t):"https://image.tmdb.org/t/p/original/yEvumAoCB9Z7o9dAzjxrjcwo2FQ.jpg";return'<li class="films__item" data-id='.concat(o||"No ID",'>\n                <div class="films__img">\n                    <img src=https://image.tmdb.org/t/p/original').concat(s,' alt="').concat(i||"No title",'" loading="lazy">\n                </div>\n                <div class="films__description">\n                  <p class="films__title">').concat(i||"No title",'</p>\n                  <div class="films__meta">\n                    <span class="films__genres">').concat(b(n,3)||"No genres info",'</span>\n                    <span class="films__sep">|</span>\n                    <span class="films__data">').concat(new Date(r).getFullYear()||"No info","</span>\n                  </div>\n                </div>\n            </li>")})).forEach((function(e){return o.gallery.insertAdjacentHTML("beforeend",e)}))}function b(e,t){for(var n=JSON.parse(localStorage.getItem("genres")),i=[],r=0;r<t&&r<e.length;r++){var o=!0,s=!1,a=void 0;try{for(var u,c=n[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var l=u.value;e[r]===l.id&&i.push(l.name)}}catch(e){s=!0,a=e}finally{try{o||null==c.return||c.return()}finally{if(s)throw a}}}return 0===i.length?"No genres info":(e.length>t&&i.push("Other"),i.join(", "))}var x=new(function(){"use strict";function t(){e(m)(this,t),this.page=1,this.query="",this.results=Number}return e(h)(t,[{key:"fetchTrendingMovies",value:function(){var e=this;return fetch("".concat(_,"trending/movie/day?api_key=").concat(v,"&page=").concat(this.page,"&language=en-US")).then((function(e){return e.json()})).then((function(t){return e.results=t.total_results,t.results}))}},{key:"fetchMovie",value:function(){var e=this;return fetch("".concat(_,"search/movie?api_key=").concat(v,"&query=").concat(this.query,"&page=").concat(this.page,"&language=en-US")).then((function(e){return e.json()})).then((function(t){return e.results=t.total_results,t.results}))}},{key:"fetchGenres",value:function(){return fetch("".concat(_,"genre/movie/list?api_key=").concat(v,"&language=en-US")).then((function(e){return e.json()}))}},{key:"getPage",value:function(){return this.page}},{key:"getResults",value:function(){return this.results}},{key:"setPage",value:function(e){this.page=e}},{key:"setQuery",value:function(e){this.query=e}}]),t}()),L=document.querySelector(".header-film__warning-msg");function S(e){localStorage.setItem("currentFilms",JSON.stringify(e))}function P(){localStorage.removeItem("currentFilms")}var E={totalItems:100,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"};x.fetchGenres().then((function(t){var n=t.genres,i=e(s)(n);localStorage.setItem("genres",JSON.stringify(i))})),x.fetchTrendingMovies().then((function(t){y(t),E.totalItems=x.getResults(),o.gallery.childElementCount>10&&new(e(p))(o.container,E).on("beforeMove",(function(e){o.gallery.innerHTML="",x.setPage(e.page),x.fetchTrendingMovies().then((function(e){!function(e){y(e),P(),S(e),window.scrollTo({top:0,behavior:"smooth"})}(e)})).catch((function(e){return console.log(e)}))})),S(t)})).catch((function(e){return console.log(e)})),o.form.addEventListener("submit",(function(t){t.preventDefault();var n=o.form.firstElementChild.value;if(!n.trim())return L.classList.remove("visually-hidden"),void(o.form.firstElementChild.value="");x.setQuery(n),x.setPage(1),x.fetchMovie().then((function(t){if(!t.length)return L.classList.remove("visually-hidden"),void(o.form.firstElementChild.value="");L.classList.add("visually-hidden"),o.gallery.innerHTML="",P(),S(t),y(t),E.totalItems=x.getResults(),new(e(p))(o.container,E).on("beforeMove",(function(e){o.gallery.innerHTML="";var t=o.form.firstElementChild.value;x.setPage(e.page),x.setQuery(t),x.fetchMovie().then((function(e){P(),S(e),y(e)})).catch((function(e){return console.log(e)}))}))})).catch((function(e){return console.log(e)}))}));var M=function(){"use strict";function t(){e(m)(this,t),this._watchedFilmsList=[],this._queueFilmsList=[],this.refreshData(),this.refreshDataQueue()}return e(h)(t,[{key:"refreshData",value:function(){localStorage.getItem("watched-films")&&(this._watchedFilmsList=JSON.parse(localStorage.getItem("watched-films")))}},{key:"refreshDataQueue",value:function(){localStorage.getItem("queue-films")&&(this._queueFilmsList=JSON.parse(localStorage.getItem("queue-films")))}},{key:"addToWatchedFilms",value:function(e){localStorage.getItem("watched-films")&&(this._watchedFilmsList=JSON.parse(localStorage.getItem("watched-films"))),this._watchedFilmsList.push(e),this.saveWatchedFilms()}},{key:"myAddToQueueFilms",value:function(e){localStorage.getItem("queue-films")&&(this._queueFilmsList=JSON.parse(localStorage.getItem("queue-films"))),this._queueFilmsList.push(e),localStorage.setItem("queue-films",JSON.stringify(this._queueFilmsList))}},{key:"addToQueueFilms",value:function(e){localStorage.getItem("queue-films")&&(this._queueFilmsList=JSON.parse(localStorage.getItem("queue-films"))),this._queueFilmsList.push(e),this.saveQueueFilms()}},{key:"saveWatchedFilms",value:function(){localStorage.setItem("watched-films",JSON.stringify(this._watchedFilmsList))}},{key:"saveQueueFilms",value:function(){localStorage.setItem("queue-films",JSON.stringify(this._queueFilmsList))}},{key:"getWathedFilmsList",value:function(){if(localStorage.getItem("watched-films"))return JSON.parse(localStorage.getItem("watched-films"))}},{key:"getQueueFilmsList",value:function(){if(localStorage.getItem("queue-films"))return JSON.parse(localStorage.getItem("queue-films"))}},{key:"removeFromWatched",value:function(e){if(localStorage.getItem("watched-films")){this._watchedFilmsList=JSON.parse(localStorage.getItem("watched-films"));var t=this._watchedFilmsList.findIndex((function(t){return t.title===e.title}));this._watchedFilmsList.splice(t,1),this.saveWatchedFilms()}}},{key:"removeFromQueue",value:function(e){if(localStorage.getItem("queue-films")){this._queueFilmsList=JSON.parse(localStorage.getItem("queue-films"));var t=this._queueFilmsList.findIndex((function(t){return t.title===e.title}));this._queueFilmsList.splice(t,1),this.saveQueueFilms()}}},{key:"checkFilmInWatchedLocStor",value:function(e){if(localStorage.getItem("watched-films"))return this._watchedFilmsList=JSON.parse(localStorage.getItem("watched-films")),!!this._watchedFilmsList.find((function(t){return t.title===e.title}))}},{key:"checkFilmInQueueLocStor",value:function(e){if(localStorage.getItem("queue-films"))return this._queueFilmsList=JSON.parse(localStorage.getItem("queue-films")),!!this._queueFilmsList.find((function(t){return t.title===e.title}))}}]),t}(),w=document.querySelector(".spiner__backdrop");function I(){w.classList.add("is-hidden"),document.removeEventListener("click",I),window.removeEventListener("load",I)}window.addEventListener("load",I),new Promise((function(e,t){setTimeout(e,2e3)})).then((function(){w.classList.add("hidden")}));var k,C,F,O;document.querySelector(".modal__wrap");o.closeModalBtnForOneMovie.addEventListener("click",(function(){o.backdropOneMovie.classList.add("is-hidden"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",T),document.removeEventListener("click",B)})),o.gallery.addEventListener("click",(function(e){if(!function(e){var t=e.target.nodeName;return"DIV"===t||"IMG"===t||"P"===t||"SPAN"===t}(e))return;o.backdropOneMovie.classList.remove("is-hidden"),document.body.classList.add("modal-open");var t=(n=e.target.alt,i=A(),N=i.find((function(e){return e.original_title===n})));var n,i;renderOneMovieForModal(t),I(),k=document.querySelector(".btn__modal-add"),C=document.querySelector(".btn__modal-queue"),O=document.querySelector(".btn__modal-r-queue"),F=document.querySelector(".btn__modal-r-watched"),k.addEventListener("click",j),F.addEventListener("click",H),C.addEventListener("click",D),O.addEventListener("click",Q),document.addEventListener("keydown",T),document.addEventListener("click",B),q.checkFilmInWatchedLocStor(t)&&(k.classList.add("is-hidden"),F.classList.remove("is-hidden"));q.checkFilmInQueueLocStor(t)&&(C.classList.add("is-hidden"),O.classList.remove("is-hidden"))}));var N={},q=new M;function T(e){"Escape"==e.code&&(o.backdropOneMovie.classList.add("is-hidden"),document.body.classList.remove("modal-open"))}function B(e){e.target==o.backdropOneMovie&&(o.backdropOneMovie.classList.add("is-hidden"),document.body.classList.remove("modal-open"))}function A(){return JSON.parse(localStorage.getItem("currentFilms"))}function j(){q.refreshData(),q.addToWatchedFilms(N),q.saveWatchedFilms(),k.classList.add("is-hidden"),F.classList.remove("is-hidden")}function D(){q.myAddToQueueFilms(N),C.classList.add("is-hidden"),O.classList.remove("is-hidden")}function H(){k.classList.remove("is-hidden"),F.classList.add("is-hidden"),q.removeFromWatched(N)}function Q(){C.classList.remove("is-hidden"),O.classList.add("is-hidden"),q.removeFromQueue(N)}A();var J={modal:document.querySelector("[data-modal-footer]"),closeBtn:document.querySelector(".footer-modal__closeBtn"),openFooterModalBtn:document.querySelector(".js-team")};function W(e){"Escape"===e.code&&(J.modal.classList.add("is-hidden"),document.removeEventListener("keydown",W),document.removeEventListener("click",R))}function R(e){e.target===J.modal&&(J.modal.classList.add("is-hidden"),document.removeEventListener("click",R),document.removeEventListener("keydown",W))}J.openFooterModalBtn.addEventListener("click",(function(e){e.preventDefault(),J.modal.classList.remove("is-hidden"),document.addEventListener("keydown",W),document.addEventListener("click",R)})),J.closeBtn.addEventListener("click",(function(e){e.preventDefault(),J.modal.classList.add("is-hidden"),document.removeEventListener("keydown",W),document.removeEventListener("click",R)}));var z=document.querySelector(".scroll-btn");window.onscroll=function(){document.body.scrollTop>30||document.documentElement.scrollTop>30?z.style.display="flex":z.style.display="none"}}();
//# sourceMappingURL=index.3ab068d9.js.map