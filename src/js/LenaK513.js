import { refs } from './refs';
import TrendingMovies from './MykolaPom';
import renderFilmsMarkup from './voprim';
import { getGenres } from './voprim';
import FilmsStorage from './watched';
import { spinerClose, spinerOpen } from './spiner';
// import { onBackdropClick, onEscapeClick } from './Natali2721';
// const refs = {
//   closeModalBtnForOneMovie: document.querySelector('.modal__button'),
//   modalForOneMovie: document.querySelector('.modal'),
//   backdropOneMovie: document.querySelector('.backdrop__movie'),
// };

refs.closeModalBtnForOneMovie.addEventListener('click', onCloseModal);
refs.gallery.addEventListener('click', onOpenModal);
let addToWatchedBtn;
function onEscapeClick(event) {
  //console.log('esc');
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
  return filmsSet.find(option => option.original_title === name);
}
//
function onOpenModal(e) {
  //
  spinerOpen();
  document.addEventListener('click', spinerClose);
  //
  refs.backdropOneMovie.classList.remove('is-hidden');
  document.body.classList.add('modal-open');

  const nameFilm = e.target.alt;
  const curentObject = findCurrentFilm(nameFilm);
  renderOneMovieForModal(curentObject);

  //
  spinerClose();
  addToWatchedBtn = document.querySelector('.btn__modal-add');
  addToWatchedBtn.addEventListener('click', addToLS(curentObject));
  //

  document.addEventListener('keydown', onEscapeClick);
  document.addEventListener('click', onBackdropClick);
}

function onCloseModal() {
  refs.backdropOneMovie.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  //
  addToWatchedBtn.removeEventListener('click', addToLS);
  //
  document.removeEventListener('keydown', onEscapeClick);
  document.removeEventListener('click', onBackdropClick);
}

const trendMoviesForLocalhost = new TrendingMovies();

function getMoviesToLocalhost() {
  return JSON.parse(localStorage.getItem('currentFilms'));

  // trendMoviesForLocalhost
  //   .fetchTrendingMovies()
  //   .then(data => {
  //     console.log(data[0]);
  //   })
  //   .then(renderOneMovieForModal);
}
getMoviesToLocalhost();

const movieDescription = document.querySelector('.modal__wrap');

function renderOneMovieForModal({
  id,
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
  return (movieDescription.innerHTML = ` <div class="modal__wrap">
  <div class="image__wrap">
    <img class="image" src="https://image.tmdb.org/t/p/original${poster_path}" alt="${title}" />
  </div>
  <div class="description__wrap">
    <h1 class="description__title">${title}</h1>
    <table>
      <tr class="table__wrap">
        <td class="description__table">Vote / Votes</td>
        <td class="description__table-result">
          <span class="votes">${vote_average}</span> /${vote_count}
        </td>
      </tr>
      <tr class="table__wrap">
        <td class="description__table">Popularity</td>
        <td class="description__table-result">${popularity}</td>
      </tr>
      <tr class="table__wrap">
        <td class="description__table">Original Title</td>
        <td class="description__table-result">${original_title}</td>
      </tr>

      <tr class="table__wrap">
        <td class="description__table"></td>
        <td class="description__table-result">${getGenres(genre_ids)}</td>
      </tr>
    </table>
    <p class="descrption__about">ABOUT</p>
    <p class="description__text">
     ${overview}
    </p>
    <div class="btn__wrap">
      <button class="btn btn__modal-add">add to Watched</button>
      <button class="btn btn__modal-queue">add to queue</button>
    </div>
  </div>
</div>`);
}

//функціонал для ЛС
function addToLS(a) {
  const storage = new FilmsStorage();
  storage.refreshData();
  console.log(storage._watchedFilmsList);
  storage.addToWatchedFilms(a);
  storage.saveWatchedFilms();
}
