import React from "react";
import c from "./button.module.css";

const Button = () => {
  const handleClick = (e) => {
    console.log(e.target);
    console.log("Button Clicked");
  };
  return (
    <>
      <div className={c.container}>
        <button className={c.btn} onClick={(e) => handleClick(e)}>
          Click Me
        </button>
      </div>
    </>
  );
};

export default Button;
