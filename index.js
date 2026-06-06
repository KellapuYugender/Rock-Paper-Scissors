// rock - &#129704;
// paper - &#128196;
// scissor - &#9986;

const rpsArr = [
  { type: "rock", code: "&#129704;" },
  { type: "paper", code: "&#128196;" },
  { type: "scissor", code: "&#9986;" },
];

let playerOne;
let playerTwo;
let score1 = 0;
let score2 = 0;

const playerOneBtn = document.getElementById("player-one");
const playerOneEmoji = document.getElementById("emoji-one");
const playerTwoBtn = document.getElementById("player-two");
const playerTwoEmoji = document.getElementById("emoji-two");
const scoreOne = document.getElementById("point-1");
const scoreTwo = document.getElementById("point-2");
const reset = document.getElementById("reset");

//PlayerOne Button
playerOneBtn.addEventListener("click", () => {
  playerOne = rpsArr[Math.floor(Math.random() * 3)];
  playerOneEmoji.innerHTML = playerOne.code;
});

//PlayerTwo Button
playerTwoBtn.addEventListener("click", () => {
  playerTwo = rpsArr[Math.floor(Math.random() * 3)];
  playerTwoEmoji.innerHTML = playerTwo.code;
  if (playerOne && playerTwo) {
    compare(playerOne, playerTwo);
  }
});

//Reset Button
reset.addEventListener("dblclick", () => {
  score1 = 0;
  scoreOne.innerText = score1;
  score2 = 0;
  scoreTwo.innerText = score2;
  clearScreen();
});

//Compare Function
const compare = (p1, p2) => {
  //Both Are Same
  if (p1.type === p2.type) {
    score1 += 1;
    scoreOne.innerText = score1;
    score2 += 1;
    scoreTwo.innerText = score2;
    clearScreen();
    return;
  }

  switch (p1.type) {
    case "rock":
      if (p2.type === "paper") {
        score2 += 1;
        scoreTwo.innerText = score2;
        clearScreen();
      } else {
        score1 += 1;
        scoreOne.innerText = score1;
        clearScreen();
      }
      break;
    case "paper":
      if (p2.type === "scissor") {
        score2 += 1;
        scoreTwo.innerText = score2;
        clearScreen();
      } else {
        score1 += 1;
        scoreOne.innerText = score1;
        clearScreen();
      }
      break;
    case "scissor":
      if (p2.type === "rock") {
        score2 += 1;
        scoreTwo.innerText = score2;
        clearScreen();
      } else {
        score1 += 1;
        scoreOne.innerText = score1;
        clearScreen();
      }
      break;
  }
};

//ClearScreen Function
const clearScreen = () => {
  playerOne = null;
  playerTwo = null;
  setTimeout(() => {
    playerOneEmoji.innerHTML = null;
    playerTwoEmoji.innerHTML = null;
  }, 2000);
};
