import Pagination from 'tui-pagination';
import TrendingMovies from './fetchAPI';
import { renderFilmsMarkup } from './renderMarkup';
import { refs } from './refs';

const trendingMovies = new TrendingMovies();
const warn = document.querySelector('.header-film__warning-msg');

// setToLS_answer

function setToLocacStorageAnswer(answer) {
  localStorage.setItem('currentFilms', JSON.stringify(answer));
}
function removeInLocalStorageCurrentFilms() {
  localStorage.removeItem('currentFilms');
}

// pag options

let options = {
  totalItems: 100,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
};

// startList

function createStartList() {
  trendingMovies.fetchGenres().then(({ genres }) => {
    const arr = [...genres];
    localStorage.setItem('genres', JSON.stringify(arr));
  });

  trendingMovies
    .fetchTrendingMovies()
    .then(data => {
      renderFilmsMarkup(data);
      // create pag
      options.totalItems = trendingMovies.getResults();
      createPagination();
      //localStor
      setToLocacStorageAnswer(data);
    })
    .catch(error => console.log(error));
}

createStartList();

function createPagination() {
  if (refs.gallery.childElementCount > 10) {
    const pagination = new Pagination(refs.container, options);

    pagination.on('beforeMove', function (eventData) {
      refs.gallery.innerHTML = '';
      trendingMovies.setPage(eventData.page);
      trendingMovies
        .fetchTrendingMovies()
        .then(data => {
          onClickPageEvent(data);
        })
        .catch(error => console.log(error));
    });
  }
}

function onClickPageEvent(data) {
  renderFilmsMarkup(data);

  removeInLocalStorageCurrentFilms();
  setToLocacStorageAnswer(data);

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

refs.form.addEventListener('submit', onSubmitEvent);

function onSubmitEvent(e) {
  e.preventDefault();
  let inputValue = refs.form.firstElementChild.value;
  if (!inputValue.trim()) {
    warn.classList.remove('visually-hidden');
    refs.form.firstElementChild.value = '';
    return;
  }

  //
  trendingMovies.setQuery(inputValue);
  trendingMovies.setPage(1);
  trendingMovies
    .fetchMovie()
    .then(data => {
      if (!data.length) {
        warn.classList.remove('visually-hidden');
        refs.form.firstElementChild.value = '';
        return;
      }
      warn.classList.add('visually-hidden');
      refs.gallery.innerHTML = '';
      // checkIncorrectQuery(data);
      removeInLocalStorageCurrentFilms();
      setToLocacStorageAnswer(data);

      renderFilmsMarkup(data);

      options.totalItems = trendingMovies.getResults();

      createPaginationOnRequest();
    })
    .catch(error => console.log(error));
}

function createPaginationOnRequest() {
  const pagination = new Pagination(refs.container, options);

  pagination.on('beforeMove', function (eventData) {
    refs.gallery.innerHTML = '';

    const inputValue = refs.form.firstElementChild.value;

    trendingMovies.setPage(eventData.page);
    trendingMovies.setQuery(inputValue);

    trendingMovies
      .fetchMovie()
      .then(data => {
        removeInLocalStorageCurrentFilms();
        setToLocacStorageAnswer(data);

        renderFilmsMarkup(data);
      })
      .catch(error => console.log(error));
  });
}

// function checkIncorrectQuery(data) {
//   if (!data.length) {
//     return false;
//   }
// }
