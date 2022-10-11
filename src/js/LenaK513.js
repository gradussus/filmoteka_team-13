import { refs } from './refs';
import TrendingMovies from './MykolaPom';
import renderFilmsMarkup from './voprim';
import { getGenres } from './voprim';
import FilmsStorage from './watched-queue';
import { spinerClose, spinerOpen } from './spiner';
// import { onBackdropClick, onEscapeClick } from './Natali2721';
// const refs = {
//   closeModalBtnForOneMovie: document.querySelector('.modal__button'),
//   modalForOneMovie: document.querySelector('.modal'),
//   backdropOneMovie: document.querySelector('.backdrop__movie'),
// };

const movieDescription = document.querySelector('.modal__wrap');
refs.closeModalBtnForOneMovie.addEventListener('click', onCloseModal);
refs.gallery.addEventListener('click', onOpenModal);

let addToWatchedBtn;

let addToQueueBtn;
let removeFromWatchedBtn;
let removeFromQueueBtn;
let currentFilm = {};
const storage = new FilmsStorage();

// lib
// addToWatchedBtn = document.querySelector('.btn__modal-add');
// addToQueueBtn = document.querySelector('.btn__modal-queue');
// removeFromQueueBtn = document.querySelector('.btn__modal-r-queue');
// removeFromWatchedBtn = document.querySelector('.btn__modal-r-watched');

// addToWatchedBtn.addEventListener('click', addToWatchedLS(curentObject));
// addToQueueBtn.addEventListener('click', addToQueueLS(curentObject));
// lib

function onEscapeClick(event) {
  if (event.code == 'Escape') {
    refs.backdropOneMovie.classList.add('is-hidden');
    document.body.classList.remove('modal-open');
    // document.removeEventListener('keydown', onEscapeClick);
  }
}

// document.addEventListener('click', onBackdropClick);

function onBackdropClick(event) {
  //console.log('event');
  //console.log(event);
  if (event.target == refs.backdropOneMovie) {
    refs.backdropOneMovie.classList.add('is-hidden');
    document.body.classList.remove('modal-open');
    // document.removeEventListener('click', onBackdropClick);
  }
}
// findFilmFunc
function findCurrentFilm(name) {
  const filmsSet = getMoviesToLocalhost();
  currentFilm = filmsSet.find(option => option.original_title === name);
  return currentFilm;
}
//

function checkClick(e) {
  const element = e.target.nodeName;
  if (
    element === 'DIV' ||
    element === 'IMG' ||
    element === 'P' ||
    element === 'SPAN'
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

  const nameFilm = e.target.alt;
  const curentObject = findCurrentFilm(nameFilm);

  renderOneMovieForModal(curentObject);

  //

  spinerClose();
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
  //
  // addToWatchedBtn.removeEventListener('click', addToWatchedLS);
  // addToQueueBtn.removeEventListener('click', addToQueueLS);
  //
  document.removeEventListener('keydown', onEscapeClick);
  document.removeEventListener('click', onBackdropClick);
}

function getMoviesToLocalhost() {
  return JSON.parse(localStorage.getItem('currentFilms'));
}
getMoviesToLocalhost();

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
  return (movieDescription.innerHTML = `
  <div class="image__wrap">
    <img class="image" src="https://image.tmdb.org/t/p/original${poster_path}" alt="${title}" />
  </div>
  <div class="description__wrap">
    <h1 class="description__title">${title}</h1>
    <table>
      <tr class="table__wrap">
        <td class="description__table">Vote / Votes</td>
        <td class="description__table-result">
          <span class="votes">${vote_average.toFixed(1)}</span> /${vote_count}
        </td>
      </tr>
      <tr class="table__wrap">
        <td class="description__table">Popularity</td>
        <td class="description__table-result">${popularity.toFixed(1)}</td>
      </tr>
      <tr class="table__wrap">
        <td class="description__table">Original Title</td>
        <td class="description__table-result">${original_title}</td>
      </tr>

      <tr class="table__wrap">
        <td class="description__table">Genre</td>
        <td class="description__table-result">${getGenres(genre_ids, 100)}</td>
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
  // const storage = new FilmsStorage();
  storage.refreshData();
  //console.log(storage._watchedFilmsList);

  storage.addToWatchedFilms(currentFilm);
  storage.saveWatchedFilms();

  //

  addToWatchedBtn.classList.add('is-hidden');
  removeFromWatchedBtn.classList.remove('is-hidden');
}

function addToQueueLS() {
  // const storage = new FilmsStorage();
  // storage.refreshDataQueue();

  // storage.addToQueueFilms(currentFilm);
  // storage.saveQueueFilms();
  storage.myAddToQueueFilms(currentFilm);

  addToQueueBtn.classList.add('is-hidden');
  removeFromQueueBtn.classList.remove('is-hidden');
}

function removeFromWatchedLS() {
  addToWatchedBtn.classList.remove('is-hidden');
  removeFromWatchedBtn.classList.add('is-hidden');

  storage.removeFromWatched(currentFilm);
}

function removeFromQueueLS() {
  addToQueueBtn.classList.remove('is-hidden');
  removeFromQueueBtn.classList.add('is-hidden');

  storage.removeFromQueue(currentFilm);
}

// function checkFilmInLocStor(film) {}
