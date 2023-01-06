import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  const alertName = (arg) => {
    alert(`Hello ${arg}`);
  };
  return (
    <div className="App">
      <Profile ourFunctinProp={alertName} />
    </div>
  );
}

export default App;
