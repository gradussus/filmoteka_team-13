import { refs } from './refs';
import TrendingMovies from './MykolaPom';
import renderFilmsMarkup from './voprim';
import onEscapeClick from './Natali2721';
// const refs = {
//   closeModalBtnForOneMovie: document.querySelector('.modal__button'),
//   modalForOneMovie: document.querySelector('.modal'),
//   backdropOneMovie: document.querySelector('.backdrop__movie'),
// };

// refs.closeModalBtnForOneMovie.addEventListener('click', closeModal);
// // refs.openModalForOneMovie.addEventListener('click', openModal);
// // openModalForOneMovie: document.querySelector('.films__item'),
// document.addEventListener('keydown', onEscapeClick);

// function closeModal() {
//   refs.backdropOneMovie.classList.add('is-hidden');
//   // onEscapeClick();
// }

// function openModal() {
//   refs.backdropOneMovie.classList.remove('is-hidden');
// }

// const trendMoviesForLocalhost = new TrendingMovies();

// function getMoviesToLocalhost() {
//   trendMoviesForLocalhost
//     .fetchTrendingMovies()

//     .then(data => {
//       return data;
//     })
//     .then(renderOneMovieForModal);
//   // .then(stringifyMovies)
//   // .then(parseMovies);
// }
// getMoviesToLocalhost();

// function stringifyMovies(data) {
//   if (data) {
//     try {
//       for (const object of data) {
//         JSON.stringify(object);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }
// function parseMovies(data) {
//   if (data) {
//     try {
//       for (const object of data) {
//         JSON.parse(object);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

// const movieDescription = document.querySelector('.modal__wrap');

// function renderOneMovieForModal({
//   id = 894205,
//   genre_ids,
//   poster_path,
//   original_title,
//   overview,
//   popularity,
//   title,
//   vote_average,
//   vote_count,
// }) {
//   movieDescription.innerHTML = '';
//   return (movieDescription.innerHTML = ` <div class="modal__wrap">
//   <div class="image__wrap">
//     <img class="image" src="https://image.tmdb.org/t/p/original${poster_path}" alt="" />
//   </div>
//   <div class="description__wrap">
//     <h1 class="description__title">${title}</h1>
//     <table>
//       <tr class="table__wrap">
//         <td class="description__table">Vote / Votes</td>
//         <td class="description__table-result">
//           <span class="votes">${vote_average}</span> /${vote_count}
//         </td>
//       </tr>
//       <tr class="table__wrap">
//         <td class="description__table">Popularity</td>
//         <td class="description__table-result">${popularity}</td>
//       </tr>
//       <tr class="table__wrap">
//         <td class="description__table">Original Title</td>
//         <td class="description__table-result">${original_title}</td>
//       </tr>

//       <tr class="table__wrap">
//         <td class="description__table"></td>
//         <td class="description__table-result">Western</td>
//       </tr>
//     </table>
//     <p class="descrption__about">ABOUT</p>
//     <p class="description__text">
//      ${overview}
//     </p>
//     <div class="btn__wrap">
//       <button class="btn btn__modal-add">add to Watched</button>
//       <button class="btn btn__modal-queue">add to queue</button>
//     </div>
//   </div>
// </div>`);
// }
