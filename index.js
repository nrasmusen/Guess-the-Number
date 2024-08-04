var userInput = ""
var playerInput = "";
var compNum = 0;
var playGame = true;
var game = true;

while (playGame) {

  console.log("Guess the magic number from 1-100");
  console.log("");
  console.log("1. Start Game");
  console.log("2. Quit")
  console.log("");
  userInput = prompt("UserInput ");
  console.clear();

  if (userInput == 1) {
    
    compNum = Math.floor(Math.random() * 100);
    
    game = true;
    while (game) {
      playerInput = prompt("Guess ");

      if (playerInput < compNum) {
        console.clear();
        console.log("Too Low")
        console.log("");
      }
      else if (playerInput > compNum) {
        console.clear();
        console.log("Too High")
        console.log("");
      }
      else if (playerInput == compNum) {
        console.clear();
        console.log("");
        console.log("You got it!");
        game = false;
      }
    }
  }

  else if (userInput == 2) {
    console.clear();
    console.log("\n");
    console.log("ok bye");
    playGame = false;
  }
}