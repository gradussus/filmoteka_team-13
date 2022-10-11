const KEY_API = '0888b454b4f7be0ebcd69ceb372ced29';
const BASE_URL = 'https://api.themoviedb.org/3/';

export default class TrendingMovies {
  constructor() {
    this.page = 1;
    this.query = '';
    this.results = Number;
  }

  fetchTrendingMovies() {
    return fetch(
      `${BASE_URL}trending/movie/day?api_key=${KEY_API}&page=${this.page}&language=en-US`
    )
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
  }

  fetchGenres() {
    return fetch(
      `${BASE_URL}genre/movie/list?api_key=${KEY_API}&language=en-US`
    ).then(response => response.json());
  }
  
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
