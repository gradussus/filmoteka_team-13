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
    return;
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

  myAddToQueueFilms(film) {
    if (localStorage.getItem('queue-films')) {
      this._queueFilmsList = JSON.parse(localStorage.getItem('queue-films'));
    }

    this._queueFilmsList.push(film);
    localStorage.setItem('queue-films', JSON.stringify(this._queueFilmsList));
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
  removeFromWatched(film) {
    if (!localStorage.getItem('watched-films')) {
      return;
    }
    this._watchedFilmsList = JSON.parse(localStorage.getItem('watched-films'));
    const index = this._watchedFilmsList.findIndex(
      option => option.title === film.title
    );
    this._watchedFilmsList.splice(index, 1);
    this.saveWatchedFilms();
  }
  removeFromQueue(film) {
    if (!localStorage.getItem('queue-films')) {
      return;
    }
    this._queueFilmsList = JSON.parse(localStorage.getItem('queue-films'));
    const index = this._queueFilmsList.findIndex(
      option => option.title === film.title
    );
    this._queueFilmsList.splice(index, 1);
    this.saveQueueFilms();
  }

  checkFilmInWatchedLocStor(film) {
    if (!localStorage.getItem('watched-films')) {
      return;
    }
    this._watchedFilmsList = JSON.parse(localStorage.getItem('watched-films'));
    const answer = this._watchedFilmsList.find(
      option => option.title === film.title
    );
    if (answer) {
      return true;
    }
    return false;
  }

  checkFilmInQueueLocStor(film) {
    if (!localStorage.getItem('queue-films')) {
      return;
    }
    this._queueFilmsList = JSON.parse(localStorage.getItem('queue-films'));
    const answer = this._queueFilmsList.find(
      option => option.title === film.title
    );
    if (answer) {
      return true;
    }
    return false;
  }
}

//const storage = new FilmsStorage();

//const addToWatchedBtn = document.querySelector('.btn__modal-add');

//addToWatchedBtn.addEventListener('click', addToLS);

//function addToLS() {
//  console.log(1);
//}
