import { refs } from './refs';
document.addEventListener('click', onSpinerBackdropClick);
function onSpinerBackdropClick(event) {
  refs.spinerBackdrop.classList.add('is-hidden');
  document.removeEventListener('click', onSpinerBackdropClick);
}
