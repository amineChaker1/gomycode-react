import React from "react";

const appa = () => {
  var age = 20;
  const handleClick = () => {
    age = age + 2;
    console.log(age);
  };
  return (
    <>
      <button onClick={handleClick}></button>
      {age}
    </>
  );
};

export default appa;
