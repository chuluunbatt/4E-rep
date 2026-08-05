const boxes = document.querySelectorAll(".container div");
const resetBtn = document.querySelector(".reset");
const winnerContainer = document.querySelector(".winner");

let turn = "X";

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const reset = () => {
  turn = "X";

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = "";
  }
};

const checkWin = () => {
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];

    if (
      boxes[a].textContent === boxes[b].textContent &&
      boxes[b].textContent === boxes[c].textContent &&
      boxes[a].textContent !== ""
    ) {
      return boxes[a].textContent;
    }
  }
};

resetBtn.addEventListener("click", () => {
  reset();
});

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", () => {
    if (boxes[i].textContent !== "") return;

    boxes[i].textContent = turn;

    turn = turn === "X" ? "O" : "X";

    const winner = checkWin();

    if (winner !== undefined) {
      winnerContainer.textContent = `${winner} win !!!`;

      setTimeout(() => {
        winnerContainer.textContent = "";
        reset();
      }, 2000);
    }
  });
}
 