import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onVideoPlay = function (data) {
    let time = data.seconds;
    localStorage.setItem(STORAGE_TIME, time);
    console.log("time", time)
};

player.on('timeupdate', throttle(onVideoPlay, 1000));
player.setCurrentTime(getVideoPlayerTime() || 0);

function getVideoPlayerTime() {
    const saveTime = localStorage.getItem(STORAGE_TIME);
    
    if (saveTime) {
        return saveTime;
    }
}
