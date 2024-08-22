// guessing game
// guess a number from 1 to 5
// generate a number between 1 to 5
// if the guess number matches random number;then you have won
// run the games 5 TimeRanges,show the No of wins & lost

var numOfWon = 0;
var numOfLost = 0;

for (var i = 0; i <= 5; i++) {
  var guessNumber = parseInt(prompt("Enter a number from 1 to 5 :"));

  var randomNumber = Math.floor(Math.random() * 5) + 1;

  if (guessNumber == randomNumber) {
    console.log("You have Won");
    numOfWon++;
  } else {
    console.log("You have lost. Random number was" + randomNumber);
    numOfLost++;
  }
}
document.write("Total Number of Won :" + numOfWon + "<br>");
document.write("Total Number of Lost :" + numOfLost + "<br>");
