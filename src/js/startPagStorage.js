import Pagination from 'tui-pagination';
import TrendingMovies from './fetchAPI';
import { renderFilmsMarkup } from './renderMarkup';
import { refs } from './refs';
import { spinerClose, spinerOpen } from './spiner';
import { loadTheme } from './theme';

const trendingMovies = new TrendingMovies();
const warn = document.querySelector('.header-film__warning-msg');
let globalInputValue = '';

// setToLS_answer

function setToLocacStorageAnswer(answer) {
  localStorage.setItem('currentFilms', JSON.stringify(answer));
}
function removeInLocalStorageCurrentFilms() {
  localStorage.removeItem('currentFilms');
}

// let totalPages = 0;
// let firstBtnPag;
// let lastBtnPag;
// function loadTheme() {
//   checkBox.checked = JSON.parse(localStorage.getItem('dark-theme'));
//   if (checkBox.checked) {
//     document.querySelector('main').style.backgroundColor = '272e34';
//     console.log(checkBox.checked);
//   }
//   if (!checkBox.checked) {
//     document.querySelector('main').style.backgroundColor = 'fff';
//     console.log(checkBox.checked);
//   }
// }
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

function createStartList() {
  loadTheme();
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
  if (refs.gallery.childElementCount > 18) {
    const pagination = new Pagination(refs.container, options);

    pagination.on('beforeMove', function (eventData) {
      refs.gallery.innerHTML = '';
      spinerOpen();

      trendingMovies.setPage(eventData.page);
      trendingMovies
        .fetchTrendingMovies()
        .then(data => {
          onClickPageEvent(
            data,
            eventData.page,
            options.totalItems / options.itemsPerPage
          );
          spinerClose();
        })
        .catch(error => console.log(error));
    });
  }
}

function onClickPageEvent(data, page, totalPages) {
  spinerOpen();
  renderFilmsMarkup(data);
  spinerClose();
  removeInLocalStorageCurrentFilms();
  setToLocacStorageAnswer(data);
  chengeColorBtn(page, totalPages);

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

refs.form.addEventListener('submit', onSubmitEvent);

function onSubmitEvent(e) {
  e.preventDefault();
  spinerOpen();
  let inputValue = refs.form.firstElementChild.value;
  if (!inputValue.trim()) {
    warn.classList.remove('visually-hidden');
    refs.form.firstElementChild.value = '';
    spinerClose();
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
        spinerClose();
        return;
      }
      globalInputValue = inputValue;
      warn.classList.add('visually-hidden');
      refs.gallery.innerHTML = '';

      removeInLocalStorageCurrentFilms();
      setToLocacStorageAnswer(data);

      renderFilmsMarkup(data);
      spinerClose();
      options.totalItems = trendingMovies.getResults();

      createPaginationOnRequest();
    })
    .catch(error => console.log(error));
}

function createPaginationOnRequest() {
  const pagination = new Pagination(refs.container, options);

  pagination.on('beforeMove', function (eventData) {
    refs.gallery.innerHTML = '';

    // const inputValue = refs.form.firstElementChild.value;

    trendingMovies.setPage(eventData.page);
    trendingMovies.setQuery(globalInputValue);
    spinerOpen();
    trendingMovies
      .fetchMovie()
      .then(data => {
        removeInLocalStorageCurrentFilms();
        setToLocacStorageAnswer(data);

        renderFilmsMarkup(data);
        spinerClose();
        chengeColorBtn(
          eventData.page,
          options.totalItems / options.itemsPerPage
        );
      })
      .catch(error => console.log(error));
  });
}

function chengeColorBtn(page, totalPages) {
  if (page > 1) {
    const firstPage = document.querySelector('.tui-first');

    firstPage.classList.add('tui-when-other-page');

    if (Math.ceil(totalPages) === page) {
      const lastPage = document.querySelector('.tui-last');
      lastPage.classList.add('tui-first');
    }
  }
  if (page === 1) {
    const firstPage = document.querySelector('.tui-first');
    firstPage.classList.remove('tui-when-other-page');
  }
}
