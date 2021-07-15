const arr = ["X", "X", "O", "O", "O", "X", "X", "O", "X"];

let boardFull = !arr.includes("");

//  Winning Conditions
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]

// To find winner
// One way is to check the board if one of the players have satified one of the
// winning conditions above  by comparing the board one by values as per the conditions
const findWinner = () => {
  let xWon =
    (arr[0] === "X" && arr[1] === "X" && arr[2] === "X") ||
    (arr[3] === "X" && arr[4] === "X" && arr[5] === "X") ||
    (arr[6] === "X" && arr[7] === "X" && arr[8] === "X") ||
    (arr[0] === "X" && arr[3] === "X" && arr[6] === "X") ||
    (arr[1] === "X" && arr[4] === "X" && arr[7] === "X") ||
    (arr[2] === "X" && arr[4] === "X" && arr[8] === "X") ||
    (arr[0] === "X" && arr[4] === "X" && arr[8] === "X") ||
    (arr[2] === "X" && arr[4] === "X" && arr[6] === "X");

  let oWon =
    (arr[0] === "O" && arr[1] === "O" && arr[2] === "O") ||
    (arr[3] === "O" && arr[4] === "O" && arr[5] === "O") ||
    (arr[6] === "O" && arr[7] === "O" && arr[8] === "O") ||
    (arr[0] === "O" && arr[3] === "O" && arr[6] === "O") ||
    (arr[1] === "O" && arr[4] === "O" && arr[7] === "O") ||
    (arr[2] === "O" && arr[4] === "O" && arr[8] === "O") ||
    (arr[0] === "O" && arr[4] === "O" && arr[8] === "O") ||
    (arr[2] === "O" && arr[4] === "O" && arr[6] === "O");

  if (xWon) {
    console.log("X wins");
  } else if (oWon) {
    console.log("O wins");
  } else if (boardFull) {
    console.log("Game draw");
  }
};

findWinner();
