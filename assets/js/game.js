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
    versusResult.textContent = "Rock can't beat a rock! It's a tie!";
  } else if (playerMove == 1 && cpuMove == 2) {
    versusResult.textContent = "Paper beats rock! You lose!";
    cpuScore++;
    PLAYER_SCORE.textContent = `Player Score: ${playerScore}`;
    CPU_SCORE.textContent = `CPU Score: ${cpuScore}`;
    checkScore();
  } else if (playerMove == 1 && cpuMove == 3) {
    versusResult.textContent = "Rock beats scissors! You win!";
    playerScore++;
    PLAYER_SCORE.textContent = `Player Score: ${playerScore}`;
    CPU_SCORE.textContent = `CPU Score: ${cpuScore}`;
    checkScore();
  } else if (playerMove == 2 && cpuMove == 2) {
    versusResult.textContent = "Paper can't beat a paper! It's a tie!";
  } else if (playerMove == 2 && cpuMove == 3) {
    versusResult.textContent = "Scissors beats paper! You lose!";
    cpuScore++;
    PLAYER_SCORE.textContent = `Player Score: ${playerScore}`;
    CPU_SCORE.textContent = `CPU Score: ${cpuScore}`;
    checkScore();
  } else if (playerMove == 2 && cpuMove == 1) {
    versusResult.textContent = "Paper beats rock! You win!";
    playerScore++;
    PLAYER_SCORE.textContent = `Player Score: ${playerScore}`;
    CPU_SCORE.textContent = `CPU Score: ${cpuScore}`;
    checkScore();
  } else if (playerMove == 3 && cpuMove == 3) {
    versusResult.textContent = "Scissors can't beat a scissors! It's a tie!";
  } else if (playerMove == 3 && cpuMove == 1) {
    versusResult.textContent = "Rock beats scissors! You lose!";
    cpuScore++;
    PLAYER_SCORE.textContent = `Player Score: ${playerScore}`;
    CPU_SCORE.textContent = `CPU Score: ${cpuScore}`;
    checkScore();
  } else if (playerMove == 3 && cpuMove == 2) {
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
  } else if (cpuScore == scoreToWin) {
    versusResult.textContent = "You lose!";
  }
}

function matchResult() {}
