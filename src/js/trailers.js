import { refs } from './refs';

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

async function getTrailers(id) {
  const apiKey = `5d44c33850258a6ea050e461474b1468`;
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log('error');
  }
  //throw new Error('Ошибка! Нет трейлера к этому фильму!');
}
/*
function Error(message) {
  this.message = message;
  this.name = 'Исключение, определённое пользователем';
}*/

export async function createTrailerLink() {
  const id = document.querySelector('.play-trailer').id;
  const fetchResult = await getTrailers(id);
  refs.trailerBackdrop.classList.remove('is-hidden');

  if (fetchResult.results.length === 0) {
    console.log('Нет в БД трейлера к этому фильму. Нам очень жаль.');

    /* //если нет в БД трейлера к данному фильму
    refs.trailerBackdrop.insertAdjacentHTML(
      'afterbegin',
      '<div class=""></div>'
    );
      */
    return;
  }

  let resultArray = fetchResult.results.find(
    item => item.type === 'Trailer' && item.site === 'YouTube'
  );
  function onYouTubeIframeAPIReady(videoIdKey) {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: videoIdKey,
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  }
  onYouTubeIframeAPIReady(resultArray.key);
}

refs.trailerBackdrop.addEventListener('click', e => {
  e.currentTarget.classList.toggle('is-hidden');
  refs.trailerBackdrop.innerHTML = '';
  refs.trailerBackdrop.innerHTML = '<div id="player"></div>';
  stopVideo();
});

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {}

function stopVideo() {
  player.stopVideo();
}
