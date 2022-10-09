import Pagination from 'tui-pagination';
import TrendingMovies from './MykolaPom';
import { renderFilmsMarkup, getGenres, renderGenres } from './voprim';
import { refs } from './refs';

const trendingMovies = new TrendingMovies();

// function clearFunc() {
//   pagination.reset();
// }

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
  trendingMovies
    .fetchTrendingMovies()
    .then(data => {
      renderFilmsMarkup(data);

      renderGenres(data);
      trendingMovies.fetchTotalResults().then(data => {
        options.totalItems =  trendingMovies.getResults();
        createPagination();
      });

    })
    .catch(error => console.log(error));
}

getGenres();
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
          onClickPagEvent(data);
        })
        .catch(error => console.log(error));
    });
  }
}

function onClickPagEvent(data) {
  renderFilmsMarkup(data);

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

refs.form.addEventListener('submit', onSubmitEvent);

function onSubmitEvent(e) {
  // pagination.reset();
  e.preventDefault();
  let inputValue = refs.form.firstElementChild.value;
  if (!inputValue.trim()) {
    return console.log('no no no');
  }
  refs.gallery.innerHTML = '';
  //
  trendingMovies.setQuery(inputValue);
  trendingMovies.setPage(1);
  trendingMovies
    .fetchMovie()
    .then(data => {
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
        renderFilmsMarkup(data);
      })
      .catch(error => console.log(error));
  });
}
