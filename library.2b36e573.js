!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var s={id:e,exports:{}};return t[e]=s,i.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i);var s=i("4Nugj"),r=i("kKCqO"),a=i("lWBva");r=i("kKCqO");i("1VFfL");var o,d,l,c,u=new(0,a.default),m=document.querySelector(".modal__wrap");s.refs.closeModalBtnForOneMovie.addEventListener("click",(function(){s.refs.backdropOneMovie.classList.add("is-hidden"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",_),document.removeEventListener("click",L)})),s.refs.libGallery.addEventListener("click",(function(e){if(!function(e){var t=e.target.nodeName;return"DIV"===t||"IMG"===t||"P"===t||"SPAN"===t}(e))return;s.refs.backdropOneMovie.classList.remove("is-hidden"),document.body.classList.add("modal-open");var t=(n=e.target.alt,i=f(),b=i.find((function(e){return e.original_title===n})));var n,i;(function(e){var t=e.genre_ids,n=e.poster_path,i=e.original_title,s=e.overview,a=e.popularity,o=e.title,d=e.vote_average,l=e.vote_count;m.innerHTML="";var c=n?"https://image.tmdb.org/t/p/w500".concat(n):"https://image.tmdb.org/t/p/w500/yEvumAoCB9Z7o9dAzjxrjcwo2FQ.jpg";m.innerHTML='\n  <div class="image__wrap">\n    <img class="image" src="https://image.tmdb.org/t/p/original'.concat(c,'" alt="').concat(o||"No title",'" />\n  </div>\n  <div class="description__wrap">\n    <h1 class="description__title">').concat(o||"No title",'</h1>\n    <table>\n      <tr class="table__wrap">\n        <td class="description__table">Vote / Votes</td>\n        <td class="description__table-result">\n          <span class="votes">').concat(d.toFixed(1)||"No data","</span> /").concat(l||"No data",'\n        </td>\n      </tr>\n      <tr class="table__wrap">\n        <td class="description__table">Popularity</td>\n        <td class="description__table-result">').concat(a.toFixed(1)||"No data",'</td>\n      </tr>\n      <tr class="table__wrap">\n        <td class="description__table">Original Title</td>\n        <td class="description__table-result">').concat(i||"No original title",'</td>\n      </tr>\n\n      <tr class="table__wrap">\n        <td class="description__table">Genre</td>\n        <td class="description__table-result">').concat((0,r.getGenres)(t,100)||"No genres info",'</td>\n      </tr>\n    </table>\n    <p class="descrption__about">ABOUT</p>\n    <p class="description__text">\n     ').concat(s||"There is no imformation about this movie",'\n    </p>\n    <ul class="btn__wrap">\n      <li>\n        <button class="btn btn__modal-add">add to Watched</button>\n        <button class="btn btn__modal-r-watched is-hidden">remove from Watched</button>\n      </li>\n      <li>\n        <button class="btn btn__modal-queue">add to queue</button>\n        <button class="btn btn__modal-r-queue is-hidden">remove from queue</button>\n      </li>\n    </ul>\n  </div>\n')})(t),o=document.querySelector(".btn__modal-add"),d=document.querySelector(".btn__modal-queue"),c=document.querySelector(".btn__modal-r-queue"),l=document.querySelector(".btn__modal-r-watched"),o.addEventListener("click",h),l.addEventListener("click",g),d.addEventListener("click",y),c.addEventListener("click",w),document.addEventListener("keydown",_),document.addEventListener("click",L),u.checkFilmInWatchedLocStor(t)&&(o.classList.add("is-hidden"),l.classList.remove("is-hidden"));u.checkFilmInQueueLocStor(t)&&(d.classList.add("is-hidden"),c.classList.remove("is-hidden"))}));var b={};(0,r.renderFilmsLibrary)(u.getWathedFilmsList());var p=document.querySelector(".queue-button"),v=document.querySelector(".watched-button");function _(e){"Escape"==e.code&&(s.refs.backdropOneMovie.classList.add("is-hidden"),document.body.classList.remove("modal-open"))}function L(e){e.target==s.refs.backdropOneMovie&&(s.refs.backdropOneMovie.classList.add("is-hidden"),document.body.classList.remove("modal-open"))}function f(){return JSON.parse(localStorage.getItem("currentFilms"))}function h(){u.refreshData(),u.addToWatchedFilms(b),u.saveWatchedFilms(),o.classList.add("is-hidden"),l.classList.remove("is-hidden"),s.refs.libGallery.innerHTML="",(0,r.renderFilmsLibrary)(u.getWathedFilmsList()),pagination()}function g(){o.classList.remove("is-hidden"),l.classList.add("is-hidden"),u.removeFromWatched(b),F(v)&&k(b),pagination()}function y(){u.myAddToQueueFilms(b),d.classList.add("is-hidden"),c.classList.remove("is-hidden"),s.refs.libGallery.innerHTML="",(0,r.renderFilmsLibrary)(u.getQueueFilmsList()),pagination()}function w(){d.classList.remove("is-hidden"),c.classList.add("is-hidden"),u.removeFromQueue(b),F(p)&&k(b),pagination()}function k(e){document.getElementById(e.id).remove()}function F(e){return!!e.classList.contains("currentbtn")}p.addEventListener("click",(function(){s.refs.libGallery.innerHTML="",(0,r.renderFilmsLibrary)(u.getQueueFilmsList()),p.style.backgroundColor="#ff6b01",p.style.border="none",v.style.backgroundColor="transparent",v.style.border="1px solid white",v.classList.remove("currentbtn"),p.classList.add("currentbtn")})),v.addEventListener("click",(function(){s.refs.libGallery.innerHTML="",(0,r.renderFilmsLibrary)(u.getWathedFilmsList()),p.style.backgroundColor="transparent",p.style.border="1px solid white",v.style.backgroundColor="#ff6b01",v.style.border="none",p.classList.remove("currentbtn"),v.classList.add("currentbtn")})),f()}();
//# sourceMappingURL=library.2b36e573.js.map
