const KEY_API = '0888b454b4f7be0ebcd69ceb372ced29';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day?';

export default class TrendingMovies {
  constructor() {
    this.page = 1;
  }

  fetchTrendingMovies() {
    // console.log(this);

    const URL = `${BASE_URL}api_key=${KEY_API}&page=${this.page}&language=en-US`;

    return fetch(URL)
      .then(response => response.json())
      .then(data => {
        return data.results; // із функції повертається результат фетча, тобто promise і його значення буде data.results
      });
  }
  // asdfasdf
  fetchTotalResults() {
    const URL = `${BASE_URL}api_key=${KEY_API}&page=${this.page}&language=en-US`;

    return fetch(URL)
      .then(response => response.json())
      .then(data => {
        return data.total_results; // із функції повертається кількість резалтів(для пагінаціі)
      });
  }

  getPage() {
    return this.page;
  }

  setPage(value) {
    this.page = value;
  }
}
