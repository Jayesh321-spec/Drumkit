var buttons = document.querySelectorAll(".btn");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", clickOn);
}

document.addEventListener("keypress", event => {

  playSound(event.key);

  buttonAnimation(event.key);

});

function playSound(key){
  switch (key) {
    case "a": var crash = new Audio("audio/crash.mp3");
              crash.play();
    break;

    case "s": var kick = new Audio("audio/kick-bass.mp3");
              kick.play();
    break;

    case "d": var snare = new Audio("audio/snare.mp3");
              snare.play();
    break;

    case "f": var tom1 = new Audio("audio/tom-1.mp3");
              tom1.play();
    break;

    case "j": var tom2 = new Audio("audio/tom-2.mp3");
              tom2.play();
    break;

    case "k": var tom3 = new Audio("audio/tom-3.mp3");
              tom3.play();
    break;

    case "l": var tom4 = new Audio("audio/tom-4.mp3");
              tom4.play();
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

function clickOn() {
  var buttonKey = this.innerHTML;
  playSound(buttonKey);
  buttonAnimation(buttonKey);
}
