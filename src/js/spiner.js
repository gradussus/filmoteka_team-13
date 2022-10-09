document.addEventListener('click', spinerClose);

function spinerClose() {
  const spinerBackdrop = document.querySelector('.spiner__backdrop');
  spinerBackdrop.classList.add('is-hidden');
  //console.log('spinerClose');
  document.removeEventListener('click', spinerClose);
}

function spinerOpen() {
  const spinerBackdrop = document.querySelector('.spiner__backdrop');
  spinerBackdrop.classList.remove('is-hidden');
  //console.log('spinerOpen');
  document.removeEventListener('click', spinerOpen);
}

//export { spinerClose, spinerOpen };
