import Pagination from 'tui-pagination';
import TrendingMovies from './MykolaPom';
import renderFilmsMarkup from './voprim';

const trendingMovies = new TrendingMovies();

const gallery = document.querySelector('.gallery__set');

function clearFunc() {
  pagination.reset();
}

const container = document.getElementById('pagination');

let options = {
  totalItems: 100,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
};
function myRenderFunction(data) {
  let markup = ``;
  data.forEach(elem => {
    markup += `<li>
    <img width = 300px style = 'margin:10px' src=https://image.tmdb.org/t/p/original${elem.poster_path} alt="${elem.original_title}" loading="lazy"></li>`;
  });

  gallery.insertAdjacentHTML('beforeend', markup);
}

function createStartList() {
  trendingMovies
    .fetchTrendingMovies()
    .then(data => {
      myRenderFunction(data);

      trendingMovies.fetchTotlaResults().then(data => {
        options.totalItems = data;
        createPagination();
      });
    })
    .catch(error => console.log(error));
}
createStartList();

function createPagination() {
  if (gallery.childElementCount > 10) {
    const pagination = new Pagination(container, options);

    pagination.on('beforeMove', function (eventData) {
      gallery.innerHTML = '';
      trendingMovies.setPage(eventData.page);
      trendingMovies
        .fetchTrendingMovies()
        .then(data => {
          onClickPagEvent(data);
        })
        .catch(error => console.log(error));
    });

    function onClickPagEvent(data) {
      myRenderFunction(data);

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
}
