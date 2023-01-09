import React from "react";
import c from "./container.module.css";
import ourImage from "../../assets/react.svg";

const Container = () => {
  return (
    <div className={c.container}>
      index from the container component
      <img src={ourImage} alt="" />
    </div>
  );
};

export default Container;
