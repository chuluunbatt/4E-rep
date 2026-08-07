const boardEl = document.querySelector(".board");
const keyboardEl = document.querySelector(".keyboard");
const resetbtn = document.querySelector(".reset")

const keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Backspace", "Z", "X", "C", "V", "B", "N", "M", "Enter"],
];

const board = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const targetWord = "APPLE";

let currentRow = 0,
  currentColumn = 0;

const renderBoard = () => {
  boardEl.innerHTML = "";

  for (let i = 0; i < board.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < board[0].length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.textContent = board[i][j];

      if (i < currentRow) {
        if (targetWord[j] === board[i][j]) {
          cell.classList.add("correct");
        } else if (targetWord.includes(board[i][j])) {
          cell.classList.add("present");
        } else {
          cell.classList.add("absent");
        }
      }

      row.appendChild(cell);
    }

    boardEl.appendChild(row);
  }
};


const buildKeyboard = () => {
  for (let i = 0; i < keys.length; i++) {
    const row = document.createElement("div");
    row.classList.add("keyboard-row");

    for (let j = 0; j < keys[i].length; j++) {
      const key = document.createElement("div");
      key.classList.add("key");
      key.textContent = keys[i][j];

      key.addEventListener("click", () => {
        handleClick(keys[i][j]);
      });

      row.appendChild(key);
    }

    keyboardEl.appendChild(row);
    
  }
};

const handleClick = (key) => {
  if (key === "Backspace") {
    if (currentColumn === 0) return;

    board[currentRow][currentColumn - 1] = "";
    currentColumn--;

    renderBoard();
  } else if (key === "Enter") {
    currentRow++;
    currentColumn = 0;

    renderBoard();
  } else {
    if (currentColumn > 4) return;

    board[currentRow][currentColumn] = key;
    currentColumn++;

    renderBoard();
  }
};


renderBoard();
buildKeyboard();
