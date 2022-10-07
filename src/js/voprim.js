// card film template   <li> in <div> container
// расчет на то, что на списке <ul class="films"></ul> - класс называется films

// это список ul в главной секции
const filmsListRef = document.querySelector('.films');

export default function renderFilmsMarkup(films) {
  filmsListRef.innerHTML = makeFilmsMarkup(films);
}

function makeFilmsMarkup(films) {
  return films
    .map(({ poster_path, title, release_date, genres, id }) => {
      let filmGenres = genres.map(({ name }) => name).join(', ');

      return `<li class="films__item" data-id=${id}>
                <div class="films__img">
                    <img src=https://image.tmdb.org/t/p/original${poster_path} alt="${title}" loading="lazy">
                </div>
                <div class="films__description">
                  <p class="films__title">${title}</p>
                  <div class="films__meta">
                    <p class="films__genres">${filmGenres || 'Action'}</p>
                    <p class="films__data">${(release_date || '2022').slice(
                      0,
                      4
                    )}</p>
                  </div>
                </div>
            </li>`;
    })
    .join('');
}
