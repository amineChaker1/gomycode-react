import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
let initAge = 19;
function App() {
  var [age, setAge] = useState(19);

  const handleClick = () => {
    setAge(age + 1);
    console.log(age);
  };
  return (
    <>
      <h1>
        im {initAge} For every year that passes i become {age}
      </h1>
      <button onClick={handleClick}>Pass Year</button>
      <p>years passed {age - initAge} </p>
    </>
  );
}

export default App;
