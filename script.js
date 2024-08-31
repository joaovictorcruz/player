const songName = document.getElementById('song-name');
const song = document.getElementById('audio');
const play = document.getElementById('play');

songName.innerText = 'Nights';

function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
};

play.addEventListener('click', playSong);