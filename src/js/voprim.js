import { refs } from './refs';
import TrendingMovies from './MykolaPom';

// функция отрисовки топ фильмов
export function renderFilmsMarkup(films) {
  films
    .map(({ poster_path, title, release_date, id }) => {
      return `<li class="films__item" data-id=${id}>
                <div class="films__img">
                    <img src=https://image.tmdb.org/t/p/original${poster_path} alt="${title}" loading="lazy">
                </div>
                <div class="films__description">
                  <p class="films__title">${title}</p>
                  <div class="films__meta">
                    <span class="films__genres">Action</span>
                    <span class="films__sep">|</span>
                    <span class="films__data">${(release_date || '2023').slice(
                      0,
                      4
                    )}</span>
                  </div>
                </div>
            </li>`;
    })
    .forEach(c => refs.gallery.insertAdjacentHTML('beforeend', c));
}

// функция отрисовки жанров

export function renderGenres(renderGenresFilms) {
  let genreString;
  renderGenresFilms.map(film => {
    const filmGenres = film.genre_ids;
    let array = [];

    //console.log('filmGenres', filmGenres);
    filmGenres.map(genre => {
      const filmGenre = localStorage.getItem(genre);
      array.push(filmGenre);
      genreString = array.join(', ');
    });
  });
  //refs.galleryGenreItem.textContent = 777;
  return genreString;
}

// Функция записи жанров в локалсторедж
export async function getGenres() {
  const trendingMovies = new TrendingMovies();
  try {
    const result = await trendingMovies.fetchGenresIds();
    for (const genre of result) {
      localStorage.setItem(`${genre.id}`, `${genre.name}`);
    }
  } catch (error) {
    console.log(error);
  }
}
