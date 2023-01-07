import React from "react";
import c from "./ansewer.module.css";
const Ansewer = () => {
  return (
    <>
      <div className={c.container1}>
        <div className={c.ansewer}>HTML</div>
        <div className={c.ansewer}>HTML</div>
      </div>
      <div className={c.container2}>
        <div className={c.ansewer}>HTML</div>
        <div className={c.ansewer}>HTML</div>
      </div>
      <p className={c.score}> Your Score is : 0</p>
    </>
  );
};

export default Ansewer;
