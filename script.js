const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');

const nights = {
    songName: 'Nights',
    artist: 'Frank Ocean',
    image: 'blond',
    file: 'Nights'
};
const sickoMode = {
    songName: 'BUTTERFLY EFFECT',
    artist: 'Travis Scott',
    image: 'sicko-mode',
    file: 'BUTTERFLY-EFFECT'
};
const telekinesis = {
    songName: 'TELEKINESIS',
    artist: 'Travis Scott',
    image: 'utopia',
    file: 'TELEKINESIS'
};

let isPlaying = false;
const playlist = [nights, sickoMode, telekinesis];
let index = 0;

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

function initializeSong() {
    const imageFormats = ['webp', 'jpeg', 'jpg']; // Lista de formatos a serem tentados
    const basePath = 'images/';
    
    // Função para tentar carregar a imagem com diferentes formatos
    let formatIndex = 0;

    function tryImageFormat() {
        if (formatIndex >= imageFormats.length) {
            console.error('Nenhum formato de imagem disponível.');
            return;
        }

        cover.src = `${basePath}${playlist[index].image}.${imageFormats[formatIndex]}`;
        
        // Se a imagem falhar ao carregar, tenta o próximo formato
        cover.onerror = () => {
            formatIndex++;
            tryImageFormat();
        };
    }
    
    tryImageFormat(); // Tenta o primeiro formato

    song.src = `songs/${playlist[index].file}.mp3`;
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].artist;
}
function previousSong(){
    if(index === 0){
    index = playlist.length - 1;
    }
    else {
        index = index - 1
        //támbem é possivel usar index -= 1//
    }
    initializeSong();
    playSong();
};

function nextSong(){
    if(index === playlist.length - 1){
    index = 0;
    }
    else {
        index = index + 1
        //támbem é possivel usar index += 1//
    }
    initializeSong();
    playSong();
};

initializeSong();

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click',nextSong);
next.addEventListener('click', previousSong);
