import "./App.css";
import Button from "./Button";

function App() {
  return (
    <div className="main">
      <div className="container center">
        <h1> Hello World 👋</h1>
        <h2> Welcome To My Page 😄 </h2>
        <h3>To find out more about me and what I do click the buttons below</h3>
        <Button buttonName="Home"></Button>
        <Button buttonName="About"></Button>
        <Button buttonName="Blog"></Button>
        <Button buttonName="My Work"></Button>
      </div>
    </div>
  );
}

export default App;
