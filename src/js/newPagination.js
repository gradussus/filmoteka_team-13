import { refs } from './refs';
import TrendingMovies from './fetchAPI';
import { renderFilmsMarkup } from './renderMarkup';
let ppp = 1;

const callback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      downloadNewFilms();
    }
  });
};
const trendingMovies = new TrendingMovies();

const observer = new IntersectionObserver(callback, {
  rootMargin: '350px',
});
observer.observe(refs.forObserver);

refs.pgg.addEventListener('click', infiniteScroll);

function downloadNewFilms() {
  console.log(trendingMovies.getPage() + 1);
  trendingMovies.setPage(trendingMovies.getPage() + 1);
  trendingMovies.fetchTrendingMovies().then(data => {
    renderFilmsMarkup(data);
  });
}

function infiniteScroll() {
  refs.container.style.display = 'none';
  refs.forObserver.style.display = 'inline';
}
