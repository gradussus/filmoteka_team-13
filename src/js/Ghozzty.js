import Pagination from 'tui-pagination';

const gallery = document.querySelector('.gallery__set');
console.log(gallery.childElementCount);

let page = 1;

function clearFunc() {
  page = 1;
  // searchParams.set('page', page);
  pagination.reset();
}

const container = document.getElementById('pagination');

const options = {
  totalItems: 500,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
};

function createPagination() {
  const pagination = new Pagination(container, options);

  pagination.on('beforeMove', function (eventData) {
    page = eventData.page;
    console.log(page);
    onClickPagEvent();
  });

  function onClickPagEvent() {
    // clearFunc();
  }
}

if (gallery.childElementCount > 20) {
  createPagination();
}

// const inputValue = form.firstElementChild.value;

// searchParams.set('q', inputValue);

// searchParams.set('page', page);

// requestFunc()
//   .then(data => {
//     renderFunc(data);
//   })
//   .catch(error => console.log(error));
// window.scrollTo({
//   top: 0,
//   behavior: 'smooth',
// });
