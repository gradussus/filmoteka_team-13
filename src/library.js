// Федір, твори магію)
import './js/NataliaDavydenko';
import { refs } from './js/refs';
import { renderFilmsLibrary } from './js/voprim';
import FilmsStorage from './js/watched-queue';
import { getGenres } from './js/voprim';
import { setImgInLib } from './js/voprim';

//

const storage = new FilmsStorage();
const movieDescription = document.querySelector('.modal__wrap');
refs.closeModalBtnForOneMovie.addEventListener('click', onCloseModal);
refs.libGallery.addEventListener('click', onOpenModal);

//
let addToWatchedBtn;

let addToQueueBtn;
let removeFromWatchedBtn;
let removeFromQueueBtn;
let currentFilm = {};
//
// console.log(storage.getWathedFilmsList());
renderFilmsLibrary(storage.getWathedFilmsList());

const queueBtn = document.querySelector('.queue-button');
const wachedBtn = document.querySelector('.watched-button');

queueBtn.addEventListener('click', onQueueBtnClick);
wachedBtn.addEventListener('click', onWachedBtnClick);

function onQueueBtnClick() {
  refs.libGallery.innerHTML = '';
  renderFilmsLibrary(storage.getQueueFilmsList());

  queueBtn.style.backgroundColor = '#ff6b01';
  queueBtn.style.border = 'none';
  wachedBtn.style.backgroundColor = 'transparent';
  wachedBtn.style.border = '1px solid white';

  wachedBtn.classList.remove('currentbtn');
  queueBtn.classList.add('currentbtn');
}

function onWachedBtnClick() {
  refs.libGallery.innerHTML = '';
  renderFilmsLibrary(storage.getWathedFilmsList());

  queueBtn.style.backgroundColor = 'transparent';
  queueBtn.style.border = '1px solid white';
  wachedBtn.style.backgroundColor = '#ff6b01';
  wachedBtn.style.border = 'none';

  queueBtn.classList.remove('currentbtn');
  wachedBtn.classList.add('currentbtn');
}

function onEscapeClick(event) {
  if (event.code == 'Escape') {
    refs.backdropOneMovie.classList.add('is-hidden');
    document.body.classList.remove('modal-open');
  }
}

function onBackdropClick(event) {
  if (event.target == refs.backdropOneMovie) {
    refs.backdropOneMovie.classList.add('is-hidden');
    document.body.classList.remove('modal-open');
  }
}

// findFilmFunc
function findCurrentFilm(id) {
  let filmsSet = [];
  if (wachedBtn.classList.contains('currentbtn')) {
    filmsSet = JSON.parse(localStorage.getItem('watched-films'));
  }
  if (queueBtn.classList.contains('currentbtn')) {
    filmsSet = JSON.parse(localStorage.getItem('queue-films'));
  }

  currentFilm = filmsSet.find(film => film.id === id);
  return currentFilm;
}
// missclick
function checkClick(e) {
  const element = e.target.nodeName;
  const emptyIMG = e.target;
  if (emptyIMG.getAttribute('alt') === 'plug') {
    return false;
  }

  if (
    element === 'IMG'
    // element === 'DIV' ||
    // element === 'IMG' ||
    // element === 'P' ||
    // element === 'SPAN'
  ) {
    return true;
  }
  return false;
}

function onOpenModal(e) {
  if (!checkClick(e)) {
    return;
  }

  refs.backdropOneMovie.classList.remove('is-hidden');
  document.body.classList.add('modal-open');

  const idFilm = Number(e.target.id);

  const curentObject = findCurrentFilm(idFilm);

  renderOneMovieForModal(curentObject);

  //

  addToWatchedBtn = document.querySelector('.btn__modal-add');
  addToQueueBtn = document.querySelector('.btn__modal-queue');
  removeFromQueueBtn = document.querySelector('.btn__modal-r-queue');
  removeFromWatchedBtn = document.querySelector('.btn__modal-r-watched');

  addToWatchedBtn.addEventListener('click', addToWatchedLS);
  removeFromWatchedBtn.addEventListener('click', removeFromWatchedLS);
  addToQueueBtn.addEventListener('click', addToQueueLS);
  removeFromQueueBtn.addEventListener('click', removeFromQueueLS);
  //

  document.addEventListener('keydown', onEscapeClick);
  document.addEventListener('click', onBackdropClick);

  if (storage.checkFilmInWatchedLocStor(curentObject)) {
    addToWatchedBtn.classList.add('is-hidden');
    removeFromWatchedBtn.classList.remove('is-hidden');
  }
  if (storage.checkFilmInQueueLocStor(curentObject)) {
    addToQueueBtn.classList.add('is-hidden');
    removeFromQueueBtn.classList.remove('is-hidden');
  }
}

