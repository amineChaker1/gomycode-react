import React from "react";
import Question from "../components/Question";
import Ansewer from "../components/Ansewrs";
import c from "./home.module.css";

const Home = () => {
  return (
    <>
      <h1 className={c.heading}>Quiz App</h1>
      <Question />
      <Ansewer />
    </>
  );
};

export default Home;
