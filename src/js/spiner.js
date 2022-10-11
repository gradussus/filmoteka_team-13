//document.addEventListener('click', spinerClose);
const spinerBackdrop = document.querySelector('.spiner__backdrop');
window.addEventListener('load', spinerClose);

function spinerClose() {
  spinerBackdrop.classList.add('is-hidden');
  //console.log('spinerClose');
  document.removeEventListener('click', spinerClose);
  window.removeEventListener('load', spinerClose);
}

function spinerOpen() {
  spinerBackdrop.classList.remove('is-hidden');
  //console.log('spinerOpen');
  document.removeEventListener('click', spinerOpen);
}

//logic 2
function loadData() {
  return new Promise((resolve, reject) => {
    // setTimeout не является частью решения
    // Код ниже должен быть заменен на логику подходящую для решения вашей задачи
    setTimeout(resolve, 2000);
  });
}

loadData().then(() => {
  //let spinerBackdrop = document.querySelector('.spiner__backdrop');
  spinerBackdrop.classList.add('hidden');
  //spinerBackdrop.classList.remove('visible');
});

export { spinerClose, spinerOpen };