function onCloseModal() {
  refs.backdropOneMovie.classList.add('is-hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onEscapeClick);
  document.removeEventListener('click', onBackdropClick);
}

function renderOneMovieForModal({
  genre_ids,
  poster_path,
  original_title,
  overview,
  popularity,
  title,
  vote_average,
  vote_count,
}) {
  movieDescription.innerHTML = '';
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : `https://image.tmdb.org/t/p/w500/yEvumAoCB9Z7o9dAzjxrjcwo2FQ.jpg`;
  return (movieDescription.innerHTML = `
  <div class="image__wrap">
    <img class="image" src="https://image.tmdb.org/t/p/original${poster}" alt="${
    title || 'No title'
  }" />
  </div>
  <div class="description__wrap">
    <h1 class="description__title">${title || 'No title'}</h1>
    <table>
      <tr class="table__wrap">
        <td class="description__table">Vote / Votes</td>
        <td class="description__table-result">
          <span class="votes">${vote_average.toFixed(1) || 'No data'}</span> /${
    vote_count || 'No data'
  }
        </td>
      </tr>
      <tr class="table__wrap">
        <td class="description__table">Popularity</td>
        <td class="description__table-result">${
          popularity.toFixed(1) || 'No data'
        }</td>
      </tr>
      <tr class="table__wrap">
        <td class="description__table">Original Title</td>
        <td class="description__table-result">${
          original_title || 'No original title'
        }</td>
      </tr>

      <tr class="table__wrap">
        <td class="description__table">Genre</td>
        <td class="description__table-result">${
          getGenres(genre_ids, 100) || 'No genres info'
        }</td>
      </tr>
    </table>
    <p class="descrption__about">ABOUT</p>
    <p class="description__text">
     ${overview || 'There is no imformation about this movie'}
    </p>
    <ul class="btn__wrap">
      <li>
        <button class="btn btn__modal-add">add to Watched</button>
        <button class="btn btn__modal-r-watched is-hidden">remove from Watched</button>
      </li>
      <li>
        <button class="btn btn__modal-queue">add to queue</button>
        <button class="btn btn__modal-r-queue is-hidden">remove from queue</button>
      </li>
    </ul>
  </div>
`);
}

//функціонал для ЛС
function addToWatchedLS() {
  storage.refreshData();

  storage.addToWatchedFilms(currentFilm);
  storage.saveWatchedFilms();

  //

  addToWatchedBtn.classList.add('is-hidden');
  removeFromWatchedBtn.classList.remove('is-hidden');

  if (wachedBtn.classList.contains('currentbtn')) {
    if (storage.getWathedFilmsList().length === 1) {
      refs.libGallery.innerHTML = '';
    }
    addToDOMelement();
  }
}

function removeFromWatchedLS() {
  addToWatchedBtn.classList.remove('is-hidden');
  removeFromWatchedBtn.classList.add('is-hidden');

  storage.removeFromWatched(currentFilm);

  if (wachedBtn.classList.contains('currentbtn')) {
    removeFromDomElement();
  }
  if (storage.getWathedFilmsList().length === 0) {
    setImgInLib();
  }
}
// uquqee

function addToQueueLS() {
  storage.myAddToQueueFilms(currentFilm);

  addToQueueBtn.classList.add('is-hidden');
  removeFromQueueBtn.classList.remove('is-hidden');

  if (queueBtn.classList.contains('currentbtn')) {
    if (storage.getQueueFilmsList().length === 1) {
      refs.libGallery.innerHTML = '';
    }
    addToDOMelement();
  }
}

function removeFromQueueLS() {
  addToQueueBtn.classList.remove('is-hidden');
  removeFromQueueBtn.classList.add('is-hidden');

  storage.removeFromQueue(currentFilm);

  if (queueBtn.classList.contains('currentbtn')) {
    removeFromDomElement();
  }
  if (storage.getQueueFilmsList().length === 0) {
    setImgInLib();
  }
}

function removeFromDomElement() {
  const el = document.getElementById(currentFilm.id);
  el.remove();
}
function addToDOMelement() {
  renderFilmsLibrary([currentFilm]);
}
