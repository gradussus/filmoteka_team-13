import { refs } from './refs';
import TrendingMovies from './MykolaPom';
import { spinerClose, spinerOpen } from './spiner';

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
// спроба спинер підключити - логіка
const getFilms = new TrendingMovies();

async function films() {
  //console.log(1);
  spinerOpen();
  //console.log(2);

  const data = await getFilms;
  console.log(data);

  localStorage.setItem('data', JSON.stringify(data));
  //console.log(3);
  spinerClose();
}
//films();
export { onBackdropClick, onEscapeClick };
