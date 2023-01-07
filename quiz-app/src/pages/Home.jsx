import React from "react";
import Question from "../components/Question";
import Ansewer from "../components/Ansewrs";
import c from "./home.module.css";

const Home = ({
  ourQuizProp: { question, options, answer },
  quizCount,
  setQuizCount,
}) => {
  console.log(setQuizCount);
  return (
    <>
      <h1 className={c.heading}>Quiz App</h1>
      <Question question={question} />
      <Ansewer
        quizCount={quizCount}
        setQuizCount={setQuizCount}
        options={options}
        answer={answer}
      />
    </>
  );
};

export default Home;
