var playerPoint = parseInt(document.getElementById("playerPoint").innerHTML);
var computerPoint = parseInt(document.getElementById("computerPoint").innerHTML);

// GAME FUNCTION
function game(event) {
    event.preventDefault(); // prevents instant refresh of the page on submit

    // Player choice
    let playerChoice = null;
    const radioButtons = document.querySelectorAll('input[name="choice"]');
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        playerChoice = radioButton.id; //storing the player choice in the variable
        break;
      }
    }

    if (!playerChoice) {
        alert("Please select a choice!");
        return;
    }

    // creating random computer choice
    const choices = ["rock", "paper", "scissors"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Displaying Player and Computer Choices
    document.getElementById("player-choice").innerHTML =
      "You chose: " + playerChoice;
    document.getElementById("computer-choice").innerHTML =
      "Computer chose: " + computerChoice;

    //   GAME RULES - Rock-Paper-Scissors
    if (playerChoice == computerChoice) {
      document.getElementById("result").innerHTML = "It's a TIE!!"; //rules for TIE
    } else if (
      (playerChoice == "rock" && computerChoice == "scissors") ||
      (playerChoice == "paper" && computerChoice == "rock") ||
      (playerChoice == "scissors" && computerChoice == "paper")
    ) {
      document.getElementById("result").innerHTML = "Congrats!! YOU WON!!"; //rules for PLAYER WINS
      playerPoint += 1;
      document.getElementById("playerPoint").innerHTML = playerPoint;
    } else {
      document.getElementById("result").innerHTML = "Hehe!!.. COMPUTER WON!!"; //rules for COMPUTER WINS
      computerPoint += 1;
      document.getElementById("computerPoint").innerHTML = computerPoint;
    }
  
}

function toggleMute() {
  const audio = document.getElementById('background-music');
  const soundOn = document.querySelector('.sound-on');
  const soundOff = document.querySelector('.sound-off');
  
  audio.muted = !audio.muted;

  if (audio.muted) {
      soundOn.style.display = 'none';
      soundOff.style.display = 'inline';
  } else {
      soundOn.style.display = 'inline';
      soundOff.style.display = 'none';
  }
}

// ADDITIONAL - Letter by letter display
function animateLoadingMessage() {
  var messageElement = document.getElementById("msg");
  var message = "Are you ready?";
  var i = 0;
  setInterval(function () {
    if (i >= message.length) {
      i = 0; // Reset index when reached end of message
    }
    messageElement.textContent = message.substring(0, i + 1); // Update message
    i++;
  }, 300); // Adjust the interval (in milliseconds) to control the animation speed
}

// Call the function to start the animation
animateLoadingMessage();

function toggleRules() {
  const rulesContent = document.getElementById('rulesContent');
  const toggleButton = document.querySelector('.rules-toggle');

  if (rulesContent.style.maxHeight) {
    rulesContent.style.maxHeight = null;
    toggleButton.textContent = 'Show Rules';
  } else {
    rulesContent.style.maxHeight = rulesContent.scrollHeight + 'px';
    toggleButton.textContent = 'Hide Rules';
  }
}