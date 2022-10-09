import Pagination from 'tui-pagination';
import TrendingMovies from './MykolaPom';
import { renderFilmsMarkup } from './voprim';
import { refs } from './refs';

const trendingMovies = new TrendingMovies();

// Жанри (початок)

async function fetchGenres() {
  let response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=0888b454b4f7be0ebcd69ceb372ced29&language=en-US`
  );
  return response.json();
}

// Жанри(кінець);

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
  fetchGenres().then(({ genres }) => {
    // console.log(genres);
    const arr = [...genres];
    localStorage.setItem('genres', JSON.stringify(arr));
    console.log(JSON.stringify(arr));
  });

  trendingMovies
    .fetchTrendingMovies()
    .then(data => {
      renderFilmsMarkup(data);
      options.totalItems = trendingMovies.getResults();
      createPagination();

      // renderGenres(data);
      // trendingMovies.fetchTotalResults().then(data => {
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
