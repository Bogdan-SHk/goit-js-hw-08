import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';


// Ініціалізація плеєра

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


// Відстеження події timeupdate для оновлення часу відтворення та зберігання часу відтворення у локальне сховище. 

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
}


// Реалізація відновлення відтворення зі збереженої позиції.

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));


// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
