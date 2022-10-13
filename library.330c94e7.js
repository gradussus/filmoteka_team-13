!function(){function e(e){return e&&e.__esModule?e.default:e}var t={modal:document.querySelector("[data-modal-footer]"),closeBtn:document.querySelector(".footer-modal__closeBtn"),openFooterModalBtn:document.querySelector(".js-team")};function n(e){"Escape"===e.code&&(t.modal.classList.add("is-hidden"),document.removeEventListener("keydown",n),document.removeEventListener("click",i))}function i(e){e.target===t.modal&&(t.modal.classList.add("is-hidden"),document.removeEventListener("click",i),document.removeEventListener("keydown",n))}t.openFooterModalBtn.addEventListener("click",(function(e){e.preventDefault(),t.modal.classList.remove("is-hidden"),document.addEventListener("keydown",n),document.addEventListener("click",i)})),t.closeBtn.addEventListener("click",(function(e){e.preventDefault(),t.modal.classList.add("is-hidden"),document.removeEventListener("keydown",n),document.removeEventListener("click",i)}));var a={backdrop:document.querySelector(".backdrop"),teamLink:document.querySelector(".js-team"),spinerBackdrop:document.querySelector(".spiner__backdrop"),filmsListRef:document.querySelector(".films"),gallery:document.querySelector(".gallery__set"),libGallery:document.querySelector(".lib-gallery__set"),container:document.getElementById("pagination"),galleryGenreItem:document.querySelector(".film__genres"),form:document.querySelector(".header-film__form"),closeModalBtnForOneMovie:document.querySelector(".modal__button"),modalForOneMovie:document.querySelector(".modal"),backdropOneMovie:document.querySelector(".backdrop"),btnAddToWatched:document.querySelector(".btn__modal-add"),btnRemoveFromWatched:document.querySelector(".btn__modal-r-watched"),btnAddToQuene:document.querySelector(".btn__modal-queue"),btnRemoveFromQuene:document.querySelector(".btn__modal-r-queue")};function s(e,t){for(var n=JSON.parse(localStorage.getItem("genres")),i=[],a=0;a<t&&a<e.length;a++){var s=!0,o=!1,l=void 0;try{for(var r,c=n[Symbol.iterator]();!(s=(r=c.next()).done);s=!0){var d=r.value;e[a]===d.id&&i.push(d.name)}}catch(e){o=!0,l=e}finally{try{s||null==c.return||c.return()}finally{if(o)throw l}}}return e.length>t&&i.splice(t-1,1,"Other"),i.join(", ")}function o(e){if(e)return e.length?void e.map((function(e){var t=e.poster_path,n=e.genre_ids,i=e.title,a=e.release_date,o=e.id,l=t?"https://image.tmdb.org/t/p/w500".concat(t):"https://image.tmdb.org/t/p/w500/yEvumAoCB9Z7o9dAzjxrjcwo2FQ.jpg";return'<li class="films__item" id='.concat(o||"No ID",'>\n                <div class="films__img">\n                    <img src=https://image.tmdb.org/t/p/original').concat(l,' alt="').concat(i||"No title",'" loading="lazy">\n                </div>\n                <div class="films__description">\n                  <p class="films__title">').concat(i||"No title",'</p>\n                  <div class="films__meta">\n\n                    <span class="films__genres">').concat(s(n,100)||"No genres info",'</span>\n\n                    <span class="films__sep">|</span>\n                    <span class="films__data">').concat(new Date(a).getFullYear()||"No info","</span>\n                  </div>\n                </div>\n            </li>")})).forEach((function(e){return a.libGallery.insertAdjacentHTML("beforeend",e)})):void l();l()}function l(){var e=document.createElement("IMG");e.src="https://pixabay.com/get/ge54d4ab7e47d1dcaa072c16cfc25f8a2bb8767deab654c65a06e780c723be590c8fbd2ff489664d51e29ce30406501db7d6e0da15783af39347f3587196c4e6d_1280.jpg",e.alt="image",e.width="700",a.libGallery.append(e)}var r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var c={};function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t,n){t&&d(e.prototype,t);n&&d(e,n);return e};var u,m,f,h,v=new(function(){"use strict";function t(){e(r)(this,t),this._watchedFilmsList=[],this._queueFilmsList=[],this.refreshData(),this.refreshDataQueue()}return e(c)(t,[{key:"refreshData",value:function(){localStorage.getItem("watched-films")&&(this._watchedFilmsList=JSON.parse(localStorage.getItem("watched-films")))}},{key:"refreshDataQueue",value:function(){localStorage.getItem("queue-films")&&(this._queueFilmsList=JSON.parse(localStorage.getItem("queue-films")))}},{key:"addToWatchedFilms",value:function(e){localStorage.getItem("watched-films")&&(this._watchedFilmsList=JSON.parse(localStorage.getItem("watched-films"))),this._watchedFilmsList.push(e),this.saveWatchedFilms()}},{key:"myAddToQueueFilms",value:function(e){localStorage.getItem("queue-films")&&(this._queueFilmsList=JSON.parse(localStorage.getItem("queue-films"))),this._queueFilmsList.push(e),localStorage.setItem("queue-films",JSON.stringify(this._queueFilmsList))}},{key:"addToQueueFilms",value:function(e){localStorage.getItem("queue-films")&&(this._queueFilmsList=JSON.parse(localStorage.getItem("queue-films"))),this._queueFilmsList.push(e),this.saveQueueFilms()}},{key:"saveWatchedFilms",value:function(){localStorage.setItem("watched-films",JSON.stringify(this._watchedFilmsList))}},{key:"saveQueueFilms",value:function(){localStorage.setItem("queue-films",JSON.stringify(this._queueFilmsList))}},{key:"getWathedFilmsList",value:function(){if(localStorage.getItem("watched-films"))return JSON.parse(localStorage.getItem("watched-films"))}},{key:"getQueueFilmsList",value:function(){if(localStorage.getItem("queue-films"))return JSON.parse(localStorage.getItem("queue-films"))}},{key:"removeFromWatched",value:function(e){if(localStorage.getItem("watched-films")){this._watchedFilmsList=JSON.parse(localStorage.getItem("watched-films"));var t=this._watchedFilmsList.findIndex((function(t){return t.title===e.title}));this._watchedFilmsList.splice(t,1),this.saveWatchedFilms()}}},{key:"removeFromQueue",value:function(e){if(localStorage.getItem("queue-films")){this._queueFilmsList=JSON.parse(localStorage.getItem("queue-films"));var t=this._queueFilmsList.findIndex((function(t){return t.title===e.title}));this._queueFilmsList.splice(t,1),this.saveQueueFilms()}}},{key:"checkFilmInWatchedLocStor",value:function(e){if(localStorage.getItem("watched-films"))return this._watchedFilmsList=JSON.parse(localStorage.getItem("watched-films")),!!this._watchedFilmsList.find((function(t){return t.title===e.title}))}},{key:"checkFilmInQueueLocStor",value:function(e){if(localStorage.getItem("queue-films"))return this._queueFilmsList=JSON.parse(localStorage.getItem("queue-films")),!!this._queueFilmsList.find((function(t){return t.title===e.title}))}}]),t}()),_=document.querySelector(".modal__wrap");a.closeModalBtnForOneMovie.addEventListener("click",(function(){a.backdropOneMovie.classList.add("is-hidden"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",L),document.removeEventListener("click",y)})),a.libGallery.addEventListener("click",(function(e){if(!function(e){var t=e.target.nodeName;return"DIV"===t||"IMG"===t||"P"===t||"SPAN"===t}(e))return;a.backdropOneMovie.classList.remove("is-hidden"),document.body.classList.add("modal-open");var t=(n=e.target.alt,i=S(),g=i.find((function(e){return e.original_title===n})));var n,i;(function(e){var t=e.genre_ids,n=e.poster_path,i=e.original_title,a=e.overview,o=e.popularity,l=e.title,r=e.vote_average,c=e.vote_count;_.innerHTML="";var d=n?"https://image.tmdb.org/t/p/w500".concat(n):"https://image.tmdb.org/t/p/w500/yEvumAoCB9Z7o9dAzjxrjcwo2FQ.jpg";_.innerHTML='\n  <div class="image__wrap">\n    <img class="image" src="https://image.tmdb.org/t/p/original'.concat(d,'" alt="').concat(l||"No title",'" />\n  </div>\n  <div class="description__wrap">\n    <h1 class="description__title">').concat(l||"No title",'</h1>\n    <table>\n      <tr class="table__wrap">\n        <td class="description__table">Vote / Votes</td>\n        <td class="description__table-result">\n          <span class="votes">').concat(r.toFixed(1)||"No data","</span> /").concat(c||"No data",'\n        </td>\n      </tr>\n      <tr class="table__wrap">\n        <td class="description__table">Popularity</td>\n        <td class="description__table-result">').concat(o.toFixed(1)||"No data",'</td>\n      </tr>\n      <tr class="table__wrap">\n        <td class="description__table">Original Title</td>\n        <td class="description__table-result">').concat(i||"No original title",'</td>\n      </tr>\n\n      <tr class="table__wrap">\n        <td class="description__table">Genre</td>\n        <td class="description__table-result">').concat(s(t,100)||"No genres info",'</td>\n      </tr>\n    </table>\n    <p class="descrption__about">ABOUT</p>\n    <p class="description__text">\n     ').concat(a||"There is no imformation about this movie",'\n    </p>\n    <ul class="btn__wrap">\n      <li>\n        <button class="btn btn__modal-add">add to Watched</button>\n        <button class="btn btn__modal-r-watched is-hidden">remove from Watched</button>\n      </li>\n      <li>\n        <button class="btn btn__modal-queue">add to queue</button>\n        <button class="btn btn__modal-r-queue is-hidden">remove from queue</button>\n      </li>\n    </ul>\n  </div>\n')})(t),u=document.querySelector(".btn__modal-add"),m=document.querySelector(".btn__modal-queue"),h=document.querySelector(".btn__modal-r-queue"),f=document.querySelector(".btn__modal-r-watched"),u.addEventListener("click",F),f.addEventListener("click",q),m.addEventListener("click",k),h.addEventListener("click",w),document.addEventListener("keydown",L),document.addEventListener("click",y),v.checkFilmInWatchedLocStor(t)&&(u.classList.add("is-hidden"),f.classList.remove("is-hidden"));v.checkFilmInQueueLocStor(t)&&(m.classList.add("is-hidden"),h.classList.remove("is-hidden"))}));var g={};o(v.getWathedFilmsList());var p=document.querySelector(".queue-button"),b=document.querySelector(".watched-button");function L(e){"Escape"==e.code&&(a.backdropOneMovie.classList.add("is-hidden"),document.body.classList.remove("modal-open"))}function y(e){e.target==a.backdropOneMovie&&(a.backdropOneMovie.classList.add("is-hidden"),document.body.classList.remove("modal-open"))}function S(){return JSON.parse(localStorage.getItem("currentFilms"))}function F(){v.refreshData(),v.addToWatchedFilms(g),v.saveWatchedFilms(),u.classList.add("is-hidden"),f.classList.remove("is-hidden"),b.classList.contains("currentbtn")&&(1===v.getWathedFilmsList().length&&(a.libGallery.innerHTML=""),E())}function q(){u.classList.remove("is-hidden"),f.classList.add("is-hidden"),v.removeFromWatched(g),b.classList.contains("currentbtn")&&I(),0===v.getWathedFilmsList().length&&l()}function k(){v.myAddToQueueFilms(g),m.classList.add("is-hidden"),h.classList.remove("is-hidden"),p.classList.contains("currentbtn")&&(1===v.getQueueFilmsList().length&&(a.libGallery.innerHTML=""),E())}function w(){m.classList.remove("is-hidden"),h.classList.add("is-hidden"),v.removeFromQueue(g),p.classList.contains("currentbtn")&&I(),0===v.getQueueFilmsList().length&&l()}function I(){document.getElementById(g.id).remove()}function E(){o([g])}p.addEventListener("click",(function(){a.libGallery.innerHTML="",o(v.getQueueFilmsList()),p.style.backgroundColor="#ff6b01",p.style.border="none",b.style.backgroundColor="transparent",b.style.border="1px solid white",b.classList.remove("currentbtn"),p.classList.add("currentbtn")})),b.addEventListener("click",(function(){a.libGallery.innerHTML="",o(v.getWathedFilmsList()),p.style.backgroundColor="transparent",p.style.border="1px solid white",b.style.backgroundColor="#ff6b01",b.style.border="none",p.classList.remove("currentbtn"),b.classList.add("currentbtn")})),S()}();
//# sourceMappingURL=library.330c94e7.js.map
