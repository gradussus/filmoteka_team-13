import { refs } from './refs';
document.addEventListener('click', spinerClose);
function spinerClose(event) {
  refs.spinerBackdrop.classList.add('is-hidden');
  document.removeEventListener('click', spinerClose);
}
function spinerOpen(event) {
  refs.spinerBackdrop.classList.remove('is-hidden');
  document.removeEventListener('click', spinerOpen);
}
export { spinerClose, spinerOpen };
