import { refs } from './refs';

//window.addEventListener('click', () =>
//  refs.backdrop.classList.add('is-hidden')
//);

//function backdropHidden() {
//  refs.backdrop.classList.add('is-hidden');
//}

document.addEventListener('keydown', onEscapeClick);

function onEscapeClick(event) {
  //console.log('esc');
  if (event.code == 'Escape') {
    refs.backdrop.classList.add('is-hidden');
    document.removeEventListener('keydown', onEscapeClick);
  }
}

document.addEventListener('click', onBackdropClick);

function onBackdropClick(event) {
  //console.log('event');
  //console.log(event);
  if (event.target == refs.backdrop) {
    refs.backdrop.classList.add('is-hidden');
    document.removeEventListener('click', onBackdropClick);
  }
}

export { onBackdropClick, onEscapeClick };
