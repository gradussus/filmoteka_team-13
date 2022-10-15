import { refs } from './refs';

// const checkBox = document.querySelector('.checkbox');
// console.log(checkBox);

refs.checkBox.addEventListener('click', saveTheme);

function saveTheme() {
  localStorage.setItem('dark-theme', JSON.stringify(refs.checkBox.checked));
  if (refs.checkBox.checked) {
    refs.main.style.backgroundColor = '#272e34';
    refs.modalForOneMovie.style.backgroundColor = '#272e34';
  }
  if (!refs.checkBox.checked) {
    refs.main.style.backgroundColor = '#fff';
    refs.modalForOneMovie.style.backgroundColor = '#fff';
  }
}
export function loadTheme() {
  refs.checkBox.checked = JSON.parse(localStorage.getItem('dark-theme'));
  if (refs.checkBox.checked) {
    refs.main.style.backgroundColor = '#272e34';
    refs.modalForOneMovie.style.backgroundColor = '#272e34';
  }
  if (!refs.checkBox.checked) {
    refs.main.style.backgroundColor = '#fff';
    refs.modalForOneMovie.style.backgroundColor = '#fff';
  }
}
