
import Player from '@vimeo/player';
// import Vimeo = require('@vimeo/player')
// const Vimeo = require('@vimeo/player')

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    
    player.on('timeupdate', function(data) {
		console.log(data);
    });
    
const saveTime = localStorage.setItem('videoplayer-current-time', 'sdfsdf');

console.log("~ saveTime", saveTime)

// const parseTime = JSON.parse(saveTime);

// console.log("~ parseTime", parseTime)

// JSON.stringify({ name: 'mango' })




player.setCurrentTime(50).then(function(seconds) {
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