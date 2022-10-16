const refs = {
  modal: document.querySelector('[data-modal-footer]'),
  closeBtn: document.querySelector('.footer-modal__closeBtn'),
  openFooterModalBtn: document.querySelector('.js-team'),
  btnScroll: document.querySelector('.scroll-btn'),
};

refs.openFooterModalBtn.addEventListener('click', e => {
  e.preventDefault();
  refs.btnScroll.style.display = 'none';
  refs.modal.classList.remove('is-hidden');
  document.addEventListener('keydown', onEscapeClick);
  document.addEventListener('click', onBackdropClick);
});
refs.closeBtn.addEventListener('click', e => {
  e.preventDefault();
  refs.modal.classList.add('is-hidden');
  document.removeEventListener('keydown', onEscapeClick);
  document.removeEventListener('click', onBackdropClick);
});
function onEscapeClick(event) {
  if (event.code === 'Escape') {
    refs.modal.classList.add('is-hidden');
    document.removeEventListener('keydown', onEscapeClick);
    document.removeEventListener('click', onBackdropClick);
  }
}
function onBackdropClick(event) {
  if (event.target === refs.modal) {
    refs.modal.classList.add('is-hidden');
    document.removeEventListener('click', onBackdropClick);
    document.removeEventListener('keydown', onEscapeClick);
  }
}
