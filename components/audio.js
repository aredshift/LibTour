function playAudio(audio_element){
  document.getElementById("audio_indicator").setAttribute('visible', true);
  found_elem = document.getElementById(audio_element);
  found_elem.play();
  setTimeout(function (){
    document.getElementById("audio_indicator").setAttribute('visible', false);
  }, 2000);
}
