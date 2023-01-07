import React, { useState } from "react";
import Home from "./pages/Home";
let quizzs = [
  {
    id: 1,
    question: "what is the full name of HTML ?",
    options: ["HTxl", "Tsm", "yeah", "HTML"],
    answer: "HTML",
  },
  {
    id: 2,
    question: "what is the full name of CSS ?",
    options: ["HTxl", "Tsm", "yeah", "CSS"],
    answer: "CSS",
  },
  {
    id: 3,
    question: "what is the full name of CSS ?",
    options: ["JS", "Tsm", "yeah", "CSS"],
    answer: "JS",
  },
];
function App() {
  let [quizCount, setQuizCount] = useState(0);
  return (
    <>
      <Home
        quizCount={quizCount}
        setQuizCount={(value) => setQuizCount(value)}
        key={quizzs.id}
        ourQuizProp={quizzs[quizCount]}
      />
    </>
  );
}

export default App;
