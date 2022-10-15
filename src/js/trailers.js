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

export async function createTrailerLink() {
  const id = document.querySelector('.play-trailer').id;
  const fetchResult = await getTrailers(id);
  refs.trailerBackdrop.classList.remove('is-hidden');

  if (fetchResult.results.length === 0) {
    console.log('Нет в БД трейлера к этому фильму. Нам очень жаль.');

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
      playerVars: {
        autoplay: 1,
        controls: 1,
        rel: 0,
      },
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
  refs.trailerBackdrop.innerHTML =
    '<div class="modal__trailer" id="player"></div>';
  stopVideo();
});

//refs.trailerBackdrop.addEventListener('keydown', onEscapeClickTrailer);

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {}

function stopVideo() {
  player.stopVideo();
}

function onEscapeClickTrailer(event) {
  event.stopImmediatePropagation();
  if (event.code == 'Escape') {
    refs.trailerBackdrop.classList.toggle('is-hidden');
    refs.trailerBackdrop.innerHTML = '';
    refs.trailerBackdrop.innerHTML =
      '<div class="modal__trailer" id="player"></div>';
    stopVideo();
  }
}
