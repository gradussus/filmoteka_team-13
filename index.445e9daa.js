function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=e.parcelRequired7c6;null==s&&((s=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var s={id:t,exports:{}};return n[t]=s,e.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequired7c6=s),s.register("krGWQ",(function(e,n){t(e.exports,"refs",(function(){return i}));const i={backdrop:document.querySelector(".backdrop"),teamLink:document.querySelector(".js-team"),spinerBackdrop:document.querySelector(".spiner__backdrop"),filmsListRef:document.querySelector(".films"),gallery:document.querySelector(".gallery__set"),libGallery:document.querySelector(".lib-gallery__set"),container:document.getElementById("pagination"),galleryGenreItem:document.querySelector(".film__genres"),form:document.querySelector(".header-film__form"),closeModalBtnForOneMovie:document.querySelector(".modal__button"),modalForOneMovie:document.querySelector(".modal"),backdropOneMovie:document.querySelector(".backdrop"),btnAddToWatched:document.querySelector(".btn__modal-add"),btnRemoveFromWatched:document.querySelector(".btn__modal-r-watched"),btnAddToQuene:document.querySelector(".btn__modal-queue"),btnRemoveFromQuene:document.querySelector(".btn__modal-r-queue")}})),s.register("fb9GJ",(function(t,e){
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
var n;window,n=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,i,s,o,r=Object.prototype.hasOwnProperty;for(s=1,o=arguments.length;s<o;s+=1)for(i in n=arguments[s])r.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var i=n(2),s=n(17),o=n(6);t.exports=function(t,e,n){i(t)?s(t,e,n):o(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){var i=n(18),s=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(s(n,e.static),delete e.static),s(n.prototype,e),n}},function(t,e,n){var i=n(2);t.exports=function(t,e,n){var s,o;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(o=e.length,s=n;n>=0&&s<o;s+=1)if(e[s]===t)return s;return-1}},function(t,e,n){var i=n(29),s=n(30),o=n(5),r={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),s=o(t)?t(e):i(t,e);return n.innerHTML=s,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){s("pagination","UA-129987462-1")}};t.exports=r},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var i=n(13),s=n(7),o=n(0),r=n(1),a=n(20),l=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},c=s({init:function(t,e){this._options=o({},u,e),this._currentPage=0,this._view=new a(t,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),s=this._getPageIndex(n),o=this._getEdge(t);return e.leftPageNumber=o.left,e.rightPageNumber=o.right,e.prevMore=i>1,e.nextMore=i<s,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,s=this._getLastPage(),o=this._options.visiblePages,r=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(o/2),(n=(e=Math.max(t-i,1))+o-1)>s&&(e=Math.max(s-o+1,1),n=s)):(e=(r-1)*o+1,n=r*o,n=Math.min(n,s)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){r(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(c),t.exports=c},function(t,e,n){var i=n(0),s=n(14),o=n(4),r=n(16),a=n(2),l=n(5),u=n(3),c=/\s+/g;function f(){this.events=null,this.contexts=null}f.mixin=function(t){i(t.prototype,f.prototype)},f.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},f.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},f.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},f.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},f.prototype._memorizeContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},f.prototype._forgetContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},f.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},f.prototype.on=function(t,e,n){var i=this;o(t)?(t=t.split(c),u(t,(function(t){i._bindEvent(t,e,n)}))):r(t)&&(n=e,u(t,(function(t,e){i.on(e,t,n)})))},f.prototype.once=function(t,e,n){var i=this;if(r(t))return n=e,void u(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function s(){e.apply(n,arguments),i.off(t,s,n)}),n)},f.prototype._spliceMatches=function(t,e){var n,i=0;if(a(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},f.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},f.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},f.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var s=t===i.handler,o=e===i.context,r=s&&o;return r&&n._forgetContext(i.context),r}},f.prototype._offByEventName=function(t,e){var n=this,i=l(e),s=n._matchHandler(e);t=t.split(c),u(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,s):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},f.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},f.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?u(t,(function(t,e){i.off(e,t)})):o(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):l(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},f.prototype.off=function(t,e){o(t)?this._offByEventName(t,e):arguments.length?l(t)?this._offByHandler(t):r(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},f.prototype.fire=function(t){this.invoke.apply(this,arguments)},f.prototype.invoke=function(t){var e,n,i,s;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(s=e[i]).handler.apply(s.context,n))return!1;i+=1}return!0},f.prototype.hasListener=function(t){return this.getListenerLength(t)>0},f.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=f},function(t,e,n){var i=n(1),s=n(15);t.exports=function(t){return!i(t)&&!s(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var i=0,s=t.length;for(n=n||null;i<s&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var i=n(3),s=n(7),o=n(21),r=n(22),a=n(24),l=n(25),u=n(0),c=n(4),f=n(28),p=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},d=["first","prev","next","last"],m=["prev","next"],g=s({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},h,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(c(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!f(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(d,(function(t){this._buttons[t]=p.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(d,(function(t){var e="disabled"+p.capitalizeFirstLetter(t);this._buttons[e]=p.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(m,(function(t){var e=t+"More";this._buttons[e]=p.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,l(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,l(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,s=t.rightPageNumber;for(n=i;n<=s;n+=1)n===t.page?e=p.createElementByTemplate(this._template.currentPage,{page:n}):(e=p.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||l(e,this._firstItemClassName),n!==s||t.nextMore||l(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();r(e,"click",(function(e){var n,i,s=o(e);a(e),(i=this._getButtonType(s))||(n=this._getPageNumber(s)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!p.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],p.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=g},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var i=n(4),s=n(3),o=n(23);function r(t,e,n,i){function r(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,r):"attachEvent"in t&&t.attachEvent("on"+e,r),function(t,e,n,i){var r=o(t,e),a=!1;s(r,(function(t){return t.handler!==n||(a=!0,!1)})),a||r.push({handler:n,wrappedHandler:i})}(t,e,n,r)}t.exports=function(t,e,n,o){i(e)?s(e.split(/\s+/g),(function(e){r(t,e,n,o)})):s(e,(function(e,i){r(t,i,e,n)}))}},function(t,e,n){var i="_feEventKey";t.exports=function(t,e){var n,s=t[i];return s||(s=t[i]={}),(n=s[e])||(n=s[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var i=n(3),s=n(8),o=n(26),r=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,l=[];a?i(n,(function(e){t.classList.add(e)})):((e=o(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){s(t,l)<0&&l.push(t)})),r(t,l))}},function(t,e,n){var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var i=n(2),s=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),s(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var i=n(8),s=n(3),o=n(2),r=n(4),a=n(0),l=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,c=/\[\s?|\s?\]/,f=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,p=/\./,h=/^["']\w+["']$/,d=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],o=0,r=0;return s(e,(function(t,s){0===t.indexOf("if")?o+=1:"/if"===t?o-=1:o||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(r,s)),r=s+1)})),i.push(e.slice(r)),{exps:n,sourcesInsideIf:i}}(t,e),o=!1,r="";return s(i.exps,(function(t,e){return(o=y(t,n))&&(r=b(i.sourcesInsideIf[e],n)),!o})),r},each:function(t,e,n){var i=y(t,n),r=o(i)?"@index":"@key",l={},u="";return s(i,(function(t,i){l[r]=i,l["@this"]=t,a(n,l),u+=b(e.slice(),n)})),u},with:function(t,e,n){var s=i("as",t),o=t[s+1],r=y(t.slice(0,s),n),l={};return l[o]=r,b(e,a(n,l))||""}},_=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,s=[],o=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,s.push(t.slice(o,i)),o=i+n[0].length,n=e.exec(t);return s.push(t.slice(o)),s};function v(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:h.test(t)?i=t.replace(d,""):u.test(t)?i=v((n=t.split(c))[0],e)[v(n[1],e)]:f.test(t)?i=v((n=t.split(p))[0],e)[n[1]]:m.test(t)&&(i=parseFloat(t)),i}function x(t,e,n){for(var i,s,o,a,l=g[t],u=1,c=2,f=e[c];u&&r(f);)0===f.indexOf(t)?u+=1:0===f.indexOf("/"+t)&&(u-=1,i=c),f=e[c+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=l(e[0].split(" ").slice(1),(s=0,o=i,(a=e.splice(s+1,o-s)).pop(),a),n),e}function y(t,e){var n=v(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return s(e,(function(t){i.push(v(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function b(t,e){for(var n,i,s,o=1,a=t[o];r(a);)i=(n=a.split(" "))[0],g[i]?(s=x(i,t.splice(o,t.length-o),e),t=t.concat(s)):t[o]=y(n,e),a=t[o+=2];return t.join("")}t.exports=function(t,e){return b(_(t,l),e)}},function(t,e,n){var i=n(1),s=n(31);t.exports=function(t,e){var n=location.hostname,o="TOAST UI "+t+" for "+n+": Statistics",r=window.localStorage.getItem(o);(i(window.tui)||!1!==window.tui.usageStatistics)&&(r&&!function(t){return(new Date).getTime()-t>6048e5}(r)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||s("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),s="";return i(e,(function(t,e){s+="&"+e+"="+t})),s=s.substring(1),n.src=t+"?"+s,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},t.exports=n()})),s.register("ljBKB",(function(e,n){t(e.exports,"renderFilmsMarkup",(function(){return o})),t(e.exports,"getGenres",(function(){return r})),t(e.exports,"renderFilmsLibrary",(function(){return a}));var i=s("krGWQ");function o(t){t.map((({poster_path:t,genre_ids:e,title:n,release_date:i,id:s})=>`<li class="films__item" data-id=${s||"No ID"}>\n                <div class="films__img">\n                    <img src=https://image.tmdb.org/t/p/original${t?`https://image.tmdb.org/t/p/w500${t}`:"https://image.tmdb.org/t/p/w500/yEvumAoCB9Z7o9dAzjxrjcwo2FQ.jpg"} alt="${n||"No title"}" loading="lazy">\n                </div>\n                <div class="films__description">\n                  <p class="films__title">${n||"No title"}</p>\n                  <div class="films__meta">\n                    <span class="films__genres">${r(e,3)||"No genres info"}</span>\n                    <span class="films__sep">|</span>\n                    <span class="films__data">${new Date(i).getFullYear()||"No info"}</span>\n                  </div>\n                </div>\n            </li>`)).forEach((t=>i.refs.gallery.insertAdjacentHTML("beforeend",t)))}function r(t,e){const n=JSON.parse(localStorage.getItem("genres")),i=[];for(let s=0;s<e&&s<t.length;s++)for(const e of n)t[s]===e.id&&i.push(e.name);return 0===i.length?"No genres info":(t.length>e&&i.push("Other"),i.join(", "))}function a(t){t.map((({poster_path:t,genre_ids:e,title:n,release_date:i,id:s})=>`<li class="films__item" data-id=${s||"No ID"}>\n                <div class="films__img">\n                    <img src=https://image.tmdb.org/t/p/original${t?`https://image.tmdb.org/t/p/w500${t}`:"https://image.tmdb.org/t/p/w500/yEvumAoCB9Z7o9dAzjxrjcwo2FQ.jpg"} alt="${n||"No title"}" loading="lazy">\n                </div>\n                <div class="films__description">\n                  <p class="films__title">${n||"No title"}</p>\n                  <div class="films__meta">\n\n                    <span class="films__genres">${r(e,100)||"No genres info"}</span>\n\n                    <span class="films__sep">|</span>\n                    <span class="films__data">${new Date(i).getFullYear()||"No info"}</span>\n                  </div>\n                </div>\n            </li>`)).forEach((t=>i.refs.libGallery.insertAdjacentHTML("beforeend",t)))}})),s.register("jew7v",(function(e,n){t(e.exports,"default",(function(){return i}));class i{refreshData(){localStorage.getItem("watched-films")&&(this._watchedFilmsList=JSON.parse(localStorage.getItem("watched-films")))}refreshDataQueue(){localStorage.getItem("queue-films")&&(this._queueFilmsList=JSON.parse(localStorage.getItem("queue-films")))}addToWatchedFilms(t){localStorage.getItem("watched-films")&&(this._watchedFilmsList=JSON.parse(localStorage.getItem("watched-films"))),this._watchedFilmsList.push(t),this.saveWatchedFilms()}myAddToQueueFilms(t){localStorage.getItem("queue-films")&&(this._queueFilmsList=JSON.parse(localStorage.getItem("queue-films"))),this._queueFilmsList.push(t),localStorage.setItem("queue-films",JSON.stringify(this._queueFilmsList))}addToQueueFilms(t){localStorage.getItem("queue-films")&&(this._queueFilmsList=JSON.parse(localStorage.getItem("queue-films"))),this._queueFilmsList.push(t),this.saveQueueFilms()}saveWatchedFilms(){localStorage.setItem("watched-films",JSON.stringify(this._watchedFilmsList))}saveQueueFilms(){localStorage.setItem("queue-films",JSON.stringify(this._queueFilmsList))}getWathedFilmsList(){if(localStorage.getItem("watched-films"))return JSON.parse(localStorage.getItem("watched-films"))}getQueueFilmsList(){if(localStorage.getItem("queue-films"))return JSON.parse(localStorage.getItem("queue-films"))}removeFromWatched(t){if(!localStorage.getItem("watched-films"))return;this._watchedFilmsList=JSON.parse(localStorage.getItem("watched-films"));const e=this._watchedFilmsList.findIndex((e=>e.title===t.title));this._watchedFilmsList.splice(e,1),this.saveWatchedFilms()}removeFromQueue(t){if(!localStorage.getItem("queue-films"))return;this._queueFilmsList=JSON.parse(localStorage.getItem("queue-films"));const e=this._queueFilmsList.findIndex((e=>e.title===t.title));this._queueFilmsList.splice(e,1),this.saveQueueFilms()}checkFilmInWatchedLocStor(t){if(!localStorage.getItem("watched-films"))return;this._watchedFilmsList=JSON.parse(localStorage.getItem("watched-films"));return!!this._watchedFilmsList.find((e=>e.title===t.title))}checkFilmInQueueLocStor(t){if(!localStorage.getItem("queue-films"))return;this._queueFilmsList=JSON.parse(localStorage.getItem("queue-films"));return!!this._queueFilmsList.find((e=>e.title===t.title))}constructor(){this._watchedFilmsList=[],this._queueFilmsList=[],this.refreshData(),this.refreshDataQueue()}}}));
//# sourceMappingURL=index.445e9daa.js.map
