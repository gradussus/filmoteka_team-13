import { refs } from './refs';
document.addEventListener('click', spinerClose);
function spinerClose() {
  refs.spinerBackdrop.classList.add('is-hidden');
  document.removeEventListener('click', spinerClose);
}
function spinerOpen() {
  refs.spinerBackdrop.classList.remove('is-hidden');
  document.removeEventListener('click', spinerOpen);
}
export { spinerClose, spinerOpen };
