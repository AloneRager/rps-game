let scoreToWin = 5;

let PLAYER_SCORE = document.querySelector("#playerScore");
let PLAYER_CHOICE = document.querySelector("#playerChoice");
let playerMove;
let playerScore = 0;

let CPU_SCORE = document.querySelector("#cpuScore");
let CPU_CHOICE = document.querySelector("#cpuChoice");
let cpuMove;
let cpuScore = 0;

let versusResult = document.querySelector(".result");

let ROCK_BUTTON = document.querySelector("#rock");
let PAPER_BUTTON = document.querySelector("#paper");
let SCISSORS_BUTTON = document.querySelector("#scissors");
let button = document.querySelectorAll(".btn");

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

  // 1 is for rock
  // 2 is for paper
  // 3 is for scissors

  if (playerMove == 1 && cpuMove == 1) {
    PLAYER_CHOICE.textContent = "👊";
    CPU_CHOICE.textContent = "👊";
    versusResult.textContent = "Rock can't beat a rock! It's a tie!";
  } else if (playerMove == 1 && cpuMove == 2) {
    PLAYER_CHOICE.textContent = "👊";
    CPU_CHOICE.textContent = "✋";
    versusResult.textContent = "Paper beats rock! You lose!";
    cpuScore++;
    PLAYER_SCORE.textContent = `Player Score: ${playerScore}`;
    CPU_SCORE.textContent = `CPU Score: ${cpuScore}`;
    checkScore();
  } else if (playerMove == 1 && cpuMove == 3) {
    PLAYER_CHOICE.textContent = "👊";
    CPU_CHOICE.textContent = "✌️";
    versusResult.textContent = "Rock beats scissors! You win!";
    playerScore++;
    PLAYER_SCORE.textContent = `Player Score: ${playerScore}`;
    CPU_SCORE.textContent = `CPU Score: ${cpuScore}`;
    checkScore();
  } else if (playerMove == 2 && cpuMove == 2) {
    PLAYER_CHOICE.textContent = "✋";
    CPU_CHOICE.textContent = "✋";
    versusResult.textContent = "Paper can't beat a paper! It's a tie!";
  } else if (playerMove == 2 && cpuMove == 3) {
    PLAYER_CHOICE.textContent = "✋";
    CPU_CHOICE.textContent = "✌️";
    versusResult.textContent = "Scissors beats paper! You lose!";
    cpuScore++;
    PLAYER_SCORE.textContent = `Player Score: ${playerScore}`;
    CPU_SCORE.textContent = `CPU Score: ${cpuScore}`;
    checkScore();
  } else if (playerMove == 2 && cpuMove == 1) {
    PLAYER_CHOICE.textContent = "✋";
    CPU_CHOICE.textContent = "👊";
    versusResult.textContent = "Paper beats rock! You win!";
    playerScore++;
    PLAYER_SCORE.textContent = `Player Score: ${playerScore}`;
    CPU_SCORE.textContent = `CPU Score: ${cpuScore}`;
    checkScore();
  } else if (playerMove == 3 && cpuMove == 3) {
    PLAYER_CHOICE.textContent = "✌️";
    CPU_CHOICE.textContent = "✌️";
    versusResult.textContent = "Scissors can't beat a scissors! It's a tie!";
  } else if (playerMove == 3 && cpuMove == 1) {
    PLAYER_CHOICE.textContent = "✌️";
    CPU_CHOICE.textContent = "👊";
    versusResult.textContent = "Rock beats scissors! You lose!";
    cpuScore++;
    PLAYER_SCORE.textContent = `Player Score: ${playerScore}`;
    CPU_SCORE.textContent = `CPU Score: ${cpuScore}`;
    checkScore();
  } else if (playerMove == 3 && cpuMove == 2) {
    PLAYER_CHOICE.textContent = "✌️";
    CPU_CHOICE.textContent = "✋";
    versusResult.textContent = "Scissors beats paper! You win!";
    playerScore++;
    PLAYER_SCORE.textContent = `Player Score: ${playerScore}`;
    CPU_SCORE.textContent = `CPU Score: ${cpuScore}`;
    checkScore();
  }
}

function checkScore() {
  if (playerScore == scoreToWin) {
    versusResult.textContent = "You win!";
    disableMoves();
  } else if (cpuScore == scoreToWin) {
    versusResult.textContent = "You lose!";
    disableMoves();
  }
}

function disableMoves() {
  ROCK_BUTTON.disabled = true;
  PAPER_BUTTON.disabled = true;
  SCISSORS_BUTTON.disabled = true;

  for (let btn = 0; btn <= 2; btn++) {
    button[btn].classList.remove("enabled");
    button[btn].classList.add("disabled");
  }
}

function enableMoves() {
  ROCK_BUTTON.disabled = false;
  PAPER_BUTTON.disabled = false;
  SCISSORS_BUTTON.disabled = false;

  for (let btn = 0; btn <= 2; btn++) {
    button[btn].classList.add("enabled");
    button[btn].classList.remove("disabled");
  }
}

function resetGameState() {
  versusResult.textContent = "Pick a move to start the game";
  PLAYER_CHOICE.textContent = "";
  CPU_CHOICE.textContent = "";
  playerScore = 0;
  cpuScore = 0;
  PLAYER_SCORE.textContent = `Player Score: ${playerScore}`;
  CPU_SCORE.textContent = `CPU Score: ${cpuScore}`;
  enableMoves();
}
