import Icon from "./componets/icons/Icons";
// import reaact tostify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "reactstrap";

import "./App.css";

const boardArray = new Array(9).fill("");
const App = () => {
  let [isCross, setIsCross] = useState(true);
  let [winMessage, setWinMessage] = useState("");
  const playAgain = () => {
    setIsCross(true);
    setWinMessage("");
    boarArray.fill("");
  };

  const findWinner = () => {};

  return (
    <div>
      <Icon choice="circle" />
      <Button color="danger">Button </Button>
    </div>
  );
};

export default App;
