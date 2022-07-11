
// const Vimeo = require('@vimeo/player')

//* РОБЕ С CDN *//
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// iframe.addEventListener('timeupdate', onListener)

// function onListener() {
//     console.log('слухаю')
// }

console.log(getVideoPlayerTime());

player.on('timeupdate', function (data) {
    // let f1000 = throttle(f, 1000);
    // throttle(data, 1000);

    let time = data.seconds;

    console.log("time", time)
    // console.log(timeupdate)

    localStorage.setItem(STORAGE_TIME, time);
});
    

function getVideoPlayerTime() {

    const saveTime = localStorage.getItem(STORAGE_TIME);
    
    if (saveTime) {
        return saveTime;
    }
}

player.setCurrentTime(getVideoPlayerTime()).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


// function f(a) {
//   console.log(a)
// }

// // f1000 передаёт вызовы f максимум раз в 1000 мс
// let f1000 = throttle(f, 1000);

// f1000(1); // показывает 1
// f1000(3); // (ограничение, 1000 мс ещё нет)
// f1000(5); // (ограничение, 1000 мс ещё нет)