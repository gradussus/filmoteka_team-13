// Федір, твори магію)
import { refs } from './js/refs';
import { renderFilmsLibrary } from './js/voprim';
import FilmsStorage from './js/watched-queue';
import { spinerClose, spinerOpen } from './js/spiner';

const storage = new FilmsStorage();

const spinerBackdrop = document.querySelector('.spiner__backdrop');
window.addEventListener('load', spinerClose);

renderFilmsLibrary(storage.getWathedFilmsList());

const queueBtn = document.querySelector('.queue-button');

queueBtn.addEventListener('click', onQueueBtnClick);

function onQueueBtnClick() {
  refs.libGallery.innerHTML = '';
  renderFilmsLibrary(storage.getQueueFilmsList());
}
