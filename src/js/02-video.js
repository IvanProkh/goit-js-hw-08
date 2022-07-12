import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function (data) {
    let time = data.seconds;

    throttle(console.log("time", time), 1000)

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
