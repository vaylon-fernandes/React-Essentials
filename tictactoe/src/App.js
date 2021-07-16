import Icon from "./componets/icons/Icons";
// import reaact tostify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "reactstrap";
import { useState } from "react";

import "./App.css";

const boardArray = new Array(9).fill("");

const App = () => {
  let [isCross, setIsCross] = useState(true);
  let [winMessage, setWinMessage] = useState("");
  const playAgain = () => {
    setIsCross(true);
    setWinMessage("");
    boardArray.fill("");
  };

  const findWinner = () => {
    if (
      boardArray[0] === boardArray[1] &&
      boardArray[0] === boardArray[2] &&
      boardArray[0] !== ""
    ) {
      setWinMessage(`${boardArray[0]} Won!`);
    } else if (
      boardArray[3] === boardArray[4] &&
      boardArray[3] === boardArray[5] &&
      boardArray[3] !== ""
    ) {
      setWinMessage(`${boardArray[3]} Won!`);
    } else if (
      boardArray[6] === boardArray[7] &&
      boardArray[6] === boardArray[8] &&
      boardArray[6] !== ""
    ) {
      setWinMessage(`${boardArray[6]} Won!`);
    } else if (
      boardArray[0] === boardArray[3] &&
      boardArray[0] === boardArray[6] &&
      boardArray[0] !== ""
    ) {
      setWinMessage(`${boardArray[0]} Won!`);
    } else if (
      boardArray[1] === boardArray[4] &&
      boardArray[1] === boardArray[7] &&
      boardArray[1] !== ""
    ) {
      setWinMessage(`${boardArray[1]} Won!`);
    } else if (
      boardArray[2] === boardArray[4] &&
      boardArray[2] === boardArray[6] &&
      boardArray[2] !== ""
    ) {
      setWinMessage(`${boardArray[2]} Won!`);
    }
  };

  const changeItem = (index) => {
    if (winMessage) {
      return toast("Game Over", { type: "success" });
    }

    if (boardArray[index]) {
      boardArray[index] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Error", { type: "error" });
    }
  };
  return (
    <div>
      <Icon choice="circle" />
      <Button color="danger">Button </Button>
    </div>
  );
};

export default App;
