const e={modal:document.querySelector("[data-modal-footer]"),closeBtn:document.querySelector(".footer-modal__closeBtn"),openFooterModalBtn:document.querySelector(".js-team")};function t(i){"Escape"===i.code&&(e.modal.classList.add("is-hidden"),document.removeEventListener("keydown",t),document.removeEventListener("click",s))}function s(i){i.target===e.modal&&(e.modal.classList.add("is-hidden"),document.removeEventListener("click",s),document.removeEventListener("keydown",t))}e.openFooterModalBtn.addEventListener("click",(i=>{i.preventDefault(),e.modal.classList.remove("is-hidden"),document.addEventListener("keydown",t),document.addEventListener("click",s)})),e.closeBtn.addEventListener("click",(i=>{i.preventDefault(),e.modal.classList.add("is-hidden"),document.removeEventListener("keydown",t),document.removeEventListener("click",s)}));const i={backdrop:document.querySelector(".backdrop"),teamLink:document.querySelector(".js-team"),spinerBackdrop:document.querySelector(".spiner__backdrop"),filmsListRef:document.querySelector(".films"),gallery:document.querySelector(".gallery__set"),libGallery:document.querySelector(".lib-gallery__set"),container:document.getElementById("pagination"),galleryGenreItem:document.querySelector(".film__genres"),form:document.querySelector(".header-film__form"),closeModalBtnForOneMovie:document.querySelector(".modal__button"),modalForOneMovie:document.querySelector(".modal"),backdropOneMovie:document.querySelector(".backdrop"),btnAddToWatched:document.querySelector(".btn__modal-add"),btnRemoveFromWatched:document.querySelector(".btn__modal-r-watched"),btnAddToQuene:document.querySelector(".btn__modal-queue"),btnRemoveFromQuene:document.querySelector(".btn__modal-r-queue"),trailerBackdrop:document.querySelector(".js-backdrop-trailer")};function n(e,t){const s=JSON.parse(localStorage.getItem("genres")),i=[];for(let n=0;n<t&&n<e.length;n++)for(const t of s)e[n]===t.id&&i.push(t.name);return e.length>t&&i.splice(t-1,1,"Other"),i.join(", ")}function l(e){if(e)return e.length?void e.map((({poster_path:e,genre_ids:t,title:s,release_date:i,id:l})=>`<li class="films__item" data-id=${l||"No ID"}>\n                <div class="films__img">\n                    <img src=https://image.tmdb.org/t/p/original${e?`https://image.tmdb.org/t/p/w500${e}`:"https://image.tmdb.org/t/p/w500/yEvumAoCB9Z7o9dAzjxrjcwo2FQ.jpg"} alt="${s||"No title"}" loading="lazy" id=${l}>\n                </div>\n                <div class="films__description" id=${l}>\n                  <p class="films__title" id=${l}>${s||"No title"}</p>\n                  <div class="films__meta" id=${l}>\n                    <span class="films__genres" id=${l}>${n(t,3)||"No genres info"}</span>\n                    <span class="films__sep" id=${l}>|</span>\n                    <span class="films__data" id=${l}>${new Date(i).getFullYear()||"No info"}</span>\n                  </div>\n                </div>\n            </li>`)).forEach((e=>i.libGallery.insertAdjacentHTML("beforeend",e))):void a();a()}function a(){const e=document.createElement("IMG");e.src="https://pixabay.com/get/gefdffe0e3a111a2d5c539dc6a08c82b4b787e4962786126035071f95a2a5c46d2ebf8f194c8663dc4a63fb2935acb30d52287b634ea8567d22c059278eaa580d_1280.jpg",e.alt="plug",e.width="700",i.libGallery.append(e)}const o=new class{refreshData(){localStorage.getItem("watched-films")&&(this._watchedFilmsList=JSON.parse(localStorage.getItem("watched-films")))}refreshDataQueue(){localStorage.getItem("queue-films")&&(this._queueFilmsList=JSON.parse(localStorage.getItem("queue-films")))}addToWatchedFilms(e){localStorage.getItem("watched-films")&&(this._watchedFilmsList=JSON.parse(localStorage.getItem("watched-films"))),this._watchedFilmsList.push(e),this.saveWatchedFilms()}myAddToQueueFilms(e){localStorage.getItem("queue-films")&&(this._queueFilmsList=JSON.parse(localStorage.getItem("queue-films"))),this._queueFilmsList.push(e),localStorage.setItem("queue-films",JSON.stringify(this._queueFilmsList))}addToQueueFilms(e){localStorage.getItem("queue-films")&&(this._queueFilmsList=JSON.parse(localStorage.getItem("queue-films"))),this._queueFilmsList.push(e),this.saveQueueFilms()}saveWatchedFilms(){localStorage.setItem("watched-films",JSON.stringify(this._watchedFilmsList))}saveQueueFilms(){localStorage.setItem("queue-films",JSON.stringify(this._queueFilmsList))}getWathedFilmsList(){if(localStorage.getItem("watched-films"))return JSON.parse(localStorage.getItem("watched-films"))}getQueueFilmsList(){if(localStorage.getItem("queue-films"))return JSON.parse(localStorage.getItem("queue-films"))}removeFromWatched(e){if(!localStorage.getItem("watched-films"))return;this._watchedFilmsList=JSON.parse(localStorage.getItem("watched-films"));const t=this._watchedFilmsList.findIndex((t=>t.title===e.title));this._watchedFilmsList.splice(t,1),this.saveWatchedFilms()}removeFromQueue(e){if(!localStorage.getItem("queue-films"))return;this._queueFilmsList=JSON.parse(localStorage.getItem("queue-films"));const t=this._queueFilmsList.findIndex((t=>t.title===e.title));this._queueFilmsList.splice(t,1),this.saveQueueFilms()}checkFilmInWatchedLocStor(e){if(!localStorage.getItem("watched-films"))return;this._watchedFilmsList=JSON.parse(localStorage.getItem("watched-films"));return!!this._watchedFilmsList.find((t=>t.title===e.title))}checkFilmInQueueLocStor(e){if(!localStorage.getItem("queue-films"))return;this._queueFilmsList=JSON.parse(localStorage.getItem("queue-films"));return!!this._queueFilmsList.find((t=>t.title===e.title))}constructor(){this._watchedFilmsList=[],this._queueFilmsList=[],this.refreshData(),this.refreshDataQueue()}},d=document.querySelector(".modal__wrap");let r,c,m,u;i.closeModalBtnForOneMovie.addEventListener("click",(function(){i.backdropOneMovie.classList.add("is-hidden"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",p),document.removeEventListener("click",f)})),i.libGallery.addEventListener("click",(function(e){if(!function(e){const t=e.target.nodeName;return"plug"!==e.target.getAttribute("alt")&&("DIV"===t||"IMG"===t||"P"===t||"SPAN"===t)}(e))return;i.backdropOneMovie.classList.remove("is-hidden"),document.body.classList.add("modal-open");const t=function(e){let t=[];_.classList.contains("currentbtn")&&(t=JSON.parse(localStorage.getItem("watched-films")));g.classList.contains("currentbtn")&&(t=JSON.parse(localStorage.getItem("queue-films")));return h=t.find((t=>t.id===e)),h}(Number(e.target.id));(function({genre_ids:e,poster_path:t,original_title:s,overview:i,popularity:l,title:a,vote_average:o,vote_count:r}){d.innerHTML="";const c=t?`https://image.tmdb.org/t/p/w500${t}`:"https://image.tmdb.org/t/p/w500/yEvumAoCB9Z7o9dAzjxrjcwo2FQ.jpg";d.innerHTML=`\n  <div class="image__wrap">\n    <img class="image" src="https://image.tmdb.org/t/p/original${c}" alt="${a||"No title"}" />\n  </div>\n  <div class="description__wrap">\n    <h1 class="description__title">${a||"No title"}</h1>\n    <table>\n      <tr class="table__wrap">\n        <td class="description__table">Vote / Votes</td>\n        <td class="description__table-result">\n          <span class="votes">${o.toFixed(1)||"No data"}</span> /${r||"No data"}\n        </td>\n      </tr>\n      <tr class="table__wrap">\n        <td class="description__table">Popularity</td>\n        <td class="description__table-result">${l.toFixed(1)||"No data"}</td>\n      </tr>\n      <tr class="table__wrap">\n        <td class="description__table">Original Title</td>\n        <td class="description__table-result">${s||"No original title"}</td>\n      </tr>\n\n      <tr class="table__wrap">\n        <td class="description__table">Genre</td>\n        <td class="description__table-result">${n(e,100)||"No genres info"}</td>\n      </tr>\n    </table>\n    <p class="descrption__about">ABOUT</p>\n    <p class="description__text">\n     ${i||"There is no imformation about this movie"}\n    </p>\n    <ul class="btn__wrap">\n      <li>\n        <button class="btn btn__modal-add">add to Watched</button>\n        <button class="btn btn__modal-r-watched is-hidden">remove from Watched</button>\n      </li>\n      <li>\n        <button class="btn btn__modal-queue">add to queue</button>\n        <button class="btn btn__modal-r-queue is-hidden">remove from queue</button>\n      </li>\n    </ul>\n  </div>\n`})(t),r=document.querySelector(".btn__modal-add"),c=document.querySelector(".btn__modal-queue"),u=document.querySelector(".btn__modal-r-queue"),m=document.querySelector(".btn__modal-r-watched"),r.addEventListener("click",b),m.addEventListener("click",L),c.addEventListener("click",v),u.addEventListener("click",S),document.addEventListener("keydown",p),document.addEventListener("click",f),o.checkFilmInWatchedLocStor(t)&&(r.classList.add("is-hidden"),m.classList.remove("is-hidden"));o.checkFilmInQueueLocStor(t)&&(c.classList.add("is-hidden"),u.classList.remove("is-hidden"))}));let h={};l(o.getWathedFilmsList());const g=document.querySelector(".queue-button"),_=document.querySelector(".watched-button");function p(e){"Escape"==e.code&&(i.backdropOneMovie.classList.add("is-hidden"),document.body.classList.remove("modal-open"))}function f(e){e.target==i.backdropOneMovie&&(i.backdropOneMovie.classList.add("is-hidden"),document.body.classList.remove("modal-open"))}function b(){o.refreshData(),o.addToWatchedFilms(h),o.saveWatchedFilms(),r.classList.add("is-hidden"),m.classList.remove("is-hidden"),_.classList.contains("currentbtn")&&(1===o.getWathedFilmsList().length&&(i.libGallery.innerHTML=""),F())}function L(){r.classList.remove("is-hidden"),m.classList.add("is-hidden"),o.removeFromWatched(h),_.classList.contains("currentbtn")&&y(),0===o.getWathedFilmsList().length&&a()}function v(){o.myAddToQueueFilms(h),c.classList.add("is-hidden"),u.classList.remove("is-hidden"),g.classList.contains("currentbtn")&&(1===o.getQueueFilmsList().length&&(i.libGallery.innerHTML=""),F())}function S(){c.classList.remove("is-hidden"),u.classList.add("is-hidden"),o.removeFromQueue(h),g.classList.contains("currentbtn")&&y(),0===o.getQueueFilmsList().length&&a()}function y(){document.getElementById(h.id).remove()}function F(){l([h])}g.addEventListener("click",(function(){i.libGallery.innerHTML="",l(o.getQueueFilmsList()),g.style.backgroundColor="#ff6b01",g.style.border="none",_.style.backgroundColor="transparent",_.style.border="1px solid white",_.classList.remove("currentbtn"),g.classList.add("currentbtn")})),_.addEventListener("click",(function(){i.libGallery.innerHTML="",l(o.getWathedFilmsList()),g.style.backgroundColor="transparent",g.style.border="1px solid white",_.style.backgroundColor="#ff6b01",_.style.border="none",g.classList.remove("currentbtn"),_.classList.add("currentbtn")}));
//# sourceMappingURL=library.1d373d67.js.map
