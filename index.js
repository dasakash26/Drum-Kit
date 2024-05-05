// Event listener for detecting button clicks
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  // Assigning click event to each button with class "drum"
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

// Function to handle button clicks
function handleClick() {
  // Extracting the innerHTML of the clicked button
  var button = this.innerHTML;
  // Triggering sound & animation based on the button clicked
  makeSound(button);
  buttonAnimation(button);
}

// Event listener for detecting key presses
document.addEventListener("keydown", function (click) {
  // Triggering sound & animation based on the key pressed
  makeSound(click.key);
  buttonAnimation(click.key);
});

// Function to trigger the appropriate sound based on the key/button pressed
function makeSound(key) {
  switch (key) {
    // If 'w' is pressed, play tom1 sound
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    // If 'a' is pressed, play tom2 sound
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    // If 's' is pressed, play tom3 sound
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    // If 'd' is pressed, play tom4 sound
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    // If 'j' is pressed, play crash sound
    case "j":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    // If 'k' is pressed, play kick sound
    case "k":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    // If 'l' is pressed, play snare sound
    case "l":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    default:
      break;
  }
}
//button animation
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  activeButton.classList.remove("drum");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 200);
  setTimeout(function () {
    activeButton.classList.add("drum");
  }, 200);
}
