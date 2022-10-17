import { refs } from './refs';
import { loadTheme } from './theme';

// функция отрисовки топ фильмов
export function renderFilmsMarkup(films) {
  films
    .map(({ poster_path, genre_ids, title, name, release_date, first_air_date, id }) => {
      const poster = poster_path
        ? `https://image.tmdb.org/t/p/w400${poster_path}`
        : `https://image.tmdb.org/t/p/w400/yEvumAoCB9Z7o9dAzjxrjcwo2FQ.jpg`;
      return `<li class="films__item" data-id=${id || `No ID`}>
                <div class="films__img">
                    <img src=https://image.tmdb.org/t/p/original${poster} alt="${
        title || name || 'No title'
      }" loading="lazy" id=${id}>
                </div>
                <div class="films__description" id=${id}>
                  <p class="films__title" id=${id}>${title || name || 'No title'}</p>
                  <div class="films__meta" id=${id}>
                    <span class="films__genres" id=${id}>${
        getGenres(genre_ids, 3) || 'No genres info'
      }</span>
                    <span class="films__sep" id=${id}>|</span>
                    <span class="films__data" id=${id}>${
        new Date(release_date).getFullYear() || new Date(first_air_date).getFullYear() ||  'No info'
      }</span>
                  </div>
                </div>
            </li>`;
    })
    .forEach(c => refs.gallery.insertAdjacentHTML('beforeend', c));
}
export async function getGenres(genre_ids, maxGenresShown) {
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
  if (genre_ids.length > maxGenresShown) {
    genresArr.splice(maxGenresShown - 1, 1, 'Other');
  }
  return genresArr.join(', ');
}

export function renderFilmsLibrary(films) {
  loadTheme();
  if (films) {
    if (!films.length) {
      setImgInLib();
      return;
    }
    films
      .map(({ poster_path, genre_ids, title, name, release_date, first_air_date, id }) => {
        const poster = poster_path
          ? `https://image.tmdb.org/t/p/w400${poster_path}`
          : `https://image.tmdb.org/t/p/w400/yEvumAoCB9Z7o9dAzjxrjcwo2FQ.jpg`;
        return `<li class="films__item" id=${id || `No ID`}>
                <div class="films__img">
                    <img src=https://image.tmdb.org/t/p/original${poster} alt="${
          title || name || 'No title'
        }" loading="lazy" id=${id}>
                </div>
                <div class="films__description" id=${id}>
                  <p class="films__title" id=${id}>${title || name || 'No title'}</p>
                  <div class="films__meta" id=${id}>
                    <span class="films__genres" id=${id}>${
          getGenres(genre_ids, 3) || 'No genres info'
        }</span>
                    <span class="films__sep" id=${id}>|</span>
                    <span class="films__data" id=${id}>${
                      new Date(release_date).getFullYear() || new Date(first_air_date).getFullYear() ||  'No info'
        }</span>
                  </div>
                </div>
            </li>`;
      })
      .forEach(c => refs.libGallery.insertAdjacentHTML('beforeend', c));
    return;
  }
  setImgInLib();
}

export function setImgInLib() {
  const imagePlug = document.getElementById('plug');
  imagePlug.classList.remove('visually-hidden');
}
export function removeImgInLib() {
  const imagePlug = document.getElementById('plug');
  imagePlug.classList.add('visually-hidden');
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
