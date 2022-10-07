const refs = {
  modal: document.querySelector('[data-modal-footer]'),
  closeBtn: document.querySelector('.footer-modal__closeBtn'),
  openFooterModalBtn: document.querySelector('.footer__team-btn'),
};

refs.openFooterModalBtn.addEventListener('click', e => {
  e.preventDefault();
  refs.modal.classList.remove('is-hidden');
});

refs.closeBtn.addEventListener("click", e => {
    e.preventDefault();
    refs.modal.classList.add('is-hidden');
})