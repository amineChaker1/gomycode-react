import React, { useState } from "react";
import c from "./ansewer.module.css";
const Ansewer = ({ options, answer, quizCount, setQuizCount }) => {
  let [count, setCount] = useState(0);
  function handleClick(selectedOption) {
    if (answer == selectedOption) {
      setCount(count + 1);
      setQuizCount(quizCount + 1);
    }
  }
  return (
    <>
      <div className={c.container1}>
        {options.map((op) => (
          <button onClick={() => handleClick(op)} className={c.ansewer}>
            {op}
          </button>
        ))}
      </div>
      <p className={c.score}> Your Score is : {count} </p>
    </>
  );
};

export default Ansewer;
