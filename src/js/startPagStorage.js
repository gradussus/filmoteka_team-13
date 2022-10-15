import Pagination from 'tui-pagination';
import TrendingMovies from './fetchAPI';
import { renderFilmsMarkup } from './renderMarkup';
import { refs } from './refs';
import { spinerClose, spinerOpen } from './spiner';
import { loadTheme } from './theme';

const trendingMovies = new TrendingMovies();
const warn = document.querySelector('.header-film__warning-msg');

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
  firstAndLastbtnHidden(page, totalPages);

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
      refs.globalInputValue = inputValue;
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

    trendingMovies.setPage(eventData.page);
    trendingMovies.setQuery(refs.globalInputValue);
    spinerOpen();
    trendingMovies
      .fetchMovie()
      .then(data => {
        removeInLocalStorageCurrentFilms();
        setToLocacStorageAnswer(data);

        renderFilmsMarkup(data);
        spinerClose();
        firstAndLastbtnHidden(
          eventData.page,
          options.totalItems / options.itemsPerPage
        );
      })
      .catch(error => console.log(error));
  });
}

function firstAndLastbtnHidden(page, totalPages) {
  const firstPage = document.querySelector('.tui-first');
  const lastPage = document.querySelector('.tui-last');
  if (page > 3 || page < 0) {
    firstPage.style.visibility = 'visible';
  } else {
    firstPage.style.visibility = 'hidden';
  }
  if (page > Math.ceil(totalPages) - 3) {
    lastPage.style.visibility = 'hidden';
  } else {
    lastPage.style.visibility = 'visible';
  }
}
