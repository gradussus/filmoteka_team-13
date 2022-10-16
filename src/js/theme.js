import { refs } from './refs';

// const checkBox = document.querySelector('.checkbox');
// console.log(checkBox);

refs.checkBox.addEventListener('click', saveTheme);

function saveTheme() {
  setPagColor();
  localStorage.setItem('dark-theme', JSON.stringify(refs.checkBox.checked));
  if (refs.checkBox.checked) {
    refs.main.style.backgroundColor = '#272e34';
    refs.modalForOneMovie.style.backgroundColor = '#272e34';
    refs.footer.style.backgroundColor = 'rgb(89, 84, 84)';
    refs.footerText.classList.add('dark');
    refs.footerTextBtn.classList.add('dark');
    refs.footerTextP.classList.add('dark');
    refs.footerTextPP.classList.add('dark');
  }
  if (!refs.checkBox.checked) {
    refs.main.style.backgroundColor = '#fff';
    refs.modalForOneMovie.style.backgroundColor = '#fff';
    refs.footer.style.backgroundColor = 'rgb(247, 247, 247)';
    refs.footerText.classList.remove('dark');
    refs.footerTextBtn.classList.remove('dark');
    refs.footerTextP.classList.remove('dark');
    refs.footerTextPP.classList.remove('dark');
  }
}
export function loadTheme() {
  refs.checkBox.checked = JSON.parse(localStorage.getItem('dark-theme'));
  if (refs.checkBox.checked) {
    refs.main.style.backgroundColor = '#272e34';
    refs.modalForOneMovie.style.backgroundColor = '#272e34';
    refs.footer.style.backgroundColor = 'rgb(89, 84, 84)';
    refs.footerText.classList.add('dark');
    refs.footerTextBtn.classList.add('dark');
    refs.footerTextP.classList.add('dark');
    refs.footerTextPP.classList.add('dark');
  }
  if (!refs.checkBox.checked) {
    refs.main.style.backgroundColor = '#fff';
    refs.modalForOneMovie.style.backgroundColor = '#fff';
    refs.footer.style.backgroundColor = 'rgb(247, 247, 247)';
    refs.footerText.classList.remove('dark');
    refs.footerTextBtn.classList.remove('dark');
    refs.footerTextP.classList.remove('dark');
    refs.footerTextPP.classList.remove('dark');
  }
}

function setPagColor() {
  if (refs.checkBox.checked) {
    const pagBtns = document.querySelectorAll('.tui-page-btn');
    pagBtns.forEach(el => el.classList.add('tui-dark'));
  }
  if (!refs.checkBox.checked) {
    const pagBtns = document.querySelectorAll('.tui-page-btn');
    pagBtns.forEach(el => el.classList.remove('tui-dark'));
  }
}
