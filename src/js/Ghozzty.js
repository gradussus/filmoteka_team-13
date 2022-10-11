import Pagination from 'tui-pagination';
import TrendingMovies from './MykolaPom';
import { renderFilmsMarkup } from './voprim';
import { refs } from './refs';

const trendingMovies = new TrendingMovies();

// Жанри (початок)

// переніс у файл де робляться фетчі з АПІ
// async function fetchGenres() {
//   let response = await fetch(
//     `https://api.themoviedb.org/3/genre/movie/list?api_key=0888b454b4f7be0ebcd69ceb372ced29&language=en-US`
//   );
//   return response.json();
// }

// Жанри(кінець);

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
  trendingMovies
    .fetchGenres()
    .then(({ genres }) => {
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
    return console.log('no no no');
  }
  refs.gallery.innerHTML = '';
  //
  trendingMovies.setQuery(inputValue);
  trendingMovies.setPage(1);
  trendingMovies
    .fetchMovie()
    .then(data => {
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
