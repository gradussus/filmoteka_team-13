!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}}));o("4Nugj");var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return s.default(e)||a.default(e)||d.default(e)||c.default()};var s=l(o("kMC0W")),a=l(o("7AJDX")),c=l(o("8CtQK")),d=l(o("auk6i"));function l(e){return e&&e.__esModule?e:{default:e}}var u=o("1VFfL"),f=o("8MBJY"),m=o("a2hTj"),v="0888b454b4f7be0ebcd69ceb372ced29",p="https://api.themoviedb.org/3/",h=function(){"use strict";function t(){e(f)(this,t),this.page=1,this.query="",this.results=Number}return e(m)(t,[{key:"fetchTrendingMovies",value:function(){var e=this;return fetch("".concat(p,"trending/movie/day?api_key=").concat(v,"&page=").concat(this.page,"&language=en-US")).then((function(e){return e.json()})).then((function(t){return e.results=t.total_results,t.results}))}},{key:"fetchMovie",value:function(){var e=this;return fetch("".concat(p,"search/movie?api_key=").concat(v,"&query=").concat(this.query,"&page=").concat(this.page,"&language=en-US")).then((function(e){return e.json()})).then((function(t){return e.results=t.total_results,t.results}))}},{key:"fetchGenres",value:function(){return fetch("".concat(p,"genre/movie/list?api_key=").concat(v,"&language=en-US")).then((function(e){return e.json()}))}},{key:"getPage",value:function(){return this.page}},{key:"getResults",value:function(){return this.results}},{key:"setPage",value:function(e){this.page=e}},{key:"setQuery",value:function(e){this.query=e}}]),t}(),g=o("kKCqO"),_=o("4Nugj"),b=document.querySelector(".spiner__backdrop");function y(){b.classList.add("is-hidden"),document.removeEventListener("click",y),window.removeEventListener("load",y)}function L(){b.classList.remove("is-hidden"),document.removeEventListener("click",L)}window.addEventListener("load",y),new Promise((function(e,t){setTimeout(e,2e3)})).then((function(){b.classList.add("hidden")}));var k=new h,w=document.querySelector(".header-film__warning-msg");function M(e){localStorage.setItem("currentFilms",JSON.stringify(e))}function E(){localStorage.removeItem("currentFilms")}var S={totalItems:100,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"};k.fetchGenres().then((function(t){var n=t.genres,r=e(i)(n);localStorage.setItem("genres",JSON.stringify(r))})),k.fetchTrendingMovies().then((function(t){(0,g.renderFilmsMarkup)(t),S.totalItems=k.getResults(),_.refs.gallery.childElementCount>10&&new(e(u))(_.refs.container,S).on("beforeMove",(function(e){_.refs.gallery.innerHTML="",L(),k.setPage(e.page),k.fetchTrendingMovies().then((function(e){!function(e){L(),(0,g.renderFilmsMarkup)(e),y(),E(),M(e),window.scrollTo({top:0,behavior:"smooth"})}(e),y()})).catch((function(e){return console.log(e)}))})),M(t)})).catch((function(e){return console.log(e)})),_.refs.form.addEventListener("submit",(function(t){t.preventDefault(),L();var n=_.refs.form.firstElementChild.value;if(!n.trim())return w.classList.remove("visually-hidden"),_.refs.form.firstElementChild.value="",void y();k.setQuery(n),k.setPage(1),k.fetchMovie().then((function(t){if(!t.length)return w.classList.remove("visually-hidden"),_.refs.form.firstElementChild.value="",void y();w.classList.add("visually-hidden"),_.refs.gallery.innerHTML="",E(),M(t),(0,g.renderFilmsMarkup)(t),y(),S.totalItems=k.getResults(),new(e(u))(_.refs.container,S).on("beforeMove",(function(e){_.refs.gallery.innerHTML="";var t=_.refs.form.firstElementChild.value;k.setPage(e.page),k.setQuery(t),L(),k.fetchMovie().then((function(e){E(),M(e),(0,g.renderFilmsMarkup)(e),y()})).catch((function(e){return console.log(e)}))}))})).catch((function(e){return console.log(e)}))}));_=o("4Nugj"),g=o("kKCqO"),g=o("kKCqO");var q,O,N,F,T=o("lWBva"),P=document.querySelector(".modal__wrap");_.refs.closeModalBtnForOneMovie.addEventListener("click",(function(){_.refs.backdropOneMovie.classList.add("is-hidden"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",I),document.removeEventListener("click",C)})),_.refs.gallery.addEventListener("click",(function(e){if(!function(e){var t=e.target.nodeName;return"DIV"===t||"IMG"===t||"P"===t||"SPAN"===t}(e))return;_.refs.backdropOneMovie.classList.remove("is-hidden"),document.body.classList.add("modal-open");var t=(n=e.target.alt,r=A(),j=r.find((function(e){return e.original_title===n})));var n,r;(function(e){var t=e.genre_ids,n=e.poster_path,r=e.original_title,o=e.overview,i=e.popularity,s=e.title,a=e.vote_average,c=e.vote_count;P.innerHTML="";var d=n?"https://image.tmdb.org/t/p/w500".concat(n):"https://image.tmdb.org/t/p/w500/yEvumAoCB9Z7o9dAzjxrjcwo2FQ.jpg";P.innerHTML='\n  <div class="image__wrap">\n    <img class="image" src="https://image.tmdb.org/t/p/original'.concat(d,'" alt="').concat(s||"No title",'" />\n  </div>\n  <div class="description__wrap">\n    <h1 class="description__title">').concat(s||"No title",'</h1>\n    <table>\n      <tr class="table__wrap">\n        <td class="description__table">Vote / Votes</td>\n        <td class="description__table-result">\n          <span class="votes">').concat(a.toFixed(1)||"No data","</span> /").concat(c||"No data",'\n        </td>\n      </tr>\n      <tr class="table__wrap">\n        <td class="description__table">Popularity</td>\n        <td class="description__table-result">').concat(i.toFixed(1)||"No data",'</td>\n      </tr>\n      <tr class="table__wrap">\n        <td class="description__table">Original Title</td>\n        <td class="description__table-result">').concat(r||"No original title",'</td>\n      </tr>\n\n      <tr class="table__wrap">\n        <td class="description__table">Genre</td>\n        <td class="description__table-result">').concat((0,g.getGenres)(t,100)||"No genres info",'</td>\n      </tr>\n    </table>\n    <p class="descrption__about">ABOUT</p>\n    <p class="description__text">\n     ').concat(o||"There is no imformation about this movie",'\n    </p>\n    <ul class="btn__wrap">\n      <li>\n        <button class="btn btn__modal-add">add to Watched</button>\n        <button class="btn btn__modal-r-watched is-hidden">remove from Watched</button>\n      </li>\n      <li>\n        <button class="btn btn__modal-queue">add to queue</button>\n        <button class="btn btn__modal-r-queue is-hidden">remove from queue</button>\n      </li>\n    </ul>\n  </div>\n')})(t),y(),q=document.querySelector(".btn__modal-add"),O=document.querySelector(".btn__modal-queue"),F=document.querySelector(".btn__modal-r-queue"),N=document.querySelector(".btn__modal-r-watched"),q.addEventListener("click",B),N.addEventListener("click",D),O.addEventListener("click",W),F.addEventListener("click",Q),document.addEventListener("keydown",I),document.addEventListener("click",C),x.checkFilmInWatchedLocStor(t)&&(q.classList.add("is-hidden"),N.classList.remove("is-hidden"));x.checkFilmInQueueLocStor(t)&&(O.classList.add("is-hidden"),F.classList.remove("is-hidden"))}));var j={},x=new(0,T.default);function I(e){"Escape"==e.code&&(_.refs.backdropOneMovie.classList.add("is-hidden"),document.body.classList.remove("modal-open"))}function C(e){e.target==_.refs.backdropOneMovie&&(_.refs.backdropOneMovie.classList.add("is-hidden"),document.body.classList.remove("modal-open"))}function A(){return JSON.parse(localStorage.getItem("currentFilms"))}function B(){x.refreshData(),x.addToWatchedFilms(j),x.saveWatchedFilms(),q.classList.add("is-hidden"),N.classList.remove("is-hidden")}function W(){x.myAddToQueueFilms(j),O.classList.add("is-hidden"),F.classList.remove("is-hidden")}function D(){q.classList.remove("is-hidden"),N.classList.add("is-hidden"),x.removeFromWatched(j)}function Q(){O.classList.remove("is-hidden"),F.classList.add("is-hidden"),x.removeFromQueue(j)}A();var U={modal:document.querySelector("[data-modal-footer]"),closeBtn:document.querySelector(".footer-modal__closeBtn"),openFooterModalBtn:document.querySelector(".js-team")};function J(e){"Escape"===e.code&&(U.modal.classList.add("is-hidden"),document.removeEventListener("keydown",J),document.removeEventListener("click",K))}function K(e){e.target===U.modal&&(U.modal.classList.add("is-hidden"),document.removeEventListener("click",K),document.removeEventListener("keydown",J))}U.openFooterModalBtn.addEventListener("click",(function(e){e.preventDefault(),U.modal.classList.remove("is-hidden"),document.addEventListener("keydown",J),document.addEventListener("click",K)})),U.closeBtn.addEventListener("click",(function(e){e.preventDefault(),U.modal.classList.add("is-hidden"),document.removeEventListener("keydown",J),document.removeEventListener("click",K)})),o("kKCqO");var G=document.querySelector(".scroll-btn");window.onscroll=function(){document.body.scrollTop>30||document.documentElement.scrollTop>30?G.style.display="flex":G.style.display="none"},o("lWBva")}();
//# sourceMappingURL=index.cd007942.js.map
