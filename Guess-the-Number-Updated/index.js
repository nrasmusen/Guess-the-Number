//esablishing variables
var userInput = ""
var playerInput = "";
var playerName = "";
var scores = [];
var guesses = 0;
var compNum = 0;
var playGame = true;
var game = true;
var playerNameInput = false;
var upperBound = 2;
var scoreBoard = true;
var selectUB = true;

while (playGame) {
  //Switch so that program doesn't keep prompting for name
  if (!playerNameInput) {
    playerName = prompt("Enter your Name ");
    scores.push([playerName, "---"]);
    playerNameInput = true;
    console.clear();
  }

  //input options
  console.log("Guess the magic number from 1-Upper Bound");
  console.log("");
  console.log("1. Start Game");
  console.log("2. View / Edit Scoreboard");
  console.log("3. Quit")
  console.log("");
  console.log("Currently playing as: " + playerName);
  userInput = prompt("UserInput ");
  console.clear();

  //game 
  if (userInput == 1) {
    //selecting upper bound for game
    upperBound = prompt("Pick and upper bound greater than 2, to guess too");

    //switch so that if the number isn't greater than 2 user is prompted again
    selectUB = true;

    while (selectUB) {
      if (upperBound > 2) {
        compNum = Math.floor(Math.random() * upperBound);
        selectUB = false
      }
      else {
        console.clear();
        upperBound = prompt("please pick again incorrect input greater than 2 ");
      }
    }
    //game start
    game = true;
    while (game) {
      playerInput = prompt("Guess ");
      guesses++;

      //too low
      if (playerInput < compNum) {
        console.clear();
        console.log("Too Low")
        console.log("");
      }

      //too high
      else if (playerInput > compNum) {
        console.clear();
        console.log("Too High")
        console.log("");
      }

      //Game finish
      else if (playerInput == compNum) {
        console.clear();
        console.log("");
        console.log("You got it!");
        console.log("Guesses: " + guesses);
        game = false;

        //Adding guesses to players high score slot in array if lower than previous guesses
        for (i = 0; i < scores.length; i++) {
          if (scores[i][0] == playerName) {
            if (scores[i][1] == "---") {
              scores[i][1] = guesses;
            }
            else if (scores[i][1] > guesses) {
              scores[i][1] = guesses;
            }
          }
          guesses = 0;
        }
      }
    }
  }

  //scoreboard
  else if (userInput == 2) {
    scoreBoard = true;
    while (scoreBoard) {
      //input options
      console.log("\n");
      console.log("Scoreboard: ")
      console.log(scores)
      console.log("");
      console.log("1. Switch users");
      console.log("2. Return to Menu");
      userInput = prompt("UserInput ");

      //entering new user
      if (userInput == 1) {
        console.clear();
        playerName = prompt("Enter your Name ");
        scores.push([playerName, "---"]);
      }

      //Quit
      else if (userInput == 2) {
        console.clear();
        scoreBoard = false;
      }
    }
    console.clear();
  }

  //Quit
  else if (userInput == 3) {
    console.clear();
    console.log("\n");
    console.log("ok bye");
    playGame = false;
  }
}




