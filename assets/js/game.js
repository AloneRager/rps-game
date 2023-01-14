let scoreToWin = 5;

let PLAYER_SCORE = document.querySelector("#playerScore");
let PLAYER_CHOICE = document.querySelector("#playerChoice");
let playerMove;
let playerScore = 0;

let CPU_SCORE = document.querySelector("#cpuScore");
let CPU_CHOICE = document.querySelector("#cpuChoice");
let cpuMove;
let cpuScore = 0;

/* Player moves */

function chooseRock() {
  playerMove = 1;
  console.log(playerMove);
  gameStart();
}

function choosePaper() {
  playerMove = 2;
  console.log(playerMove);
  gameStart();
}

function chooseScissors() {
  playerMove = 3;
  console.log(playerMove);
  gameStart();
}

/* Game and match */

function gameStart() {
  cpuMove = Math.floor(Math.random() * 3) + 1;
  console.log(cpuMove);
}

function checkScore() {}

function matchResult() {}
