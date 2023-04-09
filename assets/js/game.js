/* Scoring function */
const defaultScoreToWin = 5;
let scoreToWin = prompt(
  "How many score it takes for players to win? minimum of 1 and maximum of 50 (empty for default)"
);

const setScoreToWin = (score) => scoreToWin = score;

if (!scoreToWin) {
  setScoreToWin(defaultScoreToWin);
}

while (scoreToWin < 1 || scoreToWin > 50) {
  scoreToWin = prompt(
    "How many score it takes for players to win? minimum of 1 and maximum of 50 (empty for default)"
  );
  if (!scoreToWin) {
    setScoreToWin(defaultScoreToWin);
  }
  setScoreToWin(scoreToWin);
}

/* Global queries */
const PLAYER_SCORE = document.querySelector("#playerScore");
const PLAYER_CHOICE = document.querySelector("#playerChoice");
let playerMove;
let playerScore = 0;

const CPU_SCORE = document.querySelector("#cpuScore");
const CPU_CHOICE = document.querySelector("#cpuChoice");
let cpuMove;
let cpuScore = 0;

const versusResult = document.querySelector(".result");

const ROCK_BUTTON = document.querySelector("#rock");
const PAPER_BUTTON = document.querySelector("#paper");
const SCISSORS_BUTTON = document.querySelector("#scissors");

const button = document.querySelectorAll(".btn");
const reset = document.querySelector("#reset");

/* Player moves */

ROCK_BUTTON.addEventListener("click", () => {
  playerMove = 1
  gameStart();
});

PAPER_BUTTON.addEventListener("click", () => {
  playerMove = 2
  gameStart();
});

SCISSORS_BUTTON.addEventListener("click", () => {
  playerMove = 3
  gameStart();
});

reset.addEventListener("click", () => {
  versusResult.textContent = "Pick a move to start the game";
  PLAYER_CHOICE.textContent = "";
  CPU_CHOICE.textContent = "";
  playerScore = 0;
  cpuScore = 0;
  PLAYER_SCORE.textContent = `Player Score: ${playerScore}`;
  CPU_SCORE.textContent = `CPU Score: ${cpuScore}`;
  enableMoves();
});

/* Game and match */

function gameStart() {
  cpuMove = Math.floor(Math.random() * 3) + 1;
  /* console.log(cpuMove); */

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

  reset.classList.remove("notVisible");
  reset.classList.add("visible");
}

function enableMoves() {
  ROCK_BUTTON.disabled = false;
  PAPER_BUTTON.disabled = false;
  SCISSORS_BUTTON.disabled = false;

  for (let btn = 0; btn <= 2; btn++) {
    button[btn].classList.add("enabled");
    button[btn].classList.remove("disabled");
  }

  reset.classList.remove("visible");
  reset.classList.add("notVisible");
}
