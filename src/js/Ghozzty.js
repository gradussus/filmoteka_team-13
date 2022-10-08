import Pagination from 'tui-pagination';
import TrendingMovies from './MykolaPom';
import renderFilmsMarkup from './voprim';
import { refs } from './refs';

const trendingMovies = new TrendingMovies();

function clearFunc() {
  pagination.reset();
}

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

      trendingMovies.fetchTotalResults().then(data => {
        options.totalItems = data;
        createPagination();
      });
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
          onClickPagEvent(data);
        })
        .catch(error => console.log(error));
    });

    function onClickPagEvent(data) {
      renderFilmsMarkup(data);

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
}
