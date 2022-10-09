//document.addEventListener('keydown', onEscapeClick);

function onEscapeClick(event, element) {
  //console.log('esc');
  if (event.code == 'Escape') {
    element.classList.add('is-hidden');
    document.removeEventListener('keydown', onEscapeClick);
  }
}

//document.addEventListener('click', onBackdropClick);

function onBackdropClick(event, element) {
  //console.log('event');
  //console.log(event);
  if (event.target === element) {
    element.classList.add('is-hidden');
    document.removeEventListener('click', onBackdropClick);
  }
}

export { onBackdropClick, onEscapeClick };
