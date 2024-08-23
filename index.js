var numbtns = document.querySelectorAll(".drum").length;

for (var i = 0; i < numbtns; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var butt = this.innerHTML;

    makeSound(butt);

    buttonAnimation(butt);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "n":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "m":
      var tom3 = new Audio('tom-3.mp3');
      tom3.play();
      break;

    case "b":
      var tom4 = new Audio('tom-4.mp3');
      tom4.play();
      break;

    case "u":
      var snare = new Audio('snare.mp3');
      snare.play();
      break;

    case "r":
      var crash = new Audio('crash.mp3');
      crash.play();
      break;

    case "i":
      var kick = new Audio('kick-bass.mp3');
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
