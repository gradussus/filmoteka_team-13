const refs = {
  modal: document.querySelector('[data-modal-footer]'),
  closeBtn: document.querySelector('.footer-modal__closeBtn'),
  openFooterModalBtn: document.querySelector('.js-team'),
};

refs.openFooterModalBtn.addEventListener('click', e => {
  e.preventDefault();
  refs.modal.classList.remove('is-hidden');
});

refs.closeBtn.addEventListener('click', e => {
  e.preventDefault();
  refs.modal.classList.add('is-hidden');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    refs.modal.classList.add('is-hidden');
  }
})

document.addEventListener('click', e => {
  if (e.target === refs.modal) {
    refs.modal.classList.add('is-hidden');
  }
})