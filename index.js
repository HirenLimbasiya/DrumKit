var numberOfDrumButtons = document.querySelectorAll(".drum").length;
let volume = {
  a : 0.8,
  s : 0.8,
  d : 0.8,
  k : 0.8,
  j : 0.8,
  l : 0.8,
  w : 0.8
}

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.volume = volume.w;
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.volume = volume.a;
      tom2.play();
      break;

    case "s":
      var snare2 = new Audio('sounds/snare-2.mp3');
      snare2.volume = volume.s;
      snare2.play();
      break;

    case "d":
      var hi_hats = new Audio('sounds/Hi-Hat.mp3');
      hi_hats.volume = volume.d;
      hi_hats.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.volume = volume.j;
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.volume = volume.k;
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.volume = volume.l;
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}



function showVal(id){
  const range = document.getElementById(id).value;
  volume[id] = +range / 100;
}

function resetVolume(){
  let input = ["a" , "s" , "d" , "k" , "j" , "l" , "w"];
  for(let i=0 ;i<input.length ;i++){
    document.getElementById(input[i]).value = 80
  }
   volume = {
    a : 0.8,
    s : 0.8,
    d : 0.8,
    k : 0.8,
    j : 0.8,
    l : 0.8,
    w : 0.8
  }
  console.log(volume);
}