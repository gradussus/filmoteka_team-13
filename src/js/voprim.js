import { refs } from './refs';
// import TrendingMovies from './MykolaPom';

// функция отрисовки топ фильмов
export function renderFilmsMarkup(films) {
  films
    .map(({ poster_path, genre_ids, title, release_date, id }) => {
      const poster = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : `https://image.tmdb.org/t/p/original/yEvumAoCB9Z7o9dAzjxrjcwo2FQ.jpg`;
      return `<li class="films__item" data-id=${id || `No ID`}>
                <div class="films__img">
                    <img src=https://image.tmdb.org/t/p/original${poster} alt="${
        title || 'No title'
      }" loading="lazy">
                </div>
                <div class="films__description">
                  <p class="films__title">${title || 'No title'}</p>
                  <div class="films__meta">
                    <span class="films__genres">${
                      getGenres(genre_ids, 3) || 'No genres info'
                    }</span>
                    <span class="films__sep">|</span>
                    <span class="films__data">${
                      new Date(release_date).getFullYear() || 'No info'
                    }</span>
                  </div>
                </div>
            </li>`;
    })
    .forEach(c => refs.gallery.insertAdjacentHTML('beforeend', c));
}
export function getGenres(genre_ids, maxGenresShown) {
  const genres = JSON.parse(localStorage.getItem('genres'));
  const genresArr = [];

  for (
    let genreIndex = 0;
    genreIndex < maxGenresShown && genreIndex < genre_ids.length;
    genreIndex++
  ) {
    for (const value of genres) {
      if (genre_ids[genreIndex] === value.id) {
        genresArr.push(value.name);
      }
    }
  }
  if (genresArr.length === 0) {
    return 'No genres info';
  }
  if (genre_ids.length > maxGenresShown) {
    genresArr.push('Other');
  }

  return genresArr.join(', ');
}

export function renderFilmsLibrary(films) {
  films
    .map(({ poster_path, genre_ids, title, release_date, id }) => {
      const poster = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : `https://image.tmdb.org/t/p/original/yEvumAoCB9Z7o9dAzjxrjcwo2FQ.jpg`;
      return `<li class="films__item" data-id=${id || `No ID`}>
                <div class="films__img">
                    <img src=https://image.tmdb.org/t/p/original${poster} alt="${
        title || 'No title'
      }" loading="lazy">
                </div>
                <div class="films__description">
                  <p class="films__title">${title || 'No title'}</p>
                  <div class="films__meta">
                    <span class="films__genres">${
                      getGenres(genre_ids, 3) || 'No genres info'
                    }</span>
                    <span class="films__sep">|</span>
                    <span class="films__data">${
                      new Date(release_date).getFullYear() || 'No info'
                    }</span>
                  </div>
                </div>
            </li>`;
    })
    .forEach(c => refs.libGallery.insertAdjacentHTML('beforeend', c));
}

// функция отрисовки жанров

// export function renderGenres(renderGenresFilms) {
//   let genreString;
//   renderGenresFilms.map(film => {
//     const filmGenres = film.genre_ids;
//     let array = [];

//     //console.log('filmGenres', filmGenres);
//     filmGenres.map(genre => {
//       const filmGenre = localStorage.getItem(genre);
//       array.push(filmGenre);
//       genreString = array.join(', ');
//     });
//   });
//   //refs.galleryGenreItem.textContent = 777;
//   return genreString;
// }

// // Функция записи жанров в локалсторедж
// export async function getGenres() {
//   const trendingMovies = new TrendingMovies();
//   try {
//     const result = await trendingMovies.fetchGenresIds();
//     for (const genre of result) {
//       localStorage.setItem(`${genre.id}`, `${genre.name}`);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// lib-gallery-render-func
