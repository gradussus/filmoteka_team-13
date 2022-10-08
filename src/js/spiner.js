import { refs } from './refs';
document.addEventListener('click', spinerClose);
function spinerClose(event) {
  refs.spinerBackdrop.classList.add('is-hidden');
  document.removeEventListener('click', spinerClose);
}
function spinerOpen() {
  refs.spinerBackdrop.classList.remove('is-hidden');
}
export { spinerClose, spinerOpen };
