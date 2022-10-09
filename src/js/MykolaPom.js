const KEY_API = '0888b454b4f7be0ebcd69ceb372ced29';
const BASE_URL = 'https://api.themoviedb.org/3/';

export default class TrendingMovies {
  constructor() {
    this.page = 1;
    this.query = '';
    this.results = Number;
  }

  fetchTrendingMovies() {
    return fetch(`${BASE_URL}trending/movie/day?api_key=${KEY_API}&page=${this.page}&language=en-US`)
      .then(response => response.json())
      .then(data => {
        this.results = data.total_results;
        return data.results; // із функції повертається результат фетча, тобто promise і його значення буде data.results
      });
  }

  fetchMovie() {
    return fetch(
      `${BASE_URL}search/movie?api_key=${KEY_API}&query=${this.query}&page=${this.page}&language=en-US`
    )
      .then(response => response.json())
      .then(data => {
        this.results = data.total_results;
        return data.results;
      });
    // .then(({ results }) => {
    //   return this.fetchGenresIds().then(r => {
    //     return results.map(film => ({
    //       ...film,
    //       title: film.title ? this.getCuttedName(film.title) : '',
    //       name: film.name ? this.getCuttedName(film.name) : '',
    //       release_date: film.release_date
    //         ? film.release_date.slice(0, 4)
    //         : '',
    //       first_air_date: film.first_air_date
    //         ? film.first_air_date.slice(0, 4)
    //         : '',
    //       genre_ids: film.genre_ids
    //         ? this.getGenreName(r, film.genre_ids)
    //         : [],
    //     }));
    //   });
    // });
  }

  fetchGenresIds() {
    return fetch(`${BASE_URL}genre/movie/list?api_key=${KEY_API}&language=en-US`)
      .then(response => response.json())
      .then(data => {
        return data.genres; // повертає жанри для рендерінгу картки
      });
  }

  getGenreName(genres, values) {
    const genreArray = [];
    let genreList = '';

    values.forEach(value => {
      genres.find(genre => {
        if (value === genre.id) {
          genreArray.push(genre.name);
          if (genreArray.length > 3) {
            genreArray.splice(2, 2, langText('Other'));
            return;
          }
        }
      });
    });
    genreList = genreArray.join(', ');
    return genreList;
  }

  getCuttedName(string) {
    let cuttedName;
    cuttedName = string.length <= 35 ? string : string.slice(0, 35) + '...';
    return cuttedName;
  }


  // fetchTotalResults() {
  //   return fetch(
  //     `${BASE_URL}trending/movie/day?api_key=${KEY_API}&page=${this.page}&language=en-US`
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       return data.total_results; // із функції повертається кількість резалтів(для пагінаціі)
  //     });
  // }


  getPage() {
    return this.page;
  }
  getResults() {
    return this.results;
  }

  setPage(value) {
    this.page = value;
  }

  setQuery(newQuery) {
    this.query = newQuery;
  }
}
