export default class FilmsStorage {
  constructor() {
    this._watchedFilmsList = [];
    this._queueFilmsList = [];
    this.refreshData();
    this.refreshDataQueue();
  }
  refreshData() {
    if (localStorage.getItem('watched-films')) {
      this._watchedFilmsList = JSON.parse(
        localStorage.getItem('watched-films')
      );
    }
    //console.log('пусто');
  }

  refreshDataQueue() {
    if (localStorage.getItem('queue-films')) {
      this._queueFilmsList = JSON.parse(localStorage.getItem('queue-films'));
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
  addToQueueFilms(item) {
    if (localStorage.getItem('queue-films')) {
      this._queueFilmsList = JSON.parse(localStorage.getItem('queue-films'));
    }
    this._queueFilmsList.push(item);
    this.saveQueueFilms();
  }

  saveWatchedFilms() {
    localStorage.setItem(
      'watched-films',
      JSON.stringify(this._watchedFilmsList)
    );
  }

  saveQueueFilms() {
    localStorage.setItem('queue-films', JSON.stringify(this._queueFilmsList));
  }

  getWathedFilmsList() {
    if (!localStorage.getItem('watched-films')) {
      return;
    }
    // this._watchedFilmsList = JSON.parse(localStorage.getItem('watched-films'));
    return JSON.parse(localStorage.getItem('watched-films'));
  }
  getQueueFilmsList() {
    if (!localStorage.getItem('queue-films')) {
      return;
    }
    // this._queueFilmsList = JSON.parse(localStorage.getItem('queue-films'));
    return JSON.parse(localStorage.getItem('queue-films'));
  }
}

//const storage = new FilmsStorage();

//const addToWatchedBtn = document.querySelector('.btn__modal-add');

//addToWatchedBtn.addEventListener('click', addToLS);

//function addToLS() {
//  console.log(1);
//}
