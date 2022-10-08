import { refs } from './refs';
document.addEventListener('click', onSpinerBackdropClick);
function onSpinerBackdropClick(event) {
  //console.log('event');
  //console.log(event);
  refs.spinerBackdrop.classList.add('is-hidden');
  document.removeEventListener('click', onSpinerBackdropClick);
}
