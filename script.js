const audio = document.querySelector("audio");

audio.volume = 1;

function play(){
  audio.play();
  console.log('audio playing')
}

function pause(){
  audio.pause();
  console.log('audio stopped')
}
