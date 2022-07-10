// {/* <iframe
//   id="vimeo-player"
//   src="https://player.vimeo.com/video/236203659"
//   width="640"
//   height="360"
//   frameborder="0"
//   allowfullscreen
//   allow="autoplay; encrypted-media"
// ></iframe> */}

import Player from '@vimeo/player';

const Player = require('@vimeo/player')

const player = new Player('handstick', {
    // id: 19231868,
    // width: 640,
});

player.on('play', function() {
    console.log('played the video!');
});

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// player.on('play', function () {
//     console.log('played the video!');
// });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });



// const onPlay = function(data) {
//     console.log(data);
// };

// player.on('currentTime', onPlay);