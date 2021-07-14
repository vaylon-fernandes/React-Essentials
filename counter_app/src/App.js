import { useState } from "react";
import "./app.css"; 

const App = () => {
  let [score, setScore] = useState(0);

  
  return (
    <div>
      <h1>This is my Counter Application</h1>
      <h2>Score: {score}</h2>
      <span>Min. Score:0</span>
      <span>Max. Score:25</span>

      <div className="button-container">
        <button onClick={()=>(score<25) ? setScore(score+1): (score===25) ? alert("You have reached the max limit. Either Decrement or Reset") : "" }>Increment</button>
        <button onClick={()=>(score>0 ) ? setScore(score-1) :  (score===0) ? alert("You have reached the minimum limit. Either Increment or Reset"):""}>Decrement</button>
        <button onClick={()=>{setScore(0)}}>Reset</button>
    </div>
    </div>
  );
};

export default App;
