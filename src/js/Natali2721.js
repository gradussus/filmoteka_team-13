import { refs } from './refs';

window.addEventListener('click', () =>
  refs.backdrop.classList.add('is-hidden')
);

function backdropHidden() {
  refs.backdrop.classList.add('is-hidden');
}
