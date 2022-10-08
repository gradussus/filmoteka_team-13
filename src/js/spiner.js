import { refs } from './refs';
document.addEventListener('click', spinerClose);
function spinerClose() {
  refs.spinerBackdrop.classList.add('is-hidden');
  //console.log('spinerClose');
  document.removeEventListener('click', spinerClose);
}
function spinerOpen() {
  refs.spinerBackdrop.classList.remove('is-hidden');
  //console.log('spinerOpen');
  document.removeEventListener('click', spinerOpen);
}
export { spinerClose, spinerOpen };
