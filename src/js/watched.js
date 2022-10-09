export default class FilmsStorage {
  constructor() {
    this._watchedFilmsList = [];
    this.refreshData();
  }
  refreshData() {
    if (localStorage.getItem('watched-films')) {
      this._watchedFilmsList = JSON.parse(
        localStorage.getItem('watched-films')
      );
    }
    //console.log('пусто');
  }

  addToWatchedFilms(item) {
    if (localStorage.getItem('watched-films')) {
      this._watchedFilmsList = JSON.parse(
        localStorage.getItem('watched-films')
      );
    }
    this._watchedFilmsList.push(item);
    this.saveWatchedFilms();
  }

  saveWatchedFilms() {
    localStorage.setItem(
      'watched-films',
      JSON.stringify(this._watchedFilmsList)
    );
  }

  getWathedFilmsList() {
    if (!localStorage.getItem('watched-films')) {
      return;
    }
    this._watchedFilmsList = JSON.parse(localStorage.getItem('watched-films'));
  }
}

//const storage = new FilmsStorage();

//const addToWatchedBtn = document.querySelector('.btn__modal-add');

//addToWatchedBtn.addEventListener('click', addToLS);

//function addToLS() {
//  console.log(1);
//}
