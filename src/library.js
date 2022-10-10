// Федір, твори магію)
import { refs } from './js/refs';
import { renderFilmsLibrary } from './js/voprim';
import FilmsStorage from './js/watched-queue';

const storage = new FilmsStorage();

renderFilmsLibrary(storage.getWathedFilmsList());

const queueBtn = document.querySelector('.queue-button');

queueBtn.addEventListener('click', onQueueBtnClick);

function onQueueBtnClick() {
  refs.libGallery.innerHTML = '';
  renderFilmsLibrary(storage.getQueueFilmsList());
}
