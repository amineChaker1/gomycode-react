import React from "react";
import c from "./question.module.css";
const Question = ({ question }) => {
  return (
    <>
      <div className={c.container}>
        <p className={c.qst}>{question}</p>
      </div>
    </>
  );
};

export default Question;
