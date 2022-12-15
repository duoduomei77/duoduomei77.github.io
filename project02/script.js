const doc = document;

const songsList = [
    {
        id: 'xxx-01',
        title: 'Avid',
        author: 'Mizuki',
        path: './music/01. Avid.mp3',
        bgPath: './image/1.jpg',
        time: 0
    },
    {
        id: 'xxx-02',
        title: 'Hands Up to the Sky',
        author: 'Laco',
        path: './music/02. Hands Up to the Sky.mp3',
        bgPath: './image/2.jpg',
        time: 0
    },
    {
        id: 'xxx-03',
        title: 'A／Z ＜MODv＞',
        author: 'Mizuki',
        path: './music/03. A／Z ＜MODv＞.mp3',
        bgPath: './image/3.jpg',
        time: 0
    },
    {
        id: 'xxx-04',
        title: 'Tranquility',
        author: 'Anly',
        path: './music/04. Tranquility ＜MODv＞.mp3',
        bgPath: './image/4.jpg',
        time: 0
    },
    {
        id: 'xxx-05',
        title: 'Into the Sky',
        author: 'Tielle',
        path: './music/05. Into the Sky ＜MODv＞.mp3',
        bgPath: './image/4.jpg',
        time: 0
    }
];


const audio = doc.querySelector('#audio'); 
const bgImg = doc.querySelector('#bg-img'); 
const controls = doc.querySelector('#controls'); 
const title = doc.querySelector('#title'); 
const author = doc.querySelector('#author');
const playBtn = doc.querySelector('#play'); 
const voiceBtn = doc.querySelector('#voice'); 


let curSongIndex = 1;

let isPlay = false;



function init() {
    render(songsList[curSongIndex]);
}



controls.addEventListener('click', e => {
    switch (e.target?.id) {
        case 'list': // 歌曲列表
            // TODO
            break;
        case 'voice': // 声音开关
            voiceControl();
            break;
        case 'pre': // 上一首
            preSong();
            break;
        case 'play': // 播放/暂停
            togglePlay();
            break;
        case 'next': // 下一首
            nextSong();
            break;
        case 'mode': // 播放模式
            // TODO
            break;
        default:
            break;
    }
});

// 播放 / 暂停 切换
function togglePlay() {
    if (!isPlay) {
        // 暂停 图标切换
        songPlay();
    } else {
        // 播放 图标切换
        songPause();
    }
}

// 播放
function songPlay() {
    isPlay = true;
    playBtn.classList.remove('icon-24gf-play');
    playBtn.classList.add('icon-iconstop');
    audio.play();
}

// 暂停
function songPause() {
    isPlay = false;
    playBtn.classList.remove('icon-iconstop');
    playBtn.classList.add('icon-24gf-play');
    audio.pause();
}

// 上一首
function preSong() {
    if (curSongIndex > 0) {
        curSongIndex--;
        render(songsList[curSongIndex]);
        songPlay();
    }
}

// 下一首
function nextSong() {
    if (curSongIndex < songsList.length - 1) {
        curSongIndex++;
        render(songsList[curSongIndex]);
        songPlay();
    }
}

// 声音控制
function voiceControl() {
    if (audio.volume > 0) {
        voiceOff();
    } else {
        voiceOn();
    }
}

// 声音开
function voiceOn() {
    audio.volume = 1;
    voiceBtn.classList.remove('icon-volume-mute-fill');
    voiceBtn.classList.add('icon-shengyin_shiti');
}

// 声音关
function voiceOff() {
    audio.volume = 0;
    voiceBtn.classList.remove('icon-shengyin_shiti');
    voiceBtn.classList.add('icon-volume-mute-fill');
}


// 内容渲染到页面
function render(song) {
    title.innerHTML = song.title;
    author.innerHTML = song.author;
    bgImg.src = song.bgPath; // 插图
    audio.volume = 1; // 音量 0 ~ 1
    audio.src = song.path; // 音乐资源路径
}


init();