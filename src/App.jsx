import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button name="Click" color="red" />
        <Button name="Click" color="green" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert type="This is error alert box" color="red" />
        <Alert type="This is warning alert box" color="orange" />
        <Alert type="This is info alert box" color="yellow" />
        <Alert type="This is success alert box" color="green" />
      </div>
    </div>
  );
}

export default App;
