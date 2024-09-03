const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');

const nights = {
    songName: 'Nights',
    artist: 'Frank Ocean',
    image: 'blond',
    file: 'Frank Ocean - Nights'
}
const sickoMode = {
    songName: 'BUTTERLY EFFECT',
    artist: 'Travis Scott',
    image: 'sicko-mode',
    file: 'Travis Scott - BUTTERFLY EFFECT'
}
const telekinesis = {
    songName: 'TELEKINESIS',
    artist: 'Travis Scott',
    image: 'utopia',
    file: 'Travis Scott - TELEKINESIS'
}

let isPlaying = false;

function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
};

function pauseSong(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
};

function playPauseDecider(){
    if(isPlaying === true){
        pauseSong();
    }
    else{
        playSong();
    }
}

play.addEventListener('click', playPauseDecider);
